Yt.prototype.simpleListen = function(e, t) {
        this.sendRequest("q", {
            p: e
        }, t)
    }, Yt.prototype.echo = function(e, t) {
        this.sendRequest("echo", {
            d: e
        }, t)
    },
    function(e) {
        ! function(e) {
            ke = e
        }("9.8.2"), de(new R("database", ((e, {
            instanceIdentifier: t
        }) => fr(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t)), "PUBLIC").setMultipleInstances(!0)), fe(Se, Ne, e), fe(Se, Ne, "esm2017")
    }();
let yr = window.immer.produce;
const vr = window.Redux.createStore((function(e = {
    isLoading: !0,
    error: !1,
    application: {},
    selectedPage: 0,
    currentInput: "",
    startIndex: 0,
    endIndex: 10,
    postsArray: [],
    tagsArray: [],
    dataArray: [],
    quizesArray: [],
    slidesArray: [],
    selectedSlide: {},
    mediaObject: {},
    selectedSlidePosition: 0,
    notesArray: [],
    selectedNote: {},
    selectedProject: {},
    navigationActiveLayoutComponent: "default",
    navigationActiveFormField: "url",
    spreadsheetProtoData: [],
    spreadsheetData: [],
    formulaValue: "",
    formulaRowIndex: 0,
    formulaColumnIndex: 0,
    spreadsheetTitle: "",
    expandView: !1
}, t) {
    if ("EXPAND_VIEW" === t.type) {
        return yr(e, (e => {
            e.expandView = !0
        }))
    }
    if ("SHRINK_VIEW" === t.type) {
        return yr(e, (e => {
            e.expandView = !1
        }))
    }
    if ("LOAD_SPREADSHEET_DATA" === t.type) {
        return yr(e, (e => {
            e.spreadsheetData = t.payload.spreadsheetData, e.spreadsheetProtoData = t.payload.spreadsheetProtoData, e.expandView = !0, e.isLoading = !1
        }))
    }
    if ("SET_EDIT_MODE_NOTE" === t.type) {
        return yr(e, (e => {
            e.navigationActiveLayoutComponent = "addNote", e.selectedNote = t.payload
        }))
    }
    if ("SET_PAGE_UPDATE_SELECTED_NOTE_NOTES_ARRAY" === t.type) {
        return yr(e, (e => {
            e.selectedPage = t.payload.selectedPage, e.startIndex = t.payload.startIndex, e.endIndex = t.payload.endIndex, e.selectedNote = t.payload.selectedNote;
            const n = e[t.payload.arrayName].findIndex((e => e.id === t.payload.selectedNote.id)); - 1 !== n ? e[t.payload.arrayName][n] = t.payload.selectedNote : e[t.payload.arrayName].push(t.payload.selectedNote)
        }))
    }
    if ("SET_PAGE_PROPS_IN_PAGING" === t.type) {
        return yr(e, (e => {
            e.selectedPage = t.payload.selectedPage, e.startIndex = t.payload.startIndex, e.endIndex = t.payload.endIndex
        }))
    }
    if ("START_LOADING" === t.type) {
        return yr(e, (e => {
            e.isLoading = !0
        }))
    }
    if ("SET_ERROR" === t.type) {
        return yr(e, (e => {
            e.error = t.payload
        }))
    }
    if ("STOP_LOADING" === t.type) {
        return yr(e, (e => {
            e.isLoading = !1
        }))
    }
    if ("SET_SELECTED_NOTE" === t.type) {
        return yr(e, (e => {
            e.selectedNote = t.payload
        }))
    }
    if ("SET_ACTIVE_LAYOUT_COMPONENT" === t.type) {
        return yr(e, (e => {
            e.navigationActiveLayoutComponent = t.payload
        }))
    }
    if ("SET_ACTIVE_FORM_FIELD" === t.type) {
        return yr(e, (e => {
            e.navigationActiveFormField = t.payload
        }))
    }
    if ("CHANGE_OBJECT_VALUE_BY_KEY" === t.type) {
        return yr(e, (e => {
            e[t.payload.objectKey] = t.payload.objectValue
        }))
    }
    if ("FILL_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            e[t.payload.arrayName] = t.payload.array
        }))
    }
    if ("FILL_NAMED_ARRAY_STOP_LOADING" === t.type) {
        return yr(e, (e => {
            e[t.payload.arrayName] = t.payload.array, e.isLoading = !1
        }))
    }
    if ("ADD_ITEM_TO_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            e[t.payload.arrayName].push(t.payload.item)
        }))
    }
    if ("ADD_SOME_ITEMS_TO_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            t.payload.newItems.forEach((n => {
                e[t.payload.arrayName].push(n)
            }))
        }))
    }
    if ("UPDATE_SOME_ITEMS_IN_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            t.payload.updatedItems.forEach((n => {
                const i = e[t.payload.arrayName].findIndex((e => e.id === n.id)); - 1 !== i && (e[t.payload.arrayName][i] = n)
            }))
        }))
    }
    if ("DELETE_ITEM_IN_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            const n = e[t.payload.arrayName].findIndex((e => e.id === t.payload.id)); - 1 !== n && e[t.payload.arrayName].splice(n, 1)
        }))
    }
    if ("UPDATE_ITEM_IN_NAMED_ARRAY" === t.type) {
        return yr(e, (e => {
            const n = e[t.payload.arrayName].findIndex((e => e.id === t.payload.item.id)); - 1 !== n ? e[t.payload.arrayName][n] = t.payload.item : e[t.payload.arrayName].push(t.payload.item)
        }))
    }
    return e
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class Cr {
    get(e, t) {
        const n = new Promise(((t, n) => {
            let i = localStorage.getItem(e);
            i ? t(i) : n()
        }));
        n.then((e => {
            t(JSON.parse(e))
        })), n.catch((e => {
            t({})
        }))
    }
    set(e, t) {
        localStorage.setItem(e, JSON.stringify(t))
    }
}
async function wr(e, t) {
    try {
        let i = await (n = cr(e, t), Ys((n = x(n))._repo, n).then((e => new hr(e, new lr(n._repo, n._path), n._queryParams.getIndex()))));
        if (i.exists()) return i.val()
    } catch (e) {
        console.log(e)
    }
    var n
}
async function br(e, t) {
    await Promise.all(t.map((t => async function(e, t) {
        let n = await wr(e, t.firebaseUrl);
        if (n = n || {}, "array" === t.reduxType && t?.filterByType ? vr.dispatch({
                type: "ADD_SOME_ITEMS_TO_NAMED_ARRAY",
                payload: {
                    arrayName: t.reduxStore,
                    newItems: Object.keys(n).map((e => n[e])).filter((e => e.type === t?.filterByType))
                }
            }) : "array" === t.reduxType && vr.dispatch({
                type: "ADD_SOME_ITEMS_TO_NAMED_ARRAY",
                payload: {
                    arrayName: t.reduxStore,
                    newItems: Object.keys(n).map((e => n[e]))
                }
            }), "object" === t.reduxType) return vr.dispatch({
            type: "CHANGE_OBJECT_VALUE_BY_KEY",
            payload: {
                objectKey: t.reduxStore,
                objectValue: n
            }
        }), n
    }(e, t))))
}

