//import React, { useState, useCallback } from "react";
let useState = React.useState;
let useCallback = React.useCallback;

//import { produce } from "immer";
let produce = immer.produce;

let { Container, Row, Col, Form, Button, Collapse } = ReactBootstrap;

function timeout(ms, res = "fulfilled") {
  return new Promise(resolve => setTimeout(()=>resolve(res), ms));
}
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
    { id: "Основные средства", children: ["01", "08", "07", "04"] },
    { id: "Материалы", children: ["10", "14", "15", "16", "19"] },
    { id: "Незавершенное производство", children: ["20", "23", "25", "26", "44", "21"] },
    { id: "Готовая продукция", children: ["41", "43"] },
    { id: "Дебиторская задолженность", children: ["62.1", "60.2", "75.1", "76", "68"] },
    { id: "Деньги", children: ["50", "51", "52", "55"] },
    { id: "Уставный капитал", children: ["80", "82", "83", "81"] },
    { id: "Нераспределенная прибыль", children: ["84", "90.1", "90.2", "90.3", "90.4", "90.5", "90.9", "91.1", "91.2", "91.9", "99"] },
    { id: "Долгосрочный банковский кредит", children: ["67"] },
    { id: "Краткосрочный банковский кредит", children: ["66"] },
    { id: "Кредиторская задолженность", children: ["70", "62.2", "60.1", "68", "75.2", "76"] },
]


function SimpleAccounting() {
    //  const { register, handleSubmit, reset } = useForm(); //, watch, errors
    const [records, updateRecords] = useState([]);
    const [open, setOpen] = useState(false);

    const [d, setD] = useState(null);
    const [k, setK] = useState(null);

    function handleChange(e) {
        let { name, value } = e.target;
        console.log(name, value);
        if (name === "d") { setD(value) } 
        if (name === "k") { setK(value) } 
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formdata = new FormData(currentTarget);
        let { d, k, sum, bookD, bookK } = Object.fromEntries(formdata);
        console.log(d, k, sum, bookD, bookK );
        handleAdd({ d, k, sum, bookD, bookK  });
        timeout(275).then(() => {
            setD(null);
            setK(null);
            currentTarget.reset();
        });
    }

    const handleAdd = useCallback(({ d, k, sum }) => {
        updateRecords(
            produce((draft) => {
                draft.push({ d, k, sum });
            })
        );
    }, []);





    function processRecords(indicator) {
        let DValues = 0;
        let KValues = 0;
        let processed = records.map(item => {
            if (item.d === indicator) { DValues = DValues + parseFloat(item.sum) }
            if (item.k === indicator) { KValues = KValues + parseFloat(item.sum) }
            return null
        })
        if (indicator === "Основные средства" || indicator === "Материалы" ||
            indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
            indicator === "Дебиторская задолженность" || indicator === "Деньги") { return DValues - KValues } else { return KValues - DValues }
    }

    return <div>
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
                    {records.map((row, index) => <Row key={index}>
                        <Col>{row.d}</Col>
                        <Col>{row.k}</Col>
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

ReactDOM.createRoot(document.querySelector("#root")).render(<SimpleAccounting />);

//  const getMessage = () => "Hello World";
//   document.getElementById("root").innerHTML = getMessage();

