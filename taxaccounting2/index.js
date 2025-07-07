
//import React, { useState, useCallback } from "react";
let useState = React.useState;
let useReducer = React.useReducer;
let useEffect = React.useEffect;
let createContext = React.createContext;
let useContext = React.useContext;
//let useCallback = React.useCallback;

//import { produce } from "immer";
//let produce = immer.produce;

let { Container, Row, Col, Form, Button, Collapse, Navbar } = ReactBootstrap;

const ApplicationContext = createContext(null);
const ProjectContext = createContext(null);
const ProjectDispatchContext = createContext(null);

let projectInitialState = {
    // id: "financialaccounting1",
    // title: "Общее знакомство c БФУ",
    // theme: "БФУ",
    // answer: "Операции и прогнозная отчетность",
    // comment: "Операции и прогнозная отчетность",
    // type: "accountingwithprofitscash",
    content: [],
    deleted: false,
    triggerRerender: null
};

let balanceItems = [
    "Основные средства",
    "Материалы",
    "Незавершенное производство",
    "Готовая продукция",
    "Дебиторская задолженность",
    "Деньги",
    "Уставный капитал",
    "Нераспределенная прибыль",
    "Долгосрочный банковский кредит",
    "Краткосрочный банковский кредит",
    "Кредиторская задолженность"
];

let balanceContoArray = [
    { id: "Основные средства", children: ["01", "08", "07", "04", "02"] },
    { id: "Материалы", children: ["10", "14", "15", "16", "19"] },
    { id: "Незавершенное производство", children: ["20", "23", "25", "26", "44", "21"] },
    { id: "Готовая продукция", children: ["41", "43"] },
    { id: "Дебиторская задолженность", children: ["62.1", "60.2", "75.1", "76", "68"] },
    { id: "Деньги", children: ["50", "51", "52", "55"] },
    { id: "Уставный капитал", children: ["80", "82", "83", "81"] },
    { id: "Нераспределенная прибыль", children: ["84", "90.1", "90.2", "90.3", "90.4", "90.5", "90.9", "91.1", "91.2", "91.9", "99"] },
    { id: "Долгосрочный банковский кредит", children: ["67"] },
    { id: "Краткосрочный банковский кредит", children: ["66"] },
    { id: "Кредиторская задолженность", children: ["70", "62.2", "60.1", "68", "75.2", "76", "69"] },
]


