'use strict';

//https://daily.dev/blog/form-on-react-best-practices
//https://www.testkarts.com/blog/post/implementing-pagination-in-react-js-using-react-bootstrap-without-using-library
//https://www.codingforentrepreneurs.com/blog/create-a-standalone-react-app



const Button = ReactBootstrap.Button;
const ButtonGroup = ReactBootstrap.ButtonGroup;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Pagination = ReactBootstrap.Pagination;
const Collapse = ReactBootstrap.Collapse;

const Alert = ReactBootstrap.Alert;
const Modal = ReactBootstrap.Modal;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Navbar = ReactBootstrap.Navbar;
const SplitButton = ReactBootstrap.SplitButton;
const Dropdown = ReactBootstrap.Dropdown;


const ShowBalance = EconolabsReactComponents.ShowBalance;
const ShowFinancialResults = EconolabsReactComponents.ShowFinancialResults;
const ShowCashFlow = EconolabsReactComponents.ShowCashFlow;
const RecordsList = EconolabsReactComponents.RecordsList;
const SimpleAccounting = EconolabsReactComponents.SimpleAccounting;
const ExternalSpreadsheet = EconolabsReactComponents.ExternalSpreadsheet;
const timeout = EconolabsReactComponents.timeout;
const loadState = EconolabsReactComponents.loadState;



const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const createContext = React.createContext;
const useContext = React.useContext;
const useReducer = React.useReducer;
const produce = immer.produce;

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


const CaseContext = createContext(null);
const CaseDispatchContext = createContext(null);

function useCase() { return useContext(CaseContext); }
function useCaseDispatch() { return useContext(CaseDispatchContext) }

