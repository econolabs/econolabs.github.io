let quizesSets = [

 
    {
    "id": "synonyms001",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Эмбеддинг — как сказать по-русски",
    "theme": "Терминология RAG и векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": "Какой из перечисленных терминов является наиболее точным русскоязычным синонимом английского слова 'embedding' в контексте нейросетей?",
    "choices": [
      "Внедрение",
      "Векторное представление (смысловой вектор)",
      "Встраивание",
      "Кодировка"
    ],
    "answers": ["Векторное представление (смысловой вектор)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Как перевести "embedding" на русский?</h5>
        <p>Английское слово "embedding" в контексте нейросетей не имеет одного устоявшегося перевода.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Основные варианты перевода</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Векторное представление</strong> — наиболее точный и понятный для русскоязычных студентов вариант</li>
            <li><strong>Смысловой вектор</strong> — подчёркивает семантический смысл</li>
            <li><strong>Эмбеддинг</strong> — прямая транслитерация (часто используется в профессиональной среде)</li>
            <li><strong>Вложенное представление</strong> — калька с английского, редко используется</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Запомните:</strong> Эмбеддинг — это <strong>вектор чисел</strong>, который кодирует смысл текста, изображения или другого объекта.
      </div>
    </div>`
  },
  {
    "id": "synonyms002",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'токен'",
    "theme": "Терминология RAG и векторов",
    "text": "В контексте работы больших языковых моделей (LLM) английское слово 'token' лучше всего переводится на русский язык как:",
    "choices": [
      "Маркер",
      "Символ",
      "Единица текста (часть слова, слово или знак препинания)",
      "Жетон"
    ],
    "answers": ["Единица текста (часть слова, слово или знак препинания)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое токен?</h5>
        <p>Токен — это минимальная единица текста, которую обрабатывает языковая модель.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода 'token'</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Токен</strong> — прямая транслитерация (самый распространённый вариант в IT-среде)</li>
            <li><strong>Единица текста</strong> — описательный, понятный для начинающих</li>
            <li><strong>Лексема</strong> — термин из лингвистики, но в AI используется редко</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Маркер' — используется в контексте разметки (markup).<br>
        • 'Символ' — слишком узко (токен может быть целым словом).<br>
        • 'Жетон' — бытовое значение, не имеет отношения к IT.
      </div>
    </div>`
  },
  {
    "id": "synonyms003",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'similarity'",
    "theme": "Терминология RAG и векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": "В контексте сравнения векторов английское слово 'similarity' ('cosine similarity') лучше всего переводится как:",
    "choices": [
      "Идентичность",
      "Сходство (или мера сходства)",
      "Равенство",
      "Корреляция"
    ],
    "answers": ["Сходство (или мера сходства)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Cosine similarity — косинусное сходство</h5>
        <p>Это мера того, насколько два вектора направлены в одну сторону.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Правильный перевод</strong>
        </div>
        <div class="card-body">
          <p><strong>Cosine similarity = Косинусное сходство</strong> (или косинусная близость)</p>
          <p>Это стандартный термин в русскоязычной математической и IT-литературе.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Идентичность' — слишком сильное слово (означает полное совпадение).<br>
        • 'Равенство' — подразумевает точное равенство векторов.<br>
        • 'Корреляция' — статистический термин, имеет другой смысл.
      </div>
    </div>`
  },
  {
    "id": "synonyms004",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Retrieval'",
    "theme": "Терминология RAG и векторов",
    "text": "В аббревиатуре RAG буква 'R' означает 'Retrieval'. Как лучше всего перевести это слово на русский язык в контексте RAG?",
    "choices": [
      "Извлечение (или поиск)",
      "Сохранение",
      "Восстановление",
      "Ретроспектива"
    ],
    "answers": ["Извлечение (или поиск)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что означает Retrieval в RAG?</h5>
        <p>RAG = Retrieval-Augmented Generation — <strong>поиск</strong> (извлечение) + <strong>дополнение</strong> + <strong>генерация</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода 'retrieval'</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Поиск</strong> — наиболее понятный и распространённый вариант</li>
            <li><strong>Извлечение</strong> — более точный, но менее употребимый</li>
            <li><strong>Поиск информации</strong> — полный, но длинный вариант</li>
          </ul>
          <p>В RAG речь идёт о том, чтобы <strong>найти</strong> в базе знаний релевантные документы.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Сохранение' — это хранение (storage), а не поиск.<br>
        • 'Восстановление' — восстановление удалённых данных.<br>
        • 'Ретроспектива' — взгляд в прошлое, не имеет отношения к поиску.
      </div>
    </div>`
  },
  {
    "id": "synonyms005",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Augmented'",
    "theme": "Терминология RAG и векторов",
    "text": "В аббревиатуре RAG буква 'A' означает 'Augmented'. Как лучше всего перевести это слово на русский язык в контексте RAG?",
    "choices": [
      "Увеличенный",
      "Дополненный (контекстом)",
      "Расширенный",
      "Улучшенный"
    ],
    "answers": ["Дополненный (контекстом)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что означает Augmented в RAG?</h5>
        <p>RAG = Retrieval-<strong>Augmented</strong> Generation — поиск + <strong>дополнение</strong> + генерация.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Смысл термина 'Augmented'</strong>
        </div>
        <div class="card-body">
          <p>В RAG мы <strong>дополняем</strong> запрос пользователя найденными документами (контекстом).</p>
          <p>Запрос + Контекст → LLM → Ответ</p>
          <p>Поэтому 'augmented' лучше всего переводить как <strong>дополненный</strong>.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Увеличенный' — про размер, а не про добавление контекста.<br>
        • 'Расширенный' — тоже про размер, менее точен.<br>
        • 'Улучшенный' — слишком общее слово.
      </div>
    </div>`
  },
  {
    "id": "synonyms006",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Hallucination'",
    "theme": "Терминология RAG и векторов",
    "text": "Английское слово 'hallucination' применительно к работе LLM (больших языковых моделей) на русский язык чаще всего переводят как:",
    "choices": [
      "Ошибка",
      "Галлюцинация (выдумка модели)",
      "Шум",
      "Артефакт"
    ],
    "answers": ["Галлюцинация (выдумка модели)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Галлюцинация в LLM</h5>
        <p>Это когда модель генерирует информацию, которая звучит правдоподобно, но не соответствует действительности.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Галлюцинация</strong> — прямая транслитерация, устоявшийся термин в AI-сообществе</li>
            <li><strong>Выдумка модели</strong> — описательный, понятный для начинающих вариант</li>
            <li><strong>Ложный факт</strong> — также используется</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Пример галлюцинации:</strong><br>
        Вопрос: "Какой документ нужен для вычета?"<br>
        Ответ LLM (галлюцинация): "Форма КНД-1151080"<br>
        Реальность: Такой формы не существует.
      </div>
    </div>`
  },
  {
    "id": "synonyms007",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Chunking'",
    "theme": "Терминология RAG и векторов",
    "text": "В контексте RAG английское слово 'chunking' лучше всего переводится на русский язык как:",
    "choices": [
      "Сжатие",
      "Нарезка (разбиение документа на фрагменты)",
      "Кэширование",
      "Фрагментация"
    ],
    "answers": ["Нарезка (разбиение документа на фрагменты)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое чанкинг?</h5>
        <p>Чанкинг — это процесс разбиения большого документа на небольшие фрагменты (чанки).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Нарезка</strong> — самый понятный для начинающих вариант</li>
            <li><strong>Разбиение на чанки</strong> — профессиональный термин, часто используется</li>
            <li><strong>Сегментация</strong> — более научный термин</li>
          </ul>
          <p>Цель чанкинга: получить кусочки текста, которые поместятся в контекстное окно LLM.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Сжатие' — уменьшение объёма данных.<br>
        • 'Кэширование' — сохранение результатов для ускорения.<br>
        • 'Фрагментация' — хаотичное разрушение целостности.
      </div>
    </div>`
  },
  {
    "id": "synonyms008",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Context Window'",
    "theme": "Терминология RAG и векторов",
    "text": "Выражение 'context window' применительно к работе LLM на русский язык лучше всего переводится как:",
    "choices": [
      "Контекстное окно (максимальное количество токенов, которое модель может обработать за раз)",
      "Окно обзора",
      "Рабочая область",
      "Память модели"
    ],
    "answers": ["Контекстное окно (максимальное количество токенов, которое модель может обработать за раз)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое контекстное окно?</h5>
        <p>Это максимальное количество токенов, которое LLM может "видеть" одновременно.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Примеры размеров контекстного окна</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>GPT-3.5: 4K–16K токенов</li>
            <li>GPT-4 Turbo: 128K токенов</li>
            <li>Gemini 1.5 Pro: 2 млн токенов</li>
            <li>DeepSeek-V3: 128K–1M токенов</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Что входит в контекстное окно?</strong><br>
        Системный промпт + найденные RAG-чанки + история диалога + запрос пользователя + ответ модели.
      </div>
    </div>`
  },
  {
    "id": "synonyms009",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слов 'Recall' и 'Precision'",
    "theme": "Терминология RAG и векторов",
    "text": "В метриках качества поиска английские термины 'recall' и 'precision' на русский язык традиционно переводятся как:",
    "choices": [
      "Вспоминание и точность",
      "Полнота и точность",
      "Память и аккуратность",
      "Охват и правильность"
    ],
    "answers": ["Полнота и точность"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Recall и Precision — стандартные метрики поиска</h5>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Recall (Полнота)</strong>
            </div>
            <div class="card-body">
              <p>Сколько релевантных документов мы нашли из всех существующих?</p>
              <p class="text-center">$$Recall = \\frac{TP}{TP + FN}$$</p>
              <p>Пример: В базе 10 релевантных документов. Система нашла 8. Recall = 0.8</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Precision (Точность)</strong>
            </div>
            <div class="card-body">
              <p>Сколько из найденных документов действительно релевантны?</p>
              <p class="text-center">$$Precision = \\frac{TP}{TP + FP}$$</p>
              <p>Пример: Система нашла 10 документов, из них 8 релевантны. Precision = 0.8</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Запомните:</strong> Полнота (Recall) отвечает на вопрос "ничего не упустили?", а Точность (Precision) — "тому, что нашли, можно верить?".
      </div>
    </div>`
  },
  {
    "id": "synonyms010",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'LLM'",
    "theme": "Терминология RAG и векторов",
    "text": "Английская аббревиатура LLM (Large Language Model) на русский язык чаще всего расшифровывается и переводится как:",
    "choices": [
      "Большая языковая модель",
      "Крупная лингвистическая машина",
      "Модель большого языка",
      "Глубокая нейросеть"
    ],
    "answers": ["Большая языковая модель"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>LLM — Large Language Model</h5>
        <p>Это нейросеть, обученная на огромных объёмах текста и способная генерировать связный текст.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Примеры LLM</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>GPT-4 / GPT-4o</strong> (OpenAI)</li>
            <li><strong>DeepSeek-V3</strong> (DeepSeek)</li>
            <li><strong>GigaChat</strong> (Сбер)</li>
            <li><strong>YandexGPT</strong> (Яндекс)</li>
            <li><strong>Claude</strong> (Anthropic)</li>
            <li><strong>Gemini</strong> (Google)</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Почему 'большая'?</strong><br>
        Потому что модель содержит миллиарды параметров (например, GPT-3 — 175 млрд параметров) и обучена на терабайтах текста.
      </div>
    </div>`
  },
 
  {
    "id": "unit_vectors001",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Определение единичного вектора",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Какой вектор называется единичным?`,
    "choices": [
      "Вектор, все координаты которого равны 1",
      "Вектор, длина (норма) которого равна 1",
      "Вектор, у которого только одна координата отлична от нуля",
      "Вектор, который лежит на координатной оси"
    ],
    "answers": ["Вектор, длина (норма) которого равна 1"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Единичный вектор</h5>
        <p><strong>Единичный вектор</strong> (или <strong>орт</strong>) — это вектор, длина (норма, модуль) которого равна 1.</p>
        <p class="text-center">$$||\\mathbf{e}|| = 1$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Обозначения единичных векторов</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>В математике: $\\mathbf{e}$, $\\hat{\\mathbf{v}}$, $\\mathbf{u}$</li>
            <li>Базисные векторы: $\\mathbf{i} = (1,0,0)$, $\\mathbf{j} = (0,1,0)$, $\\mathbf{k} = (0,0,1)$</li>
            <li>В машинном обучении: нормализованный вектор $\\frac{\\mathbf{v}}{||\\mathbf{v}||}$</li>
          </ul>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Примеры</strong>
        </div>
        <div class="card-body">
          <p>Единичные векторы в 2D:</p>
          <ul>
            <li>$\\mathbf{e}_1 = (1, 0)$ — длина $\\sqrt{1^2 + 0^2} = 1$</li>
            <li>$\\mathbf{e}_2 = (0, 1)$ — длина $\\sqrt{0^2 + 1^2} = 1$</li>
            <li>$\\mathbf{e}_3 = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}) \\approx (0.707, 0.707)$ — длина $\\sqrt{0.5 + 0.5} = 1$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • "Все координаты равны 1" — это вектор (1,1,1), его длина $\\sqrt{3} \\approx 1.73$, не единичная.<br>
        • "Только одна координата отлична от нуля" — это базисный вектор, но он может иметь длину не равную 1 (например, (2,0,0) имеет длину 2).<br>
        • "Лежит на координатной оси" — это направление, а не условие единичной длины.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors002",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Нормализация вектора",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Как получить единичный вектор из произвольного вектора $\\mathbf{v} \\neq \\mathbf{0}$?`,
    "choices": [
      "Разделить вектор на его длину: $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$",
      "Умножить вектор на его длину: $\\mathbf{e} = \\mathbf{v} \\cdot ||\\mathbf{v}||$",
      "Возвести координаты вектора в квадрат",
      "Обнулить все координаты, кроме первой"
    ],
    "answers": ["Разделить вектор на его длину: $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Нормализация вектора</h5>
        <p><strong>Нормализация</strong> — это процесс приведения вектора к единичной длине с сохранением направления.</p>
        <p class="text-center">$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$$</p>
        <p>где $\\hat{\\mathbf{v}}$ — единичный вектор в направлении $\\mathbf{v}$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример нормализации</strong>
        </div>
        <div class="card-body">
          <p>Дан вектор $\\mathbf{v} = (3, 4)$</p>
          <p>Длина вектора: $||\\mathbf{v}|| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$</p>
          <p>Единичный вектор: $\\hat{\\mathbf{v}} = \\frac{(3,4)}{5} = (0.6, 0.8)$</p>
          <p>Проверка: $||\\hat{\\mathbf{v}}|| = \\sqrt{0.6^2 + 0.8^2} = \\sqrt{0.36 + 0.64} = \\sqrt{1} = 1$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Зачем нужна нормализация в AI?</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>В RAG-системах эмбеддинги нормализуют, чтобы ускорить поиск</li>
            <li>Косинусное сходство нормализованных векторов = скалярному произведению</li>
            <li>Улучшает численную стабильность алгоритмов</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Запомните:</strong> Нормализация сохраняет <strong>направление</strong>, но меняет <strong>длину</strong> на 1.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors003",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Скалярное произведение единичных векторов",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно скалярное произведение двух единичных векторов $\\mathbf{e}_1$ и $\\mathbf{e}_2$?`,
    "choices": [
      "Длине вектора $\\mathbf{e}_1$",
      "Косинусу угла между ними: $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$",
      "Сумме их координат",
      "Единице всегда"
    ],
    "answers": ["Косинусу угла между ними: $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Скалярное произведение единичных векторов</h5>
        <p>Для любых двух векторов: $\\mathbf{a} \\cdot \\mathbf{b} = ||\\mathbf{a}|| \\cdot ||\\mathbf{b}|| \\cdot \\cos \\theta$</p>
        <p>Если $||\\mathbf{e}_1|| = 1$ и $||\\mathbf{e}_2|| = 1$, то:</p>
        <p class="text-center">$$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$$</p>
        <p>где $\\theta$ — угол между векторами.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример: сонаправленные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (1, 0)$</p>
              <p>$\\theta = 0^\\circ$, $\\cos 0^\\circ = 1$</p>
              <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 1 + 0 \\cdot 0 = 1$</p>
              <p class="text-center">✅ $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример: перпендикулярные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (0, 1)$</p>
              <p>$\\theta = 90^\\circ$, $\\cos 90^\\circ = 0$</p>
              <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 0 + 0 \\cdot 1 = 0$</p>
              <p class="text-center">✅ $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 0$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Пример: угол 60°</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (\\cos 60^\\circ, \\sin 60^\\circ) = (0.5, 0.866)$</p>
          <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 0.5 + 0 \\cdot 0.866 = 0.5 = \\cos 60^\\circ$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Главная формула:</strong> $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$ — это основа косинусного сходства в RAG-системах!
      </div>
    </div>`
  },
  {
    "id": "unit_vectors004",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Ортогональные единичные векторы",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Чему равно скалярное произведение двух перпендикулярных (ортогональных) единичных векторов?`,
    "choices": [
      "1",
      "-1",
      "0",
      "Зависит от длины векторов"
    ],
    "answers": ["0"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Ортогональные единичные векторы</h5>
        <p>Два вектора называются <strong>ортогональными</strong>, если угол между ними равен $90^\\circ$ (перпендикулярны).</p>
        <p class="text-center">$$\\mathbf{e}_1 \\perp \\mathbf{e}_2 \\quad \\Rightarrow \\quad \\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos 90^\\circ = 0$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример в 2D</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{i} = (1, 0)$ — единичный вектор по оси X</p>
              <p>$\\mathbf{j} = (0, 1)$ — единичный вектор по оси Y</p>
              <p>$\\mathbf{i} \\cdot \\mathbf{j} = 1 \\cdot 0 + 0 \\cdot 1 = 0$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример в 3D</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{i} = (1, 0, 0)$</p>
              <p>$\\mathbf{k} = (0, 0, 1)$</p>
              <p>$\\mathbf{i} \\cdot \\mathbf{k} = 1 \\cdot 0 + 0 \\cdot 0 + 0 \\cdot 1 = 0$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-info mb-3">
        <div class="card-header bg-info text-white">
          <strong>Ортонормированный базис</strong>
        </div>
        <div class="card-body">
          <p>Система векторов называется <strong>ортонормированной</strong>, если:</p>
          <ul>
            <li>Каждый вектор единичный: $||\\mathbf{e}_i|| = 1$</li>
            <li>Векторы попарно ортогональны: $\\mathbf{e}_i \\cdot \\mathbf{e}_j = 0$ при $i \\neq j$</li>
          </ul>
          <p>Пример: $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ в трёхмерном пространстве.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>В RAG:</strong> Ортогональные векторы означают, что тексты имеют совершенно разный смысл (связанные понятия дают $\\cos \\theta > 0$, противоположные — $\\cos \\theta < 0$).
      </div>
    </div>`
  },
  {
    "id": "unit_vectors005",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Скалярное произведение вектора и единичного",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно скалярное произведение произвольного вектора $\\mathbf{v}$ и единичного вектора $\\mathbf{e}$ в направлении $\\mathbf{v}$?`,
    "choices": [
      "$||\\mathbf{v}||$ (длине вектора $\\mathbf{v}$)",
      "1",
      "$\\mathbf{v}$",
      "$||\\mathbf{v}||^2$"
    ],
    "answers": ["$||\\mathbf{v}||$ (длине вектора $\\mathbf{v}$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Проекция вектора на направление</h5>
        <p>Если $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$ — единичный вектор в направлении $\\mathbf{v}$, то:</p>
        <p class="text-center">$$\\mathbf{v} \\cdot \\mathbf{e} = \\mathbf{v} \\cdot \\frac{\\mathbf{v}}{||\\mathbf{v}||} = \\frac{\\mathbf{v} \\cdot \\mathbf{v}}{||\\mathbf{v}||} = \\frac{||\\mathbf{v}||^2}{||\\mathbf{v}||} = ||\\mathbf{v}||$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{v} = (3, 4)$</p>
          <p>$||\\mathbf{v}|| = 5$</p>
          <p>$\\mathbf{e} = \\frac{(3,4)}{5} = (0.6, 0.8)$</p>
          <p>$\\mathbf{v} \\cdot \\mathbf{e} = 3 \\cdot 0.6 + 4 \\cdot 0.8 = 1.8 + 3.2 = 5 = ||\\mathbf{v}||$</p>
        </div>
      </div>
      
      <div class="card border-info mb-3">
        <div class="card-header bg-info text-white">
          <strong>Геометрический смысл</strong>
        </div>
        <div class="card-body">
          <p>Скалярное произведение $\\mathbf{v} \\cdot \\mathbf{e}$ — это <strong>проекция</strong> вектора $\\mathbf{v}$ на направление $\\mathbf{e}$.</p>
          <p>Если $\\mathbf{e}$ сонаправлен с $\\mathbf{v}$, проекция равна длине $\\mathbf{v}$.</p>
          <p>Если $\\mathbf{e}$ перпендикулярен $\\mathbf{v}$, проекция равна 0.</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>В RAG:</strong> Это объясняет, почему косинусное сходство = скалярному произведению нормализованных векторов.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors006",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "title": "Скалярное произведение одинаковых единичных векторов",
    "theme": "Произведение единичных векторов",
    "text": `Чему равно скалярное произведение единичного вектора самого на себя: $\\mathbf{e} \\cdot \\mathbf{e}$?`,
    "choices": [
      "0",
      "1",
      "$||\\mathbf{e}||$",
      "$\\mathbf{e}$"
    ],
    "answers": ["1"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Скалярный квадрат единичного вектора</h5>
        <p>Для любого вектора: $\\mathbf{a} \\cdot \\mathbf{a} = ||\\mathbf{a}||^2$</p>
        <p>Для единичного вектора $||\\mathbf{e}|| = 1$, поэтому:</p>
        <p class="text-center">$$\\mathbf{e} \\cdot \\mathbf{e} = 1^2 = 1$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример в 2D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e} = (0.6, 0.8)$</p>
          <p>$\\mathbf{e} \\cdot \\mathbf{e} = 0.6 \\cdot 0.6 + 0.8 \\cdot 0.8 = 0.36 + 0.64 = 1$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Проверка через косинус</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e} \\cdot \\mathbf{e} = ||\\mathbf{e}|| \\cdot ||\\mathbf{e}|| \\cdot \\cos 0^\\circ = 1 \\cdot 1 \\cdot 1 = 1$</p>
          <p>Угол между вектором и самим собой = $0^\\circ$, $\\cos 0^\\circ = 1$.</p>
        </div>
      </div>
      
      <div class="alert alert-info mt-2">
        <strong>Запомните:</strong> Для базисных векторов: $\\mathbf{i} \\cdot \\mathbf{i} = 1$, $\\mathbf{j} \\cdot \\mathbf{j} = 1$, $\\mathbf{k} \\cdot \\mathbf{k} = 1$.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors007",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Косинусное сходство через единичные векторы",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Как выразить косинусное сходство между векторами $\\mathbf{a}$ и $\\mathbf{b}$ через их единичные векторы $\\hat{\\mathbf{a}}$ и $\\hat{\\mathbf{b}}$?`,
    "choices": [
      "$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$",
      "$\\cos \\theta = \\hat{\\mathbf{a}} + \\hat{\\mathbf{b}}$",
      "$\\cos \\theta = ||\\hat{\\mathbf{a}} - \\hat{\\mathbf{b}}||$",
      "$\\cos \\theta = \\frac{\\hat{\\mathbf{a}}}{\\hat{\\mathbf{b}}}$"
    ],
    "answers": ["$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Косинусное сходство и нормализация</h5>
        <p>Для любых двух векторов:</p>
        <p class="text-center">$$\\cos \\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{||\\mathbf{a}|| \\cdot ||\\mathbf{b}||}$$</p>
        <p>Если ввести единичные векторы $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{||\\mathbf{a}||}$ и $\\hat{\\mathbf{b}} = \\frac{\\mathbf{b}}{||\\mathbf{b}||}$, то:</p>
        <p class="text-center">$$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Численный пример</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{b} = (6, 8)$ — сонаправленные векторы</p>
          <p>$||\\mathbf{a}|| = 5$, $\\hat{\\mathbf{a}} = (0.6, 0.8)$</p>
          <p>$||\\mathbf{b}|| = 10$, $\\hat{\\mathbf{b}} = (0.6, 0.8)$</p>
          <p>$\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}} = 0.6 \\cdot 0.6 + 0.8 \\cdot 0.8 = 0.36 + 0.64 = 1$</p>
          <p>$\\cos \\theta = 1$ → угол $0^\\circ$, векторы сонаправлены ✅</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Почему это важно для RAG?</strong>
        </div>
        <div class="card-body">
          <p>В RAG-системах эмбеддинги часто нормализуют (приводят к единичной длине).</p>
          <p>Тогда поиск по косинусному сходству становится просто <strong>скалярным произведением</strong>:</p>
          <p class="text-center">$$\\text{сходство} = \\hat{\\mathbf{q}} \\cdot \\hat{\\mathbf{d}}$$</p>
          <p>Это сильно ускоряет вычисления!</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "unit_vectors008",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Проекция вектора на направление",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равна проекция вектора $\\mathbf{a}$ на направление единичного вектора $\\mathbf{e}$?`,
    "choices": [
      "$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярная проекция)",
      "$\\mathbf{a} + \\mathbf{e}$",
      "$\\frac{\\mathbf{a}}{\\mathbf{e}}$",
      "$||\\mathbf{a}|| \\cdot \\mathbf{e}$"
    ],
    "answers": ["$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярная проекция)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Проекция вектора на ось</h5>
        <p><strong>Скалярная проекция</strong> вектора $\\mathbf{a}$ на направление единичного вектора $\\mathbf{e}$:</p>
        <p class="text-center">$$\\text{пр}_{\\mathbf{e}} \\mathbf{a} = \\mathbf{a} \\cdot \\mathbf{e} = ||\\mathbf{a}|| \\cos \\theta$$</p>
        <p>где $\\theta$ — угол между $\\mathbf{a}$ и $\\mathbf{e}$.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример 1: проекция на ось X</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{i} = (1, 0)$</p>
              <p>$\\mathbf{a} \\cdot \\mathbf{i} = 3 \\cdot 1 + 4 \\cdot 0 = 3$</p>
              <p>Проекция на ось X = 3 ✅</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример 2: проекция на направление (1,1)</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{e} = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}) \\approx (0.707, 0.707)$</p>
              <p>$\\mathbf{a} \\cdot \\mathbf{e} \\approx 3 \\cdot 0.707 + 4 \\cdot 0.707 = 2.121 + 2.828 = 4.949$</p>
              <p>$\\approx ||\\mathbf{a}|| \\cos 45^\\circ = 5 \\cdot 0.707 = 3.535$ — Не сходится? Проверьте:</p>
              <p class="text-danger">Ошибка: $\\mathbf{a} \\cdot \\mathbf{e} = 4.95$, а $||\\mathbf{a}||\\cos45° = 3.54$. Разница из-за того, что $\\mathbf{e}$ не является направлением $\\mathbf{a}$! Проекция — это НЕ разложение по базису.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Векторная проекция</strong>
        </div>
        <div class="card-body">
          <p>Чтобы получить <strong>вектор проекции</strong>, нужно скалярную проекцию умножить на единичный вектор:</p>
          <p class="text-center">$$\\mathbf{a}_{\\parallel} = (\\mathbf{a} \\cdot \\mathbf{e}) \\cdot \\mathbf{e}$$</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "unit_vectors009",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Разложение вектора по ортонормированному базису",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Как найти координату вектора $\\mathbf{a}$ вдоль единичного вектора $\\mathbf{e}$ в ортонормированном базисе?`,
    "choices": [
      "$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярное произведение)",
      "$\\frac{\\mathbf{a}}{\\mathbf{e}}$",
      "$\\mathbf{a} + \\mathbf{e}$",
      "$||\\mathbf{a}|| \\cdot \\mathbf{e}$"
    ],
    "answers": ["$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярное произведение)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Разложение по ортонормированному базису</h5>
        <p>Если $\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n$ — ортонормированный базис ($\\mathbf{e}_i \\cdot \\mathbf{e}_j = 0$ при $i \\neq j$, $\\mathbf{e}_i \\cdot \\mathbf{e}_i = 1$), то любой вектор раскладывается:</p>
        <p class="text-center">$$\\mathbf{a} = (\\mathbf{a} \\cdot \\mathbf{e}_1)\\mathbf{e}_1 + (\\mathbf{a} \\cdot \\mathbf{e}_2)\\mathbf{e}_2 + \\cdots + (\\mathbf{a} \\cdot \\mathbf{e}_n)\\mathbf{e}_n$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример в 2D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (3, 4)$ — в стандартном базисе $\\mathbf{i} = (1,0)$, $\\mathbf{j} = (0,1)$</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{i} = 3$ → координата по X</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{j} = 4$ → координата по Y</p>
          <p>$\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$ ✅</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример в 3D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (2, -1, 5)$</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{i} = 2$, $\\mathbf{a} \\cdot \\mathbf{j} = -1$, $\\mathbf{a} \\cdot \\mathbf{k} = 5$</p>
          <p>$\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 5\\mathbf{k}$ ✅</p>
        </div>
      </div>
      
      <div class="alert alert-info mt-2">
        <strong>В контексте AI:</strong> Эмбеддинги — это координаты вектора в некотором базисе. Скалярное произведение с базисными векторами "извлекает" нужную компоненту смысла.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors010",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Расстояние между единичными векторами",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно евклидово расстояние между двумя единичными векторами $\\mathbf{e}_1$ и $\\mathbf{e}_2$?`,
    "choices": [
      "$\\sqrt{2 - 2\\cos \\theta}$",
      "$\\sqrt{2}$",
      "$1 - \\cos \\theta$",
      "$\\sqrt{1 + \\cos \\theta}$"
    ],
    "answers": ["$\\sqrt{2 - 2\\cos \\theta}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Расстояние между единичными векторами</h5>
        <p>Евклидово расстояние между двумя единичными векторами $\\mathbf{e}_1$ и $\\mathbf{e}_2$:</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = (\\mathbf{e}_1 - \\mathbf{e}_2) \\cdot (\\mathbf{e}_1 - \\mathbf{e}_2) = \\mathbf{e}_1 \\cdot \\mathbf{e}_1 - 2\\mathbf{e}_1 \\cdot \\mathbf{e}_2 + \\mathbf{e}_2 \\cdot \\mathbf{e}_2$$</p>
        <p>Так как $\\mathbf{e}_1 \\cdot \\mathbf{e}_1 = 1$, $\\mathbf{e}_2 \\cdot \\mathbf{e}_2 = 1$, а $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$:</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = 1 - 2\\cos \\theta + 1 = 2 - 2\\cos \\theta$$</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2\\cos \\theta}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример: одинаковые векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = \\mathbf{e}_2 = (1,0)$</p>
              <p>$\\theta = 0^\\circ$, $\\cos \\theta = 1$</p>
              <p>$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2 \\cdot 1} = \\sqrt{0} = 0$ ✅</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример: перпендикулярные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1,0)$, $\\mathbf{e}_2 = (0,1)$</p>
              <p>$\\theta = 90^\\circ$, $\\cos \\theta = 0$</p>
              <p>$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2 \\cdot 0} = \\sqrt{2} \\approx 1.414$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Связь с косинусным сходством</strong>
        </div>
        <div class="card-body">
          <p>Из формулы видно: чем ближе $\\cos \\theta$ к 1 (высокое сходство), тем меньше расстояние.</p>
          <p>Это ещё одно объяснение, почему косинусное сходство — хорошая мера для RAG: расстояние между нормализованными векторами монотонно связано с косинусом.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Полезное тождество:</strong> $||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = 2(1 - \\cos \\theta)$
      </div>
    </div>`
  },

  
  {
    "id": "matrix_op_001",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Сложение матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$\n\nНайдите матрицу $C = A + B$.",
    "choices": [
      "$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Сложение матриц</h5>\n<p>При сложении матриц складываются соответствующие элементы:</p>\n<p class='text-center'>$(A + B)_{ij} = a_{ij} + b_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 1 + 5 = 6$</p>\n<p>$c_{12} = 2 + 6 = 8$</p>\n<p>$c_{21} = 3 + 7 = 10$</p>\n<p>$c_{22} = 4 + 8 = 12$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_002",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Вычитание матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 10 & 20 \\\\ 30 & 40 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$\n\nНайдите матрицу $C = A - B$.",
    "choices": [
      "$\\begin{pmatrix} 9 & 18 \\\\ 27 & 36 \\end{pmatrix}$",
      "$\\begin{pmatrix} 11 & 22 \\\\ 33 & 44 \\end{pmatrix}$",
      "$\\begin{pmatrix} 10 & 20 \\\\ 30 & 40 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 9 & 18 \\\\ 27 & 36 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Вычитание матриц</h5>\n<p>При вычитании матриц вычитаются соответствующие элементы:</p>\n<p class='text-center'>$(A - B)_{ij} = a_{ij} - b_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 10 - 1 = 9$</p>\n<p>$c_{12} = 20 - 2 = 18$</p>\n<p>$c_{21} = 30 - 3 = 27$</p>\n<p>$c_{22} = 40 - 4 = 36$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_003",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Умножение матрицы на число",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$\n\nНайдите матрицу $B = 3A$.",
    "choices": [
      "$\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Умножение матрицы на число</h5>\n<p>При умножении матрицы на число каждый элемент матрицы умножается на это число:</p>\n<p class='text-center'>$(\\lambda A)_{ij} = \\lambda \\cdot a_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$b_{11} = 3 \\cdot 1 = 3$</p>\n<p>$b_{12} = 3 \\cdot 2 = 6$</p>\n<p>$b_{21} = 3 \\cdot 3 = 9$</p>\n<p>$b_{22} = 3 \\cdot 4 = 12$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_004",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Умножение матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$$\n\nНайдите произведение $C = A \\times B$.",
    "choices": [
      "$\\begin{pmatrix} 4 & 4 \\\\ 10 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 8 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 4 & 4 \\\\ 10 & 8 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Умножение матриц</h5>\n<p>Для матриц $A$ размером $2 \\times 2$ и $B$ размером $2 \\times 2$:</p>\n<p class='text-center'>$c_{ij} = a_{i1} b_{1j} + a_{i2} b_{2j}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 1\\cdot2 + 2\\cdot1 = 2 + 2 = 4$</p>\n<p>$c_{12} = 1\\cdot0 + 2\\cdot2 = 0 + 4 = 4$</p>\n<p>$c_{21} = 3\\cdot2 + 4\\cdot1 = 6 + 4 = 10$</p>\n<p>$c_{22} = 3\\cdot0 + 4\\cdot2 = 0 + 8 = 8$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_005",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Транспонирование матрицы",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$\n\nНайдите транспонированную матрицу $A^T$.",
    "choices": [
      "$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 4 & 6 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Транспонирование матрицы</h5>\n<p>При транспонировании строки становятся столбцами, а столбцы — строками.</p>\n<p>Если $A$ имеет размер $m \\times n$, то $A^T$ имеет размер $n \\times m$.</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>Исходная матрица $A$: 2 строки, 3 столбца</p>\n<p>$A^T$ будет иметь: 3 строки, 2 столбца</p>\n<p>1-й столбец $A$ → 1-я строка $A^T$: $(1, 4)$</p>\n<p>2-й столбец $A$ → 2-я строка $A^T$: $(2, 5)$</p>\n<p>3-й столбец $A$ → 3-я строка $A^T$: $(3, 6)$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_006",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Детерминант матрицы 2×2",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$$",
    "choices": [
      "$\\det(A) = 24$",
      "$\\det(A) = 10$",
      "$\\det(A) = 38$",
      "$\\det(A) = 14$"
    ],
    "answers": ["$\\det(A) = 10$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 2×2</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:</p>\n<p class='text-center'>$\\det(A) = a \\cdot d - b \\cdot c$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_007",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 3×3",
    "title": "Детерминант матрицы 3×3 (правило Саррюса)",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$$",
    "choices": [
      "$\\det(A) = 0$",
      "$\\det(A) = 15$",
      "$\\det(A) = 9$",
      "$\\det(A) = 27$"
    ],
    "answers": ["$\\det(A) = 0$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 3×3 (правило Саррюса)</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$:</p>\n<p class='text-center'>$\\det(A) = aei + bfg + cdh - ceg - bdi - afh$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 1\\cdot5\\cdot9 + 2\\cdot6\\cdot7 + 3\\cdot4\\cdot8 - 3\\cdot5\\cdot7 - 2\\cdot4\\cdot9 - 1\\cdot6\\cdot8$</p>\n<p>$= 45 + 84 + 96 - 105 - 72 - 48$</p>\n<p>$= 225 - 225 = 0$</p>\n<p class='mt-2'><strong>Примечание:</strong> Матрица вырожденная (строки линейно зависимы).</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_008",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 3×3",
    "title": "Детерминант матрицы 3×3",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$B = \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 4 \\\\ 1 & 0 & 2 \\end{pmatrix}$$",
    "choices": [
      "$\\det(B) = 5$",
      "$\\det(B) = 3$",
      "$\\det(B) = 0$",
      "$\\det(B) = 8$"
    ],
    "answers": ["$\\det(B) = 3$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 3×3 (разложение по строке)</h5>\n<p>Удобно разложить по строке, содержащей нули. Разложим по первой строке:</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(B) = 2 \\cdot \\begin{vmatrix} 1 & 4 \\\\ 0 & 2 \\end{vmatrix} - 0 \\cdot \\begin{vmatrix} 3 & 4 \\\\ 1 & 2 \\end{vmatrix} + 1 \\cdot \\begin{vmatrix} 3 & 1 \\\\ 1 & 0 \\end{vmatrix}$</p>\n<p>$= 2 \\cdot (1\\cdot2 - 4\\cdot0) + 1 \\cdot (3\\cdot0 - 1\\cdot1)$</p>\n<p>$= 2 \\cdot 2 + 1 \\cdot (-1) = 4 - 1 = 3$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_009",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Обратная матрица 2×2",
    "theme": "Действия с матрицами",
    "text": "Найдите обратную матрицу для:\n\n$$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$$\n\n(напомним: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$)",
    "choices": [
      "$\\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "$\\frac{1}{10} \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "$\\frac{1}{10} \\begin{pmatrix} -6 & 7 \\\\ 2 & -4 \\end{pmatrix}$"
    ],
    "answers": ["$\\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Обратная матрица 2×2</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:</p>\n<p class='text-center'>$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$</p>\n<p>при условии, что $\\det(A) = ad - bc \\neq 0$.</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$</p>\n<p>$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$</p>\n<p>Проверка: $A \\cdot A^{-1} = E$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_010",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Единичная и нулевая матрицы",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$\n\nЧему равно произведение $A \\cdot E$, где $E$ — единичная матрица $2 \\times 2$?",
    "choices": [
      "$A$",
      "$E$",
      "$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = A$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answers": ["A"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Единичная матрица</h5>\n<p>Единичная матрица $E$ — это квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули.</p>\n<p class='text-center'>$E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Основное свойство</strong>\n</div>\n<div class='card-body'>\n<p>Для любой матрицы $A$ (согласованного размера):</p>\n<p class='text-center'>$A \\cdot E = E \\cdot A = A$</p>\n<p>Единичная матрица играет роль <strong>единицы</strong> в матричной алгебре.</p>\n</div>\n</div>\n<div class='card border-success mb-3'>\n<div class='card-header bg-success text-white'>\n<strong>Проверка для 2×2</strong>\n</div>\n<div class='card-body'>\n<p>$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} a\\cdot1 + b\\cdot0 & a\\cdot0 + b\\cdot1 \\\\ c\\cdot1 + d\\cdot0 & c\\cdot0 + d\\cdot1 \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$</p>\n</div>\n</div>\n</div>"
  }
,


  {
    "id": "vectordb001",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое векторная база данных?",
    "theme": "Векторные базы данных",
    "text": "Что такое векторная база данных (Vector Database) простыми словами?",
    "choices": [
      "Обычная база данных, где числа хранятся в виде векторов",
      "База данных, которая хранит эмбеддинги (смысловые векторы) и умеет быстро находить похожие",
      "База данных для хранения только текстовых файлов",
      "База данных, которая работает только на видеокартах"
    ],
    "answers": ["База данных, которая хранит эмбеддинги (смысловые векторы) и умеет быстро находить похожие"],
    "hint": "<div class='alert alert-info'>Векторная БД — это специализированное хранилище, где каждый документ превращён в набор чисел (вектор). Главная её суперспособность — быстро находить документы, <strong>похожие по смыслу</strong>, а не по точному совпадению слов.</div>"
  },
  {
    "id": "vectordb002",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Чем векторная БД отличается от обычной SQL?",
    "theme": "Векторные базы данных",
    "text": "В чём главное отличие векторной базы данных от обычной SQL-базы (например, PostgreSQL)?",
    "choices": [
      "Векторная БД не умеет хранить текст, только числа",
      "Векторная БД ищет похожие по смыслу, а SQL — по точному совпадению",
      "Векторная БД работает медленнее SQL",
      "Векторная БД не поддерживает фильтрацию"
    ],
    "answers": ["Векторная БД ищет похожие по смыслу, а SQL — по точному совпадению"],
    "hint": "<div class='alert alert-primary'>SQL ищет: WHERE name = 'Иванов' (точное совпадение). Векторная БД ищет: 'найди документы, похожие на запрос пользователя' (понимает синонимы и контекст).</div>"
  },
  {
    "id": "vectordb003",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое эмбеддинг?",
    "theme": "Векторные базы данных",
    "text": "Что такое эмбеддинг (embedding) в контексте векторных баз данных?",
    "choices": [
      "Изображение, вставленное в документ",
      "Числовой вектор, который кодирует смысл текста, картинки или другого объекта",
      "Специальный индекс для ускорения поиска",
      "Метод шифрования данных"
    ],
    "answers": ["Числовой вектор, который кодирует смысл текста, картинки или другого объекта"],
    "hint": "<div class='alert alert-secondary'>Эмбеддинг — это 'цифровой слепок' смысла. Например, фраза 'кот спит' превращается в набор чисел [0.12, -0.34, 0.56, ...], который понимает компьютер.</div>"
  },
  {
    "id": "vectordb004",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Для чего нужны векторные БД в RAG?",
    "theme": "Векторные базы данных",
    "text": "Зачем в RAG-системах используют векторные базы данных?",
    "choices": [
      "Чтобы хранить историю диалогов пользователей",
      "Чтобы быстро находить документы, релевантные запросу пользователя, и передавать их LLM как контекст",
      "Чтобы заменять LLM (большие языковые модели)",
      "Чтобы шифровать пользовательские данные"
    ],
    "answers": ["Чтобы быстро находить документы, релевантные запросу пользователя, и передавать их LLM как контекст"],
    "hint": "<div class='alert alert-success'>RAG = Поиск + Генерация. Векторная БД отвечает за ПОИСК: она находит нужные фрагменты документов, которые затем отправляются LLM для ответа.</div>"
  },
  {
    "id": "vectordb005",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Поиск по смыслу",
    "theme": "Векторные базы данных",
    "text": "Что означает 'поиск по смыслу' (semantic search) в векторных БД?",
    "choices": [
      "Поиск документов, в которых есть точное совпадение слов из запроса",
      "Поиск документов, которые близки по смыслу к запросу, даже если слова разные",
      "Поиск документов, отсортированных по дате создания",
      "Поиск документов по автору"
    ],
    "answers": ["Поиск документов, которые близки по смыслу к запросу, даже если слова разные"],
    "hint": "<div class='alert alert-info'>Пример: Вы ищете 'как купить машину'. Обычный поиск найдёт только фразы со словами 'купить' и 'машина'. Поиск по смыслу найдёт также 'приобрести авто', 'стоимость автомобиля' и т.д.</div>"
  },
  {
    "id": "vectordb006",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Примеры векторных БД",
    "theme": "Векторные базы данных",
    "text": "Какая из перечисленных баз данных является векторной (предназначена для хранения эмбеддингов и поиска по смыслу)?",
    "choices": [
      "MySQL",
      "PostgreSQL (без расширений)",
      "Chroma",
      "MongoDB (обычная версия)"
    ],
    "answers": ["Chroma"],
    "hint": "<div class='alert alert-secondary'>Популярные векторные БД: <strong>Chroma, FAISS, Qdrant, Milvus, Pinecone, Weaviate</strong>. MySQL и обычный PostgreSQL не умеют эффективно искать по эмбеддингам (нужны специальные расширения).</div>"
  },
  {
    "id": "vectordb007",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое ANN?",
    "theme": "Векторные базы данных",
    "text": "Что означает аббревиатура ANN в контексте векторных баз данных?",
    "choices": [
      "Artificial Neural Network (искусственная нейронная сеть)",
      "Approximate Nearest Neighbor (приближённый поиск ближайших соседей)",
      "Absolute Number Notation (абсолютная числовая нотация)",
      "Array of Numpy Nodes"
    ],
    "answers": ["Approximate Nearest Neighbor (приближённый поиск ближайших соседей)"],
    "hint": "<div class='alert alert-primary'>ANN — это класс алгоритмов, которые ищут не строго ближайших, а 'достаточно близких' соседей. Это позволяет искать среди миллионов векторов за миллисекунды, жертвуя небольшой точностью.</div>"
  },
  {
    "id": "vectordb008",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Косинусное сходство",
    "theme": "Векторные базы данных",
    "text": "Какая метрика чаще всего используется в векторных БД для измерения 'похожести' двух векторов?",
    "choices": [
      "Сумма координат",
      "Косинусное сходство (cosine similarity)",
      "Произведение координат",
      "Разность координат"
    ],
    "answers": ["Косинусное сходство (cosine similarity)"],
    "hint": "<div class='alert alert-success'>Косинусное сходство измеряет угол между векторами. Если угол маленький — текст похож по смыслу. Если угол 90° — смыслы разные. Значения от 0 до 1.</div>"
  },
  {
    "id": "vectordb009",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Гибридный поиск",
    "theme": "Векторные базы данных",
    "text": "Что такое 'гибридный поиск' (hybrid search) в векторных базах данных?",
    "choices": [
      "Поиск одновременно в двух разных базах данных",
      "Объединение векторного поиска (по смыслу) и полнотекстового (по ключевым словам)",
      "Поиск с использованием двух разных языковых моделей",
      "Поиск только в зашифрованных данных"
    ],
    "answers": ["Объединение векторного поиска (по смыслу) и полнотекстового (по ключевым словам)"],
    "hint": "<div class='alert alert-info'>Гибридный поиск комбинирует два метода: векторный (находит синонимы) и полнотекстовый (находит точные термины, например, номер закона). Результат — лучшее из обоих миров.</div>"
  },
  {
    "id": "vectordb010",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Индексация в векторных БД",
    "theme": "Векторные базы данных",
    "text": "Зачем в векторных базах данных нужна 'индексация' (indexing)?",
    "choices": [
      "Чтобы сжимать данные для экономии места",
      "Чтобы ускорить поиск похожих векторов (чтобы не перебирать все документы каждый раз)",
      "Чтобы шифровать данные для безопасности",
      "Чтобы удалять дубликаты документов"
    ],
    "answers": ["Чтобы ускорить поиск похожих векторов (чтобы не перебирать все документы каждый раз)"],
    "hint": "<div class='alert alert-secondary'>Без индексации при каждом запросе пришлось бы сравнивать вектор запроса с каждым из миллионов векторов в базе. Это очень медленно. Индексы (HNSW, IVF) помогают находить похожие документы в сотни раз быстрее.</div>"
  },

  {
    "id": "matrix001",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Определение матрицы",
    "theme": "Виды и свойства матриц",
    "text": `Что называется матрицей размера $m \\times n$?`,
    "choices": [
      "Упорядоченный набор из $m$ чисел",
      "Прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов",
      "Квадратная таблица чисел",
      "Вектор, у которого $m$ координат"
    ],
    "answers": ["Прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Определение матрицы</h5>
        <p>Матрица размера $m \\times n$ — это прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов.</p>
        <p class="text-center">$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Обозначения</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$m$ — количество строк</li>
            <li>$n$ — количество столбцов</li>
            <li>$a_{ij}$ — элемент, стоящий на пересечении $i$-й строки и $j$-го столбца</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Пример:</strong> Матрица $A$ размера $2 \\times 3$:
        $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix002",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Квадратная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Какая матрица называется квадратной?`,
    "choices": [
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой число строк равно числу столбцов ($m = n$)",
      "Матрица, у которой все элементы на главной диагонали равны единице",
      "Матрица, состоящая из одной строки"
    ],
    "answers": ["Матрица, у которой число строк равно числу столбцов ($m = n$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Квадратная матрица</h5>
        <p>Матрица называется <strong>квадратной</strong>, если количество строк равно количеству столбцов: $m = n$.</p>
        <p class="text-center">$$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\quad \\text{(матрица $3 \\times 3$)}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Главная диагональ</strong>
            </div>
            <div class="card-body">
              <p>Элементы $a_{11}, a_{22}, a_{33}, \\dots, a_{nn}$ образуют <strong>главную диагональ</strong> квадратной матрицы.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Порядок матрицы</strong>
            </div>
            <div class="card-body">
              <p>Число $n$ называется <strong>порядком</strong> квадратной матрицы.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Примеры квадратных матриц:</strong> $1 \\times 1$, $2 \\times 2$, $3 \\times 3$, $4 \\times 4$ и т.д.
      </div>
    </div>`
  },
  {
    "id": "matrix003",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Единичная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Что такое единичная матрица?`,
    "choices": [
      "Матрица, у которой все элементы равны единице",
      "Квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули",
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой определитель равен единице"
    ],
    "answers": ["Квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Единичная матрица</h5>
        <p>Единичная матрица (обозначается $E$ или $I$) — это квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули.</p>
        <p class="text-center">$$E = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Свойство единичной матрицы</strong>
        </div>
        <div class="card-body">
          <p>При умножении на единичную матрицу любая матрица не меняется:</p>
          <p class="text-center">$$A \\cdot E = E \\cdot A = A$$</p>
          <p>Единичная матрица играет роль <strong>единицы</strong> в матричной алгебре.</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Пример:</strong> Единичная матрица $2 \\times 2$:
        $$E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix004",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Нулевая матрица",
    "theme": "Виды и свойства матриц",
    "text": `Что такое нулевая матрица?`,
    "choices": [
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой определитель равен нулю",
      "Матрица, не имеющая ни одной строки",
      "Матрица, у которой все элементы на главной диагонали равны нулю"
    ],
    "answers": ["Матрица, у которой все элементы равны нулю"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Нулевая матрица</h5>
        <p>Нулевая матрица (обозначается $O$ или $0$) — это матрица любого размера, все элементы которой равны нулю.</p>
        <p class="text-center">$$O = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Свойство нулевой матрицы</strong>
        </div>
        <div class="card-body">
          <p>При умножении на нулевую матрицу (согласованного размера) получается нулевая матрица:</p>
          <p class="text-center">$$A \\cdot O = O \\cdot A = O$$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Пример:</strong> Нулевая матрица $2 \\times 3$:
        $$O = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix005",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Транспонирование матрицы",
    "theme": "Операции над матрицами",
    "text": `Что получится в результате транспонирования матрицы $A$ размера $m \\times n$?`,
    "choices": [
      "Матрица $A^T$ размера $m \\times n$, в которой строки и столбцы поменялись местами",
      "Матрица $A^T$ размера $n \\times m$, в которой строки и столбцы поменялись местами",
      "Матрица, обратная к $A$",
      "Определитель матрицы $A$"
    ],
    "answers": ["Матрица $A^T$ размера $n \\times m$, в которой строки и столбцы поменялись местами"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Транспонирование матрицы</h5>
        <p>Транспонирование — это операция, при которой строки матрицы становятся столбцами, а столбцы — строками.</p>
        <p>Если $A$ имела размер $m \\times n$, то $A^T$ имеет размер $n \\times m$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример транспонирования</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$</p>
          <p>Размер $A$: $2 \\times 3$ → Размер $A^T$: $3 \\times 2$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Свойства транспонирования:</strong>
        <ul>
          <li>$(A^T)^T = A$</li>
          <li>$(A + B)^T = A^T + B^T$</li>
          <li>$(AB)^T = B^T A^T$</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix006",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Сложение матриц",
    "theme": "Операции над матрицами",
    "text": `При каком условии можно сложить две матрицы $A$ и $B$?`,
    "choices": [
      "Если число строк $A$ равно числу столбцов $B$",
      "Если матрицы имеют одинаковый размер ($m \\times n$)",
      "Если матрицы квадратные",
      "Если определители матриц не равны нулю"
    ],
    "answers": ["Если матрицы имеют одинаковый размер ($m \\times n$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Сложение матриц</h5>
        <p>Складывать можно только матрицы <strong>одинакового размера</strong>.</p>
        <p>При сложении складываются соответствующие элементы:</p>
        <p class="text-center">$$(A + B)_{ij} = a_{ij} + b_{ij}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример сложения матриц $2 \\times 2$</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$</p>
          <p>$$A + B = \\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Свойства сложения:</strong>
        <ul>
          <li>$A + B = B + A$ (коммутативность)</li>
          <li>$(A + B) + C = A + (B + C)$ (ассоциативность)</li>
          <li>$A + O = A$ (существование нейтрального элемента)</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix007",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Умножение матрицы на число",
    "theme": "Операции над матрицами",
    "text": `Как выполняется умножение матрицы $A$ на число $\\lambda$?`,
    "choices": [
      "Каждый элемент матрицы умножается на $\\lambda$",
      "Умножается только первая строка матрицы",
      "Умножаются только элементы главной диагонали",
      "Матрица возводится в степень $\\lambda$"
    ],
    "answers": ["Каждый элемент матрицы умножается на $\\lambda$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение матрицы на число</h5>
        <p>При умножении матрицы $A$ на число $\\lambda$ каждый элемент матрицы умножается на это число:</p>
        <p class="text-center">$$(\\lambda A)_{ij} = \\lambda \\cdot a_{ij}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример умножения на число</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad \\lambda = 3$$</p>
          <p>$$3A = \\begin{pmatrix} 3 \\cdot 1 & 3 \\cdot 2 \\\\ 3 \\cdot 3 & 3 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Свойства:</strong>
        <ul>
          <li>$\\lambda(\\mu A) = (\\lambda\\mu)A$</li>
          <li>$(\\lambda + \\mu)A = \\lambda A + \\mu A$</li>
          <li>$\\lambda(A + B) = \\lambda A + \\lambda B$</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix008",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Умножение матриц",
    "theme": "Операции над матрицами",
    "text": `При каком условии можно умножить матрицу $A$ размера $m \\times n$ на матрицу $B$ размера $p \\times q$?`,
    "choices": [
      "Если $m = p$",
      "Если $n = q$",
      "Если $n = p$ (число столбцов $A$ равно числу строк $B$)",
      "Если матрицы квадратные"
    ],
    "answers": ["Если $n = p$ (число столбцов $A$ равно числу строк $B$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение матриц</h5>
        <p>Умножать можно только <strong>согласованные</strong> матрицы: число столбцов первой матрицы должно равняться числу строк второй.</p>
        <p>Если $A$ имеет размер $m \\times n$, а $B$ — размер $n \\times k$, то произведение $C = A \\cdot B$ имеет размер $m \\times k$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Формула умножения</strong>
        </div>
        <div class="card-body">
          <p>Элемент $c_{ij}$ матрицы-произведения вычисляется как скалярное произведение $i$-й строки $A$ и $j$-го столбца $B$:</p>
          <p class="text-center">$$c_{ij} = \\sum_{k=1}^{n} a_{ik} \\cdot b_{kj}$$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример умножения $2 \\times 2$</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$</p>
          <p>$$AB = \\begin{pmatrix} 1\\cdot5+2\\cdot7 & 1\\cdot6+2\\cdot8 \\\\ 3\\cdot5+4\\cdot7 & 3\\cdot6+4\\cdot8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-warning mt-2">
        <strong>Важно:</strong> Умножение матриц <strong>не коммутативно</strong>! $AB \\neq BA$ в общем случае.
      </div>
    </div>`
  },
  {
    "id": "matrix009",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Диагональная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Какая матрица называется диагональной?`,
    "choices": [
      "Квадратная матрица, у которой все элементы вне главной диагонали равны нулю",
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой все элементы на главной диагонали равны единице",
      "Матрица, у которой число строк равно числу столбцов"
    ],
    "answers": ["Квадратная матрица, у которой все элементы вне главной диагонали равны нулю"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Диагональная матрица</h5>
        <p>Диагональная матрица — это квадратная матрица, у которой все элементы вне главной диагонали равны нулю.</p>
        <p class="text-center">$$D = \\begin{pmatrix} d_{1} & 0 & 0 \\\\ 0 & d_{2} & 0 \\\\ 0 & 0 & d_{3} \\end{pmatrix}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример диагональной матрицы</strong>
            </div>
            <div class="card-body">
              <p>$$\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Частные случаи</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>Скалярная матрица: $d_1 = d_2 = \\cdots = d_n = c$</li>
                <li>Единичная матрица: $c = 1$</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },
  {
    "id": "matrix010",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Единичная и нулевая матрицы",
    "theme": "Виды и свойства матриц",
    "text": `Чему равно произведение $A \\cdot O$ для квадратной матрицы $A$ и нулевой матрицы $O$ того же размера?`,
    "choices": [
      "$A$",
      "$E$ (единичная матрица)",
      "$O$ (нулевая матрица)",
      "$A^2$"
    ],
    "answers": ["$O$ (нулевая матрица)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение на нулевую матрицу</h5>
        <p>При умножении любой матрицы на нулевую матрицу (согласованного размера) результатом всегда будет нулевая матрица.</p>
        <p class="text-center">$$A \\cdot O = O \\cdot A = O$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример $2 \\times 2$</strong>
            </div>
            <div class="card-body">
              <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$$</p>
              <p>$$A \\cdot O = \\begin{pmatrix} 1\\cdot0+2\\cdot0 & 1\\cdot0+2\\cdot0 \\\\ 3\\cdot0+4\\cdot0 & 3\\cdot0+4\\cdot0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = O$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">
              <strong>Аналогия с числами</strong>
            </div>
            <div class="card-body">
              <p>Нулевая матрица для умножения — это аналог <strong>нуля</strong> для чисел:</p>
              <p class="text-center">$$a \\cdot 0 = 0 \\cdot a = 0$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Для сравнения:</strong> Умножение на единичную матрицу даёт исходную матрицу: $A \\cdot E = E \\cdot A = A$.
      </div>
    </div>`
  }
,

  
 
  {
    "id": "linalg001",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Векторы и эмбеддинги",
    "theme": "Векторы в машинном обучении",
    "text": `Что такое эмбеддинг (embedding) в контексте нейросетей и RAG?`,
    "choices": [
      "Специальный язык разметки для структурирования текста",
      "Числовое представление текста, изображения или другого объекта в виде вектора фиксированной размерности",
      "База данных для хранения документов",
      "Метод сжатия изображений без потерь"
    ],
    "answers": ["Числовое представление текста, изображения или другого объекта в виде вектора фиксированной размерности"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое эмбеддинг?</h5>
        <p>Эмбеддинг — это вектор чисел, который кодирует "смысл" объекта. Похожие объекты получают близкие векторы.</p>
        <p class="text-center">кот → [0.12, -0.34, 0.56, 0.78, -0.21]</p>
        <p class="text-center">кошка → [0.13, -0.35, 0.55, 0.79, -0.22]</p>
        <p class="text-center"><strong>Косинусное сходство ≈ 0.95</strong> — очень похожи!</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Почему эмбеддинги важны для RAG</strong>
        </div>
        <div class="card-body">
          <p>RAG (Retrieval-Augmented Generation) использует эмбеддинги для поиска релевантных документов:</p>
          <ol>
            <li>Каждый документ превращается в эмбеддинг и сохраняется в базе</li>
            <li>Запрос пользователя тоже превращается в эмбеддинг</li>
            <li>Поиск находит документы с самыми близкими векторами</li>
            <li>LLM отвечает, опираясь на найденные документы</li>
          </ol>
          <p>Без эмбеддингов поиск по смыслу был бы невозможен!</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Специальный язык разметки — это Markdown, HTML, XML.<br>
        • База данных для хранения документов — это векторная БД (Chroma, FAISS).<br>
        • Метод сжатия изображений — это JPEG, PNG, WebP.
      </div>
    </div>`
  },
  {
    "id": "linalg002",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Матрицы как хранилище векторов",
    "theme": "Матрицы в машинном обучении",
    "text": `Если у вас есть N = 10 000 документов, каждый из которых превращён в эмбеддинг размерности d = 384, какую размерность будет иметь матрица, хранящая все эмбеддинги?`,
    "choices": [
      "$N \\times N$ (10 000 × 10 000)",
      "$d \\times d$ (384 × 384)",
      "$N \\times d$ (10 000 × 384)",
      "$d \\times N$ (384 × 10 000)"
    ],
    "answers": ["$N \\times d$ (10 000 × 384)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Матрица эмбеддингов</h5>
        <p>В матрице строки соответствуют объектам (документам), а столбцы — координатам вектора.</p>
        <p class="text-center">Матрица $E$ размера $N \\times d$</p>
        <p>$$E = \\begin{bmatrix} e_{11} & e_{12} & \\cdots & e_{1d} \\\\ e_{21} & e_{22} & \\cdots & e_{2d} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ e_{N1} & e_{N2} & \\cdots & e_{Nd} \\end{bmatrix}$$</p>
        <p>Каждая строка $E_i$ — это эмбеддинг i-го документа.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример для N=3, d=4</strong>
        </div>
        <div class="card-body">
          <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E = [[0.1, 0.2, 0.3, 0.4],   # документ 1
     [0.5, 0.6, 0.7, 0.8],   # документ 2
     [0.9, 1.0, 1.1, 1.2]]   # документ 3</pre>
          <p>Размер матрицы: <strong>3 × 4</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Почему N × d, а не d × N?</strong><br>
        В большинстве библиотек (NumPy, PyTorch, TensorFlow) принято, что первая размерность — это количество объектов (batch size), а вторая — признаки. Это стандарт де-факто.
      </div>
    </div>`
  },
  {
    "id": "linalg003",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Косинусное сходство",
    "theme": "Меры близости векторов",
    "text": `Какая метрика чаще всего используется для сравнения текстовых эмбеддингов в RAG-системах и почему?`,
    "choices": [
      "Евклидово расстояние — оно показывает прямое расстояние между точками",
      "Косинусное сходство — оно измеряет угол между векторами и не зависит от их длины",
      "Манхэттенское расстояние — оно устойчиво к выбросам",
      "Расстояние Чебышёва — оно учитывает максимальную разницу по координатам"
    ],
    "answers": ["Косинусное сходство — оно измеряет угол между векторами и не зависит от их длины"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Формула косинусного сходства</h5>
        <p class="text-center">$$\\cos(\\theta) = \\frac{a \\cdot b}{||a|| \\times ||b||} = \\frac{\\sum_{i=1}^{d} a_i b_i}{\\sqrt{\\sum_{i=1}^{d} a_i^2} \\cdot \\sqrt{\\sum_{i=1}^{d} b_i^2}}$$</p>
        <p>Результат лежит в диапазоне $[-1, 1]$. Для неотрицательных эмбеддингов — $[0, 1]$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Почему не евклидово расстояние?</strong>
        </div>
        <div class="card-body">
          <p>Евклидово расстояние $||a-b||$ зависит от длины векторов.</p>
          <p>Представьте три вектора:</p>
          <ul>
            <li><strong>a</strong> = [1, 0] (длина 1)</li>
            <li><strong>b</strong> = [10, 0] (длина 10) — коллинеарен a, но длиннее</li>
            <li><strong>c</strong> = [0, 1] (длина 1) — перпендикулярен a</li>
          </ul>
          <p>По смыслу a и b должны быть похожи (оба про одно). Но евклидово расстояние $||a-b|| = 9$ больше, чем $||a-c|| = \\sqrt{2} \\approx 1.41$.</p>
          <p><strong>Косинусное сходство:</strong> $\\cos(a,b) = 1$, $\\cos(a,c) = 0$ — правильно!</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Когда использовать евклидово расстояние?</strong><br>
        Если важна длина вектора (например, в задачах регрессии или кластеризации с однородными признаками).
      </div>
    </div>`
  },
  {
    "id": "linalg004",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Скалярное произведение",
    "theme": "Линейная алгебра в поиске",
    "text": `В каких условиях косинусное сходство между двумя векторами эквивалентно их скалярному произведению?`,
    "choices": [
      "Если векторы имеют нулевую длину",
      "Если векторы нормализованы (приведены к единичной длине)",
      "Если векторы ортогональны друг другу",
      "Если векторы состоят только из целых чисел"
    ],
    "answers": ["Если векторы нормализованы (приведены к единичной длине)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Косинусное сходство и скалярное произведение</h5>
        <p class="text-center">$$\\cos(\\theta) = \\frac{a \\cdot b}{||a|| \\cdot ||b||}$$</p>
        <p>Если $||a|| = 1$ и $||b|| = 1$, то знаменатель равен 1, и остаётся только скалярное произведение:</p>
        <p class="text-center">$$\\cos(\\theta) = a \\cdot b$$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Нормализация векторов</strong>
        </div>
        <div class="card-body">
          <p>Нормализация (L2-нормализация) приводит вектор к единичной длине:</p>
          <p class="text-center">$$a_{\\text{norm}} = \\frac{a}{||a||}$$</p>
          <p>Пример:</p>
          <p>a = [3, 4], $||a|| = 5$ → a_norm = [0.6, 0.8]</p>
          <p><strong>В RAG-системах эмбеддинги часто нормализуют</strong>, чтобы ускорить поиск: поиск становится просто скалярным произведением.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Нулевая длина — вектор-ноль, бесполезен для поиска.<br>
        • Ортогональные векторы: $a \\cdot b = 0$, косинусное сходство = 0 (но это частный случай, а не общее правило).<br>
        • Целые числа не влияют на равенство.
      </div>
    </div>`
  },
  {
    "id": "linalg005",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Проблема масштабирования поиска",
    "theme": "Векторные базы данных",
    "text": `Почему наивный поиск ближайшего соседа (полный перебор всех векторов) не подходит для больших векторных баз данных с миллионами документов?`,
    "choices": [
      "Потому что векторы нельзя сравнивать друг с другом",
      "Потому что сложность алгоритма $O(N \\times d)$, что приводит к большим задержкам при каждом запросе",
      "Потому что матрицы не поддерживают операцию умножения на вектор",
      "Потому что косинусное сходство нельзя вычислить для большого количества векторов"
    ],
    "answers": ["Потому что сложность алгоритма $O(N \\times d)$, что приводит к большим задержкам при каждом запросе"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-danger mb-3">
        <h5>Проблема масштабирования</h5>
        <p>Полный перебор (naive search) требует вычисления сходства запроса с каждым из N векторов.</p>
        <p class="text-center">Сложность: $O(N \\times d)$</p>
        <p>Где N — количество документов, d — размерность эмбеддинга.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример для оценки</strong>
        </div>
        <div class="card-body">
          <p>Пусть $N = 1\\,000\\,000$ (1 млн документов), $d = 768$ (размерность эмбеддинга BERT).</p>
          <p>Операций на запрос: $1\\,000\\,000 \\times 768 \\approx 768$ млн операций.</p>
          <p>Даже при 100 наносекундах на операцию (оптимистично!) это <strong>76 секунд</strong> на запрос.</p>
          <p class="mt-2">Для реальной RAG-системы нужны миллисекунды, а не десятки секунд!</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение — ANN (приближённый поиск)</strong>
        </div>
        <div class="card-body">
          <p>Алгоритмы вроде HNSW, IVF, PQ находят не строго ближайших, а "достаточно близких" соседей.</p>
          <p class="text-center">Сложность ANN: $O(\\log N)$ или $O(\\sqrt{N})$</p>
          <p>Для 1 млн документов это тысячи операций вместо 768 миллионов — ускорение в <strong>10 000 – 100 000 раз</strong>!</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "linalg006",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Алгоритмы ANN",
    "theme": "Приближённый поиск соседей",
    "text": `Что такое ANN (Approximate Nearest Neighbor) и зачем он нужен в векторных базах данных?`,
    "choices": [
      "Точный алгоритм поиска, гарантирующий 100% правильный результат",
      "Класс алгоритмов, которые находят не строго ближайших, а 'достаточно близких' соседей, жертвуя точностью ради скорости",
      "Метод сжатия векторов для экономии памяти",
      "Протокол обмена данными между векторными базами данных"
    ],
    "answers": ["Класс алгоритмов, которые находят не строго ближайших, а 'достаточно близких' соседей, жертвуя точностью ради скорости"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>ANN — Approximate Nearest Neighbor</h5>
        <p>Это класс алгоритмов, которые ищут не точных, а <strong>приближённых</strong> ближайших соседей.</p>
        <p class="text-center">Точность 95–99% при ускорении в 100–1000 раз.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Популярные ANN-алгоритмы</strong>
            </div>
            <div class="card-body">
              <ul>
                <li><strong>HNSW</strong> (Hierarchical Navigable Small World) — графовый алгоритм, лучший по скорости/точности</li>
                <li><strong>IVF</strong> (Inverted File Index) — кластеризация (k-means) + поиск в ближайших кластерах</li>
                <li><strong>PQ</strong> (Product Quantization) — сжатие векторов для экономии памяти</li>
                <li><strong>LSH</strong> (Locality-Sensitive Hashing) — хеширование с сохранением близости</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Компромисс в RAG</strong>
            </div>
            <div class="card-body">
              <p>В RAG-системах потеря 1–5% релевантных документов <strong>допустима</strong>, потому что:</p>
              <ul>
                <li>LLM может дать хороший ответ даже с неидеальным контекстом</li>
                <li>Скорость поиска важнее, чем максимальная точность</li>
                <li>Можно добавить переранжирование (reranking) для финального уточнения</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Точный поиск — это kNN, а не ANN.<br>
        • Сжатие векторов — это PQ (один из методов ANN).<br>
        • Протокол обмена — это HTTP/gRPC, а не ANN.
      </div>
    </div>`
  },
  {
    "id": "linalg007",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "RAG и поиск",
    "theme": "Retrieval-Augmented Generation",
    "text": `В RAG-пайплайне поиск (retrieval) отвечает за то, чтобы:`,
    "choices": [
      "Сгенерировать ответ с помощью LLM",
      "Найти в векторной базе данных чанки документов, релевантные запросу пользователя",
      "Очистить текст документа от шума и дубликатов",
      "Превратить запрос пользователя в эмбеддинг и сохранить его в базе"
    ],
    "answers": ["Найти в векторной базе данных чанки документов, релевантные запросу пользователя"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Архитектура RAG</h5>
        <p>RAG = <strong>R</strong>etrieval (поиск) + <strong>A</strong>ugmented (дополнение) + <strong>G</strong>eneration (генерация)</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Три этапа RAG</strong>
        </div>
        <div class="card-body">
          <ol>
            <li><strong>Retrieval (поиск):</strong>
              <ul>
                <li>Запрос пользователя превращается в эмбеддинг</li>
                <li>Векторная БД ищет похожие чанки документов</li>
                <li>Возвращаются топ-k самых релевантных чанков</li>
              </ul>
            </li>
            <li><strong>Augmented (дополнение):</strong>
              <ul>
                <li>Найденные чанки добавляются в промпт как контекст</li>
                <li>Формируется системное сообщение: "Отвечай ТОЛЬКО по контексту"</li>
              </ul>
            </li>
            <li><strong>Generation (генерация):</strong>
              <ul>
                <li>LLM генерирует ответ, опираясь на предоставленный контекст</li>
                <li>Ответ может включать цитаты из источников</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Генерация ответа — это第三步 RAG (generation).<br>
        • Очистка текста — это этап подготовки данных (preprocessing).<br>
        • Превращение запроса в эмбеддинг — это часть поиска, но "сохранение в базе" не нужно, запрос не хранится.
      </div>
    </div>`
  },
  {
    "id": "linalg008",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Размерность эмбеддингов",
    "theme": "Компромиссы в RAG",
    "text": `Какое утверждение о размерности векторов эмбеддингов является верным?`,
    "choices": [
      "Чем меньше размерность, тем точнее модель передаёт смысл текста",
      "Чем больше размерность, тем быстрее происходит поиск похожих векторов",
      "Чем больше размерность, тем больше памяти требуется для хранения и тем точнее может быть передача смысла (но есть точка убывающей отдачи)",
      "Размерность эмбеддинга всегда равна количеству токенов в тексте"
    ],
    "answers": ["Чем больше размерность, тем больше памяти требуется для хранения и тем точнее может быть передача смысла (но есть точка убывающей отдачи)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Размерность эмбеддинга — компромисс</h5>
        <p>Размерность определяет, сколько информации может быть закодировано в векторе.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-danger mb-3">
            <div class="card-header bg-danger text-white">
              <strong>⚠️ Маленькая размерность</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>Меньше памяти (N × d)</li>
                <li>Быстрее поиск</li>
                <li><strong class="text-danger">Потеря смысла</strong> — разные понятия могут "слипнуться"</li>
              </ul>
              <p>Пример: 64–128 — для быстрых, но грубых систем.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>✅ Большая размерность</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>Больше памяти (N × d)</li>
                <li>Медленнее поиск</li>
                <li><strong class="text-success">Точнее передача смысла</strong></li>
              </ul>
              <p>Пример: 384–768 — оптимальный баланс.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Типичные значения</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>text-embedding-3-small (OpenAI):</strong> 1536</li>
            <li><strong>text-embedding-3-large (OpenAI):</strong> 3072</li>
            <li><strong>BGE-small (BAAI):</strong> 384</li>
            <li><strong>BGE-base (BAAI):</strong> 768</li>
            <li><strong>BGE-large (BAAI):</strong> 1024</li>
            <li><strong>intfloat/e5-mistral-7b:</strong> 4096</li>
          </ul>
          <p class="mt-2"><strong>Закон убывающей отдачи:</strong> после 1024–1536 увеличение размерности даёт малый прирост качества при большом росте затрат.</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "linalg009",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Связь матриц и векторов",
    "theme": "Линейная алгебра",
    "text": `Если матрица $E$ размера $N \\times d$ представляет собой набор всех эмбеддингов документов, а $q$ — вектор-запрос размерности $d$, то операция $s = E \\times q^T$ (умножение матрицы на транспонированный вектор) даст:`,
    "choices": [
      "Матрицу размера $N \\times N$",
      "Вектор размерности $N$, где каждый элемент — скалярное произведение $q$ с каждым документом",
      "Одно число — общее сходство между всеми документами и запросом",
      "Вектор размерности $d$, сжатое представление запроса"
    ],
    "answers": ["Вектор размерности $N$, где каждый элемент — скалярное произведение $q$ с каждым документом"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Матричное умножение в поиске</h5>
        <p>Пусть $E$ — матрица эмбеддингов (N документов, d признаков), $q$ — вектор запроса (1 × d).</p>
        <p class="text-center">$$s = E \\times q^T$$</p>
        <p>Размерности: $(N \\times d) \\times (d \\times 1) = (N \\times 1)$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример для N=3, d=4</strong>
        </div>
        <div class="card-body">
          <p>$$E = \\begin{bmatrix} 0.1 & 0.2 & 0.3 & 0.4 \\\\ 0.5 & 0.6 & 0.7 & 0.8 \\\\ 0.9 & 1.0 & 1.1 & 1.2 \\end{bmatrix}, \\quad q = [1, 0, 0, 1]$$</p>
          <p>$$E \\times q^T = \\begin{bmatrix} 0.1 \\cdot 1 + 0.2 \\cdot 0 + 0.3 \\cdot 0 + 0.4 \\cdot 1 \\\\ 0.5 \\cdot 1 + 0.6 \\cdot 0 + 0.7 \\cdot 0 + 0.8 \\cdot 1 \\\\ 0.9 \\cdot 1 + 1.0 \\cdot 0 + 1.1 \\cdot 0 + 1.2 \\cdot 1 \\end{bmatrix} = \\begin{bmatrix} 0.5 \\\\ 1.3 \\\\ 2.1 \\end{bmatrix}$$</p>
          <p>Результат: вектор [0.5, 1.3, 2.1] — скалярные произведения q с каждым документом.</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Как получить косинусное сходство?</strong><br>
        Если векторы нормализованы (единичная длина), то скалярное произведение = косинусному сходству. Если нет — нужно поделить на произведение длин: $\\cos(\\theta) = (E \\times q^T) / (||E_i|| \\times ||q||)$.
      </div>
    </div>`
  },
  {
    "id": "linalg010",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Индексы в векторных БД",
    "theme": "Векторные базы данных",
    "text": `Какой из перечисленных алгоритмов используется в векторных базах данных для ускорения поиска приближённых ближайших соседей?`,
    "choices": [
      "B-tree (классический индекс из реляционных БД)",
      "HNSW (Hierarchical Navigable Small World) — графовый алгоритм",
      "Hash-индексы (хеш-таблицы)",
      "Bitmap-индексы (битовые карты)"
    ],
    "answers": ["HNSW (Hierarchical Navigable Small World) — графовый алгоритм"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>HNSW — один из лучших ANN-алгоритмов</h5>
        <p><strong>HNSW</strong> (Hierarchical Navigable Small World) — графовый алгоритм для приближённого поиска ближайших соседей.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Как работает HNSW</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>Строится многослойный граф</li>
                <li>Верхние слои разреженные (быстрый проход)</li>
                <li>Нижние слои плотные (точный поиск)</li>
                <li>Поиск идёт сверху вниз, как в навигации</li>
              </ol>
              <p>Сложность: $O(\\log N)$</p>
              <p>Используется в FAISS, Qdrant, Weaviate, Milvus.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-secondary mb-3">
            <div class="card-header bg-secondary text-white">
              <strong>Почему не B-tree?</strong>
            </div>
            <div class="card-body">
              <p>B-tree эффективен для одномерных данных (числа, строки).</p>
              <p>Для многомерных векторов (d=384) B-tree:</p>
              <ul>
                <li>Не может сравнивать "похожесть"</li>
                <li>Требует полного перебора</li>
                <li>Не поддерживает косинусное сходство</li>
              </ul>
              <p class="mt-2"><strong>B-tree — для SQL, HNSW — для векторов!</strong></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Где используется HNSW в реальных продуктах:</strong><br>
        • FAISS (библиотека от Meta) — индекс HNSW<br>
        • Qdrant — HNSW как основной индекс<br>
        • Weaviate — HNSW по умолчанию<br>
        • Milvus — HNSW + другие индексы
      </div>
    </div>`
  },


  {
    "id": "vec_cosine_001",
    "type": "multiplechoices",
    "header": "Тест по векторам",
    "title": "Косинус угла между векторами",
    "theme": "Векторы на плоскости",
    "text": "На интерактивном графике изображены два вектора (красный и синий). Перетащите концы векторов так, чтобы угол между ними был близок к указанному значению. Затем ответьте на вопрос: при каком угле косинус близок к 0?",
    "JSXGraph": "true",
    "JSXGraphType": "twoVectors",
    "choices": [
      "Когда векторы направлены в одну сторону (угол 0°)",
      "Когда векторы перпендикулярны (угол 90°)",
      "Когда векторы направлены в противоположные стороны (угол 180°)",
      "Когда векторы имеют одинаковую длину"
    ],
    "answers": ["Когда векторы перпендикулярны (угол 90°)"],
    "hint": "<div class='alert alert-info'>Косинус угла между векторами: $$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$<br><br>• cos θ = 1, когда θ = 0° (сонаправлены)<br>• cos θ = 0, когда θ = 90° (перпендикулярны)<br>• cos θ = -1, когда θ = 180° (противоположны)</div>"
  },
  {
    "id": "vec_cosine_002",
    "type": "multiplechoices",
    "header": "Тест по векторам",
    "title": "Косинус угла между векторами",
    "theme": "Векторы на плоскости",
    "text": "На интерактивном графике перетащите синий вектор так, чтобы он указывал в ту же сторону, что и красный (сонаправленно). Чему будет близок косинус угла между ними?",
    "JSXGraph": "true",
    "JSXGraphType": "twoVectors",
    "choices": [
      "cos θ ≈ 1",
      "cos θ ≈ 0",
      "cos θ ≈ -1",
      "cos θ ≈ 0.5"
    ],
    "answers": ["cos θ ≈ 1"],
    "hint": "<div class='alert alert-success'>Сонаправленные векторы имеют угол 0°, cos 0° = 1.</div>"
  },
  {
    "id": "vec_cosine_003",
    "type": "multiplechoices",
    "header": "Тест по векторам",
    "title": "Косинус угла между векторами",
    "theme": "Векторы на плоскости",
    "text": "На интерактивном графике перетащите синий вектор так, чтобы он указывал в противоположную сторону от красного (угол 180°). Чему будет близок косинус угла между ними?",
    "JSXGraph": "true",
    "JSXGraphType": "twoVectors",
    "choices": [
      "cos θ ≈ 1",
      "cos θ ≈ 0",
      "cos θ ≈ -1",
      "cos θ ≈ 0.5"
    ],
    "answers": ["cos θ ≈ -1"],
    "hint": "<div class='alert alert-warning'>Противоположно направленные векторы имеют угол 180°, cos 180° = -1.</div>"
  },
  {
    "id": "vec_cosine_004",
    "type": "multiplechoices",
    "header": "Тест по векторам",
    "title": "Косинус угла между векторами",
    "theme": "Векторы на плоскости",
    "text": "На интерактивном графике: красный вектор направлен вдоль оси X (вправо), синий вектор направлен вдоль оси Y (вверх). Чему равен косинус угла между ними?",
    "JSXGraph": "true",
    "JSXGraphType": "twoVectors",
    "choices": [
      "cos θ = 1",
      "cos θ = 0",
      "cos θ = -1",
      "cos θ = 0.707"
    ],
    "answers": ["cos θ = 0"],
    "hint": "<div class='alert alert-info'>Вектор вдоль оси X: (1,0), вектор вдоль оси Y: (0,1). Их скалярное произведение = 0, значит cos θ = 0.</div>"
  },
  {
    "id": "vec_cosine_005",
    "type": "multiplechoices",
    "header": "Тест по векторам",
    "title": "Косинус угла между векторами",
    "theme": "Векторы на плоскости",
    "text": "На интерактивном графике перетащите точки так, чтобы косинус угла между векторами стал близким к -1. Как при этом расположены векторы?",
    "JSXGraph": "true",
    "JSXGraphType": "twoVectors",
    "choices": [
      "Векторы направлены в одну сторону",
      "Векторы перпендикулярны",
      "Векторы направлены в противоположные стороны",
      "Один из векторов нулевой"
    ],
    "answers": ["Векторы направлены в противоположные стороны"],
    "hint": "<div class='alert alert-danger'>cos θ = -1 соответствует углу 180° — векторы противоположны.</div>"
  }



];

window.quizesSets = quizesSets;