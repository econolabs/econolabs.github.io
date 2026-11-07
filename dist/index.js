let { alphabet, loadState, shuffle, getFirebaseNode,
    updateFirebaseNode, getFirebaseNodeKey, saveState,
    createApplicationStore, getUser, seedState,
    setMathInnerHTML, processquizwithrandomnumber,
    getHashesArray, areArraysEqual, evaluateFormula
} = basicfirebasecrudauthservices;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const store = createApplicationStore();


// ============================================================
//  СОХРАНЕНИЕ ОТВЕТА
// ============================================================
function doSaveQuiz() {
    let { pageIndex, randomNumber, answer = null } = store.getState().application;

    let { title, theme, text, hint = "", dataArray = [], answers, type } =
        window.quizesSets[pageIndex];

    let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short", year: "numeric", month: "short", day: "numeric",
    }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");

    let ruDate = new Intl.DateTimeFormat("ru", {
        weekday: "short", year: "numeric", month: "short", day: "numeric",
        hour: "numeric", minute: "numeric",
    }).format(new Date());

    getUser()
        .then(res => {
            let { userEmail, user, avatarUrl = "https://econolabs.github.io/freelancer.jpg" } = res;
            let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");

            let quizString = text;
            let hintHtml = $("#quizHint").innerHTML;

            let quiztype;
            let answerTextInLine = "";

            if (type === "casewithrandomnumber") {
                const userFormula = document.getElementById("feedback")?.value?.trim() || "";
                quiztype = "spreadsheet";
                answerTextInLine = userFormula;
            } else if (!!answer || type.includes("random")) {
                quiztype = "spreadsheet";
                quizString = processquizwithrandomnumber({
                    quizString: text, answer: answer, randomNumber: randomNumber
                }).quizString;
                answerTextInLine = Array.isArray(answers) && answers.length > 0
                    ? answers.map(item => item).join("<br>") : "";
            } else {
                quiztype = "multiplechoices";
                answerTextInLine = Array.isArray(answers) && answers.length > 0
                    ? answers.map(item => item).join("<br>") : "";
            }

            let postObject = {
                id: idPost, title, theme,
                comment: title + " (" + theme + ")",
                type: quiztype, answer: answerTextInLine,
                quizString, deleted: false, email: userEmail,
                hint: hintHtml, user, avatarUrl, date: ruDate
            };

            let currentDayObject = {
                id: idPost, title, theme, email: userEmail,
                user, avatarUrl, timestamp: +Date.now(),
            };

            let updates = {};
            updates["usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
            updates["currentDay/" + currentDay + "/posts/" + idPost] = currentDayObject;

            updateFirebaseNode(updates).then(() => console.log(updates));
        });
}


// ============================================================
//  ПРОВЕРКА ОТВЕТА
// ============================================================
function getCheckedIds(name) {
    const checked = document.querySelectorAll(`input[name="${name}"]:checked`);
    if (checked.length === 0) return null;
    if (checked.length === 1 && checked[0].type === 'radio') return [checked[0].id];
    return Array.from(checked).map(input => input.id);
}

