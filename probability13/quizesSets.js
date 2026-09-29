let quizesSets = [
  {
    "id": "statistics1301",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое распределение хи-квадрат?",
    "theme": "Распределение хи-квадрат",
    "text": "Что представляет собой распределение хи-квадрат (chi-square distribution)?",
    "choices": [
      "Разность двух нормальных величин",
      "Сумму квадратов независимых стандартных нормальных величин",
      "Произведение нормальных величин",
      "Среднее выборки"
    ],
    "answers": ["Сумму квадратов независимых стандартных нормальных величин"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение хи-квадрат</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Непрерывное распределение вероятностей суммы квадратов независимых стандартных нормальных величин.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$\\chi^2 = \\sum_{i=1}^{k} Z_i^2$$</p><ul><li>$Z_i \\sim N(0,1)$ — независимые стандартные нормальные величины</li><li>$k$ — число степеней свободы (df)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Сумму квадратов независимых стандартных нормальных величин</div></div></div>"
  },
  {
    "id": "statistics1302",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Область значений",
    "theme": "Свойства",
    "text": "Какие значения может принимать величина, распределённая по закону хи-квадрат?",
    "choices": [
      "От −∞ до +∞",
      "От −1 до 1",
      "Только неотрицательные ($\\chi^2 \\ge 0$)",
      "От 0 до 1"
    ],
    "answers": ["Только неотрицательные ($\\chi^2 \\ge 0$)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Область значений</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Свойство:</strong> $\\chi^2 \\ge 0$ — всегда неотрицательно.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Почему</h5></div><div class='card-body'><p>Это сумма квадратов, поэтому не может быть отрицательной. Область определения: $0 \\le x < \\infty$.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Только неотрицательные ($\\chi^2 \\ge 0$)</div></div></div>"
  },
  {
    "id": "statistics1303",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Форма распределения",
    "theme": "Свойства",
    "text": "Какой формой обладает распределение хи-квадрат?",
    "choices": [
      "Симметричной колоколообразной",
      "Положительно асимметричной (скос вправо)",
      "Отрицательно асимметричной (скос влево)",
      "Равномерной"
    ],
    "answers": ["Положительно асимметричной (скос вправо)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Форма распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Свойство:</strong> Положительно асимметричное (скос вправо).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 С ростом df</h5></div><div class='card-body'><ul><li>Начинается с 0</li><li>Простирается до ∞</li><li>С ростом df становится <strong>менее асимметричным</strong> и более симметричным</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Положительно асимметричной (скос вправо)</div></div></div>"
  },
  {
    "id": "statistics1304",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Среднее распределения хи-квадрат",
    "theme": "Свойства",
    "text": "Чему равно среднее (математическое ожидание) распределения хи-квадрат?",
    "choices": [
      "$E(X) = 0$",
      "$E(X) = k$ (числу степеней свободы)",
      "$E(X) = 2k$",
      "$E(X) = \\sqrt{k}$"
    ],
    "answers": ["$E(X) = k$ (числу степеней свободы)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Среднее</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$E(X) = k$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Дисперсия</h5></div><div class='card-body'><p>$$\\text{Var}(X) = 2k$$</p><ul><li>Стандартное отклонение = $\\sqrt{2k}$</li><li>С ростом df и среднее, и дисперсия увеличиваются</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $E(X) = k$ (числу степеней свободы)</div></div></div>"
  },
  {
    "id": "statistics1305",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Дисперсия распределения хи-квадрат",
    "theme": "Свойства",
    "text": "Чему равна дисперсия распределения хи-квадрат?",
    "choices": [
      "$\\text{Var}(X) = k$",
      "$\\text{Var}(X) = 2k$",
      "$\\text{Var}(X) = k^2$",
      "$\\text{Var}(X) = 1$"
    ],
    "answers": ["$\\text{Var}(X) = 2k$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Дисперсия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Var}(X) = 2k$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие характеристики</h5></div><div class='card-body'><ul><li><strong>Среднее:</strong> $E(X) = k$</li><li><strong>Стандартное отклонение:</strong> $\\sqrt{2k}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\text{Var}(X) = 2k$</div></div></div>"
  },
  {
    "id": "statistics1306",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула хи-квадрат",
    "theme": "Формулы",
    "text": "Какая формула соответствует величине, распределённой по закону хи-квадрат?",
    "choices": [
      "$\\chi^2 = \\sum_{i=1}^{k} Z_i$",
      "$\\chi^2 = \\sum_{i=1}^{k} Z_i^2$",
      "$\\chi^2 = \\prod_{i=1}^{k} Z_i$",
      "$\\chi^2 = \\dfrac{1}{k}\\sum Z_i$"
    ],
    "answers": ["$\\chi^2 = \\sum_{i=1}^{k} Z_i^2$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\chi^2 = \\sum_{i=1}^{k} Z_i^2$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Обозначение</h5></div><div class='card-body'><ul><li>$Z_i \\sim N(0,1)$ — независимые стандартные нормальные величины</li><li>$k$ — число степеней свободы</li><li>$\\chi^2 \\sim \\chi^2(k)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\chi^2 = \\sum_{i=1}^{k} Z_i^2$</div></div></div>"
  },
  {
    "id": "statistics1307",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Влияние df на форму",
    "theme": "Свойства",
    "text": "Как изменяется форма распределения хи-квадрат с ростом числа степеней свободы?",
    "choices": [
      "Становится более асимметричной",
      "Становится менее асимметричной и более симметричной",
      "Остаётся неизменной",
      "Становится равномерной"
    ],
    "answers": ["Становится менее асимметричной и более симметричной"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Влияние df</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Свойство:</strong> С ростом df распределение становится менее асимметричным и более симметричным.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>df = 1</strong> → наиболее асимметричное</li><li><strong>df = 5</strong> → умеренно асимметричное</li><li><strong>df = 10</strong> → более симметричное</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Становится менее асимметричной и более симметричной</div></div></div>"
  },
  {
    "id": "statistics1308",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: критическое значение",
    "theme": "Примеры",
    "text": "Чему равно критическое значение $\\chi^2$ для df = 5 при 5% уровне значимости (правосторонний тест)?",
    "choices": [
      "$1.145$",
      "$9.49$",
      "$11.070$",
      "$15.086$"
    ],
    "answers": ["$11.070$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Критическое значение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> df = 5, α = 0.05 (правосторонний)</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 По таблице хи-квадрат</h5></div><div class='card-body'><p>$$\\chi^2_{0.05,\\,5} = 11.070$$</p><p>Отвергаем $H_0$, если $\\chi^2 > 11.070$.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $11.070$</div></div></div>"
  },
  {
    "id": "statistics1309",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: вероятность",
    "theme": "Примеры",
    "text": "Если $X \\sim \\chi^2(4)$, чему равно $P(X \\le 9.49)$, если $\\chi^2_{0.05,\\,4} = 9.49$?",
    "choices": [
      "$0.05$",
      "$0.50$",
      "$0.95$",
      "$1.00$"
    ],
    "answers": ["$0.95$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $X \\sim \\chi^2(4)$, $\\chi^2_{0.05,\\,4} = 9.49$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>Критическое значение $\\chi^2_{0.05,\\,4} = 9.49$ означает, что 5% площади находится <strong>правее</strong> 9.49.</p><p>Следовательно, $P(X \\le 9.49) = 1 - 0.05 = 0.95$.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $0.95$</div></div></div>"
  },
  {
    "id": "statistics1310",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: критерий согласия",
    "theme": "Применение",
    "text": "В каком статистическом тесте распределение хи-квадрат используется для проверки соответствия наблюдаемых данных ожидаемому распределению?",
    "choices": [
      "Тест независимости",
      "Критерий согласия (goodness of fit)",
      "Тест дисперсии",
      "Z-тест"
    ],
    "answers": ["Критерий согласия (goodness of fit)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Критерий согласия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Goodness of Fit:</strong> Проверка соответствия наблюдаемых данных ожидаемому распределению (например, результаты опроса).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие тесты</h5></div><div class='card-body'><ul><li><strong>Тест независимости</strong> — проверка независимости двух категориальных переменных</li><li><strong>Тест однородности</strong> — сравнение нескольких популяций</li><li><strong>Тест дисперсии</strong> — проверка равенства дисперсии заданному значению</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Критерий согласия (goodness of fit)</div></div></div>"
  },
  {
    "id": "statistics1311",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: тест независимости",
    "theme": "Применение",
    "text": "Для чего используется тест независимости на основе распределения хи-квадрат?",
    "choices": [
      "Для проверки нормальности данных",
      "Для проверки независимости двух категориальных переменных",
      "Для вычисления среднего",
      "Для проверки равенства дисперсий"
    ],
    "answers": ["Для проверки независимости двух категориальных переменных"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Тест независимости</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Назначение:</strong> Проверка независимости двух категориальных переменных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Например: связаны ли пол и предпочитаемый предмет?</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Для проверки независимости двух категориальных переменных</div></div></div>"
  },
  {
    "id": "statistics1312",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о распределении хи-квадрат верно?",
    "choices": [
      "Оно может принимать отрицательные значения",
      "Его среднее равно 2k, а дисперсия k",
      "Оно всегда неотрицательно, среднее = k, дисперсия = 2k",
      "Оно симметрично при любом df"
    ],
    "answers": ["Оно всегда неотрицательно, среднее = k, дисперсия = 2k"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные свойства</h5></div><div class='card-body'><ul><li>$\\chi^2 = \\sum Z_i^2$ — <strong>сумма квадратов</strong></li><li>Всегда <strong>неотрицательно</strong> ($\\chi^2 \\ge 0$)</li><li><strong>Среднее = k</strong> (df)</li><li><strong>Дисперсия = 2k</strong></li><li>Скошено вправо, но с ростом df становится симметричнее</li><li>Применяется в критерии согласия, тестах независимости, однородности и дисперсии</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Оно всегда неотрицательно, среднее = k, дисперсия = 2k</div></div></div>"
  }
]

window.quizesSets = quizesSets;