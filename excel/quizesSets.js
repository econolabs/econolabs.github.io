let quizesSets = [

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
      <div>{= {var1-10} + 4}</div>
      <div>{= {var1-10} - 4}</div>
      <div>{= {var1-10} + 4}</div>
      <div>{= {var1-10} - 4}</div>
      <div>{= {var1-10} + 4}</div>
      <div>{= {var1-10} - 4}</div>
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
    "id": "statistics_var_equal001",
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
    <div class="text-center fs-2">
      <div>{var1-10}</div>
      <div>{var1-10}</div>
      <div>{var1-10}</div>
      <div>{var1-10}</div>
      <div>{var1-10}</div>
      <div>{var1-10}</div>
    </div>
  </div>
</div>`,
    "answer": "{var1-10}*0",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Среднее арифметическое:</div>
    <div class="text-center">
      $$\\bar{x} = {var1-10}$$
    </div>
    
    <div class="mt-3 mb-2">2. Отклонения от среднего:</div>
    <div class="text-center">
      $$ {var1-10} - {var1-10} = 0$$ (для каждого из 6 чисел)
    </div>
    
    <div class="mt-3 mb-2">3. Квадраты отклонений:</div>
    <div class="text-center">
      $$0^2 = 0$$ (для каждого из 6 чисел)
    </div>
    
    <div class="mt-3 mb-2">4. Сумма квадратов отклонений:</div>
    <div class="text-center">
      $$0 + 0 + 0 + 0 + 0 + 0 = 0$$
    </div>
    
    <div class="mt-3 mb-2">5. Дисперсия (делим на количество чисел n = 6):</div>
    <div class="text-center">
      $$\\sigma^2 = \\frac{0}{6} = 0$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: 0</div>
  </div>
</div>`,
    "randomfrom": [5, 8, 12, 15, 20]
  },

{
  "id": "statistics_var_mixed002",
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
      <div>{= {var1-10} + 3}</div>
      <div>{= {var1-10} - 3}</div>
      <div>{= {var1-10} + 3}</div>
      <div>{= {var1-10} - 3}</div>
      <div>{= {var1-10} + 3}</div>
      <div>{= {var1-10} - 3}</div>
    </div>
  </div>
</div>`,
  "answer": "9",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Среднее арифметическое:</div>
    <div class="text-center">$$\\bar{x} = {var1-10}$$</div>
    
    <div class="mt-3 mb-2">2. Квадраты отклонений:</div>
    <div class="text-center">$$(+3)^2 = 9,\\quad (-3)^2 = 9$$ (каждое по 3 раза)</div>
    
    <div class="mt-3 mb-2">3. Сумма квадратов отклонений:</div>
    <div class="text-center">$$6 \\times 9 = 54$$</div>
    
    <div class="mt-3 mb-2">4. Дисперсия:</div>
    <div class="text-center">$$\\sigma^2 = \\frac{54}{6} = 9$$</div>
    
    <div class="alert alert-primary mt-3">Ответ: 9</div>
  </div>
</div>`,
  "randomfrom": [10, 15, 20, 25, 30]
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
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} + POWER({var1-10}, 1/2)}</div>
      <div>{= {var1-10} - POWER({var1-10}, 1/2)}</div>
    </div>
  </div>
