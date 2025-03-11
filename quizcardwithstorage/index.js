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
const Card = ReactBootstrap.Card;
const InputGroup = ReactBootstrap.InputGroup;
const FormControl = ReactBootstrap.FormControl;




const ShowBalance = EconolabsReactComponents.ShowBalance;
const ShowFinancialResults = EconolabsReactComponents.ShowFinancialResults;
const ShowCashFlow = EconolabsReactComponents.ShowCashFlow;
const RecordsList = EconolabsReactComponents.RecordsList;
const SimpleAccounting = EconolabsReactComponents.SimpleAccounting;
const ExternalSpreadsheet = EconolabsReactComponents.ExternalSpreadsheet;



const timeout = EconolabsReactComponents.timeout;
const loadState = EconolabsReactComponents.loadState;
const shuffle = EconolabsReactComponents.shuffle;
const extract = EconolabsReactComponents.extract;

const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const createContext = React.createContext;
const useContext = React.useContext;
const useReducer = React.useReducer;

const QuizCardWithStorageContext = createContext(null);
const QuizCardWithStorageDispatchContext = createContext(null);

function useQuizCardWithStorage() { return useContext(QuizCardWithStorageContext); }
function useQuizCardWithStorageDispatch() { return useContext(QuizCardWithStorageDispatchContext) }

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



function QuizCardWithStorageProvider({ children }) {
    const [mycase, dispatch] = useReducer(
        window.caseReducer,
        initialCase
    );

    return (
        <QuizCardWithStorageContext.Provider value={mycase}>
            <QuizCardWithStorageDispatchContext.Provider value={dispatch}>
                {children}
            </QuizCardWithStorageDispatchContext.Provider>
        </QuizCardWithStorageContext.Provider>
    );
}

function OneRandomManyAnswers() {
    return <div>OneRandomManyAnswers</div>
}

function QuizSetShadow() {
    return <div>QuizSet</div>
}


function SingleQuizCardWithStorageShadow() {
    return <div>SingleQuizCardWithStorage</div>
}

function QuizWithRandomNumberShadow() {
    return <div>QuizWithRandomNumber</div>
}


function ShowQuizMedia() {
    return <div>ShowQuizMedia</div>
}

function SpreadsheetLayout() {
    const myQuizCardWithStorage = useQuizCardWithStorage();
    const dispatch = useQuizCardWithStorageDispatch();
    return <ExternalSpreadsheet dispatch={dispatch}/>
}

