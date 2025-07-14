let useState = React.useState;
let useReducer = React.useReducer;
let useEffect = React.useEffect;
let createContext = React.createContext;
let useContext = React.useContext;
//let useCallback = React.useCallback;

let { Container, Row, Col, Form, Button, Collapse, Navbar, Modal, InputGroup, FormControl } = ReactBootstrap;

const ApplicationContext = createContext(null);
const ApplicationDispatchContext = createContext(null);
const ProjectContext = createContext(null);
const ProjectDispatchContext = createContext(null);
const SpreadsheetContext = createContext(null);
const SpreadsheetDispatchContext = createContext(null);

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
    triggerSave: false,
    saveOptions: {}
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


function DeleteRecord() {
    const applicationSelector = useContext(ApplicationContext);
    const applicationDispatch = useContext(ApplicationDispatchContext)
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;


    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let period = Object.fromEntries(formdata).period;
        console.log(period);


        projectDispatch({
            type: "DELETE_FROM_ARRAY_BY_ID",
            payload: {
                arrayName: "content",
                id: record.id
            }
        })


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
                    <Button variant="outline-danger" size="sm" type="submit" >Улалить</Button>
                </Col>
            </Row>

        </Container>
    </Form>
}







function EditRecordPeriod() {
    const applicationSelector = useContext(ApplicationContext);
    const applicationDispatch = useContext(ApplicationDispatchContext)
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;


    let { periods } = projectSelector;


    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let period = Object.fromEntries(formdata).period;
        console.log(period);
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: record.id,
                objKey: "period",
                objValue: period
            },
        });
        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
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

                    <Form.Group controlId="formStatePeriod">
                        <Form.Label>Комментарий</Form.Label>
                        <Form.Control as="select" name="period" size="sm" required>
                            {["...", ...periods]
                                .map(item => {
                                    return <option key={item} id={item}>
                                        {item}
                                    </option>
                                })}
                        </Form.Control>
                    </Form.Group>
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


function EditRecordOrder() {
    const applicationSelector = useContext(ApplicationContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let selectedId = applicationSelector?.modal?.item?.id
    let record = projectSelector.content.find(item => item.id === selectedId);
    let orderInArray = projectSelector.content.findIndex(item => item.id === selectedId) + 1;

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let orderBy = Object.fromEntries(formdata).orderBy;
        console.log(orderBy);
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: selectedId,
                objKey: "orderBy",
                objValue: orderBy
            },
        });

        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    //  triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
            },
        });
    }

    return <Form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col>
                    <div>
                        <small>{"N " + orderInArray}</small>
                    </div>
                    <div>
                        <small>{"N (год) " + record?.orderBy}</small>
                    </div>

                </Col>
                <Col>{record?.bookD}</Col>
                <Col>{record?.bookK}</Col>
                <Col>{record?.sum}</Col>
                <Col><div><small>{record?.type}</small></div>

                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group controlId="formStateSum">
                        <Form.Label>Порядок операции в году</Form.Label>
                        <Form.Control defaultValue={record?.orderBy} name="sum" size="sm" required />
                    </Form.Group>
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


function EditRecordSum() {

    const applicationSelector = useContext(ApplicationContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let selectedId = applicationSelector?.modal?.item?.id
    let record = projectSelector.content.find(item => item.id === selectedId);
    let orderInArray = projectSelector.content.findIndex(item => item.id === selectedId) + 1;

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        console.log(Object.fromEntries(formdata));
        let sum = Object.fromEntries(formdata).sum;
        console.log(sum);
        projectDispatch({
            type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
            payload: {
                arrayName: "content",
                id: selectedId,
                objKey: "sum",
                objValue: sum
            },
        });

        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
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
                    <Form.Group controlId="formStateSum">
                        <Form.Label>Сумма</Form.Label>
                        <Form.Control defaultValue={record?.sum} name="sum" size="sm" required />
                    </Form.Group>
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


function EditRecordComment() {
    const applicationSelector = useContext(ApplicationContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectSelector = useContext(ProjectContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    let selectedId = applicationSelector?.modal?.item?.id
    let record = projectSelector.content.find(item => item.id === selectedId);
    let orderInArray = projectSelector.content.findIndex(item => item.id === selectedId) + 1;

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
                id: selectedId,
                objKey: "comment",
                objValue: comment
            },
        });

        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    //  triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
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
    const applicationDispatch = useContext(ApplicationDispatchContext);
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
        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: false,
                    modal: {}
                },
            },
        });
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
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
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
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


function OpenCheatsheetLayout() {
    const projectSelector = useContext(ProjectContext);
    const [isLoading, setLoading] = useState(true);
    const [cheatsheetContent, setCheatsheetContent] = useState([]);

    useEffect(() => {
        async function getCheatsheetContent() {
            let cheatsheetcontent = await basicfirebasecrudservices.getFirebaseNode({
                url: "/usersCraft/" + "nick_golovenkin_yandex_ru" + "/posts/" + projectSelector?.id + "/content",
                type: "array",
            });
            return cheatsheetcontent
        }

        getCheatsheetContent().then((res) => {
            setCheatsheetContent(res);
            setLoading(false)
        })
    }, [])

    if (isLoading) return null


    return <div>
        {Array.isArray(cheatsheetContent) && cheatsheetContent.map((row, index) =>

            <div key={index} className="border-bottom m-1">

                <Row>

                    <Col>
                        <div><small class="text-muted">{"N " + (index + 1)}</small></div>
                        <div><small class="text-muted">{row?.period}</small></div>
                    </Col>

                    <Col>
                        <div><small class="text-muted">{row.d}</small></div>
                        <div>{row.bookD}</div>
                    </Col>

                    <Col>
                        <div><small class="text-muted">{row.k}</small></div>
                        <div>{row.bookK}</div>
                    </Col>

                    <Col><div>{row.sum}</div>
                        <div><small class="text-muted">{row?.type}</small></div>
                    </Col>


                </Row>

                <Row>
                    <Col>
                        <small class="text-muted">{row?.comment}</small>
                    </Col>
                </Row>


            </div>

        )}


    </div>
}

