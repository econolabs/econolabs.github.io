let quizesSets = [
  {
    "id": "statistics201",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое описательная статистика?",
    "theme": "Введение в описательную статистику",
    "text": "Что делает описательная статистика?",
    "choices": [
      "Делает прогнозы о генеральной совокупности",
      "Обобщает, организует и описывает основные характеристики набора данных",
      "Проверяет гипотезы",
      "Строит регрессионные модели"
    ],
    "answers": ["Обобщает, организует и описывает основные характеристики набора данных"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Описательная статистика</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Описательная статистика помогает обобщать, организовывать и описывать основные характеристики набора данных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Что она делает</h5></div><div class='card-body'><ul><li>Использует <strong>числовые показатели</strong>, <strong>таблицы</strong> и <strong>графики</strong></li><li><strong>Не делает прогнозов</strong>, только описывает данные</li><li>Применяется в бизнесе, науке, инженерии, здравоохранении</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Обобщает, организует и описывает основные характеристики набора данных</div></div></div>"
  },
  {
    "id": "statistics202",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Виды описательной статистики",
    "theme": "Виды описательной статистики",
    "text": "На какие две основные группы делятся меры описательной статистики?",
    "choices": [
      "Простые и сложные",
      "Меры центральной тенденции и меры разброса",
      "Номинальные и порядковые",
      "Дискретные и непрерывные"
    ],
    "answers": ["Меры центральной тенденции и меры разброса"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Виды описательной статистики</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Две группы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Меры</h5></div><div class='card-body'><ul><li><strong>Меры центральной тенденции</strong> — находят центр данных (среднее, медиана, мода)</li><li><strong>Меры разброса</strong> — показывают разброс данных (размах, дисперсия, стандартное отклонение, IQR)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Меры центральной тенденции и меры разброса</div></div></div>"
  },
  {
    "id": "statistics203",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Меры центральной тенденции",
    "theme": "Центральная тенденция",
    "text": "Что из перечисленного относится к мерам центральной тенденции?",
    "choices": [
      "Размах, дисперсия, стандартное отклонение",
      "Среднее, медиана, мода",
      "IQR, квартили, процентили",
      "Гистограмма, ящик с усами"
    ],
    "answers": ["Среднее, медиана, мода"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Меры центральной тенденции</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Находят центр данных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Три меры</h5></div><div class='card-body'><ul><li><strong>Среднее</strong> — среднее всех значений</li><li><strong>Медиана</strong> — среднее значение при сортировке</li><li><strong>Мода</strong> — наиболее часто встречающееся значение</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее, медиана, мода</div></div></div>"
  },
  {
    "id": "statistics204",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Меры разброса",
    "theme": "Разброс",
    "text": "Что из перечисленного относится к мерам разброса?",
    "choices": [
      "Среднее, медиана, мода",
      "Размах, дисперсия, стандартное отклонение, IQR",
      "Только среднее и медиана",
      "Только мода"
    ],
    "answers": ["Размах, дисперсия, стандартное отклонение, IQR"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Меры разброса</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Показывают разброс данных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Четыре меры</h5></div><div class='card-body'><ul><li><strong>Размах</strong> — Max − Min</li><li><strong>Дисперсия</strong> — среднее квадратов отклонений</li><li><strong>Стандартное отклонение</strong> — корень из дисперсии</li><li><strong>IQR</strong> — разброс средних 50% данных</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Размах, дисперсия, стандартное отклонение, IQR</div></div></div>"
  },
  {
    "id": "statistics205",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Среднее арифметическое",
    "theme": "Центральная тенденция",
    "text": "Как вычисляется среднее арифметическое?",
    "choices": [
      "Среднее значение при сортировке данных",
      "Наиболее часто встречающееся значение",
      "Сумма всех значений, делённая на их количество",
      "Разница между наибольшим и наименьшим значением"
    ],
    "answers": ["Сумма всех значений, делённая на их количество"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Среднее арифметическое</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\bar{x} = \\dfrac{\\sum_{i=1}^{n} x_i}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Сумма всех значений, делённая на их количество</li><li><strong>Чувствительно к выбросам</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Сумма всех значений, делённая на их количество</div></div></div>"
  },
  {
    "id": "statistics206",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Медиана",
    "theme": "Центральная тенденция",
    "text": "Что такое медиана?",
    "choices": [
      "Сумма всех значений, делённая на их количество",
      "Наиболее часто встречающееся значение",
      "Среднее значение при расположении данных в порядке возрастания",
      "Разница между наибольшим и наименьшим значением"
    ],
    "answers": ["Среднее значение при расположении данных в порядке возрастания"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Медиана</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> Если $n$ нечётно: $\\text{Медиана} = x_{(n+1)/2}$; если $n$ чётно: $\\text{Медиана} = \\dfrac{x_{(n/2)} + x_{(n/2+1)}}{2}$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Среднее значение при сортировке данных</li><li><strong>Мало подвержена влиянию выбросов</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее значение при расположении данных в порядке возрастания</div></div></div>"
  },
  {
    "id": "statistics207",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Мода",
    "theme": "Центральная тенденция",
    "text": "Что такое мода?",
    "choices": [
      "Среднее значение при сортировке данных",
      "Сумма всех значений, делённая на их количество",
      "Наиболее часто встречающееся значение в наборе данных",
      "Разница между наибольшим и наименьшим значением"
    ],
    "answers": ["Наиболее часто встречающееся значение в наборе данных"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Мода</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Наиболее часто встречающееся значение в наборе данных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Значение с наибольшей частотой</li><li><strong>Полезна для категориальных данных</strong></li><li>Может отсутствовать, если все значения уникальны</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Наиболее часто встречающееся значение в наборе данных</div></div></div>"
  },
  {
    "id": "statistics208",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Размах",
    "theme": "Разброс",
    "text": "Как вычисляется размах?",
    "choices": [
      "Q3 − Q1",
      "Max − Min",
      "Сумма всех значений, делённая на n",
      "Квадратный корень из дисперсии"
    ],
    "answers": ["Max − Min"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Размах</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{Размах} = \\text{Max} - \\text{Min}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Разница между наибольшим и наименьшим значением</li><li><strong>Простая мера разброса</strong></li><li>Чувствителен к выбросам</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Max − Min</div></div></div>"
  },
  {
    "id": "statistics209",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Дисперсия выборки",
    "theme": "Разброс",
    "text": "Какая формула соответствует выборочной дисперсии?",
    "choices": [
      "$\\sigma^2 = \\dfrac{\\sum (x_i-\\mu)^2}{N}$",
      "$s^2 = \\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}$",
      "$\\text{IQR} = Q3 - Q1$",
      "$\\sigma = \\sqrt{\\sigma^2}$"
    ],
    "answers": ["$s^2 = \\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Выборочная дисперсия</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$s^2 = \\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сравнение</h5></div><div class='card-body'><ul><li><strong>Генеральная дисперсия:</strong> $\\sigma^2 = \\dfrac{\\sum (x_i-\\mu)^2}{N}$</li><li><strong>Выборочная дисперсия:</strong> $s^2 = \\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}$</li><li>В знаменателе <strong>n−1</strong> (поправка Бесселя)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $s^2 = \\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}$</div></div></div>"
  },
  {
    "id": "statistics210",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Стандартное отклонение",
    "theme": "Разброс",
    "text": "Как связано стандартное отклонение с дисперсией?",
    "choices": [
      "Стандартное отклонение равно дисперсии",
      "Стандартное отклонение — это квадратный корень из дисперсии",
      "Стандартное отклонение — это квадрат дисперсии",
      "Они не связаны"
    ],
    "answers": ["Стандартное отклонение — это квадратный корень из дисперсии"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Стандартное отклонение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\sigma = \\sqrt{\\sigma^2}$$ или $$s = \\sqrt{s^2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Квадратный корень из дисперсии</li><li>Измеряется в <strong>тех же единицах</strong>, что и данные</li><li>Часто используемая мера разброса</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Стандартное отклонение — это квадратный корень из дисперсии</div></div></div>"
  },
  {
    "id": "statistics211",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Межквартильный размах",
    "theme": "Разброс",
    "text": "Как вычисляется межквартильный размах (IQR)?",
    "choices": [
      "Max − Min",
      "Q3 − Q1",
      "Q2 − Q1",
      "Q3 − Q2"
    ],
    "answers": ["Q3 − Q1"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 IQR</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$\\text{IQR} = Q3 - Q1$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Разброс <strong>средних 50%</strong> данных</li><li><strong>Менее подвержен влиянию</strong> экстремальных значений</li><li>Используется для выявления выбросов</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Q3 − Q1</div></div></div>"
  },
  {
    "id": "statistics212",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример расчёта: среднее",
    "theme": "Примеры",
    "text": "Даны данные: 3, 5, 7, 8, 10. Чему равно среднее арифметическое?",
    "choices": [
      "5",
      "6.6",
      "7",
      "8"
    ],
    "answers": ["6.6"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт среднего</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> 3, 5, 7, 8, 10</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>Сумма = 3 + 5 + 7 + 8 + 10 = <strong>33</strong></li><li>Количество = <strong>5</strong></li><li>Среднее = 33 / 5 = <strong>6.6</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 6.6</div></div></div>"
  },
  {
    "id": "statistics213",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример расчёта: медиана",
    "theme": "Примеры",
    "text": "Даны данные: 3, 5, 7, 8, 10. Чему равна медиана?",
    "choices": [
      "5",
      "6.6",
      "7",
      "8"
    ],
    "answers": ["7"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт медианы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> 3, 5, 7, 8, 10 (уже отсортировано)</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>n = 5 (нечётное)</li><li>Медиана = x<sub>(n+1)/2</sub> = x<sub>3</sub></li><li>Третий элемент = <strong>7</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 7</div></div></div>"
  },
  {
    "id": "statistics214",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример расчёта: размах",
    "theme": "Примеры",
    "text": "Даны данные: 3, 5, 7, 8, 10. Чему равен размах?",
    "choices": [
      "3",
      "5",
      "7",
      "10"
    ],
    "answers": ["7"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Расчёт размаха</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> 3, 5, 7, 8, 10</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>Max = <strong>10</strong></li><li>Min = <strong>3</strong></li><li>Размах = 10 − 3 = <strong>7</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 7</div></div></div>"
  },
  {
    "id": "statistics215",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Квартили",
    "theme": "Квартили и процентили",
    "text": "Что показывает Q1 (первый квартиль)?",
    "choices": [
      "50% данных ниже этого значения",
      "25% данных ниже этого значения",
      "75% данных ниже этого значения",
      "Среднее значение данных"
    ],
    "answers": ["25% данных ниже этого значения"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Квартили</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определения:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Три квартиля</h5></div><div class='card-body'><ul><li><strong>Q1</strong> (25-й процентиль) → 25% данных ниже</li><li><strong>Q2</strong> (50-й процентиль) → то же, что медиана</li><li><strong>Q3</strong> (75-й процентиль) → 75% данных ниже</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> 25% данных ниже этого значения</div></div></div>"
  },
  {
    "id": "statistics216",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Графики: гистограмма",
    "theme": "Графическое представление",
    "text": "Для чего используется гистограмма?",
    "choices": [
      "Для категориальных данных",
      "Для показа распределения числовых данных",
      "Для показа пропорций категорий",
      "Для показа тренда во времени"
    ],
    "answers": ["Для показа распределения числовых данных"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Гистограмма</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Назначение:</strong> Показывает распределение числовых данных.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие графики</h5></div><div class='card-body'><ul><li><strong>Столбчатая диаграмма</strong> — для категориальных данных</li><li><strong>Ящик с усами</strong> — медиана, квартили, выбросы</li><li><strong>Круговая диаграмма</strong> — доли категорий</li><li><strong>Линейный график</strong> — тренд во времени</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Для показа распределения числовых данных</div></div></div>"
  },
  {
    "id": "statistics217",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Графики: ящик с усами",
    "theme": "Графическое представление",
    "text": "Что показывает ящик с усами (box plot)?",
    "choices": [
      "Только среднее значение",
      "Медиану, квартили и выбросы",
      "Доли категорий",
      "Тренд во времени"
    ],
    "answers": ["Медиану, квартили и выбросы"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ящик с усами</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Назначение:</strong> Показывает медиану, квартили и выбросы.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Элементы</h5></div><div class='card-body'><ul><li><strong>Ящик</strong> — от Q1 до Q3</li><li><strong>Линия внутри</strong> — медиана (Q2)</li><li><strong>Усы</strong> — до минимального и максимального значения (без выбросов)</li><li><strong>Точки</strong> — выбросы</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Медиану, квартили и выбросы</div></div></div>"
  },
  {
    "id": "statistics218",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение об описательной статистике верно?",
    "choices": [
      "Она делает прогнозы о генеральной совокупности",
      "Она только описывает данные и не делает прогнозов",
      "Она используется только для категориальных данных",
      "Она не использует графики"
    ],
    "answers": ["Она только описывает данные и не делает прогнозов"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевой вывод</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Описательная статистика <strong>обобщает данные</strong></li><li>Среднее, медиана, мода — <strong>центральная тенденция</strong></li><li>Размах, дисперсия, стандартное отклонение — <strong>разброс</strong></li><li>Квартили и IQR — <strong>распределение и выбросы</strong></li><li>Графики — <strong>визуализация</strong></li><li><strong>Не делает прогнозов</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Она только описывает данные и не делает прогнозов</div></div></div>"
  }
]
  
window.quizesSets = quizesSets;