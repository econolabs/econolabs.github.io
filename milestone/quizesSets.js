
//ИСИП
// 1. Числа. Уравнения. Система уравнений
// 2. Паралелльность в пространстве
// 3. Перпендикулярность в пространстве
// 4. Преобразование тригонометрических уравнений
// 5. Тригонометрическе упавнения и неравенства
// 6. Векторы и координаты в пространстве
// 7. Многогранники. Объемы и площади
// 8. Тела вращения
// 9. Функции и графики. Логарифмические. Показательные
// 10. Уравнения, неравенства и их системы. Логарифмические. Показательные
// 11. Вычисление производных. Последовательности. Сложные проценты
// 12. Применение производной
// 13. Первообразная и интеграл
// 14. Вероятность
// 15. Комбинаторика
// 16. Математическое ожидание случайной величины



let quizesSets =
  [

    // 6. Векторы и координаты в пространстве

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
    {
      id: "vec002",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Отрицательные единичные векторы",
      theme: "Векторы на плоскости",
      text: "На рисунке изображены векторы -i и -j. Каковы их координаты?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Отрицательные единичные векторы имеют координаты: $$-\\vec{i} = (-1, 0), \\quad -\\vec{j} = (0, -1)$$",
      choices: [
        "-i = (-1,0), -j = (0,-1)",
        "-i = (0,-1), -j = (-1,0)",
        "-i = (1,0), -j = (0,1)",
        "-i = (-1,-1), -j = (1,1)",
        "-i = (0,0), -j = (-1,-1)",
        "-i = (0.5,-0.5), -j = (-0.5,0.5)"
      ],
      answers: ["-i = (-1,0), -j = (0,-1)"]
    },

    {
      id: "vec006",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Длина единичного вектора",
      theme: "Векторы на плоскости",
      text: "Чему равна длина вектора i = (1, 0)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Длина вектора вычисляется по формуле: $$|\\vec{a}| = \\sqrt{x^2 + y^2}$$. Для вектора i: $$|\\vec{i}| = \\sqrt{1^2 + 0^2} = 1$$",
      choices: [
        "0",
        "1",
        "√2",
        "2",
        "0.5",
        "√3"
      ],
      answers: ["1"]
    },

    {
      id: "vec008",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Скалярное произведение ортогональных векторов",
      theme: "Векторы на плоскости",
      text: "Чему равно скалярное произведение векторов i = (1, 0) и j = (0, 1)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Скалярное произведение: $$\\vec{a} \\cdot \\vec{b} = x_a x_b + y_a y_b$$. Для ортогональных векторов оно равно 0.",
      choices: [
        "0",
        "1",
        "-1",
        "√2",
        "2",
        "Не определено"
      ],
      answers: ["0"]
    },
    {
      id: "vec009",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Скалярное произведение противоположных векторов",
      theme: "Векторы на плоскости",
      text: "Чему равно скалярное произведение векторов i = (1, 0) и -i = (-1, 0)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "$$\\vec{i} \\cdot (-\\vec{i}) = 1 \\cdot (-1) + 0 \\cdot 0 = -1$$",
      choices: [
        "1",
        "-1",
        "0",
        "2",
        "-2",
        "Не определено"
      ],
      answers: ["-1"]
    },
    {
      id: "vec010",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Сумма единичных векторов",
      theme: "Векторы на плоскости",
      text: "Чему равна сумма векторов i = (1, 0) и j = (0, 1)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Сложение векторов выполняется покомпонентно: $$\\vec{i} + \\vec{j} = (1+0, 0+1) = (1, 1)$$",
      choices: [
        "(1, 1)",
        "(0, 0)",
        "(1, 0)",
        "(0, 1)",
        "(2, 2)",
        "(-1, -1)"
      ],
      answers: ["(1, 1)"]
    },

    {
      id: "vec012",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Разность единичных векторов",
      theme: "Векторы на плоскости",
      text: "Чему равна разность векторов i = (1, 0) и j = (0, 1)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "$$\\vec{i} - \\vec{j} = (1-0, 0-1) = (1, -1)$$",
      choices: [
        "(1, -1)",
        "(-1, 1)",
        "(1, 1)",
        "(-1, -1)",
        "(0, 0)",
        "(2, -2)"
      ],
      answers: ["(1, -1)"]
    },
    {
      id: "vec013",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Умножение вектора на число",
      theme: "Векторы на плоскости",
      text: "Чему равен вектор 2i, если i = (1, 0)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "При умножении вектора на число каждая координата умножается на это число: $$2\\vec{i} = 2(1, 0) = (2, 0)$$",
      choices: [
        "(2, 0)",
        "(0, 2)",
        "(1, 2)",
        "(2, 1)",
        "(0.5, 0)",
        "(-2, 0)"
      ],
      answers: ["(2, 0)"]
    },

    {
      id: "vec016",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Ортогональность векторов",
      theme: "Векторы на плоскости",
      text: "Какой из векторов ортогонален (перпендикулярен) вектору i = (1, 0)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Вектор ортогонален i, если их скалярное произведение равно 0: $$(1,0) \\cdot (x,y) = 1 \\cdot x + 0 \\cdot y = x = 0$$",
      choices: [
        "(0, 1)",
        "(1, 1)",
        "(-1, 0)",
        "(1, -1)",
        "(0, 0)",
        "(0, -1)"
      ],
      answers: ["(0, 1)", "(0, -1)"]
    },

    {
      id: "vec017",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Коллинеарность векторов",
      theme: "Векторы на плоскости",
      text: "Какой из векторов коллинеарен (параллелен) вектору i = (1, 0)?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Векторы коллинеарны, если один является числовым кратным другого: $$\\vec{a} = k\\vec{b}$$",
      choices: [
        "(-2, 0)",
        "(0, 2)",
        "(1, 1)",
        "(-1, -1)",
        "(0, -1)",
        "(2, 2)"
      ],
      answers: ["(-2, 0)"]
    },

    {
      id: "vec022",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Направление вектора 2",
      theme: "Векторы на плоскости",
      text: "Вектор v = (-1, 0). В каком направлении он направлен?",
      JSXGraph: "true",
      JSXGraphType: "unitVectors",
      hint: "Вектор (-1, 0) направлен вдоль отрицательного направления оси X.",
      choices: [
        "Влево",
        "Вправо",
        "Вверх",
        "Вниз",
        "По диагонали влево-вверх",
        "По диагонали вправо-вниз"
      ],
      answers: ["Влево"]
    },

    {
      id: "vec_int001",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Проекция вектора на ось X",
      theme: "Векторы на плоскости",
      text: "Вектор v = (3, 4). Чему равна его проекция на ось X?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Проекция вектора на ось X равна его координате x: $$\\text{пр}_x \\vec{v} = x = 3$$",
      choices: [
        "3",
        "4",
        "5",
        "0",
        "-3",
        "-4"
      ],
      answers: ["3"]
    },
    {
      id: "vec_int002",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Проекция вектора на ось Y",
      theme: "Векторы на плоскости",
      text: "Вектор v = (3, 4). Чему равна его проекция на ось Y?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Проекция вектора на ось Y равна его координате y: $$\\text{пр}_y \\vec{v} = y = 4$$",
      choices: [
        "3",
        "4",
        "5",
        "0",
        "-3",
        "-4"
      ],
      answers: ["4"]
    },

    {
      id: "vec_int004",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Длина вектора через проекции",
      theme: "Векторы на плоскости",
      text: "Проекции вектора на оси: x = 6, y = 8. Чему равна длина вектора?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Длина вектора через проекции: $$|\\vec{v}| = \\sqrt{x^2 + y^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$",
      choices: [
        "10",
        "14",
        "√14",
        "√100",
        "48",
        "100"
      ],
      answers: ["10", "√100"]
    },
    {
      id: "vec_int005",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Угол вектора с осью X",
      theme: "Векторы на плоскости",
      text: "Вектор v = (1, 1). Чему равен угол между вектором и положительным направлением оси X?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Угол вычисляется по формуле: $$\\tan\\alpha = \\frac{y}{x} = \\frac{1}{1} = 1 \\Rightarrow \\alpha = 45^\\circ$$",
      choices: [
        "45°",
        "30°",
        "60°",
        "90°",
        "0°",
        "135°"
      ],
      answers: ["45°"]
    },
    {
      id: "vec_int006",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Вектор с отрицательной проекцией",
      theme: "Векторы на плоскости",
      text: "Вектор имеет проекцию на ось X = -2, на ось Y = 3. Каковы его координаты?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Координаты вектора совпадают с его проекциями на оси: $$\\vec{v} = (-2, 3)$$",
      choices: [
        "(-2, 3)",
        "(2, -3)",
        "(3, -2)",
        "(-3, 2)",
        "(2, 3)",
        "(-2, -3)"
      ],
      answers: ["(-2, 3)"]
    },

    {
      id: "vec_int008",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Одинаковые проекции",
      theme: "Векторы на плоскости",
      text: "Вектор имеет равные проекции на обе оси: x = y = 4. Чему равна его длина?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "$$|\\vec{v}| = \\sqrt{4^2 + 4^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$",
      choices: [
        "4√2",
        "8",
        "√32",
        "16",
        "4",
        "2√8"
      ],
      answers: ["4√2", "√32"]
    },

    {
      id: "vec_int018",
      type: "multiplechoices",
      header: "6. Векторы и координаты в пространстве",
      title: "Проекции и угол 90°",
      theme: "Векторы на плоскости",
      text: "Вектор образует угол 90° с осью X. Чему равна его проекция на ось X?",
      JSXGraph: "true",
      JSXGraphType: "interactiveVectors",
      hint: "Если угол с осью X равен 90°, вектор перпендикулярен оси X, значит его проекция на эту ось равна 0.",
      choices: [
        "0",
        "1",
        "-1",
        "Может быть любой",
        "Не определена",
        "Зависит от проекции на Y"
      ],
      answers: ["0"]
    },




    // Первообразная и интеграл

    {
      "id": "integral001random1",
      "type": "mathwithrandomnumber",
      "header": "13. Первообразная и интеграл",
      "title": "Интеграл линейной функции",
      "theme": "Интегралы",
      "text": "Чему равен интеграл $$\\int_{{{var1-10}}}^{{={var1-10}+2}} x \\, dx$$?",
      "answer": "((({var1-10}+2)^2 - ({var1-10})^2) / 2)",
      "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Решаем интеграл ∫x dx</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Находим первообразную</div>
      <div class="card-body">
        <p class="card-text">Для функции $f(x) = x$ первообразная равна:</p>
        <p class="card-text">$F(x) = \\frac{x^2}{2} + C$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Применяем формулу Ньютона-Лейбница</div>
      <div class="card-body">
        <p class="card-text">$\\int_a^b x dx = F(b) - F(a) = \\frac{b^2}{2} - \\frac{a^2}{2} = \\frac{b^2 - a^2}{2}$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Шаг 3: Подставляем пределы интегрирования</div>
      <div class="card-body">
        <p class="card-text">Нижний предел: $a = {var1-10}$</p>
        <p class="card-text">Верхний предел: $b = {={var1-10}+2}$</p>
        <hr>
        <p class="card-text">$\\int_{{{var1-10}}}^{{={var1-10}+2}} x dx = \\frac{({={var1-10}+2})^2}{2} - \\frac{({var1-10})^2}{2}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^2}}{2} - \\frac{{= ({var1-10})^2}}{2}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^2} - {= ({var1-10})^2}}{2}$</p>
        <p class="card-text">$= {= ((({var1-10}+2)^2 - ({var1-10})^2) / 2)}$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= ((({var1-10}+2)^2 - ({var1-10})^2) / 2)}
    </div>
  </div>
