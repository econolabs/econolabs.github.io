let { createRoot } = ReactDOM;
let { useReducer, useState, createContext, useContext } = React;
let { Form, Row, Col, Container, Button, Modal, Card, Badge, Pagination } = ReactBootstrap;
let { getFirebaseNode, updateFirebaseNode } = basicfirebasecrudauthservices;

const ApplicationContext = createContext(null);
const ApplicationDispatchContext = createContext(null);

const useApplicationState = () => useContext(ApplicationContext);
const useApplicationDispatchState = () => useContext(ApplicationDispatchContext);

async function fetchUsersByDate(currentDay) {
  let postsResponse = [];
  let userEmals = [];
  let casesResponse = [];
  let openavatars = {};

  try {
    postsResponse = await getFirebaseNode({
      url: "/currentDay/" + currentDay + "/posts",
      type: "array",
    });

    userEmals = [...new Set(postsResponse.map((item) => item.email))].map(
      (email) => {
        return email.replace(/[^a-zA-Z0-9]/g, "_");
      },
    );

    casesResponse = await getFirebaseNode({
      url: "/currentDay/" + currentDay + "/cases",
      type: "array",
    });
    openavatars = await getFirebaseNode({
      url: "openavatars/",
      type: "object",
    });

    console.log(userEmals);
    let updates = {}
    userEmals.map(useremail => {
      // if (openavatars?.[useremail]) {
      //   console.log("Found " + useremail)
      // } else {
        let user = postsResponse.filter(item => item.email.replace(/[^a-zA-Z0-9]/g, "_") === useremail)[0].user;
        console.log(user)
        updates['openavatars/' + useremail] = {
          id: useremail,
          avatarUrl: "../freelancer.jpg",
          color: "#adb5bd",
          user: user
        };
        openavatars[useremail] = {
          id: useremail,
          avatarUrl: "../freelancer.jpg",
          color: "#adb5bd",
          user: user
        }

      //}
    })

    console.log(updates);

    if (Object.keys(updates).length > 0) {
      try {
        updateFirebaseNode(updates)
          .then(() => console.log("Updated " + Object.keys(updates).length + " nodes"))
      }
      catch (err) { console.log(err); return { error: err } }
    }

    return { postsResponse, casesResponse, openavatars, userEmals };


  } catch (err) {
    console.log(err);
    return { postsResponse, casesResponse, openavatars };
  }
}


function caseReducer(state = {}, action) {
  switch (action.type) {

       case "SEED_STATE": {
      return basicfirebasecrudauthservices.produce(state, (draft) => {
        Object.keys(action.payload.objects).map((key) => {
          draft[key] = action.payload.objects[key];
        });
      });
    }

    default:
      return state;
  }
}

