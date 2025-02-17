'use strict';

//https://daily.dev/blog/form-on-react-best-practices

const Button = ReactBootstrap.Button;
const ButtonGroup = ReactBootstrap.ButtonGroup;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Pagination = ReactBootstrap.Pagination;
//https://www.testkarts.com/blog/post/implementing-pagination-in-react-js-using-react-bootstrap-without-using-library
const Alert = ReactBootstrap.Alert;
const Modal = ReactBootstrap.Modal;


const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
const createContext = React.createContext;
const useContext = React.useContext;
const useReducer = React.useReducer;

function createProtoArray(protoDataObject = {}, maxRow = 15, maxColumn = 6) {
  Object.keys(protoDataObject).map((objKey) => {
    const [col, ...row] = objKey;
    let currentColIndex = alphabet.findIndex(item => item === col);
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
    let colArrayIndex = alphabet.findIndex((item) => item === col);
    let rowArrayIndex = parseInt(row) - 1;
    array[rowArrayIndex][colArrayIndex] = protoDataObject[objKey];
  });
  return array;
}

function createNewDraft(data) {
  //let newdata = JSON.parse(JSON.stringify(data));
  //let formulas = [];

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
  data: createNewDraft(createProtoArray({}, 6, 6)),
  protoData: createProtoArray({}, 6, 6)
};

function caseReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {

    // case "ADD_BOOK":
    // return produce(state, (draft) => {
    //   draft.books.list.push({ ...payload });
    // });


    case 'UPDATE_FORMULA':
      return immer.produce(state, (draft) => {
        draft.formulaValue = action.payload.formulaValue;
        draft.formulaRowIndex = action.payload.formulaRowIndex;
        draft.formulaColumnIndex = action.payload.formulaColumnIndex;
      });



    case 'UPDATE_DATA': {
      return immer.produce(state, (draft) => {
        let newProtoData = draft.protoData;
        newProtoData[action.payload.rowIndex][action.payload.columnIndex] = action.payload.value;
        draft.data = createNewDraft(newProtoData);
        draft.protoData = newProtoData;

      })
    }

    case 'NEW_EMPTY_SPREADSHEET': {
      let protoArray = createProtoArray({}, 6, 6);
      return immer.produce(state, (draft) => {
        draft.protoData = protoArray;
        draft.data = createNewDraft(protoArray);
        draft.formulaValue = protoArray[0][0];
        draft.expandView = true;
      })
    }


    case "SET_STORE_OBJECT": 
    return immer.produce(state, (draft) => {
      draft[action.payload.key] = action.payload.value;     
    });
     


    default:
      return state;
  }
  ;

  /*  switch (action.type) {
 
   
 
 
 
 
       
         case "SEED_ARRAY":
           return {
             ...state,
             [action.payload.arrayName]: action.payload.arrayItems
           }
     
         case "PUSH_SOME_ITEMS_TO_ARRAY":
           return {
             ...state,
             [action.payload.arrayName]: [
               ...state[action.payload.arrayName],
               ...action.payload.newArrayItems
             ]
           }
     
     
         case "PUSH_ITEM_TO_ARRAY":
           let pushnewarray = [...state[action.payload.arrayName]].push(action.payload.item);
           return {
             ...state,
             [action.payload.arrayName]: pushnewarray
           }
     
         case "DELETE_ITEM_FROM_ARRAY":
           let deletenewarray = [...state[action.payload.arrayName]].filter(item => item.id !== action.payload.item.id);
           return {
             ...state,
             [action.payload.arrayName]: deletenewarray
           }
     
     
         case "UPDATE_ITEM_IN_ARRAY":
           const index = state[action.payload.arrayName].findIndex(item => item.id === action.payload.id)
           if (index !== -1) {
             let updatenewarray = [...state[action.payload.arrayName]]
             updatenewarray[index] = action.payload.item
             return {
               ...state,
               [action.payload.arrayName]: updatenewarray
             }
     
           } else {
             return { ...state }
           }
     
         default:
           return { ...state }
       } */
};


