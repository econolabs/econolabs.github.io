let quizesSets = [
  {
    "id": "statistics1101",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое нормальное распределение?",
    "theme": "Нормальное распределение",
    "text": "Что характерно для нормального распределения (normal distribution)?",
    "choices": [
      "Асимметричная форма с длинным правым хвостом",
      "Симметричная колоколообразная форма",
      "Прямоугольная форма",
      "Экспоненциально убывающая форма"
    ],
    "answers": ["Симметричная колоколообразная форма"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Нормальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Непрерывное распределение вероятностей, симметричное и колоколообразное.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Полностью описывается <strong>μ</strong> и <strong>σ</strong></li><li>Многие реальные переменные (рост, вес, тесты) приблизительно нормальны</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Симметричная колоколообразная форма</div></div></div>"
  },
  {
    "id": "statistics1102",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Параметры нормального распределения",
    "theme": "Нормальное распределение",
    "text": "Какими двумя параметрами полностью описывается нормальное распределение?",
    "choices": [
      "Медианой и модой",
      "Средним (μ) и стандартным отклонением (σ)",
      "Минимумом и максимумом",
      "Квартилями Q1 и Q3"
    ],
    "answers": ["Средним (μ) и стандартным отклонением (σ)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Параметры</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Параметры:</strong> $\\mu$ (среднее) и $\\sigma$ (стандартное отклонение).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Обозначение</h5></div><div class='card-body'><p>$X \\sim N(\\mu, \\sigma^2)$</p><ul><li><strong>μ</strong> — центр распределения</li><li><strong>σ</strong> — разброс (ширина)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Средним (μ) и стандартным отклонением (σ)</div></div></div>"
  },
  {
    "id": "statistics1103",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула PDF",
    "theme": "Формулы",
    "text": "Какая формула соответствует плотности вероятности (PDF) нормального распределения?",
    "choices": [
      "$f(x)=\\lambda e^{-\\lambda x}$",
      "$f(x)=\\dfrac{1}{b-a}$",
      "$f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$",
      "$f(x)=p^x(1-p)^{1-x}$"
    ],
    "answers": ["$f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 PDF нормального распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li><strong>μ</strong> — среднее (центр)</li><li><strong>σ</strong> — стандартное отклонение (разброс)</li><li><strong>f(x)</strong> — плотность вероятности в точке x</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$</div></div></div>"
  },
  {
    "id": "statistics1104",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Свойства нормального распределения",
    "theme": "Свойства",
    "text": "Что верно для нормального распределения?",
    "choices": [
      "Среднее, медиана и мода различны",
      "Среднее = Медиана = Мода",
      "Среднее всегда больше медианы",
      "Медиана всегда равна нулю"
    ],
    "answers": ["Среднее = Медиана = Мода"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Свойства</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Ключевое свойство:</strong> Среднее = Медиана = Мода = $\\mu$.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие свойства</h5></div><div class='card-body'><ul><li><strong>Симметрично</strong> относительно среднего</li><li>Общая площадь под кривой = <strong>1</strong></li><li>С ростом σ кривая становится <strong>более плоской</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее = Медиана = Мода</div></div></div>"
  },
  {
    "id": "statistics1105",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Правило 68-95-99.7",
    "theme": "Эмпирическое правило",
    "text": "Согласно эмпирическому правилу, какой процент данных лежит в диапазоне μ ± 1σ?",
    "choices": [
      "50%",
      "68%",
      "95%",
      "99.7%"
    ],
    "answers": ["68%"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Правило 68-95-99.7</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Значения:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Соответствия</h5></div><div class='card-body'><ul><li><strong>μ ± 1σ</strong> → 68%</li><li><strong>μ ± 2σ</strong> → 95%</li><li><strong>μ ± 3σ</strong> → 99.7%</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 68%</div></div></div>"
  },
  {
    "id": "statistics1106",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Правило 68-95-99.7",
    "theme": "Эмпирическое правило",
    "text": "Какой процент данных лежит в диапазоне μ ± 2σ?",
    "choices": [
      "68%",
      "75%",
      "95%",
      "99.7%"
    ],
    "answers": ["95%"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Правило 68-95-99.7</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Значения:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Соответствия</h5></div><div class='card-body'><ul><li>μ ± 1σ → <strong>68%</strong></li><li>μ ± 2σ → <strong>95%</strong></li><li>μ ± 3σ → <strong>99.7%</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 95%</div></div></div>"
  },
  {
    "id": "statistics1107",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула Z-оценки",
    "theme": "Стандартизация",
    "text": "Какая формула используется для стандартизации (Z-оценка)?",
    "choices": [
      "$Z = X - \\mu$",
      "$Z = \\dfrac{X-\\mu}{\\sigma}$",
      "$Z = \\dfrac{\\sigma}{X}$",
      "$Z = \\mu \\times \\sigma$"
    ],
    "answers": ["$Z = \\dfrac{X-\\mu}{\\sigma}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Z-оценка</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$Z = \\dfrac{X-\\mu}{\\sigma}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Преобразует любое нормальное распределение в <strong>стандартное нормальное</strong> $N(0,1)$.</p><ul><li>Если $X \\sim N(\\mu, \\sigma^2)$, то $Z \\sim N(0, 1)$</li><li>Используется вместе с Z-таблицей</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $Z = \\dfrac{X-\\mu}{\\sigma}$</div></div></div>"
  },
  {
    "id": "statistics1108",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: Z-оценка",
    "theme": "Примеры",
    "text": "Для $X \\sim N(60, 10^2)$ найдите Z-оценку для $X = 70$.",
    "choices": [
      "$0.5$",
      "$1$",
      "$2$",
      "$10$"
    ],
    "answers": ["$1$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт Z-оценки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\mu = 60$, $\\sigma = 10$, $X = 70$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$Z = \\dfrac{70-60}{10} = \\dfrac{10}{10} = 1$$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $1$</div></div></div>"
  },
  {
    "id": "statistics1109",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: вероятность по Z-таблице",
    "theme": "Примеры",
    "text": "Для $X \\sim N(60, 10^2)$ найдите $P(X \\le 70)$, если $P(Z \\le 1) = 0.8413$.",
    "choices": [
      "$0.1587$",
      "$0.5000$",
      "$0.8413$",
      "$0.9500$"
    ],
    "answers": ["$0.8413$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Вероятность по Z-таблице</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\mu = 60$, $\\sigma = 10$, $X = 70$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>$Z = \\dfrac{70-60}{10} = 1$</li><li>По Z-таблице $P(Z \\le 1) = 0.8413$</li><li>Значит, $P(X \\le 70) = 0.8413$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $0.8413$</div></div></div>"
  },
  {
    "id": "statistics1110",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формулы вероятностей",
    "theme": "Формулы",
    "text": "Какая формула верна для нормального распределения?",
    "choices": [
      "$P(X \\ge a) = P(X \\le a)$",
      "$P(X \\ge a) = 1 - P(X \\le a)$",
      "$P(X \\ge a) = P(X \\le a) - 1$",
      "$P(X \\ge a) = 0$"
    ],
    "answers": ["$P(X \\ge a) = 1 - P(X \\le a)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формулы вероятностей</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Основные формулы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Полный набор</h5></div><div class='card-body'><ul><li>$P(X \\le a) = P\\left(Z \\le \\dfrac{a-\\mu}{\\sigma}\\right)$</li><li>$P(X \\ge a) = 1 - P(X \\le a)$</li><li>$P(a \\le X \\le b) = P(Z_1 \\le Z \\le Z_2)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(X \\ge a) = 1 - P(X \\le a)$</div></div></div>"
  },
  {
    "id": "statistics1111",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: рост человека",
    "theme": "Примеры",
    "text": "Рост людей распределён нормально с μ = 170 см, σ = 10 см. Какова вероятность, что рост человека от 160 до 180 см?",
    "choices": [
      "$0.3413$",
      "$0.5000$",
      "$0.6826$",
      "$0.9500$"
    ],
    "answers": ["$0.6826$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Рост человека</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\mu = 170$, $\\sigma = 10$, $160 \\le X \\le 180$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>$Z_1 = \\dfrac{160-170}{10} = -1$</li><li>$Z_2 = \\dfrac{180-170}{10} = 1$</li><li>$P(-1 \\le Z \\le 1) = 0.8413 - 0.1587 = 0.6826$</li></ul><p>Это соответствует правилу «μ ± 1σ ≈ 68%».</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $0.6826$</div></div></div>"
  },
  {
    "id": "statistics1112",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение нормального распределения",
    "theme": "Применение",
    "text": "В какой области нормальное распределение используется для анализа IQ-баллов?",
    "choices": [
      "Финансы",
      "Психология",
      "Производство",
      "Биология"
    ],
    "answers": ["Психология"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Психология:</strong> IQ-баллы.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Образование</strong> — результаты тестов</li><li><strong>Биология</strong> — рост, вес</li><li><strong>Производство</strong> — допуски</li><li><strong>Финансы</strong> — доходность акций</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Психология</div></div></div>"
  },
  {
    "id": "statistics1113",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение нормального распределения",
    "theme": "Применение",
    "text": "В какой области нормальное распределение используется для анализа доходности акций?",
    "choices": [
      "Психология",
      "Биология",
      "Финансы",
      "Образование"
    ],
    "answers": ["Финансы"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Финансы:</strong> Доходность акций.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Образование</strong> — результаты тестов</li><li><strong>Биология</strong> — рост и вес</li><li><strong>Психология</strong> — IQ-баллы</li><li><strong>Производство</strong> — допуски, контроль качества</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Финансы</div></div></div>"
  },
  {
    "id": "statistics1114",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Влияние σ",
    "theme": "Свойства",
    "text": "Как изменяется кривая нормального распределения при увеличении стандартного отклонения σ?",
    "choices": [
      "Становится выше и уже",
      "Становится более плоской и широкой",
      "Сдвигается вправо",
      "Становится асимметричной"
    ],
    "answers": ["Становится более плоской и широкой"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Влияние σ</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Зависимость:</strong> С ростом σ кривая становится более плоской и широкой.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><ul><li><strong>Малое σ</strong> → узкая высокая кривая</li><li><strong>Большое σ</strong> → плоская широкая кривая</li><li>Площадь под кривой всегда = 1</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Становится более плоской и широкой</div></div></div>"
  },
  {
    "id": "statistics1115",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о нормальном распределении верно?",
    "choices": [
      "Оно описывается только средним",
      "Оно симметрично и описывается параметрами μ и σ",
      "Оно всегда имеет среднее 0",
      "Оно применяется только в физике"
    ],
    "answers": ["Оно симметрично и описывается параметрами μ и σ"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Нормальное распределение <strong>симметрично и колоколообразно</strong></li><li>Параметры: <strong>μ</strong> и <strong>σ</strong></li><li>Правило <strong>68-95-99.7</strong></li><li>Z-оценка для стандартизации</li><li>Применяется в образовании, здравоохранении, финансах, контроле качества</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Оно симметрично и описывается параметрами μ и σ</div></div></div>"
  }
]

window.quizesSets = quizesSets;