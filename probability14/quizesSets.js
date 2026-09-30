let quizesSets = [
  {
    "id": "statistics1401",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое линейная регрессия?",
    "theme": "Линейная регрессия",
    "text": "Что делает линейная регрессия (linear regression)?",
    "choices": [
      "Классифицирует данные по категориям",
      "Находит связь между зависимой и независимой переменными и предсказывает непрерывное значение",
      "Строит гистограммы",
      "Вычисляет медиану"
    ],
    "answers": ["Находит связь между зависимой и независимой переменными и предсказывает непрерывное значение"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Линейная регрессия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Статистический метод для нахождения связи между зависимой переменной (Y) и независимыми переменными (X).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Особенности</h5></div><div class='card-body'><ul><li>Предсказывает <strong>непрерывное</strong> значение</li><li>Предполагает <strong>линейную</strong> зависимость</li><li>Применяется для прогноза цен, продаж, рисков</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Находит связь между зависимой и независимой переменными и предсказывает непрерывное значение</div></div></div>"
  },
  {
    "id": "statistics1402",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Модель простой линейной регрессии",
    "theme": "Формулы",
    "text": "Какая формула соответствует модели простой линейной регрессии?",
    "choices": [
      "$Y = \\beta_0 + \\beta_1 X$",
      "$Y = \\beta_0 + \\beta_1 X + \\varepsilon$",
      "$Y = \\beta_1 X^2$",
      "$Y = \\dfrac{\\beta_0}{X}$"
    ],
    "answers": ["$Y = \\beta_0 + \\beta_1 X + \\varepsilon$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Модель линейной регрессии</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$Y = \\beta_0 + \\beta_1 X + \\varepsilon$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$Y$ — зависимая переменная</li><li>$X$ — независимая переменная</li><li>$\\beta_0$ — свободный член (intercept)</li><li>$\\beta_1$ — наклон (slope)</li><li>$\\varepsilon$ — случайная ошибка</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $Y = \\beta_0 + \\beta_1 X + \\varepsilon$</div></div></div>"
  },
  {
    "id": "statistics1403",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Смысл коэффициента β1",
    "theme": "Коэффициенты",
    "text": "Что означает коэффициент $\\beta_1$ в линейной регрессии?",
    "choices": [
      "Значение Y при X = 0",
      "Изменение Y при изменении X на 1 единицу",
      "Среднее значение Y",
      "Ошибка предсказания"
    ],
    "answers": ["Изменение Y при изменении X на 1 единицу"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Коэффициент β₁</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Наклон линии (slope) — изменение Y при изменении X на 1 единицу.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сравнение</h5></div><div class='card-body'><ul><li><strong>$\\beta_0$</strong> — свободный член: значение Y при X = 0</li><li><strong>$\\beta_1$</strong> — наклон: изменение Y при изменении X на 1</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Изменение Y при изменении X на 1 единицу</div></div></div>"
  },
  {
    "id": "statistics1404",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Смысл коэффициента β0",
    "theme": "Коэффициенты",
    "text": "Что означает коэффициент $\\beta_0$ в линейной регрессии?",
    "choices": [
      "Наклон линии",
      "Значение Y при X = 0 (свободный член)",
      "Ошибка модели",
      "Среднее значение X"
    ],
    "answers": ["Значение Y при X = 0 (свободный член)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Коэффициент β₀</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Свободный член (intercept) — значение Y при X = 0.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$\\beta_0 = \\bar{Y} - \\beta_1\\bar{X}$$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Значение Y при X = 0 (свободный член)</div></div></div>"
  },
  {
    "id": "statistics1405",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула наклона β1",
    "theme": "Формулы",
    "text": "Какая формула используется для нахождения наклона $\\beta_1$ методом наименьших квадратов?",
    "choices": [
      "$\\beta_1 = \\dfrac{\\sum(X_i-\\bar{X})}{\\sum(Y_i-\\bar{Y})}$",
      "$\\beta_1 = \\dfrac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2}$",
      "$\\beta_1 = \\bar{Y} - \\beta_0\\bar{X}$",
      "$\\beta_1 = \\sum X_i Y_i$"
    ],
    "answers": ["$\\beta_1 = \\dfrac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Наклон β₁</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\beta_1 = \\dfrac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свободный член</h5></div><div class='card-body'><p>$$\\beta_0 = \\bar{Y} - \\beta_1\\bar{X}$$</p><p>Метод наименьших квадратов минимизирует сумму квадратов ошибок.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\beta_1 = \\dfrac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2}$</div></div></div>"
  },
  {
    "id": "statistics1406",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что показывает линия регрессии?",
    "theme": "График",
    "text": "Что представляет собой красная линия на графике линейной регрессии?",
    "choices": [
      "Отдельные наблюдения",
      "Линию наилучшего приближения (best fit line)",
      "Среднее значение Y",
      "Выбросы"
    ],
    "answers": ["Линию наилучшего приближения (best fit line)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Линия регрессии</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Линия наилучшего приближения (best fit line), минимизирующая ошибку.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Элементы графика</h5></div><div class='card-body'><ul><li>Точки — <strong>наблюдения</strong></li><li>Красная линия — <strong>линия регрессии</strong></li><li>Вертикальные расстояния — <strong>ошибки (ε)</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Линию наилучшего приближения (best fit line)</div></div></div>"
  },
  {
    "id": "statistics1407",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: прогноз цены",
    "theme": "Примеры",
    "text": "Уравнение регрессии $Y = 0.0015X$. Какова предсказанная цена для дома 1600 кв. футов?",
    "choices": [
      "$1.5$",
      "$2.4$",
      "$3.2$",
      "$4.0$"
    ],
    "answers": ["$2.4$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Прогноз цены</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $Y = 0.0015X$, $X = 1600$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$Y = 0.0015 \\times 1600 + 0.0 = 2.4$$</p><p>Предсказанная цена — 2.4 (например, в миллионах).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $2.4$</div></div></div>"
  },
  {
    "id": "statistics1408",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Метрики оценки модели",
    "theme": "Оценка модели",
    "text": "Какая метрика показывает, насколько хорошо модель линейной регрессии описывает данные?",
    "choices": [
      "MSE",
      "RMSE",
      "MAE",
      "R² (коэффициент детерминации)"
    ],
    "answers": ["R² (коэффициент детерминации)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Метрики оценки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 R² (R-squared):</strong> Коэффициент детерминации — показывает, насколько хорошо модель описывает данные.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Все метрики</h5></div><div class='card-body'><ul><li><strong>MSE</strong> — средняя квадратичная ошибка</li><li><strong>RMSE</strong> — корень из MSE</li><li><strong>MAE</strong> — средняя абсолютная ошибка</li><li><strong>R²</strong> — коэффициент детерминации (чем ближе к 1, тем лучше)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> R² (коэффициент детерминации)</div></div></div>"
  },
  {
    "id": "statistics1409",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Значение R²",
    "theme": "Оценка модели",
    "text": "Какое значение R² считается наилучшим?",
    "choices": [
      "0",
      "0.5",
      "Близкое к 1",
      "Близкое к −1"
    ],
    "answers": ["Близкое к 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 R²</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Правило:</strong> Чем выше R² (ближе к 1), тем лучше модель описывает данные.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Интерпретация</h5></div><div class='card-body'><ul><li><strong>R² ≈ 1</strong> — модель объясняет почти всю вариацию</li><li><strong>R² ≈ 0</strong> — модель не объясняет данные</li><li>R² измеряется от 0 до 1</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Близкое к 1</div></div></div>"
  },
  {
    "id": "statistics1410",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Предпосылки линейной регрессии",
    "theme": "Предпосылки",
    "text": "Какая из перечисленных предпосылок НЕ относится к линейной регрессии?",
    "choices": [
      "Линейная зависимость",
      "Независимость ошибок",
      "Гомоскедастичность",
      "Экспоненциальный рост Y"
    ],
    "answers": ["Экспоненциальный рост Y"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Предпосылки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Четыре предпосылки:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Список</h5></div><div class='card-body'><ul><li><strong>Линейная зависимость</strong> между X и Y</li><li><strong>Независимость ошибок</strong></li><li><strong>Гомоскедастичность</strong> (постоянная дисперсия ошибок)</li><li><strong>Нормальность ошибок</strong></li></ul><p>Экспоненциальный рост Y <strong>противоречит</strong> линейной модели.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Экспоненциальный рост Y</div></div></div>"
  },
  {
    "id": "statistics1411",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Гомоскедастичность",
    "theme": "Предпосылки",
    "text": "Что означает предпосылка гомоскедастичности (homoscedasticity) в линейной регрессии?",
    "choices": [
      "Ошибки имеют нормальное распределение",
      "Ошибки независимы друг от друга",
      "Дисперсия ошибок постоянна для всех значений X",
      "Связь между X и Y линейна"
    ],
    "answers": ["Дисперсия ошибок постоянна для всех значений X"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Гомоскедастичность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Дисперсия ошибок постоянна для всех значений X.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие предпосылки</h5></div><div class='card-body'><ul><li><strong>Линейность</strong> — линейная зависимость X и Y</li><li><strong>Независимость ошибок</strong> — ошибки не связаны друг с другом</li><li><strong>Нормальность ошибок</strong> — ошибки ~ N(0, σ²)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Дисперсия ошибок постоянна для всех значений X</div></div></div>"
  },
  {
    "id": "statistics1412",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: прогноз цен на жильё",
    "theme": "Применение",
    "text": "В какой области линейная регрессия используется для прогнозирования цен на недвижимость?",
    "choices": [
      "Прогноз спроса",
      "Прогноз цен на жильё",
      "Классификация писем",
      "Распознавание изображений"
    ],
    "answers": ["Прогноз цен на жильё"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Прогноз цен на жильё:</strong> Связь между площадью дома и ценой.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Прогноз продаж</strong> — анализ маркетинговых кампаний</li><li><strong>Здравоохранение</strong> — прогноз расходов</li><li><strong>Финансы</strong> — прогноз акций</li><li><strong>Прогноз спроса</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Прогноз цен на жильё</div></div></div>"
  },
  {
    "id": "statistics1413",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о линейной регрессии верно?",
    "choices": [
      "Она используется для классификации категорий",
      "Она предсказывает непрерывное значение с помощью линейного уравнения",
      "Она не требует данных",
      "Она не имеет параметров"
    ],
    "answers": ["Она предсказывает непрерывное значение с помощью линейного уравнения"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Модель: $Y = \\beta_0 + \\beta_1 X + \\varepsilon$</li><li>$\\beta_0$ — свободный член, $\\beta_1$ — наклон</li><li>Оценка через <strong>MSE, RMSE, MAE, R²</strong></li><li>Предпосылки: линейность, независимость, гомоскедастичность, нормальность ошибок</li><li>Применяется в финансах, здравоохранении, маркетинге, прогнозировании</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Она предсказывает непрерывное значение с помощью линейного уравнения</div></div></div>"
  }
]
window.quizesSets = quizesSets;