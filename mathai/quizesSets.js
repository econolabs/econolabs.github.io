let quizesSets = [

  {
    "id": "sin-values-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 0°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 0^{\\circ}$?",
    "choices": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$0$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 0°</h5>
        <p>Синус угла - это ордината (y-координата) точки на единичной окружности.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Геометрическое представление</strong>
            </div>
            <div class="card-body">
              <p>На единичной окружности угол 0° соответствует точке (1, 0).</p>
              <p>Координаты: $x = 1$, $y = 0$</p>
              <p>$$\\sin 0^{\\circ} = y = 0$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>По определению</strong>
            </div>
            <div class="card-body">
              <p>В прямоугольном треугольнике:</p>
              <p>$$\\sin \\alpha = \\frac{\\text{противолежащий катет}}{\\text{гипотенуза}}$$</p>
              <p>При угле 0° противолежащий катет равен 0, поэтому:</p>
              <p>$$\\sin 0^{\\circ} = \\frac{0}{\\text{гипотенуза}} = 0$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Запомните:</h6>
        <p class="mb-1">$$\\sin 0^{\\circ} = 0$$</p>
        <p class="mb-0">Нулевой угол - нулевой синус</p>
      </div>
    </div>`
  },

  {
    "id": "sin-values-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 30°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 30^{\\circ}$?",
    "choices": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 30°</h5>
        <p>Одно из основных значений, которое нужно знать наизусть.</p>
      </div>
      
      $$\\sin 30^{\\circ} = \\frac{1}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Вывод из прямоугольного треугольника</strong>
            </div>
            <div class="card-body">
              <p>В прямоугольном треугольнике с углами 30°, 60°, 90°:</p>
              <p>Катет против угла 30° равен <strong>половине гипотенузы</strong>.</p>
              <p>Если гипотенуза = 1, то противолежащий катет = $\\frac{1}{2}$.</p>
              <p>$$\\sin 30^{\\circ} = \\frac{\\text{катет}}{\\text{гипотенуза}} = \\frac{1/2}{1} = \\frac{1}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>На единичной окружности</strong>
            </div>
            <div class="card-body">
              <p>Точка для 30°: $(\\cos 30^{\\circ}, \\sin 30^{\\circ})$</p>
              <p>$$(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$$</p>
              <p>Ордината (y-координата) равна $\\frac{1}{2}$.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Мнемоническое правило:</h6>
        <p class="mb-0">Синусы углов 30°, 45°, 60°: запоминаем как $\\frac{1}{2}$, $\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{3}}{2}$</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 45°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 45^{\\circ}$?",
    "choices": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$\\frac{\\sqrt{2}}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 45°</h5>
        <p>Симметричное значение - синус равен косинусу для этого угла.</p>
      </div>
      
      $$\\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Из равнобедренного прямоугольного треугольника</strong>
            </div>
            <div class="card-body">
              <p>В прямоугольном треугольнике 45°-45°-90° катеты равны.</p>
              <p>Если катет = 1, то гипотенуза = $\\sqrt{1^2 + 1^2} = \\sqrt{2}$</p>
              <p>$$\\sin 45^{\\circ} = \\frac{\\text{противолежащий катет}}{\\text{гипотенуза}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Связь с косинусом</strong>
            </div>
            <div class="card-body">
              <p>Для угла 45° синус и косинус равны:</p>
              <p>$$\\sin 45^{\\circ} = \\cos 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$</p>
              <p>На единичной окружности точка:</p>
              <p>$$(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Запомните:</h6>
        <p class="mb-1">$$\\sin 45^{\\circ} = \\cos 45^{\\circ} = \\frac{\\sqrt{2}}{2} \\approx 0.7071$$</p>
        <p class="mb-0">Это единственный острый угол, где синус равен косинусу</p>
      </div>
    </div>`
  },

  {
  "id": "cos-values-001",
  "type": "multiplechoices",
  "header": "Тригонометрия. Значения косинуса",
  "title": "Значение косинуса 0°",
  "theme": "Значения косинуса",
  "text": "Чему равен $\\cos 0^{\\circ}$?",
  "choices": [
    "$-1$",
    "$-\\frac{1}{2}$",
    "$0$",
    "$\\frac{1}{2}$",
    "$1$"
  ],
  "answers": ["$1$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Косинус угла 0°</h5>
      <p>Угол 0° соответствует положительному направлению оси X.</p>
    </div>
    
    $$\\cos 0^{\\circ} = 1$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>На единичной окружности</strong>
          </div>
          <div class="card-body">
            <p>Угол 0° соответствует точке (1, 0).</p>
            <p>Координаты: $x = 1$, $y = 0$</p>
            <p>$$\\cos 0^{\\circ} = x = 1$$</p>
            <p>$$\\sin 0^{\\circ} = y = 0$$</p>
            <p>Это начальная точка на единичной окружности.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Через определение косинуса</strong>
          </div>
          <div class="card-body">
            <p>Для угла 0° прилежащий катет равен гипотенузе:</p>
            <p>$$\\cos 0^{\\circ} = \\frac{\\text{прилежащий катет}}{\\text{гипотенуза}} = 1$$</p>
            <p>Через формулу приведения:</p>
            <p>$$\\cos 0^{\\circ} = \\cos(90^{\\circ} - 90^{\\circ}) = \\sin 90^{\\circ} = 1$$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">$$\\cos 0^{\\circ} = \\cos 360^{\\circ} = 1$$</p>
      <p class="mb-0">$$\\cos 180^{\\circ} = -1$$</p>
      <p class="mb-0">Косинус принимает максимальное значение 1 при углах, кратных 360°</p>
    </div>
  </div>`
},
{
  "id": "cos-values-002",
  "type": "multiplechoices",
  "header": "Тригонометрия. Значения косинуса",
  "title": "Значение косинуса 60°",
  "theme": "Значения косинуса",
  "text": "Чему равен $\\cos 60^{\\circ}$?",
  "choices": [
    "$-1$",
    "$-\\frac{1}{2}$",
    "$0$",
    "$\\frac{1}{2}$",
    "$\\frac{\\sqrt{2}}{2}$",
    "$\\frac{\\sqrt{3}}{2}$",
    "$1$"
  ],
  "answers": ["$\\frac{1}{2}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Косинус угла 60°</h5>
      <p>Угол 60° соответствует $\\frac{\\pi}{3}$ радиан.</p>
    </div>
    
    $$\\cos 60^{\\circ} = \\frac{1}{2}$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>На единичной окружности</strong>
          </div>
          <div class="card-body">
            <p>Угол 60° соответствует точке $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$.</p>
            <p>Координаты: $x = \\frac{1}{2}$, $y = \\frac{\\sqrt{3}}{2}$</p>
            <p>$$\\cos 60^{\\circ} = x = \\frac{1}{2}$$</p>
            <p>$$\\sin 60^{\\circ} = y = \\frac{\\sqrt{3}}{2}$$</p>
            <p>Это угол правильного треугольника (равностороннего, разрезанного пополам).</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Через равносторонний треугольник</strong>
          </div>
          <div class="card-body">
            <p>Рассмотрим равносторонний треугольник со стороной 2. Высота делит его на два прямоугольных треугольника с углами 30°, 60°, 90°.</p>
            <p>Для угла 60°:</p>
            <p>• Прилежащий катет = 1 (половина стороны)</p>
            <p>• Гипотенуза = 2</p>
            <p>$$\\cos 60^{\\circ} = \\frac{1}{2}$$</p>
            <p>Также: $\\cos 60^{\\circ} = \\sin 30^{\\circ} = \\frac{1}{2}$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">$$\\cos 60^{\\circ} = \\frac{1}{2}$$</p>
      <p class="mb-0">$$\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}$$</p>
      <p class="mb-0">$$\\cos 30^{\\circ} = \\frac{\\sqrt{3}}{2}$$ (дополнительный угол)</p>
    </div>
  </div>`
},
{
  "id": "cos-values-003",
  "type": "multiplechoices",
  "header": "Тригонометрия. Значения косинуса",
  "title": "Значение косинуса 90°",
  "theme": "Значения косинуса",
  "text": "Чему равен $\\cos 90^{\\circ}$?",
  "choices": [
    "$-1$",
    "$-\\frac{1}{2}$",
    "$0$",
    "$\\frac{1}{2}$",
    "$\\frac{\\sqrt{2}}{2}$",
    "$1$"
  ],
  "answers": ["$0$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Косинус угла 90°</h5>
      <p>Угол 90° соответствует положительному направлению оси Y.</p>
    </div>
    
    $$\\cos 90^{\\circ} = 0$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>На единичной окружности</strong>
          </div>
          <div class="card-body">
            <p>Угол 90° = $\\frac{\\pi}{2}$ радиан соответствует точке (0, 1).</p>
            <p>Координаты: $x = 0$, $y = 1$</p>
            <p>$$\\cos 90^{\\circ} = x = 0$$</p>
            <p>$$\\sin 90^{\\circ} = y = 1$$</p>
            <p>Это точка на оси Y, где косинус (координата X) равен 0.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Через формулу приведения</strong>
          </div>
          <div class="card-body">
            <p>$$\\cos 90^{\\circ} = \\cos(90^{\\circ} - 0^{\\circ}) = \\sin 0^{\\circ} = 0$$</p>
            <p>Или:</p>
            <p>$$\\cos 90^{\\circ} = \\cos(180^{\\circ} - 90^{\\circ}) = -\\cos 90^{\\circ}$$</p>
            <p>Что также приводит к $\\cos 90^{\\circ} = 0$.</p>
            <p>Геометрически: при угле 90° прилежащий катет исчезает (равен 0).</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">$$\\cos 90^{\\circ} = \\cos 270^{\\circ} = 0$$</p>
      <p class="mb-0">$$\\sin 90^{\\circ} = 1$$</p>
      <p class="mb-0">Углы 90° и 270° (нечетные кратные 90°) дают косинус = 0</p>
    </div>
  </div>`
},
{
  "id": "cos-values-004",
  "type": "multiplechoices",
  "header": "Тригонометрия. Значения косинуса",
  "title": "Значение косинуса 180°",
  "theme": "Значения косинуса",
  "text": "Чему равен $\\cos 180^{\\circ}$?",
  "choices": [
    "$-1$",
    "$-\\frac{1}{2}$",
    "$0$",
    "$\\frac{1}{2}$",
    "$1$"
  ],
  "answers": ["$-1$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Косинус угла 180°</h5>
      <p>Угол 180° соответствует отрицательному направлению оси X.</p>
    </div>
    
    $$\\cos 180^{\\circ} = -1$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>На единичной окружности</strong>
          </div>
          <div class="card-body">
            <p>Угол 180° = π радиан соответствует точке (-1, 0).</p>
            <p>Координаты: $x = -1$, $y = 0$</p>
            <p>$$\\cos 180^{\\circ} = x = -1$$</p>
            <p>$$\\sin 180^{\\circ} = y = 0$$</p>
            <p>Это точка симметричная точке (1, 0) для угла 0°.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Через формулу приведения</strong>
          </div>
          <div class="card-body">
            <p>$$\\cos 180^{\\circ} = \\cos(180^{\\circ} - 0^{\\circ}) = -\\cos 0^{\\circ}$$</p>
            <p>$$\\cos 180^{\\circ} = -1$$</p>
            <p>Или через периодичность:</p>
            <p>$$\\cos(180^{\\circ} + \\alpha) = -\\cos\\alpha$$</p>
            <p>$$\\cos 180^{\\circ} = \\cos(180^{\\circ} + 0^{\\circ}) = -\\cos 0^{\\circ} = -1$$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">$$\\cos 0^{\\circ} = 1$$</p>
      <p class="mb-0">$$\\cos 180^{\\circ} = -1$$</p>
      <p class="mb-0">Углы 0° и 180° дают минимальное и максимальное значения косинуса на окружности</p>
    </div>
  </div>`
},
{
  "id": "cos-values-005",
  "type": "multiplechoices",
  "header": "Тригонометрия. Значения косинуса",
  "title": "Значение косинуса 45°",
  "theme": "Значения косинуса",
  "text": "Чему равен $\\cos 45^{\\circ}$?",
  "choices": [
    "$-\\frac{\\sqrt{2}}{2}$",
    "$-\\frac{1}{2}$",
    "$0$",
    "$\\frac{1}{2}$",
    "$\\frac{\\sqrt{2}}{2}$",
    "$\\frac{\\sqrt{3}}{2}$",
    "$1$"
  ],
  "answers": ["$\\frac{\\sqrt{2}}{2}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Косинус угла 45°</h5>
      <p>Угол 45° соответствует $\\frac{\\pi}{4}$ радиан.</p>
    </div>
    
    $$\\cos 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>На единичной окружности</strong>
          </div>
          <div class="card-body">
            <p>Угол 45° соответствует точке $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$.</p>
            <p>Координаты: $x = \\frac{\\sqrt{2}}{2}$, $y = \\frac{\\sqrt{2}}{2}$</p>
            <p>$$\\cos 45^{\\circ} = x = \\frac{\\sqrt{2}}{2}$$</p>
            <p>$$\\sin 45^{\\circ} = y = \\frac{\\sqrt{2}}{2}$$</p>
            <p>Это единственный угол (кроме 225°), где синус и косинус равны.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Через равнобедренный прямоугольный треугольник</strong>
          </div>
          <div class="card-body">
            <p>Рассмотрим равнобедренный прямоугольный треугольник с катетами 1.</p>
            <p>По теореме Пифагора: гипотенуза = $\\sqrt{1^2 + 1^2} = \\sqrt{2}$</p>
            <p>Для угла 45°:</p>
            <p>$$\\cos 45^{\\circ} = \\frac{\\text{прилежащий катет}}{\\text{гипотенуза}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$</p>
            <p>Также: $\\cos 45^{\\circ} = \\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">$$\\cos 45^{\\circ} = \\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$</p>
      <p class="mb-0">$$\\cos 45^{\\circ} \\approx 0.7071$$</p>
      <p class="mb-0">Это единственный острый угол, где косинус и синус равны</p>
    </div>
  </div>`
},

{
    id: "vec001",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec003",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Смешанные единичные векторы",
    theme: "Векторы на плоскости",
    text: "На рисунке изображены векторы i и -j. Каковы их координаты?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$\\vec{i} = (1, 0), \\quad -\\vec{j} = (0, -1)$$",
    choices: [
      "i = (1,0), -j = (0,-1)",
      "i = (0,-1), -j = (1,0)",
      "i = (-1,0), -j = (0,1)",
      "i = (1,1), -j = (0,-1)",
      "i = (0,0), -j = (1,-1)",
      "i = (0.5,0), -j = (0,-0.5)"
    ],
    answers: ["i = (1,0), -j = (0,-1)"]
  },
  {
    id: "vec004",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Смешанные единичные векторы 2",
    theme: "Векторы на плоскости",
    text: "На рисунке изображены векторы -i и j. Каковы их координаты?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$-\\vec{i} = (-1, 0), \\quad \\vec{j} = (0, 1)$$",
    choices: [
      "-i = (-1,0), j = (0,1)",
      "-i = (0,1), j = (-1,0)",
      "-i = (1,0), j = (0,-1)",
      "-i = (-1,-1), j = (0,1)",
      "-i = (0,0), j = (-1,1)",
      "-i = (-0.5,0), j = (0,0.5)"
    ],
    answers: ["-i = (-1,0), j = (0,1)"]
  },
  {
    id: "vec005",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Все четыре единичных вектора",
    theme: "Векторы на плоскости",
    text: "На рисунке изображены все четыре единичных вектора: i, j, -i, -j. Каковы их координаты?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$\\vec{i} = (1,0), \\quad \\vec{j} = (0,1), \\quad -\\vec{i} = (-1,0), \\quad -\\vec{j} = (0,-1)$$",
    choices: [
      "i=(1,0), j=(0,1), -i=(-1,0), -j=(0,-1)",
      "i=(0,1), j=(1,0), -i=(0,-1), -j=(-1,0)",
      "i=(1,1), j=(-1,-1), -i=(-1,-1), -j=(1,1)",
      "i=(0,0), j=(1,1), -i=(-1,-1), -j=(0,0)",
      "i=(0.5,0.5), j=(-0.5,0.5), -i=(0.5,-0.5), -j=(-0.5,-0.5)",
      "i=(1,0), j=(0,-1), -i=(-1,0), -j=(0,1)"
    ],
    answers: ["i=(1,0), j=(0,1), -i=(-1,0), -j=(0,-1)"]
  },
  {
    id: "vec006",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    id: "vec007",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Длина отрицательного единичного вектора",
    theme: "Векторы на плоскости",
    text: "Чему равна длина вектора -j = (0, -1)?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "Длина вектора не зависит от направления: $$|-\\vec{j}| = \\sqrt{0^2 + (-1)^2} = \\sqrt{1} = 1$$",
    choices: [
      "0",
      "1",
      "-1",
      "√2",
      "2",
      "Не определена"
    ],
    answers: ["1"]
  },
  {
    id: "vec008",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec011",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Сумма вектора и его противоположного",
    theme: "Векторы на плоскости",
    text: "Чему равна сумма векторов i = (1, 0) и -i = (-1, 0)?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$\\vec{i} + (-\\vec{i}) = (1 + (-1), 0 + 0) = (0, 0)$$",
    choices: [
      "(0, 0)",
      "(2, 0)",
      "(-2, 0)",
      "(1, 1)",
      "(-1, -1)",
      "(0, 1)"
    ],
    answers: ["(0, 0)"]
  },
  {
    id: "vec012",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec014",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Умножение отрицательного вектора на число",
    theme: "Векторы на плоскости",
    text: "Чему равен вектор -3j, если j = (0, 1)?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$-3\\vec{j} = -3(0, 1) = (0, -3)$$",
    choices: [
      "(0, -3)",
      "(-3, 0)",
      "(0, 3)",
      "(-3, -3)",
      "(3, 0)",
      "(0, -1)"
    ],
    answers: ["(0, -3)"]
  },
  {
    id: "vec015",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Линейная комбинация векторов",
    theme: "Векторы на плоскости",
    text: "Чему равен вектор 2i - 3j, если i = (1, 0), j = (0, 1)?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$2\\vec{i} - 3\\vec{j} = 2(1, 0) - 3(0, 1) = (2, 0) + (0, -3) = (2, -3)$$",
    choices: [
      "(2, -3)",
      "(-2, 3)",
      "(2, 3)",
      "(-2, -3)",
      "(3, -2)",
      "(-3, 2)"
    ],
    answers: ["(2, -3)"]
  },
  {
    id: "vec016",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec018",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Координаты вектора через базис",
    theme: "Векторы на плоскости",
    text: "Вектор v = (3, 4). Представьте его через единичные векторы i и j.",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "Любой вектор можно представить как линейную комбинацию базисных векторов: $$\\vec{v} = x\\vec{i} + y\\vec{j}$$",
    choices: [
      "3i + 4j",
      "4i + 3j", 
      "3i - 4j",
      "-3i + 4j",
      "5i + 0j",
      "0i + 5j"
    ],
    answers: ["3i + 4j"]
  },
  {
    id: "vec019",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Координаты отрицательного вектора через базис",
    theme: "Векторы на плоскости",
    text: "Вектор v = (-2, 5). Представьте его через единичные векторы i и j.",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "$$\\vec{v} = (-2, 5) = -2(1, 0) + 5(0, 1) = -2\\vec{i} + 5\\vec{j}$$",
    choices: [
      "-2i + 5j",
      "2i - 5j", 
      "-2i - 5j",
      "2i + 5j",
      "5i - 2j",
      "-5i + 2j"
    ],
    answers: ["-2i + 5j"]
  },
  {
    id: "vec020",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Длина вектора через координаты",
    theme: "Векторы на плоскости",
    text: "Вектор v = (3, 4). Чему равна его длина?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "Длина вектора: $$|\\vec{v}| = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$",
    choices: [
      "5",
      "7", 
      "√7",
      "√25",
      "12",
      "25"
    ],
    answers: ["5", "√25"]
  },
  {
    id: "vec021",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Направление вектора",
    theme: "Векторы на плоскости",
    text: "Вектор v = (0, -1). В каком направлении он направлен?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "Вектор (0, -1) направлен вдоль отрицательного направления оси Y.",
    choices: [
      "Вниз",
      "Вверх",
      "Вправо",
      "Влево",
      "По диагонали вправо-вверх",
      "По диагонали влево-вниз"
    ],
    answers: ["Вниз"]
  },
  {
    id: "vec022",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    id: "vec023",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор, противоположный заданному",
    theme: "Векторы на плоскости",
    text: "Какой вектор противоположен вектору j = (0, 1)?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "Противоположный вектор имеет противоположные знаки координат: $$-\\vec{j} = (0, -1)$$",
    choices: [
      "(0, -1)",
      "(-1, 0)",
      "(1, 0)",
      "(0, 0)",
      "(-1, -1)",
      "(1, 1)"
    ],
    answers: ["(0, -1)"]
  },
  {
    id: "vec024",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Симметрия векторов",
    theme: "Векторы на плоскости",
    text: "Какой вектор симметричен вектору i = (1, 0) относительно оси Y?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "При симметрии относительно оси Y меняется знак у координаты X: $$(x, y) \\rightarrow (-x, y)$$",
    choices: [
      "(-1, 0)",
      "(1, 0)",
      "(0, 1)",
      "(0, -1)",
      "(-1, 1)",
      "(1, -1)"
    ],
    answers: ["(-1, 0)"]
  },
  {
    id: "vec025",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Симметрия векторов 2",
    theme: "Векторы на плоскости",
    text: "Какой вектор симметричен вектору -j = (0, -1) относительно оси X?",
    JSXGraph: "true",
    JSXGraphType: "unitVectors",
    hint: "При симметрии относительно оси X меняется знак у координаты Y: $$(x, y) \\rightarrow (x, -y)$$",
    choices: [
      "(0, 1)",
      "(0, -1)",
      "(-1, 0)",
      "(1, 0)",
      "(1, 1)",
      "(-1, -1)"
    ],
    answers: ["(0, 1)"]
  },

 {
    id: "vec_int001",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec_int003",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Разложение вектора на компоненты",
    theme: "Векторы на плоскости",
    text: "Вектор v = (2, -3). Представьте его через базисные векторы i и j.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Вектор представляется как линейная комбинация базисных векторов: $$\\vec{v} = 2\\vec{i} - 3\\vec{j}$$",
    choices: [
      "2i - 3j",
      "-2i + 3j",
      "3i + 2j",
      "-3i - 2j",
      "2i + 3j",
      "-2i - 3j"
    ],
    answers: ["2i - 3j"]
  },
  {
    id: "vec_int004",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    header: "Тест по векторам",
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
    id: "vec_int007",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Нулевая проекция на ось Y",
    theme: "Векторы на плоскости",
    text: "Вектор v = (5, 0). Где расположена его проекция на ось Y?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Если проекция на ось Y равна 0, вектор лежит на оси X.",
    choices: [
      "В начале координат",
      "В точке (5, 0)",
      "В точке (0, 5)",
      "В точке (5, 5)",
      "Не существует",
      "В точке (0, 0)"
    ],
    answers: ["В начале координат"]
  },
  {
    id: "vec_int008",
    type: "multiplechoices",
    header: "Тест по векторам",
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
    id: "vec_int009",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор во втором квадранте",
    theme: "Векторы на плоскости",
    text: "Вектор находится во втором квадранте. Какие знаки у его проекций?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Во втором квадранте: x < 0, y > 0",
    choices: [
      "x < 0, y > 0",
      "x > 0, y > 0",
      "x < 0, y < 0",
      "x > 0, y < 0",
      "x = 0, y > 0",
      "x < 0, y = 0"
    ],
    answers: ["x < 0, y > 0"]
  },
  {
    id: "vec_int010",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор в четвертом квадранте",
    theme: "Векторы на плоскости",
    text: "Вектор находится в четвертом квадранте. Какие знаки у его проекций?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "В четвертом квадранте: x > 0, y < 0",
    choices: [
      "x > 0, y < 0",
      "x < 0, y > 0",
      "x > 0, y > 0",
      "x < 0, y < 0",
      "x = 0, y < 0",
      "x > 0, y = 0"
    ],
    answers: ["x > 0, y < 0"]
  },
  {
    id: "vec_int011",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Единичный вектор направления",
    theme: "Векторы на плоскости",
    text: "Вектор v = (3, 4). Найдите единичный вектор того же направления.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Единичный вектор: $$\\vec{e} = \\frac{\\vec{v}}{|\\vec{v}|} = \\frac{(3, 4)}{5} = (0.6, 0.8)$$",
    choices: [
      "(0.6, 0.8)",
      "(0.8, 0.6)",
      "(0.75, 1)",
      "(1, 0.75)",
      "(3/5, 4/5)",
      "(4/5, 3/5)"
    ],
    answers: ["(0.6, 0.8)", "(3/5, 4/5)"]
  },
  {
    id: "vec_int012",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекция на отрицательное направление",
    theme: "Векторы на плоскости",
    text: "Вектор v = (-2, -3). Чему равна его проекция на отрицательное направление оси X?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Проекция на отрицательное направление оси X равна модулю координаты x: 2",
    choices: [
      "2",
      "-2",
      "3",
      "-3",
      "√13",
      "0"
    ],
    answers: ["2"]
  },
  {
    id: "vec_int013",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Сложение проекций",
    theme: "Векторы на плоскости",
    text: "Проекции вектора a: (2, 1), вектора b: (-1, 3). Найдите проекции вектора c = a + b.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Проекции суммы векторов равны сумме проекций: $$\\text{пр}_x(\\vec{a}+\\vec{b}) = 2 + (-1) = 1$$, $$\\text{пр}_y(\\vec{a}+\\vec{b}) = 1 + 3 = 4$$",
    choices: [
      "(1, 4)",
      "(3, 4)",
      "(1, -2)",
      "(-1, 4)",
      "(1, 2)",
      "(-1, -2)"
    ],
    answers: ["(1, 4)"]
  },
  {
    id: "vec_int014",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Умножение вектора на скаляр",
    theme: "Векторы на плоскости",
    text: "Вектор v = (1, -2). Найдите проекции вектора w = -3v.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "При умножении на скаляр проекции умножаются на этот скаляр: $$-3\\vec{v} = (-3\\cdot1, -3\\cdot(-2)) = (-3, 6)$$",
    choices: [
      "(-3, 6)",
      "(3, -6)",
      "(-1, 2)",
      "(1, -2)",
      "(-3, -6)",
      "(3, 6)"
    ],
    answers: ["(-3, 6)"]
  },
  {
    id: "vec_int015",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор, противоположный заданному",
    theme: "Векторы на плоскости",
    text: "Вектор v = (4, -5). Найдите проекции вектора -v.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Противоположный вектор имеет противоположные проекции: $$-\\vec{v} = (-4, 5)$$",
    choices: [
      "(-4, 5)",
      "(4, -5)",
      "(-4, -5)",
      "(4, 5)",
      "(5, -4)",
      "(-5, 4)"
    ],
    answers: ["(-4, 5)"]
  },
  {
    id: "vec_int016",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции нулевого вектора",
    theme: "Векторы на плоскости",
    text: "Каковы проекции нулевого вектора на координатные оси?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Нулевой вектор имеет нулевые проекции на все оси: $$\\vec{0} = (0, 0)$$",
    choices: [
      "(0, 0)",
      "(1, 0)",
      "(0, 1)",
      "(-1, -1)",
      "(1, 1)",
      "Не определены"
    ],
    answers: ["(0, 0)"]
  },
  {
    id: "vec_int017",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор на биссектрисе",
    theme: "Векторы на плоскости",
    text: "Вектор лежит на биссектрисе первого квадранта. Как соотносятся его проекции?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "На биссектрисе первого квадранта проекции равны: x = y",
    choices: [
      "x = y",
      "x = -y",
      "x = 2y",
      "y = 2x",
      "x = 0",
      "y = 0"
    ],
    answers: ["x = y"]
  },
  {
    id: "vec_int018",
    type: "multiplechoices",
    header: "Тест по векторам",
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
  {
    id: "vec_int019",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции и угол 0°",
    theme: "Векторы на плоскости",
    text: "Вектор образует угол 0° с осью X. Чему равна его проекция на ось Y?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Если угол с осью X равен 0°, вектор параллелен оси X, значит его проекция на ось Y равна 0.",
    choices: [
      "0",
      "1",
      "-1",
      "Может быть любой",
      "Не определена",
      "Равна проекции на X"
    ],
    answers: ["0"]
  },
  {
    id: "vec_int020",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции вектора единичной длины",
    theme: "Векторы на плоскости",
    text: "Вектор имеет единичную длину и образует угол 60° с осью X. Чему равна его проекция на ось X?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Проекция на ось X: $$x = |\\vec{v}|\\cos\\alpha = 1\\cdot\\cos60^\\circ = 0.5$$",
    choices: [
      "0.5",
      "√3/2",
      "1",
      "0",
      "-0.5",
      "0.866"
    ],
    answers: ["0.5"]
  },
  {
    id: "vec_int021",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции вектора под углом 30°",
    theme: "Векторы на плоскости",
    text: "Вектор длиной 2 образует угол 30° с осью X. Чему равна его проекция на ось Y?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Проекция на ось Y: $$y = |\\vec{v}|\\sin\\alpha = 2\\cdot\\sin30^\\circ = 2\\cdot0.5 = 1$$",
    choices: [
      "1",
      "√3",
      "2",
      "0.5",
      "1.732",
      "0"
    ],
    answers: ["1"]
  },
  {
    id: "vec_int022",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор на оси координат",
    theme: "Векторы на плоскости",
    text: "Вектор лежит на оси Y. Какая из его проекций равна нулю?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "На оси Y координата x = 0, значит проекция на ось X равна 0.",
    choices: [
      "Проекция на ось X",
      "Проекция на ось Y",
      "Обе проекции",
      "Ни одна из проекций",
      "Проекция зависит от направления",
      "Нельзя определить"
    ],
    answers: ["Проекция на ось X"]
  },
  {
    id: "vec_int023",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции симметричного вектора",
    theme: "Векторы на плоскости",
    text: "Вектор v = (a, b). Каковы проекции вектора, симметричного ему относительно оси X?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "При симметрии относительно оси X координата y меняет знак: $$(a, b) \\rightarrow (a, -b)$$",
    choices: [
      "(a, -b)",
      "(-a, b)",
      "(-a, -b)",
      "(b, a)",
      "(-b, -a)",
      "(a, b)"
    ],
    answers: ["(a, -b)"]
  },
  {
    id: "vec_int024",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции симметричного вектора 2",
    theme: "Векторы на плоскости",
    text: "Вектор v = (a, b). Каковы проекции вектора, симметричного ему относительно начала координат?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "При симметрии относительно начала координат обе координаты меняют знак: $$(a, b) \\rightarrow (-a, -b)$$",
    choices: [
      "(-a, -b)",
      "(a, b)",
      "(-a, b)",
      "(a, -b)",
      "(b, a)",
      "(-b, -a)"
    ],
    answers: ["(-a, -b)"]
  },
  {
    id: "vec_int025",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Проекции и длина",
    theme: "Векторы на плоскости",
    text: "Проекции вектора: x = 0, y = -4. Чему равна длина вектора?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "$$|\\vec{v}| = \\sqrt{0^2 + (-4)^2} = \\sqrt{16} = 4$$",
    choices: [
      "4",
      "-4",
      "0",
      "16",
      "√8",
      "2"
    ],
    answers: ["4"]
  },

  {
    "id": "synonyms001",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Эмбеддинг — как сказать по-русски",
    "theme": "Терминология RAG и векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": "Какой из перечисленных терминов является наиболее точным русскоязычным синонимом английского слова 'embedding' в контексте нейросетей?",
    "choices": [
      "Внедрение",
      "Векторное представление (смысловой вектор)",
      "Встраивание",
      "Кодировка"
    ],
    "answers": ["Векторное представление (смысловой вектор)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Как перевести "embedding" на русский?</h5>
        <p>Английское слово "embedding" в контексте нейросетей не имеет одного устоявшегося перевода.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Основные варианты перевода</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Векторное представление</strong> — наиболее точный и понятный для русскоязычных студентов вариант</li>
            <li><strong>Смысловой вектор</strong> — подчёркивает семантический смысл</li>
            <li><strong>Эмбеддинг</strong> — прямая транслитерация (часто используется в профессиональной среде)</li>
            <li><strong>Вложенное представление</strong> — калька с английского, редко используется</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Запомните:</strong> Эмбеддинг — это <strong>вектор чисел</strong>, который кодирует смысл текста, изображения или другого объекта.
      </div>
    </div>`
  },
  {
    "id": "synonyms002",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'токен'",
    "theme": "Терминология RAG и векторов",
    "text": "В контексте работы больших языковых моделей (LLM) английское слово 'token' лучше всего переводится на русский язык как:",
    "choices": [
      "Маркер",
      "Символ",
      "Единица текста (часть слова, слово или знак препинания)",
      "Жетон"
    ],
    "answers": ["Единица текста (часть слова, слово или знак препинания)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое токен?</h5>
        <p>Токен — это минимальная единица текста, которую обрабатывает языковая модель.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода 'token'</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Токен</strong> — прямая транслитерация (самый распространённый вариант в IT-среде)</li>
            <li><strong>Единица текста</strong> — описательный, понятный для начинающих</li>
            <li><strong>Лексема</strong> — термин из лингвистики, но в AI используется редко</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Маркер' — используется в контексте разметки (markup).<br>
        • 'Символ' — слишком узко (токен может быть целым словом).<br>
        • 'Жетон' — бытовое значение, не имеет отношения к IT.
      </div>
    </div>`
  },
  {
    "id": "synonyms003",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'similarity'",
    "theme": "Терминология RAG и векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": "В контексте сравнения векторов английское слово 'similarity' ('cosine similarity') лучше всего переводится как:",
    "choices": [
      "Идентичность",
      "Сходство (или мера сходства)",
      "Равенство",
      "Корреляция"
    ],
    "answers": ["Сходство (или мера сходства)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Cosine similarity — косинусное сходство</h5>
        <p>Это мера того, насколько два вектора направлены в одну сторону.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Правильный перевод</strong>
        </div>
        <div class="card-body">
          <p><strong>Cosine similarity = Косинусное сходство</strong> (или косинусная близость)</p>
          <p>Это стандартный термин в русскоязычной математической и IT-литературе.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Идентичность' — слишком сильное слово (означает полное совпадение).<br>
        • 'Равенство' — подразумевает точное равенство векторов.<br>
        • 'Корреляция' — статистический термин, имеет другой смысл.
      </div>
    </div>`
  },
  {
    "id": "synonyms004",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Retrieval'",
    "theme": "Терминология RAG и векторов",
    "text": "В аббревиатуре RAG буква 'R' означает 'Retrieval'. Как лучше всего перевести это слово на русский язык в контексте RAG?",
    "choices": [
      "Извлечение (или поиск)",
      "Сохранение",
      "Восстановление",
      "Ретроспектива"
    ],
    "answers": ["Извлечение (или поиск)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что означает Retrieval в RAG?</h5>
        <p>RAG = Retrieval-Augmented Generation — <strong>поиск</strong> (извлечение) + <strong>дополнение</strong> + <strong>генерация</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода 'retrieval'</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Поиск</strong> — наиболее понятный и распространённый вариант</li>
            <li><strong>Извлечение</strong> — более точный, но менее употребимый</li>
            <li><strong>Поиск информации</strong> — полный, но длинный вариант</li>
          </ul>
          <p>В RAG речь идёт о том, чтобы <strong>найти</strong> в базе знаний релевантные документы.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Сохранение' — это хранение (storage), а не поиск.<br>
        • 'Восстановление' — восстановление удалённых данных.<br>
        • 'Ретроспектива' — взгляд в прошлое, не имеет отношения к поиску.
      </div>
    </div>`
  },
  {
    "id": "synonyms005",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Augmented'",
    "theme": "Терминология RAG и векторов",
    "text": "В аббревиатуре RAG буква 'A' означает 'Augmented'. Как лучше всего перевести это слово на русский язык в контексте RAG?",
    "choices": [
      "Увеличенный",
      "Дополненный (контекстом)",
      "Расширенный",
      "Улучшенный"
    ],
    "answers": ["Дополненный (контекстом)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что означает Augmented в RAG?</h5>
        <p>RAG = Retrieval-<strong>Augmented</strong> Generation — поиск + <strong>дополнение</strong> + генерация.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Смысл термина 'Augmented'</strong>
        </div>
        <div class="card-body">
          <p>В RAG мы <strong>дополняем</strong> запрос пользователя найденными документами (контекстом).</p>
          <p>Запрос + Контекст → LLM → Ответ</p>
          <p>Поэтому 'augmented' лучше всего переводить как <strong>дополненный</strong>.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Увеличенный' — про размер, а не про добавление контекста.<br>
        • 'Расширенный' — тоже про размер, менее точен.<br>
        • 'Улучшенный' — слишком общее слово.
      </div>
    </div>`
  },

   {
    "id": "synonyms007",
    "type": "multiplechoices",
    "header": "Русскоязычные синонимы в AI",
    "title": "Синонимы слова 'Chunking'",
    "theme": "Терминология RAG и векторов",
    "text": "В контексте RAG английское слово 'chunking' лучше всего переводится на русский язык как:",
    "choices": [
      "Сжатие",
      "Нарезка (разбиение документа на фрагменты)",
      "Кэширование",
      "Фрагментация"
    ],
    "answers": ["Нарезка (разбиение документа на фрагменты)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое чанкинг?</h5>
        <p>Чанкинг — это процесс разбиения большого документа на небольшие фрагменты (чанки).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Варианты перевода</strong>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Нарезка</strong> — самый понятный для начинающих вариант</li>
            <li><strong>Разбиение на чанки</strong> — профессиональный термин, часто используется</li>
            <li><strong>Сегментация</strong> — более научный термин</li>
          </ul>
          <p>Цель чанкинга: получить кусочки текста, которые поместятся в контекстное окно LLM.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 'Сжатие' — уменьшение объёма данных.<br>
        • 'Кэширование' — сохранение результатов для ускорения.<br>
        • 'Фрагментация' — хаотичное разрушение целостности.
      </div>
    </div>`
  },

   {
    "id": "unit_vectors001",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Определение единичного вектора",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Какой вектор называется единичным?`,
    "choices": [
      "Вектор, все координаты которого равны 1",
      "Вектор, длина (норма) которого равна 1",
      "Вектор, у которого только одна координата отлична от нуля",
      "Вектор, который лежит на координатной оси"
    ],
    "answers": ["Вектор, длина (норма) которого равна 1"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Единичный вектор</h5>
        <p><strong>Единичный вектор</strong> (или <strong>орт</strong>) — это вектор, длина (норма, модуль) которого равна 1.</p>
        <p class="text-center">$$||\\mathbf{e}|| = 1$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Обозначения единичных векторов</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>В математике: $\\mathbf{e}$, $\\hat{\\mathbf{v}}$, $\\mathbf{u}$</li>
            <li>Базисные векторы: $\\mathbf{i} = (1,0,0)$, $\\mathbf{j} = (0,1,0)$, $\\mathbf{k} = (0,0,1)$</li>
            <li>В машинном обучении: нормализованный вектор $\\frac{\\mathbf{v}}{||\\mathbf{v}||}$</li>
          </ul>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Примеры</strong>
        </div>
        <div class="card-body">
          <p>Единичные векторы в 2D:</p>
          <ul>
            <li>$\\mathbf{e}_1 = (1, 0)$ — длина $\\sqrt{1^2 + 0^2} = 1$</li>
            <li>$\\mathbf{e}_2 = (0, 1)$ — длина $\\sqrt{0^2 + 1^2} = 1$</li>
            <li>$\\mathbf{e}_3 = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}) \\approx (0.707, 0.707)$ — длина $\\sqrt{0.5 + 0.5} = 1$</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • "Все координаты равны 1" — это вектор (1,1,1), его длина $\\sqrt{3} \\approx 1.73$, не единичная.<br>
        • "Только одна координата отлична от нуля" — это базисный вектор, но он может иметь длину не равную 1 (например, (2,0,0) имеет длину 2).<br>
        • "Лежит на координатной оси" — это направление, а не условие единичной длины.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors002",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Нормализация вектора",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Как получить единичный вектор из произвольного вектора $\\mathbf{v} \\neq \\mathbf{0}$?`,
    "choices": [
      "Разделить вектор на его длину: $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$",
      "Умножить вектор на его длину: $\\mathbf{e} = \\mathbf{v} \\cdot ||\\mathbf{v}||$",
      "Возвести координаты вектора в квадрат",
      "Обнулить все координаты, кроме первой"
    ],
    "answers": ["Разделить вектор на его длину: $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Нормализация вектора</h5>
        <p><strong>Нормализация</strong> — это процесс приведения вектора к единичной длине с сохранением направления.</p>
        <p class="text-center">$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$$</p>
        <p>где $\\hat{\\mathbf{v}}$ — единичный вектор в направлении $\\mathbf{v}$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример нормализации</strong>
        </div>
        <div class="card-body">
          <p>Дан вектор $\\mathbf{v} = (3, 4)$</p>
          <p>Длина вектора: $||\\mathbf{v}|| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$</p>
          <p>Единичный вектор: $\\hat{\\mathbf{v}} = \\frac{(3,4)}{5} = (0.6, 0.8)$</p>
          <p>Проверка: $||\\hat{\\mathbf{v}}|| = \\sqrt{0.6^2 + 0.8^2} = \\sqrt{0.36 + 0.64} = \\sqrt{1} = 1$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Зачем нужна нормализация в AI?</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>В RAG-системах эмбеддинги нормализуют, чтобы ускорить поиск</li>
            <li>Косинусное сходство нормализованных векторов = скалярному произведению</li>
            <li>Улучшает численную стабильность алгоритмов</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Запомните:</strong> Нормализация сохраняет <strong>направление</strong>, но меняет <strong>длину</strong> на 1.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors003",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Скалярное произведение единичных векторов",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно скалярное произведение двух единичных векторов $\\mathbf{e}_1$ и $\\mathbf{e}_2$?`,
    "choices": [
      "Длине вектора $\\mathbf{e}_1$",
      "Косинусу угла между ними: $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$",
      "Сумме их координат",
      "Единице всегда"
    ],
    "answers": ["Косинусу угла между ними: $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Скалярное произведение единичных векторов</h5>
        <p>Для любых двух векторов: $\\mathbf{a} \\cdot \\mathbf{b} = ||\\mathbf{a}|| \\cdot ||\\mathbf{b}|| \\cdot \\cos \\theta$</p>
        <p>Если $||\\mathbf{e}_1|| = 1$ и $||\\mathbf{e}_2|| = 1$, то:</p>
        <p class="text-center">$$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$$</p>
        <p>где $\\theta$ — угол между векторами.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример: сонаправленные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (1, 0)$</p>
              <p>$\\theta = 0^\\circ$, $\\cos 0^\\circ = 1$</p>
              <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 1 + 0 \\cdot 0 = 1$</p>
              <p class="text-center">✅ $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример: перпендикулярные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (0, 1)$</p>
              <p>$\\theta = 90^\\circ$, $\\cos 90^\\circ = 0$</p>
              <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 0 + 0 \\cdot 1 = 0$</p>
              <p class="text-center">✅ $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 0$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Пример: угол 60°</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e}_1 = (1, 0)$, $\\mathbf{e}_2 = (\\cos 60^\\circ, \\sin 60^\\circ) = (0.5, 0.866)$</p>
          <p>$\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 1 \\cdot 0.5 + 0 \\cdot 0.866 = 0.5 = \\cos 60^\\circ$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Главная формула:</strong> $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$ — это основа косинусного сходства в RAG-системах!
      </div>
    </div>`
  },
  {
    "id": "unit_vectors004",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Ортогональные единичные векторы",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Чему равно скалярное произведение двух перпендикулярных (ортогональных) единичных векторов?`,
    "choices": [
      "1",
      "-1",
      "0",
      "Зависит от длины векторов"
    ],
    "answers": ["0"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Ортогональные единичные векторы</h5>
        <p>Два вектора называются <strong>ортогональными</strong>, если угол между ними равен $90^\\circ$ (перпендикулярны).</p>
        <p class="text-center">$$\\mathbf{e}_1 \\perp \\mathbf{e}_2 \\quad \\Rightarrow \\quad \\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos 90^\\circ = 0$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример в 2D</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{i} = (1, 0)$ — единичный вектор по оси X</p>
              <p>$\\mathbf{j} = (0, 1)$ — единичный вектор по оси Y</p>
              <p>$\\mathbf{i} \\cdot \\mathbf{j} = 1 \\cdot 0 + 0 \\cdot 1 = 0$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример в 3D</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{i} = (1, 0, 0)$</p>
              <p>$\\mathbf{k} = (0, 0, 1)$</p>
              <p>$\\mathbf{i} \\cdot \\mathbf{k} = 1 \\cdot 0 + 0 \\cdot 0 + 0 \\cdot 1 = 0$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-info mb-3">
        <div class="card-header bg-info text-white">
          <strong>Ортонормированный базис</strong>
        </div>
        <div class="card-body">
          <p>Система векторов называется <strong>ортонормированной</strong>, если:</p>
          <ul>
            <li>Каждый вектор единичный: $||\\mathbf{e}_i|| = 1$</li>
            <li>Векторы попарно ортогональны: $\\mathbf{e}_i \\cdot \\mathbf{e}_j = 0$ при $i \\neq j$</li>
          </ul>
          <p>Пример: $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ в трёхмерном пространстве.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>В RAG:</strong> Ортогональные векторы означают, что тексты имеют совершенно разный смысл (связанные понятия дают $\\cos \\theta > 0$, противоположные — $\\cos \\theta < 0$).
      </div>
    </div>`
  },
  {
    "id": "unit_vectors005",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Скалярное произведение вектора и единичного",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно скалярное произведение произвольного вектора $\\mathbf{v}$ и единичного вектора $\\mathbf{e}$ в направлении $\\mathbf{v}$?`,
    "choices": [
      "$||\\mathbf{v}||$ (длине вектора $\\mathbf{v}$)",
      "1",
      "$\\mathbf{v}$",
      "$||\\mathbf{v}||^2$"
    ],
    "answers": ["$||\\mathbf{v}||$ (длине вектора $\\mathbf{v}$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Проекция вектора на направление</h5>
        <p>Если $\\mathbf{e} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}$ — единичный вектор в направлении $\\mathbf{v}$, то:</p>
        <p class="text-center">$$\\mathbf{v} \\cdot \\mathbf{e} = \\mathbf{v} \\cdot \\frac{\\mathbf{v}}{||\\mathbf{v}||} = \\frac{\\mathbf{v} \\cdot \\mathbf{v}}{||\\mathbf{v}||} = \\frac{||\\mathbf{v}||^2}{||\\mathbf{v}||} = ||\\mathbf{v}||$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{v} = (3, 4)$</p>
          <p>$||\\mathbf{v}|| = 5$</p>
          <p>$\\mathbf{e} = \\frac{(3,4)}{5} = (0.6, 0.8)$</p>
          <p>$\\mathbf{v} \\cdot \\mathbf{e} = 3 \\cdot 0.6 + 4 \\cdot 0.8 = 1.8 + 3.2 = 5 = ||\\mathbf{v}||$</p>
        </div>
      </div>
      
      <div class="card border-info mb-3">
        <div class="card-header bg-info text-white">
          <strong>Геометрический смысл</strong>
        </div>
        <div class="card-body">
          <p>Скалярное произведение $\\mathbf{v} \\cdot \\mathbf{e}$ — это <strong>проекция</strong> вектора $\\mathbf{v}$ на направление $\\mathbf{e}$.</p>
          <p>Если $\\mathbf{e}$ сонаправлен с $\\mathbf{v}$, проекция равна длине $\\mathbf{v}$.</p>
          <p>Если $\\mathbf{e}$ перпендикулярен $\\mathbf{v}$, проекция равна 0.</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>В RAG:</strong> Это объясняет, почему косинусное сходство = скалярному произведению нормализованных векторов.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors006",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "title": "Скалярное произведение одинаковых единичных векторов",
    "theme": "Произведение единичных векторов",
    "text": `Чему равно скалярное произведение единичного вектора самого на себя: $\\mathbf{e} \\cdot \\mathbf{e}$?`,
    "choices": [
      "0",
      "1",
      "$||\\mathbf{e}||$",
      "$\\mathbf{e}$"
    ],
    "answers": ["1"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Скалярный квадрат единичного вектора</h5>
        <p>Для любого вектора: $\\mathbf{a} \\cdot \\mathbf{a} = ||\\mathbf{a}||^2$</p>
        <p>Для единичного вектора $||\\mathbf{e}|| = 1$, поэтому:</p>
        <p class="text-center">$$\\mathbf{e} \\cdot \\mathbf{e} = 1^2 = 1$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример в 2D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e} = (0.6, 0.8)$</p>
          <p>$\\mathbf{e} \\cdot \\mathbf{e} = 0.6 \\cdot 0.6 + 0.8 \\cdot 0.8 = 0.36 + 0.64 = 1$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Проверка через косинус</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{e} \\cdot \\mathbf{e} = ||\\mathbf{e}|| \\cdot ||\\mathbf{e}|| \\cdot \\cos 0^\\circ = 1 \\cdot 1 \\cdot 1 = 1$</p>
          <p>Угол между вектором и самим собой = $0^\\circ$, $\\cos 0^\\circ = 1$.</p>
        </div>
      </div>
      
      <div class="alert alert-info mt-2">
        <strong>Запомните:</strong> Для базисных векторов: $\\mathbf{i} \\cdot \\mathbf{i} = 1$, $\\mathbf{j} \\cdot \\mathbf{j} = 1$, $\\mathbf{k} \\cdot \\mathbf{k} = 1$.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors007",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Косинусное сходство через единичные векторы",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Как выразить косинусное сходство между векторами $\\mathbf{a}$ и $\\mathbf{b}$ через их единичные векторы $\\hat{\\mathbf{a}}$ и $\\hat{\\mathbf{b}}$?`,
    "choices": [
      "$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$",
      "$\\cos \\theta = \\hat{\\mathbf{a}} + \\hat{\\mathbf{b}}$",
      "$\\cos \\theta = ||\\hat{\\mathbf{a}} - \\hat{\\mathbf{b}}||$",
      "$\\cos \\theta = \\frac{\\hat{\\mathbf{a}}}{\\hat{\\mathbf{b}}}$"
    ],
    "answers": ["$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Косинусное сходство и нормализация</h5>
        <p>Для любых двух векторов:</p>
        <p class="text-center">$$\\cos \\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{||\\mathbf{a}|| \\cdot ||\\mathbf{b}||}$$</p>
        <p>Если ввести единичные векторы $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{||\\mathbf{a}||}$ и $\\hat{\\mathbf{b}} = \\frac{\\mathbf{b}}{||\\mathbf{b}||}$, то:</p>
        <p class="text-center">$$\\cos \\theta = \\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Численный пример</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{b} = (6, 8)$ — сонаправленные векторы</p>
          <p>$||\\mathbf{a}|| = 5$, $\\hat{\\mathbf{a}} = (0.6, 0.8)$</p>
          <p>$||\\mathbf{b}|| = 10$, $\\hat{\\mathbf{b}} = (0.6, 0.8)$</p>
          <p>$\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}} = 0.6 \\cdot 0.6 + 0.8 \\cdot 0.8 = 0.36 + 0.64 = 1$</p>
          <p>$\\cos \\theta = 1$ → угол $0^\\circ$, векторы сонаправлены ✅</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Почему это важно для RAG?</strong>
        </div>
        <div class="card-body">
          <p>В RAG-системах эмбеддинги часто нормализуют (приводят к единичной длине).</p>
          <p>Тогда поиск по косинусному сходству становится просто <strong>скалярным произведением</strong>:</p>
          <p class="text-center">$$\\text{сходство} = \\hat{\\mathbf{q}} \\cdot \\hat{\\mathbf{d}}$$</p>
          <p>Это сильно ускоряет вычисления!</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "unit_vectors008",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Проекция вектора на направление",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равна проекция вектора $\\mathbf{a}$ на направление единичного вектора $\\mathbf{e}$?`,
    "choices": [
      "$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярная проекция)",
      "$\\mathbf{a} + \\mathbf{e}$",
      "$\\frac{\\mathbf{a}}{\\mathbf{e}}$",
      "$||\\mathbf{a}|| \\cdot \\mathbf{e}$"
    ],
    "answers": ["$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярная проекция)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Проекция вектора на ось</h5>
        <p><strong>Скалярная проекция</strong> вектора $\\mathbf{a}$ на направление единичного вектора $\\mathbf{e}$:</p>
        <p class="text-center">$$\\text{пр}_{\\mathbf{e}} \\mathbf{a} = \\mathbf{a} \\cdot \\mathbf{e} = ||\\mathbf{a}|| \\cos \\theta$$</p>
        <p>где $\\theta$ — угол между $\\mathbf{a}$ и $\\mathbf{e}$.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример 1: проекция на ось X</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{i} = (1, 0)$</p>
              <p>$\\mathbf{a} \\cdot \\mathbf{i} = 3 \\cdot 1 + 4 \\cdot 0 = 3$</p>
              <p>Проекция на ось X = 3 ✅</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример 2: проекция на направление (1,1)</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{a} = (3, 4)$, $\\mathbf{e} = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}) \\approx (0.707, 0.707)$</p>
              <p>$\\mathbf{a} \\cdot \\mathbf{e} \\approx 3 \\cdot 0.707 + 4 \\cdot 0.707 = 2.121 + 2.828 = 4.949$</p>
              <p>$\\approx ||\\mathbf{a}|| \\cos 45^\\circ = 5 \\cdot 0.707 = 3.535$ — Не сходится? Проверьте:</p>
              <p class="text-danger">Ошибка: $\\mathbf{a} \\cdot \\mathbf{e} = 4.95$, а $||\\mathbf{a}||\\cos45° = 3.54$. Разница из-за того, что $\\mathbf{e}$ не является направлением $\\mathbf{a}$! Проекция — это НЕ разложение по базису.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Векторная проекция</strong>
        </div>
        <div class="card-body">
          <p>Чтобы получить <strong>вектор проекции</strong>, нужно скалярную проекцию умножить на единичный вектор:</p>
          <p class="text-center">$$\\mathbf{a}_{\\parallel} = (\\mathbf{a} \\cdot \\mathbf{e}) \\cdot \\mathbf{e}$$</p>
        </div>
      </div>
    </div>`
  },
  {
    "id": "unit_vectors009",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Разложение вектора по ортонормированному базису",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "theme": "Произведение единичных векторов",
    "text": `Как найти координату вектора $\\mathbf{a}$ вдоль единичного вектора $\\mathbf{e}$ в ортонормированном базисе?`,
    "choices": [
      "$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярное произведение)",
      "$\\frac{\\mathbf{a}}{\\mathbf{e}}$",
      "$\\mathbf{a} + \\mathbf{e}$",
      "$||\\mathbf{a}|| \\cdot \\mathbf{e}$"
    ],
    "answers": ["$\\mathbf{a} \\cdot \\mathbf{e}$ (скалярное произведение)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Разложение по ортонормированному базису</h5>
        <p>Если $\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n$ — ортонормированный базис ($\\mathbf{e}_i \\cdot \\mathbf{e}_j = 0$ при $i \\neq j$, $\\mathbf{e}_i \\cdot \\mathbf{e}_i = 1$), то любой вектор раскладывается:</p>
        <p class="text-center">$$\\mathbf{a} = (\\mathbf{a} \\cdot \\mathbf{e}_1)\\mathbf{e}_1 + (\\mathbf{a} \\cdot \\mathbf{e}_2)\\mathbf{e}_2 + \\cdots + (\\mathbf{a} \\cdot \\mathbf{e}_n)\\mathbf{e}_n$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример в 2D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (3, 4)$ — в стандартном базисе $\\mathbf{i} = (1,0)$, $\\mathbf{j} = (0,1)$</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{i} = 3$ → координата по X</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{j} = 4$ → координата по Y</p>
          <p>$\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$ ✅</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример в 3D</strong>
        </div>
        <div class="card-body">
          <p>$\\mathbf{a} = (2, -1, 5)$</p>
          <p>$\\mathbf{a} \\cdot \\mathbf{i} = 2$, $\\mathbf{a} \\cdot \\mathbf{j} = -1$, $\\mathbf{a} \\cdot \\mathbf{k} = 5$</p>
          <p>$\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 5\\mathbf{k}$ ✅</p>
        </div>
      </div>
      
      <div class="alert alert-info mt-2">
        <strong>В контексте AI:</strong> Эмбеддинги — это координаты вектора в некотором базисе. Скалярное произведение с базисными векторами "извлекает" нужную компоненту смысла.
      </div>
    </div>`
  },
  {
    "id": "unit_vectors010",
    "type": "multiplechoices",
    "header": "Векторы. Единичные векторы и операции с ними",
    "title": "Расстояние между единичными векторами",
    "theme": "Произведение единичных векторов",
    "JSXGraph": "true",
    "JSXGraphType": "unitVectors",
    "text": `Чему равно евклидово расстояние между двумя единичными векторами $\\mathbf{e}_1$ и $\\mathbf{e}_2$?`,
    "choices": [
      "$\\sqrt{2 - 2\\cos \\theta}$",
      "$\\sqrt{2}$",
      "$1 - \\cos \\theta$",
      "$\\sqrt{1 + \\cos \\theta}$"
    ],
    "answers": ["$\\sqrt{2 - 2\\cos \\theta}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Расстояние между единичными векторами</h5>
        <p>Евклидово расстояние между двумя единичными векторами $\\mathbf{e}_1$ и $\\mathbf{e}_2$:</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = (\\mathbf{e}_1 - \\mathbf{e}_2) \\cdot (\\mathbf{e}_1 - \\mathbf{e}_2) = \\mathbf{e}_1 \\cdot \\mathbf{e}_1 - 2\\mathbf{e}_1 \\cdot \\mathbf{e}_2 + \\mathbf{e}_2 \\cdot \\mathbf{e}_2$$</p>
        <p>Так как $\\mathbf{e}_1 \\cdot \\mathbf{e}_1 = 1$, $\\mathbf{e}_2 \\cdot \\mathbf{e}_2 = 1$, а $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = \\cos \\theta$:</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = 1 - 2\\cos \\theta + 1 = 2 - 2\\cos \\theta$$</p>
        <p class="text-center">$$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2\\cos \\theta}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример: одинаковые векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = \\mathbf{e}_2 = (1,0)$</p>
              <p>$\\theta = 0^\\circ$, $\\cos \\theta = 1$</p>
              <p>$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2 \\cdot 1} = \\sqrt{0} = 0$ ✅</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Пример: перпендикулярные векторы</strong>
            </div>
            <div class="card-body">
              <p>$\\mathbf{e}_1 = (1,0)$, $\\mathbf{e}_2 = (0,1)$</p>
              <p>$\\theta = 90^\\circ$, $\\cos \\theta = 0$</p>
              <p>$||\\mathbf{e}_1 - \\mathbf{e}_2|| = \\sqrt{2 - 2 \\cdot 0} = \\sqrt{2} \\approx 1.414$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card border-warning mb-3">
        <div class="card-header bg-warning text-dark">
          <strong>Связь с косинусным сходством</strong>
        </div>
        <div class="card-body">
          <p>Из формулы видно: чем ближе $\\cos \\theta$ к 1 (высокое сходство), тем меньше расстояние.</p>
          <p>Это ещё одно объяснение, почему косинусное сходство — хорошая мера для RAG: расстояние между нормализованными векторами монотонно связано с косинусом.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Полезное тождество:</strong> $||\\mathbf{e}_1 - \\mathbf{e}_2||^2 = 2(1 - \\cos \\theta)$
      </div>
    </div>`
  },

  
  {
    "id": "matrix_op_001",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Сложение матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$\n\nНайдите матрицу $C = A + B$.",
    "choices": [
      "$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Сложение матриц</h5>\n<p>При сложении матриц складываются соответствующие элементы:</p>\n<p class='text-center'>$(A + B)_{ij} = a_{ij} + b_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 1 + 5 = 6$</p>\n<p>$c_{12} = 2 + 6 = 8$</p>\n<p>$c_{21} = 3 + 7 = 10$</p>\n<p>$c_{22} = 4 + 8 = 12$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_002",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Вычитание матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 10 & 20 \\\\ 30 & 40 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$\n\nНайдите матрицу $C = A - B$.",
    "choices": [
      "$\\begin{pmatrix} 9 & 18 \\\\ 27 & 36 \\end{pmatrix}$",
      "$\\begin{pmatrix} 11 & 22 \\\\ 33 & 44 \\end{pmatrix}$",
      "$\\begin{pmatrix} 10 & 20 \\\\ 30 & 40 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 9 & 18 \\\\ 27 & 36 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Вычитание матриц</h5>\n<p>При вычитании матриц вычитаются соответствующие элементы:</p>\n<p class='text-center'>$(A - B)_{ij} = a_{ij} - b_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 10 - 1 = 9$</p>\n<p>$c_{12} = 20 - 2 = 18$</p>\n<p>$c_{21} = 30 - 3 = 27$</p>\n<p>$c_{22} = 40 - 4 = 36$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_003",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Умножение матрицы на число",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$\n\nНайдите матрицу $B = 3A$.",
    "choices": [
      "$\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Умножение матрицы на число</h5>\n<p>При умножении матрицы на число каждый элемент матрицы умножается на это число:</p>\n<p class='text-center'>$(\\lambda A)_{ij} = \\lambda \\cdot a_{ij}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$b_{11} = 3 \\cdot 1 = 3$</p>\n<p>$b_{12} = 3 \\cdot 2 = 6$</p>\n<p>$b_{21} = 3 \\cdot 3 = 9$</p>\n<p>$b_{22} = 3 \\cdot 4 = 12$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_004",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Умножение матриц 2×2",
    "theme": "Действия с матрицами",
    "text": "Даны матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$$\n\nНайдите произведение $C = A \\times B$.",
    "choices": [
      "$\\begin{pmatrix} 4 & 4 \\\\ 10 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 8 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 4 & 4 \\\\ 10 & 8 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Умножение матриц</h5>\n<p>Для матриц $A$ размером $2 \\times 2$ и $B$ размером $2 \\times 2$:</p>\n<p class='text-center'>$c_{ij} = a_{i1} b_{1j} + a_{i2} b_{2j}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>$c_{11} = 1\\cdot2 + 2\\cdot1 = 2 + 2 = 4$</p>\n<p>$c_{12} = 1\\cdot0 + 2\\cdot2 = 0 + 4 = 4$</p>\n<p>$c_{21} = 3\\cdot2 + 4\\cdot1 = 6 + 4 = 10$</p>\n<p>$c_{22} = 3\\cdot0 + 4\\cdot2 = 0 + 8 = 8$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_005",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Транспонирование матрицы",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$\n\nНайдите транспонированную матрицу $A^T$.",
    "choices": [
      "$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 4 & 6 \\end{pmatrix}$"
    ],
    "answers": ["$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Транспонирование матрицы</h5>\n<p>При транспонировании строки становятся столбцами, а столбцы — строками.</p>\n<p>Если $A$ имеет размер $m \\times n$, то $A^T$ имеет размер $n \\times m$.</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Пошаговое решение</strong>\n</div>\n<div class='card-body'>\n<p>Исходная матрица $A$: 2 строки, 3 столбца</p>\n<p>$A^T$ будет иметь: 3 строки, 2 столбца</p>\n<p>1-й столбец $A$ → 1-я строка $A^T$: $(1, 4)$</p>\n<p>2-й столбец $A$ → 2-я строка $A^T$: $(2, 5)$</p>\n<p>3-й столбец $A$ → 3-я строка $A^T$: $(3, 6)$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_006",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Детерминант матрицы 2×2",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$$",
    "choices": [
      "$\\det(A) = 24$",
      "$\\det(A) = 10$",
      "$\\det(A) = 38$",
      "$\\det(A) = 14$"
    ],
    "answers": ["$\\det(A) = 10$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 2×2</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:</p>\n<p class='text-center'>$\\det(A) = a \\cdot d - b \\cdot c$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_007",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 3×3",
    "title": "Детерминант матрицы 3×3 (правило Саррюса)",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$$",
    "choices": [
      "$\\det(A) = 0$",
      "$\\det(A) = 15$",
      "$\\det(A) = 9$",
      "$\\det(A) = 27$"
    ],
    "answers": ["$\\det(A) = 0$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 3×3 (правило Саррюса)</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$:</p>\n<p class='text-center'>$\\det(A) = aei + bfg + cdh - ceg - bdi - afh$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 1\\cdot5\\cdot9 + 2\\cdot6\\cdot7 + 3\\cdot4\\cdot8 - 3\\cdot5\\cdot7 - 2\\cdot4\\cdot9 - 1\\cdot6\\cdot8$</p>\n<p>$= 45 + 84 + 96 - 105 - 72 - 48$</p>\n<p>$= 225 - 225 = 0$</p>\n<p class='mt-2'><strong>Примечание:</strong> Матрица вырожденная (строки линейно зависимы).</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_008",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 3×3",
    "title": "Детерминант матрицы 3×3",
    "theme": "Действия с матрицами",
    "text": "Найдите детерминант матрицы:\n\n$$B = \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 4 \\\\ 1 & 0 & 2 \\end{pmatrix}$$",
    "choices": [
      "$\\det(B) = 5$",
      "$\\det(B) = 3$",
      "$\\det(B) = 0$",
      "$\\det(B) = 8$"
    ],
    "answers": ["$\\det(B) = 3$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Детерминант матрицы 3×3 (разложение по строке)</h5>\n<p>Удобно разложить по строке, содержащей нули. Разложим по первой строке:</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(B) = 2 \\cdot \\begin{vmatrix} 1 & 4 \\\\ 0 & 2 \\end{vmatrix} - 0 \\cdot \\begin{vmatrix} 3 & 4 \\\\ 1 & 2 \\end{vmatrix} + 1 \\cdot \\begin{vmatrix} 3 & 1 \\\\ 1 & 0 \\end{vmatrix}$</p>\n<p>$= 2 \\cdot (1\\cdot2 - 4\\cdot0) + 1 \\cdot (3\\cdot0 - 1\\cdot1)$</p>\n<p>$= 2 \\cdot 2 + 1 \\cdot (-1) = 4 - 1 = 3$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_009",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Обратная матрица 2×2",
    "theme": "Действия с матрицами",
    "text": "Найдите обратную матрицу для:\n\n$$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$$\n\n(напомним: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$)",
    "choices": [
      "$\\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "$\\frac{1}{10} \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "$\\frac{1}{10} \\begin{pmatrix} -6 & 7 \\\\ 2 & -4 \\end{pmatrix}$"
    ],
    "answers": ["$\\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Обратная матрица 2×2</h5>\n<p>Для матрицы $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:</p>\n<p class='text-center'>$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$</p>\n<p>при условии, что $\\det(A) = ad - bc \\neq 0$.</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Решение</strong>\n</div>\n<div class='card-body'>\n<p>$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$</p>\n<p>$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$</p>\n<p>Проверка: $A \\cdot A^{-1} = E$</p>\n</div>\n</div>\n</div>"
  },
  {
    "id": "matrix_op_010",
    "type": "multiplechoices",
    "header": "Матрицы. Операции с матрицами 2×2",
    "title": "Единичная и нулевая матрицы",
    "theme": "Действия с матрицами",
    "text": "Дана матрица:\n\n$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$\n\nЧему равно произведение $A \\cdot E$, где $E$ — единичная матрица $2 \\times 2$?",
    "choices": [
      "$A$",
      "$E$",
      "$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = A$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answers": ["A"],
    "hint": "<div class='container-fluid p-0'>\n<div class='alert alert-info mb-3'>\n<h5>Единичная матрица</h5>\n<p>Единичная матрица $E$ — это квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули.</p>\n<p class='text-center'>$E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$</p>\n</div>\n<div class='card border-primary mb-3'>\n<div class='card-header bg-primary text-white'>\n<strong>Основное свойство</strong>\n</div>\n<div class='card-body'>\n<p>Для любой матрицы $A$ (согласованного размера):</p>\n<p class='text-center'>$A \\cdot E = E \\cdot A = A$</p>\n<p>Единичная матрица играет роль <strong>единицы</strong> в матричной алгебре.</p>\n</div>\n</div>\n<div class='card border-success mb-3'>\n<div class='card-header bg-success text-white'>\n<strong>Проверка для 2×2</strong>\n</div>\n<div class='card-body'>\n<p>$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} a\\cdot1 + b\\cdot0 & a\\cdot0 + b\\cdot1 \\\\ c\\cdot1 + d\\cdot0 & c\\cdot0 + d\\cdot1 \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$</p>\n</div>\n</div>\n</div>"
  }
,


  {
    "id": "vectordb001",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое векторная база данных?",
    "theme": "Векторные базы данных",
    "text": "Что такое векторная база данных (Vector Database) простыми словами?",
    "choices": [
      "Обычная база данных, где числа хранятся в виде векторов",
      "База данных, которая хранит эмбеддинги (смысловые векторы) и умеет быстро находить похожие",
      "База данных для хранения только текстовых файлов",
      "База данных, которая работает только на видеокартах"
    ],
    "answers": ["База данных, которая хранит эмбеддинги (смысловые векторы) и умеет быстро находить похожие"],
    "hint": "<div class='alert alert-info'>Векторная БД — это специализированное хранилище, где каждый документ превращён в набор чисел (вектор). Главная её суперспособность — быстро находить документы, <strong>похожие по смыслу</strong>, а не по точному совпадению слов.</div>"
  },
  {
    "id": "vectordb002",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Чем векторная БД отличается от обычной SQL?",
    "theme": "Векторные базы данных",
    "text": "В чём главное отличие векторной базы данных от обычной SQL-базы (например, PostgreSQL)?",
    "choices": [
      "Векторная БД не умеет хранить текст, только числа",
      "Векторная БД ищет похожие по смыслу, а SQL — по точному совпадению",
      "Векторная БД работает медленнее SQL",
      "Векторная БД не поддерживает фильтрацию"
    ],
    "answers": ["Векторная БД ищет похожие по смыслу, а SQL — по точному совпадению"],
    "hint": "<div class='alert alert-primary'>SQL ищет: WHERE name = 'Иванов' (точное совпадение). Векторная БД ищет: 'найди документы, похожие на запрос пользователя' (понимает синонимы и контекст).</div>"
  },
  {
    "id": "vectordb003",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое эмбеддинг?",
    "theme": "Векторные базы данных",
    "text": "Что такое эмбеддинг (embedding) в контексте векторных баз данных?",
    "choices": [
      "Изображение, вставленное в документ",
      "Числовой вектор, который кодирует смысл текста, картинки или другого объекта",
      "Специальный индекс для ускорения поиска",
      "Метод шифрования данных"
    ],
    "answers": ["Числовой вектор, который кодирует смысл текста, картинки или другого объекта"],
    "hint": "<div class='alert alert-secondary'>Эмбеддинг — это 'цифровой слепок' смысла. Например, фраза 'кот спит' превращается в набор чисел [0.12, -0.34, 0.56, ...], который понимает компьютер.</div>"
  },
  {
    "id": "vectordb004",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Для чего нужны векторные БД в RAG?",
    "theme": "Векторные базы данных",
    "text": "Зачем в RAG-системах используют векторные базы данных?",
    "choices": [
      "Чтобы хранить историю диалогов пользователей",
      "Чтобы быстро находить документы, релевантные запросу пользователя, и передавать их LLM как контекст",
      "Чтобы заменять LLM (большие языковые модели)",
      "Чтобы шифровать пользовательские данные"
    ],
    "answers": ["Чтобы быстро находить документы, релевантные запросу пользователя, и передавать их LLM как контекст"],
    "hint": "<div class='alert alert-success'>RAG = Поиск + Генерация. Векторная БД отвечает за ПОИСК: она находит нужные фрагменты документов, которые затем отправляются LLM для ответа.</div>"
  },
  {
    "id": "vectordb005",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Поиск по смыслу",
    "theme": "Векторные базы данных",
    "text": "Что означает 'поиск по смыслу' (semantic search) в векторных БД?",
    "choices": [
      "Поиск документов, в которых есть точное совпадение слов из запроса",
      "Поиск документов, которые близки по смыслу к запросу, даже если слова разные",
      "Поиск документов, отсортированных по дате создания",
      "Поиск документов по автору"
    ],
    "answers": ["Поиск документов, которые близки по смыслу к запросу, даже если слова разные"],
    "hint": "<div class='alert alert-info'>Пример: Вы ищете 'как купить машину'. Обычный поиск найдёт только фразы со словами 'купить' и 'машина'. Поиск по смыслу найдёт также 'приобрести авто', 'стоимость автомобиля' и т.д.</div>"
  },
  {
    "id": "vectordb006",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Примеры векторных БД",
    "theme": "Векторные базы данных",
    "text": "Какая из перечисленных баз данных является векторной (предназначена для хранения эмбеддингов и поиска по смыслу)?",
    "choices": [
      "MySQL",
      "PostgreSQL (без расширений)",
      "Chroma",
      "MongoDB (обычная версия)"
    ],
    "answers": ["Chroma"],
    "hint": "<div class='alert alert-secondary'>Популярные векторные БД: <strong>Chroma, FAISS, Qdrant, Milvus, Pinecone, Weaviate</strong>. MySQL и обычный PostgreSQL не умеют эффективно искать по эмбеддингам (нужны специальные расширения).</div>"
  },
  {
    "id": "vectordb007",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Что такое ANN?",
    "theme": "Векторные базы данных",
    "text": "Что означает аббревиатура ANN в контексте векторных баз данных?",
    "choices": [
      "Artificial Neural Network (искусственная нейронная сеть)",
      "Approximate Nearest Neighbor (приближённый поиск ближайших соседей)",
      "Absolute Number Notation (абсолютная числовая нотация)",
      "Array of Numpy Nodes"
    ],
    "answers": ["Approximate Nearest Neighbor (приближённый поиск ближайших соседей)"],
    "hint": "<div class='alert alert-primary'>ANN — это класс алгоритмов, которые ищут не строго ближайших, а 'достаточно близких' соседей. Это позволяет искать среди миллионов векторов за миллисекунды, жертвуя небольшой точностью.</div>"
  },
  {
    "id": "vectordb008",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Косинусное сходство",
    "theme": "Векторные базы данных",
    "text": "Какая метрика чаще всего используется в векторных БД для измерения 'похожести' двух векторов?",
    "choices": [
      "Сумма координат",
      "Косинусное сходство (cosine similarity)",
      "Произведение координат",
      "Разность координат"
    ],
    "answers": ["Косинусное сходство (cosine similarity)"],
    "hint": "<div class='alert alert-success'>Косинусное сходство измеряет угол между векторами. Если угол маленький — текст похож по смыслу. Если угол 90° — смыслы разные. Значения от 0 до 1.</div>"
  },
  {
    "id": "vectordb009",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Гибридный поиск",
    "theme": "Векторные базы данных",
    "text": "Что такое 'гибридный поиск' (hybrid search) в векторных базах данных?",
    "choices": [
      "Поиск одновременно в двух разных базах данных",
      "Объединение векторного поиска (по смыслу) и полнотекстового (по ключевым словам)",
      "Поиск с использованием двух разных языковых моделей",
      "Поиск только в зашифрованных данных"
    ],
    "answers": ["Объединение векторного поиска (по смыслу) и полнотекстового (по ключевым словам)"],
    "hint": "<div class='alert alert-info'>Гибридный поиск комбинирует два метода: векторный (находит синонимы) и полнотекстовый (находит точные термины, например, номер закона). Результат — лучшее из обоих миров.</div>"
  },
  {
    "id": "vectordb010",
    "type": "multiplechoices",
    "header": "Векторные базы данных. Базовые понятия",
    "title": "Индексация в векторных БД",
    "theme": "Векторные базы данных",
    "text": "Зачем в векторных базах данных нужна 'индексация' (indexing)?",
    "choices": [
      "Чтобы сжимать данные для экономии места",
      "Чтобы ускорить поиск похожих векторов (чтобы не перебирать все документы каждый раз)",
      "Чтобы шифровать данные для безопасности",
      "Чтобы удалять дубликаты документов"
    ],
    "answers": ["Чтобы ускорить поиск похожих векторов (чтобы не перебирать все документы каждый раз)"],
    "hint": "<div class='alert alert-secondary'>Без индексации при каждом запросе пришлось бы сравнивать вектор запроса с каждым из миллионов векторов в базе. Это очень медленно. Индексы (HNSW, IVF) помогают находить похожие документы в сотни раз быстрее.</div>"
  },

  {
    "id": "matrix001",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Определение матрицы",
    "theme": "Виды и свойства матриц",
    "text": `Что называется матрицей размера $m \\times n$?`,
    "choices": [
      "Упорядоченный набор из $m$ чисел",
      "Прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов",
      "Квадратная таблица чисел",
      "Вектор, у которого $m$ координат"
    ],
    "answers": ["Прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Определение матрицы</h5>
        <p>Матрица размера $m \\times n$ — это прямоугольная таблица чисел, содержащая $m$ строк и $n$ столбцов.</p>
        <p class="text-center">$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Обозначения</strong>
        </div>
        <div class="card-body">
          <ul>
            <li>$m$ — количество строк</li>
            <li>$n$ — количество столбцов</li>
            <li>$a_{ij}$ — элемент, стоящий на пересечении $i$-й строки и $j$-го столбца</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Пример:</strong> Матрица $A$ размера $2 \\times 3$:
        $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix002",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Квадратная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Какая матрица называется квадратной?`,
    "choices": [
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой число строк равно числу столбцов ($m = n$)",
      "Матрица, у которой все элементы на главной диагонали равны единице",
      "Матрица, состоящая из одной строки"
    ],
    "answers": ["Матрица, у которой число строк равно числу столбцов ($m = n$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Квадратная матрица</h5>
        <p>Матрица называется <strong>квадратной</strong>, если количество строк равно количеству столбцов: $m = n$.</p>
        <p class="text-center">$$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\quad \\text{(матрица $3 \\times 3$)}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Главная диагональ</strong>
            </div>
            <div class="card-body">
              <p>Элементы $a_{11}, a_{22}, a_{33}, \\dots, a_{nn}$ образуют <strong>главную диагональ</strong> квадратной матрицы.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Порядок матрицы</strong>
            </div>
            <div class="card-body">
              <p>Число $n$ называется <strong>порядком</strong> квадратной матрицы.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Примеры квадратных матриц:</strong> $1 \\times 1$, $2 \\times 2$, $3 \\times 3$, $4 \\times 4$ и т.д.
      </div>
    </div>`
  },
  {
    "id": "matrix003",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Единичная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Что такое единичная матрица?`,
    "choices": [
      "Матрица, у которой все элементы равны единице",
      "Квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули",
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой определитель равен единице"
    ],
    "answers": ["Квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Единичная матрица</h5>
        <p>Единичная матрица (обозначается $E$ или $I$) — это квадратная матрица, у которой на главной диагонали стоят единицы, а все остальные элементы — нули.</p>
        <p class="text-center">$$E = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Свойство единичной матрицы</strong>
        </div>
        <div class="card-body">
          <p>При умножении на единичную матрицу любая матрица не меняется:</p>
          <p class="text-center">$$A \\cdot E = E \\cdot A = A$$</p>
          <p>Единичная матрица играет роль <strong>единицы</strong> в матричной алгебре.</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Пример:</strong> Единичная матрица $2 \\times 2$:
        $$E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix004",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Нулевая матрица",
    "theme": "Виды и свойства матриц",
    "text": `Что такое нулевая матрица?`,
    "choices": [
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой определитель равен нулю",
      "Матрица, не имеющая ни одной строки",
      "Матрица, у которой все элементы на главной диагонали равны нулю"
    ],
    "answers": ["Матрица, у которой все элементы равны нулю"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Нулевая матрица</h5>
        <p>Нулевая матрица (обозначается $O$ или $0$) — это матрица любого размера, все элементы которой равны нулю.</p>
        <p class="text-center">$$O = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Свойство нулевой матрицы</strong>
        </div>
        <div class="card-body">
          <p>При умножении на нулевую матрицу (согласованного размера) получается нулевая матрица:</p>
          <p class="text-center">$$A \\cdot O = O \\cdot A = O$$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Пример:</strong> Нулевая матрица $2 \\times 3$:
        $$O = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$
      </div>
    </div>`
  },
  {
    "id": "matrix005",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Транспонирование матрицы",
    "theme": "Операции над матрицами",
    "text": `Что получится в результате транспонирования матрицы $A$ размера $m \\times n$?`,
    "choices": [
      "Матрица $A^T$ размера $m \\times n$, в которой строки и столбцы поменялись местами",
      "Матрица $A^T$ размера $n \\times m$, в которой строки и столбцы поменялись местами",
      "Матрица, обратная к $A$",
      "Определитель матрицы $A$"
    ],
    "answers": ["Матрица $A^T$ размера $n \\times m$, в которой строки и столбцы поменялись местами"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Транспонирование матрицы</h5>
        <p>Транспонирование — это операция, при которой строки матрицы становятся столбцами, а столбцы — строками.</p>
        <p>Если $A$ имела размер $m \\times n$, то $A^T$ имеет размер $n \\times m$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример транспонирования</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$</p>
          <p>Размер $A$: $2 \\times 3$ → Размер $A^T$: $3 \\times 2$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Свойства транспонирования:</strong>
        <ul>
          <li>$(A^T)^T = A$</li>
          <li>$(A + B)^T = A^T + B^T$</li>
          <li>$(AB)^T = B^T A^T$</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix006",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Сложение матриц",
    "theme": "Операции над матрицами",
    "text": `При каком условии можно сложить две матрицы $A$ и $B$?`,
    "choices": [
      "Если число строк $A$ равно числу столбцов $B$",
      "Если матрицы имеют одинаковый размер ($m \\times n$)",
      "Если матрицы квадратные",
      "Если определители матриц не равны нулю"
    ],
    "answers": ["Если матрицы имеют одинаковый размер ($m \\times n$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Сложение матриц</h5>
        <p>Складывать можно только матрицы <strong>одинакового размера</strong>.</p>
        <p>При сложении складываются соответствующие элементы:</p>
        <p class="text-center">$$(A + B)_{ij} = a_{ij} + b_{ij}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример сложения матриц $2 \\times 2$</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$</p>
          <p>$$A + B = \\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Свойства сложения:</strong>
        <ul>
          <li>$A + B = B + A$ (коммутативность)</li>
          <li>$(A + B) + C = A + (B + C)$ (ассоциативность)</li>
          <li>$A + O = A$ (существование нейтрального элемента)</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix007",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Умножение матрицы на число",
    "theme": "Операции над матрицами",
    "text": `Как выполняется умножение матрицы $A$ на число $\\lambda$?`,
    "choices": [
      "Каждый элемент матрицы умножается на $\\lambda$",
      "Умножается только первая строка матрицы",
      "Умножаются только элементы главной диагонали",
      "Матрица возводится в степень $\\lambda$"
    ],
    "answers": ["Каждый элемент матрицы умножается на $\\lambda$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение матрицы на число</h5>
        <p>При умножении матрицы $A$ на число $\\lambda$ каждый элемент матрицы умножается на это число:</p>
        <p class="text-center">$$(\\lambda A)_{ij} = \\lambda \\cdot a_{ij}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Пример умножения на число</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad \\lambda = 3$$</p>
          <p>$$3A = \\begin{pmatrix} 3 \\cdot 1 & 3 \\cdot 2 \\\\ 3 \\cdot 3 & 3 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Свойства:</strong>
        <ul>
          <li>$\\lambda(\\mu A) = (\\lambda\\mu)A$</li>
          <li>$(\\lambda + \\mu)A = \\lambda A + \\mu A$</li>
          <li>$\\lambda(A + B) = \\lambda A + \\lambda B$</li>
        </ul>
      </div>
    </div>`
  },
  {
    "id": "matrix008",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Умножение матриц",
    "theme": "Операции над матрицами",
    "text": `При каком условии можно умножить матрицу $A$ размера $m \\times n$ на матрицу $B$ размера $p \\times q$?`,
    "choices": [
      "Если $m = p$",
      "Если $n = q$",
      "Если $n = p$ (число столбцов $A$ равно числу строк $B$)",
      "Если матрицы квадратные"
    ],
    "answers": ["Если $n = p$ (число столбцов $A$ равно числу строк $B$)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение матриц</h5>
        <p>Умножать можно только <strong>согласованные</strong> матрицы: число столбцов первой матрицы должно равняться числу строк второй.</p>
        <p>Если $A$ имеет размер $m \\times n$, а $B$ — размер $n \\times k$, то произведение $C = A \\cdot B$ имеет размер $m \\times k$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Формула умножения</strong>
        </div>
        <div class="card-body">
          <p>Элемент $c_{ij}$ матрицы-произведения вычисляется как скалярное произведение $i$-й строки $A$ и $j$-го столбца $B$:</p>
          <p class="text-center">$$c_{ij} = \\sum_{k=1}^{n} a_{ik} \\cdot b_{kj}$$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример умножения $2 \\times 2$</strong>
        </div>
        <div class="card-body">
          <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$</p>
          <p>$$AB = \\begin{pmatrix} 1\\cdot5+2\\cdot7 & 1\\cdot6+2\\cdot8 \\\\ 3\\cdot5+4\\cdot7 & 3\\cdot6+4\\cdot8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$$</p>
        </div>
      </div>
      
      <div class="alert alert-warning mt-2">
        <strong>Важно:</strong> Умножение матриц <strong>не коммутативно</strong>! $AB \\neq BA$ в общем случае.
      </div>
    </div>`
  },
  {
    "id": "matrix009",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Диагональная матрица",
    "theme": "Виды и свойства матриц",
    "text": `Какая матрица называется диагональной?`,
    "choices": [
      "Квадратная матрица, у которой все элементы вне главной диагонали равны нулю",
      "Матрица, у которой все элементы равны нулю",
      "Матрица, у которой все элементы на главной диагонали равны единице",
      "Матрица, у которой число строк равно числу столбцов"
    ],
    "answers": ["Квадратная матрица, у которой все элементы вне главной диагонали равны нулю"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Диагональная матрица</h5>
        <p>Диагональная матрица — это квадратная матрица, у которой все элементы вне главной диагонали равны нулю.</p>
        <p class="text-center">$$D = \\begin{pmatrix} d_{1} & 0 & 0 \\\\ 0 & d_{2} & 0 \\\\ 0 & 0 & d_{3} \\end{pmatrix}$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример диагональной матрицы</strong>
            </div>
            <div class="card-body">
              <p>$$\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Частные случаи</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>Скалярная матрица: $d_1 = d_2 = \\cdots = d_n = c$</li>
                <li>Единичная матрица: $c = 1$</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },
  {
    "id": "matrix010",
    "type": "multiplechoices",
    "header": "Матрицы. Основные понятия и операции",
    "title": "Единичная и нулевая матрицы",
    "theme": "Виды и свойства матриц",
    "text": `Чему равно произведение $A \\cdot O$ для квадратной матрицы $A$ и нулевой матрицы $O$ того же размера?`,
    "choices": [
      "$A$",
      "$E$ (единичная матрица)",
      "$O$ (нулевая матрица)",
      "$A^2$"
    ],
    "answers": ["$O$ (нулевая матрица)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Умножение на нулевую матрицу</h5>
        <p>При умножении любой матрицы на нулевую матрицу (согласованного размера) результатом всегда будет нулевая матрица.</p>
        <p class="text-center">$$A \\cdot O = O \\cdot A = O$$</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Пример $2 \\times 2$</strong>
            </div>
            <div class="card-body">
              <p>$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$$</p>
              <p>$$A \\cdot O = \\begin{pmatrix} 1\\cdot0+2\\cdot0 & 1\\cdot0+2\\cdot0 \\\\ 3\\cdot0+4\\cdot0 & 3\\cdot0+4\\cdot0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = O$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">
              <strong>Аналогия с числами</strong>
            </div>
            <div class="card-body">
              <p>Нулевая матрица для умножения — это аналог <strong>нуля</strong> для чисел:</p>
              <p class="text-center">$$a \\cdot 0 = 0 \\cdot a = 0$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Для сравнения:</strong> Умножение на единичную матрицу даёт исходную матрицу: $A \\cdot E = E \\cdot A = A$.
      </div>
    </div>`
  }
,

  
 
  {
    "id": "linalg001",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Векторы и эмбеддинги",
    "theme": "Векторы в машинном обучении",
    "text": `Что такое эмбеддинг (embedding) в контексте нейросетей и RAG?`,
    "choices": [
      "Специальный язык разметки для структурирования текста",
      "Числовое представление текста, изображения или другого объекта в виде вектора фиксированной размерности",
      "База данных для хранения документов",
      "Метод сжатия изображений без потерь"
    ],
    "answers": ["Числовое представление текста, изображения или другого объекта в виде вектора фиксированной размерности"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Что такое эмбеддинг?</h5>
        <p>Эмбеддинг — это вектор чисел, который кодирует "смысл" объекта. Похожие объекты получают близкие векторы.</p>
        <p class="text-center">кот → [0.12, -0.34, 0.56, 0.78, -0.21]</p>
        <p class="text-center">кошка → [0.13, -0.35, 0.55, 0.79, -0.22]</p>
        <p class="text-center"><strong>Косинусное сходство ≈ 0.95</strong> — очень похожи!</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Почему эмбеддинги важны для RAG</strong>
        </div>
        <div class="card-body">
          <p>RAG (Retrieval-Augmented Generation) использует эмбеддинги для поиска релевантных документов:</p>
          <ol>
            <li>Каждый документ превращается в эмбеддинг и сохраняется в базе</li>
            <li>Запрос пользователя тоже превращается в эмбеддинг</li>
            <li>Поиск находит документы с самыми близкими векторами</li>
            <li>LLM отвечает, опираясь на найденные документы</li>
          </ol>
          <p>Без эмбеддингов поиск по смыслу был бы невозможен!</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Специальный язык разметки — это Markdown, HTML, XML.<br>
        • База данных для хранения документов — это векторная БД (Chroma, FAISS).<br>
        • Метод сжатия изображений — это JPEG, PNG, WebP.
      </div>
    </div>`
  },
  {
    "id": "linalg002",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Матрицы как хранилище векторов",
    "theme": "Матрицы в машинном обучении",
    "text": `Если у вас есть N = 10 000 документов, каждый из которых превращён в эмбеддинг размерности d = 384, какую размерность будет иметь матрица, хранящая все эмбеддинги?`,
    "choices": [
      "$N \\times N$ (10 000 × 10 000)",
      "$d \\times d$ (384 × 384)",
      "$N \\times d$ (10 000 × 384)",
      "$d \\times N$ (384 × 10 000)"
    ],
    "answers": ["$N \\times d$ (10 000 × 384)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Матрица эмбеддингов</h5>
        <p>В матрице строки соответствуют объектам (документам), а столбцы — координатам вектора.</p>
        <p class="text-center">Матрица $E$ размера $N \\times d$</p>
        <p>$$E = \\begin{bmatrix} e_{11} & e_{12} & \\cdots & e_{1d} \\\\ e_{21} & e_{22} & \\cdots & e_{2d} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ e_{N1} & e_{N2} & \\cdots & e_{Nd} \\end{bmatrix}$$</p>
        <p>Каждая строка $E_i$ — это эмбеддинг i-го документа.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пример для N=3, d=4</strong>
        </div>
        <div class="card-body">
          <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E = [[0.1, 0.2, 0.3, 0.4],   # документ 1
     [0.5, 0.6, 0.7, 0.8],   # документ 2
     [0.9, 1.0, 1.1, 1.2]]   # документ 3</pre>
          <p>Размер матрицы: <strong>3 × 4</strong></p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>Почему N × d, а не d × N?</strong><br>
        В большинстве библиотек (NumPy, PyTorch, TensorFlow) принято, что первая размерность — это количество объектов (batch size), а вторая — признаки. Это стандарт де-факто.
      </div>
    </div>`
  },
  {
    "id": "linalg003",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Косинусное сходство",
    "theme": "Меры близости векторов",
    "text": `Какая метрика чаще всего используется для сравнения текстовых эмбеддингов в RAG-системах и почему?`,
    "choices": [
      "Евклидово расстояние — оно показывает прямое расстояние между точками",
      "Косинусное сходство — оно измеряет угол между векторами и не зависит от их длины",
      "Манхэттенское расстояние — оно устойчиво к выбросам",
      "Расстояние Чебышёва — оно учитывает максимальную разницу по координатам"
    ],
    "answers": ["Косинусное сходство — оно измеряет угол между векторами и не зависит от их длины"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Формула косинусного сходства</h5>
        <p class="text-center">$$\\cos(\\theta) = \\frac{a \\cdot b}{||a|| \\times ||b||} = \\frac{\\sum_{i=1}^{d} a_i b_i}{\\sqrt{\\sum_{i=1}^{d} a_i^2} \\cdot \\sqrt{\\sum_{i=1}^{d} b_i^2}}$$</p>
        <p>Результат лежит в диапазоне $[-1, 1]$. Для неотрицательных эмбеддингов — $[0, 1]$.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Почему не евклидово расстояние?</strong>
        </div>
        <div class="card-body">
          <p>Евклидово расстояние $||a-b||$ зависит от длины векторов.</p>
          <p>Представьте три вектора:</p>
          <ul>
            <li><strong>a</strong> = [1, 0] (длина 1)</li>
            <li><strong>b</strong> = [10, 0] (длина 10) — коллинеарен a, но длиннее</li>
            <li><strong>c</strong> = [0, 1] (длина 1) — перпендикулярен a</li>
          </ul>
          <p>По смыслу a и b должны быть похожи (оба про одно). Но евклидово расстояние $||a-b|| = 9$ больше, чем $||a-c|| = \\sqrt{2} \\approx 1.41$.</p>
          <p><strong>Косинусное сходство:</strong> $\\cos(a,b) = 1$, $\\cos(a,c) = 0$ — правильно!</p>
        </div>
      </div>
      
      <div class="alert alert-success mt-2">
        <strong>Когда использовать евклидово расстояние?</strong><br>
        Если важна длина вектора (например, в задачах регрессии или кластеризации с однородными признаками).
      </div>
    </div>`
  },
  {
    "id": "linalg004",
    "type": "multiplechoices",
    "header": "Линейная алгебра для RAG",
    "title": "Скалярное произведение",
    "theme": "Линейная алгебра в поиске",
    "text": `В каких условиях косинусное сходство между двумя векторами эквивалентно их скалярному произведению?`,
    "choices": [
      "Если векторы имеют нулевую длину",
      "Если векторы нормализованы (приведены к единичной длине)",
      "Если векторы ортогональны друг другу",
      "Если векторы состоят только из целых чисел"
    ],
    "answers": ["Если векторы нормализованы (приведены к единичной длине)"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>Косинусное сходство и скалярное произведение</h5>
        <p class="text-center">$$\\cos(\\theta) = \\frac{a \\cdot b}{||a|| \\cdot ||b||}$$</p>
        <p>Если $||a|| = 1$ и $||b|| = 1$, то знаменатель равен 1, и остаётся только скалярное произведение:</p>
        <p class="text-center">$$\\cos(\\theta) = a \\cdot b$$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Нормализация векторов</strong>
        </div>
        <div class="card-body">
          <p>Нормализация (L2-нормализация) приводит вектор к единичной длине:</p>
          <p class="text-center">$$a_{\\text{norm}} = \\frac{a}{||a||}$$</p>
          <p>Пример:</p>
          <p>a = [3, 4], $||a|| = 5$ → a_norm = [0.6, 0.8]</p>
          <p><strong>В RAG-системах эмбеддинги часто нормализуют</strong>, чтобы ускорить поиск: поиск становится просто скалярным произведением.</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • Нулевая длина — вектор-ноль, бесполезен для поиска.<br>
        • Ортогональные векторы: $a \\cdot b = 0$, косинусное сходство = 0 (но это частный случай, а не общее правило).<br>
        • Целые числа не влияют на равенство.
      </div>
    </div>`
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


]

window.quizesSets = quizesSets;
