let quizesSets = [

      {
        "id": "tv_127",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Моделирование зависимости",
        "theme": "Регрессионный анализ",
        "text": "Модель зависимости одной переменной от другой вида y = a + bx — это...",
        "choices": [
            "Корреляционный анализ",
            "Линейная регрессия",
            "Дисперсионный анализ",
            "Кластерный анализ"
        ],
        "answers": ["Линейная регрессия"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Линейная регрессия</h5><p class='mb-1'>Моделирует <span class='badge badge-info'>линейную зависимость</span> между переменными.</p><hr class='my-2'><p class='mb-0'><strong>Уравнение:</strong> y = <span class='badge badge-info'>a</span> + <span class='badge badge-info'>b</span>x. Коэффициенты находят <span class='badge badge-success'>методом наименьших квадратов</span> (минимизация суммы квадратов ошибок).</p></div>"
    },

    {
    id: "statistics_mean_mixed001",
    type: "mathwithrandomnumber",
    header: "Статистика",
    title: "Среднее арифметическое",
    theme: "Средние величины",
    text: `
<div class="card">
  <div class="card-header bg-primary text-white">
    Среднее арифметическое
  </div>
  <div class="card-body">
    <div class="mb-3">Найдите среднее арифметическое чисел:</div>
    <div class="text-center fs-3">
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
    </div>
     </div>
</div>`,
    answer: "{var1-10}",
    hint: `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">Сумма чисел:</div>
    <div class="text-center">
      $$({= {var1-10} + 4}) + ({= {var1-10} - 4}) + ({= {var1-10} + 4}) + ({= {var1-10} - 4}) + ({= {var1-10} + 4}) + ({= {var1-10} - 4}) = {= ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)}$$
    </div>
    <div class="mt-3 mb-2">Количество чисел: 6</div>
    <div class="mb-2">Среднее арифметическое:</div>
    <div class="text-center">
      $$\\bar{x} = \\frac{{= ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)}}{6} = {= (({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)) / 6}$$
    </div>
    <div class="alert alert-primary mt-3">Ответ: {var1-10}</div>
  </div>
</div>`,
    randomfrom: [10, 15, 20, 25, 30, 35]
},

   {
    "id": "statistics_mean_mixed001",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Среднее арифметическое",
    "theme": "Средние величины",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Среднее арифметическое
  </div>
  <div class="card-body">
    <div class="mb-3">Найдите среднее арифметическое чисел:</div>
    <div class="text-center fs-3">
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
      <div>{={var1-10} + 4}</div>
      <div>{={var1-10} - 4}</div>
    </div>
     </div>
</div>`,
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">Сумма чисел:</div>
    <div class="text-center">
      $$({= {var1-10} + 4}) + ({= {var1-10} - 4}) + ({= {var1-10} + 4}) + ({= {var1-10} - 4}) + ({= {var1-10} + 4}) + ({= {var1-10} - 4}) = {= ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)}$$
    </div>
    <div class="mt-3 mb-2">Количество чисел: 6</div>
    <div class="mb-2">Среднее арифметическое:</div>
    <div class="text-center">
      $$\\bar{x} = \\frac{{= ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)}}{6} = {= (({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4) + ({var1-10}+4) + ({var1-10}-4)) / 6}$$
    </div>
    <div class="alert alert-primary mt-3">Ответ: {var1-10}</div>
  </div>
</div>`,
    "randomfrom": [10, 15, 20, 25, 30, 35]
  },


{
  "id": "statistics_var_mixed005",
  "type": "mathwithrandomnumber",
  "header": "Статистика",
  "title": "Дисперсия",
  "theme": "Меры разброса",
  "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Дисперсия
  </div>
  <div class="card-body">
    <div class="mb-3">Найдите дисперсию (по генеральной совокупности) чисел:</div>
    <div class="text-center fs-3">
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
    </div>
  </div>
</div>`,
  "answer": "{var1-10}",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Среднее арифметическое:</div>
    <div class="text-center">$$\\bar{x} = {var1-10}$$</div>
    
    <div class="mt-3 mb-2">2. Отклонения:</div>
    <div class="text-center">$$\\pm {= POWER({var1-10}, 1/2)}$$</div>
    
    <div class="mt-3 mb-2">3. Квадраты отклонений:</div>
    <div class="text-center">$$({= POWER({var1-10}, 1/2)})^2 = {var1-10}$$ (каждое по 3 раза)</div>
    
    <div class="mt-3 mb-2">4. Сумма квадратов отклонений:</div>
    <div class="text-center">$$6 \\times {var1-10} = {= 6 * {var1-10}}$$</div>
    
    <div class="mt-3 mb-2">5. Дисперсия:</div>
    <div class="text-center">$$\\sigma^2 = \\frac{{= 6 * {var1-10}}}{6} = {var1-10}$$</div>
    
    <div class="alert alert-primary mt-3">Ответ: {var1-10}</div>
  </div>
</div>`,
  "randomfrom": [4, 9, 16, 25]
},

{
  "id": "statistics_stdev_mixed005",
  "type": "mathwithrandomnumber",
  "header": "Статистика",
  "title": "Стандартное отклонение",
  "theme": "Меры разброса",
  "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Стандартное отклонение
  </div>
  <div class="card-body">
    <div class="mb-3">Найдите стандартное отклонение (по генеральной совокупности) чисел:</div>
    <div class="text-center fs-3">
      <div>{=20+{var1-10}}</div>
      <div>{=20-{var1-10}}</div>
      <div>{=20+{var1-10}}</div>
      <div>{=20-{var1-10}}</div>
      <div>{=20+{var1-10}}</div>
      <div>{=20-{var1-10}}</div>
    </div>
  </div>
</div>`,
  "answer": "{var1-10}",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Дисперсия (из предыдущего расчёта):</div>
    <div class="text-center">$$\\sigma^2 = {var1-10}$$</div>
    
   
    <div class="alert alert-primary mt-3">Ответ: {={var1-10}}</div>
  </div>
</div>`,
  "randomfrom": [2, 3, 4, 5]
},

 {
    "id": "statistics542",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистическая оценка",
    "theme": "Меры центральной тенденции",
    "text": "$$\\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Медианы", "Среднего арифметического", "Дисперсии", "Стандартного отклонения"],
    "answers": ["Среднего арифметического"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма всех значений</strong>, в знаменателе — <strong>количество значений</strong>. Это формула <strong>среднего арифметического</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее арифметическое</div></div></div>"
  },
  {
    "id": "statistics543",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Описательная статистика",
    "theme": "Меры центральной тенденции",
    "text": "$$\\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}$$\n\nДанная формула используется для расчёта (при чётном количестве наблюдений):",
    "choices": ["Среднего арифметического", "Моды", "Медианы", "Квартиля"],
    "answers": ["Медианы"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$Me = \\frac{x_{n/2} + x_{n/2+1}}{2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Формула берёт <strong>два центральных элемента</strong> упорядоченного ряда и делит их сумму на 2. Это <strong>медиана</strong> для чётного количества наблюдений.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Медиана</div></div></div>"
  },

  {
    "id": "statistics544",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Анализ данных",
    "theme": "Меры разброса",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Стандартного отклонения", "Дисперсии по выборке", "Дисперсии по генеральной совокупности", "Среднего абсолютного отклонения"],
    "answers": ["Дисперсии по генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма квадратов отклонений</strong> от среднего, в знаменателе — <strong>n</strong> (деление на количество наблюдений). Это <strong>дисперсия по генеральной совокупности</strong> (VAR.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Дисперсия по генеральной совокупности</div></div></div>"
  },


  {
    "id": "statistics545",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистический показатель",
    "theme": "Меры разброса",
    "text": "$$\\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Дисперсии", "Стандартного отклонения по генеральной совокупности", "Среднего абсолютного отклонения", "Размаха вариации"],
    "answers": ["Стандартного отклонения по генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Это <strong>квадратный корень из дисперсии</strong>. Результат выражается в тех же единицах, что и исходные данные. Это <strong>стандартное отклонение по генеральной совокупности</strong> (STDEV.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Стандартное отклонение по генеральной совокупности</div></div></div>"
  },
  
    // =====================================================================
    // ==================== ТЕМА 1.1: Основные понятия комбинаторики ====================
    // =====================================================================
    {
        "id": "tv_001",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Основной принцип комбинаторики",
        "theme": "Основные понятия комбинаторики",
        "text": "Сколько существует способов выбрать один напиток из 5 видов и один десерт из 4 видов?",
        "choices": ["9", "20", "5", "4"],
        "answers": ["20"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Правило произведения</h5><p class='mb-1'>Когда нужно выбрать <span class='badge badge-info'>один элемент из первого множества</span> И <span class='badge badge-info'>один элемент из второго множества</span>, количества вариантов перемножаются.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> 5 видов напитка × 4 вида десерта = <span class='badge badge-success'>20 способов</span></p></div>"
    },
    {
        "id": "tv_101",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Правило суммы или произведения?",
        "theme": "Основные понятия комбинаторики",
        "text": "Выбор напитка из 3 видов чая и 2 видов кофе. Сколько всего вариантов напитка?",
        "choices": [
            "Правило суммы (5 вариантов)",
            "Правило произведения (6 вариантов)",
            "Перестановки (120 вариантов)",
            "Сочетания (10 вариантов)"
        ],
        "answers": ["Правило суммы (5 вариантов)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Правило суммы</h5><p class='mb-1'>Когда нужно выбрать <span class='badge badge-info'>один элемент из нескольких непересекающихся множеств</span>, количества вариантов складываются.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> 3 вида чая + 2 вида кофе = <span class='badge badge-success'>5 вариантов напитка</span></p></div>"
    },
    {
        "id": "tv_102",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Правило суммы или произведения?",
        "theme": "Основные понятия комбинаторики",
        "text": "Выбор напитка (3 вида) и десерта (4 вида). Сколько всего вариантов пары?",
        "choices": [
            "Правило суммы (7 вариантов)",
            "Правило произведения (12 вариантов)",
            "Перестановки (24 варианта)",
            "Сочетания (6 вариантов)"
        ],
        "answers": ["Правило произведения (12 вариантов)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Правило произведения</h5><p class='mb-1'>Когда нужно выбрать последовательно <span class='badge badge-info'>элемент из первого множества</span> И <span class='badge badge-info'>элемент из второго множества</span>, варианты перемножаются.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> 3 напитка × 4 десерта = <span class='badge badge-success'>12 вариантов пары</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.2: Перестановки, размещения, сочетания ====================
    // =====================================================================
    {
        "id": "tv_002",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Сочетания",
        "theme": "Перестановки, размещения, сочетания",
        "text": "Сколькими способами можно выбрать 2 книги из 5?",
        "choices": ["20", "10", "120", "5"],
        "answers": ["10"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔢 Сочетания</h5><p class='mb-1'>Выбираем <span class='badge badge-info'>неупорядоченный</span> набор элементов. Порядок НЕ важен.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> C₅² = 5! / (2! × 3!) = <span class='badge badge-success'>10 способов</span></p></div>"
    },
    {
        "id": "tv_003",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Перестановки",
        "theme": "Перестановки, размещения, сочетания",
        "text": "Сколькими способами можно расставить 4 книги на полке?",
        "choices": ["4", "16", "24", "8"],
        "answers": ["24"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔢 Перестановки</h5><p class='mb-1'>Упорядочиваем <span class='badge badge-info'>все</span> элементы. Порядок ВАЖЕН.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> P₄ = 4! = 4×3×2×1 = <span class='badge badge-success'>24 способа</span></p></div>"
    },
    {
        "id": "tv_103",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Перестановки, размещения или сочетания?",
        "theme": "Перестановки, размещения, сочетания",
        "text": "Сколькими способами можно расставить 5 книг на полке?",
        "choices": [
            "Перестановки (5!)",
            "Размещения (A₅³)",
            "Сочетания (C₅³)",
            "Правило суммы"
        ],
        "answers": ["Перестановки (5!)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔢 Перестановки</h5><p class='mb-1'>Используем, когда <span class='badge badge-info'>все элементы участвуют</span> и <span class='badge badge-info'>порядок важен</span>.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> P₅ = 5! = 5×4×3×2×1 = <span class='badge badge-success'>120 способов</span></p></div>"
    },
    {
        "id": "tv_104",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Перестановки, размещения или сочетания?",
        "theme": "Перестановки, размещения, сочетания",
        "text": "Сколькими способами можно выбрать 3 книги из 5 (порядок не важен)?",
        "choices": [
            "Перестановки (P₅)",
            "Размещения (A₅³)",
            "Сочетания (C₅³)",
            "Правило произведения"
        ],
        "answers": ["Сочетания (C₅³)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔢 Сочетания</h5><p class='mb-1'>Используем, когда <span class='badge badge-info'>выбираем часть элементов</span> и <span class='badge badge-info'>порядок НЕ важен</span>.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> C₅³ = 5! / (3! × 2!) = <span class='badge badge-success'>10 способов</span></p></div>"
    },
    {
        "id": "tv_105",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Перестановки, размещения или сочетания?",
        "theme": "Перестановки, размещения, сочетания",
        "text": "Сколько 3-значных чисел можно составить из 5 цифр (порядок важен)?",
        "choices": [
            "Перестановки (P₅)",
            "Размещения (A₅³)",
            "Сочетания (C₅³)",
            "Правило суммы"
        ],
        "answers": ["Размещения (A₅³)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔢 Размещения</h5><p class='mb-1'>Используем, когда <span class='badge badge-info'>выбираем часть элементов</span> и <span class='badge badge-info'>порядок ВАЖЕН</span>.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> A₅³ = 5! / (5-3)! = 5! / 2! = <span class='badge badge-success'>60 чисел</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.3: Случайные события и операции над ними ====================
    // =====================================================================
    {
        "id": "tv_106",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Тип события",
        "theme": "Случайные события и операции над ними",
        "text": "При бросании кубика выпадет число от 1 до 6. Это событие...",
        "choices": ["Достоверное", "Невозможное", "Случайное", "Зависимое"],
        "answers": ["Достоверное"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🎲 Достоверное событие</h5><p class='mb-1'>Событие, которое <span class='badge badge-info'>происходит всегда</span> в данном эксперименте.</p><hr class='my-2'><p class='mb-0'><strong>Почему?</strong> На кубике только числа 1, 2, 3, 4, 5, 6 — других вариантов нет, значит, это событие <span class='badge badge-success'>обязательно произойдёт</span>.</p></div>"
    },
    {
        "id": "tv_107",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Тип события",
        "theme": "Случайные события и операции над ними",
        "text": "При бросании кубика выпадет 7. Это событие...",
        "choices": ["Достоверное", "Невозможное", "Случайное", "Независимое"],
        "answers": ["Невозможное"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🎲 Невозможное событие</h5><p class='mb-1'>Событие, которое <span class='badge badge-info'>не может произойти</span> в данном эксперименте.</p><hr class='my-2'><p class='mb-0'><strong>Почему?</strong> На кубике нет грани с числом 7, поэтому это событие <span class='badge badge-danger'>никогда не произойдёт</span>.</p></div>"
    },
    {
        "id": "tv_108",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Тип события",
        "theme": "Случайные события и операции над ними",
        "text": "При бросании кубика выпадет 5. Это событие...",
        "choices": ["Достоверное", "Невозможное", "Случайное", "Дополнительное"],
        "answers": ["Случайное"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🎲 Случайное событие</h5><p class='mb-1'>Событие, которое <span class='badge badge-info'>может произойти, а может и не произойти</span>.</p><hr class='my-2'><p class='mb-0'><strong>Почему?</strong> При бросании кубика может выпасть 5, а может выпасть другое число — это <span class='badge badge-warning'>зависит от случая</span>.</p></div>"
    },
    {
        "id": "tv_109",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Операции над событиями",
        "theme": "Случайные события и операции над ними",
        "text": "Событие 'произошло A или B' — это...",
        "choices": [
            "Объединение (A ∪ B)",
            "Пересечение (A ∩ B)",
            "Дополнение (¬A)",
            "Условная вероятность"
        ],
        "answers": ["Объединение (A ∪ B)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔗 Объединение событий</h5><p class='mb-1'>Объединение A ∪ B — это событие, которое происходит, когда <span class='badge badge-info'>происходит A ИЛИ B</span>.</p><hr class='my-2'><p class='mb-0'><strong>Ключевое слово:</strong> <span class='badge badge-success'>«ИЛИ»</span> — достаточно, чтобы произошло хотя бы одно из событий.</p></div>"
    },
    {
        "id": "tv_110",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Операции над событиями",
        "theme": "Случайные события и операции над ними",
        "text": "Событие 'произошло A и B' — это...",
        "choices": [
            "Объединение (A ∪ B)",
            "Пересечение (A ∩ B)",
            "Дополнение (¬A)",
            "Несовместные события"
        ],
        "answers": ["Пересечение (A ∩ B)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🔗 Пересечение событий</h5><p class='mb-1'>Пересечение A ∩ B — это событие, которое происходит, когда <span class='badge badge-info'>происходит A И B ОДНОВРЕМЕННО</span>.</p><hr class='my-2'><p class='mb-0'><strong>Ключевое слово:</strong> <span class='badge badge-success'>«И»</span> — должны произойти оба события.</p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.4: Классическое и статистическое определение вероятности ====================
    // =====================================================================
    {
        "id": "tv_004",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Классическая вероятность",
        "theme": "Классическое и статистическое определение вероятности",
        "text": "Какова вероятность выпадения чётного числа при бросании игрального кубика?",
        "choices": ["1/6", "1/3", "1/2", "2/3"],
        "answers": ["1/2"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🎯 Классическая вероятность</h5><p class='mb-1'>P(A) = <span class='badge badge-info'>число благоприятных исходов</span> / <span class='badge badge-info'>общее число исходов</span></p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> Чётные числа на кубике: <span class='badge badge-success'>2, 4, 6</span> (3 исхода). Всего исходов: 6. P = 3/6 = <span class='badge badge-success'>1/2</span></p></div>"
    },
    {
        "id": "tv_111",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Определение вероятности",
        "theme": "Классическое и статистическое определение вероятности",
        "text": "Вероятность выпадения орла = 1/2 = 0.5. Это пример...",
        "choices": [
            "Классической вероятности",
            "Статистической вероятности",
            "Геометрической вероятности",
            "Условной вероятности"
        ],
        "answers": ["Классической вероятности"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>🎯 Классическая вероятность</h5><p class='mb-1'>Используется, когда все исходы <span class='badge badge-info'>равновозможны</span> и их <span class='badge badge-info'>конечное число</span>.</p><hr class='my-2'><p class='mb-0'><strong>Пример:</strong> У монеты 2 равновозможных исхода (орёл/решка), благоприятных — 1, значит P = <span class='badge badge-success'>1/2</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.5: Геометрическая вероятность ====================
    // =====================================================================
    {
        "id": "tv_112",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Определение вероятности",
        "theme": "Геометрическая вероятность",
        "text": "Вероятность попадания точки в круг радиуса r внутри круга радиуса R: P = r²/R². Это пример...",
        "choices": [
            "Классической вероятности",
            "Статистической вероятности",
            "Геометрической вероятности",
            "Условной вероятности"
        ],
        "answers": ["Геометрической вероятности"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Геометрическая вероятность</h5><p class='mb-1'>Используется, когда пространство исходов <span class='badge badge-info'>непрерывно</span> (точки, линии, фигуры).</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> P(A) = <span class='badge badge-info'>мера области A</span> / <span class='badge badge-info'>мера всей области</span>. Для кругов: P = (πr²)/(πR²) = <span class='badge badge-success'>r²/R²</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.6: Теоремы сложения и умножения вероятностей ====================
    // =====================================================================
    {
        "id": "tv_005",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Теорема умножения",
        "theme": "Теоремы сложения и умножения вероятностей",
        "text": "Какова вероятность выпадения орла дважды подряд при двух бросках монеты?",
        "choices": ["1/4", "1/2", "1/3", "1"],
        "answers": ["1/4"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>✖️ Теорема умножения</h5><p class='mb-1'>Для <span class='badge badge-info'>независимых</span> событий: P(A ∩ B) = P(A) × P(B)</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> P(орёл) = 1/2. События независимы. P = 1/2 × 1/2 = <span class='badge badge-success'>1/4</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.7: Условная вероятность и независимость ====================
    // =====================================================================
    {
        "id": "tv_006",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Условная вероятность",
        "theme": "Условная вероятность и независимость событий",
        "text": "Из колоды в 36 карт вытягивают одну. Какова вероятность, что это туз, если известно, что это карта красной масти?",
        "choices": ["1/18", "1/9", "1/36", "1/4"],
        "answers": ["1/9"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>❓ Условная вероятность</h5><p class='mb-1'>P(B|A) = P(A∩B) / P(A) — вероятность события B при условии, что A уже произошло.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> Красных карт 18, из них тузов 2. P = <span class='badge badge-success'>2/18 = 1/9</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.8: Формула полной вероятности ====================
    // =====================================================================
    {
        "id": "tv_007",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Формула полной вероятности",
        "theme": "Формула полной вероятности",
        "text": "На складе 3 поставщика с долями 50%, 30%, 20% и браком 1%, 2%, 3%. Какова общая вероятность брака?",
        "choices": ["0.5%", "1.7%", "2.0%", "3.0%"],
        "answers": ["1.7%"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Формула полной вероятности</h5><p class='mb-1'>P(A) = Σ P(Hᵢ) × P(A|Hᵢ) — сумма произведений вероятностей гипотез на условные вероятности.</p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> 0.5×0.01 + 0.3×0.02 + 0.2×0.03 = 0.005 + 0.006 + 0.006 = <span class='badge badge-success'>0.017 = 1.7%</span></p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 1.10: Схема Бернулли. Формула Бернулли ====================
    // =====================================================================
    {
        "id": "tv_008",
        "type": "multiplechoices",
        "header": "Тема 1. Элементы комбинаторики и основы теории вероятностей",
        "title": "Формула Бернулли",
        "theme": "Схема Бернулли. Формула Бернулли",
        "text": "По какой формуле вычисляется вероятность ровно k успехов в n независимых испытаниях?",
        "choices": [
            "Cₙᵏ × pᵏ × (1−p)ⁿ⁻ᵏ",
            "n! × pᵏ",
            "pᵏ × (1−p)ⁿ",
            "k! × p × (1−p)"
        ],
        "answers": ["Cₙᵏ × pᵏ × (1−p)ⁿ⁻ᵏ"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Формула Бернулли</h5><p class='mb-1'>Вероятность <span class='badge badge-info'>ровно k успехов</span> в n независимых испытаниях.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> Pₙ(k) = <span class='badge badge-info'>Cₙᵏ</span> × <span class='badge badge-info'>pᵏ</span> × <span class='badge badge-info'>(1−p)ⁿ⁻ᵏ</span>, где p — вероятность успеха в одном испытании.</p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 2: Случайные величины и их распределения ====================
    // =====================================================================

    // ---- 2.1 Понятие случайной величины ----
    {
        "id": "tv_009",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Типы случайных величин",
        "theme": "Понятие случайной величины",
        "text": "Какая случайная величина является непрерывной?",
        "choices": [
            "Количество выпавших орлов",
            "Рост человека",
            "Число очков на кубике",
            "Количество книг на полке"
        ],
        "answers": ["Рост человека"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Непрерывная случайная величина</h5><p class='mb-1'>Принимает <span class='badge badge-info'>любые значения</span> из некоторого промежутка.</p><hr class='my-2'><p class='mb-0'><strong>Примеры:</strong> рост, вес, время, температура. Рост человека может быть 170.5 см, 170.55 см, 170.555 см и т.д. — <span class='badge badge-success'>непрерывная величина</span></p></div>"
    },
    {
        "id": "tv_113",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Тип случайной величины",
        "theme": "Понятие случайной величины",
        "text": "Количество выпавших орлов при подбрасывании монеты 10 раз. Это...",
        "choices": [
            "Дискретная случайная величина",
            "Непрерывная случайная величина",
            "Неслучайная величина",
            "Постоянная величина"
        ],
        "answers": ["Дискретная случайная величина"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Дискретная случайная величина</h5><p class='mb-1'>Принимает <span class='badge badge-info'>конечное или счётное</span> множество значений.</p><hr class='my-2'><p class='mb-0'><strong>Пример:</strong> При 10 бросках может выпасть 0, 1, 2, ..., 10 орлов — всего <span class='badge badge-success'>11 возможных значений</span>, это дискретная величина.</p></div>"
    },
    {
        "id": "tv_114",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Тип случайной величины",
        "theme": "Понятие случайной величины",
        "text": "Рост человека. Это...",
        "choices": [
            "Дискретная случайная величина",
            "Непрерывная случайная величина",
            "Неслучайная величина",
            "Постоянная величина"
        ],
        "answers": ["Непрерывная случайная величина"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Непрерывная случайная величина</h5><p class='mb-1'>Принимает <span class='badge badge-info'>любые значения</span> из некоторого промежутка.</p><hr class='my-2'><p class='mb-0'><strong>Пример:</strong> Рост может быть 170 см, 170.5 см, 170.55 см и т.д. — <span class='badge badge-success'>непрерывная величина</span></p></div>"
    },


    {
  "id": "ege004",
  "type": "multiplechoices",
  "header": "Теория вероятностей",
  "title": "Классическая вероятность",
  "theme": "Вероятность события",
  "text": "В сборнике билетов по биологии всего 15 билетов, в 9 из них встречается вопрос по разделу «Ботаника». Найдите вероятность того, что в случайно выбранном на экзамене билете школьнику достанется вопрос по разделу «Ботаника».",
  "choices": [
    "0.3",
    "0.4",
    "0.5",
    "0.6",
    "0.7"
  ],
  "answers": ["0.6"],
  "hint": `<div class="container"><div class="row"><div class="col-md-12"><div class="card"><div class="card-body"><p class="alert alert-success"><strong>Классическое определение вероятности:</strong> $$P = \\frac{m}{n}$$</p><p>где $$n$$ — общее число исходов, $$m$$ — число благоприятных исходов</p><p>$$n = 15$$ (всего билетов)</p><p>$$m = 9$$ (билетов с ботаникой)</p><p>$$P = \\frac{9}{15} = \\frac{3}{5} = 0.6 = 60\\%$$</p></div></div></div></div></div>`
},

{
  "id": "ege005",
  "type": "multiplechoices",
  "header": "Теория вероятностей",
  "title": "Вероятность независимых событий",
  "theme": "Умножение вероятностей",
  "text": "В магазине три продавца. Каждый из них занят с клиентом с вероятностью 0,2 независимо от других продавцов. Найдите вероятность того, что в случайный момент времени все три продавца заняты одновременно.",
  "choices": [
    "0.008",
    "0.04",
    "0.2",
    "0.4",
    "0.6"
  ],
  "answers": ["0.008"],
  "hint": `<div class="container"><div class="row"><div class="col-md-12"><div class="card"><div class="card-body"><p class="alert alert-success"><strong>Для независимых событий:</strong> $$P(A \\cap B \\cap C) = P(A) \\cdot P(B) \\cdot P(C)$$</p><p>Вероятность, что один продавец занят: $$p = 0.2$$</p><p>События независимы, значит:</p><p>$$P(\\text{все три заняты}) = 0.2 \\cdot 0.2 \\cdot 0.2 = 0.008$$</p><p>Проверка: $$0.2^3 = 0.008$$</p></div></div></div></div></div>`
},


    // ---- 2.6 Математическое ожидание ----
    {
        "id": "tv_010",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Математическое ожидание",
        "theme": "Математическое ожидание",
        "text": "Чему равно математическое ожидание числа очков при бросании кубика?",
        "choices": ["3", "3.5", "4", "2.5"],
        "answers": ["3.5"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Математическое ожидание</h5><p class='mb-1'>Среднее значение случайной величины: <span class='badge badge-info'>M(X) = Σ xᵢ × P(xᵢ)</span></p><hr class='my-2'><p class='mb-0'><strong>Решение:</strong> (1+2+3+4+5+6)/6 = <span class='badge badge-success'>3.5</span> — это среднее значение, к которому стремится сумма очков при большом числе бросков.</p></div>"
    },
    {
        "id": "tv_115",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Характеристика случайной величины",
        "theme": "Математическое ожидание",
        "text": "Среднее значение случайной величины — это...",
        "choices": [
            "Дисперсия",
            "Математическое ожидание",
            "Среднее квадратическое отклонение",
            "Мода"
        ],
        "answers": ["Математическое ожидание"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Математическое ожидание</h5><p class='mb-1'>Это <span class='badge badge-info'>средневзвешенное значение</span> случайной величины.</p><hr class='my-2'><p class='mb-0'><strong>Обозначение:</strong> M(X) или E(X). Показывает, какое значение в среднем принимает случайная величина <span class='badge badge-success'>при многократном повторении эксперимента</span>.</p></div>"
    },

    // ---- 2.7 Дисперсия и среднее квадратическое отклонение ----
    {
        "id": "tv_014",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Свойства дисперсии",
        "theme": "Дисперсия и среднее квадратическое отклонение",
        "text": "Чему равна дисперсия суммы двух независимых случайных величин X и Y?",
        "choices": [
            "D(X) + D(Y)",
            "D(X) − D(Y)",
            "D(X) × D(Y)",
            "D(X) / D(Y)"
        ],
        "answers": ["D(X) + D(Y)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Свойство дисперсии</h5><p class='mb-1'>Для <span class='badge badge-info'>независимых</span> случайных величин дисперсия суммы равна сумме дисперсий.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> D(X+Y) = <span class='badge badge-success'>D(X) + D(Y)</span>, если X и Y независимы.</p></div>"
    },
    {
        "id": "tv_116",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Характеристика случайной величины",
        "theme": "Дисперсия и среднее квадратическое отклонение",
        "text": "Мера разброса случайной величины относительно её среднего значения — это...",
        "choices": [
            "Математическое ожидание",
            "Дисперсия",
            "Медиана",
            "Мода"
        ],
        "answers": ["Дисперсия"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Дисперсия</h5><p class='mb-1'>Показывает, <span class='badge badge-info'>насколько сильно значения разбросаны</span> относительно среднего.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> D(X) = M(X²) − (M(X))². Чем больше дисперсия, тем <span class='badge badge-success'>больше разброс</span> значений.</p></div>"
    },

     {
        "id": "tv_015",
        "type": "multiplechoices",
        "header": "Тема 3. Предельные теоремы и закон больших чисел",
        "title": "Закон больших чисел",
        "theme": "Закон больших чисел",
        "text": "Что утверждает закон больших чисел?",
        "choices": [
            "Среднее арифметическое сходится к математическому ожиданию",
            "Сумма сходится к нормальному распределению",
            "Дисперсия стремится к нулю",
            "Вероятность стремится к единице"
        ],
        "answers": ["Среднее арифметическое сходится к математическому ожиданию"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Закон больших чисел</h5><p class='mb-1'>При увеличении числа испытаний <span class='badge badge-info'>среднее арифметическое</span> стремится к <span class='badge badge-info'>математическому ожиданию</span>.</p><hr class='my-2'><p class='mb-0'><strong>Смысл:</strong> чем больше наблюдений, тем точнее оценка. Например, при 1000 бросках монеты доля орлов будет <span class='badge badge-success'>≈ 0.5</span>.</p></div>"
    },
    {
        "id": "tv_120",
        "type": "multiplechoices",
        "header": "Тема 3. Предельные теоремы и закон больших чисел",
        "title": "Закон больших чисел",
        "theme": "Закон больших чисел",
        "text": "Утверждение о том, что среднее арифметическое случайных величин сходится к их математическому ожиданию — это...",
        "choices": [
            "Закон больших чисел",
            "Центральная предельная теорема",
            "Неравенство Чебышева",
            "Теорема Муавра-Лапласа"
        ],
        "answers": ["Закон больших чисел"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Закон больших чисел</h5><p class='mb-1'>(1/n)ΣXᵢ → <span class='badge badge-info'>M(X)</span> при n → ∞ <span class='badge badge-info'>по вероятности</span>.</p><hr class='my-2'><p class='mb-0'><strong>Значение:</strong> обосновывает <span class='badge badge-success'>метод Монте-Карло</span> и практическую оценку вероятностей через частоты.</p></div>"
    },

    // ---- 3.3 Центральная предельная теорема ----
    {
        "id": "tv_016",
        "type": "multiplechoices",
        "header": "Тема 3. Предельные теоремы и закон больших чисел",
        "title": "Центральная предельная теорема",
        "theme": "Центральная предельная теорема",
        "text": "К какому распределению стремится сумма большого числа независимых случайных величин?",
        "choices": [
            "К биномиальному",
            "К пуассоновскому",
            "К нормальному",
            "К равномерному"
        ],
        "answers": ["К нормальному"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Центральная предельная теорема</h5><p class='mb-1'>Сумма большого числа независимых случайных величин имеет распределение, <span class='badge badge-info'>близкое к нормальному</span>.</p><hr class='my-2'><p class='mb-0'><strong>Важность:</strong> объясняет, почему нормальное распределение так часто встречается в природе и <span class='badge badge-success'>в статистике</span>.</p></div>"
    },
    {
        "id": "tv_121",
        "type": "multiplechoices",
        "header": "Тема 3. Предельные теоремы и закон больших чисел",
        "title": "Центральная предельная теорема",
        "theme": "Центральная предельная теорема",
        "text": "Утверждение о том, что сумма большого числа независимых случайных величин имеет распределение, близкое к нормальному — это...",
        "choices": [
            "Закон больших чисел",
            "Центральная предельная теорема",
            "Неравенство Чебышева",
            "Теорема Пуассона"
        ],
        "answers": ["Центральная предельная теорема"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Центральная предельная теорема (ЦПТ)</h5><p class='mb-1'><span class='badge badge-info'>Ключевой результат</span> теории вероятностей.</p><hr class='my-2'><p class='mb-0'><strong>Значение:</strong> позволяет <span class='badge badge-success'>использовать нормальное распределение</span> для приближённых вычислений даже когда исходные распределения неизвестны.</p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 4: Элементы математической статистики ====================
    // =====================================================================

    // ---- 4.3 Числовые характеристики выборки ----
    {
        "id": "tv_017",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Выборочное среднее",
        "theme": "Числовые характеристики выборки",
        "text": "Как вычисляется выборочное среднее?",
        "choices": [
            "Сумма всех значений / количество значений",
            "Произведение всех значений",
            "Максимальное значение",
            "Медиана"
        ],
        "answers": ["Сумма всех значений / количество значений"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Выборочное среднее</h5><p class='mb-1'>Оценка математического ожидания по выборке: <span class='badge badge-info'>x̄ = (1/n) Σ xᵢ</span></p><hr class='my-2'><p class='mb-0'><strong>Свойства:</strong> несмещённая и состоятельная оценка. Чем больше выборка, тем <span class='badge badge-success'>точнее оценка</span> среднего.</p></div>"
    },
    {
        "id": "tv_130",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Выборочные характеристики",
        "theme": "Числовые характеристики выборки",
        "text": "Наиболее часто встречающееся значение в выборке — это...",
        "choices": ["Среднее", "Медиана", "Мода", "Дисперсия"],
        "answers": ["Мода"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Мода</h5><p class='mb-1'>Значение, которое <span class='badge badge-info'>встречается чаще всего</span> в выборке.</p><hr class='my-2'><p class='mb-0'><strong>Пример:</strong> в выборке 1, 2, 2, 3, 4 мода = <span class='badge badge-success'>2</span>. Может быть несколько мод (мультимодальное распределение).</p></div>"
    },
    {
        "id": "tv_131",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Выборочные характеристики",
        "theme": "Числовые характеристики выборки",
        "text": "Среднее значение в упорядоченном ряду данных — это...",
        "choices": ["Среднее арифметическое", "Медиана", "Мода", "Дисперсия"],
        "answers": ["Медиана"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Медиана</h5><p class='mb-1'>Значение, которое <span class='badge badge-info'>делит упорядоченный ряд пополам</span>.</p><hr class='my-2'><p class='mb-0'><strong>Особенность:</strong> устойчива к выбросам. В выборке 1, 2, 3, 100, 200 медиана = <span class='badge badge-success'>3</span>, а среднее сильно завышено.</p></div>"
    },




    // ---- 2.8 Биномиальное распределение ----
    {
        "id": "tv_011",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Биномиальное распределение",
        "theme": "Биномиальное распределение",
        "text": "Какие параметры характеризуют биномиальное распределение?",
        "choices": ["λ", "n и p", "μ и σ²", "a и b"],
        "answers": ["n и p"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Биномиальное распределение</h5><p class='mb-1'>Задаётся двумя параметрами: <span class='badge badge-info'>n</span> — число испытаний, <span class='badge badge-info'>p</span> — вероятность успеха.</p><hr class='my-2'><p class='mb-0'><strong>Обозначение:</strong> X ~ Bin(n, p). Пример: число орлов при 10 бросках монеты — это <span class='badge badge-success'>Bin(10, 0.5)</span></p></div>"
    },
    {
        "id": "tv_117",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Распределение",
        "theme": "Биномиальное распределение",
        "text": "Распределение числа успехов в серии из n независимых испытаний с вероятностью успеха p — это...",
        "choices": [
            "Нормальное распределение",
            "Распределение Пуассона",
            "Биномиальное распределение",
            "Равномерное распределение"
        ],
        "answers": ["Биномиальное распределение"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Биномиальное распределение</h5><p class='mb-1'>Моделирует <span class='badge badge-info'>число успехов</span> в серии независимых испытаний.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> P(X=k) = <span class='badge badge-success'>Cₙᵏ pᵏ (1-p)ⁿ⁻ᵏ</span>. Используется, когда есть только два исхода: успех/неудача.</p></div>"
    },

    // ---- 2.9 Распределение Пуассона ----
    {
        "id": "tv_012",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Распределение Пуассона",
        "theme": "Распределение Пуассона",
        "text": "В каких случаях используется распределение Пуассона?",
        "choices": [
            "Для описания редких событий при большом числе испытаний",
            "Для нормальных величин",
            "Для равномерного распределения",
            "Для непрерывных данных"
        ],
        "answers": ["Для описания редких событий при большом числе испытаний"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Распределение Пуассона</h5><p class='mb-1'>Используется для <span class='badge badge-info'>редких событий</span> при большом числе испытаний, когда p мало, а n велико.</p><hr class='my-2'><p class='mb-0'><strong>Примеры:</strong> число вызовов на станцию за час, число ошибок в тексте, число посетителей сайта в минуту — <span class='badge badge-success'>Pois(λ)</span></p></div>"
    },
    {
        "id": "tv_118",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Распределение",
        "theme": "Распределение Пуассона",
        "text": "Распределение, используемое для моделирования редких событий при большом числе испытаний — это...",
        "choices": [
            "Нормальное распределение",
            "Распределение Пуассона",
            "Биномиальное распределение",
            "Распределение Бернулли"
        ],
        "answers": ["Распределение Пуассона"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Распределение Пуассона</h5><p class='mb-1'>Предельный случай биномиального при <span class='badge badge-info'>n→∞</span>, <span class='badge badge-info'>p→0</span>, <span class='badge badge-info'>np=λ</span>.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> P(X=k) = <span class='badge badge-success'>λᵏ e⁻λ / k!</span>. Параметр λ — среднее число событий за интервал.</p></div>"
    },

    // ---- 2.10 Нормальное распределение ----
    {
        "id": "tv_013",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Нормальное распределение",
        "theme": "Нормальное распределение",
        "text": "Какой вид имеет плотность нормального распределения?",
        "choices": [
            "Прямоугольник",
            "Колоколообразная кривая",
            "Треугольник",
            "Ступенчатая функция"
        ],
        "answers": ["Колоколообразная кривая"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Нормальное распределение</h5><p class='mb-1'>Плотность имеет форму <span class='badge badge-info'>колокола</span> — симметрична относительно среднего.</p><hr class='my-2'><p class='mb-0'><strong>Характеристики:</strong> задаётся параметрами <span class='badge badge-success'>μ</span> (среднее) и <span class='badge badge-success'>σ</span> (СКО). Большинство значений сосредоточено около среднего.</p></div>"
    },
    {
        "id": "tv_119",
        "type": "multiplechoices",
        "header": "Тема 2. Случайные величины и их распределения",
        "title": "Распределение",
        "theme": "Нормальное распределение",
        "text": "Распределение, имеющее колоколообразную форму и задаваемое параметрами μ и σ² — это...",
        "choices": [
            "Нормальное распределение",
            "Распределение Пуассона",
            "Биномиальное распределение",
            "Распределение Коши"
        ],
        "answers": ["Нормальное распределение"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Нормальное распределение</h5><p class='mb-1'>Самое распространённое непрерывное распределение. Обозначается <span class='badge badge-info'>N(μ, σ²)</span>.</p><hr class='my-2'><p class='mb-0'><strong>Важно:</strong> по <span class='badge badge-success'>правилу трёх сигм</span> — P(μ−3σ < X < μ+3σ) ≈ 0.997. Почти все значения лежат в интервале [μ−3σ, μ+3σ].</p></div>"
    },

    // =====================================================================
    // ==================== ТЕМА 3: Предельные теоремы и закон больших чисел ====================
    // =====================================================================

    // ---- 3.1 Неравенство Чебышева ----
    {
        "id": "tv_122",
        "type": "multiplechoices",
        "header": "Тема 3. Предельные теоремы и закон больших чисел",
        "title": "Неравенство Чебышева",
        "theme": "Неравенство Чебышева",
        "text": "Оценка вероятности отклонения случайной величины от её математического ожидания: P(|X-M(X)| ≥ ε) ≤ D(X)/ε² — это...",
        "choices": [
            "Закон больших чисел",
            "Центральная предельная теорема",
            "Неравенство Чебышева",
            "Теорема Бернулли"
        ],
        "answers": ["Неравенство Чебышева"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Неравенство Чебышева</h5><p class='mb-1'>Даёт <span class='badge badge-info'>верхнюю оценку</span> вероятности того, что случайная величина отклонится от среднего.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> P(|X − M(X)| ≥ ε) ≤ <span class='badge badge-success'>D(X) / ε²</span>. Оценка часто завышена, но работает для любых распределений.</p></div>"
    },

    // ---- 3.2 Закон больших чисел ----
   
    // ---- 4.4 Точечные оценки параметров ----
    {
        "id": "tv_018",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Несмещённость оценки",
        "theme": "Точечные оценки параметров",
        "text": "Какая оценка называется несмещённой?",
        "choices": [
            "M(θ̂) = θ",
            "θ̂ → θ при n→∞",
            "D(θ̂) минимальна",
            "θ̂ является константой"
        ],
        "answers": ["M(θ̂) = θ"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Несмещённая оценка</h5><p class='mb-1'>Оценка, у которой <span class='badge badge-info'>математическое ожидание равно оцениваемому параметру</span>.</p><hr class='my-2'><p class='mb-0'><strong>Свойство:</strong> M(θ̂) = θ. Пример: выборочное среднее — <span class='badge badge-success'>несмещённая оценка</span> для математического ожидания.</p></div>"
    },
    {
        "id": "tv_123",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Оценка параметров",
        "theme": "Точечные оценки параметров",
        "text": "Оценка, математическое ожидание которой равно оцениваемому параметру — это...",
        "choices": [
            "Несмещённая оценка",
            "Состоятельная оценка",
            "Эффективная оценка",
            "Метод моментов"
        ],
        "answers": ["Несмещённая оценка"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Несмещённая оценка</h5><p class='mb-1'>Важное свойство хорошей оценки: <span class='badge badge-info'>отсутствие систематической ошибки</span>.</p><hr class='my-2'><p class='mb-0'><strong>Важно:</strong> в отличие от состоятельности (сходимость при n→∞), несмещённость — <span class='badge badge-success'>свойство при любом объёме выборки</span>.</p></div>"
    },

    // ---- 4.5 Метод моментов ----
    {
        "id": "tv_125",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Метод оценивания",
        "theme": "Метод моментов",
        "text": "Метод, основанный на приравнивании теоретических и выборочных моментов — это...",
        "choices": [
            "Метод моментов",
            "Метод максимального правдоподобия",
            "Метод наименьших квадратов",
            "Метод доверительных интервалов"
        ],
        "answers": ["Метод моментов"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Метод моментов</h5><p class='mb-1'>Приравниваем <span class='badge badge-info'>теоретические моменты</span> к <span class='badge badge-info'>выборочным моментам</span>.</p><hr class='my-2'><p class='mb-0'><strong>Алгоритм:</strong> 1) вычисляем выборочные моменты; 2) записываем теоретические как функции параметров; 3) решаем систему. <span class='badge badge-success'>Простой, но не всегда эффективный</span> метод.</p></div>"
    },

    // ---- 4.6 Метод максимального правдоподобия ----
    {
        "id": "tv_021",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Метод максимального правдоподобия",
        "theme": "Метод максимального правдоподобия",
        "text": "В чём суть метода максимального правдоподобия?",
        "choices": [
            "Найти параметры, при которых данные наиболее вероятны",
            "Найти среднее значение выборки",
            "Построить гистограмму",
            "Проверить гипотезу о нормальности"
        ],
        "answers": ["Найти параметры, при которых данные наиболее вероятны"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Метод максимального правдоподобия (ММП)</h5><p class='mb-1'>Находит параметры, <span class='badge badge-info'>максимизирующие функцию правдоподобия</span>.</p><hr class='my-2'><p class='mb-0'><strong>Функция:</strong> L(θ) = Π f(xᵢ; θ). ММП — <span class='badge badge-success'>основной метод оценивания</span> в статистике, обладает хорошими свойствами.</p></div>"
    },
    {
        "id": "tv_124",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Оценка параметров",
        "theme": "Метод максимального правдоподобия",
        "text": "Метод оценивания, основанный на максимизации функции L(θ) = Π f(xᵢ; θ) — это...",
        "choices": [
            "Метод моментов",
            "Метод максимального правдоподобия",
            "Метод наименьших квадратов",
            "Байесовский метод"
        ],
        "answers": ["Метод максимального правдоподобия"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Метод максимального правдоподобия</h5><p class='mb-1'>Широко используется в <span class='badge badge-info'>машинном обучении</span> и статистике.</p><hr class='my-2'><p class='mb-0'><strong>Преимущества:</strong> асимптотически несмещённые и <span class='badge badge-success'>эффективные оценки</span>. Недостаток: может требовать сложных вычислений.</p></div>"
    },

    // ---- 4.7 Доверительные интервалы ----
    {
        "id": "tv_019",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Доверительный интервал",
        "theme": "Доверительные интервалы",
        "text": "Для чего используется доверительный интервал?",
        "choices": [
            "Для точечной оценки параметра",
            "Для интервальной оценки параметра с заданной вероятностью",
            "Для проверки гипотез",
            "Для построения гистограммы"
        ],
        "answers": ["Для интервальной оценки параметра с заданной вероятностью"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Доверительный интервал</h5><p class='mb-1'>Даёт <span class='badge badge-info'>интервал</span>, который с заданной вероятностью <span class='badge badge-info'>содержит истинный параметр</span>.</p><hr class='my-2'><p class='mb-0'><strong>Формула:</strong> x̄ ± z(α/2) × σ/√n. Чем выше доверительная вероятность, тем <span class='badge badge-success'>шире интервал</span>.</p></div>"
    },

    // ---- 4.8 Проверка статистических гипотез ----
    {
        "id": "tv_128",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Проверка гипотез",
        "theme": "Проверка статистических гипотез",
        "text": "Вероятность ошибки I рода (отклонить верную нулевую гипотезу) — это...",
        "choices": [
            "Уровень значимости α",
            "p-значение",
            "Мощность критерия",
            "Доверительная вероятность"
        ],
        "answers": ["Уровень значимости α"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Уровень значимости α</h5><p class='mb-1'>Вероятность <span class='badge badge-danger'>ошибки I рода</span> — отклонить H₀, когда она верна.</p><hr class='my-2'><p class='mb-0'><strong>Стандартное значение:</strong> α = <span class='badge badge-success'>0.05</span> (5%). Чем меньше α, тем строже критерий.</p></div>"
    },
    {
        "id": "tv_129",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Проверка гипотез",
        "theme": "Проверка статистических гипотез",
        "text": "Минимальный уровень значимости, при котором нулевая гипотеза отклоняется — это...",
        "choices": [
            "Уровень значимости α",
            "p-значение",
            "Мощность критерия",
            "Критическое значение"
        ],
        "answers": ["p-значение"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 p-значение</h5><p class='mb-1'>Минимальный уровень значимости, при котором <span class='badge badge-info'>H₀ отклоняется</span>.</p><hr class='my-2'><p class='mb-0'><strong>Правило:</strong> если p < α, то <span class='badge badge-success'>отклоняем H₀</span>. Если p ≥ α, то нет оснований отклонять H₀.</p></div>"
    },

    // ---- 4.9 Корреляционный анализ ----
    {
        "id": "tv_020",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Коэффициент корреляции",
        "theme": "Корреляционный анализ",
        "text": "В каком диапазоне находятся значения коэффициента корреляции Пирсона?",
        "choices": [
            "[0, 1]",
            "[-1, 1]",
            "[−∞, +∞]",
            "[0, +∞]"
        ],
        "answers": ["[-1, 1]"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Коэффициент корреляции</h5><p class='mb-1'>Измеряет <span class='badge badge-info'>силу и направление</span> линейной связи между переменными.</p><hr class='my-2'><p class='mb-0'><strong>Значения:</strong> r = 1 — полная положительная связь; r = −1 — полная отрицательная; r = 0 — <span class='badge badge-success'>нет линейной связи</span>.</p></div>"
    },
    {
        "id": "tv_126",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Связь между переменными",
        "theme": "Корреляционный анализ",
        "text": "Мера линейной связи между двумя переменными, принимающая значения от -1 до 1 — это...",
        "choices": [
            "Коэффициент корреляции Пирсона",
            "Коэффициент детерминации",
            "Ковариация",
            "Регрессия"
        ],
        "answers": ["Коэффициент корреляции Пирсона"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Коэффициент корреляции Пирсона</h5><p class='mb-1'>Наиболее распространённая <span class='badge badge-info'>мера линейной зависимости</span>.</p><hr class='my-2'><p class='mb-0'><strong>Важно:</strong> корреляция <span class='badge badge-warning'>не означает причинно-следственную связь</span>. r² (коэффициент детерминации) показывает долю объяснённой дисперсии.</p></div>"
    },

    // ---- 4.10 Регрессионный анализ ----
    {
        "id": "tv_127",
        "type": "multiplechoices",
        "header": "Тема 4. Элементы математической статистики",
        "title": "Моделирование зависимости",
        "theme": "Регрессионный анализ",
        "text": "Модель зависимости одной переменной от другой вида y = a + bx — это...",
        "choices": [
            "Корреляционный анализ",
            "Линейная регрессия",
            "Дисперсионный анализ",
            "Кластерный анализ"
        ],
        "answers": ["Линейная регрессия"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📊 Линейная регрессия</h5><p class='mb-1'>Моделирует <span class='badge badge-info'>линейную зависимость</span> между переменными.</p><hr class='my-2'><p class='mb-0'><strong>Уравнение:</strong> y = <span class='badge badge-info'>a</span> + <span class='badge badge-info'>b</span>x. Коэффициенты находят <span class='badge badge-success'>методом наименьших квадратов</span> (минимизация суммы квадратов ошибок).</p></div>"
    },

    {
    "id": "statistics546",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Количественная оценка",
    "theme": "Корреляционно-регрессионный анализ",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\cdot \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Коэффициента детерминации", "Ковариации", "Коэффициента корреляции Пирсона", "Наклона регрессии"],
    "answers": ["Коэффициента корреляции Пирсона"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$r = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\cdot \\sigma_Y}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>ковариация</strong>, в знаменателе — <strong>произведение стандартных отклонений</strong>. Результат — безразмерная величина от -1 до 1. Это <strong>коэффициент корреляции Пирсона</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Коэффициент корреляции Пирсона</div></div></div>"
  },
  {
    "id": "statistics547",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Описательная статистика",
    "theme": "Корреляционно-регрессионный анализ",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Коэффициента корреляции", "Ковариации по генеральной совокупности", "Ковариации по выборке", "Коэффициента детерминации"],
    "answers": ["Ковариации по генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\text{Cov}(X,Y) = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма произведений отклонений</strong>, в знаменателе — <strong>n</strong>. Это <strong>ковариация по генеральной совокупности</strong> (COVARIANCE.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Ковариация по генеральной совокупности</div></div></div>"
  },
  {
    "id": "statistics548",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистическая оценка",
    "theme": "Регрессионный анализ",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Свободного члена регрессии", "Коэффициента корреляции", "Углового коэффициента (наклона) регрессии", "Коэффициента детерминации"],
    "answers": ["Углового коэффициента (наклона) регрессии"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$a = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>ковариация</strong> (умноженная на n), в знаменателе — <strong>сумма квадратов отклонений X</strong>. Это формула <strong>углового коэффициента (наклона) регрессии</strong> (SLOPE).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Угловой коэффициент (наклон) регрессии</div></div></div>"
  },
  {
    "id": "statistics549",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Анализ данных",
    "theme": "Регрессионный анализ",
    "text": "$$\\bar{y} - a \\cdot \\bar{x}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Углового коэффициента регрессии", "Коэффициента корреляции", "Свободного члена (пересечения) регрессии", "Коэффициента детерминации"],
    "answers": ["Свободного члена (пересечения) регрессии"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$b = \\bar{y} - a \\cdot \\bar{x}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Из среднего Y вычитается <strong>произведение наклона на среднее X</strong>. Это формула <strong>свободного члена (пересечения) регрессии</strong> (INTERCEPT).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Свободный член (пересечение) регрессии</div></div></div>"
  },
  
  {
    "id": "statistics551",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Количественная оценка",
    "theme": "Позиционные характеристики",
    "text": "$$Q1 = x_{0.25}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Медианы", "Среднего арифметического", "Первого квартиля (25-го процентиля)", "Третьего квартиля"],
    "answers": ["Первого квартиля (25-го процентиля)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$Q1 = x_{0.25}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Q1 обозначает <strong>первый квартиль</strong>, x_{0.25} — <strong>25-й процентиль</strong>. Это значение, ниже которого находятся 25% данных.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Первый квартиль (25-й процентиль)</div></div></div>"
  },
  {
    "id": "statistics552",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Описательная статистика",
    "theme": "Меры формы распределения",
    "text": "$$\\text{Skewness} = \\frac{n}{(n-1)(n-2)} \\cdot \\sum_{i=1}^{n} \\left(\\frac{x_i - \\bar{x}}{s}\\right)^3$$\n\nДанная формула используется для расчёта:",
    "choices": ["Эксцесса", "Асимметрии (коэффициента скошенности)", "Коэффициента вариации", "Медианы"],
    "answers": ["Асимметрии (коэффициента скошенности)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\text{Skewness} = \\frac{n}{(n-1)(n-2)} \\sum \\left(\\frac{x_i - \\bar{x}}{s}\\right)^3$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Это <strong>третий стандартизированный момент</strong>. Формула использует <strong>куб</strong> нормированных отклонений. Положительное значение → правый хвост длиннее. Это <strong>коэффициент асимметрии (SKEW)</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Асимметрия (коэффициент скошенности)</div></div></div>"
  },

   {
    "id": "statistics553",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистическая оценка",
    "theme": "Законы распределения",
    "text": "$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$\n\nДанная формула описывает:",
    "choices": [
      "Равномерное распределение",
      "Распределение Пуассона",
      "Нормальное распределение (распределение Гаусса)",
      "Биномиальное распределение"
    ],
    "answers": ["Нормальное распределение (распределение Гаусса)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>π</strong> и <strong>e</strong> (экспоненту)</li><li>Имеет параметры <strong>μ</strong> (среднее) и <strong>σ</strong> (стандартное отклонение)</li><li>Симметрична относительно μ</li><li>Классическая «колоколообразная» кривая</li></ul><p class='card-text mt-2'>Это <strong>нормальное распределение (распределение Гаусса)</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Нормальное распределение (распределение Гаусса)</div></div></div>"
  },
  {
    "id": "statistics554",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Описательная статистика",
    "theme": "Законы распределения",
    "text": "$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0,1,2,\\dots$$\n\nДанная формула описывает:",
    "choices": [
      "Нормальное распределение",
      "Равномерное распределение",
      "Распределение Пуассона",
      "Геометрическое распределение"
    ],
    "answers": ["Распределение Пуассона"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>e^{-λ}</strong> (экспоненту)</li><li>В знаменателе <strong>k!</strong> (факториал)</li><li>Параметр <strong>λ</strong> (интенсивность потока событий)</li><li>Значения k = 0,1,2,... (целые неотрицательные)</li></ul><p class='card-text mt-2'>Это <strong>распределение Пуассона</strong> — моделирует количество редких событий за фиксированный интервал времени.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Распределение Пуассона</div></div></div>"
  },
  {
    "id": "statistics555",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Анализ данных",
    "theme": "Законы распределения",
    "text": "$$P(X=k) = C_n^k \\cdot p^k \\cdot (1-p)^{n-k}, \\quad k = 0,1,\\dots,n$$\n\nДанная формула описывает:",
    "choices": [
      "Распределение Пуассона",
      "Нормальное распределение",
      "Биномиальное распределение",
      "Распределение Коши"
    ],
    "answers": ["Биномиальное распределение"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$P(X=k) = C_n^k \\cdot p^k \\cdot (1-p)^{n-k}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>C_n^k</strong> (число сочетаний)</li><li>Параметры: <strong>n</strong> (число испытаний), <strong>p</strong> (вероятность успеха)</li><li>Значения k = 0,1,...,n</li><li>Моделирует число успехов в серии независимых испытаний</li></ul><p class='card-text mt-2'>Это <strong>биномиальное распределение</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Биномиальное распределение</div></div></div>"
  },
  {
    "id": "statistics556",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистический показатель",
    "theme": "Законы распределения",
    "text": "$$f(x) = \\frac{1}{b-a}, \\quad a \\le x \\le b$$\n\nДанная формула описывает:",
    "choices": [
      "Нормальное распределение",
      "Равномерное распределение",
      "Экспоненциальное распределение",
      "Распределение Стьюдента"
    ],
    "answers": ["Равномерное распределение"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$f(x) = \\frac{1}{b-a}, \\quad a \\le x \\le b$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Плотность <strong>постоянна</strong> на интервале [a,b]</li><li>Не зависит от x</li><li>Параметры: <strong>a</strong> (минимум), <strong>b</strong> (максимум)</li><li>Все значения в интервале равновероятны</li></ul><p class='card-text mt-2'>Это <strong>равномерное распределение</strong> (прямоугольное распределение).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Равномерное распределение</div></div></div>"
  },
  {
    "id": "statistics557",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Количественная оценка",
    "theme": "Законы распределения",
    "text": "$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\ge 0$$\n\nДанная формула описывает:",
    "choices": [
      "Нормальное распределение",
      "Распределение Пуассона",
      "Экспоненциальное распределение",
      "Равномерное распределение"
    ],
    "answers": ["Экспоненциальное распределение"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\ge 0$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>e^{-λx}</strong> (экспоненциальное затухание)</li><li>Определена только при <strong>x ≥ 0</strong></li><li>Параметр <strong>λ</strong> (интенсивность отказов)</li><li>Моделирует время между событиями</li></ul><p class='card-text mt-2'>Это <strong>экспоненциальное распределение</strong> (показательное распределение).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Экспоненциальное распределение</div></div></div>"
  },
  {
    "id": "statistics558",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Описательная статистика",
    "theme": "Законы распределения",
    "text": "$$f(t) = \\frac{\\Gamma\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\left(\\frac{\\nu}{2}\\right)} \\left(1+\\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu+1}{2}}$$\n\nДанная формула описывает:",
    "choices": [
      "Нормальное распределение",
      "Распределение Стьюдента (t-распределение)",
      "Распределение Фишера (F-распределение)",
      "Распределение Коши"
    ],
    "answers": ["Распределение Стьюдента (t-распределение)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$f(t) = \\frac{\\Gamma\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\left(\\frac{\\nu}{2}\\right)} \\left(1+\\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu+1}{2}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>Γ</strong> (гамма-функцию)</li><li>Параметр <strong>ν</strong> (число степеней свободы)</li><li>Похоже на нормальное, но с более тяжёлыми хвостами</li><li>Используется при малых выборках</li></ul><p class='card-text mt-2'>Это <strong>распределение Стьюдента (t-распределение)</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Распределение Стьюдента (t-распределение)</div></div></div>"
  },
  {
    "id": "statistics559",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Анализ данных",
    "theme": "Законы распределения",
    "text": "$$f(x) = \\frac{1}{\\pi \\gamma \\left[1 + \\left(\\frac{x - x_0}{\\gamma}\\right)^2\\right]}$$\n\nДанная формула описывает:",
    "choices": [
      "Нормальное распределение",
      "Распределение Стьюдента",
      "Распределение Коши",
      "Логистическое распределение"
    ],
    "answers": ["Распределение Коши"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$f(x) = \\frac{1}{\\pi \\gamma \\left[1 + \\left(\\frac{x - x_0}{\\gamma}\\right)^2\\right]}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>π</strong> в знаменателе</li><li>Имеет параметры <strong>x₀</strong> (положение пика) и <strong>γ</strong> (масштаб)</li><li>Очень <strong>тяжёлые хвосты</strong> — дисперсия не определена</li><li>Форма напоминает нормальное, но с более медленным затуханием</li></ul><p class='card-text mt-2'>Это <strong>распределение Коши</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Распределение Коши</div></div></div>"
  },
  {
    "id": "statistics560",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистическая оценка",
    "theme": "Законы распределения",
    "text": "$$F(x) = \\frac{1}{1+e^{-(x-\\mu)/s}}$$\n\nДанная формула описывает функцию распределения:",
    "choices": [
      "Нормального распределения",
      "Логистического распределения",
      "Распределения Лапласа",
      "Распределения Гумбеля"
    ],
    "answers": ["Логистического распределения"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О каком распределении идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$F(x) = \\frac{1}{1+e^{-(x-\\mu)/s}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><ul><li>Содержит <strong>логистическую функцию</strong> (S-образную кривую)</li><li>Использует <strong>экспоненту e</strong></li><li>Параметры: <strong>μ</strong> (положение), <strong>s</strong> (масштаб)</li><li>Похоже на нормальное, но с более тяжёлыми хвостами</li></ul><p class='card-text mt-2'>Это <strong>логистическое распределение</strong> (функция распределения).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Логистическое распределение</div></div></div>"
  },


 
      {
      id: "vec001",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Координаты единичных векторов",
      theme: "Векторы на плоскости",
      text: "На рисунке изображены единичные векторы i и j. Каковы их координаты?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Единичные векторы по осям имеют координаты: $$\\vec{i} = (1, 0), \\quad \\vec{j} = (0, 1)$$",
      choices: [
        "i = (1,0), j = (0,1)",
        "i = (0,1), j = (1,0)",
        "i = (1,1), j = (-1,-1)",
        "i = (0,0), j = (1,1)",
        "i = (-1,0), j = (0,-1)",
        "i = (0.5,0.5), j = (-0.5,0.5)"
      ],
      answers: ["i = (1,0), j = (0,1)"]
    },
];

window.quizesSets = quizesSets;