function ProjectOptionsNavigation() {
    const applicationSelector = useContext(ApplicationContext);
    const projectSelector = useContext(ProjectContext);
    // const projectDispatch = useContext(ProjectDispatchContext);
    const [editorMode, modeDispatch] = useReducer(
        caseReducer,
        {
            openLedger: false,
            openSpreadsheet: false,
            openCheatsheet: false,
            openBalance: false,
            openFinancialResults: false,
            openFilteredList: false,
            openContoByDate: false,
            openDnd: false

        }
    );


    useEffect(() => {
        //     console.log(applicationSelector);
    }, [applicationSelector?.modal, applicationSelector?.modal?.component])

    // if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordType") {
    //     return <EditRecordType />
    // }

    // if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordPeriod") {
    //     return <EditRecordPeriod />
    // }

    // if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordComment") {
    //     return <EditRecordComment />
    // }

    // if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordSum") {
    //     return <EditRecordSum />
    // }


    function setOpenFunction(modeKey) {
        modeDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    [modeKey]: !editorMode[modeKey],
                },
            },
        });
    }




    return <Container>

        <Row>

            <Col> <Button
                onClick={() => setOpenFunction("openLedger")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openLedger ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Жрнл
            </Button></Col>


            <Col> <Button
                onClick={() => setOpenFunction("openContoByDate")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openContoByDate ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Счт
            </Button></Col>

{/* 
            <Col> <Button
                onClick={() => setOpenFunction("openDnd")}
                variant={editorMode.openDnd ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Прдк
            </Button></Col> */}




            <Col> <Button
                onClick={() => setOpenFunction("openBalance")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openBalance ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Блнс
            </Button></Col>


            <Col> <Button
                onClick={() => setOpenFunction("openFinancialResults")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openFinancialResults ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                ФнРз
            </Button></Col>

            <Col> <Button
                onClick={() => setOpenFunction("openCashFlow")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openCashFlow ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                КшФл
            </Button></Col>

            <Col> <Button
                onClick={() => setOpenFunction("openFilteredList")}
                //     aria-controls="example-collapse-text"
                //     aria-expanded={openLedger}
                variant={editorMode.openFilteredList ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Флтр
            </Button></Col>

            <Col> <Button
                onClick={() => setOpenFunction("openSpreadsheet")}
                //    aria-controls="example-collapse-text"
                //    aria-expanded={openLedger}
                variant={editorMode.openSpreadsheet ? "secondary" : "outline-secondary"}
                size="sm"
                className="mb-3"
            >
                Рсчт
            </Button></Col>
            {/* <Col> <Button
                onClick={() => setOpenFunction("openCheatsheet")}
                //    aria-controls="example-collapse-text"
                //    aria-expanded={openLedger}
                variant={editorMode.openCheatsheet ? "secondary" : "outline-secondary"}
                className="mb-3"
                size="sm"
            >
                Шблн
            </Button></Col> */}
        </Row>

        <Row>

            {editorMode.openLedger && <Ledger />}
            {editorMode.openSpreadsheet && <SpreadsheetLayout />}
            {editorMode.openCheatsheet && <OpenCheatsheetLayout />}
            {editorMode.openBalance && <ShowBalance />}
            {editorMode.openFinancialResults && <ShowFinancialResults />}
            {editorMode.openCashFlow && <ShowCashFlow />}
            {editorMode.openFilteredList && <ShowFilteredList />}
            {editorMode.openContoByDate && <ContoByDate />}
         {/*    {editorMode.openDnd && <RecordDragAndDrop />} */}
        </Row>
    </Container>
}

function Ledger() {

    const dispatch = useContext(ProjectDispatchContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectSelector = useContext(ProjectContext);

    let openLedger = true;


    function editObjectKey(e) {
        const { objkey } = { ...e.target.dataset };
        let objKeyValues = {
            //  orderBy: {title: "Редактор Порядка операции", component: "EditRecordOrder"},
            comment: { title: "Редактор Комментария операции", component: "EditRecordComment" },
            period: { title: "Редактор Периода операции", component: "EditRecordPeriod" },
            //  sum:  { title: "Редактор Суммы операции", component: "EditRecordSum"},
            type: { title: "Редактор Аналитики операции", component: "EditRecordType" }
        }

        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: true,
                    modal: {
                        title: objKeyValues[objkey].title,
                        component: objKeyValues[objkey].component,
                        item: { id: e.target.id }
                    }
                },
            },
        });
    }



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






    return <Container>


        <Collapse in={openLedger}>
            <div id="example-collapse-text">

                {Array.isArray(projectSelector.content) && projectSelector.content.map((row, index) =>

                    <div key={index} className="border-bottom m-1">

                        <Row>

                            <Col>
                                <div><small class="text-muted">{"N " + (index + 1)}</small></div>
                                <div><small class="text-muted">{row?.id}</small></div>
                                <div><small class="text-muted">{row?.period}</small></div>
                            </Col>

                            <Col>
                                <div><small class="text-muted">{row.d}</small></div>
                                <div>{row.bookD}</div>
                            </Col>

                            <Col>
                                <div><small class="text-muted">{row.k}</small></div>
                                <div>{row.bookK}</div>
                            </Col>

                            <Col><div>{row.sum}</div>
                                <div><small class="text-muted">{row?.type}</small></div>
                            </Col>


                        </Row>

                        <Row>
                            <Col>
                                <small class="text-muted">{row?.comment}</small>
                            </Col>
                        </Row>

                        <Row className="p-1">
                            <Col><Button id={row.id} variant="outline-primary" size="sm" data-objkey={"period"} onClick={editObjectKey}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg> {" period"}
                            </Button></Col>

                            <Col><Button id={row.id} variant="outline-primary" size="sm" data-objkey={"comment"} onClick={editObjectKey}>
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
                            <Col><Button id={row.id} variant="outline-primary" size="sm" data-objkey={"type"} onClick={editObjectKey}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg> {" type"}
                            </Button></Col>
                        </Row>

                    </div>

                )}


            </div>
        </Collapse>
    </Container>

}

function SimpleAccounting() {
    const applicationSelector = useContext(ApplicationContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    const projectSelector = useContext(ProjectContext);
    const [d, setD] = useState(null);
    const [k, setK] = useState(null);

    if (applicationSelector.loading) return null;

    let { periods } = projectSelector;

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
        let { d, k, sum, bookD, bookK, period } = Object.fromEntries(formdata);
        //  console.log(d, k, sum, bookD, bookK);
        handleAdd({ d, k, sum, bookD, bookK, period });
        basicfirebasecrudservices.timeout(275).then(() => {
            setD(null);
            setK(null);
            currentTarget.reset();
        });
    }

    // const handleAdd = useCallback(({ d, k, sum }) => {
    function handleAdd({ d, k, sum, bookD, bookK, period }) {
        //  let records = project.content;
        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    content: [...projectSelector.content, { d, k, sum, bookD, bookK, period }],
                    triggerRerender: Math.random(),
                    triggerSave: Math.random(),
                    saveOptions: { type: "content" }
                },
            },
        });

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
        if (
            balanceContoArray.find(item => item.id === indicator)?.disposition === "asset"
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
                <Col xs={12} sm={6} lg="4">
                    <Form.Group controlId="formStateD">
                        <Form.Label>Д</Form.Label>
                        <Form.Control as="select" name="d" onChange={handleChange} required>
                            {["...", ...balanceContoArray.map(item => item.id)]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} lg="4">
                    <Form.Group controlId="formStateK">
                        <Form.Label>К</Form.Label>
                        <Form.Control as="select" name="k" onChange={handleChange} required>
                            {["...", ...balanceContoArray.map(item => item.id)]
                                .map(item => { return <option key={item}>{item}</option> })}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} lg="2">
                    <Form.Group controlId="formStateSum">
                        <Form.Label>Сумма</Form.Label>
                        <Form.Control as="input" name="sum" required />
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} lg="2">
                    <Form.Group controlId="formPeriod">
                        <Form.Label>Период</Form.Label>
                        <Form.Control as="select" name="period" onChange={handleChange} required>
                            {["...", ...periods]
                                .map(item => {
                                    //   console.log(item)
                                    return <option key={item}>{item}</option>
                                })}
                        </Form.Control>
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
    const spreadsheetSelector = useContext(SpreadsheetContext);
    const applicationSelector = useContext(ApplicationContext);
    let applicationDispatch = useContext(ApplicationDispatchContext);

    let { id, content, quizString, triggerSave, theme, title, saveOptions = false, mediaItems = [], tasks = [] } = projectSelector;
    let { userEmail, email, user, avatarUrl } = applicationSelector;
    let { spreadsheetContent } = spreadsheetSelector;


    useEffect(() => {

        let currentDay = new Intl.DateTimeFormat("en", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        })
            .format(new Date())
            .replace(/[^a-zA-Z0-9]/g, "_");

        let defaultPeriod = new Intl.DateTimeFormat("ru", {
            year: "numeric",
        }).format(new Date());
        console.log(defaultPeriod)


        async function saveContent() {

            console.log(saveOptions);

            if (saveOptions?.type === "projectnodes" && Array.isArray(saveOptions?.updatednodes) && saveOptions.updatednodes.length > 0) {

                let updates = {};

                saveOptions.updatednodes.forEach(item => {
                    console.log(item);
                    updates["/usersCraft/" + userEmail + "/posts/" + id + "/" + item.relativeurl] = item.nodeobject;
                    updates["/usersTemplates/projects/" + userEmail + "/" + id + "/" + item.relativeurl] = item.nodeobject;
                });

                // updates["currentDay/" + currentDay + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                // updates["/usersCraft/" + userEmail + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                //   console.log(updates);
                //  console.log(updates)
                return await basicfirebasecrudservices.updateFirebaseNode(updates);
            }


            let contentObj = {};

            if (saveOptions?.type === "content" && Array.isArray(content) && content.length > 0) {
                content = content.forEach(item => {
                    if (!item?.period) { return { ...item, period: defaultPeriod } }
                    if (item?.id) { contentObj[id] = item }

                });


                let updates = {};
                updates["/usersCraft/" + userEmail + "/posts/" + id + "/content"] = contentObj;
                updates[
                    "/usersTemplates/projects/" + userEmail + "/" + id + "/content"] = contentObj;
                updates["currentDay/" + currentDay + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                updates["/usersCraft/" + userEmail + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                //   console.log(updates);
                console.log("Saved")
                return await basicfirebasecrudservices.updateFirebaseNode(updates);
            }


            let filteredMediaItemsWithoutComment = mediaItems.filter(item => item?.comment !== "Комментарий");
            let filteredMediaItemsWithoutCalculations = filteredMediaItemsWithoutComment.filter(item => item?.comment !== "Расчет");
            //    console.log(filteredMediaItemsWithoutCalculations);

            let comment = "";
            tasks.map(task => {
                comment += task.text;
            })

            let mediaItemsForSaving = [
                { mediaType: "html", comment: "Задание", content: comment },
                {
                    mediaType: "spreadsheet",
                    comment: "Расчет",
                    content: spreadsheetContent,
                },
                ...filteredMediaItemsWithoutCalculations
            ];

            if (saveOptions?.type === "spreadsheet") {
                let updates = {};
                updates["/usersCraft/" + userEmail + "/posts/" + id + "/mediaItems"] = mediaItemsForSaving;
                updates[
                    "/usersTemplates/projects/" + userEmail + "/" + id + "/mediaItems"] = mediaItemsForSaving;
                // updates["currentDay/" + currentDay + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                // updates["/usersCraft/" + userEmail + "/posts/" + id + userEmail + "media/content"] = basicfirebasecrudservices.transactionsListFull(content);
                //  console.log(updates);
                return await basicfirebasecrudservices.updateFirebaseNode(updates);
            }



            if (Array.isArray(content) && content.length > 0 && saveOptions?.type !== "spreadsheet" && saveOptions?.type !== "content") {
                let postObject = {
                    type: "accountingwithprofitscash",
                    theme: theme,
                    title: title,
                    deleted: false,
                    content: content,
                    quizString: quizString,
                    answer: "",
                    mediaItems: mediaItemsForSaving,
                    comment: basicfirebasecrudservices.transactionsListFull(content),
                    email: email,
                    user: user,
                    avatarUrl: avatarUrl,
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
                    id: id + userEmail + "media",
                    content: basicfirebasecrudservices.transactionsListFull(content),
                    type: "html",
                    theme: theme,
                    title: title + " " + user,
                    answer: "",
                    comment: "Проводки",
                    quizString: "",
                    deleted: false,
                    email: email,
                    user: user,
                    avatarUrl: avatarUrl,
                    date: new Intl.DateTimeFormat("ru", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    }).format(new Date()), //Date().toJSON()
                };




                let updates = {};
                updates["/usersCraft/" + userEmail + "/posts/" + id] = postObject;
                updates[
                    "/usersTemplates/projects/" + userEmail + "/" + id
                ] = postObject;

                updates["currentDay/" + currentDay + "/posts/" + id + userEmail + "media"] = htmlPost;
                updates["/usersCraft/" + userEmail + "/posts/" + id + userEmail + "media"] = htmlPost;

                //   console.log(updates);
                console.log("Saved")

                return await basicfirebasecrudservices.updateFirebaseNode(updates);
            }
            return null
        }

        saveContent().then(() => {
            console.log("Saved");

            applicationDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        showModal: false,
                        modal: {
                            title: false,
                            component: false,
                            item: {
                                id: false
                            }
                        }
                    },
                },
            });
            //  console.log(projectSelector);
            //  console.log(applicationSelector);
        })



    }, [triggerSave])

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
            {applicationSelector?.modal?.component === "EditRecordPeriod" && <EditRecordPeriod />}
            {applicationSelector?.modal?.component === "EditRecordSum" && <EditRecordSum />}
            {applicationSelector?.modal?.component === "EditRecordOrder" && <EditRecordOrder />}
            {applicationSelector?.modal?.component === "DeleteRecord" && <DeleteRecord />}

        </Modal.Body>

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
                draft[action.payload.arrayName] = draft[action.payload.arrayName].filter(item => item.id !== action.payload.id);
               // const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
               // console.log(action.payload);
               // console.log(index)
               // if (index !== -1) {
                  //  draft[action.payload.arrayName].splice(index, 1);
                    draft.triggerRerender = Math.random();
                    draft.triggerSave = Math.random();
                    draft.saveOptions = { type: "content" };
                //}
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

        case "UPDATE_ITEMS_IN_ARRAY":
            return basicfirebasecrudservices.produce(state, (draft) => {
                console.log(action.payload);
                action.payload.items.forEach(updatingitem => {
                    const index = draft[action.payload.arrayName].findIndex(item => item.id === updatingitem.id);
                    if (index !== -1) {
                        draft
                        [action.payload.arrayName][index]
                            = updatingitem
                    }
                })
                draft.triggerRerender = action.payload.id;
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

let spreadsheetInitialState = {
    expandView: true,

    spreadsheetContent: {},

    protoData: createProtoArray({}, 6, 6),
    data: createNewDraft(createProtoArray({}, 6, 6)),
    formulaValue: "", //createProtoArray(emptyProtoDataObject)[0][0],
    formulaRowIndex: 0,
    formulaColumnIndex: 0,
    spreadsheetTitle: '',
    countLetter: 0,
    title: "Задача",
};



function App() {
    const [state, applicationDispatch] = useReducer(
        caseReducer,
        initialState
    );

    const [projectState, projectDispatch] = useReducer(
        caseReducer,
        projectInitialState
    );

    const [spreadsheetState, spreadsheetDispatch] = useReducer(
        caseReducer,
        spreadsheetInitialState
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
            //   if (!!onlineopenquiz?.theme) {
            //     console.log(onlineopenquiz?.theme);
            //     document.querySelector(".card-title").innerText = onlineopenquiz?.theme;
            //     document.querySelector(".quiztitle").innerText = onlineopenquiz?.title;
            // }




            // let updates = {};
            // updates["/openquiz/propertyplantandequipment03"] = {
            //     id: "propertyplantandequipment03",
            //     title: "Учет основных средств 3",
            //     theme: "БФУ",
            //     answer: "Операции и отчетность",
            //     comment: "Операции и отчетность",
            //     type: "accountingwithprofitscash",
            //     tasks: [{
            //         id: 0,
            //         text: `В соответствии с решением руководства организации объект ОС первоначальной стоимостью 100 000 руб., подлежит ликвидации в связи сморальным износом.<br>
            //         Срок полезного использования данного объекта ОС –5 лет. Объект находился в эксплуатации в течение 3-х лет, сумма начис-ленной амортизации за это время составляет 60 000 руб.<br>
            //         После разборки ОС на склад были оприходованы материалы стоимостью 20 000 руб.<br>
            //         Заработная плата рабочих, занятых в ликвидации ОС составляет10 000 руб., отчисления по социальному страхованию и обеспечению со-ставили 2 600 руб.<br>
            //         Указать бухгалтерские записи.`
            //     }],

            // };
            // let res = basicfirebasecrudservices.updateFirebaseNode(updates);
            // console.log(res);

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
                    tasks: [{ id: 0, text: "Отразите в учете бухгалтерские записи" }],
                    balanceContoArray: balanceContoArray,
                    periods: ["2024", "2025", "2026", "2027", "2028"]
                };

            console.log(openquiz);

            if (!!localStorageData?.application?.email) {
                let userEmail = localStorageData?.application?.email.replace(
                    /[^a-zA-Z0-9]/g,
                    "_"
                );

                let openavatar = await basicfirebasecrudservices.getFirebaseNode({
                    url: "openavatars/" + userEmail,
                    type: "object",
                });


                let userprojectpostcontentobject = await basicfirebasecrudservices.getFirebaseNode({
                    url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/content",
                    type: "object",
                });

                if ((!userprojectpostcontentobject || Object.keys(userprojectpostcontentobject).length === 0) && !!openquiz?.importcontent) {
                    userprojectpostcontentobject = await basicfirebasecrudservices.getFirebaseNode({
                        url: "/usersCraft/" + userEmail + "/posts/" + openquiz.importcontent + "/content",
                        type: "object",
                    });
                }

                let userprojectpostcontent = !!userprojectpostcontentobject ?
                 Object.keys(userprojectpostcontentobject).map(objKey => userprojectpostcontentobject[objKey]): [];

                let periods = [...new Set(userprojectpostcontent.map(item => item.period))];
                let content = [];
                periods.forEach(period => {
                    userprojectpostcontent.filter(item => item.period === period).forEach((item, index) => {
                        if (!!item?.orderby) { content.push(item) }
                        else { content.push({ ...item, orderBy: index }) }
                    })
                });




                let userprojectspreadsheet = await basicfirebasecrudservices.getFirebaseNode({
                    url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/mediaItems/1/content",
                    type: "object",
                });

                userprojectspreadsheet = !!userprojectspreadsheet ? userprojectspreadsheet : {}


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
                    content: content,
                    userprojectspreadsheet: userprojectspreadsheet
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
                    content: [],
                    userprojectspreadsheet: userprojectspreadsheet
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
                        content: res.content,
                        quizString: res.userprojectspreadsheet
                        //   triggerRerender: "loaded"
                    },
                },
            });


            spreadsheetDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        spreadsheetContent: res.userprojectspreadsheet,
                        protoData: createProtoArray(res.userprojectspreadsheet, 6, 6),
                        data: createNewDraft(createProtoArray(res.userprojectspreadsheet, 6, 6)),
                        triggerRerender: "loaded"
                    },
                },
            });



        })
    }, []);


    if (state.loading) { return null }


    return <ApplicationContext.Provider value={state}>
        <ApplicationDispatchContext.Provider value={applicationDispatch}>


            <SpreadsheetContext.Provider value={spreadsheetState}>
                <SpreadsheetDispatchContext.Provider value={spreadsheetDispatch}>
                    <ProjectContext.Provider value={projectState}>
                        <ProjectDispatchContext.Provider value={projectDispatch}>
                            <GlobalModal />
                            <SaveProject />
                            <SimpleAccounting
                                avatarUrl={state.avatarUrl}
                                user={state.user}
                                setTitle="Тесты по балансовым уравнениям"
                            />
                            <ProjectOptionsNavigation />
                        </ProjectDispatchContext.Provider>
                    </ProjectContext.Provider>

                </SpreadsheetDispatchContext.Provider>
            </SpreadsheetContext.Provider>

        </ApplicationDispatchContext.Provider>
    </ApplicationContext.Provider>
}