//https://dev.to/franciscomendes10866/use-context-api-and-immer-to-manage-the-state-of-your-react-app-1hem
let initialCase = {
    email: !!loadState() && !!loadState()?.application && !!loadState().application?.email ? loadState().application.email : "johndoe@yandex.ru",
    user: !!loadState() && !!loadState()?.application && !!loadState().application.user ? loadState().application.user : "DmGl",
    avatarUrl: !!loadState() && !!loadState()?.application && !!loadState().application?.avatarUrl ? loadState().application.avatarUrl : "../freelancer.jpg",
    dataArray: [],
    formulaValue: 0,
    formulaRowIndex: 0,
    formulaColumnIndex: 0,
    //    data: createNewDraft(createProtoArray({}, 12, 2)),
    //    protoData: createProtoArray({}, 12, 2),
    expandView: false,
    posts: [],
    selectedPage: null,
    formulaIsInFocus: false,
    records: [],
    bookrecords: []
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

function SimpleAccountingLayout() {
    const mycase = useCase();
    const dispatch = useCaseDispatch();
    let records = mycase?.records ? mycase.records : [];

    return <SimpleAccounting records={records} dispatch={dispatch} />
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

function AccountingWithProfitsCash() {
    const mycase = useCase();
    const dispatch = useCaseDispatch();

    useEffect(() => {
        if (mycase?.posts && mycase.posts.length > 0) {
            //   setSpreadsheets(mycase.posts);
            //   setShow(showOpen);
        } else {
            let email = !!mycase && !!mycase?.email && mycase.email.length > 0 ? mycase.email : "test@test.com";
            console.log(email.replace(/[^a-zA-Z0-9]/g, "_"))
            getFirebaseNode({
                url: "usersCraft/" + email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts",
                type: "array"
            })
                .then(res => {
                    let data = res.filter((quiz) => quiz.type === "accountingwithprofitscash").filter((post) => !post.deleted);
                    //   setSpreadsheets(data);
                    //   setShow(showOpen);
                    dispatch({
                        type: "SEED_ARRAY",
                        payload: { arrayName: "posts", arrayItems: data }
                    });
                })
        }
    }, [])

    if (mycase.posts.length < 1) { return <NoPrjectLayout /> }

    return <div>Accounting With Profits Cash {mycase.posts.length}</div>
}



function DrowpdownWithUserProjectsShadow() {
    return <div>DrowpdownWithUserProjects</div>
}

function DrowpdownWithUserProjects({
    myAccountingWithProfitsCashProjects = [],
}) {
    //   const dispatch = useDispatch();
    return (
        <SplitButton
            size="sm"
            drop="left"
            variant="outline-secondary"
            title="Выбрать"
        >
            {" "}
            {myAccountingWithProfitsCashProjects.map((item, index) => (
                <Dropdown.Item
                    key={item.id}
                    eventKey={index}
                    onClick={() => {
                        //  dispatch(setTempFireNode(item.id));
                        // dispatch(set_currentProject({
                        //   currentProjectTitle: item.theme, //title,
                        //   currentProjectComment: item.comment,
                        //   currentProjectMediaAndDataAndTemplatesURL: item.id,
                        //   currentProjectSourseDataURL: item.answer, //content,
                        //   currentProjectMoneyScale: item.quizString,
                        //   currentProjectReportIndicatorsDictionary: item.content
                        // }));
                    }}
                >
                    {item.title}
                </Dropdown.Item>
            ))}
        </SplitButton>
    );
}


function SelectAndImportProjectModalButtonShadow() {
    return <div>SelectAndImportProjectModalButton</div>
}

let templateProjects = [
    {
        id: 1,
        title: "МНб-26",
        firenode:
            "usersCraft/katyakaterinamasha_yandex_ru/posts/accountingwithprofitscash",
    },
];

function SelectAndImportProjectModalButton() {
    const mycase = useCase();
    const dispatch = useCaseDispatch();
    const [showImportProject, setShowImportProject] = useState(false);
    const email = mycase?.email;
    const user = mycase?.user;

    const handleOpenImportProject = () => setShowImportProject(true);
    const handleCloseImportProject = () => setShowImportProject(false);

    function closeModalImportProject(firenode, title) {
        let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
        let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");
        //  console.log(firenode);
        //   firebase
        //     .database()
        //     .ref(firenode)
        //     .once("value")
        //     .then((snapshot) => {


        let postObject = {
            //   ...snapshot.val(),
            id: idPost,
            user: user,
            title: title,
            email: email,
            date: new Intl.DateTimeFormat("ru", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            }).format(new Date()),
        };

        var updates = {};
        updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
        updates["/openmedia/" + idPost] = postObject;
        updates[
            "/usersTemplates/projects/" + userEmail + "/" + idPost
        ] = postObject;

        timeout(500)
            //   firebase
            //     .database()
            //     .ref()
            //     .update(updates)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.log(error));

        // dispatch(set_spreadsheetTitle({ spreadsheetTitle: snapshot.title }));
        // dispatch(setTempFireNode(idPost));
        // dispatch(setTempDataArrayItems(snapshot.content));
        // dispatch(setTempType(snapshot.title));
        // if (!!snapshot?.mediaItems) { dispatch(setPostsArrayItems(snapshot.mediaItems)) }
        // if (isObject(snapshot.quizString)) {
        //   dispatch(load_data({ protoData: createProtoArray(snapshot.quizString) }))
        // };
        // dispatch(set_currentProject({ currentProjectComment: snapshot.comment }))
        // setTimeout(handleCloseImportProject(), 3000);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    }

    return (
        <>
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handleOpenImportProject()}
            >
                Из Шабл
            </Button>
            <Modal
                show={showImportProject}
                onHide={() => handleCloseImportProject()}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Выберите проект</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Проекты
                    <Container>
                        {templateProjects.map((item, index) => (
                            // {data.map(calc =>
                            <Row className="justify-content-md-center m-2" key={index}>
                                <Col md="2">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() =>
                                            closeModalImportProject(item.firenode, item.title)
                                        }
                                    >
                                        Откр
                                    </Button>
                                </Col>
                                <Col md="10">{item.title}</Col>
                            </Row>
                        ))}
                    </Container>
                </Modal.Body>
                {/*    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button> 
        </Modal.Footer> */}
            </Modal>
        </>
    );
}

