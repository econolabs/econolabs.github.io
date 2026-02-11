  let { createRoot } = ReactDOM;
    let { useReducer, useState, createContext, useContext } = React;
    let { Form, Row, Col, Container, Button, Modal } = ReactBootstrap;
    let { getFirebaseNode } = basicfirebasecrudservices;
 

    const ApplicationContext = createContext(null);
    const ApplicationDispatchContext = createContext(null);
    const ProjectContext = createContext(null);
    const ProjectDispatchContext = createContext(null);

    function SelectDate({ setDate }) {
      async function handleChange(e) {
        let { name, value } = e.target;

        console.log(name, value);
        let d = new Date(e.target.value);

        let currentDay = new Intl.DateTimeFormat("en", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
          .format(new Date(d.getFullYear(), d.getMonth(), d.getDate()))
          .replace(/[^a-zA-Z0-9]/g, "_");
        setDate(currentDay);
      }

      return (
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formStatePeriod">
                  <Form.Label>Период</Form.Label>
                  <Form.Control
                    type="date"
                    name="selecteddate"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      );
    }

    function ExampleModal() {
      // State to control whether the modal is shown or hidden
      const [show, setShow] = useState(false);

      // Handlers to update the state
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
        <>
          {/* Button to launch the modal */}
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          {/* The Modal component, controlled by the 'show' state */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    function ShowUsers({ usersAvatars }) {

      console.log(usersAvatars);


      function openUserInModal() {
        dispatch({
          type: "SEED_STATE",
          payload: {
            object: {
              isLoading: false,
              updatedopenavatars,
              uniqueUserEmails,
            },
          },
        });
      }
      return <Container>{Object.keys(usersAvatars).map(userEmail => {
        return <Row>
          <Col>
            <img src={!!usersAvatars[userEmail]?.avatarUrl ?
              usersAvatars[userEmail]?.avatarUrl : "../freelancer.jpg"}
              alt=""
              className="avatarList"

            />
          </Col>
          <Col>{userEmail}</Col>
          <Col><Button size="sm">Change</Button></Col>

        </Row>
      })}
      </Container>;
    }

    let initialState = {
      email: null,
      user: null,
      avatarUrl: "",
      userEmail: "",
      posts: [],
      showModal: false,
      modal: {},
      isLoading: true,

    }

    let projectInitialState = {
      updatedopenavatars: {},
      uniqueUserEmails: [],
      showModal: false,
      modal: {}
    }



    function App() {
      const [state, applicationDispatch] = useReducer(
        caseReducer,
        initialState
      );

      const [projectState, projectDispatch] = useReducer(
        caseReducer,
        projectInitialState
      );


      async function setDate(currentDay) {
        console.log(currentDay);
        let res = await getFirebaseNode({
          url: "/currentDay/" + currentDay + "/posts",
          type: "array",
        });
        let uniqueUserEmails = [
          ...new Set(
            res.map((item) => item?.email.replace(/[^a-zA-Z0-9]/g, "_"))
          ),
        ];
        console.log(uniqueUserEmails);

        let updatedopenavatars = {};

        await Promise.all(
          uniqueUserEmails.map((userEmail) => {
            return getFirebaseNode({
              url: "openavatars/" + userEmail,
              type: "object",
            });
          })
        ).then((values) => {
          values.forEach(
            (result, index) =>
              (updatedopenavatars[uniqueUserEmails[index]] = result)
          );
          console.log(updatedopenavatars);
        });

        projectDispatch({
          type: "SEED_STATE",
          payload: {
            object: {
              isLoading: false,
              updatedopenavatars,
              uniqueUserEmails,
            },
          },
        });
        //  console.log(basicfirebasecrudservices.loadState())
      }

      console.log(state);

      return (
        <ApplicationContext.Provider value={state}>
          <ApplicationDispatchContext.Provider value={applicationDispatch}>
            <ProjectContext.Provider value={projectState}>
              <ProjectDispatchContext.Provider value={projectDispatch}>
                <Container>
                  <SelectDate setDate={setDate} />
                  <ShowUsers usersAvatars={projectState?.updatedopenavatars} />
                  <ExampleModal />
                </Container>
              </ProjectDispatchContext.Provider>
            </ProjectContext.Provider>
          </ApplicationDispatchContext.Provider>
        </ApplicationContext.Provider>


      );
    }


    const caseReducer = basicfirebasecrudservices.produce((draft, action) => {
      switch (action.type) {
        case "SEED_STATE":
          Object.keys(action.payload.object).map((key) => {
            draft[key] = action.payload.object[key];
          });
          break;

        default:
          break;
      }
    });

    createRoot(root).render(<App />);