ReactDOM.createRoot(document.querySelector("#simpleaccounting")).render(<App />);


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


function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function createNewDraft(data) {
    //   console.log(data);
    //    return calcData(data);
    return calcDataWithImmer(data)
}



function calcDataWithImmer(data) {
    //let newdata = JSON.parse(JSON.stringify(data));
    //let formulas = [];

    const newdata = basicfirebasecrudservices.produce(data, draft => {
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

function CompactActiveCells() {
    let spreadsheetSelector = useContext(SpreadsheetContext);
    let letter = alphabet[spreadsheetSelector.countLetter];
    let arrayOfRows = Array.from({ length: spreadsheetSelector.protoData.length }, (_, i) => i + 1);
    //  console.log(arrayOfRows);
    return <div>
        {arrayOfRows.map((item, index) => {
            return <CompactActiveCell cellAddress={letter + item} rowIndex={index} />
        })}
    </div>
}


function CompactActiveCell({ rowIndex = 0 }) {
    let projectDispatch = useContext(ProjectDispatchContext);
    let spreadsheetDispatch = useContext(SpreadsheetDispatchContext);
    let spreadsheetSelector = useContext(SpreadsheetContext);
    const protoDataValue = spreadsheetSelector.protoData
    [rowIndex]
    [spreadsheetSelector.countLetter];
    const [value, setValue] = React.useState(protoDataValue)
    const debouncedValue = useDebounce(value, 2000);



    useEffect(() => {

        let valueChecked = isNaN(debouncedValue)
            ? !!debouncedValue
                ? debouncedValue.trim()
                : ""
            : +debouncedValue;

        let newSpreadsheetContent = basicfirebasecrudservices.produce(
            spreadsheetSelector.spreadsheetContent, (draft) => {
                //    console.log(action.payload);
                draft[cellAddress] = valueChecked;
            });

        let newProtoData = createProtoArray(newSpreadsheetContent, 6, 6)
        let newData = createNewDraft(newProtoData);

        spreadsheetDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    spreadsheetContent: newSpreadsheetContent,
                    protoData: newProtoData,
                    data: newData
                }
            }
        })

        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    quizString: newSpreadsheetContent,
                    triggerSave: Math.random(),
                    saveOptions: { type: "spreadsheet" }
                }
            }
        })


    }, [debouncedValue])

    const calculatedDataValue = spreadsheetSelector.data
    [rowIndex]
    [spreadsheetSelector.countLetter];



    console.log(calculatedDataValue);
    let cellAddress = (alphabet[spreadsheetSelector.countLetter] + (rowIndex + 1))


    // function setValue(value) {
    //     console.log(value);
    // }

    let dataValue = isNumeric(calculatedDataValue) ?
        calculatedDataValue : " ";

    return <InputGroup className="my-1">
        <InputGroup.Prepend>
            <InputGroup.Text id={cellAddress}>
                <small style={{ minWidth: "3rem" }}>{cellAddress + " " + dataValue}</small>
            </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            value={value}
            //      placeholder={value}
            aria-label={cellAddress}
            aria-describedby={cellAddress}
            onChange={(e) => setValue(e.target.value)}
        />
    </InputGroup>
}


