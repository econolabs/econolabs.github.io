'use strict';

//https://daily.dev/blog/form-on-react-best-practices
//https://www.testkarts.com/blog/post/implementing-pagination-in-react-js-using-react-bootstrap-without-using-library
//https://www.codingforentrepreneurs.com/blog/create-a-standalone-react-app



const Button = ReactBootstrap.Button;
const ButtonGroup = ReactBootstrap.ButtonGroup;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Pagination = ReactBootstrap.Pagination;

const Alert = ReactBootstrap.Alert;
const Modal = ReactBootstrap.Modal;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;


const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const createContext = React.createContext;
const useContext = React.useContext;
const useReducer = React.useReducer;


function createProtoArray(protoDataObject = {}, maxRow = 12, maxColumn = 2) {
  Object.keys(protoDataObject).map((objKey) => {
    const [col, ...row] = objKey;
    let currentColIndex = window.alphabet.findIndex(item => item === col);
    if (currentColIndex > maxColumn) { maxColumn = currentColIndex };
    if (parseInt(row) > maxRow) { maxRow = parseInt(row) }
  });
  //  console.log(maxColumn, maxRow);

  var array = new Array(maxRow);
  for (var i = 0; i < array.length; i++) {
    array[i] = Array(maxColumn + 1).fill('');
  }

  Object.keys(protoDataObject).map((objKey) => {
    const [col, ...row] = objKey;
    let colArrayIndex = window.alphabet.findIndex((item) => item === col);
    let rowArrayIndex = parseInt(row) - 1;
    array[rowArrayIndex][colArrayIndex] = protoDataObject[objKey];
  });
  return array;
}



function createNewDraft(data) {
  const newdata = immer.produce(data, draft => {
    let oneMoreLoop = true;
    while (oneMoreLoop) {
      oneMoreLoop = false;
      for (let row = 0; row < draft.length; row++) {
        for (let ix = 0; ix < draft[row].length; ix++) {
          let cellValue = draft[row][ix];
          //    console.log(cellValue);
          if (
            (typeof cellValue === "string" || cellValue instanceof String) &&
            cellValue.toString().includes("=")
          ) {

            let mapObj = {
              СТЕПЕНЬ: "POWER",
              ЧПС: "NPV",
              ВСД: "IRR",
              МВСД: "MIRR",
              СУММ: "SUM",
              СРЗНАЧ: "AVERAGE",
              ОКРУГЛ: "ROUND",
              СТАНДОТКЛОН: "STDEV"
            };
            let re = new RegExp(Object.keys(mapObj).join("|"), "gi");
            cellValue = cellValue.replace(re, function (matched) {
              return mapObj[matched];
            });

            let result = calculateFormula(draft, cellValue.slice(1));
            //       formulas.push({ formula: cellValue, result: result })
            if (result.later) {
              draft[row][ix] = cellValue;
              oneMoreLoop = true;
            } else {
              draft[row][ix] = result.res.result;
            }
          } else draft[row][ix] = cellValue;
        }
      }
    }
    //    draft["id1"].done = true
  })
  // console.log(newdata);
  return newdata;
}


