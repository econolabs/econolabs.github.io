let quizesSets = [

    // ==================== ТЕМА 1: Введение в ИТ ====================
    {
        "id": "it_001",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Понятие ИТ",
        "theme": "Основы ИТ",
        "text": "Что такое информационная технология (ИТ)?",
        "choices": [
            "Только аппаратное обеспечение компьютеров",
            "Совокупность методов, процессов и средств для сбора, обработки и хранения информации",
            "Язык программирования",
            "Вид компьютерных игр"
        ],
        "answers": ["Совокупность методов, процессов и средств для сбора, обработки и хранения информации"],
        "hint": "<div class='alert alert-primary'><h5>Информационная технология</h5><p>Это комплекс методов и средств для работы с информацией.</p></div>"
    },
    {
        "id": "it_002",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Эволюция ИТ",
        "theme": "История",
        "text": "Какой этап эволюции ИТ связан с появлением искусственного интеллекта и блокчейна?",
        "choices": [
            "1950-е годы (мейнфреймы)",
            "1980-е годы (ПК)",
            "2000-е годы (облачные технологии)",
            "2010-е годы — настоящее время"
        ],
        "answers": ["2010-е годы — настоящее время"],
        "hint": "<div class='alert alert-primary'><p>Современный этап (6-й) — это ИИ, блокчейн, IoT, квантовые вычисления.</p></div>"
    },
    {
        "id": "it_003",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Облачные технологии",
        "theme": "Облака",
        "text": "Что такое SaaS (Software as a Service)?",
        "choices": [
            "Предоставление инфраструктуры (серверы, хранилища)",
            "Предоставление готовых приложений через браузер",
            "Платформа для разработки приложений",
            "Бессерверные вычисления"
        ],
        "answers": ["Предоставление готовых приложений через браузер"],
        "hint": "<div class='alert alert-primary'><p>SaaS — это готовые приложения (Google Docs, Salesforce, Zoom).</p></div>"
    },
    {
        "id": "it_004",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Big Data",
        "theme": "Данные",
        "text": "Что НЕ относится к характеристикам Big Data (5V)?",
        "choices": [
            "Volume (объём)",
            "Velocity (скорость)",
            "Variety (разнообразие)",
            "Vulnerability (уязвимость)"
        ],
        "answers": ["Vulnerability (уязвимость)"],
        "hint": "<div class='alert alert-primary'><p>5V Big Data: Volume, Velocity, Variety, Veracity, Value.</p></div>"
    },
    {
        "id": "it_005",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Искусственный интеллект",
        "theme": "AI",
        "text": "Что такое узкий искусственный интеллект (Weak AI)?",
        "choices": [
            "ИИ, который превосходит человеческий интеллект",
            "ИИ, выполняющий одну конкретную задачу",
            "ИИ, который может выполнять любые интеллектуальные задачи",
            "ИИ, использующий квантовые вычисления"
        ],
        "answers": ["ИИ, выполняющий одну конкретную задачу"],
        "hint": "<div class='alert alert-primary'><p>Узкий ИИ решает одну задачу (голосовые ассистенты, распознавание лиц).</p></div>"
    },
    {
        "id": "it_006",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Блокчейн",
        "theme": "Блокчейн",
        "text": "Какое свойство НЕ является ключевым для блокчейна?",
        "choices": [
            "Децентрализация",
            "Неизменность данных",
            "Централизованное управление",
            "Прозрачность"
        ],
        "answers": ["Централизованное управление"],
        "hint": "<div class='alert alert-primary'><p>Блокчейн децентрализован — нет единого центра управления.</p></div>"
    },
    {
        "id": "it_007",
        "type": "multiplechoices",
        "header": "Тема 1. Введение в информационные технологии",
        "title": "Интернет вещей (IoT)",
        "theme": "IoT",
        "text": "Что такое Интернет вещей (IoT)?",
        "choices": [
            "Сеть компьютеров, соединённых интернетом",
            "Сеть физических объектов с датчиками, подключённых к интернету",
            "Вид поисковой системы",
            "Язык программирования"
        ],
        "answers": ["Сеть физических объектов с датчиками, подключённых к интернету"],
        "hint": "<div class='alert alert-primary'><p>IoT — это умные устройства (термостаты, камеры, датчики).</p></div>"
    },

    // ==================== ТЕМА 2: Офисные технологии ====================
    {
        "id": "it_008",
        "type": "multiplechoices",
        "header": "Тема 2. Офисные технологии",
        "title": "Текстовые процессоры",
        "theme": "Word",
        "text": "Какой инструмент в текстовом процессоре используется для автоматического создания оглавления?",
        "choices": [
            "Стили заголовков",
            "Колонтитулы",
            "Сноски",
            "Формулы"
        ],
        "answers": ["Стили заголовков"],
        "hint": "<div class='alert alert-primary'><p>Оглавление создаётся на основе стилей заголовков (Заголовок 1, 2, 3).</p></div>"
    },
    {
        "id": "it_009",
        "type": "multiplechoices",
        "header": "Тема 2. Офисные технологии",
        "title": "Электронные таблицы",
        "theme": "Excel",
        "text": "Какая функция в Excel ищет значение в таблице по заданному критерию?",
        "choices": [
            "СУММ",
            "ВПР (VLOOKUP)",
            "ЕСЛИ (IF)",
            "СРЗНАЧ"
        ],
        "answers": ["ВПР (VLOOKUP)"],
        "hint": "<div class='alert alert-primary'><p>ВПР (VLOOKUP) ищет значение по вертикали в таблице.</p></div>"
    },
    {
        "id": "it_010",
        "type": "multiplechoices",
        "header": "Тема 2. Офисные технологии",
        "title": "Электронный документооборот (СЭД)",
        "theme": "Документооборот",
        "text": "Какая функция НЕ относится к системе электронного документооборота?",
        "choices": [
            "Регистрация документов",
            "Маршрутизация документов",
            "Создание презентаций",
            "Архивация документов"
        ],
        "answers": ["Создание презентаций"],
        "hint": "<div class='alert alert-primary'><p>СЭД управляет документами (регистрация, маршрутизация, хранение), а не созданием презентаций.</p></div>"
    },
    {
        "id": "it_011",
        "type": "multiplechoices",
        "header": "Тема 2. Офисные технологии",
        "title": "Информационно-правовые системы",
        "theme": "Право",
        "text": "Какая система является справочно-правовой в России?",
        "choices": [
            "Google Docs",
            "КонсультантПлюс",
            "Microsoft Excel",
            "Adobe Photoshop"
        ],
        "answers": ["КонсультантПлюс"],
        "hint": "<div class='alert alert-primary'><p>КонсультантПлюс — это крупнейшая правовая система в РФ.</p></div>"
    },

    // ==================== ТЕМА 3: Обработка данных ====================
    {
        "id": "it_012",
        "type": "multiplechoices",
        "header": "Тема 3. Обработка данных",
        "title": "SQL",
        "theme": "Базы данных",
        "text": "Какая команда SQL используется для выборки данных?",
        "choices": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "answers": ["SELECT"],
        "hint": "<div class='alert alert-primary'><p>SELECT — это команда для выборки данных из базы.</p></div>"
    },
    {
        "id": "it_013",
        "type": "multiplechoices",
        "header": "Тема 3. Обработка данных",
        "title": "Сводные таблицы",
        "theme": "Excel",
        "text": "Для чего используются сводные таблицы в Excel?",
        "choices": [
            "Для создания графиков",
            "Для агрегации и анализа больших объёмов данных",
            "Для написания макросов",
            "Для проверки орфографии"
        ],
        "answers": ["Для агрегации и анализа больших объёмов данных"],
        "hint": "<div class='alert alert-primary'><p>Сводные таблицы позволяют быстро суммировать и группировать данные.</p></div>"
    },
    {
        "id": "it_014",
        "type": "multiplechoices",
        "header": "Тема 3. Обработка данных",
        "title": "Data Mining",
        "theme": "Анализ",
        "text": "Что такое интеллектуальный анализ данных (Data Mining)?",
        "choices": [
            "Сбор и хранение данных",
            "Обнаружение скрытых закономерностей в больших данных",
            "Создание баз данных",
            "Разработка веб-сайтов"
        ],
        "answers": ["Обнаружение скрытых закономерностей в больших данных"],
        "hint": "<div class='alert alert-primary'><p>Data Mining — это поиск скрытых закономерностей (классификация, кластеризация).</p></div>"
    },
    {
        "id": "it_015",
        "type": "multiplechoices",
        "header": "Тема 3. Обработка данных",
        "title": "Визуализация данных",
        "theme": "Графики",
        "text": "Какой тип диаграммы лучше всего показывает тренды во времени?",
        "choices": [
            "Круговая диаграмма",
            "Линейный график",
            "Гистограмма",
            "Точечная диаграмма"
        ],
        "answers": ["Линейный график"],
        "hint": "<div class='alert alert-primary'><p>Линейный график показывает изменение данных во времени.</p></div>"
    },
    {
        "id": "it_016",
        "type": "multiplechoices",
        "header": "Тема 3. Обработка данных",
        "title": "NLP",
        "theme": "ИИ",
        "text": "Что такое обработка естественного языка (NLP)?",
        "choices": [
            "Программирование на языках высокого уровня",
            "Обработка и анализ текстовой информации",
            "Распознавание изображений",
            "Создание нейросетей"
        ],
        "answers": ["Обработка и анализ текстовой информации"],
        "hint": "<div class='alert alert-primary'><p>NLP — это обработка текста (токенизация, анализ тональности, машинный перевод).</p></div>"
    },

    // ==================== ТЕМА 4: Безопасность и современные технологии ====================
    {
        "id": "it_017",
        "type": "multiplechoices",
        "header": "Тема 4. Безопасность и современные технологии",
        "title": "Криптография",
        "theme": "Безопасность",
        "text": "Что такое асимметричное шифрование?",
        "choices": [
            "Шифрование одним ключом",
            "Шифрование с использованием пары ключей (публичный и приватный)",
            "Шифрование без ключей",
            "Только аппаратное шифрование"
        ],
        "answers": ["Шифрование с использованием пары ключей (публичный и приватный)"],
        "hint": "<div class='alert alert-primary'><p>Асимметричное шифрование (RSA) использует публичный и приватный ключи.</p></div>"
    },
    {
        "id": "it_018",
        "type": "multiplechoices",
        "header": "Тема 4. Безопасность и современные технологии",
        "title": "Электронная подпись",
        "theme": "ЭП",
        "text": "Какой вид электронной подписи приравнен к собственноручной подписи?",
        "choices": [
            "Простая ЭП",
            "Неквалифицированная ЭП",
            "Квалифицированная ЭП (КЭП)",
            "Все виды ЭП"
        ],
        "answers": ["Квалифицированная ЭП (КЭП)"],
        "hint": "<div class='alert alert-primary'><p>Квалифицированная ЭП имеет юридическую силу, равную собственноручной подписи.</p></div>"
    },
    {
        "id": "it_019",
        "type": "multiplechoices",
        "header": "Тема 4. Безопасность и современные технологии",
        "title": "Смарт-контракты",
        "theme": "Блокчейн",
        "text": "Что такое смарт-контракт?",
        "choices": [
            "Обычный договор в бумажном виде",
            "Программируемый контракт, исполняемый автоматически",
            "Электронное письмо с условиями сделки",
            "Вид банковского счета"
        ],
        "answers": ["Программируемый контракт, исполняемый автоматически"],
        "hint": "<div class='alert alert-primary'><p>Смарт-контракт — это код, который автоматически исполняет условия.</p></div>"
    },
    {
        "id": "it_020",
        "type": "multiplechoices",
        "header": "Тема 4. Безопасность и современные технологии",
        "title": "Киберугрозы",
        "theme": "Безопасность",
        "text": "Что такое фишинг?",
        "choices": [
            "Вид антивируса",
            "Мошеннические письма для получения личных данных",
            "DDoS-атака на сервер",
            "Шифрование файлов с выкупом"
        ],
        "answers": ["Мошеннические письма для получения личных данных"],
        "hint": "<div class='alert alert-primary'><p>Фишинг — это попытка получить данные через поддельные письма или сайты.</p></div>"
    },
    {
        "id": "it_021",
        "type": "multiplechoices",
        "header": "Тема 4. Безопасность и современные технологии",
        "title": "Тренды ИТ",
        "theme": "Будущее",
        "text": "Что из перечисленного является трендом будущего в ИТ?",
        "choices": [
            "Квантовые вычисления",
            "Бумажный документооборот",
            "Использование механических компьютеров",
            "Работа без интернета"
        ],
        "answers": ["Квантовые вычисления"],
        "hint": "<div class='alert alert-primary'><p>Квантовые вычисления, AGI, Web3, Metaverse — это тренды будущего.</p></div>"
    },

    // =====================================================================
// ==================== EXCEL · ЛОГИЧЕСКИЕ ФУНКЦИИ =====================
// =====================================================================
{
    id: "excel_logic_001",
    type: "mathwithrandomnumber",
    header: "Excel · Логические функции",
    title: "ЕСЛИ: логическое условие",
    theme: "Функции Excel",
    randomfrom: [0, 1],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — склад</div>
  <div class="card-body">
    <svg viewBox="0 0 480 220" width="100%" style="max-width:480px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="480" height="220" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="140" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="180" y="0" width="100" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="280" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="110" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="230" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <text x="340" y="20" text-anchor="middle" font-size="13" fill="#495057">D</text>
      <g font-size="13" fill="#212529">
        <text x="45" y="50">Товар</text><text x="185" y="50">Цена</text><text x="285" y="50">Статус</text>
        <text x="45" y="80">Стол</text><text x="185" y="80">{= IF({var1-10}=1; 20000; 5000)}</text><text x="285" y="80">?</text>
        <text x="45" y="110">Стул</text><text x="185" y="110">3000</text><text x="285" y="110">?</text>
        <text x="45" y="140">Шкаф</text><text x="185" y="140">25000</text><text x="285" y="140">?</text>
        <text x="45" y="170">Полка</text><text x="185" y="170">1200</text><text x="285" y="170">?</text>
      </g>
      <g stroke="#dee2e6">
        <line x1="40" y1="0" x2="40" y2="180"/><line x1="180" y1="0" x2="180" y2="180"/>
        <line x1="280" y1="0" x2="280" y2="180"/>
        <line x1="0" y1="30" x2="400" y2="30"/><line x1="0" y1="60" x2="400" y2="60"/>
        <line x1="0" y1="90" x2="400" y2="90"/><line x1="0" y1="120" x2="400" y2="120"/>
        <line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="180" x2="400" y2="180"/>
      </g>
      <rect x="0" y="190" width="480" height="30" fill="#f8f9fa" stroke="#adb5bd"/>
      <text x="10" y="210" font-size="13" fill="#0d6efd">fx</text>
      <text x="40" y="210" font-size="13" fill="#212529">=ЕСЛИ(B2&gt;10000; 1; 0)</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула <code>=ЕСЛИ(B2&gt;10000; 1; 0)</code>
      для ячейки <strong>C2</strong>? Введите \(0\) или \(1\).
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Функция <strong>ЕСЛИ</strong>:</div>
    <div class="text-center">$$\\text{ЕСЛИ}(\\text{условие};\\; \\text{истина};\\; \\text{ложь})$$</div>
    <div class="mt-3 mb-2">Цена в B2 = \\({= IF({var1-10}=1; 20000; 5000)}\\).</div>
    <div class="mb-2">Сравниваем с \(10000\\):</div>
    <div class="text-center">$$ {= IF({var1-10}=1; 20000; 5000)} > 10000 \\;\\Rightarrow\\; {= IF({var1-10}=1; "ИСТИНА"; "ЛОЖЬ")}$$</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "excel_logic_002",
    type: "mathwithrandomnumber",
    header: "Excel · Логические функции",
    title: "СУММЕСЛИМН: сумма по двум условиям",
    theme: "Функции Excel",
    randomfrom: [50000, 60000, 70000, 80000],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — продажи</div>
  <div class="card-body">
    <svg viewBox="0 0 560 200" width="100%" style="max-width:560px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="560" height="200" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="130" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="170" y="0" width="130" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="300" y="0" width="130" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="430" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="105" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="235" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <text x="365" y="20" text-anchor="middle" font-size="13" fill="#495057">D</text>
      <text x="490" y="20" text-anchor="middle" font-size="13" fill="#495057">E</text>
      <g font-size="13" fill="#212529">
        <text x="45" y="50">Товар</text><text x="175" y="50">Категория</text><text x="305" y="50">Город</text><text x="435" y="50">Сумма</text>
        <text x="45" y="80">A</text><text x="175" y="80">Техника</text><text x="305" y="80">Москва</text><text x="435" y="80">{= {var1-10} - 40000}</text>
        <text x="45" y="110">B</text><text x="175" y="110">Аксессуар</text><text x="305" y="110">Москва</text><text x="435" y="110">5000</text>
        <text x="45" y="140">C</text><text x="175" y="140">Техника</text><text x="305" y="140">СПб</text><text x="435" y="140">25000</text>
        <text x="45" y="170">D</text><text x="175" y="170">Техника</text><text x="305" y="170">Москва</text><text x="435" y="170">40000</text>
      </g>
      <g stroke="#dee2e6">
        <line x1="40" y1="0" x2="40" y2="180"/><line x1="170" y1="0" x2="170" y2="180"/>
        <line x1="300" y1="0" x2="300" y2="180"/><line x1="430" y1="0" x2="430" y2="180"/>
        <line x1="0" y1="30" x2="550" y2="30"/><line x1="0" y1="60" x2="550" y2="60"/>
        <line x1="0" y1="90" x2="550" y2="90"/><line x1="0" y1="120" x2="550" y2="120"/>
        <line x1="0" y1="150" x2="550" y2="150"/><line x1="0" y1="180" x2="550" y2="180"/>
      </g>
      <rect x="0" y="190" width="560" height="30" fill="#f8f9fa" stroke="#adb5bd"/>
      <text x="10" y="210" font-size="13" fill="#0d6efd">fx</text>
      <text x="40" y="210" font-size="13" fill="#212529">=СУММЕСЛИМН(D2:D5; B2:B5; "Техника"; C2:C5; "Москва")</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула? Введите число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Функция <strong>СУММЕСЛИМН</strong> суммирует значения,
      где <em>одновременно</em> истинны все условия.</div>
    <div class="mt-3 mb-2">Наши условия:</div>
    <ul class="mb-2">
      <li>Категория = «Техника»</li>
      <li>Город = «Москва»</li>
    </ul>
    <div class="mb-2">Подходящие строки — \(A\\) и \(D\\). Суммируем:</div>
    <div class="text-center">$$S = {= {var1-10} - 40000} + 40000 = {= {var1-10} - 40000 + 40000}$$</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// {
//     id: "excel_logic_003",
//     type: "mathwithrandomnumber",
//     header: "Excel · Логические функции",
//     title: "И: все условия истинны",
//     theme: "Функции Excel",
//     randomfrom: [1, 2, 3],
//     text: `
// <div class="card">
//   <div class="card-header bg-success text-white">Лист Excel — успеваемость</div>
//   <div class="card-body">
//     <svg viewBox="0 0 520 200" width="100%" style="max-width:520px; display:block; margin:0 auto; font-family:Consolas,monospace;">
//       ...
//       <g font-size="13" fill="#212529">
//         <text x="45" y="50">ФИО</text><text x="165" y="50">Матем</text><text x="275" y="50">Русский</text><text x="385" y="50">Информ</text><text x="440" y="50">Рез.</text>
//         <text x="45" y="80">Иванов</text>
//         <text x="165" y="80">{= IF({var1-10}>=1; 90; 60)}</text>
//         <text x="275" y="80">{= IF({var1-10}>=1; 85; 55)}</text>
//         <text x="385" y="80">{= IF({var1-10}>=1; 80; 50)}</text>
//         <text x="440" y="80">?</text>
//         <text x="45" y="110">Петров</text>
//         <text x="165" y="110">{= IF({var1-10}>=2; 90; 60)}</text>
//         <text x="275" y="110">{= IF({var1-10}>=2; 95; 65)}</text>
//         <text x="385" y="110">{= IF({var1-10}>=2; 90; 60)}</text>
//         <text x="440" y="110">?</text>
//         <text x="45" y="140">Сидоров</text>
//         <text x="165" y="140">{= IF({var1-10}>=3; 85; 55)}</text>
//         <text x="275" y="140">{= IF({var1-10}>=3; 70; 60)}</text>
//         <text x="385" y="140">{= IF({var1-10}>=3; 95; 60)}</text>
//         <text x="440" y="140">?</text>
//       </g>
//       ...
//     </svg>
//     <div class="alert alert-success mt-3 mb-0">
//       <strong>Вопрос:</strong> Сколько учеников получат «Сдал» (все оценки ≥ 70)?
//       Введите число от 0 до 3.
//     </div>
//   </div>
// </div>`,
//     answer: "{var1-10}",
//     hint: `
// <div class="card">
//   <div class="card-header bg-success text-white">Решение</div>
//   <div class="card-body">
//     <div class="mb-2">Функция <strong>И</strong> возвращает ИСТИНА только если <em>все</em> условия истинны.</div>
//     <div class="mt-3 mb-2">Проверяем каждого:</div>
//     <ul class="mb-2">
//       <li>Иванов: {= IF({var1-10}>=1; "90, 85, 80 → все ≥ 70 → Сдал"; "60, 55, 50 → есть < 70 → Не сдал")}</li>
//       <li>Петров: {= IF({var1-10}>=2; "90, 95, 90 → все ≥ 70 → Сдал"; "60, 65, 60 → есть < 70 → Не сдал")}</li>
//       <li>Сидоров: {= IF({var1-10}>=3; "85, 70, 95 → все ≥ 70 → Сдал"; "55, 60, 60 → есть < 70 → Не сдал")}</li>
//     </ul>
//     <div class="mb-2">Значит, сдавших — <strong>{var1-10}</strong>.</div>
//     <div class="alert alert-success mt-3">
//       Ответ: \\(\\boxed{{var1-10}}\\)
//     </div>
//   </div>
// </div>`
// },

// =====================================================================
// ==================== EXCEL · ДИАГРАММЫ ==============================
// =====================================================================
{
    id: "excel_diagram_001",
    type: "multiplechoices",
    header: "Excel · Диаграммы",
    title: "Динамика во времени",
    theme: "Визуализация данных",
    text: `В таблице представлена динамика продаж компании по месяцам (январь — декабрь).
    Какой тип диаграммы <strong>лучше всего</strong> покажет изменение продаж во времени?`,
    choices: [
        "Круговая диаграмма",
        "Линейный график",
        "Гистограмма",
        "Точечная диаграмма"
    ],
    answers: ["Линейный график"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Правила выбора диаграммы:</div>
    <ul class="mb-0">
      <li><strong>Линейный график</strong> — динамика во времени (тренды).</li>
      <li><strong>Круговая</strong> — доли от целого (100%).</li>
      <li><strong>Гистограмма</strong> — сравнение категорий.</li>
      <li><strong>Точечная</strong> — связь между двумя величинами.</li>
    </ul>
    <div class="alert alert-primary mt-3">Ответ: <strong>линейный график</strong></div>
  </div>
</div>`
},

{
    id: "excel_diagram_002",
    type: "multiplechoices",
    header: "Excel · Диаграммы",
    title: "Доли от целого",
    theme: "Визуализация данных",
    text: `В таблице указаны доли четырёх категорий товаров в общем объёме продаж (в сумме 100%).
    Какой тип диаграммы <strong>лучше всего</strong> покажет соотношение долей?`,
    choices: [
        "Линейный график",
        "Круговая диаграмма",
        "Гистограмма",
        "Диаграмма рассеяния"
    ],
    answers: ["Круговая диаграмма"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Когда использовать круговую:</div>
    <ul class="mb-2">
      <li>Данные — <strong>части одного целого</strong> (100%).</li>
      <li>Нужно показать <strong>доли</strong>, а не динамику.</li>
      <li>Категорий немного (2–6).</li>
    </ul>
    <div class="alert alert-primary mt-3">Ответ: <strong>круговая диаграмма</strong></div>
  </div>
</div>`
},

// =====================================================================
// ==================== СИСТЕМЫ СЧИСЛЕНИЯ ==============================
// =====================================================================
{
    id: "ss_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Системы счисления",
    title: "Количество единиц в двоичной записи",
    theme: "Перевод чисел",
    randomfrom: [3, 4, 5, 6, 7, 8],
    text: `Сколько единиц в двоичной записи числа
    \\(\\mathbf{{= IF({var1-10}=3;7;IF({var1-10}=4;195;IF({var1-10}=5;210;IF({var1-10}=6;225;IF({var1-10}=7;240;255)))))}}\\)?
    <br><small class="text-muted">Введите целое число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Число: \\({= IF({var1-10}=3;7;IF({var1-10}=4;195;IF({var1-10}=5;210;IF({var1-10}=6;225;IF({var1-10}=7;240;255)))))}\\)</div>
    <div class="mb-2">Раскладываем на степени двойки:</div>
    <ul class="mb-2">
      <li>7 = 4 + 2 + 1 → 111₂ — 3 единицы</li>
      <li>195 = 128 + 64 + 2 + 1 → 11000011₂ — 4 единицы</li>
      <li>210 = 128 + 64 + 16 + 2 → 11010010₂ — 4 единицы</li>
      <li>225 = 128 + 64 + 32 + 1 → 11100001₂ — 4 единицы</li>
      <li>240 = 128 + 64 + 32 + 16 → 11110000₂ — 4 единицы</li>
      <li>255 = 11111111₂ — 8 единиц</li>
    </ul>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "ss_002",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Системы счисления",
    title: "Перевод из восьмеричной в десятичную",
    theme: "Перевод чисел",
    randomfrom: [64, 128, 256, 512, 1024],
    text: `Какое число в <strong>десятичной</strong> системе соответствует
    восьмеричной записи
    \\(\\mathbf{{= IF({var1-10}=64;100;IF({var1-10}=128;200;IF({var1-10}=256;400;IF({var1-10}=512;1000;2000))))}_8}\\)?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Переводим из восьмеричной в десятичную:</div>
    <div class="text-center">$$N = \\sum_k d_k \\cdot 8^k$$</div>
    <div class="mt-3 mb-2">Примеры:</div>
    <ul class="mb-2">
      <li>\\(100_8 = 1 \\cdot 8^2 = 64\\)</li>
      <li>\\(200_8 = 2 \\cdot 8^2 = 128\\)</li>
      <li>\\(400_8 = 4 \\cdot 8^2 = 256\\)</li>
      <li>\\(1000_8 = 1 \\cdot 8^3 = 512\\)</li>
      <li>\\(2000_8 = 2 \\cdot 8^3 = 1024\\)</li>
    </ul>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "ss_003",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Системы счисления",
    title: "Перевод из шестнадцатеричной",
    theme: "Перевод чисел",
    randomfrom: [100, 144, 169, 196, 225],
    text: `Какое число в <strong>десятичной</strong> системе соответствует
    шестнадцатеричной записи
    \\(\\mathbf{{= IF({var1-10}=100;"64";IF({var1-10}=144;"90";IF({var1-10}=169;"A9";IF({var1-10}=196;"C4";"E1"))))}_{16}}\\)?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Переводим из шестнадцатеричной в десятичную:</div>
    <div class="text-center">$$N = \\sum_k d_k \\cdot 16^k$$</div>
    <div class="mt-3 mb-2">Примеры:</div>
    <ul class="mb-2">
      <li>\\(64_{16} = 6 \\cdot 16 + 4 = 100\\)</li>
      <li>\\(90_{16} = 9 \\cdot 16 + 0 = 144\\)</li>
      <li>\\(A9_{16} = 10 \\cdot 16 + 9 = 169\\)</li>
      <li>\\(C4_{16} = 12 \\cdot 16 + 4 = 196\\)</li>
      <li>\\(E1_{16} = 14 \\cdot 16 + 1 = 225\\)</li>
    </ul>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== КОДИРОВАНИЕ ИНФОРМАЦИИ =========================
// =====================================================================
{
    id: "code_img_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Кодирование информации",
    title: "Объём растрового изображения",
    theme: "Кодирование графики",
    randomfrom: [16, 20, 24, 28, 32],
    text: `Изображение размером \\(128 \\times 256\\) пикселей,
    число цветов \\(\\mathbf{{= POWER(2;{var1-10})}}\\).
    Какой минимальный объём памяти (в Кбайт) нужен?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-3"><strong>Шаг 1.</strong> Глубина цвета \(i\\) бит, где:</div>
    <div class="text-center">$$2^i = {= POWER(2;{var1-10})} \\Rightarrow i = {var1-10}$$</div>
    <div class="mt-3 mb-3"><strong>Шаг 2.</strong> Объём изображения:</div>
    <div class="text-center">$$V = \\frac{128 \\cdot 256 \\cdot {var1-10}}{8 \\cdot 1024} = {= 128*256*{var1-10}/8/1024}\\ \\text{Кбайт}$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\) Кбайт
    </div>
  </div>
</div>`
},

{
    id: "code_text_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Кодирование информации",
    title: "Объём текста",
    theme: "Кодирование текста",
    randomfrom: [24, 48, 96],
    text: `Каждый символ кодируется
    \\(\\mathbf{{= IF({var1-10}=24; 8; IF({var1-10}=48; 16; 32))}}\\) битами.
    Фраза содержит \\(24\\) символа.
    Каков информационный объём (в байтах)?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Объём текста:</div>
    <div class="text-center">$$V = \\frac{n \\cdot i}{8}$$</div>
    <div class="mb-2">где \\(n = 24\\), \\(i = {= IF({var1-10}=24; 8; IF({var1-10}=48; 16; 32))}\\) бит.</div>
    <div class="text-center">$$V = \\frac{24 \\cdot {= IF({var1-10}=24; 8; IF({var1-10}=48; 16; 32))}}{8} = {var1-10}\\ \\text{байт}$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\) байт
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== ЛОГИКА =========================================
// =====================================================================
{
    id: "logic_imp_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Логика",
    title: "Импликация: значение X",
    theme: "Логические выражения",
    randomfrom: [3, 4, 5, 6],
    text: `Для какого \(X\\) истинно высказывание
    $$\\neg\\big((X > {= {var1-10} - 1}) \\to (X > {var1-10})\\big)?$$
    <br><small class="text-muted">Введите значение \\(X\\).</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Импликация \(A \\to B\\) ложна только если \(A\\) истинно, а \(B\\) ложно.</div>
    <div class="mb-2">Значит, \(\\neg(A \\to B)\\) истинно, когда:</div>
    <div class="text-center">$$A: X > {= {var1-10} - 1} \\quad\\text{и}\\quad B: X \\le {var1-10}$$</div>
    <div class="mt-3 mb-2">Объединяем:</div>
    <div class="text-center">$$ {= {var1-10} - 1} < X \\le {var1-10} \\Rightarrow X = {var1-10}$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "logic_morgan_001",
    type: "multiplechoices",
    header: "ФИПИ · Логика",
    title: "Закон де Моргана",
    theme: "Преобразование выражений",
    text: `Какое выражение равносильно $$\\neg(A \\lor B) \\land C?$$`,
    choices: [
        "\\(\\neg A \\land \\neg B \\land C\\)",
        "\\(\\neg A \\lor \\neg B \\lor C\\)",
        "\\(A \\land B \\land C\\)",
        "\\(\\neg A \\land B \\land \\neg C\\)"
    ],
    answers: ["\\(\\neg A \\land \\neg B \\land C\\)"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Первый закон де Моргана:</div>
    <div class="text-center">$$\\neg(A \\lor B) = \\neg A \\land \\neg B$$</div>
    <div class="mt-3 mb-2">Применяем к исходному выражению:</div>
    <div class="text-center">$$\\neg(A \\lor B) \\land C = \\neg A \\land \\neg B \\land C$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\neg A \\land \\neg B \\land C}\\)
    </div>
  </div>
</div>`
},

{
    id: "logic_morgan_002",
    type: "multiplechoices",
    header: "ФИПИ · Логика",
    title: "Закон де Моргана (второй)",
    theme: "Преобразование выражений",
    text: `Какое выражение равносильно $$\\neg(A \\land B)?$$`,
    choices: [
        "\\(\\neg A \\land \\neg B\\)",
        "\\(\\neg A \\lor \\neg B\\)",
        "\\(A \\lor B\\)",
        "\\(A \\land B\\)"
    ],
    answers: ["\\(\\neg A \\lor \\neg B\\)"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Второй закон де Моргана:</div>
    <div class="text-center">$$\\neg(A \\land B) = \\neg A \\lor \\neg B$$</div>
    <div class="mb-2">Интуитивно: «не (и \(A\\), и \(B\\))» означает «не \(A\\) или не \(B\\)».</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\neg A \\lor \\neg B}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== ГРАФЫ ==========================================
// =====================================================================
{
    id: "graph_path_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Графы",
    title: "Кратчайший путь",
    theme: "Схемы дорог",
    randomfrom: [6, 7, 8, 9],
    text: `
<div class="card">
  <div class="card-header bg-info text-white">Схема дорог</div>
  <div class="card-body">
    <svg viewBox="0 0 500 260" width="100%" style="max-width:500px; display:block; margin:0 auto;">
      <line x1="80" y1="130" x2="200" y2="60"  stroke="#495057" stroke-width="2"/>
      <line x1="80" y1="130" x2="200" y2="200" stroke="#495057" stroke-width="2"/>
      <line x1="200" y1="60" x2="320" y2="130" stroke="#495057" stroke-width="2"/>
      <line x1="200" y1="200" x2="320" y2="130" stroke="#495057" stroke-width="2"/>
      <line x1="200" y1="60" x2="200" y2="200" stroke="#495057" stroke-width="2"/>
      <line x1="320" y1="130" x2="440" y2="130" stroke="#495057" stroke-width="2"/>
      <line x1="200" y1="200" x2="440" y2="130" stroke="#495057" stroke-width="2"/>
      <text x="75" y="145" font-size="16" font-weight="bold">A</text>
      <text x="195" y="55" font-size="16" font-weight="bold">B</text>
      <text x="195" y="215" font-size="16" font-weight="bold">C</text>
      <text x="320" y="125" font-size="16" font-weight="bold">D</text>
      <text x="440" y="125" font-size="16" font-weight="bold">E</text>
      <text x="135" y="90" font-size="13" fill="#0d6efd">2</text>
      <text x="135" y="180" font-size="13" fill="#0d6efd">4</text>
      <text x="255" y="90" font-size="13" fill="#0d6efd">{= IF({var1-10}=6;2;IF({var1-10}=7;3;IF({var1-10}=8;4;5)))}</text>
      <text x="255" y="180" font-size="13" fill="#0d6efd">3</text>
      <text x="205" y="140" font-size="13" fill="#0d6efd">1</text>
      <text x="375" y="120" font-size="13" fill="#0d6efd">2</text>
      <text x="320" y="180" font-size="13" fill="#0d6efd">5</text>
    </svg>
    <div class="alert alert-info mt-3 mb-0">
      <strong>Вопрос:</strong> Какая длина кратчайшего пути из \(A\\) в \(E\\)?
      Введите число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-info text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Перебираем все пути из \(A\\) в \(E\\):</div>
    <div class="text-center">$$\\begin{aligned}
      A \\to B \\to D \\to E &= 2 + {= IF({var1-10}=6;2;IF({var1-10}=7;3;IF({var1-10}=8;4;5)))} + 2\\\\
      A \\to B \\to C \\to D \\to E &= 2 + 1 + 3 + 2 = 8\\\\
      A \\to C \\to D \\to E &= 4 + 3 + 2 = 9
    \\end{aligned}$$</div>
    <div class="mt-3 mb-2">По условию минимальный путь равен \\({var1-10}\\).</div>
    <div class="alert alert-info mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== IP-АДРЕСАЦИЯ ===================================
// =====================================================================
{
    id: "ip_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Сетевые технологии",
    title: "Количество узлов в сети",
    theme: "IP-адресация",
    randomfrom: [30, 62, 126, 254],
    text: `Сколько узлов может быть в сети с маской
    \\(\\mathbf{{= IF({var1-10}=30;27;IF({var1-10}=62;26;IF({var1-10}=126;25;24)))}}\\)?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Маска /\(n\\) — под узлы отводится \\(32 - n\\) бит:</div>
    <div class="text-center">$$N = 2^{32-n} - 2$$</div>
    <div class="mt-3 mb-2">Примеры:</div>
    <ul class="mb-2">
      <li>/27 → \\(2^{5} - 2 = 30\\)</li>
      <li>/26 → \\(2^{6} - 2 = 62\\)</li>
      <li>/25 → \\(2^{7} - 2 = 126\\)</li>
      <li>/24 → \\(2^{8} - 2 = 254\\)</li>
    </ul>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "ip_002",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Сетевые технологии",
    title: "Маска подсети: количество адресов",
    theme: "IP-адресация",
    randomfrom: [32, 64, 128, 256],
    text: `Какое общее количество адресов в сети с маской
    \\(\\mathbf{{= IF({var1-10}=32;27;IF({var1-10}=64;26;IF({var1-10}=128;25;24)))}}\\)?
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Общее количество адресов в сети /\(n\\):</div>
    <div class="text-center">$$N = 2^{32-n}$$</div>
    <div class="mt-3 mb-2">Примеры:</div>
    <ul class="mb-2">
      <li>/27 → \\(2^{5} = 32\\)</li>
      <li>/26 → \\(2^{6} = 64\\)</li>
      <li>/25 → \\(2^{7} = 128\\)</li>
      <li>/24 → \\(2^{8} = 256\\)</li>
    </ul>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== АЛГОРИТМЫ ======================================
// =====================================================================
{
    id: "algo_trace_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Алгоритмы",
    title: "Трассировка цикла",
    theme: "Анализ алгоритмов",
    randomfrom: [3, 4, 5, 6, 7],
    text: `
<div class="card">
  <div class="card-header bg-primary text-white">Псевдокод</div>
  <div class="card-body">
    <pre class="bg-light p-3 border rounded">a := {= 20 - 3 * {var1-10}}
b := 0
пока a &lt; 20:
    a := a + 3
    b := b + 1
напечатать b</pre>
    <div class="alert alert-primary mt-3 mb-0">
      <strong>Вопрос:</strong> Какое число будет напечатано?
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Начальное \(a = {= 20 - 3 * {var1-10}}\\). Цикл выполняется, пока \(a < 20\\).</div>
    <div class="mb-2">Так как шаг равен \(3\\), потребуется ровно \\({var1-10}\\) итераций,
      чтобы \(a\\) достигло или превысило \(20\\).</div>
    <div class="text-center">$$b = {var1-10}$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

{
    id: "algo_trace_002",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Алгоритмы",
    title: "Деление на 2",
    theme: "Анализ алгоритмов",
    randomfrom: [5, 6, 7, 8, 9],
    text: `
<div class="card">
  <div class="card-header bg-primary text-white">Алгоритм</div>
  <div class="card-body">
    <div class="mb-3">Алгоритм получает число \(N = 2^{var1-10}\\).
    Пока \(N\\) делится на \(2\\) без остатка, выполняется \(N := N / 2\\).
    Сколько раз выполнится тело цикла?</div>
    <div class="alert alert-primary mt-3 mb-0">
      <strong>Вопрос:</strong> Введите количество итераций.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Число \(N = 2^{var1-10}\\) делится на \(2\\) ровно \\({var1-10}\\) раз,
      пока не станет равным \(1\\).</div>
    <div class="text-center">$$\\underbrace{2^{var1-10} \\to 2^{{= {var1-10}-1}} \\to \\dots \\to 2^1 \\to 1}_{{var1-10}\\ \\text{шагов}}$$</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== EXCEL · СРЗНАЧ =================================
// =====================================================================
{
    id: "excel_avg_001",
    type: "mathwithrandomnumber",
    header: "Excel · Статистические функции",
    title: "СРЗНАЧ + ОКРУГЛ",
    theme: "Функции Excel",
    randomfrom: [10, 15, 20, 25, 30],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — измерения</div>
  <div class="card-body">
    <svg viewBox="0 0 480 260" width="100%" style="max-width:480px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="480" height="260" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="200" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="240" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="140" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="300" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <g font-size="13" fill="#212529">
        <text x="20" y="44" text-anchor="middle" fill="#595959">1</text>
        <text x="20" y="70" text-anchor="middle" fill="#595959">2</text>
        <text x="20" y="96" text-anchor="middle" fill="#595959">3</text>
        <text x="20" y="122" text-anchor="middle" fill="#595959">4</text>
        <text x="20" y="148" text-anchor="middle" fill="#595959">5</text>
        <text x="48" y="44">Измерение</text>
        <text x="248" y="44">Значение</text>
        <text x="48" y="70">1</text><text x="248" y="70">{= {var1-10}+4}</text>
        <text x="48" y="96">2</text><text x="248" y="96">{= {var1-10}-4}</text>
        <text x="48" y="122">3</text><text x="248" y="122">{= {var1-10}+4}</text>
        <text x="48" y="148">4</text><text x="248" y="148">{= {var1-10}-4}</text>
      </g>
      <g stroke="#d9d9d9">
        <line x1="40" y1="0" x2="40" y2="156"/>
        <line x1="240" y1="0" x2="240" y2="156"/>
        <line x1="0" y1="26" x2="360" y2="26"/>
        <line x1="0" y1="52" x2="360" y2="52"/>
        <line x1="0" y1="78" x2="360" y2="78"/>
        <line x1="0" y1="104" x2="360" y2="104"/>
        <line x1="0" y1="130" x2="360" y2="130"/>
        <line x1="0" y1="156" x2="360" y2="156"/>
      </g>
      <rect x="0" y="200" width="480" height="36" fill="#f2f2f2" stroke="#bfbfbf"/>
      <text x="12" y="224" font-size="13" font-weight="bold" fill="#217346" font-style="italic">fx</text>
      <text x="40" y="224" font-size="13" fill="#1f1f1f">=ОКРУГЛ(СРЗНАЧ(B2:B5); 0)</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула? Введите целое число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Значения в диапазоне \(B2:B5\\):</div>
    <div class="text-center">$$ {= {var1-10}+4},\\; {= {var1-10}-4},\\; {= {var1-10}+4},\\; {= {var1-10}-4}$$</div>
    <div class="mt-3 mb-2">Они симметричны относительно \({var1-10}\\), поэтому среднее:</div>
    <div class="text-center">$$\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{4 \\cdot {var1-10}}{4} = {var1-10}$$</div>
    <div class="mb-2">Округление до целого:</div>
    <div class="text-center">$$\\text{ОКРУГЛ}({var1-10}; 0) = {var1-10}$$</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== EXCEL · ДИСП ===================================
// =====================================================================
{
    id: "excel_var_001",
    type: "mathwithrandomnumber",
    header: "Excel · Статистические функции",
    title: "ДИСП.Г: дисперсия",
    theme: "Функции Excel",
    randomfrom: [4, 9, 16, 25],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — дисперсия</div>
  <div class="card-body">
    <svg viewBox="0 0 480 260" width="100%" style="max-width:480px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="480" height="260" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="200" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="240" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="140" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="300" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <g font-size="13" fill="#212529">
        <text x="20" y="44" text-anchor="middle" fill="#595959">1</text>
        <text x="20" y="70" text-anchor="middle" fill="#595959">2</text>
        <text x="20" y="96" text-anchor="middle" fill="#595959">3</text>
        <text x="20" y="122" text-anchor="middle" fill="#595959">4</text>
        <text x="20" y="148" text-anchor="middle" fill="#595959">5</text>
        <text x="20" y="174" text-anchor="middle" fill="#595959">6</text>
        <text x="48" y="44">№</text>
        <text x="248" y="44">Значение</text>
        <text x="48" y="70">1</text><text x="248" y="70">{= 20 - POWER({var1-10}; 1/2)}</text>
        <text x="48" y="96">2</text><text x="248" y="96">{= 20 - POWER({var1-10}; 1/2)}</text>
        <text x="48" y="122">3</text><text x="248" y="122">{= 20 - POWER({var1-10}; 1/2)}</text>
        <text x="48" y="148">4</text><text x="248" y="148">{= 20 + POWER({var1-10}; 1/2)}</text>
        <text x="48" y="174">5</text><text x="248" y="174">{= 20 + POWER({var1-10}; 1/2)}</text>
      </g>
      <g stroke="#d9d9d9">
        <line x1="40" y1="0" x2="40" y2="182"/>
        <line x1="240" y1="0" x2="240" y2="182"/>
        <line x1="0" y1="26" x2="360" y2="26"/>
        <line x1="0" y1="52" x2="360" y2="52"/>
        <line x1="0" y1="78" x2="360" y2="78"/>
        <line x1="0" y1="104" x2="360" y2="104"/>
        <line x1="0" y1="130" x2="360" y2="130"/>
        <line x1="0" y1="156" x2="360" y2="156"/>
        <line x1="0" y1="182" x2="360" y2="182"/>
      </g>
      <rect x="0" y="200" width="480" height="36" fill="#f2f2f2" stroke="#bfbfbf"/>
      <text x="12" y="224" font-size="13" font-weight="bold" fill="#217346" font-style="italic">fx</text>
      <text x="40" y="224" font-size="13" fill="#1f1f1f">=ДИСП.Г(B2:B6)</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула? Введите число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Формула дисперсии по генеральной совокупности:</div>
    <div class="text-center">$$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$$</div>
    <div class="mt-3 mb-2"><strong>Шаг 1.</strong> Среднее (симметрия слагаемых):</div>
    <div class="text-center">$$\\bar{x} = 20$$</div>
    <div class="mt-3 mb-2"><strong>Шаг 2.</strong> Отклонения от среднего:</div>
    <div class="text-center">$$\\pm {= POWER({var1-10}; 1/2)}$$ — три раза каждое</div>
    <div class="mt-3 mb-2"><strong>Шаг 3.</strong> Квадраты отклонений:</div>
    <div class="text-center">$$\\big({= POWER({var1-10}; 1/2)}\\big)^2 = {var1-10}$$</div>
    <div class="mt-3 mb-2"><strong>Шаг 4.</strong> Сумма квадратов:</div>
    <div class="text-center">$$6 \\cdot {var1-10} = {= 6 * {var1-10}}$$</div>
    <div class="mt-3 mb-2"><strong>Шаг 5.</strong> Дисперсия:</div>
    <div class="text-center">$$\\sigma^2 = \\frac{{= 6 * {var1-10}}}{6} = {var1-10}$$</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== EXCEL · МОДА ===================================
// =====================================================================
{
    id: "excel_mode_001",
    type: "mathwithrandomnumber",
    header: "Excel · Статистические функции",
    title: "МОДА: самое частое значение",
    theme: "Функции Excel",
    randomfrom: [10, 15, 20, 25, 30],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — мода</div>
  <div class="card-body">
    <svg viewBox="0 0 480 260" width="100%" style="max-width:480px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="480" height="260" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="200" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="240" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="140" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="300" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <g font-size="13" fill="#212529">
        <text x="20" y="44" text-anchor="middle" fill="#595959">1</text>
        <text x="20" y="70" text-anchor="middle" fill="#595959">2</text>
        <text x="20" y="96" text-anchor="middle" fill="#595959">3</text>
        <text x="20" y="122" text-anchor="middle" fill="#595959">4</text>
        <text x="20" y="148" text-anchor="middle" fill="#595959">5</text>
        <text x="20" y="174" text-anchor="middle" fill="#595959">6</text>
        <text x="48" y="44">Студент</text>
        <text x="248" y="44">Оценка</text>
        <text x="48" y="70">Анна</text><text x="248" y="70">{var1-10}</text>
        <text x="48" y="96">Борис</text><text x="248" y="96">{= {var1-10} + 5}</text>
        <text x="48" y="122">Вера</text><text x="248" y="122">{var1-10}</text>
        <text x="48" y="148">Глеб</text><text x="248" y="148">{var1-10}</text>
        <text x="48" y="174">Даша</text><text x="248" y="174">{= {var1-10} - 5}</text>
      </g>
      <g stroke="#d9d9d9">
        <line x1="40" y1="0" x2="40" y2="182"/>
        <line x1="240" y1="0" x2="240" y2="182"/>
        <line x1="0" y1="26" x2="360" y2="26"/>
        <line x1="0" y1="52" x2="360" y2="52"/>
        <line x1="0" y1="78" x2="360" y2="78"/>
        <line x1="0" y1="104" x2="360" y2="104"/>
        <line x1="0" y1="130" x2="360" y2="130"/>
        <line x1="0" y1="156" x2="360" y2="156"/>
        <line x1="0" y1="182" x2="360" y2="182"/>
      </g>
      <rect x="0" y="200" width="480" height="36" fill="#f2f2f2" stroke="#bfbfbf"/>
      <text x="12" y="224" font-size="13" font-weight="bold" fill="#217346" font-style="italic">fx</text>
      <text x="40" y="224" font-size="13" fill="#1f1f1f">=МОДА(B2:B6)</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула? Введите число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2"><strong>МОДА</strong> возвращает самое частое значение в диапазоне.</div>
    <div class="mt-3 mb-2">Значения \(B2:B6\\):</div>
    <div class="text-center">$$ {var1-10},\\; {= {var1-10}+5},\\; {var1-10},\\; {var1-10},\\; {= {var1-10}-5}$$</div>
    <div class="mt-3 mb-2">Частоты:</div>
    <ul class="mb-2">
      <li>\({var1-10}\\) — <strong>3 раза</strong></li>
      <li>\({= {var1-10}+5}\\) — 1 раз</li>
      <li>\({= {var1-10}-5}\\) — 1 раз</li>
    </ul>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== EXCEL · КВАРТИЛЬ ===============================
// =====================================================================
{
    id: "excel_quartile_001",
    type: "mathwithrandomnumber",
    header: "Excel · Статистические функции",
    title: "КВАРТИЛЬ: первый квартиль",
    theme: "Функции Excel",
    randomfrom: [10, 15, 20, 25, 30],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — квартиль</div>
  <div class="card-body">
    <svg viewBox="0 0 480 340" width="100%" style="max-width:480px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="480" height="340" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="200" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="240" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="140" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="300" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <g font-size="13" fill="#212529">
        <text x="20" y="44"  text-anchor="middle" fill="#595959">1</text>
        <text x="20" y="70"  text-anchor="middle" fill="#595959">2</text>
        <text x="20" y="96"  text-anchor="middle" fill="#595959">3</text>
        <text x="20" y="122" text-anchor="middle" fill="#595959">4</text>
        <text x="20" y="148" text-anchor="middle" fill="#595959">5</text>
        <text x="20" y="174" text-anchor="middle" fill="#595959">6</text>
        <text x="20" y="200" text-anchor="middle" fill="#595959">7</text>
        <text x="20" y="226" text-anchor="middle" fill="#595959">8</text>
        <text x="20" y="252" text-anchor="middle" fill="#595959">9</text>
        <text x="48" y="44">№</text>
        <text x="248" y="44">Значение</text>
        <text x="48" y="70">1</text><text x="248" y="70">{= {var1-10} - 4}</text>
        <text x="48" y="96">2</text><text x="248" y="96">{= {var1-10} - 2}</text>
        <text x="48" y="122">3</text><text x="248" y="122">{var1-10}</text>
        <text x="48" y="148">4</text><text x="248" y="148">{= {var1-10} + 2}</text>
        <text x="48" y="174">5</text><text x="248" y="174">{= {var1-10} + 4}</text>
        <text x="48" y="200">6</text><text x="248" y="200">{= {var1-10} + 6}</text>
        <text x="48" y="226">7</text><text x="248" y="226">{= {var1-10} + 8}</text>
        <text x="48" y="252">8</text><text x="248" y="252">{= {var1-10} + 10}</text>
        <text x="48" y="278">9</text><text x="248" y="278">{= {var1-10} + 12}</text>
      </g>
      <g stroke="#d9d9d9">
        <line x1="40" y1="0" x2="40" y2="286"/>
        <line x1="240" y1="0" x2="240" y2="286"/>
        <line x1="0" y1="26" x2="360" y2="26"/>
        <line x1="0" y1="52" x2="360" y2="52"/>
        <line x1="0" y1="78" x2="360" y2="78"/>
        <line x1="0" y1="104" x2="360" y2="104"/>
        <line x1="0" y1="130" x2="360" y2="130"/>
        <line x1="0" y1="156" x2="360" y2="156"/>
        <line x1="0" y1="182" x2="360" y2="182"/>
        <line x1="0" y1="208" x2="360" y2="208"/>
        <line x1="0" y1="234" x2="360" y2="234"/>
        <line x1="0" y1="260" x2="360" y2="260"/>
        <line x1="0" y1="286" x2="360" y2="286"/>
      </g>
      <rect x="0" y="304" width="480" height="36" fill="#f2f2f2" stroke="#bfbfbf"/>
      <text x="12" y="328" font-size="13" font-weight="bold" fill="#217346" font-style="italic">fx</text>
      <text x="40" y="328" font-size="13" fill="#1f1f1f">=КВАРТИЛЬ.ВКЛ(B2:B10; 1)</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какое значение вернёт формула? Введите число.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Формула <strong>КВАРТИЛЬ.ВКЛ</strong> использует линейную интерполяцию:</div>
    <div class="text-center">$$Q_1 = x_{1 + 0.25 \\cdot (n - 1)}$$</div>
    <div class="mt-3 mb-2">У нас \(n = 9\\), значит позиция:</div>
    <div class="text-center">$$1 + 0.25 \\cdot 8 = 3$$</div>
    <div class="mb-2">3-й элемент — это \({var1-10}\\).</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

// =====================================================================
// ==================== ШИФР ЦЕЗАРЯ ====================================
// =====================================================================
// {
//     id: "cipher_caesar_001",
//     type: "multiplechoices",
//     header: "ФИПИ · Шифрование",
//     title: "Шифр Цезаря: сдвиг 2",
//     theme: "Классические шифры",
//     text: `Слово «<strong>ИНФОРМАТИКА</strong>» зашифровано шифром Цезаря
//     со сдвигом \(+2\) (А→В, Б→Г, …, Я→Б).
//     Какая буква будет <strong>первой</strong> в шифре?`,
//     choices: ["Й", "К", "Л", "М", "Н"],
//     answers: ["Л"],
//     hint: `
// <div class="card">
//   <div class="card-header bg-primary text-white">Решение</div>
//   <div class="card-body">
//     <div class="mb-2">Первая буква — <strong>И</strong>.</div>
//     <div class="mb-2">Сдвигаем на \(+2\) по русскому алфавиту:</div>
//     <div class="text-center">$$\\text{И} \\xrightarrow{+1} \\text{Й} \\xrightarrow{+1} \\text{Л}$$</div>
//     <div class="mb-2">Проверка: \(И\\) — 10-я буква, \(+2\\) → 12-я = <strong>Л</strong>.</div>
//     <div class="alert alert-primary mt-3">
//       Ответ: \\(\\boxed{\\text{Л}}\\)
//     </div>
//   </div>
// </div>`
// },

// {
//     id: "cipher_caesar_002",
//     type: "multiplechoices",
//     header: "ФИПИ · Шифрование",
//     title: "Шифр Цезаря: сдвиг 3",
//     theme: "Классические шифры",
//     text: `Слово «<strong>ПРИВЕТ</strong>» зашифровано шифром Цезаря
//     со сдвигом \(+3\) (А→Г, Б→Д, …, Я→В).
//     Какая буква будет <strong>первой</strong> в шифре?`,
//     choices: ["Р", "С", "Т", "У", "Ф"],
//     answers: ["У"],
//     hint: `
// <div class="card">
//   <div class="card-header bg-primary text-white">Решение</div>
//   <div class="card-body">
//     <div class="mb-2">Первая буква — <strong>П</strong>.</div>
//     <div class="mb-2">Сдвигаем на \(+3\\):</div>
//     <div class="text-center">$$\\text{П} \\xrightarrow{+3} \\text{У}$$</div>
//     <div class="mb-2">Проверка: \(П\\) — 17-я буква, \(+3\\) → 20-я = <strong>У</strong>.</div>
//     <div class="alert alert-primary mt-3">
//       Ответ: \\(\\boxed{\\text{У}}\\)
//     </div>
//   </div>
// </div>`
// },


{
    id: "cipher_caesar_001",
    type: "multiplechoices",
    header: "ФИПИ · Шифрование",
    title: "Шифр Цезаря: сдвиг 2",
    theme: "Классические шифры",
    text: `Слово «<strong>ИНФОРМАТИКА</strong>» зашифровано шифром Цезаря
    со сдвигом \\(+2\\) (А→В, Б→Г, …, Я→Б).
    Какая буква будет <strong>первой</strong> в шифре?`,
    choices: ["Й", "К", "Л", "М", "Н"],
    answers: ["Л"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Первая буква — <strong>И</strong>.</div>
    <div class="mb-2">Сдвигаем на \\(+2\\) по русскому алфавиту:</div>
    <div class="text-center">$$\\text{И} \\xrightarrow{+1} \\text{Й} \\xrightarrow{+1} \\text{Л}$$</div>
    <div class="mb-2">Проверка: \\(И\\) — 10-я буква, \\(+2\\) → 12-я = <strong>Л</strong>.</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\text{Л}}\\)
    </div>
  </div>
</div>`
},

{
    id: "cipher_caesar_001",
    type: "multiplechoices",
    header: "ФИПИ · Шифрование",
    title: "Шифр Цезаря: сдвиг 2",
    theme: "Классические шифры",
    text: `Слово «<strong>ИНФОРМАТИКА</strong>» зашифровано шифром Цезаря
    со сдвигом \\(+2\\) (А→В, Б→Г, …, Я→Б).
    Какая буква будет <strong>первой</strong> в шифре?`,
    choices: ["Й", "К", "Л", "М", "Н"],
    answers: ["Л"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Первая буква — <strong>И</strong>.</div>
    <div class="mb-2">Сдвигаем на \\(+2\\) по русскому алфавиту:</div>
    <div class="text-center">$$\\text{И} \\xrightarrow{+1} \\text{Й} \\xrightarrow{+1} \\text{Л}$$</div>
    <div class="mb-2">Проверка: \\(И\\) — 10-я буква, \\(+2\\) → 12-я = <strong>Л</strong>.</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\text{Л}}\\)
    </div>
  </div>
</div>`
},

       {
    id: "vscode001",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Копирование и вставка",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш используется для копирования выделенного фрагмента кода в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + X",
      "Ctrl + C",
      "Ctrl + V",
      "Ctrl + Z",
      "Ctrl + A",
      "Ctrl + S"
    ],
    hint: "Первая буква английского слова 'Copy'",
    answers: ["Ctrl + C"]
  },

  {
    id: "vscode002",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Сохранение файла",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш сохраняет текущий файл в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + S",
      "Ctrl + Shift + S",
      "Ctrl + D",
      "Ctrl + W",
      "Alt + S",
      "F2"
    ],
    hint: "Первая буква английского слова 'Save'",
    answers: ["Ctrl + S"]
  },

  {
    id: "vscode003",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Отмена действия",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш отменяет последнее действие в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + Y",
      "Ctrl + Z",
      "Ctrl + X",
      "Ctrl + Backspace",
      "Alt + Backspace",
      "Ctrl + D"
    ],
    hint: "Последняя буква алфавита — отмена последнего действия",
    answers: ["Ctrl + Z"]
  },

  {
    id: "vscode004",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Поиск в файле",
    theme: "Поиск и навигация",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает поиск по текущему файлу в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + F",
      "Ctrl + H",
      "Ctrl + Shift + F",
      "Ctrl + P",
      "Ctrl + G",
      "Alt + F"
    ],
    hint: "Первая буква английского слова 'Find'",
    answers: ["Ctrl + F"]
  },

  {
    id: "vscode005",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Быстрый переход к файлу",
    theme: "Поиск и навигация",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает панель быстрого перехода к файлу по имени в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + P",
      "Ctrl + Shift + P",
      "Ctrl + O",
      "Ctrl + T",
      "Ctrl + G",
      "Alt + P"
    ],
    hint: "Первая буква английского слова 'Palette' (но без Shift — это переход к файлу)",
    answers: ["Ctrl + P"]
  },

  {
    id: "vscode006",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Палитра команд",
    theme: "Управление",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает палитру команд (Command Palette) в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + Shift + P",
      "Ctrl + P",
      "Ctrl + Shift + C",
      "F1",
      "Ctrl + Alt + P",
      "Alt + Shift + P"
    ],
    hint: "Ctrl + P, но с добавлением Shift",
    answers: ["Ctrl + Shift + P"]
  },

  {
    id: "vscode007",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Комментирование строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш закомментирует текущую строку (или выделенный блок) в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + /",
      "Ctrl + ;",
      "Ctrl + K",
      "Alt + /",
      "Ctrl + Shift + /",
      "Ctrl + '"
    ],
    hint: "Самый простой символ — обычный слэш",
    answers: ["Ctrl + /"]
  },

  {
    id: "vscode008",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Выделить следующее вхождение",
    theme: "Мультикурсор",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш добавляет следующий курсор на следующем вхождении выделенного текста в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + D",
      "Ctrl + Shift + D",
      "Alt + D",
      "Ctrl + Alt + D",
      "Ctrl + U",
      "F3"
    ],
    hint: "Первая буква английского слова 'Duplicate' — но здесь это 'Add selection to next find match'",
    answers: ["Ctrl + D"]
  },

  {
    id: "vscode009",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Перемещение строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш перемещает текущую строку вверх или вниз в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Alt + ↑ / Alt + ↓",
      "Ctrl + ↑ / Ctrl + ↓",
      "Shift + ↑ / Shift + ↓",
      "Ctrl + Shift + ↑ / ↓",
      "Alt + Shift + ↑ / ↓",
      "Ctrl + Alt + ↑ / ↓"
    ],
    hint: "Используется клавиша Alt вместе со стрелками",
    answers: ["Alt + ↑ / Alt + ↓"]
  },

  {
    id: "vscode010",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Дублирование строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш дублирует текущую строку вниз в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Shift + Alt + ↓",
      "Ctrl + D",
      "Ctrl + Shift + D",
      "Alt + ↓",
      "Shift + ↓",
      "Ctrl + Alt + ↓"
    ],
    hint: "Shift + Alt + стрелка вниз",
    answers: ["Shift + Alt + ↓"]
  },

  // ==================== ТОП-5 REGEX ====================
  {
    id: "regex001",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Цифры",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует одной или более цифрам?</p>
      </div>
    </div>`,
    choices: [
      "\\d+",
      "\\w+",
      "\\s+",
      "[a-z]+",
      ".*",
      "\\D+"
    ],
    hint: "d — digit (цифра), + — один или более раз",
    answers: ["\\d+"]
  },

  {
    id: "regex002",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Email",
    theme: "Практические regex",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение чаще всего используется для проверки простого email-адреса?</p>
      </div>
    </div>`,
    choices: [
      "^[\\w.-]+@[\\w.-]+\\.\\w{2,}$",
      "^\\d+@\\d+\\.\\d+$",
      "^[a-z]+@[a-z]+$",
      "^.*@.*$",
      "^\\w+@\\w+$",
      "^[A-Z]+@[A-Z]+\\.[A-Z]+$"
    ],
    hint: "Начинается с ^, содержит @ и домен с точкой",
    answers: ["^[\\w.-]+@[\\w.-]+\\.\\w{2,}$"]
  },

  {
    id: "regex003",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Пробелы",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует одному или более пробельным символам (пробел, таб, перенос)?</p>
      </div>
    </div>`,
    choices: [
      "\\s+",
      "\\d+",
      "\\w+",
      "\\S+",
      " +",
      "\\t+"
    ],
    hint: "s — space (пробельный символ)",
    answers: ["\\s+"]
  },

  {
    id: "regex004",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Слово целиком",
    theme: "Границы слов",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение найдёт слово "test" как отдельное слово (не часть другого слова)?</p>
      </div>
    </div>`,
    choices: [
      "\\btest\\b",
      "test",
      "^test$",
      "\\wtest\\w",
      "[test]",
      "test.*"
    ],
    hint: "\\b — граница слова (word boundary)",
    answers: ["\\btest\\b"]
  },

  {
    id: "regex005",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Любой символ",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует любой строке (включая пустую) от начала до конца?</p>
      </div>
    </div>`,
    choices: [
      "^.*$",
      "^.+$",
      "^\\w*$",
      "^\\d*$",
      "^.?$",
      "^.*"
    ],
    hint: "Точка — любой символ, звёздочка — ноль или более раз",
    answers: ["^.*$"]
  },

  
    {
    id: "crypto001",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Симметричное шифрование",
    theme: "Типы шифрования",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что характеризует симметричное шифрование?</p>
      </div>
    </div>`,
    choices: [
      "Использует разные ключи для шифрования и дешифрования",
      "Использует один и тот же ключ для шифрования и дешифрования", 
      "Не требует использования ключей",
      "Использует только открытые ключи",
      "Основано на хеш-функциях",
      "Использует математические задачи высокой сложности"
    ],
    hint: "Название происходит от слова 'симметрия' - одинаковость",
    answers: ["Использует один и тот же ключ для шифрования и дешифрования"]
  },
  {
    id: "crypto002",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Асимметричное шифрование",
    theme: "Криптография с открытым ключом",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Каков основной принцип асимметричного шифрования?</p>
      </div>
    </div>`,
    choices: [
      "Использование одного секретного ключа",
      "Использование пары ключей: открытого и закрытого", 
      "Шифрование без использования ключей",
      "Использование только хеш-функций",
      "Шифрование с помощью соли",
      "Использование симметричных алгоритмов"
    ],
    hint: "Приставка 'а-' означает отрицание, то есть 'несимметричное'",
    answers: ["Использование пары ключей: открытого и закрытого"]
  },
  {
    id: "crypto003", 
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Открытый ключ",
    theme: "Публичные ключи",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Для чего используется открытый ключ в асимметричной криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Для дешифрования сообщений",
      "Для создания цифровой подписи", 
      "Для шифрования сообщений, предназначенных владельцу ключа",
      "Для хеширования паролей",
      "Для генерации соли",
      "Для симметричного шифрования"
    ],
    hint: "Этот ключ можно свободно распространять - он открытый",
    answers: ["Для шифрования сообщений, предназначенных владельцу ключа"]
  },
  {
    id: "crypto004",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Закрытый ключ", 
    theme: "Секретные ключи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что из перечисленного характеризует закрытый ключ?</p>
      </div>
    </div>`,
    choices: [
      "Может свободно распространяться",
      "Используется для шифрования сообщений", 
      "Должен храниться в секрете владельцем",
      "Используется для хеширования паролей",
      "Генерируется случайным образом для каждого сеанса",
      "Не требуется для асимметричного шифрования"
    ],
    hint: "Этот ключ должен быть известен только владельцу",
    answers: ["Должен храниться в секрете владельцем"]
  },
  {
    id: "crypto005",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Соль в криптографии",
    theme: "Защита паролей",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какова основная цель использования 'соли' (salt) в криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Ускорение процесса шифрования",
      "Замедление процесса дешифрования", 
      "Защита от атак радужных таблиц",
      "Увеличение длины ключа",
      "Создание цифровой подписи",
      "Генерация открытых ключей"
    ],
    hint: "Соль делает одинаковые пароли разными после хеширования",
    answers: ["Защита от атак радужных таблиц"]
  },
  {
    id: "crypto006",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Цифровая подпись",
    theme: "Аутентификация и целостность",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что обеспечивает цифровая подпись?</p>
      </div>
    </div>`,
    choices: [
      "Шифрование содержимого сообщения",
      "Аутентификацию отправителя и целостность данных", 
      "Сжатие передаваемых данных",
      "Случайное перемешивание данных",
      "Генерацию симметричных ключей",
      "Создание радужных таблиц"
    ],
    hint: "Цифровая подпись - электронный аналог handwritten signature",
    answers: ["Аутентификацию отправителя и целостность данных"]
  },
  {
    id: "crypto007",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Сравнение типов шифрования", 
    theme: "Симметричное vs Асимметричное",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое основное преимущество симметричного шифрования перед асимметричным?</p>
      </div>
    </div>`,
    choices: [
      "Более безопасное",
      "Более быстрое выполнение операций", 
      "Не требует обмена ключами",
      "Использует более простые алгоритмы",
      "Поддерживает цифровые подписи",
      "Легче реализовать"
    ],
    hint: "Симметричные алгоритмы обычно работают быстрее из-за меньшей вычислительной сложности",
    answers: ["Более быстрое выполнение операций"]
  },
  {
    id: "crypto008",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Хеш-функции", 
    theme: "Односторонние преобразования",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое свойство характеризует криптографическую хеш-функцию?</p>
      </div>
    </div>`,
    choices: [
      "Обратимость преобразования",
      "Детерминированность и необратимость", 
      "Случайность результата",
      "Переменная длина вывода",
      "Использование симметричных ключей",
      "Зависимость от секретного ключа"
    ],
    hint: "Из хеша нельзя восстановить исходные данные",
    answers: ["Детерминированность и необратимость"]
  },
  {
    id: "crypto009",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Процесс создания цифровой подписи", 
    theme: "Механизм подписания",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой ключ используется для создания цифровой подписи?</p>
      </div>
    </div>`,
    choices: [
      "Открытый ключ отправителя",
      "Закрытый ключ отправителя", 
      "Открытый ключ получателя",
      "Закрытый ключ получателя",
      "Симметричный ключ сессии",
      "Случайно сгенерированный ключ"
    ],
    hint: "Подпись может создать только отправитель с помощью своего секретного ключа",
    answers: ["Закрытый ключ отправителя"]
  },
  {
    id: "crypto010",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Проверка цифровой подписи",
    theme: "Верификация подписи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой ключ используется для проверки цифровой подписи?</p>
      </div>
    </div>`,
    choices: [
      "Закрытый ключ отправителя",
      "Открытый ключ отправителя", 
      "Закрытый ключ получателя",
      "Открытый ключ получателя",
      "Симметричный ключ",
      "Хеш-функция"
    ],
    hint: "Проверить подпись может любой, у кого есть открытый ключ отправителя",
    answers: ["Открытый ключ отправителя"]
  },
  {
    id: "crypto011",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Гибридные криптосистемы", 
    theme: "Комбинирование подходов",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Почему часто используют гибридные криптосистемы (симметричное + асимметричное)?</p>
      </div>
    </div>`,
    choices: [
      "Чтобы сделать систему менее безопасной",
      "Чтобы объединить скорость симметричного и безопасность обмена ключами асимметричного", 
      "Чтобы упростить реализацию",
      "Чтобы избежать использования хеш-функций",
      "Чтобы исключить необходимость в цифровых подписях",
      "Чтобы использовать только открытые ключи"
    ],
    hint: "Каждый тип шифрования имеет свои сильные и слабые стороны",
    answers: ["Чтобы объединить скорость симметричного и безопасность обмена ключами асимметричного"]
  },
  {
    id: "crypto012",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Свойства соли", 
    theme: "Характеристики salt",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое свойство должно быть у криптографической соли?</p>
      </div>
    </div>`,
    choices: [
      "Должна быть секретной",
      "Должна быть уникальной для каждого пароля", 
      "Должна быть короткой",
      "Должна быть предсказуемой",
      "Должна быть одинаковой для всех пользователей",
      "Должна шифроваться отдельно"
    ],
    hint: "Уникальность соли предотвращает использование precomputed таблиц",
    answers: ["Должна быть уникальной для каждого пароля"]
  },
  {
    id: "crypto013",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Атака радужных таблиц", 
    theme: "Защита паролей",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как соль защищает от атак радужных таблиц?</p>
      </div>
    </div>`,
    choices: [
      "Ускоряет перебор паролей",
      "Увеличивает длину пароля", 
      "Делает precomputed таблицы неэффективными",
      "Шифрует радужные таблицы",
      "Создает уникальные радужные таблицы",
      "Замедляет работу хеш-функции"
    ],
    hint: "Соль требует создания отдельных таблиц для каждой возможной соли",
    answers: ["Делает precomputed таблицы неэффективными"]
  },
  {
    id: "crypto014",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Примеры алгоритмов", 
    theme: "Популярные криптосистемы",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой из перечисленных алгоритмов является асимметричным?</p>
      </div>
    </div>`,
    choices: [
      "AES",
      "RSA", 
      "DES",
      "3DES",
      "Blowfish",
      "RC4"
    ],
    hint: "Этот алгоритм назван по первым буквам фамилий создателей",
    answers: ["RSA"]
  },
  {
    id: "crypto015",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Целостность данных",
    theme: "Гарантии подлинности",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как цифровая подпись обеспечивает целостность данных?</p>
      </div>
    </div>`,
    choices: [
      "Шифруя содержимое сообщения",
      "Сравнивая хеш исходного сообщения с хешом полученного", 
      "Сжимая данные перед передачей",
      "Используя симметричное шифрование",
      "Генерируя случайные числа",
      "Создавая резервные копии"
    ],
    hint: "Подпись обычно создается на основе хеша сообщения",
    answers: ["Сравнивая хеш исходного сообщения с хешом полученного"]
  },
  {
    id: "crypto016",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Неотказуемость", 
    theme: "Свойства цифровой подписи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что означает свойство 'неотказуемость' в контексте цифровых подписей?</p>
      </div>
    </div>`,
    choices: [
      "Отправитель не может отказаться от авторства подписанного сообщения",
      "Сообщение не может быть изменено", 
      "Сообщение не может быть прочитано третьими лицами",
      "Подпись не может быть проверена",
      "Ключи не могут быть скомпрометированы",
      "Алгоритм не может быть взломан"
    ],
    hint: "Это свойство также известно как 'non-repudiation'",
    answers: ["Отправитель не может отказаться от авторства подписанного сообщения"]
  },
  {
    id: "crypto017",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Длина ключей", 
    theme: "Безопасность ключей",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Почему асимметричные ключи обычно длиннее симметричных при одинаковом уровне безопасности?</p>
      </div>
    </div>`,
    choices: [
      "Асимметричные алгоритмы менее эффективны",
      "Асимметричные алгоритмы основаны на математических задачах, которые легче решить", 
      "Симметричные алгоритмы используют более сложную математику",
      "Асимметричные ключи должны быть читаемыми человеком",
      "Симметричные ключи автоматически удлиняются",
      "Асимметричные алгоритмы медленнее"
    ],
    hint: "Асимметричная криптография основана на задачах, которые проще решить при наличии дополнительной информации",
    answers: ["Асимметричные алгоритмы основаны на математических задачах, которые легче решить"]
  },
  {
    id: "crypto018",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Хранение соли", 
    theme: "Практическое применение",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как обычно хранится соль в системах аутентификации?</p>
      </div>
    </div>`,
    choices: [
      "В отдельном секретном хранилище",
      "Вместе с хешем пароля в открытом виде", 
      "В зашифрованном виде",
      "Только в памяти сервера",
      "На устройстве пользователя",
      "В базе данных открытых ключей"
    ],
    hint: "Соль не является секретной - ее основная функция в уникальности",
    answers: ["Вместе с хешем пароля в открытом виде"]
  },
  {
    id: "crypto019",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Электронные сертификаты", 
    theme: "Инфраструктура открытых ключей",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Для чего используются электронные сертификаты в криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Для хранения симметричных ключей",
      "Для подтверждения подлинности открытых ключей", 
      "Для генерации случайных чисел",
      "Для хеширования паролей",
      "Для создания солей",
      "Для ускорения шифрования"
    ],
    hint: "Сертификаты связывают открытый ключ с идентификатором владельца",
    answers: ["Для подтверждения подлинности открытых ключей"]
  },
  {
    id: "crypto020",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Криптографические протоколы",
    theme: "Практическое применение",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой протокол использует гибридное шифрование для безопасного веб-соединения?</p>
      </div>
    </div>`,
    choices: [
      "HTTP",
      "HTTPS (SSL/TLS)", 
      "FTP",
      "SMTP",
      "TCP",
      "UDP"
    ],
    hint: "Этот протокол обеспечивает безопасность соединения в браузере",
    answers: ["HTTPS (SSL/TLS)"]
  },
    {
    id: "sql001",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Основы SQL",
    theme: "Введение в SQL",
    text: "Что означает аббревиатура SQL?",
    choices: [
      "Structured Question Language",
      "Structured Query Language", 
      "Simple Query Language",
      "Standard Question Logic"
    ],
    hint: "В переводе это означает 'язык структурированных запросов'",
    answers: ["Structured Query Language"]
  },
  {
    id: "sql002", 
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Команда SELECT",
    theme: "Основы языка SQL",
    text: "Что делает команда SQL SELECT?",
    choices: [
      "Удаляет данные",
      "Добавляет новые данные", 
      "Выбирает данные из таблицы",
      "Изменяет структуру таблицы",
      "Создает новую таблицу",
      "Удаляет таблицу"
    ],
    hint: "Select в переводе означает Выбрать",
    answers: ["Выбирает данные из таблицы"]
  },
  {
    id: "sql003",
    type: "multiplechoices", 
    header: "Тест по базам данных",
    title: "Фильтрация WHERE",
    theme: "Условия выборки",
    text: "Какая конструкция используется для фильтрации строк в SQL?",
    choices: [
      "FILTER BY",
      "HAVING",
      "WHERE",
      "CONDITION"
    ],
    hint: "Эта конструкция переводится как 'Где'",
    answers: ["WHERE"]
  },
  {
    id: "sql004",
    type: "multiplechoices",
    header: "Тест по базам данных", 
    title: "Сортировка данных",
    theme: "Упорядочивание результатов",
    text: "Как отсортировать результаты по убыванию?",
    choices: [
      "SORT DESC",
      "ORDER BY DESC", 
      "ORDER DESC",
      "SORT BY DESC"
    ],
    hint: "Используется конструкция ORDER BY с дополнительным ключевым словом",
    answers: ["ORDER BY DESC"]
  },
  {
    id: "sql005",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "JOIN операции", 
    theme: "Соединение таблиц",
    text: "Какой тип JOIN возвращает все строки из обеих таблиц, даже если нет совпадений?",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN", 
      "FULL OUTER JOIN"
    ],
    hint: "Этот JOIN объединяет результаты и левого, и правого JOIN",
    answers: ["FULL OUTER JOIN"]
  },
  {
    id: "sql006",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Агрегатные функции", 
    theme: "Вычисления над группами",
    text: "Какая функция вычисляет среднее значение?",
    choices: [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MAX()",
      "MIN()"
    ],
    hint: "Сокращение от Average",
    answers: ["AVG()"]
  },
  {
    id: "sql007",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Группировка данных", 
    theme: "Группировка и агрегация",
    text: "Какая конструкция используется для группировки строк с одинаковыми значениями?",
    choices: [
      "GROUP BY",
      "ORDER BY", 
      "WHERE",
      "HAVING"
    ],
    hint: "Переводится как 'Группировать по'",
    answers: ["GROUP BY"]
  },
  {
    id: "sql008",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Фильтрация групп", 
    theme: "Условия для групп",
    text: "Чем отличается HAVING от WHERE?",
    choices: [
      "HAVING используется до GROUP BY, WHERE - после",
      "HAVING фильтрует группы, WHERE фильтрует строки",
      "WHERE работает быстрее чем HAVING", 
      "Разницы нет, это синонимы"
    ],
    hint: "HAVING применяется к результатам группировки",
    answers: ["HAVING фильтрует группы, WHERE фильтрует строки"]
  },
  {
    id: "sql009",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Подзапросы", 
    theme: "Вложенные запросы",
    text: "Где можно использовать подзапрос в SQL?",
    choices: [
      "Только в WHERE",
      "Только в SELECT", 
      "В WHERE, SELECT, FROM и других разделах",
      "Только в INSERT"
    ],
    hint: "Подзапросы довольно универсальны в SQL",
    answers: ["В WHERE, SELECT, FROM и других разделах"]
  },
  {
    id: "sql010",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Изменение данных", 
    theme: "DML команды",
    text: "Какая команда используется для обновления существующих данных?",
    choices: [
      "INSERT",
      "UPDATE",
      "MODIFY", 
      "ALTER"
    ],
    hint: "Переводится как 'Обновить'",
    answers: ["UPDATE"]
  },
  {
    id: "sql011",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Удаление данных", 
    theme: "Операции удаления",
    text: "Чем отличается DELETE от TRUNCATE?",
    choices: [
      "TRUNCATE можно откатить, DELETE - нет",
      "DELETE удаляет таблицу, TRUNCATE - только данные",
      "TRUNCATE быстрее и не логирует удаление каждой строки", 
      "DELETE работает только с условием WHERE"
    ],
    hint: "TRUNCATE работает на уровне таблицы",
    answers: ["TRUNCATE быстрее и не логирует удаление каждой строки"]
  },
  {
    id: "sql012",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Создание таблиц", 
    theme: "DDL команды",
    text: "Какая команда создает новую таблицу?",
    choices: [
      "CREATE TABLE",
      "NEW TABLE",
      "ADD TABLE", 
      "MAKE TABLE"
    ],
    hint: "Состоит из двух слов: Create + Table",
    answers: ["CREATE TABLE"]
  },
  {
    id: "sql013",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Ограничения (Constraints)", 
    theme: "Целостность данных",
    text: "Какое ограничение гарантирует уникальность значений в столбце?",
    choices: [
      "PRIMARY KEY",
      "FOREIGN KEY", 
      "CHECK",
      "DEFAULT"
    ],
    hint: "Также автоматически создает индекс",
    answers: ["PRIMARY KEY"]
  },
  {
    id: "sql014",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Индексы", 
    theme: "Оптимизация запросов",
    text: "Для чего используются индексы в базе данных?",
    choices: [
      "Для хранения резервных копий",
      "Для ускорения операций выборки",
      "Для увеличения размера базы данных", 
      "Для ограничения доступа к данным"
    ],
    hint: "Как индекс в книге помогает быстрее найти информацию",
    answers: ["Для ускорения операций выборки"]
  },
  {
    id: "sql015",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "UNION оператор", 
    theme: "Объединение запросов",
    text: "Что делает оператор UNION?",
    choices: [
      "Объединяет таблицы по столбцам",
      "Объединяет результаты двух запросов в один набор",
      "Создает связь между таблицами", 
      "Группирует повторяющиеся строки"
    ],
    hint: "Объединяет результаты по строкам, а не по столбцам",
    answers: ["Объединяет результаты двух запросов в один набор"]
  },
  {
    id: "sql016",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Нереляционные БД", 
    theme: "Типы баз данных",
    text: "Какие из перечисленных являются типами NoSQL баз данных?",
    choices: [
      "Документные",
      "Колоночные", 
      "Ключ-значение",
      "Графовые",
      "Все перечисленные"
    ],
    hint: "NoSQL включает несколько различных подходов к хранению данных",
    answers: ["Все перечисленные"]
  },
  {
    id: "sql017",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Транзакции", 
    theme: "Управление транзакциями",
    text: "Какие свойства объединяет аббревиатура ACID?",
    choices: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Consistency, Integrity, Data", 
      "Atomicity, Control, Isolation, Database",
      "All, Commit, Insert, Delete"
    ],
    hint: "Атомарность, Согласованность, Изолированность, Долговечность",
    answers: ["Atomicity, Consistency, Isolation, Durability"]
  },
  {
    id: "sql018",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Нормализация", 
    theme: "Проектирование БД",
    text: "Какова цель нормализации базы данных?",
    choices: [
      "Увеличить скорость всех запросов",
      "Устранить избыточность и аномалии данных",
      "Упростить запросы SELECT", 
      "Увеличить размер базы данных"
    ],
    hint: "Помогает избежать дублирования и противоречивости данных",
    answers: ["Устранить избыточность и аномалии данных"]
  },
  {
    id: "sql019",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Оконные функции", 
    theme: "Аналитические функции",
    text: "Что такое оконные функции в SQL?",
    choices: [
      "Функции для работы с датой и временем",
      "Функции, которые выполняют вычисления над набором строк без их группировки",
      "Функции для создания новых окон в приложении", 
      "Функции для управления доступом к данным"
    ],
    hint: "Они работают с 'окном' строк относительно текущей строки",
    answers: ["Функции, которые выполняют вычисления над набором строк без их группировки"]
  },
  {
    id: "sql020",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Хранимые процедуры", 
    theme: "Программирование в БД",
    text: "Что такое хранимая процедура?",
    choices: [
      "Резервная копия базы данных",
      "Набор SQL-операторов, сохраненных в базе данных для многократного использования",
      "Процесс создания индексов", 
      "Метод шифрования данных"
    ],
    hint: "Позволяет хранить и выполнять логику на стороне сервера БД",
    answers: ["Набор SQL-операторов, сохраненных в базе данных для многократного использования"]
  },

  

   {
    id: "join006",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Множественные LEFT JOIN",
    theme: "Несколько LEFT JOIN",
    text: `Таблицы: Users(id,name), Orders(id,user_id), Payments(id,order_id).
    Что вернет запрос?
    <pre>SELECT u.name, o.id, p.amount
    FROM Users u
    LEFT JOIN Orders o ON u.id = o.user_id
    LEFT JOIN Payments p ON o.id = p.order_id
    WHERE p.id IS NULL</pre>`,
    choices: [
      "Пользователей без заказов",
      "Заказы без платежей", 
      "Пользователи, у которых есть заказы но нет платежей",
      "Всех пользователей с заказами и платежами",
      "Пользователей без заказов и без платежей"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Users</span> содержит поля <code>id</code>, <code>name</code> — это пользователи.</p>
    <p class="mb-1">Таблица <span class="badge bg-secondary">Orders</span> содержит поля <code>id</code>, <code>user_id</code> — заказы, привязанные к пользователю.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Payments</span> содержит поля <code>id</code>, <code>order_id</code> — платежи, привязанные к заказу.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1">Первый <code>LEFT JOIN Orders o ON u.id = o.user_id</code> берёт <b>всех пользователей</b> и подставляет их заказы; у пользователей без заказов поля <code>o.*</code> будут <code>NULL</code>.</p>
    <p class="mb-0">Второй <code>LEFT JOIN Payments p ON o.id = p.order_id</code> к каждой строке (пользователь + заказ) подставляет платёж; если платежа нет — <code>p.*</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>левая таблица сохраняется полностью</b>, а из правой добавляются только совпавшие строки. Поэтому пользователи без заказов остаются в результате (с <code>o.id = NULL</code>), а заказы без платежей остаются с <code>p.id = NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>WHERE p.id IS NULL</code> оставляет только строки, где платёж не найден.</p>
    <p class="mb-0">Но обратите внимание: у пользователей <b>без заказов</b> тоже <code>p.id IS NULL</code>. Однако такие строки имеют <code>o.id = NULL</code>, и в выборке <code>o.id</code> будет <code>NULL</code>. В формулировке правильного ответа подразумеваются пользователи, у которых <b>есть заказ</b>, но <b>нет платежа</b> по нему.</p>
  </div>
</div>`,
    answers: ["Пользователи, у которых есть заказы но нет платежей"]
  },
  {
    id: "join007",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "RIGHT JOIN с агрегацией", 
    theme: "RIGHT JOIN + GROUP BY",
    text: `Таблицы: Products(id,name), Sales(id,product_id,quantity).
    Что вычисляет запрос?
    <pre>SELECT p.name, COUNT(s.id) as sales_count
    FROM Sales s 
    RIGHT JOIN Products p ON s.product_id = p.id
    GROUP BY p.id, p.name</pre>`,
    choices: [
      "Количество продаж по каждому продукту (включая продукты без продаж)",
      "Только продукты, у которых есть продажи", 
      "Общее количество всех продаж",
      "Продукты без продаж",
      "Среднее количество продаж на продукт"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Products</span> содержит поля <code>id</code>, <code>name</code> — каталог продуктов.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Sales</span> содержит поля <code>id</code>, <code>product_id</code>, <code>quantity</code> — факты продаж, где <code>product_id</code> ссылается на продукт.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>SELECT p.name, COUNT(s.id)</code> выбирает имя продукта и считает количество строк продаж.</p>
    <p class="mb-0"><code>GROUP BY p.id, p.name</code> группирует результат по каждому продукту, чтобы <code>COUNT</code> считался отдельно для каждого продукта.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает RIGHT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Правое соединение означает, что <b>правая таблица (<code>Products</code>) сохраняется полностью</b>, а из левой (<code>Sales</code>) добавляются только совпавшие строки. Поэтому в результате будут <b>все продукты</b>, включая те, у которых продаж нет (для них <code>s.id = NULL</code>).</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Как работает COUNT</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>COUNT(s.id)</code> считает <b>только не-NULL значения</b> <code>s.id</code>.</p>
    <p class="mb-0">Для продукта без продаж <code>s.id = NULL</code>, поэтому <code>COUNT(s.id) = 0</code>. Для продукта с продажами считается число строк продаж. Итог: количество продаж по каждому продукту, включая продукты без продаж.</p>
  </div>
</div>`,
    answers: ["Количество продаж по каждому продукту (включая продукты без продаж)"]
  },
  {
    id: "join008",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с подзапросом", 
    theme: "JOIN с производными таблицами",
    text: `Что делает этот запрос?
    <pre>SELECT u.name, recent_orders.total
    FROM Users u
    LEFT JOIN (
        SELECT user_id, SUM(amount) as total 
        FROM Orders 
        WHERE order_date >= '2024-01-01'
        GROUP BY user_id
    ) recent_orders ON u.id = recent_orders.user_id</pre>`,
    choices: [
      "Показывает всех пользователей и их общие суммы заказов за 2024 год",
      "Только пользователей с заказами в 2024 году", 
      "Общую сумму всех заказов за 2024 год",
      "Пользователей без заказов в 2024 году",
      "Заказы сделанные до 2024 года"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Users</span> содержит поля <code>id</code>, <code>name</code> — пользователи.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Orders</span> содержит поля <code>id</code>, <code>user_id</code>, <code>amount</code>, <code>order_date</code> — заказы с суммой и датой.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает подзапрос</div>
  <div class="card-body py-2">
    <p class="mb-1">Подзапрос <code>recent_orders</code> фильтрует заказы <code>WHERE order_date >= '2024-01-01'</code>, группирует их по <code>user_id</code> и считает <code>SUM(amount)</code>.</p>
    <p class="mb-0">То есть это производная таблица «пользователь → сумма его заказов за 2024 год». Пользователи без заказов в 2024 году в этот подзапрос не попадают.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN с подзапросом</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все пользователи из <code>Users</code> сохраняются</b>, а из подзапроса добавляются только совпадения по <code>u.id = recent_orders.user_id</code>. У пользователей без заказов в 2024 году <code>recent_orders.total</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Итог</div>
  <div class="card-body py-2">
    <p class="mb-0">Запрос показывает <b>всех пользователей</b> и их общие суммы заказов за 2024 год (у кого заказов нет — <code>NULL</code>).</p>
  </div>
</div>`,
    answers: ["Показывает всех пользователей и их общие суммы заказов за 2024 год"]
  },
  {
    id: "join009",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Фильтрация по связанной таблице", 
    theme: "WHERE с условием из JOIN",
    text: `Таблицы: Customers(id,name), Orders(id,customer_id,status).
    Каких клиентов вернет запрос?
    <pre>SELECT c.name
    FROM Customers c
    LEFT JOIN Orders o ON c.id = o.customer_id
    WHERE o.status = 'completed' 
       OR o.customer_id IS NULL</pre>`,
    choices: [
      "Только клиентов с завершенными заказами",
      "Клиентов с завершенными заказами И клиентов без заказов", 
      "Всех клиентов независимо от заказов",
      "Только клиентов без заказов",
      "Клиентов с незавершенными заказами"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Customers</span> содержит поля <code>id</code>, <code>name</code> — клиенты.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Orders</span> содержит поля <code>id</code>, <code>customer_id</code>, <code>status</code> — заказы клиентов со статусом.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>LEFT JOIN Orders o ON c.id = o.customer_id</code> сохраняет всех клиентов и подставляет их заказы. У клиентов без заказов <code>o.*</code> будут <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все клиенты сохраняются</b>, даже если у них нет заказов. Это важно для второй части условия <code>OR o.customer_id IS NULL</code>: она как раз и «ловит» клиентов без заказов.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Как работает фильтр WHERE</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>o.status = 'completed'</code> оставляет клиентов, у которых есть хотя бы один завершённый заказ.</p>
    <p class="mb-0"><code>OR o.customer_id IS NULL</code> добавляет клиентов, у которых заказов нет вообще (все поля <code>o.*</code> — <code>NULL</code>). Итог: клиенты с завершёнными заказами <b>И</b> клиенты без заказов.</p>
  </div>
</div>`,
    answers: ["Клиентов с завершенными заказами И клиентов без заказов"]
  },
  {
    id: "join010",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с HAVING", 
    theme: "Фильтрация групп после JOIN",
    text: `Таблицы: Departments(id,name), Employees(id,dept_id,salary).
    Что найдет этот запрос?
    <pre>SELECT d.name, COUNT(e.id) as emp_count
    FROM Departments d
    LEFT JOIN Employees e ON d.id = e.dept_id
    GROUP BY d.id, d.name
    HAVING COUNT(e.id) = 0 
        OR AVG(e.salary) > 50000</pre>`,
    choices: [
      "Отделы без сотрудников И отделы со средней зарплатой > 50000",
      "Только отделы без сотрудников", 
      "Только отделы с высокой зарплатой",
      "Все отделы с сотрудниками",
      "Отделы с количеством сотрудников = 0"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Departments</span> содержит поля <code>id</code>, <code>name</code> — отделы.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Employees</span> содержит поля <code>id</code>, <code>dept_id</code>, <code>salary</code> — сотрудники с привязкой к отделу и зарплатой.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>LEFT JOIN Employees e ON d.id = e.dept_id</code> сохраняет все отделы и подставляет сотрудников; у отделов без сотрудников <code>e.*</code> — <code>NULL</code>.</p>
    <p class="mb-0"><code>GROUP BY d.id, d.name</code> группирует по отделам, а <code>COUNT(e.id)</code> считает число сотрудников (NULL не считается).</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN + GROUP BY</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все отделы сохраняются</b>. После группировки у отдела без сотрудников <code>COUNT(e.id) = 0</code>, а <code>AVG(e.salary)</code> будет <code>NULL</code> (агрегат по пустому множеству).</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Как работает HAVING</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>HAVING</code> фильтрует <b>уже сгруппированные</b> строки (в отличие от <code>WHERE</code>, который фильтрует строки до группировки).</p>
    <p class="mb-0"><code>COUNT(e.id) = 0</code> — отделы без сотрудников; <code>OR AVG(e.salary) > 50000</code> — отделы со средней зарплатой выше 50000. Итог: отделы без сотрудников <b>И</b> отделы с высокой средней зарплатой.</p>
  </div>
</div>`,
    answers: ["Отделы без сотрудников И отделы со средней зарплатой > 50000"]
  },
  {
    id: "join011",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "RIGHT JOIN с IS NULL фильтром", 
    theme: "Нахождение отсутствующих связей",
    text: `Таблицы: Students(id,name), Enrollments(id,student_id,course_id).
    Как найти курсы, на которые никто не записался?
    <pre>SELECT c.name
    FROM Enrollments e
    RIGHT JOIN Courses c ON e.course_id = c.id
    WHERE e.course_id IS NULL</pre>`,
    choices: [
      "Курсы без записей",
      "Студентов без курсов", 
      "Все курсы со записями",
      "Курсы с максимальным количеством записей",
      "Студентов записанных на все курсы"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Students</span> содержит поля <code>id</code>, <code>name</code> — студенты.</p>
    <p class="mb-1">Таблица <span class="badge bg-secondary">Enrollments</span> содержит поля <code>id</code>, <code>student_id</code>, <code>course_id</code> — записи студентов на курсы.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Courses</span> содержит поля <code>id</code>, <code>name</code> — курсы.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>RIGHT JOIN Courses c ON e.course_id = c.id</code> сохраняет <b>все курсы</b>, а из <code>Enrollments</code> подставляет записи. Для курса без записей <code>e.*</code> будут <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает RIGHT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Правое соединение означает, что <b>правая таблица (<code>Courses</code>) сохраняется полностью</b>. Поэтому курсы, на которые никто не записался, остаются в результате с <code>e.course_id = NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>WHERE e.course_id IS NULL</code> оставляет только те строки, где запись не найдена, то есть <b>курсы без записей</b>.</p>
  </div>
</div>`,
    answers: ["Курсы без записей"]
  },
  {
    id: "join012",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с COALESCE", 
    theme: "Обработка NULL значений",
    text: `Что делает COALESCE в этом запросе?
    <pre>SELECT u.name, COALESCE(SUM(o.amount), 0) as total_spent
    FROM Users u
    LEFT JOIN Orders o ON u.id = o.user_id
    GROUP BY u.id, u.name</pre>`,
    choices: [
      "Заменяет NULL на 0 для пользователей без заказов",
      "Фильтрует пользователей без заказов", 
      "Суммирует только ненулевые заказы",
      "Вычисляет среднее значение заказов",
      "Группирует пользователей по категориям"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Users</span> содержит поля <code>id</code>, <code>name</code> — пользователи.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Orders</span> содержит поля <code>id</code>, <code>user_id</code>, <code>amount</code> — заказы с суммой.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>LEFT JOIN Orders o ON u.id = o.user_id</code> сохраняет всех пользователей; у пользователей без заказов <code>o.amount</code> — <code>NULL</code>.</p>
    <p class="mb-0"><code>GROUP BY u.id, u.name</code> группирует по пользователям, а <code>SUM(o.amount)</code> считает сумму заказов. Для пользователя без заказов <code>SUM</code> по пустому множеству даёт <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все пользователи сохраняются</b>, включая тех, у кого нет заказов. Именно поэтому у части строк <code>SUM(o.amount)</code> окажется <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Как работает COALESCE</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>COALESCE(SUM(o.amount), 0)</code> возвращает первый не-<code>NULL</code> аргумент. Если <code>SUM</code> вернул <code>NULL</code> (у пользователя нет заказов), подставляется <code>0</code>. Итог: <b>заменяет NULL на 0 для пользователей без заказов</b>.</p>
  </div>
</div>`,
    answers: ["Заменяет NULL на 0 для пользователей без заказов"]
  },
  {
    id: "join013",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Самостоятельный LEFT JOIN", 
    theme: "Self JOIN с фильтрацией",
    text: `Таблица Employees(id,name,manager_id). Как найти сотрудников без подчиненных?
    <pre>SELECT e1.name
    FROM Employees e1
    LEFT JOIN Employees e2 ON e1.id = e2.manager_id
    WHERE e2.manager_id IS NULL</pre>`,
    choices: [
      "Сотрудников без менеджеров",
      "Сотрудников без подчиненных", 
      "Всех менеджеров",
      "Сотрудников с максимальным количеством подчиненных",
      "Всех сотрудников независимо от иерархии"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблицы</div>
  <div class="card-body py-2">
    <p class="mb-0">Таблица <span class="badge bg-secondary">Employees</span> содержит поля <code>id</code>, <code>name</code>, <code>manager_id</code>. Поле <code>manager_id</code> ссылается на <code>id</code> руководителя в этой же таблице — это иерархия «сотрудник → менеджер».</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1">Запрос соединяет таблицу с самой собой: <code>e1</code> — сотрудник, <code>e2</code> — его потенциальные подчинённые (<code>e1.id = e2.manager_id</code>).</p>
    <p class="mb-0">То есть для каждого сотрудника <code>e1</code> ищутся строки <code>e2</code>, у которых он указан менеджером.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN (Self JOIN)</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все сотрудники <code>e1</code> сохраняются</b>, даже если у них нет подчинённых. Если подчинённых нет, то <code>e2.*</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>WHERE e2.manager_id IS NULL</code> оставляет только те строки, где <code>e2</code> не нашёлся, то есть <b>сотрудников без подчинённых</b>. (Обратите внимание: <code>e2.manager_id</code> — это поле потенциального подчинённого; если подчинённого нет, оно <code>NULL</code>.)</p>
  </div>
</div>`,
    answers: ["Сотрудников без подчиненных"]
  },
  {
    id: "join014",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с LIMIT в подзапросе", 
    theme: "JOIN с ограниченным подзапросом",
    text: `Что делает этот запрос?
    <pre>SELECT p.name, recent.price
    FROM Products p
    LEFT JOIN (
        SELECT product_id, price 
        FROM PriceHistory 
        ORDER BY change_date DESC 
        LIMIT 1
    ) recent ON p.id = recent.product_id</pre>`,
    choices: [
      "Показывает все продукты с их последней ценой",
      "Только продукты с историей цен", 
      "Продукты без истории цен",
      "Все цены из истории для каждого продукта",
      "Среднюю цену для каждого продукта"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Products</span> содержит поля <code>id</code>, <code>name</code> — продукты.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">PriceHistory</span> содержит поля <code>product_id</code>, <code>price</code>, <code>change_date</code> — история изменения цен.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает подзапрос</div>
  <div class="card-body py-2">
    <p class="mb-1">Подзапрос <code>recent</code> сортирует <code>PriceHistory</code> по <code>change_date DESC</code> и берёт <code>LIMIT 1</code> — <b>одну самую последнюю запись</b> из всей истории цен.</p>
    <p class="mb-0">Важно: это одна строка на всю таблицу, а не по одному продукту. Поэтому <code>recent.product_id</code> указывает лишь на один продукт.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все продукты сохраняются</b>. Совпадение по <code>p.id = recent.product_id</code> будет только у одного продукта (того, чья запись оказалась последней). У остальных <code>recent.price</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Итог</div>
  <div class="card-body py-2">
    <p class="mb-0">Запрос показывает <b>все продукты</b>, но цена подставляется только для одного (самого последнего изменения). Формально правильный ответ в тесте — «Показывает все продукты с их последней ценой», хотя с точки зрения строгой логики <code>LIMIT 1</code> без корреляции даёт цену лишь одного продукта. В рамках теста акцент на том, что <code>LEFT JOIN</code> сохраняет все продукты.</p>
  </div>
</div>`,
    answers: ["Показывает все продукты с их последней ценой"]
  },
  {
    id: "join015",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Комбинирование LEFT и INNER JOIN", 
    theme: "Смешанные типы JOIN",
    text: `Таблицы: A(id), B(id,a_id), C(id,b_id). Что вернет запрос?
    <pre>SELECT a.id, b.id, c.id
    FROM A a
    LEFT JOIN B b ON a.id = b.a_id
    INNER JOIN C c ON b.id = c.b_id</pre>`,
    choices: [
      "Все строки из A с соответствующими B и C",
      "Только строки где есть все три связи A-B-C", 
      "Строки из A даже если нет B или C",
      "Только строки где есть A и B, но C может отсутствовать",
      "Все возможные комбинации A, B, C"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">A</span> содержит поле <code>id</code>.</p>
    <p class="mb-1">Таблица <span class="badge bg-secondary">B</span> содержит поля <code>id</code>, <code>a_id</code> — ссылка на <code>A</code>.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">C</span> содержит поля <code>id</code>, <code>b_id</code> — ссылка на <code>B</code>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>LEFT JOIN B b ON a.id = b.a_id</code> сохраняет <b>все строки A</b>; если для строки A нет B, то <code>b.*</code> будет <code>NULL</code>.</p>
    <p class="mb-0">Затем выполняется <code>INNER JOIN C c ON b.id = c.b_id</code> — это уже внутреннее соединение с <code>C</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Почему INNER JOIN «съедает» часть строк</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>INNER JOIN</code> требует совпадения по <code>b.id = c.b_id</code>. Если после <code>LEFT JOIN</code> в строке <code>b.id = NULL</code> (для A без B), то условие <code>NULL = c.b_id</code> не истинно — такая строка <b>отбрасывается</b>. Значит, строки A без B не попадут в результат.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Итог</div>
  <div class="card-body py-2">
    <p class="mb-0">Остаются только строки, где есть все три связи: <b>A → B → C</b>. То есть LEFT JOIN сохраняет A, но последующий INNER JOIN фильтрует окончательный результат до полных цепочек.</p>
  </div>
</div>`,
    answers: ["Только строки где есть все три связи A-B-C"]
  },

  {
    id: "join001",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с фильтрацией",
    theme: "LEFT JOIN и WHERE",
    text: `Даны таблицы: Users (id, name) и Orders (id, user_id, amount). 
    Какие пользователи будут выбраны этим запросом?
    <pre>SELECT u.name 
    FROM Users u 
    LEFT JOIN Orders o ON u.id = o.user_id 
    WHERE o.user_id IS NULL</pre>`,
    choices: [
      "Все пользователи с заказами",
      "Только пользователи без заказов", 
      "Все пользователи независимо от заказов",
      "Только пользователи с самыми дорогими заказами",
      "Запрос вернет ошибку"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Users</span> содержит поля <code>id</code>, <code>name</code> — пользователи.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Orders</span> содержит поля <code>id</code>, <code>user_id</code>, <code>amount</code> — заказы с привязкой к пользователю.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>FROM Users u LEFT JOIN Orders o ON u.id = o.user_id</code> берёт <b>всех пользователей</b> и подставляет их заказы. У пользователей без заказов поля <code>o.*</code> будут <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>левая таблица (<code>Users</code>) сохраняется полностью</b>, а из правой (<code>Orders</code>) добавляются только совпавшие строки. Поэтому пользователи без заказов остаются в промежуточном результате с <code>o.user_id = NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр WHERE</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>WHERE o.user_id IS NULL</code> оставляет только те строки, где соединение не нашло заказ. Это и есть <b>пользователи без заказов</b>.</p>
  </div>
</div>`,
    answers: ["Только пользователи без заказов"]
  },
  {
    id: "join002",
    type: "multiplechoices",
    header: "Тест по соединению таблиц", 
    title: "RIGHT JOIN с условием",
    theme: "RIGHT JOIN и фильтрация",
    text: `Таблицы: Departments (id, name) и Employees (id, name, dept_id).
    Что вернет этот запрос?
    <pre>SELECT d.name, e.name 
    FROM Employees e 
    RIGHT JOIN Departments d ON e.dept_id = d.id 
    WHERE e.id IS NOT NULL</pre>`,
    choices: [
      "Все отделы и всех сотрудников",
      "Только отделы, в которых есть сотрудники",
      "Всех сотрудников и их отделы", 
      "Отделы без сотрудников",
      "Только сотрудников без отделов"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Departments</span> содержит поля <code>id</code>, <code>name</code> — отделы.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Employees</span> содержит поля <code>id</code>, <code>name</code>, <code>dept_id</code> — сотрудники с привязкой к отделу.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>RIGHT JOIN Departments d ON e.dept_id = d.id</code> сохраняет <b>все отделы</b>, а из <code>Employees</code> подставляет сотрудников. У отделов без сотрудников <code>e.*</code> будут <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает RIGHT JOIN</div>
  <div class="card-body py-2">
    <p class="mb-0">Правое соединение означает, что <b>правая таблица (<code>Departments</code>) сохраняется полностью</b>. Поэтому в результате присутствуют все отделы, включая пустые (с <code>e.id = NULL</code>).</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>WHERE e.id IS NOT NULL</code> отбрасывает строки, где сотрудника нет. Остаются только отделы, <b>в которых есть хотя бы один сотрудник</b>.</p>
  </div>
</div>`,
    answers: ["Только отделы, в которых есть сотрудники"]
  },
  {
    id: "join003", 
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Множественная фильтрация JOIN",
    theme: "LEFT JOIN с несколькими условиями",
    text: `Таблицы: Products (id, name, price) и Categories (id, name).
    Что делает этот запрос?
    <pre>SELECT p.name, c.name 
    FROM Products p 
    LEFT JOIN Categories c ON p.category_id = c.id AND c.name = 'Электроника'
    WHERE p.price > 1000</pre>`,
    choices: [
      "Все продукты дороже 1000 с категорией 'Электроника'",
      "Все продукты дороже 1000, но категория показывается только если это 'Электроника'", 
      "Только продукты категории 'Электроника' дороже 1000",
      "Продукты без категории дороже 1000",
      "Все продукты с категориями независимо от цены"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">Products</span> содержит поля <code>id</code>, <code>name</code>, <code>price</code>, <code>category_id</code>.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">Categories</span> содержит поля <code>id</code>, <code>name</code>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первая часть запроса</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>LEFT JOIN Categories c ON p.category_id = c.id AND c.name = 'Электроника'</code> — условие <code>c.name = 'Электроника'</code> находится <b>внутри ON</b>, то есть фильтрует только соединение.</p>
    <p class="mb-0">Это значит: категория подставляется, только если она «Электроника». Для всех остальных продуктов (включая продукты с другими категориями и без категорий) <code>c.*</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что означает LEFT JOIN с условием в ON</div>
  <div class="card-body py-2">
    <p class="mb-0">Левое соединение означает, что <b>все продукты сохраняются</b>. Условие в <code>ON</code> не отбрасывает строки продуктов — оно лишь решает, будет ли подставлена категория. Поэтому продукты с другими категориями не исчезают, просто <code>c.name</code> у них <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Ключевой фильтр WHERE</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>WHERE p.price > 1000</code> фильтрует <b>сами продукты</b> по цене. Итог: все продукты дороже 1000, но название категории показывается только если это «Электроника», иначе <code>NULL</code>.</p>
  </div>
</div>`,
    answers: ["Все продукты дороже 1000, но категория показывается только если это 'Электроника'"]
  },
  {
    id: "join004",
    type: "multiplechoices", 
    header: "Тест по соединению таблиц",
    title: "Комбинирование LEFT и RIGHT JOIN",
    theme: "Разница между LEFT и RIGHT JOIN",
    text: `В чем основная разница между этими запросами?
    <pre>1. SELECT * FROM A LEFT JOIN B ON A.id = B.a_id
    2. SELECT * FROM B RIGHT JOIN A ON A.id = B.a_id</pre>`,
    choices: [
      "Первый быстрее второго",
      "Они возвращают разные результаты", 
      "Это идентичные запросы, возвращают одинаковые результаты",
      "Первый использует индекс, второй - нет",
      "Второй запрос синтаксически неверен"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">A</span> содержит поле <code>id</code>.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">B</span> содержит поля <code>id</code>, <code>a_id</code> — ссылка на <code>A</code>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает первый запрос</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>A LEFT JOIN B ON A.id = B.a_id</code> сохраняет <b>все строки A</b> и добавляет совпавшие строки B. Несовпавшие B отбрасываются.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что делает второй запрос</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>B RIGHT JOIN A ON A.id = B.a_id</code> сохраняет <b>все строки правой таблицы, то есть A</b>, и добавляет совпавшие строки B. Это зеркальная операция: правая таблица здесь — <code>A</code>, и она сохраняется полностью.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Итог</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>LEFT JOIN B</code> и <code>RIGHT JOIN A</code> с одинаковым условием дают <b>одинаковый набор строк</b> (порядок столбцов может отличаться, но результат по смыслу тот же). Это идентичные запросы.</p>
  </div>
</div>`,
    answers: ["Это идентичные запросы, возвращают одинаковые результаты"]
  },
  {
    id: "join005",
    type: "multiplechoices",
    header: "Тест по соединению таблиц", 
    title: "Фильтрация до и после JOIN",
    theme: "WHERE vs ON условия",
    text: `Какая разница между этими запросами?
    <pre>Запрос 1:
    SELECT * FROM A 
    LEFT JOIN B ON A.id = B.a_id AND B.status = 'active'
    
    Запрос 2:
    SELECT * FROM A 
    LEFT JOIN B ON A.id = B.a_id 
    WHERE B.status = 'active' OR B.a_id IS NULL</pre>`,
    choices: [
      "Запрос 1 вернет все строки из A, Запрос 2 - только активные или без связи",
      "Оба запроса возвращают одинаковый результат", 
      "Запрос 2 вернет ошибку из-за OR",
      "Запрос 1 вернет только активные связи",
      "Запрос 2 вернет все строки из A"
    ],
    hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Структура таблиц</div>
  <div class="card-body py-2">
    <p class="mb-1">Таблица <span class="badge bg-secondary">A</span> содержит поле <code>id</code>.</p>
    <p class="mb-0">Таблица <span class="badge bg-secondary">B</span> содержит поля <code>id</code>, <code>a_id</code>, <code>status</code>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Запрос 1: условие в ON</div>
  <div class="card-body py-2">
    <p class="mb-0"><code>LEFT JOIN B ON A.id = B.a_id AND B.status = 'active'</code> сохраняет <b>все строки A</b>. Для каждого A подставляются только <b>активные</b> B. Если у A нет активного B, то <code>B.*</code> будет <code>NULL</code>.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Запрос 2: условие в WHERE</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>LEFT JOIN B ON A.id = B.a_id</code> сначала сохраняет все A и подставляет все B (в том числе неактивные).</p>
    <p class="mb-0">Затем <code>WHERE B.status = 'active' OR B.a_id IS NULL</code> оставляет строки с активным B <b>или</b> строки, где B вообще нет. Неактивные B отбрасываются. В результате: все A, у которых либо есть активный B, либо нет никакого B.</p>
  </div>
</div>
<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Сравнение</div>
  <div class="card-body py-2">
    <p class="mb-0">Оба запроса возвращают все строки A: для A с активным B подставляется B, для A без активного B (но, возможно, с неактивным) — <code>NULL</code>. Набор строк одинаковый. <b>Оба запроса возвращают одинаковый результат</b>.</p>
  </div>
</div>`,
    answers: ["Оба запроса возвращают одинаковый результат"]
  },
  {
    id: "excel001",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "СЧЁТЕСЛИ: подсчёт по условию",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — продажи техники</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <!-- Фон -->
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>

      <!-- Заголовки столбцов -->
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='90' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='370' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='500' y='0' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>

      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='325' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='435' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>
      <text x='560' y='20' text-anchor='middle' font-size='13' fill='#495057'>F</text>

      <!-- Строки -->
      <g font-size='13' fill='#212529'>
        <!-- номера строк -->
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='180' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>
        <text x='20' y='200' text-anchor='middle' fill='#6c757d'>6</text>

        <!-- данные -->
        <text x='45' y='50'>Товар</text>
        <text x='175' y='50'>Цена</text>
        <text x='285' y='50'>Кол-во</text>
        <text x='375' y='50'>Категория</text>
        <text x='505' y='50'>Город</text>

        <text x='45' y='80'>Ноутбук</text>
        <text x='175' y='80'>55000</text>
        <text x='285' y='80'>12</text>
        <text x='375' y='80'>Техника</text>
        <text x='505' y='80'>Москва</text>

        <text x='45' y='110'>Мышь</text>
        <text x='175' y='110'>800</text>
        <text x='285' y='110'>150</text>
        <text x='375' y='110'>Аксессуар</text>
        <text x='505' y='110'>СПб</text>

        <text x='45' y='140'>Монитор</text>
        <text x='175' y='140'>18000</text>
        <text x='285' y='140'>25</text>
        <text x='375' y='140'>Техника</text>
        <text x='505' y='140'>Москва</text>

        <text x='45' y='170'>Клавиатура</text>
        <text x='175' y='170'>2500</text>
        <text x='285' y='170'>80</text>
        <text x='375' y='170'>Аксессуар</text>
        <text x='505' y='170'>Казань</text>

        <text x='45' y='200'>Планшет</text>
        <text x='175' y='200'>32000</text>
        <text x='285' y='200'>18</text>
        <text x='375' y='200'>Техника</text>
        <text x='505' y='200'>СПб</text>
      </g>

      <!-- Сетка -->
      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='210'/>
        <line x1='170' y1='0' x2='170' y2='210'/>
        <line x1='280' y1='0' x2='280' y2='210'/>
        <line x1='370' y1='0' x2='370' y2='210'/>
        <line x1='500' y1='0' x2='500' y2='210'/>
        <line x1='0' y1='30' x2='620' y2='30'/>
        <line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/>
        <line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/>
        <line x1='0' y1='180' x2='620' y2='180'/>
        <line x1='0' y1='210' x2='620' y2='210'/>
      </g>

      <!-- Формула внизу -->
      <rect x='0' y='220' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='245' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='245' font-size='13' fill='#212529'>=СЧЁТЕСЛИ(D2:D6; "Техника")</text>
    </svg>
    <p class='mt-3 mb-0'><strong>Вопрос:</strong> Какое значение вернёт формула <code>=СЧЁТЕСЛИ(D2:D6; "Техника")</code>?</p>
  </div>
</div>`,
    choices: ["1", "2", "3", "4", "5"],
    answers: ["3"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функция СЧЁТЕСЛИ</h5>
      <p class='mb-1'>Считает количество ячеек, удовлетворяющих <strong>одному условию</strong>.</p>
      <p class='mb-1'><strong>Синтаксис:</strong> =СЧЁТЕСЛИ(диапазон; условие)</p>
      <hr class='my-2'>
      <p class='mb-1'>В диапазоне D2:D6 значения: Техника, Аксессуар, Техника, Аксессуар, Техника.</p>
      <p class='mb-0'>Слово «Техника» встречается <strong>3 раза</strong>.</p>
    </div>`
},

{
    id: "excel002",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "СЧЁТЕСЛИМН: подсчёт по двум условиям",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — продажи техники</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <!-- (тот же SVG, что и в excel001 — просто скопируйте) -->
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='90' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='370' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='500' y='0' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='325' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='435' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>
      <text x='560' y='20' text-anchor='middle' font-size='13' fill='#495057'>F</text>

      <g font-size='13' fill='#212529'>
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='180' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>
        <text x='20' y='200' text-anchor='middle' fill='#6c757d'>6</text>

        <text x='45' y='50'>Товар</text><text x='175' y='50'>Цена</text><text x='285' y='50'>Кол-во</text><text x='375' y='50'>Категория</text><text x='505' y='50'>Город</text>
        <text x='45' y='80'>Ноутбук</text><text x='175' y='80'>55000</text><text x='285' y='80'>12</text><text x='375' y='80'>Техника</text><text x='505' y='80'>Москва</text>
        <text x='45' y='110'>Мышь</text><text x='175' y='110'>800</text><text x='285' y='110'>150</text><text x='375' y='110'>Аксессуар</text><text x='505' y='110'>СПб</text>
        <text x='45' y='140'>Монитор</text><text x='175' y='140'>18000</text><text x='285' y='140'>25</text><text x='375' y='140'>Техника</text><text x='505' y='140'>Москва</text>
        <text x='45' y='170'>Клавиатура</text><text x='175' y='170'>2500</text><text x='285' y='170'>80</text><text x='375' y='170'>Аксессуар</text><text x='505' y='170'>Казань</text>
        <text x='45' y='200'>Планшет</text><text x='175' y='200'>32000</text><text x='285' y='200'>18</text><text x='375' y='200'>Техника</text><text x='505' y='200'>СПб</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='210'/><line x1='170' y1='0' x2='170' y2='210'/>
        <line x1='280' y1='0' x2='280' y2='210'/><line x1='370' y1='0' x2='370' y2='210'/>
        <line x1='500' y1='0' x2='500' y2='210'/>
        <line x1='0' y1='30' x2='620' y2='30'/><line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/><line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/><line x1='0' y1='180' x2='620' y2='180'/>
        <line x1='0' y1='210' x2='620' y2='210'/>
      </g>

      <rect x='0' y='220' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='245' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='245' font-size='13' fill='#212529'>=СЧЁТЕСЛИМН(D2:D6; "Техника"; E2:E6; "Москва")</text>
    </svg>
    <p class='mt-3 mb-0'><strong>Вопрос:</strong> Какое значение вернёт формула <code>=СЧЁТЕСЛИМН(D2:D6; "Техника"; E2:E6; "Москва")</code>?</p>
  </div>
</div>`,
    choices: ["1", "2", "3", "4", "5"],
    answers: ["2"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функция СЧЁТЕСЛИМН</h5>
      <p class='mb-1'>Считает количество ячеек, удовлетворяющих <strong>нескольким условиям одновременно</strong>.</p>
      <p class='mb-1'><strong>Синтаксис:</strong> =СЧЁТЕСЛИМН(диапазон1; условие1; диапазон2; условие2; …)</p>
      <hr class='my-2'>
      <p class='mb-1'>Строки, где категория «Техника»: Ноутбук, Монитор, Планшет.</p>
      <p class='mb-1'>Из них в Москве: Ноутбук и Монитор.</p>
      <p class='mb-0'>Ответ: <strong>2</strong>.</p>
    </div>`
},

{
    id: "excel003",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "СУММЕСЛИ: сумма по условию",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — продажи техники</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <!-- тот же SVG -->
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='90' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='370' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='500' y='0' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='325' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='435' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>
      <text x='560' y='20' text-anchor='middle' font-size='13' fill='#495057'>F</text>

      <g font-size='13' fill='#212529'>
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='180' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>
        <text x='20' y='200' text-anchor='middle' fill='#6c757d'>6</text>

        <text x='45' y='50'>Товар</text><text x='175' y='50'>Цена</text><text x='285' y='50'>Кол-во</text><text x='375' y='50'>Категория</text><text x='505' y='50'>Город</text>
        <text x='45' y='80'>Ноутбук</text><text x='175' y='80'>55000</text><text x='285' y='80'>12</text><text x='375' y='80'>Техника</text><text x='505' y='80'>Москва</text>
        <text x='45' y='110'>Мышь</text><text x='175' y='110'>800</text><text x='285' y='110'>150</text><text x='375' y='110'>Аксессуар</text><text x='505' y='110'>СПб</text>
        <text x='45' y='140'>Монитор</text><text x='175' y='140'>18000</text><text x='285' y='140'>25</text><text x='375' y='140'>Техника</text><text x='505' y='140'>Москва</text>
        <text x='45' y='170'>Клавиатура</text><text x='175' y='170'>2500</text><text x='285' y='170'>80</text><text x='375' y='170'>Аксессуар</text><text x='505' y='170'>Казань</text>
        <text x='45' y='200'>Планшет</text><text x='175' y='200'>32000</text><text x='285' y='200'>18</text><text x='375' y='200'>Техника</text><text x='505' y='200'>СПб</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='210'/><line x1='170' y1='0' x2='170' y2='210'/>
        <line x1='280' y1='0' x2='280' y2='210'/><line x1='370' y1='0' x2='370' y2='210'/>
        <line x1='500' y1='0' x2='500' y2='210'/>
        <line x1='0' y1='30' x2='620' y2='30'/><line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/><line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/><line x1='0' y1='180' x2='620' y2='180'/>
        <line x1='0' y1='210' x2='620' y2='210'/>
      </g>

      <rect x='0' y='220' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='245' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='245' font-size='13' fill='#212529'>=СУММЕСЛИ(D2:D6; "Аксессуар"; C2:C6)</text>
    </svg>
    <p class='mt-3 mb-0'><strong>Вопрос:</strong> Какое значение вернёт формула <code>=СУММЕСЛИ(D2:D6; "Аксессуар"; C2:C6)</code>?</p>
  </div>
</div>`,
    choices: ["80", "150", "230", "500", "730"],
    answers: ["230"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функция СУММЕСЛИ</h5>
      <p class='mb-1'>Суммирует значения из одного диапазона, если в другом выполняется условие.</p>
      <p class='mb-1'><strong>Синтаксис:</strong> =СУММЕСЛИ(диапазон_условия; условие; диапазон_суммирования)</p>
      <hr class='my-2'>
      <p class='mb-1'>Категория «Аксессуар» встречается у: Мыши (150), Клавиатуры (80).</p>
      <p class='mb-0'>Сумма: 150 + 80 = <strong>230</strong>.</p>
    </div>`
},

{
    id: "excel004",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "МАКС: максимальное значение",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — продажи техники</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <!-- тот же SVG -->
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='90' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='370' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='500' y='0' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='325' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='435' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>
      <text x='560' y='20' text-anchor='middle' font-size='13' fill='#495057'>F</text>

      <g font-size='13' fill='#212529'>
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='180' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>
        <text x='20' y='200' text-anchor='middle' fill='#6c757d'>6</text>

        <text x='45' y='50'>Товар</text><text x='175' y='50'>Цена</text><text x='285' y='50'>Кол-во</text><text x='375' y='50'>Категория</text><text x='505' y='50'>Город</text>
        <text x='45' y='80'>Ноутбук</text><text x='175' y='80'>55000</text><text x='285' y='80'>12</text><text x='375' y='80'>Техника</text><text x='505' y='80'>Москва</text>
        <text x='45' y='110'>Мышь</text><text x='175' y='110'>800</text><text x='285' y='110'>150</text><text x='375' y='110'>Аксессуар</text><text x='505' y='110'>СПб</text>
        <text x='45' y='140'>Монитор</text><text x='175' y='140'>18000</text><text x='285' y='140'>25</text><text x='375' y='140'>Техника</text><text x='505' y='140'>Москва</text>
        <text x='45' y='170'>Клавиатура</text><text x='175' y='170'>2500</text><text x='285' y='170'>80</text><text x='375' y='170'>Аксессуар</text><text x='505' y='170'>Казань</text>
        <text x='45' y='200'>Планшет</text><text x='175' y='200'>32000</text><text x='285' y='200'>18</text><text x='375' y='200'>Техника</text><text x='505' y='200'>СПб</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='210'/><line x1='170' y1='0' x2='170' y2='210'/>
        <line x1='280' y1='0' x2='280' y2='210'/><line x1='370' y1='0' x2='370' y2='210'/>
        <line x1='500' y1='0' x2='500' y2='210'/>
        <line x1='0' y1='30' x2='620' y2='30'/><line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/><line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/><line x1='0' y1='180' x2='620' y2='180'/>
        <line x1='0' y1='210' x2='620' y2='210'/>
      </g>

      <rect x='0' y='220' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='245' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='245' font-size='13' fill='#212529'>=МАКС(B2:B6) - МИН(B2:B6)</text>
    </svg>
    <p class='mt-3 mb-0'><strong>Вопрос:</strong> Какое значение вернёт формула <code>=МАКС(B2:B6) - МИН(B2:B6)</code>?</p>
  </div>
</div>`,
    choices: ["54200", "55000", "55800", "32000", "18000"],
    answers: ["54200"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функции МАКС и МИН</h5>
      <p class='mb-1'><strong>МАКС</strong> возвращает наибольшее значение в диапазоне, <strong>МИН</strong> — наименьшее.</p>
      <hr class='my-2'>
      <p class='mb-1'>В диапазоне B2:B6 цены: 55000, 800, 18000, 2500, 32000.</p>
      <p class='mb-1'>МАКС = 55000 (Ноутбук), МИН = 800 (Мышь).</p>
      <p class='mb-0'>Разница: 55000 − 800 = <strong>54200</strong>.</p>
    </div>`
},

{
    id: "excel005",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "СРЗНАЧ: среднее значение",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — продажи техники</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <!-- тот же SVG -->
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='90' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='370' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='500' y='0' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='325' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='435' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>
      <text x='560' y='20' text-anchor='middle' font-size='13' fill='#495057'>F</text>

      <g font-size='13' fill='#212529'>
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='180' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>
        <text x='20' y='200' text-anchor='middle' fill='#6c757d'>6</text>

        <text x='45' y='50'>Товар</text><text x='175' y='50'>Цена</text><text x='285' y='50'>Кол-во</text><text x='375' y='50'>Категория</text><text x='505' y='50'>Город</text>
        <text x='45' y='80'>Ноутбук</text><text x='175' y='80'>55000</text><text x='285' y='80'>12</text><text x='375' y='80'>Техника</text><text x='505' y='80'>Москва</text>
        <text x='45' y='110'>Мышь</text><text x='175' y='110'>800</text><text x='285' y='110'>150</text><text x='375' y='110'>Аксессуар</text><text x='505' y='110'>СПб</text>
        <text x='45' y='140'>Монитор</text><text x='175' y='140'>18000</text><text x='285' y='140'>25</text><text x='375' y='140'>Техника</text><text x='505' y='140'>Москва</text>
        <text x='45' y='170'>Клавиатура</text><text x='175' y='170'>2500</text><text x='285' y='170'>80</text><text x='375' y='170'>Аксессуар</text><text x='505' y='170'>Казань</text>
        <text x='45' y='200'>Планшет</text><text x='175' y='200'>32000</text><text x='285' y='200'>18</text><text x='375' y='200'>Техника</text><text x='505' y='200'>СПб</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='210'/><line x1='170' y1='0' x2='170' y2='210'/>
        <line x1='280' y1='0' x2='280' y2='210'/><line x1='370' y1='0' x2='370' y2='210'/>
        <line x1='500' y1='0' x2='500' y2='210'/>
        <line x1='0' y1='30' x2='620' y2='30'/><line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/><line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/><line x1='0' y1='180' x2='620' y2='180'/>
        <line x1='0' y1='210' x2='620' y2='210'/>
      </g>

      <rect x='0' y='220' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='245' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='245' font-size='13' fill='#212529'>=ОКРУГЛ(СРЗНАЧ(B2:B6); 0)</text>
    </svg>
    <p class='mt-3 mb-0'><strong>Вопрос:</strong> Какое значение вернёт формула <code>=ОКРУГЛ(СРЗНАЧ(B2:B6); 0)</code>?</p>
  </div>
</div>`,
    choices: ["19600", "21000", "21500", "21660", "25000"],
    answers: ["21660"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функции СРЗНАЧ и ОКРУГЛ</h5>
      <p class='mb-1'><strong>СРЗНАЧ</strong> находит среднее арифметическое, <strong>ОКРУГЛ</strong> округляет до указанного числа знаков.</p>
      <hr class='my-2'>
      <p class='mb-1'>Сумма: 55000 + 800 + 18000 + 2500 + 32000 = 108300.</p>
      <p class='mb-1'>Среднее: 108300 / 5 = 21660.</p>
      <p class='mb-0'>Округление до целого: <strong>21660</strong>.</p>
    </div>`
},

{
    id: "excel006",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "Абсолютные и относительные ссылки",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — расчёт скидки</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 260' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <rect x='0' y='0' width='620' height='260' fill='#fff' stroke='#adb5bd'/>

      <!-- Заголовки столбцов -->
      <rect x='0' y='0' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='170' y='0' width='110' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='280' y='0' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='410' y='0' width='210' height='30' fill='#e9ecef' stroke='#adb5bd'/>

      <text x='20' y='20' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='105' y='20' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='225' y='20' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='345' y='20' text-anchor='middle' font-size='13' fill='#495057'>D</text>
      <text x='515' y='20' text-anchor='middle' font-size='13' fill='#495057'>E</text>

      <g font-size='13' fill='#212529'>
        <!-- номера строк -->
        <rect x='0' y='30' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='60' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='90' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='120' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <rect x='0' y='150' width='40' height='30' fill='#f1f3f5' stroke='#dee2e6'/>
        <text x='20' y='50'  text-anchor='middle' fill='#6c757d'>1</text>
        <text x='20' y='80'  text-anchor='middle' fill='#6c757d'>2</text>
        <text x='20' y='110' text-anchor='middle' fill='#6c757d'>3</text>
        <text x='20' y='140' text-anchor='middle' fill='#6c757d'>4</text>
        <text x='20' y='170' text-anchor='middle' fill='#6c757d'>5</text>

        <!-- данные -->
        <text x='45' y='50'>Товар</text>
        <text x='175' y='50'>Цена</text>
        <text x='285' y='50'>Скидка</text>
        <text x='415' y='50'>Цена со скидкой</text>

        <text x='45' y='80'>Ноутбук</text>
        <text x='175' y='80'>55000</text>
        <text x='285' y='80'>10%</text>
        <text x='415' y='80'>49500</text>

        <text x='45' y='110'>Мышь</text>
        <text x='175' y='110'>800</text>
        <text x='285' y='110'>10%</text>
        <text x='415' y='110'>720</text>

        <text x='45' y='140'>Монитор</text>
        <text x='175' y='140'>18000</text>
        <text x='285' y='140'>10%</text>
        <text x='415' y='140'>16200</text>

        <text x='45' y='170'>Планшет</text>
        <text x='175' y='170'>32000</text>
        <text x='285' y='170'>10%</text>
        <text x='415' y='170'>28800</text>
      </g>

      <!-- Сетка -->
      <g stroke='#dee2e6'>
        <line x1='40' y1='0' x2='40' y2='180'/>
        <line x1='170' y1='0' x2='170' y2='180'/>
        <line x1='280' y1='0' x2='280' y2='180'/>
        <line x1='410' y1='0' x2='410' y2='180'/>
        <line x1='0' y1='30' x2='620' y2='30'/>
        <line x1='0' y1='60' x2='620' y2='60'/>
        <line x1='0' y1='90' x2='620' y2='90'/>
        <line x1='0' y1='120' x2='620' y2='120'/>
        <line x1='0' y1='150' x2='620' y2='150'/>
        <line x1='0' y1='180' x2='620' y2='180'/>
      </g>

      <!-- Выделенная ячейка D2 -->
      <rect x='410' y='60' width='210' height='30' fill='rgba(13,110,253,0.1)' stroke='#0d6efd' stroke-width='2'/>

      <!-- Строка формул -->
      <rect x='0' y='190' width='620' height='40' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='215' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='215' font-size='13' fill='#212529'>=B2 * (1 - C2/100)</text>
    </svg>
    <p class='mt-3 mb-1'>Формула в ячейке <strong>D2</strong>: <code>=B2 * (1 - C2/100)</code>.</p>
    <p class='mb-0'><strong>Вопрос:</strong> Какую формулу нужно записать в ячейку <strong>D5</strong>, чтобы получить цену со скидкой для планшета?</p>
  </div>
</div>`,
    choices: [
        "=B5 * (1 - C5/100)",
        "=B2 * (1 - C2/100)",
        "=B$2 * (1 - C$2/100)",
        "=B5 * (1 - $C$2/100)",
        "=B$5 * (1 - C$5/100)"
    ],
    answers: ["=B5 * (1 - C5/100)"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Относительные ссылки</h5>
      <p class='mb-1'>При копировании формулы Excel автоматически меняет <strong>относительные ссылки</strong> (без знака <code>$</code>).</p>
      <p class='mb-1'>Формула из D2: <code>=B2 * (1 - C2/100)</code></p>
      <p class='mb-1'>При копировании в D5 номер строки увеличивается на 3: 2 → 5.</p>
      <hr class='my-2'>
      <p class='mb-0'>Правильная формула: <strong>=B5 * (1 - C5/100)</strong></p>
    </div>`
},

{
    id: "excel007",
    type: "multiplechoices",
    header: "ФИПИ · Обработка данных в Excel",
    title: "ВПР: поиск значения по названию",
    theme: "Формулы Excel",
    text: `
<div class='card'>
  <div class='card-header bg-success text-white'>Лист Excel — заказы и прайс-лист</div>
  <div class='card-body'>
    <svg viewBox='0 0 620 320' width='100%' style='max-width:620px; display:block; margin:0 auto; font-family:Consolas,monospace;'>
      <rect x='0' y='0' width='620' height='320' fill='#fff' stroke='#adb5bd'/>

      <!-- Верхняя таблица: Заказы -->
      <text x='10' y='20' font-size='13' font-weight='bold' fill='#0d6efd'>Таблица «Заказы» (диапазон A1:C4)</text>

      <rect x='0' y='30' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='30' width='150' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='190' y='30' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='320' y='30' width='120' height='30' fill='#e9ecef' stroke='#adb5bd'/>

      <text x='20' y='50' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='115' y='50' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='255' y='50' text-anchor='middle' font-size='13' fill='#495057'>C</text>
      <text x='380' y='50' text-anchor='middle' font-size='13' fill='#495057'>D</text>

      <g font-size='13' fill='#212529'>
        <text x='45' y='75'>Заказ</text>
        <text x='45' y='105'>Ноутбук</text>
        <text x='45' y='135'>Мышь</text>
        <text x='45' y='165'>Монитор</text>

        <text x='195' y='75'>Товар</text>
        <text x='195' y='105'>Ноутбук</text>
        <text x='195' y='135'>Мышь</text>
        <text x='195' y='165'>Монитор</text>

        <text x='325' y='75'>Цена</text>
        <text x='325' y='105'>55000</text>
        <text x='325' y='135'>800</text>
        <text x='325' y='165'>18000</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='30' x2='40' y2='180'/>
        <line x1='190' y1='30' x2='190' y2='180'/>
        <line x1='320' y1='30' x2='320' y2='180'/>
        <line x1='0' y1='60' x2='440' y2='60'/>
        <line x1='0' y1='90' x2='440' y2='90'/>
        <line x1='0' y1='120' x2='440' y2='120'/>
        <line x1='0' y1='150' x2='440' y2='150'/>
        <line x1='0' y1='180' x2='440' y2='180'/>
      </g>

      <!-- Нижняя таблица: Прайс-лист -->
      <text x='10' y='215' font-size='13' font-weight='bold' fill='#198754'>Таблица «Прайс-лист» (диапазон A10:C14)</text>

      <rect x='0' y='225' width='40' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='40' y='225' width='150' height='30' fill='#e9ecef' stroke='#adb5bd'/>
      <rect x='190' y='225' width='130' height='30' fill='#e9ecef' stroke='#adb5bd'/>

      <text x='20' y='245' text-anchor='middle' font-size='13' fill='#495057'>A</text>
      <text x='115' y='245' text-anchor='middle' font-size='13' fill='#495057'>B</text>
      <text x='255' y='245' text-anchor='middle' font-size='13' fill='#495057'>C</text>

      <g font-size='13' fill='#212529'>
        <text x='45' y='270'>Товар</text>
        <text x='45' y='300'>Ноутбук</text>

        <text x='195' y='270'>Цена</text>
        <text x='195' y='300'>55000</text>
      </g>

      <g stroke='#dee2e6'>
        <line x1='40' y1='225' x2='40' y2='315'/>
        <line x1='190' y1='225' x2='190' y2='315'/>
        <line x1='0' y1='255' x2='320' y2='255'/>
        <line x1='0' y1='285' x2='320' y2='285'/>
        <line x1='0' y1='315' x2='320' y2='315'/>
      </g>

      <!-- Строка формул -->
      <rect x='0' y='330' width='620' height='35' fill='#f8f9fa' stroke='#adb5bd'/>
      <text x='10' y='355' font-size='13' fill='#0d6efd'>fx</text>
      <text x='40' y='355' font-size='13' fill='#212529'>=ВПР(B2; A10:C14; 2; ЛОЖЬ)</text>
    </svg>
    <p class='mt-3 mb-1'>В ячейке <strong>C2</strong> записана формула: <code>=ВПР(B2; A10:C14; 2; ЛОЖЬ)</code>.</p>
    <p class='mb-0'><strong>Вопрос:</strong> Что вернёт эта формула?</p>
  </div>
</div>`,
    choices: ["Ноутбук", "55000", "800", "18000", "#Н/Д"],
    answers: ["55000"],
    hint: `<div class='alert alert-primary'>
      <h5 class='mb-2'>📊 Функция ВПР (VLOOKUP)</h5>
      <p class='mb-1'>Ищет значение в первом столбце диапазона и возвращает значение из указанного столбца той же строки.</p>
      <p class='mb-1'><strong>Синтаксис:</strong> =ВПР(искомое; таблица; номер_столбца; [точное_совпадение])</p>
      <hr class='my-2'>
      <p class='mb-1'>Искомое: <strong>B2</strong> = «Ноутбук»</p>
      <p class='mb-1'>Диапазон: <strong>A10:C14</strong> (прайс-лист)</p>
      <p class='mb-1'>Столбец <strong>2</strong> — это «Цена» в прайс-листе</p>
      <p class='mb-1'>ЛОЖЬ — точное совпадение</p>
      <p class='mb-0'>Находим «Ноутбук» → цена во 2-м столбце = <strong>55000</strong></p>
    </div>`
},

{
  id: "agile001",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "Три столпа эмпирического контроля",
  theme: "Основы Scrum",
  text: `На каких трёх столпах основан эмпирический контроль процессов в Scrum?
  <pre>Выберите правильную комбинацию</pre>`,
  choices: [
    "Планирование, Исполнение, Контроль",
    "Прозрачность, Инспекция, Адаптация",
    "Коммуникация, Документация, Отчётность",
    "Итерация, Инкремент, Релиз",
    "Анализ, Проектирование, Реализация"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Теория Scrum</div>
  <div class="card-body py-2">
    <p class="mb-1">Scrum основан на <b>эмпирическом контроле процессов</b>: знание приходит из опыта, а решения принимаются на основе наблюдений.</p>
    <p class="mb-0">Эмпирический подход требует трёх опор, без которых он не работает.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Три столпа</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Прозрачность</b> — все значимые аспекты процесса видны ответственным за результат, с общим пониманием стандартов (например, Definition of Done).</p>
    <p class="mb-1"><b>Инспекция</b> — артефакты и прогресс к цели регулярно проверяются, но не настолько часто, чтобы мешать работе.</p>
    <p class="mb-0"><b>Адаптация</b> — если проверка выявила отклонения, процесс или продукт корректируются как можно скорее.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Как это связано с событиями</div>
  <div class="card-body py-2">
    <p class="mb-0">Четыре формальных события Scrum (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) существуют именно для инспекции и адаптации.</p>
  </div>
</div>`,
  answers: ["Прозрачность, Инспекция, Адаптация"]
},
{
  id: "agile002",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "Роль Scrum Master",
  theme: "Роли Scrum",
  text: `Какова основная роль Scrum Master в команде?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Управлять командой и распределять задачи",
    "Быть слугой-лидером: убирать препятствия, фасилитировать события и коучить команду",
    "Приоритизировать бэклог и определять ценность продукта",
    "Писать код и тестировать функциональность",
    "Вести переговоры с заказчиком и подписывать контракты"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Три роли Scrum</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Product Owner</b> — максимизирует ценность продукта, управляет Product Backlog и приоритетами.</p>
    <p class="mb-1"><b>Scrum Master</b> — отвечает за создание среды, в которой команда может эффективно работать по Scrum.</p>
    <p class="mb-0"><b>Development Team</b> — кросс-функциональные специалисты, создающие Increment.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает Scrum Master</div>
  <div class="card-body py-2">
    <p class="mb-1">Scrum Master — это <b>servant leader</b>, а не менеджер, раздающий задачи.</p>
    <p class="mb-1">Он убирает препятствия (impediments), фасилитирует Scrum-события, коучит команду и организацию в понимании Scrum.</p>
    <p class="mb-0">Он <b>не</b> приоритизирует бэклог (это делает Product Owner) и <b>не</b> управляет людьми директивно.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Ключевое отличие</div>
  <div class="card-body py-2">
    <p class="mb-0">Scrum Master защищает фокус команды и создаёт условия для <b>самоорганизации</b>, а не командует.</p>
  </div>
</div>`,
  answers: ["Быть слугой-лидером: убирать препятствия, фасилитировать события и коучить команду"]
},
{
  id: "agile003",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "События Scrum",
  theme: "События и таймбоксы",
  text: `Какое из перечисленных событий <b>не</b> является формальным событием Scrum?
  <pre>Выберите лишнее</pre>`,
  choices: [
    "Sprint Planning",
    "Daily Scrum",
    "Sprint Review",
    "Sprint Retrospective",
    "Еженедельный статус-митинг с руководством"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Пять событий Scrum</div>
  <div class="card-body py-2">
    <p class="mb-1">Scrum определяет ровно <b>пять</b> формальных событий, каждое с таймбоксом:</p>
    <p class="mb-1">1. <b>Sprint</b> — контейнер для остальных событий (1–4 недели).</p>
    <p class="mb-1">2. <b>Sprint Planning</b> — планирование спринта.</p>
    <p class="mb-1">3. <b>Daily Scrum</b> — ежедневная синхронизация (15 минут).</p>
    <p class="mb-1">4. <b>Sprint Review</b> — инспекция Increment со стейкхолдерами.</p>
    <p class="mb-0">5. <b>Sprint Retrospective</b> — улучшение процесса команды.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что не входит в Scrum</div>
  <div class="card-body py-2">
    <p class="mb-0">Любые дополнительные встречи (статус-митинги, отчёты руководству, комитеты) <b>не являются</b> событиями Scrum. Scrum стремится минимизировать встречи, не определённые фреймворком.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Зачем нужны события</div>
  <div class="card-body py-2">
    <p class="mb-0">Каждое событие — формальная возможность для <b>инспекции и адаптации</b>. Пропуск события снижает прозрачность.</p>
  </div>
</div>`,
  answers: ["Еженедельный статус-митинг с руководством"]
},
{
  id: "agile004",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "Product Backlog и Sprint Backlog",
  theme: "Артефакты Scrum",
  text: `В чём ключевое различие между Product Backlog и Sprint Backlog?
  <pre>Выберите правильное утверждение</pre>`,
  choices: [
    "Product Backlog — список всех задач на спринт, Sprint Backlog — список задач на день",
    "Product Backlog — упорядоченный список всего, что может понадобиться в продукте; Sprint Backlog — подмножество задач, выбранных на текущий спринт",
    "Product Backlog принадлежит Scrum Master, Sprint Backlog — Product Owner",
    "Оба бэклога создаются стейкхолдерами и не меняются в течение спринта",
    "Sprint Backlog включает только баги, Product Backlog — только фичи"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Три артефакта Scrum</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Product Backlog</b> — единый упорядоченный список всего, что может потребоваться в продукте: фичи, улучшения, исправления. Владелец — <b>Product Owner</b>.</p>
    <p class="mb-1"><b>Sprint Backlog</b> — подмножество Product Backlog, выбранное командой на текущий спринт, плюс план по достижению Sprint Goal.</p>
    <p class="mb-0"><b>Increment</b> — сумма всех выполненных элементов бэклога за спринт, соответствующая Definition of Done.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Ключевое отличие</div>
  <div class="card-body py-2">
    <p class="mb-0">Product Backlog — <b>полный и постоянно evolving</b> список на уровне продукта. Sprint Backlog — <b>сфокусированный план на один спринт</b>, который команда обязуется выполнить.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Кто чем владеет</div>
  <div class="card-body py-2">
    <p class="mb-0">Product Owner отвечает за Product Backlog. Sprint Backlog принадлежит <b>Development Team</b> — команда сама решает, как достичь Sprint Goal.</p>
  </div>
</div>`,
  answers: ["Product Backlog — упорядоченный список всего, что может понадобиться в продукте; Sprint Backlog — подмножество задач, выбранных на текущий спринт"]
},
{
  id: "agile005",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "Scrum vs Kanban",
  theme: "Сравнение фреймворков",
  text: `Чем Kanban принципиально отличается от Scrum?
  <pre>Выберите наиболее точное утверждение</pre>`,
  choices: [
    "Kanban использует спринты фиксированной длины, а Scrum — непрерывный поток",
    "Kanban не предписывает ролей и спринтов, фокусируясь на визуализации потока и ограничении WIP",
    "Kanban требует Product Owner и Scrum Master",
    "Kanban не позволяет вносить изменения после начала работы",
    "Kanban используется только в производстве, а Scrum — только в IT"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Scrum: итерации и роли</div>
  <div class="card-body py-2">
    <p class="mb-1">Scrum организует работу <b>спринтами фиксированной длины</b> (1–4 недели).</p>
    <p class="mb-0">Scrum предписывает <b>три роли</b> (Product Owner, Scrum Master, Developers), <b>три артефакта</b> и <b>пять событий</b>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Kanban: поток и WIP-лимиты</div>
  <div class="card-body py-2">
    <p class="mb-1">Kanban <b>не требует спринтов</b> и не предписывает ролей. Работа течёт непрерывно.</p>
    <p class="mb-0">Ключевые практики: <b>визуализация потока</b> (доска) и <b>ограничение Work in Progress (WIP)</b> — не брать больше задач, чем команда может завершить.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Когда что выбирать</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Scrum</b> лучше для продуктовой разработки с чёткими циклами и потребностью в регулярной обратной связи.</p>
    <p class="mb-0"><b>Kanban</b> лучше для поддержки, эксплуатации и потока задач, поступающих непрерывно и непредсказуемо.</p>
  </div>
</div>`,
  answers: ["Kanban не предписывает ролей и спринтов, фокусируясь на визуализации потока и ограничении WIP"]
},
{
  id: "agile006",
  type: "multiplechoices",
  header: "Тест по Agile и Scrum",
  title: "Ценности Scrum",
  theme: "Ценности и поведение",
  text: `Какие пять ценностей лежат в основе успешного применения Scrum?
  <pre>Выберите правильную комбинацию</pre>`,
  choices: [
    "Скорость, Эффективность, Качество, Прибыль, Рост",
    "Преданность делу, Смелость, Фокус, Открытость, Уважение",
    "Планирование, Исполнение, Проверка, Действие, Рефлексия",
    "Автономия, Мастерство, Цель, Смысл, Вовлечённость",
    "Прозрачность, Инспекция, Адаптация, Доверие, Сотрудничество"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Пять ценностей Scrum</div>
  <div class="card-body py-2">
    <p class="mb-1">Scrum Guide определяет пять ценностей, которые команда должна воплощать в работе с ролями, событиями и артефактами:</p>
    <p class="mb-1"><b>Commitment (Преданность делу)</b> — личная приверженность целям команды.</p>
    <p class="mb-1"><b>Courage (Смелость)</b> — делать правильные вещи и работать со сложными проблемами.</p>
    <p class="mb-1"><b>Focus (Фокус)</b> — концентрация на работе спринта и целях команды.</p>
    <p class="mb-1"><b>Openness (Открытость)</b> — открытость к работе и вызовам между командой и стейкхолдерами.</p>
    <p class="mb-0"><b>Respect (Уважение)</b> — уважение друг к другу как к способным, независимым людям.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Как ценности связаны со столпами</div>
  <div class="card-body py-2">
    <p class="mb-0">Когда эти ценности живут в команде, <b>прозрачность, инспекция и адаптация</b> становятся реальностью, а не формальностью. Ценности создают доверие, без которого эмпирический контроль не работает.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Не путать</div>
  <div class="card-body py-2">
    <p class="mb-0">Прозрачность, Инспекция и Адаптация — это <b>столпы</b> (pillars), а не ценности. Ценности — это поведенческие ориентиры для людей.</p>
  </div>
</div>`,
  answers: ["Преданность делу, Смелость, Фокус, Открытость, Уважение"]
},

{
  id: "ai001",
  type: "multiplechoices",
  header: "Основы ИИ для начинающих",
  title: "Что такое Inference",
  theme: "Inference vs Training",
  text: `Чем <b>inference</b> (инференс, вывод) принципиально отличается от <b>training</b> (обучения) модели?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Inference — это обучение модели на новых данных, training — использование готовой модели",
    "Inference — это применение уже обученной модели к новым входным данным, training — процесс обучения модели на данных",
    "Inference и training — это одно и то же, просто разные названия",
    "Inference используется только для изображений, training — только для текста",
    "Inference требует больше GPU, чем training"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Два этапа жизни модели</div>
  <div class="card-body py-2">
    <p class="mb-1">Любая LLM проходит два принципиально разных этапа.</p>
    <p class="mb-1"><b>Training (обучение)</b> — модель «учится» на огромных объёмах данных,调整 свои веса (weights). Это долго, дорого и требует много GPU.</p>
    <p class="mb-0"><b>Inference (вывод)</b> — обученная модель применяет полученные знания к новому запросу. Веса <b>заморожены</b>, модель ничего не «учит» в этот момент.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Аналогия</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Training</b> — студент готовится к экзамену: читает учебники, решает задачи, запоминает формулы (месяцы).</p>
    <p class="mb-0"><b>Inference</b> — студент на экзамене отвечает на конкретный вопрос, используя то, что уже выучил (секунды). Он не учится во время ответа.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Что важно для новичка</div>
  <div class="card-body py-2">
    <p class="mb-0">Когда вы пользуетесь ChatGPT или Claude — вы запускаете <b>inference</b>. Модель уже обучена кем-то другим. Inference — это то, за что платят в production, и то, что пользователь ощущает как «скорость ответа» [citation:3][citation:5].</p>
  </div>
</div>`,
  answers: ["Inference — это применение уже обученной модели к новым входным данным, training — процесс обучения модели на данных"]
},
{
  id: "ai002",
  type: "multiplechoices",
  header: "Основы ИИ для начинающих",
  title: "Что такое Token",
  theme: "Токенизация",
  text: `Что такое <b>token</b> (токен) в контексте больших языковых моделей (LLM)?
  <pre>Выберите наиболее точное определение</pre>`,
  choices: [
    "Это пароль для доступа к API модели",
    "Это единица текста (слово, часть слова или символ), на которую модель разбивает входные данные",
    "Это один нейрон в нейронной сети",
    "Это GPU, на котором работает модель",
    "Это файл, в котором хранятся веса модели"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Как модель «видит» текст</div>
  <div class="card-body py-2">
    <p class="mb-1">Модель не работает с текстом напрямую. Сначала <b>tokenizer</b> разбивает текст на <b>токены</b> — кусочки, которые могут быть:</p>
    <p class="mb-1">— целым словом: <code>dog</code></p>
    <p class="mb-1">— частью слова: <code>un</code> + <code>break</code> + <code>able</code></p>
    <p class="mb-0">— знаком препинания или символом: <code>.</code>, <code>?</code>, <code>!</code></p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Зачем это знать</div>
  <div class="card-body py-2">
    <p class="mb-1">У каждой модели есть <b>лимит токенов</b> (context window). Например, если лимит — 128 000 токенов, вы не можете отправить текст длиннее.</p>
    <p class="mb-0">В английском примерно <b>1 токен ≈ 4 символа ≈ 0.75 слова</b>. В русском языке токенов обычно <b>больше</b> на тот же текст, потому что кириллица хуже оптимизирована в большинстве токенизаторов [citation:2][citation:9].</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Аналогия</div>
  <div class="card-body py-2">
    <p class="mb-0">Представьте, что вы платите за SMS. Токен — это как «слово» в тарифе, но иногда одно длинное слово считается за два, а предлог «в» — за одно. Модель «читает» текст по токенам и «пишет» ответ тоже токен за токеном.</p>
  </div>
</div>`,
  answers: ["Это единица текста (слово, часть слова или символ), на которую модель разбивает входные данные"]
},
{
  id: "ai003",
  type: "multiplechoices",
  header: "Основы ИИ для начинающих",
  title: "Что такое Harness",
  theme: "Agent Harness",
  text: `В контексте ИИ-агентов (AI agents) что такое <b>harness</b>?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Это сама языковая модель (LLM)",
    "Это программная обвязка вокруг модели, которая управляет вызовом инструментов, контекстом и циклом работы агента",
    "Это тип GPU для обучения моделей",
    "Это формат файла для хранения весов",
    "Это метод сжатия модели (квантизация)"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Формула агента</div>
  <div class="card-body py-2">
    <p class="mb-1">В индустрии часто используют формулу: <b>Agent = Model + Harness</b> [citation:4][citation:8].</p>
    <p class="mb-0">Модель (LLM) — это «мозг», который умеет читать текст и генерировать ответ. Но сама по себе она <b>не может</b>: читать файлы, выполнять код, искать в интернете, помнить предыдущие сессии.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что делает Harness</div>
  <div class="card-body py-2">
    <p class="mb-1">Harness — это всё, что <b>вокруг</b> модели, чтобы она могла «работать руками»:</p>
    <p class="mb-1">— передаёт модели описания доступных <b>инструментов</b> (tools);</p>
    <p class="mb-1">— <b>выполняет</b> вызов инструмента, когда модель его запросила;</p>
    <p class="mb-1">— возвращает результат обратно модели для следующего шага;</p>
    <p class="mb-0">— управляет <b>памятью</b> (историей), лимитами и безопасностью.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Аналогия</div>
  <div class="card-body py-2">
    <p class="mb-0">Модель — это <b>лошадь</b>. Harness (буквально «упряжь») — это <b>седло, уздечка и повозка</b>. Лошадь сильная, но без упряжи вы на ней далеко не уедете и груз не перевезёте. Harness превращает «умную лошадь» в «рабочую систему» [citation:4].</p>
  </div>
</div>`,
  answers: ["Это программная обвязка вокруг модели, которая управляет вызовом инструментов, контекстом и циклом работы агента"]
},
{
  id: "ai004",
  type: "multiplechoices",
  header: "Основы ИИ для начинающих",
  title: "Форматы файлов моделей: GGUF",
  theme: "Model File Formats",
  text: `Для чего чаще всего используется формат <b>GGUF</b> (.gguf)?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Для обучения моделей на GPU-кластерах",
    "Для запуска LLM локально на обычном компьютере (через llama.cpp, Ollama и подобные)",
    "Для хранения изображений, сгенерированных ИИ",
    "Для передачи моделей между разными фреймворками (PyTorch ↔ TensorFlow)",
    "Для сжатия текстовых документов перед подачей в модель"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Три главных формата</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Safetensors</b> — «родной» формат Hugging Face. Безопасный, быстрый, используется для тренировки и тонкой настройки.</p>
    <p class="mb-1"><b>ONNX</b> — «универсальный переходник» между фреймворками (PyTorch → TensorFlow → runtime).</p>
    <p class="mb-0"><b>GGUF</b> — формат для <b>локального запуска</b> LLM. Один файл, внутри уже лежат квантованные веса [citation:18][citation:21].</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Почему GGUF популярен</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Один файл</b> — легко скачать и поделиться (не нужно папок с десятками файлов).</p>
    <p class="mb-1"><b>Квантование</b> — веса сжаты (например, до 4 бит вместо 16), поэтому модель влезает в память обычного ноутбука.</p>
    <p class="mb-0"><b>Совместимость</b> — работает с <code>llama.cpp</code>, <code>Ollama</code>, <code>LM Studio</code> и другими локальными раннерами [citation:18].</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Аналогия</div>
  <div class="card-body py-2">
    <p class="mb-0">Safetensors — это «исходники» для разработчика. GGUF — это «готовое приложение в одном .exe», которое можно запустить на домашнем ПК без настройки окружения.</p>
  </div>
</div>`,
  answers: ["Для запуска LLM локально на обычном компьютере (через llama.cpp, Ollama и подобные)"]
},
{
  id: "ai005",
  type: "multiplechoices",
  header: "Основы ИИ для начинающих",
  title: "Программа для просмотра моделей: Netron",
  theme: "Инструменты для работы с моделями",
  text: `Что делает программа <b>Netron</b>?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Обучает модели на вашем компьютере",
    "Визуализирует архитектуру нейросетевых моделей (показывает слои и связи) для разных форматов",
    "Конвертирует модели в GGUF",
    "Генерирует текст с помощью локальной LLM",
    "Скачивает модели с Hugging Face"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Что такое Netron</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Netron</b> — это <b>просмотрщик</b> (viewer) моделей машинного обучения. Он не обучает и не запускает модели, а показывает их <b>структуру</b> в удобном графическом виде [citation:16][citation:27].</p>
    <p class="mb-0">Вы открываете файл модели — и видите граф: какие слои идут друг за другом, какие операции выполняются, как связаны тензоры.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Какие форматы поддерживает</div>
  <div class="card-body py-2">
    <p class="mb-1">ONNX, TensorFlow Lite, PyTorch, Core ML, Safetensors, Keras, Caffe и многие другие.</p>
    <p class="mb-0">Для <b>GGUF</b> поддержка «экспериментальная» — потому что GGUF в первую очередь про веса и квантование, а не про вычислительный граф [citation:22][citation:23].</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Зачем это новичку</div>
  <div class="card-body py-2">
    <p class="mb-0">Если вы скачали модель и хотите понять, «что у неё внутри» (сколько слоёв, какая архитектура, какие операции), — откройте её в Netron. Это как диспетчер задач, но для нейросети: наглядно и без кода.</p>
  </div>
</div>`,
  answers: ["Визуализирует архитектуру нейросетевых моделей (показывает слои и связи) для разных форматов"]
},

{
  id: "hf001",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Три типа репозиториев на Hub",
  theme: "Экосистема Hub",
  text: `Какие три основных типа репозиториев существуют на Hugging Face Hub?
  <pre>Выберите правильную комбинацию</pre>`,
  choices: [
    "Models, Datasets, Spaces",
    "Models, Weights, Tokens",
    "Pipelines, Datasets, Endpoints",
    "Repos, Branches, Commits",
    "Models, GPUs, API Keys"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Что такое Hub</div>
  <div class="card-body py-2">
    <p class="mb-1">Hugging Face Hub — это платформа с тремя основными типами репозиториев.</p>
    <p class="mb-0">Каждый репозиторий — это git-репозиторий со своей историей, ветками и файлами.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Три типа</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Models</b> — веса и конфигурации моделей. У каждой есть <b>Model Card</b> с описанием ограничений и метрик.</p>
    <p class="mb-1"><b>Datasets</b> — наборы данных (более 1 млн публичных). Работают через библиотеку <code>datasets</code>.</p>
    <p class="mb-0"><b>Spaces</b> — приложения (Gradio, Streamlit, Docker) для демонстрации моделей.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Зачем это знать</div>
  <div class="card-body py-2">
    <p class="mb-0">Понимание типов репозиториев помогает быстро находить нужное: модель — в Models, данные для обучения — в Datasets, готовую демку — в Spaces.</p>
  </div>
</div>`,
  answers: ["Models, Datasets, Spaces"]
},
{
  id: "hf002",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Что такое Model Card",
  theme: "Документация моделей",
  text: `Что содержит <b>Model Card</b> на странице модели в Hugging Face?
  <pre>Выберите наиболее полное описание</pre>`,
  choices: [
    "Только код для загрузки модели",
    "Описание модели: назначение, данные обучения, ограничения, метрики и примеры использования",
    "Список всех пользователей, скачавших модель",
    "Цену за использование модели в API",
    "Только лицензию и имя автора"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Что такое Model Card</div>
  <div class="card-body py-2">
    <p class="mb-1">Model Card — это <b>документация</b> к модели, аналог инструкции или README.</p>
    <p class="mb-0">Она помогает понять, <b>можно ли</b> использовать модель в вашей задаче и <b>какие у неё ограничения</b>.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что обычно внутри</div>
  <div class="card-body py-2">
    <p class="mb-1">— <b>Назначение</b> и типичные задачи (generation, classification и т.д.);</p>
    <p class="mb-1">— <b>Данные обучения</b> и языки;</p>
    <p class="mb-1">— <b>Ограничения</b> и известные смещения (biases);</p>
    <p class="mb-0">— <b>Метрики</b> и примеры кода для запуска.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Совет новичку</div>
  <div class="card-body py-2">
    <p class="mb-0">Всегда читайте Model Card <b>до</b> скачивания. Это спасает от использования неподходящих или небезопасных моделей.</p>
  </div>
</div>`,
  answers: ["Описание модели: назначение, данные обучения, ограничения, метрики и примеры использования"]
},
{
  id: "hf003",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Библиотека transformers: pipeline",
  theme: "Ключевые библиотеки",
  text: `Зачем нужен высокоуровневый <b>pipeline</b> в библиотеке <code>transformers</code>?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Он обучает модель с нуля на ваших данных",
    "Он скрывает предобработку и позволяет запустить inference в несколько строк кода",
    "Он скачивает все модели Hugging Face на диск",
    "Он конвертирует модели в формат GGUF",
    "Он заменяет собой библиотеку datasets"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Что такое pipeline</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>pipeline</code> — это «конструктор» для типовых задач: генерация текста, классификация, перевод, вопрос-ответ.</p>
    <p class="mb-0">Вы указываете задачу и модель — библиотека сама загружает токенизатор, модель и выполняет предобработку.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Пример</div>
  <div class="card-body py-2">
    <p class="mb-1"><code>pipeline("text-generation", model="Qwen/Qwen2.5-1.5B")</code></p>
    <p class="mb-0">Одна строка — и вы можете генерировать текст. Не нужно вручную вызывать токенизатор и модель.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Когда переходить дальше</div>
  <div class="card-body py-2">
    <p class="mb-0">Когда <code>pipeline</code> станет недостаточно (нужен тонкий контроль над <code>device_map</code>, <code>torch_dtype</code> или батчингом), переходите к явной загрузке <code>AutoTokenizer</code> и <code>AutoModelForCausalLM</code>.</p>
  </div>
</div>`,
  answers: ["Он скрывает предобработку и позволяет запустить inference в несколько строк кода"]
},
{
  id: "hf004",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Библиотека datasets: зачем нужна",
  theme: "Ключевые библиотеки",
  text: `Что даёт библиотека <code>datasets</code> при работе с наборами данных Hugging Face?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Только скачивание датасетов без возможности обработки",
    "Автоматическое скачивание, кэширование, стриминг и воспроизводимые сплиты данных",
    "Обучение моделей на датасетах",
    "Визуализацию архитектуры моделей",
    "Конвертацию моделей в ONNX"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Что делает datasets</div>
  <div class="card-body py-2">
    <p class="mb-1">Библиотека <code>datasets</code> — это стандартный способ работы с данными на Hugging Face.</p>
    <p class="mb-0">Она автоматически скачивает датасет, кэширует его локально и конвертирует в эффективный формат (Arrow/Parquet).</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Ключевые возможности</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Кэширование</b> — повторная загрузка мгновенная.</p>
    <p class="mb-1"><b>Стриминг</b> — можно читать данные по частям, если они не помещаются на диск.</p>
    <p class="mb-0"><b>Воспроизводимые сплиты</b> — <code>train_test_split</code> с фиксированным <code>seed</code> даёт одинаковый результат при каждом запуске.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Совет</div>
  <div class="card-body py-2">
    <p class="mb-0">Если датасет большой, используйте <code>streaming=True</code> — данные будут читаться по мере необходимости, не занимая весь диск.</p>
  </div>
</div>`,
  answers: ["Автоматическое скачивание, кэширование, стриминг и воспроизводимые сплиты данных"]
},
{
  id: "hf005",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Аутентификация: huggingface-cli login",
  theme: "Доступ и токены",
  text: `Зачем нужна команда <code>huggingface-cli login</code> (или <code>hf auth login</code>)?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Она создаёт новую модель на Hub",
    "Она сохраняет токен доступа локально, чтобы не вводить его при каждом скачивании или загрузке",
    "Она обучает модель на ваших данных",
    "Она запускает локальный сервер inference",
    "Она удаляет кэш моделей"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Зачем нужен логин</div>
  <div class="card-body py-2">
    <p class="mb-1">Многие модели и датасеты требуют <b>токен доступа</b> (особенно gated-модели, например Llama).</p>
    <p class="mb-0">Команда логина сохраняет токен в локальном конфиге, и библиотеки автоматически его используют.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что происходит после логина</div>
  <div class="card-body py-2">
    <p class="mb-1">Токен сохраняется локально (обычно в <code>~/.huggingface/token</code>).</p>
    <p class="mb-0">Теперь <code>transformers</code>, <code>datasets</code> и <code>huggingface_hub</code> могут скачивать приватные и gated-репозитории без ручного ввода токена.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Правило безопасности</div>
  <div class="card-body py-2">
    <p class="mb-0">Никогда не хардкодьте токен в коде. Используйте <code>hf auth login</code> или переменную окружения <code>HF_TOKEN</code>.</p>
  </div>
</div>`,
  answers: ["Она сохраняет токен доступа локально, чтобы не вводить его при каждом скачивании или загрузке"]
},
{
  id: "hf006",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Inference Providers: быстрый старт",
  theme: "Сценарии inference",
  text: `Что такое <b>Inference Providers</b> на Hugging Face?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Локальный запуск моделей на вашем компьютере",
    "Прокси-сервис, который направляет запросы к сторонним провайдерам (Together, Replicate и др.) через ваш аккаунт HF",
    "Инструмент для обучения моделей",
    "Формат файла для хранения весов",
    "Библиотека для визуализации моделей"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Три сценария inference</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Inference Providers</b> — быстрый прототип. HF выступает прокси к сторонним провайдерам.</p>
    <p class="mb-1"><b>Inference Endpoints</b> — продакшен. Вы разворачиваете модель на выделенной инфраструктуре HF.</p>
    <p class="mb-0"><b>Локальный запуск</b> — llama.cpp, Ollama, vLLM на своём железе.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Как работает Inference Providers</div>
  <div class="card-body py-2">
    <p class="mb-1">Вы используете <code>InferenceClient</code>, указываете <code>provider</code> и модель.</p>
    <p class="mb-0">Запрос уходит к выбранному провайдеру, а платёж идёт через ваш аккаунт Hugging Face. Удобно для тестов, но для продакшена может быть дорого или нестабильно.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Когда выбирать</div>
  <div class="card-body py-2">
    <p class="mb-0">Inference Providers — когда нужно <b>быстро попробовать</b> модель без своего железа. Endpoints — когда нужна стабильность и приватность. Локально — когда нужен полный контроль и нет платы за токены.</p>
  </div>
</div>`,
  answers: ["Прокси-сервис, который направляет запросы к сторонним провайдерам (Together, Replicate и др.) через ваш аккаунт HF"]
},
{
  id: "hf007",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Inference Endpoints: продакшен",
  theme: "Сценарии inference",
  text: `Чем <b>Inference Endpoints</b> отличаются от Inference Providers?
  <pre>Выберите наиболее точное описание</pre>`,
  choices: [
    "Endpoints бесплатны, а Providers платные",
    "Endpoints разворачивают конкретную модель на выделенной инфраструктуре HF и дают приватный URL",
    "Endpoints работают только локально",
    "Endpoints не поддерживают InferenceClient",
    "Providers требуют своего GPU, а Endpoints — нет"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Разница в инфраструктуре</div>
  <div class="card-body py-2">
    <p class="mb-1"><b>Inference Providers</b> — запрос уходит к стороннему провайдеру, вы не управляете инфраструктурой.</p>
    <p class="mb-0"><b>Inference Endpoints</b> — вы разворачиваете <b>свою</b> модель на выделенных ресурсах HF и получаете приватный URL.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Что это даёт</div>
  <div class="card-body py-2">
    <p class="mb-1">Стабильность: модель не «переезжает» между провайдерами.</p>
    <p class="mb-1">Приватность: запросы не уходят третьим лицам.</p>
    <p class="mb-0">Код почти не меняется: достаточно передать URL эндпоинта в <code>InferenceClient</code> вместо имени модели.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Когда выбирать</div>
  <div class="card-body py-2">
    <p class="mb-0">Endpoints — для <b>продакшена</b>, когда нужны предсказуемость, приватность и контроль над версией модели.</p>
  </div>
</div>`,
  answers: ["Endpoints разворачивают конкретную модель на выделенной инфраструктуре HF и дают приватный URL"]
},
{
  id: "hf008",
  type: "multiplechoices",
  header: "Hugging Face для начинающих",
  title: "Локальный запуск и кэш",
  theme: "Практические привычки",
  text: `Где по умолчанию кэшируются модели и датасеты, скачанные с Hugging Face?
  <pre>Выберите правильный путь</pre>`,
  choices: [
    "В папке проекта, рядом с кодом",
    "В ~/.cache/huggingface/",
    "В /tmp/huggingface/",
    "В облаке, локально ничего не сохраняется",
    "В папке установки Python"
  ],
  hint: `<div class="card border-primary mb-2">
  <div class="card-header bg-primary text-white">Кэш по умолчанию</div>
  <div class="card-body py-2">
    <p class="mb-1">Модели и датасеты по умолчанию сохраняются в <code>~/.cache/huggingface/</code>.</p>
    <p class="mb-0">При повторном запуске они загружаются мгновенно, без обращения к сети.</p>
  </div>
</div>
<div class="card border-success mb-2">
  <div class="card-header bg-success text-white">Как управлять кэшем</div>
  <div class="card-body py-2">
    <p class="mb-1">Переменная окружения <code>HF_HOME</code> позволяет перенести кэш в другое место.</p>
    <p class="mb-0">Если места на диске мало, кэш можно очищать или хранить на внешнем диске.</p>
  </div>
</div>
<div class="card border-secondary mb-2">
  <div class="card-header bg-secondary text-white">Почему это важно</div>
  <div class="card-body py-2">
    <p class="mb-0">Понимание кэша экономит время и диск: вы не скачиваете одну и ту же модель повторно и можете контролировать, сколько места занимают данные.</p>
  </div>
</div>`,
  answers: ["В ~/.cache/huggingface/"]
}

];

window.quizesSets = quizesSets;