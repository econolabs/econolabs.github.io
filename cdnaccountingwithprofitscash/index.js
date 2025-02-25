
const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const createContext = React.createContext;
const useContext = React.useContext;
const useReducer = React.useReducer;


const Button = ReactBootstrap.Button;
//const ButtonGroup = ReactBootstrap.ButtonGroup;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;




const CaseContext = createContext(null);
const CaseDispatchContext = createContext(null);
let initialCase = {
  user: "",
  email: "",
  avatarUrl: "",
  caseLayout: [
    { id: "showlogin", label: "Логин", status: true },
    { id: "showselectcase", label: "Выбрать кейс", status: false },
    { id: "showcreatecase", label: "Новый кейс", status: false },

  ],
  casesArray: []
};

function AccountingProvider({ children }) {
  const [mycase, dispatch] = useReducer(
    basicfirebasecrudservices.caseReducer,
    initialCase
  );

  return (
    <CaseContext.Provider value={mycase}>
      <CaseDispatchContext.Provider value={dispatch}>
        {children}
      </CaseDispatchContext.Provider>
    </CaseContext.Provider>
  );
}

function useCase() {
  return useContext(CaseContext);
}


function useCaseDispatch() {
  return useContext(CaseDispatchContext);
}

function Login({
  user, email
}) {
  const myCase = useCase();
  const dispatch = useCaseDispatch();

  console.log(myCase);

  if (!myCase?.caseLayout
    //  || !myCase?.user
    //  || !myCase?.email
    // || !myCase?.avatarUrl
    || !(myCase.caseLayout.find(item => item.id === "showlogin")?.status)
  ) { return null }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "email", value: e.currentTarget.elements.formEmail.value }
    });
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "user", value: e.currentTarget.elements.formUser.value }
    });
    saveState({
      application: {
        user: e.currentTarget.elements.formUser.value,
        email: e.currentTarget.elements.formEmail.value
      }
    });
    setTimeout(() => {
      window.location.reload()
    }, 3000)   
  };

  function quit() {
    console.log("quit");
    saveState({
      application: {
        user: null,
        email: null
      }
    })
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  function doContinue() {
      let updatedCaseLayout = myCase.caseLayout.map(obj => {
        if (obj.id === "showlogin") {
          return { id: obj.id, label: obj.label, status: false }
        }
        return obj
      });
      dispatch({
        type: "SEED_ARRAY",
        payload: { arrayName: "caseLayout", arrayItems: updatedCaseLayout }
      });
  }


  return <Container>
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={!!email && email.length > 6 ? email : "email"} required />
        <Form.Text className="text-muted">
          Пароль НЕ требуется
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUser">
        <Form.Label>ФИО Группа</Form.Label>
        <Form.Control type="text" placeholder={!!user && user.length > 6 ? user : "ФИО Группа"} required />
      </Form.Group>

      <Container>
        <Row>
          <Col>
            <Button variant="outline-secondary" size="sm" type="submit">
              Сохранить
            </Button>
          </Col>
          <Col>
            <Button variant="outline-success" size="sm" onClick={() => doContinue()} >
              Продолжить
            </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" size="sm" onClick={() => quit()} >
              Выйти
            </Button>
          </Col>
        </Row>
      </Container>




    </Form>
  </Container>
}

function AccountingNavBar() {
  const myCase = useCase();
  const dispatch = useCaseDispatch();

  if (!myCase?.caseLayout) { return null }

  function doToggle(id, status) {
    let updatedCaseLayout = myCase.caseLayout.map(obj => {
      if (obj.id === id) {
        return { id: obj.id, label: obj.label, status: status }
      }
      return obj
    });
    dispatch({
      type: "SEED_ARRAY",
      payload: { arrayName: "caseLayout", arrayItems: updatedCaseLayout }
    });
  }

  return <div className="container p-2">
    <div className="row g-3 align-items-center">
      {myCase.caseLayout.map(item => <div className="col-auto" key={item.id}>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={item.status} id={item.id} onChange={() => doToggle(item.id, !item.status)} />
          <label className="form-check-label" htmlFor={item.id}>
            {item.label}
          </label>
        </div>
      </div>)}
    </div>
  </div>
}