function CompactSpreadsheetLayout() {
    let spreadsheetDispatch = useContext(SpreadsheetDispatchContext);
    let spreadsheetSelector = useContext(SpreadsheetContext);
    let numberOfRows = spreadsheetSelector.protoData.length;


    function addRowUnder() {

        let newProtoData = createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6)
        let newData = createNewDraft(newProtoData);

        spreadsheetDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    //   spreadsheetContent: spreadsheetSelector.spreadsheetContent,
                    protoData: newProtoData,
                    data: newData
                }
            }
        })

        //  console.log(createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6 ));
        // spreadsheetDispatch({
        //     type: "SEED_STATE",
        //     payload: {
        //         objects: {
        //             protoData: createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6 ),
        //             triggerRerender: Math.random()
        //         },
        //     },
        // });
    }



    return <div>
        <CompactActiveCells />
        <Button
            onClick={addRowUnder}
            variant="outline-secondary">{"+ " + (numberOfRows + 1) + " ячейку"}</Button>

    </div>
}

function SpreadsheetLayout() {
    const projectSelector = useContext(ProjectContext);
    let { triggerRerender } = projectSelector;
    useEffect(() => { }, [triggerRerender])
    //  if (!openSpreadsheet) return null

    return <div className="container excel">
        <CompactSpreadsheetLayout />
    </div>
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

function calculateFormula(data, formula) {
    let parser = new formulaParser.Parser();
    // let parser = new FormulaParser.Parser();

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

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay])
    return debouncedValue
}