function calculateFormula(data, formula) {
  //    let parser = new FormulaParser();
  let parser = new formulaParser.Parser();

  let dependencies = [];

  //     console.log(data, formula);

  parser.on("callCellValue", (cellCoord, done) => {
    const x = cellCoord.column.index + 1;
    const y = cellCoord.row.index + 1;

    dependencies.push({ x: x, y: y });

    // if (data[y - 1][x - 1].toString().slice(0, 1) === "=") {
    //   return done(parseFloat(calculateFormula(data[y - 1][x - 1].toString().slice(1))));
    // }

    if (!data[y - 1] || !data[y - 1][x - 1]) {
      return done("");
    }
    //  console.log(y - 1, x - 1);
    done(data[y - 1][x - 1]);
  });

  parser.on("callRangeValue", (startCellCoord, endCellCoord, done) => {
    var fragment = [];

    for (
      var row = startCellCoord.row.index;
      row <= endCellCoord.row.index;
      row++
    ) {
      var rowData = data[row];
      var colFragment = [];

      for (
        var col = startCellCoord.column.index;
        col <= endCellCoord.column.index;
        col++
      ) {
        var value = rowData[col];

        dependencies.push({ x: col, y: row });

        colFragment.push(value);
      }
      fragment.push(colFragment);
    }

    // console.log(fragment);

    if (fragment) {
      done(fragment);
    }
  });

  let resultObj = parser.parse(formula);

  // console.log('formula: ' + formula);
  let later = false;
  let dependendentOn = [];
  dependencies.forEach(item => {
    let cellValue = null;
    try {
      cellValue = data[item.y - 1][item.x - 1];
      //   console.log(cellValue);
      dependendentOn.push(cellValue);
    } catch {
      //      console.log(formula);
    }

    if (
      (typeof cellValue === "string" || cellValue instanceof String) &&
      cellValue.toString().includes("=")
    ) {
      later = true;
    }
  });
  // console.log('dependendentOn: ' + dependendentOn);
  // console.log('---------');

  return {
    res: resultObj,
    dependencies: dependencies,
    later: later,
    dependendentOn: dependendentOn
  };
}




const CaseContext = createContext(null);
const CaseDispatchContext = createContext(null);

//https://dev.to/franciscomendes10866/use-context-api-and-immer-to-manage-the-state-of-your-react-app-1hem
let initialCase = {
  email: "johndoe@yandex.ru",
  user: "DmGl",
  avatarUrl: "../freelancer.jpg",
  formulaValue: 0,
  formulaRowIndex: 0,
  formulaColumnIndex: 0,
  data: createNewDraft(createProtoArray({}, 12, 2)),
  protoData: createProtoArray({}, 12, 2),
  expandView: false,
  posts: [],
  selectedPage: null,
  formulaIsInFocus: false
};




