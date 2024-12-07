//https://www.matburo.ru/sub_test.php?p=test_tu1
//https://www.matburo.ru/sub_test.php?p=test_omark1
//https://neiros.ru/tools/sample-size/

let quizesSets = [

{
    id: "economics900",
    type: "multiplechoices",
    header: "Тест",
    title: "Линейный менеджер несет ответственность за",
    theme: "Менеджмент и маркетинг",
    text: "Линейный менеджер несет ответственность за",
    choices: [
        "общую деятельность организации или подразделений, а следовательно, полагается на управленцев, ответственных за выполнение отдельных функций",
        "отдельные элементы деятельности организации, такие как управление персоналом, исследованиями, маркетингом или производством;",
        "выполнение функций, напрямую связанных с производством или поставкой продукта услуг потребителям",
        ],
    answers: ["выполнение функций, напрямую связанных с производством или поставкой продукта услуг потребителям"],
    hint: `
        <a href='https://xn--h1apee0d.xn--p1ai/dolzhnostnye_instrukcii/linejnyj-rukovoditel-kto-eto/'
         class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)
         </a>
    `
},


{
    id: "economics950",
    type: "multiplechoices",
    header: "Тест",
    title: "Приоритетные для бизнеса товары (рынки, клиенты и т.д.) можно выявить с помощью…",
    theme: "Менеджмент и маркетинг",
    text: "Приоритетные для бизнеса товары (рынки, клиенты и т.д.) можно выявить с помощью…",
    choices: [
        "корреляционного анализа",
        "регрессионного анализа",
        "АВС- анализа",
        "SWOT- анализа"
        ],
    answers: ["АВС- анализа"]
},

{
    id: "economics950",
    type: "multiplechoices",
    header: "Тест",
    title: "Что показывает коэффициент корреляции?",
    theme: "Менеджмент и маркетинг",
    text: "Что показывает коэффициент корреляции?",
    choices: [
        "на сколько процентов изменится спрос при изменении фактора на один процент",
        "насколько сильно тот или иной фактор влияет на анализируемую рыночную категорию",
        "на сколько единиц изменится спрос при изменении фактора на одну единицу",
        "все ответы неверны"
        ],
    answers: ["насколько сильно тот или иной фактор влияет на анализируемую рыночную категорию"]
},

{
    id: "economics951",
    type: "multiplechoices",
    header: "Тест",
    title: "С помощью регрессионного анализа можно установить",
    theme: "Менеджмент и маркетинг",
    text: "С помощью регрессионного анализа можно установить",
    choices: [
        "как часто потенциальные потребители готовы приобретать товар",
        "как сильно потребители нуждаются в товаре",
        "как изменится продажа товара при изменении того или иного фактора на одну единицу",
        "на сколько единиц изменится продажа товара через месяц (квартал, год)"
        ],
    answers: ["как изменится продажа товара при изменении того или иного фактора на одну единицу",
        "на сколько единиц изменится продажа товара через месяц (квартал, год)"]
},

{
    id: "economics952",
    type: "multiplechoices",
    header: "Тест",
    title: "Укажите источник первичной маркетинговой информации",
    theme: "Менеджмент и маркетинг",
    text: "Укажите источник первичной маркетинговой информации",
    choices: [
        "опросы потребителей",
        "материалы отраслевой статистики",
        "маркетинговая разведка",
        "материалы Росстата"
        ],
    answers: ["опросы потребителей",
        "маркетинговая разведка"]
},

{
    id: "economics953",
    type: "multiplechoices",
    header: "Тест",
    title: "Среди приведенных источников укажите внешние источники вторичной маркетинговой информации",
    theme: "Менеджмент и маркетинг",
    text: "Среди приведенных источников укажите внешние источники вторичной маркетинговой информации",
    choices: [
        "деловая корреспонденция компании",
        "материалы профессиональных объединений, союзов, ассоциаций",
        "опросы потребителей",
        "материалы выставо- ярмарок"
        ],
    answers: ["материалы выставо- ярмарок",
        "материалы профессиональных объединений, союзов, ассоциаций"]
},


{
    id: "economics954",
    type: "multiplechoices",
    header: "Тест",
    title: "Для выявления покупательских предпочтений предпочтительнее всего",
    theme: "Менеджмент и маркетинг",
    text: "Для выявления покупательских предпочтений предпочтительнее всего",
    choices: [
        "анкетный опрос",
        "контент-анализ прессы",
        "моментные обследования магазинов",
        "эксперимент"
        ],
    answers: ["анкетный опрос"]
},

{
    id: "economics954",
    type: "multiplechoices",
    header: "Тест",
    title: "К элементам маркетинговой микросреды относится …",
    theme: "Менеджмент и маркетинг",
    text: "К элементам маркетинговой микросреды относится …",
    choices: [
        "законодательство в области предпринимательства",
        "социально- культурная ситуация в стране",
        "клиентура фирмы",
        "политическая ситуация в стране"
        ],
    answers: ["клиентура фирмы"]
},

{
    id: "economics955",
    type: "multiplechoices",
    header: "Тест",
    title: "Какой метод анализа информации о рынке относится к статистическим методам?",
    theme: "Менеджмент и маркетинг",
    text: "Какой метод анализа информации о рынке относится к статистическим методам?",
    choices: [
        "регрессионный анализ",
        "АВС-анализ",
        "SWOT-анализ",
        "STEP-анализ"
        ],
    answers: ["регрессионный анализ"]
},

{
    id: "economics956",
    type: "multiplechoices",
    header: "Тест",
    title: "К функциям маркетолога не принято относить …",
    theme: "Менеджмент и маркетинг",
    text: "К функциям маркетолога не принято относить …",
    choices: [
        "сбор и оценку рыночной информации",
        "подготовку смет и расчетов себестоимости товаров",
        "подготовку смет и расходов по маркетингу",
        "разработку прогнозов спроса потребителей"
        ],
    answers: ["подготовку смет и расчетов себестоимости товаров"]
},



]

window.quizesSets = quizesSets;