let quizesSets = [
  {
    "id": "statistics1501",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое логистическая регрессия?",
    "theme": "Логистическая регрессия",
    "text": "Для чего используется логистическая регрессия (logistic regression)?",
    "choices": [
      "Для прогнозирования непрерывного значения",
      "Для бинарной классификации (предсказания вероятности исхода 0 или 1)",
      "Для кластеризации данных",
      "Для построения гистограмм"
    ],
    "answers": ["Для бинарной классификации (предсказания вероятности исхода 0 или 1)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Логистическая регрессия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Назначение:</strong> Бинарная классификация — предсказание вероятности исхода 0 или 1.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Особенности</h5></div><div class='card-body'><ul><li>Использует <strong>сигмоидную функцию</strong></li><li>Выход — <strong>вероятность от 0 до 1</strong></li><li>Применяется для спама, диагностики, мошенничества</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Для бинарной классификации (предсказания вероятности исхода 0 или 1)</div></div></div>"
  },
  {
    "id": "statistics1502",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Уравнение модели",
    "theme": "Формулы",
    "text": "Какая формула соответствует логистической регрессии?",
    "choices": [
      "$P(Y{=}1|X) = \\beta_0 + \\beta_1 X$",
      "$P(Y{=}1|X) = \\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 X)}}$",
      "$P(Y{=}1|X) = (\\beta_0+\\beta_1 X)^2$",
      "$P(Y{=}1|X) = \\dfrac{\\beta_0}{\\beta_1 X}$"
    ],
    "answers": ["$P(Y{=}1|X) = \\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 X)}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Уравнение модели</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(Y{=}1|X) = \\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 X)}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$\\beta_0$ — свободный член</li><li>$\\beta_1$ — коэффициент</li><li>$e$ — число Эйлера</li><li>Выход — вероятность от 0 до 1</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(Y{=}1|X) = \\dfrac{1}{1+e^{-(\\beta_0+\\beta_1 X)}}$</div></div></div>"
  },
  {
    "id": "statistics1503",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Сигмоидная функция",
    "theme": "Формулы",
    "text": "Какая формула соответствует сигмоидной функции (sigmoid function)?",
    "choices": [
      "$\\sigma(z) = z^2$",
      "$\\sigma(z) = \\dfrac{1}{1+e^{-z}}$",
      "$\\sigma(z) = \\sqrt{z}$",
      "$\\sigma(z) = \\ln(z)$"
    ],
    "answers": ["$\\sigma(z) = \\dfrac{1}{1+e^{-z}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Сигмоидная функция</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\sigma(z) = \\dfrac{1}{1+e^{-z}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Преобразует <strong>любое действительное</strong> значение в вероятность от 0 до 1</li><li>При большом положительном z → ≈ 1</li><li>При большом отрицательном z → ≈ 0</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\sigma(z) = \\dfrac{1}{1+e^{-z}}$</div></div></div>"
  },
  {
    "id": "statistics1504",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Область значений сигмоиды",
    "theme": "Свойства",
    "text": "Какие значения принимает сигмоидная функция?",
    "choices": [
      "От −1 до 1",
      "От 0 до 1",
      "От −∞ до +∞",
      "Только 0 или 1"
    ],
    "answers": ["От 0 до 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Область значений сигмоиды</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Диапазон:</strong> от 0 до 1 (вероятность).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li>$\\sigma(0) = 0.5$</li><li>$\\sigma(3) \\approx 0.95$</li><li>$\\sigma(-3) \\approx 0.05$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> От 0 до 1</div></div></div>"
  },
  {
    "id": "statistics1505",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Разделяющая граница",
    "theme": "Классификация",
    "text": "Какой стандартный порог используется для принятия решения о классе в логистической регрессии?",
    "choices": [
      "0",
      "0.25",
      "0.5",
      "1"
    ],
    "answers": ["0.5"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Порог классификации</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Стандартный порог:</strong> 0.5.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Правило</h5></div><div class='card-body'><ul><li>Если $P(Y{=}1) \\ge 0.5$ → прогноз <strong>класс 1</strong></li><li>Если $P(Y{=}1) < 0.5$ → прогноз <strong>класс 0</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 0.5</div></div></div>"
  },
  {
    "id": "statistics1506",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Обучение модели",
    "theme": "Обучение",
    "text": "Каким методом находятся параметры логистической регрессии?",
    "choices": [
      "Методом наименьших квадратов",
      "Методом максимального правдоподобия (MLE)",
      "Методом главных компонент",
      "Методом k-средних"
    ],
    "answers": ["Методом максимального правдоподобия (MLE)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Обучение модели</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Метод:</strong> Максимальное правдоподобие (Maximum Likelihood Estimation, MLE).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Функция правдоподобия</h5></div><div class='card-body'><p>$$L(\\beta) = \\prod_{i=1}^{n} p_i^{y_i}(1-p_i)^{1-y_i}$$</p><p>На практике минимизируют <strong>отрицательное логарифмическое правдоподобие</strong> (log loss) с помощью градиентного спуска.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Методом максимального правдоподобия (MLE)</div></div></div>"
  },
  {
    "id": "statistics1507",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример расчёта",
    "theme": "Примеры",
    "text": "Дано: $\\beta_0=-3$, $\\beta_1=1.2$, X=4. Найдите вероятность класса 1.",
    "choices": [
      "$0.120$",
      "$0.500$",
      "$0.858$",
      "$0.950$"
    ],
    "answers": ["$0.858$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт вероятности</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\beta_0=-3$, $\\beta_1=1.2$, X=4</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>$z = -3 + 1.2 \\times 4 = 1.8$</li><li>$P(Y{=}1) = \\dfrac{1}{1+e^{-1.8}} \\approx 0.858$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $0.858$</div></div></div>"
  },
  {
    "id": "statistics1508",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Accuracy",
    "theme": "Метрики",
    "text": "Какая формула соответствует метрике accuracy (точность)?",
    "choices": [
      "$\\dfrac{TP}{TP+FP}$",
      "$\\dfrac{TP}{TP+FN}$",
      "$\\dfrac{TP+TN}{TP+TN+FP+FN}$",
      "$\\dfrac{2 \\times (Prec \\times Rec)}{Prec+Rec}$"
    ],
    "answers": ["$\\dfrac{TP+TN}{TP+TN+FP+FN}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Accuracy</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Accuracy} = \\dfrac{TP+TN}{TP+TN+FP+FN}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие метрики</h5></div><div class='card-body'><ul><li><strong>Precision</strong> = $\\dfrac{TP}{TP+FP}$</li><li><strong>Recall</strong> = $\\dfrac{TP}{TP+FN}$</li><li><strong>F1-score</strong> = $\\dfrac{2 \\times (Prec \\times Rec)}{Prec+Rec}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{TP+TN}{TP+TN+FP+FN}$</div></div></div>"
  },
  {
    "id": "statistics1509",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Precision",
    "theme": "Метрики",
    "text": "Какая формула соответствует метрике precision?",
    "choices": [
      "$\\dfrac{TP}{TP+FP}$",
      "$\\dfrac{TP}{TP+FN}$",
      "$\\dfrac{TN}{TN+FP}$",
      "$\\dfrac{TP+TN}{Total}$"
    ],
    "answers": ["$\\dfrac{TP}{TP+FP}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Precision</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Precision} = \\dfrac{TP}{TP+FP}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Precision показывает, какая доля <strong>предсказанных положительных</strong> результатов оказалась верной.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{TP}{TP+FP}$</div></div></div>"
  },
  {
    "id": "statistics1510",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Recall",
    "theme": "Метрики",
    "text": "Какая формула соответствует метрике recall (полнота)?",
    "choices": [
      "$\\dfrac{TP}{TP+FP}$",
      "$\\dfrac{TP}{TP+FN}$",
      "$\\dfrac{TN}{TN+FP}$",
      "$\\dfrac{TP+TN}{Total}$"
    ],
    "answers": ["$\\dfrac{TP}{TP+FN}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Recall</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Recall} = \\dfrac{TP}{TP+FN}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Recall (полнота, чувствительность) показывает, какую долю <strong>фактических положительных</strong> результатов модель нашла.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{TP}{TP+FN}$</div></div></div>"
  },
  {
    "id": "statistics1511",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Матрица ошибок",
    "theme": "Матрица ошибок",
    "text": "Что означает FP (False Positive) в матрице ошибок?",
    "choices": [
      "Правильный прогноз класса 0",
      "Правильный прогноз класса 1",
      "Прогноз 1, но фактически 0",
      "Прогноз 0, но фактически 1"
    ],
    "answers": ["Прогноз 1, но фактически 0"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Матрица ошибок</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Расшифровка:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Все элементы</h5></div><div class='card-body'><ul><li><strong>TN</strong> — правильный прогноз 0</li><li><strong>TP</strong> — правильный прогноз 1</li><li><strong>FP</strong> — прогноз 1, а факт 0 (ложноположительный)</li><li><strong>FN</strong> — прогноз 0, а факт 1 (ложноотрицательный)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Прогноз 1, но фактически 0</div></div></div>"
  },
  {
    "id": "statistics1512",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение логистической регрессии",
    "theme": "Применение",
    "text": "В какой задаче логистическая регрессия используется для различения спама и обычных писем?",
    "choices": [
      "Прогноз оттока клиентов",
      "Обнаружение спама",
      "Одобрение кредита",
      "Прогноз цен"
    ],
    "answers": ["Обнаружение спама"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Обнаружение спама:</strong> Классификация писем на спам и не спам.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Диагностика заболеваний</strong> — болезнь / нет болезни</li><li><strong>Обнаружение мошенничества</strong> — мошенничество / легитимно</li><li><strong>Прогноз оттока клиентов</strong> — уйдёт / останется</li><li><strong>Одобрение кредита</strong> — одобрить / отклонить</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Обнаружение спама</div></div></div>"
  },
  {
    "id": "statistics1513",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о логистической регрессии верно?",
    "choices": [
      "Она предсказывает непрерывные значения",
      "Она предсказывает вероятность события (для бинарной классификации)",
      "Она используется только для кластеризации",
      "Она не требует параметров"
    ],
    "answers": ["Она предсказывает вероятность события (для бинарной классификации)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Используется для <strong>бинарной классификации</strong></li><li>Применяет <strong>сигмоидную функцию</strong> для получения вероятности</li><li>Порог обычно <strong>0.5</strong></li><li>Обучается методом <strong>MLE</strong></li><li>Оценка: <strong>accuracy, precision, recall, F1, ROC-AUC</strong></li><li>Применяется в спаме, медицине, финансах</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Она предсказывает вероятность события (для бинарной классификации)</div></div></div>"
  }
]
window.quizesSets = quizesSets;