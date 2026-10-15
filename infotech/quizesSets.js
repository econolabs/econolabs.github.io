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

{
    id: "excel_logic_003",
    type: "mathwithrandomnumber",
    header: "Excel · Логические функции",
    title: "И: все условия истинны",
    theme: "Функции Excel",
    randomfrom: [0, 1, 2, 3],
    text: `
<div class="card">
  <div class="card-header bg-success text-white">Лист Excel — успеваемость</div>
  <div class="card-body">
    <svg viewBox="0 0 520 200" width="100%" style="max-width:520px; display:block; margin:0 auto; font-family:Consolas,monospace;">
      <rect x="0" y="0" width="520" height="200" fill="#fff" stroke="#adb5bd"/>
      <rect x="0" y="0" width="40" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="40" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="160" y="0" width="110" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="270" y="0" width="110" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <rect x="380" y="0" width="120" height="30" fill="#e9ecef" stroke="#adb5bd"/>
      <text x="20" y="20" text-anchor="middle" font-size="13" fill="#495057">A</text>
      <text x="100" y="20" text-anchor="middle" font-size="13" fill="#495057">B</text>
      <text x="215" y="20" text-anchor="middle" font-size="13" fill="#495057">C</text>
      <text x="325" y="20" text-anchor="middle" font-size="13" fill="#495057">D</text>
      <text x="440" y="20" text-anchor="middle" font-size="13" fill="#495057">E</text>
      <g font-size="13" fill="#212529">
        <text x="45" y="50">ФИО</text><text x="165" y="50">Матем</text><text x="275" y="50">Русский</text><text x="385" y="50">Информ</text><text x="440" y="50">Рез.</text>
        <text x="45" y="80">Иванов</text><text x="165" y="80">90</text><text x="275" y="80">85</text><text x="385" y="80">80</text><text x="440" y="80">?</text>
        <text x="45" y="110">Петров</text><text x="165" y="110">60</text><text x="275" y="110">95</text><text x="385" y="110">90</text><text x="440" y="110">?</text>
        <text x="45" y="140">Сидоров</text><text x="165" y="140">85</text><text x="275" y="140">70</text><text x="385" y="140">95</text><text x="440" y="140">?</text>
      </g>
      <g stroke="#dee2e6">
        <line x1="40" y1="0" x2="40" y2="150"/><line x1="160" y1="0" x2="160" y2="150"/>
        <line x1="270" y1="0" x2="270" y2="150"/><line x1="380" y1="0" x2="380" y2="150"/>
        <line x1="0" y1="30" x2="500" y2="30"/><line x1="0" y1="60" x2="500" y2="60"/>
        <line x1="0" y1="90" x2="500" y2="90"/><line x1="0" y1="120" x2="500" y2="120"/>
        <line x1="0" y1="150" x2="500" y2="150"/>
      </g>
      <rect x="0" y="160" width="520" height="30" fill="#f8f9fa" stroke="#adb5bd"/>
      <text x="10" y="180" font-size="13" fill="#0d6efd">fx</text>
      <text x="40" y="180" font-size="13" fill="#212529">=СУММ(ЕСЛИ(И(B2:D4&gt;=70);1;0))</text>
    </svg>
    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Сколько учеников получат «Сдал» (все оценки ≥ 70)? Введите число от 0 до 3.
    </div>
  </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-success text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Функция <strong>И</strong> возвращает ИСТИНА только если <em>все</em> условия истинны.</div>
    <div class="mt-3 mb-2">Проверяем каждого:</div>
    <ul class="mb-2">
      <li>Иванов: 90, 85, 80 → все ≥ 70 → <strong>Сдал</strong></li>
      <li>Петров: 60, 95, 90 → есть 60 &lt; 70 → Не сдал</li>
      <li>Сидоров: 85, 70, 95 → все ≥ 70 → <strong>Сдал</strong></li>
    </ul>
    <div class="mb-2">Значит, правильный ответ — <strong>2</strong>.</div>
    <div class="alert alert-success mt-3">
      Ответ: \\(\\boxed{{var1-10}}\\)
    </div>
  </div>
</div>`
},

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
    id: "code_sound_001",
    type: "mathwithrandomnumber",
    header: "ФИПИ · Кодирование информации",
    title: "Объём звукового файла",
    theme: "Кодирование звука",
    randomfrom: [938, 1875, 2580, 5160],
    text: `Моно-звукозапись, частота
    \\(\\mathbf{{= IF({var1-10}=938;8000;IF({var1-10}=1875;16000;IF({var1-10}=2580;22050;44100)))}}\\) Гц,
    глубина \\(16\\) бит, длительность \\(1\\) минуту.
    Какой объём (в Кбайт) займёт файл? Округлите до целого.
    <br><small class="text-muted">Введите число.</small>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Формула объёма звукозаписи:</div>
    <div class="text-center">$$V = \\frac{f \\cdot i \\cdot t}{8 \\cdot 1024}$$</div>
    <div class="mb-2">где \(f = {= IF({var1-10}=938;8000;IF({var1-10}=1875;16000;IF({var1-10}=2580;22050;44100)))}\\) Гц,
      \(i = 16\\), \(t = 60\\).</div>
    <div class="text-center">$$V = \\frac{{= IF({var1-10}=938;8000;IF({var1-10}=1875;16000;IF({var1-10}=2580;22050;44100)))} \\cdot 16 \\cdot 60}{8 \\cdot 1024} \\approx {var1-10}$$</div>
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
    \\(\\mathbf{{= {var1-10} \\cdot 8 / 24}}\\) битами.
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
    <div class="mb-2">где \(n = 24\\), \(i = {= {var1-10} \\cdot 8 / 24}\\) бит.</div>
    <div class="text-center">$$V = \\frac{24 \\cdot {= {var1-10} \\cdot 8 / 24}}{8} = {var1-10}\\ \\text{байт}$$</div>
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
{
    id: "cipher_caesar_001",
    type: "multiplechoices",
    header: "ФИПИ · Шифрование",
    title: "Шифр Цезаря: сдвиг 2",
    theme: "Классические шифры",
    text: `Слово «<strong>ИНФОРМАТИКА</strong>» зашифровано шифром Цезаря
    со сдвигом \(+2\) (А→В, Б→Г, …, Я→Б).
    Какая буква будет <strong>первой</strong> в шифре?`,
    choices: ["Й", "К", "Л", "М", "Н"],
    answers: ["Л"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Первая буква — <strong>И</strong>.</div>
    <div class="mb-2">Сдвигаем на \(+2\) по русскому алфавиту:</div>
    <div class="text-center">$$\\text{И} \\xrightarrow{+1} \\text{Й} \\xrightarrow{+1} \\text{Л}$$</div>
    <div class="mb-2">Проверка: \(И\\) — 10-я буква, \(+2\\) → 12-я = <strong>Л</strong>.</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\text{Л}}\\)
    </div>
  </div>
</div>`
},

