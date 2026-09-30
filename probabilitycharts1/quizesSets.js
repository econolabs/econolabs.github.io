let quizesSets = [
  {
    "id": "statistics1601",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ящик с усами (Box Plot)",
    "theme": "Графики",
    "text": "Что показывает ящик с усами (box plot)?",
    "choices": [
      "Только среднее значение",
      "Пятичисловую сводку: Min, Q1, Медиана, Q3, Max",
      "Доли категорий",
      "Тренд во времени"
    ],
    "answers": ["Пятичисловую сводку: Min, Q1, Медиана, Q3, Max"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ящик с усами</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Элементы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сводка</h5></div><div class='card-body'><ul><li><strong>Min</strong> — минимум</li><li><strong>Q1</strong> — первый квартиль</li><li><strong>Медиана</strong> — середина</li><li><strong>Q3</strong> — третий квартиль</li><li><strong>Max</strong> — максимум</li></ul><p>Помогает выявлять выбросы.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Пятичисловую сводку: Min, Q1, Медиана, Q3, Max</div></div></div>"
  },
  {
    "id": "statistics1602",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Нормальное распределение",
    "theme": "Графики",
    "text": "Какой форму имеет кривая нормального распределения?",
    "choices": [
      "Прямоугольную",
      "Симметричную колоколообразную",
      "Экспоненциально убывающую",
      "Асимметричную с длинным правым хвостом"
    ],
    "answers": ["Симметричную колоколообразную"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Нормальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Симметричная колоколообразная кривая.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Симметрично относительно $\\mu$</li><li>Среднее = Медиана = Мода</li><li>Формула: $f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Симметричную колоколообразную</div></div></div>"
  },
  {
    "id": "statistics1603",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Равномерное распределение",
    "theme": "Графики",
    "text": "Какой форму имеет график равномерного распределения (uniform distribution)?",
    "choices": [
      "Колоколообразную",
      "Прямоугольную (все значения равновероятны в диапазоне)",
      "Экспоненциально убывающую",
      "Ступенчатую"
    ],
    "answers": ["Прямоугольную (все значения равновероятны в диапазоне)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Равномерное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Прямоугольник — все значения равновероятны.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Параметры</h5></div><div class='card-body'><ul><li>$a$ — минимум</li><li>$b$ — максимум</li><li>$f(x) = \\dfrac{1}{b-a}$ при $a \\le x \\le b$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Прямоугольную (все значения равновероятны в диапазоне)</div></div></div>"
  },
  {
    "id": "statistics1604",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Экспоненциальное распределение",
    "theme": "Графики",
    "text": "Какой вид имеет график экспоненциального распределения (exponential distribution)?",
    "choices": [
      "Симметричный колокол",
      "Прямоугольник",
      "Экспоненциально убывающая кривая",
      "Ступенчатая диаграмма"
    ],
    "answers": ["Экспоненциально убывающая кривая"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Экспоненциальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Экспоненциально убывающая кривая.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$f(x)=\\lambda e^{-\\lambda x}, \\quad x \\ge 0$$</p><p>Моделирует время между событиями.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Экспоненциально убывающая кривая</div></div></div>"
  },
  {
    "id": "statistics1605",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Распределение Бернулли",
    "theme": "Графики",
    "text": "Как выглядит график распределения Бернулли (Bernoulli distribution)?",
    "choices": [
      "Один столбик",
      "Два столбика с одинаковой высотой 0.5 при p = 0.5",
      "Прямоугольник",
      "Колоколообразная кривая"
    ],
    "answers": ["Два столбика с одинаковой высотой 0.5 при p = 0.5"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение Бернулли</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Два столбика — для значений 0 и 1.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$P(X=x)=p^{x}(1-p)^{1-x}, \\quad x=0,1$$</p><p>При $p = 0.5$ оба столбика имеют высоту 0.5.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Два столбика с одинаковой высотой 0.5 при p = 0.5</div></div></div>"
  },
  {
    "id": "statistics1606",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Биномиальное распределение",
    "theme": "Графики",
    "text": "Как выглядит график биномиального распределения (binomial distribution) при n = 5, p = 0.5?",
    "choices": [
      "Прямоугольник",
      "Симметричная гистограмма с максимумом в середине",
      "Экспоненциально убывающая кривая",
      "Один столбик"
    ],
    "answers": ["Симметричная гистограмма с максимумом в середине"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Биномиальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма при n=5, p=0.5:</strong> Симметричная гистограмма.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Значения</h5></div><div class='card-body'><p>P(X=0)=0.03, P(X=1)=0.16, P(X=2)=0.31, P(X=3)=0.31, P(X=4)=0.16, P(X=5)=0.03</p><p>Максимум в середине (k=2, k=3).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Симметричная гистограмма с максимумом в середине</div></div></div>"
  },
  {
    "id": "statistics1607",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Распределение Пуассона",
    "theme": "Графики",
    "text": "Как выглядит график распределения Пуассона (Poisson distribution)?",
    "choices": [
      "Колоколообразная кривая",
      "Гистограмма, скошенная вправо",
      "Прямоугольник",
      "Прямая линия"
    ],
    "answers": ["Гистограмма, скошенная вправо"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение Пуассона</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Гистограмма, скошенная вправо.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}$$</p><p>Моделирует число событий за фиксированный интервал.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Гистограмма, скошенная вправо</div></div></div>"
  },
  {
    "id": "statistics1608",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Положительная асимметрия",
    "theme": "Асимметрия",
    "text": "Что характерно для положительной асимметрии (positive skew)?",
    "choices": [
      "Длинный левый хвост",
      "Длинный правый хвост",
      "Симметричная форма",
      "Прямоугольная форма"
    ],
    "answers": ["Длинный правый хвост"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Положительная асимметрия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Длинный правый хвост.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сравнение</h5></div><div class='card-body'><ul><li><strong>Положительная</strong> → длинный правый хвост</li><li><strong>Отрицательная</strong> → длинный левый хвост</li><li><strong>Нулевая</strong> → симметричное</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Длинный правый хвост</div></div></div>"
  },
  {
    "id": "statistics1609",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Отрицательная асимметрия",
    "theme": "Асимметрия",
    "text": "Что характерно для отрицательной асимметрии (negative skew)?",
    "choices": [
      "Длинный правый хвост",
      "Длинный левый хвост",
      "Симметричная форма",
      "Прямоугольная форма"
    ],
    "answers": ["Длинный левый хвост"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Отрицательная асимметрия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Длинный левый хвост.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сравнение</h5></div><div class='card-body'><ul><li><strong>Положительная</strong> → длинный правый хвост</li><li><strong>Отрицательная</strong> → длинный левый хвост</li><li><strong>Нулевая</strong> → симметричное</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Длинный левый хвост</div></div></div>"
  },
  {
    "id": "statistics1610",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Лептокуртическое распределение",
    "theme": "Эксцесс",
    "text": "Что характерно для лептокуртического (leptokurtic) распределения?",
    "choices": [
      "Более плоское с лёгкими хвостами",
      "Более островершинное с тяжёлыми хвостами (больше выбросов)",
      "Симметричное",
      "Прямоугольное"
    ],
    "answers": ["Более островершинное с тяжёлыми хвостами (больше выбросов)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Лептокуртическое распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Более островершинное, тяжёлые хвосты.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Три типа эксцесса</h5></div><div class='card-body'><ul><li><strong>Лепто</strong> — островершинное, больше выбросов</li><li><strong>Мезо</strong> — нормальное</li><li><strong>Плати</strong> — плоское, лёгкие хвосты</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Более островершинное с тяжёлыми хвостами (больше выбросов)</div></div></div>"
  },
  {
    "id": "statistics1611",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Платикуртическое распределение",
    "theme": "Эксцесс",
    "text": "Что характерно для платикуртического (platykurtic) распределения?",
    "choices": [
      "Островершинное с тяжёлыми хвостами",
      "Плоское с лёгкими хвостами (меньше выбросов)",
      "Симметричное",
      "Прямоугольное"
    ],
    "answers": ["Плоское с лёгкими хвостами (меньше выбросов)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Платикуртическое распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Форма:</strong> Плоское, лёгкие хвосты.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Три типа эксцесса</h5></div><div class='card-body'><ul><li><strong>Лепто</strong> — островершинное, больше выбросов</li><li><strong>Мезо</strong> — нормальное</li><li><strong>Плати</strong> — плоское, лёгкие хвосты, меньше выбросов</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Плоское с лёгкими хвостами (меньше выбросов)</div></div></div>"
  },
  {
    "id": "statistics1612",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Правило 68-95-99.7",
    "theme": "Эмпирическое правило",
    "text": "Какие зоны выделены на графике эмпирического правила (empirical rule)?",
    "choices": [
      "μ ± 0.5σ, μ ± 1σ, μ ± 1.5σ",
      "μ ± 1σ (68%), μ ± 2σ (95%), μ ± 3σ (99.7%)",
      "μ ± σ/2, μ ± σ, μ ± 2σ",
      "Только μ ± 1σ"
    ],
    "answers": ["μ ± 1σ (68%), μ ± 2σ (95%), μ ± 3σ (99.7%)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Правило 68-95-99.7</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Три зоны:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Проценты</h5></div><div class='card-body'><ul><li>μ ± 1σ → <strong>68%</strong></li><li>μ ± 2σ → <strong>95%</strong></li><li>μ ± 3σ → <strong>99.7%</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> μ ± 1σ (68%), μ ± 2σ (95%), μ ± 3σ (99.7%)</div></div></div>"
  },
  {
    "id": "statistics1613",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Влияние размера выборки",
    "theme": "ЦПТ",
    "text": "Что показывает график влияния размера выборки (sample size effect)?",
    "choices": [
      "С ростом n разброс увеличивается",
      "С ростом n (от 5 до 500) распределение становится уже (сужается разброс)",
      "С ростом n распределение не меняется",
      "С ростом n распределение становится асимметричным"
    ],
    "answers": ["С ростом n (от 5 до 500) распределение становится уже (сужается разброс)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Влияние размера выборки</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 С ростом n:</strong> Стандартная ошибка $\\sigma/\\sqrt{n}$ уменьшается.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li>$n = 5$ → широкое</li><li>$n = 500$ → очень узкое</li></ul><p>Это следствие центральной предельной теоремы.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> С ростом n (от 5 до 500) распределение становится уже (сужается разброс)</div></div></div>"
  },
  {
    "id": "statistics1614",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Форма t-распределения",
    "theme": "t-распределение",
    "text": "Что показывает график формы t-распределения (t-distribution shape)?",
    "choices": [
      "t-распределение идентично нормальному",
      "t-распределение имеет более тяжёлые хвосты, чем нормальное, но приближается к нему с ростом df",
      "t-распределение всегда скошено вправо",
      "t-распределение дискретно"
    ],
    "answers": ["t-распределение имеет более тяжёлые хвосты, чем нормальное, но приближается к нему с ростом df"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Форма t-распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Сравнение:</strong> Три кривые — нормальное, t с df=5, t с df=1.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Наблюдения</h5></div><div class='card-body'><ul><li>С <strong>малым df</strong> — тяжёлые хвосты</li><li>С <strong>ростом df</strong> → приближается к нормальному</li><li>Применяется при неизвестном σ и малых выборках</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> t-распределение имеет более тяжёлые хвосты, чем нормальное, но приближается к нему с ростом df</div></div></div>"
  },
  {
    "id": "statistics1615",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Форма хи-квадрат",
    "theme": "Распределение хи-квадрат",
    "text": "Как изменяется форма распределения хи-квадрат (chi-square shape) с ростом df?",
    "choices": [
      "Становится более асимметричной",
      "С ростом df становится менее асимметричной, но всегда остаётся неотрицательной",
      "Остаётся неизменной",
      "Становится дискретной"
    ],
    "answers": ["С ростом df становится менее асимметричной, но всегда остаётся неотрицательной"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Форма хи-квадрат</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Три кривые:</strong> df=1 (сильно скошена), df=5, df=10.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Всегда <strong>неотрицательна</strong> ($\\chi^2 \\ge 0$)</li><li>Скошена <strong>вправо</strong></li><li>С ростом df становится симметричнее</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> С ростом df становится менее асимметричной, но всегда остаётся неотрицательной</div></div></div>"
  },
  {
    "id": "statistics1616",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Сигмоидная функция",
    "theme": "Логистическая регрессия",
    "text": "Что показывает график сигмоидной функции (sigmoid function)?",
    "choices": [
      "Линейный рост от 0 до 1",
      "S-образную кривую, преобразующую любое значение в вероятность от 0 до 1",
      "Экспоненциальный рост",
      "Прямоугольное распределение"
    ],
    "answers": ["S-образную кривую, преобразующую любое значение в вероятность от 0 до 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Сигмоидная функция</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\sigma(z) = \\dfrac{1}{1+e^{-z}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>S-образная кривая</li><li>При $z \\to +\\infty$ → 1</li><li>При $z \\to -\\infty$ → 0</li><li>При $z = 0$ → 0.5</li></ul><p>Используется в логистической регрессии.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> S-образную кривую, преобразующую любое значение в вероятность от 0 до 1</div></div></div>"
  },
  {
    "id": "statistics1617",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Разделяющая граница",
    "theme": "Логистическая регрессия",
    "text": "Что показывает график разделяющей границы (decision boundary)?",
    "choices": [
      "Гистограмму распределения",
      "Линию, разделяющую два класса точек",
      "Колоколообразную кривую",
      "Прямоугольник"
    ],
    "answers": ["Линию, разделяющую два класса точек"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Разделяющая граница</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Элементы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Что на графике</h5></div><div class='card-body'><ul><li><strong>Синие точки</strong> — класс 0</li><li><strong>Оранжевые точки</strong> — класс 1</li><li><strong>Линия</strong> — разделяющая граница</li></ul><p>Точки по разные стороны линии относятся к разным классам.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Линию, разделяющую два класса точек</div></div></div>"
  },
  {
    "id": "statistics1618",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Линейная регрессия (scatter)",
    "theme": "Линейная регрессия",
    "text": "Что показывает график линейной регрессии (regression scatter)?",
    "choices": [
      "Доли категорий",
      "Точки данных и линию наилучшего приближения",
      "Колоколообразную кривую",
      "Матрицу ошибок"
    ],
    "answers": ["Точки данных и линию наилучшего приближения"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Линейная регрессия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Элементы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Что на графике</h5></div><div class='card-body'><ul><li><strong>Синие точки</strong> — наблюдения</li><li><strong>Красная линия</strong> — линия наилучшего приближения</li><li>Модель: $Y = \\beta_0 + \\beta_1 X + \\varepsilon$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Точки данных и линию наилучшего приближения</div></div></div>"
  },
  {
    "id": "statistics1619",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Диаграмма Венна",
    "theme": "Теория вероятностей",
    "text": "Что показывает график диаграммы Венна с пересечением (venn overlap)?",
    "choices": [
      "Один круг",
      "Два пересекающихся круга A и B",
      "Три круга",
      "Прямоугольник"
    ],
    "answers": ["Два пересекающихся круга A и B"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Диаграмма Венна</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Элементы:</strong> Два круга A и B с пересечением.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><ul><li>Пересечение $A \\cap B$ — общие исходы</li><li>Используется для иллюстрации вероятностей</li><li>Показывает $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Два пересекающихся круга A и B</div></div></div>"
  },
  {
    "id": "statistics1620",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о галерее графиков верно?",
    "choices": [
      "Все графики одинаковы",
      "Каждый график создаётся функцией из объекта `graphs`, ключ которой совпадает с id контейнера",
      "Графики нельзя переиспользовать",
      "JSXGraph не поддерживает функции"
    ],
    "answers": ["Каждый график создаётся функцией из объекта `graphs`, ключ которой совпадает с id контейнера"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Архитектура галереи</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Подход:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Как это работает</h5></div><div class='card-body'><ul><li>Объект <code>graphs</code> — ключи-имена графиков</li><li>Каждый ключ = <strong>id div-контейнера</strong></li><li>Один цикл <code>Object.keys(graphs).forEach(...)</code> подключает все графики к их доскам</li><li>Легко расширять: добавить функцию в объект — получить новый график</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Каждый график создаётся функцией из объекта `graphs`, ключ которой совпадает с id контейнера</div></div></div>"
  }
]
window.quizesSets = quizesSets;