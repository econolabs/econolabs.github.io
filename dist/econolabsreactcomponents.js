// standard IIFE
(function (React, ReactBootstrap) {

    const useState = React.useState;
    const e = React.createElement;
    const createContext = e;
    const useReducer = React.useReducer;
    const produce = immer.produce;
    const useEffect = React.useEffect;
    const useContext = React.useContext;


    var Button = ReactBootstrap.Button;
    var Collapse = ReactBootstrap.Collapse;
    const ButtonGroup = ReactBootstrap.ButtonGroup;
    const Form = ReactBootstrap.Form;
    const Container = ReactBootstrap.Container;
     const Modal = ReactBootstrap.Modal;
    const Row = ReactBootstrap.Row;
    const Col = ReactBootstrap.Col;

   


    
    const initialSpreadsheet = {
        email: "johndoe@yandex.ru",
        user: "DmGl",
        avatarUrl: "../freelancer.jpg",
        formulaValue: 0,
        formulaRowIndex: 0,
        formulaColumnIndex: 0,
        data: [], // createNewDraft(createProtoArray({}, 12, 2)),
        protoData: [], // createProtoArray({}, 12, 2),
        expandView: false,
        posts: [],
        selectedPage: null,
        formulaIsInFocus: false
    };

    function spreadsheetReducer(state = {}, action) {
        // console.log(action);
        switch (action.type) {
    
            // case "ADD_BOOK":
            // return produce(state, (draft) => {
            //   draft.books.list.push({ ...payload });
            // });
    
    
            case "SEED_ARRAY":
                return produce(state, (draft) => {
                    draft[action.payload.arrayName] = action.payload.arrayItems;
    
                })
    
            case 'LOAD_DATA':
                return produce(state, (draft) => {
                    draft.data = action.payload.data;
                    draft.protoData = action.payload.protoData;
                    draft.expandView = true;
                });
    
    
            case 'NEW_EMPTY_SPREADSHEET': {
                return produce(state, (draft) => {
                    draft.data = action.payload.data;
                    draft.protoData = action.payload.protoData;;
                    draft.formulaValue = action.payload.protoData[0][0];
                    draft.expandView = true;
                })
            }
    
            case 'UPDATE_FORMULA':
                return produce(state, (draft) => {
                    draft.formulaValue = action.payload.formulaValue;
                    draft.formulaRowIndex = action.payload.formulaRowIndex;
                    draft.formulaColumnIndex = action.payload.formulaColumnIndex;
                    draft.formulaIsInFocus = false;
                });
    
            case 'SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE':
                return produce(state, (draft) => {
                    draft.data = action.payload.data;
                    draft.protoData = action.payload.protoData;
                    // action.payload.value
                    draft.formulaValue = action.payload.formulaValue;
                    draft.formulaRowIndex = action.payload.formulaRowIndex;
                    draft.formulaColumnIndex = action.payload.formulaColumnIndex;
                });
    
            case "SET_STORE_OBJECT":
                return produce(state, (draft) => {
                    draft[action.payload.key] = action.payload.value;
                });
    
            case "PUSH_ITEM_TO_ARRAY":
                return produce(state, (draft) => {
                    draft[action.payload.arrayName].push(action.payload.item)
                });
    
    
    
            default:
                return state;
        }}
        ;
    

    function ExternalSpreadsheet() {
        const [mySpreadsheet, dispatch] = useReducer(spreadsheetReducer, initialSpreadsheet);

           return (React.createElement(React.Fragment, null, [
            {id: "1", title: "title", complete: false}
           ].map((todo) => (React.createElement("div", { key: todo.id },
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", checked: todo.complete, onChange: () => handleComplete(todo) }),
                todo.title))))));
    }
    
   
   



    function processRecords(records, indicator) {
        let DValues = 0;
        let KValues = 0;
        records.forEach(item => {
            if (item.d === indicator) { DValues = DValues + parseFloat(item.sum) }
            if (item.k === indicator) { KValues = KValues + parseFloat(item.sum) }
            return null
        });


        if (indicator === "Основные средства" || indicator === "Материалы" ||
            indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
            indicator === "Дебиторская задолженность" || indicator === "Деньги") { return DValues - KValues } else { return KValues - DValues }
    }


    function SimpleAccounting({ records, dispatch }) {
        // const mycase = useCase();
        // const dispatch = useCaseDispatch();
        const [open, setOpen] = useState(false);
        // let records = mycase?.records ? mycase.records : [];
        async function handleSubmit(e) {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            const formdata = new FormData(currentTarget);

            dispatch({
                type: "PUSH_ITEM_TO_ARRAY",
                payload: {
                    arrayName: "records",
                    item: Object.fromEntries(formdata)
                }
            });
            currentTarget.reset(); // e.currentTarget becoming null at this point. Why?

        }
        ;
        return e("div", null,
            e(Container, null,
                e(Row, null,
                    e(Col, null,
                        "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 ",
                        processRecords(records, "Основные средства")),
                    e(Col, null,
                        "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B ",
                        processRecords(records, "Уставный капитал"))),
                e(Row, null,
                    e(Col, null, " "),
                    e(Col, null,
                        "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C ",
                        processRecords(records, "Нераспределенная прибыль"))),
                e(Row, null,
                    e(Col, null,
                        "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B ",
                        processRecords(records, "Материалы")),
                    e(Col, null, " ")),
                e(Row, null,
                    e(Col, null,
                        "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ",
                        processRecords(records, "Незавершенное производство"),
                        "  "),
                    e(Col, null,
                        "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442 ",
                        processRecords(records, "Долгосрочный банковский кредит"),
                        " ")),
                e(Row, null,
                    e(Col, null,
                        "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F ",
                        processRecords(records, "Готовая продукция"),
                        " "),
                    e(Col, null, " ")),
                e(Row, null,
                    e(Col, null,
                        "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C ",
                        processRecords(records, "Дебиторская задолженность"),
                        " "),
                    e(Col, null,
                        "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442 ",
                        processRecords(records, "Краткосрочный банковский кредит"),
                        "  ")),
                e(Row, null,
                    e(Col, null,
                        "\u0414\u0435\u043D\u044C\u0433\u0438 ",
                        processRecords(records, "Деньги"),
                        " "),
                    e(Col, null,
                        "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C ",
                        processRecords(records, "Кредиторская задолженность"),
                        " "))),
            e("hr", null),
            e(Button, { onClick: () => setOpen(!open), "aria-controls": "example-collapse-text", "aria-expanded": open, variant: "outline-secondary", className: "mb-3" }, open ? "Скрыть Журнал" : "Показать журнал"),
            e(Collapse, { in: open },
                e("div", { id: "example-collapse-text" },
                    e(Container, null, records.map((row, index) => e(Row, { key: index },
                        e(Col, null, row.d),
                        e(Col, null, row.k),
                        e(Col, null, row.sum)))))),
            e("hr", null),
            e(Form, { onSubmit: handleSubmit },
                e(Row, null,
                    e(Col, null,
                        e(Form.Label, null, "\u0414"),
                        e(Form.Select, { id: "d", name: "d" },
                            e("option", null, "..."),
                            e("option", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"),
                            e("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"),
                            e("option", null, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"),
                            e("option", null, "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                            e("option", null, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"),
                            e("option", null, "\u0414\u0435\u043D\u044C\u0433\u0438"),
                            e("option", null, "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"),
                            e("option", null, "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C"),
                            e("option", null, "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"),
                            e("option", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"),
                            e("option", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"))),
                    e(Col, null,
                        e(Form.Group, { controlId: "k" },
                            e(Form.Label, null, "\u041A"),
                            e(Form.Select, { id: "k", name: "k" },
                                e("option", null, "..."),
                                e("option", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"),
                                e("option", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"),
                                e("option", null, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"),
                                e("option", null, "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                                e("option", null, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C"),
                                e("option", null, "\u0414\u0435\u043D\u044C\u0433\u0438"),
                                e("option", null, "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"),
                                e("option", null, "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C"),
                                e("option", null, "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"),
                                e("option", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442"),
                                e("option", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C")))),
                    e(Col, null,
                        e(Form.Group, { controlId: "sum" },
                            e(Form.Label, null, "\u0421\u0443\u043C\u043C\u0430"),
                            e(Form.Control, { type: "text", placeholder: "sum", name: "sum", required: true })))),
                e(Button, { variant: "primary", type: "submit" }, "Submit")));
    }


    // function SimpleAccounting({
    //     records,
    //     dispatch
    // }) {

    //     // const mycase = useCase();
    //     // const dispatch = useCaseDispatch();
    //     const [open, setOpen] = useState(false);

    //     // let records = mycase?.records ? mycase.records : [];

    //     async function handleSubmit(e) {
    //         e.preventDefault();
    //         const currentTarget = e.currentTarget;
    //         const formdata = new FormData(currentTarget);
    //         timeout(275).then(() => {
    //             dispatch({
    //                 type: "PUSH_ITEM_TO_ARRAY",
    //                 payload: {
    //                     arrayName: "records",
    //                     item: Object.fromEntries(formdata)
    //                 }
    //             });
    //             currentTarget.reset(); // e.currentTarget becoming null at this point. Why?
    //         });
    //     };


    //     return <div>
    //         <Container>
    //             <Row>
    //                 <Col>Основные средства {processRecords(records, "Основные средства")}</Col>
    //                 <Col>Уставный капитал {processRecords(records, "Уставный капитал")}</Col>
    //             </Row>
    //             <Row>
    //                 <Col>{" "}</Col>
    //                 <Col>Нераспределенная прибыль {processRecords(records, "Нераспределенная прибыль")}</Col>
    //             </Row>
    //             <Row>
    //                 <Col>Материалы {processRecords(records, "Материалы")}</Col>
    //                 <Col>{" "}</Col>
    //             </Row>
    //             <Row>
    //                 <Col>Незавершенное производство {processRecords(records, "Незавершенное производство")}  </Col>
    //                 <Col>Долгосрочный банковский кредит {processRecords(records, "Долгосрочный банковский кредит")} </Col>
    //             </Row>
    //             <Row>
    //                 <Col>Готовая продукция {processRecords(records, "Готовая продукция")} </Col>
    //                 <Col>{" "}</Col>
    //             </Row>
    //             <Row>
    //                 <Col>Дебиторская задолженность {processRecords(records, "Дебиторская задолженность")} </Col>
    //                 <Col>Краткосрочный банковский кредит {processRecords(records, "Краткосрочный банковский кредит")}  </Col>
    //             </Row>
    //             <Row>
    //                 <Col>Деньги {processRecords(records, "Деньги")} </Col>
    //                 <Col>Кредиторская задолженность {processRecords(records, "Кредиторская задолженность")} </Col>
    //             </Row>
    //         </Container>
    //         <hr />
    //         <Button
    //             onClick={() => setOpen(!open)}
    //             aria-controls="example-collapse-text"
    //             aria-expanded={open}
    //             variant="outline-secondary"
    //             className="mb-3"
    //         >
    //             {open ? "Скрыть Журнал" : "Показать журнал"}
    //         </Button>
    //         <Collapse in={open}>
    //             <div id="example-collapse-text">
    //                 <Container>
    //                     {records.map((row, index) => <Row key={index}>
    //                         <Col>{row.d}</Col>
    //                         <Col>{row.k}</Col>
    //                         <Col>{row.sum}</Col>
    //                     </Row>)}
    //                 </Container>
    //             </div>
    //         </Collapse>
    //         <hr />
    //         <Form onSubmit={handleSubmit}>
    //             <Row>
    //                 <Col>
    //                     <Form.Label>Д</Form.Label>
    //                     <Form.Select id="d" name="d">
    //                         <option>...</option>
    //                         <option>Основные средства</option>
    //                         <option>Материалы</option>
    //                         <option>Незавершенное производство</option>
    //                         <option>Готовая продукция</option>
    //                         <option>Дебиторская задолженность</option>
    //                         <option>Деньги</option>
    //                         <option>Уставный капитал</option>
    //                         <option>Нераспределенная прибыль</option>
    //                         <option>Долгосрочный банковский кредит</option>
    //                         <option>Краткосрочный банковский кредит</option>
    //                         <option>Кредиторская задолженность</option>
    //                     </Form.Select>
    //                 </Col>
    //                 <Col>
    //                     <Form.Group controlId="k">
    //                         <Form.Label>К</Form.Label>
    //                         <Form.Select id="k" name="k">
    //                             <option>...</option>
    //                             <option>Основные средства</option>
    //                             <option>Материалы</option>
    //                             <option>Незавершенное производство</option>
    //                             <option>Готовая продукция</option>
    //                             <option>Дебиторская задолженность</option>
    //                             <option>Деньги</option>
    //                             <option>Уставный капитал</option>
    //                             <option>Нераспределенная прибыль</option>
    //                             <option>Долгосрочный банковский кредит</option>
    //                             <option>Краткосрочный банковский кредит</option>
    //                             <option>Кредиторская задолженность</option>
    //                         </Form.Select>
    //                     </Form.Group>
    //                 </Col>
    //                 <Col>
    //                     <Form.Group controlId="sum">
    //                         <Form.Label>Сумма</Form.Label>
    //                         <Form.Control type="text" placeholder="sum" name="sum" required />
    //                     </Form.Group>
    //                 </Col>
    //             </Row>
    //             <Button variant="primary" type="submit">
    //                 Submit
    //             </Button>
    //         </Form>
    //     </div >
    // }


    function RecordsList({ records }) {
        const [filter, setFilter] = useState({ d: null, k: null });
        function handleSubmit(e) {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            const formdata = new FormData(currentTarget);
            setFilter({ d: formdata.get("d"), k: formdata.get("k") });
        }
        ;
        let uniqueD = [...new Set(records.map((item) => item.d))];
        let uniqueK = [...new Set(records.map((item) => item.k))];
        let filteredDrecords = !!filter.d
            ? records.filter((item) => item.d === filter.d)
            : records.map((item) => item);
        let filteredKrecords = !!filter.k
            ? filteredDrecords.filter((item) => item.k === filter.k)
            : filteredDrecords.map((item) => item);
        return (e(Container, null,
            e(Form, { onSubmit: handleSubmit },
                e(Row, null,
                    e(Col, null,
                        e(Form.Group, { controlId: "formAssetIncreaseLiabiliesDecrease" },
                            e(Form.Label, null, "\u0410\u043A\u0442\u0438\u0432\u044B +, \u041F\u0430\u0441\u0441\u0438\u0432\u044B -"),
                            e(Form.Control, { as: "select", name: "d", required: true }, uniqueD.map((item) => (e("option", { key: item }, item)))))),
                    e(Col, null,
                        e(Form.Group, { controlId: "formAssetDecreaseLiabiliesIncrease" },
                            e(Form.Label, null, "\u0410\u043A\u0442\u0438\u0432\u044B -, \u041F\u0430\u0441\u0441\u0438\u0432\u044B +"),
                            e(Form.Control, { as: "select", name: "k", required: true }, uniqueK.map((item) => (e("option", { key: item }, item))))))),
                e(Container, null,
                    e(Row, null,
                        e(Col, null,
                            e(Button, { variant: "outline-secondary", type: "submit" }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440")),
                        e(Col, null,
                            e(Button, { variant: "outline-secondary", onClick: () => setFilter({ d: null, k: null }) }, "\u0412\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"))))),
            filteredKrecords.map((row, index) => (e(Row, { key: index },
                e(Col, { xs: 2 },
                    e("small", null, row.period)),
                e(Col, { xs: 3 },
                    e("small", null, row.d)),
                e(Col, { xs: 3 },
                    e("small", null, row.k)),
                e(Col, { xs: 4 },
                    e("small", null, row.sum),
                    !!(row === null || row === void 0 ? void 0 : row.type) ? e("small", null, " " + row.type) : e("small", null, " ")))))));
    }

    // function RecordsList({ records }) {
    //     const [filter, setFilter] = useState({ d: null, k: null });
    //     function handleSubmit(e) {
    //         e.preventDefault();
    //         const currentTarget = e.currentTarget;
    //         const formdata = new FormData(currentTarget);
    //         setFilter({ d: formdata.get("d"), k: formdata.get("k") });
    //     };
    //     let uniqueD = [...new Set(records.map((item) => item.d))];
    //     let uniqueK = [...new Set(records.map((item) => item.k))];
    //     let filteredDrecords = !!filter.d
    //         ? records.filter((item) => item.d === filter.d)
    //         : records.map((item) => item);
    //     let filteredKrecords = !!filter.k
    //         ? filteredDrecords.filter((item) => item.k === filter.k)
    //         : filteredDrecords.map((item) => item);
    //     return (
    //         <Container>
    //             <Form onSubmit={handleSubmit}>
    //                 <Row>
    //                     <Col>
    //                         <Form.Group controlId="formAssetIncreaseLiabiliesDecrease">
    //                             <Form.Label>Активы +, Пассивы -</Form.Label>
    //                             <Form.Control as="select" name="d" required>
    //                                 {uniqueD.map((item) => (
    //                                     <option key={item}>{item}</option>
    //                                 ))}
    //                             </Form.Control>
    //                         </Form.Group>
    //                     </Col>

    //                     <Col>
    //                         <Form.Group controlId="formAssetDecreaseLiabiliesIncrease">
    //                             <Form.Label>Активы -, Пассивы +</Form.Label>
    //                             <Form.Control as="select"  name="k" required>
    //                                 {uniqueK.map((item) => (
    //                                     <option key={item}>{item}</option>
    //                                 ))}
    //                             </Form.Control>
    //                         </Form.Group>
    //                     </Col>

    //                 </Row>
    //                 <Container>
    //                     <Row>
    //                         <Col>
    //                             <Button variant="outline-secondary" type="submit">
    //                                 Применить фильтр
    //                             </Button>
    //                         </Col>
    //                         <Col>
    //                             <Button
    //                                 variant="outline-secondary"
    //                                 onClick={() => setFilter({ d: null, k: null })}
    //                             >
    //                                 Все операции
    //                             </Button>
    //                         </Col>
    //                     </Row>
    //                 </Container>
    //             </Form>

    //             {filteredKrecords.map((row, index) => (
    //                 <Row key={index}>
    //                     <Col xs={2}>
    //                         <small>{row.period}</small>
    //                     </Col>
    //                     <Col xs={3}>
    //                         <small>{row.d}</small>
    //                     </Col>
    //                     <Col xs={3}>
    //                         <small>{row.k}</small>
    //                     </Col>
    //                     <Col xs={4}>
    //                         <small>{row.sum}</small>
    //                         {!!row?.type ? <small>{" " + row.type}</small> : <small> </small>}
    //                     </Col>
    //                 </Row>
    //             ))}
    //         </Container>
    //     );
    // }



    function ShowCashFlow({ records }) {
        const [periods, setPeriods] = React.useState(["2024", "2025", "2026", "2027"]);
        function checkTypePeriod(indicator, periodIndex) {
            let sum = 0;
            //    console.log(indicator, periodIndex);
            Array.isArray(records) && records.length > 0 && records.forEach((item) => {
                //   console.log(item.period, periods[periodIndex]);
                if (!!(item === null || item === void 0 ? void 0 : item.type) &&
                    item.type.includes(indicator) &&
                    item.period === periods[periodIndex - 1]) {
                    sum = sum + parseFloat(item.sum);
                    //   console.log(sum);
                }
                return null;
            });
            return sum;
        }
        return e(Container, null,
            e(Row, { className: "bg-secondary text-white" }, ["Кэш-фло", ...periods].map((item, index) => (e(Col, { key: index, xs: index > 0 ? 2 : 4 }, item)))),
            ["Поступления по текущей деятельности", "Платежи по текущей деятельности", "Поступления по инвестиционной деятельности", "Платежи по инвестиционной деятельности", "Поступления по финансовой деятельности", "Платежи по финансовой деятельности"]
                .map((row, indexRow) => e(Row, { key: indexRow }, [row, ...periods].map((item, index) => e(Col, { key: index, xs: index > 0 ? 2 : 4 }, index === 0 ? row : checkTypePeriod(row, index))))));
    }



    // function ShowCashFlow({ records }) {
    //     const [periods, setPeriods] = React.useState(["2024", "2025", "2026", "2027"]);

    //     function checkTypePeriod(indicator, periodIndex) {
    //         let sum = 0;
    //         //    console.log(indicator, periodIndex);
    //         Array.isArray(records) && records.length > 0 && records.forEach((item) => {
    //             //   console.log(item.period, periods[periodIndex]);
    //             if (
    //                 !!item?.type &&
    //                 item.type.includes(indicator) &&
    //                 item.period === periods[periodIndex - 1]
    //             ) {

    //                 sum = sum + parseFloat(item.sum);
    //                 //   console.log(sum);
    //             }
    //             return null;
    //         });
    //         return sum;
    //     }

    //     return <Container>
    //         <Row className="bg-secondary text-white">
    //             {["Кэш-фло", ...periods].map((item, index) => (
    //                 <Col key={index} xs={index > 0 ? 2 : 4}>
    //                     {item}
    //                 </Col>
    //             ))}
    //         </Row>

    //         {["Поступления по текущей деятельности", "Платежи по текущей деятельности", "Поступления по инвестиционной деятельности", "Платежи по инвестиционной деятельности", "Поступления по финансовой деятельности", "Платежи по финансовой деятельности"]
    //             .map((row, indexRow) => <Row key={indexRow}>
    //                 {[row, ...periods].map((item, index) =>
    //                     <Col key={index} xs={index > 0 ? 2 : 4}>
    //                         {index === 0 ? row : checkTypePeriod(row, index)}
    //                     </Col>
    //                 )}
    //             </Row>
    //             )}
    //     </Container>
    // }


    function ShowFinancialResults({ records }) {
        const [periods, setPeriods] = useState(["2024", "2025", "2026", "2027"]);
        function checkTypePeriod(indicator, periodIndex) {
            let sum = 0;
            //    console.log(indicator, periodIndex);
            Array.isArray(records) && records.length > 0 && records.forEach((item) => {
                //   console.log(item.period, periods[periodIndex]);
                if (!!(item === null || item === void 0 ? void 0 : item.type) &&
                    item.type.includes(indicator) &&
                    item.period === periods[periodIndex - 1]) {
                    sum = sum + parseFloat(item.sum);
                    //   console.log(sum);
                }
                return null;
            });
            return sum;
        }
        return e(Container, null,
            e(Row, { className: "bg-secondary text-white" }, ["Финансовые результаты", ...periods].map((item, index) => (e(Col, { key: index, xs: index > 0 ? 2 : 4 }, item)))),
            ["Выручка", "Себестоимость продукции, работ, услуг", "Коммерческие расходы", "Управленческие расходы",
                "Проценты к уплате", "Прочие расходы", "Налог на прибыль", "Дивиденды к начислению"]
                .map((row, indexRow) => e(Row, { key: indexRow }, [row, ...periods].map((item, index) => e(Col, { key: index, xs: index > 0 ? 2 : 4 }, index === 0 ? row : checkTypePeriod(row, index))))));
    }

    //    function ShowFinancialResults({records}) {
    //     const [periods, setPeriods] = useState(["2024", "2025", "2026", "2027"]);

    //     function checkTypePeriod(indicator, periodIndex) {
    //         let sum = 0;
    //         //    console.log(indicator, periodIndex);
    //         Array.isArray(records) && records.length > 0 && records.forEach((item) => {
    //             //   console.log(item.period, periods[periodIndex]);
    //             if (
    //                 !!item?.type &&
    //                 item.type.includes(indicator) &&
    //                 item.period === periods[periodIndex - 1]
    //             ) {

    //                 sum = sum + parseFloat(item.sum);
    //                 //   console.log(sum);
    //             }
    //             return null;
    //         });
    //         return sum;
    //     }

    //     return <Container>
    //         <Row className="bg-secondary text-white">
    //             {["Финансовые результаты", ...periods].map((item, index) => (
    //                 <Col key={index} xs={index > 0 ? 2 : 4}>
    //                     {item}
    //                 </Col>
    //             ))}
    //         </Row>
    //         {["Выручка", "Себестоимость продукции, работ, услуг", "Коммерческие расходы", "Управленческие расходы",
    //             "Проценты к уплате", "Прочие расходы", "Налог на прибыль", "Дивиденды к начислению"]
    //             .map((row, indexRow) => <Row key={indexRow}>
    //                 {[row, ...periods].map((item, index) =>
    //                     <Col key={index} xs={index > 0 ? 2 : 4}>
    //                         {index === 0 ? row : checkTypePeriod(row, index)}
    //                     </Col>
    //                 )}
    //             </Row>
    //             )}
    //     </Container>
    // }



    function ShowBalance({ records }) {
        const [periods, setPeriods] = useState(["2024", "2025", "2026", "2027"]);
        function processRecords(indicator, periodIndex) {
            //   console.log(periodIndex);
            let DValues = 0;
            let KValues = 0;
            Array.isArray(records) && records.length > 0 && records
                .forEach((item) => {
                    //    console.log(item.period);
                    let currentOperationPeriodIndex = periods.findIndex((per) => per === item.period);
                    //    console.log(currentOperationPeriodIndex);
                    if (item.d === indicator && periodIndex > currentOperationPeriodIndex) {
                        DValues = DValues + parseFloat(item.sum);
                    }
                    if (item.k === indicator && periodIndex > currentOperationPeriodIndex) {
                        KValues = KValues + parseFloat(item.sum);
                    }
                    return null;
                });
            if (indicator === "Основные средства" ||
                indicator === "Материалы" ||
                indicator === "Незавершенное производство" ||
                indicator === "Готовая продукция" ||
                indicator === "Дебиторская задолженность" ||
                indicator === "Деньги") {
                return DValues - KValues;
            }
            else {
                return KValues - DValues;
            }
        }
        return e(Container, null,
            e(Row, { className: "bg-secondary text-white" }, ["Активы", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, item)))),
            e(Row, null, ["Основные средства", ...periods].map((item, index) => (e(Col, { className: "font-weight-bold", key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Основные средства"
                : processRecords("Основные средства", index))))),
            e(Row, null, ["Материалы", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0 ? "Материалы" : processRecords("Материалы", index))))),
            e(Row, null, ["Незавершенное производство", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Незавершенное производство"
                : processRecords("Незавершенное производство", index))))),
            e(Row, null, ["Готовая продукция", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Готовая продукция"
                : processRecords("Готовая продукция", index))))),
            e(Row, null, ["Дебиторская задолженность", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Дебиторская задолженность"
                : processRecords("Дебиторская задолженность", index))))),
            e(Row, null, ["Деньги", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0 ? "Деньги" : processRecords("Деньги", index))))),
            e(Row, { className: "bg-secondary text-white" }, ["Пассивы", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, item)))),
            e(Row, null, ["Уставный капитал", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Уставный капитал"
                : processRecords("Уставный капитал", index))))),
            e(Row, null, ["Нераспределенная прибыль", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Нераспределенная прибыль"
                : processRecords("Нераспределенная прибыль", index))))),
            e(Row, { className: "bg-light text-dark" }, ["Долгосрочный банковский кредит", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Долгосрочный банковский кредит"
                : processRecords("Долгосрочный банковский кредит", index))))),
            e(Row, { className: "bg-light text-dark" }, ["Краткосрочный банковский кредит", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Краткосрочный банковский кредит"
                : processRecords("Краткосрочный банковский кредит", index))))),
            e(Row, { className: "bg-light text-dark" }, ["Кредиторская задолженность", ...periods].map((item, index) => (e(Col, { key: item, xs: index > 0 ? 2 : 4 }, index === 0
                ? "Кредиторская задолженность"
                : processRecords("Кредиторская задолженность", index))))));
    }


    // function ShowBalance({records}) {
    //     const [periods, setPeriods] = React.useState(["2024", "2025", "2026", "2027"]);

    //     function processRecords(indicator, periodIndex) {
    //         //   console.log(periodIndex);
    //         let DValues = 0;
    //         let KValues = 0;
    //         Array.isArray(records) && records.length > 0 && records
    //         .forEach((item) => {
    //             //    console.log(item.period);
    //             let currentOperationPeriodIndex = periods.findIndex(
    //                 (per) => per === item.period
    //             );
    //             //    console.log(currentOperationPeriodIndex);
    //             if (item.d === indicator && periodIndex > currentOperationPeriodIndex) {
    //                 DValues = DValues + parseFloat(item.sum);
    //             }
    //             if (item.k === indicator && periodIndex > currentOperationPeriodIndex) {
    //                 KValues = KValues + parseFloat(item.sum);
    //             }
    //             return null;
    //         });
    //         if (
    //             indicator === "Основные средства" ||
    //             indicator === "Материалы" ||
    //             indicator === "Незавершенное производство" ||
    //             indicator === "Готовая продукция" ||
    //             indicator === "Дебиторская задолженность" ||
    //             indicator === "Деньги"
    //         ) {
    //             return DValues - KValues;
    //         } else {
    //             return KValues - DValues;
    //         }
    //     }

    //     return <Container>
    //         <Row className="bg-secondary text-white">
    //             {["Активы", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {item}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Основные средства", ...periods].map((item, index) => (
    //                 <Col className="font-weight-bold" key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Основные средства"
    //                         : processRecords("Основные средства", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Материалы", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0 ? "Материалы" : processRecords("Материалы", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Незавершенное производство", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Незавершенное производство"
    //                         : processRecords("Незавершенное производство", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Готовая продукция", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Готовая продукция"
    //                         : processRecords("Готовая продукция", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Дебиторская задолженность", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Дебиторская задолженность"
    //                         : processRecords("Дебиторская задолженность", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Деньги", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0 ? "Деньги" : processRecords("Деньги", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row className="bg-secondary text-white">
    //             {["Пассивы", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {item}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Уставный капитал", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Уставный капитал"
    //                         : processRecords("Уставный капитал", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row>
    //             {["Нераспределенная прибыль", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Нераспределенная прибыль"
    //                         : processRecords("Нераспределенная прибыль", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row className="bg-light text-dark">
    //             {["Долгосрочный банковский кредит", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Долгосрочный банковский кредит"
    //                         : processRecords("Долгосрочный банковский кредит", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //         <Row className="bg-light text-dark">
    //             {["Краткосрочный банковский кредит", ...periods].map(
    //                 (item, index) => (
    //                     <Col key={item} xs={index > 0 ? 2 : 4}>
    //                         {index === 0
    //                             ? "Краткосрочный банковский кредит"
    //                             : processRecords("Краткосрочный банковский кредит", index)}
    //                     </Col>
    //                 )
    //             )}
    //         </Row>
    //         <Row className="bg-light text-dark">
    //             {["Кредиторская задолженность", ...periods].map((item, index) => (
    //                 <Col key={item} xs={index > 0 ? 2 : 4}>
    //                     {index === 0
    //                         ? "Кредиторская задолженность"
    //                         : processRecords("Кредиторская задолженность", index)}
    //                 </Col>
    //             ))}
    //         </Row>
    //     </Container>

    // }




    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function loadState() {
        try {
            const serializedState = localStorage.getItem('econolabs');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined
        }
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function extract([beg, end]) {
        const matcher = new RegExp(`${beg}(.*?)${end}`, "gm");
        const normalise = (str) => str.slice(beg.length, end.length * -1);
        return function (str) {
            return str.match(matcher).map(normalise);
        };
    }


    window.EconolabsReactComponents = Object.assign({}, {
        SimpleAccounting: SimpleAccounting,
        ShowBalance: ShowBalance,
        ShowFinancialResults: ShowFinancialResults,
        ShowCashFlow: ShowCashFlow,
        RecordsList: RecordsList,
        ExternalSpreadsheet: ExternalSpreadsheet,

        timeout: timeout,
        loadState: loadState,
        shuffle: shuffle,
        extract: extract
    })

})(React, ReactBootstrap, immer);