function ShowBalance() {
    const projectSelector = useContext(ProjectContext);

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : []

    let periods = [...new Set(content.map(item => item.period))];



    function processRecords(indicator, periodIndex) {
        //   console.log(periodIndex);
        let DValues = 0;
        let KValues = 0;
        content.forEach((item) => {
            //    console.log(item.period);
            let currentOperationPeriodIndex = periods.findIndex(
                (per) => per === item.period
            );
            //    console.log(currentOperationPeriodIndex);
            if (item.d === indicator && periodIndex > currentOperationPeriodIndex) {
                DValues = DValues + parseFloat(item.sum);
            }
            if (item.k === indicator && periodIndex > currentOperationPeriodIndex) {
                KValues = KValues + parseFloat(item.sum);
            }
            return null;
        });

        let indctr = balanceContoArray.find(item => item.id === indicator)
        if (indctr.disposition === "asset") {
            return DValues - KValues;
        } else {
            return KValues - DValues;
        }
    }

    return <Container>
        <Row className="bg-secondary text-white">
            {["Активы", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {item}
                </Col>
            ))}
        </Row>
        <Row>
            {["Основные средства", ...periods].map((item, index) => (
                <Col className="font-weight-bold" key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Основные средства"
                        : processRecords("Основные средства", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Материалы", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0 ? "Материалы" : processRecords("Материалы", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Незавершенное производство", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Незавершенное производство"
                        : processRecords("Незавершенное производство", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Готовая продукция", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Готовая продукция"
                        : processRecords("Готовая продукция", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Дебиторская задолженность", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Дебиторская задолженность"
                        : processRecords("Дебиторская задолженность", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Деньги", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0 ? "Деньги" : processRecords("Деньги", index)}
                </Col>
            ))}
        </Row>
        <Row className="bg-secondary text-white">
            {["Пассивы", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {item}
                </Col>
            ))}
        </Row>
        <Row>
            {["Уставный капитал", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Уставный капитал"
                        : processRecords("Уставный капитал", index)}
                </Col>
            ))}
        </Row>
        <Row>
            {["Нераспределенная прибыль", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Нераспределенная прибыль"
                        : processRecords("Нераспределенная прибыль", index)}
                </Col>
            ))}
        </Row>
        <Row className="bg-light text-dark">
            {["Долгосрочный банковский кредит", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Долгосрочный банковский кредит"
                        : processRecords("Долгосрочный банковский кредит", index)}
                </Col>
            ))}
        </Row>
        <Row className="bg-light text-dark">
            {["Краткосрочный банковский кредит", ...periods].map(
                (item, index) => (
                    <Col key={item} xs={index > 0 ? 2 : 4}>
                        {index === 0
                            ? "Краткосрочный банковский кредит"
                            : processRecords("Краткосрочный банковский кредит", index)}
                    </Col>
                )
            )}
        </Row>
        <Row className="bg-light text-dark">
            {["Кредиторская задолженность", ...periods].map((item, index) => (
                <Col key={item} xs={index > 0 ? 2 : 4}>
                    {index === 0
                        ? "Кредиторская задолженность"
                        : processRecords("Кредиторская задолженность", index)}
                </Col>
            ))}
        </Row>
    </Container>

}