function Er(e, t = "openmedia", n, i = "postsArray") {
    vr.dispatch({
        type: "START_LOADING"
    });
    let s = {},
        r = [],
        o = [];
    n.forEach((n => {
        if (n?.item?.id) s[n.firebaseUrl + n.item.id] = n.item, o.push(n.item);
        else {
            let i = dr(ur(cr(e), t)).key;
            s[n.firebaseUrl + i] = {
                ...n.item,
                id: i
            }, r.push({
                ...n.item,
                id: i
            })
        }
    })), pr(cr(e), s).then((() => {
        r.length > 0 && vr.dispatch({
            type: "ADD_SOME_ITEMS_TO_NAMED_ARRAY",
            payload: {
                arrayName: i,
                newItems: r
            }
        }), o.length > 0 && vr.dispatch({
            type: "UPDATE_SOME_ITEMS_IN_NAMED_ARRAY",
            payload: {
                arrayName: i,
                updatedItems: o
            }
        }), vr.dispatch({
            type: "STOP_LOADING"
        })
    })).catch((e => console.log(e)))
}

function Ir({
    domNode: e,
    callback: t,
    initialValues: n
}) {
    console.log(n);
    ! function({
        domNode: e,
        formFields: t = [],
        initialValues: n = {},
        callback: i
    }) {
        var s = document.createElement("form");
        e.appendChild(s), s.setAttribute("id", "myForm"), s.setAttribute("class", "m-5"), t.forEach((e => {
            var t = document.createElement("div");
            t.setAttribute("class", "form-floating mb-3");
            var i = document.createElement("input");
            i.type = e.type, i.name = e.name, i.id = e.name, i.value = n?.[e.name] ? n[e.name] : "", i.setAttribute("class", "form-control"), t.appendChild(i);
            var r = document.createElement("label");
            r.innerHTML += e.label, t.appendChild(r), s.appendChild(t)
        }));
        var r = document.createElement("input");
        r.setAttribute("type", "submit"), r.setAttribute("value", "Submit"), r.setAttribute("class", "btn btn-primary"), s.appendChild(r), r.onclick = function(e) {
            e.preventDefault(), console.log("Save");
            var t = new FormData(s);
            i(Object.fromEntries(t.entries()))
        }
    }({
        domNode: e,
        formFields: [{
            name: "title",
            type: "text",
            label: "Вопрос"
        }, {
            name: "answer",
            type: "text",
            label: "Правильный ответ"
        }, {
            name: "alt1",
            type: "text",
            label: "Вариант 1"
        }, {
            name: "alt2",
            type: "text",
            label: "Вариант 2"
        }, {
            name: "alt3",
            type: "text",
            label: "Вариант 3"
        }, {
            name: "alt4",
            type: "text",
            label: "Вариант 4"
        }, {
            name: "alt5",
            type: "text",
            label: "Вариант 5"
        }, {
            name: "alt6",
            type: "text",
            label: "Вариант 6"
        }, {
            name: "alt7",
            type: "text",
            label: "Вариант 7"
        }, {
            name: "alt7",
            type: "text",
            label: "Вариант 8"
        }, {
            name: "hint",
            type: "text",
            label: "Комментарий"
        }],
        initialValues: n,
        callback: t
    })
}