</div>`,
  "answer": "POWER({var1-10}, 1/2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Дисперсия (из предыдущего расчёта):</div>
    <div class="text-center">$$\\sigma^2 = {var1-10}$$</div>
    
    <div class="mt-3 mb-2">2. Стандартное отклонение:</div>
    <div class="text-center">$$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{{var1-10}} = {= POWER({var1-10}, 1/2)}$$</div>
    
    <div class="alert alert-primary mt-3">Ответ: {= POWER({var1-10}, 1/2)}</div>
  </div>
</div>`,
  "randomfrom": [4, 9, 16, 25]
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
  "id": "statistics520",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Среднее значение продаж за месяц",
  "theme": "Средние величины в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета средних продаж за месяц",
  "answer": "AVERAGE(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт среднего арифметического продаж за месяц</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Среднее арифметическое значение продаж (столбец Y) за все 12 месяцев.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы среднего арифметического</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее арифметическое вычисляется по формуле:</p>
        <p class="card-text text-center">$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (с 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Суммируем все продажи:</p>
        <p class="card-text">$$\\sum = 52 + 55 + 53 + 60 + 62 + 58 + 65 + 68 + 66 + 72 + 75 + 80$$</p>
        <p class="card-text">$$\\sum = 766$$</p>
        <p class="card-text">$$\\bar{x} = \\frac{766}{12} \\approx 63.83$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=AVERAGE(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=AVERAGE(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СРЗНАЧ(D2:D13)</code> — русскоязычная версия</li>
          <li><code>=SUM(D2:D13)/12</code> — через сумму и деление</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr>
                <th>Месяц</th>
                <th>Продажи (Y)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>январь</td><td>52</td></tr>
              <tr><td>февраль</td><td>55</td></tr>
              <tr><td>март</td><td>53</td></tr>
              <tr><td>апрель</td><td>60</td></tr>
              <tr><td>май</td><td>62</td></tr>
              <tr><td>июнь</td><td>58</td></tr>
              <tr><td>июль</td><td>65</td></tr>
              <tr><td>август</td><td>68</td></tr>
              <tr><td>сентябрь</td><td>66</td></tr>
              <tr><td>октябрь</td><td>72</td></tr>
              <tr><td>ноябрь</td><td>75</td></tr>
              <tr><td>декабрь</td><td>80</td></tr>
              <tr class="table-warning">
                <td><strong>Сумма</strong></td>
                <td><strong>=СУММ(D2:D13) = 766</strong></td>
              </tr>
              <tr class="table-success">
                <td><strong>Среднее</strong></td>
                <td><strong>=СРЗНАЧ(D2:D13) = 766/12 ≈ 63.83</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
  <b>В НАШЕМ случае </b> <code class="fs-6">=AVERAGE(D2:D13)</code> 
</div>

 <div class="alert alert-secondary" role="alert">
  Для обычного офисного русскоязычного MS Excel <code class="fs-6">=СРЗНАЧ(D2:D13)</code> 
</div>

   
   
  </div>
</div>`
},

{
  "id": "statistics521",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Среднее значение рекламного бюджета за месяц",
  "theme": "Средние величины в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета среднего рекламного бюджета за месяц",
  "answer": "AVERAGE(B2:B13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт среднего арифметического рекламного бюджета за месяц</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Среднее арифметическое значение рекламного бюджета (столбец X1) за все 12 месяцев.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы среднего арифметического</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее арифметическое вычисляется по формуле:</p>
        <p class="card-text text-center">$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>B</strong> (со 2 по 13 строки) содержит значения рекламного бюджета по месяцам</li>
          <li>Диапазон ячеек: <strong>B2:B13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Суммируем все рекламные бюджеты:</p>
        <p class="card-text">$$\\sum = 8 + 9 + 10 + 11 + 12 + 10 + 13 + 14 + 13 + 15 + 16 + 17$$</p>
        <p class="card-text">$$\\sum = 148$$</p>
        <p class="card-text">$$\\bar{x} = \\frac{148}{12} \\approx 12.33$$</p>
        <p class="card-text mt-2 text-muted">💡 Средний рекламный бюджет составляет ≈ 12.33 тыс. руб.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=AVERAGE(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=AVERAGE(B2:B13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СРЗНАЧ(B2:B13)</code> — русскоязычная версия</li>
          <li><code>=SUM(B2:B13)/12</code> — через сумму и деление</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr>
                <th>Месяц</th>
                <th>Рекламный бюджет (X1)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>январь</td><td>8</td></tr>
              <tr><td>февраль</td><td>9</td></tr>
              <tr><td>март</td><td>10</td></tr>
              <tr><td>апрель</td><td>11</td></tr>
              <tr><td>май</td><td>12</td></tr>
              <tr><td>июнь</td><td>10</td></tr>
              <tr><td>июль</td><td>13</td></tr>
              <tr><td>август</td><td>14</td></tr>
              <tr><td>сентябрь</td><td>13</td></tr>
              <tr><td>октябрь</td><td>15</td></tr>
              <tr><td>ноябрь</td><td>16</td></tr>
              <tr><td>декабрь</td><td>17</td></tr>
              <tr class="table-warning">
                <td><strong>Сумма</strong></td>
                <td><strong>=СУММ(B2:B13) = 148</strong></td>
              </tr>
              <tr class="table-success">
                <td><strong>Среднее</strong></td>
                <td><strong>=СРЗНАЧ(B2:B13) = 148/12 ≈ 12.33</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=AVERAGE(B2:B13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СРЗНАЧ(B2:B13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Интерпретация результата:</b><br>
      Средний рекламный бюджет за месяц составляет ≈12.33 тыс. руб. Это позволяет оценить типичный уровень рекламных расходов компании и сравнивать его с продажами или звонками.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics522",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Среднее количество звонков клиентам за месяц",
  "theme": "Средние величины в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета среднего количества звонков клиентам за месяц",
  "answer": "AVERAGE(C2:C13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📞 Расчёт среднего арифметического количества звонков клиентам за месяц</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Среднее арифметическое значение звонков клиентам (столбец X2) за все 12 месяцев.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы среднего арифметического</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее арифметическое вычисляется по формуле:</p>
        <p class="card-text text-center">$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>C</strong> (со 2 по 13 строки) содержит значения звонков клиентам по месяцам</li>
          <li>Диапазон ячеек: <strong>C2:C13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Суммируем все звонки:</p>
        <p class="card-text">$$\\sum = 20 + 22 + 18 + 25 + 27 + 21 + 29 + 30 + 26 + 32 + 34 + 36$$</p>
        <p class="card-text">$$\\sum = 320$$</p>
        <p class="card-text">$$\\bar{x} = \\frac{320}{12} \\approx 26.67$$</p>
        <p class="card-text mt-2 text-muted">💡 Среднее количество звонков составляет ≈ 27 звонков в месяц (при округлении).</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=AVERAGE(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=AVERAGE(C2:C13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СРЗНАЧ(C2:C13)</code> — русскоязычная версия</li>
          <li><code>=SUM(C2:C13)/12</code> — через сумму и деление</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr>
                <th>Месяц</th>
                <th>Звонки клиентам (X2)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>январь</td><td>20</td></tr>
              <tr><td>февраль</td><td>22</td></tr>
              <tr><td>март</td><td>18</td></tr>
              <tr><td>апрель</td><td>25</td></tr>
              <tr><td>май</td><td>27</td></tr>
              <tr><td>июнь</td><td>21</td></tr>
              <tr><td>июль</td><td>29</td></tr>
              <tr><td>август</td><td>30</td></tr>
              <tr><td>сентябрь</td><td>26</td></tr>
              <tr><td>октябрь</td><td>32</td></tr>
              <tr><td>ноябрь</td><td>34</td></tr>
              <tr><td>декабрь</td><td>36</td></tr>
              <tr class="table-warning">
                <td><strong>Сумма</strong></td>
                <td><strong>=СУММ(C2:C13) = 320</strong></td>
              </tr>
              <tr class="table-success">
                <td><strong>Среднее</strong></td>
                <td><strong>=СРЗНАЧ(C2:C13) = 320/12 ≈ 26.67</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=AVERAGE(C2:C13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СРЗНАЧ(C2:C13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Интерпретация результата:</b><br>
      Среднее количество звонков клиентам за месяц составляет ≈26.67 звонка. Это ключевой показатель активности отдела продаж. Интересно, что максимальное значение (36 звонков) в декабре почти в 2 раза выше минимального (18 звонков) в марте, что указывает на значительную сезонность или неравномерность работы.
    </div>

    <div class="alert alert-success mt-2" role="alert">
      <b>📊 Сравнительный анализ (для углублённого изучения):</b><br>
      • Средний рекламный бюджет: 12.33 тыс. руб.<br>
      • Среднее количество звонков: 26.67 звонков<br>
      • Средние продажи: 63.83 ед.<br>
      <br>
      <strong>Коэффициент конверсии (продажи / звонки):</strong> 63.83 / 26.67 ≈ 2.39 — это означает, что в среднем каждые 100 звонков приносят ≈239 продаж? 🤔 <em>Студентам предлагается проверить корректность такого расчёта!</em>
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics523",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Медианное значение продаж за месяц",
  "theme": "Меры центральной тенденции в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета медианного значения продаж (Y) за месяц",
  "answer": "MEDIAN(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт медианы продаж за месяц</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Медиану — значение, которое находится в центре упорядоченного ряда продаж (столбец Y) за все 12 месяцев.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы медианы</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Медиана — это значение, делящее упорядоченный ряд данных пополам.</p>
        <p class="card-text text-center">$$Me = \\begin{cases} x_{\\frac{n+1}{2}} & \\text{если n нечётное} \\\\ \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2} & \\text{если n чётное} \\end{cases}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_{(i)}$ — i-е значение в отсортированном ряду.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$ (чётное)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Сортируем продажи по возрастанию:</p>
        <p class="card-text">$$52, 53, 55, 58, 60, 62, 65, 66, 68, 72, 75, 80$$</p>
        <p class="card-text">Так как n = 12 (чётное), медиана = среднее арифметическое 6-го и 7-го элементов:</p>
        <p class="card-text">$$Me = \\frac{62 + 65}{2} = \\frac{127}{2} = 63.5$$</p>
        <p class="card-text mt-2 text-muted">💡 Медиана продаж = 63.5 тыс. ед.</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Сравнение со средним:</strong> Среднее (63.83) и медиана (63.5) близки — это говорит о симметричности распределения продаж.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=MEDIAN(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=MEDIAN(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=МЕДИАНА(D2:D13)</code> — русскоязычная версия</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr>
                <th>Месяц</th>
                <th>Продажи (Y)</th>
                <th>Сортировка</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td>52 (1)</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td>53 (2)</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td>55 (3)</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td>58 (4)</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td>60 (5)</td></tr>
              <tr class="table-warning"><td class="text-muted">май</td><td class="text-muted">62</td><td><strong>62 (6) ← нижний центральный</strong></td></tr>
              <tr class="table-warning"><td class="text-muted">июль</td><td class="text-muted">65</td><td><strong>65 (7) ← верхний центральный</strong></td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td>66 (8)</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td>68 (9)</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td>72 (10)</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td>75 (11)</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td>80 (12)</td></tr>
              <tr class="table-success">
                <td><strong>Медиана</strong></td>
                <td colspan="2"><strong>= (62 + 65) / 2 = 63.5</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=MEDIAN(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=МЕДИАНА(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Чем медиана отличается от среднего?</b><br>
      • <strong>Среднее = 63.83</strong> — чувствительно к выбросам (на него влияет декабрь с 80)<br>
      • <strong>Медиана = 63.5</strong> — устойчива к выбросам, лучше описывает «типичный» месяц<br>
      • Их близость (разница 0.33) говорит об отсутствии сильных выбросов в данных
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задание для размышления:</b><br>
      Как изменится медиана, если убрать декабрь (80)? А если добавить месяц с продажами 100?
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics524",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Дисперсия продаж за месяц (по генеральной совокупности)",
  "theme": "Меры разброса в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета дисперсии продаж (Y) по генеральной совокупности",
  "answer": "VAR.P(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт дисперсии продаж за месяц (VAR.P)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Дисперсию продаж (столбец Y) — меру разброса значений относительно среднего арифметического. Используем функцию VAR.P (для генеральной совокупности).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы дисперсии (генеральная совокупность)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Дисперсия для генеральной совокупности вычисляется по формуле:</p>
        <p class="card-text text-center">$$\\sigma^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение, $\\bar{x}$ — среднее арифметическое.</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Важное отличие:</strong><br>
          • <strong>VAR.P</strong> — дисперсия по генеральной совокупности (деление на n)<br>
          • <strong>VAR.S</strong> — дисперсия по выборке (деление на n-1)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$ (все месяцы года — это генеральная совокупность)</li>
          <li>Среднее арифметическое: $\\bar{x} \\approx 63.833$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее значение: $$\\bar{x} = \\frac{52 + 55 + 53 + 60 + 62 + 58 + 65 + 68 + 66 + 72 + 75 + 80}{12} = \\frac{766}{12} \\approx 63.833$$</p>
        <p class="card-text mt-2">Вычисляем квадраты отклонений:</p>
        
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>xᵢ - x̄</th><th>(xᵢ - x̄)²</th></tr>
            </thead>
            <tbody>
              <tr><td>январь</td><td>52</td><td>-11.833</td><td>140.02</td></tr>
              <tr><td>февраль</td><td>55</td><td>-8.833</td><td>78.03</td></tr>
              <tr><td>март</td><td>53</td><td>-10.833</td><td>117.36</td></tr>
              <tr><td>апрель</td><td>60</td><td>-3.833</td><td>14.69</td></tr>
              <tr><td>май</td><td>62</td><td>-1.833</td><td>3.36</td></tr>
              <tr><td>июнь</td><td>58</td><td>-5.833</td><td>34.03</td></tr>
              <tr><td>июль</td><td>65</td><td>1.167</td><td>1.36</td></tr>
              <tr><td>август</td><td>68</td><td>4.167</td><td>17.36</td></tr>
              <tr><td>сентябрь</td><td>66</td><td>2.167</td><td>4.70</td></tr>
              <tr><td>октябрь</td><td>72</td><td>8.167</td><td>66.70</td></tr>
              <tr><td>ноябрь</td><td>75</td><td>11.167</td><td>124.70</td></tr>
              <tr><td>декабрь</td><td>80</td><td>16.167</td><td>261.36</td></tr>
              <tr class="table-warning"><td colspan="3"><strong>Сумма квадратов отклонений</strong></td><td><strong>∑ = 863.67</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$\\sigma^2 = \\frac{863.67}{12} \\approx 71.97$$</p>
        <p class="card-text mt-2 text-muted">💡 Дисперсия продаж ≈ 71.97 (единиц²)</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=VAR.P(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=VAR.P(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=ДИСП.Г(D2:D13)</code> — русскоязычная версия</li>
          <li><code>=VARPA(D2:D13)</code> — устаревшая версия (включает текст и логические значения)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение VAR.P и VAR.S</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Функция</th><th>Формула</th><th>Результат</th><th>Когда использовать</th></tr>
            </thead>
            <tbody>
              <tr><td><code>=VAR.P(D2:D13)</code></td><td>÷ n (12)</td><td>≈ 71.97</td><td>Данные — вся генеральная совокупность</td></tr>
              <tr><td><code>=VAR.S(D2:D13)</code></td><td>÷ (n-1) (11)</td><td>≈ 78.52</td><td>Данные — выборка из генеральной совокупности</td></tr>
            </tbody>
          </table>
        </div>
        <p class="card-text mt-2 text-muted">💡 VAR.S всегда больше VAR.P, так как деление на меньшее число даёт больший результат. Это «поправка на смещение» для выборки.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          <strong>📏 Интерпретация дисперсии:</strong><br>
          Дисперсия = 71.97 означает, что в среднем квадрат отклонения продаж от среднего значения составляет 71.97.<br>
          <strong>Недостаток:</strong> единицы измерения — «квадратные единицы продаж», что сложно интерпретировать.<br>
          <strong>Решение:</strong> использовать стандартное отклонение — <code>=STDEV.P(D2:D13)</code> = √71.97 ≈ 8.48 единиц.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=VAR.P(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=ДИСП.Г(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практический смысл дисперсии:</b><br>
      • <strong>Низкая дисперсия (близка к 0)</strong> — значения стабильны, мало отличаются от среднего<br>
      • <strong>Высокая дисперсия</strong> — значения сильно разбросаны, есть нестабильность<br>
      • В нашем случае дисперсия 71.97 при среднем 63.83 — коэффициент вариации = (8.48 / 63.83) × 100% ≈ 13.3% — умеренная вариация
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задание для размышления:</b><br>
      Почему в реальных бизнес-задачах чаще используют VAR.S (дисперсию по выборке), а не VAR.P? В каком случае уместно применять VAR.P?
    </div>
   
  </div>
</div>`
},


{
  "id": "statistics525",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Стандартное отклонение продаж за месяц (по генеральной совокупности)",
  "theme": "Меры разброса в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета стандартного отклонения продаж (Y) по генеральной совокупности",
  "answer": "STDEV.P(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт стандартного отклонения продаж за месяц (STDEV.P)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Стандартное отклонение продаж (столбец Y) — меру разброса значений относительно среднего арифметического в исходных единицах измерения. Используем функцию STDEV.P (для генеральной совокупности).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы стандартного отклонения (генеральная совокупность)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Стандартное отклонение для генеральной совокупности — это квадратный корень из дисперсии:</p>
        <p class="card-text text-center">$$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение, $\\bar{x}$ — среднее арифметическое.</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Главное преимущество:</strong><br>
          Стандартное отклонение выражается в <strong>тех же единицах измерения</strong>, что и исходные данные (в отличие от дисперсии, которая даёт "квадратные единицы").
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$ (все месяцы года — это генеральная совокупность)</li>
          <li>Среднее арифметическое: $\\bar{x} \\approx 63.83$ (тыс. ед.)</li>
          <li>Дисперсия: $\\sigma^2 \\approx 71.97$ (тыс. ед.²)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее значение: $$\\bar{x} = \\frac{52 + 55 + 53 + 60 + 62 + 58 + 65 + 68 + 66 + 72 + 75 + 80}{12} = \\frac{766}{12} \\approx 63.833$$</p>
        <p class="card-text mt-2">Вычисляем квадраты отклонений (как в расчёте дисперсии):</p>
        
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>xᵢ - x̄</th><th>(xᵢ - x̄)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-muted">-11.833</td><td class="text-muted">140.02</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-muted">-8.833</td><td class="text-muted">78.03</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-muted">-10.833</td><td class="text-muted">117.36</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-muted">-3.833</td><td class="text-muted">14.69</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-muted">-1.833</td><td class="text-muted">3.36</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-muted">-5.833</td><td class="text-muted">34.03</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-muted">1.167</td><td class="text-muted">1.36</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-muted">4.167</td><td class="text-muted">17.36</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-muted">2.167</td><td class="text-muted">4.70</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-muted">8.167</td><td class="text-muted">66.70</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-muted">11.167</td><td class="text-muted">124.70</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-muted">16.167</td><td class="text-muted">261.36</td></tr>
              <tr class="table-warning"><td colspan="3"><strong>Сумма квадратов отклонений</strong></td><td><strong>∑ = 863.67</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$\\sigma^2 = \\frac{863.67}{12} \\approx 71.97$$</p>
        <p class="card-text">$$\\sigma = \\sqrt{71.97} \\approx 8.48$$</p>
        <p class="card-text mt-2 text-muted">💡 Стандартное отклонение продаж ≈ <strong>8.48 тыс. ед.</strong></p>
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong> В среднем фактические продажи отклоняются от среднего значения (63.83) примерно на 8.48 тыс. единиц в ту или иную сторону.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=STDEV.P(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=STDEV.P(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СТАНДОТКЛОН.Г(D2:D13)</code> — русскоязычная версия</li>
          <li><code>=STDEVP(D2:D13)</code> — устаревшая версия (Excel 2007 и старше)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение STDEV.P и STDEV.S</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Функция</th><th>Формула</th><th>Результат</th><th>Когда использовать</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><code>=STDEV.P(D2:D13)</code></td>
                <td>√(∑(xᵢ-x̄)² / n)</td>
                <td><strong>≈ 8.48</strong></td>
                <td>Данные — вся генеральная совокупность (все 12 месяцев)</td>
              </tr>
              <tr>
                <td><code>=STDEV.S(D2:D13)</code></td>
                <td>√(∑(xᵢ-x̄)² / (n-1))</td>
                <td>≈ 8.86</td>
                <td>Данные — выборка из генеральной совокупности</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="card-text mt-2 text-muted">💡 STDEV.S всегда больше STDEV.P, так как деление на (n-1) даёт большую дисперсию и, соответственно, большее стандартное отклонение.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Эмпирическое правило трёх сигм</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Для нормального распределения:</strong><br>
          • ≈68% значений лежат в интервале <strong>x̄ ± 1σ</strong> → [55.35; 72.31]<br>
          • ≈95% значений лежат в интервале <strong>x̄ ± 2σ</strong> → [46.87; 80.79]<br>
          • ≈99.7% значений лежат в интервале <strong>x̄ ± 3σ</strong> → [38.39; 89.27]
        </div>
        <p class="card-text mt-2">Проверим на наших данных: все 12 месяцев (100%) попадают в интервал x̄ ± 2σ, что хорошо согласуется с правилом.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <tbody>
              <tr class="table-secondary"><td><strong>Показатель</strong></td><td><strong>Значение</strong></td><td><strong>Единицы измерения</strong></td></tr>
              <tr><td>Среднее (x̄)</td><td>63.83</td><td>тыс. ед.</td></tr>
              <tr><td>Дисперсия (σ²)</td><td>71.97</td><td>(тыс. ед.)²</td></tr>
              <tr class="table-success"><td><strong>Стандартное отклонение (σ)</strong></td><td><strong>8.48</strong></td><td><strong>тыс. ед.</strong></td></tr>
              <tr><td>Минимум</td><td>52</td><td>тыс. ед.</td></tr>
              <tr><td>Максимум</td><td>80</td><td>тыс. ед.</td></tr>
              <tr><td>Размах</td><td>28</td><td>тыс. ед.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=STDEV.P(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СТАНДОТКЛОН.Г(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практический смысл стандартного отклонения:</b><br>
      • <strong>Низкое σ (менее 10% от среднего)</strong> — продажи стабильны, риск низкий<br>
      • <strong>Среднее σ (10-20% от среднего)</strong> — умеренная волатильность<br>
      • <strong>Высокое σ (более 20% от среднего)</strong> — продажи нестабильны, высокий риск<br>
      <br>
      В нашем случае: σ = 8.48, среднее = 63.83 → <strong>коэффициент вариации = 8.48/63.83 × 100% ≈ 13.3%</strong> — умеренная вариация.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задание для размышления:</b><br>
      Компания хочет снизить вариативность продаж. Какой месяц является «выбросом» и сильнее всего увеличивает стандартное отклонение? Что можно предложить для стабилизации продаж?
    </div>
   
  </div>
</div>`
},


{
  "id": "statistics526",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Коэффициент асимметрии продаж за месяц",
  "theme": "Меры формы распределения в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента асимметрии продаж (Y) за месяц",
  "answer": "SKEW(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента асимметрии продаж за месяц (SKEW)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент асимметрии (skewness) — меру несимметричности распределения продаж (столбец Y) относительно среднего значения.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы асимметрии</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент асимметрии для выборки вычисляется по формуле:</p>
        <p class="card-text text-center">$$Skewness = \\frac{n}{(n-1)(n-2)} \\times \\sum_{i=1}^{n} \\left(\\frac{x_i - \\bar{x}}{s}\\right)^3$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение, $\\bar{x}$ — среднее арифметическое, $s$ — стандартное отклонение (выборочное).</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация асимметрии:</strong><br>
          • <strong>Skewness = 0</strong> — симметричное распределение<br>
          • <strong>Skewness > 0</strong> — правосторонняя асимметрия (хвост справа длиннее, медиана < среднего)<br>
          • <strong>Skewness < 0</strong> — левосторонняя асимметрия (хвост слева длиннее, медиана > среднего)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
          <li>Среднее арифметическое: $\\bar{x} \\approx 63.83$</li>
          <li>Выборочное стандартное отклонение: $s \\approx 8.86$ (STDEV.S)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Вычисляем нормированные отклонения (z-оценки) и возводим их в куб:</p>
        
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>xᵢ - x̄</th><th>z = (xᵢ - x̄)/s</th><th>z³</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-muted">-11.83</td><td class="text-muted">-1.335</td><td class="text-muted">-2.38</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-muted">-8.83</td><td class="text-muted">-0.997</td><td class="text-muted">-0.99</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-muted">-10.83</td><td class="text-muted">-1.222</td><td class="text-muted">-1.82</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-muted">-3.83</td><td class="text-muted">-0.432</td><td class="text-muted">-0.08</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-muted">-1.83</td><td class="text-muted">-0.207</td><td class="text-muted">-0.01</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-muted">-5.83</td><td class="text-muted">-0.658</td><td class="text-muted">-0.28</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-muted">1.17</td><td class="text-muted">0.132</td><td class="text-muted">0.002</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-muted">4.17</td><td class="text-muted">0.471</td><td class="text-muted">0.104</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-muted">2.17</td><td class="text-muted">0.245</td><td class="text-muted">0.015</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-muted">8.17</td><td class="text-muted">0.922</td><td class="text-muted">0.784</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-muted">11.17</td><td class="text-muted">1.260</td><td class="text-muted">2.00</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-muted">16.17</td><td class="text-muted">1.825</td><td class="text-muted">6.08</td></tr>
              <tr class="table-warning"><td colspan="4"><strong>Сумма z³</strong></td><td><strong>∑ = 3.41</strong></td></tr>
            </tbody>
           </table>
        </div>
        
        <p class="card-text mt-2">Поправочный коэффициент для n=12:</p>
        <p class="card-text">$$\\frac{n}{(n-1)(n-2)} = \\frac{12}{11 \\times 10} = \\frac{12}{110} \\approx 0.1091$$</p>
        <p class="card-text">$$Skewness = 0.1091 \\times 3.41 \\approx 0.37$$</p>
        <p class="card-text mt-2 text-muted">💡 Коэффициент асимметрии продаж ≈ <strong>0.37</strong></p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=SKEW(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=SKEW(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СКОС(D2:D13)</code> — русскоязычная версия</li>
        </ul>
        <div class="alert alert-light mt-2">
          <strong>📌 Примечание:</strong> Функция SKEW использует выборочное стандартное отклонение (STDEV.S) и даёт несмещённую оценку асимметрии для выборки.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация и интерпретация асимметрии</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="alert alert-secondary">
              <strong>Симметричное</strong><br>
              Skewness = 0<br>
              📊<br>
              Среднее = Медиана
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="alert alert-warning">
              <strong>Правосторонняя</strong><br>
              Skewness > 0<br>
              📈<br>
              Среднее > Медианы<br>
              <span class="text-muted">Хвост справа длиннее</span>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="alert alert-info">
              <strong>Левосторонняя</strong><br>
              Skewness < 0<br>
              📉<br>
              Среднее < Медианы<br>
              <span class="text-muted">Хвост слева длиннее</span>
            </div>
          </div>
        </div>
        
        <div class="alert alert-success mt-3">
          <strong>📌 Наш результат: SKEW = 0.37 > 0</strong><br>
          Распределение продаж имеет <strong>умеренную правостороннюю асимметрию</strong>. Это означает:
          <ul class="mt-2">
            <li>Большая часть значений сконцентрирована слева от центра</li>
            <li>Есть «тяжёлый» правый хвост — несколько месяцев с аномально высокими продажами (ноябрь, декабрь)</li>
            <li>Среднее (63.83) больше медианы (63.5), что подтверждает правый «выброс»</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица показателей формы распределения</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Показатель</th><th>Значение</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Асимметрия (SKEW)</strong></td>
                <td><strong>0.37</strong></td>
                <td>Умеренная правосторонняя асимметрия → есть «пик» слева и длинный правый хвост</td>
              </tr>
              <tr>
                <td>Среднее vs Медиана</td>
                <td>63.83 vs 63.50</td>
                <td>Среднее > медианы (подтверждает правую асимметрию)</td>
              </tr>
              <tr>
                <td>Максимальное отклонение</td>
                <td>+16.17 (декабрь)</td>
                <td>Правый хвост формирует декабрь с продажами 80</td>
              </tr>
              <tr>
                <td>Минимальное отклонение</td>
                <td>-11.83 (январь)</td>
                <td>Левый хвост короче правого</td>
              </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=SKEW(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СКОС(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение асимметрии в бизнесе:</b><br>
      • <strong>Skewness > 0</strong> — есть редкие, но очень успешные месяцы (как в нашем случае). Менеджменту стоит изучить, что сделано в ноябре-декабре.<br>
      • <strong>Skewness < 0</strong> — есть редкие провальные месяцы. Стоит искать причины низких продаж.<br>
      • <strong>Skewness ≈ 0</strong> — продажи стабильны, можно использовать нормальное распределение для прогнозов.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задание для размышления:</b><br>
      Если бы мы убрали декабрь (максимальные продажи 80), как изменился бы коэффициент асимметрии? Стал бы он ближе к нулю или отрицательным? Проверьте свою гипотезу.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics527",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Коэффициент эксцесса продаж за месяц",
  "theme": "Меры формы распределения в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента эксцесса продаж (Y) за месяц",
  "answer": "KURT(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента эксцесса продаж за месяц (KURT)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент эксцесса (kurtosis) — меру «островершинности» или «плосковершинности» распределения продаж (столбец Y) по сравнению с нормальным распределением.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание формулы эксцесса</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент эксцесса для выборки вычисляется по формуле:</p>
        <p class="card-text text-center">$$Kurtosis = \\left[ \\frac{n(n+1)}{(n-1)(n-2)(n-3)} \\times \\sum_{i=1}^{n} \\left(\\frac{x_i - \\bar{x}}{s}\\right)^4 \\right] - \\frac{3(n-1)^2}{(n-2)(n-3)}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение, $\\bar{x}$ — среднее арифметическое, $s$ — выборочное стандартное отклонение.</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Важное замечание:</strong><br>
          Функция <strong>KURT</strong> в Excel уже вычитает 3, поэтому результат сравнивается с нулём:<br>
          • <strong>KURT = 0</strong> — мезокуртическое распределение (как нормальное)<br>
          • <strong>KURT > 0</strong> — лептокуртическое (островершинное, тяжёлые хвосты)<br>
          • <strong>KURT < 0</strong> — платикуртическое (плосковершинное, лёгкие хвосты)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
          <li>Среднее арифметическое: $\\bar{x} \\approx 63.83$</li>
          <li>Выборочное стандартное отклонение: $s \\approx 8.86$ (STDEV.S)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Вычисляем нормированные отклонения (z-оценки) и возводим их в 4-ю степень:</p>
        
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>xᵢ - x̄</th><th>z = (xᵢ - x̄)/s</th><th>z⁴</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-muted">-11.83</td><td class="text-muted">-1.335</td><td class="text-muted">3.18</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-muted">-8.83</td><td class="text-muted">-0.997</td><td class="text-muted">0.99</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-muted">-10.83</td><td class="text-muted">-1.222</td><td class="text-muted">2.23</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-muted">-3.83</td><td class="text-muted">-0.432</td><td class="text-muted">0.03</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-muted">-1.83</td><td class="text-muted">-0.207</td><td class="text-muted">0.002</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-muted">-5.83</td><td class="text-muted">-0.658</td><td class="text-muted">0.19</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-muted">1.17</td><td class="text-muted">0.132</td><td class="text-muted">0.0003</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-muted">4.17</td><td class="text-muted">0.471</td><td class="text-muted">0.05</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-muted">2.17</td><td class="text-muted">0.245</td><td class="text-muted">0.0036</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-muted">8.17</td><td class="text-muted">0.922</td><td class="text-muted">0.72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-muted">11.17</td><td class="text-muted">1.260</td><td class="text-muted">2.52</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-muted">16.17</td><td class="text-muted">1.825</td><td class="text-muted">11.09</td></tr>
              <tr class="table-warning"><td colspan="4"><strong>Сумма z⁴</strong></td><td><strong>∑ = 21.01</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">Поправочные коэффициенты для n=12:</p>
        <p class="card-text">$$\\frac{n(n+1)}{(n-1)(n-2)(n-3)} = \\frac{12 \\times 13}{11 \\times 10 \\times 9} = \\frac{156}{990} \\approx 0.1576$$</p>
        <p class="card-text">$$\\frac{3(n-1)^2}{(n-2)(n-3)} = \\frac{3 \\times 11^2}{10 \\times 9} = \\frac{3 \\times 121}{90} = \\frac{363}{90} \\approx 4.0333$$</p>
        <p class="card-text">$$Kurtosis = (0.1576 \\times 21.01) - 4.0333 = 3.31 - 4.0333 \\approx -0.72$$</p>
        <p class="card-text mt-2 text-muted">💡 Коэффициент эксцесса продаж ≈ <strong>-0.72</strong></p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=KURT(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=KURT(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=ЭКСЦЕСС(D2:D13)</code> — русскоязычная версия</li>
        </ul>
        <div class="alert alert-light mt-2">
          <strong>📌 Примечание:</strong> Функция KURT использует выборочное стандартное отклонение (STDEV.S) и уже вычитает 3 из результата, чтобы нормальное распределение давало 0.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация и интерпретация эксцесса</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="alert alert-secondary">
              <strong>Мезокуртическое</strong><br>
              KURT = 0<br>
              📊<br>
              Как нормальное распределение<br>
              <span class="text-muted">Средняя острота пика</span>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="alert alert-danger">
              <strong>Лептокуртическое</strong><br>
              KURT > 0<br>
              🏔️<br>
              <strong>Островершинное</strong><br>
              <span class="text-muted">Тяжёлые хвосты, высокий пик</span>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="alert alert-success">
              <strong>Платикуртическое</strong><br>
              KURT < 0<br>
              📚<br>
              <strong>Плосковершинное</strong><br>
              <span class="text-muted">Лёгкие хвосты, низкий пик</span>
            </div>
          </div>
        </div>
        
        <div class="alert alert-success mt-3">
          <strong>📌 Наш результат: KURT = -0.72 < 0</strong><br>
          Распределение продаж имеет <strong>платикуртическую (плосковершинную) форму</strong>. Это означает:
          <ul class="mt-2">
            <li>Пик распределения ниже и шире, чем у нормального распределения</li>
            <li>Данные более равномерно распределены по диапазону значений</li>
            <li>Меньше концентрация значений в центре</li>
            <li>Хвосты распределения легче (экстремальные значения менее вероятны, чем в нормальном распределении)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица показателей формы распределения</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Показатель</th><th>Значение</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Асимметрия (SKEW)</strong></td>
                <td><strong>0.37</strong></td>
                <td>Умеренная правосторонняя асимметрия → есть правый хвост (декабрь)</td>
              </tr>
              <tr class="table-success">
                <td><strong>Эксцесс (KURT)</strong></td>
                <td><strong>-0.72</strong></td>
                <td>Платикуртическое распределение → плосковершинное, данные равномерно разбросаны</td>
              </tr>
              <tr class="table-secondary">
                <td>Среднее vs Медиана</td>
                <td>63.83 vs 63.50</td>
                <td>Небольшое смещение вправо</td>
              </tr>
              <tr class="table-secondary">
                <td>Размах (max - min)</td>
                <td>80 - 52 = 28</td>
                <td>Относительно широкий диапазон</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение разных типов эксцесса на примерах</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Тип</th><th>KURT</th><th>Пример из бизнеса</th></tr>
            </thead>
            <tbody>
              <tr><td>Лептокуртическое</td><td>> 0</td><td>Продажи в период распродаж — резкий пик в Чёрную пятницу</td></tr>
              <tr><td>Мезокуртическое</td><td>≈ 0</td><td>Ежемесячные продажи стабильного товара повседневного спроса</td></tr>
              <tr><td>Платикуртическое</td><td>< 0</td><td>Продажи по месяцам без явной сезонности (как в нашем примере)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=KURT(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=ЭКСЦЕСС(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение эксцесса в бизнесе:</b><br>
      • <strong>KURT > 0 (островершинное)</strong> — продажи сильно сконцентрированы вокруг среднего, но есть редкие экстремальные значения (рискованный бизнес)<br>
      • <strong>KURT < 0 (плосковершинное)</strong> — продажи равномерно распределены, нет ярко выраженных пиков и провалов (стабильный предсказуемый бизнес)<br>
      • <strong>KURT ≈ 0</strong> — распределение близко к нормальному, можно применять стандартные статистические методы
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задание для размышления:</b><br>
      Сравните эксцесс продаж (KURT = -0.72) и эксцесс рекламного бюджета. Как вы думаете, какой показатель будет более островершинным? Почему? Проверьте свою гипотезу с помощью формул <code>=KURT(B2:B13)</code> и <code>=KURT(C2:C13)</code>.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics528",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Нижний квартиль продаж (25-й процентиль)",
  "theme": "Позиционные характеристики в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета 25-го процентиля (нижнего квартиля) продаж (Y) за месяц",
  "answer": "PERCENTILE.EXC(D2:D13,0.25)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт 25-го процентиля (нижнего квартиля) продаж</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      25-й процентиль (первый квартиль, Q1) продаж (столбец Y) — значение, ниже которого находятся 25% всех наблюдений. Используем функцию <strong>PERCENTILE.EXC</strong> (исключающая).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание процентилей и квартилей</h5>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>Процентиль</strong> — значение, ниже которого находится заданный процент наблюдений.</p>
        <p class="card-text"><strong>Квартили</strong> — частный случай процентилей, делящих данные на 4 равные части:</p>
        <ul>
          <li><strong>Q1 (25-й процентиль)</strong> — отделяет нижние 25% данных</li>
          <li><strong>Q2 (50-й процентиль)</strong> — медиана, отделяет 50% данных</li>
          <li><strong>Q3 (75-й процентиль)</strong> — отделяет 75% данных</li>
        </ul>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Различие PERCENTILE.EXC и PERCENTILE.INC:</strong><br>
          • <strong>.EXC (exclusive)</strong> — исключающий, возвращает значения от 0 до 1, НЕ включая 0 и 1<br>
          • <strong>.INC (inclusive)</strong> — включающий, возвращает значения от 0 до 1, включая 0 и 1<br>
          • Для 0.25 при n=12 оба метода дают РАЗНЫЕ результаты
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец <strong>D</strong> (со 2 по 13 строки) содержит значения продаж по месяцам</li>
          <li>Диапазон ячеек: <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
          <li>Нужно найти: 25-й процентиль (p = 0.25)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт для PERCENTILE.EXC</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Сортируем продажи по возрастанию:</p>
        <p class="card-text text-center">$$52, 53, 55, 58, 60, 62, 65, 66, 68, 72, 75, 80$$</p>
        
        <p class="card-text mt-3"><strong>Алгоритм PERCENTILE.EXC:</strong></p>
        <p class="card-text">1. Вычисляем позицию: $pos = p \\times (n + 1) = 0.25 \\times 13 = 3.25$</p>
        <p class="card-text">2. Позиция 3.25 означает, что значение находится между 3-м и 4-м элементами в отсортированном ряду</p>
        <p class="card-text">3. 3-й элемент: $x_3 = 55$</p>
        <p class="card-text">4. 4-й элемент: $x_4 = 58$</p>
        <p class="card-text">5. Интерполяция: $Q1 = x_3 + 0.25 \\times (x_4 - x_3) = 55 + 0.25 \\times 3 = 55 + 0.75 = 55.75$</p>
        
        <p class="card-text mt-3 text-muted">💡 25-й процентиль (PERCENTILE.EXC) ≈ <strong>55.75</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          25% месяцев имеют продажи менее 55.75 тыс. ед. — это январь (52), февраль (55), март (53). Фактически 3 месяца из 12 (25%).
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3b: Сравнение с PERCENTILE.INC</h5>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>Алгоритм PERCENTILE.INC (включающий):</strong></p>
        <p class="card-text">1. Вычисляем позицию: $pos = p \\times (n - 1) + 1 = 0.25 \\times 11 + 1 = 2.75 + 1 = 3.75$</p>
        <p class="card-text">2. Позиция 3.75 между 3-м ($x_3 = 55$) и 4-м ($x_4 = 58$) элементами</p>
        <p class="card-text">3. Интерполяция: $Q1 = 55 + 0.75 \\times 3 = 55 + 2.25 = 57.25$</p>
        
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Функция</th><th>Формула</th><th>Результат</th><th>Когда использовать</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><code>=PERCENTILE.EXC(D2:D13,0.25)</code></td>
                <td>$0.25 \\times (n+1)$</td>
                <td><strong>55.75</strong></td>
                <td>Для статистического анализа, выборка</td>
              </tr>
              <tr class="table-secondary">
                <td><code>=PERCENTILE.INC(D2:D13,0.25)</code></td>
                <td>$0.25 \\times (n-1) + 1$</td>
                <td>57.25</td>
                <td>Для квантилей, включая границы</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=PERCENTILE.EXC(диапазон, k)</code><br>
          где k — процентиль от 0 до 1 (исключая 0 и 1)
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=PERCENTILE.EXC(D2:D13,0.25)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=ПЕРСЕНТИЛЬ.ИСКЛ(D2:D13;0,25)</code> — русскоязычная версия</li>
          <li><code>=QUARTILE.EXC(D2:D13,1)</code> — эквивалент для первого квартиля</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Итоговая таблица с расчётом квартилей</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Показатель</th><th>Формула</th><th>Значение</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Q1 (25-й процентиль)</strong></td>
                <td><code>=PERCENTILE.EXC(D2:D13,0.25)</code></td>
                <td><strong>55.75</strong></td>
                <td>25% продаж ≤ 55.75 (январь, февраль, март)</td>
              </tr>
              <tr class="table-secondary">
                <td><strong>Q2 (50-й процентиль / Медиана)</strong></td>
                <td><code>=PERCENTILE.EXC(D2:D13,0.50)</code></td>
                <td>63.5</td>
                <td>50% продаж ≤ 63.5</td>
              </tr>
              <tr class="table-info">
                <td><strong>Q3 (75-й процентиль)</strong></td>
                <td><code>=PERCENTILE.EXC(D2:D13,0.75)</code></td>
                <td>?</td>
                <td>75% продаж ≤ ? (предлагаем студентам рассчитать)</td>
              </tr>
              <tr class="table-secondary">
                <td><strong>Межквартильный размах (IQR)</strong></td>
                <td>= Q3 - Q1</td>
                <td>?</td>
                <td>Разброс средних 50% данных</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: расположение 25-го процентиля</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr><th>№</th><th>Месяц</th><th>Продажи</th><th>Накопленный %</th><th>Отметка</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td class="text-muted">январь</td><td class="text-muted">52</td><td>8.3%</td><td></td></tr>
              <tr><td>2</td><td class="text-muted">февраль</td><td class="text-muted">55</td><td>16.7%</td><td></td></tr>
              <tr class="table-warning"><td>3</td><td class="text-muted">март</td><td class="text-muted">55</td><td>25.0%</td><td>⬅️ Ниже этого значения — 25% данных</td></tr>
              <tr><td>4</td><td>июнь</td><td>58</td><td>33.3%</td><td></td></tr>
              <tr><td>5</td><td>апрель</td><td>60</td><td>41.7%</td><td></td></tr>
              <tr><td>6</td><td>май</td><td>62</td><td>50.0%</td><td>⬅️ Медиана</td></tr>
              <tr><td colspan="4" class="text-center text-muted">...</td><td></td></tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-success mt-2">
          <strong>📌 Важно:</strong> При n=12, ровно 25% = 3 месяца. Значение 55.75 лежит между 55 и 58, так как точное 25-е процентильное значение должно делить данные так, чтобы 25% было СТРОГО меньше.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=PERCENTILE.EXC(D2:D13,0.25)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=ПЕРСЕНТИЛЬ.ИСКЛ(D2:D13;0,25)</code><br>
      <b>Альтернатива:</b> <code class="fs-6">=КВАРТИЛЬ.ИСКЛ(D2:D13;1)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение нижнего квартиля в бизнесе:</b><br>
      • <strong>Оценка эффективности</strong> — 75% месяцев показывают продажи выше 55.75 тыс. ед. — это хороший результат<br>
      • <strong>Выявление проблемных месяцев</strong> — январь, февраль, март требуют особого внимания<br>
      • <strong>Постановка минимального плана</strong> — нижний квартиль можно использовать как минимальный целевой показатель<br>
      • <strong>Бенчмаркинг</strong> — сравнение с аналогичными периодами прошлых лет
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте 75-й процентиль (Q3) с помощью <code>=PERCENTILE.EXC(D2:D13,0.75)</code><br>
      2. Найдите межквартильный размах (IQR) = Q3 - Q1. Что он показывает?<br>
      3. Какие месяцы можно считать выбросами по правилу "ниже Q1 - 1.5×IQR"?<br>
      4. Чем отличается PERCENTILE.EXC от PERCENTILE.INC для 0.5 (медианы)? Проверьте!
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics529",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Корреляция между рекламным бюджетом и продажами",
  "theme": "Анализ взаимосвязей в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента корреляции между рекламным бюджетом (X1) и продажами (Y)",
  "answer": "CORREL(B2:B13,D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента корреляции между рекламным бюджетом и продажами</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент корреляции Пирсона между рекламным бюджетом (столбец X1, B2:B13) и продажами (столбец Y, D2:D13) — меру линейной взаимосвязи между двумя переменными.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание коэффициента корреляции</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент корреляции Пирсона ($r$) вычисляется по формуле:</p>
        <p class="card-text text-center">$$r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\times \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}$$</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация коэффициента корреляции:</strong><br>
          • <strong>r = 1</strong> — полная положительная связь<br>
          • <strong>r = -1</strong> — полная отрицательная связь<br>
          • <strong>r = 0</strong> — линейная связь отсутствует<br>
          • <strong>0 < |r| < 0.3</strong> — слабая связь<br>
          • <strong>0.3 ≤ |r| < 0.7</strong> — умеренная связь<br>
          • <strong>|r| ≥ 0.7</strong> — сильная связь
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Рекламный бюджет (X1): диапазон <strong>B2:B13</strong></li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Реклама (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">8</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">9</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">10</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">11</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">12</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">10</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">13</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">14</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">13</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">15</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">16</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">17</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{8+9+10+11+12+10+13+14+13+15+16+17}{12} = \\frac{148}{12} \\approx 12.333$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{52+55+53+60+62+58+65+68+66+72+75+80}{12} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Вычисляем отклонения и произведения:</p>
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>x - x̄</th><th>y - ȳ</th><th>(x - x̄)(y - ȳ)</th><th>(x - x̄)²</th><th>(y - ȳ)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td>-4.333</td><td>-11.833</td><td>51.28</td><td>18.78</td><td>140.03</td></tr>
              <tr><td class="text-muted">февраль</td><td>-3.333</td><td>-8.833</td><td>29.44</td><td>11.11</td><td>78.03</td></tr>
              <tr><td class="text-muted">март</td><td>-2.333</td><td>-10.833</td><td>25.28</td><td>5.44</td><td>117.36</td></tr>
              <tr><td class="text-muted">апрель</td><td>-1.333</td><td>-3.833</td><td>5.11</td><td>1.78</td><td>14.69</td></tr>
              <tr><td class="text-muted">май</td><td>-0.333</td><td>-1.833</td><td>0.61</td><td>0.11</td><td>3.36</td></tr>
              <tr><td class="text-muted">июнь</td><td>-2.333</td><td>-5.833</td><td>13.61</td><td>5.44</td><td>34.03</td></tr>
              <tr><td class="text-muted">июль</td><td>0.667</td><td>1.167</td><td>0.78</td><td>0.44</td><td>1.36</td></tr>
              <tr><td class="text-muted">август</td><td>1.667</td><td>4.167</td><td>6.94</td><td>2.78</td><td>17.36</td></tr>
              <tr><td class="text-muted">сентябрь</td><td>0.667</td><td>2.167</td><td>1.45</td><td>0.44</td><td>4.70</td></tr>
              <tr><td class="text-muted">октябрь</td><td>2.667</td><td>8.167</td><td>21.78</td><td>7.11</td><td>66.70</td></tr>
              <tr><td class="text-muted">ноябрь</td><td>3.667</td><td>11.167</td><td>40.94</td><td>13.44</td><td>124.70</td></tr>
              <tr><td class="text-muted">декабрь</td><td>4.667</td><td>16.167</td><td>75.44</td><td>21.78</td><td>261.36</td></tr>
              <tr class="table-warning"><td colspan="2"><strong>Сумма</strong></td><td><strong>∑ = 272.66</strong></td><td><strong>∑ = 88.65</strong></td><td><strong>∑ = 863.68</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$r = \\frac{272.66}{\\sqrt{88.65 \\times 863.68}} = \\frac{272.66}{\\sqrt{76584.5}} = \\frac{272.66}{276.74} \\approx 0.985$$</p>
        <p class="card-text mt-2 text-muted">💡 Коэффициент корреляции ≈ <strong>0.985</strong></p>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Очень сильная положительная корреляция (почти функциональная зависимость).
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=CORREL(массив1, массив2)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=CORREL(B2:B13, D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=КОРРЕЛ(B2:B13; D2:D13)</code> — русскоязычная версия</li>
          <li><code>=PEARSON(B2:B13, D2:D13)</code> — полный синоним CORREL</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: диаграмма рассеяния</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 12px;">
Продажи (Y)
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
     |________________________________________
       8   9   10  11  12  13  14  15  16  17
                 Рекламный бюджет (X1)
          </pre>
        </div>
        <p class="card-text mt-2">Точки почти лежат на прямой линии → r близок к 1.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Коэффициент детерминации (R²)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент детерминации $R^2 = r^2$ показывает, какой процент дисперсии зависимой переменной объясняется независимой:</p>
        <p class="card-text text-center">$$R^2 = 0.985^2 \\approx 0.970$$</p>
        <div class="alert alert-success">
          <strong>📌 Интерпретация:</strong> 97% вариации продаж объясняется изменением рекламного бюджета. Это исключительно высокий показатель!
        </div>
        <p class="card-text mt-2">В Excel: <code>=RSQ(D2:D13, B2:B13)</code> или просто возвести корреляцию в квадрат.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение корреляций</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Пара переменных</th><th>Формула</th><th>Ожидаемый r</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Реклама (X1) → Продажи (Y)</td>
                <td><code>=CORREL(B2:B13, D2:D13)</code></td>
                <td>≈ 0.985</td>
                <td>Очень сильная положительная</td>
               </tr>
              <tr class="table-secondary">
                <td>Звонки (X2) → Продажи (Y)</td>
                <td><code>=CORREL(C2:C13, D2:D13)</code></td>
                <td>≈ ?</td>
                <td>Предлагаем рассчитать</td>
               </tr>
              <tr class="table-secondary">
                <td>Реклама (X1) → Звонки (X2)</td>
                <td><code>=CORREL(B2:B13, C2:C13)</code></td>
                <td>≈ ?</td>
                <td>Предлагаем рассчитать</td>
               </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=CORREL(B2:B13, D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=КОРРЕЛ(B2:B13; D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение корреляционного анализа в бизнесе:</b><br>
      • <strong>Оценка эффективности рекламы</strong> — r = 0.985 показывает, что увеличение рекламного бюджета почти линейно ведёт к росту продаж<br>
      • <strong>Прогнозирование</strong> — можно строить линейную регрессию для предсказания продаж по бюджету<br>
      • <strong>Причинно-следственные связи</strong> — корреляция не равна причинности, но в данном случае связь очевидна<br>
      • <strong>Оптимизация бюджета</strong> — зная сильную связь, компания может точно планировать бюджет под целевые продажи
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важное предупреждение:</b><br>
      Корреляция не означает причинность! Даже при r = 0.985 нельзя с уверенностью сказать, что реклама ПРИЧИНА роста продаж. Возможно, есть третий фактор (например, сезонность), влияющий на обе переменные. Однако в бизнес-контексте такая сильная связь — веский аргумент в пользу эффективности рекламы.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте корреляцию между звонками клиентам (C2:C13) и продажами (D2:D13). Что сильнее влияет на продажи — реклама или звонки?<br>
      2. Рассчитайте корреляцию между рекламным бюджетом (B2:B13) и звонками (C2:C13). Есть ли связь?<br>
      3. Постройте линейную регрессию: Продажи = a × Реклама + b с помощью функций <code>=SLOPE()</code> и <code>=INTERCEPT()</code><br>
      4. Используя уравнение регрессии, предскажите продажи при рекламном бюджете 20 тыс. руб.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics530",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Корреляция между звонками клиентам и продажами",
  "theme": "Анализ взаимосвязей в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента корреляции между звонками клиентам (X2) и продажами (Y)",
  "answer": "CORREL(C2:C13,D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента корреляции между звонками клиентам и продажами</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент корреляции Пирсона между звонками клиентам (столбец X2, C2:C13) и продажами (столбец Y, D2:D13) — меру линейной взаимосвязи между активностью отдела продаж и результатом.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание коэффициента корреляции</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент корреляции Пирсона ($r$) вычисляется по формуле:</p>
        <p class="card-text text-center">$$r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\times \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}$$</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация коэффициента корреляции:</strong><br>
          • <strong>r = 1</strong> — полная положительная связь<br>
          • <strong>r = -1</strong> — полная отрицательная связь<br>
          • <strong>r = 0</strong> — линейная связь отсутствует<br>
          • <strong>0.7 ≤ |r| < 1</strong> — сильная связь<br>
          • <strong>0.3 ≤ |r| < 0.7</strong> — умеренная связь<br>
          • <strong>|r| < 0.3</strong> — слабая связь
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Звонки клиентам (X2): диапазон <strong>C2:C13</strong></li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Звонки (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">20</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">22</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">18</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">25</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">27</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">21</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">29</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">30</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">26</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">32</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">34</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">36</td><td class="text-muted">80</td></tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{20+22+18+25+27+21+29+30+26+32+34+36}{12} = \\frac{320}{12} \\approx 26.667$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{52+55+53+60+62+58+65+68+66+72+75+80}{12} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Вычисляем отклонения и произведения:</p>
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>x - x̄</th><th>y - ȳ</th><th>(x - x̄)(y - ȳ)</th><th>(x - x̄)²</th><th>(y - ȳ)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td>-6.667</td><td>-11.833</td><td>78.89</td><td>44.44</td><td>140.03</td></tr>
              <tr><td class="text-muted">февраль</td><td>-4.667</td><td>-8.833</td><td>41.22</td><td>21.78</td><td>78.03</td></tr>
              <tr><td class="text-muted">март</td><td>-8.667</td><td>-10.833</td><td>93.89</td><td>75.11</td><td>117.36</td></tr>
              <tr><td class="text-muted">апрель</td><td>-1.667</td><td>-3.833</td><td>6.39</td><td>2.78</td><td>14.69</td></tr>
              <tr><td class="text-muted">май</td><td>0.333</td><td>-1.833</td><td>-0.61</td><td>0.11</td><td>3.36</td></tr>
              <tr><td class="text-muted">июнь</td><td>-5.667</td><td>-5.833</td><td>33.06</td><td>32.11</td><td>34.03</td></tr>
              <tr><td class="text-muted">июль</td><td>2.333</td><td>1.167</td><td>2.72</td><td>5.44</td><td>1.36</td></tr>
              <tr><td class="text-muted">август</td><td>3.333</td><td>4.167</td><td>13.89</td><td>11.11</td><td>17.36</td></tr>
              <tr><td class="text-muted">сентябрь</td><td>-0.667</td><td>2.167</td><td>-1.45</td><td>0.44</td><td>4.70</td></tr>
              <tr><td class="text-muted">октябрь</td><td>5.333</td><td>8.167</td><td>43.56</td><td>28.44</td><td>66.70</td></tr>
              <tr><td class="text-muted">ноябрь</td><td>7.333</td><td>11.167</td><td>81.89</td><td>53.78</td><td>124.70</td></tr>
              <tr><td class="text-muted">декабрь</td><td>9.333</td><td>16.167</td><td>150.89</td><td>87.11</td><td>261.36</td></tr>
              <tr class="table-warning"><td colspan="2"><strong>Сумма</strong></td><td><strong>∑ = 544.24</strong></td><td><strong>∑ = 362.65</strong></td><td><strong>∑ = 863.68</strong></td></tr>
            </tbody>
           </table>
        </div>
        
        <p class="card-text mt-2">$$r = \\frac{544.24}{\\sqrt{362.65 \\times 863.68}} = \\frac{544.24}{\\sqrt{313,207}} = \\frac{544.24}{559.65} \\approx 0.972$$</p>
        <p class="card-text mt-2 text-muted">💡 Коэффициент корреляции ≈ <strong>0.972</strong></p>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Очень сильная положительная корреляция. Чем больше звонков клиентам, тем выше продажи.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=CORREL(массив1, массив2)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=CORREL(C2:C13, D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=КОРРЕЛ(C2:C13; D2:D13)</code> — русскоязычная версия</li>
          <li><code>=PEARSON(C2:C13, D2:D13)</code> — полный синоним CORREL</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнительный анализ корреляций</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Пара переменных</th><th>Формула</th><th>Коэффициент r</th><th>Сила связи</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Реклама → Продажи</td>
                <td><code>=CORREL(B2:B13, D2:D13)</code></td>
                <td>0.985</td>
                <td>Очень сильная</td>
                <td>📈 Реклама — мощный драйвер продаж</td>
               </tr>
              <tr class="table-success">
                <td><strong>Звонки → Продажи</strong></td>
                <td><strong><code>=CORREL(C2:C13, D2:D13)</code></strong></td>
                <td><strong>0.972</strong></td>
                <td><strong>Очень сильная</strong></td>
                <td><strong>📞 Звонки также сильно влияют на продажи</strong></td>
               </tr>
              <tr class="table-secondary">
                <td>Реклама → Звонки</td>
                <td><code>=CORREL(B2:B13, C2:C13)</code></td>
                <td>≈ ?</td>
                <td>Предлагаем рассчитать</td>
                <td>Есть ли связь между бюджетом и активностью?</td>
               </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Коэффициент детерминации (R²) для звонков и продаж</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент детерминации $R^2 = r^2$ показывает, какой процент дисперсии продаж объясняется количеством звонков:</p>
        <p class="card-text text-center">$$R^2 = 0.972^2 \\approx 0.945$$</p>
        <div class="alert alert-success">
          <strong>📌 Интерпретация:</strong> 94.5% вариации продаж объясняется изменением количества звонков клиентам. Это очень высокий показатель, но чуть ниже, чем для рекламы (97%).
        </div>
        <p class="card-text mt-2">В Excel: <code>=RSQ(D2:D13, C2:C13)</code> или <code>=CORREL(C2:C13, D2:D13)^2</code></p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: диаграмма рассеяния (звонки vs продажи)</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 12px;">
Продажи (Y)
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
     |________________________________________
       18  20  22  24  26  28  30  32  34  36
                 Звонки клиентам (X2)
          </pre>
        </div>
        <p class="card-text mt-2">Точки также хорошо ложатся на прямую, но есть небольшое «облачко» в центре, что объясняет r = 0.972 (чуть ниже, чем 0.985 у рекламы).</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Что сильнее влияет на продажи: реклама или звонки?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="alert alert-info text-center">
              <strong>📢 Реклама → Продажи</strong><br>
              r = 0.985<br>
              R² = 97.0%<br>
              🥇 Чуть сильнее
            </div>
          </div>
          <div class="col-md-6">
            <div class="alert alert-success text-center">
              <strong>📞 Звонки → Продажи</strong><br>
              r = 0.972<br>
              R² = 94.5%<br>
              🥈 Очень близко
            </div>
          </div>
        </div>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Оба фактора исключительно сильно влияют на продажи. Разница минимальна — реклама даёт чуть более точное предсказание. Вероятно, реклама привлекает клиентов, а звонки конвертируют их в продажи — эти процессы взаимосвязаны.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=CORREL(C2:C13, D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=КОРРЕЛ(C2:C13; D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение корреляции звонков и продаж:</b><br>
      • <strong>Оценка эффективности отдела продаж</strong> — высокая корреляция (0.972) подтверждает, что активность менеджеров напрямую влияет на результат<br>
      • <strong>KPI для менеджеров</strong> — можно использовать количество звонков как ключевой показатель эффективности<br>
      • <strong>Прогнозирование</strong> — зная плановое количество звонков, можно предсказать продажи<br>
      • <strong>Нормирование труда</strong> — определить, сколько звонков нужно для достижения целевых продаж<br>
      • <strong>Сравнение каналов</strong> — реклама (0.985) vs звонки (0.972) — оба канала эффективны
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важное предупреждение о мультиколлинеарности:</b><br>
      Реклама и звонки сами могут быть сильно коррелированы между собой. Если r(реклама, звонки) > 0.8, то эти переменные дублируют друг друга в регрессионной модели, и их совместное использование может быть проблематичным. Проверьте эту корреляцию самостоятельно!
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте корреляцию между рекламой и звонками: <code>=CORREL(B2:B13, C2:C13)</code>. Есть ли мультиколлинеарность?<br>
      2. Что означает, если бы r(звонки, продажи) был 0.3? А если отрицательным?<br>
      3. Постройте линейную регрессию: Продажи = a × Звонки + b с помощью функций <code>=SLOPE()</code> и <code>=INTERCEPT()</code><br>
      4. Используя уравнение регрессии, предскажите продажи при 40 звонках в месяц<br>
      5. Какой фактор (реклама или звонки) даёт более точный прогноз? Сравните R².
    </div>
   
  </div>
</div>`
},


{
  "id": "statistics532",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Прогноз продаж по рекламному бюджету",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для прогноза продаж при рекламном бюджете 20 тыс. руб. на основе линейной регрессии",
  "answer": "FORECAST.LINEAR(20,D2:D13,B2:B13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Прогноз продаж по рекламному бюджету (FORECAST.LINEAR)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Используя линейную регрессию, предсказать продажи (столбец Y, D2:D13) при рекламном бюджете (столбец X1, B2:B13), равном <strong>20 тыс. руб.</strong>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание линейной регрессии и FORECAST.LINEAR</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Линейная регрессия описывается уравнением:</p>
        <p class="card-text text-center">$$y = a \\cdot x + b$$</p>
        <p class="card-text">где $a$ — угловой коэффициент (наклон), $b$ — свободный член (пересечение с осью Y).</p>
        
        <p class="card-text mt-2"><strong>Функция FORECAST.LINEAR</strong> (ранее FORECAST) вычисляет прогнозное значение y для заданного x на основе линейного тренда:</p>
        <div class="alert alert-light">
          <code>=FORECAST.LINEAR(x, известные_y, известные_x)</code><br>
          — x — новое значение, для которого делается прогноз<br>
          — известные_y — зависимая переменная (продажи)<br>
          — известные_x — независимая переменная (рекламный бюджет)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Рекламный бюджет (X1): диапазон <strong>B2:B13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Новое значение x (реклама): <strong>20</strong> тыс. руб.</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Реклама (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">8</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">9</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">10</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">11</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">12</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">10</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">13</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">14</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">13</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">15</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">16</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">17</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Для построения линейной регрессии нужно найти коэффициенты $a$ и $b$:</p>
        
        <p class="card-text mt-2">1. <strong>Средние значения:</strong></p>
        <p class="card-text">$$\\bar{x} = \\frac{148}{12} \\approx 12.333$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">2. <strong>Угловой коэффициент (наклон):</strong></p>
        <p class="card-text">$$a = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = \\frac{272.66}{88.65} \\approx 3.075$$</p>
        
        <p class="card-text mt-2">3. <strong>Свободный член (пересечение):</strong></p>
        <p class="card-text">$$b = \\bar{y} - a \\cdot \\bar{x} = 63.833 - 3.075 \\times 12.333 \\approx 63.833 - 37.92 \\approx 25.91$$</p>
        
        <p class="card-text mt-2">4. <strong>Уравнение регрессии:</strong></p>
        <p class="card-text text-center">$$\\text{Продажи} = 3.075 \\times \\text{Реклама} + 25.91$$</p>
        
        <p class="card-text mt-2">5. <strong>Прогноз при рекламе = 20:</strong></p>
        <p class="card-text text-center">$$y = 3.075 \\times 20 + 25.91 = 61.5 + 25.91 \\approx 87.41$$</p>
        
        <p class="card-text mt-2 text-muted">💡 Прогноз продаж ≈ <strong>87.4 тыс. ед.</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong> При увеличении рекламного бюджета на 1 тыс. руб. продажи растут в среднем на 3.075 тыс. ед. При нулевой рекламе базовые продажи составили бы ≈ 25.9 тыс. ед.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=FORECAST.LINEAR(x, известные_y, известные_x)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=FORECAST.LINEAR(20, D2:D13, B2:B13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=ПРЕДСКАЗ.ЛИНЕЙН(20; D2:D13; B2:B13)</code> — русскоязычная версия</li>
          <li><code>=FORECAST(20, D2:D13, B2:B13)</code> — устаревшая версия (в новых версиях Excel)</li>
          <li><code>=TREND(D2:D13, B2:B13, 20)</code> — альтернативная функция</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Альтернативный способ: через коэффициенты регрессии</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Можно рассчитать прогноз, сначала найдя коэффициенты:</p>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Что найти</th><th>Формула</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Наклон (a)</strong></code></td>
                <td><code>=SLOPE(D2:D13, B2:B13)</code></td>
                <td>≈ 3.075</strong></code></td>
               </tr>
              <tr class="table-info">
                <td>Пересечение (b)</strong></code></td>
                <td><code>=INTERCEPT(D2:D13, B2:B13)</code></td>
                <td>≈ 25.91</strong></code></td>
               </tr>
              <tr class="table-success">
                <td>Прогноз</strong></code></td>
                <td><code>=SLOPE(D2:D13, B2:B13) * 20 + INTERCEPT(D2:D13, B2:B13)</code></td>
                <td>≈ 87.41</strong></code></td>
               </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: линия регрессии и прогноз</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 11px;">
Продажи (Y)
  90 |                                              ★ (прогноз: 87.4)
  85 |
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
     |________________________________________________________
       8   9   10  11  12  13  14  15  16  17  18  19  20
                    Рекламный бюджет (X1)

★ — прогнозируемая точка при x = 20
● — фактические данные
⎯ — линия регрессии (y = 3.075x + 25.91)
          </pre>
        </div>
        <p class="card-text mt-2">Прогноз при x = 20 (зелёная звезда) является экстраполяцией, так как 20 выходит за пределы наблюдаемых значений (8–17).</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Доверительный интервал прогноза (для углублённого анализа)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Прогноз — это точечная оценка. Реальные продажи с вероятностью 95% попадут в интервал:</p>
        <p class="card-text text-center">$$y \\pm t_{0.025, n-2} \\times SE$$</p>
        <p class="card-text">Где SE — стандартная ошибка прогноза. В Excel для этого используется функция <code>=STEYX(D2:D13, B2:B13)</code>.</p>
        <div class="alert alert-light">
          <strong>📌 Упрощённо:</strong> при сильной корреляции (r = 0.985) прогноз довольно точен, но экстраполяция всегда рискованна.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=FORECAST.LINEAR(20, D2:D13, B2:B13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=ПРЕДСКАЗ.ЛИНЕЙН(20; D2:D13; B2:B13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение прогнозирования в бизнесе:</b><br>
      • <strong>Бюджетирование</strong> — зная планируемый рекламный бюджет, можно предсказать ожидаемые продажи<br>
      • <strong>Оценка эффективности</strong> — сравнивая фактические продажи с прогнозом, можно оценить успешность маркетинговых кампаний<br>
      • <strong>Планирование ресурсов</strong> — прогноз продаж помогает планировать закупки, складские запасы и персонал<br>
      • <strong>ROI-анализ</strong> — можно рассчитать окупаемость дополнительных вложений в рекламу
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • <strong>Экстраполяция опасна!</strong> Прогноз при x=20 выходит за пределы наблюдаемых данных (максимум 17). Связь может быть нелинейной за пределами известного диапазона.<br>
      • <strong>Корреляция ≠ причинность</strong> — прогноз основан на предположении, что связь останется неизменной.<br>
      • <strong>Интерполяция надёжнее экстраполяции</strong> — прогноз для x=14 (внутри диапазона) был бы точнее.<br>
      • <strong>Всегда проверяйте адекватность модели</strong> — смотрите на R² и остатки.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Сделайте прогноз продаж при рекламном бюджете 12.5 тыс. руб. (интерполяция) и сравните с фактическими продажами в мае (62). Насколько точен прогноз?<br>
      2. Рассчитайте наклон и пересечение отдельно с помощью <code>=SLOPE()</code> и <code>=INTERCEPT()</code>. Проверьте, что их комбинация даёт тот же прогноз.<br>
      3. Сделайте прогноз продаж при рекламном бюджете 25 тыс. руб. Насколько можно доверять этому прогнозу? Почему?<br>
      4. Постройте прогноз для звонков: при 40 звонках в месяц, используя <code>=FORECAST.LINEAR(40, D2:D13, C2:C13)</code>.<br>
      5. Какой из двух факторов (реклама или звонки) даёт более точный прогноз? Сравните R².
    </div>
   
  </div>
</div>`
},


{
  "id": "statistics533",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Угловой коэффициент регрессии (наклон) для зависимости продаж от рекламы",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета углового коэффициента (наклона) линейной регрессии, показывающего, на сколько единиц изменяются продажи при увеличении рекламного бюджета на 1 тыс. руб.",
  "answer": "SLOPE(D2:D13,B2:B13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт углового коэффициента регрессии (SLOPE)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Угловой коэффициент (наклон) линейной регрессии, показывающий, на сколько единиц (тыс. ед.) изменяются продажи (Y) при увеличении рекламного бюджета (X1) на 1 тыс. руб.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание углового коэффициента (наклона)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Угловой коэффициент (наклон) $a$ в уравнении линейной регрессии вычисляется по формуле:</p>
        <p class="card-text text-center">$$a = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}$$</p>
        <p class="card-text">где $x_i$ — значения независимой переменной (реклама), $y_i$ — зависимой (продажи).</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация наклона:</strong><br>
          • <strong>a > 0</strong> — положительная связь: при росте x растёт y<br>
          • <strong>a < 0</strong> — отрицательная связь: при росте x падает y<br>
          • <strong>a = 0</strong> — связь отсутствует (горизонтальная линия)<br>
          • <strong>Величина a</strong> показывает, на сколько единиц изменяется y при изменении x на 1 единицу
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Рекламный бюджет (X1): диапазон <strong>B2:B13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Реклама (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">8</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">9</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">10</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">11</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">12</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">10</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">13</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">14</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">13</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">15</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">16</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">17</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{148}{12} \\approx 12.333$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Вычисляем отклонения:</p>
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>x - x̄</th><th>y - ȳ</th><th>(x - x̄)(y - ȳ)</th><th>(x - x̄)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">-4.333</td><td class="text-muted">-11.833</td><td class="text-muted">51.28</td><td class="text-muted">18.78</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">-3.333</td><td class="text-muted">-8.833</td><td class="text-muted">29.44</td><td class="text-muted">11.11</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">-2.333</td><td class="text-muted">-10.833</td><td class="text-muted">25.28</td><td class="text-muted">5.44</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">-1.333</td><td class="text-muted">-3.833</td><td class="text-muted">5.11</td><td class="text-muted">1.78</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">-0.333</td><td class="text-muted">-1.833</td><td class="text-muted">0.61</td><td class="text-muted">0.11</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">-2.333</td><td class="text-muted">-5.833</td><td class="text-muted">13.61</td><td class="text-muted">5.44</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">0.667</td><td class="text-muted">1.167</td><td class="text-muted">0.78</td><td class="text-muted">0.44</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">1.667</td><td class="text-muted">4.167</td><td class="text-muted">6.94</td><td class="text-muted">2.78</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">0.667</td><td class="text-muted">2.167</td><td class="text-muted">1.45</td><td class="text-muted">0.44</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">2.667</td><td class="text-muted">8.167</td><td class="text-muted">21.78</td><td class="text-muted">7.11</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">3.667</td><td class="text-muted">11.167</td><td class="text-muted">40.94</td><td class="text-muted">13.44</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">4.667</td><td class="text-muted">16.167</td><td class="text-muted">75.44</td><td class="text-muted">21.78</td></tr>
              <tr class="table-warning"><td colspan="3"><strong>Сумма</strong></td><td><strong>∑ = 272.66</strong></td><td><strong>∑ = 88.65</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$a = \\frac{272.66}{88.65} \\approx 3.075$$</p>
        <p class="card-text mt-2 text-muted">💡 Угловой коэффициент (наклон) ≈ <strong>3.075</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          При увеличении рекламного бюджета на <strong>1 тыс. руб.</strong> продажи увеличиваются в среднем на <strong>3.075 тыс. ед.</strong>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=SLOPE(известные_y, известные_x)</code>
        </div>
        <p class="card-text"><strong>Важно!</strong> Порядок аргументов: сначала y, потом x!</p>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=SLOPE(D2:D13, B2:B13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=НАКЛОН(D2:D13; B2:B13)</code> — русскоязычная версия</li>
        </ul>
        <div class="alert alert-light mt-2">
          <strong>📌 Сравнение с FORECAST.LINEAR:</strong><br>
          <code>=SLOPE(y, x)</code> — только наклон<br>
          <code>=INTERCEPT(y, x)</code> — только свободный член<br>
          <code>=FORECAST.LINEAR(x_new, y, x)</code> — прогноз для нового x<br>
          <code>=TREND(y, x, x_new)</code> — альтернатива прогнозу
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь SLOPE с другими статистическими показателями</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Наклон регрессии можно выразить через корреляцию и стандартные отклонения:</p>
        <p class="card-text text-center">$$a = r \\cdot \\frac{\\sigma_y}{\\sigma_x}$$</p>
        
        <p class="card-text mt-2">Из ранее полученных значений:</p>
        <ul>
          <li>$r = \\text{CORREL}(B2:B13, D2:D13) \\approx 0.985$</li>
          <li>$\\sigma_y = \\text{STDEV.P}(D2:D13) \\approx 8.48$</li>
          <li>$\\sigma_x = \\text{STDEV.P}(B2:B13) \\approx 2.87$</li>
        </ul>
        
        <p class="card-text">$$a = 0.985 \\times \\frac{8.48}{2.87} = 0.985 \\times 2.95 \\approx 2.91 \\text{ (небольшое расхождение из-за округлений)}$$</p>
        
        <div class="alert alert-info mt-2">
          <strong>📌 Вывод:</strong> Чем сильнее корреляция и чем больше разброс y относительно x, тем круче наклон.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение наклонов для разных зависимостей</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Зависимость</th><th>Формула</th><th>Наклон (a)</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Продажи от рекламы</strong> (Y ~ X1)</strong></td>
                <td><code>=SLOPE(D2:D13, B2:B13)</code></td>
                <td><strong>≈ 3.075</strong></td>
                <td>+1 тыс. руб. рекламы → +3.075 тыс. ед. продаж</strong></code></td>
               </tr>
              <tr class="table-success">
                <td>Продажи от звонков</strong> (Y ~ X2)</strong></td>
                <td><code>=SLOPE(D2:D13, C2:C13)</code></td>
                <td>≈ ?</strong></code> <span class="text-muted">(предлагаем рассчитать)</span></td>
                <td>+1 звонок → +? тыс. ед. продаж</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Звонки от рекламы</strong> (X2 ~ X1)</strong></td>
                <td><code>=SLOPE(C2:C13, B2:B13)</code></td>
                <td>≈ ?</strong></code> <span class="text-muted">(предлагаем рассчитать)</span></td>
                <td>+1 тыс. руб. рекламы → +? звонков</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практический пример использования наклона</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейс:</strong><br>
          Компания планирует увеличить рекламный бюджет на 3 тыс. руб. (с 15 до 18 тыс. руб.). На сколько ожидаемо вырастут продажи?
        </div>
        <p class="card-text">$$\Delta \\text{Продажи} = a \\times \\Delta \\text{Реклама} = 3.075 \\times 3 \\approx 9.225 \\text{ тыс. ед.}$$</p>
        <p class="card-text">При рекламе 15 тыс. руб. продажи ≈ 72 тыс. ед. (октябрь). Ожидаемые продажи при 18 тыс. руб.: $72 + 9.225 \\approx 81.2$ тыс. ед.</p>
        <div class="alert alert-light mt-2">
          <strong>📌 ROI (Return on Investment):</strong><br>
          Дополнительные продажи: 9.225 тыс. ед.<br>
          Дополнительный бюджет: 3 тыс. руб.<br>
          Если маржинальность продаж составляет, например, 5 тыс. руб./ед., то дополнительная прибыль: $9.225 \\times 5 = 46.125$ тыс. руб.<br>
          ROI = (46.125 - 3) / 3 ≈ 1437% — очень эффективно!
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=SLOPE(D2:D13, B2:B13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=НАКЛОН(D2:D13; B2:B13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение углового коэффициента в бизнесе:</b><br>
      • <strong>ROI-анализ</strong> — оценка отдачи от каждого рубля, вложенного в рекламу<br>
      • <strong>Бюджетирование</strong> — расчёт ожидаемого роста продаж при увеличении бюджета<br>
      • <strong>Сравнение каналов</strong> — какой маркетинговый канал даёт больший прирост на единицу затрат<br>
      • <strong>Точка безубыточности</strong> — расчёт минимального уровня рекламы для достижения целевых продаж<br>
      • <strong>Эластичность</strong> — коэффициент эластичности = a × (x̄ / ȳ) = 3.075 × (12.33/63.83) ≈ 0.59 (спрос неэластичен)
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • Наклон описывает <strong>среднее</strong> изменение. Фактические изменения могут отличаться.<br>
      • Наклон чувствителен к выбросам. Один аномальный месяц может сильно исказить результат.<br>
      • Наклон не говорит о причинности — только о статистической связи.<br>
      • Наклон имеет единицы измерения: (единицы y)/(единицы x). В нашем случае: (тыс. ед. продаж)/(тыс. руб. рекламы).
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте наклон для зависимости продаж от звонков: <code>=SLOPE(D2:D13, C2:C13)</code>. Что означает полученное число?<br>
      2. Рассчитайте наклон для зависимости звонков от рекламы: <code>=SLOPE(C2:C13, B2:B13)</code>. На сколько звонков увеличивается при росте рекламы на 1 тыс. руб.?<br>
      3. Используя полученный наклон (3.075), рассчитайте, на сколько нужно увеличить рекламный бюджет, чтобы продажи выросли на 50 тыс. ед.<br>
      4. Сравните наклоны для продаж от рекламы и продаж от звонков. Какой фактор эффективнее? Учитывайте разные единицы измерения!<br>
      5. Если бы наклон был отрицательным, что бы это означало для бизнеса? Приведите пример такой ситуации.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics534",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Угловой коэффициент регрессии (наклон) для зависимости продаж от звонков",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета углового коэффициента (наклона) линейной регрессии, показывающего, на сколько единиц изменяются продажи при увеличении количества звонков клиентам на 1 звонок",
  "answer": "SLOPE(D2:D13,C2:C13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт углового коэффициента регрессии (SLOPE): продажи от звонков</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Угловой коэффициент (наклон) линейной регрессии, показывающий, на сколько единиц (тыс. ед.) изменяются продажи (Y) при увеличении количества звонков клиентам (X2) на <strong>1 звонок</strong>.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание углового коэффициента (наклона)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Угловой коэффициент (наклон) $a$ в уравнении линейной регрессии вычисляется по формуле:</p>
        <p class="card-text text-center">$$a = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}$$</p>
        <p class="card-text">где $x_i$ — значения независимой переменной (звонки), $y_i$ — зависимой (продажи).</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация наклона:</strong><br>
          • <strong>a > 0</strong> — положительная связь: чем больше звонков, тем выше продажи<br>
          • <strong>a < 0</strong> — отрицательная связь: чем больше звонков, тем ниже продажи (неэффективные звонки)<br>
          • <strong>Величина a</strong> показывает, на сколько тыс. ед. увеличиваются продажи при каждом дополнительном звонке
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Звонки клиентам (X2): диапазон <strong>C2:C13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Звонки (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">20</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">22</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">18</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">25</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">27</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">21</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">29</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">30</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">26</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">32</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">34</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">36</td><td class="text-muted">80</td></tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{20+22+18+25+27+21+29+30+26+32+34+36}{12} = \\frac{320}{12} \\approx 26.667$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Вычисляем отклонения:</p>
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>x - x̄</th><th>y - ȳ</th><th>(x - x̄)(y - ȳ)</th><th>(x - x̄)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">-6.667</td><td class="text-muted">-11.833</td><td class="text-muted">78.89</td><td class="text-muted">44.44</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">-4.667</td><td class="text-muted">-8.833</td><td class="text-muted">41.22</td><td class="text-muted">21.78</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">-8.667</td><td class="text-muted">-10.833</td><td class="text-muted">93.89</td><td class="text-muted">75.11</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">-1.667</td><td class="text-muted">-3.833</td><td class="text-muted">6.39</td><td class="text-muted">2.78</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">0.333</td><td class="text-muted">-1.833</td><td class="text-muted">-0.61</td><td class="text-muted">0.11</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">-5.667</td><td class="text-muted">-5.833</td><td class="text-muted">33.06</td><td class="text-muted">32.11</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">2.333</td><td class="text-muted">1.167</td><td class="text-muted">2.72</td><td class="text-muted">5.44</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">3.333</td><td class="text-muted">4.167</td><td class="text-muted">13.89</td><td class="text-muted">11.11</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">-0.667</td><td class="text-muted">2.167</td><td class="text-muted">-1.45</td><td class="text-muted">0.44</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">5.333</td><td class="text-muted">8.167</td><td class="text-muted">43.56</td><td class="text-muted">28.44</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">7.333</td><td class="text-muted">11.167</td><td class="text-muted">81.89</td><td class="text-muted">53.78</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">9.333</td><td class="text-muted">16.167</td><td class="text-muted">150.89</td><td class="text-muted">87.11</td></tr>
              <tr class="table-warning"><td colspan="3"><strong>Сумма</strong></td><td><strong>∑ = 544.24</strong></td><td><strong>∑ = 362.65</strong></td></tr>
            </tbody>
           </table>
        </div>
        
        <p class="card-text mt-2">$$a = \\frac{544.24}{362.65} \\approx 1.501$$</p>
        <p class="card-text mt-2 text-muted">💡 Угловой коэффициент (наклон) ≈ <strong>1.501</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          При увеличении количества звонков клиентам на <strong>1 звонок</strong> продажи увеличиваются в среднем на <strong>1.501 тыс. ед.</strong> (≈ 1501 единицу продукции).
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=SLOPE(известные_y, известные_x)</code>
        </div>
        <p class="card-text"><strong>Важно!</strong> Порядок аргументов: сначала y (продажи), потом x (звонки)!</p>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=SLOPE(D2:D13, C2:C13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=НАКЛОН(D2:D13; C2:C13)</code> — русскоязычная версия</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение наклонов: реклама vs звонки</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Зависимость</th><th>Формула</th><th>Наклон (a)</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Продажи от рекламы</strong> (Y ~ X1)</strong></td>
                <td><code>=SLOPE(D2:D13, B2:B13)</code></td>
                <td>≈ 3.075</strong> (тыс. ед./тыс. руб.)</strong></td>
                <td>+1 тыс. руб. рекламы → +3.075 тыс. ед. продаж</strong></td>
               </tr>
              <tr class="table-success">
                <td><strong>Продажи от звонков</strong> (Y ~ X2)</strong></td>
                <td><code>=SLOPE(D2:D13, C2:C13)</code></td>
                <td><strong>≈ 1.501</strong> (тыс. ед./звонок)</strong></td>
                <td><strong>+1 звонок → +1.501 тыс. ед. продаж</strong></strong></td>
               </tr>
            </tbody>
           </table>
        </div>
        
        <div class="alert alert-info mt-2">
          <strong>📌 Важно!</strong> Наклоны имеют РАЗНЫЕ единицы измерения, поэтому их нельзя напрямую сравнивать!<br>
          • Наклон для рекламы: (тыс. ед. продаж) / (тыс. руб. рекламы)<br>
          • Наклон для звонков: (тыс. ед. продаж) / (звонок)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Стандартизированные коэффициенты (бета-коэффициенты)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Для сравнения силы влияния факторов с разными единицами измерения используют стандартизированные коэффициенты (бета):</p>
        <p class="card-text text-center">$$\\beta = a \\times \\frac{\\sigma_x}{\\sigma_y}$$</p>
        
        <p class="card-text mt-2">Рассчитаем для обоих факторов:</p>
        <ul>
          <li>$\\sigma_y = \\text{STDEV.P}(D2:D13) \\approx 8.48$</li>
          <li>$\\sigma_{x1} = \\text{STDEV.P}(B2:B13) \\approx 2.87$ (реклама)</li>
          <li>$\\sigma_{x2} = \\text{STDEV.P}(C2:C13) \\approx 5.51$ (звонки)</li>
        </ul>
        
        <p class="card-text">$$\\beta_{реклама} = 3.075 \\times \\frac{2.87}{8.48} = 3.075 \\times 0.338 \\approx 1.04$$</p>
        <p class="card-text">$$\\beta_{звонки} = 1.501 \\times \\frac{5.51}{8.48} = 1.501 \\times 0.650 \\approx 0.976$$</p>
        
        <div class="alert alert-success">
          <strong>📌 Вывод:</strong> Оба фактора имеют очень сильное влияние (бета близки к 1). Реклама имеет чуть больший стандартизированный коэффициент (1.04 > 0.976), но разница незначительна.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практический пример использования наклона (звонки → продажи)</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейс:</strong><br>
          Отдел продаж планирует увеличить активность: каждый менеджер должен делать на 5 звонков в день больше. В отделе 4 менеджера, 20 рабочих дней в месяце.
        </div>
        <p class="card-text">Общее увеличение звонков за месяц: $5 \\times 4 \\times 20 = 400$ звонков.</p>
        <p class="card-text">Ожидаемый рост продаж: $\\Delta \\text{Продажи} = a \\times \\Delta \\text{Звонки} = 1.501 \\times 400 \\approx 600.4$ тыс. ед.</p>
        <p class="card-text">Если средняя цена единицы продукции 2 тыс. руб., то дополнительная выручка: $600.4 \\times 2 \\approx 1200.8$ тыс. руб.</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Увеличение звонков на 400 в месяц может принести дополнительную выручку около 1.2 млн руб.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь SLOPE с корреляцией и стандартными отклонениями</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Наклон регрессии можно выразить через корреляцию и стандартные отклонения:</p>
        <p class="card-text text-center">$$a = r \\cdot \\frac{\\sigma_y}{\\sigma_x}$$</p>
        
        <p class="card-text mt-2">Проверим:</p>
        <ul>
          <li>$r = \\text{CORREL}(C2:C13, D2:D13) \\approx 0.972$</li>
          <li>$\\sigma_y \\approx 8.48$</li>
          <li>$\\sigma_x \\approx 5.51$</li>
        </ul>
        <p class="card-text">$$a = 0.972 \\times \\frac{8.48}{5.51} = 0.972 \\times 1.539 \\approx 1.496$$</p>
        <p class="card-text text-muted">(Небольшое расхождение с 1.501 из-за округлений)</p>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=SLOPE(D2:D13, C2:C13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=НАКЛОН(D2:D13; C2:C13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение наклона для звонков в бизнесе:</b><br>
      • <strong>KPI для отдела продаж</strong> — зная наклон, можно устанавливать планы по звонкам для достижения целевых продаж<br>
      • <strong>Оценка эффективности менеджеров</strong> — сравнение фактической конверсии с нормативной (1.501 тыс. ед./звонок)<br>
      • <strong>Планирование штата</strong> — расчёт необходимого количества звонков и, соответственно, менеджеров<br>
      • <strong>Бюджетирование времени</strong> — если известно, сколько времени занимает один звонок, можно планировать рабочее время<br>
      • <strong>Сравнение каналов</strong> — оценка, что эффективнее: увеличивать рекламу или нанимать больше операторов
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • Наклон не различает качество звонков — 100 плохих звонков могут дать меньше продаж, чем 10 хороших<br>
      • Наклон описывает <strong>среднее</strong> изменение, но фактическая конверсия может сильно варьироваться<br>
      • Существует эффект насыщения — после определённого количества звонков каждый следующий может быть менее эффективным<br>
      • Наклон не учитывает сезонность и другие факторы, влияющие на продажи
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте свободный член (пересечение) для этой зависимости: <code>=INTERCEPT(D2:D13, C2:C13)</code>. Что он означает?<br>
      2. Используя наклон (1.501) и пересечение, напишите уравнение регрессии и предскажите продажи при 40 звонках.<br>
      3. Рассчитайте, сколько звонков нужно сделать, чтобы достичь продаж 100 тыс. ед.<br>
      4. Если менеджер делает 25 звонков в день (22 рабочих дня), сколько продаж он должен принести по модели?<br>
      5. Сравните бета-коэффициенты рекламы и звонков. Какой фактор сильнее влияет на продажи с поправкой на масштаб?<br>
      6. Что означает отрицательный наклон в реальном бизнесе? Приведите пример, когда увеличение звонков может снижать продажи.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics535",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Свободный член регрессии (пересечение) для зависимости продаж от рекламы",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета свободного члена (пересечения с осью Y) линейной регрессии, показывающего ожидаемый уровень продаж при нулевом рекламном бюджете",
  "answer": "INTERCEPT(D2:D13,B2:B13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт свободного члена регрессии (INTERCEPT): продажи от рекламы</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Свободный член (пересечение с осью Y) линейной регрессии, показывающий ожидаемый уровень продаж (Y) при нулевом рекламном бюджете (X1 = 0).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание свободного члена (пересечения)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Свободный член $b$ в уравнении линейной регрессии вычисляется по формуле:</p>
        <p class="card-text text-center">$$b = \\bar{y} - a \\cdot \\bar{x}$$</p>
        <p class="card-text">где $\\bar{x}$ и $\\bar{y}$ — средние значения переменных, $a$ — угловой коэффициент (наклон).</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Уравнение регрессии:</strong>
          <p class="text-center mb-0">$$y = a \\cdot x + b$$</p>
          <ul class="mt-2 mb-0">
            <li><strong>a (slope)</strong> — наклон, показывает изменение y при изменении x на 1</li>
            <li><strong>b (intercept)</strong> — пересечение, значение y при x = 0</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Рекламный бюджет (X1): диапазон <strong>B2:B13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Реклама (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">8</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">9</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">10</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">11</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">12</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">10</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">13</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">14</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">13</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">15</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">16</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">17</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{148}{12} \\approx 12.333$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Угловой коэффициент (из предыдущего расчёта):</p>
        <p class="card-text">$$a = \\text{SLOPE}(D2:D13, B2:B13) \\approx 3.075$$</p>
        
        <p class="card-text mt-2">Свободный член:</p>
        <p class="card-text">$$b = \\bar{y} - a \\cdot \\bar{x} = 63.833 - 3.075 \\times 12.333$$</p>
        <p class="card-text">$$b = 63.833 - 37.92 \\approx 25.91$$</p>
        
        <p class="card-text mt-2 text-muted">💡 Свободный член (пересечение) ≈ <strong>25.91</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          При нулевом рекламном бюджете ожидаемый уровень продаж составит около <strong>25.91 тыс. ед.</strong> Это можно интерпретировать как «базовые продажи» за счёт других факторов (узнаваемость бренда, сарафанное радио, постоянные клиенты и т.д.).
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=INTERCEPT(известные_y, известные_x)</code>
        </div>
        <p class="card-text"><strong>Важно!</strong> Порядок аргументов: сначала y (продажи), потом x (реклама)!</p>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=INTERCEPT(D2:D13, B2:B13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=ОТРЕЗОК(D2:D13; B2:B13)</code> — русскоязычная версия</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Полное уравнение регрессии</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info text-center">
          <strong>$$\text{Продажи} = 3.075 \times \text{Реклама} + 25.91$$</strong>
        </div>
        
        <p class="card-text mt-2">Проверка уравнения на известных точках:</p>
        <ul>
          <li>При рекламе = 8 (январь): $3.075 \times 8 + 25.91 = 24.6 + 25.91 = 50.51$ (факт: 52) — погрешность ≈ 1.49</li>
          <li>При рекламе = 17 (декабрь): $3.075 \times 17 + 25.91 = 52.28 + 25.91 = 78.19$ (факт: 80) — погрешность ≈ 1.81</li>
        </ul>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Качество модели:</strong> R² = 0.97 означает, что модель объясняет 97% вариации продаж. Ошибки небольшие.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение пересечений: реклама vs звонки</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Зависимость</th><th>Формула</th><th>Пересечение (b)</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Продажи от рекламы</strong> (Y ~ X1)</strong></td>
                <td><code>=INTERCEPT(D2:D13, B2:B13)</code></td>
                <td><strong>≈ 25.91</strong></strong></td>
                <td>Продажи при нулевой рекламе: ≈ 25.9 тыс. ед.</strong></td>
               </tr>
              <tr class="table-success">
                <td><strong>Продажи от звонков</strong> (Y ~ X2)</strong></td>
                <td><code>=INTERCEPT(D2:D13, C2:C13)</code></strong> (предлагаем рассчитать)</strong></td>
                <td>≈ ?</strong></strong></td>
                <td>Продажи при нуле звонков: ? тыс. ед.</strong> (вероятно, отрицательное)</strong></td>
               </tr>
            </tbody>
          </table>
        </div>
        
        <div class="alert alert-warning mt-2">
          <strong>⚠️ Важно!</strong> Пересечение для зависимости продаж от звонков, скорее всего, будет отрицательным, так как при нуле звонков продажи не могут быть отрицательными. Это сигнал о том, что линейная модель плохо описывает данные при малых значениях x (экстраполяция за пределы данных опасна!).
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: линия регрессии и пересечение</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 11px;">
Продажи (Y)
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
  45 |
  40 |
  35 |
  30 |  ● (пересечение: 25.91 при x=0)
  25 |  ●
     |________________________________________________
       0   2   4   6   8   10  12  14  16  18
                    Рекламный бюджет (X1)

● — точка пересечения (0; 25.91) — экстраполяция за пределы данных
● — фактические данные (x от 8 до 17)
⎯ — линия регрессии (y = 3.075x + 25.91)
          </pre>
        </div>
        <p class="card-text mt-2">Точка пересечения (0; 25.91) находится далеко слева от фактических данных (x минимальное = 8). Это <strong>экстраполяция</strong>, и к ней нужно относиться с осторожностью.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практический пример использования пересечения</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейс:</strong><br>
          Компания хочет понять, какой объём продаж они получили бы даже без рекламы, чтобы оценить эффективность рекламных вложений.
        </div>
        <p class="card-text">Согласно модели, базовые продажи (без рекламы) составляют ≈ 25.91 тыс. ед.</p>
        <p class="card-text">Фактические продажи в декабре (при рекламе 17): 80 тыс. ед.</p>
        <p class="card-text">Прирост продаж за счёт рекламы: $80 - 25.91 = 54.09$ тыс. ед.</p>
        <p class="card-text">Рекламный бюджет в декабре: 17 тыс. руб.</p>
        <p class="card-text"><strong>ROI рекламы:</strong> $54.09 / 17 \approx 3.18$ руб. продаж на 1 руб. рекламы (без учёта себестоимости).</p>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Каждый рубль, вложенный в рекламу, приносит около 3.18 руб. дополнительных продаж.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь INTERCEPT с другими показателями</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Свободный член можно выразить через средние значения и наклон:</p>
        <p class="card-text text-center">$$b = \bar{y} - a \cdot \bar{x}$$</p>
        
        <p class="card-text mt-2">Альтернативный способ в Excel — через уравнение регрессии:</p>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Компонент</th><th>Формула</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Наклон (a)</strong></code></td>
                <td><code>=SLOPE(D2:D13, B2:B13)</code></td>
                <td>≈ 3.075</strong></code></td>
               </tr>
              <tr class="table-info">
                <td>Пересечение (b)</strong></code></td>
                <td><code>=INTERCEPT(D2:D13, B2:B13)</code></td>
                <td>≈ 25.91</strong></code></td>
               </tr>
              <tr class="table-success">
                <td>Прогноз при x=20</strong></code></td>
                <td><code>=FORECAST.LINEAR(20, D2:D13, B2:B13)</code> <br> или <code>=3.075*20 + 25.91</code></td>
                <td>≈ 87.41</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=INTERCEPT(D2:D13, B2:B13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=ОТРЕЗОК(D2:D13; B2:B13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение свободного члена в бизнесе:</b><br>
      • <strong>Оценка базового спроса</strong> — продажи без маркетинговой поддержки<br>
      • <strong>Расчёт дополнительного эффекта от рекламы</strong> — фактические продажи минус базовые<br>
      • <strong>ROI-анализ</strong> — оценка окупаемости маркетинговых вложений<br>
      • <strong>Планирование</strong> — определение минимального объёма продаж в кризисных ситуациях (при сокращении бюджета)<br>
      • <strong>Бенчмаркинг</strong> — сравнение базовых продаж с конкурентами
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • <strong>Экстраполяция опасна!</strong> Значение x=0 находится далеко за пределами наблюдаемых данных (8–17). Модель может быть нелинейной при малых x.<br>
      • Пересечение может быть <strong>отрицательным</strong> — это не всегда имеет реальный смысл (например, продажи не могут быть отрицательными). Это сигнал о том, что линейная модель неадекватна для экстраполяции.<br>
      • Пересечение <strong>чувствительно к выбросам</strong> — один аномальный месяц может сильно изменить значение.<br>
      • Всегда проверяйте <strong>статистическую значимость</strong> пересечения (p-value, t-статистика) через пакет анализа.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте свободный член для зависимости продаж от звонков: <code>=INTERCEPT(D2:D13, C2:C13)</code>. Почему он получился отрицательным? Что это означает?<br>
      2. Используя уравнение регрессии, предскажите продажи при рекламном бюджете 5 тыс. руб. Насколько можно доверять этому прогнозу?<br>
      3. Если компания сократит рекламный бюджет до нуля, будут ли продажи действительно соответствовать значению 25.91? Почему?<br>
      4. Постройте график с линией регрессии и отметьте на нём точку пересечения. Почему она не попадает в область данных?<br>
      5. Как изменится пересечение, если убрать из данных декабрь (самый высокий месяц)? Проверьте.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics536",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Коэффициент детерминации R² для зависимости продаж от рекламы",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента детерминации (R²), показывающего, какой процент вариации продаж объясняется изменением рекламного бюджета",
  "answer": "RSQ(D2:D13,B2:B13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента детерминации R² (RSQ): продажи от рекламы</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент детерминации (R²) — показатель качества регрессионной модели, показывающий, какой процент вариации зависимой переменной (продажи) объясняется изменением независимой переменной (рекламный бюджет).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание коэффициента детерминации R²</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент детерминации R² — это квадрат коэффициента корреляции Пирсона:</p>
        <p class="card-text text-center">$$R^2 = r^2$$</p>
        
        <p class="card-text mt-2">Альтернативная формула через суммы квадратов:</p>
        <p class="card-text text-center">$$R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}} = \\frac{\\text{SS}_{\\text{reg}}}{\\text{SS}_{\\text{tot}}}$$</p>
        <p class="card-text">где SS<sub>tot</sub> — общая сумма квадратов, SS<sub>res</sub> — остаточная сумма квадратов, SS<sub>reg</sub> — регрессионная сумма квадратов.</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация R²:</strong><br>
          • <strong>R² = 1</strong> — модель идеально объясняет все вариации<br>
          • <strong>R² = 0.97</strong> — 97% вариации зависимой переменной объясняется моделью<br>
          • <strong>R² = 0</strong> — модель не объясняет вариацию<br>
          • <strong>R² = 0.7</strong> — 70% вариации объясняется (хорошая модель)
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Рекламный бюджет (X1): диапазон <strong>B2:B13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Реклама (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">8</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">9</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">10</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">11</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">12</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">10</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">13</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">14</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">13</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">15</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">16</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">17</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{148}{12} \\approx 12.333$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Уравнение регрессии (из предыдущих расчётов):</p>
        <p class="card-text">$$\\hat{y} = 3.075 \\cdot x + 25.91$$</p>
        
        <p class="card-text mt-2">Вычисляем предсказанные значения и остатки:</p>
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>y (факт)</th><th>ŷ (прогноз)</th><th>y - ŷ</th><th>(y - ŷ)²</th><th>(y - ȳ)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td>52</td><td>50.51</td><td>1.49</td><td>2.22</td><td>140.03</td></tr>
              <tr><td class="text-muted">февраль</td><td>55</td><td>53.59</td><td>1.41</td><td>1.99</td><td>78.03</td></tr>
              <tr><td class="text-muted">март</td><td>53</td><td>56.66</td><td>-3.66</td><td>13.40</td><td>117.36</td></tr>
              <tr><td class="text-muted">апрель</td><td>60</td><td>59.74</td><td>0.26</td><td>0.07</td><td>14.69</td></tr>
              <tr><td class="text-muted">май</td><td>62</td><td>62.81</td><td>-0.81</td><td>0.66</td><td>3.36</td></tr>
              <tr><td class="text-muted">июнь</td><td>58</td><td>56.66</td><td>1.34</td><td>1.80</td><td>34.03</td></tr>
              <tr><td class="text-muted">июль</td><td>65</td><td>65.89</td><td>-0.89</td><td>0.79</td><td>1.36</td></tr>
              <tr><td class="text-muted">август</td><td>68</td><td>68.96</td><td>-0.96</td><td>0.92</td><td>17.36</td></tr>
              <tr><td class="text-muted">сентябрь</td><td>66</td><td>65.89</td><td>0.11</td><td>0.01</td><td>4.70</td></tr>
              <tr><td class="text-muted">октябрь</td><td>72</td><td>72.04</td><td>-0.04</td><td>0.00</td><td>66.70</td></tr>
              <tr><td class="text-muted">ноябрь</td><td>75</td><td>75.11</td><td>-0.11</td><td>0.01</td><td>124.70</td></tr>
              <tr><td class="text-muted">декабрь</td><td>80</td><td>78.19</td><td>1.81</td><td>3.28</td><td>261.36</td></tr>
              <tr class="table-warning"><td colspan="4"><strong>Сумма</strong></td><td><strong>SS_res = 25.15</strong></td><td><strong>SS_tot = 863.68</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}} = 1 - \\frac{25.15}{863.68} = 1 - 0.0291 \\approx 0.9709$$</p>
        
        <p class="card-text mt-2">Или через корреляцию:</p>
        <p class="card-text">$$r = \\text{CORREL}(B2:B13, D2:D13) \\approx 0.985$$</p>
        <p class="card-text">$$R^2 = 0.985^2 \\approx 0.970$$</p>
        
        <p class="card-text mt-2 text-muted">💡 Коэффициент детерминации R² ≈ <strong>0.970 (или 97.0%)</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          97.0% вариации продаж объясняется изменением рекламного бюджета. Это исключительно высокий показатель, означающий, что модель почти идеально описывает данные.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=RSQ(известные_y, известные_x)</code>
        </div>
        <p class="card-text"><strong>Важно!</strong> Порядок аргументов: сначала y (продажи), потом x (реклама)!</p>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=RSQ(D2:D13, B2:B13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=КВПИРСОН(D2:D13; B2:B13)</code> — русскоязычная версия (КВадрат ПИРСОНа)</li>
          <li><code>=CORREL(D2:D13, B2:B13)^2</code> — через квадрат корреляции</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Шкала качества модели по R²</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Значение R²</th><th>Качество модели</th><th>Интерпретация</th></tr>
            </thead>
            <tbody>
              <tr class="table-danger"><td>< 0.3</td><td>Очень низкое</td><td>Модель почти ничего не объясняет</td></tr>
              <tr class="table-warning"><td>0.3 - 0.5</td><td>Низкое</td><td>Модель объясняет менее половины вариации</td></tr>
              <tr class="table-info"><td>0.5 - 0.7</td><td>Среднее</td><td>Модель приемлема для социальных наук</td></tr>
              <tr class="table-secondary"><td>0.7 - 0.9</td><td>Высокое</td><td>Хорошая модель для большинства задач</td></tr>
              <tr class="table-success"><td>0.9 - 1.0</td><td>Очень высокое</td><td>Отличная модель, почти идеальное соответствие</td></tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-success mt-2">
          <strong>📌 Наш результат: R² = 0.970 → ОЧЕНЬ ВЫСОКОЕ качество модели</strong>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение R² для разных зависимостей</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Зависимость</th><th>Формула</th><th>R²</th><th>Качество</th></tr>
            </thead>
            <tbody>
              <tr class="table-success">
                <td><strong>Продажи от рекламы</strong> (Y ~ X1)</strong></td>
                <td><code>=RSQ(D2:D13, B2:B13)</code></td>
                <td><strong>≈ 0.970</strong> (97.0%)</strong></td>
                <td>Отличное</strong></td>
               </tr>
              <tr class="table-info">
                <td><strong>Продажи от звонков</strong> (Y ~ X2)</strong></td>
                <td><code>=RSQ(D2:D13, C2:C13)</code></strong> (предлагаем рассчитать)</strong></td>
                <td>≈ 0.945</strong> (94.5%)</strong> (из ранее рассчитанной корреляции 0.972²)</strong></td>
                <td>Отличное</strong> (чуть ниже рекламы)</strong></td>
               </tr>
              <tr class="table-secondary">
                <td><strong>Звонки от рекламы</strong> (X2 ~ X1)</strong></td>
                <td><code>=RSQ(C2:C13, B2:B13)</code></strong> (предлагаем рассчитать)</strong></td>
                <td>≈ ?</strong></strong></td>
                <td>Предлагаем рассчитать</strong></td>
               </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-info mt-2">
          <strong>📌 Вывод:</strong> Реклама объясняет 97.0% вариации продаж, звонки — 94.5%. Оба фактора исключительно хорошо предсказывают продажи, но реклама немного точнее.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: качество модели</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 11px;">
Продажи (Y) — факт vs прогноз
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
     |________________________________________________
       50   55   60   65   70   75   80
               Прогноз (ŷ)

● — точки почти лежат на диагонали → отличное качество модели
⎯ — диагональ (y = ŷ) — идеальное предсказание
          </pre>
        </div>
        <p class="card-text mt-2">Точки на графике «факт vs прогноз» почти лежат на диагонали, что визуально подтверждает высокое значение R².</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практический пример использования R²</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейс:</strong><br>
          Финансовый директор сомневается, стоит ли использовать модель прогнозирования продаж на основе рекламного бюджета.
        </div>
        <p class="card-text">R² = 0.970 означает, что:</p>
        <ul>
          <li>Модель объясняет 97% колебаний продаж — это очень высокая точность</li>
          <li>Только 3% вариации продаж остаются необъяснёнными (влияние сезонности, действий конкурентов, случайных факторов)</li>
          <li>Модель пригодна для бюджетирования и планирования</li>
        </ul>
        <div class="alert alert-light mt-2">
          <strong>📌 Вывод:</strong> Модель можно использовать для оперативного прогнозирования продаж при изменении рекламного бюджета.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь R² со стандартной ошибкой регрессии</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Стандартная ошибка регрессии (STEYX) показывает среднее отклонение фактических значений от предсказанных:</p>
        <p class="card-text text-center">$$SE = \\sqrt{\\frac{\\text{SS}_{\\text{res}}}{n-2}}$$</p>
        
        <p class="card-text mt-2">Для нашей модели:</p>
        <p class="card-text">$$SE = \\sqrt{\\frac{25.15}{10}} = \\sqrt{2.515} \\approx 1.59 \\text{ тыс. ед.}$$</p>
        <p class="card-text">Это означает, что типичная ошибка прогноза составляет около 1.59 тыс. ед. (что при средних продажах 63.83 тыс. ед. составляет около 2.5% — очень хорошая точность).</p>
        
        <div class="alert alert-info mt-2">
          <strong>📌 Формула в Excel:</strong> <code>=STEYX(D2:D13, B2:B13)</code> → ≈ 1.59
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=RSQ(D2:D13, B2:B13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=КВПИРСОН(D2:D13; B2:B13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение R² в бизнесе:</b><br>
      • <strong>Оценка качества модели</strong> — насколько можно доверять прогнозам<br>
      • <strong>Сравнение факторов</strong> — какой фактор (реклама, звонки, цена) лучше объясняет продажи<br>
      • <strong>Обоснование инвестиций</strong> — высокий R² доказывает эффективность рекламы перед руководством<br>
      • <strong>Выбор модели</strong> — при добавлении новых факторов R² должен расти<br>
      • <strong>Риск-менеджмент</strong> — низкий R² означает, что прогнозы ненадёжны
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • <strong>Высокий R² ≠ причинно-следственная связь</strong>. Корреляция не означает причинность!<br>
      • <strong>R² всегда растёт при добавлении переменных</strong>. Используйте скорректированный R² для сравнения моделей с разным числом факторов.<br>
      • <strong>R² не проверяет линейность</strong>. Высокий R² возможен и при нелинейной связи, если подобрана неправильная модель.<br>
      • <strong>R² чувствителен к выбросам</strong>. Один аномальный месяц может сильно исказить результат.<br>
      • <strong>Экстраполяция за пределы данных опасна</strong>, даже при высоком R².
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте R² для зависимости продаж от звонков: <code>=RSQ(D2:D13, C2:C13)</code>. Сравните с R² для рекламы.<br>
      2. Рассчитайте R² для зависимости звонков от рекламы: <code>=RSQ(C2:C13, B2:B13)</code>. Что означает этот коэффициент?<br>
      3. Если бы R² был равен 0.45, как бы вы интерпретировали этот результат для бизнеса?<br>
      4. Рассчитайте скорректированный R² (Adjusted R²) по формуле: $R^2_{adj} = 1 - (1-R^2) \times \frac{n-1}{n-k-1}$, где k — число факторов.<br>
      5. Как изменится R², если из данных убрать декабрь (самый высокий месяц)? Проверьте.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics537",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Коэффициент детерминации R² для зависимости продаж от звонков",
  "theme": "Регрессионный анализ и прогнозирование",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета коэффициента детерминации (R²), показывающего, какой процент вариации продаж объясняется изменением количества звонков клиентам",
  "answer": "RSQ(D2:D13,C2:C13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт коэффициента детерминации R² (RSQ): продажи от звонков</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Коэффициент детерминации (R²) — показатель качества регрессионной модели, показывающий, какой процент вариации зависимой переменной (продажи) объясняется изменением независимой переменной (количество звонков клиентам).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание коэффициента детерминации R²</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Коэффициент детерминации R² — это квадрат коэффициента корреляции Пирсона:</p>
        <p class="card-text text-center">$$R^2 = r^2$$</p>
        
        <p class="card-text mt-2">Альтернативная формула через суммы квадратов:</p>
        <p class="card-text text-center">$$R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}} = \\frac{\\text{SS}_{\\text{reg}}}{\\text{SS}_{\\text{tot}}}$$</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация R²:</strong><br>
          • <strong>R² = 1</strong> — модель идеально объясняет все вариации<br>
          • <strong>R² = 0.94</strong> — 94% вариации зависимой переменной объясняется моделью<br>
          • <strong>R² = 0</strong> — модель не объясняет вариацию
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Звонки клиентам (X2): диапазон <strong>C2:C13</strong> — независимая переменная (x)</li>
          <li>Продажи (Y): диапазон <strong>D2:D13</strong> — зависимая переменная (y)</li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Звонки (x)</th><th>Продажи (y)</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">20</td><td class="text-muted">52</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">22</td><td class="text-muted">55</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">18</td><td class="text-muted">53</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">25</td><td class="text-muted">60</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">27</td><td class="text-muted">62</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">21</td><td class="text-muted">58</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">29</td><td class="text-muted">65</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">30</td><td class="text-muted">68</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">26</td><td class="text-muted">66</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">32</td><td class="text-muted">72</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">34</td><td class="text-muted">75</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">36</td><td class="text-muted">80</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Средние значения:</p>
        <p class="card-text">$$\\bar{x} = \\frac{320}{12} \\approx 26.667$$</p>
        <p class="card-text">$$\\bar{y} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Коэффициент корреляции (из предыдущего расчёта):</p>
        <p class="card-text">$$r = \\text{CORREL}(C2:C13, D2:D13) \\approx 0.972$$</p>
        
        <p class="card-text mt-2">$$R^2 = r^2 = 0.972^2 \\approx 0.945$$</p>
        
        <p class="card-text mt-2">Альтернативный расчёт через суммы квадратов:</p>
        
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>y (факт)</th><th>ŷ (прогноз)</th><th>y - ŷ</th><th>(y - ŷ)²</th><th>(y - ȳ)²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td>52</td><td>53.69</td><td>-1.69</td><td>2.86</td><td>140.03</td></tr>
              <tr><td class="text-muted">февраль</td><td>55</td><td>55.92</td><td>-0.92</td><td>0.85</td><td>78.03</td></tr>
              <tr><td class="text-muted">март</td><td>53</td><td>51.46</td><td>1.54</td><td>2.37</td><td>117.36</td></tr>
              <tr><td class="text-muted">апрель</td><td>60</td><td>59.99</td><td>0.01</td><td>0.00</td><td>14.69</td></tr>
              <tr><td class="text-muted">май</td><td>62</td><td>62.38</td><td>-0.38</td><td>0.14</td><td>3.36</td></tr>
              <tr><td class="text-muted">июнь</td><td>58</td><td>54.64</td><td>3.36</td><td>11.29</td><td>34.03</td></tr>
              <tr><td class="text-muted">июль</td><td>65</td><td>65.68</td><td>-0.68</td><td>0.46</td><td>1.36</td></tr>
              <tr><td class="text-muted">август</td><td>68</td><td>67.23</td><td>0.77</td><td>0.59</td><td>17.36</td></tr>
              <tr><td class="text-muted">сентябрь</td><td>66</td><td>62.89</td><td>3.11</td><td>9.67</td><td>4.70</td></tr>
              <tr><td class="text-muted">октябрь</td><td>72</td><td>70.86</td><td>1.14</td><td>1.30</td><td>66.70</td></tr>
              <tr><td class="text-muted">ноябрь</td><td>75</td><td>73.93</td><td>1.07</td><td>1.14</td><td>124.70</td></tr>
              <tr><td class="text-muted">декабрь</td><td>80</td><td>77.00</td><td>3.00</td><td>9.00</td><td>261.36</td></tr>
              <tr class="table-warning"><td colspan="4"><strong>Сумма</strong></td><td><strong>SS_res = 39.67</strong></td><td><strong>SS_tot = 863.68</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <p class="card-text mt-2">$$R^2 = 1 - \\frac{39.67}{863.68} = 1 - 0.0459 \\approx 0.954$$</p>
        <p class="card-text text-muted">(Небольшое расхождение с 0.945 из-за округлений в коэффициентах регрессии)</p>
        
        <p class="card-text mt-2 text-muted">💡 Коэффициент детерминации R² ≈ <strong>0.945 (или 94.5%)</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          94.5% вариации продаж объясняется изменением количества звонков клиентам. Это очень высокий показатель качества модели.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=RSQ(известные_y, известные_x)</code>
        </div>
        <p class="card-text"><strong>Важно!</strong> Порядок аргументов: сначала y (продажи), потом x (звонки)!</p>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=RSQ(D2:D13, C2:C13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=КВПИРСОН(D2:D13; C2:C13)</code> — русскоязычная версия</li>
          <li><code>=CORREL(D2:D13, C2:C13)^2</code> — через квадрат корреляции</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение R²: реклама vs звонки</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Зависимость</th><th>Формула</th><th>R²</th><th>Качество</th><th>Рейтинг</th></tr>
            </thead>
            <tbody>
              <tr class="table-success">
                <td><strong>Продажи от рекламы</strong> (Y ~ X1)</strong></td>
                <td><code>=RSQ(D2:D13, B2:B13)</code></td>
                <td><strong>≈ 0.970</strong> (97.0%)</strong></td>
                <td>Отличное</strong></td>
                <td>🥇 1 место</strong></td>
               </tr>
              <tr class="table-info">
                <td><strong>Продажи от звонков</strong> (Y ~ X2)</strong></td>
                <td><code>=RSQ(D2:D13, C2:C13)</code></td>
                <td><strong>≈ 0.945</strong> (94.5%)</strong></td>
                <td>Отличное</strong></td>
                <td>🥈 2 место</strong> (чуть ниже)</strong></td>
               </tr>
              <tr class="table-secondary">
                <td><strong>Звонки от рекламы</strong> (X2 ~ X1)</strong> (предлагаем рассчитать)</strong></td>
                <td><code>=RSQ(C2:C13, B2:B13)</code></td>
                <td>≈ ?</strong></strong></td>
                <td>?</strong></strong></td>
                <td>?</strong></strong></td>
               </tr>
            </tbody>
          </table>
        </div>
        
        <div class="alert alert-info mt-2">
          <strong>📌 Вывод:</strong> Оба фактора отлично объясняют продажи. Реклама (97.0%) даёт чуть более точную модель, чем звонки (94.5%). Разница в 2.5 процентных пункта может быть значима для точного прогнозирования.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: качество модели (факт vs прогноз)</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 11px;">
Продажи (Y) — факт vs прогноз (звонки)
  80 |                                          ●
  75 |                                     ●
  70 |                                ●
  65 |                          ●  ●
  60 |                     ●
  55 |                ●  ●
  50 |           ●
     |________________________________________________
       50   55   60   65   70   75   80
               Прогноз (ŷ)

● — точки близки к диагонали, но разброс чуть больше, чем для рекламы
⎯ — диагональ (y = ŷ) — идеальное предсказание
          </pre>
        </div>
        <p class="card-text mt-2">Точки на графике «факт vs прогноз» близки к диагонали, что визуально подтверждает высокое значение R² = 0.945.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Остаточная дисперсия и стандартная ошибка</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Стандартная ошибка регрессии (STEYX) показывает среднее отклонение фактических значений от предсказанных:</p>
        <p class="card-text text-center">$$SE = \\sqrt{\\frac{\\text{SS}_{\\text{res}}}{n-2}} = \\sqrt{\\frac{39.67}{10}} = \\sqrt{3.967} \\approx 1.99 \\text{ тыс. ед.}$$</p>
        
        <div class="alert alert-light">
          <strong>📌 Сравнение стандартных ошибок:</strong><br>
          • Для модели «продажи от рекламы»: SE ≈ 1.59 тыс. ед.<br>
          • Для модели «продажи от звонков»: SE ≈ 1.99 тыс. ед.<br>
          <br>
          Это означает, что модель на основе рекламы даёт более точные прогнозы (ошибка на 0.4 тыс. ед. меньше).
        </div>
        
        <p class="card-text mt-2">Формула в Excel: <code>=STEYX(D2:D13, C2:C13)</code> → ≈ 1.99</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь R² со стандартным отклонением остатков</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Важное соотношение:</strong><br>
          $$\\sigma_{\\text{остатков}} = \\sigma_y \\cdot \\sqrt{1 - R^2}$$
        </div>
        <p class="card-text">Проверим для модели на основе звонков:</p>
        <p class="card-text">$$\\sigma_y = \\text{STDEV.P}(D2:D13) \\approx 8.48$$</p>
        <p class="card-text">$$\\sigma_{\\text{остатков}} = 8.48 \\times \\sqrt{1 - 0.945} = 8.48 \\times \\sqrt{0.055} = 8.48 \\times 0.235 \\approx 1.99$$</p>
        <p class="card-text">Что совпадает с SE, рассчитанной выше.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практический пример использования R²</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейс:</strong><br>
          Руководитель отдела продаж хочет понять, насколько активность менеджеров (звонки) определяет результат (продажи).
        </div>
        <p class="card-text">R² = 0.945 означает, что:</p>
        <ul>
          <li>94.5% колебаний продаж объясняются количеством звонков</li>
          <li>Только 5.5% вариации продаж связано с другими факторами (качество звонков, сезонность, компетенции менеджеров)</li>
          <li>Модель можно использовать для установления KPI и планов продаж</li>
        </ul>
        <div class="alert alert-light mt-2">
          <strong>📌 Управленческое решение:</strong><br>
          Фокусироваться на увеличении количества звонков — эффективная стратегия, так как этот фактор объясняет почти все изменения продаж.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=RSQ(D2:D13, C2:C13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=КВПИРСОН(D2:D13; C2:C13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Практическое применение R² в управлении продажами:</b><br>
      • <strong>Установление KPI</strong> — зная высокий R², можно обосновать планы по звонкам<br>
      • <strong>Оценка эффективности</strong> — сравнение R² разных отделов или менеджеров<br>
      • <strong>Прогнозирование</strong> — высокий R² даёт уверенность в точности прогнозов<br>
      • <strong>Мотивация персонала</strong> — доказательство, что активность ведёт к результату<br>
      • <strong>Сравнение факторов</strong> — что важнее: количество или качество звонков (R² количества = 94.5%)
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>⚠️ Важные предупреждения:</b><br>
      • <strong>Высокий R² ≠ причинность</strong>. Возможно, и продажи стимулируют больше звонков (обратная причинность).<br>
      • <strong>R² не учитывает качество звонков</strong>. Модель предполагает, что все звонки одинаково эффективны, что не так в реальности.<br>
      • <strong>Эффект насыщения</strong>. При очень большом количестве звонков каждый следующий может быть менее эффективным (нелинейность).<br>
      • <strong>Сезонность</strong>. R² может быть высоким из-за общего тренда, а не реальной зависимости.
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте R² для зависимости звонков от рекламы: <code>=RSQ(C2:C13, B2:B13)</code>. Что означает этот коэффициент?<br>
      2. Почему R² для рекламы (97.0%) выше, чем для звонков (94.5%)? Что это говорит о бизнес-процессах?<br>
      3. Рассчитайте скорректированный R² (Adjusted R²) для обеих моделей: $R^2_{adj} = 1 - (1-R^2) \times \\frac{n-1}{n-2}$<br>
      4. Как изменится R² для звонков, если убрать из данных март (минимальные звонки — 18)? Проверьте.<br>
      5. Какой дополнительный фактор вы предложили бы добавить в модель, чтобы увеличить R² выше 97%?
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics538",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Подсчёт количества месяцев с данными о продажах",
  "theme": "Служебные функции в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для подсчёта количества месяцев, по которым имеются данные о продажах (количество числовых значений в столбце Y)",
  "answer": "COUNT(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Подсчёт количества числовых значений (COUNT)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Количество ячеек в диапазоне продаж (столбец Y, D2:D13), содержащих числовые значения. Это позволит определить, за сколько месяцев имеются данные.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание функции COUNT</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Функция <strong>COUNT</strong> подсчитывает количество ячеек в диапазоне, которые содержат <strong>числовые значения</strong>.</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Что считается:</strong>
          <ul class="mb-0">
            <li>✅ Целые и дробные числа (например, 52, 63.5)</li>
            <li>✅ Даты (Excel хранит даты как числа)</li>
            <li>✅ Результаты формул, возвращающие числа</li>
          </ul>
        </div>
        
        <div class="alert alert-warning mt-2">
          <strong>⚠️ Что НЕ считается:</strong>
          <ul class="mb-0">
            <li>❌ Пустые ячейки</li>
            <li>❌ Текстовые значения (например, "нет данных")</li>
            <li>❌ Ошибки (#Н/Д, #ЗНАЧ!, #ДЕЛ/0!)</li>
            <li>❌ Логические значения (ИСТИНА/ЛОЖЬ)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец продаж (Y): диапазон <strong>D2:D13</strong></li>
          <li>Данные: 12 месяцев, все значения числовые</li>
          <li>Пустых ячеек нет, текста нет</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Строка</th><th>Месяц</th><th>Продажи (Y)</th><th>Тип данных</th><th>Учитывает COUNT?</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">2</td><td class="text-muted">январь</td><td class="text-muted">52</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">3</td><td class="text-muted">февраль</td><td class="text-muted">55</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">4</td><td class="text-muted">март</td><td class="text-muted">53</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">5</td><td class="text-muted">апрель</td><td class="text-muted">60</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">6</td><td class="text-muted">май</td><td class="text-muted">62</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">7</td><td class="text-muted">июнь</td><td class="text-muted">58</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">8</td><td class="text-muted">июль</td><td class="text-muted">65</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">9</td><td class="text-muted">август</td><td class="text-muted">68</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">10</td><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">11</td><td class="text-muted">октябрь</td><td class="text-muted">72</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">12</td><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">13</td><td class="text-muted">декабрь</td><td class="text-muted">80</td><td>Число</td><td class="text-success">✅ Да</td></tr>
              <tr class="table-success"><td colspan="3"><strong>Итого</strong><td><strong>12</strong><td><strong>12</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Просматриваем диапазон D2:D13:</p>
        <p class="card-text">D2=52 (число) → считаем → 1</p>
        <p class="card-text">D3=55 (число) → считаем → 2</p>
        <p class="card-text">D4=53 (число) → считаем → 3</p>
        <p class="card-text">D5=60 (число) → считаем → 4</p>
        <p class="card-text">D6=62 (число) → считаем → 5</p>
        <p class="card-text">D7=58 (число) → считаем → 6</p>
        <p class="card-text">D8=65 (число) → считаем → 7</p>
        <p class="card-text">D9=68 (число) → считаем → 8</p>
        <p class="card-text">D10=66 (число) → считаем → 9</p>
        <p class="card-text">D11=72 (число) → считаем → 10</p>
        <p class="card-text">D12=75 (число) → считаем → 11</p>
        <p class="card-text">D13=80 (число) → считаем → 12</p>
        
        <p class="card-text mt-2 text-muted">💡 Результат COUNT = <strong>12</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          В наличии данные о продажах за все 12 месяцев года. Это полный набор данных для анализа.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=COUNT(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=COUNT(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СЧЁТ(D2:D13)</code> — русскоязычная версия</li>
          <li><code>=COUNT(D:D)</code> — весь столбец D</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение COUNT с другими функциями подсчёта</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Функция</th><th>Что считает</th><th>Пример использования</th><th>Результат для D2:D13</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><code>=COUNT(D2:D13)</code></strong> / <code>=СЧЁТ</code></strong></td>
                <td>Только числа</strong></code></td>
                <td>Подсчёт месяцев с числовыми данными</strong></code></td>
                <td><strong>12</strong> (все числа)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=COUNTA(D2:D13)</code></strong> / <code>=СЧЁТЗ</code></strong></td>
                <td>Любые непустые ячейки</strong> (числа, текст, даты, ошибки)</strong></td>
                <td>Подсчёт месяцев с любыми данными</strong></code></td>
                <td>12 (все заполнены)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=COUNTBLANK(D2:D13)</code></strong> / <code>=СЧИТАТЬПУСТОТЫ</code></strong></td>
                <td>Пустые ячейки</strong></code></td>
                <td>Поиск пропусков в данных</strong></code></td>
                <td>0 (нет пустых)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=COUNTIF(D2:D13, ">60")</code></strong> / <code>=СЧЁТЕСЛИ</code></strong></td>
                <td>Числа, удовлетворяющие условию</strong></code></td>
                <td>Подсчёт месяцев с продажами выше 60</strong></code></td>
                <td>8 (апрель-декабрь, кроме июня 58)</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Примеры с изменёнными данными (для понимания)</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Диапазон данных</th><th>=COUNT(диапазон)</th><th>Почему?</th></tr>
            </thead>
            <tbody>
              <tr class="table-info"><td>[52, 55, 53, "нет", 62]</strong></code></td><td>4</strong></code></td><td>"нет" — текст, не считается</strong></code></td></tr>
              <tr class="table-info"><td>[52, 55, , 60, 62]</strong> (пустая ячейка)</strong></code></td><td>4</strong></code></td><td>Пустая ячейка не считается</strong></code></td></tr>
              <tr class="table-info"><td>[52, 55, #Н/Д, 60, 62]</strong></code></td><td>4</strong></code></td><td>Ошибка #Н/Д не считается</strong></code></td></tr>
              <tr class="table-success"><td>[52, 55, 53, 60, 62]</strong></code></td><td>5</strong></code></td><td>Все значения — числа</strong></code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практическое применение COUNT в анализе данных</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейсы использования COUNT:</strong>
          <ul class="mt-2 mb-0">
            <li><strong>Проверка полноты данных</strong> — сравнение COUNT с ожидаемым количеством записей</li>
            <li><strong>Расчёт среднего</strong> — AVERAGE внутри использует COUNT для деления суммы</li>
            <li><strong>Динамические диапазоны</strong> — автоматическое определение размера данных</li>
            <li><strong>Контроль качества</strong> — выявление пропусков в отчётности</li>
            <li><strong>Подготовка к анализу</strong> — перед расчётом статистики нужно знать объём выборки</li>
          </ul>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Пример:</strong> Финансовый директор получает отчёт с продажами за месяц. Формула <code>=COUNT(D:D)</code> мгновенно показывает, за сколько дней есть данные. Если COUNT меньше ожидаемого (например, 30 вместо 31), значит, есть пропуск.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=COUNT(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СЧЁТ(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 Дополнительные полезные функции для подсчёта:</b><br>
      • <code>=COUNTA(A2:A13)</code> — подсчёт любых непустых ячеек (включая текст)<br>
      • <code>=COUNTBLANK(A2:A13)</code> — подсчёт пустых ячеек<br>
      • <code>=COUNTIF(D2:D13, ">70")</code> — подсчёт продаж выше 70 (результат: 4 месяца)<br>
      • <code>=COUNTIFS(D2:D13, ">60", D2:D13, "<70")</code> — подсчёт продаж от 60 до 70 (результат: 5 месяцев)<br>
      • <code>=SUMPRODUCT(--(D2:D13<>""))</code> — альтернативный способ подсчёта непустых
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Что вернёт формула <code>=COUNT(B2:D13)</code> для нашей таблицы? (Подсказка: три столбца с числами)<br>
      2. Как изменится результат COUNT, если в ячейке D5 вместо 60 будет текст "данных нет"?<br>
      3. В чём разница между COUNT и COUNTA на примере диапазона с числами, текстом и пустыми ячейками?<br>
      4. Как с помощью COUNT проверить, все ли 12 месяцев заполнены числовыми данными?<br>
      5. Напишите формулу, которая подсчитывает количество месяцев с продажами выше среднего значения.
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics539",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Подсчёт месяцев с продажами от 60 до 70",
  "theme": "Служебные функции в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для подсчёта количества месяцев, в которых продажи (Y) находятся в диапазоне строго больше 60 и строго меньше 70 (т.е. от 61 до 69 включительно)",
  "answer": "COUNTIFS(D2:D13,\">60\",D2:D13,\"<70\")",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Подсчёт месяцев с продажами от 60 до 70 (COUNTIFS)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Количество месяцев, в которых продажи (столбец Y) находятся в интервале <strong>от 61 до 69 включительно</strong> (строго больше 60 и строго меньше 70).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание функции COUNTIFS</h5>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>COUNTIFS</strong> — это функция для подсчёта ячеек, удовлетворяющих <strong>нескольким условиям одновременно</strong> (логическое И).</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Синтаксис:</strong><br>
          <code>=COUNTIFS(диапазон_условия1, условие1, диапазон_условия2, условие2, ...)</code>
        </div>
        
        <div class="alert alert-info mt-2">
          <strong>📌 В нашем случае:</strong><br>
          <code>=COUNTIFS(D2:D13, ">60", D2:D13, "<70")</code><br>
          • Условие 1: значение > 60<br>
          • Условие 2: значение < 70<br>
          • Оба условия должны выполняться одновременно
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице продажи (столбец Y, D2:D13):</p>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (Y)</th><th>>60?</th><th><70?</th><th>Оба условия?</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-danger">❌ Нет</td><td class="text-success">✅ Да</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-danger">❌ Нет</td><td class="text-success">✅ Да</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-danger">❌ Нет</td><td class="text-success">✅ Да</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-danger">❌ Нет (равно 60)</td><td class="text-success">✅ Да</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-danger">❌ Нет</td><td class="text-success">✅ Да</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td><td class="text-success">✅ Да</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-success">✅ Да</td><td class="text-danger">❌ Нет (>70)</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-success">✅ Да</td><td class="text-danger">❌ Нет</td><td class="text-danger">❌</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-success">✅ Да</td><td class="text-danger">❌ Нет</td><td class="text-danger">❌</td></tr>
              <tr class="table-success"><td colspan="2"><strong>Итого</strong></td><td colspan="3"><strong>4 месяца</strong> (май, июль, август, сентябрь)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Перебираем значения продаж и проверяем условия:</p>
        <ul>
          <li>52 → >60? Нет → не подходит</li>
          <li>55 → >60? Нет → не подходит</li>
          <li>53 → >60? Нет → не подходит</li>
          <li>60 → >60? Нет (равно, а нужно строго больше) → не подходит</li>
          <li><strong>62 → >60? Да, <70? Да → ПОДХОДИТ (1)</strong></li>
          <li>58 → >60? Нет → не подходит</li>
          <li><strong>65 → >60? Да, <70? Да → ПОДХОДИТ (2)</strong></li>
          <li><strong>68 → >60? Да, <70? Да → ПОДХОДИТ (3)</strong></li>
          <li><strong>66 → >60? Да, <70? Да → ПОДХОДИТ (4)</strong></li>
          <li>72 → <70? Нет → не подходит</li>
          <li>75 → <70? Нет → не подходит</li>
          <li>80 → <70? Нет → не подходит</li>
        </ul>
        
        <p class="card-text mt-2 text-muted">💡 Результат COUNTIFS = <strong>4</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Какие месяцы попали в интервал:</strong><br>
          • май (62)<br>
          • июль (65)<br>
          • август (68)<br>
          • сентябрь (66)<br>
          <br>
          <strong>Обратите внимание:</strong> апрель (60) НЕ вошёл, так как условие ">60", а не ">=60".
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=COUNTIFS(диапазон1, условие1, диапазон2, условие2)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=COUNTIFS(D2:D13, ">60", D2:D13, "<70")</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СЧЁТЕСЛИМН(D2:D13; ">60"; D2:D13; "<70")</code> — русскоязычная версия</li>
          <li><code>=COUNTIF(D2:D13, ">60") - COUNTIF(D2:D13, ">=70")</code> — через разность COUNTIF</li>
          <li><code>=SUMPRODUCT((D2:D13>60)*(D2:D13<70))</code> — через SUMPRODUCT</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение COUNTIFS с другими подходами</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Формула</th><th>Результат</th><th>Преимущества / Недостатки</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><code>=COUNTIFS(D2:D13, ">60", D2:D13, "<70")</code></strong></code></td>
                <td><strong>4</strong></strong></code></td>
                <td>✅ Наглядно, легко читается<br>✅ Быстро работает</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=COUNTIF(D2:D13, ">60") - COUNTIF(D2:D13, ">=70")</code></strong></code></td>
                <td>4</strong></code> (8 - 4)</strong></code></td>
                <td>⚠️ Менее наглядно<br>⚠️ Две функции вместо одной</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=SUMPRODUCT((D2:D13>60)*(D2:D13<70))</code></strong></code></td>
                <td>4</strong></code></td>
                <td>⚠️ Сложнее для понимания новичками<br>✅ Гибкий для сложных условий</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Важные нюансы операторов сравнения</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Оператор</th><th>Значение</th><th>Пример</th><th>Что считается</th></tr>
            </thead>
            <tbody>
              <tr class="table-info"><td><code>></code></strong></code></td><td>больше</strong></code></td><td><code>">60"</code></strong></code></td><td>61, 62, 100... (60 НЕ входит)</strong></code></tr>
              <tr class="table-info"><td><code>>=</code></strong></code></td><td>больше или равно</strong></code></td><td><code>">=60"</code></strong></code></td><td>60, 61, 62, 100... (60 входит)</strong></code></tr>
              <tr class="table-info"><td><code><</code></strong></code></td><td>меньше</strong></code></td><td><code>"<70"</code></strong></code></td><td>69, 68, 60... (70 НЕ входит)</strong></code></tr>
              <tr class="table-info"><td><code><=</code></strong></code></td><td>меньше или равно</strong></code></td><td><code>"<=70"</code></strong></code></td><td>70, 69, 68... (70 входит)</strong></code></tr>
              <tr class="table-info"><td><code>=</code></strong></code></td><td>равно</strong></code></td><td><code>"=65"</code></strong></code></td><td>65 (только точное совпадение)</strong></code></tr>
              <tr class="table-info"><td><code><></code></strong></code></td>\+::не равно</strong></code></td><td><code>"<>65"</code></strong></code></td><td>Все, кроме 65</strong></code></tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-2">
          <strong>⚠️ Важно:</strong> Операторы сравнения в COUNTIF/COUNTIFS записываются в <strong>кавычках</strong> как текст: <code>">60"</code>, а не просто <code>>60</code>.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Примеры других условий с COUNTIFS для продаж</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Задача</th><th>Формула</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Продажи от 60 до 70 (включительно)</strong></code></td>
                <td><code>=COUNTIFS(D2:D13, ">=60", D2:D13, "<=70")</code></strong></code></td>
                <td>5 (апрель 60 + май 62 + июль 65 + август 68 + сентябрь 66)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Продажи больше 70</strong></code></td>
                <td><code>=COUNTIF(D2:D13, ">70")</code> (одно условие)</strong></code></td>
                <td>3 (октябрь 72, ноябрь 75, декабрь 80)</strong></code></td>
               </tr>
              <tr class="table-info">
                <td>Продажи меньше или равно 55</strong></code></td>
                <td><code>=COUNTIF(D2:D13, "<=55")</code></strong></code></td>
                <td>3 (январь 52, февраль 55, март 53)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Продажи от 50 до 60 (исключая границы)</strong></code></td>
                <td><code>=COUNTIFS(D2:D13, ">50", D2:D13, "<60")</code></strong></code></td>
                <td>3 (февраль 55, март 53, июнь 58) — апрель 60 не входит</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практическое применение COUNTIFS в бизнесе</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейсы использования COUNTIFS:</strong>
          <ul class="mt-2 mb-0">
            <li><strong>Анализ эффективности</strong> — сколько месяцев продажи были в целевом диапазоне</li>
            <li><strong>Выявление сезонности</strong> — подсчёт месяцев с высокими/низкими продажами</li>
            <li><strong>Бонусная система</strong> — сколько месяцев менеджер выполнил план (например, продажи > 70)</li>
            <li><strong>Контроль качества</strong> — сколько дней показатели были в норме</li>
            <li><strong>Многокритериальный отбор</strong> — комбинация условий по разным столбцам (например, продажи > 60 И реклама > 12)</li>
          </ul>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Пример из реального бизнеса:</strong><br>
          Менеджер по продажам получает бонус, если продажи за месяц находятся в "зелёной зоне" (65-75). Формула <code>=COUNTIFS(D2:D13, ">=65", D2:D13, "<=75")</code> покажет, сколько месяцев менеджер получил бонус.<br>
          Результат: 6 месяцев (июль 65, август 68, сентябрь 66, октябрь 72, ноябрь 75 + декабрь 80? Нет, 80 > 75, не входит) → 5 месяцев.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=COUNTIFS(D2:D13, ">60", D2:D13, "<70")</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СЧЁТЕСЛИМН(D2:D13; ">60"; D2:D13; "<70")</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 COUNTIFS против COUNTIF:</b><br>
      • <strong>COUNTIF</strong> — для <strong>одного</strong> условия (например, ">60")<br>
      • <strong>COUNTIFS</strong> — для <strong>нескольких</strong> условий (например, ">60" И "<70")<br>
      • COUNTIFS можно использовать и с одним условием — она работает как COUNTIF
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Сколько месяцев имеют продажи от 65 до 75 включительно? (<code>=COUNTIFS(D2:D13, ">=65", D2:D13, "<=75")</code>)<br>
      2. Сколько месяцев имеют продажи меньше 60 ИЛИ больше 70? (Подсказка: нужно сложить два COUNTIF)<br>
      3. Подсчитайте количество месяцев, в которых рекламный бюджет был больше 12 И продажи больше 65.<br>
      4. Как изменится результат, если условие будет ">=60" вместо ">60"?<br>
      5. Напишите формулу для подсчёта месяцев, в которых продажи не равны 62 (исключить май).
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics540",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Сумма квадратов продаж за год",
  "theme": "Служебные функции в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета суммы квадратов всех значений продаж (Y) за год",
  "answer": "SUMSQ(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт суммы квадратов продаж (SUMSQ)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Сумму квадратов всех значений продаж (столбец Y) за 12 месяцев. Эта величина используется в различных статистических формулах, включая дисперсию, стандартное отклонение, корреляцию и регрессию.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание функции SUMSQ</h5>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>SUMSQ</strong> — функция, которая возводит каждое число в диапазоне в квадрат и суммирует полученные квадраты.</p>
        
        <p class="card-text text-center mt-2">$$\\text{SUMSQ}(x_1, x_2, ..., x_n) = x_1^2 + x_2^2 + ... + x_n^2 = \\sum_{i=1}^{n} x_i^2$$</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Где используется сумма квадратов:</strong>
          <ul class="mb-0">
            <li><strong>Дисперсия</strong> — $\\sigma^2 = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$</li>
            <li><strong>Стандартное отклонение</strong> — $\\sigma = \\sqrt{\\frac{\\sum x_i^2}{n} - \\bar{x}^2}$</li>
            <li><strong>Корреляция и регрессия</strong> — в расчёте сумм квадратов отклонений</li>
            <li><strong>Евклидово расстояние</strong> — в кластерном анализе</li>
            <li><strong>Сумма квадратов ошибок (SSE)</strong> — в оценке качества моделей</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец продаж (Y): диапазон <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>xᵢ²</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-muted">2704</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-muted">3025</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-muted">2809</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-muted">3600</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-muted">3844</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-muted">3364</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-muted">4225</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-muted">4624</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-muted">4356</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-muted">5184</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-muted">5625</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-muted">6400</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Вычисляем квадраты каждого значения:</p>
        <ul>
          <li>$52^2 = 2704$</li>
          <li>$55^2 = 3025$</li>
          <li>$53^2 = 2809$</li>
          <li>$60^2 = 3600$</li>
          <li>$62^2 = 3844$</li>
          <li>$58^2 = 3364$</li>
          <li>$65^2 = 4225$</li>
          <li>$68^2 = 4624$</li>
          <li>$66^2 = 4356$</li>
          <li>$72^2 = 5184$</li>
          <li>$75^2 = 5625$</li>
          <li>$80^2 = 6400$</li>
        </ul>
        
        <p class="card-text mt-2">Суммируем квадраты:</p>
        <p class="card-text">$$2704 + 3025 = 5729$$</p>
        <p class="card-text">$$5729 + 2809 = 8538$$</p>
        <p class="card-text">$$8538 + 3600 = 12138$$</p>
        <p class="card-text">$$12138 + 3844 = 15982$$</p>
        <p class="card-text">$$15982 + 3364 = 19346$$</p>
        <p class="card-text">$$19346 + 4225 = 23571$$</p>
        <p class="card-text">$$23571 + 4624 = 28195$$</p>
        <p class="card-text">$$28195 + 4356 = 32551$$</p>
        <p class="card-text">$$32551 + 5184 = 37735$$</p>
        <p class="card-text">$$37735 + 5625 = 43360$$</p>
        <p class="card-text">$$43360 + 6400 = 49760$$</p>
        
        <p class="card-text mt-2 text-muted">💡 Сумма квадратов продаж = <strong>49 760</strong></p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=SUMSQ(диапазон)</code> или <code>=SUMSQ(число1, число2, ...)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=SUMSQ(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СУММКВ(D2:D13)</code> — русскоязычная версия</li>
          <li><code>=SUMPRODUCT(D2:D13, D2:D13)</code> — через SUMPRODUCT</li>
          <li><code>=SUM(D2:D13^2)</code> — формула массива (Ctrl+Shift+Enter)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Использование SUMSQ в статистических формулах</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Сумма квадратов — важный компонент многих статистических расчётов:</p>
        
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Показатель</th><th>Формула через SUMSQ</th><th>Расчёт для наших данных</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Сумма квадратов</strong></code></td>
                <td><code>=SUMSQ(D2:D13)</code></strong></code></td>
                <td>49 760</strong></code> (из расчёта)</strong></code></td>
                <td>49 760</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Сумма</strong> (для проверки)</strong></code></td>
                <td><code>=SUM(D2:D13)</code></strong></code></td>
                <td>766</strong></code> (из предыдущих расчётов)</strong></code></td>
                <td>766</strong></code></td>
               </tr>
              <tr class="table-info">
                <td>Сумма квадратов отклонений (SS)</strong></code> (через формулу)</strong></code></td>
                <td><code>=SUMSQ(D2:D13) - SUM(D2:D13)^2/COUNT(D2:D13)</code></strong></code></td>
                <td>49 760 - 766²/12</strong></code> = 49 760 - 586756/12 = 49 760 - 48 896.33</strong></code></td>
                <td>863.67</strong></code> (совпадает с SS_tot из R²)</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Дисперсия (ген. сов.)</strong></code> (через формулу)</strong></code></td>
                <td><code>=SUMSQ(D2:D13)/COUNT(D2:D13) - (SUM(D2:D13)/COUNT(D2:D13))^2</code></strong></code></td>
                <td>49 760/12 - (766/12)² = 4146.67 - 63.833² = 4146.67 - 4074.69</strong></code></td>
                <td>71.98</strong></code> (совпадает с VAR.P)</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Важное тождество:</strong>
          <p class="text-center mb-0">$$\\sum (x_i - \\bar{x})^2 = \\sum x_i^2 - \\frac{(\\sum x_i)^2}{n}$$</p>
          <p class="text-center mt-0">(Сумма квадратов отклонений = Сумма квадратов - Квадрат суммы / Количество)</p>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение SUMSQ с другими функциями</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Функция</th><th>Что делает</th><th>Пример для {2, 3, 4}</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><code>=SUM(A1:A3)</code></strong></code></td>
                <td>Сумма чисел</strong></code></td>
                <td>2 + 3 + 4</strong></code></td>
                <td>9</strong></code></td>
               </tr>
              <tr class="table-success">
                <td><code>=SUMSQ(A1:A3)</code></strong></code></td>
                <td>Сумма квадратов</strong></code></td>
                <td>2² + 3² + 4² = 4 + 9 + 16</strong></code></td>
                <td><strong>29</strong></strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=SUMPRODUCT(A1:A3, A1:A3)</code></strong></code></td>
                <td>Скалярное произведение вектора на себя</strong></code> (альтернатива SUMSQ)</strong></code></td>
                <td>2×2 + 3×3 + 4×4</strong></code></td>
                <td>29</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><code>=SUM(A1:A3^2)</code></strong> (формула массива)</strong></code></td>
                <td>Сумма квадратов (через массив)</strong></code></td>
                <td>{4, 9, 16} → сумма</strong></code></td>
                <td>29</strong></code></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: геометрический смысл суммы квадратов</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 12px;">
Квадраты чисел (визуализация для первых трёх месяцев):

52² = 2704    ████████████████████████████████████████ (очень много)
55² = 3025    ██████████████████████████████████████████
53² = 2809    ████████████████████████████████████████

Сумма квадратов = площадь всех квадратов, построенных на значениях продаж.
          </pre>
        </div>
        <p class="card-text mt-2">Геометрически: если представить каждое число как сторону квадрата, то SUMSQ — это сумма площадей этих квадратов.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практическое применение SUMSQ</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейсы использования SUMSQ:</strong>
          <ul class="mt-2 mb-0">
            <li><strong>Расчёт дисперсии и СКО</strong> — без SUMSQ пришлось бы вычислять каждый квадрат отдельно</li>
            <li><strong>Оценка рисков (волатильность)</strong> — сумма квадратов отклонений от среднего</li>
            <li><strong>Регрессионный анализ</strong> — расчёт сумм квадратов регрессии и остатков</li>
            <li><strong>Портфельный анализ</strong> — расчёт дисперсии доходности активов</li>
            <li><strong>Контроль качества</strong> — сумма квадратов отклонений от целевого значения</li>
          </ul>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Пример: расчёт дисперсии без VAR.P</strong><br>
          <code>=SUMSQ(D2:D13)/COUNT(D2:D13) - (SUM(D2:D13)/COUNT(D2:D13))^2</code><br>
          = 49 760/12 - (766/12)² = 4146.67 - 63.833² = 4146.67 - 4074.69 = 71.98 ✓
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=SUMSQ(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СУММКВ(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 SUMSQ против других функций:</b><br>
      • <strong>SUM</strong> — просто складывает числа<br>
      • <strong>SUMSQ</strong> — возводит в квадрат, потом складывает<br>
      • <strong>SUMX2MY2</strong> — сумма разностей квадратов двух массивов<br>
      • <strong>SUMX2PY2</strong> — сумма сумм квадратов двух массивов<br>
      • <strong>SUMXMY2</strong> — сумма квадратов разностей двух массивов (используется в корреляции)
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте сумму квадратов для рекламного бюджета (B2:B13) — <code>=SUMSQ(B2:B13)</code><br>
      2. Рассчитайте сумму квадратов для звонков (C2:C13) — <code>=SUMSQ(C2:C13)</code><br>
      3. Используя формулу $\\sum (x_i - \\bar{x})^2 = \\sum x_i^2 - (\\sum x_i)^2/n$, найдите сумму квадратов отклонений продаж от среднего.<br>
      4. Как изменится SUMSQ, если все значения увеличить на 10? (Проверьте на малом примере: {1,2,3} → {11,12,13})<br>
      5. Зачем в статистике часто используют сумму квадратов, а не просто сумму? (Подсказка: подумайте о знаках отклонений)
    </div>
   
  </div>
</div>`
},

{
  "id": "statistics541",
  "header": "Кейс",
  "type": "casewithrandomnumber",
  "title": "Среднее абсолютное отклонение продаж за месяц",
  "theme": "Меры разброса в статистике",
  "dataArray": [
    ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
    ["январь", 8, 20, 52],
    ["февраль", 9, 22, 55],
    ["март", 10, 18, 53],
    ["апрель", 11, 25, 60],
    ["май", 12, 27, 62],
    ["июнь", 10, 21, 58],
    ["июль", 13, 29, 65],
    ["август", 14, 30, 68],
    ["сентябрь", 13, 26, 66],
    ["октябрь", 15, 32, 72],
    ["ноябрь", 16, 34, 75],
    ["декабрь", 17, 36, 80]
  ],
  "text": "Введите формулу для расчета среднего абсолютного отклонения продаж (Y) от их среднего значения",
  "answer": "AVEDEV(D2:D13)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📊 Расчёт среднего абсолютного отклонения продаж (AVEDEV)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Что требуется найти:</strong><br>
      Среднее абсолютное отклонение продаж (столбец Y) — меру разброса, показывающую, насколько в среднем фактические продажи отклоняются от среднего значения. В отличие от стандартного отклонения, здесь отклонения не возводятся в квадрат.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Понимание среднего абсолютного отклонения</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее абсолютное отклонение вычисляется по формуле:</p>
        <p class="card-text text-center">$$\\text{AVEDEV} = \\frac{\\sum_{i=1}^{n} |x_i - \\bar{x}|}{n}$$</p>
        <p class="card-text">где $n$ — количество значений, $x_i$ — каждое отдельное значение, $\\bar{x}$ — среднее арифметическое.</p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Сравнение с другими мерами разброса:</strong>
          <ul class="mb-0">
            <li><strong>Среднее абсолютное отклонение (AVEDEV)</strong> — среднее модулей отклонений (в тех же единицах)</li>
            <li><strong>Дисперсия (VAR.P)</strong> — среднее квадратов отклонений (в квадратных единицах)</li>
            <li><strong>Стандартное отклонение (STDEV.P)</strong> — корень из дисперсии (в тех же единицах)</li>
          </ul>
        </div>
        
        <div class="alert alert-info mt-2">
          <strong>📌 Преимущество AVEDEV:</strong> Менее чувствительна к выбросам, чем стандартное отклонение, так как не возводит отклонения в квадрат.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Анализируем данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В нашей таблице:</p>
        <ul>
          <li>Столбец продаж (Y): диапазон <strong>D2:D13</strong></li>
          <li>Количество месяцев: $n = 12$</li>
          <li>Среднее арифметическое: $\\bar{x} \\approx 63.833$ (тыс. ед.)</li>
        </ul>
        
        <div class="table-responsive mt-2">
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr><th>Месяц</th><th>Продажи (xᵢ)</th><th>Отклонение (xᵢ - x̄)</th><th>|Отклонение|</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-muted">январь</td><td class="text-muted">52</td><td class="text-muted">-11.833</td><td class="text-muted">11.833</td></tr>
              <tr><td class="text-muted">февраль</td><td class="text-muted">55</td><td class="text-muted">-8.833</td><td class="text-muted">8.833</td></tr>
              <tr><td class="text-muted">март</td><td class="text-muted">53</td><td class="text-muted">-10.833</td><td class="text-muted">10.833</td></tr>
              <tr><td class="text-muted">апрель</td><td class="text-muted">60</td><td class="text-muted">-3.833</td><td class="text-muted">3.833</td></tr>
              <tr><td class="text-muted">май</td><td class="text-muted">62</td><td class="text-muted">-1.833</td><td class="text-muted">1.833</td></tr>
              <tr><td class="text-muted">июнь</td><td class="text-muted">58</td><td class="text-muted">-5.833</td><td class="text-muted">5.833</td></tr>
              <tr><td class="text-muted">июль</td><td class="text-muted">65</td><td class="text-muted">1.167</td><td class="text-muted">1.167</td></tr>
              <tr><td class="text-muted">август</td><td class="text-muted">68</td><td class="text-muted">4.167</td><td class="text-muted">4.167</td></tr>
              <tr><td class="text-muted">сентябрь</td><td class="text-muted">66</td><td class="text-muted">2.167</td><td class="text-muted">2.167</td></tr>
              <tr><td class="text-muted">октябрь</td><td class="text-muted">72</td><td class="text-muted">8.167</td><td class="text-muted">8.167</td></tr>
              <tr><td class="text-muted">ноябрь</td><td class="text-muted">75</td><td class="text-muted">11.167</td><td class="text-muted">11.167</td></tr>
              <tr><td class="text-muted">декабрь</td><td class="text-muted">80</td><td class="text-muted">16.167</td><td class="text-muted">16.167</td></tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Ручной расчёт (для проверки)</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Среднее значение (из предыдущих расчётов):</p>
        <p class="card-text">$$\\bar{x} = \\frac{766}{12} \\approx 63.833$$</p>
        
        <p class="card-text mt-2">Суммируем абсолютные отклонения:</p>
        <p class="card-text">$$11.833 + 8.833 = 20.666$$</p>
        <p class="card-text">$$20.666 + 10.833 = 31.499$$</p>
        <p class="card-text">$$31.499 + 3.833 = 35.332$$</p>
        <p class="card-text">$$35.332 + 1.833 = 37.165$$</p>
        <p class="card-text">$$37.165 + 5.833 = 42.998$$</p>
        <p class="card-text">$$42.998 + 1.167 = 44.165$$</p>
        <p class="card-text">$$44.165 + 4.167 = 48.332$$</p>
        <p class="card-text">$$48.332 + 2.167 = 50.499$$</p>
        <p class="card-text">$$50.499 + 8.167 = 58.666$$</p>
        <p class="card-text">$$58.666 + 11.167 = 69.833$$</p>
        <p class="card-text">$$69.833 + 16.167 = 86.000$$</p>
        
        <p class="card-text mt-2">Делим на количество месяцев (12):</p>
        <p class="card-text">$$\\text{AVEDEV} = \\frac{86.000}{12} \\approx 7.167$$</p>
        
        <p class="card-text mt-2 text-muted">💡 Среднее абсолютное отклонение продаж ≈ <strong>7.17 тыс. ед.</strong></p>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Интерпретация:</strong><br>
          В среднем фактические продажи отклоняются от среднего значения (63.83 тыс. ед.) на <strong>7.17 тыс. ед.</strong> в ту или иную сторону.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Формула в Excel / Google Sheets</h5>
      </div>
      <div class="card-body">
        <p class="card-text">В программах для работы с таблицами есть встроенная функция:</p>
        <div class="alert alert-success">
          <strong>📌 Синтаксис:</strong> <code>=AVEDEV(диапазон)</code>
        </div>
        <p class="card-text">Для нашего случая:</p>
        <div class="alert alert-warning">
          <code class="fs-5">=AVEDEV(D2:D13)</code>
        </div>
        <p class="card-text mt-2">Альтернативные варианты:</p>
        <ul>
          <li><code>=СРОТКЛ(D2:D13)</code> — русскоязычная версия (Среднее РОТКЛонение)</li>
          <li><code>=AVERAGE(ABS(D2:D13 - AVERAGE(D2:D13)))</code> — формула массива (Ctrl+Shift+Enter)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение AVEDEV со стандартным отклонением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Показатель</th><th>Формула</th><th>Результат</th><th>Особенности</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td><strong>Среднее абсолютное отклонение (AVEDEV)</strong></strong></code></td>
                <td><code>=AVEDEV(D2:D13)</code></strong></code></td>
                <td><strong>≈ 7.17</strong></strong></code> (тыс. ед.)</strong></code></td>
                <td>✅ Менее чувствительна к выбросам</strong></code><br>
                   ✅ В тех же единицах, что данные</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td><strong>Стандартное отклонение (STDEV.P)</strong></strong></code></td>
                <td><code>=STDEV.P(D2:D13)</code></strong></code></td>
                <td>≈ 8.48</strong></code> (тыс. ед.)</strong></code></td>
                <td>⚠️ Более чувствительна к выбросам (квадрат)</strong></code><br>
                   ✅ Широко используется в статистике</strong></code></td>
               </tr>
            </tbody>
           </table>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Почему стандартное отклонение больше?</strong><br>
          Стандартное отклонение (8.48) > среднего абсолютного отклонения (7.17), потому что при возведении в квадрат большие отклонения получают больший вес. Для нормального распределения: σ ≈ 1.25 × AVEDEV.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Визуализация: абсолютные отклонения</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          <pre class="mb-0" style="font-family: monospace; font-size: 11px;">
Продажи и отклонения от среднего (63.83)
  80 |                                          ● +16.17
  75 |                                     ● +11.17
  70 |                                ● +8.17
  65 |                          ●  ● +1.17 / +4.17
  60 |                     ● -3.83
  55 |                ●  ● -8.83 / -10.83
  50 |           ● -11.83
     |________________________________________________
       я  ф  м  а  м  и  и  а  с  о  н  д
       
       ● — фактические продажи
       ─ — среднее значение (63.83)
       
       Среднее абсолютное отклонение = (сумма |отклонений|)/12 = 7.17
          </pre>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Сравнение AVEDEV для разных переменных</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr><th>Переменная</th><th>Формула</th><th>AVEDEV</th><th>Среднее</th><th>Коэффициент вариации (AVEDEV/среднее)</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Продажи (Y)</strong></code></td>
                <td><code>=AVEDEV(D2:D13)</code></strong></code></td>
                <td>≈ 7.17</strong></code> (тыс. ед.)</strong></code></td>
                <td>63.83</strong></code> (тыс. ед.)</strong></code></td>
                <td>11.2%</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Реклама (X1)</strong></code> (предлагаем рассчитать)</strong></code></td>
                <td><code>=AVEDEV(B2:B13)</code></strong></code> (тыс. руб.)</strong></code></td>
                <td>≈ ?</strong></code> (тыс. руб.)</strong></code></td>
                <td>12.33</strong></code> (тыс. руб.)</strong></code></td>
                <td>?%</strong></code></td>
               </tr>
              <tr class="table-secondary">
                <td>Звонки (X2)</strong></code> (предлагаем рассчитать)</strong></code></td>
                <td><code>=AVEDEV(C2:C13)</code></strong></code> (звонков)</strong></code></td>
                <td>≈ ?</strong></code> (звонков)</strong></code></td>
                <td>26.67</strong></code> (звонков)</strong></code></td>
                <td>?%</strong></code></td>
               </tr>
            </tbody>
           </table>
        </div>
        <div class="alert alert-info mt-2">
          <strong>📌 Коэффициент вариации по AVEDEV:</strong> 11.2% для продаж — умеренная вариабельность.
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Связь AVEDEV с другими показателями разброса</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Для нормального распределения существует приближённое соотношение:</p>
        <p class="card-text text-center">$$\\sigma \\approx 1.253 \\times \\text{AVEDEV}$$</p>
        <p class="card-text">$$\\text{AVEDEV} \\approx 0.798 \\times \\sigma$$</p>
        
        <p class="card-text mt-2">Проверим на наших данных:</p>
        <ul>
          <li>$\\sigma = 8.48$</li>
          <li>$1.253 \\times 7.17 = 8.98$ (близко к 8.48, погрешность ≈ 5.9%)</li>
          <li>$0.798 \\times 8.48 = 6.77$ (близко к 7.17, погрешность ≈ 5.9%)</li>
        </ul>
        <p class="card-text text-muted">Расхождение объясняется тем, что распределение продаж не является строго нормальным.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <h5>📊 Практическое применение AVEDEV в бизнесе</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          <strong>📌 Бизнес-кейсы использования AVEDEV:</strong>
          <ul class="mt-2 mb-0">
            <li><strong>Оценка стабильности продаж</strong> — чем меньше AVEDEV, тем стабильнее бизнес</li>
            <li><strong>Управление запасами</strong> — для расчёта страховых запасов (менее чувствительна к выбросам)</li>
            <li><strong>Сравнение отделов</strong> — какой менеджер/филиал показывает более стабильные результаты</li>
            <li><strong>Бюджетирование</strong> — для оценки типичного отклонения от плана</li>
            <li><strong>Контроль качества</strong> — в производстве, где выбросы могут быть редки, но важны</li>
          </ul>
        </div>
        
        <div class="alert alert-light mt-2">
          <strong>📌 Пример:</strong> Финансовый директор хочет понять, насколько типичное отклонение продаж от плана.<br>
          AVEDEV = 7.17 тыс. ед. означает, что в среднем продажи отклоняются от среднего на эту величину. Это помогает установить реалистичные границы для бонусов и штрафов.
        </div>
      </div>
    </div>

    <div class="alert alert-primary" role="alert">
      <b>✅ В НАШЕМ случае правильный ответ:</b> <code class="fs-6">=AVEDEV(D2:D13)</code>
    </div>

    <div class="alert alert-secondary" role="alert">
      <b>📌 Для русскоязычного MS Excel:</b> <code class="fs-6">=СРОТКЛ(D2:D13)</code>
    </div>

    <div class="alert alert-info mt-2" role="alert">
      <b>📖 AVEDEV против других функций разброса:</b><br>
      • <strong>=AVEDEV(диапазон)</strong> — среднее абсолютное отклонение (в единицах данных)<br>
      • <strong>=STDEV.P(диапазон)</strong> — стандартное отклонение (в единицах данных, больше весов у больших отклонений)<br>
      • <strong>=VAR.P(диапазон)</strong> — дисперсия (в квадратных единицах)<br>
      • <strong>=AVERAGE(диапазон)</strong> — среднее (центр распределения)
    </div>

    <div class="alert alert-warning mt-2" role="alert">
      <b>💡 Задания для размышления и самостоятельной работы:</b><br>
      1. Рассчитайте AVEDEV для рекламного бюджета (B2:B13) и для звонков (C2:C13). Сравните с AVEDEV продаж.<br>
      2. Как изменится AVEDEV, если из данных убрать декабрь (самый высокий месяц)? Почему изменение меньше, чем для STDEV.P?<br>
      3. В чём преимущество AVEDEV перед стандартным отклонением при наличии выбросов? Проверьте на примере: добавьте месяц с продажами 200.<br>
      4. Почему в классической статистике чаще используют стандартное отклонение, а не среднее абсолютное? (Подсказка: подумайте о математических свойствах)<br>
      5. Рассчитайте коэффициент вариации на основе AVEDEV для всех трёх переменных. Какая переменная наиболее стабильна?
    </div>
   
  </div>
</div>`
},














    {
        id: "statistics499",
        type: "multiplechoices",
        header: "Тест",
        title: "Статистической зависимостью называется …",
        theme: "Корреляционно-регрессионный анализ",
        text: "Статистической зависимостью называется …",
        choices: [
            "точная формула, связывающая переменные",
            "связь переменных без учета воздействия случайных факторов",
            "связь переменных, на которую накладывается воздействие случайных факторов",
            "любая связь переменных"],
        answers: ["связь переменных, на которую накладывается воздействие случайных факторов"]
    },

    {
        id: "statistics400",
        type: "multiplechoices",
        header: "Тест",
        title: "Коэффициент регрессии k(a) показывает …",
        theme: "Корреляционно-регрессионный анализ",
        text: "Коэффициент регрессии k(a) показывает …",
        choices: [
            "как меняется переменная y при увеличении переменной x на 1%",
            "прогнозируемое значение зависимой переменной при x = 0",
            "прогнозируемое значение зависимой переменной при x > 0",
            "прогнозируемое значение зависимой переменной при x < 0"],
        answers: ["как меняется переменная y при увеличении переменной x на 1%"]
    },

    {
        id: "statistics401",
        type: "multiplechoices",
        header: "Тест",
        title: "Выборочная ковариация является мерой … двух переменных",
        theme: "Корреляционно-регрессионный анализ",
        text: "Выборочная ковариация является мерой … двух переменных",
        choices: [
            "взаимосвязи",
            "нелинейной связи",
            "рассеяния",
            "линейной связи"],
        answers: ["взаимосвязи"]
    },



    {
        id: "statistics402",
        type: "multiplechoices",
        header: "Тест",
        title: "Выборочная совокупность – это …",
        theme: "Корреляционно-регрессионный анализ",
        text: "Выборочная совокупность – это …",
        choices: [
            "множество наблюдений, составляющих часть генеральной совокупности",
            "любое множество наблюдений",
            "значения случайной величины, удовлетворяющие условиям наблюдения",
            "значения случайной величины, принятые в процессе наблюдения"],
        answers: ["множество наблюдений, составляющих часть генеральной совокупности"]
    },


    {
        id: "statistics403",
        type: "multiplechoices",
        header: "Тест",
        title: "Временные ряды – это данные, характеризующие … момент (ы) времени",
        theme: "Корреляционно-регрессионный анализ",
        text: "Временные ряды – это данные, характеризующие … момент (ы) времени",
        choices: [
            "один и тот же объект в различные",
            "разные объекты в один и тот же",
            "один и тот же объект в один и тот же",
            "разные объекты в различные"],
        answers: ["один и тот же объект в различные"]
    },


    {
        id: "statistics404",
        type: "multiplechoices",
        header: "Тест",
        title: "Коэффициент регрессии b показывает …",
        theme: "Корреляционно-регрессионный анализ",
        text: "Коэффициент регрессии b показывает …",
        choices: [
            "на сколько единиц в среднем изменяется переменная y при увеличении независимой переменной x на единицу",
            "прогнозируемое значение зависимой переменной при x = 0",
            "прогнозируемое значение зависимой переменной при x > 0",
            "прогнозируемое значение зависимой переменной при x < 0"],
        answers: ["на сколько единиц в среднем изменяется переменная y при увеличении независимой переменной x на единицу"]
    },


    {
        id: "statistics405",
        type: "multiplechoices",
        header: "Тест",
        title: "Коэффициенты регрессии (а, b) в выборочном уравнении регрессии определяются методом (ами) …",
        theme: "Корреляционно-регрессионный анализ",
        text: "Коэффициенты регрессии (а, b) в выборочном уравнении регрессии определяются методом (ами) …",
        choices: [
            "наименьших квадратов",
            "взвешенных наименьших квадратов",
            "моментов",
            "градиентными"],
        answers: ["наименьших квадратов"]
    },


    {
        id: "statistics406",
        type: "multiplechoices",
        header: "Тест",
        title: "Геометрически, математическое ожидание случайной величины – это … распределения",
        theme: "Корреляционно-регрессионный анализ",
        text: "Геометрически, математическое ожидание случайной величины – это … распределения",
        choices: [
            "центр",
            "мера рассеяния относительно центра",
            "мера отклонения симметричного от нормального",
            "мера отклонения от симметричного"],
        answers: ["центр"],
        hint: `
        <img src="https://ebooks.kbsu.ru/g2p3.files/image079.jpg" class="img-fluid" alt="img">        
        `
    },

    {
        id: "statistics407",
        type: "multiplechoices",
        header: "Тест",
        title: "Коэффициентом детерминации R^2 характеризуют долю вариации переменной … с помощью уравнения регрессии",
        theme: "Корреляционно-регрессионный анализ",
        text: "Коэффициентом детерминации R2 характеризуют долю вариации переменной … с помощью уравнения регрессии",
        choices: [
            "зависимой, объясненную",
            "зависимой, необъясненную",
            "независимой, объясненную",
            "независимой, необъясненную"],
        answers: ["зависимой, объясненную"],
        hint: `
        После проверки точности и статистической значимости каждого коэффициента регрессионной модели обычно проводится анализ общего качества уравнения модели, которое оценивается по тому,
        как хорошо эмпирическое уравнение регрессии согласуется со статистическими данными.<br>
        Другими словами, необходимо оценить, насколько широко рассеяны точки наблюдений по их совокупности относительно линии регрессии (линии модели). Поэтому представляется естественным вывод о том, что проверку общего качества регрессионной модели следует проводить на основе дисперсионного анализа, сравнивая дисперсии модельных и реальных значений исследуемой переменной У        
        `
    },

    {
        id: "statistics408",
        type: "multiplechoices",
        header: "Тест",
        title: "Величина var(y) – это дисперсия значений … переменной",
        theme: "Корреляционно-регрессионный анализ",
        text: "Величина var(y) – это дисперсия значений … переменной",
        choices: [
            "наблюдаемых зависимой",
            "наблюдаемых независимой",
            "расчетных зависимой",
            "расчетных независимой"],
        answers: ["расчетных зависимой"],
        hint: `        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKODO3GojGV7hIRKM0N00CDab29uhC57EELg&s" class="img-fluid" alt="img">        
        `
    },

    {
        id: "statistics409",
        header: "Кейс",
        type: "casewithrandomnumber",
        title: "Коэффициент корреляции между выручкой и рекламным бюджетом",
        theme: "Средние величины в статистике",
        dataArray: [
            ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
            ["январь", 8, 20, 52],
            ["февраль", 9, 22, 55],
            ["март", 10, 18, 53],
            ["апрель", 11, 25, 60],
            ["май", 12, 27, 62],
            ["июнь", 10, 21, 58],
            ["июль", 13, 29, 65],
            ["август", 14, 30, 68],
            ["сентябрь", 13, 26, 66],
            ["октябрь", 15, 32, 72],
            ["ноябрь", 16, 34, 75],
            ["декабрь", 17, 36, 80],
        ],
        hint: `<a
         href='https://support.microsoft.com/ru-ru/office/%D1%81%D1%80%D0%B7%D0%BD%D0%B0%D1%87-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F-%D1%81%D1%80%D0%B7%D0%BD%D0%B0%D1%87-047bac88-d466-426c-a32b-8f33eb960cf6'
          class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)</a>`,
        text: `Введите формулу для коэффициент корреляции между выручкой и рекламным бюджетом за месяц`,
        answer: "CORREL(D2:D13,B2:B13)",
       
    },

    {
        id: "statistics409",
        header: "Кейс",
        type: "casewithrandomnumber",
        title: "Коэффициент корреляции между выручкой и рекламным бюджетом",
        theme: "Средние величины в статистике",
        dataArray: [
            ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
            ["январь", 8, 20, 52],
            ["февраль", 9, 22, 55],
            ["март", 10, 18, 53],
            ["апрель", 11, 25, 60],
            ["май", 12, 27, 62],
            ["июнь", 10, 21, 58],
            ["июль", 13, 29, 65],
            ["август", 14, 30, 68],
            ["сентябрь", 13, 26, 66],
            ["октябрь", 15, 32, 72],
            ["ноябрь", 16, 34, 75],
            ["декабрь", 17, 36, 80],
        ],
        hint: `<a
         href='https://support.microsoft.com/en-us/office/correl-function-995dcef7-0c0a-4bed-a3fb-239d7b68ca92'
          class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)</a>`,
        text: `Введите формулу для коэффициент корреляции между выручкой и звонками за месяц`,
        answer: "CORREL(D2:D13,С2:С13)",
       
    },

    {
        id: "statistics409",
        header: "Кейс",
        type: "casewithrandomnumber",
        title: "Коэффициент корреляции между выручкой и рекламным бюджетом",
        theme: "Средние величины в статистике",
        dataArray: [
            ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
            ["январь", 8, 20, 52],
            ["февраль", 9, 22, 55],
            ["март", 10, 18, 53],
            ["апрель", 11, 25, 60],
            ["май", 12, 27, 62],
            ["июнь", 10, 21, 58],
            ["июль", 13, 29, 65],
            ["август", 14, 30, 68],
            ["сентябрь", 13, 26, 66],
            ["октябрь", 15, 32, 72],
            ["ноябрь", 16, 34, 75],
            ["декабрь", 17, 36, 80],
        ],
        hint: `<a
         href='https://support.microsoft.com/en-us/office/correl-function-995dcef7-0c0a-4bed-a3fb-239d7b68ca92'
          class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)</a>`,
        text: `Введите формулу для коэффициент корреляции между выручкой и рекламным бюджетом за месяц`,
        answer: "CORREL(D2:D13,B2:B13)",
       
    },


    {
        id: "statistics409",
        header: "Кейс",
        type: "casewithrandomnumber",
        title: "Коэффициент ковариации между выручкой и рекламным бюджетом",
        theme: "Средние величины в статистике",
        dataArray: [
            ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
            ["январь", 8, 20, 52],
            ["февраль", 9, 22, 55],
            ["март", 10, 18, 53],
            ["апрель", 11, 25, 60],
            ["май", 12, 27, 62],
            ["июнь", 10, 21, 58],
            ["июль", 13, 29, 65],
            ["август", 14, 30, 68],
            ["сентябрь", 13, 26, 66],
            ["октябрь", 15, 32, 72],
            ["ноябрь", 16, 34, 75],
            ["декабрь", 17, 36, 80],
        ],
        hint: `<a
         href='https://support.microsoft.com/en-us/office/correl-function-995dcef7-0c0a-4bed-a3fb-239d7b68ca92'
          class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)</a>`,
        text: `Введите формулу для коэффициента ковариацию, то есть среднее произведений отклонений для каждой пары точек между выручкой и рекламным бюджетом за месяц`,
        answer: "COVAR(D2:D13,B2:B13)",
       
    },

    {
        id: "statistics409",
        header: "Кейс",
        type: "casewithrandomnumber",
        title: "Вычисляет значение линейного тренда выручкой и рекламным бюджетом",
        theme: "Средние величины в статистике",
        dataArray: [
            ["Месяц", "Рекл. бюдж. (X1)", "Звонки кл. (X2)", "Продажи (Y)"],
            ["январь", 8, 20, 52],
            ["февраль", 9, 22, 55],
            ["март", 10, 18, 53],
            ["апрель", 11, 25, 60],
            ["май", 12, 27, 62],
            ["июнь", 10, 21, 58],
            ["июль", 13, 29, 65],
            ["август", 14, 30, 68],
            ["сентябрь", 13, 26, 66],
            ["октябрь", 15, 32, 72],
            ["ноябрь", 16, 34, 75],
            ["декабрь", 17, 36, 80],
        ],
        hint: `<a
         href='https://support.microsoft.com/ru-ru/office/%D0%BF%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-linear-50ca49c9-7b40-4892-94e4-7ad38bbeda99'
          class='link-primary'>СРЗНАЧ (функция СРЗНАЧ) =AVERAGE(A1:A20)</a>`,
        text: `Вычисляет значение линейного тренда рекламным выручкой и рекламным бюджетом`,
        answer: "=FORECAST.LINEAR(30,A2:A6,B2:B6)",
       
    },

{
  "id": "regression_slope_mental_001",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди угловой коэффициент",
  "theme": "Регрессия",
  "text": "Точки: $A(0, 0)$ и $B({= {var1-10}*2}, {= {var1-10}*2*{var1-10}})$. Найдите $k = \\frac{y_2 - y_1}{x_2 - x_1}$.",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт: находим k</h5></div><div class='card-body'><div class='alert alert-secondary'>$$k = \\frac{{= {var1-10}*2*{var1-10}} - 0}{{= {var1-10}*2} - 0} = \\frac{{= {var1-10}*2*{var1-10}}}{{= {var1-10}*2}} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $k = {var1-10}$</div></div></div>"
},

{
  "id": "regression_slope_mental_002",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди угловой коэффициент",
  "theme": "Регрессия",
  "text": "Точки: $A({= {var1-10}}, {= {var1-10}*{var1-10}})$ и $B({= {var1-10}*2}, {= {var1-10}*{var1-10}*2})$. Найдите $k$.",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт: находим k</h5></div><div class='card-body'><div class='alert alert-secondary'>$$k = \\frac{{= {var1-10}*{var1-10}*2} - {= {var1-10}*{var1-10}}}{{= {var1-10}*2} - {= {var1-10}}} = \\frac{{= {var1-10}*{var1-10}}}{{= {var1-10}}} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $k = {var1-10}$</div></div></div>"
},

{
  "id": "regression_intercept_mental_003",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди свободный член b",
  "theme": "Регрессия",
  "text": "Прямая $y = 2x + b$ проходит через точку $({= {var1-10}}, {= {var1-10}*2 + {var1-10}})$. Найдите $b$.",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт: находим b</h5></div><div class='card-body'><div class='alert alert-secondary'>$$b = y - 2x = ({= {var1-10}*2 + {var1-10}}) - 2 \\cdot ({= {var1-10}}) = {= {var1-10}*2 + {var1-10}} - {= {var1-10}*2} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $b = {var1-10}$</div></div></div>"
},

{
  "id": "regression_predict_mental_004",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди значение y",
  "theme": "Регрессия",
  "text": "Прямая $y = {var1-10} \\cdot x$ проходит через начало координат. Чему равен $y$ при $x = 1$?",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт</h5></div><div class='card-body'><div class='alert alert-secondary'>$$y = {var1-10} \\cdot 1 = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $y = {var1-10}$</div></div></div>"
},

{
  "id": "regression_find_x_mental_005",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди значение x",
  "theme": "Регрессия",
  "text": "Прямая $y = 3x$ проходит через точку с $y = {= {var1-10}*3}$. Найдите $x$.",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт</h5></div><div class='card-body'><div class='alert alert-secondary'>$$x = \\frac{y}{3} = \\frac{{= {var1-10}*3}}{3} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $x = {var1-10}$</div></div></div>"
},
{
  "id": "regression_sum_mental_006",
  "type": "mathwithrandomnumber",
  "header": "Линейная регрессия (устный счёт)",
  "title": "Найди сумму k + b",
  "theme": "Регрессия",
  "text": "Прямая проходит через точки $A(0, 0)$ и $B(1, {var1-10})$. Найдите $k + b$.",
  "answer": "{var1-10}",
  "randomfrom": [2, 3, 4, 5, 8, 10, 20],
  "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт</h5></div><div class='card-body'><div class='alert alert-secondary'>$$k = \\frac{{var1-10} - 0}{1 - 0} = {var1-10}$$<br>$$b = y_1 - k \\cdot x_1 = 0 - {var1-10} \\cdot 0 = 0$$<br>$$k + b = {var1-10} + 0 = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $k + b = {var1-10}$</div></div></div>"
},


  {
  "id": "regression_slope_001",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Вычисление коэффициента наклона k",
  "theme": "Регрессия",
 
  "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Чему равен коэффициент наклона $k$ прямой, проходящей через эти точки?",
  "choices": [
    "$k = 2$",
    "$k = 0.5$",
    "$k = -2$",
    "$k = 1$",
    "$k = 8$"
  ],
  "answers": ["$k = 2$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Коэффициент наклона прямой (k)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула углового коэффициента:</strong>
      $$k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем координаты точек</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $A(x_1, y_1) = (6, 2)$</p>
        <p class="card-text">Точка $B(x_2, y_2) = (10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим разности координат</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\Delta y = y_2 - y_1 = 10 - 2 = 8$$</p>
        <p class="card-text">$$\\Delta x = x_2 - x_1 = 10 - 6 = 4$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Вычисляем угловой коэффициент</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$k = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{4} = 2$$</p>
        <div class="alert alert-success mt-2">
          📈 <strong>Интерпретация:</strong> При увеличении $x$ на 1 единицу, $y$ увеличивается на 2 единицы.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $k = 2$
    </div>
  </div>
</div>`
},

  {
  "id": "regression_intercept_002",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Вычисление свободного члена b",
  "theme": "Регрессия",
 
  "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Уравнение прямой имеет вид $y = kx + b$. Зная, что $k = 2$, найдите свободный член $b$.",
  "choices": [
    "$b = -10$",
    "$b = -6$",
    "$b = 0$",
    "$b = 6$",
    "$b = 10$"
  ],
  "answers": ["$b = -10$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Нахождение свободного члена b</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула для нахождения b:</strong>
      $$b = y_1 - k \\cdot x_1$$
      или
      $$b = y_2 - k \\cdot x_2$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Известные данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$k = 2$ (из предыдущего расчёта)</p>
        <p class="card-text">Точка $A(6, 2)$ или $B(10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Подставляем в уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Используем точку $A(6, 2)$:</p>
        <p class="card-text">$$y = kx + b \\Rightarrow 2 = 2 \\cdot 6 + b$$</p>
        <p class="card-text">$$2 = 12 + b$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Решаем уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$b = 2 - 12 = -10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Проверка со второй точкой</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $B(10, 10)$:</p>
        <p class="card-text">$$10 = 2 \\cdot 10 + b \\Rightarrow 10 = 20 + b \\Rightarrow b = -10$$ ✓</p>
        <div class="alert alert-info mt-2">
          📈 <strong>Уравнение прямой:</strong> $y = 2x - 10$
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $b = -10$
    </div>
  </div>
</div>`
},

  {
  "id": "regression_equation_003",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Составление уравнения прямой",
  "theme": "Регрессия",
 
  "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Какое уравнение прямой проходит через эти точки?",
  "choices": [
    "$y = 2x - 10$",
    "$y = 2x + 10$",
    "$y = 0.5x - 1$",
    "$y = 0.5x + 1$",
    "$y = 8x - 46$"
  ],
  "answers": ["$y = 2x - 10$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Уравнение прямой по двум точкам</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Общий вид уравнения прямой:</strong>
      $$y = kx + b$$
      где $k$ — угловой коэффициент, $b$ — свободный член.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Находим угловой коэффициент k</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{10 - 2}{10 - 6} = \\frac{8}{4} = 2$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим свободный член b</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Используем точку $A(6, 2)$:</p>
        <p class="card-text">$$2 = 2 \\cdot 6 + b \\Rightarrow b = 2 - 12 = -10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Записываем уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2x - 10$$</p>
        <div class="alert alert-info mt-2">
          📊 <strong>Проверка:</strong><br>
          При $x = 6$: $y = 2 \\cdot 6 - 10 = 12 - 10 = 2$ ✓<br>
          При $x = 10$: $y = 2 \\cdot 10 - 10 = 20 - 10 = 10$ ✓
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 2x - 10$
    </div>
  </div>
</div>`
},

  {
  "id": "regression_predict_004",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Прогнозирование по уравнению регрессии",
  "theme": "Регрессия",
 
  "text": "По точкам $A(6, 2)$ и $B(10, 10)$ построено уравнение регрессии $y = 2x - 10$. Какое значение $y$ предсказывается для $x = 15$?",
  "choices": [
    "$y = 20$",
    "$y = 25$",
    "$y = 30$",
    "$y = 35$",
    "$y = 40$"
  ],
  "answers": ["$y = 20$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Прогнозирование по линейной регрессии</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Уравнение регрессии:</strong>
      $$y = 2x - 10$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Подставляем значение x = 15</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2 \\cdot 15 - 10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Вычисляем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 30 - 10 = 20$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Интерпретация</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          📈 <strong>Прогноз:</strong> При $x = 15$ модель предсказывает $y = 20$.<br>
          ⚠️ <strong>Внимание:</strong> Экстраполяция за пределы исходного диапазона $[6, 10]$ может быть неточной!
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 20$
    </div>
  </div>
</div>`
},

  {
  "id": "regression_interpolate_005",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Интерполяция по уравнению регрессии",
  "theme": "Регрессия",
 
  "text": "По точкам $A(6, 2)$ и $B(10, 10)$ построено уравнение регрессии $y = 2x - 10$. Какое значение $y$ предсказывается для $x = 8$?",
  "choices": [
    "$y = 2$",
    "$y = 4$",
    "$y = 6$",
    "$y = 8$",
    "$y = 10$"
  ],
  "answers": ["$y = 6$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интерполяция по линейной регрессии</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Уравнение регрессии:</strong>
      $$y = 2x - 10$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Подставляем значение x = 8</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2 \\cdot 8 - 10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Вычисляем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 16 - 10 = 6$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Визуализация</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = 2x - 10$</th><th>Тип</th></tr>
            </thead>
            <tbody>
              <tr><td>6</td><td>2</td><td class="table-info">Исходная точка A</td></tr>
              <tr class="table-success"><td>8</td><td>6</td><td>Интерполяция (внутри диапазона)</td></tr>
              <tr><td>10</td><td>10</td><td class="table-info">Исходная точка B</td></tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-info mt-2">
          📈 <strong>Интерполяция:</strong> $x = 8$ находится между 6 и 10, поэтому прогноз надёжен.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 6$
    </div>
  </div>
</div>`
},

  {
  "id": "regression_formula_006",
  "type": "multiplechoices",
  "header": "Линейная регрессия по двум точкам",
  "title": "Уравнение прямой через две точки (каноническая форма)",
  "theme": "Регрессия",
  "text": "Какое уравнение прямой в канонической форме проходит через точки $A(6, 2)$ и $B(10, 10)$?",
  "choices": [
    "$\\frac{x - 6}{4} = \\frac{y - 2}{8}$",
    "$\\frac{x - 6}{8} = \\frac{y - 2}{4}$",
    "$\\frac{x - 2}{6} = \\frac{y - 6}{10}$",
    "$\\frac{x - 10}{6} = \\frac{y - 10}{2}$",
    "$\\frac{x - 2}{8} = \\frac{y - 6}{4}$"
  ],
  "answers": ["$\\frac{x - 6}{4} = \\frac{y - 2}{8}$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Каноническое уравнение прямой</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Каноническая форма уравнения прямой через две точки:</strong>
      $$\\frac{x - x_1}{x_2 - x_1} = \\frac{y - y_1}{y_2 - y_1}$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем координаты</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $A(x_1, y_1) = (6, 2)$</p>
        <p class="card-text">Точка $B(x_2, y_2) = (10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим разности</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$x_2 - x_1 = 10 - 6 = 4$$</p>
        <p class="card-text">$$y_2 - y_1 = 10 - 2 = 8$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Подставляем в формулу</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\frac{x - 6}{4} = \\frac{y - 2}{8}$$</p>
        <div class="alert alert-info mt-2">
          📐 Это уравнение можно упростить до $y = 2x - 10$:<br>
          $$\\frac{x - 6}{4} = \\frac{y - 2}{8} \\Rightarrow 8(x - 6) = 4(y - 2)$$<br>
          $$8x - 48 = 4y - 8 \\Rightarrow 4y = 8x - 40 \\Rightarrow y = 2x - 10$$
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\frac{x - 6}{4} = \\frac{y - 2}{8}$
    </div>
  </div>
</div>`
},









];
window.quizesSets = quizesSets;
