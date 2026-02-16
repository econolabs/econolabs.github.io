
let quizesSets = [

    {
    "id": "prob044",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Дисперсия",
    "theme": "Дисперсия и стандартное отклонение",
    "graphType": "variance-comparison",
    "graphParams": {
        "mean": 5,
        "sigma1": 1,
        "sigma2": 2.5,
        "color1": "#007bff",
        "color2": "#dc3545",
        "label1": "σ = 1 (узкое)",
        "label2": "σ = 2.5 (широкое)"
    },
    "text": "На графике показаны два распределения с одинаковым средним (μ=5). Какое имеет большее стандартное отклонение?",
    "choices": ["Синее (σ=1)", "Красное (σ=2.5)", "Одинаковое", "Не определить", "Зависит от данных"],
    "answers": ["Красное (σ=2.5)"],
    "hint": "..."
},
{
    "id": "prob001",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Случайное событие",
    "theme": "Вероятность случайного события",
    "text": "В мешке лежат 3 красных и 2 синих шара. Какова вероятность наугад вытащить красный шар?",
    "choices": ["0.2", "0.4", "0.5", "0.6", "0.8"],
    "answers": ["0.6"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Вероятность = благоприятные исходы / все исходы. $P(A) = \\frac{m}{n}$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $m = 3$ (красные), $n = 5$ (всего). $P = \\frac{3}{5} = 0.6$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> В лотерее 5 билетов, 3 выигрышных. Шанс купить выигрышный — 60%.</div></div></div></div></div>`
  },
  {
    "id": "prob002",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Среднее арифметическое",
    "theme": "Представление данных",
    "text": "Найдите среднее арифметическое чисел: 5, 8, 12, 15, 10",
    "choices": ["8", "9", "10", "11", "12"],
    "answers": ["10"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Среднее = сумма всех чисел / количество чисел</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Сумма: $5+8+12+15+10=50$. Количество: 5. Среднее: $\\frac{50}{5}=10$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Средняя температура за 5 дней: 5°, 8°, 12°, 15°, 10°. Средняя: 10°.</div></div></div></div></div>`
  },
  {
    "id": "prob003",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Медиана",
    "theme": "Представление данных",
    "text": "Найдите медиану набора чисел: 3, 7, 2, 9, 5",
    "choices": ["3", "5", "7", "9", "2"],
    "answers": ["5"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Медиана — серединное значение в упорядоченном ряду</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Упорядочим: 2, 3, 5, 7, 9. Средний элемент: 5</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Рост 5 учеников: 2, 3, 5, 7, 9 м? Нет, это пример для понимания медианы.</div></div></div></div></div>`
  },
  {
    "id": "prob004",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Размах",
    "theme": "Представление данных",
    "text": "Найдите размах чисел: 12, 18, 25, 30, 42",
    "choices": ["12", "18", "25", "30", "30"],
    "answers": ["30"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Размах = наибольшее - наименьшее значение</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Наибольшее: 42, наименьшее: 12. Размах: $42-12=30$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Цены товаров: от 12 до 42 руб. Разброс цен — 30 рублей.</div></div></div></div></div>`
  },
  {
    "id": "prob005",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Противоположное событие",
    "theme": "Операции над событиями",
    "text": "Вероятность дождя завтра 0.3. Какова вероятность, что дождя не будет?",
    "choices": ["0.3", "0.5", "0.7", "0.9", "1.0"],
    "answers": ["0.7"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> $P(\\bar{A}) = 1 - P(A)$, где $\\bar{A}$ — противоположное событие</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $P(\\text{нет дождя}) = 1 - 0.3 = 0.7$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Шанс выигрыша в лотерее 30%, значит шанс проигрыша 70%.</div></div></div></div></div>`
  },
  {
    "id": "prob006",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Бросание кубика",
    "theme": "Равновозможные события",
    "text": "Какова вероятность выпадения числа больше 4 на игральном кубике?",
    "choices": ["1/6", "1/3", "1/2", "2/3", "5/6"],
    "answers": ["1/3"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> У кубика 6 равновозможных исходов (1,2,3,4,5,6)</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Благоприятные: 5 и 6 (2 исхода). $P = \\frac{2}{6} = \\frac{1}{3}$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Вероятность получить 5 или 6 при броске — около 33%.</div></div></div></div></div>`
  },
  {
    "id": "prob007",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Независимые события",
    "theme": "Умножение вероятностей",
    "text": "Монету бросают 2 раза. Какова вероятность выпадения двух орлов?",
    "choices": ["0.25", "0.5", "0.75", "1.0", "0.125"],
    "answers": ["0.25"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Для независимых событий: $P(A \\cap B) = P(A) \\cdot P(B)$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $P(\\text{орёл})=0.5$. $P(\\text{два орла})=0.5 \\times 0.5 = 0.25$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Шанс что оба раза выпадет орёл — 25 из 100 случаев.</div></div></div></div></div>`
  },
  {
    "id": "prob008",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Факториал",
    "theme": "Перестановки и факториал",
    "text": "Чему равен $4!$ (4 факториал)?",
    "choices": ["4", "12", "16", "24", "48"],
    "answers": ["24"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> $n! = 1 \\times 2 \\times 3 \\times ... \\times n$. $0! = 1$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $4! = 1 \\times 2 \\times 3 \\times 4 = 24$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> 4 книги на полке можно расставить 24 способами.</div></div></div></div></div>`
  },
  {
    "id": "prob009",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Наибольшее значение",
    "theme": "Представление данных",
    "text": "В наборе данных: 15, 22, 18, 25, 19, 22. Каково наибольшее значение?",
    "choices": ["15", "18", "22", "25", "19"],
    "answers": ["25"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Наибольшее значение — максимальное число в наборе</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Просматриваем: 15, 22, 18, 25, 19, 22. Максимум: 25</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Самый высокий рост в группе из 6 человек — 25 условных единиц.</div></div></div></div></div>`
  },
  {
    "id": "prob010",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Объединение событий",
    "theme": "Операции над событиями",
    "text": "В колоде 36 карт. Какова вероятность вытащить даму или пиковой масти? (Дама пик считается один раз)",
    "choices": ["1/9", "2/9", "1/3", "4/9", "5/9"],
    "answers": ["2/9"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ (формула сложения)</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Дамы: 4/36. Пики: 9/36. Дама пик: 1/36. $P = 4/36 + 9/36 - 1/36 = 12/36 = 2/9$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Вероятность вытащить даму или пику из колоды — примерно 22%.</div></div></div></div></div>`
  },
  {
    "id": "prob041",
    "type": "multiplechoices",
    "header": "Геометрия вероятности",
    "title": "Геометрическое распределение",
    "theme": "Геометрическое распределение",
    "graphType": "geometric-distribution",
    "graphParams": {
      "p": 0.3,
      "maxK": 10,
      "highlightK": 3
    },
    "text": "На графике показано геометрическое распределение. Вероятность успеха в каждом испытании p = 0.3. Какова вероятность, что первый успех случится на 3-м испытании?",
    "choices": ["0.063", "0.147", "0.210", "0.300", "0.090"],
    "answers": ["0.147"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Геометрическое распределение: $P(X=k) = p(1-p)^{k-1}$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $P(X=3) = 0.3 × (0.7)^2 = 0.3 × 0.49 = 0.147$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Вероятность что 3-й звонок будет первым успешным при вероятности ответа 30%.</div></div></div></div></div>`
  },
  {
    "id": "prob042",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Нормальное распределение",
    "theme": "Нормальное распределение",
    "graphType": "normal-distribution",
    "graphParams": {
      "mean": 100,
      "stdDev": 15,
      "showArea": [85, 115],
      "xMin": 55,
      "xMax": 145
    },
    "text": "На графике показано нормальное распределение с μ=100, σ=15. Какая доля значений лежит между 85 и 115?",
    "choices": ["34%", "68%", "95%", "50%", "99.7%"],
    "answers": ["68%"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Правило 68-95-99.7:</strong> В нормальном распределении в пределах ±1σ от среднего лежит ≈68% данных</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> 85=100-15, 115=100+15 → это ±1σ → 68%</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> В тесте IQ (μ=100, σ=15) у 68% людей IQ между 85 и 115.</div></div></div></div></div>`
  },
  {
    "id": "prob043",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Диаграмма Эйлера",
    "theme": "Диаграммы Эйлера",
    "graphType": "euler-diagram",
    "graphParams": {
      "pA": 0.4,
      "pB": 0.3,
      "pIntersection": 0.1
    },
    "text": "На диаграмме Эйлера показаны события A и B. Вероятности: P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. Чему равна P(A∪B)?",
    "choices": ["0.6", "0.7", "0.5", "0.8", "0.9"],
    "answers": ["0.6"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Формула сложения:</strong> $P(A∪B) = P(A) + P(B) - P(A∩B)$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $P(A∪B) = 0.4 + 0.3 - 0.1 = 0.6$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Вероятность что студент знает математику или физику, если некоторые знают оба предмета.</div></div></div></div></div>`
  },
  
  {
    "id": "prob044",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Дисперсия",
    "theme": "Дисперсия и стандартное отклонение",
    "graphType": "variance-comparison",
    "graphParams": {
      "mean": 5,
      "sigma1": 1,
      "sigma2": 2.5
    },
    "text": "На графике показаны два распределения с одинаковым средним. Какое имеет большее стандартное отклонение?",
    "choices": ["Синее (σ=1)", "Красное (σ=2.5)", "Одинаковое", "Не определить", "Зависит от данных"],
    "answers": ["Красное (σ=2.5)"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Большее стандартное отклонение → шире "колокол" распределения</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Красная кривая шире и ниже → больше дисперсия</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Оценки в классе А (σ=1) более однородны, чем в классе Б (σ=2.5).</div></div></div></div></div>`
  },
  {
    "id": "prob045",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Треугольник Паскаля",
    "theme": "Треугольник Паскаля",
    "graphType": "pascal-triangle",
    "graphParams": {
      "n": 5,
      "highlightRow": 5,
      "highlightCol": 2,
      "showFormula": true
    },
    "text": "В треугольнике Паскаля показаны биномиальные коэффициенты. Чему равно C(5,2)?",
    "choices": ["5", "10", "15", "20", "25"],
    "answers": ["10"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Треугольник Паскаля:</strong> C(n,k) находится в n-й строке на k-й позиции (нумерация с 0)</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> C(5,2) = 10 (6-я строка, 3-й элемент если считать с 1)</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Сколькими способами выбрать 2 человек из 5: $\\binom{5}{2}=10$.</div></div></div></div></div>`
  },
  {
    "id": "prob046",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Гистограмма",
    "theme": "Представление данных",
    "graphType": "histogram",
    "graphParams": {
      "data": [12, 15, 18, 22, 25, 28, 30, 15, 18, 22, 25, 22, 18],
      "bins": 6
    },
    "text": "На гистограмме показано распределение оценок за тест. Какой столбец имеет наибольшую частоту?",
    "choices": ["12-15", "16-19", "20-23", "24-27", "28-31"],
    "answers": ["16-19"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Высота столбца гистограммы показывает частоту (количество) в данном интервале</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Интервал 16-19 содержит значения 18,18,18 → 3 значения, это максимум</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> В классе больше всего учеников получили оценки 16-19 баллов.</div></div></div></div></div>`
  },
  {
    "id": "prob047",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Дерево вероятностей",
    "theme": "Дерево случайного эксперимента",
    "graphType": "probability-tree",
    "graphParams": {
      "branches": [
        {"label": "A", "probability": 0.4, "children": [
          {"label": "A∩C", "probability": 0.2},
          {"label": "A∩D", "probability": 0.2}
        ]},
        {"label": "B", "probability": 0.6, "children": [
          {"label": "B∩C", "probability": 0.3},
          {"label": "B∩D", "probability": 0.3}
        ]}
      ]
    },
    "text": "На дереве вероятностей показаны события. Какова вероятность события C?",
    "choices": ["0.2", "0.3", "0.4", "0.5", "0.6"],
    "answers": ["0.5"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Формула полной вероятности: $P(C) = P(A)P(C|A) + P(B)P(C|B)$</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> $P(C) = 0.4 × 0.5 + 0.6 × 0.5 = 0.2 + 0.3 = 0.5$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Вероятность сдать экзамен, если 40% готовятся хорошо (из них 50% сдают) и 60% готовятся плохо (из них 30% сдают).</div></div></div></div></div>`
  },
  {
    "id": "prob048",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Box plot",
    "theme": "Представление данных",
    "graphType": "box-plot",
    "graphParams": {
      "data": [10, 15, 20, 25, 30, 35, 40, 45, 50, 22, 28, 31, 33, 27, 19]
    },
    "text": "На box plot показано распределение данных. Чему равна медиана?",
    "choices": ["25", "27", "28", "30", "31"],
    "answers": ["28"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Медиана — линия внутри ящика, делит данные пополам</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Упорядочиваем данные, находим средний элемент: 28</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Половина учеников набрала не более 28 баллов.</div></div></div></div></div>`
  },
  {
    "id": "prob049",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Биномиальное распределение",
    "theme": "Биномиальное распределение",
    "graphType": "binomial-distribution",
    "graphParams": {
      "n": 10,
      "p": 0.5
    },
    "text": "Монету бросают 10 раз. На графике показано биномиальное распределение. Каково наиболее вероятное число орлов?",
    "choices": ["4", "5", "6", "7", "8"],
    "answers": ["5"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Для Bin(n,p) с p=0.5 наиболее вероятное значение — n/2</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> n=10, p=0.5 → max при k=5, $P(X=5)≈0.246$</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> При 10 бросках симметричной монеты чаще всего выпадает 5 орлов.</div></div></div></div></div>`
  },
  {
    "id": "prob050",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Scatter plot",
    "theme": "Корреляция",
    "graphType": "scatter-plot",
    "graphParams": {
      "data": [
        [1, 2], [2, 3], [3, 5], [4, 4], [5, 6],
        [6, 5], [7, 8], [8, 7], [9, 9], [10, 10]
      ],
      "showRegression": true
    },
    "text": "На диаграмме рассеяния показана зависимость между X и Y. Какая связь между переменными?",
    "choices": ["Отрицательная", "Положительная", "Нет связи", "Криволинейная", "Случайная"],
    "answers": ["Положительная"],
    "hint": `<div class="container p-0"><div class="row"><div class="col-12"><div class="alert alert-primary p-2"><strong>Теория:</strong> Положительная корреляция — при росте X растет Y</div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Решение:</strong> Точки образуют восходящий тренд → положительная связь</div></div></div><div class="col-md-6"><div class="card h-100"><div class="card-body p-2"><strong>Пример:</strong> Чем больше часов подготовки, тем выше балл на экзамене.</div></div></div></div></div>`
  }
]

window.quizesSets = quizesSets;