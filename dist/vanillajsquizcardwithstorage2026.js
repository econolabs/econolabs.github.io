
// <!doctype html>
// <html lang="ru">
//   <head>
//     <meta charset="utf-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1, shrink-to-fit=no"
//     />
//     <link rel="stylesheet" href="../dist/original.css" />
//     <script src="./quizesSets.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/hot-formula-parser@4.0.0/dist/formula-parser.min.js"></script>
//     <script src="../dist/react18.3.1.production.min.js"></script>
//     <script src="../dist/react-dom18.3.1.production.min.js"></script>
//     <script src="../dist/redux-toolkit.umd.min.js"></script>
//     <script src="../dist/react-bootstrap1.6.8.min.js"></script>

//         <script src="../dist/katex.min.js"></script>
//     <script
//       defer
//       src="../dist/auto-render.min.js"
//     ></script>

   
//     <link rel="stylesheet" href="../dist/katex.min.css" />

//         <script src="../dist/chart.umd.min.js"></script>


//     <title>Обеспечение качества и сертификация информационных систем</title>
//   </head>

//   <body
//     data-api="AIzaSyDUamZR2aXuP2rFG1AFpb1Ni8aZA5uhSj4"
//     data-base="fincalculations"
//     data-app="1:892270777573:web:bdc13e9b47334b4319700c"
//   >
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a target="_blank" class="navbar-brand" href="/">Econolabs</a>
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item">
//             <a class="nav-link" href="#"><span class="sr-only"></span></a>
//           </li>
//         </ul>
//         <form class="form-inline my-2 my-lg-0">
//           <a href="https://vk.com/dmglvn">
//             <img
//               loading="lazy"
//               src="https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1"
//               alt=""
//               style="
//                 width: 40px;
//                 height: 40px;
//                 border-radius: 50%;
//                 filter: grayscale(100%);
//                 object-fit: cover;
//               "
//             />
//           </a>
//         </form>
//       </div>
//     </nav>

//     <div class="container">
        
//        <div class="card mb-1" style="max-width: 800px">
//         <img
//           src="../quiz.avif"
//           class="card-img-top"
//           style="filter: grayscale(1)"
//           alt="quiz"
//         />
//         <div class="card-body">
//           <div class="container" id="formcontainer" style="display: none">
//             <form>
//               <div class="mb-3">
//                 <label for="emailInput" class="form-label">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="emailInput"
//                   aria-describedby="emailHelp"
//                 />
//                 <div id="emailHelp" class="form-text">
//                   Email может быть фиктивный. Пароль НЕ требуется
//                 </div>
//               </div>
//               <div class="mb-3">
//                 <label for="user" class="form-label">ФИО Группа</label>
//                 <input type="text" class="form-control" id="userInput" />
//               </div>

//               <button
//                 type="submit"
//                 class="btn btn-outline-secondary btn-sm m-2 align-text-bottom"
//                 id="loginbutton"
//               >
//                 Сохранить
//               </button>
//             </form>
//           </div>
//           <div
//             class="container my-1 d-flex flex-wrap"
//             id="quizbuttonslist"
//           ></div>
//           <div class="container" id="quizcontainer" style="display: none">
//             <div class="card" style="min-height: 100px">
//               <div class="card-header" id="quizHeader"></div>
//               <div class="card-body">
//                 <h5 class="card-title fade-in-div" id="quizTitle">
//                   Выберите тестовое задание
//                 </h5>
//                 <div class="card-text fade-in-div" id="quizString"></div>
//                 <div
//                   id="box"
//                   class="jxgbox"
//                   style="width: 500px; aspect-ratio: 1/1; display: none"
//                 ></div>
//                 <form id="quizform">
//                   <div id="quizChecks" class="m-1 p-1"></div>
//                   <div id="quizHint" class="m-1 p-1"></div>
//                   <div
//                     class="container p-1 m-1"
//                     id="accountingblock"
//                     style="display: none"
//                   ></div>
//                   <div id="quizformdataarray"></div>
//                   <input
//                     type="text"
//                     class="form-control form-control-sm"
//                     id="feedback"
//                     placeholder="Числовой ответ"
//                     style="display: none"
//                   />
//                   <div id="usercalculations" style="display: none">
//                     <label
//                       for="inputFormula"
//                       class="col-form-label"
//                       id="resformula"
//                       >Калькулятор</label
//                     >
//                     <input
//                       type="text"
//                       class="form-control form-control-sm"
//                       id="inputFormula"
//                     />
//                   </div>
//                   <textarea
//                     class="form-control my-3"
//                     id="userComment"
//                     rows="2"
//                     style="display: none"
//                   >
// Мой комментарий</textarea
//                   >
//                   <button
//                     type="submit"
//                     class="btn btn-outline-primary m-3"
//                     id="answerButton"
//                     style="display: none"
//                   >
//                     Ответить
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>

