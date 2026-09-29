let quizesSets = [
  {
    "id": "statistics1201",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое t-распределение?",
    "theme": "t-распределение",
    "text": "Когда используется t-распределение (t-distribution)?",
    "choices": [
      "Когда известны и μ, и σ",
      "Когда стандартное отклонение генеральной совокупности (σ) неизвестно",
      "Только для больших выборок (n > 100)",
      "Только для дискретных данных"
    ],
    "answers": ["Когда стандартное отклонение генеральной совокупности (σ) неизвестно"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 t-распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Когда используется:</strong> Когда σ неизвестно.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Особенности</h5></div><div class='card-body'><ul><li>Похоже на нормальное, но с <strong>более тяжёлыми хвостами</strong></li><li>Применяется для <strong>малых выборок</strong> (n < 30)</li><li>Используется в <strong>проверке гипотез</strong> и <strong>доверительных интервалах</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Когда стандартное отклонение генеральной совокупности (σ) неизвестно</div></div></div>"
  },
  {
    "id": "statistics1202",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Сравнение с нормальным распределением",
    "theme": "t-распределение",
    "text": "Чем t-распределение отличается от нормального распределения?",
    "choices": [
      "Оно симметрично",
      "У него более тяжёлые хвосты",
      "У него среднее = 0",
      "Оно дискретное"
    ],
    "answers": ["У него более тяжёлые хвосты"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 t-распределение vs Нормальное</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Ключевое отличие:</strong> Более тяжёлые хвосты.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сравнение</h5></div><div class='card-body'><ul><li><strong>Нормальное</strong> — фиксированная форма</li><li><strong>t-распределение</strong> — форма зависит от df, хвосты тяжелее</li><li>С ростом df t-распределение <strong>приближается к нормальному</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> У него более тяжёлые хвосты</div></div></div>"
  },
  {
    "id": "statistics1203",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Число степеней свободы",
    "theme": "Степени свободы",
    "text": "Как вычисляется число степеней свободы (df) для выборки объёмом n?",
    "choices": [
      "df = n",
      "df = n + 1",
      "df = n − 1",
      "df = n / 2"
    ],
    "answers": ["df = n − 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Число степеней свободы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{df} = n - 1$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Влияние df</h5></div><div class='card-body'><ul><li><strong>Малое df</strong> → более тяжёлые хвосты</li><li><strong>Большое df</strong> → ближе к нормальному распределению</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> df = n − 1</div></div></div>"
  },
  {
    "id": "statistics1204",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Влияние df",
    "theme": "Степени свободы",
    "text": "Что происходит с t-распределением при увеличении числа степеней свободы?",
    "choices": [
      "Хвосты становятся тяжелее",
      "Форма приближается к нормальному распределению",
      "Распределение становится дискретным",
      "Среднее сдвигается"
    ],
    "answers": ["Форма приближается к нормальному распределению"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Влияние df</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 С ростом df:</strong> Форма приближается к нормальному распределению.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>df = 1</strong> → очень тяжёлые хвосты</li><li><strong>df = 5</strong> → тяжёлые хвосты</li><li><strong>df = 30</strong> → почти как нормальное</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Форма приближается к нормальному распределению</div></div></div>"
  },
  {
    "id": "statistics1205",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула t-статистики",
    "theme": "Формулы",
    "text": "Какая формула соответствует t-статистике?",
    "choices": [
      "$t = \\dfrac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}$",
      "$t = \\dfrac{\\bar{X}-\\mu}{s/\\sqrt{n}}$",
      "$t = \\dfrac{\\mu-\\bar{X}}{n}$",
      "$t = \\dfrac{s}{\\sqrt{n}}$"
    ],
    "answers": ["$t = \\dfrac{\\bar{X}-\\mu}{s/\\sqrt{n}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула t-статистики</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$t = \\dfrac{\\bar{X}-\\mu}{s/\\sqrt{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$\\bar{X}$ — выборочное среднее</li><li>$\\mu$ — гипотетическое среднее генеральной совокупности</li><li>$s$ — <strong>выборочное</strong> стандартное отклонение</li><li>$n$ — объём выборки</li></ul><p>Отличие от Z-оценки: $s$ вместо $\\sigma$.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $t = \\dfrac{\\bar{X}-\\mu}{s/\\sqrt{n}}$</div></div></div>"
  },
  {
    "id": "statistics1206",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: расчёт t-статистики",
    "theme": "Примеры",
    "text": "Выборка из 10 студентов: средний балл 85, стандартное отклонение 12. Проверяем гипотезу μ = 80. Найдите t-статистику.",
    "choices": [
      "$0.42$",
      "$1.32$",
      "$5.00$",
      "$12.00$"
    ],
    "answers": ["$1.32$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт t-статистики</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\bar{X} = 85$, $\\mu = 80$, $s = 12$, $n = 10$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$t = \\dfrac{85-80}{12/\\sqrt{10}} = \\dfrac{5}{3.79} \\approx 1.32$$</p><ul><li>$\\sqrt{10} \\approx 3.16$</li><li>$12/3.16 \\approx 3.79$</li><li>$5 / 3.79 \\approx 1.32$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $1.32$</div></div></div>"
  },
  {
    "id": "statistics1207",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: df для задачи",
    "theme": "Примеры",
    "text": "Для выборки из 10 студентов каково число степеней свободы?",
    "choices": [
      "$9$",
      "$10$",
      "$11$",
      "$5$"
    ],
    "answers": ["$9$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Число степеней свободы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $\\text{df} = n - 1$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$n = 10$ → $\\text{df} = 10 - 1 = 9$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $9$</div></div></div>"
  },
  {
    "id": "statistics1208",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: критическое значение t",
    "theme": "Примеры",
    "text": "Для df = 9 при 95% доверительном уровне (двусторонний тест) критическое значение t равно...",
    "choices": [
      "$1.833$",
      "$2.262$",
      "$3.250$",
      "$1.960$"
    ],
    "answers": ["$2.262$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Критическое значение t</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> df = 9, α = 0.05 (двусторонний → α/2 = 0.025)</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 По t-таблице</h5></div><div class='card-body'><p>$$t(0.025, 9) = 2.262$$</p><p>Критическое значение t = ±2.262</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $2.262$</div></div></div>"
  },
  {
    "id": "statistics1209",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Доверительный интервал",
    "theme": "Формулы",
    "text": "Какая формула соответствует 95% доверительному интервалу для среднего при неизвестном σ?",
    "choices": [
      "$\\bar{X} \\pm z_{\\alpha/2} \\times \\dfrac{\\sigma}{\\sqrt{n}}$",
      "$\\bar{X} \\pm t_{\\alpha/2,\\,n-1} \\times \\dfrac{s}{\\sqrt{n}}$",
      "$\\bar{X} \\pm t_{\\alpha/2,\\,n-1} \\times s$",
      "$\\bar{X} \\pm \\dfrac{s}{n}$"
    ],
    "answers": ["$\\bar{X} \\pm t_{\\alpha/2,\\,n-1} \\times \\dfrac{s}{\\sqrt{n}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Доверительный интервал</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\bar{X} \\pm t_{\\alpha/2,\\,n-1} \\times \\dfrac{s}{\\sqrt{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$t_{\\alpha/2,n-1}$ — критическое значение t</li><li>$s$ — <strong>выборочное</strong> стандартное отклонение</li><li>$n$ — объём выборки</li></ul><p>Отличие от Z-интервала: $t$ вместо $z$ и $s$ вместо $\\sigma$.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\bar{X} \\pm t_{\\alpha/2,\\,n-1} \\times \\dfrac{s}{\\sqrt{n}}$</div></div></div>"
  },
  {
    "id": "statistics1210",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: клинические испытания",
    "theme": "Применение",
    "text": "В какой области t-распределение используется для клинических испытаний на малых выборках?",
    "choices": [
      "Образование",
      "Здравоохранение",
      "Финансы",
      "Производство"
    ],
    "answers": ["Здравоохранение"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение t-распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Здравоохранение:</strong> Клинические испытания на малых выборках.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Образование</strong> — анализ результатов тестов</li><li><strong>Контроль качества</strong> — среднее процесса</li><li><strong>Финансы</strong> — доходность инвестиций</li><li><strong>Эксперименты</strong> — научные исследования, A/B-тестирование</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Здравоохранение</div></div></div>"
  },
  {
    "id": "statistics1211",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: A/B-тестирование",
    "theme": "Применение",
    "text": "В каком сценарии t-распределение используется для сравнения двух вариантов при малых выборках?",
    "choices": [
      "Образование",
      "A/B-тестирование",
      "Прогноз погоды",
      "Криптография"
    ],
    "answers": ["A/B-тестирование"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Эксперименты:</strong> A/B-тестирование и научные исследования.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Почему t-распределение</h5></div><div class='card-body'><p>При малых выборках σ неизвестно, поэтому используется t-распределение для проверки значимости различий.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> A/B-тестирование</div></div></div>"
  },
  {
    "id": "statistics1212",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о t-распределении верно?",
    "choices": [
      "Оно используется только для больших выборок",
      "Оно используется, когда σ неизвестно, и имеет более тяжёлые хвосты, чем нормальное",
      "Оно всегда идентично нормальному распределению",
      "У него нет параметров"
    ],
    "answers": ["Оно используется, когда σ неизвестно, и имеет более тяжёлые хвосты, чем нормальное"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Используется, когда <strong>σ неизвестно</strong></li><li>Имеет <strong>более тяжёлые хвосты</strong>, чем нормальное</li><li>Применяется для малых выборок (n < 30)</li><li>С ростом df приближается к нормальному</li><li>df = n − 1</li><li>Используется в гипотезах, доверительных интервалах, A/B-тестах</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Оно используется, когда σ неизвестно, и имеет более тяжёлые хвосты, чем нормальное</div></div></div>"
  }
]

window.quizesSets = quizesSets;