function NewProjectForShadow() {
    return <div>NewProjectForm</div>
}

let modalForm = [
    { name: "title", title: "Название", type: "text" },
    { name: "comment", title: "Комментарий", type: "textarea" },
];


function NewProjectForm() {
    const mycase = useCase();
    const email = mycase?.email;
    const user = mycase?.user;
    const avatarUrl = mycase?.avatarUrl;

    async function handleSubmit(e) {
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        // e.currentTarget becoming null at this point. Why?

        if (email.length > 6) {
            let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
            let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");

            let postObject = {
                id: idPost, // "accountingwithprofitscash",
                title: Object.fromEntries(formdata).title, // "Планирование и бюджетирование по трем формам"
                theme: "Планирование и бюджетирование", //data.currentProjectTitle.length > 2 ? data.currentProjectTitle : 'Проект',
                answer: "Операции и прогнозная отчетность",
                comment: Object.fromEntries(formdata).comment, // "Лекционный пример",
                type: "accountingwithprofitscash",
                content: null,
                quizString: "Операции и прогнозная отчетность",
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

            var updates = {};
            updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
            // updates['/openmedia/' + idPost] = postObject;
            // updates["/usersTemplates/projects/" + userEmail + '/' + idPost] = postObject;

            console.log(updates);



            timeout(5000).then(() => {
                currentTarget.reset();
                //    window.location.reload();               
            })
        }

        //    setProjectComment(data.comment);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {modalForm.map((item) => (
                <Form.Group className="mb-3" controlId={item.name} key={item.name}>
                    <Form.Label>{item.title}</Form.Label>
                    <Form.Control type={item.type}
                        as={item.type === "textarea" ? "textarea" : "input"} placeholder={item.title} name={item.name} required />
                </Form.Group>
            ))}
            <Button variant="outline-secondary" type="submit" size="sm">
                Сохранить
            </Button>
        </Form>
    );
}

function AccountingNavBarShadow() {
    return <div>Accounting Nav Bar</div>
}