function CaseProvider({ children }) {
  const [mycase, dispatch] = useReducer(
    caseReducer,
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

function LoginLogout() {
  const [show, setShow] = useState(false);
  const mycase = useCase();
  const dispatch = useCaseDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "email", value: e.currentTarget.elements.formEmail.value}
    });
    dispatch({
      type: "SET_STORE_OBJECT",
      payload: { key: "user", value: e.currentTarget.elements.formUser.value}
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
          <Modal.Title>Modal heading</Modal.Title>
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
    </Form></Modal.Body>
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

function SavePostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      SavePostModal
      </Button>

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

function SelectAndOpenModal() {
  return <div>Select And Open Modal</div>
}

function PostsButtonGroup(props) {
  const dispatch = useCaseDispatch();
  const [showSave, setShowSave] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  const handleClose = () => {
    setShowSave(false);
    setShowOpen(false);
  };
  const handleSaveShow = () => setShowSave(true);
  const handleOpenShow = () => setShowOpen(true);

  return (
    <>
      <ButtonGroup aria-label="Posts Buttons" size="sm">
        <Button
          variant="outline-secondary"
          onClick={() => dispatch({
            type: 'NEW_EMPTY_SPREADSHEET',
            payload: {}
          })}
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
          onClick={() => handleOpenShow()}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Открыть расчет"
        >
          Откр
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
      {showOpen ? (
        <SelectAndOpenModal show={showOpen} handleClose={handleClose} {...props} />
      ) : null}
    </>
  );
}

function FormulaBlock() {
  const mycase = useCase();
  //const formulaValue = useSelector(selectSpreadsheetFormulaValue);
  const [formula, setFormula] = useState('');
  const dispatch = useCaseDispatch();

let formulaRowIndex = !!mycase && !!mycase?.formulaRowIndex ? mycase. formulaRowIndex: 0;
let formulaColumnIndex = !!mycase && !!mycase?.formulaColumnIndex ? mycase.formulaColumnIndex : 0;

  function onKeyPressOnInput(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit() {
    let valueChecked = isNaN(formula) ? !!formula ? formula : "" : +formula;

    dispatch({
      type: "UPDATE_DATA",
      payload: {
        rowIndex: formulaRowIndex,
        columnIndex: formulaColumnIndex,
        value: valueChecked,
      }
    });

    dispatch({
      type: "UPDATE_FORMULA",
      payload: {
        formulaValue: valueChecked,
        formulaRowIndex: formulaRowIndex,
        formulaColumnIndex: formulaColumnIndex
      }
    } );
    setFormula("");

  }

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
          value={formula === "" ? !!mycase && !!mycase?.formulaValue ? mycase.formulaValue : "" : formula}
          onChange={(e) => setFormula(e.target.value)}
          onKeyPress={(e) => onKeyPressOnInput(e)}
        />
      </div>
    </div>
  );
}

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];


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

  console.log(mycase);

  return (
    <>
      {!!mycase && !!mycase?.data && mycase.data.map((row, rowIndex) => {
        return row.map((column, columnIndex) => {
          return (
            <Cell
              key={"" + rowIndex + "_" + columnIndex}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              active={
                formulaRowIndex === rowIndex &&
                  formulaColumnIndex === columnIndex
                  ? true
                  : false
              }
            />
          );
        });
      })}
    </>
  );
}

function Cell({
  rowIndex = 0,
  columnIndex = 0,
  active = true
}) {
  const mycase = useCase();
  const data = !!mycase && !!mycase?.data ?
    mycase?.data[rowIndex][columnIndex] : "";
  const proDataValue = !!mycase && !!mycase?.data ?
    mycase?.protoData[rowIndex][columnIndex] : "";
  const [value, setValue] = useState(data);

  const dispatch = useCaseDispatch();


  useEffect(() => {
    setValue(data);
  }, [data]);

  function onKeyPressOnInput(e) {
    if (e.key === "Enter") {
      let valueChecked = isNaN(value) ? !!value ? value : "" : +value;

      dispatch({
        type: "UPDATE_FORMULA",
        payload: {
          formulaRowIndex: rowIndex,
          formulaColumnIndex: columnIndex,
          formulaValue: !!value ? value : "",
        }
      });


      dispatch({
        type: "UPDATE_DATA",
        payload: {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          value: valueChecked,
        }
      });

    }
  }

  function clicked() {

    dispatch({
      type: "UPDATE_FORMULA",
      payload: {
        formulaRowIndex: rowIndex,
        formulaColumnIndex: columnIndex,
        formulaValue: proDataValue,
      }
    });


  }

  return (
    <input
      type="text"
      className={active ? "cells__input__active" : "cells__input"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClick={() => clicked()}
      onKeyPress={(e) => onKeyPressOnInput(e)}
    />
  );
}


function SpreadsheetLayout({
  quizString = "quizString",
  title = "title",
  answer = "answer",
  theme = "theme",
  answerIsRight = true
}) {
  const [expandView, toggle_expand_view] = useState(false);

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
              onClick={() => dispatch(new_empty_spreadsheet())}
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

        <ButtonGroup aria-label="Rows Buttons" size="sm">
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Добавить строку ниже"
            onClick={() => dispatch(add_row_under())}
          >
            +_
          </Button>
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Добавить строку выше"
            onClick={() => dispatch(add_row_before())}
          >
            +-
          </Button>
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Удалить эту строку"
            onClick={() => dispatch(delete_row())}
          >
            x-
          </Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Columns Buttons" size="sm">
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Добавить колонку справа"
            onClick={() => dispatch(add_column_after())}
          >
            +|
          </Button>
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Добавить колонку слева"
            onClick={() => dispatch(add_column_before())}
          >
            |+
          </Button>
          <Button
            variant="outline-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Удалить эту колонку"
            onClick={() => dispatch(delete_column())}
          >
            x|
          </Button>
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

    </div>
  </div>
}

function SpreadsheetCase() {
  return <CaseProvider>
    <SpreadsheetLayout />
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