function handleCheckQuiz(e) {
    e.preventDefault();
    let { answer, randomNumber, pageIndex } = store.getState().application;
    let { hint, answers } = window.quizesSets[pageIndex];

    $("#answerButton").disabled = true;

    // ---- casewithrandomnumber: проверка Excel-формулы ----
    if (window.quizesSets[pageIndex]?.type === "casewithrandomnumber") {
        const quiz = window.quizesSets[pageIndex];
        const userFormula = (document.getElementById("feedback")?.value || "").trim();

        const u = evaluateFormula(userFormula, quiz.dataArray);
        const c = evaluateFormula(quiz.answer, quiz.dataArray);

        let isCorrect = false;
        const normalize = (f) => f.replace(/^=/, "").replace(/\s+/g, "").toUpperCase();

        if (normalize(userFormula) === normalize(quiz.answer)) {
            isCorrect = true;
        } else if (u.ok && c.ok) {
            if (typeof u.value === "number" && typeof c.value === "number") {
                const tol = Math.max(1e-9, Math.abs(c.value) * 1e-6);
                isCorrect = Math.abs(u.value - c.value) <= tol;
            } else {
                isCorrect = JSON.stringify(u.value) === JSON.stringify(c.value);
            }
        }

        $("#answerButton").classList = isCorrect
            ? "btn btn-outline-success"
            : "btn btn-outline-danger";

        if (isCorrect) doSaveQuiz();

        if (!document.body.dataset?.exam) {
            const correct = evaluateFormula(quiz.answer, quiz.dataArray);
            const note = correct.ok
                ? `<div class="alert alert-info mt-2">Эталон: <code>=${quiz.answer}</code> даёт <strong>${correct.value}</strong></div>`
                : "";
            setMathInnerHTML($("#quizHint"), (quiz.hint || "") + note);
        }
        return;
    }

    // ---- multiplechoices ----
    if (Array.isArray(answers)) {
        getHashesArray(answers).then(res => {
            if (areArraysEqual(getCheckedIds("quizselection"), res)) {
                $("#answerButton").classList = "btn btn-outline-success"; doSaveQuiz();
            } else {
                $("#answerButton").classList = "btn btn-outline-danger";
            }
        });
        if (!document.body.dataset?.exam) setMathInnerHTML($("#quizHint"), hint);
    }

    // ---- mathwithrandomnumber ----
    if (!!randomNumber) {
        let value = $("#feedback").value;
        let reqanswer = processquizwithrandomnumber({
            quizString: "{={var1-10}}", answer, randomNumber
        }).answer;

        if (
            parseFloat(value) / parseFloat(reqanswer) < 1.02 &&
            parseFloat(value) / parseFloat(reqanswer) > 0.98 ||
            (+reqanswer === 0 && +value === 0)
        ) { $("#answerButton").classList = "btn btn-outline-success"; doSaveQuiz(); }
        else { $("#answerButton").classList = "btn btn-outline-danger"; }

        if (!document.body.dataset?.exam) {
            setMathInnerHTML($("#quizHint"), processquizwithrandomnumber({
                quizString: hint, answer: "{var1-10}", randomNumber
            }).quizString);
        }
    }
}


