(function (React, client, reactBootstrap) {
  'use strict';

  let {
    createProtoArray,
    saveState,
    timeout,
    updateFirebaseNode,
    produce,
    loadState,
    getFirebaseNode,
    generateUser,
    createNewDraft,
    alphabet,
    getFirebaseNodeKey
  } = basicfirebasecrudauthservices;
  let openquizid = document.getElementById("simpleaccounting").dataset.openquizid;
  function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function transactionsListFull(bookrecords) {
    let markup = Array.isArray(bookrecords) && bookrecords.length > 0 ? `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Дебет</th>
      <th scope="col">Кредит</th>
      <th scope="col">Сумма</th>
      <th scope="col">Период</th>
    </tr>
  </thead>
  <tbody>
    ` + bookrecords.map((item, index) => {
      return `
        <tr>
      <th scope="row">${index + 1}</th>
      <td>${item?.bookD}</td>
      <td>${item?.bookK}</td>
      <td>${item?.sum}</td>
       <td>${item?.period}</td>
    </tr>
    <tr>
    <th scope='row'>Ком</th>
    <td colspan='4'>${!!item?.comment ? item.comment : ""}</td>
    </tr>
    `;
    }).join("") + `
    </tbody>
  </table> 
    ` : "";
    return markup;
  }
  let defaultProjectData = {
    id: openquizid,
    title: "Особ орган бухг учета на предпр. малого бизнеса",
    // Задание от " + new Intl.DateTimeFormat("ru", {
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric"
    // }).format(new Date()),
    theme: "Особ орган бухг учета на предпр. малого бизнеса",
    answer: "Операции и отчетность",
    comment: "Операции и отчетность",
    type: "accountingwithprofitscash",
    tasks: [{
      id: 0,
      text: "Отразите в учете бухгалтерские записи"
    }]
  };
  const ApplicationContext = /*#__PURE__*/React.createContext(null);
  const ApplicationDispatchContext = /*#__PURE__*/React.createContext(null);
  const ProjectContext = /*#__PURE__*/React.createContext(null);
  const ProjectDispatchContext = /*#__PURE__*/React.createContext(null);
  const SpreadsheetContext = /*#__PURE__*/React.createContext(null);
  const SpreadsheetDispatchContext = /*#__PURE__*/React.createContext(null);
  let balanceContoArray = [{
    id: "Основные средства",
    children: ["01", "08", "07", "04", "02"],
    disposition: "asset"
  }, {
    id: "Материалы",
    children: ["10", "14", "15", "16", "19"],
    disposition: "asset"
  }, {
    id: "Незавершенное производство",
    children: ["20", "23", "25", "26", "44", "21"],
    disposition: "asset"
  }, {
    id: "Готовая продукция",
    children: ["41", "43"],
    disposition: "asset"
  }, {
    id: "Дебиторская задолженность",
    children: ["62.1", "60.2", "75.1", "76", "68"],
    disposition: "asset"
  }, {
    id: "Деньги",
    children: ["50", "51", "52", "55"],
    disposition: "asset"
  }, {
    id: "Уставный капитал",
    children: ["80", "82", "83", "81"]
  }, {
    id: "Нераспределенная прибыль",
    children: ["84", "90.1", "90.2", "90.3", "90.4", "90.5", "90.9", "91.1", "91.2", "91.9", "99"]
  }, {
    id: "Долгосрочный банковский кредит",
    children: ["67"]
  }, {
    id: "Краткосрочный банковский кредит",
    children: ["66"]
  }, {
    id: "Кредиторская задолженность",
    children: ["70", "62.2", "60.1", "68", "75.2", "76", "69"]
  }];
  function LoginLogout() {
    const applicationSelector = React.useContext(ApplicationContext);
    //  const [show, setShow] = useState(false);

    let user = applicationSelector?.user;
    let email = applicationSelector?.email;
    const handleSubmit = e => {
      e.preventDefault();
      saveState({
        application: {
          email: e.currentTarget.elements.formEmail.value,
          user: e.currentTarget.elements.formUser.value,
          avatarUrl: "../freelancer.jpg",
          userEmail: e.currentTarget.elements.formEmail.value.replace(/[^a-zA-Z0-9]/g, "_")
        }
      });
      setTimeout(() => window.location.reload(), 3000);
    };
    return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      className: "mb-3",
      controlId: "formEmail"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "Email"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      type: "email",
      placeholder: email
    }), /*#__PURE__*/React.createElement(reactBootstrap.Form.Text, {
      className: "text-muted"
    }, "We'll never share your email with anyone else.")), /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      className: "mb-3",
      controlId: "formUser"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "User"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      type: "text",
      placeholder: user
    })), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "primary",
      type: "submit"
    }, "Submit"));
  }
  function EditRecordPeriod() {
    const applicationSelector = React.useContext(ApplicationContext);
    const applicationDispatch = React.useContext(ApplicationDispatchContext);
    const projectSelector = React.useContext(ProjectContext);
    const projectDispatch = React.useContext(ProjectDispatchContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;
    function closeSelect() {
      applicationDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            showModal: false,
            modal: {}
          }
        }
      });
    }
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
        }
      });
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            triggerRerender: Math.random(),
            triggerSave: Math.random(),
            saveOptions: {
              type: "content"
            }
          }
        }
      });
      closeSelect();
    }
    let periods = ["2025", "2026", "2027", "2028"];
    return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("small", null, "N " + orderInArray), " "), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookD), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookK), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.sum), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, record?.type)))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStatePeriod"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "period",
      size: "sm",
      required: true
    }, ["...", ...periods].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item,
        id: item
      }, item);
    }))))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      type: "submit"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      onClick: () => closeSelect()
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
  }
  function EditRecordComment() {
    const applicationSelector = React.useContext(ApplicationContext);
    const applicationDispatch = React.useContext(ApplicationDispatchContext);
    const projectSelector = React.useContext(ProjectContext);
    const projectDispatch = React.useContext(ProjectDispatchContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;
    function closeSelect() {
      applicationDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            showModal: false,
            modal: {}
          }
        }
      });
    }
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
        }
      });
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            triggerRerender: Math.random(),
            triggerSave: Math.random(),
            saveOptions: {
              type: "content"
            }
          }
        }
      });
      closeSelect();
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("small", null, "N " + orderInArray), " "), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookD), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookK), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.sum), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, record?.type)))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateComment"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "textarea",
      name: "comment",
      size: "sm",
      required: true
    }, record?.comment)))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      type: "submit"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      onClick: () => closeSelect()
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
  }
  function EditRecordType() {
    const [analyticsDimension, setAnalyticsDimension] = React.useState(null);
    const applicationDispatch = React.useContext(ApplicationDispatchContext);
    const projectDispatch = React.useContext(ProjectDispatchContext);
    const applicationSelector = React.useContext(ApplicationContext);
    const projectSelector = React.useContext(ProjectContext);
    let record = projectSelector.content.find(item => item.id === applicationSelector?.modal?.item?.id);
    let orderInArray = projectSelector.content.findIndex(item => item.id === applicationSelector?.modal?.item?.id) + 1;
    // console.log(projectSelector.content);
    // console.log( applicationSelector?.modal?.item?.id)

    function closeSelect() {
      applicationDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            showModal: false,
            modal: {}
          }
        }
      });
    }
    let analyticsArray = [{
      id: "capitalIncrease",
      name: "Увеличение чистых активов"
    }, {
      id: "capitalDecrease",
      name: "Уменьшение чистых активов"
    }, {
      id: "cashIncrease",
      name: "Денежный приток"
    }, {
      id: "cashDecrease",
      name: "Денежный отток"
    }, {
      id: "costsCalculation",
      name: "Калькулирование себестоимости"
    }];
    let analyticsItems = {
      capitalIncrease: [{
        id: 1,
        name: "Выручка"
      }, {
        id: 2,
        name: "Прочие доход"
      }, {
        id: 3,
        name: "Дивиденды к получению"
      }, {
        id: 4,
        name: "Проценты к получению"
      }],
      capitalDecrease: [{
        id: 1,
        name: "Себестоимость продукции, работ, услуг"
      }, {
        id: 2,
        name: "Коммерческие расходы"
      }, {
        id: 3,
        name: "Управленческие расходы"
      }, {
        id: 4,
        name: "Проценты к уплате"
      }, {
        id: 5,
        name: "Прочие расходы"
      }, {
        id: 6,
        name: "Налог на прибыль"
      }, {
        id: 7,
        name: "Дивиденды к начислению"
      }],
      cashIncrease: [{
        id: 1,
        name: "Поступления по текущей деятельности"
      }, {
        id: 2,
        name: "Поступления по инвестиционной деятельности"
      }, {
        id: 3,
        name: "Поступления по финансовой деятельности"
      }],
      cashDecrease: [{
        id: 1,
        name: "Платежи по текущей деятельности"
      }, {
        id: 2,
        name: "Платежи по инвестиционной деятельности"
      }, {
        id: 3,
        name: "Платежи по финансовой деятельности"
      }],
      costsCalculation: [{
        id: 1,
        name: "Материальные затраты"
      }, {
        id: 2,
        name: "Оплата труда"
      }, {
        id: 3,
        name: "Отчисления на социальные нужды"
      }, {
        id: 4,
        name: "Амортизация"
      }, {
        id: 5,
        name: "Отчисления на социальные нужды"
      }, {
        id: 6,
        name: "Прочие затраты"
      }]
    };
    function handleChange(e) {
      let {
        name,
        value
      } = e.target;
      //   console.log(e.target);
      if (name === "analyticsArray") {
        setAnalyticsDimension(analyticsArray.find(item => item.name === value).id);
      }
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
      // basicfirebasecrudauthservices.timeout(275).then(() => {
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
        }
      });
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            triggerRerender: Math.random(),
            triggerSave: Math.random(),
            saveOptions: {
              type: "content"
            }
          }
        }
      });
      closeSelect();
    }
    function deleteType() {
      projectDispatch({
        type: "UPDATE_ITEM_PROPERTY_IN_ARRAY",
        payload: {
          arrayName: "content",
          id: record.id,
          objKey: "type",
          objValue: null
        }
      });
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            triggerRerender: Math.random(),
            triggerSave: Math.random(),
            saveOptions: {
              type: "content"
            }
          }
        }
      });
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("small", null, "N " + orderInArray), " "), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookD), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.bookK), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, record?.sum), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, record?.type)), /*#__PURE__*/React.createElement("div", null, !!record?.type ? /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-danger",
      size: "sm",
      onClick: deleteType
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-trash",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
    }))) : ""))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("small", null, record?.comment))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateAnalyticsArray"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0420\u0430\u0437\u0440\u0435\u0437 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "analyticsArray",
      onChange: handleChange,
      size: "sm",
      required: true
    }, ["...", ...analyticsArray].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item.id,
        id: item.id
      }, item.name);
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, !!analyticsDimension && /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateAnalyticsItem"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "analyticsItem",
      onChange: handleChange,
      size: "sm",
      required: true
    }, ["...", ...analyticsItems[analyticsDimension]].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item.id,
        id: item.id
      }, item.name);
    }))))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      type: "submit"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      onClick: () => closeSelect()
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
  }
  function ProjectOptionsNavigation() {
    const applicationSelector = React.useContext(ApplicationContext);
    const projectSelector = React.useContext(ProjectContext);
    // const projectDispatch = useContext(ProjectDispatchContext);
    const [editorMode, modeDispatch] = React.useReducer(caseReducer, {
      openLedger: false,
      openSpreadsheet: false
    });
    React.useEffect(() => {
      // console.log(applicationSelector);
    }, [projectSelector?.triggerRerender, applicationSelector?.modal, applicationSelector?.modal?.component]);
    if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordType") {
      return /*#__PURE__*/React.createElement(EditRecordType, null);
    }
    if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordPeriod") {
      return /*#__PURE__*/React.createElement(EditRecordPeriod, null);
    }
    if (applicationSelector?.showModal && applicationSelector?.modal?.component === "EditRecordComment") {
      return /*#__PURE__*/React.createElement(EditRecordComment, null);
    }
    function setOpenLedger() {
      modeDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            openLedger: !editorMode.openLedger,
            openSpreadsheet: false
            //  triggerRerender: Math.random()
          }
        }
      });
      console.log("Set Open Ledger");
    }
    function setOpenSpreadsheet() {
      modeDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            openLedger: false,
            openSpreadsheet: !editorMode.openSpreadsheet
            //    triggerRerender: Math.random()
          }
        }
      });
      console.log("setOpenSpreadsheet");
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " ", /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      onClick: setOpenLedger
      //     aria-controls="example-collapse-text"
      //     aria-expanded={openLedger}
      ,
      variant: "outline-secondary",
      className: "mb-3"
    }, editorMode.openLedger ? "Скрыть Журнал" : "Показать журнал")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " ", /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      onClick: setOpenSpreadsheet
      //    aria-controls="example-collapse-text"
      //    aria-expanded={openLedger}
      ,
      variant: "outline-success",
      className: "mb-3"
    }, editorMode.openSpreadsheet ? "Скрыть Расчет" : "Показать расчет"))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, editorMode.openLedger && /*#__PURE__*/React.createElement(Ledger, null), editorMode.openSpreadsheet && /*#__PURE__*/React.createElement(SpreadsheetLayout, null)));
  }
  function Ledger() {
    const dispatch = React.useContext(ProjectDispatchContext);
    const applicationDispatch = React.useContext(ApplicationDispatchContext);
    const projectSelector = React.useContext(ProjectContext);
    let openLedger = true;

    //  let { openLedger, triggerRerender } = projectSelector;

    //   useEffect(() => { }, [triggerRerender, openLedger])

    //    if (!openLedger) return null

    function deleteRecord(e) {
      console.log(e.target.id);
      dispatch({
        type: "DELETE_FROM_ARRAY_BY_ID",
        payload: {
          arrayName: "content",
          id: e.target.id
        }
      });
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
            }
          }
        });
      }
    }
    function editPeriod(e) {
      if (e.target.id.length > 5) {
        applicationDispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              showModal: true,
              modal: {
                title: "Редактор Периода операции",
                component: "EditRecordPeriod",
                item: {
                  id: e.target.id
                }
              }
            }
          }
        });
      }
    }
    function editComment(e) {
      if (e.target.id.length > 5) {
        console.log(e.target.id);
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
            }
          }
        });
      }
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Collapse, {
      in: openLedger
    }, /*#__PURE__*/React.createElement("div", {
      id: "example-collapse-text"
    }, Array.isArray(projectSelector.content) && projectSelector.content.map((row, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "border-bottom m-1"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, "N " + (index + 1))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, row?.period))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, row.d)), /*#__PURE__*/React.createElement("div", null, row.bookD)), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, row.k)), /*#__PURE__*/React.createElement("div", null, row.bookK)), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, row.sum), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, row?.type)))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("small", {
      class: "text-muted"
    }, row?.comment))), /*#__PURE__*/React.createElement(reactBootstrap.Row, {
      className: "p-1"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      id: row.id,
      variant: "outline-primary",
      size: "sm",
      onClick: editPeriod
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-pencil-square",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
    })), " ", " period")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      id: row.id,
      variant: "outline-primary",
      size: "sm",
      onClick: editComment
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-pencil-square",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
    })), " ", " comment")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      id: row.id,
      variant: "outline-danger",
      size: "sm",
      onClick: deleteRecord
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-trash",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
    })), " record")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      id: row.id,
      variant: "outline-primary",
      size: "sm",
      onClick: editType
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-pencil-square",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
    })), " ", " type"))))))));
  }
  function IndicatorAnalalytics({
    indicator
  }) {
    const projectSelector = React.useContext(ProjectContext);
    let contoArray = balanceContoArray.find(item => item.id === indicator).children;
    let records = !!projectSelector?.content ? projectSelector?.content : [];
    console.log(records);
    function processRecords(conto) {
      let DValues = 0;
      let KValues = 0;
      Array.isArray(projectSelector.content) && projectSelector.content.map(item => {
        if (item.d === indicator && item.bookD === conto) {
          DValues = DValues + parseFloat(item.sum);
        }
        if (item.k === indicator && item.bookK === conto) {
          KValues = KValues + parseFloat(item.sum);
        }
        return null;
      });
      if (balanceContoArray.find(item => item.id === indicator)?.disposition === "asset"
      // indicator === "Основные средства" || indicator === "Материалы" ||
      // indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
      // indicator === "Дебиторская задолженность" || indicator === "Деньги"
      ) {
        return DValues - KValues;
      } else {
        return KValues - DValues;
      }
    }
    let notnullconto = [];
    contoArray.map(conto => {
      if (processRecords(conto) !== 0) {
        notnullconto.push(conto);
      }
    });
    return /*#__PURE__*/React.createElement("div", null, notnullconto.map(conto => {
      return /*#__PURE__*/React.createElement("div", {
        key: conto,
        className: "lead text-secondary"
      }, conto + " " + processRecords(conto));
    }));

    // return <div>Ha Ha</div>
  }
  function SimpleAccounting() {
    const applicationSelector = React.useContext(ApplicationContext);
    const projectDispatch = React.useContext(ProjectDispatchContext);
    const projectSelector = React.useContext(ProjectContext);
    const [d, setD] = React.useState(null);
    const [k, setK] = React.useState(null);
    if (applicationSelector.loading) return null;

    //  console.log(projectSelector);

    // useEffect(()=>{
    //     console.log(project.content)
    // },[project.triggerRerender])

    function handleChange(e) {
      let {
        name,
        value
      } = e.target;
      //   console.log(name, value);
      if (name === "d") {
        setD(value);
      }
      if (name === "k") {
        setK(value);
      }
    }
    async function handleSubmit(e) {
      e.preventDefault();
      const currentTarget = e.currentTarget;
      const formdata = new FormData(currentTarget);
      let {
        d,
        k,
        sum,
        bookD,
        bookK
      } = Object.fromEntries(formdata);
      //  console.log(d, k, sum, bookD, bookK);
      handleAdd({
        d,
        k,
        sum,
        bookD,
        bookK
      });
      timeout(275).then(() => {
        setD(null);
        setK(null);
        currentTarget.reset();
      });
    }

    // const handleAdd = useCallback(({ d, k, sum }) => {
    function handleAdd({
      d,
      k,
      sum,
      bookD,
      bookK
    }) {
      //  let records = project.content;
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            content: [...projectSelector.content, {
              d,
              k,
              sum,
              bookD,
              bookK,
              orderBy: projectSelector.content.length
            }],
            triggerRerender: Math.random(),
            triggerSave: Math.random(),
            saveOptions: {
              type: "content"
            }
          }
        }
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

    function processRecords(indicator) {
      let DValues = 0;
      let KValues = 0;
      Array.isArray(projectSelector.content) && projectSelector.content.map(item => {
        if (item.d === indicator) {
          DValues = DValues + parseFloat(item.sum);
        }
        if (item.k === indicator) {
          KValues = KValues + parseFloat(item.sum);
        }
        return null;
      });
      if (balanceContoArray.find(item => item.id === indicator)?.disposition === "asset"
      // indicator === "Основные средства" || indicator === "Материалы" ||
      // indicator === "Незавершенное производство" || indicator === "Готовая продукция" ||
      // indicator === "Дебиторская задолженность" || indicator === "Деньги"
      ) {
        return DValues - KValues;
      } else {
        return KValues - DValues;
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      key: projectSelector?.triggerRerender
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 ", processRecords("Основные средства"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Основные средства"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B ", processRecords("Уставный капитал"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Уставный капитал"
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " "), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C", " ", processRecords("Нераспределенная прибыль"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Нераспределенная прибыль"
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B ", processRecords("Материалы"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Материалы"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " ")), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E", " ", processRecords("Незавершенное производство"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Незавершенное производство"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442", " ", processRecords("Долгосрочный банковский кредит"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Долгосрочный банковский кредит"
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u0413\u043E\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F ", processRecords("Готовая продукция"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Готовая продукция"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " ")), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u0414\u0435\u0431\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C", " ", processRecords("Дебиторская задолженность"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Дебиторская задолженность"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442", " ", processRecords("Краткосрочный банковский кредит"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Краткосрочный банковский кредит"
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u0414\u0435\u043D\u044C\u0433\u0438 ", processRecords("Деньги"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Деньги"
    }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("div", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C", " ", processRecords("Кредиторская задолженность"), /*#__PURE__*/React.createElement(IndicatorAnalalytics, {
      indicator: "Кредиторская задолженность"
    }))))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(reactBootstrap.Container, null, Array.isArray(projectSelector.tasks) && projectSelector.tasks.map(task => {
      return /*#__PURE__*/React.createElement("div", {
        key: task.id,
        className: "text-muted",
        dangerouslySetInnerHTML: {
          __html: task.text
        }
      });
    })), /*#__PURE__*/React.createElement(reactBootstrap.Container, null, !!projectSelector?.hint && /*#__PURE__*/React.createElement("div", {
      className: "text-muted",
      dangerouslySetInnerHTML: {
        __html: projectSelector.hint
      }
    })), /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateD"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0414"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "d",
      onChange: handleChange,
      required: true
    }, ["...", ...balanceContoArray.map(item => item.id)].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item
      }, item);
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateK"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u041A"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "k",
      onChange: handleChange,
      required: true
    }, ["...", ...balanceContoArray.map(item => item.id)].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item
      }, item);
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateSum"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0421\u0443\u043C\u043C\u0430"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "input",
      name: "sum",
      required: true
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, " ", !!d && /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateD"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0414"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "bookD",
      onChange: handleChange,
      size: "sm",
      required: true
    }, ["...", ...balanceContoArray.find(item => item.id === d).children].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item
      }, item);
    })))), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, !!k && /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      controlId: "formStateK"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u041A"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      as: "select",
      name: "bookK",
      onChange: handleChange,
      size: "sm",
      required: true
    }, ["...", ...balanceContoArray.find(item => item.id === k).children].map(item => {
      return /*#__PURE__*/React.createElement("option", {
        key: item
      }, item);
    }))))), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary my-3",
      type: "submit"
    }, "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")));
  }
  function SaveProject() {
    const projectSelector = React.useContext(ProjectContext);
    const spreadsheetSelector = React.useContext(SpreadsheetContext);
    const applicationSelector = React.useContext(ApplicationContext);
    let applicationDispatch = React.useContext(ApplicationDispatchContext);
    let {
      id,
      content,
      quizString,
      triggerSave,
      theme,
      title,
      saveOptions = false,
      mediaItems = [],
      tasks = []
    } = projectSelector;
    let {
      userEmail,
      email,
      user,
      avatarUrl
    } = applicationSelector;
    let {
      spreadsheetContent
    } = spreadsheetSelector;
    React.useEffect(() => {
      let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
      let defaultPeriod = new Intl.DateTimeFormat("ru", {
        year: "numeric"
      }).format(new Date());
      console.log(defaultPeriod);
      async function saveContent() {
        if (saveOptions?.type === "content" && Array.isArray(content) && content.length > 0) {
          content = content.map(item => {
            if (!item?.period) {
              return {
                ...item,
                period: defaultPeriod
              };
            }
            return item;
          });
          let updates = {};
          let htmlPost = {
            id: id + userEmail + "media",
            content: transactionsListFull(content),
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
              minute: "numeric"
            }).format(new Date()) //Date().toJSON()
          };
          updates["currentDay/" + currentDay + "/posts/" + htmlPost.id] = htmlPost;
          updates["/usersCraft/" + userEmail + "/posts/" + htmlPost.id] = htmlPost;
          updates["/usersCraft/" + userEmail + "/posts/" + id + "/content"] = content;
          updates["/usersTemplates/projects/" + userEmail + "/" + id + "/content"] = content;
          console.log(updates);
          return await updateFirebaseNode(updates);
        }
        let filteredMediaItemsWithoutComment = mediaItems.filter(item => item?.comment !== "Комментарий");
        let filteredMediaItemsWithoutCalculations = filteredMediaItemsWithoutComment.filter(item => item?.comment !== "Расчет");
        console.log(filteredMediaItemsWithoutCalculations);
        let comment = "";
        tasks.map(task => {
          comment += task.text;
        });
        let mediaItemsForSaving = [{
          mediaType: "html",
          comment: "Задание",
          content: comment
        }, {
          mediaType: "spreadsheet",
          comment: "Расчет",
          content: spreadsheetContent
        }, ...filteredMediaItemsWithoutCalculations];

        //   if (saveOptions?.type === "spreadsheet") {
        //     let updates = {};
        //     updates["/usersCraft/" + userEmail + "/posts/" + id + "/mediaItems"] =
        //       mediaItemsForSaving;
        //     updates[
        //       "/usersTemplates/projects/" + userEmail + "/" + id + "/mediaItems"
        //     ] = mediaItemsForSaving;
        //     // updates["currentDay/" + currentDay + "/posts/" + id + userEmail + "media/content"] = transactionsListFull(content);
        //     // updates["/usersCraft/" + userEmail + "/posts/" + id + userEmail + "media/content"] = transactionsListFull(content);
        //     console.log(updates);
        //     return await updateFirebaseNode(updates);
        //   }

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
            comment: transactionsListFull(content),
            email: email,
            user: user,
            avatarUrl: avatarUrl,
            date: new Intl.DateTimeFormat("ru", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric"
            }).format(new Date()) //Date().toJSON()
          };
          let htmlPost = {
            id: id + userEmail + "media",
            content: transactionsListFull(content),
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
              minute: "numeric"
            }).format(new Date()) //Date().toJSON()
          };
          let updates = {};
          updates["/usersCraft/" + userEmail + "/posts/" + id] = postObject;
          updates["/usersTemplates/projects/" + userEmail + "/" + id] = postObject;
          updates["currentDay/" + currentDay + "/posts/" + htmlPost.id] = htmlPost;
          updates["/usersCraft/" + userEmail + "/posts/" + htmlPost.id] = htmlPost;
          console.log(updates);
          return await updateFirebaseNode(updates);
        }
        return null;
      }
      saveContent().then(() => {
        console.log("Saved");
        //  console.log(projectSelector);
        //  console.log(applicationSelector);
      });
    }, [triggerSave]);

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
          }
        }
      });
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Navbar, {
      bg: "light"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Navbar.Brand, {
      href: "#home"
    }, /*#__PURE__*/React.createElement("img", {
      alt: "avatarUrl",
      src: applicationSelector.avatarUrl,
      width: "30",
      height: "30",
      className: "d-inline-block align-top",
      style: {
        borderRadius: "50%",
        filter: "grayscale(100%)",
        objectFit: "cover"
      },
      onClick: () => selectAvatar()
    }), /*#__PURE__*/React.createElement("small", {
      className: "mx-3"
    }, projectSelector.title + "   (" + content.length + ")"))), /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      inline: true
    }, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "outline-secondary",
      size: "sm",
      onClick: () => selectAvatar()
    }, /*#__PURE__*/React.createElement("small", null, applicationSelector.user))));
  }
  function GlobalModal() {
    const applicationSelector = React.useContext(ApplicationContext);
    let applicationDispatch = React.useContext(ApplicationDispatchContext);
    function handleClose() {
      console.log("Close");
      applicationDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            showModal: false,
            modal: {}
          }
        }
      });
    }
    return /*#__PURE__*/React.createElement(reactBootstrap.Modal, {
      show: applicationSelector?.showModal,
      onHide: handleClose,
      size: "lg"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React.createElement(reactBootstrap.Modal.Title, null, applicationSelector?.modal?.title)), /*#__PURE__*/React.createElement(reactBootstrap.Modal.Body, null, applicationSelector?.modal?.component === "LoginLogout" && /*#__PURE__*/React.createElement(LoginLogout, null), applicationSelector?.modal?.component === "EditRecordType" && /*#__PURE__*/React.createElement(EditRecordType, null), applicationSelector?.modal?.component === "EditRecordComment" && /*#__PURE__*/React.createElement(EditRecordComment, null), applicationSelector?.modal?.component === "EditRecordPeriod" && /*#__PURE__*/React.createElement(EditRecordPeriod, null)));
  }
  function caseReducer(state = {}, action) {
    // console.log(action);
    //https://immerjs.github.io/immer/update-patterns
    switch (action.type) {
      case "SET_STORE_OBJECT":
        return produce(state, draft => {
          console.log(action.payload);
          draft[action.payload.key] = action.payload.value;
        });
      case "SEED_STATE":
        {
          return produce(state, draft => {
            Object.keys(action.payload.objects).map(key => {
              draft[key] = action.payload.objects[key];
            });
          });
        }
      case "DELETE_FROM_ARRAY_BY_INDEX":
        {
          return produce(state, draft => {
            draft[action.payload.arrayName].splice(action.payload.itemIndex, 1);
            draft.triggerRerender = action.payload.itemIndex;
          });
        }
      case "DELETE_FROM_ARRAY_BY_ID":
        {
          return produce(state, draft => {
            const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
              draft[action.payload.arrayName].splice(index, 1);
              //   draft.triggerRerender = action.payload.id;
            }
          });
        }
      case "UPDATE_ITEM_IN_ARRAY":
        return produce(state, draft => {
          console.log(action.payload);
          const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.item.id);
          if (index !== -1) draft[action.payload.arrayName][index] = action.payload.item;
        });
      case "UPDATE_ITEM_PROPERTY_IN_ARRAY":
        return produce(state, draft => {
          console.log(action.payload);
          const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
          if (index !== -1) {
            draft.triggerRerender = action.payload.id;
            draft[action.payload.arrayName][index][action.payload.objKey] = action.payload.objValue;
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
  };
  let initialprotoData = createProtoArray({}, 6, 6);
  let spreadsheetInitialState = {
    expandView: true,
    spreadsheetContent: {},
    protoData: initialprotoData,
    data: initialprotoData,
    formulaValue: "",
    //createProtoArray(emptyProtoDataObject)[0][0],
    formulaRowIndex: 0,
    formulaColumnIndex: 0,
    spreadsheetTitle: "",
    countLetter: 0,
    title: "Задача"
  };
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
    saveOptions: {},
    openLedger: false,
    openSpreadsheet: false
  };
  function App() {
    const [state, applicationDispatch] = React.useReducer(caseReducer, initialState);
    const [projectState, projectDispatch] = React.useReducer(caseReducer, projectInitialState);
    const [spreadsheetState, spreadsheetDispatch] = React.useReducer(caseReducer, spreadsheetInitialState);
    React.useEffect(() => {
      async function getUser() {
        let localStorageData = loadState("econolabs");
        const paramsString = window.location.search;
        const searchParams = new URLSearchParams(paramsString);
        console.log(searchParams.get("openquizid"));
        let fetchid = !!searchParams.get("openquizid") ? searchParams.get("openquizid") : openquizid;

        // if (!!searchParams.get("openquizid")) {
        //     openquizid = searchParams.get("openquizid")
        // }

        console.log(openquizid);
        let onlineopenquiz = await getFirebaseNode({
          url: "openquiz/" + fetchid,
          type: "object"
        });

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
        // let res = basicfirebasecrudauthservices.updateFirebaseNode(updates);
        // console.log(res);

        let openquiz = !!onlineopenquiz && Object.keys(onlineopenquiz).length > 0 ? onlineopenquiz : {
          ...defaultProjectData
        };
        if (!!localStorageData?.application?.email) {
          let userEmail = localStorageData?.application?.email.replace(/[^a-zA-Z0-9]/g, "_");
          let openavatar = await getFirebaseNode({
            url: "openavatars/" + userEmail,
            type: "object"
          });
          let userprojectpostcontent = await getFirebaseNode({
            url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/content",
            type: "array"
          });
          userprojectpostcontent = userprojectpostcontent.map(item => {
            if (!item?.id) {
              return {
                ...item,
                id: getFirebaseNodeKey("/usersCraft/" + userEmail + "/posts/" + openquizid + "/content")
              };
            }
            return item;
          });
          let userprojectspreadsheet = await getFirebaseNode({
            url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/mediaItems/1/content",
            type: "object"
          });
          userprojectspreadsheet = !!userprojectspreadsheet ? userprojectspreadsheet : {};
          let posts = await getFirebaseNode({
            url: "/usersCraft/" + userEmail + "/posts/",
            type: "array"
          });
          console.log(posts.filter(item => item.type === "accountingwithprofitscash"));
          return {
            email: localStorageData?.application?.email,
            user: localStorageData?.application?.user,
            avatarUrl: !!openavatar?.avatarUrl ? openavatar.avatarUrl : !!localStorageData?.application?.avatarUrl ? localStorageData.application.avatarUrl : "../freelancer.jpg",
            userEmail: userEmail,
            openquiz: openquiz,
            userprojectpostcontent: userprojectpostcontent,
            userprojectspreadsheet: userprojectspreadsheet
          };
        } else {
          let identity = generateUser();
          saveState({
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
            userprojectpostcontent: [],
            userprojectspreadsheet: userprojectspreadsheet
          };
        }
      }
      getUser().then(res => {
        let {
          userEmail,
          email,
          user,
          avatarUrl
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
            }
          }
        });
        projectDispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              ...projectInitialState,
              ...res.openquiz,
              content: res.userprojectpostcontent,
              quizString: res.userprojectspreadsheet
              //   triggerRerender: "loaded"
            }
          }
        });
        let userprojectspreadsheetArray = createProtoArray(res.userprojectspreadsheet, 6, 6);
        spreadsheetDispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              spreadsheetContent: res.userprojectspreadsheet,
              protoData: userprojectspreadsheetArray,
              data: createNewDraft(userprojectspreadsheetArray),
              triggerRerender: "loaded"
            }
          }
        });
      });
    }, []);
    if (state.loading) {
      return null;
    }
    return /*#__PURE__*/React.createElement(ApplicationContext.Provider, {
      value: state
    }, /*#__PURE__*/React.createElement(ApplicationDispatchContext.Provider, {
      value: applicationDispatch
    }, /*#__PURE__*/React.createElement(SpreadsheetContext.Provider, {
      value: spreadsheetState
    }, /*#__PURE__*/React.createElement(SpreadsheetDispatchContext.Provider, {
      value: spreadsheetDispatch
    }, /*#__PURE__*/React.createElement(ProjectContext.Provider, {
      value: projectState
    }, /*#__PURE__*/React.createElement(ProjectDispatchContext.Provider, {
      value: projectDispatch
    }, /*#__PURE__*/React.createElement(GlobalModal, null), /*#__PURE__*/React.createElement(SaveProject, null), /*#__PURE__*/React.createElement(SimpleAccounting, {
      avatarUrl: state.avatarUrl,
      user: state.user,
      setTitle: "\u0422\u0435\u0441\u0442\u044B \u043F\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F\u043C"
    }), /*#__PURE__*/React.createElement(ProjectOptionsNavigation, null)))))));
  }
  function CompactActiveCells() {
    let spreadsheetSelector = React.useContext(SpreadsheetContext);
    let letter = alphabet[spreadsheetSelector.countLetter];
    let arrayOfRows = Array.from({
      length: spreadsheetSelector.protoData.length
    }, (_, i) => i + 1);
    //  console.log(arrayOfRows);
    return /*#__PURE__*/React.createElement("div", null, arrayOfRows.map((item, index) => {
      return /*#__PURE__*/React.createElement(CompactActiveCell, {
        cellAddress: letter + item,
        rowIndex: index
      });
    }));
  }
  function CompactActiveCell({
    rowIndex = 0
  }) {
    let projectDispatch = React.useContext(ProjectDispatchContext);
    let spreadsheetDispatch = React.useContext(SpreadsheetDispatchContext);
    let spreadsheetSelector = React.useContext(SpreadsheetContext);
    const protoDataValue = spreadsheetSelector.protoData[rowIndex][spreadsheetSelector.countLetter];
    const [value, setValue] = React.useState(protoDataValue);
    const debouncedValue = useDebounce(value, 2000);
    React.useEffect(() => {
      let valueChecked = isNaN(debouncedValue) ? !!debouncedValue ? debouncedValue.trim() : "" : +debouncedValue;
      let newSpreadsheetContent = produce(spreadsheetSelector.spreadsheetContent, draft => {
        //    console.log(action.payload);
        draft[cellAddress] = valueChecked;
      });
      let newProtoData = createProtoArray(newSpreadsheetContent, 6, 6);
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
      });
      projectDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            quizString: newSpreadsheetContent,
            triggerSave: Math.random(),
            saveOptions: {
              type: "spreadsheet"
            }
          }
        }
      });
    }, [debouncedValue]);
    const calculatedDataValue = spreadsheetSelector.data[rowIndex][spreadsheetSelector.countLetter];
    console.log(calculatedDataValue);
    let cellAddress = alphabet[spreadsheetSelector.countLetter] + (rowIndex + 1);

    // function setValue(value) {
    //     console.log(value);
    // }

    let dataValue = isNumeric(calculatedDataValue) ? calculatedDataValue : " ";
    return /*#__PURE__*/React.createElement(reactBootstrap.InputGroup, {
      className: "my-1"
    }, /*#__PURE__*/React.createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React.createElement(reactBootstrap.InputGroup.Text, {
      id: cellAddress
    }, /*#__PURE__*/React.createElement("small", {
      style: {
        minWidth: "3rem"
      }
    }, cellAddress + " " + dataValue))), /*#__PURE__*/React.createElement(reactBootstrap.FormControl, {
      value: value
      //      placeholder={value}
      ,
      "aria-label": cellAddress,
      "aria-describedby": cellAddress,
      onChange: e => setValue(e.target.value)
    }));
  }
  function CompactSpreadsheetLayout() {
    let spreadsheetDispatch = React.useContext(SpreadsheetDispatchContext);
    let spreadsheetSelector = React.useContext(SpreadsheetContext);
    let numberOfRows = spreadsheetSelector.protoData.length;
    function addRowUnder() {
      let newProtoData = createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6);
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
      });

      //  console.log(createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6 ));
      // spreadsheetDispatch({
      //     type: "SEED_STATE",
      //     payload: {
      //         objects: {
      //             protoData: basicfirebasecrudauthservices.createProtoArray(spreadsheetSelector.spreadsheetContent, numberOfRows + 1, 6 ),
      //             triggerRerender: Math.random()
      //         },
      //     },
      // });
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CompactActiveCells, null), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      onClick: addRowUnder,
      variant: "outline-secondary"
    }, "+ " + (numberOfRows + 1) + " ячейку"));
  }
  function SpreadsheetLayout() {
    const projectSelector = React.useContext(ProjectContext);
    let {
      triggerRerender
    } = projectSelector;
    React.useEffect(() => {}, [triggerRerender]);
    //  if (!openSpreadsheet) return null

    return /*#__PURE__*/React.createElement("div", {
      className: "container excel"
    }, /*#__PURE__*/React.createElement(CompactSpreadsheetLayout, null));
  }
  const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => clearTimeout(timeout);
    }, [value, delay]);
    return debouncedValue;
  };
  const root = client.createRoot(document.getElementById("simpleaccounting"));
  root.render(/*#__PURE__*/React.createElement(App, null));

})(React, ReactDOM, ReactBootstrap);
