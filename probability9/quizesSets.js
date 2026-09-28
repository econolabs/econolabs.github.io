let quizesSets = [
  {
    "id": "statistics901",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Распределение Бернулли",
    "theme": "Распределения",
    "text": "Что моделирует распределение Бернулли (Bernoulli distribution)?",
    "choices": [
      "Число событий за фиксированный интервал",
      "Одиночное испытание с двумя исходами: успех или неудача",
      "Число успехов в n независимых испытаниях",
      "Время между двумя событиями"
    ],
    "answers": ["Одиночное испытание с двумя исходами: успех или неудача"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение Бернулли</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Одиночное испытание с двумя исходами: успех (1) или неудача (0).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$P(X=x)=p^{x}(1-p)^{1-x},\\quad x=0,1$$</p><ul><li>Параметр: $p$ — вероятность успеха</li><li>Обозначение: $X \\sim \\mathrm{Bernoulli}(p)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Одиночное испытание с двумя исходами: успех или неудача</div></div></div>"
  },
  {
    "id": "statistics902",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Биномиальное распределение",
    "theme": "Распределения",
    "text": "Что моделирует биномиальное распределение (binomial distribution)?",
    "choices": [
      "Одно испытание с двумя исходами",
      "Число успехов в $n$ независимых испытаниях Бернулли",
      "Время между событиями",
      "Непрерывные данные с колоколообразной кривой"
    ],
    "answers": ["Число успехов в $n$ независимых испытаниях Бернулли"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Биномиальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Число успехов в $n$ независимых испытаниях Бернулли.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$$</p><ul><li>Параметры: $n$ — число испытаний, $p$ — вероятность успеха</li><li>Обозначение: $X \\sim \\mathrm{Binomial}(n,p)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Число успехов в $n$ независимых испытаниях Бернулли</div></div></div>"
  },
  {
    "id": "statistics903",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Распределение Пуассона",
    "theme": "Распределения",
    "text": "Что моделирует распределение Пуассона (Poisson distribution)?",
    "choices": [
      "Одиночное испытание с двумя исходами",
      "Число событий за фиксированный интервал времени или пространства",
      "Время между двумя последовательными событиями",
      "Непрерывные данные с колоколообразной кривой"
    ],
    "answers": ["Число событий за фиксированный интервал времени или пространства"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение Пуассона</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Число событий за фиксированный интервал времени или пространства.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$$</p><ul><li>Параметр: $\\lambda$ — средняя интенсивность событий</li><li>Обозначение: $X \\sim \\mathrm{Poisson}(\\lambda)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Число событий за фиксированный интервал времени или пространства</div></div></div>"
  },
  {
    "id": "statistics904",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Нормальное распределение",
    "theme": "Распределения",
    "text": "Что характерно для нормального распределения (normal distribution)?",
    "choices": [
      "Все значения равновероятны",
      "Симметричная колоколообразная кривая",
      "Используется только для целых чисел",
      "Моделирует время между событиями"
    ],
    "answers": ["Симметричная колоколообразная кривая"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Нормальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Моделирует непрерывные данные с симметричной колоколообразной кривой.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}$$</p><ul><li>Параметры: $\\mu$ — среднее, $\\sigma$ — стандартное отклонение</li><li>Обозначение: $X \\sim \\mathcal{N}(\\mu,\\sigma^{2})$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Симметричная колоколообразная кривая</div></div></div>"
  },
  {
    "id": "statistics905",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Равномерное распределение",
    "theme": "Распределения",
    "text": "Что характерно для равномерного распределения (uniform distribution)?",
    "choices": [
      "Все значения в диапазоне равновероятны",
      "Значения группируются вокруг среднего",
      "Используется только для дискретных данных",
      "Моделирует число событий за интервал"
    ],
    "answers": ["Все значения в диапазоне равновероятны"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Равномерное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Все значения в диапазоне равновероятны.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$f(x)=\\frac{1}{b-a}\\quad\\text{при }a\\le x\\le b$$</p><ul><li>Параметры: $a$ — минимум, $b$ — максимум</li><li>Обозначение: $X \\sim \\mathrm{Uniform}(a,b)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Все значения в диапазоне равновероятны</div></div></div>"
  },
  {
    "id": "statistics906",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Экспоненциальное распределение",
    "theme": "Распределения",
    "text": "Что моделирует экспоненциальное распределение (exponential distribution)?",
    "choices": [
      "Число успехов в n испытаниях",
      "Время между двумя последовательными событиями",
      "Все значения равновероятны",
      "Число событий за интервал"
    ],
    "answers": ["Время между двумя последовательными событиями"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Экспоненциальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Время между двумя последовательными событиями.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула и параметры</h5></div><div class='card-body'><p>$$f(x)=\\lambda e^{-\\lambda x}\\quad\\text{при }x\\ge 0$$</p><ul><li>Параметр: $\\lambda$ — интенсивность</li><li>Обозначение: $X \\sim \\mathrm{Exponential}(\\lambda)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Время между двумя последовательными событиями</div></div></div>"
  },
  {
    "id": "statistics907",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула Бернулли",
    "theme": "Формулы",
    "text": "Какая формула соответствует распределению Бернулли?",
    "choices": [
      "$P(X=x)=p^{x}(1-p)^{1-x},\\quad x=0,1$",
      "$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$",
      "$P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$",
      "$f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}$"
    ],
    "answers": ["$P(X=x)=p^{x}(1-p)^{1-x},\\quad x=0,1$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула Бернулли</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(X=x)=p^{x}(1-p)^{1-x},\\quad x=0,1$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие формулы</h5></div><div class='card-body'><ul><li><strong>Биномиальное:</strong> $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$</li><li><strong>Пуассона:</strong> $P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$</li><li><strong>Нормальное:</strong> $f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(X=x)=p^{x}(1-p)^{1-x},\\quad x=0,1$</div></div></div>"
  },
  {
    "id": "statistics908",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула Пуассона",
    "theme": "Формулы",
    "text": "Какая формула соответствует распределению Пуассона?",
    "choices": [
      "$P(X=x)=p^{x}(1-p)^{1-x}$",
      "$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$",
      "$P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$",
      "$f(x)=\\lambda e^{-\\lambda x}$"
    ],
    "answers": ["$P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула Пуассона</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!},\\quad k=0,1,2,\\dots$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$\\lambda$ — средняя интенсивность событий</li><li>$k!$ — факториал</li><li>$e^{-\\lambda}$ — экспонента</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(X=k)=e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$</div></div></div>"
  },
  {
    "id": "statistics909",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: биномиальное распределение",
    "theme": "Примеры",
    "text": "Какова вероятность выпадения ровно 3 орлов при 5 подбрасываниях честной монеты ($n=5$, $p=0.5$)?",
    "choices": [
      "0.15625",
      "0.3125",
      "0.5",
      "0.625"
    ],
    "answers": ["0.3125"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Биномиальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $n=5$, $p=0.5$, $k=3$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$P(X=3)=\\binom{5}{3}(0.5)^{3}(0.5)^{2}$$</p><ul><li>$\\binom{5}{3}=10$</li><li>$(0.5)^{3}=0.125$</li><li>$(0.5)^{2}=0.25$</li><li>$P(X=3)=10 \\times 0.125 \\times 0.25 = 0.3125$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 0.3125</div></div></div>"
  },
  {
    "id": "statistics910",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: Пуассон",
    "theme": "Примеры",
    "text": "В магазин в среднем приходит 3 покупателя в час ($\\lambda=3$). Какова вероятность, что за час придёт ровно 2 покупателя?",
    "choices": [
      "0.100",
      "0.224",
      "0.300",
      "0.500"
    ],
    "answers": ["0.224"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Распределение Пуассона</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\lambda=3$, $k=2$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$P(X=2)=e^{-3}\\frac{3^{2}}{2!}$$</p><ul><li>$e^{-3} \\approx 0.0498$</li><li>$3^{2}=9$</li><li>$2!=2$</li><li>$P(X=2)=0.0498 \\times 9 / 2 \\approx 0.224$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 0.224</div></div></div>"
  },
  {
    "id": "statistics911",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: экспоненциальное",
    "theme": "Примеры",
    "text": "Время между приходами покупателей подчиняется экспоненциальному распределению с $\\lambda=2$. Какова вероятность, что интервал больше 1?",
    "choices": [
      "$e^{-1} \\approx 0.368$",
      "$e^{-2} \\approx 0.135$",
      "$1 - e^{-2} \\approx 0.865$",
      "$0.5$"
    ],
    "answers": ["$e^{-2} \\approx 0.135$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Экспоненциальное распределение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $\\lambda=2$, нужно найти $P(X>1)$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><p>$$P(X>1)=e^{-\\lambda \\cdot 1}=e^{-2}$$</p><ul><li>$e^{-2} \\approx 0.135$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $e^{-2} \\approx 0.135$</div></div></div>"
  },
  {
    "id": "statistics912",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: Пуассон",
    "theme": "Применение",
    "text": "В каком реальном сценарии используется распределение Пуассона?",
    "choices": [
      "Рост студентов в классе",
      "Число приходов покупателей за час",
      "Подбрасывание одной монеты",
      "Время ожидания между звонками"
    ],
    "answers": ["Число приходов покупателей за час"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение Пуассона</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Типичные применения:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>Пуассон:</strong> число приходов покупателей, запросов по email</li><li><strong>Нормальное:</strong> рост, вес, результаты тестов</li><li><strong>Экспоненциальное:</strong> время между событиями</li><li><strong>Бернулли:</strong> подбрасывание одной монеты</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Число приходов покупателей за час</div></div></div>"
  },
  {
    "id": "statistics913",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: нормальное распределение",
    "theme": "Применение",
    "text": "В каком реальном сценарии используется нормальное распределение?",
    "choices": [
      "Число приходов покупателей за час",
      "Рост студентов в классе",
      "Подбрасывание монеты",
      "Время между звонками"
    ],
    "answers": ["Рост студентов в классе"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение нормального распределения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Типичные применения:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>Нормальное:</strong> рост, вес, результаты тестов</li><li><strong>Пуассон:</strong> число приходов покупателей</li><li><strong>Экспоненциальное:</strong> время между событиями</li><li><strong>Бернулли:</strong> подбрасывание монеты</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Рост студентов в классе</div></div></div>"
  },
  {
    "id": "statistics914",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Сравнение распределений",
    "theme": "Резюме",
    "text": "Какое из перечисленных распределений является непрерывным?",
    "choices": [
      "Бернулли",
      "Биномиальное",
      "Пуассона",
      "Нормальное"
    ],
    "answers": ["Нормальное"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Дискретные vs непрерывные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Классификация:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Виды распределений</h5></div><div class='card-body'><ul><li><strong>Дискретные:</strong> Бернулли, Биномиальное, Пуассона</li><li><strong>Непрерывные:</strong> Нормальное, Равномерное, Экспоненциальное</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Нормальное</div></div></div>"
  },
  {
    "id": "statistics915",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о распределениях вероятностей верно?",
    "choices": [
      "Все распределения используются для одних и тех же типов данных",
      "Разные распределения используются для разных типов данных (дискретных или непрерывных)",
      "У всех распределений одинаковые параметры",
      "Распределения не применяются в реальных задачах"
    ],
    "answers": ["Разные распределения используются для разных типов данных (дискретных или непрерывных)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Разные распределения — для разных типов данных</li><li>У каждого свои <strong>параметры и формула</strong></li><li>Важно понимать, <strong>когда</strong> применять каждое</li><li>Помогают моделировать <strong>неопределённость</strong></li><li>Широко применяются в контроле качества, финансах, ML, прогнозировании</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Разные распределения используются для разных типов данных (дискретных или непрерывных)</div></div></div>"
  }
]

window.quizesSets = quizesSets;