function SelectDate() {
  const dispatch = useApplicationDispatchState();

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
       fetchUsersByDate(currentDay).then(res =>
      dispatch({
        type: "SEED_STATE",
        payload: {
          objects: { ...res, isLoading: false },
        },
      }))
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






function UserDetails({ user }) {

  async function handleChange(e) {
    let { name, value } = e.target;
    console.log(name, value);
  }

  return <Card className="shadow-sm">
    <Card.Header className="bg-secondary text-white d-flex justify-content-between align-items-center py-3">
      <h6 className="mb-0">
        <i className="fas fa-exchange-alt mr-2"></i>
        User
      </h6>
      <Badge pill variant="light">
        {user?.user}
      </Badge>
    </Card.Header>
    <Card.Body>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formStatePeriod">
                <Form.Label>Аватар</Form.Label>
                <img loading="lazy" src={user?.avatarUrl} alt=""
                  style="
                width: 40px;
                height: 40px;
                border-radius: 50%;
                filter: grayscale(100%);
                object-fit: cover;
              " />
                <Form.Control
                  type="url"
                  name="selectedavatar"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </Card.Body>
  </Card>
}

function UsersPagination() {
  const dispatch = useApplicationDispatchState();
  const { userEmals, selectedIndex } = useApplicationState();


  function onTestSelect(index) {
    dispatch({
      type: "SEED_STATE",
      payload: {
        objects: { selectedIndex: index },
      },
    })
  }

  // Вспомогательная функция для рендеринга элементов пагинации
const renderPaginationItems = (userEmals = [], selectedIndex, onTestSelect) => {
  const totalTests = userEmals.length;
  const maxVisiblePages = 5;
  const items = [];

  if (totalTests <= maxVisiblePages) {
    // Показываем все страницы
    for (let i = 0; i < totalTests; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={selectedIndex === i}
          onClick={() => onTestSelect(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
  } else {
    // Умная группировка для большого количества страниц
    if (selectedIndex < 3) {
      // Начало
      for (let i = 0; i < 4; i++) {
        items.push(
          <Pagination.Item
            key={i}
            active={selectedIndex === i}
            onClick={() => onTestSelect(i)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
      items.push(<Pagination.Ellipsis key="ellipsis-end" disabled />);
      items.push(
        <Pagination.Item
          key={totalTests - 1}
          active={selectedIndex === totalTests - 1}
          onClick={() => onTestSelect(totalTests - 1)}
        >
          {totalTests}
        </Pagination.Item>
      );
    } else if (selectedIndex > totalTests - 4) {
      // Конец
      items.push(
        <Pagination.Item
          key={0}
          active={selectedIndex === 0}
          onClick={() => onTestSelect(0)}
        >
          1
        </Pagination.Item>
      );
      items.push(<Pagination.Ellipsis key="ellipsis-start" disabled />);
      for (let i = totalTests - 4; i < totalTests; i++) {
        items.push(
          <Pagination.Item
            key={i}
            active={selectedIndex === i}
            onClick={() => onTestSelect(i)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
    } else {
      // Середина
      items.push(
        <Pagination.Item
          key={0}
          active={false}
          onClick={() => onTestSelect(0)}
        >
          1
        </Pagination.Item>
      );
      items.push(<Pagination.Ellipsis key="ellipsis-start" disabled />);
      for (let i = selectedIndex - 1; i <= selectedIndex + 1; i++) {
        items.push(
          <Pagination.Item
            key={i}
            active={selectedIndex === i}
            onClick={() => onTestSelect(i)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
      items.push(<Pagination.Ellipsis key="ellipsis-end" disabled />);
      items.push(
        <Pagination.Item
          key={totalTests - 1}
          active={false}
          onClick={() => onTestSelect(totalTests - 1)}
        >
          {totalTests}
        </Pagination.Item>
      );
    }
  }

  return items;
};

return null
}



function Users() {
  const { userEmals, selectedIndex } = useApplicationState();

return <Container>
  <Row>
    <Col>
      <Card className="shadow-sm">
        <Card.Header className="bg-secondary text-white d-flex justify-content-between align-items-center py-3">
          <h6 className="mb-0">
            <i className="fas fa-exchange-alt mr-2"></i>
            Навигация
          </h6>
          <Badge pill variant="light">
            {selectedIndex + 1}/{userEmals.length}
          </Badge>
        </Card.Header>
        <Card.Body>
          <UsersPagination />

        </Card.Body>
      </Card>
    </Col>
    <Col>
      <UserDetails  />
    </Col>
  </Row>
</Container>
}


let initialState = {
  isLoading: true,
  userEmals: []
}

const ApplicationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(caseReducer, initialState);
  return (
    <ApplicationContext.Provider value={state}>
      <ApplicationDispatchContext.Provider value={dispatch}>
        {children}
      </ApplicationDispatchContext.Provider>
    </ApplicationContext.Provider>
  );
};


function App() {
    return (
    <ApplicationProvider>
     
      <SelectDate  />
      {/* <Users /> */}
    </ApplicationProvider>
  );
}



createRoot(root).render(<App />);



// let initialState = {
//     loading: true,
//     email: null,
//     user: null,
//     avatarUrl: "",
//     userEmail: "",
//     posts: [],
//     showModal: false,
//     modal: {}
// }



// const [projectState, projectDispatch] = useReducer(
//     caseReducer,
//     projectInitialState
// );

// const [spreadsheetState, spreadsheetDispatch] = useReducer(
//     caseReducer,
//     spreadsheetInitialState
// );

// useEffect(() => {
//     async function getUser() {
//         let localStorageData = basicfirebasecrudauthservices.loadState('econolabs');

//         const paramsString = window.location.search;
//         const searchParams = new URLSearchParams(paramsString);
//         console.log(searchParams.get("openquizid"));

//         let openquizid;

//         if (!!searchParams.get("openquizid")) {
//             openquizid = searchParams.get("openquizid")
//         } else {
//             openquizid = document.getElementById("simpleaccounting").dataset.openquizid
//         }

//         console.log(openquizid);

//         let onlineopenquiz = await basicfirebasecrudauthservices.getFirebaseNode({
//             url: "openquiz/" + openquizid,
//             type: "object",
//         });

// let updates = {};
// updates["/openquiz/propertyplantandequipment03"] = {
//     id: "propertyplantandequipment03",
//     title: "Учет основных средств 3",
//     theme: "БФУ",
//     answer: "Операции и отчетность",
//     comment: "Операции и отчетность",
//     type: "accountingwithprofitscash",
//     tasks: [{
//         id: 0,
//         text: `В соответствии с решением руководства организации объект ОС первоначальной стоимостью 100 000 руб., подлежит ликвидации в связи сморальным износом.<br>
//         Срок полезного использования данного объекта ОС –5 лет. Объект находился в эксплуатации в течение 3-х лет, сумма начис-ленной амортизации за это время составляет 60 000 руб.<br>
//         После разборки ОС на склад были оприходованы материалы стоимостью 20 000 руб.<br>
//         Заработная плата рабочих, занятых в ликвидации ОС составляет10 000 руб., отчисления по социальному страхованию и обеспечению со-ставили 2 600 руб.<br>
//         Указать бухгалтерские записи.`
//     }],

// };
// let res = basicfirebasecrudauthservices.updateFirebaseNode(updates);
// console.log(res);

//         let openquiz = !!onlineopenquiz && Object.keys(onlineopenquiz).length > 0 ?
//             onlineopenquiz : { ...defaultProjectData };

//         if (!!localStorageData?.application?.email) {
//             let userEmail = localStorageData?.application?.email.replace(
//                 /[^a-zA-Z0-9]/g,
//                 "_"
//             );

//             let openavatar = await basicfirebasecrudauthservices.getFirebaseNode({
//                 url: "openavatars/" + userEmail,
//                 type: "object",
//             });

//             let userprojectpostcontent = await basicfirebasecrudauthservices.getFirebaseNode({
//                 url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/content",
//                 type: "array",
//             });

//             userprojectpostcontent = userprojectpostcontent.map(item => {
//                 if (!item?.id) {
//                     return {
//                         ...item,
//                         id: basicfirebasecrudauthservices.getFirebaseNodeKey("/usersCraft/" + userEmail + "/posts/" + openquizid + "/content")
//                     }
//                 }
//                 return item
//             })

//             let userprojectspreadsheet = await basicfirebasecrudauthservices.getFirebaseNode({
//                 url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/mediaItems/1/content",
//                 type: "object",
//             });

//             userprojectspreadsheet = !!userprojectspreadsheet ? userprojectspreadsheet : {}

//             let posts = await basicfirebasecrudauthservices.getFirebaseNode({
//                 url: "/usersCraft/" + userEmail + "/posts/",
//                 type: "array",
//             });
//             console.log(posts.filter(item => item.type === "accountingwithprofitscash"))

//             return {
//                 email: localStorageData?.application?.email,
//                 user: localStorageData?.application?.user,
//                 avatarUrl: !!openavatar?.avatarUrl
//                     ? openavatar.avatarUrl
//                     : !!localStorageData?.application?.avatarUrl
//                         ? localStorageData.application.avatarUrl
//                         : "../freelancer.jpg",
//                 userEmail: userEmail,
//                 openquiz: openquiz,
//                 userprojectpostcontent: userprojectpostcontent,
//                 userprojectspreadsheet: userprojectspreadsheet
//             }
//         } else {
//             let identity = basicfirebasecrudauthservices.generateUser();
//             basicfirebasecrudauthservices.saveState({
//                 application: {
//                     email: identity.email,
//                     user: identity.user,
//                     avatarUrl: "../freelancer.jpg",
//                     userEmail: identity.userEmail
//                 }
//             });
//             return {
//                 email: identity.email,
//                 user: identity.user,
//                 avatarUrl: "../freelancer.jpg",
//                 userEmail: identity.userEmail,
//                 openquiz: openquiz,
//                 userprojectpostcontent: [],
//                 userprojectspreadsheet: userprojectspreadsheet
//             }
//         }
//     }

//     getUser().then((res) => {
//         let {
//             userEmail,
//             email,
//             user,
//             avatarUrl,
//         } = res;

//         applicationDispatch({
//             type: "SEED_STATE",
//             payload: {
//                 objects: {
//                     loading: false,
//                     email: email,
//                     user: user,
//                     avatarUrl: avatarUrl,
//                     userEmail: userEmail
//                 },
//             },
//         });

//         projectDispatch({
//             type: "SEED_STATE",
//             payload: {
//                 objects: {
//                     ...projectInitialState,
//                     ...res.openquiz,
//                     content: res.userprojectpostcontent,
//                     quizString: res.userprojectspreadsheet
//                     //   triggerRerender: "loaded"
//                 },
//             },
//         });

//         let userprojectspreadsheetArray = basicfirebasecrudauthservices.createProtoArray(res.userprojectspreadsheet, 6, 6);

//         spreadsheetDispatch({
//             type: "SEED_STATE",
//             payload: {
//                 objects: {
//                     spreadsheetContent: res.userprojectspreadsheet,
//                     protoData: userprojectspreadsheetArray,
//                     data: basicfirebasecrudauthservices.createNewDraft(userprojectspreadsheetArray),
//                     triggerRerender: "loaded"
//                 },
//             },
//         });

//     })
// }, []);

// if (state.loading) { return null }

//         fetchUserName: builder.query({
//             async queryFn(userEmail) {
//                 try {
//                     let list = await getFirebaseNode({ url: "usersCraft/" + userEmail + "/posts", type: "array" });
//                     return { data: list.map(item => item.user)[0] }
//                 }
//                 catch (err) { console.log(err); return { error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "Name", id }]
//         }),

//         fetchUserAvatar: builder.query({
//             async queryFn(userEmail) {
//                 try {
//                     let openAvatarsResponse = await getFirebaseNode({
//                         url: "/openavatars/" + userEmail,
//                         type: "object"
//                     });

//                     return { data: openAvatarsResponse }
//                 }
//                 catch (err) { console.log(err); return { data: [], error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "Avatar", id }]
//         }),

//         fetchUsersByDate: builder.query({
//             async queryFn(currentDay) {
//                 try {
//                     let postsResponse = await getFirebaseNode({
//                         url: "/currentDay/" + currentDay + "/posts",
//                         type: "array"
//                     });
//                     const casesResponse = await getFirebaseNode({
//                         url: "/currentDay/" + currentDay + "/cases",
//                         type: "array"
//                     });
//                     return { data: [...postsResponse, ...casesResponse] }
//                 }
//                 catch (err) { console.log(err); return { data: [], error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "QuizesCases", id }]
//         }),

//         addOpenAvatar: builder.mutation({
//             async queryFn(post) {
//                 try { await updateFirebaseNode({ updates: { ["openavatars/" + post.id]: post } }); }
//                 catch (err) {
//                     console.log(err);
//                     return { error: err }
//                 }
//                 return { data: post }
//             },
//             invalidatesTags: ["OpenAvatar"]
//         }),

//         fetchUnsplashImagesFromCollection: builder.query({
//             async queryFn({ collectionId = "aH98dheb50M", perPage = 30 }) {
//                 try {
//                     const imagesResp = await getPicturesFromCollection({ collectionId, perPage });
//                     let images = imagesResp
//                         .map(item => { return { ...item, orientation: "landscape" } });

//                     return {
//                         data: images
//                     }
//                 }
//                 catch (err) {
//                     console.log(err);
//                     return { error: err }
//                 }
//             },
//             providesTags: ["UnsplashImageFromCollection"]
//         }),

//         fetchUsersByDate: builder.query({
//             async queryFn(currentDay) {
//                 try {
//                     let postsResponse = await getFirebaseNode({
//                         url: "/currentDay/" + currentDay + "/posts",
//                         type: "array"
//                     });
//                     const casesResponse = await getFirebaseNode({
//                         url: "/currentDay/" + currentDay + "/cases",
//                         type: "array"
//                     });
//                     return { data: [...postsResponse, ...casesResponse] }
//                 }
//                 catch (err) { console.log(err); return { data: [], error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "QuizesCases", id }]
//         }),

//         updateUserAvatarGroup: builder.mutation({
//             async queryFn({ base = "openavatars", updates = {
//                 temp_google_com: {
//                     id: "temp_google_com",
//                     avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODU2NzR8MHwxfGNvbGxlY3Rpb258MjB8YUg5OGRoZWI1ME18fHx8fDJ8fDE3MDAxMzYxMjN8&ixlib=rb-4.0.3&q=80&w=200",
//                     user: "Ha Ha"
//                 }
//             }
//             }) {
//                 let fireUpdates = {};
//                 Object.keys(updates).forEach(objKey => {
//                     fireUpdates[base + "/" + objKey] = updates[objKey];
//                 });
//                 //    console.log(fireUpdates);
//                 try { await updateFirebaseNode(fireUpdates); }
//                 catch (err) { console.log(err); return { error: err } }
//                 return { data: fireUpdates }
//             },
//             invalidatesTags: ["UserAvatarsAndGroup"]
//         }),

//     }),
// });

//     async function doSaveAvatar(e) {

//     let userEmail = document.getElementById("selectStudent").value;
//     let avatarUrl = e.target.id;
//     let group = document.getElementById("opengroup").value;
//     let user = document.getElementById("name").value;

//     let updates = {
//         ["openavatars/" + userEmail]: {
//             user,
//             id: userEmail,
//             group,
//             avatarUrl
//         },
//         ["opengroups/" + group]:
//         {
//             id: userEmail,
//             email: userEmail,
//             user,
//             avatarUrl
//         }
//     }

//     console.log(updates);

//     store.dispatch(api.endpoints.updateUserAvatarGroup.initiate({
//         base: "/",
//         updates: updates
//     }))
//         .then(() => console.log("Saved"));

//     console.log(document.getElementById("selectStudent").value);
//     console.log(document.getElementById("name").value);
//     console.log(document.getElementById("opengroup").value);
//     console.log(e.target.id);
//     let res = await timeout(2000);
//     console.log("Avatar Saved " + res)
// }