function ShowFinancialResults() {
    const projectSelector = useContext(ProjectContext);

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : []
    let periods = [...new Set(content.map(item => item.period))];

    function checkTypePeriod(indicator, periodIndex) {
        let sum = 0;
        //    console.log(indicator, periodIndex);
        content.forEach((item) => {
            //   console.log(item.period, periods[periodIndex]);
            if (
                !!item?.type &&
                item.type.includes(indicator) &&
                item.period === periods[periodIndex - 1]
            ) {

                sum = sum + parseFloat(item.sum);
                //   console.log(sum);
            }
            return null;
        });
        return sum;
    }

    return <Container>
        <Row className="bg-secondary text-white">
            {["Финансовые результаты", ...periods].map((item, index) => (
                <Col key={index} xs={index > 0 ? 2 : 4}>
                    {item}
                </Col>
            ))}
        </Row>

        {["Выручка", "Себестоимость продукции, работ, услуг", "Коммерческие расходы", "Управленческие расходы",
            "Проценты к уплате", "Прочие расходы", "Налог на прибыль", "Дивиденды к начислению"]
            .map((row, indexRow) => <Row key={indexRow}>
                {[row, ...periods].map((item, index) =>
                    <Col key={index} xs={index > 0 ? 2 : 4}>
                        {index === 0 ? row : checkTypePeriod(row, index)}
                    </Col>
                )}
            </Row>
            )}

    </Container>
}


function ShowCashFlow() {
    const projectSelector = useContext(ProjectContext);

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : []
    let periods = [...new Set(content.map(item => item.period))];

    function checkTypePeriod(indicator, periodIndex) {
        let sum = 0;
        //    console.log(indicator, periodIndex);
        content.forEach((item) => {
            //   console.log(item.period, periods[periodIndex]);
            if (
                !!item?.type &&
                item.type.includes(indicator) &&
                item.period === periods[periodIndex - 1]
            ) {

                sum = sum + parseFloat(item.sum);
                //   console.log(sum);
            }
            return null;
        });
        return sum;
    }

    return <Container>
        <Row className="bg-secondary text-white">
            {["Кэш-фло", ...periods].map((item, index) => (
                <Col key={index} xs={index > 0 ? 2 : 4}>
                    {item}
                </Col>
            ))}
        </Row>

        {["Поступления по текущей деятельности", "Платежи по текущей деятельности", "Поступления по инвестиционной деятельности", "Платежи по инвестиционной деятельности", "Поступления по финансовой деятельности", "Платежи по финансовой деятельности"]
            .map((row, indexRow) => <Row key={indexRow}>
                {[row, ...periods].map((item, index) =>
                    <Col key={index} xs={index > 0 ? 2 : 4}>
                        {index === 0 ? row : checkTypePeriod(row, index)}
                    </Col>
                )}
            </Row>
            )}
    </Container>

}