function AccountingNavBar({ myAccountingWithProfitsCashProjects = [] }) {
    const mycase = useCase();
    const mediaItems = mycase?.posts;
    const user = mycase?.user;
    const email = mycase?.email;
    const comment = mycase?.currentProjectComment;
    const avatarUrl = mycase?.avatarUrl;
    const records = mycase?.dataArray;
    const projectTitle = mycase?.type;
    const id = mycase?.firenode;
    const content = []; // useSelector(selectSpreadsheetProtoData);
    const [showNewProject, setShowNewProject] = useState(false);
    const [projectComment, setProjectComment] = useState("Лекционный пример");

    // console.log(mediaItems);

    function onSave() {

        let filteredMediaItemsWithoutComment = mediaItems.filter(item => item?.comment !== "Комментарий");
        let filteredMediaItemsWithoutCalculations = filteredMediaItemsWithoutComment.filter(item => item?.comment !== "Расчет");
        console.log(filteredMediaItemsWithoutCalculations);

        let mediaItemsForSaving = [
            { mediaType: "html", comment: "Комментарий", content: comment },
            {
                mediaType: "spreadsheet",
                comment: "Расчет",
                content: createProtoObject(content),
            },
            ...filteredMediaItemsWithoutCalculations
        ];

        console.log(mediaItemsForSaving);

        if (email.length > 6) {
            let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
            let idPost = !!id ? id
                : getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");

            let postObject = {
                id: idPost, // "accountingwithprofitscash",
                title: projectTitle, // "Планирование и бюджетирование по трем формам"
                theme: "Планирование и бюджетирование", //data.currentProjectTitle.length > 2 ? data.currentProjectTitle : 'Проект',
                answer: "Операции и прогнозная отчетность",
                comment: comment, // projectComment, // "Лекционный пример",
                type: "accountingwithprofitscash",
                content: records,
                quizString: createProtoObject(content),
                mediaItems: mediaItemsForSaving,
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

            //     console.log(postObject);
            //    dispatch(createPost(postObject));
            var updates = {};
            updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
            updates["/openmedia/" + idPost] = postObject;
            updates[
                "/usersTemplates/projects/" + userEmail + "/" + idPost
            ] = postObject;

            console.log(updates)

        }
    }

    const handleShowNewProject = () => setShowNewProject(true);
    const handleCloseNewProject = () => setShowNewProject(false);

    function setFormObject(data) {
        console.log(data);
        //   dispatch(
        //     setTempFireNode(
        //       firebase
        //         .database()
        //         .ref(email.replace(/[^a-zA-Z0-9]/g, "_"))
        //         .child("posts")
        //         .push().key
        //     )
        //   );
        //   dispatch(setTempDataArrayItems([]));
        //   dispatch(set_spreadsheetTitle(data.title));
        //   dispatch(setTempType(data.title));
        //   setProjectComment(data.comment);
    }

    return (
        <>
            <Navbar className="bg-light justify-content-between mb-3">
                <Navbar.Brand>{projectTitle}</Navbar.Brand>
                {myAccountingWithProfitsCashProjects.length < 2 ? null : (
                    <DrowpdownWithUserProjects
                        myAccountingWithProfitsCashProjects={
                            myAccountingWithProfitsCashProjects
                        }
                    />
                )}
            </Navbar>
            <Navbar className="bg-light justify-content-between mb-3">
                <Button
                    variant="outline-secondary"
                    size="sm"
                    //  disabled={updatedRecords.length === 0}
                    onClick={() => onSave()}
                >
                    Сохр
                </Button>

                <Button
                    variant="outline-secondary"
                    size="sm"
                    //     disabled={records.length === 0}
                    onClick={() => handleShowNewProject()}
                >
                    +Нов
                </Button>
                <SelectAndImportProjectModalButton />
            </Navbar>
            <Modal
                show={showNewProject}
                onHide={() => handleCloseNewProject()}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Сведения о проекте</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewProjectForm setFormObject={setFormObject} />
                </Modal.Body>
                {/*    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button> 
        </Modal.Footer> */}
            </Modal>
        </>
    );
}

const SpreadsheetContext = createContext(null);
const SpreadsheetDispatchContext = createContext(null);


let initialSpreadsheetState = {
    expandView: true,
    showFormulas: false,
    numberOfX: 2,
    numberOfY: 2,
    formulaRowIndex: 0,
    formulaColumnIndex: 0,
    formulaValue: "",
    formulaIsInFocus: false,
    data: [
        ["1", "2"],
        ["3", "4"],
    ],
    protoData: [
        ["1", "2"],
        ["3", "4"],
    ]
}

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
  






function useSpreadsheet() {
    return useContext(SpreadsheetContext);
}

function useSpreadsheetDispatch() {
    return useContext(SpreadsheetDispatchContext);
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
  
    })
  
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

  function calculateReducer(state = {}, action) {
    // console.log(action);
    switch (action.type) {
        case "LOAD_DATA":
            return immer.produce(state, (draft) => {
                draft[data] = createNewDraft(action.payload.protoData);
            })

        default:
            return state;
    }
};


