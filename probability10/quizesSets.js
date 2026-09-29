let quizesSets = [
  {
    "id": "statistics1001",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое центральная предельная теорема?",
    "theme": "ЦПТ",
    "text": "Что утверждает центральная предельная теорема (Central Limit Theorem)?",
    "choices": [
      "Все распределения являются нормальными",
      "Выборочное распределение среднего становится приблизительно нормальным с ростом объёма выборки",
      "Среднее всегда равно медиане",
      "Дисперсия уменьшается с ростом выборки"
    ],
    "answers": ["Выборочное распределение среднего становится приблизительно нормальным с ростом объёма выборки"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Центральная предельная теорема</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Выборочное распределение выборочного среднего становится приблизительно нормальным по мере увеличения объёма выборки, независимо от формы распределения генеральной совокупности.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Ключевое</h5></div><div class='card-body'><ul><li>Работает <strong>даже для ненормальных</strong> популяций</li><li>Применяется в проверке гипотез и доверительных интервалах</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Выборочное распределение среднего становится приблизительно нормальным с ростом объёма выборки</div></div></div>"
  },
  {
    "id": "statistics1002",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула ЦПТ",
    "theme": "Формулы",
    "text": "Какая формула соответствует распределению выборочного среднего по ЦПТ?",
    "choices": [
      "$\\bar{X} \\sim N(\\mu, \\sigma)$",
      "$\\bar{X} \\sim N\\left(\\mu, \\dfrac{\\sigma}{\\sqrt{n}}\\right)$",
      "$\\bar{X} \\sim N(0, 1)$",
      "$\\bar{X} \\sim N(\\mu, \\sigma^2)$"
    ],
    "answers": ["$\\bar{X} \\sim N\\left(\\mu, \\dfrac{\\sigma}{\\sqrt{n}}\\right)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула ЦПТ</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\bar{X} \\sim N\\left(\\mu, \\dfrac{\\sigma}{\\sqrt{n}}\\right)$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$\\bar{X}$ — выборочное среднее</li><li>$\\mu$ — среднее генеральной совокупности</li><li>$\\sigma$ — стандартное отклонение генеральной совокупности</li><li>$n$ — объём выборки</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\bar{X} \\sim N\\left(\\mu, \\dfrac{\\sigma}{\\sqrt{n}}\\right)$</div></div></div>"
  },
  {
    "id": "statistics1003",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Среднее выборочного распределения",
    "theme": "Свойства ЦПТ",
    "text": "Чему равно среднее выборочного распределения выборочного среднего?",
    "choices": [
      "0",
      "$\\mu$ — среднему генеральной совокупности",
      "$\\sigma$",
      "$\\sigma/\\sqrt{n}$"
    ],
    "answers": ["$\\mu$ — среднему генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Среднее выборочного распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Свойство:</strong> Среднее выборочного распределения = $\\mu$ (среднему генеральной совокупности).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие свойства</h5></div><div class='card-body'><ul><li>Стандартная ошибка = $\\sigma/\\sqrt{n}$</li><li>Распределение приблизительно <strong>нормальное</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\mu$ — среднему генеральной совокупности</div></div></div>"
  },
  {
    "id": "statistics1004",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Стандартная ошибка",
    "theme": "Свойства ЦПТ",
    "text": "Какая формула используется для стандартной ошибки (standard error) выборочного среднего?",
    "choices": [
      "$\\sigma$",
      "$\\sigma^2$",
      "$\\sigma/\\sqrt{n}$",
      "$\\sigma \\times n$"
    ],
    "answers": ["$\\sigma/\\sqrt{n}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Стандартная ошибка</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Стандартная ошибка} = \\dfrac{\\sigma}{\\sqrt{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Стандартная ошибка показывает разброс выборочного среднего вокруг истинного среднего $\\mu$. <strong>Уменьшается</strong> с ростом n.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\sigma/\\sqrt{n}$</div></div></div>"
  },
  {
    "id": "statistics1005",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Достаточный объём выборки",
    "theme": "Свойства ЦПТ",
    "text": "Какой объём выборки обычно считается достаточным для применения ЦПТ (эмпирическое правило)?",
    "choices": [
      "$n \\ge 5$",
      "$n \\ge 10$",
      "$n \\ge 30$",
      "$n \\ge 1000$"
    ],
    "answers": ["$n \\ge 30$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Эмпирическое правило</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Правило:</strong> Объём выборки обычно считается большим при $n \\ge 30$.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Особые случаи</h5></div><div class='card-body'><ul><li>Если генеральная совокупность <strong>уже нормальна</strong>, ЦПТ справедлива при любом n</li><li>Для сильно асимметричных распределений может потребоваться большее n</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $n \\ge 30$</div></div></div>"
  },
  {
    "id": "statistics1006",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применимость ЦПТ",
    "theme": "Свойства ЦПТ",
    "text": "Для каких распределений генеральной совокупности применима ЦПТ при достаточно большом n?",
    "choices": [
      "Только для нормальных",
      "Только для симметричных",
      "Для любых распределений (нормальных, асимметричных и т.д.)",
      "Только для дискретных"
    ],
    "answers": ["Для любых распределений (нормальных, асимметричных и т.д.)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применимость</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Ключевое свойство:</strong> ЦПТ работает для <strong>любого</strong> распределения генеральной совокупности при достаточно большом n.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>Нормальное</strong> → ЦПТ при любом n</li><li><strong>Асимметричное</strong> → ЦПТ при $n \\ge 30$</li><li><strong>Равномерное</strong> → ЦПТ при достаточно большом n</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Для любых распределений (нормальных, асимметричных и т.д.)</div></div></div>"
  },
  {
    "id": "statistics1007",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Влияние размера выборки",
    "theme": "Влияние n",
    "text": "Как изменяется выборочное распределение среднего при увеличении объёма выборки?",
    "choices": [
      "Разброс увеличивается",
      "Разброс уменьшается (распределение становится уже)",
      "Среднее сдвигается вправо",
      "Распределение становится асимметричным"
    ],
    "answers": ["Разброс уменьшается (распределение становится уже)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Влияние объёма выборки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Зависимость:</strong> С ростом n стандартная ошибка $\\sigma/\\sqrt{n}$ уменьшается.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li>$n = 5$ → широкий разброс</li><li>$n = 30$ → умеренный</li><li>$n = 100$ → узкий</li><li>$n = 500$ → очень узкий (близко к $\\mu$)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Разброс уменьшается (распределение становится уже)</div></div></div>"
  },
  {
    "id": "statistics1008",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: расчёт стандартной ошибки",
    "theme": "Примеры",
    "text": "Генеральная совокупность имеет $\\mu = 100$ и $\\sigma = 20$. Найдите стандартную ошибку для $n = 50$.",
    "choices": [
      "$0.4$",
      "$2.83$",
      "$20$",
      "$100$"
    ],
    "answers": ["$2.83$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт стандартной ошибки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\sigma = 20$, $n = 50$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$\\text{Стандартная ошибка} = \\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{20}{\\sqrt{50}}$$</p><ul><li>$\\sqrt{50} \\approx 7.07$</li><li>$20 / 7.07 \\approx 2.83$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $2.83$</div></div></div>"
  },
  {
    "id": "statistics1009",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: ненормальная популяция",
    "theme": "Примеры",
    "text": "Популяция имеет экспоненциальное распределение со средним 50. Берутся выборки объёмом n = 30. Каким будет распределение выборочного среднего?",
    "choices": [
      "Экспоненциальным",
      "Приблизительно нормальным",
      "Равномерным",
      "Асимметричным с длинным правым хвостом"
    ],
    "answers": ["Приблизительно нормальным"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ненормальная популяция</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> Экспоненциальная популяция, $n = 30$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 По ЦПТ</h5></div><div class='card-body'><ul><li>Хотя популяция не нормальна, при $n = 30$ ЦПТ даёт <strong>приблизительно нормальное</strong> распределение $\\bar{X}$</li><li>Среднее = 50</li><li>Стандартная ошибка = $\\sigma/\\sqrt{30}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Приблизительно нормальным</div></div></div>"
  },
  {
    "id": "statistics1010",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что описывает ЦПТ?",
    "theme": "Свойства ЦПТ",
    "text": "К чему применяется центральная предельная теорема?",
    "choices": [
      "К отдельным значениям генеральной совокупности",
      "К выборочному распределению среднего",
      "К медиане выборки",
      "К модe распределения"
    ],
    "answers": ["К выборочному распределению среднего"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применимость ЦПТ</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Важно:</strong> ЦПТ применяется к <strong>выборочному распределению среднего</strong>, а не к отдельным значениям.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Различие</h5></div><div class='card-body'><ul><li><strong>Отдельные значения</strong> популяции могут иметь любую форму распределения</li><li><strong>Средние выборок</strong> становятся нормальными</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> К выборочному распределению среднего</div></div></div>"
  },
  {
    "id": "statistics1011",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Случай нормальной популяции",
    "theme": "Свойства ЦПТ",
    "text": "Если генеральная совокупность уже имеет нормальное распределение, при каком объёме выборки применима ЦПТ?",
    "choices": [
      "Только при $n \\ge 30$",
      "Только при $n \\ge 100$",
      "При любом объёме выборки",
      "Только при $n < 30$"
    ],
    "answers": ["При любом объёме выборки"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Нормальная популяция</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Особый случай:</strong> Если генеральная совокупность уже нормальна, ЦПТ справедлива при любом n.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Логика</h5></div><div class='card-body'><p>Выборочное среднее нормально распределённой популяции тоже нормально при любом n — ЦПТ не нужна для сходимости.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> При любом объёме выборки</div></div></div>"
  },
  {
    "id": "statistics1012",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение ЦПТ",
    "theme": "Применение",
    "text": "В какой области ЦПТ используется для оценки среднего роста или дохода по выборке?",
    "choices": [
      "Контроль качества",
      "Опросы (surveys)",
      "Машинное обучение",
      "Здравоохранение"
    ],
    "answers": ["Опросы (surveys)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение ЦПТ</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Опросы:</strong> Оценка среднего по генеральной совокупности (рост, доход).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Бизнес и финансы</strong> — средние продажи, анализ рисков</li><li><strong>Контроль качества</strong> — средний вес изделия</li><li><strong>Здравоохранение</strong> — средний эффект лечения</li><li><strong>ML</strong> — средние показатели модели</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Опросы (surveys)</div></div></div>"
  },
  {
    "id": "statistics1013",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о центральной предельной теореме верно?",
    "choices": [
      "ЦПТ работает только для нормальных популяций",
      "ЦПТ говорит, что выборочное среднее становится приблизительно нормальным при большом n",
      "ЦПТ применима только к малым выборкам",
      "Стандартная ошибка не зависит от n"
    ],
    "answers": ["ЦПТ говорит, что выборочное среднее становится приблизительно нормальным при большом n"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>$\\bar{X} \\sim N\\left(\\mu, \\dfrac{\\sigma}{\\sqrt{n}}\\right)$</li><li>Среднее выборочного распределения = $\\mu$</li><li>Стандартная ошибка = $\\sigma/\\sqrt{n}$</li><li>Работает для <strong>любого</strong> распределения при большом n</li><li>Применяется в опросах, контроле качества, финансах, медицине</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> ЦПТ говорит, что выборочное среднее становится приблизительно нормальным при большом n</div></div></div>"
  }
]

window.quizesSets = quizesSets;