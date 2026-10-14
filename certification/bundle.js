

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