//https://dev.to/franciscomendes10866/use-context-api-and-immer-to-manage-the-state-of-your-react-app-1hem
let initialSpreadsheet = {
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

let initialSheetData = {
    data: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
};


function SpreadsheetContextWrapper({ children }) {
    const [spreadsheetState, dispatch] = useReducer(
        window.caseReducer,
        initialSpreadsheet
    );

    return (
        <SpreadsheetContext.Provider value={spreadsheetState}>
            <SpreadsheetDispatchContext.Provider value={dispatch}>            
                        {children}             
            </SpreadsheetDispatchContext.Provider>
        </SpreadsheetContext.Provider>
    );
}


function SpreadsheetLayout() {
    return <SpreadsheetContextWrapper>
        SpreadsheetLayout
    </SpreadsheetContextWrapper>
}






function AccountingReports() {
    const mycase = useCase();
    const records = Array.isArray(mycase?.dataArray) ? mycase.dataArray : [];
    const [open, setOpen] = useState(false);

    return (
        <div>
            <ShowBalance records={records} />
            <hr />
            <ShowFinancialResults records={records} />
            <hr />
            <ShowCashFlow records={records} />
           
            <hr className="mb-3 mt-3" />
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="outline-secondary"
                className="mb-3 mt-3"
            >
                {open ? "Скрыть Журнал" : "Показать журнал"}
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <RecordsList records={records} />
                </div>
            </Collapse>
        </div>
    );
}



let formInitialCase = {
    d: "",
    k: "",
    sum: "",
    period: "",
    type: "",
    contod: "",
    contok: "",
    subconto1: "",
    subconto2: "",
    sunconto3: "",
    conto: [
        "10.1",
        "20",
        "43",
        "50",
        "51",
        "60.1",
        "60.2",
        "62.1",
        "62.2",
        "90.1",
        "90.2",
        "90.9"
    ]
}
function AccountingMachine() {
    const mycase = useCase();
    const globalDispatch = useCaseDispatch();
    const [periods, setPeriods] = useState(["2024", "2025", "2026", "2027"]);

    const [formState, dispatch] = useReducer(
        window.caseReducer,
        formInitialCase)



    const user = mycase?.user;
    const email = mycase?.email;
    const comment = mycase?.currentProjectComment;
    const avatarUrl = mycase?.avatarUrl;
    const records = mycase?.dataArray;
    const projectTitle = mycase?.type;
    const id = mycase?.firenode;
    const content = mycase?.protoData;

    console.log(formState.conto)

    function handleChange(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        dispatch({
            type: "SET_STORE_OBJECT",
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        });

    }

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        let { d, k, sum, contod, contok, type, period } = Object.fromEntries(formdata);
        globalDispatch({
            type: "PUSH_ITEM_TO_ARRAY",
            payload: {
                arrayName: "dataArray",
                item: { d, k, sum, type }
            }
        });
        globalDispatch({
            type: "PUSH_ITEM_TO_ARRAY",
            payload: {
                arrayName: "bookrecords",
                item: { contod, contok, sum, type }
            }
        });
        timeout(1000).then(() => {
            currentTarget.reset();
        });
    };


    function onSave(updatedRecs) {
        if (email.length > 6) {
            let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
            let idPost = !!id ? id
                : getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");;

            let postObject = {
                id: idPost, // "accountingwithprofitscash",
                title: projectTitle, // "Планирование и бюджетирование по трем формам"
                theme: "Планирование и бюджетирование", //data.currentProjectTitle.length > 2 ? data.currentProjectTitle : 'Проект',
                answer: "Операции и прогнозная отчетность",
                comment: comment, // projectComment, // "Лекционный пример",
                type: "accountingwithprofitscash",
                content: updatedRecs,
                quizString: createProtoObject(content),
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

            //     console.log(postObject);
            //    dispatch(createPost(postObject));
            var updates = {};
            updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
            updates["/openmedia/" + idPost] = postObject;
            updates[
                "/usersTemplates/projects/" + userEmail + "/" + idPost
            ] = postObject;

            console.log(updates)

        }
    }



    const capitalIncrease = formState?.k === "Нераспределенная прибыль" ? true : false;
    const capitalDecrease = formState?.d === "Нераспределенная прибыль" ? true : false;
    const cashIncrease = formState?.d === "Деньги" ? true : false;
    const cashDecrease = formState?.k === "Деньги" ? true : false;
    const costsCalculation = formState?.d === "Незавершенное производство" ? true : false;

    return (
        <div>
            <div className="p-3 mb-2 bg-secondary text-white">Новая операция</div>
            <Form onSubmit={handleSubmit}>
                <Row>

                    <Col><Form.Group controlId="formStatePeriod">
                        <Form.Label>Период</Form.Label>
                        <Form.Control as="select" name="period"
                            //  {...register("period")}
                            onChange={handleChange}
                            required>
                            {["...", ...periods].map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </Form.Control>
                    </Form.Group></Col>

                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formStateD">
                            <Form.Label>Актив+ или Пассив- (Дт)</Form.Label>
                            <Form.Control as="select"
                                onChange={handleChange}
                                name="d"
                                // {...register("d")}
                                required>
                                <option>...</option>
                                <option>Основные средства</option>
                                <option>Материалы</option>
                                <option>Незавершенное производство</option>
                                <option>Готовая продукция</option>
                                <option>Дебиторская задолженность</option>
                                <option>Деньги</option>
                                <option>Уставный капитал</option>
                                <option>Нераспределенная прибыль</option>
                                <option>Долгосрочный банковский кредит</option>
                                <option>Краткосрочный банковский кредит</option>
                                <option>Кредиторская задолженность</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formStateK">
                            <Form.Label>Актив- или Пассив+ (Кт)</Form.Label>
                            <Form.Control as="select"
                                onChange={handleChange}
                                name="k"
                                // {...register("k")}
                                required>
                                <option>...</option>
                                <option>Основные средства</option>
                                <option>Материалы</option>
                                <option>Незавершенное производство</option>
                                <option>Готовая продукция</option>
                                <option>Дебиторская задолженность</option>
                                <option>Деньги</option>
                                <option>Уставный капитал</option>
                                <option>Нераспределенная прибыль</option>
                                <option>Долгосрочный банковский кредит</option>
                                <option>Краткосрочный банковский кредит</option>
                                <option>Кредиторская задолженность</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group as={Col} controlId="formStateSum">
                            <Form.Label>Сумма</Form.Label>
                            <Form.Control
                                as="input"
                                onChange={handleChange}

                                name="sum"
                                //  {...register("sum")}
                                required />
                        </Form.Group>
                    </Col>


                </Row>


                <Row>
                    <Col>
                        <Form.Group controlId="formStateContoD">
                            <Form.Label>Дт Субчета (Счета)</Form.Label>
                            <Form.Control as="select"
                                onChange={handleChange}
                                name="contod"
                                // {...register("d")}
                                required>
                                <option>...</option>
                                {Array.isArray(formState.conto) && formState.conto.map(item => {
                                    return <option key={item}>{item}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formStateContoK">
                            <Form.Label>Кт Субчета (Счета)</Form.Label>
                            <Form.Control as="select"
                                onChange={handleChange}
                                name="contok"
                                // {...register("k")}
                                required>
                                <option>...</option>
                                {Array.isArray(formState.conto) && formState.conto.map(item => {
                                    return <option key={item}>{item}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>



                {capitalIncrease ? (
                    <Row>
                        <Col>

                            <Form.Group as={Col} controlId="formCapitalIncrease">
                                <Form.Label>Увеличение капитала (прибыль, доход)</Form.Label>
                                <Form.Control as="select"
                                    name="type"
                                    onChange={handleChange}
                                    // ref={register}
                                    required>
                                    <option>...</option>
                                    <option>Выручка</option>
                                    <option>Прочие доходы</option>
                                    <option>Дивиденды к получению</option>
                                    <option>Проценты к получению</option>
                                </Form.Control>
                            </Form.Group>

                        </Col>
                    </Row>
                ) : null}

                {capitalDecrease ? (
                    <Row>
                        <Col>
                            <Form.Group controlId="formCapitalDecrease">
                                <Form.Label>Уменьшение капитала (убыток, расходы)</Form.Label>
                                <Form.Control as="select"
                                    name="type"
                                    onChange={handleChange}
                                    // {...register("type")}
                                    required>
                                    <option>...</option>
                                    <option>Себестоимость продукции, работ, услуг</option>
                                    <option>Коммерческие расходы</option>
                                    <option>Управленческие расходы</option>
                                    <option>Проценты к уплате</option>
                                    <option>Прочие расходы</option>
                                    <option>Налог на прибыль</option>
                                    <option>Дивиденды к начислению</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>

                ) : null}

                {cashIncrease ? (
                    <Row>
                        <Col>
                            <Form.Group controlId="formCashIncrease">
                                <Form.Label>Поступление денежных средств</Form.Label>
                                <Form.Control as="select"
                                    name="type"
                                    onChange={handleChange}
                                    // {...register("type")}
                                    required>
                                    <option>...</option>
                                    <option>Поступления по текущей деятельности</option>
                                    <option>Поступления по инвестиционной деятельности</option>
                                    <option>Поступления по финансовой деятельности</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>

                ) : null}

                {cashDecrease ? (
                    <Row>
                        <Col>

                            <Form.Group controlId="formCashDecrease">
                                <Form.Label>Платежи (выбытие) денежных средств</Form.Label>
                                <Form.Control as="select"
                                    name="type"
                                    onChange={handleChange}
                                    //  {...register("type")}
                                    required>
                                    <option>...</option>
                                    <option>Платежи по текущей деятельности</option>
                                    <option>Платежи по инвестиционной деятельности</option>
                                    <option>Платежи по финансовой деятельности</option>
                                </Form.Control>
                            </Form.Group>

                        </Col>
                    </Row>

                ) : null}

                {costsCalculation ? (
                    <Row>
                        <Col>

                            <Form.Group controlId="formCostsCalculation">
                                <Form.Label>Статья калькуляции</Form.Label>
                                <Form.Control as="select"
                                    name="type"
                                    onChange={handleChange}
                                    // {...register("type")}
                                    required>
                                    <option>...</option>
                                    <option>Материальные затраты (Прямые затраты)</option>
                                    <option>Оплата труда и соцстрахование (Прямые затраты)</option>
                                    <option>Амортизация (Постоянные затраты)</option>
                                    <option>Услуги и работы (Прямые затраты)</option>
                                    <option>Услуги и работы (Косвенные затраты)</option>
                                    <option>Реклама (Косвенные затраты)</option>
                                    <option>Материальные затраты (Косвенные затраты)</option>
                                    <option>
                                        Оплата труда и соцстрахование (Косвенные затраты)
                                    </option>
                                    <option>
                                        Управленческие расходы (другие Косвенные затраты)
                                    </option>
                                    <option>Коммерческие расходы (другие Косвенные затраты)</option>
                                </Form.Control>
                            </Form.Group>

                        </Col>
                    </Row>

                ) : null}

                <Button variant="outline-secondary my-3" type="submit">
                    Провести операцию
                </Button>
            </Form>
        </div>
    );
}


function NoPrjectLayout() {
    const [loaded, setLoaded] = useState(false);
    //  const mycase = useCase();
    //  const dispatch = useCaseDispatch();

    React.useEffect(() => {
        //   dispatch(emptyCKEditorData());
        //   dispatch(setTempFireNode("accountingwithprofitscash"));
        //   dispatch(setTempDataArrayItems([]));
        //   dispatch(set_spreadsheetTitle("Расчеты по проекту"));
        //   dispatch(setTempType("Бюджетирование по трем формам формам"));
        //   dispatch(setCKEditorContent("<p>Комментарий</p>"));  
        setLoaded(true);
    }, []);

    if (!loaded) {
        return <div>...</div>;
    }

     return (
        <div>
            <AccountingNavBar />        
            <AccountingMachine />
            <hr />
            <SpreadsheetLayout />
            <hr />
            <ExternalSpreadsheet />
            <hr />
            <AccountingReports />
        </div>
    );
}


function AccountingCase() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        timeout(5000)
            .then(() => setLoading(false))
    }, [])

    if (isLoading) {
        return <div className="card my-5" style={{ width: "640px", height: "480px" }}>
            <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top" alt="loading" />
            <div className="card-body">
                <div className="text-center">
                    <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    }


    return <CaseProvider>

        <AccountingWithProfitsCash />
        {/* <SimpleAccountingLayout /> */}

    </CaseProvider>
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        //   const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(AccountingCase
                //   , { commentID: commentID }
            )
        );
    });

console.log('Accounting Case');