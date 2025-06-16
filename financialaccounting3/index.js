//import React, { useState, useCallback } from "react";
let useState = React.useState;
let useReducer = React.useReducer;
let useEffect = React.useEffect;
let createContext = React.createContext;
let useContext = React.useContext;
//let useCallback = React.useCallback;

//import { produce } from "immer";
//let produce = immer.produce;

let { Container, Row, Col, Form, Button, Collapse, Navbar, Modal } = ReactBootstrap;

const ApplicationContext = createContext(null);
const ApplicationDispatchContext = createContext(null);
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
    triggerRerender: null,
    openLedger: false
};


let balanceContoArray = [
    { id: "Основные средства", children: ["01", "08", "07", "04", "02"], disposition: "asset" },
    { id: "Материалы", children: ["10", "14", "15", "16", "19"], disposition: "asset" },
    { id: "Незавершенное производство", children: ["20", "23", "25", "26", "44", "21"], disposition: "asset" },
    { id: "Готовая продукция", children: ["41", "43"], disposition: "asset" },
    { id: "Дебиторская задолженность", children: ["62.1", "60.2", "75.1", "76", "68"], disposition: "asset" },
    { id: "Деньги", children: ["50", "51", "52", "55"], disposition: "asset" },
    { id: "Уставный капитал", children: ["80", "82", "83", "81"] },
    { id: "Нераспределенная прибыль", children: ["84", "90.1", "90.2", "90.3", "90.4", "90.5", "90.9", "91.1", "91.2", "91.9", "99"] },
    { id: "Долгосрочный банковский кредит", children: ["67"] },
    { id: "Краткосрочный банковский кредит", children: ["66"] },
    { id: "Кредиторская задолженность", children: ["70", "62.2", "60.1", "68", "75.2", "76", "69"] },
]

function LoginLogout() {
    const applicationSelector = useContext(ApplicationContext);
    //  const [show, setShow] = useState(false);

    let user = applicationSelector?.user;
    let email = applicationSelector?.email;

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.currentTarget.elements.formEmail.value);
        // console.log(e.currentTarget.elements.formUser.value);

        basicfirebasecrudservices.saveState({
            application: {
                email: e.currentTarget.elements.formEmail.value,
                user: e.currentTarget.elements.formUser.value,
                avatarUrl: "../freelancer.jpg",
                userEmail: e.currentTarget.elements.formEmail.value.replace(
                    /[^a-zA-Z0-9]/g, "_")
            }
        });

        setTimeout(() => window.location.reload(), 3000)
        //    handleClose();
    };



    return <Form onSubmit={handleSubmit}>
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
}


function EditRecordComment() {
    const applicationSelector = useContext(ApplicationContext);
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let comment = Object.fromEntries(formdata).comment;
        console.log(comment);
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: record.id,
                objKey: "comment",
                objValue: comment
            },
        });
    }

    return <Form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col><small>{"N " + orderInArray}</small> </Col>
                <Col>{record?.bookD}</Col>
                <Col>{record?.bookK}</Col>
                <Col>{record?.sum}</Col>
                <Col><div><small>{record?.type}</small></div>

                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group controlId="formStateComment">
                        <Form.Label>Комментарий</Form.Label>
                        <Form.Control as="textarea" name="comment" size="sm" required>
                            {record?.comment}
                        </Form.Control>
                    </Form.Group>
                    {/*      <Form.Control    onChange={handleChange}  
                        name="comment"
                        type="textarea"
                        rows="3"
                    >
                        {record?.comment}
                    </Form.Control>   */}
                </Col>
            </Row>



            <Row>
                <Col>
                    <Button variant="outline-secondary" size="sm" type="submit" >Сохранить</Button>
                </Col>
            </Row>

        </Container>
    </Form>


}