//     <script
//       src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
//       integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
//       integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
//       integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
//       crossorigin="anonymous"
//     ></script>

//   <script src="../dist/basicfirebasecrudauthservices.js"></script>
//     <script src="./vanillajscrudutilities.js"></script>
//     <script src="./jsxtemplatefunctions.js"></script>
//       <script src="../dist/vanillajsquizcardwithstorage2026.js"></script>

//     <!-- KaTeX autorender: рендеринг формул после загрузки DOM -->
//     <script>
//       document.addEventListener("DOMContentLoaded", function () {
//         renderMathInElement(document.body, {
//           delimiters: [
//             { left: "\\[", right: "\\]", display: true },
//             { left: "\\(", right: "\\)", display: false },
//           ],
//           throwOnError: false,
//           errorColor: "#cc0000",
//           macros: {
//             "\\N": "\\mathbb{N}",
//             "\\R": "\\mathbb{R}",
//             "\\Z": "\\mathbb{Z}",
//             "\\E": "\\mathbb{E}",
//             "\\Var": "\\mathrm{Var}",
//             "\\Cov": "\\mathrm{Cov}",
//           },
//         });
//       });
//     </script>

//     <script src="../dist/charts.js"></script>

//     <script src="../dist/jsxgraphcore.js"></script>
// <link rel="stylesheet" href="../dist/jsxgraph.css">
// <script src="../dist/jsxgraphs.js"></script>

//   </body>
// </html>





let { alphabet, loadState, shuffle, getFirebaseNode,
    updateFirebaseNode, getFirebaseNodeKey, saveState } = basicfirebasecrudauthservices;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const store = createApplicationStore();