function Tr(e, t) {
    e.innerHTML = '\n    <ul class="nav nav-tabs m-3" id="myTab" role="tablist">\n    <li class="nav-item">\n      <a class="nav-link active" id="show-tab" href="#show">\n        Тесты\n      </a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" id="edit-tab" href="#edit">Новый тест</a>\n    </li>\n  </ul>\n    ';
    const n = document.querySelectorAll("ul.nav-tabs > li > a"),
        i = document.querySelectorAll(".tab-pane");

    function s(e) {
        Object.keys(e).map((t => {
            e[t].classList.remove("active")
        }))
    }
    Object.keys(n).forEach((e => {
        n[e].addEventListener("click", (e => {
            s(n),
                function(e) {
                    e.currentTarget.classList.add("active")
                }(e), s(i),
                function(e) {
                    document.getElementById(e.target.id).classList.add("active"), t(e.target.id)
                }(e), e.preventDefault()
        }))
    }))
}

function Sr(e, t = []) {
    let n = t.map((e => {
        if (e?.choices && e?.answers) {
            let t = function(e = "-M", t = []) {
                return t.map(((t, n) => `<div class="mb-3">\n            <div class="form-check">\n         <input class="form-check-input" type="radio" name=${e} id=${e+"___"+n} value=${t}>\n         <label class="form-check-label" for=${e+"___"+n}>${t}</label>\n         </div>\n       </div>`)).join(" ")
            }(e.id, e.choices);
            return `<div class="card mb-3">\n        <div class="card-body">\n          <h5 class="card-title">${e.solved?"Ответ: "+e.answers[0]:"Тест"}</h5>\n          <p class="card-text">${e.title}</p>\n          <form id=${e.id}>` + t + `     </form>\n        </div>\n        <div class="card-body">\n          ${e.hint}\n        </div>\n      </div>`
        }
        return ""
    })).join(" ");
    e.innerHTML = '<div class="container">' + n + "</div>"
}
e.addquiz = function({
databaseURL: e = "https://example.firebaseio.com",
theme: t = "My Quizes",
header: n = "Quiz"
}) {
let i = document.getElementById("labs"),
    s = document.createElement("section");
i.appendChild(s), s.innerHTML = '\n    <nav class="navbar navbar-light bg-light">\n    <h3 style="margin-left: 5px">\n      <a aria-current="page" style="color:gray;text-decoration:none;" href="/">\n      Econolabs\n      </a>\n    </h3>\n  <a class="navbar-brand" href="https://vk.com/id151078439">\n   <img src="https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1" alt="" style="vertical-align:middle;width:40px;height:40px;border-radius:50%;filter:grayscale(100%);object-fit:cover">\n  </a>\n  </nav>\n    ', (new Cr).get("econolabs", (function(e) {
    console.log(e), vr.dispatch({
        type: "CHANGE_OBJECT_VALUE_BY_KEY",
        payload: {
            objectKey: "application",
            objectValue: e.application
        }
    })
}));
let r = document.createElement("section");
i.appendChild(r), Tr(r, (function(e) {
    vr.dispatch({
        type: "SET_ACTIVE_LAYOUT_COMPONENT",
        payload: e
    })
}));
let o = document.createElement("section");
i.appendChild(o), o.innerHTML = '\n    <div class="container">...</div>\n    ';
let a = function(e, t = {}) {
        "object" != typeof t && (t = {
            name: t
        });
        const n = Object.assign({
                name: ae,
                automaticDataCollectionEnabled: !1
            }, t),
            i = n.name;
        if ("string" != typeof i || !i) throw pe.create("bad-app-name", {
            appName: String(i)
        });
        const s = he.get(i);
        if (s) {
            if (T(e, s.options) && T(n, s.config)) return s;
            throw pe.create("duplicate-app", {
                appName: i
            })
        }
        const r = new O(i);
        for (const e of ce.values()) r.addComponent(e);
        const o = new _e(e, n, r);
        return he.set(i, o), o
    }({
        databaseURL: e
    }),
    l = gr(a);

function h(e) {
    let i = [],
        s = [];
    Object.keys(e).forEach((t => {
        (t.includes("alt") || "answer" === t) && e[t].toString().length > 0 && i.push(e[t]), "answer" === t && s.push(e[t])
    }));
    let r = {
        header: n,
        title: e.title,
        hint: e.hint,
        theme: t,
        choices: i,
        answers: s
    };
    Er(l, "openquizes", [{
        firebaseUrl: "openquizes/",
        item: r
    }], "quizesArray")
}
br(l, [{
    firebaseUrl: "openquizes",
    reduxType: "array",
    reduxStore: "quizesArray"
}]).then((() => {
    vr.dispatch({
        type: "STOP_LOADING"
    })
})), window.addEventListener("click", (e => {
    if (e.target.id.includes("___")) {
        const [i, s] = e.target.id.split("___");
        let r = vr.getState()?.quizesArray.find((e => e.id === i));
        if (r?.answers[0] === r?.choices[parseInt(s)]) {
            vr.dispatch({
                type: "UPDATE_SOME_ITEMS_IN_NAMED_ARRAY",
                payload: {
                    arrayName: "quizesArray",
                    updatedItems: [{
                        ...r,
                        solved: !0
                    }]
                }
            });
            let e = vr.getState().application;
            if (console.log(e), e?.email && e.email.toString().length > 6) {
                let i = e.email.replace(/[^a-zA-Z0-9]/g, "_"),
                    s = new Intl.DateTimeFormat("en", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }).format(new Date).replace(/[^a-zA-Z0-9]/g, "_"),
                    o = {
                        title: n,
                        theme: t,
                        answer: r?.answers[0] && Array.isArray(r.answers) ? r?.answers[0] : "",
                        comment: n + " (" + t + ")",
                        type: "multiplechoices",
                        content: r?.title ? r?.title : "",
                        quizString: r?.title ? r?.title : "",
                        deleted: !1,
                        email: e?.email,
                        user: e?.user,
                        avatarUrl: e?.avatar ? e.avatar : "",
                        date: new Intl.DateTimeFormat("ru", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        }).format(new Date)
                    },
                    a = {
                        title: r?.title ? r?.title : "",
                        theme: t,
                        email: e?.email,
                        user: e?.user,
                        avatarUrl: e?.avatar ? e.avatar : null,
                        timestamp: +Date.now()
                    };
                Er(l, "/usersCraft/" + i + "/posts/", [{
                    firebaseUrl: "/usersCraft/" + i + "/posts/",
                    item: o
                }], "notesArray"), Er(l, "/currentDay/" + s + "/posts/", [{
                    firebaseUrl: "/currentDay/" + s + "/posts/",
                    item: a
                }], "postsArray")
            }
        }
    }
})), vr.subscribe((() => {
    vr.getState().isLoading || ("default" === vr.getState()?.navigationActiveLayoutComponent && vr.getState().quizesArray.length > 0 && (o.innerHTML = "", Sr(o, vr.getState()?.quizesArray)), "edit-tab" === vr.getState()?.navigationActiveLayoutComponent && (o.innerHTML = "", Ir({
        domNode: o,
        callback: h,
        initialValues: {}
    })), "show-tab" === vr.getState()?.navigationActiveLayoutComponent && (o.innerHTML = "", Sr(o, vr.getState()?.quizesArray.sort(((e, t) => t.sort - e.sort)))))
}))
}, Object.defineProperty(e, "__esModule", {
value: !0
})
})