function EditRecordType() {
    const [analyticsDimension, setAnalyticsDimension] = useState(null);
    const projectDispatch = useContext(ProjectDispatchContext);
    const applicationSelector = useContext(ApplicationContext);
    const projectSelector = useContext(ProjectContext)

    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;
    // console.log(projectSelector.content);
    // console.log( applicationSelector?.modal?.item?.id)

    let analyticsArray = [
        { id: "capitalIncrease", name: "Увеличение чистых активов" },
        { id: "capitalDecrease", name: "Уменьшение чистых активов" },
        { id: "cashIncrease", name: "Денежный приток" },
        { id: "cashDecrease", name: "Денежный отток" },
        { id: "costsCalculation", name: "Калькулирование себестоимости" },
    ]

    let analyticsItems = {
        "capitalIncrease": [
            { id: 1, name: "Выручка" },
            { id: 2, name: "Прочие доход" },
            { id: 3, name: "Дивиденды к получению" },
            { id: 4, name: "Проценты к получению" },
        ],
        "capitalDecrease": [
            { id: 1, name: "Себестоимость продукции, работ, услуг" },
            { id: 2, name: "Коммерческие расходы" },
            { id: 3, name: "Управленческие расходы" },
            { id: 4, name: "Проценты к уплате" },
            { id: 5, name: "Прочие расходы" },
            { id: 6, name: "Налог на прибыль" },
            { id: 7, name: "Дивиденды к начислению" }
        ],
        "cashIncrease": [
            { id: 1, name: "Поступления по текущей деятельности" },
            { id: 2, name: "Поступления по инвестиционной деятельности" },
            { id: 3, name: "Поступления по финансовой деятельности" }
        ],
        "cashDecrease": [
            { id: 1, name: "Платежи по текущей деятельности" },
            { id: 2, name: "Платежи по инвестиционной деятельности" },
            { id: 3, name: "Платежи по финансовой деятельности" }
        ],
        "costsCalculation": [
            { id: 1, name: "Материальные затраты" },
            { id: 2, name: "Оплата труда" },
            { id: 3, name: "Отчисления на социальные нужды" },
            { id: 4, name: "Амортизация" },
            { id: 5, name: "Отчисления на социальные нужды" },
            { id: 6, name: "Прочие затраты" }
        ]
    }

    function handleChange(e) {
        let { name, value } = e.target;
        //   console.log(e.target);
        if (name === "analyticsArray") { setAnalyticsDimension(analyticsArray.find(item => item.name === value).id) }
        //  if (name === "analyticsItem") { setAnalyticsItem(value) }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let analyticsItem = Object.fromEntries(formdata).analyticsItem;
        console.log(analyticsItem);
        // let { d, k, sum, bookD, bookK } = Object.fromEntries(formdata);
        // handleAdd({ d, k, sum, bookD, bookK });
        // basicfirebasecrudservices.timeout(275).then(() => {
        //     setD(null);
        //     setK(null);
        //     currentTarget.reset();
        // });
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: record.id,
                objKey: "type",
                objValue: analyticsItem
            },
        });
    }


    function deleteType() {
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: record.id,
                objKey: "type",
                objValue: null
            },
        });
    }



    return <Form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col><small>{"N " + orderInArray}</small> </Col>
                <Col>{record?.bookD}</Col>
                <Col>{record?.bookK}</Col>
                <Col>{record?.sum}</Col>
                <Col><div><small>{record?.type}</small></div>
                    <div>{!!record?.type ? <Button variant="outline-danger" size="sm" onClick={deleteType}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </Button> : ""}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col><small>{record?.comment}</small></Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="formStateAnalyticsArray">
                        <Form.Label>Разрез аналитики</Form.Label>
                        <Form.Control as="select" name="analyticsArray" onChange={handleChange} size="sm" required>
                            {["...", ...analyticsArray]
                                .map(item => {
                                    return <option key={item.id} id={item.id}>
                                        {item.name}
                                    </option>
                                })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col>{!!analyticsDimension && <Form.Group controlId="formStateAnalyticsItem">
                    <Form.Label>Аналитика</Form.Label>
                    <Form.Control as="select" name="analyticsItem" onChange={handleChange} size="sm" required>
                        {["...", ...analyticsItems[analyticsDimension]]
                            .map(item => { return <option key={item.id} id={item.id}>{item.name}</option> })}
                    </Form.Control>
                </Form.Group>}
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="outline-secondary" size="sm" type="submit" >Сохранить</Button>
                </Col>
            </Row>

        </Container>
    </Form>
}

