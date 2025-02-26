'use strict';

//https://daily.dev/blog/form-on-react-best-practices

const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;

const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
const Container = ReactBootstrap.Container;
const Pagination = ReactBootstrap.Pagination;
//https://www.testkarts.com/blog/post/implementing-pagination-in-react-js-using-react-bootstrap-without-using-library
const Alert = ReactBootstrap.Alert;

function createProtoArray(protoDataObject={}, maxRow = 15, maxColumn = 6) {
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
  
  
  // function calcData(data) {
  //     let newdata = JSON.parse(JSON.stringify(data));
  //     //let formulas = [];
    
  //     let oneMoreLoop = true;
  //     while (oneMoreLoop) {
  //       oneMoreLoop = false;
  //       for (let row = 0; row < newdata.length; row++) {
  //         for (let ix = 0; ix < newdata[row].length; ix++) {
  //           let cellValue = newdata[row][ix];
  //           //    console.log(cellValue);
  //           if (
  //             (typeof cellValue === "string" || cellValue instanceof String) &&
  //             cellValue.toString().includes("=")
  //           ) {
    
  //             let mapObj = {
  //                СТЕПЕНЬ: "POWER",
  //                ЧПС: "NPV",
  //                ВСД: "IRR",
  //                МВСД: "MIRR",
  //                СУММ: "SUM",
  //                СРЗНАЧ: "AVERAGE",
  //                ОКРУГЛ: "ROUND",
  //                СТАНДОТКЛОН: "STDEV"
  //               };
  //             let re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  //             cellValue = cellValue.replace(re, function (matched) {
  //               return mapObj[matched];
  //             });
    
  //             let result = calculateFormula(newdata, cellValue.slice(1));
  //             //       formulas.push({ formula: cellValue, result: result })
  //             if (result.later) {
  //               newdata[row][ix] = cellValue;
  //               oneMoreLoop = true;
  //             } else {
  //               newdata[row][ix] = result.res.result;
  //             }
  //           } else newdata[row][ix] = cellValue;
  //         }
  //       }
  //     }
  //     // console.log(newdata);
  //     return newdata;
  //   }
    
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



var data = [
    [1, 2],
    [6, 7],
    [11, 12,],
    [16, 17],
    [18, 26],
    [21, 20],
    [24, 28],
    [27, 35],
];

//https://support.microsoft.com/en-us/office/statistical-functions-reference-624dac86-a375-4435-bc25-76d659719ffd
let pages = [
    {
        id: 1, formula: "AVERAGE",
        html: `
     Returns the average (arithmetic mean) of the arguments. For example, if the range A1:A20 contains numbers, the formula =AVERAGE(A1:A20) returns the average of those numbers.<br><hr>
     Возвращает среднее (среднее арифметическое) аргументов. Например, если диапазон A1:A20 содержит числа, формула =AVERAGE(A1:A20) возвращает среднее значение этих чисел.
     `},

    {
        id: 2, formula: "AVEDEV",
        html: `
     Returns the average of the absolute deviations of data points from their mean.<br><hr>
     Возвращает среднее абсолютных значений отклонений точек данных от среднего. СРОТКЛ является мерой разброса множества данных.<br>
     Уравнение для среднего отклонения<br>
     <img src='https://cxcs.microsoft.net/static/public/office/ru-ru/2c328fff-b4af-4e42-bb34-4f7bf5e2e85c/ee16ba75f4d39db65ad8550c92983268af136c0b.gif' />
     `},
]


function BasicExample() {

    const [currentPage, setCurrentPage] = useState(1);

    const changePage = number => {
        if (currentPage === number) return;
        setCurrentPage(number);
        // scrollToTop();
    };

    const onPageNumberClick = pageNumber => {
      changePage(pageNumber);
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

    const pageNumbers = [...new Array(pages)].map((_, index) => {
        const pageNumber = index + 1;
        const isPageNumberFirst = pageNumber === 1;
        const isPageNumberLast = pageNumber === pagesCount;
        const isCurrentPageWithinTwoPageNumbers =
            Math.abs(pageNumber - currentPage) <= 2;

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

    console.log(pages.find(item => item.id === currentPage))

    return (
        <Container>
            <div style={{ display: 'block', width: 700, padding: 30 }}>
                <h4>React-Bootstrap Pagination Component {currentPage}</h4>
                <Pagination>
                    <Pagination.Prev onClick={onPreviousPageClick} />
                    {pageNumbers}
                    <Pagination.Next onClick={onNextPageClick} />
                </Pagination>
            </div>

            <div dangerouslySetInnerHTML={{ __html: pages.find(item => item.id === currentPage)?.html }
                // pages.find(item => item.id === currentPage)?.html
            }
            >
            </div>

            <ApplyFormula data={data} />

        </Container>
    );
}



function ApplyFormula({ data }) {
    const [formData, setFormData] = useState({
        formula: '',
        value: '',
    });


    useEffect(() => {
     // let parser = new formulaParser.Parser();
        const handler = setTimeout(() => {
        console.log(createNewDraft(createProtoArray({}, 6, 6)));

          
          console.log(formData.formula) 
        //    console.log(formData.formula);
          }, 1000);
          return () => {
            clearTimeout(handler);
          };
    }, [formData.formula])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>formula</Form.Label>
                <Form.Control type="text" placeholder="formula"
                    name="formula"
                    value={formData.formula}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">
                    Formula
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </Container>
}



// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(BasicExample, { commentID: commentID })
        );
    });