{
    id: "cipher_caesar_002",
    type: "multiplechoices",
    header: "ФИПИ · Шифрование",
    title: "Шифр Цезаря: сдвиг 3",
    theme: "Классические шифры",
    text: `Слово «<strong>ПРИВЕТ</strong>» зашифровано шифром Цезаря
    со сдвигом \(+3\) (А→Г, Б→Д, …, Я→В).
    Какая буква будет <strong>первой</strong> в шифре?`,
    choices: ["Р", "С", "Т", "У", "Ф"],
    answers: ["У"],
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">Решение</div>
  <div class="card-body">
    <div class="mb-2">Первая буква — <strong>П</strong>.</div>
    <div class="mb-2">Сдвигаем на \(+3\\):</div>
    <div class="text-center">$$\\text{П} \\xrightarrow{+3} \\text{У}$$</div>
    <div class="mb-2">Проверка: \(П\\) — 17-я буква, \(+3\\) → 20-я = <strong>У</strong>.</div>
    <div class="alert alert-primary mt-3">
      Ответ: \\(\\boxed{\\text{У}}\\)
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
    id: "psy001",
    type: "multiplechoices",
    header: "SQL для психологических исследований",
    title: "LEFT JOIN с данными пациентов",
    theme: "Анализ терапевтических сессий",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Пациенты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Анна</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Борис</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Виктор</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Дарья</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Елена</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Сергей</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Сессии:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">patient_id</th><th class="p-1">дата</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-01-10</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-01-17</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>3</small></td><td class="p-1"><small>2024-01-15</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>5</small></td><td class="p-1"><small>2024-01-20</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>2024-01-18</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>8</small></td><td class="p-1"><small>2024-01-22</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-info mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Пациенты.id 
FROM Пациенты 
LEFT JOIN Сессии ON Пациенты.id = Сессии.patient_id 
WHERE Сессии.patient_id IS NULL</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id пациентов будут в результате?</p>
    </div>`,
    choices: [
      "2, 4, 6",
      "2, 4, 5, 6", 
      "2, 4",
      "1, 3, 5",
      "4, 5, 6"
    ],
    hint: "Ищем пациентов, у которых никогда не было сессий",
    answers: ["2, 4"]
  },
  {
    id: "psy002",
    type: "multiplechoices",
    header: "SQL для психологических исследований", 
    title: "RIGHT JOIN с тестами личности",
    theme: "Анализ пройденных тестов",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-success">Таблица Студенты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Ольга</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Иван</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Мария</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Алексей</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Наталья</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Дмитрий</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-success">Таблица Тесты_результаты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">student_id</th><th class="p-1">тест</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>MMPI</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>16-факторов</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>2</small></td><td class="p-1"><small>MMPI</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>4</small></td><td class="p-1"><small>СМИЛ</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>Айзенк</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>7</small></td><td class="p-1"><small>Кеттелл</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-warning mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Тесты_результаты.id 
FROM Студенты 
RIGHT JOIN Тесты_результаты ON Студенты.id = Тесты_результаты.student_id 
WHERE Студенты.id IS NOT NULL</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id из Тесты_результаты будут в результате?</p>
    </div>`,
    choices: [
      "1, 2, 3, 4, 5, 6",
      "1, 2, 3, 4", 
      "1, 2, 3, 4, 6",
      "5 только",
      "3, 4, 6"
    ],
    hint: "RIGHT JOIN сохраняет все результаты тестов, WHERE оставляет только те, где студент существует",
    answers: ["1, 2, 3, 4"]
  },
  {
    id: "psy003", 
    type: "multiplechoices",
    header: "SQL для психологических исследований",
    title: "LEFT JOIN с фильтрацией по дате",
    theme: "Анализ последних сессий",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-info">Таблица Клиенты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Артем</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Светлана</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Павел</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Ирина</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Михаил</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Юлия</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-info">Таблица Терапия:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">client_id</th><th class="p-1">дата</th><th class="p-1">длительность</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-03-01</small></td><td class="p-1"><small>60</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-03-08</small></td><td class="p-1"><small>45</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>3</small></td><td class="p-1"><small>2024-02-15</small></td><td class="p-1"><small>90</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>4</small></td><td class="p-1"><small>2024-03-10</small></td><td class="p-1"><small>60</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>2024-03-05</small></td><td class="p-1"><small>30</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>6</small></td><td class="p-1"><small>2024-02-28</small></td><td class="p-1"><small>120</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-success mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Клиенты.id 
FROM Клиенты 
LEFT JOIN Терапия ON Клиенты.id = Терапия.client_id 
WHERE Терапия.дата >= '2024-03-01'</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id клиентов будут в результате?</p>
    </div>`,
    choices: [
      "1, 3, 4, 5, 6",
      "1, 4, 6", 
      "1, 2, 3, 4, 6",
      "1, 4 только",
      "1, 3, 4, 6"
    ],
    hint: "LEFT JOIN сохраняет всех клиентов, но WHERE фильтрует только сессии с марта 2024",
    answers: ["1, 4, 6"]
  },
  {
    id: "psy004",
    type: "multiplechoices",
    header: "SQL для психологических исследований",
    title: "RIGHT JOIN с комплексным условием", 
    theme: "Анализ групповой терапии",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-warning">Таблица Участники:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Ксения</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Роман</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Алина</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Глеб</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Вероника</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Станислав</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-warning">Таблица Групповые_сессии:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">member_id</th><th class="p-1">группа</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>Тревожность</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>Депрессия</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>2</small></td><td class="p-1"><small>Тревожность</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>4</small></td><td class="p-1"><small>ПТСР</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>Горевание</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>9</small></td><td class="p-1"><small>Гнев</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-danger mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Групповые_сессии.id 
FROM Участники 
RIGHT JOIN Групповые_сессии ON Участники.id = Групповые_сессии.member_id 
WHERE Групповые_сессии.группа = 'Тревожность' OR Участники.id IS NULL</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id из Групповые_сессии будут в результате?</p>
    </div>`,
    choices: [
      "1, 3, 5, 6",
      "1, 3, 5", 
      "1, 2, 3, 5",
      "5, 6 только",
      "1, 3, 6"
    ],
    hint: "RIGHT JOIN сохраняет все групповые сессии, WHERE оставляет сессии по тревожности ИЛИ без участника",
    answers: ["1, 3, 5"]
  },
  {
    id: "psy005",
    type: "multiplechoices",
    header: "SQL для психологических исследований", 
    title: "LEFT JOIN с условием в JOIN",
    theme: "Фильтрация методов терапии",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Психологи:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Доктор А</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Доктор Б</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Доктор В</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Доктор Г</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Доктор Д</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Доктор Е</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Сеансы:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">psych_id</th><th class="p-1">метод</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>Гештальт</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>2</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>3</small></td><td class="p-1"><small>Психоанализ</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>6</small></td><td class="p-1"><small>КПТ</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-info mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Психологи.id 
FROM Психологи 
LEFT JOIN Сеансы ON Психологи.id = Сеансы.psych_id AND Сеансы.метод = 'КПТ'</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id психологов будут в результате?</p>
    </div>`,
    choices: [
      "1, 2, 3, 4, 5, 6",
      "1, 2, 3, 6", 
      "1, 3, 5, 6",
      "1, 3 только",
      "1, 2, 3, 4, 6"
    ],
    hint: "LEFT JOIN сохраняет всех психологов, но соединяет только с сеансами КПТ",
    answers: ["1, 2, 3, 4, 5, 6"]
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
    hint: "Последний JOIN и фильтр по p.id IS NULL - ключевые",
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
    hint: "RIGHT JOIN сохраняет все продукты, COUNT считает только существующие продажи",
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
    hint: "LEFT JOIN с подзапросом сохраняет всех пользователей",
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
    hint: "OR o.customer_id IS NULL включает клиентов без заказов",
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
    hint: "HAVING работает с результатами агрегации после GROUP BY",
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
    hint: "RIGHT JOIN сохраняет все курсы, WHERE фильтрует те, где нет записей",
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
    hint: "COALESCE возвращает первый не-NULL аргумент",
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
    hint: "e2 - это потенциальные подчиненные, их отсутствие означает нет подчиненных",
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
    hint: "Подзапрос возвращает последнюю запись из истории цен для каждого продукта",
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
    hint: "INNER JOIN после LEFT JOIN фильтрует окончательный результат",
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
    hint: "Фильтр WHERE o.user_id IS NULL ищет строки, где соединение не найдено",
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
    hint: "RIGHT JOIN возвращает все отделы, а WHERE фильтрует только те, где есть сотрудники",
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
    hint: "Условие c.name = 'Электроника' в JOIN фильтрует соединение, но не строки продуктов",
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
    hint: "LEFT JOIN и RIGHT JOIN - зеркальные операции",
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
    hint: "В Запросе 1 условие в JOIN, в Запросе 2 - в WHERE. Подумайте о строках, где B IS NULL",
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



];

window.quizesSets = quizesSets;