function Ledger() {
    const dispatch = useContext(ProjectDispatchContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectSelector = useContext(ProjectContext);

    function deleteRecord(e) {
        console.log(e.target.id);
        dispatch({
            type: "DELETE_FROM_ARRAY_BY_ID",
            payload: {
                arrayName: "content",
                id: e.target.id
            }
        })
    }

    function editType(e) {
        if (e.target.id.length > 5) {
            applicationDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        showModal: true,
                        modal: {
                            title: "Редактор Аналитики операции",
                            component: "EditRecordType",
                            item: {
                                id: e.target.id
                            }
                        }
                    },
                },
            });
        }
    }


    function editComment(e) {
        if (e.target.id.length > 5) {
            applicationDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        showModal: true,
                        modal: {
                            title: "Редактор Комментария операции",
                            component: "EditRecordComment",
                            item: {
                                id: e.target.id
                            }
                        }
                    },
                },
            });
        }
    }

    let updateKey = "" + projectSelector?.openLedger + projectSelector?.triggerRerender

    return <Collapse key={updateKey} in={projectSelector?.openLedger}>
        <div id="example-collapse-text">
            <Container>
                {Array.isArray(projectSelector.content) && projectSelector.content.map((row, index) =>

                    <div key={index} className="border-bottom m-1">

                        <Row>
                            <Col>
                                <small class="text-muted">{index + 1}</small>

                            </Col>
                            <Col>
                                <div><small class="text-muted">{row.d}</small></div>
                                <div>{row.bookD}</div>
                            </Col>
                            <Col>
                                <div><small class="text-muted">{row.k}</small></div>
                                <div>{row.bookK}</div>
                            </Col>
                            <Col>{row.sum}</Col>
                            <Col><small class="text-muted">{row?.type}</small></Col>
                        </Row>

                        <Row>
                            <Col>
                                <small class="text-muted">{row?.comment}</small>
                            </Col>
                        </Row>

                        <Row className="p-1">
                            <Col><Button id={row.id} variant="outline-primary" size="sm" onClick={editType}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg> {" type"}
                            </Button></Col>
                            <Col><Button id={row.id} variant="outline-primary" size="sm" onClick={editComment}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg> {" comment"}
                            </Button></Col>
                            <Col><Button id={row.id} variant="outline-danger" size="sm" onClick={deleteRecord}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>{" record"}</Button>
                            </Col>
                        </Row>

                    </div>

                )}

            </Container>
        </div>
    </Collapse>

}