function SimpleAccounting() {
    const applicationSelector = useContext(ApplicationContext);
    const [open, setOpen] = useState(false);
    const dispatch = useContext(ProjectDispatchContext);
    const projectSelector = useContext(ProjectContext);
    const [d, setD] = useState(null);
    const [k, setK] = useState(null);

    if (applicationSelector.loading) return null;

    //  console.log(projectSelector);

    // useEffect(()=>{
    //     console.log(project.content)
    // },[project.triggerRerender])

    function handleChange(e) {
        let { name, value } = e.target;
        //   console.log(name, value);
        if (name === "d") { setD(value) }
        if (name === "k") { setK(value) }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        let { d, k, sum, bookD, bookK } = Object.fromEntries(formdata);
        //  console.log(d, k, sum, bookD, bookK);
        handleAdd({ d, k, sum, bookD, bookK });
        basicfirebasecrudservices.timeout(275).then(() => {
            setD(null);
            setK(null);
            currentTarget.reset();
        });
    }

    // const handleAdd = useCallback(({ d, k, sum }) => {
    function handleAdd({ d, k, sum, bookD, bookK }) {
        //  let records = project.content;
        dispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    content: [...projectSelector.content, { d, k, sum, bookD, bookK }],
                    triggerRerender: Math.random()
                },
            },
        });
        // updateRecords(
        //     basicfirebasecrudservices.produce((draft) => {
        //         draft.push({ d, k, sum, bookD, bookK });
        //     })
        // );
    }
    //}, []);





    function processRecords(indicator) {
        let DValues = 0;
        let KValues = 0;
        Array.isArray(projectSelector.content) && projectSelector.content.map(item => {
            if (item.d === indicator) { DValues = DValues + parseFloat(item.sum) }
            if (item.k === indicator) { KValues = KValues + parseFloat(item.sum) }
            return null
        })
        if (indicator === "Основные средства" || indicator === "Материалы" ||
            indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
            indicator === "Дебиторская задолженность" || indicator === "Деньги") { return DValues - KValues } else { return KValues - DValues }
    }

    console.log()

    return <div key={projectSelector?.triggerRerender}>
        <Container>
            <Row>
                <Col>Основные средства {processRecords("Основные средства")}</Col>
                <Col>Уставный капитал {processRecords("Уставный капитал")}</Col>
            </Row>
            <Row>
                <Col>{" "}</Col>
                <Col>Нераспределенная прибыль {processRecords("Нераспределенная прибыль")}</Col>
            </Row>
            <Row>
                <Col>Материалы {processRecords("Материалы")}</Col>
                <Col>{" "}</Col>
            </Row>
            <Row>
                <Col>Незавершенное производство {processRecords("Незавершенное производство")}  </Col>
                <Col>Долгосрочный банковский кредит {processRecords("Долгосрочный банковский кредит")} </Col>
            </Row>
            <Row>
                <Col>Готовая продукция {processRecords("Готовая продукция")} </Col>
                <Col>{" "}</Col>
            </Row>
            <Row>
                <Col>Дебиторская задолженность {processRecords("Дебиторская задолженность")} </Col>
                <Col>Краткосрочный банковский кредит {processRecords("Краткосрочный банковский кредит")}  </Col>
            </Row>
            <Row>
                <Col>Деньги {processRecords("Деньги")} </Col>
                <Col>Кредиторская задолженность {processRecords("Кредиторская задолженность")} </Col>
            </Row>
        </Container>
        <hr />
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="outline-secondary"
            className="mb-3"
        >
            {open ? "Скрыть Журнал" : "Показать журнал"}
        </Button>
        <Collapse in={open}>
            <div id="example-collapse-text">
                <Container>
                    {Array.isArray(projectSelector.content) && projectSelector.content.map((row, index) => <Row key={index}>
                        <Col>
                            <div><small class="text-muted">{row.d}</small></div>
                            <div>{row.bookD}</div>
                        </Col>
                        <Col>
                            <div><small class="text-muted">{row.k}</small></div>
                            <div>{row.bookK}</div>
                        </Col>
                        <Col>{row.sum}</Col>
                    </Row>)}
                </Container>
            </div>
        </Collapse>
        <hr />
        <Form onSubmit={handleSubmit}>
            {/* <Form> */}
            <Row>
                <Col>
                    <Form.Group controlId="formStateD">
                        <Form.Label>Д</Form.Label>
                        <Form.Control as="select" name="d" onChange={handleChange} required>
                            {["...", ...balanceItems]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formStateK">
                        <Form.Label>К</Form.Label>
                        <Form.Control as="select" name="k" onChange={handleChange} required>
                            {["...", ...balanceItems]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formStateSum">
                        <Form.Label>Сумма</Form.Label>
                        <Form.Control as="input" name="sum" required />
                    </Form.Group>
                </Col>

            </Row>
            {/* </Form> */}

            <Row>
                <Col> {
                    !!d && <Form.Group controlId="formStateD">
                        <Form.Label>Д</Form.Label>
                        <Form.Control as="select" name="bookD" onChange={handleChange} size="sm" required>
                            {["...", ...balanceContoArray.find(item => item.id === d).children]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                }
                </Col>

                <Col>
                    {!!k && <Form.Group controlId="formStateK">
                        <Form.Label>К</Form.Label>
                        <Form.Control as="select" name="bookK" onChange={handleChange} size="sm" required>
                            {["...", ...balanceContoArray.find(item => item.id === k).children]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>}
                </Col>

            </Row>


            <Button variant="outline-secondary my-3" type="submit" >Провести операцию</Button>
        </Form>
    </div >
}




function SaveProject() {
    const projectSelector = useContext(ProjectContext);
    const applicationSelector = useContext(ApplicationContext);

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : [];


    useEffect(() => {
        async function saveContent() {
            if (content.length > 0) {
                let postObject = {
                    ...projectSelector,
                    comment: basicfirebasecrudservices.transactionsListFull(content.map(bookrecord => { return { ...bookrecord, period: "2025" } })),
                    email: applicationSelector.email,
                    user: applicationSelector.user,
                    avatarUrl: applicationSelector.avatarUrl,
                    date: new Intl.DateTimeFormat("ru", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    }).format(new Date()), //Date().toJSON()
                };

                let htmlPost = {
                    answer: "",
                    comment: "Проводки",
                    quizString: "",
                    deleted: false,
                    email: applicationSelector.email,
                    user: applicationSelector.user,
                    avatarUrl: applicationSelector.avatarUrl,
                    date: new Intl.DateTimeFormat("ru", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    }).format(new Date()), //Date().toJSON()
                };

                let currentDay = new Intl.DateTimeFormat("en", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })
                    .format(new Date())
                    .replace(/[^a-zA-Z0-9]/g, "_");


                let updates = {};
                updates["/usersCraft/" + applicationSelector.userEmail + "/posts/" + projectSelector.id] = postObject;
                updates[
                    "/usersTemplates/projects/" + applicationSelector.userEmail + "/" + projectSelector.id
                ] = postObject;

                updates["currentDay/" + currentDay + "/posts/" + projectSelector.id + applicationSelector.userEmail + "media"] =
                {
                    ...htmlPost,
                    id: projectSelector.id + applicationSelector.userEmail + "media",
                    theme: projectSelector.theme,
                    title: projectSelector.title + " " + applicationSelector.user,
                    content: basicfirebasecrudservices.transactionsListFull(content.map(bookrecord => { return { ...bookrecord, period: "2025" } })),
                    type: "html",
                };
                updates["/usersCraft/" + applicationSelector.userEmail + "/posts/" + projectSelector.id + applicationSelector.userEmail + "media"] = {
                    ...htmlPost,
                    id: projectSelector.id + applicationSelector.userEmail + "media",
                    theme: projectSelector.theme,
                    title: projectSelector.title + " " + applicationSelector.user,
                    content: basicfirebasecrudservices.transactionsListFull(content.map(bookrecord => { return { ...bookrecord, period: "2025" } })),
                    type: "html",
                };

                console.log(updates);

                return await basicfirebasecrudservices.updateFirebaseNode(updates);
            }
            return null
        }

        saveContent().then((res) => {
            console.log("Saved");
            //  console.log(projectSelector);
            //  console.log(applicationSelector);
        })



    }, [projectSelector?.triggerRerender])

    //  console.log(selectApplication)

    return <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="avatarUrl"
                    src={applicationSelector.avatarUrl}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{
                        borderRadius: "50%",
                        filter: "grayscale(100%)",
                        objectFit: "cover",
                    }}
                />
                <span className="mx-3">{projectSelector.title}</span>

            </Navbar.Brand>

        </Container>

        <Form inline>
            <Button variant="outline-secondary" size="sm">{content.length}</Button>
        </Form>

    </Navbar>


}