function ShowFilteredList() {
    const projectSelector = useContext(ProjectContext);


    const [filter, dispatch] = useReducer(
        caseReducer,
        { d: null, k: null }
    );

    let content = Array.isArray(projectSelector.content) ? projectSelector.content : []

    let uniqueD = [...new Set(content.map((item) => item.d))];
    let uniqueK = [...new Set(content.map((item) => item.k))];


    function handleChange(e) {
        let { name: key, value } = e.target;
        dispatch({
            type: "SET_STORE_OBJECT",
            payload: { key, value },
        });
    }

    let filteredDrecords = !!filter.d && filter.d !== "..."
        ? content.filter((item) => item.d === filter.d)
        : content.map((item) => item);
    let filteredKrecords = !!filter.k && filter.k !== "..."
        ? content.filter((item) => item.k === filter.k)
        : filteredDrecords.map((item) => item);

    return <Container>

        <Row>
            <Col>
                <Form.Group controlId="formStateAnalyticsArray">
                    <Form.Label>Активы +, Пассивы -</Form.Label>
                    <Form.Control as="select" name="d" onChange={handleChange} size="sm" required>
                        {["...", ...uniqueD]
                            .map(item => {
                                return <option key={item} id={item}>
                                    {item}
                                </option>
                            })}
                    </Form.Control>
                </Form.Group>
            </Col>

            <Col><Form.Group controlId="formStateAnalyticsItem">
                <Form.Label>Активы -, Пассивы +</Form.Label>
                <Form.Control as="select" name="k" onChange={handleChange} size="sm" required>
                    {["...", ...uniqueK]
                        .map(item => { return <option key={item} id={item}>{item}</option> })}
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>

        {filteredKrecords.map((row, index) => (
            <div key={index}>
                <Row key={index}>
                    <Col xs={2}>
                        <div><small>{index + 1}</small></div>
                        <div><small>{row.period}</small></div>
                    </Col>
                    <Col xs={3}>
                        <div> {row.bookD}</div>
                        <div><small>{row.d}</small></div>

                    </Col>
                    <Col xs={3}>
                        <div>{row.bookK}</div>
                        <div><small>{row.k}</small></div>
                    </Col>
                    <Col xs={4}>
                        <small>{row.sum}</small>
                        {!!row?.type ? <small>{" " + row.type}</small> : <small> </small>}
                    </Col>
                </Row>
                <Row>
                    <Col>

                        {!!row?.comment ? <small>{" " + row.comment}</small> : <hr />}
                    </Col>
                </Row>
            </div>

        ))}

    </Container>


}

function ContoByDate() {
    const applicationSelector = useContext(ApplicationContext);
    const projectSelector = useContext(ProjectContext);
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectDispatch = useContext(ProjectDispatchContext);

    const [filter, dispatch] = useReducer(
        caseReducer, { conto: projectSelector.conto }
    );


    let content = Array.isArray(projectSelector.content) ? projectSelector.content : []

    let uniqueConto = [...new Set([
        ...content.map((item) => item.bookD),
        ...content.map((item) => item.bookK)
    ])];



    function handleChange(e) {
        let { name: key, value } = e.target;
        dispatch({
            type: "SET_STORE_OBJECT",
            payload: { key, value },
        });
    }




    let filteredRecords = content.filter((item) => item.bookD === filter.conto || item.bookK === filter.conto);
    let projectPeriods = [...new Set(filteredRecords.map(item => item.period))];
    let contentByYearByOrder = [];
    projectPeriods.forEach(period => {
        [...filteredRecords.filter((item) => item.period === period)]
            .sort((a, b) => a.orderBy - b.orderBy)
            .forEach(record => {
                contentByYearByOrder.push(record)
            })
    })




    let accountingResults = [{ value: 0, id: 0, contentIndex: -1 }];

    contentByYearByOrder.forEach((item, index) => {
        accountingResults.push({
            id: item.id, contentIndex: content.findIndex(record => record.id === item.id) + 1,
            value: item.bookD === filter.conto ?
                accountingResults[index].value + parseFloat(item.sum) :
                accountingResults[index].value - parseFloat(item.sum)
        })
    });


    function editObjectKey(e) {
        const { objkey } = { ...e.target.dataset };
        let objKeyValues = {
            orderBy: { title: "Редактор Порядка операции", component: "EditRecordOrder" },
            comment: { title: "Редактор Комментария операции", component: "EditRecordComment" },
            period: { title: "Редактор Периода операции", component: "EditRecordPeriod" },
            sum: { title: "Редактор Суммы операции", component: "EditRecordSum" }
        }

        projectDispatch({
            type: "SEED_STATE",
            payload: {
                objects: { conto: filter.conto },
            },
        });
        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: true,
                    modal: {
                        title: objKeyValues[objkey].title,
                        component: objKeyValues[objkey].component,
                        item: { id: e.target.id }
                    }
                },
            },
        });
    }







    return <Container key={applicationSelector?.triggerSave}>

        <Row>
            <Col>
                <Form.Group controlId="contoSelect">
                    <Form.Label>Счет</Form.Label>
                    <Form.Control as="select" name="conto" onChange={handleChange} size="sm" required>
                        {["...", ...uniqueConto]
                            .map(item => {
                                return <option key={item} id={item}>
                                    {item}
                                </option>
                            })}
                    </Form.Control>
                </Form.Group>
            </Col>


        </Row>

        {contentByYearByOrder.map((row, index) => {
            //   console.log(accountingResults[index + 1])
            return <div key={index}>
                <Row key={index}>
                    <Col xs={2}>
                        <div><small>{accountingResults[index + 1].contentIndex}</small></div>
                        <div><small>{row.period}</small></div>
                    </Col>
                    <Col xs={3}>
                        <div> {row.bookD}</div>
                        <div><small>{row.d}</small></div>

                    </Col>
                    <Col xs={3}>
                        <div>{row.bookK}</div>
                        <div><small>{row.k}</small></div>
                    </Col>
                    <Col xs={4}>
                        <div>  <small>{row.sum}</small>
                            {!!row?.type ? <small>{" " + row.type}</small> : <small> </small>}</div>


                        {<small>{!!row?.comment ? row?.comment : ""}</small>}
                    </Col>
                </Row>
                <Row><Col>
                    <Button id={row.id} variant="outline-primary" size="sm" data-objkey={"orderBy"} onClick={editObjectKey}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg> {" order"}
                    </Button>
                </Col><Col>
                        <Button id={row.id} variant="outline-primary" size="sm" data-objkey={"comment"} onClick={editObjectKey}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg> {" comment"}
                        </Button>
                    </Col><Col>
                        <Button id={row.id} variant="outline-primary" size="sm" data-objkey={"period"} onClick={editObjectKey}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg> {" period"}
                        </Button>
                    </Col><Col>
                        <Button id={row.id} variant="outline-primary" size="sm" data-objkey={"sum"} onClick={editObjectKey}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg> {" sum"}
                        </Button>



                    </Col>

                    <Col>
                        <div className="d-flex justify-content-between">

                            <small className="p-2 mb-1 bg-light text-dark">{accountingResults[index + 1].value >= 0 ?
                                "Сальдо Д " + accountingResults[index + 1].value :
                                "Сальдо K " + (-accountingResults[index + 1].value)}</small>
                        </div>
                    </Col>

                </Row>
                <hr className="m-1" />
            </div>
        }


        )}

    </Container>

}