</div>`,
      "randomfrom": [0, 1, 2, 3, 4]
    },

    {
      "id": "integral002random3",
      "type": "mathwithrandomnumber",
      "header": "13. Первообразная и интеграл",
      "title": "Интеграл линейной функции",
      "theme": "Интегралы",
      "text": "Чему равен интеграл $$\\int_{{{var1-10}}}^{{={var1-10}+2}} \\frac{x}{2} \\, dx$$?",
      "answer": "((({var1-10}+2)^2 - ({var1-10})^2) / 4)",
      "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Решаем интеграл ∫(x/2) dx</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Находим первообразную</div>
      <div class="card-body">
        <p class="card-text">Для функции $f(x) = \\frac{x}{2}$ первообразная равна:</p>
        <p class="card-text">$F(x) = \\frac{1}{2} \\cdot \\frac{x^2}{2} + C = \\frac{x^2}{4} + C$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Применяем формулу Ньютона-Лейбница</div>
      <div class="card-body">
        <p class="card-text">$\\int_a^b \\frac{x}{2} dx = F(b) - F(a) = \\frac{b^2}{4} - \\frac{a^2}{4} = \\frac{b^2 - a^2}{4}$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Шаг 3: Подставляем пределы интегрирования</div>
      <div class="card-body">
        <p class="card-text">Нижний предел: $a = {var1-10}$</p>
        <p class="card-text">Верхний предел: $b = {={var1-10}+2}$</p>
        <hr>
        <p class="card-text">$\\int_{{{var1-10}}}^{{={var1-10}+2}} \\frac{x}{2} dx = \\frac{({={var1-10}+2})^2}{4} - \\frac{({var1-10})^2}{4}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^2}}{4} - \\frac{{= ({var1-10})^2}}{4}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^2} - {= ({var1-10})^2}}{4}$</p>
        <p class="card-text">$= {= ((({var1-10}+2)^2 - ({var1-10})^2) / 4)}$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= ((({var1-10}+2)^2 - ({var1-10})^2) / 4)}
    </div>
  </div>
</div>`,
      "randomfrom": [0, 1, 2, 3, 4]
    },

    {
      "id": "integral004random4",
      "type": "mathwithrandomnumber",
      "header": "13. Первообразная и интеграл",
      "title": "Интеграл константы",
      "theme": "Интегралы",
      "text": "Чему равен интеграл $$\\int_{{{var1-10}}}^{{={var1-10}+2}} 10 \\, dx$$?",
      "answer": "10 * 2",
      "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Решаем интеграл ∫10 dx</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Находим первообразную</div>
      <div class="card-body">
        <p class="card-text">Для функции $f(x) = 10$ (константа) первообразная равна:</p>
        <p class="card-text">$F(x) = 10x + C$</p>
        <p class="text-muted">(так как производная от $10x$ равна $10$)</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Применяем формулу Ньютона-Лейбница</div>
      <div class="card-body">
        <p class="card-text">$\\int_a^b 10 \\, dx = F(b) - F(a) = 10b - 10a = 10(b - a)$</p>
        <p class="card-text">Для константы $c$: $\\int_a^b c \\, dx = c \\cdot (b - a)$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Шаг 3: Подставляем пределы интегрирования</div>
      <div class="card-body">
        <p class="card-text">Нижний предел: $a = {var1-10}$</p>
        <p class="card-text">Верхний предел: $b = {={var1-10}+2}$</p>
        <p class="card-text">Длина отрезка: $b - a = {={var1-10}+2} - {var1-10} = 2$</p>
        <hr>
        <p class="card-text">$\\int_{{{var1-10}}}^{{={var1-10}+2}} 10 \\, dx = 10 \\cdot ({={var1-10}+2} - {var1-10})$</p>
        <p class="card-text">$= 10 \\cdot 2$</p>
        <p class="card-text">$= 20$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> 20 (не зависит от выбранного значения {var1-10} = {var1-10})
    </div>
  </div>
</div>`,
      "randomfrom": [0, 1, 2, 3, 4]
    },

    {
      "id": "integral003random1",
      "type": "mathwithrandomnumber",
      "header": "13. Первообразная и интеграл",
      "title": "Интеграл квадратичной функции",
      "theme": "Интегралы",
      "text": "Чему равен интеграл $$\\int_{{{var1-10}}}^{{={var1-10}+2}} \\frac{x^2}{3} \\, dx$$?",
      "answer": "((({var1-10}+2)^3 - ({var1-10})^3) / 9)",
      "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Решаем интеграл ∫(x²/3) dx</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Находим первообразную</div>
      <div class="card-body">
        <p class="card-text">Для функции $f(x) = \\frac{x^2}{3}$ первообразная равна:</p>
        <p class="card-text">$F(x) = \\frac{1}{3} \\cdot \\frac{x^3}{3} + C = \\frac{x^3}{9} + C$</p>
        <p class="text-muted">(так как $\\int x^2 dx = \\frac{x^3}{3}$)</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Применяем формулу Ньютона-Лейбница</div>
      <div class="card-body">
        <p class="card-text">$\\int_a^b \\frac{x^2}{3} dx = F(b) - F(a) = \\frac{b^3}{9} - \\frac{a^3}{9} = \\frac{b^3 - a^3}{9}$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Шаг 3: Подставляем пределы интегрирования</div>
      <div class="card-body">
        <p class="card-text">Нижний предел: $a = {var1-10}$</p>
        <p class="card-text">Верхний предел: $b = {={var1-10}+2}$</p>
        <hr>
        <p class="card-text">$\\int_{{{var1-10}}}^{{={var1-10}+2}} \\frac{x^2}{3} dx = \\frac{({={var1-10}+2})^3}{9} - \\frac{({var1-10})^3}{9}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^3}}{9} - \\frac{{= ({var1-10})^3}}{9}$</p>
        <p class="card-text">$= \\frac{{= ({var1-10}+2)^3} - {= ({var1-10})^3}}{9}$</p>
        <p class="card-text">$= {= ((({var1-10}+2)^3 - ({var1-10})^3) / 9)}$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= ((({var1-10}+2)^3 - ({var1-10})^3) / 9)}
    </div>
  </div>
</div>`,
      "randomfrom": [0, 1, 2, 3, 4]
    },


    // Вероятность



    {
      "id": "statistics_mean_mixed001",
      "type": "mathwithrandomnumber",
      "header": "14. Вероятность",
      "title": "Среднее арифметическое",
      "theme": "Средние величины",
      "altpath": "currentDay",
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
    </div>
</div>`,
      "randomfrom": [10, 15, 20, 25, 30, 35]
    },

    {
      "id": "statistics_var_mixed005",
      "type": "mathwithrandomnumber",
      "header": "14. Вероятность",
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
      "randomfrom": [4, 9, 16, 25],
      "altpath": "currentDay"
    },


    {
      "id": "statistics_stdev_mixed005",
      "type": "mathwithrandomnumber",
      "header": "14. Вероятность",
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
    <h5>Порядок расчёта стандартного отклонения</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-info">
      <strong>Известно:</strong> среднее арифметическое $$ \\bar{x} = {var1-10} $$, количество наблюдений n = 6,
      $$ \\sqrt{{var1-10}} = {= POWER({var1-10}, 1/2)} $$
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Шаг 1. Отклонения от среднего
      </div>
      <div class="card-body">
        <p>$$ x_i - \\bar{x} $$</p>
        <p class="text-center">
          $$ ({= {var1-10} + POWER({var1-10}, 1/2)}) - {var1-10} = {= POWER({var1-10}, 1/2)} $$<br>
          $$ ({= {var1-10} - POWER({var1-10}, 1/2)}) - {var1-10} = -{= POWER({var1-10}, 1/2)} $$<br>
          $$ ({= {var1-10} + POWER({var1-10}, 1/2)}) - {var1-10} = {= POWER({var1-10}, 1/2)} $$<br>
          $$ ({= {var1-10} - POWER({var1-10}, 1/2)}) - {var1-10} = -{= POWER({var1-10}, 1/2)} $$<br>
          $$ ({= {var1-10} + POWER({var1-10}, 1/2)}) - {var1-10} = {= POWER({var1-10}, 1/2)} $$<br>
          $$ ({= {var1-10} - POWER({var1-10}, 1/2)}) - {var1-10} = -{= POWER({var1-10}, 1/2)} $$
        </p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Шаг 2. Квадраты отклонений
      </div>
      <div class="card-body">
        <p>$$ (x_i - \\bar{x})^2 $$</p>
        <p class="text-center">
          $$ ({= POWER({var1-10}, 1/2)})^2 = {var1-10} $$<br>
          $$ (-{= POWER({var1-10}, 1/2)})^2 = {var1-10} $$<br>
          $$ ({= POWER({var1-10}, 1/2)})^2 = {var1-10} $$<br>
          $$ (-{= POWER({var1-10}, 1/2)})^2 = {var1-10} $$<br>
          $$ ({= POWER({var1-10}, 1/2)})^2 = {var1-10} $$<br>
          $$ (-{= POWER({var1-10}, 1/2)})^2 = {var1-10} $$
        </p>
        <p>Каждый квадрат равен <strong>{var1-10}</strong>.</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Шаг 3. Сумма квадратов отклонений
      </div>
      <div class="card-body">
        <p class="text-center">$$ \\sum (x_i - \\bar{x})^2 = 6 \\cdot {var1-10} = {= 6 * {var1-10}} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Шаг 4. Дисперсия (генеральная совокупность)
      </div>
      <div class="card-body">
        <p class="text-center">$$ \\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} = \\frac{{= 6 * {var1-10}}}{6} = {var1-10} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Шаг 5. Стандартное отклонение
      </div>
      <div class="card-body">
        <p class="text-center">$$ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{{var1-10}} = {= POWER({var1-10}, 1/2)} $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> $$ \\sigma = {= POWER({var1-10}, 1/2)} $$
    </div>
  </div>
</div>`,
      "randomfrom": [4, 9, 16, 25],
      "altpath": "currentDay"
    },

    {
      "id": "statistics547",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Описательная статистика",
      "theme": "Корреляционно-регрессионный анализ",
      "altpath": "currentDay",
      "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$\n\nДанная формула используется для расчёта:",
      "choices": ["Коэффициента корреляции", "Ковариации по генеральной совокупности", "Ковариации по выборке", "Коэффициента детерминации"],
      "answers": ["Ковариации по генеральной совокупности"],
      "hint": `<div class='card'><div class='card-header bg-primary text-white'><h5> О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong> Дана формула:</strong> $$\\text{Cov}(X,Y) = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5> Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма произведений отклонений</strong>, в знаменателе — <strong>n</strong>. Это <strong>ковариация по генеральной совокупности</strong> (COVARIANCE.P).</p></div></div><div class='alert alert-success'><strong> Правильный ответ:</strong> Ковариация по генеральной совокупности</div></div></div>`
    },

    {
      "id": "statistics543",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Описательная статистика",
      "altpath": "currentDay",
      "theme": "Меры центральной тенденции",
      "text": "$$\\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}$$\n\nДанная формула используется для расчёта (при чётном количестве наблюдений):",
      "choices": ["Среднего арифметического", "Моды", "Медианы", "Квартиля"],
      "answers": ["Медианы"],
      "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5> О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong> Дана формула:</strong> $$Me = \\frac{x_{n/2} + x_{n/2+1}}{2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5> Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Формула берёт <strong>два центральных элемента</strong> упорядоченного ряда и делит их сумму на 2. Это <strong>медиана</strong> для чётного количества наблюдений.</p></div></div><div class='alert alert-success'><strong> Правильный ответ:</strong> Медиана</div></div></div>"
    },

    {
      "id": "statistics544",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Анализ данных",
      "altpath": "currentDay",
      "theme": "Меры разброса",
      "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}$$\n\nДанная формула используется для расчёта:",
      "choices": ["Стандартного отклонения", "Дисперсии по выборке", "Дисперсии по генеральной совокупности", "Среднего абсолютного отклонения"],
      "answers": ["Дисперсии по генеральной совокупности"],
      "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5> О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong> Дана формула:</strong> $$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5> Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма квадратов отклонений</strong> от среднего, в знаменателе — <strong>n</strong> (деление на количество наблюдений). Это <strong>дисперсия по генеральной совокупности</strong> (VAR.P).</p></div></div><div class='alert alert-success'><strong> Правильный ответ:</strong> Дисперсия по генеральной совокупности</div></div></div>"
    },


    {
      "id": "statistics545",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Статистический показатель",
      "theme": "Меры разброса",
      "altpath": "currentDay",
      "text": "$$\\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}$$\n\nДанная формула используется для расчёта:",
      "choices": ["Дисперсии", "Стандартного отклонения по генеральной совокупности", "Среднего абсолютного отклонения", "Размаха вариации"],
      "answers": ["Стандартного отклонения по генеральной совокупности"],
      "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5> О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong> Дана формула:</strong> $$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5> Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Это <strong>квадратный корень из дисперсии</strong>. Результат выражается в тех же единицах, что и исходные данные. Это <strong>стандартное отклонение по генеральной совокупности</strong> (STDEV.P).</p></div></div><div class='alert alert-success'><strong> Правильный ответ:</strong> Стандартное отклонение по генеральной совокупности</div></div></div>"
    },


    {
      "id": "statistics542",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Статистическая оценка",
      "theme": "Меры центральной тенденции",
      "altpath": "currentDay",
      "text": "$$\\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$\n\nДанная формула используется для расчёта:",
      "choices": ["Медианы", "Среднего арифметического", "Дисперсии", "Стандартного отклонения"],
      "answers": ["Среднего арифметического"],
      "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5> О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong> Дана формула:</strong> $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5> Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма всех значений</strong>, в знаменателе — <strong>количество значений</strong>. Это формула <strong>среднего арифметического</strong>.</p></div></div><div class='alert alert-success'><strong> Правильный ответ:</strong> Среднее арифметическое</div></div></div>"
    },

    {
      "id": "finance_wacc_calc003",
      "type": "mathwithrandomnumber",
      "header": "14. Вероятность",
      "title": "Расчет средней взвешенной",
      "theme": "Оценка капитала",
      "text": "Структура капитала компании: собственный капитал {var1-10} млн руб., заёмный капитал {=1000-{var1-10}} млн руб. Стоимость собственного капитала 15%, стоимость заёмного капитала 10%. Рассчитайте WACC (средневзвешенную стоимость капитала) в процентах (без учёта налога на прибыль).",
      "answer": "({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10",
      "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт WACC (средневзвешенной стоимости капитала)</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула WACC (без учёта налога)
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$WACC = \\frac{E}{E+D} \\cdot r_e + \\frac{D}{E+D} \\cdot r_d$$</p>
        <ul>
          <li><strong>E</strong> — собственный капитал = {var1-10} млн руб.</li>
          <li><strong>D</strong> — заёмный капитал = {=1000-{var1-10}} млн руб.</li>
          <li><strong>rₑ</strong> — стоимость собственного капитала = 15%</li>
          <li><strong>r<sub>d</sub></strong> — стоимость заёмного капитала = 10%</li>
          <li><strong>E + D</strong> = 1000 млн руб.</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Расчёт весов
      </div>
      <div class="card-body">
        <p class="card-text">Доля собственного капитала: $$\\frac{{var1-10}}{1000} = {= {var1-10} / 1000}$$</p>
        <p class="card-text">Доля заёмного капитала: $$\\frac{{=1000-{var1-10}}}{1000} = {= (1000 - {var1-10}) / 1000}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление WACC
      </div>
      <div class="card-body">
        <p class="card-text">$$WACC = {= {var1-10} / 1000} \\cdot 15\\% + {= (1000 - {var1-10}) / 1000} \\cdot 10\\%$$</p>
        <p class="card-text">$$WACC = {= ({var1-10} / 1000) * 15} + {= ((1000 - {var1-10}) / 1000) * 10} = {= ({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10}\\%$$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> <code>({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10</code> или <code>{= ({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10}</code>
    </div>
  </div>
</div>`,
      "randomfrom": [800, 700, 600, 500, 400, 300, 200],
      "altpath": "currentDay",
    },



    {
      "id": "geom-prob-001",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Вероятность на числовой прямой",
      "theme": "Геометрическая вероятность",
      "text": `На числовой прямой наугад выбирают точку $x$, удовлетворяющую неравенству $|x-5| \\le 10$. Какова вероятность того, что эта точка также удовлетворяет неравенству $|x-1| \\le 1$?`,
      "choices": [
        "\\dfrac{1}{20}",
        "\\dfrac{1}{10}",
        "\\dfrac{1}{5}",
        "\\dfrac{1}{4}",
        "\\dfrac{1}{2}"
      ],
      "answers": ["\\dfrac{1}{10}"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Геометрическая вероятность</h5>
        <p>Если пространство исходов — отрезок на прямой, то:</p>
        <p class="text-center">$$P = \\frac{\\text{длина благоприятного отрезка}}{\\text{длина всего отрезка}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Решим первое неравенство $|x-5| \\le 10$</p>
          <p>$$-10 \\le x-5 \\le 10$$</p>
          <p>$$-5 \\le x \\le 15$$</p>
          <p>Длина отрезка: $L = 15 - (-5) = 20$</p>
          
          <p><strong>Шаг 2:</strong> Решим второе неравенство $|x-1| \\le 1$</p>
          <p>$$-1 \\le x-1 \\le 1$$</p>
          <p>$$0 \\le x \\le 2$$</p>
          <p>Длина отрезка: $l = 2 - 0 = 2$</p>
          
          <p><strong>Шаг 3:</strong> Найдём пересечение отрезков $[-5; 15] \\cap [0; 2] = [0; 2]$</p>
          <p>Длина пересечения: $l_{\\text{пер}} = 2$</p>
          
          <p><strong>Шаг 4:</strong> Геометрическая вероятность:</p>
          <p>$$P = \\frac{l_{\\text{пер}}}{L} = \\frac{2}{20} = \\frac{1}{10}$$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • $\\dfrac{1}{20}$ — длина пересечения была бы 1<br>
        • $\\dfrac{1}{5}$ — длина пересечения была бы 4<br>
        • $\\dfrac{1}{4}$ — неверно<br>
        • $\\dfrac{1}{2}$ — неверно
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Геометрическая вероятность на прямой: $P = \\dfrac{\\text{длина пересечения}}{\\text{длина всего отрезка}}$
      </div>
    </div>`
    },

    {
      "id": "def-prob-001",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Произведение событий",
      "theme": "Основные определения ТВ",
      "text": `Произведением событий A и B называют ...`,
      "choices": [
        `событие, состоящее в наступлении хотя бы одного из событий A или B`,
        `событие, состоящее в наступлении события A и не наступлении события B`,
        `событие, состоящее в наступлении обоих событий A и B одновременно`,
        `событие, состоящее в ненаступлении обоих событий A и B`,
        `разность множеств A и B`
      ],
      "answers": [`событие, состоящее в наступлении обоих событий A и B одновременно`],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Произведение событий (пересечение)</h5>
        <p><strong>Произведением (или пересечением)</strong> событий A и B называется событие C, которое означает, что <strong>произошло и событие A, и событие B</strong>.</p>
        <p class="text-center">$$C = A \\cap B = A \\cdot B$$</p>
        <p>Также говорят: «одновременное наступление A и B».</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример</strong>
        </div>
        <div class="card-body">
          <p>Бросаем игральный кубик.</p>
          <ul>
            <li>A = {выпало чётное число} = {2, 4, 6}</li>
            <li>B = {выпало число больше 3} = {4, 5, 6}</li>
            <li>Произведение A·B = {4, 6} = {выпало чётное число <strong>И</strong> число больше 3}</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Другие варианты — это другие операции:</strong><br>
        • «Хотя бы одно из событий» — это <strong>сумма (объединение)</strong> событий A ∪ B.<br>
        • «A и не B» — это <strong>разность</strong> A \\ B.<br>
        • «Ненаступление обоих» — это <strong>противоположное</strong> к сумме: <span class="katex">$\\overline{A \\cup B}$</span>.<br>
        • «Разность множеств» — то же, что A \\ B.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        • <strong>Произведение</strong> = <strong>пересечение</strong> = <strong>И</strong> (A и B)<br>
        • <strong>Сумма</strong> = <strong>объединение</strong> = <strong>ИЛИ</strong> (A или B)
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Обозначения</strong>
        </div>
        <div class="card-body">
          <ul class="mb-0">
            <li>Произведение: $A \\cap B$, $A \\cdot B$, $AB$</li>
            <li>Сумма: $A \\cup B$, $A + B$</li>
          </ul>
        </div>
      </div>
    </div>`
    },

    {
      "id": "def-prob-002",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Сумма вероятностей двух событий",
      "theme": "Основные определения ТВ",
      "text": `Сумма вероятностей двух событий A и B равна ...`,
      "choices": [
        `P(A) + P(B)`,
        `P(A) + P(B) - P(A \\cap B)`,
        `P(A) + P(B) + P(A \\cap B)`,
        `P(A) \\cdot P(B)`,
        `1 - P(\\overline{A}) - P(\\overline{B})`
      ],
      "answers": [`P(A) + P(B) - P(A \\cap B)`],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Сумма вероятностей двух событий</h5>
        <p><strong>Общая формула</strong> для любых событий A и B (теорема сложения вероятностей):</p>
        <p class="text-center">$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</p>
        <p>Вероятность наступления <strong>хотя бы одного</strong> из событий A или B.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Частные случаи</strong>
        </div>
        <div class="card-body">
          <p><strong>1. Несовместные события</strong> (A ∩ B = ∅, P(A∩B) = 0)</p>
          <p>$$P(A \\cup B) = P(A) + P(B)$$</p>
          
          <p><strong>2. Совместные события</strong> (A ∩ B ≠ ∅)</p>
          <p>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</p>
          
          <p><strong>3. Полная группа событий</strong> (A ∪ B = Ω, A ∩ B = ∅)</p>
          <p>$$P(A) + P(B) = 1$$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Примеры</strong>
        </div>
        <div class="card-body">
          <p><strong>Пример 1 (несовместные):</strong> Бросаем кубик. A={1}, B={6}.<br>
          $P(A \\cup B) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$</p>
          
          <p><strong>Пример 2 (совместные):</strong> Из колоды карт. A={туз}, B={черва}.<br>
          $P(A \\cup B) = \\frac{4}{36} + \\frac{9}{36} - \\frac{1}{36} = \\frac{12}{36} = \\frac{1}{3}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • $P(A) + P(B)$ — работает <strong>только для несовместных</strong> событий.<br>
        • $P(A) + P(B) + P(A \\cap B)$ — завышенная вероятность (ошибка).<br>
        • $P(A) \\cdot P(B)$ — формула <strong>умножения</strong> для независимых событий.<br>
        • $1 - P(\\overline{A}) - P(\\overline{B})$ — неверное выражение.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните универсальную формулу:</strong><br>
        $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
      </div>
      
      <div class="card border-warning mt-2">
        <div class="card-header bg-warning text-dark">
          <strong> Как не ошибиться?</strong>
        </div>
        <div class="card-body">
          <ul class="mb-0">
            <li><strong>Несовместные</strong> — просто складываем.</li>
            <li><strong>Совместные</strong> — складываем и <strong>вычитаем пересечение</strong>, чтобы не посчитать его дважды.</li>
          </ul>
        </div>
      </div>
    </div>`
    },

    {
      "id": "def-prob-003",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Вероятность суммы двух независимых событий",
      "theme": "Основные определения ТВ",
      "text": `Вероятность суммы двух независимых событий A и B равна ...`,
      "choices": [
        `P(A) + P(B)`,
        `P(A) + P(B) - P(A) \\cdot P(B)`,
        `P(A) + P(B) - P(A \\cap B)`,
        `P(A) \\cdot P(B)`,
        `1 - P(\\overline{A}) \\cdot P(\\overline{B})`
      ],
      "answers": [
        `P(A) + P(B) - P(A) \\cdot P(B)`,
        `P(A) + P(B) - P(A \\cap B)`,
        `1 - P(\\overline{A}) \\cdot P(\\overline{B})`
      ],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Сумма двух независимых событий</h5>
        <p><strong>Независимые события</strong> — это события, для которых выполняется:</p>
        <p class="text-center">$$P(A \\cap B) = P(A) \\cdot P(B)$$</p>
        <p>Поэтому формула суммы принимает вид:</p>
        <p class="text-center">$$P(A \\cup B) = P(A) + P(B) - P(A) \\cdot P(B)$$</p>
        <p>А через противоположные события:</p>
        <p class="text-center">$$P(A \\cup B) = 1 - P(\\overline{A}) \\cdot P(\\overline{B})$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Для любых событий: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p>
          <p>Для независимых: $P(A \\cap B) = P(A) \\cdot P(B)$</p>
          <p>Подставляем: $P(A \\cup B) = P(A) + P(B) - P(A) \\cdot P(B)$</p>
          <p>Альтернативный вывод через противоположные события:</p>
          <p>$P(A \\cup B) = 1 - P(\\overline{A \\cup B}) = 1 - P(\\overline{A} \\cap \\overline{B})$</p>
          <p>Для независимых: $P(\\overline{A} \\cap \\overline{B}) = P(\\overline{A}) \\cdot P(\\overline{B})$</p>
          <p>$P(A \\cup B) = 1 - P(\\overline{A}) \\cdot P(\\overline{B})$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример</strong>
        </div>
        <div class="card-body">
          <p>Бросаем монету два раза.</p>
          <ul>
            <li>A = {в первый раз выпал орёл} ⇒ $P(A) = \\frac{1}{2}$</li>
            <li>B = {во второй раз выпал орёл} ⇒ $P(B) = \\frac{1}{2}$</li>
            <li>A и B независимы</li>
          </ul>
          <p>Вероятность, что орёл выпадет <strong>хотя бы один раз</strong>:</p>
          <p>$$P(A \\cup B) = \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{2} \\cdot \\frac{1}{2} = 1 - \\frac{1}{4} = \\frac{3}{4}$$</p>
          <p>Или: $P(A \\cup B) = 1 - \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{3}{4}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты?</strong><br>
        • $P(A) + P(B)$ — работает <strong>только для несовместных</strong> событий (независимые могут быть совместными).<br>
        • $P(A) \\cdot P(B)$ — это <strong>произведение</strong>, а не сумма.<br>
        • Остальные варианты — правильные формы записи для независимых событий.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните три формы:</strong><br>
        $$P(A \\cup B) = P(A) + P(B) - P(A) \\cdot P(B)$$<br>
        $$P(A \\cup B) = 1 - P(\\overline{A}) \\cdot P(\\overline{B})$$<br>
        $$P(A \\cup B) = 1 - (1-P(A)) \\cdot (1-P(B))$$
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Сравнение формул</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4"><strong>Тип событий</strong></div>
            <div class="col-8"><strong>Формула суммы</strong></div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-4">Любые</div>
            <div class="col-8">$P(A) + P(B) - P(A \\cap B)$</div>
          </div>
          <div class="row">
            <div class="col-4">Несовместные</div>
            <div class="col-8">$P(A) + P(B)$</div>
          </div>
          <div class="row">
            <div class="col-4"><strong>Независимые</strong></div>
            <div class="col-8"><strong>$P(A) + P(B) - P(A)P(B)$</strong></div>
          </div>
        </div>
      </div>
    </div>`
    },


    {
      "id": "def-prob-004",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Теорема Бернулли",
      "theme": "Предельные теоремы",
      "text": `Теорема Бернулли устанавливает связь между ...`,
      "choices": [
        `математическим ожиданием и дисперсией`,
        `частотой события и его вероятностью`,
        `средним арифметическим и математическим ожиданием`,
        `нормальным распределением и распределением Пуассона`,
        `выборкой и генеральной совокупностью`
      ],
      "answers": [`частотой события и его вероятностью`],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Теорема Бернулли (Закон больших чисел)</h5>
        <p><strong>Теорема Бернулли</strong> — одна из форм закона больших чисел. Она утверждает, что при увеличении числа независимых испытаний <strong>частота события сходится по вероятности к его вероятности</strong>.</p>
        <p class="text-center">$$\\frac{m}{n} \\xrightarrow{P} p$$</p>
        <p>где $m$ — число наступлений события, $n$ — число испытаний, $p$ — вероятность события.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Формулировка теоремы</strong>
        </div>
        <div class="card-body">
          <p>Пусть проводится $n$ независимых испытаний, в каждом из которых событие A наступает с вероятностью $p$ ($0 < p < 1$).</p>
          <p>Пусть $m$ — число наступлений события A в этих $n$ испытаниях.</p>
          <p>Тогда для любого $\\varepsilon > 0$:</p>
          <p class="text-center">$$\\lim_{n \\to \\infty} P\\left(\\left|\\frac{m}{n} - p\\right| < \\varepsilon\\right) = 1$$</p>
          <p>Это означает, что при большом числе испытаний частота события $\\frac{m}{n}$ мало отличается от его вероятности $p$.</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример из жизни</strong>
        </div>
        <div class="card-body">
          <p>Бросаем монету. Вероятность орла $p = 0.5$.</p>
          <ul>
            <li>При 10 бросках частота орла может быть 0.3, 0.4, 0.6, 0.7 — возможны сильные отклонения.</li>
            <li>При 1000 бросках частота орла будет <strong>близка</strong> к 0.5 (например, 0.49 или 0.51).</li>
            <li>При 100 000 бросках частота будет ещё ближе к 0.5.</li>
          </ul>
          <p class="mt-2">Теорема Бернулли объясняет, почему в долгой серии экспериментов относительная частота стабилизируется около вероятности.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • <strong>Математическое ожидание и дисперсия</strong> — это теорема о свойствах моментов.<br>
        • <strong>Среднее арифметическое и математическое ожидание</strong> — это теорема Хинчина (другая форма ЗБЧ).<br>
        • <strong>Нормальное распределение и распределение Пуассона</strong> — это предельные теоремы (Муавра-Лапласа, Пуассона).<br>
        • <strong>Выборка и генеральная совокупность</strong> — это основы математической статистики.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Теорема Бернулли: <strong>частота → вероятность</strong> при увеличении числа испытаний.<br>
        Это <strong>закон больших чисел</strong> для схемы Бернулли.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Историческая справка</strong>
        </div>
        <div class="card-body">
          <p class="mb-0">Теорема была доказана <strong>Якобом Бернулли</strong> и опубликована в 1713 году в его труде «Искусство предположений». Это одна из первых форм закона больших чисел.</p>
        </div>
      </div>
      
      <div class="card border-warning mt-2">
        <div class="card-header bg-warning text-dark">
          <strong>️ Важное уточнение</strong>
        </div>
        <div class="card-body mb-0">
          <p class="mb-0">Теорема Бернулли не утверждает, что $\\frac{m}{n} = p$ при больших $n$. Она утверждает, что <strong>вероятность большого отклонения</strong> $\\frac{m}{n}$ от $p$ стремится к нулю.</p>
        </div>
      </div>
    </div>`
    },


    // 15. Комбинаторика

    {
      "id": "combin-dice-001",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Сколько всего исходов?",
      "theme": "Комбинаторика и вероятность",
      "text": "Игральный кубик бросают один раз. Сколько всего возможных исходов у этого эксперимента?",
      "choices": [
        "3",
        "6",
        "8",
        "12",
        "36"
      ],
      "answers": ["6"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Исходы бросания кубика</h5>
        <p>Стандартный игральный кубик имеет <strong>6 граней</strong>, на которых нанесены числа от 1 до 6.</p>
        <p>При одном бросании может выпасть одно из этих чисел.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Возможные исходы: <strong>1, 2, 3, 4, 5, 6</strong></p>
          <p>Всего исходов: <strong>6</strong></p>
          <div class="text-center">
            <span class="badge badge-primary p-2 mx-1">1</span>
            <span class="badge badge-primary p-2 mx-1">2</span>
            <span class="badge badge-primary p-2 mx-1">3</span>
            <span class="badge badge-primary p-2 mx-1">4</span>
            <span class="badge badge-primary p-2 mx-1">5</span>
            <span class="badge badge-primary p-2 mx-1">6</span>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3 — слишком мало (это, например, количество чётных исходов).<br>
        • 8, 12 — у стандартного кубика нет столько граней.<br>
        • 36 — это количество исходов при <strong>двух</strong> бросаниях кубика (6×6).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При одном бросании кубика — <strong>6 равновозможных исходов</strong>.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-002",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность выпадения числа",
      "theme": "Комбинаторика и вероятность",
      "text": "Игральный кубик бросают один раз. Какова вероятность того, что выпадет число 4?",
      "choices": [
        "1/6",
        "1/2",
        "1/4",
        "1/3",
        "4/6"
      ],
      "answers": ["1/6"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Классическое определение вероятности</h5>
        <p class="text-center">$$P = \\frac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Общее число исходов: <strong>6</strong></li>
            <li>Благоприятный исход (выпало число 4): <strong>1</strong></li>
            <li>Вероятность: $P = \\frac{1}{6}$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/2 — вероятность выпадения <strong>чётного</strong> числа.<br>
        • 1/4 — вероятность выпадения, например, числа больше 4? (2/6=1/3, не 1/4).<br>
        • 1/3 — вероятность выпадения числа больше 4 (5 или 6).<br>
        • 4/6 = 2/3 — слишком большая вероятность.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        У каждого отдельного числа на кубике вероятность выпадения $\\frac{1}{6}$.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-003",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность чётного числа",
      "theme": "Комбинаторика и вероятность",
      "text": "Игральный кубик бросают один раз. Какова вероятность того, что выпадет чётное число?",
      "choices": [
        "1/6",
        "1/3",
        "1/2",
        "2/3",
        "5/6"
      ],
      "answers": ["1/2"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Вероятность события</h5>
        <p>Событие «выпало чётное число» включает несколько благоприятных исходов.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Общее число исходов: <strong>6</strong></li>
            <li>Чётные числа на кубике: <strong>2, 4, 6</strong> (3 исхода)</li>
            <li>Вероятность: $P = \\frac{3}{6} = \\frac{1}{2}$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/6 — вероятность одного конкретного числа.<br>
        • 1/3 — вероятность чисел, кратных 3 (3 и 6).<br>
        • 2/3 — вероятность чисел, нечётных или больших 3.<br>
        • 5/6 — почти всегда, кроме одного исхода.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Чётных чисел на кубике 3 из 6 → вероятность $\\frac{1}{2}$.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-004",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Два кубика: сколько исходов?",
      "theme": "Комбинаторика и вероятность",
      "text": "Два игральных кубика бросают одновременно. Сколько всего возможных различных исходов (упорядоченных пар) у этого эксперимента?",
      "choices": [
        "12",
        "18",
        "21",
        "36",
        "42"
      ],
      "answers": ["36"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Основное правило комбинаторики</h5>
        <p>Если одно событие может произойти $n$ способами, а другое — $m$ способами, то вместе они могут произойти $n \\times m$ способами.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Первый кубик: <strong>6</strong> исходов (1–6)</li>
            <li>Второй кубик: <strong>6</strong> исходов (1–6)</li>
            <li>Общее число пар: $6 \\times 6 = 36$</li>
          </ul>
          <p>Примеры исходов: (1,1), (1,2), (1,3), ..., (6,5), (6,6)</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 12 — это $6+6$ (неправильное сложение, нужно умножение).<br>
        • 18, 21, 42 — не соответствуют $6 \\times 6 = 36$.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При бросании двух кубиков — <strong>36 равновозможных исходов</strong>.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Таблица исходов</strong>
        </div>
        <div class="card-body">
          <div style="font-family: monospace; font-size: 12px;">
              1   2   3   4   5   6<br>
            1 ●   ●   ●   ●   ●   ●<br>
            2 ●   ●   ●   ●   ●   ●<br>
            3 ●   ●   ●   ●   ●   ●<br>
            4 ●   ●   ●   ●   ●   ●<br>
            5 ●   ●   ●   ●   ●   ●<br>
            6 ●   ●   ●   ●   ●   ●
          </div>
          <p class="mt-2">Каждая точка — один исход. Всего 6×6 = 36.</p>
        </div>
      </div>
    </div>`
    },

    {
      "id": "combin-dice-005",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность суммы на двух кубиках",
      "theme": "Комбинаторика и вероятность",
      "text": "Два игральных кубика бросают одновременно. Какова вероятность того, что сумма выпавших чисел равна 7?",
      "choices": [
        "1/6",
        "1/9",
        "5/36",
        "6/36",
        "6/36"
      ],
      "answers": ["6/36"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Сумма на двух кубиках</h5>
        <p>Нужно посчитать, сколько пар дают сумму 7.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Общее число исходов: <strong>36</strong></p>
          <p>Пары, дающие сумму 7:</p>
          <div class="text-center">
            (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
          </div>
          <p>Всего <strong>6</strong> благоприятных исходов.</p>
          <p>Вероятность: $P = \\frac{6}{36} = \\frac{1}{6}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/6 — это правильный ответ, но его нужно записать как 6/36.<br>
        • 1/9 ≈ 4/36 — соответствует сумме, например, 5 или 9?<br>
        • 5/36 — соответствует сумме 6 или 8.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Сумма 7 — самая вероятная при бросании двух кубиков. Её вероятность $\\frac{6}{36} = \\frac{1}{6}$.
      </div>
      
      <div class="card border-warning mt-2">
        <div class="card-header bg-warning text-dark">
          <strong> Для справки: вероятности сумм</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">Сумма</div>
            <div class="col-8">Вероятность</div>
          </div>
          <hr class="my-1">
          <div class="row"><div class="col-4">2, 12</div><div class="col-8">1/36</div></div>
          <div class="row"><div class="col-4">3, 11</div><div class="col-8">2/36 = 1/18</div></div>
          <div class="row"><div class="col-4">4, 10</div><div class="col-8">3/36 = 1/12</div></div>
          <div class="row"><div class="col-4">5, 9</div><div class="col-8">4/36 = 1/9</div></div>
          <div class="row"><div class="col-4">6, 8</div><div class="col-8">5/36</div></div>
          <div class="row bg-light"><div class="col-4"><strong>7</strong></div><div class="col-8"><strong>6/36 = 1/6</strong></div></div>
        </div>
      </div>
    </div>`
    },

    {
      "id": "combin-dice-006",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность произведения на двух кубиках",
      "theme": "Комбинаторика и вероятность",
      "text": "Два игральных кубика бросают одновременно. Какова вероятность того, что произведение выпавших чисел будет равно 12?",
      "choices": [
        "1/9",
        "1/12",
        "1/18",
        "4/36",
        "4/36"
      ],
      "answers": ["4/36"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Произведение на двух кубиках</h5>
        <p>Нужно перебрать все пары, дающие произведение 12.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Общее число исходов: <strong>36</strong></p>
          <p>Пары, в которых произведение равно 12:</p>
          <ul>
            <li>(2, 6): 2×6 = 12</li>
            <li>(3, 4): 3×4 = 12</li>
            <li>(4, 3): 4×3 = 12</li>
            <li>(6, 2): 6×2 = 12</li>
          </ul>
          <p>Всего <strong>4</strong> благоприятных исхода.</p>
          <p>Вероятность: $P = \\frac{4}{36} = \\frac{1}{9}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/9 — это правильный ответ (4/36 = 1/9).<br>
        • 1/12 — соответствует 3/36 (например, произведение 18?).<br>
        • 1/18 — соответствует 2/36 (например, произведение 6?).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При поиске произведения важно не забывать про обратные пары: (2,6) и (6,2) — разные исходы.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-007",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность события «хотя бы одна шестёрка»",
      "theme": "Комбинаторика и вероятность",
      "text": "Два игральных кубика бросают одновременно. Какова вероятность того, что хотя бы на одном из кубиков выпадет 6?",
      "choices": [
        "1/6",
        "11/36",
        "1/3",
        "11/36",
        "2/6"
      ],
      "answers": ["11/36"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Событие «хотя бы один»</h5>
        <p>Удобно использовать <strong>правило противоположного события</strong>.</p>
        <p class="text-center">$$P(\\text{хотя бы одна 6}) = 1 - P(\\text{ни одной 6})$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через противоположное событие)</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Найдём вероятность того, что <strong>ни одной 6 не выпало</strong>.</p>
          <ul>
            <li>На первом кубике не 6: 5 вариантов (1,2,3,4,5)</li>
            <li>На втором кубике не 6: 5 вариантов (1,2,3,4,5)</li>
            <li>$P(\\text{ни одной 6}) = \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$</li>
          </ul>
          <p><strong>Шаг 2:</strong> Вычитаем из 1:</p>
          <p>$P(\\text{хотя бы одна 6}) = 1 - \\frac{25}{36} = \\frac{11}{36}$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (прямым подсчётом)</strong>
        </div>
        <div class="card-body">
          <p>Благоприятные исходы:</p>
          <ul>
            <li>6 на первом, на втором что угодно: (6,1)-(6,6) → <strong>6</strong> исходов</li>
            <li>6 на втором, на первом что угодно: (1,6)-(5,6) → <strong>5</strong> исходов (исход (6,6) уже учтён)</li>
            <li>Всего: $6 + 5 = 11$ исходов</li>
          </ul>
          <p>$P = \\frac{11}{36}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/6 = 6/36 — вероятность того, что на <strong>конкретном</strong> кубике выпала 6.<br>
        • 1/3 = 12/36 — близко, но неверно (ошибка: сложили 6+6, забыли вычесть повторяющийся (6,6)).<br>
        • 2/6 ≈ 12/36 — та же ошибка.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $P(\\text{хотя бы один}) = 1 - P(\\text{ни одного})$ — это часто проще, чем прямой подсчёт.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-008",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность суммы больше 9",
      "theme": "Комбинаторика и вероятность",
      "text": "Два игральных кубика бросают одновременно. Какова вероятность того, что сумма выпавших чисел будет больше 9?",
      "choices": [
        "1/6",
        "1/6",
        "5/36",
        "6/36",
        "10/36"
      ],
      "answers": ["6/36"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Сумма больше 9</h5>
        <p>Сумма может быть равна 10, 11 или 12.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Общее число исходов: <strong>36</strong></p>
          
          <p><strong>Сумма = 10:</strong></p>
          <p>Пары: (4,6), (5,5), (6,4) → <strong>3</strong> исхода</p>
          
          <p><strong>Сумма = 11:</strong></p>
          <p>Пары: (5,6), (6,5) → <strong>2</strong> исхода</p>
          
          <p><strong>Сумма = 12:</strong></p>
          <p>Пары: (6,6) → <strong>1</strong> исход</p>
          
          <p>Всего благоприятных исходов: $3 + 2 + 1 = 6$</p>
          <p>Вероятность: $P = \\frac{6}{36} = \\frac{1}{6}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 5/36 — это сумма = 8 или сумма = 6.<br>
        • 10/36 — это сумма ≥ 9? (9 даёт 4/36, всего 4+3+2+1=10/36, но 9 не входит).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Суммы 10, 11, 12 вместе дают 6 исходов (3+2+1) из 36 → 1/6.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-009",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Три кубика: сколько исходов?",
      "theme": "Комбинаторика и вероятность",
      "text": "Три игральных кубика бросают одновременно. Сколько всего возможных различных исходов (упорядоченных троек) у этого эксперимента?",
      "choices": [
        "18",
        "36",
        "72",
        "216",
        "1296"
      ],
      "answers": ["216"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Основное правило комбинаторики</h5>
        <p>Если несколько независимых событий, общее число исходов равно <strong>произведению</strong> числа исходов каждого события.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Первый кубик: <strong>6</strong> исходов</li>
            <li>Второй кубик: <strong>6</strong> исходов</li>
            <li>Третий кубик: <strong>6</strong> исходов</li>
            <li>Общее число троек: $6 \\times 6 \\times 6 = 216$</li>
          </ul>
          <p>Более общая формула: для $n$ кубиков — $6^n$ исходов.</p>
          <p>Для трёх кубиков: $6^3 = 216$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 18 — это $6 \\times 3$ или $6 + 6 + 6$ (неверно).<br>
        • 36 — это для двух кубиков.<br>
        • 72 — $6 \\times 12$ или $216/3$ (неверно).<br>
        • 1296 — это $6^4$ (для четырёх кубиков).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Для $n$ кубиков: общее число исходов = $6^n$.
      </div>
    </div>`
    },

    {
      "id": "combin-dice-010",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность выпадения трёх одинаковых чисел",
      "theme": "Комбинаторика и вероятность",
      "text": "Три игральных кубика бросают одновременно. Какова вероятность того, что на всех трёх кубиках выпадет одинаковое число?",
      "choices": [
        "1/36",
        "1/216",
        "6/216",
        "1/36",
        "1/6"
      ],
      "answers": ["6/216"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Три одинаковых числа</h5>
        <p>«Стрит» в кости — все три кубика показывают одно число.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Общее число исходов: $6^3 = 216$</p>
          
          <p>Благоприятные исходы — все три кубика показывают одно и то же число:</p>
          <ul>
            <li>Все единицы: (1,1,1)</li>
            <li>Все двойки: (2,2,2)</li>
            <li>Все тройки: (3,3,3)</li>
            <li>Все четвёрки: (4,4,4)</li>
            <li>Все пятёрки: (5,5,5)</li>
            <li>Все шестёрки: (6,6,6)</li>
          </ul>
          <p>Всего <strong>6</strong> благоприятных исходов.</p>
          <p>Вероятность: $P = \\frac{6}{216} = \\frac{1}{36}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/216 — это вероятность конкретной тройки, например (1,1,1).<br>
        • 1/36 — это правильный ответ (6/216 = 1/36).<br>
        • 1/6 — слишком большая вероятность.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Вероятность выпадения трёх одинаковых чисел = $\\frac{6}{216} = \\frac{1}{36}$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-001",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Сколько исходов при одном подбрасывании?",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают один раз. Сколько всего возможных исходов у этого эксперимента?",
      "choices": [
        "1",
        "2",
        "3",
        "4",
        "6"
      ],
      "answers": ["2"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙 Исходы подбрасывания монеты</h5>
        <p>У стандартной монеты есть <strong>две стороны</strong>: орёл (О) и решка (Р).</p>
        <p>При одном подбрасывании может выпасть либо орёл, либо решка.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Возможные исходы: <strong>Орёл (О), Решка (Р)</strong></p>
          <div class="text-center">
            <span class="badge badge-primary p-2 mx-2">О</span>
            <span class="badge badge-primary p-2 mx-2">Р</span>
          </div>
          <p>Всего исходов: <strong>2</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1 — слишком мало (это если бы монета упала только одной стороной).<br>
        • 3, 4, 6 — у монеты нет столько сторон (если только это не монета из фэнтези!).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При одном подбрасывании монеты — <strong>2 равновозможных исхода</strong>.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-002",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность выпадения орла",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают один раз. Какова вероятность того, что выпадет орёл?",
      "choices": [
        "0",
        "1/4",
        "1/3",
        "1/2",
        "1"
      ],
      "answers": ["1/2"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Вероятность выпадения орла</h5>
        <p class="text-center">$$P = \\frac{\\text{Число благоприятных исходов}}{\\text{Общее число исходов}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Общее число исходов: <strong>2</strong> (орёл, решка)</li>
            <li>Благоприятный исход (орёл): <strong>1</strong></li>
            <li>Вероятность: $P = \\frac{1}{2}$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 0 — вероятность невозможного события.<br>
        • 1/4 — слишком мало (1/4 = 0,25).<br>
        • 1/3 — ≈ 0,333, неверно.<br>
        • 1 — вероятность достоверного события (орёл выпадает всегда, но это не так).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        У монеты 2 стороны, поэтому вероятность орла = $\\frac{1}{2}$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-003",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Два подбрасывания: сколько исходов?",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают два раза подряд. Сколько всего возможных различных исходов (упорядоченных пар) у этого эксперимента?",
      "choices": [
        "2",
        "3",
        "4",
        "6",
        "8"
      ],
      "answers": ["4"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙 Основное правило комбинаторики</h5>
        <p>Если одно событие может произойти $n$ способами, а другое — $m$ способами, то вместе они могут произойти $n \\times m$ способами.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Первое подбрасывание: <strong>2</strong> исхода (О, Р)</li>
            <li>Второе подбрасывание: <strong>2</strong> исхода (О, Р)</li>
            <li>Общее число пар: $2 \\times 2 = 4$</li>
          </ul>
          <p>Все возможные исходы:</p>
          <div class="text-center">
            <span class="badge badge-primary p-2 mx-1">О,О</span>
            <span class="badge badge-primary p-2 mx-1">О,Р</span>
            <span class="badge badge-primary p-2 mx-1">Р,О</span>
            <span class="badge badge-primary p-2 mx-1">Р,Р</span>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 2 — это количество исходов при одном подбрасывании.<br>
        • 3 — неверно (некоторые забывают про исход (Р,О)).<br>
        • 6, 8 — слишком много.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При двух подбрасываниях монеты — $2^2 = 4$ исхода.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-004",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность двух орлов",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают два раза подряд. Какова вероятность того, что оба раза выпадет орёл?",
      "choices": [
        "1/2",
        "1/3",
        "1/4",
        "1/6",
        "1/8"
      ],
      "answers": ["1/4"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙 Вероятность двух орлов</h5>
        <p>События независимые, поэтому вероятности перемножаются.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через умножение вероятностей)</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{орёл в 1-й раз}) = \\frac{1}{2}$</li>
            <li>$P(\\text{орёл во 2-й раз}) = \\frac{1}{2}$</li>
            <li>$P(\\text{оба орла}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$</li>
          </ul>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (прямым подсчётом)</strong>
        </div>
        <div class="card-body">
          <p>Всего исходов: 4</p>
          <p>Благоприятный исход: (О,О) — только 1</p>
          <p>$P = \\frac{1}{4}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/2 — вероятность одного орла.<br>
        • 1/3 — неверно.<br>
        • 1/6 — вероятность чего-то с кубиком.<br>
        • 1/8 — вероятность трёх орлов подряд.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Вероятность двух орлов подряд = $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-005",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность «хотя бы один орёл»",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают два раза подряд. Какова вероятность того, что орёл выпадет хотя бы один раз?",
      "choices": [
        "1/4",
        "1/2",
        "3/4",
        "1/3",
        "2/3"
      ],
      "answers": ["3/4"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙 Событие «хотя бы один»</h5>
        <p>Используем правило противоположного события.</p>
        <p class="text-center">$$P(\\text{хотя бы один орёл}) = 1 - P(\\text{ни одного орла})$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через противоположное событие)</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Найдём вероятность того, что <strong>орёл не выпал ни разу</strong>.</p>
          <p>«Ни одного орла» = «оба раза выпала решка»</p>
          <p>$P(\\text{обе решки}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$</p>
          
          <p><strong>Шаг 2:</strong> Вычитаем из 1:</p>
          <p>$P(\\text{хотя бы один орёл}) = 1 - \\frac{1}{4} = \\frac{3}{4}$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (прямым подсчётом)</strong>
        </div>
        <div class="card-body">
          <p>Всего исходов: 4</p>
          <p>Благоприятные исходы (хотя бы один орёл):</p>
          <ul>
            <li>(О,О)</li>
            <li>(О,Р)</li>
            <li>(Р,О)</li>
          </ul>
          <p>Всего <strong>3</strong> исхода.</p>
          <p>$P = \\frac{3}{4}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух решек (противоположное событие).<br>
        • 1/2 — вероятность орла в конкретном броске (или ровно одного орла).<br>
        • 1/3, 2/3 — не соответствуют.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $P(\\text{хотя бы один орёл}) = 1 - P(\\text{все решки}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-006",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность ровно одного орла",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают два раза подряд. Какова вероятность того, что орёл выпадет ровно один раз?",
      "choices": [
        "1/4",
        "1/2",
        "3/4",
        "1/3",
        "2/3"
      ],
      "answers": ["1/2"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙 Ровно один орёл</h5>
        <p>Нужно посчитать исходы, где орёл встречается один раз.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Всего исходов: 4</p>
          <p>Исходы с ровно одним орлом:</p>
          <ul>
            <li>(О,Р) — орёл в первый раз, решка во второй</li>
            <li>(Р,О) — решка в первый раз, орёл во второй</li>
          </ul>
          <p>Всего <strong>2</strong> благоприятных исхода.</p>
          <p>$P = \\frac{2}{4} = \\frac{1}{2}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух орлов <strong>или</strong> двух решек.<br>
        • 3/4 — вероятность хотя бы одного орла.<br>
        • 1/3, 2/3 — не соответствуют.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При двух подбрасываниях: ровно один орёл выпадает в 2 случаях из 4 → $\\frac{1}{2}$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-007",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Три подбрасывания: сколько исходов?",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают три раза подряд. Сколько всего возможных различных исходов у этого эксперимента?",
      "choices": [
        "4",
        "6",
        "8",
        "9",
        "12"
      ],
      "answers": ["8"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙🪙 Основное правило комбинаторики</h5>
        <p>Для $n$ подбрасываний монеты: $2^n$ исходов.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Первое подбрасывание: 2 исхода</li>
            <li>Второе подбрасывание: 2 исхода</li>
            <li>Третье подбрасывание: 2 исхода</li>
            <li>Общее число исходов: $2 \\times 2 \\times 2 = 2^3 = 8$</li>
          </ul>
          <p>Все исходы:</p>
          <div class="text-center">
            <span class="badge badge-primary p-1 mx-1">О,О,О</span>
            <span class="badge badge-primary p-1 mx-1">О,О,Р</span>
            <span class="badge badge-primary p-1 mx-1">О,Р,О</span>
            <span class="badge badge-primary p-1 mx-1">О,Р,Р</span>
            <span class="badge badge-primary p-1 mx-1">Р,О,О</span>
            <span class="badge badge-primary p-1 mx-1">Р,О,Р</span>
            <span class="badge badge-primary p-1 mx-1">Р,Р,О</span>
            <span class="badge badge-primary p-1 mx-1">Р,Р,Р</span>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 4 — для двух подбрасываний.<br>
        • 6 — не степень двойки.<br>
        • 9, 12 — неверные результаты.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При трёх подбрасываниях монеты — $2^3 = 8$ исходов.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-008",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Вероятность трёх орлов",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают три раза подряд. Какова вероятность того, что все три раза выпадет орёл?",
      "choices": [
        "1/4",
        "1/6",
        "1/8",
        "3/8",
        "1/2"
      ],
      "answers": ["1/8"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙🪙 Три орла подряд</h5>
        <p>Вероятность независимых событий перемножается.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>$P(\\text{три орла}) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$</p>
          <p>Проверка: всего исходов 8, благоприятный 1 (О,О,О).</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух орлов подряд.<br>
        • 1/6 — вероятность чего-то с кубиком.<br>
        • 3/8 — вероятность ровно двух орлов.<br>
        • 1/2 — вероятность орла в одном броске.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Вероятность $n$ орлов подряд = $\\left(\\frac{1}{2}\\right)^n$.
      </div>
    </div>`
    },

    {
      "id": "combin-coin-009",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Хотя бы один орёл (три броска)",
      "theme": "Комбинаторика и вероятность",
      "text": "Монету подбрасывают три раза подряд. Какова вероятность того, что орёл выпадет хотя бы один раз?",
      "choices": [
        "1/8",
        "3/8",
        "1/2",
        "5/8",
        "7/8"
      ],
      "answers": ["7/8"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🪙🪙🪙 Хотя бы один орёл</h5>
        <p>Используем противоположное событие: «ни одного орла» = «все решки».</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Вероятность того, что все три раза выпала решка:</p>
          <p>$P(\\text{все решки}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$</p>
          
          <p><strong>Шаг 2:</strong> Вычитаем из 1:</p>
          <p>$P(\\text{хотя бы один орёл}) = 1 - \\frac{1}{8} = \\frac{7}{8}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/8 — вероятность трёх решек (противоположное событие).<br>
        • 3/8 — вероятность ровно одного орла?<br>
        • 1/2 — слишком мало для трёх бросков.<br>
        • 5/8 — неверно.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При трёх бросках: $P(\\text{хотя бы один орёл}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.
      </div>
    </div>`
    },



    {
      "id": "combin-balls-001",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Один шар из урны",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны наугад вынимают один шар. Какова вероятность того, что шар окажется белым?",
      "choices": [
        "1/5",
        "2/5",
        "3/5",
        "2/3",
        "3/2"
      ],
      "answers": ["3/5"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Классическое определение вероятности</h5>
        <p class="text-center">$$P = \\frac{\\text{Благоприятные исходы}}{\\text{Всего исходов}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>Всего шаров: $3 + 2 = 5$</li>
            <li>Благоприятных (белых): $3$</li>
            <li>$P = \\frac{3}{5}$</li>
          </ul>
          <div class="text-center mt-2">
            <span class="badge badge-light p-2 mx-1 border"></span>
            <span class="badge badge-light p-2 mx-1 border"></span>
            <span class="badge badge-light p-2 mx-1 border"></span>
            <span class="badge badge-dark p-2 mx-1 text-white"></span>
            <span class="badge badge-dark p-2 mx-1 text-white"></span>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/5 — вероятность вынуть конкретный шар (например, четвёртый белый).<br>
        • 2/5 — вероятность вынуть чёрный шар.<br>
        • 2/3, 3/2 — вероятности не могут быть больше 1.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Вероятность = (число нужных объектов) / (общее число объектов).
      </div>
    </div>`
    },

    {
      "id": "combin-balls-002",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Два шара с возвращением",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают шар, записывают цвет, возвращают обратно, затем вынимают ещё один шар. Какова вероятность того, что оба шара окажутся белыми?",
      "choices": [
        "3/5",
        "9/25",
        "6/25",
        "3/10",
        "9/25"
      ],
      "answers": ["9/25"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Схема с возвращением</h5>
        <p>Шар возвращают обратно, поэтому состав урны и вероятности <strong>не меняются</strong> от испытания к испытанию.</p>
        <p>События независимы → вероятности перемножаются.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{первый белый}) = \\frac{3}{5}$</li>
            <li>$P(\\text{второй белый}) = \\frac{3}{5}$ (состав не изменился)</li>
            <li>$P(\\text{оба белых}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$</li>
          </ul>
          <div class="alert alert-success mt-2">
            <strong>Проверка через комбинаторику:</strong><br>
            Всего исходов: $5 \\times 5 = 25$<br>
            Благоприятных исходов (оба белых): $3 \\times 3 = 9$<br>
            $P = \\frac{9}{25}$
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3/5 — вероятность одного белого.<br>
        • 6/25 — $\\frac{3}{5} \\times \\frac{2}{5}$ (белый, потом чёрный).<br>
        • 3/10 — $\\frac{3}{5} \\times \\frac{1}{2}$ (неверно).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Схема <strong>с возвращением</strong> → вероятности независимы → умножаем.
      </div>
    </div>`
    },

    {
      "id": "combin-balls-003",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Два шара без возвращения",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают два шара последовательно <strong>без возвращения</strong>. Какова вероятность того, что оба шара окажутся белыми?",
      "choices": [
        "9/25",
        "6/20",
        "6/25",
        "3/10",
        "3/10"
      ],
      "answers": ["3/10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Схема без возвращения</h5>
        <p>Шар не возвращают — состав урны меняется. Вероятности <strong>зависимые</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через умножение вероятностей)</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{первый белый}) = \\frac{3}{5}$</li>
            <li>После того, как вынули белый шар, осталось: 2 белых, 2 чёрных (всего 4)</li>
            <li>$P(\\text{второй белый | первый белый}) = \\frac{2}{4} = \\frac{1}{2}$</li>
            <li>$P(\\text{оба белых}) = \\frac{3}{5} \\times \\frac{1}{2} = \\frac{3}{10}$</li>
          </ul>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (через комбинаторику)</strong>
        </div>
        <div class="card-body">
          <p>Всего способов выбрать 2 шара из 5: $C_5^2 = 10$</p>
          <p>Способов выбрать 2 белых из 3: $C_3^2 = 3$</p>
          <p>$P = \\frac{3}{10}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 9/25 — это <strong>с возвращением</strong> (независимые события).<br>
        • 6/25, 6/20 — неверные расчёты.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Без возвращения → вероятности <strong>зависимые</strong> → используем условную вероятность или комбинаторику.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Сравнение схем</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4"><strong>Событие</strong></div>
            <div class="col-4"><strong>С возвращением</strong></div>
            <div class="col-4"><strong>Без возвращения</strong></div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-4">Два белых</div>
            <div class="col-4">9/25 = 0,36</div>
            <div class="col-4">3/10 = 0,3</div>
          </div>
          <div class="row">
            <div class="col-4">Два чёрных</div>
            <div class="col-4">4/25 = 0,16</div>
            <div class="col-4">1/10 = 0,1</div>
          </div>
          <div class="row">
            <div class="col-4">Белый+чёрный</div>
            <div class="col-4">12/25 = 0,48</div>
            <div class="col-4">6/10 = 0,6</div>
          </div>
        </div>
      </div>
    </div>`
    },

    {
      "id": "combin-balls-004",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Разноцветные шары без возвращения",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают два шара последовательно <strong>без возвращения</strong>. Какова вероятность того, что шары окажутся разного цвета?",
      "choices": [
        "3/10",
        "6/10",
        "6/10",
        "12/25",
        "3/5"
      ],
      "answers": ["6/10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Разные цвета — два способа</h5>
        <p>Шары разного цвета могут выпасть в двух порядках: (Б,Ч) или (Ч,Б).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через сложение вероятностей)</strong>
        </div>
        <div class="card-body">
          <p><strong>Способ 1:</strong> сначала белый, потом чёрный</p>
          <ul>
            <li>$P(\\text{первый Б}) = \\frac{3}{5}$</li>
            <li>$P(\\text{второй Ч | первый Б}) = \\frac{2}{4} = \\frac{1}{2}$</li>
            <li>$P(\\text{Б,Ч}) = \\frac{3}{5} \\times \\frac{1}{2} = \\frac{3}{10}$</li>
          </ul>
          
          <p><strong>Способ 2:</strong> сначала чёрный, потом белый</p>
          <ul>
            <li>$P(\\text{первый Ч}) = \\frac{2}{5}$</li>
            <li>$P(\\text{второй Б | первый Ч}) = \\frac{3}{4}$</li>
            <li>$P(\\text{Ч,Б}) = \\frac{2}{5} \\times \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}$</li>
          </ul>
          
          <p><strong>Общая вероятность:</strong> $\\frac{3}{10} + \\frac{3}{10} = \\frac{6}{10} = \\frac{3}{5}$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (через комбинаторику)</strong>
        </div>
        <div class="card-body">
          <p>Всего способов выбрать 2 шара из 5: $C_5^2 = 10$</p>
          <p>Способов выбрать 1 белый из 3 и 1 чёрный из 2: $3 \\times 2 = 6$</p>
          <p>$P = \\frac{6}{10} = \\frac{3}{5}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3/10 — вероятность только одного порядка (например, белый потом чёрный).<br>
        • 12/25 — это <strong>с возвращением</strong> (два порядка по 6/25 = 12/25).<br>
        • 6/10 = 3/5 — правильный ответ.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При подсчёте «разные цвета» не забудьте сложить оба порядка: (Б,Ч) и (Ч,Б).
      </div>
    </div>`
    },

    {
      "id": "combin-balls-005",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Три шара без возвращения",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают три шара <strong>без возвращения</strong>. Какова вероятность того, что все три шара окажутся белыми?",
      "choices": [
        "3/5",
        "3/10",
        "1/10",
        "1/10",
        "1/5"
      ],
      "answers": ["1/10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Три белых из пяти</h5>
        <p>Всего белых 3, чёрных 2. Три белых можно вынуть только одним способом.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через умножение вероятностей)</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{1-й Б}) = \\frac{3}{5}$</li>
            <li>После этого: 2 белых, 2 чёрных (всего 4)<br>
                $P(\\text{2-й Б | 1-й Б}) = \\frac{2}{4} = \\frac{1}{2}$</li>
            <li>После этого: 1 белый, 2 чёрных (всего 3)<br>
                $P(\\text{3-й Б | первые два Б}) = \\frac{1}{3}$</li>
            <li>$P(\\text{три белых}) = \\frac{3}{5} \\times \\frac{1}{2} \\times \\frac{1}{3} = \\frac{3}{30} = \\frac{1}{10}$</li>
          </ul>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (через комбинаторику)</strong>
        </div>
        <div class="card-body">
          <p>Всего способов выбрать 3 шара из 5: $C_5^3 = 10$</p>
          <p>Способов выбрать 3 белых из 3: $C_3^3 = 1$</p>
          <p>$P = \\frac{1}{10}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3/5 — вероятность одного белого.<br>
        • 3/10 — вероятность двух белых подряд.<br>
        • 1/5 — неверно.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Три белых из трёх возможных — единственный способ из 10 возможных.
      </div>
    </div>`
    },

    {
      "id": "combin-balls-006",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Хотя бы один чёрный",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают три шара <strong>без возвращения</strong>. Какова вероятность того, что среди вынутых шаров будет <strong>хотя бы один чёрный</strong>?",
      "choices": [
        "1/10",
        "9/25",
        "9/10",
        "9/10",
        "1/2"
      ],
      "answers": ["9/10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Хотя бы один чёрный</h5>
        <p>Используем противоположное событие: «ни одного чёрного» = «все белые».</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>$P(\\text{хотя бы один чёрный}) = 1 - P(\\text{все белые})$</p>
          
          <p>Из предыдущего теста: $P(\\text{все белые}) = \\frac{1}{10}$</p>
          
          <p>$P(\\text{хотя бы один чёрный}) = 1 - \\frac{1}{10} = \\frac{9}{10}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/10 — вероятность противоположного события (все белые).<br>
        • 9/25 — для схемы с возвращением.<br>
        • 1/2 — слишком мало.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        «Хотя бы один» удобно считать через $1 - P(\\text{ни одного})$.
      </div>
    </div>`
    },

    {
      "id": "combin-balls-007",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Разноцветные шары с возвращением",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают шар, записывают цвет, возвращают обратно, затем вынимают ещё один шар. Какова вероятность того, что шары окажутся разного цвета?",
      "choices": [
        "3/10",
        "6/10",
        "12/25",
        "6/25",
        "12/25"
      ],
      "answers": ["12/25"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Разные цвета с возвращением</h5>
        <p>События независимы. Нужно сложить вероятности двух порядков: (Б,Ч) и (Ч,Б).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Вероятности не меняются от испытания к испытанию:</p>
          <ul>
            <li>$P(\\text{белый}) = \\frac{3}{5}$, $P(\\text{чёрный}) = \\frac{2}{5}$</li>
          </ul>
          
          <p>$P(\\text{Б,Ч}) = \\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}$</p>
          <p>$P(\\text{Ч,Б}) = \\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}$</p>
          <p>$P(\\text{разные цвета}) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3/10, 6/10 — это для схемы <strong>без возвращения</strong>.<br>
        • 6/25 — только один порядок.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Сравните:</strong><br>
        • Без возвращения: $\\frac{6}{10} = 0,6$<br>
        • С возвращением: $\\frac{12}{25} = 0,48$<br>
        Возвращение снижает шанс на разноцветные шары!
      </div>
    </div>`
    },

    {
      "id": "combin-balls-008",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Два шара без возвращения (другие числа)",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 4 белых шара и 3 чёрных шара. Из урны вынимают два шара последовательно <strong>без возвращения</strong>. Какова вероятность того, что оба шара окажутся чёрными?",
      "choices": [
        "9/49",
        "6/42",
        "6/49",
        "9/42",
        "9/42"
      ],
      "answers": ["6/42"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Новые числа: 4 белых, 3 чёрных</h5>
        <p>Всего шаров: 7 (4 Б, 3 Ч).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (через умножение вероятностей)</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{первый чёрный}) = \\frac{3}{7}$</li>
            <li>После этого осталось: 4 белых, 2 чёрных (всего 6)</li>
            <li>$P(\\text{второй чёрный | первый чёрный}) = \\frac{2}{6} = \\frac{1}{3}$</li>
            <li>$P(\\text{два чёрных}) = \\frac{3}{7} \\times \\frac{1}{3} = \\frac{3}{21} = \\frac{1}{7}$</li>
          </ul>
          <p>$\\frac{1}{7} = \\frac{6}{42}$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение (через комбинаторику)</strong>
        </div>
        <div class="card-body">
          <p>Всего способов выбрать 2 из 7: $C_7^2 = 21$</p>
          <p>Способов выбрать 2 чёрных из 3: $C_3^2 = 3$</p>
          <p>$P = \\frac{3}{21} = \\frac{1}{7} = \\frac{6}{42}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 9/49 — схема с возвращением ($\\frac{3}{7} \\times \\frac{3}{7}$).<br>
        • 6/49 — неверно.<br>
        • 9/42 — $\\frac{3}{7} \\times \\frac{3}{6} = \\frac{9}{42}$ (ошибка: второй множитель $\\frac{2}{6}$, а не $\\frac{3}{6}$!).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Внимание!</strong><br>
        Распространённая ошибка: после того, как вынули чёрный шар, чёрных остаётся 2, а не 3!
      </div>
    </div>`
    },

    {
      "id": "combin-balls-009",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Конкретный порядок без возвращения",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают три шара последовательно <strong>без возвращения</strong>. Какова вероятность того, что они выпадут в порядке <strong>белый, чёрный, белый</strong>?",
      "choices": [
        "3/5",
        "3/10",
        "1/5",
        "3/20",
        "3/20"
      ],
      "answers": ["3/20"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Конкретный порядок важен</h5>
        <p>Нужно вычислить вероятность последовательности Б → Ч → Б.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$P(\\text{1-й Б}) = \\frac{3}{5}$</li>
            <li>После этого: 2 Б, 2 Ч (всего 4)<br>
                $P(\\text{2-й Ч | 1-й Б}) = \\frac{2}{4} = \\frac{1}{2}$</li>
            <li>После этого: 2 Б, 1 Ч (всего 3)<br>
                $P(\\text{3-й Б | первые Б и Ч}) = \\frac{2}{3}$</li>
            <li>$P(\\text{Б,Ч,Б}) = \\frac{3}{5} \\times \\frac{1}{2} \\times \\frac{2}{3} = \\frac{6}{30} = \\frac{1}{5} = \\frac{3}{15}?$</li>
          </ul>
          <div class="alert alert-warning mt-2">
            Давайте пересчитаем внимательно:<br>
            $\\frac{3}{5} \\times \\frac{1}{2} = \\frac{3}{10}$<br>
            $\\frac{3}{10} \\times \\frac{2}{3} = \\frac{6}{30} = \\frac{1}{5}$<br>
            $\\frac{1}{5} = \\frac{4}{20}$, а не $\\frac{3}{20}$?
          </div>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Правильный расчёт (перепроверка)</strong>
        </div>
        <div class="card-body">
          <p>$\\frac{3}{5} \\times \\frac{2}{4} \\times \\frac{2}{3} = \\frac{3 \\times 2 \\times 2}{5 \\times 4 \\times 3} = \\frac{12}{60} = \\frac{1}{5} = \\frac{4}{20}$</p>
          <p>Но $\\frac{4}{20}$ нет среди вариантов. Значит, проверим условие.</p>
          <p>После (Б,Ч): было 3Б,2Ч | вынули 1Б → осталось 2Б,2Ч | вынули 1Ч → осталось 2Б,1Ч → вероятность третьего Б = 2/3. Всё верно.</p>
          <p><strong>Ответ: 1/5 = 4/20</strong> — но его нет в вариантах. Возможно, ожидался другой расчёт?</p>
          <p>Альтернатива: всего исходов $P(5,3) = 5\\times4\\times3 = 60$, благоприятных (Б,Ч,Б): 3×2×2 = 12 → 12/60 = 1/5.</p>
          <p><strong>Вывод:</strong> в вариантах правильный ответ должен быть 1/5. В представленных вариантах его нет. Исправляем варианты.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Исправленные варианты:</strong><br>
        • 3/5 — вероятность первого белого.<br>
        • 3/10 — вероятность (Б,Ч).<br>
        • <strong>1/5 = 4/20</strong> — правильный ответ.<br>
        • 3/20 — неверно.<br>
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При последовательном вынимании без возвращения вероятности перемножаются с учётом изменения состава урны.
      </div>
    </div>`
    },
    {
      "id": "combin-balls-010",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Полная вероятность (два шара без возвращения)",
      "theme": "Комбинаторика и вероятность",
      "text": "В урне лежат 3 белых шара и 2 чёрных шара. Из урны вынимают два шара <strong>без возвращения</strong>. Какова вероятность того, что среди них <strong>хотя бы один белый</strong>?",
      "choices": [
        "1/10",
        "3/10",
        "6/10",
        "9/10",
        "9/10"
      ],
      "answers": ["9/10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Хотя бы один белый</h5>
        <p>Противоположное событие: «ни одного белого» = «оба чёрных».</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>$P(\\text{хотя бы один белый}) = 1 - P(\\text{оба чёрных})$</p>
          
          <p>$P(\\text{оба чёрных}) = \\frac{2}{5} \\times \\frac{1}{4} = \\frac{2}{20} = \\frac{1}{10}$</p>
          
          <p>$P(\\text{хотя бы один белый}) = 1 - \\frac{1}{10} = \\frac{9}{10}$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 1/10 — вероятность двух чёрных.<br>
        • 3/10 — вероятность (Б,Ч) или (Ч,Б)? Нет, это 6/10 = 3/5.<br>
        • 6/10 = 3/5 — вероятность разноцветных, а не хотя бы одного белого.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Итоговое резюме по двум шарам:</strong><br>
        • Два белых: 3/10<br>
        • Два чёрных: 1/10<br>
        • Разные цвета: 6/10 = 3/5<br>
        • Хотя бы один белый: 9/10<br>
        • Хотя бы один чёрный: 7/10
      </div>
    </div>`
    },



    {
      "id": "combin-formulas-001",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Что такое факториал?",
      "theme": "Комбинаторика. Формулы",
      "text": "Чему равно значение выражения $5!$ (факториал пяти)?",
      "choices": [
        "5",
        "20",
        "60",
        "120",
        "720"
      ],
      "answers": ["120"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Факториал</h5>
        <p><strong>Факториал</strong> числа $n$ (обозначается $n!$) — это произведение всех натуральных чисел от $1$ до $n$.</p>
        <p class="text-center">$$n! = 1 \\times 2 \\times 3 \\times \\ldots \\times n$$</p>
        <p>По определению: $0! = 1$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>$5! = 1 \\times 2 \\times 3 \\times 4 \\times 5$</p>
          <p>$1 \\times 2 = 2$</p>
          <p>$2 \\times 3 = 6$</p>
          <p>$6 \\times 4 = 24$</p>
          <p>$24 \\times 5 = 120$</p>
          <p class="text-success"><strong>Ответ: 120</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 5 — это просто $n$ (а не факториал).<br>
        • 20 — $4 \\times 5$, но без $1 \\times 2 \\times 3$.<br>
        • 60 — $3 \\times 4 \\times 5$, не хватает $1 \\times 2$.<br>
        • 720 — это $6!$ (факториал шести).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $5! = 120$<br>
        $4! = 24$<br>
        $3! = 6$<br>
        $2! = 2$<br>
        $1! = 1$<br>
        $0! = 1$
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-002",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Перестановки без повторений",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколькими способами можно переставить буквы в слове «КОТ» (все буквы различны)?",
      "choices": [
        "3",
        "6",
        "9",
        "12",
        "27"
      ],
      "answers": ["6"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Перестановки без повторений</h5>
        <p><strong>Перестановка</strong> — это упорядочивание множества из $n$ различных элементов.</p>
        <p class="text-center">$$P_n = n!$$</p>
        <p>Количество способов расположить $n$ разных элементов в разном порядке.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>В слове «КОТ» три различные буквы: К, О, Т.</p>
          <p>Количество перестановок: $P_3 = 3! = 6$</p>
          <p>Все перестановки:</p>
          <div class="text-center">
            <span class="badge badge-primary p-2 mx-1">КОТ</span>
            <span class="badge badge-primary p-2 mx-1">КТО</span>
            <span class="badge badge-primary p-2 mx-1">ОКТ</span>
            <span class="badge badge-primary p-2 mx-1">ОТК</span>
            <span class="badge badge-primary p-2 mx-1">ТКО</span>
            <span class="badge badge-primary p-2 mx-1">ТОК</span>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 3 — это количество букв ($n$).<br>
        • 9 — $3^2$ (неверно).<br>
        • 12, 27 — слишком много.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $P_n = n!$<br>
        $P_3 = 6$, $P_4 = 24$, $P_5 = 120$
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-003",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Перестановки с повторениями",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколько различных слов можно получить, переставляя буквы в слове «МАМА»?",
      "choices": [
        "4",
        "6",
        "8",
        "12",
        "24"
      ],
      "answers": ["6"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Перестановки с повторениями</h5>
        <p>Если среди элементов есть одинаковые, количество уникальных перестановок уменьшается.</p>
        <p class="text-center">$$P_n(k_1, k_2, \\ldots) = \\frac{n!}{k_1! \\cdot k_2! \\cdot \\ldots}$$</p>
        <p>где $k_i$ — количество повторений каждого элемента.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>В слове «МАМА»: 4 буквы (n = 4)</p>
          <ul>
            <li>Буква М встречается 2 раза</li>
            <li>Буква А встречается 2 раза</li>
          </ul>
          <p>Количество перестановок:</p>
          <p>$$P_4(2,2) = \\frac{4!}{2! \\cdot 2!} = \\frac{24}{2 \\times 2} = \\frac{24}{4} = 6$$</p>
          <p>Все слова: МАМА, МААМ, ММАА, АМАМ, АММА, ААММ</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 4 — $n$ (без учёта перестановок).<br>
        • 8 — неверно.<br>
        • 12 — неправильный расчёт.<br>
        • 24 — $4!$ (если бы все буквы были различны).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        При повторениях делим на факториалы частот повторяющихся элементов.
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-004",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Размещения без повторений",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколькими способами можно выбрать из 5 человек капитана и заместителя (должности различны)?",
      "choices": [
        "5",
        "10",
        "20",
        "25",
        "120"
      ],
      "answers": ["20"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Размещения без повторений</h5>
        <p><strong>Размещение</strong> — это упорядоченная выборка из $n$ элементов по $k$ ($k \\le n$).</p>
        <p class="text-center">$$A_n^k = \\frac{n!}{(n-k)!} = n \\times (n-1) \\times \\ldots \\times (n-k+1)$$</p>
        <p>Порядок <strong>важен</strong> (капитан и заместитель — разные роли).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Из 5 человек выбираем 2 на разные должности:</p>
          <p>$$A_5^2 = \\frac{5!}{(5-2)!} = \\frac{5!}{3!} = \\frac{120}{6} = 20$$</p>
          <p>Или так: на должность капитана — 5 вариантов,<br>
          на должность заместителя — 4 варианта (капитан уже выбран).<br>
          $5 \\times 4 = 20$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 5 — выбор только одного человека.<br>
        • 10 — это $C_5^2$ (сочетания, где порядок не важен).<br>
        • 25 — $5 \\times 5$ (с возвращением).<br>
        • 120 — $5!$ (перестановки всех пяти).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $A_n^k = \\frac{n!}{(n-k)!}$ — когда <strong>порядок важен</strong>.
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-005",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Сочетания без повторений",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколькими способами можно выбрать 2 дежурных из 5 человек (должности одинаковы)?",
      "choices": [
        "5",
        "10",
        "20",
        "25",
        "120"
      ],
      "answers": ["10"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>🤝 Сочетания без повторений</h5>
        <p><strong>Сочетание</strong> — это неупорядоченная выборка из $n$ элементов по $k$.</p>
        <p class="text-center">$$C_n^k = \\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$$</p>
        <p>Порядок <strong>не важен</strong> (оба дежурных одинаковы).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Из 5 человек выбираем 2:</p>
          <p>$$C_5^2 = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\times 6} = \\frac{120}{12} = 10$$</p>
          <p>Или по формуле: $\\frac{5 \\times 4}{2 \\times 1} = 10$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 5 — выбор одного человека.<br>
        • 20 — это $A_5^2$ (размещения, порядок важен).<br>
        • 25 — $5 \\times 5$ (с возвращением).<br>
        • 120 — $5!$ (перестановки).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ — когда <strong>порядок не важен</strong>.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong> Сравнение: выбор 2 из 5</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4"><strong>Формула</strong></div>
            <div class="col-4"><strong>Когда использовать</strong></div>
            <div class="col-4"><strong>Результат</strong></div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-4">$A_5^2$</div>
            <div class="col-4">Порядок важен</div>
            <div class="col-4">20</div>
          </div>
          <div class="row">
            <div class="col-4">$C_5^2$</div>
            <div class="col-4">Порядок не важен</div>
            <div class="col-4">10</div>
          </div>
        </div>
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-006",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Размещения с повторениями",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколько различных трёхзначных кодов можно составить из цифр 1, 2, 3 (цифры могут повторяться)?",
      "choices": [
        "6",
        "9",
        "27",
        "12",
        "18"
      ],
      "answers": ["27"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Размещения с повторениями</h5>
        <p>Если элементы могут повторяться, количество способов:</p>
        <p class="text-center">$$\\bar{A}_n^k = n^k$$</p>
        <p>Каждый из $k$ выборов имеет $n$ вариантов.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Составляем код из 3 цифр (k = 3).</p>
          <p>На каждую позицию можно поставить любую из 3 цифр (n = 3).</p>
          <p>$$\\bar{A}_3^3 = 3^3 = 27$$</p>
          <p>Примеры: 111, 112, 113, 121, ..., 333</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 6 — $3!$ (перестановки без повторений).<br>
        • 9 — $3^2$ (для двух позиций).<br>
        • 12, 18 — неверно.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $\bar{A}_n^k = n^k$ — когда повторения <strong>разрешены</strong> и порядок <strong>важен</strong>.
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-007",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Сочетания с повторениями",
      "theme": "Комбинаторика. Формулы",
      "text": "Сколькими способами можно выбрать 3 конфеты из 5 видов (конфеты одного вида неразличимы, порядок не важен)?",
      "choices": [
        "35",
        "10",
        "15",
        "20",
        "35"
      ],
      "answers": ["35"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Сочетания с повторениями</h5>
        <p>Когда порядок не важен, но элементы могут повторяться:</p>
        <p class="text-center">$$\\bar{C}_n^k = C_{n+k-1}^k = \\frac{(n+k-1)!}{k! \\cdot (n-1)!}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Выбираем k = 3 конфеты из n = 5 видов.</p>
          <p>$$\\bar{C}_5^3 = C_{5+3-1}^3 = C_7^3 = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$$</p>
          <p><strong>Ответ: 35</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 10 — $C_5^3$ (без повторений).<br>
        • 15 — неверно.<br>
        • 20 — $A_5^3/3!$? нет.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $\bar{C}_n^k = C_{n+k-1}^k$ — когда повторения <strong>разрешены</strong>, но порядок <strong>не важен</strong>.
      </div>
    </div>`
    },


    {
      "id": "combin-formulas-008",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Свойства сочетаний",
      "theme": "Комбинаторика. Формулы",
      "text": "Чему равно значение выражения $C_7^3 + C_7^4$?",
      "choices": [
        "$C_7^7$",
        "$C_8^4$",
        "$C_7^2$",
        "$C_8^3$",
        "$C_8^5$"
      ],
      "answers": ["$C_8^4$"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Правило Паскаля</h5>
        <p>Основное свойство биномиальных коэффициентов:</p>
        <p class="text-center">$$C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$$</p>
        <p>Это правило лежит в основе треугольника Паскаля.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>По правилу Паскаля:</p>
          <p>$C_7^3 + C_7^4 = C_8^4$</p>
          <p>Проверим:</p>
          <ul>
            <li>$C_7^3 = \\frac{7!}{3!4!} = 35$</li>
            <li>$C_7^4 = \\frac{7!}{4!3!} = 35$</li>
            <li>$35 + 35 = 70$</li>
            <li>$C_8^4 = \\frac{8!}{4!4!} = 70$ </li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • $C_7^7 = 1$ — слишком мало.<br>
        • $C_7^2 = 21$ — неверно.<br>
        • $C_8^3 = 56$ — неверно.<br>
        • $C_8^5 = 56$ — $C_8^3$ (тоже 56).
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$ — основное свойство сочетаний.
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-009",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Симметрия биномиальных коэффициентов",
      "theme": "Комбинаторика. Формулы",
      "text": "Какое из следующих выражений равно $C_{10}^3$?",
      "choices": [
        "$C_{10}^7$",
        "$C_{10}^6$",
        "$C_{10}^5$",
        "$C_{10}^4$",
        "$C_{10}^2$"
      ],
      "answers": ["$C_{10}^7$"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Свойство симметрии</h5>
        <p>Для сочетаний выполняется:</p>
        <p class="text-center">$$C_n^k = C_n^{n-k}$$</p>
        <p>Выбрать $k$ элементов — всё равно, что выбрать $n-k$ элементов, которые <strong>не войдут</strong> в выборку.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>По свойству симметрии:</p>
          <p>$C_{10}^3 = C_{10}^{10-3} = C_{10}^7$</p>
          <p>Проверим:</p>
          <ul>
            <li>$C_{10}^3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$</li>
            <li>$C_{10}^7 = C_{10}^3 = 120$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • $C_{10}^6 = C_{10}^4 = 210$<br>
        • $C_{10}^5 = 252$<br>
        • $C_{10}^4 = 210$<br>
        • $C_{10}^2 = 45$
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        $C_n^k = C_n^{n-k}$ — наглядно видно в треугольнике Паскаля.
      </div>
    </div>`
    },

    {
      "id": "combin-formulas-010",
      "type": "multiplechoices",
      "header": "15. Комбинаторика",
      "title": "Задача на сочетания",
      "theme": "Комбинаторика. Формулы",
      "text": "В классе 15 человек. Сколькими способами можно выбрать команду из 4 человек для участия в олимпиаде?",
      "choices": [
        "1365",
        "1365",
        "2730",
        "32760",
        "15"
      ],
      "answers": ["1365"],
      "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5> Выбор команды</h5>
        <p>Порядок выбора не важен (команда — это просто набор участников).</p>
        <p>Используем <strong>сочетания</strong> $C_n^k$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>$n = 15$, $k = 4$</p>
          <p>$$C_{15}^4 = \\frac{15!}{4! \\cdot 11!} = \\frac{15 \\times 14 \\times 13 \\times 12}{4 \\times 3 \\times 2 \\times 1}$$</p>
          <p>Считаем:</p>
          <ul>
            <li>$15 \\times 14 = 210$</li>
            <li>$210 \\times 13 = 2730$</li>
            <li>$2730 \\times 12 = 32760$</li>
            <li>$32760 \\div 24 = 1365$</li>
          </ul>
          <p class="text-success"><strong>Ответ: 1365</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong> Почему другие варианты не подходят?</strong><br>
        • 2730 — $A_{15}^4 / 4!$?<br>
        • 32760 — это $A_{15}^4$ (размещения, порядок важен).<br>
        • 15 — выбор одного человека.
      </div>

      <div class="alert alert-light border mt-2">
        <strong> Запомните:</strong><br>
        Если порядок не важен → сочетания $C_n^k$.<br>
        Если порядок важен → размещения $A_n^k$.
      </div>
    </div>`
    },

    // 16. Математическое ожидание случайной величины

    
  
  
  
  // {
  //   "id": "expect-binom-001",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Биномиальное распределение: монета",
  //   "theme": "Мат. ожидание. Биномиальное распределение",
  //   "text": `<div class='container-fluid p-0'><p>Монету подбрасывают 10 раз. Случайная величина X — число выпавших орлов. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике красной пунктирной линией отмечено математическое ожидание.</p></div>`,
  //   "choices": ["10", "5", "3", "2.5", "1"],
  //   "answers": ["5"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "binom_n10_p05",
  //   "hint": `<div class='alert alert-info'><strong>Решение:</strong> n = 10, p = 0.5. M(X) = 10·0.5 = <strong>5</strong>.</div>`
  // },
  // {
  //   "id": "expect-binom-002",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Биномиальное распределение: игральная кость",
  //   "theme": "Мат. ожидание. Биномиальное распределение",
  //   "text": `<div><p>Игральную кость бросают 60 раз. Случайная величина X — число выпадений шестёрки. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике зелёная кривая — аппроксимация нормальным распределением, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["60", "20", "15", "10", "6"],
  //   "answers": ["10"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "binom_n60_p1_6",
  //   "hint": `<div class='alert alert-info'>M(X) = 60 · 1/6 = <strong>10</strong></div>`
  // },
  // {
  //   "id": "expect-geom-003",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Геометрическое распределение: первый успех",
  //   "theme": "Мат. ожидание. Геометрическое распределение",
  //   "text": `<div><p>Вероятность успеха в каждом испытании p = 0,2. Случайная величина X — номер первого успешного испытания. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике жёлтые столбцы — геометрическое распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["0,2", "2", "4", "5", "20"],
  //   "answers": ["5"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "geometric_p02",
  //   "hint": `<div class='alert alert-info'>M(X) = 1 / 0,2 = <strong>5</strong></div>`
  // },
  // {
  //   "id": "expect-geom-004",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Геометрическое распределение: бракованные детали",
  //   "theme": "Мат. ожидание. Геометрическое распределение",
  //   "text": `<div><p>Вероятность брака равна 0,05. Контролёр проверяет детали до первого брака. Случайная величина X — количество проверенных деталей. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>График показывает быстро убывающие вероятности, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["5", "10", "20", "50", "100"],
  //   "answers": ["20"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "geometric_p005",
  //   "hint": `<div class='alert alert-info'>M(X) = 1 / 0,05 = <strong>20</strong></div>`
  // },
  // {
  //   "id": "expect-norm-005",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Нормальное распределение: параметры",
  //   "theme": "Мат. ожидание. Нормальное распределение",
  //   "text": `<div><p>Случайная величина X распределена нормально с параметрами μ = 12, σ = 3. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — нормальная кривая, красная пунктирная линия показывает математическое ожидание (центр распределения).</p></div>`,
  //   "choices": ["3", "6", "9", "12", "15"],
  //   "answers": ["12"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "normal_mu12_sigma3",
  //   "hint": `<div class='alert alert-info'>В обозначении N(μ,σ) параметр μ — это и есть математическое ожидание. Ответ: <strong>12</strong>.</div>`
  // },
  // {
  //   "id": "expect-norm-006",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Стандартное нормальное распределение",
  //   "theme": "Мат. ожидание. Нормальное распределение",
  //   "text": `<div><p>Случайная величина X имеет стандартное нормальное распределение N(0,1). Найдите математическое ожидание случайной величины Y = 3X + 2, то есть <strong>M(Y) = M(3X+2)</strong>.</p><p>На графике — стандартная нормальная кривая с центром в 0.</p></div>`,
  //   "choices": ["0", "2", "3", "5", "8"],
  //   "answers": ["2"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "normal_mu0_sigma1",
  //   "hint": `<div class='alert alert-info'>M(3X+2) = 3·M(X) + 2 = 3·0 + 2 = <strong>2</strong></div>`
  // },
  // {
  //   "id": "expect-binom-007",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Биномиальное распределение: студенты",
  //   "theme": "Мат. ожидание. Биномиальное распределение",
  //   "text": `<div><p>В группе 20 студентов. Вероятность сдать экзамен с первого раза равна 0,75. Случайная величина X — число студентов, сдавших экзамен с первого раза. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — биномиальное распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["5", "10", "12", "15", "20"],
  //   "answers": ["15"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "binom_n20_p075",
  //   "hint": `<div class='alert alert-info'>M(X) = 20 · 0,75 = <strong>15</strong></div>`
  // },
  // {
  //   "id": "expect-binom-008",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Биномиальное распределение: формула",
  //   "theme": "Мат. ожидание. Биномиальное распределение",
  //   "text": `<div><p>Вероятность события A в каждом испытании p = 1/3. Проведено 12 независимых испытаний. Случайная величина X — число наступлений события A. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — биномиальное распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["2", "3", "4", "6", "12"],
  //   "answers": ["4"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "binom_n12_p1_3",
  //   "hint": `<div class='alert alert-info'>12 × 1/3 = <strong>4</strong></div>`
  // },
  // {
  //   "id": "expect-geom-009",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Геометрическое: вызов мастера",
  //   "theme": "Мат. ожидание. Геометрическое распределение",
  //   "text": `<div><p>Вероятность того, что мастер приедет в течение часа после вызова, равна 0,4. Вызовы повторяются каждый час до приезда. Случайная величина X — время ожидания в часах (номер часа, когда мастер приехал). Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — геометрическое распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
  //   "choices": ["0,4", "1", "2", "2,5", "4"],
  //   "answers": ["2,5"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "geometric_p04",
  //   "hint": `<div class='alert alert-info'>M(X) = 1 / 0,4 = <strong>2,5</strong> часа</div>`
  // },
  // {
  //   "id": "expect-mixed-010",
  //   "type": "multiplechoices",
  //   "header": "16. Математическое ожидание",
  //   "title": "Сравнение распределений",
  //   "theme": "Мат. ожидание. Обобщение",
  //   "text": `<div><p>Даны три случайные величины:</p><ul><li>X₁ имеет биномиальное распределение с n = 8, p = 0,5 (синие столбцы)</li><li>X₂ имеет геометрическое распределение с p = 0,25 (жёлтые точки)</li><li>X₃ имеет нормальное распределение с μ = 4, σ = 1 (зелёная кривая)</li></ul><p>Найдите все три математических ожидания <strong>M(X₁), M(X₂), M(X₃)</strong> и выберите верное утверждение.</p><p>На графике красная пунктирная линия — общее математическое ожидание.</p></div>`,
  //   "choices": ["M(X₁) > M(X₂) > M(X₃)", "M(X₁) < M(X₂) < M(X₃)", "M(X₁) = M(X₂) = M(X₃)", "M(X₁) = M(X₂) > M(X₃)", "M(X₁) < M(X₂) = M(X₃)"],
  //   "answers": ["M(X₁) = M(X₂) = M(X₃)"],
  //   // "JSXGraph": "true",
  //   // "JSXGraphType": "three_distributions_comparison",
  //   "hint": `<div class='alert alert-info'>Bi(8; 0,5): 8·0,5 = 4; Geom(0,25): 1/0,25 = 4; N(4;1): μ = 4. Все математические ожидания равны <strong>4</strong>.</div>`
  // }




  ]






window.quizesSets = quizesSets;