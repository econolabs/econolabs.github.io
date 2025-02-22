
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
    { id: "showselectcase", label: "Выбрать кейс", status: true },
    { id: "showcreatecase", label: "Новый кейс", status: true },

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

function Login() {
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

    // let idPost = firebase.database().ref(userEmail).child("posts").push().key;
    let selectedCase = {
      email: e.currentTarget.elements.formEmail.value,
      user: e.currentTarget.elements.formUser.value,
    }

    console.log(selectedCase);

    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "email", value: e.currentTarget.elements.formEmail.value }
    });

    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "user", value: e.currentTarget.elements.formUser.value }
    });

    // dispatch({
    //   type: "PUSH_ITEM_TO_ARRAY",
    //   payload: { arrayName: "casesArray", item: selectedCase }
    // });
  };


  return <Container>
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={!!myCase?.email && myCase.email.length > 6 ? myCase.email : "email"} required />
        <Form.Text className="text-muted">
          Пароль НЕ требуется
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUser">
        <Form.Label>ФИО Группа</Form.Label>
        <Form.Control type="text" placeholder={!!myCase?.user && myCase.user.length > 6 ? myCase.user : "ФИО Группа"} required />
      </Form.Group>

      <Button variant="outline-secondary" size="sm" type="submit">
        Сохранить
      </Button>
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




function AccountingWithProfitsCashLayout() {

  const {data, loading, error} = basicfirebasecrudservices.useFirebaseNode(
    "usersCraft/accounting_yandex_ru/posts",
   // { type: "array" }
  )

  console.log(data);

  return <AccountingProvider>
    Accounting With Profits Cash Layout

    <AccountingNavBar />
    <CreateCase />
    <Login />
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


// const caseReducer = window.immer.produce((draft, action) => {
//   switch (action.type) {

//     case "SET_STORE_OBJECT":
//       draft[action.payload.key] = action.payload.value;
//       break

//     case "SEED_ARRAY":
//       draft[action.payload.arrayName] = action.payload.arrayItems;
//       break

//     case "PUSH_SOME_ITEMS_TO_ARRAY":
//       console.log(draft[action.payload.arrayName]);
//       console.log(action.payload.newArrayItems);
//       draft[action.payload.arrayName] = [...draft[action.payload.arrayName], ...action.payload.newArrayItems];
//       break

//     case "EMPTY_ARRAY":
//       draft[action.payload.arrayName] = [];
//       break

//     case "PUSH_ITEM_TO_ARRAY":
//       draft[action.payload.arrayName].push(action.payload.item);
//       break

//     case "DELETE_ITEM_FROM_ARRAY":
//       draft[action.payload.arrayName] = draft[action.payload.arrayName].filter(item => item.id !== action.payload.item.id);
//       break

//     case "UPDATE_ITEM_IN_ARRAY_BY_ID":
//       const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id)
//       if (index !== -1) { draft[action.payload.arrayName][index] = action.payload };
//       break

//     default:
//       break
//   }
// })