function QuizWithRandomNumber(props) {
    const myQuizCardWithStorage = useQuizCardWithStorage()
    const dispatch = useQuizCardWithStorageDispatch()
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [showAnswer, setShowAnswer] = useState(null);
    const [answerIsRight, setAnswerIsRight] = useState(null);
  

    const content = myQuizCardWithStorage?.protoData;
    const email = myQuizCardWithStorage?.email;
    const user = myQuizCardWithStorage?.user;
    const avatarUrl = myQuizCardWithStorage?.avatarUrl;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleChange(event) {
      setValue(event.target.value);
    }
  
   // let parser = new FormulaParser();
    let parser = new formulaParser.Parser();
  
  
  
    let quizString = props.text;
    //let quizString = `this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function`;
    const searchRegExp = /{var1-10}/g;
    const replaceWith = props.randomNumber.toString();
    quizString = quizString.replace(searchRegExp, replaceWith);
  
    let answer = props.answer.replace(searchRegExp, replaceWith);
    answer = Math.round(parser.parse(answer).result * 1000) / 1000;
  
    let stringExtractor = extract(["{=", "}"]);
    let stuffIneed = stringExtractor(quizString);
    //console.log(stuffIneed);
    // Outputs: [ 'is', 'text', 'extracted', 'reusable' ]
  
    for (let i = 0; i < stuffIneed.length; i++) {
      let feedback = Math.round(parser.parse(stuffIneed[i]).result * 1000) / 1000;
      // console.log(answer);
      quizString = quizString.replace("{=" + stuffIneed[i] + "}", feedback);
    }
  
    function handleCheckAnswer() {
      setShowAnswer(true);
      if (
        parseFloat(value) / parseFloat(answer) < 1.02 &&
        parseFloat(value) / parseFloat(answer) > 0.98
      ) {
        setAnswerIsRight(true);
        if (email.length > 6) {
          let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
          let idPost = firebase.database().ref(userEmail).child("posts").push()
            .key;
          let currentDay = new Intl.DateTimeFormat("en", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })
            .format(new Date())
            .replace(/[^a-zA-Z0-9]/g, "_");
  
          let postObject = {
            id: idPost, //Math.floor(Math.random() * 1001),
            title: props.title,
            theme: props.theme,
            answer: answer,
            comment: props.title + " (" + props.theme + ")", //Тема
            type: "spreadsheet",
            content: createProtoObject(content),
            quizString: quizString,
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
            title: props.title,
            theme: props.theme,
            email: email,
            user: user,
            avatarUrl: !!avatarUrl ? avatarUrl : null,
            timestamp: +Date.now(),
          };
  
       //   dispatch(createPost(postObject));
          var updates = {};
          updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
          updates[
            "/currentDay/" + currentDay + "/posts/" + idPost
          ] = currentDayObject;
          // updates['/posts/' + user +  newPostKey] = postData;
          // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
          console.log(updates)
      //    return firebase.database().ref().update(updates);
        }
      }
    }
  
    return (
      <>
        <Card bg={"light"} style={{ width: "95%", margin: "1rem" }}>
          <Card.Header onClick={handleShow}>{props.header}</Card.Header>
          <Card.Body>
            <Card.Title>{!!props?.setId ? props.setId : ""} {props.title}</Card.Title>
            <div dangerouslySetInnerHTML={{ __html: quizString }}></div>
            {!!props?.media && <ShowQuizMedia media={props.media} randomNumber={props.randomNumber} />}
              <SpreadsheetLayout quizString={quizString} theme={props.theme} />
          </Card.Body>
  
          {showAnswer ? (
            <InputGroup size="sm" style={{ width: "95%", margin: "1rem" }}>
              <InputGroup>
  
                <InputGroup.Text id="basic-addon1">
                  <span
                    className={answerIsRight ? "text-success" : "text-danger"}
                  >
                    Правильный ответ: {answer}
                  </span>
                </InputGroup.Text>
              </InputGroup>
              <FormControl
                value={value}
                type="number"
                onChange={handleChange}
                aria-label="Answer"
                aria-describedby="inputGroup-answer"
                readOnly
              />
            </InputGroup>
          ) : (
            <InputGroup size="sm" style={{ width: "95%", margin: "1rem" }}>
              <InputGroup>
                <Button variant="outline-secondary" onClick={handleCheckAnswer}>
                  Ответ
                </Button>
              </InputGroup>
              <FormControl
                value={value}
                type="number"
                onChange={handleChange}
                aria-label="Answer"
                aria-describedby="inputGroup-answer"
              />
            </InputGroup>
          )}
  
          {!!props?.hint && showAnswer ? (
            <div className="text-secondary ml-3 mb-2"
            dangerouslySetInnerHTML={{ __html: props.hint }}
            >           
            </div>
  
          ) : // <ReactMarkdown source={props.hint} escapeHtml={false} /></div>
            null}
        </Card>
        <Modal show={show} onHide={handleClose} size="xl" scrollable centered>
          <Modal.Header closeButton>
            <small>{props.title}</small>
            {/* <Modal.Title>{props.title}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <small
            dangerouslySetInnerHTML={{ __html: props.hint }}            
            ></small>
            {/* <ReactMarkdown source={quizString} escapeHtml={false} /> */}
            <SpreadsheetLayout
              quizString={quizString}
              title={props.title}
              answer={answer}
              answerIsRight={answerIsRight}
              theme={props.theme}
            />
          </Modal.Body>
          <Modal.Footer>
            <InputGroup size="sm" style={{ width: "95%", margin: "1rem" }}>
              <InputGroup>
                {showAnswer ? (
                  <InputGroup.Text id="basic-addon1">
                    <span
                      className={answerIsRight ? "text-success" : "text-danger"}
                    >
                      Правильный ответ: {answer}
                    </span>
                  </InputGroup.Text>
                ) : (
                  <Button variant="outline-secondary" onClick={handleCheckAnswer}>
                    Ответ
                  </Button>
                )}
              </InputGroup>
              <FormControl
                value={value}
                type="number"
                onChange={handleChange}
                aria-label="Answer"
                aria-describedby="inputGroup-answer"
              />
            </InputGroup>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

function MultipleChoicesQuizShadow() {
    return <div>MultipleChoicesQuiz</div>
}

function MultipleChoicesQuiz(props) {
    const myQuizCardWithStorage = useQuizCardWithStorage()
    const dispatch = useQuizCardWithStorageDispatch()

    const [show, setShow] = useState(false);
    const [showAnswer, setShowAnswer] = useState(null);
    const [answerIsRight, setAnswerIsRight] = useState(null);
    const [value, setValue] = useState("");


    // const content = useSelector(selectSpreadsheetProtoData);
    const email = myQuizCardWithStorage?.email;
    const user = myQuizCardWithStorage?.user;
    const avatarUrl = myQuizCardWithStorage?.avatarUrl;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCheckboxChange(event) {
        // console.log(event.target.id);
        // const target = event.target;
        // const checked = target.checked;
        // const name = target.name;
        setValue(event.target.id);
    }

    function handleCheckAnswer() {
        setShowAnswer(true);
        if (value === props.answers[0]) {
            setAnswerIsRight(true);

            if (email.length > 6) {
                let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
                let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");
                let currentDay = new Intl.DateTimeFormat("en", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })
                    .format(new Date())
                    .replace(/[^a-zA-Z0-9]/g, "_");

                let postObject = {
                    id: idPost, //Math.floor(Math.random() * 1001),
                    title: props.title,
                    theme: props.theme,
                    answer: props.answers[0],
                    comment: props.title + " (" + props.theme + ")", //Тема
                    type: "multiplechoices",
                    content: props.text,
                    quizString: props.text,
                    deleted: false,
                    email: email,
                    user: user,
                    avatarUrl: !!avatarUrl ? avatarUrl : "",
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
                    title: props.title,
                    theme: props.theme,
                    email: email,
                    user: user,
                    avatarUrl: !!avatarUrl ? avatarUrl : null,
                    timestamp: +Date.now(),
                };

              //  dispatch(createPost(postObject));
                var updates = {};
                updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
                updates[
                    "/currentDay/" + currentDay + "/posts/" + idPost
                ] = currentDayObject;
                // updates['/posts/' + user +  newPostKey] = postData;
                // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
               // return firebase.database().ref().update(updates);
               console.log(updates)
            }
        }
    }

    return (
        <>
            <Card bg={"light"} style={{ width: "95%", margin: "1rem" }}>
                <Card.Header onClick={handleShow}>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{!!props?.setId ? props.setId : ""} {props.title}</Card.Title>
                    {!!props?.imageurl ? (
                        <Card.Img variant="top" src={props.imageurl} />
                    ) : null}

                    {/* {!!props?.laboratoryChart ? <GetChartForQuiz laboratoryChart={props.laboratoryChart} /> : null} */}
                    <div
                    dangerouslySetInnerHTML={{ __html: props.text }}
                    ></div>
                    <Card.Text>
                        {/*       <ReactMarkdown source={props.text} escapeHtml={false} /> */}
                        <Form.Group controlId={"formBasicCheckbox"} >
                            {props.choices.map((item, index) =>
                                <Form.Check
                                    key={index}
                                    type='radio' // "checkbox"
                                    label={item}
                                    onChange={handleCheckboxChange}
                                    name={"item"}
                                    id={item}
                                    className="mb-2"
                                />
                            )}
                        </Form.Group>

                    </Card.Text>
                </Card.Body>
                <InputGroup size="sm" style={{ width: "95%", margin: "1rem" }}>
                    <InputGroup>
                        {showAnswer ? (
                            <InputGroup.Text id="basic-addon1">
                                <span
                                    className={answerIsRight ? "text-success" : "text-danger"}
                                >
                                    Правильный ответ: {props.answers[0]}
                                </span>
                            </InputGroup.Text>
                        ) : (
                            <Button variant="outline-secondary" onClick={handleCheckAnswer}>
                                Ответ
                            </Button>
                        )}
                    </InputGroup>
                </InputGroup>
            </Card>
            <Modal show={show} onHide={handleClose} size="xl" scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Card.Body>
                    <Card.Title> {props.title}</Card.Title>
                    <div
                    dangerouslySetInnerHTML={{ __html: props.text }}
                    ></div>
                    <Card.Text>
                        {/* <ReactMarkdown source={props.text} escapeHtml={false} /> */}
                        {props.choices.map((item, index) => (
                            <Form.Group controlId={"formBasicCheckbox" + index} key={index}>
                                <Form.Check
                                    type="checkbox"
                                    label={item}
                                    onChange={handleCheckboxChange}
                                    name={item}
                                />
                            </Form.Group>
                        ))}
                    </Card.Text>
                </Card.Body>
                <InputGroup size="sm" style={{ width: "95%", margin: "1rem" }}>
                    <InputGroup>
                        {showAnswer ? (
                            <div>
                                <InputGroup.Text id="basic-addon1">
                                    <span
                                        className={answerIsRight ? "text-success" : "text-danger"}
                                    >
                                        Правильный ответ: {props.answers[0]}
                                    </span>
                                </InputGroup.Text>
                                {!!props?.hint ? (
                                    <div className="text-secondary ml-3 mb-2"
                                    dangerouslySetInnerHTML={{ __html: props.hint }}
                                    ></div>
                                ) : // <ReactMarkdown source={props.hint} escapeHtml={false} /></div>
                                    null}
                            </div>
                        ) : (
                            <Button variant="outline-secondary" onClick={handleCheckAnswer}>
                                Ответ
                            </Button>
                        )}
                    </InputGroup>
                </InputGroup>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}






function SingleQuizCardWithStorage(props) {
    const [show, setShow] = useState(false);

    let randomNumber = Math.random() * 10;

    if (props.text.includes("{=")) {
        return <QuizWithRandomNumber {...props} randomNumber={randomNumber} />;
    }

    if (!!props?.choices) {
        let { choices, ...other } = props;
        return <MultipleChoicesQuiz choices={shuffle(choices)} {...other} />;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card bg={"light"} style={{ width: "95%", margin: "1rem" }} key={props.key}>
                <Card.Header onClick={handleShow}>{props.header}</Card.Header>
                <Card.Body>
                    {!!props.imageurl ? (
                        <Card.Img variant="top" src={props.imageurl} />
                    ) : null}
                    <Card.Title>{props.title}</Card.Title>

                    <div
                        dangerouslySetInnerHTML={{ __html: props.text }}
                    >

                        {/* <ReactMarkdown source={props.text} escapeHtml={false} /> */}
                    </div>
                    {props.children}
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} size="xl" scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        dangerouslySetInnerHTML={{ __html: props.text }}
                    ></div>
                    {/* <ReactMarkdown source={props.text} escapeHtml={false} /> */}
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



function QuizSet({ set, setTitle }) {
    const [selectedQuiz, setSelectedQuiz] = useState(0);
    const [loading, setLoading] = useState(false);

    function doSelectQuiz(index) {
        setLoading(true);
        setSelectedQuiz(index);
        setLoading(false);
    }

    let quizprops = quizesSets[set][selectedQuiz];
    return <div>
        <Navbar bg="light">
            <Navbar.Brand >{setTitle}</Navbar.Brand>
        </Navbar>
        <br />
        {/* <Navbar className="bg-light justify-content-between mb-3"> */}
        <ButtonGroup size={quizesSets[set].length < 5 ? "lg" : "sm"}>
            {quizesSets[set].map((quiz, index) => (
                <Button
                    variant="outline-secondary"
                    onClick={() => doSelectQuiz(index)}
                    key={index}
                >
                    {quizesSets[set].length < 10 ? <span className="m-2" >{index + 1}</span> : <small>{index + 1}</small>}
                </Button>
            ))}
        </ButtonGroup>
        {/* </Navbar> */}

        {loading ? <div>...</div> : <QuizCardWithStorage key={selectedQuiz} setId={selectedQuiz + 1} {...quizprops} />}


    </div>
}




function QuizCardWithStorage(props) {
    if (props?.type === "OneRandomManyAnswers") { return <OneRandomManyAnswers {...props} /> }

    return <div>
        {!!props?.set ? <QuizSet {...props} /> : <SingleQuizCardWithStorage  {...props} />}
    </div>

}

function QuizCardWithStoragePage() {
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


    return <QuizCardWithStorageProvider>
        <QuizCardWithStorage set={"call_option_holder"} setTitle="Задачи по покупателю опциона на покупку" />
    </QuizCardWithStorageProvider>
}
// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        //   const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(QuizCardWithStoragePage
                //   , { commentID: commentID }
            )
        );
    });

console.log('Accounting Case');