function caseReducer(state = {}, action) {
    // console.log(action);
    switch (action.type) {
        case "SEED_STATE": {
            return basicfirebasecrudservices.produce(state, (draft) => {
                Object.keys(action.payload.objects).map((key) => {
                    draft[key] = action.payload.objects[key];
                });
            });
        }
        default:
            return state;
    }
}

let initialState = {
    loading: true,
    email: null,
    user: null,
    avatarUrl: "",
    userEmail: "",
    posts: [],
}



function App() {
    const [state, dispatch] = useReducer(
        caseReducer,
        initialState
    );

    const [projectState, projectDispatch] = useReducer(
        caseReducer,
        projectInitialState
    );




    useEffect(() => {
        async function getUser() {
            let localStorageData = basicfirebasecrudservices.loadState('econolabs');

            console.log(document.getElementById("simpleaccounting").dataset.openquizid);

            let openquiz = await basicfirebasecrudservices.getFirebaseNode({
                url: "openquiz/" + document.getElementById("simpleaccounting").dataset.openquizid,
                type: "object",
            });

            console.log(openquiz);
            // let updates = {};
            // updates["/openquiz/financialaccounting3"] = {
            //     id: "financialaccounting3",
            //     title: "Учет запасов",
            //     theme: "БФУ",
            //     answer: "Операции и отчетность",
            //     comment: "Операции и отчетность",
            //     type: "accountingwithprofitscash",
            // };
            // let res = basicfirebasecrudservices.updateFirebaseNode(updates);
            // console.log(res);

            if (!!localStorageData?.application?.email) {
                let userEmail = localStorageData?.application?.email.replace(
                    /[^a-zA-Z0-9]/g,
                    "_"
                );

                let openavatar = await basicfirebasecrudservices.getFirebaseNode({
                    url: "openavatars/" + userEmail,
                    type: "object",
                });

                let userprojectpostcontent = await basicfirebasecrudservices.getFirebaseNode({
                    url: "/usersCraft/" + userEmail + "/posts/" + openquiz.id + "/content",
                    type: "array",
                });


                return {
                    email: localStorageData?.application?.email,
                    user: localStorageData?.application?.user,
                    avatarUrl: !!openavatar?.avatarUrl
                        ? openavatar.avatarUrl
                        : !!localStorageData?.application?.avatarUrl
                            ? localStorageData.application.avatarUrl
                            : "../freelancer.jpg",
                    userEmail: userEmail,
                    openquiz: openquiz,
                    userprojectpostcontent: userprojectpostcontent
                }
            } else {
                let identity = basicfirebasecrudservices.generateUser();
                basicfirebasecrudservices.saveState({
                    application: {
                        email: identity.email,
                        user: identity.user,
                        avatarUrl: "../freelancer.jpg",
                        userEmail: identity.userEmail
                    }
                });
                return {
                    email: identity.email,
                    user: identity.user,
                    avatarUrl: "../freelancer.jpg",
                    userEmail: identity.userEmail,
                    openquiz: openquiz,
                    userprojectpostcontent: []
                }
            }
        }

        getUser().then((res) => {
            let {
                userEmail,
                email,
                user,
                avatarUrl,
            } = res;

            dispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        loading: false,
                        email: email,
                        user: user,
                        avatarUrl: avatarUrl,
                        userEmail: userEmail
                    },
                },
            });


            projectDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        ...projectInitialState,
                        ...res.openquiz,
                        content: res.userprojectpostcontent,
                        triggerRerender: "loaded"
                    },
                },
            });

        })
    }, []);


    if (state.loading) { return null }


    return <ApplicationContext.Provider value={state}>
        <ProjectContext.Provider value={projectState}>
            <ProjectDispatchContext.Provider value={projectDispatch}>
                <SaveProject />
                <SimpleAccounting
                    avatarUrl={state.avatarUrl}
                    user={state.user}
                    setTitle="Тесты по балансовым уравнениям"

                />
            </ProjectDispatchContext.Provider>
        </ProjectContext.Provider>
    </ApplicationContext.Provider>


}

ReactDOM.createRoot(document.querySelector("#simpleaccounting")).render(<App />);

//  const getMessage = () => "Hello World";
//   document.getElementById("root").innerHTML = getMessage();

