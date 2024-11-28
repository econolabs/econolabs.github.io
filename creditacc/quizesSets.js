let quizesSets = [
       {
        id: "bankcaculations1",
        header: "Кейс Прогнозный баланс банка",
        title: "Сформирован уставный капитал",
        theme: "Прогнозный баланс банка",
        type: "quizwithrandomnumber",
        text: `
        <div>Сформирован уставный капитал банка {=400+{var1-10}*10}</div>
         <div>Найти сумму активов</div>
        `,
       answer: "400+{var1-10}*10",
       hint: "Самая первая операция по рождению баланса"
    },

    {
        id: "bankcaculations1",
        header: "Кейс Прогнозный баланс банка",
        title: "Сформирован уставный капитал",
        theme: "Прогнозный баланс банка",
        type: "quizwithrandomnumber",
        text: `
        <div>Сформирован уставный капитал банка {=400+{var1-10}*10}</div>
        <div>Учредитель внес основные средства на сумму {={var1-10}*5}</div>
        <div>Найти сумму раздела Прочие активы</div>
        `,
       answer: "400+{var1-10}*10-{var1-10}*5",
       hint: "Это оставшаяся кредиторская задолженность!"
    },


    // {
    //     id: "bankaccounting1",
    //     type: "accounting",
    //     header: "Тест",
    //     title: "Проводки",
    //     theme: "Типовые операции по учету в кредитных организациях",
    //     text: "Перечислены средств клиента с расчетного счета в другой банк через ЦБ РФ",
    //     choices: [
    //         "102",
    //         "301",
    //         "40702",
    //         "452",
    //         "603"
    //     ],
    //     answers: ["40702301"],
    //     hint: `
    //     <div class="row m-1">
    //         <div class="col">
    //             <div class="alert alert-secondary" role="alert">
    //                 <a target="_blank" href="https://www.consultant.ru/document/cons_doc_LAW_436264/cd9dff97697f94ed33851013a6bd0c346fdf6faa/#dst106225">40702</a>
    //             </div>
    //         </div>
    //          <div class="col">
    //             <div class="alert alert-secondary" role="alert">
    //                 <a target="_blank" href="https://www.consultant.ru/document/cons_doc_LAW_436264/0dd6470ab5f728a5c74438a60d9a5a458c4c71be/#dst105650">301</a>
    //             </div>
    //         </div>              
    //     </div>`
    // },

    // {
    //     id: "bankaccounting2",
    //     type: "accounting",
    //     header: "Тест",
    //     title: "Проводки",
    //     theme: "Типовые операции по учету в кредитных организациях",
    //     text: "Выдан кредит негосударственной коммерческой организации",
    //     choices: [
    //         "102",
    //         "301",
    //         "40702",
    //         "452",
    //         "603"
    //     ],
    //     answers: ["45240702"],
    //     hint: `
    //     <div class="row m-1">
           
    //          <div class="col">
    //             <div class="alert alert-secondary" role="alert">
    //                 <a target="_blank" href="https://www.consultant.ru/document/cons_doc_LAW_436264/ae12320584a00fd0faad62ec09cb21b953554df5/#dst106500">452</a>
    //             </div>
    //         </div>  
            
    //          <div class="col">
    //             <div class="alert alert-secondary" role="alert">
    //                 <a target="_blank" href="https://www.consultant.ru/document/cons_doc_LAW_436264/cd9dff97697f94ed33851013a6bd0c346fdf6faa/#dst106225">407</a>
    //             </div>
    //         </div>

    //     </div>`
    // },

    // {
    //     id: "bankaccounting3",
    //     type: "accounting",
    //     header: "Тест",
    //     title: "Проводки",
    //     theme: "Типовые операции по учету в кредитных организациях",
    //     text: "Начисление процентов по кредиту",
    //     choices: [
    //         "102",
    //         "301",
    //         "407",
    //         "452",
    //         "47427",
    //         "603",
    //         "70601"
    //     ],
    //     answers: ["4742770601"],
    //     hint: `
    //      <p><a class="link-opacity-100" target="_blank" target="_blank"
    //         href="https://normativ.kontur.ru/document?moduleId=1&documentId=466405">
    //         Удобный формат! <br>
    //         Положение Банка России от 24.11.2022 N 809-П (ред. от 10.01.2024) "О Плане счетов бухгалтерского
    //         учета для кредитных организаций и порядке его применения"
    //     </a>
    //     </p>
    //      <p><a class="link-opacity-100" target="_blank" target="_blank"
    //         href="https://disk.yandex.ru/i/N0H9hQpoSCRZoA">
    //         Пособие
    //     </a>
    //    `
    // },

    {
        id: "bankaccounting3",
        type: "accounting",
        header: "Тест",
        title: "Проводки",
        theme: "Типовые операции по учету в кредитных организациях",
        text: "Оплата процентов негосударственной коммерческой организацией",
        choices: [
            "102",
            "301",
            "40702",
            "452",
            "47427",
            "603",
            "70601"
        ],
        answers: ["4742770601"],
        hint: `
         <p><a class="link-opacity-100" target="_blank" target="_blank"
            href="https://normativ.kontur.ru/document?moduleId=1&documentId=466405">
            Удобный формат! <br>
            Положение Банка России от 24.11.2022 N 809-П (ред. от 10.01.2024) "О Плане счетов бухгалтерского
            учета для кредитных организаций и порядке его применения"
        </a>
        </p>
         <p><a class="link-opacity-100" target="_blank" target="_blank"
            href="https://disk.yandex.ru/i/N0H9hQpoSCRZoA">
            Пособие
        </a>
        `
    }


]

window.quizesSets = quizesSets;