function RecordDragAndDrop() {
    const applicationDispatch = useContext(ApplicationDispatchContext);
    const projectDispatch = useContext(ProjectDispatchContext);
    const projectSelector = useContext(ProjectContext);

    return null

    let projectItems = Array.isArray(projectSelector.content) ?
        projectSelector.content.map(item => {
            return {
                id: item.id,
                name: item.bookD + "/" + item.bookK + " " + item.sum,
                orderBy: item.orderBy,
                period: item.period,
            }
        }) : [];
    let projectPeriods = [...new Set(projectItems.map(item => item.period))];


    const [dndLayout, dispatch] = useReducer(
        caseReducer, {
        items: [], // projectItems.filter(item => item.period === projectPeriods[0]),
        draggedItemIndex: null,
        periods: projectPeriods,
        //    filteredPeriod: projectPeriods[0],
        //    filteredItems: 
    });



    const handleDragStart = (e, index) => {
        dispatch({
            type: "SEED_STATE",
            payload: {
                objects: { setDraggedItemIndex: index },
            },
        });
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Allow dropping
    };


    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
        console.log(sourceIndex);
        console.log(targetIndex);
        if (sourceIndex !== targetIndex) {
            const newItems = [...dndLayout.items];
            const [draggedItem] = newItems.splice(sourceIndex, 1);
            newItems.splice(targetIndex, 0, draggedItem);

            let orderedItems = newItems.map((item, index) => {
                return { ...item, orderBy: index }
            });


            let updatedItems = [];
            orderedItems.forEach(item => {
                let found = projectSelector.content.find(record => record.id === item.id);
                if (found.orderBy !== item.orderBy) {
                    updatedItems.push({ ...found, orderBy: item.orderBy })
                }
            });

            console.log(updatedItems);

            dispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        items: orderedItems,
                        draggedItemIndex: null,
                        //    triggerSave: Math.random(),
                        //    saveOptions: { type: "content" }
                    },
                },
            });


            projectDispatch({
                type: "UPDATE_ITEMS_IN_ARRAY",
                payload: {
                    items: updatedItems,
                    arrayName: "content"
                },
            });

            let updatednodes = [];
            updatedItems.forEach(item => {
                updatednodes.push({
                    relativeurl: "content/" + item.id,
                    nodeobject: item
                })
            });
            console.log(updatednodes);


            projectDispatch({
                type: "SEED_STATE",
                payload: {
                    objects: {
                        triggerSave: Math.random(),
                        saveOptions: {
                            type: "projectnodes",
                            updatednodes: updatednodes,
                        }
                    },
                }
            });

        }
    };



    function handleChange(e) {
        // let { name: key, value } = e.target;
        let items = projectItems.filter(item => item.period === e.target.value);

        dispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    items,
                    period: e.target.value
                }
            },
        });
    }



    console.log(dndLayout.items);
    console.log([...dndLayout.items].sort((a, b) => a.orderBy - b.orderBy));

    function editObjectKey(e) {
        const { objkey } = { ...e.target.dataset };
        let objKeyValues = {
            delete: { title: "Удалить операцию", component: "DeleteRecord" },
        }

        console.log(objKeyValues[objkey]);

        applicationDispatch({
            type: "SEED_STATE",
            payload: {
                objects: {
                    showModal: true,
                    modal: {
                        title: objKeyValues[objkey].title,
                        component: objKeyValues[objkey].component,
                        item: { id: e.target.id }
                    }
                },
            },
        });
    }



    return <Container key={dndLayout?.period + projectSelector?.triggerRerender}>
        <Row>
            <Col >
                <Form.Group controlId="formStateFilteredPeriod">
                    <Form.Label>Перейти к периоду</Form.Label>
                    <Form.Control as="select" name="filteredPeriod" onChange={handleChange} size="sm" required>
                        {["...", ...dndLayout.periods]
                            .map(item => {
                                return <option key={item} id={item}>
                                    {item}
                                </option>
                            })}
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>

        {[...dndLayout.items].sort((a, b) => a.orderBy - b.orderBy)
            //   [...dndLayout.items.sort((a, b) => a.orderBy - b.orderBy)]
            .map((item, index) => (

                <Row key={item.id} className={dndLayout?.draggedItemIndex === index ? "m-1 p-1 border border-secondary" : "m-1 p-1 border border-light"}>
                    <Col md={8}>
                        <div

                            key={item.id}
                            draggable="true"
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                        // style={{
                        //     padding: '10px',
                        //     margin: '5px',
                        //     border: '1px solid gray',
                        //     backgroundColor: dndLayout?.draggedItemIndex === index ? 'lightgray' : 'white',
                        // }}
                        >

                            <span>{item.period + " " + item.orderBy + " " + item.name}</span>


                        </div>
                    </Col>

                    <Col md={2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-move" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8" />
                        </svg></Col>
                    <Col md={2}>
                        <span className="text-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"
                                id={item.id}
                                data-objkey={"delete"} onClick={editObjectKey}
                            >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </span></Col>



                </Row>

            ))}


    </Container>
}

