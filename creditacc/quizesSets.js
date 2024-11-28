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
        id: "bankaccounting1",
        type: "accounting",
        header: "Тест",
        title: "Проводки Сформирован уставный капитал",
        theme: "Типовые операции по учету в кредитных организациях",
        text: "Сформирован уставный капитал",
        choices: [
            "20202",
            "20209",
            "10207",
            "30102",
            "40702",
            "452",
            "47427",
            "47411",
            "42303",
            "603",
            "70601",
            "70606",
            "60401",
            "60414"
        ],
        answers: ["60310207"],
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
       hint: "Это оставшаяся дебиторская задолженность!"
    },

    {
        id: "bankaccounting2",
        type: "accounting",
        header: "Тест",
        title: "Проводки Учредитель внес основные средства",
        theme: "Типовые операции по учету в кредитных организациях",
        text: "Учредитель внес основные средства",
        choices: [
            "20202",
            "20209",
            "10207",
            "30102",
            "40702",
            "452",
            "47427",
            "47411",
            "42303",
            "603",
            "70601",
            "70606",
            "60401",
            "60414"
        ],
        answers: ["60401603"],
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
    },


  

]

window.quizesSets = quizesSets;