function CaseProvider({ children }) {
  const [mycase, dispatch] = useReducer(
    window.caseReducer,
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
//const formulaValue = useSelector(selectSpreadsheetFormulaValue);

function useCaseDispatch() {
  return useContext(CaseDispatchContext);
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};

function LoginLogout() {
  const [show, setShow] = useState(false);
  // const [user, setUser] = useState(false);
  // const [email, setEmail] = useState(false);
  const mycase = useCase();
  const dispatch = useCaseDispatch();

  useEffect(()=>{
    let localstrg = !!loadState() && !!loadState()?.application ? { ...loadState().application}: {} 
    console.log(localstrg);
    // dispatch({
    //   type: "SET_STORE_OBJECT",
    //   payload: { key: "email", value: localstrg?.email }
    // });
    // dispatch({
    //   type: "SET_STORE_OBJECT",
    //   payload: { key: "user", value: localstrg?.user }
    // });
  },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    handleClose();
  };

  let user = !!mycase && !!mycase?.user && mycase.user.length > 0 ? mycase.user : 'Anonymous';
  let email = !!mycase && !!mycase?.email && mycase.email.length > 0 ? mycase.email : "Enter email";

  return (
    <>
      <span onClick={handleShow} style={{ marginRight: "1rem" }}>
        {user}
      </span>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Пользователь</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
              placeholder={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser">
            <Form.Label>User</Form.Label>
            <Form.Control type="text"
              placeholder={user}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}



  function SaveGroupPostModal() {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState(false);
    const mycase = useCase();
    const [savedSuccessfully, doSavedSuccessfully] = useState(false);
    const dispatch = useCaseDispatch();
  
    useEffect(() => {
      getFirebaseNode({
        url: "openavatars/", // + email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts",
        type: "array"
      })
        .then(res => {
          console.log(res);
          let users = res
          .filter(item => !!item?.group && item.group.includes("pso"))
         // .map(item => item.id);
       //   console.log(emails);
          setUsers(users)
          setShow(true)          
        })
      
    }, [])
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      savePost(
        e.currentTarget.elements.formTitle.value,
        e.currentTarget.elements.formComment.value
      )
      // dispatch({
      //   type: "SET_STORE_OBJECT",
      //   payload: { key: "email", value: e.currentTarget.elements.formEmail.value }
      // });
    };
  
  
  
    function savePost(title, comment) {
      const content = mycase?.protoData;
  
      let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
        .format(new Date())
        .replace(/[^a-zA-Z0-9]/g, "_");

        let updates = {};
        users && users.forEach(user => {

          console.log(user)

        let idPost = getFirebaseNodeKey('/usersTemplates/posts/');
        let postObject = {
          id: idPost,
          title: title, // formDataObject.title.length > 2 ? formDataObject.title : props?.title,
          theme: "Кейсы в Excel",
          answer: "",
          comment: comment, // formDataObject.comment, //Тема
          type: "spreadsheet",
          content: createProtoObject(content),
          quizString: "", //!!props?.quizString ? props.quizString : "",
          deleted: false,
          email: user?.id,
          user: user?.user,
          avatarUrl: !!user?.avatarUrl ? user.avatarUrl : null,
          date: new Intl.DateTimeFormat("ru", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date()), //Date().toJSON()
        };
  
        let currentDayObject = {
          id: idPost,
          title: title,
          theme: "Кейсы в Excel", // theme,
          email: user?.id,
          user: user?.user,
          avatarUrl: !!user?.avatarUrl ? user.avatarUrl : null,
          timestamp: +Date.now(),
        };
        //  dispatch(createPost(postObject));
        
        updates['/usersCraft/' + user?.id + '/posts/' + idPost] = postObject;
        // updates['/usersTemplates/posts/' + idPost] = postObject;
        updates['/currentDay/' + currentDay + '/posts/' + idPost] = currentDayObject;

        })
 
  
     //   console.log(updates);
  
        updateFirebaseNode(updates).then(() => {
          doSavedSuccessfully(true);
          setTimeout(() => {
            handleClose();
          }, 3000);
        });
  
      }
  
  
  
    
  
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Сохранить пост в группу</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                  placeholder={"Заголовок"}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text"
                  placeholder={"Комментарий"}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Сохранить
              </Button>
            </Form>
  
  
            {/* {savedSuccessfully ? "Сохранено" :  
            <Button
              variant="outline-secondary"
              onClick={() => savePost()}>
              Сохранить шаблон
            </Button>
            */}

            {!!users && users.map(item => {
              return <div className="m-1">
                {item.user}
              </div>
            })}
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }



function SavePostModal() {
  const [show, setShow] = useState(false);
  const mycase = useCase();
  const [savedSuccessfully, doSavedSuccessfully] = useState(false);
  const dispatch = useCaseDispatch();

  useEffect(() => {
    setShow(true)
  }, [])

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    savePost(
      e.currentTarget.elements.formTitle.value,
      e.currentTarget.elements.formComment.value
    )
    // dispatch({
    //   type: "SET_STORE_OBJECT",
    //   payload: { key: "email", value: e.currentTarget.elements.formEmail.value }
    // });
  };



  function savePost(title, comment) {
    const content = mycase?.protoData;
    const email = mycase?.email;
    const user = mycase?.user;
    const avatarUrl = mycase?.avatarUrl;

    let currentDay = new Intl.DateTimeFormat("en", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
      .format(new Date())
      .replace(/[^a-zA-Z0-9]/g, "_");

    if (email.length > 6) {
      let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
      let idPost = getFirebaseNodeKey('/usersTemplates/posts/');
      let postObject = {
        id: idPost,
        title: title, // formDataObject.title.length > 2 ? formDataObject.title : props?.title,
        theme: "Кейсы в Excel",
        answer: "",
        comment: comment, // formDataObject.comment, //Тема
        type: "spreadsheet",
        content: createProtoObject(content),
        quizString: "", //!!props?.quizString ? props.quizString : "",
        deleted: false,
        email: email,
        user: user,
        avatarUrl: !!avatarUrl ? avatarUrl : null,
        date: new Intl.DateTimeFormat("ru", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date()), //Date().toJSON()
      };

      let currentDayObject = {
        id: idPost,
        title: title,
        theme: "Кейсы в Excel", // theme,
        email: email,
        user: user,
        avatarUrl: !!avatarUrl ? avatarUrl : null,
        timestamp: +Date.now(),
      };
      //  dispatch(createPost(postObject));
      var updates = {};
      updates['/usersCraft/' + userEmail + '/posts/' + idPost] = postObject;
      // updates['/usersTemplates/posts/' + idPost] = postObject;
      updates['/currentDay/' + currentDay + '/posts/' + idPost] = currentDayObject;

      console.log(updates);

      updateFirebaseNode(updates).then(() => {
        doSavedSuccessfully(true);
        setTimeout(() => {
          handleClose();
        }, 3000);
      });

    }



  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Сохранить пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"
                placeholder={"Заголовок"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text"
                placeholder={"Комментарий"}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Form>


          {/* {savedSuccessfully ? "Сохранено" :  
          <Button
            variant="outline-secondary"
            onClick={() => savePost()}>
            Сохранить шаблон
          </Button>
          */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

function SelectAndOpenModal({ showOpen, handleClose }) {
  const [show, setShow] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [spreadsheets, setSpreadsheets] = useState([]);
  let mycase = useCase();
  const dispatch = useCaseDispatch();

  useEffect(() => {
    if (mycase?.posts && mycase.posts.length > 0) {
      setSpreadsheets(mycase.posts);
      setShow(showOpen);
    } else {
      let email = !!mycase && !!mycase?.email && mycase.email.length > 0 ? mycase.email : "test@test.com";
      console.log(email.replace(/[^a-zA-Z0-9]/g, "_"))
      getFirebaseNode({
        url: "usersCraft/" + email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts",
        type: "array"
      })
        .then(res => {
          let data = res.filter((quiz) => quiz.type === "spreadsheet").filter((post) => !post.deleted);
          setSpreadsheets(data);
          setShow(showOpen);
          dispatch({
            type: "SEED_ARRAY",
            payload: { arrayName: "posts", arrayItems: data }
          });
        })
    }
  }, [showOpen])

  const doHandleClose = () => {
    setShow(false);
    handleClose()
  }


  function closeModalopenSpreadsheet(content, title) {
    console.log(content);
    dispatch({
      type: "LOAD_DATA",
      payload: {
        data: createNewDraft(content),
        protoData: content
      }
    });
    handleClose();
    setShow(false)
  }

  let uniqueThemes = !!spreadsheets
    ? [...new Set(spreadsheets.map((item) => item.theme))]
    : [];

  // if (!show) {
  //   return <div className="spinner-grow-sm" style="width: 3rem; height: 3rem;" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // }

  return <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Выбрать тему</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {!!uniqueThemes &&
          uniqueThemes.map((theme) =>
            <Button
              key={theme}
              variant="outline-secondary"
              onClick={() => setSelectedTheme(theme)}
              className="m-1"
              size="sm"
            >
              {theme}
            </Button>
          )}

        <Container>
          {spreadsheets
            .filter((quiz) => quiz.theme === selectedTheme)
            .map((calc, index) =>
              // {data.map(calc =>
              <Row className="justify-content-md-center" key={index}>
                <Col md="auto">
                  <Button variant="outline-secondary"
                    size="sm"
                    onClick={() => closeModalopenSpreadsheet(createProtoArray(calc.content), calc.title)}>
                    Откр
                  </Button>
                </Col>
                <Col>{calc.title}</Col>
                <Col>{calc.comment}</Col>
              </Row>
            )}
        </Container>



      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={doHandleClose}>
          Close
        </Button>
        {/* <Button variant="primary" size="sm" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  </>
}

function PostsButtonGroup(props) {
  const dispatch = useCaseDispatch();
  const [showSave, setShowSave] = useState(false);
  const [showGroupSave, setShowGroupSave] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  const handleClose = () => {
    setShowSave(false);
    setShowOpen(false);
    setShowGroupSave(false)
  };
  const handleSaveShow = () => setShowSave(true);
  const handleOpenShow = () => setShowOpen(true);
  const handleSaveGroupShow = () => setShowGroupSave(true);


  return (
    <>
      <ButtonGroup aria-label="Posts Buttons" size="sm">
        <Button
          variant="outline-secondary"
          onClick={() =>
            dispatch({
              type: "NEW_EMPTY_SPREADSHEET",
              payload: {
                data: createNewDraft(createProtoArray({}, 12, 2)),
                protoData: content
              }
            })
          }
          data-toggle="tooltip"
          data-placement="bottom"
          title="Новый расчет"
        >
          Нов
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handleSaveShow()}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Сохранить расчет"
        >
          Сохр
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handleSaveGroupShow()}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Сохранить расчет"
        >
          Сохр Гр
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handleOpenShow()}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Открыть расчет"
        >
          {showOpen ? <span
            className="spinner-grow spinner-grow-sm"
            role="status" aria-hidden="true">
          </span> : "Откр"}

        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => props.toggle_expand_view(!props.expandView)}
          data-toggle="tooltip"
          data-placement="bottom"
          title={props.expandView ? "Свернуть расчет" : "Развернуть расчет"}
        >
          {props.expandView ? "Сверн" : "Разв"}
        </Button>
      </ButtonGroup>
      {showSave ? (
        <SavePostModal
          show={showSave}
          handleClose={handleClose}
          quizString={props?.quizString}
          title={props?.title}
          answer={props?.answer}
          theme={props?.theme}
          answerIsRight={props?.answerIsRight}
          {...props}
        />
      ) : null}

{showGroupSave ? (
        <SaveGroupPostModal
          show={showSave}
          handleClose={handleClose}
          quizString={props?.quizString}
          title={props?.title}
          answer={props?.answer}
          theme={props?.theme}
          answerIsRight={props?.answerIsRight}
          {...props}
        />
      ) : null}




      {showOpen ? (
        <SelectAndOpenModal handleClose={handleClose} showOpen={showOpen} />
      ) : null}
    </>
  );
}

function FormulaBlock() {
  const mycase = useCase();
  let formulaRowIndex = !!mycase && !!mycase?.formulaRowIndex ? mycase.formulaRowIndex : 0;
  let formulaColumnIndex = !!mycase && !!mycase?.formulaColumnIndex ? mycase.formulaColumnIndex : 0;
  let formulaValue = !!mycase && mycase?.formulaValue ? mycase.formulaValue  : '';
  const [formula, setFormula] = useState(formulaValue);
  const dispatch = useCaseDispatch();

  useEffect(()=>{
    setFormula(formulaValue)
  },[formulaValue])

  function clicked() {
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "formulaIsInFocus", value: true }
    });
  } 

  function onKeyPressOnInput(e) {
    if (e.key === "Enter") {
      console.log(formula);
      handleSubmit();
    }
  }

   function handleSubmit() {
    console.log(formula);
    let valueChecked = isNaN(formula) ? !!formula ? formula : "" : +formula;
      const newProtoData = immer.produce(mycase.protoData, draft => {
      draft[formulaRowIndex][formulaColumnIndex] = valueChecked
   })

    dispatch({
      type: "LOAD_DATA",
      payload: {
        data: createNewDraft(newProtoData),
        protoData: newProtoData
      }
    });

  //   dispatch({
  //     type: "UPDATE_FORMULA",
  //     payload: {
  //       formulaValue: valueChecked,
  //       formulaRowIndex: formulaRowIndex,
  //       formulaColumnIndex: formulaColumnIndex
  //     }
  //   });
   //  setFormula("");
  }

 // let value = !!mycase && !!mycase?.formulaValue ? mycase.formulaValue : "" : formula;

  return (
    <div className="cell-content">
      <div>fx</div>
      {/* <div > */}
      <button onClick={() => handleSubmit()}>
        <span >&#10003;</span>
      </button>
      {/* </div> */}
      <div>
        <input
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            marginLeft: "3px",
            fontSize: "1.2rem"
          }}
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          onKeyPress={(e) => onKeyPressOnInput(e)}
          onClick={()=>clicked()}
        />
      </div>
    </div>
  );
}




function AlphabetRow(props) {
  const alphabetRow = [];
  for (let x = 0; x < props.x + 1; x += 1) {
    alphabetRow.push(
      <div key={alphabet[x]} className="cells__alphabet">
        {alphabet[x]}
      </div>
    );
  }
  return <React.Fragment>{alphabetRow}</React.Fragment>;
}


function NumbersColumns(props) {

  const numbersColumns = [];
  for (let y = 1; y < props.y + 1; y += 1) {
    numbersColumns.push(
      <div key={y} className="cells__number">
        {y}
      </div>
    );
  }

  return <React.Fragment>{numbersColumns}</React.Fragment>;
}

function ActiveCells() {
  const mycase = useCase();
  const formulaRowIndex = !!mycase && !!mycase?.formulaRowIndex ? mycase.formulaRowIndex : 0;
  const formulaColumnIndex = !!mycase && !!mycase?.formulaColumnIndex ? mycase.formulaColumnIndex : 0;

  // console.log(mycase?.data);
  // console.log(mycase?.protoData);

  return (
    <>
      {!!mycase && !!mycase?.data && mycase.data.map((row, rowIndex) => {
        return row.map((column, columnIndex) => {
          let value = "";
          let cellKey = "" + columnIndex + "_" + rowIndex;
          let proDataValue = "";
        
          if (!!mycase && !!mycase?.data && !!mycase?.data[rowIndex][columnIndex]) {
            value = mycase.data[rowIndex][columnIndex];
            cellKey = cellKey + "_" + mycase.data[rowIndex][columnIndex];
            proDataValue = mycase.protoData[rowIndex][columnIndex];
          //  console.log("length " + mycase.data.length);            
          }

          if (formulaRowIndex === rowIndex &&
            formulaColumnIndex === columnIndex && !mycase.formulaIsInFocus) {
            return <EditCellValue
            key={cellKey}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              proDataValue={proDataValue}
              numberOfY = {mycase.data.length}
              nextProDataValue={""}
              />
          }

          return (
            <Cell
              key={cellKey}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              active={
                formulaRowIndex === rowIndex &&
                  formulaColumnIndex === columnIndex
                  ? true
                  : false
              }
              value={value}
              proDataValue={proDataValue}
            />
          );
        });
      })}
    </>
  );
}

function useDebounce(value, delay) {
  // value and delay in ms (1000ms = 1s)
  // debounced values
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const t = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // clean up the timeout after value changes
      return () => {
        clearTimeout(t);
      };
    },
    [value, delay] // re-run if value or delay changes
  );
  return debouncedValue;
}

function Cell({
  rowIndex = 0,
  columnIndex = 0,
  value = "",
  proDataValue = "",
  active = false
}) {
  const dispatch = useCaseDispatch();

  function clicked() {
    dispatch({
      type: "UPDATE_FORMULA",
      payload: {
        formulaRowIndex: rowIndex,
        formulaColumnIndex: columnIndex,
        formulaValue: proDataValue
      }
    });
  }

  return (
    <input
    readOnly
      type="text"
      className={active ? "cells__input__active" : "cells__input"}
      value={value}
      onClick={() => clicked()}
    />
  );
}

function EditCellValue({
  rowIndex,
  columnIndex,
  proDataValue,
  numberOfY,
  nextProDataValue
}) {
  const mycase = useCase();
  // const nextProDataValue = !!mycase && !!mycase?.protoData ?
  //   mycase?.protoData[rowIndex + 1][columnIndex] : "";
  const [value, setValue] = useState(proDataValue);
  const debouncedValue = useDebounce(value, 1000);
  const dispatch = useCaseDispatch();

  useEffect(() => {
    if (debouncedValue) {
      console.log(debouncedValue);
      let valueChecked = isNaN(value) ? !!value ? value : "" : +value;
      const newProtoData = immer.produce(mycase?.protoData, draft => {
        draft[rowIndex][columnIndex] = valueChecked
      })
      dispatch({
        type: "LOAD_DATA",
        payload: {
          data: createNewDraft(newProtoData),
          protoData: newProtoData
        }
      });
    }


  }, [debouncedValue]);


  // console.log(
  //   rowIndex,
  //   columnIndex,
  //   proDataValue);

  function onKeyPressOnInput(e) {

    let valueChecked = isNaN(value) ? !!value ? value : "" : +value;

    let newProtoData;

    if (numberOfY === (rowIndex + 1) ) {
      newProtoData = immer.produce(mycase.protoData, draft => {
        draft[rowIndex][columnIndex] = valueChecked;
        draft[rowIndex +1] = new Array(mycase.protoData[0].length).fill("");
      })

    } else {
      newProtoData = immer.produce(mycase.protoData, draft => {
        draft[rowIndex][columnIndex] = valueChecked
      })
    }
     

    

    if (e.key === "Enter") {
      //   console.log(value);
      dispatch({
        type: "SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE",
        payload: {
          value: value,
          data: createNewDraft(newProtoData),
          protoData: newProtoData,
          formulaRowIndex: rowIndex + 1,
          formulaColumnIndex: columnIndex,
          formulaValue: nextProDataValue,
        }
      });

    }
  }

  return (
    <input
      autoFocus
      type="text"
      className={"cells__input__active"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => onKeyPressOnInput(e)}
    />
  );
}


function LocalSpreadsheetLayout({
  quizString = "quizString",
  title = "title",
  answer = "answer",
  theme = "theme",
  answerIsRight = true
}) {
  const [expandView, toggle_expand_view] = useState(false);
  const [showFormulas, setShowFormulas] = useState(false);



  const mycase = useCase();
  // const formulaRowIndex = !!mycase && !!mycase?.formulaRowIndex ? mycase.formulaRowIndex : 0;

  let avatarUrl = !!mycase && mycase?.avatarUrl ? mycase.avatarUrl : '../freelancer.jpg';
  let email = !!mycase && mycase?.email ? mycase.email : "johndoe@gmail.com";

  let numberOfX = !!mycase && mycase?.data ? mycase.data[0].length - 1 : 6;
  let numberOfY = !!mycase && mycase?.data ? mycase.data.length : 6;

  return <div>
    <div className="excelstyle">
      <div
        className="title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".4rem",
        }}
      >
        {!!avatarUrl && avatarUrl.length > 10 ?
          <img
            src={avatarUrl}
            alt=""
            style={{
              verticalAlign: 'middle',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              filter: 'grayscale(100%)',
              objectFit: 'cover'
            }} /> : null}

        {!!title ? <span style={{ marginLeft: "1rem" }}>{title}</span> : <span>Calc</span>}
        <LoginLogout />
      </div>
      <div className="icon-bar">

        {!!email ?
          <PostsButtonGroup
            expandView={expandView}
            toggle_expand_view={toggle_expand_view}
            quizString={quizString}
            title={title}
            answer={answer}
            theme={theme}
            answerIsRight={answerIsRight}
          />
          :
          <ButtonGroup aria-label="Posts Buttons" size="sm">
            <Button variant="outline-secondary"
              onClick={() =>
                dispatch({
                  type: "NEW_EMPTY_SPREADSHEET",
                  payload: {
                    data: createNewDraft(createProtoArray({}, 12, 2)),
                    protoData: content
                  }
                })

              }
              data-toggle="tooltip"
              data-placement="bottom"
              title="Новый расчет"
            >Нов</Button>

            

            <Button variant="outline-secondary"
              onClick={() => toggle_expand_view(!expandView)}
              data-toggle="tooltip"
              data-placement="bottom"
              title={expandView ? "Свернуть расчет" : "Развернуть расчет"}
            >{expandView ? "Сверн" : "Разв"}</Button>

          </ButtonGroup>}

    


        <ButtonGroup aria-label="Columns Buttons" size="sm">
        <Button variant="outline-secondary"
              onClick={() => setShowFormulas(true)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Формулы"
            >Формулы</Button>

        </ButtonGroup>

        

        {!!email ?
          <ButtonGroup aria-label="Workbook Buttons" size="sm">
          </ButtonGroup>
          : null}


      </div>
      <FormulaBlock />
      {expandView ? <div
        className="cells"
        style={{
          gridTemplateColumns: `40px repeat(${numberOfX + 1
            }, calc((100% - 50px) / ${numberOfX + 1}))`,
          gridTemplateRows: `repeat(${numberOfY}, 25px)`,
        }}
      >
        <div className="cells__spacer"></div>
        <AlphabetRow x={numberOfX} />
        <NumbersColumns y={numberOfY} />
        <ActiveCells />
      </div> : null}

      {showFormulas && !expandView ? <div>
        {formulaParser.SUPPORTED_FORMULAS.map(item => <small>{item +" "}</small>)}
      </div>: null}

    </div>
  </div>
}


let pages = window.casesSets;

function PaginationLayout({ pages, doSelectId }) {

  const [currentPage, setCurrentPage] = useState(1);

  const changePage = number => {
    if (currentPage === number) return;
    setCurrentPage(number);
    // scrollToTop();
  };

  const onPageNumberClick = pageNumber => {
    changePage(pageNumber);
    doSelectId(pages[pageNumber - 1].id)
  };

  const onPreviousPageClick = () => {
    if (currentPage <= 1) {
      return (changePage(currentPage => currentPage = 1));
    } else {
      changePage(currentPage => currentPage - 1);
    }

  };

  const onNextPageClick = () => {
    changePage(currentPage => currentPage + 1);
  };



  let itemsPerPage = 1;
  let itemsCount = pages.length;
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  let isPageNumberOutOfRange;


  const pageNumbers = pages
    .map((_, index) => {
      // console.log(pageNumber);
      const pageNumber = index + 1;
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === pagesCount;
      //  console.log(currentPage);
      //  console.log(Math.abs(pageNumber - currentPage));
      const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) < 3 ? true : false

      if (
        isPageNumberFirst ||
        isPageNumberLast ||
        isCurrentPageWithinTwoPageNumbers
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            activeLabel=""
            key={pageNumber}
            onClick={() => onPageNumberClick(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }

      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return <Pagination.Ellipsis key={pageNumber} className="muted" />;
      }

      return null;
    });

  //  console.log(pages.find(item => item.id === currentPage))


  return <Container style={{ padding: 20 }} >
    <div style={{ display: 'block', maxWidth: 900, padding: 10 }}>
      <h4>Task {currentPage + " "} {pages.find(item => item.id === currentPage)?.title} </h4>
      <Pagination size="sm" >
        <Pagination.Prev onClick={onPreviousPageClick} />
        {pageNumbers}
        <Pagination.Next onClick={onNextPageClick} />
      </Pagination>
    </div>

  </Container>
}

function ShowPage({
  pageMarkup
}) {

  return <div
    className="m-1 text-secondary"
    dangerouslySetInnerHTML={{ __html: pageMarkup }}
  />
}

function DoPreparePage() {
  const mycase = useCase();
  // console.log(mycase);
  if (!!mycase?.selectedPage?.html) {
    return <ShowPage pageMarkup={mycase.selectedPage.html} />
  }
  return <div className="m-1 text-secondary">Выберите страницу</div>
}

function App() {
  const dispatch = useCaseDispatch();
  function doSelectId(id) {
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "selectedPage", value: pages.find(item => item.id === id) }
    });
    //  console.log(id)
  }
  return <div>
    <PaginationLayout pages={pages} doSelectId={doSelectId} />
    <DoPreparePage />
    <LocalSpreadsheetLayout />
  </div>
}

function SpreadsheetCase() {
  return <CaseProvider>
    <App />
  </CaseProvider>
}


// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    //   const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(SpreadsheetCase
        //   , { commentID: commentID }
      )
    );
  });