function SimpleAccounting() {
    const applicationSelector = useContext(ApplicationContext);
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

    }
    //}, []);

    // function deleteRecord(e) {
    //     console.log(e.target.id);
    //     dispatch({
    //         type: "DELETE_FROM_ARRAY_BY_INDEX",
    //         payload: {
    //             arrayName: "content",
    //             itemIndex: e.target.id
    //         }
    //     })
    // }

    function setOpenLedger() {
        console.log("Open Ledger")
        dispatch({
            type: "SET_STORE_OBJECT",
            payload: { key: "openLedger", value: !projectSelector.openLedger }
        });
    }


    function processRecords(indicator) {
        let DValues = 0;
        let KValues = 0;
        Array.isArray(projectSelector.content) && projectSelector.content.map(item => {
            if (item.d === indicator) { DValues = DValues + parseFloat(item.sum) }
            if (item.k === indicator) { KValues = KValues + parseFloat(item.sum) }
            return null
        })
        if (
            balanceContoArray.find(item => item.id === indicator)?.disposition === "asset"
            // indicator === "Основные средства" || indicator === "Материалы" ||
            // indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
            // indicator === "Дебиторская задолженность" || indicator === "Деньги"
        ) { return DValues - KValues } else { return KValues - DValues }
    }



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
            onClick={() => setOpenLedger()}
            aria-controls="example-collapse-text"
            aria-expanded={projectSelector.openLedger}
            variant="outline-secondary"
            className="mb-3"
        >
            {projectSelector.openLedger ? "Скрыть Журнал" : "Показать журнал"}
        </Button>
        <Ledger />
        <hr />
        <Container>{Array.isArray(projectSelector.tasks) && projectSelector.tasks.map(task => {
            return <div key={task.id} className="text-muted"
                dangerouslySetInnerHTML={{ __html: task.text }}
            ></div>
        })}</Container>
        <Container>{!!projectSelector?.hint && <div className="text-muted"
            dangerouslySetInnerHTML={{ __html: projectSelector.hint }}
        ></div>
        }</Container>
        <Form onSubmit={handleSubmit}>
            {/* <Form> */}
            <Row>
                <Col>
                    <Form.Group controlId="formStateD">
                        <Form.Label>Д</Form.Label>
                        <Form.Control as="select" name="d" onChange={handleChange} required>
                            {["...", ...balanceContoArray.map(item => item.id)]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formStateK">
                        <Form.Label>К</Form.Label>
                        <Form.Control as="select" name="k" onChange={handleChange} required>
                            {["...", ...balanceContoArray.map(item => item.id)]
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
    let applicationDispatch = useContext(ApplicationDispatchContext);

    let defaultPeriod = new Intl.DateTimeFormat("ru", {
        year: "numeric",
    }).format(new Date());
    console.log(defaultPeriod)

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : [];
    content = content.map(item => {
        if (!item?.period) {
            return { ...item, period: defaultPeriod }
        }
        return item
    })



    useEffect(() => {
        async function saveContent() {
            if (content.length > 0) {
                let postObject = {
                    deleted: false,
                    content: content,
                    comment: basicfirebasecrudservices.transactionsListFull(content),
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
                    content: basicfirebasecrudservices.transactionsListFull(content),
                    type: "html",
                };
                updates["/usersCraft/" + applicationSelector.userEmail + "/posts/" + projectSelector.id + applicationSelector.userEmail + "media"] = {
                    ...htmlPost,
                    id: projectSelector.id + applicationSelector.userEmail + "media",
                    theme: projectSelector.theme,
                    title: projectSelector.title + " " + applicationSelector.user,
                    content: basicfirebasecrudservices.transactionsListFull(content),
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

    function selectAvatar() {
        console.log("ava");
        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: true,
                    modal: {
                        title: "Пользователь",
                        component: "LoginLogout"
                    }
                },
            },
        });
    }

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
                    onClick={() => selectAvatar()}
                />
                <small className="mx-3">{projectSelector.title + "   (" + content.length + ")"}</small>

            </Navbar.Brand>

        </Container>

        <Form inline>

            <Button variant="outline-secondary" size="sm"
                onClick={() => selectAvatar()}
            >
                <small>{applicationSelector.user}</small>
            </Button>

        </Form>

    </Navbar>
}


function GlobalModal() {
    const applicationSelector = useContext(ApplicationContext);
    let applicationDispatch = useContext(ApplicationDispatchContext);

    function handleClose() {
        console.log("Close");
        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
    }

    return <Modal show={applicationSelector?.showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>{applicationSelector?.modal?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            {applicationSelector?.modal?.component === "LoginLogout" && <LoginLogout />}

            {applicationSelector?.modal?.component === "EditRecordType" && <EditRecordType />}

            {applicationSelector?.modal?.component === "EditRecordComment" && <EditRecordComment />}

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
}

function caseReducer(state = {}, action) {
    // console.log(action);
    //https://immerjs.github.io/immer/update-patterns
    switch (action.type) {

        case "SET_STORE_OBJECT":
            return basicfirebasecrudservices.produce(state, (draft) => {
                console.log(action.payload);
                draft[action.payload.key] = action.payload.value;
            });

        case "SEED_STATE": {
            return basicfirebasecrudservices.produce(state, (draft) => {
                Object.keys(action.payload.objects).map((key) => {
                    draft[key] = action.payload.objects[key];
                });
            });
        }

        case "DELETE_FROM_ARRAY_BY_INDEX": {
            return basicfirebasecrudservices.produce(state, (draft) => {
                draft[action.payload.arrayName].splice(action.payload.itemIndex, 1);
                draft.triggerRerender = action.payload.itemIndex;
            });
        }

        case "DELETE_FROM_ARRAY_BY_ID": {
            return basicfirebasecrudservices.produce(state, (draft) => {
                const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    draft.triggerRerender = action.payload.index;
                    draft[action.payload.arrayName].splice(index, 1);
                }
            });
        }

        case "UPDATE_ITEM_IN_ARRAY":
            return basicfirebasecrudservices.produce(state, (draft) => {
                console.log(action.payload);
                const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.item.id);
                if (index !== -1) draft[action.payload.arrayName][index] = action.payload.item
            });



        case "UPDATE_ITEM_PROPERTY_IN_ARRAY":
            return basicfirebasecrudservices.produce(state, (draft) => {
                console.log(action.payload);
                const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    draft.triggerRerender = action.payload.id;
                    draft
                    [action.payload.arrayName]
                    [index]
                    [action.payload.objKey] = action.payload.objValue
                }
            });

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
    showModal: false,
    modal: {}
}



function App() {
    const [state, applicationDispatch] = useReducer(
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

            const paramsString = window.location.search;
            const searchParams = new URLSearchParams(paramsString);
            console.log(searchParams.get("openquizid"));

            let openquizid;

            if (!!searchParams.get("openquizid")) {
                openquizid = searchParams.get("openquizid")
            } else {
                openquizid = document.getElementById("simpleaccounting").dataset.openquizid
            }

            console.log(openquizid);

            let onlineopenquiz = await basicfirebasecrudservices.getFirebaseNode({
                url: "openquiz/" + openquizid,
                type: "object",
            });


            let updates = {};
            updates["/openquiz/propertyplantandequipment01"] = {
                id: "propertyplantandequipment01",
                title: "Учет основных средств 1",
                theme: "БФУ",
                answer: "Операции и отчетность",
                comment: "Операции и отчетность",
                type: "accountingwithprofitscash",
                tasks: [{
                    id: 0,
                    text: `Организация купила оборудование в январе 2025 года и в этом же месяце ввела его в эксплуатацию.<br>
             Стоимость оборудования 120 000 руб.(в том числе НДС 20 000 руб.). Получен акт приема-передачи и счет-фактура.<br>
             Стоимость доставки – 24 000 руб. (в том числе НДС 4000 руб.) оплачена в январе, получен счет-фактура и акт.<br>
            Оборудование относится к 5 амортизационной группе со сроком полезного использования 7-10 лет.<br>
             Организация приняла решение об использовании оборудования в течение 10 лет. В том же месяце оборудование полностью оплачено.<br>
            Указать бухгалтерские записи`
                }],
                // hint: `<p>
                // <a target="_blank"
                // href="https://buhexpert8.ru/1s-buhgalteriya/fsbu-5-2019-zapasy-1s-buhgalteriya/metodika-ucheta-nesushhestvennyh-obektov.htm"
                // >
                //     Учет малоценных ОС и запасов (ОСНО) в 1С
                // </a>
                // </p>`
            };
            let res = basicfirebasecrudservices.updateFirebaseNode(updates);
            console.log(res);

            let openquiz = !!onlineopenquiz && Object.keys(onlineopenquiz).length > 0 ?
                onlineopenquiz :
                {
                    id: openquizid,
                    title: "Задание от " + new Intl.DateTimeFormat("ru", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }).format(new Date()),
                    theme: "Бухгалтерский учет и прогнозирование",
                    answer: "Операции и отчетность",
                    comment: "Операции и отчетность",
                    type: "accountingwithprofitscash",
                    tasks: [{ id: 0, text: "Отразите в учете бухгалтерские записи" }]
                };


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
                    url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/content",
                    type: "array",
                });

                userprojectpostcontent = userprojectpostcontent.map(item => {
                    if (!item?.id) {
                        return {
                            ...item,
                            id: basicfirebasecrudservices.getFirebaseNodeKey("/usersCraft/" + userEmail + "/posts/" + openquizid + "/content")
                        }
                    }
                    return item
                })

                // let posts = await basicfirebasecrudservices.getFirebaseNode({
                //     url: "/usersCraft/" + userEmail + "/posts/",
                //     type: "array",
                // });
                // console.log(posts.filter(item => item.type === "accountingwithprofitscash"))


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

            applicationDispatch({
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
        <ApplicationDispatchContext.Provider value={applicationDispatch}>
            <ProjectContext.Provider value={projectState}>
                <ProjectDispatchContext.Provider value={projectDispatch}>
                    <GlobalModal />
                    <SaveProject />
                    <SimpleAccounting
                        avatarUrl={state.avatarUrl}
                        user={state.user}
                        setTitle="Тесты по балансовым уравнениям"

                    />
                </ProjectDispatchContext.Provider>
            </ProjectContext.Provider>
        </ApplicationDispatchContext.Provider>
    </ApplicationContext.Provider>
}

ReactDOM.createRoot(document.querySelector("#simpleaccounting")).render(<App />);

//  const getMessage = () => "Hello World";
//   document.getElementById("root").innerHTML = getMessage();

