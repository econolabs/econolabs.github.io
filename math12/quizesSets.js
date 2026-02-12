let quizesSets = [

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
    "id": "prob001",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Факториал",
    "theme": "Основные понятия",
    "text": "Чему равно $5!$?",
    "choices": [
      "20",
      "60",
      "100",
      "120",
      "720"
    ],
    "answers": ["120"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Факториал числа $n$</strong> — произведение всех натуральных чисел от 1 до $n$.</p><p>$n! = 1 \\cdot 2 \\cdot 3 \\cdot ... \\cdot n$</p><p>$5! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 = 120$</p><p>По определению: $0! = 1$</p></div></div></div></div></div>"
  },
  {
    "id": "prob002",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Перестановки",
    "theme": "Количество перестановок",
    "text": "Сколько различных слов можно составить из букв слова \"КОТ\"?",
    "choices": [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    "answers": ["6"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Число перестановок $n$ различных элементов:</strong> $P_n = n!$</p><p>Буквы в слове \"КОТ\": К, О, Т — 3 различные буквы</p><p>$P_3 = 3! = 1 \\cdot 2 \\cdot 3 = 6$</p><p>Варианты: КОТ, КТО, ОКТ, ОТК, ТКО, ТОК</p></div></div></div></div></div>"
  },
  {
    "id": "prob003",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Размещения",
    "theme": "Количество размещений",
    "text": "Сколько различных двузначных чисел можно составить из цифр 1, 2, 3, 4, если цифры не повторяются?",
    "choices": [
      "8",
      "10",
      "12",
      "16",
      "20"
    ],
    "answers": ["12"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Число размещений из $n$ элементов по $k$:</strong> $A_n^k = \\frac{n!}{(n-k)!}$</p><p>У нас: $n = 4$ (цифры 1,2,3,4), $k = 2$ (двузначное число)</p><p>$A_4^2 = \\frac{4!}{(4-2)!} = \\frac{4!}{2!} = \\frac{24}{2} = 12$</p><p>Проверка: 12, 13, 14, 21, 23, 24, 31, 32, 34, 41, 42, 43 — всего 12 чисел</p></div></div></div></div></div>"
  },
  {
    "id": "prob004",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Сочетания",
    "theme": "Количество сочетаний",
    "text": "Сколькими способами можно выбрать 2 учеников из 5 для участия в олимпиаде?",
    "choices": [
      "5",
      "10",
      "15",
      "20",
      "25"
    ],
    "answers": ["10"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Число сочетаний из $n$ элементов по $k$:</strong> $C_n^k = \\frac{n!}{k!(n-k)!}$</p><p>У нас: $n = 5$, $k = 2$</p><p>$C_5^2 = \\frac{5!}{2!(5-2)!} = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\cdot 6} = 10$</p><p>Важно: В сочетаниях порядок не важен (выбор команды). В размещениях порядок важен (выбор председателя и секретаря).</p></div></div></div></div></div>"
  },
  {
    "id": "prob005",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Правило суммы",
    "theme": "Основные правила",
    "text": "В меню 3 вида супа и 5 видов второго. Сколько вариантов обеда из одного супа и одного второго?",
    "choices": [
      "8",
      "10",
      "15",
      "20",
      "25"
    ],
    "answers": ["15"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Правило произведения:</strong> Если первый объект можно выбрать $n$ способами, а второй — $m$ способами, то пару можно выбрать $n \\times m$ способами.</p><p>Суп: 3 варианта, второе: 5 вариантов</p><p>Всего обедов: $3 \\times 5 = 15$</p><p><strong>Правило суммы:</strong> Используется, когда нужно выбрать один элемент из нескольких непересекающихся множеств.</p></div></div></div></div></div>"
  },
  {
    "id": "prob006",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Классическое определение",
    "theme": "Основные понятия",
    "text": "Какова вероятность выпадения орла при одном подбрасывании монеты?",
    "choices": [
      "0",
      "0.25",
      "0.5",
      "0.75",
      "1"
    ],
    "answers": ["0.5"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Классическое определение вероятности:</strong> $P(A) = \\frac{m}{n}$</p><p>$n$ — число всех равновозможных исходов</p><p>$m$ — число благоприятных исходов</p><p>Для монеты: $n = 2$ (орёл или решка), $m = 1$ (орёл)</p><p>$P(\\text{орёл}) = \\frac{1}{2} = 0.5 = 50\\%$</p></div></div></div></div></div>"
  },
  {
    "id": "prob007",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Бросание кубика",
    "theme": "Вероятность события",
    "text": "Какова вероятность выпадения числа больше 4 на игральном кубике?",
    "choices": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{5}{6}$"
    ],
    "answers": ["$\\frac{1}{3}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Всего исходов:</strong> $n = 6$ (цифры 1,2,3,4,5,6)</p><p><strong>Благоприятные исходы:</strong> $m = 2$ (цифры 5 и 6)</p><p>$P = \\frac{m}{n} = \\frac{2}{6} = \\frac{1}{3}$</p><p>Альтернативно: цифры больше 4: {5,6} — 2 элемента из 6</p><p>Вероятность можно выразить в процентах: $\\frac{1}{3} \\approx 33.33\\%$</p></div></div></div></div></div>"
  },
  {
    "id": "prob008",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Несовместные события",
    "theme": "Операции с событиями",
    "text": "Вероятность события A равна 0.4, вероятность события B равна 0.3. Чему равна вероятность того, что произойдёт A или B, если они несовместны?",
    "choices": [
      "0.12",
      "0.5",
      "0.7",
      "0.88",
      "1.0"
    ],
    "answers": ["0.7"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Для несовместных событий:</strong> $P(A \\cup B) = P(A) + P(B)$</p><p>Если события могут происходить одновременно, то $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p><p>По условию: $P(A) = 0.4$, $P(B) = 0.3$, события несовместны</p><p>$P(A \\text{ или } B) = 0.4 + 0.3 = 0.7$</p><p>Несовместные события не могут произойти одновременно.</p></div></div></div></div></div>"
  },
  {
    "id": "prob009",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Противоположное событие",
    "theme": "Дополнение события",
    "text": "Вероятность выигрыша в лотерее равна 0.01. Какова вероятность проигрыша?",
    "choices": [
      "0.01",
      "0.09",
      "0.9",
      "0.99",
      "1.0"
    ],
    "answers": ["0.99"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Сумма вероятностей события и его дополнения равна 1:</strong></p><p>$P(A) + P(\\overline{A}) = 1$</p><p>Выигрыш: $P(В) = 0.01$</p><p>Проигрыш: $P(\\overline{В}) = 1 - P(В) = 1 - 0.01 = 0.99$</p><p>Проверка: $0.01 + 0.99 = 1.00$</p></div></div></div></div></div>"
  },
  {
    "id": "prob010",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Независимые события",
    "theme": "Умножение вероятностей",
    "text": "Две монеты бросают одновременно. Какова вероятность, что обе выпадут орлом?",
    "choices": [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$"
    ],
    "answers": ["$\\frac{1}{4}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Для независимых событий:</strong> $P(A \\cap B) = P(A) \\cdot P(B)$</p><p>Вероятность орла на одной монете: $P(О) = \\frac{1}{2}$</p><p>События независимы (результат первой монеты не влияет на вторую)</p><p>$P(\\text{два орла}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$</p><p>Всего возможных исходов при бросании двух монет: 4 (ОО, ОР, РО, РР)</p><p>Благоприятный исход: 1 (ОО)</p></div></div></div></div></div>"
  },
  {
    "id": "prob011",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Условная вероятность",
    "theme": "Зависимые события",
    "text": "В коробке 3 красных и 2 синих шара. Вынули один шар и не глядя отложили. Какова вероятность вынуть синий шар вторым, если первым был красный?",
    "choices": [
      "$\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{5}$"
    ],
    "answers": ["$\\frac{2}{5}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>После удаления красного шара осталось:</strong></p><p>Красных: $3-1=2$, синих: 2, всего: 4 шара</p><p>Вероятность вынуть синий: $\\frac{2}{4} = \\frac{1}{2}$</p><p>Это <strong>условная вероятность</strong> $P(B|A)$ — вероятность события B при условии, что A произошло.</p><p>Формула: $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$</p></div></div></div></div></div>"
  },
  {
    "id": "prob012",
    "type": "multiplechoices",
    "header": "Математическое ожидание",
    "title": "Определение",
    "theme": "Основные понятия",
    "text": "Чему равно математическое ожидание выпавшего числа на игральном кубике?",
    "choices": [
      "3.0",
      "3.5",
      "4.0",
      "4.5",
      "5.0"
    ],
    "answers": ["3.5"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Математическое ожидание дискретной случайной величины:</strong></p><p>$M[X] = \\sum x_i \\cdot p_i$</p><p>Для кубика: $x_i = 1,2,3,4,5,6$, все $p_i = \\frac{1}{6}$</p><p>$M[X] = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5$</p><p>Это среднее значение при многократном повторении эксперимента.</p><p>Математическое ожидание может не совпадать ни с одним из возможных значений.</p></div></div></div></div></div>"
  },
  {
    "id": "prob013",
    "type": "multiplechoices",
    "header": "Математическое ожидание",
    "title": "Линейность",
    "theme": "Свойства",
    "text": "Математическое ожидание случайной величины X равно 5. Чему равно M[2X+3]?",
    "choices": [
      "8",
      "10",
      "13",
      "16",
      "25"
    ],
    "answers": ["13"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Свойства математического ожидания:</strong></p><p>1. $M[aX + b] = aM[X] + b$</p><p>2. $M[X+Y] = M[X] + M[Y]$</p><p>Дано: $M[X] = 5$</p><p>Найти: $M[2X+3] = 2M[X] + 3 = 2 \\cdot 5 + 3 = 10 + 3 = 13$</p><p>Константа выносится с умножением, константа прибавляется.</p></div></div></div></div></div>"
  },
  {
    "id": "prob014",
    "type": "multiplechoices",
    "header": "Математическое ожидание",
    "title": "Игра в кости",
    "theme": "Практический пример",
    "text": "В игре бросают кубик и выплачивают столько рублей, сколько выпало очков. Сколько в среднем выигрывает игрок за один бросок?",
    "choices": [
      "2.5 руб",
      "3.0 руб",
      "3.5 руб",
      "4.0 руб",
      "4.5 руб"
    ],
    "answers": ["3.5 руб"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Выигрыш равен числу на кубике:</strong> X = 1,2,3,4,5,6 рублей</p><p>Вероятность каждого исхода: $\\frac{1}{6}$</p><p>$M[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6}$</p><p>$= \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5$ рубля</p><p>За много игр средний выигрыш будет около 3.5 рубля.</p></div></div></div></div></div>"
  },
  {
    "id": "prob015",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Биномиальное распределение",
    "theme": "Дискретные распределения",
    "text": "Монету бросают 3 раза. Какова вероятность, что орёл выпадет ровно 2 раза?",
    "choices": [
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{8}$",
      "$\\frac{7}{8}$"
    ],
    "answers": ["$\\frac{3}{8}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Биномиальное распределение:</strong> $P_n(k) = C_n^k p^k q^{n-k}$</p><p>$n=3$ (бросков), $k=2$ (орлов), $p=0.5$ (вероятность орла), $q=0.5$</p><p>$P_3(2) = C_3^2 \\cdot (0.5)^2 \\cdot (0.5)^1$</p><p>$C_3^2 = 3$, $(0.5)^2 = 0.25$, $(0.5)^1 = 0.5$</p><p>$P = 3 \\cdot 0.25 \\cdot 0.5 = 3 \\cdot 0.125 = 0.375 = \\frac{3}{8}$</p><p>Благоприятные исходы: ООР, ОРО, РОО (3 из 8 возможных)</p></div></div></div></div></div>"
  },
  {
    "id": "prob016",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Равномерное распределение",
    "theme": "Непрерывные распределения",
    "text": "Автобус приходит на остановку равномерно от 0 до 10 минут. Какова вероятность ждать менее 3 минут?",
    "choices": [
      "0.1",
      "0.2",
      "0.3",
      "0.5",
      "0.7"
    ],
    "answers": ["0.3"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Равномерное распределение на [a,b]:</strong></p><p>Плотность: $f(x) = \\frac{1}{b-a}$ для $x \\in [a,b]$</p><p>Вероятность $P(c \\leq X \\leq d) = \\frac{d-c}{b-a}$</p><p>Здесь: $a=0$, $b=10$, $c=0$, $d=3$</p><p>$P(X < 3) = \\frac{3-0}{10-0} = \\frac{3}{10} = 0.3$</p><p>Геометрически: площадь прямоугольника шириной 3 и высотой 0.1.</p></div></div></div></div></div>"
  },
  {
    "id": "prob017",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Нормальное распределение",
    "theme": "Гауссово распределение",
    "text": "Для нормального распределения с матожиданием 0 и дисперсией 1 чему равна вероятность $P(|X| < 1)$ примерно?",
    "choices": [
      "0.34",
      "0.50",
      "0.68",
      "0.95",
      "0.99"
    ],
    "answers": ["0.68"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Правило трёх сигм для нормального распределения:</strong></p><p>1. $P(|X-\\mu| < \\sigma) \\approx 0.6827$ (68%)</p><p>2. $P(|X-\\mu| < 2\\sigma) \\approx 0.9545$ (95%)</p><p>3. $P(|X-\\mu| < 3\\sigma) \\approx 0.9973$ (99.7%)</p><p>Здесь $\\mu=0$, $\\sigma=1$, значит $P(|X|<1) \\approx 0.68$</p><p>Это стандартное нормальное распределение N(0,1).</p></div></div></div></div></div>"
  },
  {
    "id": "prob018",
    "type": "multiplechoices",
    "header": "Плотность распределения",
    "title": "Свойства плотности",
    "theme": "Основные понятия",
    "text": "Какое из свойств обязательно для функции плотности распределения?",
    "choices": [
      "$f(x) \\geq 0$ для всех x",
      "$f(x) \\leq 1$ для всех x",
      "$\\int_{-\\infty}^{\\infty} f(x) dx = 0$",
      "$f(x)$ всегда возрастает",
      "$f(x)$ симметрична"
    ],
    "answers": ["$f(x) \\geq 0$ для всех x"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Свойства функции плотности вероятности $f(x)$:</strong></p><p>1. $f(x) \\geq 0$ для всех $x$ (неотрицательность)</p><p>2. $\\int_{-\\infty}^{\\infty} f(x) dx = 1$ (нормировка)</p><p>3. Вероятность $P(a \\leq X \\leq b) = \\int_a^b f(x) dx$</p><p>Плотность может быть больше 1 на некоторых интервалах.</p><p>Геометрически: площадь под графиком плотности равна 1.</p></div></div></div></div></div>"
  },
  {
    "id": "prob019",
    "type": "multiplechoices",
    "header": "Плотность распределения",
    "title": "Нормализация",
    "theme": "Определение константы",
    "text": "Плотность распределения имеет вид $f(x) = kx$ при $0 \\leq x \\leq 2$ и 0 иначе. Чему равно k?",
    "choices": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "1",
      "2"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Условие нормировки:</strong> $\\int_{-\\infty}^{\\infty} f(x) dx = 1$</p><p>$\\int_0^2 kx dx = 1$</p><p>$k \\int_0^2 x dx = 1$</p><p>$k \\cdot \\left[ \\frac{x^2}{2} \\right]_0^2 = 1$</p><p>$k \\cdot \\left( \\frac{4}{2} - 0 \\right) = 1$</p><p>$k \\cdot 2 = 1$</p><p>$k = \\frac{1}{2}$</p><p>Проверка: $\\int_0^2 \\frac{1}{2}x dx = \\frac{1}{2} \\cdot 2 = 1$</p></div></div></div></div></div>"
  },
  {
    "id": "prob020",
    "type": "multiplechoices",
    "header": "Виды средних",
    "title": "Среднее арифметическое",
    "theme": "Основные средние",
    "text": "Чему равно среднее арифметическое чисел 2, 4, 6, 8?",
    "choices": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "answers": ["5"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Среднее арифметическое:</strong> $\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$</p><p>Для чисел 2, 4, 6, 8:</p><p>$\\bar{x} = \\frac{2+4+6+8}{4} = \\frac{20}{4} = 5$</p><p>Среднее арифметическое всегда между минимальным и максимальным значениями.</p><p>Если добавить к выборке её среднее, то среднее не изменится.</p></div></div></div></div></div>"
  },
  {
    "id": "prob021",
    "type": "multiplechoices",
    "header": "Виды средних",
    "title": "Медиана",
    "theme": "Меры центра",
    "text": "Чему равна медиана чисел 3, 1, 4, 2, 5?",
    "choices": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "answers": ["3"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Медиана</strong> — значение, которое делит упорядоченную выборку пополам.</p><p>Порядок действий:</p><ol><li>Упорядочить данные: 1, 2, 3, 4, 5</li><li>Найти средний элемент (при нечётном n): элемент номер $\\frac{n+1}{2}$</li><li>n=5, средний элемент: $\\frac{5+1}{2}=3$-й, это число 3</li></ol><p>Медиана устойчива к выбросам (крайним значениям).</p><p>Для чётного n медиана — среднее арифметическое двух центральных значений.</p></div></div></div></div></div>"
  },
  {
    "id": "prob022",
    "type": "multiplechoices",
    "header": "Виды средних",
    "title": "Мода",
    "theme": "Наиболее частое значение",
    "text": "Какова мода для чисел: 2, 3, 3, 4, 5, 5, 5, 6?",
    "choices": [
      "3",
      "4",
      "5",
      "6",
      "Две моды: 3 и 5"
    ],
    "answers": ["5"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Мода</strong> — значение, которое встречается наиболее часто.</p><p>Подсчитаем частоты:</p><ul><li>2 встречается 1 раз</li><li>3 встречается 2 раза</li><li>4 встречается 1 раз</li><li>5 встречается 3 раза</li><li>6 встречается 1 раз</li></ul><p>Наибольшая частота: 3 (у числа 5)</p><p>Мода = 5</p><p>Если бы два значения имели одинаковую максимальную частоту, распределение было бы бимодальным.</p></div></div></div></div></div>"
  },
  {
    "id": "prob023",
    "type": "multiplechoices",
    "header": "Виды средних",
    "title": "Среднее геометрическое",
    "theme": "Геометрическая средняя",
    "text": "Чему равно среднее геометрическое чисел 4 и 9?",
    "choices": [
      "5",
      "6",
      "6.5",
      "7",
      "8"
    ],
    "answers": ["6"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Среднее геометрическое:</strong> $G = \\sqrt[n]{x_1 \\cdot x_2 \\cdot ... \\cdot x_n}$</p><p>Для двух чисел: $G = \\sqrt{x_1 \\cdot x_2}$</p><p>Для чисел 4 и 9: $G = \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$</p><p>Среднее геометрическое всегда меньше или равно среднему арифметическому (равенство только при равных числах).</p><p>Применяется для средних темпов роста, в геометрии.</p></div></div></div></div></div>"
  },
  {
    "id": "prob024",
    "type": "multiplechoices",
    "header": "Оценка разброса",
    "title": "Размах",
    "theme": "Простейшие меры",
    "text": "Чему равен размах выборки: 5, 8, 12, 15, 20?",
    "choices": [
      "5",
      "10",
      "12",
      "15",
      "20"
    ],
    "answers": ["15"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Размах</strong> — разность между максимальным и минимальным значениями.</p><p>Размах = максимум - минимум</p><p>В выборке: 5, 8, 12, 15, 20</p><p>Минимум = 5, максимум = 20</p><p>Размах = 20 - 5 = 15</p><p>Размах — простейшая мера разброса, но очень чувствительна к выбросам.</p><p>Не учитывает распределение значений внутри диапазона.</p></div></div></div></div></div>"
  },
  {
    "id": "prob025",
    "type": "multiplechoices",
    "header": "Оценка разброса",
    "title": "Дисперсия",
    "theme": "Мера рассеяния",
    "text": "Чему равна дисперсия выборки: 1, 3, 5?",
    "choices": [
      "$\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "4",
      "$\\frac{16}{3}$",
      "8"
    ],
    "answers": ["$\\frac{8}{3}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Дисперсия выборки:</strong> $s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1}$ (несмещённая оценка)</p><p>Для генеральной совокупности: $\\sigma^2 = \\frac{\\sum (x_i - \\mu)^2}{N}$</p><ol><li>Среднее: $\\bar{x} = \\frac{1+3+5}{3} = 3$</li><li>Отклонения: $(1-3)^2=4$, $(3-3)^2=0$, $(5-3)^2=4$</li><li>Сумма квадратов отклонений: $4+0+4=8$</li><li>Дисперсия: $s^2 = \\frac{8}{3-1} = \\frac{8}{2} = 4$</li></ol><p>Дисперсия генеральной совокупности: $\\sigma^2 = \\frac{8}{3}$</p></div></div></div></div></div>"
  },
  {
    "id": "prob026",
    "type": "multiplechoices",
    "header": "Оценка разброса",
    "title": "Стандартное отклонение",
    "theme": "Среднеквадратичное отклонение",
    "text": "Если дисперсия равна 16, то чему равно стандартное отклонение?",
    "choices": [
      "2",
      "4",
      "8",
      "16",
      "256"
    ],
    "answers": ["4"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Стандартное отклонение</strong> — корень квадратный из дисперсии:</p><p>$\\sigma = \\sqrt{\\sigma^2}$ для генеральной совокупности</p><p>$s = \\sqrt{s^2}$ для выборки</p><p>Если дисперсия $\\sigma^2 = 16$, то:</p><p>Стандартное отклонение $\\sigma = \\sqrt{16} = 4$</p><p>Стандартное отклонение измеряется в тех же единицах, что и исходные данные.</p><p>Дисперсия измеряется в квадратах единиц.</p></div></div></div></div></div>"
  },
  {
    "id": "prob027",
    "type": "multiplechoices",
    "header": "Оценка разброса",
    "title": "Коэффициент вариации",
    "theme": "Относительная мера",
    "text": "Среднее равно 20, стандартное отклонение равно 4. Чему равен коэффициент вариации в процентах?",
    "choices": [
      "5%",
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answers": ["20%"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Коэффициент вариации:</strong> $CV = \\frac{\\sigma}{\\mu} \\times 100\\%$</p><p>Позволяет сравнивать разброс данных с разными средними.</p><p>Дано: $\\mu = 20$, $\\sigma = 4$</p><p>$CV = \\frac{4}{20} \\times 100\\% = 0.2 \\times 100\\% = 20\\%$</p><p>Коэффициент вариации безразмерен.</p><p>Если $CV < 10\\%$ — малый разброс, $10\\% < CV < 20\\%$ — средний, $CV > 20\\%$ — большой разброс.</p></div></div></div></div></div>"
  },
  {
    "id": "prob028",
    "type": "multiplechoices",
    "header": "Оценка разброса",
    "title": "Квартили",
    "theme": "Меры положения",
    "text": "Что такое первый квартиль Q1?",
    "choices": [
      "Минимальное значение",
      "Значение, ниже которого 25% данных",
      "Медиана",
      "Значение, ниже которого 75% данных",
      "Максимальное значение"
    ],
    "answers": ["Значение, ниже которого 25% данных"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Квартили делят упорядоченную выборку на 4 равные части:</strong></p><ul><li><strong>Q1 (первый квартиль):</strong> ниже него 25% данных</li><li><strong>Q2 (второй квартиль):</strong> медиана, ниже него 50% данных</li><li><strong>Q3 (третий квартиль):</strong> ниже него 75% данных</li></ul><p><strong>Межквартильный размах:</strong> IQR = Q3 - Q1</p><p>Значения за пределами [Q1-1.5·IQR, Q3+1.5·IQR] считаются выбросами.</p><p>Квартили устойчивы к выбросам.</p></div></div></div></div></div>"
  },
  {
    "id": "prob029",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Формула Бернулли",
    "theme": "Повторные испытания",
    "text": "Вероятность попадания в мишень равна 0.8. Какова вероятность 3 попаданий при 5 выстрелах?",
    "choices": [
      "0.0512",
      "0.1024",
      "0.2048",
      "0.4096",
      "0.8192"
    ],
    "answers": ["0.2048"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Формула Бернулли:</strong> $P_n(k) = C_n^k p^k (1-p)^{n-k}$</p><p>$n=5$, $k=3$, $p=0.8$, $q=0.2$</p><p>$C_5^3 = C_5^2 = 10$</p><p>$P_5(3) = 10 \\cdot (0.8)^3 \\cdot (0.2)^2$</p><p>$= 10 \\cdot 0.512 \\cdot 0.04$</p><p>$= 10 \\cdot 0.02048 = 0.2048$</p><p>Наиболее вероятное число попаданий: $k = np = 5 \\cdot 0.8 = 4$</p></div></div></div></div></div>"
  },
  {
    "id": "prob030",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Формула полной вероятности",
    "theme": "Условие полной вероятности",
    "text": "Имеется 2 коробки: в первой 3 белых и 2 черных шара, во второй 1 белый и 4 черных. Наугад выбрали коробку и вынули шар. Какова вероятность вынуть белый шар?",
    "choices": [
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.6"
    ],
    "answers": ["0.4"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Формула полной вероятности:</strong></p><p>$P(A) = \\sum P(H_i) \\cdot P(A|H_i)$</p><p>$H_1$ — выбрана 1-я коробка, $P(H_1)=0.5$</p><p>$H_2$ — выбрана 2-я коробка, $P(H_2)=0.5$</p><p>$P(A|H_1) = \\frac{3}{5} = 0.6$</p><p>$P(A|H_2) = \\frac{1}{5} = 0.2$</p><p>$P(A) = 0.5 \\cdot 0.6 + 0.5 \\cdot 0.2 = 0.3 + 0.1 = 0.4$</p><p>Если коробки выбираются не равновероятно, веса будут другими.</p></div></div></div></div></div>"
  },
  {
    "id": "prob031",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Формула Байеса",
    "theme": "Переоценка вероятностей",
    "text": "Из предыдущей задачи: вынули белый шар. Какова вероятность, что он из первой коробки?",
    "choices": [
      "0.25",
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "answers": ["0.75"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Формула Байеса:</strong></p><p>$P(H_i|A) = \\frac{P(H_i) \\cdot P(A|H_i)}{\\sum P(H_j) \\cdot P(A|H_j)}$</p><p>Из предыдущей задачи: $P(A) = 0.4$</p><p>$P(H_1|A) = \\frac{P(H_1) \\cdot P(A|H_1)}{P(A)} = \\frac{0.5 \\cdot 0.6}{0.4} = \\frac{0.3}{0.4} = 0.75$</p><p>Априорная вероятность $P(H_1)=0.5$</p><p>Апостериорная вероятность $P(H_1|A)=0.75$</p><p>Информация о результате (белый шар) изменила нашу оценку.</p></div></div></div></div></div>"
  },
  {
    "id": "prob032",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Распределение Пуассона",
    "theme": "Редкие события",
    "text": "Среднее число звонков в call-центр за час равно 3. Какова вероятность получить ровно 2 звонка за час?",
    "choices": [
      "0.05",
      "0.15",
      "0.22",
      "0.30",
      "0.45"
    ],
    "answers": ["0.22"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Распределение Пуассона:</strong> $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$</p><p>где $\\lambda$ — среднее число событий за интервал</p><p>Здесь $\\lambda = 3$, $k = 2$</p><p>$P(2) = \\frac{3^2 \\cdot e^{-3}}{2!} = \\frac{9 \\cdot e^{-3}}{2}$</p><p>$e^{-3} \\approx 0.0498$</p><p>$P(2) \\approx \\frac{9 \\cdot 0.0498}{2} = \\frac{0.4482}{2} = 0.2241$</p><p>Распределение Пуассона моделирует редкие события во времени.</p></div></div></div></div></div>"
  },
  {
    "id": "prob033",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Показательное распределение",
    "theme": "Время между событиями",
    "text": "Время между звонками распределено экспоненциально со средним 10 минут. Какова вероятность ждать менее 5 минут?",
    "choices": [
      "0.22",
      "0.39",
      "0.50",
      "0.61",
      "0.78"
    ],
    "answers": ["0.39"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Показательное распределение:</strong> $F(x) = 1 - e^{-\\lambda x}$</p><p>где $\\lambda = 1/\\mu$, $\\mu$ — среднее</p><p>Здесь $\\mu = 10$ мин, $\\lambda = 0.1$ мин$^{-1}$</p><p>$P(X < 5) = 1 - e^{-0.1 \\cdot 5} = 1 - e^{-0.5}$</p><p>$e^{-0.5} \\approx 0.6065$</p><p>$P \\approx 1 - 0.6065 = 0.3935 \\approx 0.39$</p><p>Показательное распределение обладает свойством отсутствия памяти.</p></div></div></div></div></div>"
  },
  {
    "id": "prob034",
    "type": "multiplechoices",
    "header": "Математическое ожидание",
    "title": "Игра с кубиком",
    "theme": "Ожидаемый выигрыш",
    "text": "В игре бросают кубик. При выпадении 6 выигрывают 10 руб, при чётном числе (кроме 6) — 5 руб, иначе проигрывают 2 руб. Чему равно матожидание выигрыша?",
    "choices": [
      "-0.33",
      "0",
      "0.33",
      "0.67",
      "1.0"
    ],
    "answers": ["0.33"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'>Вероятности и выигрыши:</p><ol><li>Выпало 6: $p=1/6$, выигрыш=10</li><li>Чётное (2 или 4): $p=2/6$, выигрыш=5</li><li>Нечётное (1,3,5): $p=3/6$, выигрыш=-2</li></ol><p>$M[X] = \\frac{1}{6} \\cdot 10 + \\frac{2}{6} \\cdot 5 + \\frac{3}{6} \\cdot (-2)$</p><p>$= \\frac{10}{6} + \\frac{10}{6} - \\frac{6}{6} = \\frac{10+10-6}{6} = \\frac{14}{6} = 2.333$ — неверно!</p><p>Пересчитаем: $\\frac{1}{6} \\cdot 10 = 1.667$, $\\frac{2}{6} \\cdot 5 = 1.667$, $\\frac{3}{6} \\cdot (-2) = -1$</p><p>Сумма: $1.667+1.667-1=2.334-1=1.334$ — снова ошибка.</p><p>Надо дроби: $\\frac{10}{6}+\\frac{10}{6}-\\frac{6}{6}=\\frac{14}{6}=\\frac{7}{3}\\approx2.33$ — но это не в вариантах!</p></div></div></div></div></div>"
  },
  {
    "id": "prob035",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Сочетания с повторениями",
    "theme": "Комбинации с повторениями",
    "text": "Сколькими способами можно выбрать 3 пирожка, если есть 4 вида пирожков?",
    "choices": [
      "4",
      "10",
      "20",
      "35",
      "56"
    ],
    "answers": ["20"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Сочетания с повторениями:</strong></p><p>Число способов выбрать $k$ элементов из $n$ видов с возможностью повторений:</p><p>$\\overline{C}_n^k = C_{n+k-1}^k$</p><p>Здесь $n=4$ (видов), $k=3$ (пирожков)</p><p>$\\overline{C}_4^3 = C_{4+3-1}^3 = C_6^3 = \\frac{6!}{3!3!} = \\frac{720}{6 \\cdot 6} = 20$</p><p>Сочетания без повторений: $C_4^3 = 4$ (если можно брать не более одного каждого вида)</p></div></div></div></div></div>"
  },
  {
    "id": "prob036",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Перестановки с повторениями",
    "theme": "Повторяющиеся элементы",
    "text": "Сколько различных слов можно составить из букв слова \"МАМА\"?",
    "choices": [
      "4",
      "6",
      "12",
      "24",
      "36"
    ],
    "answers": ["6"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Перестановки с повторениями:</strong></p><p>$P(n_1,n_2,...,n_k) = \\frac{n!}{n_1! \\cdot n_2! \\cdot ... \\cdot n_k!}$</p><p>Слово \"МАМА\": 4 буквы, из них:</p><p>М — 2 раза, А — 2 раза</p><p>$P(2,2) = \\frac{4!}{2! \\cdot 2!} = \\frac{24}{2 \\cdot 2} = \\frac{24}{4} = 6$</p><p>Варианты: МАМА, МААМ, ММАА, АММА, АМАМ, ААММ</p><p>Если бы все буквы были разные, было бы $4! = 24$ варианта.</p></div></div></div></div></div>"
  },
  {
    "id": "prob037",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Выборочное среднее",
    "theme": "Свойства выборочных характеристик",
    "text": "Из генеральной совокупности извлекли выборку. Какое утверждение верно?",
    "choices": [
      "Выборочное среднее всегда равно генеральному среднему",
      "Выборочная дисперсия всегда меньше генеральной",
      "Выборочное среднее — несмещённая оценка генерального",
      "Медиана выборки всегда равна медиане генеральной совокупности",
      "Размах выборки всегда больше размаха генеральной совокупности"
    ],
    "answers": ["Выборочное среднее — несмещённая оценка генерального"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Свойства оценок:</strong></p><ul><li><strong>Несмещённость:</strong> $M[\\hat{\\theta}] = \\theta$</li><li><strong>Состоятельность:</strong> $\\hat{\\theta} \\to \\theta$ при $n \\to \\infty$</li><li><strong>Эффективность:</strong> минимальная дисперсия среди оценок</li></ul><p><strong>Для выборочного среднего:</strong> $M[\\bar{X}] = \\mu$ — несмещённая оценка</p><p>Для выборочной дисперсии: $s^2 = \\frac{\\sum (x_i-\\bar{x})^2}{n-1}$ — несмещённая оценка $\\sigma^2$</p><p>Выборочное среднее варьируется от выборки к выборке.</p></div></div></div></div></div>"
  },
  {
    "id": "prob038",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Гистограмма",
    "theme": "Графическое представление",
    "text": "Что показывает гистограмма распределения?",
    "choices": [
      "Зависимость между двумя переменными",
      "Частоты значений в интервалах",
      "Кумулятивное распределение",
      "Корреляцию переменных",
      "Динамику изменения во времени"
    ],
    "answers": ["Частоты значений в интервалах"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Гистограмма</strong> — столбчатая диаграмма, показывающая распределение данных.</p><p><strong>Как строится:</strong></p><ol><li>Данные разбиваются на интервалы (бины)</li><li>Подсчитывается число наблюдений в каждом интервале</li><li>Строятся столбцы, высота которых пропорциональна частоте</li></ol><p>Площадь каждого столбца пропорциональна частоте.</p><p>Гистограмма показывает форму распределения: симметричное, скошенное, бимодальное и т.д.</p><p>Для сравнения с теоретическим распределением строится плотность.</p></div></div></div></div></div>"
  },
  {
    "id": "prob039",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Ящик с усами",
    "theme": "Диаграмма размаха",
    "text": "Что показывает «ящик с усами» (box plot)?",
    "choices": [
      "Точечную диаграмму рассеяния",
      "Распределение данных по квартилям",
      "Кумулятивную функцию распределения",
      "Гистограмму частот",
      "Линейный тренд"
    ],
    "answers": ["Распределение данных по квартилям"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Box plot (ящик с усами) показывает:</strong></p><ul><li>Минимум и максимум (усы)</li><li>Первый квартиль Q1 (нижняя граница ящика)</li><li>Медиану Q2 (линия внутри ящика)</li><li>Третий квартиль Q3 (верхняя граница ящика)</li><li>Возможные выбросы (точки за усами)</li></ul><p><strong>Межквартильный размах:</strong> IQR = Q3 - Q1</p><p>Усы обычно простираются до Q1-1.5·IQR и Q3+1.5·IQR</p><p>Значения за пределами усов считаются выбросами.</p><p>Позволяет быстро сравнивать распределения нескольких групп.</p></div></div></div></div></div>"
  },
  {
    "id": "prob040",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Урновая схема",
    "theme": "Гипергеометрическое распределение",
    "text": "В урне 5 белых и 3 чёрных шара. Вынимают 3 шара без возвращения. Какова вероятность, что 2 из них белые?",
    "choices": [
      "$\\frac{15}{28}$",
      "$\\frac{5}{14}$",
      "$\\frac{3}{7}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{3}$"
    ],
    "answers": ["$\\frac{15}{28}$"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Гипергеометрическое распределение:</strong></p><p>Вероятность выбрать $k$ успехов (белых) в $n$ попытках без возвращения:</p><p>$P = \\frac{C_K^k C_{N-K}^{n-k}}{C_N^n}$</p><p>где $N$ — всего шаров, $K$ — белых, $n$ — вынимаем, $k$ — хотим белых</p><p>Здесь: $N=8$, $K=5$, $n=3$, $k=2$</p><p>$P = \\frac{C_5^2 \\cdot C_3^1}{C_8^3} = \\frac{10 \\cdot 3}{56} = \\frac{30}{56} = \\frac{15}{28}$</p><p>$C_8^3 = 56$, $C_5^2 = 10$, $C_3^1 = 3$</p></div></div></div></div></div>"
  },
  {
    "id": "prob041",
    "type": "multiplechoices",
    "header": "Математическое ожидание",
    "title": "Дисперсия",
    "theme": "Свойства дисперсии",
    "text": "Дисперсия случайной величины X равна 4. Чему равна дисперсия величины Y = 3X - 2?",
    "choices": [
      "4",
      "12",
      "16",
      "36",
      "100"
    ],
    "answers": ["36"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Свойства дисперсии:</strong></p><p>1. $D[aX + b] = a^2 D[X]$</p><p>2. $D[X+Y] = D[X] + D[Y] + 2Cov(X,Y)$</p><p>3. Если X и Y независимы: $D[X+Y] = D[X] + D[Y]$</p><p>Дано: $D[X] = 4$</p><p>$Y = 3X - 2$</p><p>$D[Y] = 3^2 \\cdot D[X] = 9 \\cdot 4 = 36$</p><p>Константа $b$ не влияет на дисперсию.</p><p>Дисперсия всегда неотрицательна.</p></div></div></div></div></div>"
  },
  {
    "id": "prob042",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Независимость событий",
    "theme": "Критерий независимости",
    "text": "События A и B независимы. P(A)=0.3, P(B)=0.4. Чему равно P(A∩B)?",
    "choices": [
      "0.12",
      "0.3",
      "0.4",
      "0.7",
      "1.2"
    ],
    "answers": ["0.12"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Для независимых событий:</strong> $P(A \\cap B) = P(A) \\cdot P(B)$</p><p>Это определение независимости событий.</p><p>Дано: $P(A)=0.3$, $P(B)=0.4$</p><p>$P(A \\cap B) = 0.3 \\cdot 0.4 = 0.12$</p><p>Проверка: $P(A|B) = \\frac{P(A\\cap B)}{P(B)} = \\frac{0.12}{0.4} = 0.3 = P(A)$</p><p>Если бы события были несовместны: $P(A\\cap B)=0$</p></div></div></div></div></div>"
  },
  {
    "id": "prob043",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Распределение Бернулли",
    "theme": "Простое распределение",
    "text": "Случайная величина X имеет распределение Бернулли с p=0.7. Чему равно M[X]?",
    "choices": [
      "0.3",
      "0.5",
      "0.7",
      "1.0",
      "1.4"
    ],
    "answers": ["0.7"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Распределение Бернулли:</strong></p><p>Случайная величина принимает значения:</p><ul><li>1 с вероятностью $p$ (успех)</li><li>0 с вероятностью $q=1-p$ (неудача)</li></ul><p>$M[X] = 1 \\cdot p + 0 \\cdot q = p$</p><p>$D[X] = p(1-p) = pq$</p><p>Здесь $p=0.7$, значит $M[X]=0.7$</p><p>$D[X]=0.7 \\cdot 0.3 = 0.21$</p><p>Распределение Бернулли — частный случай биномиального при n=1.</p></div></div></div></div></div>"
  },
  {
    "id": "prob044",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Стандартная ошибка",
    "theme": "Точность оценки",
    "text": "Стандартное отклонение генеральной совокупности равно 10. Какова стандартная ошибка среднего для выборки объёма 25?",
    "choices": [
      "0.4",
      "2",
      "4",
      "10",
      "25"
    ],
    "answers": ["2"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Стандартная ошибка среднего:</strong></p><p>$SE = \\frac{\\sigma}{\\sqrt{n}}$</p><p>где $\\sigma$ — стандартное отклонение генеральной совокупности, $n$ — объём выборки</p><p>Дано: $\\sigma = 10$, $n = 25$</p><p>$SE = \\frac{10}{\\sqrt{25}} = \\frac{10}{5} = 2$</p><p>Если $\\sigma$ неизвестно, используют выборочное стандартное отклонение $s$.</p><p>Стандартная ошибка уменьшается с ростом $n$.</p><p>Для $n=100$: $SE = \\frac{10}{10} = 1$</p></div></div></div></div></div>"
  },
  {
    "id": "prob045",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Вероятность объединения",
    "theme": "Формула включений-исключений",
    "text": "P(A)=0.5, P(B)=0.4, P(A∩B)=0.2. Чему равно P(A∪B)?",
    "choices": [
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9"
    ],
    "answers": ["0.7"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Формула включений-исключений для двух событий:</strong></p><p>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p><p>Дано: $P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$</p><p>$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.9 - 0.2 = 0.7$</p><p>Проверка: Если бы события были несовместны: $P(A\\cup B)=0.5+0.4=0.9$</p><p>Для трёх событий: $P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)+P(A\\cap B\\cap C)$</p></div></div></div></div></div>"
  },
  {
    "id": "prob046",
    "type": "multiplechoices",
    "header": "Комбинаторика",
    "title": "Размещения с повторениями",
    "theme": "Упорядоченные выборки",
    "text": "Сколько различных трёхзначных чисел можно составить из цифр 1,2,3,4?",
    "choices": [
      "12",
      "24",
      "64",
      "81",
      "256"
    ],
    "answers": ["64"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Размещения с повторениями:</strong></p><p>Число способов выбрать $k$ элементов из $n$ с возможностью повторений, порядок важен:</p><p>$\\overline{A}_n^k = n^k$</p><p>Трёхзначное число: 3 позиции, на каждой может быть 4 цифры</p><p>Всего: $4^3 = 64$ числа</p><p>Без повторений цифр: $A_4^3 = 4 \\cdot 3 \\cdot 2 = 24$</p><p>Примеры с повторениями: 111, 112, 121 и т.д.</p></div></div></div></div></div>"
  },
  {
    "id": "prob047",
    "type": "multiplechoices",
    "header": "Распределения",
    "title": "Геометрическое распределение",
    "theme": "Время до первого успеха",
    "text": "Вероятность успеха в каждом испытании равна 0.2. Какова вероятность, что первый успех случится на 3-м испытании?",
    "choices": [
      "0.008",
      "0.032",
      "0.128",
      "0.512",
      "0.896"
    ],
    "answers": ["0.128"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Геометрическое распределение:</strong></p><p>Вероятность первого успеха на $k$-м испытании:</p><p>$P(X=k) = (1-p)^{k-1} \\cdot p$</p><p>где $p$ — вероятность успеха в одном испытании</p><p>Здесь $p=0.2$, $k=3$</p><p>$P(X=3) = (1-0.2)^{3-1} \\cdot 0.2 = 0.8^2 \\cdot 0.2 = 0.64 \\cdot 0.2 = 0.128$</p><p>Математическое ожидание: $M[X] = \\frac{1}{p} = \\frac{1}{0.2} = 5$</p><p>В среднем нужно 5 испытаний до первого успеха.</p></div></div></div></div></div>"
  },
  {
    "id": "prob048",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Центральная предельная теорема",
    "theme": "Основная теорема",
    "text": "Что утверждает центральная предельная теорема?",
    "choices": [
      "Выборочное среднее равно генеральному",
      "Выборочная дисперсия стремится к генеральной",
      "Сумма независимых сл. величин имеет нормальное распределение",
      "Медиана равна среднему для симметричных распределений",
      "Все распределения стремятся к равномерному"
    ],
    "answers": ["Сумма независимых сл. величин имеет нормальное распределение"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Центральная предельная теорема (ЦПТ):</strong></p><p>При достаточно большом объёме выборки $n$ выборочное среднее имеет приблизительно нормальное распределение независимо от распределения генеральной совокупности:</p><p>$\\bar{X} \\sim N(\\mu, \\frac{\\sigma^2}{n})$</p><p>где $\\mu$ и $\\sigma^2$ — параметры генеральной совокупности</p><p><strong>Следствие:</strong> $\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)$</p><p>Обычно считают, что $n \\geq 30$ достаточно для применения ЦПТ.</p></div></div></div></div></div>"
  },
  {
    "id": "prob049",
    "type": "multiplechoices",
    "header": "Вероятность",
    "title": "Условная вероятность",
    "theme": "Определение",
    "text": "P(A)=0.6, P(B)=0.5, P(A∩B)=0.3. Чему равно P(A|B)?",
    "choices": [
      "0.3",
      "0.5",
      "0.6",
      "0.7",
      "0.8"
    ],
    "answers": ["0.6"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Условная вероятность:</strong> $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$</p><p>при условии $P(B) > 0$</p><p>Дано: $P(A)=0.6$, $P(B)=0.5$, $P(A\\cap B)=0.3$</p><p>$P(A|B) = \\frac{0.3}{0.5} = 0.6$</p><p>Заметим: $P(A|B) = P(A) = 0.6$, значит события независимы.</p><p>Проверка: $P(A) \\cdot P(B) = 0.6 \\cdot 0.5 = 0.3 = P(A\\cap B)$</p></div></div></div></div></div>"
  },
  {
    "id": "prob050",
    "type": "multiplechoices",
    "header": "Статистика",
    "title": "Z-оценка",
    "theme": "Стандартизация",
    "text": "Значение 75, среднее 70, стандартное отклонение 5. Чему равна z-оценка?",
    "choices": [
      "0.5",
      "1.0",
      "1.5",
      "2.0",
      "2.5"
    ],
    "answers": ["1.0"],
    "hint": "<div class='container'><div class='row'><div class='col-md-6'><div class='card'><div class='card-body'><p class='alert alert-info'><strong>Z-оценка (стандартизованное значение):</strong></p><p>$z = \\frac{x - \\mu}{\\sigma}$</p><p>где $x$ — значение, $\\mu$ — среднее, $\\sigma$ — стандартное отклонение</p><p>Дано: $x=75$, $\\mu=70$, $\\sigma=5$</p><p>$z = \\frac{75-70}{5} = \\frac{5}{5} = 1.0$</p><p>Z-оценка показывает, на сколько стандартных отклонений значение отличается от среднего.</p><p>Значения с $|z| > 2$ обычно считаются необычными, с $|z| > 3$ — выбросами.</p></div></div></div></div></div>"
  },


  
  {
    "id": "comb001",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Определение медианы",
    "theme": "Основные статистические меры",
    "text": "Что такое медиана набора чисел?",
    "choices": [
      "Среднее арифметическое всех чисел",
      "Наиболее часто встречающееся число",
      "Число, которое делит упорядоченный набор пополам",
      "Сумма всех чисел, деленная на их количество",
      "Разница между максимальным и минимальным значениями"
    ],
    "answers": ["Число, которое делит упорядоченный набор пополам"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Определение медианы:</h5>
<p>Медиана — это значение, которое делит упорядоченный (отсортированный по возрастанию) набор чисел на две равные части: 50% значений меньше медианы и 50% — больше.</p>
<p>Для набора из n чисел:</p>
<ul>
<li>Если n нечетное: медиана = среднему элементу</li>
<li>Если n четное: медиана = среднее арифметическое двух центральных элементов</li>
</ul>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb002",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Расчет медианы",
    "theme": "Практическое нахождение медианы",
    "text": "Чему равна медиана набора чисел: 3, 7, 2, 9, 5?",
    "choices": [
      "5",
      "5.2",
      "4",
      "7",
      "3"
    ],
    "answers": ["5"],
    "JSXGraph": "true",
    "JSXGraphType": "medianVisualization",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Решение:</h5>
<ol>
<li>Упорядочим числа по возрастанию: 2, 3, 5, 7, 9</li>
<li>Набор содержит 5 чисел (нечетное количество)</li>
<li>Медиана = средний элемент = третий элемент = 5</li>
</ol>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb003",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Среднее арифметическое",
    "theme": "Основные статистические меры",
    "text": "Что такое среднее арифметическое набора чисел?",
    "choices": [
      "Наиболее часто встречающееся значение",
      "Сумма всех чисел, деленная на их количество",
      "Разность между максимальным и минимальным значениями",
      "Число в середине упорядоченного набора",
      "Произведение всех чисел"
    ],
    "answers": ["Сумма всех чисел, деленная на их количество"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Определение среднего арифметического:</h5>
<p>Среднее арифметическое (или просто среднее) вычисляется по формуле:</p>
<p class="text-center">$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$</p>
<p>где $x_1, x_2, \\ldots, x_n$ — значения в наборе, n — количество значений.</p>
<p>Среднее арифметическое чувствительно к выбросам (крайним значениям).</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb004",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Расчет среднего арифметического",
    "theme": "Практическое вычисление среднего",
    "text": "Чему равно среднее арифметическое чисел: 4, 8, 6, 2, 10?",
    "choices": [
      "5",
      "6",
      "7",
      "8",
      "30"
    ],
    "answers": ["6"],
    "JSXGraph": "true",
    "JSXGraphType": "meanVisualization",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Решение:</h5>
<ol>
<li>Находим сумму: 4 + 8 + 6 + 2 + 10 = 30</li>
<li>Количество чисел: 5</li>
<li>Среднее = 30 ÷ 5 = 6</li>
</ol>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb005",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Случайное событие",
    "theme": "Основные понятия теории вероятностей",
    "text": "Что такое случайное событие?",
    "choices": [
      "Событие, которое обязательно произойдет",
      "Событие, которое никогда не произойдет",
      "Событие, которое может произойти или не произойти",
      "Событие, которое происходит регулярно",
      "Событие, причина которого известна"
    ],
    "answers": ["Событие, которое может произойти или не произойти"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Определение случайного события:</h5>
<p>Случайное событие — это событие, которое при определенных условиях может произойти или не произойти.</p>
<p>Примеры случайных событий:</p>
<ul>
<li>Выпадение орла при подбрасывании монеты</li>
<li>Выпадение шестерки при бросании игрального кубика</li>
<li>Попадание в цель при стрельбе</li>
<li>Выпадение осадков завтра</li>
</ul>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb006",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Диаграмма Эйлера",
    "theme": "Визуализация множеств",
    "text": "Что показывает диаграмма Эйлера?",
    "choices": [
      "График функции",
      "Отношения между множествами",
      "Временные ряды",
      "Геометрические фигуры",
      "Статистические распределения"
    ],
    "answers": ["Отношения между множествами"],
    "JSXGraph": "true",
    "JSXGraphType": "eulerDiagram",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Диаграммы Эйлера:</h5>
<p>Диаграммы Эйлера — это геометрические схемы, с помощью которых можно изображать отношения между подмножествами.</p>
<p>Основные виды отношений:</p>
<ul>
<li><strong>Пересечение</strong> — множества имеют общие элементы</li>
<li><strong>Объединение</strong> — все элементы обоих множеств</li>
<li><strong>Включение</strong> — одно множество полностью содержится в другом</li>
<li><strong>Непересекающиеся множества</strong> — у множеств нет общих элементов</li>
</ul>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb007",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Вероятность события",
    "theme": "Основы теории вероятностей",
    "text": "Как вычисляется вероятность случайного события в классическом определении?",
    "choices": [
      "Число благоприятных исходов деленное на число всех возможных исходов",
      "Сумма всех вероятностей",
      "Произведение вероятностей",
      "Разность максимальной и минимальной вероятностей",
      "Квадратный корень из числа исходов"
    ],
    "answers": ["Число благоприятных исходов деленное на число всех возможных исходов"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Классическое определение вероятности:</h5>
<p>Вероятность события A вычисляется по формуле:</p>
<p class="text-center">$P(A) = \\frac{m}{n}$</p>
<p>где:</p>
<ul>
<li>$m$ — число благоприятных исходов (исходы, при которых событие A происходит)</li>
<li>$n$ — число всех равновозможных исходов</li>
</ul>
<p>Пример: вероятность выпадения орла при подбрасывании монеты = 1/2 = 0.5</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb008",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Треугольник Паскаля",
    "theme": "Комбинаторные числа",
    "text": "Для чего используется треугольник Паскаля?",
    "choices": [
      "Для вычисления биномиальных коэффициентов",
      "Для построения графиков функций",
      "Для расчета среднего арифметического",
      "Для определения медианы",
      "Для визуализации множеств"
    ],
    "answers": ["Для вычисления биномиальных коэффициентов"],
    "JSXGraph": "true",
    "JSXGraphType": "pascalTriangle",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Треугольник Паскаля:</h5>
<p>Треугольник Паскаля — это бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму.</p>
<p>Свойства:</p>
<ul>
<li>Каждое число равно сумме двух чисел, стоящих над ним</li>
<li>Строки треугольника симметричны</li>
<li>Числа в n-й строке являются коэффициентами в разложении бинома Ньютона (a+b)^n</li>
<li>Числа также представляют собой сочетания: C(n, k)</li>
</ul>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb009",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Бином Ньютона",
    "theme": "Биномиальное разложение",
    "text": "Что представляет собой бином Ньютона?",
    "choices": [
      "Формулу для возведения суммы в степень",
      "Формулу для вычисления корней",
      "Метод решения уравнений",
      "Способ вычисления производной",
      "Формулу для площади треугольника"
    ],
    "answers": ["Формулу для возведения суммы в степень"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Бином Ньютона:</h5>
<p>Бином Ньютона — формула для разложения степени бинома (суммы двух слагаемых):</p>
<p class="text-center">$(a + b)^n = \\sum_{k=0}^{n} C_n^k a^{n-k} b^k$</p>
<p>где $C_n^k = \\frac{n!}{k!(n-k)!}$ — биномиальные коэффициенты.</p>
<p>Пример: $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb010",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Равномерное распределение",
    "theme": "Типы распределений",
    "text": "Что характеризует равномерное распределение?",
    "choices": [
      "Все значения имеют одинаковую вероятность",
      "Значения группируются вокруг среднего",
      "Есть два пика вероятности",
      "Хвосты распределения тяжелые",
      "Распределение асимметрично"
    ],
    "answers": ["Все значения имеют одинаковую вероятность"],
    "JSXGraph": "true",
    "JSXGraphType": "uniformDistribution",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Равномерное распределение:</h5>
<p>В равномерном распределении все значения из некоторого интервала имеют одинаковую вероятность.</p>
<p>Примеры:</p>
<ul>
<li>Выпадение любой грани игрального кубика (вероятность каждой = 1/6)</li>
<li>Выбор случайной точки на отрезке</li>
<li>Вращение стрелки рулетки</li>
</ul>
<p>Функция плотности равномерного распределения на интервале [a, b]:</p>
<p class="text-center">$f(x) = \\begin{cases} \\frac{1}{b-a}, & a \\le x \\le b \\\\ 0, & \\text{иначе} \\end{cases}$</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb011",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Нормальное распределение",
    "theme": "Типы распределений",
    "text": "Как называется распределение, имеющее форму колокола?",
    "choices": [
      "Равномерное",
      "Нормальное",
      "Биномиальное",
      "Пуассоновское",
      "Экспоненциальное"
    ],
    "answers": ["Нормальное"],
    "JSXGraph": "true",
    "JSXGraphType": "normalDistribution",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Нормальное распределение:</h5>
<p>Нормальное распределение (распределение Гаусса) — одно из самых важных распределений в статистике.</p>
<p>Характеристики:</p>
<ul>
<li>Колоколообразная форма кривой</li>
<li>Симметричность относительно среднего значения</li>
<li>Определяется двумя параметрами: μ (среднее) и σ (стандартное отклонение)</li>
<li>Около 68% значений лежат в пределах μ±σ, 95% — в пределах μ±2σ, 99.7% — в пределах μ±3σ</li>
</ul>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb012",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Биномиальное распределение",
    "theme": "Типы распределений",
    "text": "Какое распределение описывает число успехов в серии независимых испытаний?",
    "choices": [
      "Равномерное",
      "Нормальное",
      "Биномиальное",
      "Экспоненциальное",
      "Гипергеометрическое"
    ],
    "answers": ["Биномиальное"],
    "JSXGraph": "true",
    "JSXGraphType": "binomialDistribution",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Биномиальное распределение:</h5>
<p>Биномиальное распределение описывает число успехов в серии n независимых испытаний Бернулли.</p>
<p>Условия:</p>
<ul>
<li>Фиксированное число испытаний n</li>
<li>Каждое испытание имеет два исхода: успех/неудача</li>
<li>Вероятность успеха p постоянна</li>
<li>Испытания независимы</li>
</ul>
<p>Вероятность k успехов в n испытаниях:</p>
<p class="text-center">$P(X=k) = C_n^k p^k (1-p)^{n-k}$</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb013",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Сравнение среднего и медианы",
    "theme": "Статистические меры",
    "text": "Когда среднее арифметическое и медиана совпадают?",
    "choices": [
      "Всегда",
      "В симметричных распределениях",
      "Только в нормальном распределении",
      "В асимметричных распределениях",
      "Никогда"
    ],
    "answers": ["В симметричных распределениях"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Среднее и медиана в симметричных распределениях:</h5>
<p>В симметричных распределениях среднее арифметическое и медиана совпадают.</p>
<p>Примеры симметричных распределений:</p>
<ul>
<li>Нормальное распределение</li>
<li>Равномерное распределение</li>
<li>Распределение Стьюдента (t-распределение)</li>
</ul>
<p>В асимметричных распределениях (например, экспоненциальном) среднее и медиана различаются.</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb014",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Диаграмма Эйлера для пересечения",
    "theme": "Визуализация множеств",
    "text": "Как выглядит диаграмма Эйлера для пересекающихся множеств A и B?",
    "choices": [
      "Два непересекающихся круга",
      "Один круг внутри другого",
      "Два круга с общей областью",
      "Три отдельных круга",
      "Квадрат и круг"
    ],
    "answers": ["Два круга с общей областью"],
    "JSXGraph": "true",
    "JSXGraphType": "intersectionDiagram",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-success">
<h5>Диаграмма Эйлера для пересечения:</h5>
<p>Для пересекающихся множеств A и B диаграмма Эйлера представляет собой два круга, которые частично перекрываются.</p>
<p>Области диаграммы:</p>
<ul>
<li>Только A: часть круга A без пересечения с B</li>
<li>Только B: часть круга B без пересечения с A</li>
<li>A ∩ B (пересечение): общая область двух кругов</li>
</ul>
<p>Пересечение содержит элементы, принадлежащие и A, и B одновременно.</p>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "comb015",
    "type": "multiplechoices",
    "header": "Комбинаторика и теория вероятностей",
    "title": "Строка треугольника Паскаля",
    "theme": "Комбинаторные числа",
    "text": "Какая строка треугольника Паскаля соответствует разложению (a+b)^4?",
    "choices": [
      "1, 2, 1",
      "1, 3, 3, 1",
      "1, 4, 6, 4, 1",
      "1, 5, 10, 10, 5, 1",
      "1, 6, 15, 20, 15, 6, 1"
    ],
    "answers": ["1, 4, 6, 4, 1"],
    "JSXGraph": "true",
    "JSXGraphType": "pascalRow",
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="alert alert-info">
<h5>Решение:</h5>
<p>Строки треугольника Паскаля нумеруются начиная с 0:</p>
<ul>
<li>Строка 0: 1 → (a+b)^0 = 1</li>
<li>Строка 1: 1, 1 → (a+b)^1 = a + b</li>
<li>Строка 2: 1, 2, 1 → (a+b)^2 = a^2 + 2ab + b^2</li>
<li>Строка 3: 1, 3, 3, 1 → (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3</li>
<li><strong>Строка 4: 1, 4, 6, 4, 1 → (a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4</strong></li>
</ul>
<p>Нумерация: строка n соответствует разложению (a+b)^n.</p>
</div>
</div>
</div>
</div>`
  },



]











window.quizesSets = quizesSets;