// ============================================================
//  ОТРИСОВКА ТЕСТА
// ============================================================
function updateQuiz(activePage) {
    let quiz = window?.quizesSets[activePage];
    console.log("=== updateQuiz ===", activePage, quiz?.type);

    $("#answerButton").disabled = false;

    let randomNumber = Array.isArray(quiz?.randomfrom) ?
        quiz.randomfrom[Math.floor(Math.random() * quiz.randomfrom.length)] :
        Math.floor((Math.random() * 9 + 1) * 1000) / 1000;

    $("#box").style.display = "none";
    $("#quizformdataarray").style.display = "none";
    $("#usercalculations").style.display = "none";
    $("#inputFormula").value = "";
    $("#resformula").innerHTML = "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>";

    $("#quizTitle").innerHTML = quiz.title;
    $("#quizHeader").innerText = quiz.header + " " + (activePage + 1);
    $("#userComment").style.display = "block";
    $("#answerButton").className = "btn btn-outline-primary m-3";
    $("#answerButton").style.display = "block";
    $("#quizHint").innerHTML = "";

    // Уничтожаем тестовые графики
    if (window.charts && window.charts._charts) {
        window.charts._charts.forEach((chart, key) => {
            if (["binomChart", "poisChart", "normChart", "contChart"].includes(key)) return;
            chart.destroy();
            window.charts._charts.delete(key);
        });
    }

    // === 1) Всегда отрисовываем условие задания ===
    const conditionPromise = setMathInnerHTML(
        $("#quizString"),
        processquizwithrandomnumber({
            quizString: quiz?.text, answer: "{var1-10}", randomNumber
        }).quizString
    );

    // === 2) Для кейса с таблицей — ждём условия, потом строим таблицу ===
    if (quiz?.type === "casewithrandomnumber") {
        conditionPromise
            .then(() => {
                try {
                    const dataArr = quiz.dataArray || [];
                    const maxCols = dataArr.length
                        ? Math.max(...dataArr.map(r => r.length))
                        : 0;

                    let tableHtml = `
                      <div class="excel-case">
                        <div class="excel-sheet">
                          <div class="excel-sheet-title">
                            <span class="excel-icon">X</span>
                            <span>${quiz.title || "Кейс"} — данные</span>
                          </div>
                          <div class="excel-table-wrap">
                            <table class="excel-table">
                              <thead>
                                <tr>
                                  <th class="excel-corner"></th>`;

                    for (let c = 0; c < maxCols; c++) {
                        tableHtml += `<th class="excel-col-header">${String.fromCharCode(65 + c)}</th>`;
                    }
                    tableHtml += `</tr></thead><tbody>`;

                    dataArr.forEach((row, rIdx) => {
                        const rowClass = rIdx === 0 ? ' class="excel-header-row"' : "";
                        tableHtml += `<tr${rowClass}>`;
                        tableHtml += `<th class="excel-row-header">${rIdx + 1}</th>`;
                        for (let c = 0; c < maxCols; c++) {
                            const val = row[c];
                            const isNum = typeof val === "number" && isFinite(val);
                            const cls = isNum ? ' class="excel-num"' : "";
                            const display = val === undefined || val === null ? "" : val;
                            tableHtml += `<td${cls}>${display}</td>`;
                        }
                        tableHtml += "</tr>";
                    });

                    tableHtml += `
                              </tbody>
                            </table>
                          </div>
                          <div class="excel-answer-label">Ответ</div>
                          <div class="excel-formula-bar">
                            <span class="excel-fx">fx</span>
                            <input type="text"
                                   id="feedback"
                                   class="form-control form-control-sm excel-formula-input"
                                   placeholder="Например: =AVERAGE(D2:D13)"
                                   autocomplete="off" spellcheck="false" />
                          </div>
                        </div>
                      </div>`;

                    const quizStringEl = document.getElementById("quizString");
                    if (!quizStringEl) throw new Error("#quizString не найден");
                    quizStringEl.insertAdjacentHTML("beforeend", tableHtml);

                    const feedbackEl = document.getElementById("feedback");
                    if (!feedbackEl) throw new Error("#feedback не создан (insertAdjacentHTML не сработал)");

                    // Песочница
                    let sandbox = document.getElementById("formulaSandbox");
                    if (!sandbox) {
                        sandbox = document.createElement("div");
                        sandbox.id = "formulaSandbox";
                        sandbox.className = "alert alert-secondary mt-2 mb-2";
                        quizStringEl.appendChild(sandbox);
                    }

                    const renderSandbox = () => {
                        const raw = feedbackEl.value;
                        if (!raw.trim()) {
                            sandbox.className = "alert alert-secondary mt-2 mb-2";
                            sandbox.innerHTML = `
                              <div class="text-muted small">
                                Песочница: начните вводить формулу, например
                                <code>=AVERAGE(D2:D13)</code>.
                              </div>
                              <button type="button" class="btn btn-sm btn-outline-secondary mt-2" id="sandboxTemplate">
                                Вставить шаблон =AVERAGE(D2:D13)
                              </button>
                            `;
                            const tpl = document.getElementById("sandboxTemplate");
                            if (tpl) tpl.addEventListener("click", () => {
                                feedbackEl.value = "=AVERAGE(D2:D13)";
                                renderSandbox();
                            });
                            return;
                        }

                        const res = evaluateFormula(raw, quiz.dataArray);
                        if (res.ok) {
                            sandbox.className = "alert alert-success mt-2 mb-2";
                            const display = typeof res.value === "number"
                                ? (Number.isInteger(res.value) ? res.value : res.value.toFixed(4))
                                : JSON.stringify(res.value);
                            sandbox.innerHTML = `✓ <strong>Результат:</strong> ${display}`;
                        } else {
                            sandbox.className = "alert alert-danger mt-2 mb-2";
                            sandbox.innerHTML = `✗ <strong>${res.error}</strong>` +
                                (res.hint ? `<div class="small mt-1">${res.hint}</div>` : "");
                        }
                    };

                    feedbackEl.addEventListener("input", renderSandbox);
                    feedbackEl.addEventListener("change", renderSandbox);
                    renderSandbox();

                    $("#quizChecks").innerHTML = "";
                    $("#answerButton").disabled = false;
                    $("#answerButton").style.display = "block";
                } catch (err) {
                    console.error("Ошибка отрисовки casewithrandomnumber:", err);
                    const qs = document.getElementById("quizString");
                    if (qs) {
                        qs.insertAdjacentHTML("beforeend",
                            `<div class="alert alert-danger mt-3">
                                <strong>Ошибка отрисовки таблицы:</strong>
                                <code>${err.message}</code>
                             </div>`);
                    }
                }
            })
            .catch(err => {
                console.error("setMathInnerHTML упал для casewithrandomnumber:", err);
            });

        return;
    }

    // === 3) Обычные типы: choices, random, charts, jsxgraph ===
    if (!!quiz?.answer && quiz.answer.includes("{var1-10}")) {
        $("#feedback").style.display = "block";
        store.dispatch(seedState({
            object: { answer: quiz.answer, randomNumber }
        }));
    }

    if (Array.isArray(quiz?.choices)) {
        $("#feedback").style.display = "none";
        let mixedAnswers = basicfirebasecrudauthservices.shuffle([...quiz.choices]);

        getHashesArray(quiz.answers).then(resAnswers => {
            store.dispatch(seedState({
                object: { answers: resAnswers, answer: null }
            }));

            getHashesArray(mixedAnswers).then(resMixed => {
                let markup;
                if (quiz.answers.length === 1) {
                    markup = mixedAnswers.map((item, index) => `
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="quizselection" id="${resMixed[index]}">
                          <label class="form-check-label" for='${resMixed[index]}'>${item}</label>
                        </div>`).join("");
                } else {
                    markup = mixedAnswers.map((item, index) => `
                        <div class="form-check">
                          <input class="form-check-input" name="quizselection" type="checkbox" value="" id="${resMixed[index]}">
                          <label class="form-check-label" for='${resMixed[index]}'>${item}</label>
                        </div>`).join("");
                }
                setMathInnerHTML($("#quizChecks"), markup);
            });
        });
    }

    // Графики Chart.js
    if (quiz.chartjs && window.charts) {
        const chartsList = Array.isArray(quiz.chartjs)
            ? quiz.chartjs
            : [{ type: quiz.chartjs, id: quiz.chartjsId || "quizChart",
                 config: quiz.chartjsConfig || {}, resultId: quiz.chartjsResultId }];

        chartsList.forEach((chartDef, index) => {
            const canvasId = chartDef.id || "quizChart" + index;
            const chartType = chartDef.type || "binom";
            const rawConfig = chartDef.config || {};

            const processedConfig = { type: chartType };
            for (const key of Object.keys(rawConfig)) {
                const value = rawConfig[key];
                if (typeof value === "string" && value.includes("{")) {
                    processedConfig[key] = processquizwithrandomnumber({
                        quizString: value, answer: "{var1-10}", randomNumber
                    }).quizString;
                } else {
                    processedConfig[key] = value;
                }
            }

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

            setTimeout(() => {
                window.charts.renderChart(canvasId, processedConfig, onUpdate);
            }, 0);
        });
    }

    // JSXGraph
    if (quiz.jsxgraph && window.jsxgraphs) {
        const jsxList = Array.isArray(quiz.jsxgraph)
            ? quiz.jsxgraph
            : [{ type: quiz.jsxgraph, id: quiz.jsxgraphId || "quizJsxGraph",
                 config: quiz.jsxgraphConfig || {} }];

        jsxList.forEach((def, index) => {
            const boardId = def.id || "quizJsxGraph" + index;
            const jsxType = def.type || "function";
            const rawConfig = def.config || {};

            const processedConfig = {};
            for (const key of Object.keys(rawConfig)) {
                const value = rawConfig[key];
                if (typeof value === "string" && value.includes("{")) {
                    processedConfig[key] = processquizwithrandomnumber({
                        quizString: value, answer: "{var1-10}", randomNumber
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


// ============================================================
//  ПАГИНАЦИЯ
// ============================================================
function checkLocallyAndGlobally() { return null; }

function renderPagination() {
    const total = window.quizesSets.length;
    const current = store.getState().application.pageIndex ?? 0;
    const WINDOW = 7;

    let start = Math.max(0, current - Math.floor(WINDOW / 2));
    let end = start + WINDOW - 1;
    if (end > total - 1) {
        end = total - 1;
        start = Math.max(0, end - WINDOW + 1);
    }

    const pageItems = [];
    for (let index = start; index <= end; index++) {
        const item = window.quizesSets[index];
        const isActive = index === current;
        let linkClass = "page-link";
        if (isActive) linkClass += " font-weight-bold";

        pageItems.push(`
          <li class="page-item ${isActive ? "active" : ""}">
            <a class="${linkClass}" href="#" page="${index}"
               ${isActive ? 'aria-current="page"' : ""}>
              ${index + 1}
              ${isActive ? '<span class="sr-only">(current)</span>' : ""}
            </a>
          </li>`);
    }

    const leftEllipsis = start > 0
        ? `<li class="page-item disabled"><span class="page-link">&hellip;</span></li>` : "";
    const rightEllipsis = end < total - 1
        ? `<li class="page-item disabled"><span class="page-link">&hellip;</span></li>` : "";

    const prevDisabled = current <= 0;
    const nextDisabled = current >= total - 1;

    $("#quizbuttonslist").innerHTML = `
      <nav aria-label="Навигация по тестам" class="d-flex flex-wrap align-items-center">
        <ul class="pagination pagination-sm mb-0 m-1 flex-nowrap">
          <li class="page-item ${prevDisabled ? "disabled" : ""}">
            <a class="page-link" href="#" id="pagePrev"
               ${prevDisabled ? 'tabindex="-1" aria-disabled="true"' : ""}>&laquo;</a>
          </li>
          ${leftEllipsis}
          ${pageItems.join("")}
          ${rightEllipsis}
          <li class="page-item ${nextDisabled ? "disabled" : ""}">
            <a class="page-link" href="#" id="pageNext"
               ${nextDisabled ? 'tabindex="-1" aria-disabled="true"' : ""}>&raquo;</a>
          </li>
        </ul>
        <a href="/myworkbook" title="Рабочая тетрадь"
           class="btn btn-sm btn-outline-primary m-1" target="_blank">РТ</a>
      </nav>`;

    const goToPage = (pageIndex) => {
        if (pageIndex === store.getState().application.pageIndex) return;
        if (pageIndex < 0 || pageIndex >= total) return;

        store.dispatch(seedState({
            object: { answer: null, randomNumber: null, answers: [], pageIndex }
        }));

        $("#userComment").value = "Мой комментарий";
        $("#quizChecks").innerHTML = "";
        $("#accountingblock").style.display = "none";
        $("#quizHint").innerHTML = "";
        $("#quizTitle").innerHTML = "";
        $("#quizString").innerHTML = "";

        updateQuiz(pageIndex);
        renderPagination();
    };

    $$(".pagination .page-link[page]").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            goToPage(parseInt(link.getAttribute("page"), 10));
        });
    });

    const prev = $("#pagePrev");
    const next = $("#pageNext");
    if (prev) prev.addEventListener("click", (e) => { e.preventDefault(); goToPage(current - 1); });
    if (next) next.addEventListener("click", (e) => { e.preventDefault(); goToPage(current + 1); });
}


// ============================================================
//  ЛОГИН
// ============================================================
function doLogin(e) {
    e.preventDefault();
    let application = {
        email: document.getElementById("emailInput")?.value,
        user: document.getElementById("userInput")?.value,
    };
    saveState({ application });
    setTimeout(() => { window.location.reload(); }, 2000);
}

$("#loginbutton").addEventListener("click", (e) => doLogin(e), false);
$("#quizform").addEventListener("submit", handleCheckQuiz);


// ============================================================
//  СТАРТ
// ============================================================
async function initialLoad() {
    if (!Array.isArray(window?.quizesSets)) {
        $("#quizcontainer").innerHTML = `<div class="alert alert-danger">No quizes yet!</div>`;
        $("#quizcontainer").style.display = "block";
        return null;
    }
    return getUser().then(res => {
        if (!res) {
            $("#quizcontainer").style.display = "none";
            $("#formcontainer").style.display = "block";
            return null;
        }
        return true;
    });
}

initialLoad().then(res => {
    if (!!res) {
        $("#quizcontainer").style.display = "block";
        renderPagination();
    }
});