let quizesSets = [
  {
    "id": "statistics401",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое вероятность?",
    "theme": "Основы вероятности",
    "text": "Что измеряет вероятность (probability)?",
    "choices": [
      "Сумму всех значений",
      "Шанс наступления события",
      "Среднее значение данных",
      "Разброс данных"
    ],
    "answers": ["Шанс наступления события"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Вероятность измеряет шанс наступления события.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Диапазон значений</h5></div><div class='card-body'><ul><li>От <strong>0 до 1</strong> (или от 0% до 100%)</li><li><strong>0</strong> → невозможное событие</li><li><strong>1</strong> → достоверное событие</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Шанс наступления события</div></div></div>"
  },
  {
    "id": "statistics402",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Диапазон вероятности",
    "theme": "Основы вероятности",
    "text": "В каком диапазоне лежат значения вероятности?",
    "choices": [
      "От −1 до 1",
      "От 0 до 1",
      "От 0 до 100",
      "От −∞ до +∞"
    ],
    "answers": ["От 0 до 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Диапазон вероятности</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong> $0 \\le P(A) \\le 1$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Границы</h5></div><div class='card-body'><ul><li><strong>0</strong> — невозможное событие (impossible event)</li><li><strong>1</strong> — достоверное событие (certain event)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> От 0 до 1</div></div></div>"
  },
  {
    "id": "statistics403",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Эксперимент",
    "theme": "Ключевые термины",
    "text": "Что называют экспериментом (experiment) в теории вероятностей?",
    "choices": [
      "Возможный результат",
      "Процесс, дающий чётко определённые исходы",
      "Множество всех исходов",
      "Набор исходов"
    ],
    "answers": ["Процесс, дающий чётко определённые исходы"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Эксперимент</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Процесс, дающий чётко определённые исходы.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Бросок игральной кости — это эксперимент. Его исходы: 1, 2, 3, 4, 5, 6.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Процесс, дающий чётко определённые исходы</div></div></div>"
  },
  {
    "id": "statistics404",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пространство элементарных исходов",
    "theme": "Ключевые термины",
    "text": "Что такое пространство элементарных исходов (sample space)?",
    "choices": [
      "Возможный результат одного испытания",
      "Множество всех возможных исходов эксперимента",
      "Набор благоприятных исходов",
      "Процесс проведения эксперимента"
    ],
    "answers": ["Множество всех возможных исходов эксперимента"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Пространство элементарных исходов</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Множество всех возможных исходов эксперимента.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Для броска кости: $S = \\{1, 2, 3, 4, 5, 6\\}$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Множество всех возможных исходов эксперимента</div></div></div>"
  },
  {
    "id": "statistics405",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Событие",
    "theme": "Ключевые термины",
    "text": "Что такое событие (event)?",
    "choices": [
      "Процесс, дающий исходы",
      "Набор исходов",
      "Все возможные исходы",
      "Один конкретный исход"
    ],
    "answers": ["Набор исходов"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Событие</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Набор исходов.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Событие A = выпадение чётного числа = $\\{2, 4, 6\\}$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Набор исходов</div></div></div>"
  },
  {
    "id": "statistics406",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула вероятности",
    "theme": "Формулы",
    "text": "Как вычисляется вероятность события A по классическому определению?",
    "choices": [
      "$P(A) = \\dfrac{\\text{Общее число исходов}}{\\text{Число благоприятных исходов}}$",
      "$P(A) = \\dfrac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$",
      "$P(A) = \\text{Число благоприятных} \\times \\text{Общее число}$",
      "$P(A) = \\text{Общее число} - \\text{Благоприятные}$"
    ],
    "answers": ["$P(A) = \\dfrac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Основная формула</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A) = \\dfrac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Бросок кости, чётное число: $P = \\dfrac{3}{6} = \\dfrac{1}{2} = 0.5$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A) = \\dfrac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$</div></div></div>"
  },
  {
    "id": "statistics407",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Достоверное событие",
    "theme": "Виды событий",
    "text": "Чему равна вероятность достоверного события (sure event)?",
    "choices": [
      "0",
      "0.5",
      "1",
      "100"
    ],
    "answers": ["1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Достоверное событие</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Событие, которое всегда происходит.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Вероятность</h5></div><div class='card-body'><ul><li><strong>Достоверное</strong> → $P(A) = 1$</li><li><strong>Невозможное</strong> → $P(A) = 0$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 1</div></div></div>"
  },
  {
    "id": "statistics408",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Несовместные события",
    "theme": "Виды событий",
    "text": "Что верно для несовместных событий (mutually exclusive events)?",
    "choices": [
      "$P(A \\cap B) = 1$",
      "$P(A \\cap B) = 0$",
      "$P(A \\cap B) = P(A) \\times P(B)$",
      "$P(A \\cap B) = P(A) + P(B)$"
    ],
    "answers": ["$P(A \\cap B) = 0$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Несовместные события</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Не могут произойти одновременно.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>$P(A \\cap B) = 0$</li><li>$P(A \\cup B) = P(A) + P(B)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\cap B) = 0$</div></div></div>"
  },
  {
    "id": "statistics409",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Противоположное событие",
    "theme": "Виды событий",
    "text": "Как вычисляется вероятность противоположного события (complementary event)?",
    "choices": [
      "$P(\\bar{A}) = P(A)$",
      "$P(\\bar{A}) = 1 + P(A)$",
      "$P(\\bar{A}) = 1 - P(A)$",
      "$P(\\bar{A}) = 0$"
    ],
    "answers": ["$P(\\bar{A}) = 1 - P(A)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Противоположное событие</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Событие, которое не происходит.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула</h5></div><div class='card-body'><p>$$P(\\bar{A}) = 1 - P(A)$$</p><p class='card-text mt-2'>Пример: если $P(\\text{дождь}) = 0.3$, то $P(\\text{без дождя}) = 0.7$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(\\bar{A}) = 1 - P(A)$</div></div></div>"
  },
  {
    "id": "statistics410",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула объединения событий",
    "theme": "Формулы",
    "text": "Какая формула используется для вероятности объединения двух произвольных событий?",
    "choices": [
      "$P(A \\cup B) = P(A) + P(B)$",
      "$P(A \\cup B) = P(A) \\times P(B)$",
      "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
      "$P(A \\cup B) = 1 - P(A)$"
    ],
    "answers": ["$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Объединение событий</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула для любых событий:</strong> $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Частные случаи</h5></div><div class='card-body'><ul><li><strong>Несовместные:</strong> $P(A \\cup B) = P(A) + P(B)$</li><li><strong>Независимые:</strong> $P(A \\cap B) = P(A) \\times P(B)$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</div></div></div>"
  },
  {
    "id": "statistics411",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Независимые события",
    "theme": "Формулы",
    "text": "Как вычисляется вероятность пересечения независимых событий A и B?",
    "choices": [
      "$P(A \\cap B) = P(A) + P(B)$",
      "$P(A \\cap B) = P(A) \\times P(B)$",
      "$P(A \\cap B) = P(A) - P(B)$",
      "$P(A \\cap B) = 0$"
    ],
    "answers": ["$P(A \\cap B) = P(A) \\times P(B)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Независимые события</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A \\cap B) = P(A) \\times P(B)$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Пример</h5></div><div class='card-body'><p>Бросаем монету дважды. $P(\\text{орёл и орёл}) = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\cap B) = P(A) \\times P(B)$</div></div></div>"
  },
  {
    "id": "statistics412",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: подбрасывание монеты",
    "theme": "Примеры",
    "text": "Какова вероятность выпадения орла при подбрасывании честной монеты?",
    "choices": [
      "0",
      "0.25",
      "0.5",
      "1"
    ],
    "answers": ["0.5"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Подбрасывание монеты</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> Честная монета</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>Благоприятные исходы = 1 (орёл)</li><li>Всего исходов = 2 (орёл, решка)</li><li>$P(\\text{Орёл}) = \\dfrac{1}{2} = 0.5$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 0.5</div></div></div>"
  },
  {
    "id": "statistics413",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: две кости, сумма 7",
    "theme": "Примеры",
    "text": "Какова вероятность того, что при броске двух костей сумма равна 7?",
    "choices": [
      "$\\dfrac{1}{36}$",
      "$\\dfrac{1}{12}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{1}{3}$"
    ],
    "answers": ["$\\dfrac{1}{6}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Две кости</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> Бросаются две кости, сумма равна 7.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>Благоприятные исходы: {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} → <strong>6</strong></li><li>Всего исходов = 6 × 6 = <strong>36</strong></li><li>$P(\\text{Сумма}=7) = \\dfrac{6}{36} = \\dfrac{1}{6}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{1}{6}$</div></div></div>"
  },
  {
    "id": "statistics414",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: вытягивание туза",
    "theme": "Примеры",
    "text": "Какова вероятность вытянуть туза из стандартной колоды из 52 карт?",
    "choices": [
      "$\\dfrac{1}{52}$",
      "$\\dfrac{4}{52} = \\dfrac{1}{13}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{2}$"
    ],
    "answers": ["$\\dfrac{4}{52} = \\dfrac{1}{13}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Вытягивание туза</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> Стандартная колода из 52 карт.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>В колоде <strong>4 туза</strong></li><li>Всего карт: <strong>52</strong></li><li>$P(\\text{туз}) = \\dfrac{4}{52} = \\dfrac{1}{13}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{4}{52} = \\dfrac{1}{13}$</div></div></div>"
  },
  {
    "id": "statistics415",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: опрос студентов",
    "theme": "Примеры",
    "text": "Если 30 из 100 студентов любят предмет, какова вероятность, что случайный студент любит предмет?",
    "choices": [
      "0.03",
      "0.3",
      "0.7",
      "3"
    ],
    "answers": ["0.3"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Опрос студентов</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> 30 из 100 студентов любят предмет.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>Благоприятные исходы = <strong>30</strong></li><li>Всего студентов = <strong>100</strong></li><li>$P(\\text{нравится}) = \\dfrac{30}{100} = 0.3$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 0.3</div></div></div>"
  },
  {
    "id": "statistics416",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Диаграммы Венна",
    "theme": "Визуализация",
    "text": "Какие события изображены на диаграмме Венна в виде двух непересекающихся кругов?",
    "choices": [
      "Независимые события",
      "Несовместные события",
      "Противоположные события",
      "Достоверные события"
    ],
    "answers": ["Несовместные события"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Диаграммы Венна</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Виды диаграмм:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Соответствия</h5></div><div class='card-body'><ul><li><strong>Непересекающиеся круги</strong> → несовместные события ($A \\cap B = \\varnothing$)</li><li><strong>Пересекающиеся круги</strong> → совместные события</li><li><strong>Круг внутри прямоугольника</strong> → противоположное событие $\\bar{A}$</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Несовместные события</div></div></div>"
  },
  {
    "id": "statistics417",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о вероятности верно?",
    "choices": [
      "Вероятность может быть отрицательной",
      "Вероятность лежит в диапазоне от 0 до 1",
      "Вероятность всегда равна 1",
      "Вероятность не применяется в реальной жизни"
    ],
    "answers": ["Вероятность лежит в диапазоне от 0 до 1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Вероятность измеряет <strong>шанс наступления события</strong></li><li>Значения от <strong>0 до 1</strong></li><li>Ключевые термины: <strong>эксперимент, исход, пространство исходов, событие</strong></li><li>Формулы зависят от <strong>вида события</strong></li><li><strong>Диаграммы Венна</strong> помогают визуализировать</li><li>Применяется в играх, опросах, прогнозировании погоды</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Вероятность лежит в диапазоне от 0 до 1</div></div></div>"
  }
]

window.quizesSets = quizesSets;