function SelectCase() {
  const myCase = useCase();
  const dispatch = useCaseDispatch();

  if (!myCase?.caseLayout
    || !myCase?.casesArray
    || !(myCase.caseLayout.find(item => item.id === "showselectcase")?.status)
  ) { return null }


  function doSelect(item) {
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "selectedCase", value: item }
    });

    dispatch({
      type: "SEED_ARRAY",
      payload: { arrayName: "caseArray", arrayItems: !!item?.content && Array.isArray(item.content) ? item.content : [] }
    });

  }

  return <div>
    <Container>
      {myCase.casesArray.map(item =>
        <Row key={item.id} className="p-1">
          <Col><small>{item.title}</small></Col>
          <Col>{item.date}</Col>
          <Col>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => doSelect(item)}
            >
              Открыть
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  </div>
}

function CreateCase() {
  const myCase = useCase();
  const dispatch = useCaseDispatch();

  console.log(myCase);

  if (!myCase?.caseLayout
    //  || !myCase?.user
    //  || !myCase?.email
    // || !myCase?.avatarUrl
    || !(myCase.caseLayout.find(item => item.id === "showcreatecase")?.status)
  ) { return null }


  const handleSubmit = (e) => {
    e.preventDefault();

    // let idPost = firebase.database().ref(userEmail).child("posts").push().key;
    let selectedCase = {
      //     id: idPost,
      title: e.currentTarget.elements.formTitle.value,
      theme: "Планирование и бюджетирование",
      answer: "Операции и прогнозная отчетность",
      comment: e.currentTarget.elements.formComment.value,
      type: "accountingwithprofitscash",
      content: [],
      quizString: "Операции и прогнозная отчетность",
      deleted: false,
      email: !myCase?.email,
      user: myCase?.user,
      avatarUrl: myCase?.avatarUrl,
      date: new Intl.DateTimeFormat("ru", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(new Date()), //Date().toJSON()
    }

    console.log(selectedCase);

    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "selectedCase", value: selectedCase }
    });

    dispatch({
      type: "PUSH_ITEM_TO_ARRAY",
      payload: { arrayName: "casesArray", item: selectedCase }
    });
  };



  return <Container>
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Название проекта</Form.Label>
        <Form.Control type="text" placeholder="Название" required />
        <Form.Text className="text-muted">
          Желательно раскрыть суть проекта (компанию) и указать дату или месяц текущего варианта
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Комментарий</Form.Label>
        <Form.Control type="text" placeholder="Комментарий" />
        <Form.Text className="text-muted">
          Вариант проекта (базовый, оптимистический, пессимистический, разностный)
        </Form.Text>
      </Form.Group>

      <Button variant="outline-secondary" size="sm" type="submit">
        Сохранить
      </Button>
    </Form>
  </Container>
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadState() {
  try {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    // console.log(serializedState);
    localStorage.setItem('econolabs', serializedState);
  } catch (err) {
    console.log(err);
  }
};


function useLocalStorageUserCraft() {
  const [status, setStatus] = useState({
    loading: true,
    user: false,
    avatarUrl: false,
    email: false,
    posts: []
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await loadState();
        const response = await timeout(5000);
        const crafts = await basicfirebasecrudservices.getFirebaseNode({
          url: "usersCraft/" + user.application.email.replace(/[^a-zA-Z0-9]/g, "_"),
          type: "object"
        });
        const userMeta = await basicfirebasecrudservices.getFirebaseNode({
          url: "openavatars/" +
            user.application.email.replace(/[^a-zA-Z0-9]/g, "_")
          ,
          type: "object"
        });
        console.log(userMeta?.avatarUrl);
        setStatus({
          loading: false,
          user: user.application.user,
          avatarUrl: !!userMeta?.avatarUrl ? userMeta.avatarUrl : null,
          email: user.application.email,
          crafts: crafts
        })
      }
      catch (error) {
        setStatus({
          loading: false,
          user: false,
          avatarUrl: false,
          email: false,
          crafts: false
        })
      }
    }
    fetchUser();
  }, []);

  return { ...status };
}

function AccountingWithProfitsCashLayout() {

  const { user, email, crafts, loading } = useLocalStorageUserCraft();

  if (loading) {
    return <div className="card my-5" style={{ width: "640px", height: "480px" }}>
      <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="card-img-top" alt="loading" />
      <div className="card-body">
        <div class="text-center">
          <div class="spinner-grow spinner-grow-sm text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  }
  console.log(crafts, user);

  return <AccountingProvider>
    Accounting With Profits Cash Layout

    <AccountingNavBar />
    <CreateCase />
    <Login user={user} email={email} />
    <SelectCase />
  </AccountingProvider>
}



// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    //   const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(AccountingWithProfitsCashLayout
        //   , { commentID: commentID }
      )
    );
  });