function doSaveQuiz() {
    let { pageIndex, randomNumber, answer = null } = store.getState().application;

    let { title, theme, text, hint = "", dataArray = [], answers, type } =
        window.quizesSets[pageIndex];



    let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    })
        .format(new Date())
        .replace(/[^a-zA-Z0-9]/g, "_");

    let ruDate = new Intl.DateTimeFormat("ru", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(new Date()) //Date().toJSON()  

    getUser()
        .then(res => {
            let { userEmail, user, avatarUrl = "https://econolabs.github.io/freelancer.jpg" } = res;
            let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");

            let quizString = text;
            let hint = $("#quizHint").innerHTML;

            let quiztype = !!answer || type.includes("random") ? "spreadsheet" : "multiplechoices";

            if (!!answer || type.includes("random")) {
                quizString =
                    processquizwithrandomnumber({
                        quizString: text, //"this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function",
                        answer: answer,
                        randomNumber: randomNumber
                    }).quizString;
            }

            let answerTextInLine = Array.isArray(answers) && answers.length > 0
                ? answers.map(item => item).join("<br>") : "";
            console.log(answerTextInLine)


            let postObject = {
                id: idPost,
                title: title,
                theme: theme,
                comment: title + " (" + theme + ")",
                type: quiztype,
                answer: answerTextInLine,
                //      content: {A1: ""},
                quizString: quizString,
                deleted: false,
                email: userEmail,
                hint: hint,
                user: user,
                avatarUrl: avatarUrl,
                date: ruDate
            };

            let currentDayObject = {
                id: idPost,
                title: title,
                theme: theme,
                email: userEmail,
                user: user,
                avatarUrl: avatarUrl,
                timestamp: +Date.now(),
            };
            let updates = {};

            updates["usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
            updates[
                "currentDay/" + currentDay + "/posts/" + idPost
            ] = currentDayObject;

            updateFirebaseNode(updates)
                .then(() => console.log(updates))


        });
    //  console.log()
    // let { userEmail, user, avatarUrl, email, activePage } = store.getState().application;
    // let { title, theme, text, hint = "", dataArray = [] } = resQuizesArray.data[activePage];
    // let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts")



    // store.dispatch(api.endpoints.updatesForOpenQuizes.initiate({
    //     base: "",
    //     updates: updates
    // }))
    //     .then(() => {
    //         //       console.log(identifyQuiz(title, text));
    //         store.dispatch(applicationSlice.actions.addCorrectQuiz(identifyQuiz(title, text)));
    //         $("#answerButton").classList.toggle("btn-outline-primary");
    //         $("#answerButton").classList.toggle("btn-success");
    //         if ((typeof hint === 'string') && hint.length > 0) {
    //             setMathInnerHTML($("#quizHint"), hint).catch(console.error)
    //         }
    //         //  $("#quizHint").innerHTML = hint;
    //         $("#answerButton").disabled = true;
    //     });
}







function getCheckedIds(name) {

    const checked = document.querySelectorAll(`input[name="${name}"]:checked`);

    if (checked.length === 0) return null;
    if (checked.length === 1 && checked[0].type === 'radio') return [checked[0].id];

    return Array.from(checked).map(input => input.id);
}

function handleCheckQuiz(e) {
    e.preventDefault();
    let { answer, randomNumber, pageIndex } = store.getState().application;
    let { hint, answers } =
        window.quizesSets[pageIndex];

    $("#answerButton").disabled = true;

    // console.log(answer);
    // console.log(answers);
    // console.log(getCheckedIds("quizselection"))



    if (Array.isArray(answers)) {

        getHashesArray(answers).then(res => {
            if (
                areArraysEqual(
                    getCheckedIds("quizselection"),
                    res
                )
            ) {
                $("#answerButton").classList = "btn  btn-outline-success"; doSaveQuiz();
            }
            else {
                $("#answerButton").classList = "btn btn-outline-danger";
            }
        })



        if (!document.body.dataset?.exam) {
            setMathInnerHTML($("#quizHint"),
                hint)
        }
    }




    if (
        !!randomNumber
    ) {
        let value = $("#feedback").value;
        // console.log(value)
        let reqanswer = processquizwithrandomnumber({
            quizString: "{={var1-10}}",
            answer,
            randomNumber
        }).answer

        console.log(randomNumber)
        if (
            parseFloat(value) / parseFloat(reqanswer) < 1.02 &&
            parseFloat(value) / parseFloat(reqanswer) > 0.98 ||
            (+reqanswer === 0 && +value === 0)
        ) { $("#answerButton").classList = "btn  btn-outline-success"; doSaveQuiz() }
        else { $("#answerButton").classList = "btn  btn-outline-danger"; }

        if (!document.body.dataset?.exam) {
            setMathInnerHTML($("#quizHint"),
                processquizwithrandomnumber({
                    quizString: hint,
                    answer: "{var1-10}",
                    randomNumber: randomNumber
                }).quizString)
        }
    }
}



function updateQuiz(activePage) {
    let quiz = window?.quizesSets[activePage];
    console.log(quiz);
    $("#answerButton").disabled = false

    let randomNumber = Array.isArray(quiz?.randomfrom) ?
        quiz.randomfrom[Math.floor(Math.random() * quiz.randomfrom.length)] :
        Math.floor((Math.random() * 9 + 1) * 1000) / 1000;


    $("#box").style.display = "none";
    $("#quizformdataarray").style.display = "none";
    $("#usercalculations").style.display = "none";
    $("#inputFormula").value = "";
    $("#resformula").innerHTML = "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>";
    $("#answerButton").disabled = false;

    // Обработка заголовков
    $("#quizTitle").innerHTML = quiz.title;
    $("#quizHeader").innerText = quiz.header + " " + (activePage + 1);
    $("#userComment").style.display = "block";
    $("#answerButton").className = "btn btn-outline-primary m-3";
    $("#answerButton").style.display = "block";

    $("#quizHint").innerHTML = "";

    // Уничтожаем предыдущий график, если он был
if (window.charts && window.charts._charts) {
    const prevId = quiz.chartjsId || "quizChart";
    // Уничтожаем все графики, которые могли остаться от прошлого теста
    window.charts._charts.forEach((chart, key) => {
        if (key === "binomChart" || key === "poisChart" || key === "normChart" || key === "contChart") {
            return; // не трогаем графики страницы (не тестовые)
        }
        chart.destroy();
        window.charts._charts.delete(key);
    });
}

    if (!!quiz?.JSXGraphType) {
        window.jsxtemplatefunctions[quiz.JSXGraphType]("box");
    }


    setMathInnerHTML($("#quizString"),
        processquizwithrandomnumber({
            quizString: quiz?.text,
            answer: "{var1-10}",
            randomNumber: randomNumber
        }).quizString)

    if (!!quiz?.answer && quiz.answer.includes("{var1-10}")) {

        $("#feedback").style.display = "block"

        store.dispatch(seedState({
            object: {
                answer: quiz.answer,
                randomNumber: randomNumber
            }
        }))

    }

    if (Array.isArray(quiz?.choices)) {
        console.log("choices");
        $("#feedback").style.display = "none"
        let markup;
        let mixedAnswers = basicfirebasecrudauthservices.shuffle([...quiz?.choices]);

        getHashesArray(quiz.answers)
            .then(res => {
                store.dispatch(seedState({
                    object: {
                        answers: res,
                        answer: null
                    }
                }))


                getHashesArray(mixedAnswers)
                    .then(res => {
                        if (quiz.answers.length === 1) {

                            markup = mixedAnswers.map((item, index) => {
                                return `<div class="form-check">
        <input class="form-check-input" type="radio" name="quizselection" id="${res[index]}">
        <label class="form-check-label" for='${res[index]}'>${item}</label>
    </div>`
                            }).join("");


                        } else {



                            markup = mixedAnswers.map((item, index) => {
                                return `
        <div class="form-check">
          <input class="form-check-input ${this.selector}" name="quizselection" type="checkbox" value="" id="${res[index]}">
          <label class="form-check-label" for='${res[index]}'>
          ${item}
          </label>
        </div>`
                            }).join("");



                        }

                       setMathInnerHTML($("#quizChecks"), markup);
                    })


            });





    }

// ============================================================
//  ОТРИСОВКА ГРАФИКОВ (поддержка одного или нескольких)
// ============================================================
if (quiz.chartjs && window.charts) {
    // Превращаем конфиг в массив: либо один график, либо несколько
    const chartsList = Array.isArray(quiz.chartjs)
        ? quiz.chartjs
        : [{
            type: quiz.chartjs,
            id: quiz.chartjsId || "quizChart",
            config: quiz.chartjsConfig || {},
            resultId: quiz.chartjsResultId
        }];

    // Обрабатываем каждый график
    chartsList.forEach((chartDef, index) => {
        const canvasId = chartDef.id || "quizChart" + index;
        const chartType = chartDef.type || "binom";
        const rawConfig = chartDef.config || {};

        // Прогоняем строки с подстановками через парсер
        const processedConfig = { type: chartType };
        for (const key of Object.keys(rawConfig)) {
            const value = rawConfig[key];
            if (typeof value === "string" && value.includes("{")) {
                processedConfig[key] = processquizwithrandomnumber({
                    quizString: value,
                    answer: "{var1-10}",
                    randomNumber: randomNumber
                }).quizString;
            } else {
                processedConfig[key] = value;
            }
        }

        // Колбэк результата (для normalArea)
        let onUpdate;
        if (chartDef.resultId) {
            const resultEl = document.getElementById(chartDef.resultId);
            if (resultEl) {
                onUpdate = ({ p, a, b }) => {
                    resultEl.innerHTML =
                        `<strong>P(${a.toFixed(2)} &lt; X &lt; ${b.toFixed(2)}) = ${p.toFixed(4)}</strong>` +
                        ` &nbsp;·&nbsp; <span class="text-muted">≈ ${(p * 100).toFixed(2)} %</span>`;
                };
            }
        }

        // Рисуем график
        setTimeout(() => {
            window.charts.renderChart(canvasId, processedConfig, onUpdate);
        }, 0);
    });
}


// ============================================================
//  ОТРИСОВКА JSXGRAPH
// ============================================================
if (quiz.jsxgraph && window.jsxgraphs) {
    const jsxList = Array.isArray(quiz.jsxgraph)
        ? quiz.jsxgraph
        : [{
            type: quiz.jsxgraph,
            id: quiz.jsxgraphId || "quizJsxGraph",
            config: quiz.jsxgraphConfig || {}
        }];

    jsxList.forEach((def, index) => {
        const boardId = def.id || "quizJsxGraph" + index;
        const jsxType = def.type || "function";
        const rawConfig = def.config || {};

        // Прогоняем строки с подстановками через парсер
        const processedConfig = {};
        for (const key of Object.keys(rawConfig)) {
            const value = rawConfig[key];
            if (typeof value === "string" && value.includes("{")) {
                processedConfig[key] = processquizwithrandomnumber({
                    quizString: value,
                    answer: "{var1-10}",
                    randomNumber: randomNumber
                }).quizString;
            } else {
                processedConfig[key] = value;
            }
        }

        setTimeout(() => {
            window.jsxgraphs.renderByType(boardId, jsxType, processedConfig);
        }, 0);
    });
}
}

function checkLocallyAndGlobally(index, title, text) {
    //    let correntlyAnsweredPages = store.getState().application.correntlyAnsweredPages;
    //    let correctquizes = store.getState().application.correctquizes;
    //  console.log(correntlyAnsweredPages, index)
    // if (correntlyAnsweredPages.includes(index)) {
    //     return true
    // } else {
    //     return foundQuiz(identifyQuiz(title, text), correctquizes)
    // }
    return null
}

function renderPagination() {

    $("#quizbuttonslist").innerHTML = window?.quizesSets.map((item, index) => {
        return `<button
         class='${checkLocallyAndGlobally(index, item.title, item.text)
                //  foundQuiz(identifyQuiz(item.title, item.text),correctquizes)
                ? "btn btn-sm btn-success page m-1" : "btn btn-sm btn-outline-secondary page m-1"}'
         page=${index}
        >
         ${index + 1}
         </button>`
    }).join("") +
        `<a href="/myworkbook" title="Рабочая тетрадь" class="btn btn-sm btn btn-outline-primary m-1" target="_blank">РТ</a>`
        ;

    let pagesLi = [...$$(".page")];
    pagesLi.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            const pageIndex = parseInt(event.target.getAttribute("page"));

            store.dispatch(seedState({
                object: {
                    answer: null,
                    randomNumber: null,
                    answers: [],
                    pageIndex: pageIndex
                }
            }))

            $("#userComment").value = "Мой комментарий";
            $("#quizChecks").innerHTML = "";
            $("#accountingblock").style.display = "none";
            $("#quizHint").innerHTML = "";
            $("#quizTitle").innerHTML = "";
            $("#quizString").innerHTML = "";
            //         if (!!resQuizesArray.data[pageIndex]?.quizesCasesId) {
            //             fetchQuizHint(pageIndex)
            //         } else { 
            updateQuiz(pageIndex)
            // }
        }, false);
    });


}

function doLogin(e) {
    e.preventDefault();
    let application = {
        email: document.getElementById("emailInput")?.value,
        user: document.getElementById("userInput")?.value,
    }
    saveState({ application })
    setTimeout(() => {
        window.location.reload()
    }, 2000)

}


$("#loginbutton").addEventListener("click", (e) => doLogin(e), false);
$("#quizform").addEventListener(`submit`, handleCheckQuiz);

async function initialLoad() {
    let quizesReady = Array.isArray(window?.quizesSets);
    if (!quizesReady) {
        $("#quizcontainer").innerHTML = `
    <div class="alert alert-danger" role="alert">
  No quizes yet!
</div>
    `;
        $("#quizcontainer").style.display = "block";
        return null
    } else {
        return getUser()
            .then(res => {
                console.log(res);
                if (!res) {
                    $("#quizcontainer").style.display = "none";
                    $("#formcontainer").style.display = "block";
                    return null;
                } else {
                    return true;
                }
            });
    }
}

initialLoad().then((res) => {
    console.log(res)
    if (!!res) {
        $("#quizcontainer").style.display = "block";
        renderPagination()
    }

});
