let quizesSets = [




  {
    "id": "functiongraph0037",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "sinus",
    "func": (x) => Math.sin(x),
    "choices": [
      "$y = x^3$ (Кубическая функция)",
      "$y = |x|$ (Функция модуля)",
      "$y = \\sin(x)$ (Тригонометрическая функция)",
      "$y = \\sqrt{x}$ (Квадратный корень)",
      "$y = \\frac{1}{x}$ (Обратная пропорциональность)"
    ],
    "answers": ["$y = \\sin(x)$ (Тригонометрическая функция)"],
    "hint": "Синусоидальная функция периодически колеблется между значениями -1 и 1."
  },


  {
    "id": "functiongraph0037",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "sinus",
    "func": (x) => Math.cos(x),
    "choices": [
      "$y = x^3$ (Кубическая функция)",
      "$y = |x|$ (Функция модуля)",
      "$y = \\sin(x)$ (Тригонометрическая функция)",
      "$y = \\sqrt{x}$ (Квадратный корень)",
      "$y = \\frac{1}{x}$ (Обратная пропорциональность)"
    ],
    "answers": ["$y = \\sin(x)$ (Тригонометрическая функция)"],
    "hint": "Синусоидальная функция периодически колеблется между значениями -1 и 1."
  },

  {
    "id": "trigonometry0071",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Тригонометрия 7",
    "theme": "Геометрия",
    "text": "Синус угла это",
    "choices": [
      "отношение противолежащего катета к гипотенузе",
      "отношение прилежащего катета к гипотенузе",
      "отношение противолежащего катета к прилежащему",
      "отношение гипотенузы к противолежащему катету",
      "отношение площадей треугольников"
    ],
    "answers": ["отношение противолежащего катета к гипотенузе"],
    "hint": `<p>Определение синуса в прямоугольном треугольнике:</p>
    <ul>
    <li><strong>Синус угла:</strong> отношение длины противолежащего катета к длине гипотенузы</li>
    <li><strong>Формула:</strong> sin(α) = противолежащий катет / гипотенуза</li>
    <li><strong>Мнемоническое правило:</strong> "Синий противолежащий" (первые буквы совпадают)</li>
    <li><strong>Пример:</strong> В треугольнике с углом 30° противолежащий катет равен половине гипотенузы, поэтому sin(30°) = 1/2</li>
    <li><strong>Область значений:</strong> Синус принимает значения от -1 до 1</li>
    </ul>`
  },



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
    "id": "sin-values-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 60°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 60^{\\circ}$?",
    "choices": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$\\frac{\\sqrt{3}}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 60°</h5>
        <p>Обратите внимание на связь с синусом 30°.</p>
      </div>
      
      $$\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Из треугольника 30°-60°-90°</strong>
            </div>
            <div class="card-body">
              <p>В таком треугольнике:</p>
              <p>Катет против 60° в $\\sqrt{3}$ раз больше катета против 30°.</p>
              <p>Если гипотенуза = 1, то катет против 60° = $\\frac{\\sqrt{3}}{2}$.</p>
              <p>$$\\sin 60^{\\circ} = \\frac{\\text{катет против 60°}}{\\text{гипотенуза}} = \\frac{\\sqrt{3}/2}{1} = \\frac{\\sqrt{3}}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Связь с косинусом 30°</strong>
            </div>
            <div class="card-body">
              <p>$$\\sin 60^{\\circ} = \\cos 30^{\\circ} = \\frac{\\sqrt{3}}{2}$$</p>
              <p>На единичной окружности точка:</p>
              <p>$$(\\cos 60^{\\circ}, \\sin 60^{\\circ}) = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$$</p>
              <p>Ордината (y) = $\\frac{\\sqrt{3}}{2}$.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Мнемоническое правило:</h6>
        <p class="mb-1">Углы 30°, 45°, 60° дают синусы:</p>
        <p class="mb-0">$$\\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}$$ (растёт с увеличением угла)</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 90°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 90^{\\circ}$?",
    "choices": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$1$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 90°</h5>
        <p>Максимальное значение синуса на единичной окружности.</p>
      </div>
      
      $$\\sin 90^{\\circ} = 1$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>На единичной окружности</strong>
            </div>
            <div class="card-body">
              <p>Угол 90° соответствует точке (0, 1).</p>
              <p>Координаты: $x = 0$, $y = 1$</p>
              <p>$$\\sin 90^{\\circ} = y = 1$$</p>
              <p>$$\\cos 90^{\\circ} = x = 0$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрический смысл</strong>
            </div>
            <div class="card-body">
              <p>В предельном случае прямоугольного треугольника:</p>
              <p>Когда угол приближается к 90°, противолежащий катет приближается к гипотенузе.</p>
              <p>$$\\sin 90^{\\circ} = \\frac{\\text{гипотенуза}}{\\text{гипотенуза}} = 1$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Запомните:</h6>
        <p class="mb-1">$$\\sin 90^{\\circ} = 1$$ - максимальное значение синуса</p>
        <p class="mb-0">$$\\cos 90^{\\circ} = 0$$</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-006",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 120°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 120^{\\circ}$?",
    "choices": [
      "$-\\frac{1}{2}$",
      "$-\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "answers": ["$\\frac{\\sqrt{3}}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 120°</h5>
        <p>Угол во второй четверти. Синус положителен во второй четверти.</p>
      </div>
      
      $$\\sin 120^{\\circ} = \\frac{\\sqrt{3}}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Через приведение к острому углу</strong>
            </div>
            <div class="card-body">
              <p>120° = 180° - 60°</p>
              <p>$$\\sin(180^{\\circ} - \\alpha) = \\sin\\alpha$$</p>
              <p>$$\\sin 120^{\\circ} = \\sin(180^{\\circ} - 60^{\\circ}) = \\sin 60^{\\circ}$$</p>
              <p>$$\\sin 120^{\\circ} = \\frac{\\sqrt{3}}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>На единичной окружности</strong>
            </div>
            <div class="card-body">
              <p>Угол 120° во второй четверти:</p>
              <p>Симметричен углу 60° относительно оси Y.</p>
              <p>Координаты: $(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$</p>
              <p>$$\\sin 120^{\\circ} = y = \\frac{\\sqrt{3}}{2}$$</p>
              <p>$$\\cos 120^{\\circ} = x = -\\frac{1}{2}$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Правило:</h6>
        <p class="mb-1">Во второй четверти (углы 90°-180°):</p>
        <p class="mb-0">$$\\sin > 0, \\quad \\cos < 0$$</p>
        <p class="mb-0">$$\\sin(180^{\\circ} - \\alpha) = \\sin\\alpha$$</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-007",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 135°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 135^{\\circ}$?",
    "choices": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$-\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "answers": ["$\\frac{\\sqrt{2}}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 135°</h5>
        <p>Угол 135° = 90° + 45° во второй четверти.</p>
      </div>
      
      $$\\sin 135^{\\circ} = \\frac{\\sqrt{2}}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Формулы приведения</strong>
            </div>
            <div class="card-body">
              <p>135° = 180° - 45°</p>
              <p>$$\\sin(180^{\\circ} - \\alpha) = \\sin\\alpha$$</p>
              <p>$$\\sin 135^{\\circ} = \\sin(180^{\\circ} - 45^{\\circ}) = \\sin 45^{\\circ}$$</p>
              <p>$$\\sin 135^{\\circ} = \\frac{\\sqrt{2}}{2}$$</p>
              <p>Или: 135° = 90° + 45°</p>
              <p>$$\\sin(90^{\\circ} + \\alpha) = \\cos\\alpha$$</p>
              <p>$$\\sin 135^{\\circ} = \\cos 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрически</strong>
            </div>
            <div class="card-body">
              <p>На единичной окружности:</p>
              <p>Угол 135° симметричен 45° относительно оси Y.</p>
              <p>Координаты: $(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$</p>
              <p>$$\\sin 135^{\\circ} = y = \\frac{\\sqrt{2}}{2}$$</p>
              <p>$$\\cos 135^{\\circ} = x = -\\frac{\\sqrt{2}}{2}$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Запомните:</h6>
        <p class="mb-1">$$\\sin 135^{\\circ} = \\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$</p>
        <p class="mb-0">$$\\cos 135^{\\circ} = -\\cos 45^{\\circ} = -\\frac{\\sqrt{2}}{2}$$</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-008",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 150°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 150^{\\circ}$?",
    "choices": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 150°</h5>
        <p>Угол 150° близок к 180°, но ещё во второй четверти.</p>
      </div>
      
      $$\\sin 150^{\\circ} = \\frac{1}{2}$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Формулы приведения</strong>
            </div>
            <div class="card-body">
              <p>150° = 180° - 30°</p>
              <p>$$\\sin(180^{\\circ} - \\alpha) = \\sin\\alpha$$</p>
              <p>$$\\sin 150^{\\circ} = \\sin(180^{\\circ} - 30^{\\circ}) = \\sin 30^{\\circ}$$</p>
              <p>$$\\sin 150^{\\circ} = \\frac{1}{2}$$</p>
              <p>Или: 150° = 90° + 60°</p>
              <p>$$\\sin(90^{\\circ} + \\alpha) = \\cos\\alpha$$</p>
              <p>$$\\sin 150^{\\circ} = \\cos 60^{\\circ} = \\frac{1}{2}$$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Симметрия</strong>
            </div>
            <div class="card-body">
              <p>Угол 150° симметричен 30° относительно оси Y.</p>
              <p>На единичной окружности:</p>
              <p>Координаты: $(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$</p>
              <p>$$\\sin 150^{\\circ} = y = \\frac{1}{2}$$</p>
              <p>$$\\cos 150^{\\circ} = x = -\\frac{\\sqrt{3}}{2}$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Закономерность:</h6>
        <p class="mb-1">Синусы углов 30°, 150°, 210°, 330° равны по модулю $\\frac{1}{2}$</p>
        <p class="mb-0">$$\\sin 30^{\\circ} = \\sin 150^{\\circ} = \\frac{1}{2}$$</p>
        <p class="mb-0">$$\\sin 210^{\\circ} = \\sin 330^{\\circ} = -\\frac{1}{2}$$</p>
      </div>
    </div>`
  },
  {
    "id": "sin-values-009",
    "type": "multiplechoices",
    "header": "Тригонометрия. Значения синуса",
    "title": "Значение синуса 180°",
    "theme": "Значения синуса",
    "text": "Чему равен $\\sin 180^{\\circ}$?",
    "choices": [
      "$-1$",
      "$-\\frac{1}{2}$",
      "$0$",
      "$\\frac{1}{2}$",
      "$1$"
    ],
    "answers": ["$0$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Синус угла 180°</h5>
        <p>Угол 180° соответствует отрицательному направлению оси X.</p>
      </div>
      
      $$\\sin 180^{\\circ} = 0$$
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>На единичной окружности</strong>
            </div>
            <div class="card-body">
              <p>Угол 180° = π радиан соответствует точке (-1, 0).</p>
              <p>Координаты: $x = -1$, $y = 0$</p>
              <p>$$\\sin 180^{\\circ} = y = 0$$</p>
              <p>$$\\cos 180^{\\circ} = x = -1$$</p>
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
              <p>$$\\sin 180^{\\circ} = \\sin(180^{\\circ} - 0^{\\circ}) = \\sin 0^{\\circ}$$</p>
              <p>$$\\sin 180^{\\circ} = 0$$</p>
              <p>Или через периодичность:</p>
              <p>$$\\sin(180^{\\circ} + \\alpha) = -\\sin\\alpha$$</p>
              <p>$$\\sin 180^{\\circ} = \\sin(180^{\\circ} + 0^{\\circ}) = -\\sin 0^{\\circ} = 0$$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <h6>💡 Запомните:</h6>
        <p class="mb-1">$$\\sin 0^{\\circ} = \\sin 180^{\\circ} = 0$$</p>
        <p class="mb-0">$$\\sin 360^{\\circ} = \\sin 0^{\\circ} = 0$$ (периодичность)</p>
        <p class="mb-0">Углы, кратные 180°, дают синус = 0</p>
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
    "id": "pi1",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Число Пи",
    "theme": "Числа",
    "text": "Чему примерно равно в виде десятичной дроби? $${var1-10}\pi$$",
    "answer": "{var1-10}*PI()",
    "hint": "$$\\pi \\approx 3.14159$$ Умножьте это число на {var1-10}<br> Например, для $$2\\pi$$ $$2 \\times 3.14 = 6.28$$",
    "randomfrom": [1, 2, 3, 4, 0.5, 1, 5]
  },

  {
    "id": "degrees1",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Градусы в радианы",
    "theme": "Числа",
    "text": "Чему равно в радианах? $${var1-10}^{\\circ}$$",
    "answer": "{var1-10}*PI()/180",
    "hint": "Для перевода градусов в радианы используйте формулу: $$\\text{радианы} = \\text{градусы} \\times \\frac{\\pi}{180}$$<br>Например, для $$90^{\\circ}$$: $$90 \\times \\frac{3.14}{180} \\approx 1.57$$",
    "randomfrom": [30, 45, 60, 90, 180, 270, 360]
  },

  {
    "id": "train_angle",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Угол по длине дуги",
    "theme": "Геометрия",
    "text": "Поезд проехал по круговой железной дороге с радиусом 1 км {var1-10} км. Какой это угол в градусах?",
    "answer": "{var1-10}*180/PI()",
    "hint": "Угол в градусах = (длина дуги / радиус) × (180°/π)<br>Так как радиус = 1 км, то угол = {var1-10} × (180/π)<br>Например, для пути 1.57 км: 1.57 × (180/3.14) ≈ 90°",
    "randomfrom": [0.785, 1.57, 3.14, 4.71, 6.28]
  },



  {
    "id": "trigonometry002",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Тригонометрия",
    "theme": "Геометрия",
    "text": "Косинус угла это",
    "choices": [
      "отношение прилежащего катета к гипотенузе",
      "отношение противолежащего катета к гипотенузе",
      "отношение прилежащего катета к противолежащему",
      "отношение гипотенузы к прилежащему катету",
      "отношение гипотенузы к противолежащему катету"
    ],
    "answers": ["отношение прилежащего катета к гипотенузе"],
    "hint": `<p>Определение косинуса в прямоугольном треугольнике:</p>
    <svg width="200" height="150" viewBox="0 0 200 150">
      <polygon points="30,120 30,30 150,120" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2"/>
      <text x="20" y="80" font-size="12" fill="#7b1fa2">α</text>
      <line x1="30" y1="120" x2="150" y2="120" stroke="#d32f2f" stroke-width="3"/>
      <text x="70" y="135" font-size="10" fill="#d32f2f">прилежащий</text>
      <line x1="30" y1="120" x2="30" y2="30" stroke="#388e3c" stroke-width="3"/>
      <text x="15" y="75" font-size="10" fill="#388e3c">противолежащий</text>
      <line x1="30" y1="30" x2="150" y2="120" stroke="#ff9800" stroke-width="3"/>
      <text x="70" y="70" font-size="10" fill="#ff9800">гипотенуза</text>
    </svg>
    <ul>
    <li><strong>Косинус угла:</strong> отношение длины прилежащего катета к длине гипотенузы</li>
    <li><strong>Формула:</strong> cos(α) = прилежащий катет / гипотенуза</li>
    <li><strong>Мнемоническое правило:</strong> "Косинус - КОроткий (прилежащий)"</li>
    <li><strong>Пример:</strong> В треугольнике с углом 60° прилежащий катет равен половине гипотенузы, поэтому cos(60°) = 1/2</li>
    <li><strong>Область значений:</strong> Косинус принимает значения от -1 до 1</li>
    </ul>`
  },

  {
    "id": "trigonometry003",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Тригонометрия",
    "theme": "Геометрия",
    "text": "Тангенс угла это",
    "choices": [
      "отношение противолежащего катета к прилежащему",
      "отношение прилежащего катета к противолежащему",
      "отношение противолежащего катета к гипотенузе",
      "отношение прилежащего катета к гипотенузе",
      "отношение гипотенузы к противолежащему катету"
    ],
    "answers": ["отношение противолежащего катета к прилежащему"],
    "hint": `<p>Определение тангенса в прямоугольном треугольнике:</p>
    <svg width="200" height="150" viewBox="0 0 200 150">
      <polygon points="30,120 30,30 150,120" fill="#e8f5e8" stroke="#2e7d32" stroke-width="2"/>
      <text x="20" y="80" font-size="12" fill="#2e7d32">α</text>
      <line x1="30" y1="120" x2="30" y2="30" stroke="#d32f2f" stroke-width="3"/>
      <text x="15" y="75" font-size="10" fill="#d32f2f">противолежащий</text>
      <line x1="30" y1="120" x2="150" y2="120" stroke="#1976d2" stroke-width="3"/>
      <text x="70" y="135" font-size="10" fill="#1976d2">прилежащий</text>
      <line x1="30" y1="30" x2="150" y2="120" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
      <text x="70" y="70" font-size="10" fill="#666">гипотенуза</text>
    </svg>
    <ul>
    <li><strong>Тангенс угла:</strong> отношение длины противолежащего катета к длине прилежащего катета</li>
    <li><strong>Формула:</strong> tg(α) = противолежащий катет / прилежащий катет</li>
    <li><strong>Мнемоническое правило:</strong> "Тангенс - Тот/Тот" (противолежащий/прилежащий)</li>
    <li><strong>Пример:</strong> В равнобедренном прямоугольном треугольнике оба катета равны, поэтому tg(45°) = 1</li>
    <li><strong>Особенность:</strong> Тангенс может принимать любые значения от -∞ до +∞</li>
    </ul>`
  },

  {
    "id": "trigonometry004",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Тригонометрия",
    "theme": "Геометрия",
    "text": "Котангенс угла это",
    "choices": [
      "отношение прилежащего катета к противолежащему",
      "отношение противолежащего катета к прилежащему",
      "отношение гипотенузы к прилежащему катету",
      "отношение гипотенузы к противолежащему катету",
      "отношение прилежащего катета к гипотенузе"
    ],
    "answers": ["отношение прилежащего катета к противолежащему"],
    "hint": `<p>Определение котангенса в прямоугольном треугольнике:</p>
    <svg width="200" height="150" viewBox="0 0 200 150">
      <polygon points="30,120 30,30 150,120" fill="#fff3e0" stroke="#ef6c00" stroke-width="2"/>
      <text x="20" y="80" font-size="12" fill="#ef6c00">α</text>
      <line x1="30" y1="120" x2="150" y2="120" stroke="#d32f2f" stroke-width="3"/>
      <text x="70" y="135" font-size="10" fill="#d32f2f">прилежащий</text>
      <line x1="30" y1="120" x2="30" y2="30" stroke="#1976d2" stroke-width="3"/>
      <text x="15" y="75" font-size="10" fill="#1976d2">противолежащий</text>
      <line x1="30" y1="30" x2="150" y2="120" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
      <text x="70" y="70" font-size="10" fill="#666">гипотенуза</text>
    </svg>
    <ul>
    <li><strong>Котангенс угла:</strong> отношение длины прилежащего катета к длине противолежащего катета</li>
    <li><strong>Формула:</strong> ctg(α) = прилежащий катет / противолежащий катет</li>
    <li><strong>Связь с тангенсом:</strong> ctg(α) = 1 / tg(α)</li>
    <li><strong>Мнемоническое правило:</strong> "Котангенс - КОроткий к длинному" (прилежащий к противолежащему)</li>
    <li><strong>Пример:</strong> В равнобедренном прямоугольном треугольнике ctg(45°) = 1</li>
    <li><strong>Особенность:</strong> Котангенс может принимать любые значения от -∞ до +∞</li>
    </ul>`
  },

  {
    "id": "geometry007",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Геометрия 26",
    "theme": "Геометрия",
    "text": "Что такое вектор?",
    "choices": [
      "направленный отрезок, имеющий длину и направление",
      "отрезок без направления",
      "числовая характеристика фигуры",
      "геометрическое место точек",
      "часть прямой между двумя точками"
    ],
    "answers": ["направленный отрезок, имеющий длину и направление"],
    "hint": `<p>Основные характеристики вектора:</p>
    <svg width="250" height="120" viewBox="0 0 250 120">
      <!-- Вектор -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f"/>
        </marker>
      </defs>
      <line x1="30" y1="80" x2="180" y2="40" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead)"/>
      
      <!-- Начальная точка -->
      <circle cx="30" cy="80" r="3" fill="#1976d2"/>
      <text x="20" y="95" font-size="12" fill="#1976d2">A (начало)</text>
      
      <!-- Конечная точка -->
      <circle cx="180" cy="40" r="3" fill="#388e3c"/>
      <text x="185" y="25" font-size="12" fill="#388e3c">B (конец)</text>
      
      <!-- Обозначение вектора -->
      <text x="100" y="50" font-size="14" fill="#d32f2f" font-weight="bold">\\vec{AB}</text>
      
      <!-- Длина -->
      <text x="100" y="90" font-size="12" fill="#7b1fa2">|\\vec{AB}| - длина</text>
      
      <!-- Направление -->
      <text x="100" y="105" font-size="12" fill="#ff9800">→ - направление</text>
    </svg>
    <ul>
    <li><strong>Вектор:</strong> Направленный отрезок, характеризуется длиной (модулем) и направлением</li>
    <li><strong>Обозначение:</strong> \\vec{AB} или жирной буквой: <strong>a</strong></li>
    <li><strong>Длина (модуль):</strong> |\\vec{AB}| - расстояние от точки A до точки B</li>
    <li><strong>Направление:</strong> Указывается стрелкой от начала к концу</li>
    <li><strong>Примеры:</strong> Сила, скорость, перемещение в физике</li>
    <li><strong>Отличие от скаляра:</strong> Вектор имеет направление, скаляр - только величину</li>
    </ul>`
  },



  {
    id: "trig001",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Синус острого угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "На рисунке изображен прямоугольный треугольник ABC (∠A = 90°). Катет AB = 4, катет AC = 3, гипотенуза BC = 5. Чему равен sin(∠B)?",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Синус острого угла в прямоугольном треугольнике равен отношению противолежащего катета к гипотенузе: $$\\sin(\\angle B) = \\frac{AC}{BC}$$",
    choices: [
      "3/5",
      "4/5",
      "3/4",
      "4/3",
      "5/3",
      "5/4"
    ],
    answers: ["3/5"]
  },
  {
    id: "trig002",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Косинус острого угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "В прямоугольном треугольнике ABC (∠A = 90°) с катетами AB = 4, AC = 3 и гипотенузой BC = 5. Чему равен cos(∠B)?",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Косинус острого угла равен отношению прилежащего катета к гипотенузе: $$\\cos(\\angle B) = \\frac{AB}{BC}$$",
    choices: [
      "3/5",
      "4/5",
      "3/4",
      "4/3",
      "5/3",
      "5/4"
    ],
    answers: ["4/5"]
  },
  {
    id: "trig003",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Тангенс острого угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Для треугольника ABC (∠A = 90°, AB = 4, AC = 3, BC = 5) определите значение tg(∠C).",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Тангенс угла равен отношению синуса к косинусу или противолежащего катета к прилежащему: $$\\tan(\\angle C) = \\frac{AB}{AC}$$",
    choices: [
      "3/4",
      "4/3",
      "3/5",
      "4/5",
      "5/4",
      "5/3"
    ],
    answers: ["4/3"]
  },
  {
    id: "trig004",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Котангенс острого угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "В прямоугольном треугольнике ABC с прямым углом A найдите ctg(∠B), если AB = 4, AC = 3.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Котангенс - величина, обратная тангенсу: $$\\ctg(\\angle B) = \\frac{AB}{AC}$$ или $$\\ctg(\\angle B) = \\frac{\\cos(\\angle B)}{\\sin(\\angle B)}$$",
    choices: [
      "3/4",
      "4/3",
      "3/5",
      "4/5",
      "5/3",
      "5/4"
    ],
    answers: ["4/3"]
  },
  {
    id: "trig005",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Основное тригонометрическое тождество",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Для угла B в треугольнике ABC проверьте выполнение основного тригонометрического тождества. Какое из выражений верно?",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Основное тригонометрическое тождество: $$\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$$. Для угла B: $$\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = 1$$",
    choices: [
      "(3/5)² + (4/5)² = 1",
      "(3/4)² + (4/3)² = 1",
      "(4/5)² + (3/4)² = 1",
      "(5/4)² + (5/3)² = 1",
      "(3/5)² + (4/3)² = 1",
      "(4/5)² + (3/5)² = 2"
    ],
    answers: ["(3/5)² + (4/5)² = 1"]
  },
  {
    id: "trig006",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Синус второго острого угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "В треугольнике ABC (∠A = 90°) найдите sin(∠C), если AB = 4, AC = 3.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Для угла C противолежащий катет - это AB, прилежащий - AC: $$\\sin(\\angle C) = \\frac{AB}{BC} = \\frac{4}{5}$$",
    choices: [
      "3/5",
      "4/5",
      "3/4",
      "4/3",
      "5/4",
      "5/3"
    ],
    answers: ["4/5"]
  },
  {
    id: "trig007",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Связь тангенсов углов",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "В прямоугольном треугольнике ABC найдите произведение tg(∠B) × tg(∠C).",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Так как ∠B + ∠C = 90°, то $$\\tan(\\angle B) \\times \\tan(\\angle C) = \\tan(\\angle B) \\times \\tan(90^\\circ - \\angle B) = 1$$",
    choices: [
      "0",
      "1",
      "3/4",
      "4/3",
      "9/16",
      "16/9"
    ],
    answers: ["1"]
  },
  {
    id: "trig008",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Вычисление через катеты",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Найдите cos(∠B), используя только длины катетов AB = 4 и AC = 3.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Сначала найдите гипотенузу по теореме Пифагора: $$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{4^2 + 3^2} = 5$$, затем $$\\cos(\\angle B) = \\frac{AB}{BC}$$",
    choices: [
      "3/√(4²+3²)",

      "3/5",
      "4/5",
      "√(4²+3²)/4",
      "√(4²+3²)/3"
    ],
    answers: ["4/5"]
  },

  {
    id: "trig008",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Вычисление через катеты",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Найдите cos(∠B), используя только длины катетов AB = 4 и AC = 3.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Сначала найдите гипотенузу по теореме Пифагора: $$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{4^2 + 3^2} = 5$$, затем $$\\cos(\\angle B) = \\frac{AB}{BC}$$",
    choices: [
      "3/√(4²+3²)",
      "4/√(4²+3²)",
      "3/5",

      "√(4²+3²)/4",
      "√(4²+3²)/3"
    ],
    answers: ["4/√(4²+3²)"]
  },

  {
    id: "trig009",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Секанс угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Определите sec(∠C) для треугольника ABC (∠A = 90°, AB = 4, AC = 3, BC = 5).",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Секанс - величина, обратная косинусу: $$\\sec(\\alpha) = \\frac{1}{\\cos(\\alpha)}$$. Для угла C: $$\\sec(\\angle C) = \\frac{1}{\\cos(\\angle C)} = \\frac{1}{\\frac{3}{5}} = \\frac{5}{3}$$",
    choices: [
      "3/5",
      "4/5",
      "5/3",
      "5/4",
      "4/3",
      "3/4"
    ],
    answers: ["5/3"]
  },
  {
    id: "trig010",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Косеканс угла",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Вычислите csc(∠B) для прямоугольного треугольника со сторонами 3, 4, 5.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Косеканс - величина, обратная синусу: $$\\csc(\\alpha) = \\frac{1}{\\sin(\\alpha)}$$. Для угла B: $$\\csc(\\angle B) = \\frac{1}{\\sin(\\angle B)} = \\frac{1}{\\frac{3}{5}} = \\frac{5}{3}$$",
    choices: [
      "3/5",
      "4/5",
      "5/3",
      "5/4",
      "3/4",
      "4/3"
    ],
    answers: ["5/3"]
  },
  {
    id: "trig011",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Сумма квадратов синусов",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Чему равна сумма sin²(∠B) + sin²(∠C) в прямоугольном треугольнике ABC?",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Используйте, что $$\\sin(\\angle C) = \\cos(\\angle B)$$, тогда $$\\sin^2(\\angle B) + \\cos^2(\\angle B) = 1$$",
    choices: [
      "0.5",
      "1",
      "1.25",
      "1.44",
      "1.8",
      "2"
    ],
    answers: ["1"]
  },

  {
    id: "trig013",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Площадь через синус",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Выразите площадь треугольника ABC через синус угла B и стороны AB и BC.",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Площадь прямоугольного треугольника можно найти как $$S = \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times AB \\times BC \\times \\sin(\\angle B)$$",
    choices: [
      "½ × AB × BC × sin(∠B)",
      "½ × AB × AC × sin(∠B)",
      "AB × BC × sin(∠B)",
      "½ × BC² × sin(∠B)",
      "½ × AB² × sin(∠B)",
      "AB × AC × sin(∠B)"
    ],
    answers: ["½ × AB × BC × sin(∠B)"]
  },
  {
    id: "trig014",
    type: "multiplechoices",
    header: "Тест по тригонометрии",
    title: "Теорема синусов",
    theme: "Тригонометрия прямоугольного треугольника",
    text: "Проверьте выполнение теоремы синусов для треугольника ABC. Какое соотношение верно?",
    "JSXGraph": "true",
    "JSXGraphType": "triangle345",
    hint: "Теорема синусов: $$\\frac{BC}{\\sin(\\angle A)} = \\frac{AC}{\\sin(\\angle B)} = \\frac{AB}{\\sin(\\angle C)}$$. Учтите, что $$\\sin(90^\\circ) = 1$$",
    choices: [
      "5/1 = 3/sin(∠B) = 4/sin(∠C)",
      "5/sin(∠A) = 3/1 = 4/1",
      "5/1 = 3/(3/5) = 4/(4/5)",
      "Все перечисленные",
      "Ни одно из перечисленных",
      "Только первое и третье"
    ],
    answers: ["5/1 = 3/(3/5) = 4/(4/5)"]
  },




  {
    "id": "trig-eq-simple-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Уравнение с sin x = 1/2",
    "theme": "Простейшие уравнения",
    "text": "Найдите все углы x от 0° до 360°, для которых sin x = 1/2",
    "choices": [
      "30° и 150°",
      "30° и 210°",
      "45° и 135°",
      "60° и 120°",
      "30° и 330°"
    ],
    "answers": ["30° и 150°"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Решение sin x = 1/2</h5>
        <p>Синус равен 1/2 для углов 30° и 150°</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Первый угол</strong>
            </div>
            <div class="card-body">
              <p>sin 30° = 1/2</p>
              <p>Это угол в первой четверти</p>
              <p>x₁ = 30°</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Второй угол</strong>
            </div>
            <div class="card-body">
              <p>Синус положителен в I и II четвертях</p>
              <p>Во второй четверти: 180° - 30° = 150°</p>
              <p>sin 150° = sin(180° - 30°) = sin 30° = 1/2</p>
              <p>x₂ = 150°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">sin x = a > 0: x₁ = arcsin a, x₂ = 180° - arcsin a</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-simple-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Уравнение с cos x = √3/2",
    "theme": "Простейшие уравнения",
    "text": "Найдите все углы x от 0° до 360°, для которых cos x = √3/2",
    "choices": [
      "30° и 150°",
      "30° и 330°",
      "60° и 300°",
      "45° и 315°",
      "60° и 120°"
    ],
    "answers": ["30° и 330°"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Решение cos x = √3/2</h5>
        <p>cos 30° = √3/2</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Первый угол</strong>
            </div>
            <div class="card-body">
              <p>cos 30° = √3/2</p>
              <p>Это угол в первой четверти</p>
              <p>x₁ = 30°</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Второй угол</strong>
            </div>
            <div class="card-body">
              <p>Косинус положителен в I и IV четвертях</p>
              <p>В четвёртой четверти: 360° - 30° = 330°</p>
              <p>cos 330° = cos(360° - 30°) = cos 30° = √3/2</p>
              <p>x₂ = 330°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">cos x = a > 0: x₁ = arccos a, x₂ = 360° - arccos a</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-simple-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Уравнение с tan x = 1",
    "theme": "Простейшие уравнения",
    "text": "Найдите все углы x от 0° до 360°, для которых tan x = 1",
    "choices": [
      "45° и 135°",
      "45° и 225°",
      "45° и 315°",
      "30° и 210°",
      "60° и 240°"
    ],
    "answers": ["45° и 225°"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Решение tan x = 1</h5>
        <p>tan 45° = 1</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Первый угол</strong>
            </div>
            <div class="card-body">
              <p>tan 45° = 1</p>
              <p>Это угол в первой четверти</p>
              <p>x₁ = 45°</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Второй угол</strong>
            </div>
            <div class="card-body">
              <p>Тангенс положителен в I и III четвертях</p>
              <p>В третьей четверти: 180° + 45° = 225°</p>
              <p>tan 225° = tan(180° + 45°) = tan 45° = 1</p>
              <p>x₂ = 225°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">tan x = a: x₁ = arctan a, x₂ = 180° + arctan a</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-simple-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Уравнение с sin x = -1/2",
    "theme": "Простейшие уравнения",
    "text": "Найдите все углы x от 0° до 360°, для которых sin x = -1/2",
    "choices": [
      "210° и 330°",
      "150° и 210°",
      "240° и 300°",
      "225° и 315°",
      "30° и 150°"
    ],
    "answers": ["210° и 330°"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Решение sin x = -1/2</h5>
        <p>sin x = -1/2</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Находим опорный угол</strong>
            </div>
            <div class="card-body">
              <p>Сначала решаем: sin x = 1/2</p>
              <p>arcsin(1/2) = 30°</p>
              <p>Это опорный угол</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Углы с отрицательным синусом</strong>
            </div>
            <div class="card-body">
              <p>Синус отрицателен в III и IV четвертях</p>
              <p>В третьей четверти: 180° + 30° = 210°</p>
              <p>В четвёртой четверти: 360° - 30° = 330°</p>
              <p>sin 210° = sin 330° = -1/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило для sin x = -a (a > 0):</h6>
        <p class="mb-0">x₁ = 180° + arcsin a, x₂ = 360° - arcsin a</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-simple-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Уравнение с cos x = -√2/2",
    "theme": "Простейшие уравнения",
    "text": "Найдите все углы x от 0° до 360°, для которых cos x = -√2/2",
    "choices": [
      "135° и 225°",
      "120° и 240°",
      "150° и 210°",
      "45° и 135°",
      "135° и 315°"
    ],
    "answers": ["135° и 225°"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Решение cos x = -√2/2</h5>
        <p>cos 45° = √2/2</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Находим опорный угол</strong>
            </div>
            <div class="card-body">
              <p>Сначала: cos x = √2/2</p>
              <p>arccos(√2/2) = 45°</p>
              <p>Это опорный угол</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Углы с отрицательным косинусом</strong>
            </div>
            <div class="card-body">
              <p>Косинус отрицателен во II и III четвертях</p>
              <p>Во второй четверти: 180° - 45° = 135°</p>
              <p>В третьей четверти: 180° + 45° = 225°</p>
              <p>cos 135° = cos 225° = -√2/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило для cos x = -a (a > 0):</h6>
        <p class="mb-0">x₁ = 180° - arccos a, x₂ = 180° + arccos a</p>
      </div>
    </div>`
  },

  {
    "id": "trig-parity-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Чётность",
    "title": "Чётность синуса",
    "theme": "Чётность функций",
    "text": "Является ли функция $f(x) = \\sin x$ чётной или нечётной?",
    "choices": [
      "Чётная: sin(-x) = sin x",
      "Нечётная: sin(-x) = -sin x",
      "Ни чётная, ни нечётная",
      "Периодическая",
      "Монотонная"
    ],
    "answers": ["Нечётная: sin(-x) = -sin x"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Чётность синуса</h5>
        <p>Функция f(x) называется нечётной, если f(-x) = -f(x) для всех x</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Графическая симметрия</strong>
            </div>
            <div class="card-body">
              <p>График синуса симметричен относительно начала координат</p>
              <p>Если точка (x, sin x) лежит на графике, то точка (-x, -sin x) тоже на графике</p>
              <p>Это свойство центральной симметрии</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры значений</strong>
            </div>
            <div class="card-body">
              <p>sin 30° = 1/2</p>
              <p>sin(-30°) = -1/2 = -sin 30°</p>
              <p>sin 45° = √2/2</p>
              <p>sin(-45°) = -√2/2 = -sin 45°</p>
              <p>sin 60° = √3/2</p>
              <p>sin(-60°) = -√3/2 = -sin 60°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">Синус - нечётная функция: sin(-x) = -sin x</p>
      </div>
    </div>`
  },
  {
    "id": "trig-parity-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Чётность",
    "title": "Чётность косинуса",
    "theme": "Чётность функций",
    "text": "Является ли функция $f(x) = \\cos x$ чётной или нечётной?",
    "choices": [
      "Чётная: cos(-x) = cos x",
      "Нечётная: cos(-x) = -cos x",
      "Ни чётная, ни нечётная",
      "Периодическая",
      "Монотонная"
    ],
    "answers": ["Чётная: cos(-x) = cos x"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Чётность косинуса</h5>
        <p>Функция f(x) называется чётной, если f(-x) = f(x) для всех x</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Графическая симметрия</strong>
            </div>
            <div class="card-body">
              <p>График косинуса симметричен относительно оси Y</p>
              <p>Если точка (x, cos x) лежит на графике, то точка (-x, cos x) тоже на графике</p>
              <p>Это свойство зеркальной симметрии</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры значений</strong>
            </div>
            <div class="card-body">
              <p>cos 30° = √3/2</p>
              <p>cos(-30°) = √3/2 = cos 30°</p>
              <p>cos 45° = √2/2</p>
              <p>cos(-45°) = √2/2 = cos 45°</p>
              <p>cos 60° = 1/2</p>
              <p>cos(-60°) = 1/2 = cos 60°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">Косинус - чётная функция: cos(-x) = cos x</p>
      </div>
    </div>`
  },
  {
    "id": "trig-parity-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Чётность",
    "title": "Чётность тангенса",
    "theme": "Чётность функций",
    "text": "Является ли функция $f(x) = \\tan x$ чётной или нечётной?",
    "choices": [
      "Чётная: tan(-x) = tan x",
      "Нечётная: tan(-x) = -tan x",
      "Ни чётная, ни нечётная",
      "Периодическая",
      "Монотонная"
    ],
    "answers": ["Нечётная: tan(-x) = -tan x"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Чётность тангенса</h5>
        <p>Тангенс определяется как отношение синуса к косинусу</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Через определение</strong>
            </div>
            <div class="card-body">
              <p>tan x = sin x / cos x</p>
              <p>tan(-x) = sin(-x) / cos(-x)</p>
              <p>sin(-x) = -sin x (синус нечётный)</p>
              <p>cos(-x) = cos x (косинус чётный)</p>
              <p>tan(-x) = (-sin x) / cos x = -tan x</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры значений</strong>
            </div>
            <div class="card-body">
              <p>tan 30° = 1/√3</p>
              <p>tan(-30°) = -1/√3 = -tan 30°</p>
              <p>tan 45° = 1</p>
              <p>tan(-45°) = -1 = -tan 45°</p>
              <p>tan 60° = √3</p>
              <p>tan(-60°) = -√3 = -tan 60°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">Тангенс - нечётная функция: tan(-x) = -tan x</p>
      </div>
    </div>`
  },
  {
    "id": "trig-parity-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Чётность",
    "title": "Чётность котангенса",
    "theme": "Чётность функций",
    "text": "Является ли функция $f(x) = \\cot x$ чётной или нечётной?",
    "choices": [
      "Чётная: cot(-x) = cot x",
      "Нечётная: cot(-x) = -cot x",
      "Ни чётная, ни нечётная",
      "Периодическая",
      "Монотонная"
    ],
    "answers": ["Нечётная: cot(-x) = -cot x"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Чётность котангенса</h5>
        <p>Котангенс определяется как отношение косинуса к синусу</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Через определение</strong>
            </div>
            <div class="card-body">
              <p>cot x = cos x / sin x</p>
              <p>cot(-x) = cos(-x) / sin(-x)</p>
              <p>cos(-x) = cos x (косинус чётный)</p>
              <p>sin(-x) = -sin x (синус нечётный)</p>
              <p>cot(-x) = cos x / (-sin x) = -cot x</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры значений</strong>
            </div>
            <div class="card-body">
              <p>cot 30° = √3</p>
              <p>cot(-30°) = -√3 = -cot 30°</p>
              <p>cot 45° = 1</p>
              <p>cot(-45°) = -1 = -cot 45°</p>
              <p>cot 60° = 1/√3</p>
              <p>cot(-60°) = -1/√3 = -cot 60°</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">Котангенс - нечётная функция: cot(-x) = -cot x</p>
      </div>
    </div>`
  },
  {
    "id": "trig-parity-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Чётность",
    "title": "Упрощение выражения",
    "theme": "Чётность функций",
    "text": "Упростите выражение: $\\sin(-x) + \\cos(-x)$",
    "choices": [
      "$\\sin x + \\cos x$",
      "$-\\sin x + \\cos x$",
      "$\\sin x - \\cos x$",
      "$-\\sin x - \\cos x$",
      "$\\cos x - \\sin x$"
    ],
    "answers": ["$-\\sin x + \\cos x$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Упрощение с использованием чётности</h5>
        <p>Используем свойства чётности синуса и косинуса</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Шаг 1: Применяем чётность синуса</strong>
            </div>
            <div class="card-body">
              <p>Синус - нечётная функция</p>
              <p>sin(-x) = -sin x</p>
              <p>Первое слагаемое: -sin x</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Шаг 2: Применяем чётность косинуса</strong>
            </div>
            <div class="card-body">
              <p>Косинус - чётная функция</p>
              <p>cos(-x) = cos x</p>
              <p>Второе слагаемое: cos x</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Ответ:</h6>
        <p class="mb-0">sin(-x) + cos(-x) = -sin x + cos x</p>
      </div>
      
      <div class="alert alert-warning border mt-3">
        <h6>📝 Запомните чётность основных функций:</h6>
        <p class="mb-1">• sin(-x) = -sin x (нечётная)</p>
        <p class="mb-1">• cos(-x) = cos x (чётная)</p>
        <p class="mb-1">• tan(-x) = -tan x (нечётная)</p>
        <p class="mb-0">• cot(-x) = -cot x (нечётная)</p>
      </div>
    </div>`
  },

  {
    "id": "trig-period-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Период",
    "title": "Основной период синуса",
    "theme": "Периодичность",
    "text": "Чему равен наименьший положительный период функции $f(x) = \\sin x$?",
    "choices": [
      "90° или π/2",
      "180° или π",
      "270° или 3π/2",
      "360° или 2π",
      "720° или 4π"
    ],
    "answers": ["360° или 2π"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Период синуса</h5>
        <p>Синус - периодическая функция. Наименьший положительный период называется основным периодом.</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка по определению</strong>
            </div>
            <div class="card-body">
              <p>Период T: f(x + T) = f(x) для всех x</p>
              <p>sin(x + 360°) = sin x</p>
              <p>sin(x + 2π) = sin x</p>
              <p>Это верно для любого угла x</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры</strong>
            </div>
            <div class="card-body">
              <p>sin 30° = 1/2</p>
              <p>sin(30° + 360°) = sin 390° = 1/2</p>
              <p>sin 45° = √2/2</p>
              <p>sin(45° + 360°) = sin 405° = √2/2</p>
              <p>sin 60° = √3/2</p>
              <p>sin(60° + 360°) = sin 420° = √3/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Основной период:</h6>
        <p class="mb-0">sin(x + 360°) = sin x или sin(x + 2π) = sin x</p>
        <p class="mb-0">Основной период синуса: 360° или 2π радиан</p>
      </div>
    </div>`
  },
  {
    "id": "trig-period-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Период",
    "title": "Основной период косинуса",
    "theme": "Периодичность",
    "text": "Чему равен наименьший положительный период функции $f(x) = \\cos x$?",
    "choices": [
      "90° или π/2",
      "180° или π",
      "270° или 3π/2",
      "360° или 2π",
      "720° или 4π"
    ],
    "answers": ["360° или 2π"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Период косинуса</h5>
        <p>Косинус имеет тот же период, что и синус.</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка по определению</strong>
            </div>
            <div class="card-body">
              <p>cos(x + 360°) = cos x</p>
              <p>cos(x + 2π) = cos x</p>
              <p>Это верно для любого угла x</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры</strong>
            </div>
            <div class="card-body">
              <p>cos 30° = √3/2</p>
              <p>cos(30° + 360°) = cos 390° = √3/2</p>
              <p>cos 45° = √2/2</p>
              <p>cos(45° + 360°) = cos 405° = √2/2</p>
              <p>cos 60° = 1/2</p>
              <p>cos(60° + 360°) = cos 420° = 1/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Основной период:</h6>
        <p class="mb-0">cos(x + 360°) = cos x или cos(x + 2π) = cos x</p>
        <p class="mb-0">Основной период косинуса: 360° или 2π радиан</p>
      </div>
    </div>`
  },
  {
    "id": "trig-period-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Период",
    "title": "Основной период тангенса",
    "theme": "Периодичность",
    "text": "Чему равен наименьший положительный период функции $f(x) = \\tan x$?",
    "choices": [
      "90° или π/2",
      "180° или π",
      "270° или 3π/2",
      "360° или 2π",
      "720° или 4π"
    ],
    "answers": ["180° или π"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Период тангенса</h5>
        <p>Тангенс имеет период в два раза меньше, чем синус и косинус.</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка по определению</strong>
            </div>
            <div class="card-body">
              <p>tan(x + 180°) = tan x</p>
              <p>tan(x + π) = tan x</p>
              <p>Это верно для любого угла x (кроме точек разрыва)</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Примеры</strong>
            </div>
            <div class="card-body">
              <p>tan 30° = 1/√3</p>
              <p>tan(30° + 180°) = tan 210° = 1/√3</p>
              <p>tan 45° = 1</p>
              <p>tan(45° + 180°) = tan 225° = 1</p>
              <p>tan 60° = √3</p>
              <p>tan(60° + 180°) = tan 240° = √3</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Основной период:</h6>
        <p class="mb-0">tan(x + 180°) = tan x или tan(x + π) = tan x</p>
        <p class="mb-0">Основной период тангенса: 180° или π радиан</p>
      </div>
    </div>`
  },
  {
    "id": "trig-period-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Период",
    "title": "Цикличность значений",
    "theme": "Периодичность",
    "text": "Чему равен sin 390°?",
    "choices": [
      "1/2",
      "√2/2",
      "√3/2",
      "1",
      "-1/2"
    ],
    "answers": ["1/2"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Использование периодичности</h5>
        <p>Углы, отличающиеся на целое число полных оборотов (360°), имеют одинаковые значения синуса.</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Шаг 1: Вычитаем полный оборот</strong>
            </div>
            <div class="card-body">
              <p>390° - 360° = 30°</p>
              <p>Так как 360° - период синуса</p>
              <p>sin 390° = sin(360° + 30°) = sin 30°</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Шаг 2: Значение синуса 30°</strong>
            </div>
            <div class="card-body">
              <p>sin 30° = 1/2</p>
              <p>Это одно из основных значений</p>
              <p>Значит, sin 390° = 1/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Общее правило:</h6>
        <p class="mb-0">sin(360°·k + α) = sin α, где k - целое число</p>
        <p class="mb-0">cos(360°·k + α) = cos α</p>
      </div>
    </div>`
  },
  {
    "id": "trig-period-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Период",
    "title": "Отрицательный угол через периодичность",
    "theme": "Периодичность",
    "text": "Чему равен cos(-30°)?",
    "choices": [
      "1/2",
      "√2/2",
      "√3/2",
      "-1/2",
      "-√3/2"
    ],
    "answers": ["√3/2"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Два способа решения</h5>
        <p>Можно использовать либо чётность, либо периодичность.</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Способ 1: Через чётность</strong>
            </div>
            <div class="card-body">
              <p>Косинус - чётная функция</p>
              <p>cos(-α) = cos α</p>
              <p>cos(-30°) = cos 30°</p>
              <p>cos 30° = √3/2</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Способ 2: Через периодичность</strong>
            </div>
            <div class="card-body">
              <p>-30° = 330° - 360°</p>
              <p>cos(-30°) = cos(330° - 360°)</p>
              <p>360° - период косинуса</p>
              <p>cos(330° - 360°) = cos 330°</p>
              <p>cos 330° = cos(360° - 30°) = cos 30° = √3/2</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Краткая таблица периодов:</h6>
        <p class="mb-1">• sin x и cos x: период 360° (2π)</p>
        <p class="mb-1">• tan x и cot x: период 180° (π)</p>
        <p class="mb-0">• sec x и csc x: период 360° (2π)</p>
      </div>
      
      <div class="alert alert-warning border mt-3">
        <h6>📝 Простые примеры для запоминания:</h6>
        <p class="mb-1">sin 390° = sin 30° = 1/2</p>
        <p class="mb-1">cos 750° = cos 30° = √3/2</p>
        <p class="mb-1">tan 225° = tan 45° = 1</p>
        <p class="mb-0">sin 450° = sin 90° = 1</p>
      </div>
    </div>`
  },

  {
    "id": "trig-eq-x-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Простейшее уравнение sin x = 0",
    "theme": "Простейшие уравнения",
    "text": "Решите уравнение: $\\sin x = 0$",
    "choices": [
      "$x = \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$"
    ],
    "answers": ["$x = \\pi n, n \\in \\mathbb{Z}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Уравнение sin x = 0</h5>
        <p>Синус равен нулю в точках пересечения графика с осью X</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Конкретные корни</strong>
            </div>
            <div class="card-body">
              <p>На промежутке [0; 2π]:</p>
              <p>sin 0 = 0</p>
              <p>sin π = 0</p>
              <p>sin 2π = 0</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Общий вид</strong>
            </div>
            <div class="card-body">
              <p>Все углы, кратные π</p>
              <p>x = 0, π, 2π, 3π, ...</p>
              <p>И отрицательные: -π, -2π, ...</p>
              <p>Общая формула: x = πn</p>
              <p>где n - любое целое число</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">sin x = 0 ⇔ x = πn, n ∈ ℤ</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-x-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Простейшее уравнение cos x = 0",
    "theme": "Простейшие уравнения",
    "text": "Решите уравнение: $\\cos x = 0$",
    "choices": [
      "$x = \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$"
    ],
    "answers": ["$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Уравнение cos x = 0</h5>
        <p>Косинус равен нулю в точках максимумов и минимумов синуса</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Конкретные корни</strong>
            </div>
            <div class="card-body">
              <p>На промежутке [0; 2π]:</p>
              <p>cos(π/2) = 0</p>
              <p>cos(3π/2) = 0</p>
              <p>Разность между корнями: π</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Общий вид</strong>
            </div>
            <div class="card-body">
              <p>Все углы вида π/2 + πn</p>
              <p>x = π/2, 3π/2, 5π/2, 7π/2, ...</p>
              <p>И отрицательные: -π/2, -3π/2, ...</p>
              <p>Общая формула: x = π/2 + πn</p>
              <p>где n - любое целое число</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">cos x = 0 ⇔ x = π/2 + πn, n ∈ ℤ</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-x-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Простейшее уравнение sin x = 1",
    "theme": "Простейшие уравнения",
    "text": "Решите уравнение: $\\sin x = 1$",
    "choices": [
      "$x = \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$"
    ],
    "answers": ["$x = \\frac{\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Уравнение sin x = 1</h5>
        <p>Синус достигает максимального значения 1</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Конкретные корни</strong>
            </div>
            <div class="card-body">
              <p>На промежутке [0; 2π]:</p>
              <p>sin(π/2) = 1</p>
              <p>Период синуса: 2π</p>
              <p>Следующий корень: π/2 + 2π = 5π/2</p>
              <p>Затем: π/2 + 4π = 9π/2</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Общий вид</strong>
            </div>
            <div class="card-body">
              <p>Все углы вида π/2 + 2πn</p>
              <p>x = π/2, 5π/2, 9π/2, ...</p>
              <p>И отрицательные: -3π/2, -7π/2, ...</p>
              <p>Общая формула: x = π/2 + 2πn</p>
              <p>где n - любое целое число</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">sin x = 1 ⇔ x = π/2 + 2πn, n ∈ ℤ</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-x-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Простейшее уравнение cos x = -1",
    "theme": "Простейшие уравнения",
    "text": "Решите уравнение: $\\cos x = -1$",
    "choices": [
      "$x = \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{2} + \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = \\frac{3\\pi}{2} + 2\\pi n, n \\in \\mathbb{Z}$"
    ],
    "answers": ["$x = \\pi + 2\\pi n, n \\in \\mathbb{Z}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Уравнение cos x = -1</h5>
        <p>Косинус достигает минимального значения -1</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Конкретные корни</strong>
            </div>
            <div class="card-body">
              <p>На промежутке [0; 2π]:</p>
              <p>cos π = -1</p>
              <p>Период косинуса: 2π</p>
              <p>Следующий корень: π + 2π = 3π</p>
              <p>Затем: π + 4π = 5π</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Общий вид</strong>
            </div>
            <div class="card-body">
              <p>Все углы вида π + 2πn</p>
              <p>x = π, 3π, 5π, ...</p>
              <p>И отрицательные: -π, -3π, ...</p>
              <p>Общая формула: x = π + 2πn</p>
              <p>где n - любое целое число</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Правило:</h6>
        <p class="mb-0">cos x = -1 ⇔ x = π + 2πn, n ∈ ℤ</p>
      </div>
    </div>`
  },
  {
    "id": "trig-eq-x-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Простейшее уравнение sin x = a",
    "theme": "Простейшие уравнения",
    "text": "Общее решение уравнения $\\sin x = a$, где $|a| \\leq 1$",
    "choices": [
      "$x = \\arcsin a + \\pi n, n \\in \\mathbb{Z}$",
      "$x = (-1)^n \\arcsin a + \\pi n, n \\in \\mathbb{Z}$",
      "$x = \\arcsin a + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = \\pm \\arcsin a + 2\\pi n, n \\in \\mathbb{Z}$",
      "$x = (-1)^n \\arcsin a + 2\\pi n, n \\in \\mathbb{Z}$"
    ],
    "answers": ["$x = (-1)^n \\arcsin a + \\pi n, n \\in \\mathbb{Z}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3" role="alert">
        <h5 class="alert-heading">📐 Общее решение sin x = a</h5>
        <p>Формула, которая работает для любого a от -1 до 1</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Два семейства корней</strong>
            </div>
            <div class="card-body">
              <p>1. x₁ = arcsin a + 2πn</p>
              <p>2. x₂ = π - arcsin a + 2πn</p>
              <p>Эти две формулы можно объединить</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Объединённая формула</strong>
            </div>
            <div class="card-body">
              <p>x = (-1)^n · arcsin a + πn</p>
              <p>При чётных n: x = arcsin a + 2πk</p>
              <p>При нечётных n: x = -arcsin a + π + 2πk</p>
              <p>где k - целое число</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border mt-3">
        <h6>💡 Важные частные случаи:</h6>
        <p class="mb-1">sin x = 0 ⇒ x = πn</p>
        <p class="mb-1">sin x = 1 ⇒ x = π/2 + 2πn</p>
        <p class="mb-0">sin x = -1 ⇒ x = -π/2 + 2πn</p>
      </div>
    </div>`
  },

  {
    "id": "trig-visual-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Основное тригонометрическое тождество",
    "theme": "Тригонометрические тождества",
    "text": "На рисунке показано основное тригонометрическое тождество. Какое равенство оно иллюстрирует?",
    "JSXGraph": "true",
    "JSXGraphType": "pythagoreanIdentity",
    "choices": [
      "sin²α + cos²α = 1",
      "sin(α+β) = sinα cosβ + cosα sinβ",
      "cos2α = cos²α - sin²α",
      "1 + tan²α = 1/cos²α",
      "sin2α = 2 sinα cosα"
    ],
    "answers": ["sin²α + cos²α = 1"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Основное тригонометрическое тождество</h5>
      <p>На единичной окружности для любой точки P(cos α, sin α) выполняется:</p>
    </div>
    
    <div class="alert alert-light border">
      <p class="mb-0">Теорема Пифагора для прямоугольного треугольника с гипотенузой = 1:</p>
      <p class="mb-0">cos²α + sin²α = 1² = 1</p>
    </div>
  </div>`
  },

  {
    "id": "trig-visual-002",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Формулы приведения для синуса",
    "theme": "Формулы приведения",
    "text": "На рисунке показаны симметричные углы. Какая формула соответствует переходу от α к π-α?",
    "JSXGraph": "true",
    "JSXGraphType": "reductionFormulas",
    "choices": [
      "sin(π-α) = sinα",
      "sin(π-α) = -sinα",
      "sin(π-α) = cosα",
      "sin(π-α) = -cosα",
      "sin(π-α) = tanα"
    ],
    "answers": ["sin(π-α) = sinα"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Формула sin(π-α) = sinα</h5>
      <p>Углы α и π-α симметричны относительно вертикальной оси</p>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Симметрии на окружности:</h6>
      <p class="mb-1">• α и π-α: одинаковая ордината (sin)</p>
      <p class="mb-1">• α и π+α: противоположные координаты</p>
      <p class="mb-0">• α и -α: симметрия относительно оси X</p>
    </div>
  </div>`
  },

  {
    "id": "trig-visual-003",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Формула синуса суммы",
    "theme": "Формулы сложения",
    "text": "На рисунке геометрически выводится формула для sin(α+β). Какая это формула?",
    "JSXGraph": "true",
    "JSXGraphType": "additionFormulas",
    "choices": [
      "sin(α+β) = sinα cosβ + cosα sinβ",
      "sin(α+β) = sinα cosβ - cosα sinβ",
      "sin(α+β) = cosα cosβ - sinα sinβ",
      "sin(α+β) = sinα sinβ + cosα cosβ",
      "sin(α+β) = (sinα + sinβ)/(1 + sinα sinβ)"
    ],
    "answers": ["sin(α+β) = sinα cosβ + cosα sinβ"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Формула синуса суммы</h5>
      <p>Геометрический вывод через проекции векторов на единичной окружности</p>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Мнемоническое правило:</h6>
      <p class="mb-1">"Син кос плюс кос син"</p>
      <p class="mb-0">sin(α+β) = sinα·cosβ + cosα·sinβ</p>
    </div>
  </div>`
  },

  {
    "id": "trig-visual-004",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Формула синуса двойного угла",
    "theme": "Формулы двойного угла",
    "text": "На рисунке показана связь между углами α и 2α. Чему равен sin 2α?",
    "JSXGraph": "true",
    "JSXGraphType": "doubleAngleFormulas",
    "choices": [
      "sin 2α = 2 sinα cosα",
      "sin 2α = sin²α - cos²α",
      "sin 2α = 2 cos²α - 1",
      "sin 2α = 1 - 2 sin²α",
      "sin 2α = (2 tanα)/(1 + tan²α)"
    ],
    "answers": ["sin 2α = 2 sinα cosα"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Формула синуса двойного угла</h5>
      <p>Получается из формулы суммы при β = α</p>
    </div>
    
    <div class="alert alert-light border">
      <h6>💡 Две основные формулы:</h6>
      <p class="mb-1">• sin 2α = 2 sinα cosα</p>
      <p class="mb-0">• cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α</p>
    </div>
  </div>`
  },

  {
    "id": "trig-visual-005",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Значения на единичной окружности",
    "theme": "Единичная окружность",
    "text": "На рисунке показана единичная окружность с основными углами. Чему равен sin 45°?",
    "JSXGraph": "true",
    "JSXGraphType": "unitCircleValues",
    "choices": [
      "0",
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    "answers": ["√2/2"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Значение sin 45°</h5>
      <p>Для угла 45° координаты на единичной окружности равны</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Координаты точки</strong>
          </div>
          <div class="card-body">
            <p>Точка на окружности под углом 45°:</p>
            <p>x = cos 45° = √2/2</p>
            <p>y = sin 45° = √2/2</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Геометрический смысл</strong>
          </div>
          <div class="card-body">
            <p>В прямоугольном треугольнике 45°-45°-90°:</p>
            <p>Катеты равны, гипотенуза = 1</p>
            <p>sin 45° = противолежащий/гипотенуза = катет/1</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
  },


  {
    "id": "trig-visual-006",
    "type": "multiplechoices",
    "header": "Тригонометрия. Визуализация",
    "title": "Косинус на единичной окружности",
    "theme": "Единичная окружность",
    "text": "На рисунке единичной окружности показаны координаты точки. Какая координата соответствует cos α?",
    "JSXGraph": "true",
    "JSXGraphType": "unitCircleValues",
    "choices": [
      "Абсцисса (x-координата)",
      "Ордината (y-координата)",
      "Радиус окружности",
      "Длина дуги",
      "Угол в радианах"
    ],
    "answers": ["Абсцисса (x-координата)"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Координаты на единичной окружности</h5>
      <p>Для точки P на единичной окружности, соответствующей углу α:</p>
    </div>
    
    <div class="alert alert-light border">
      <p class="mb-1">• P(cos α, sin α)</p>
      <p class="mb-1">• x = cos α (абсцисса)</p>
      <p class="mb-0">• y = sin α (ордината)</p>
    </div>
  </div>`
  },


  {
    "id": "triangle-cosine-001",
    "type": "multiplechoices",
    "header": "Геометрия. Треугольники",
    "title": "Теорема косинусов",
    "theme": "Теоремы синусов и косинусов",
    "text": "На рисунке показан треугольник со сторонами a, b, c и углом α. Как найти сторону a по теореме косинусов?",
    "JSXGraph": "true",
    "JSXGraphType": "triangleSolver",
    "choices": [
      "a² = b² + c² + 2bc·cosα",
      "a² = b² + c² - 2bc·cosα",
      "a² = b² - c² - 2bc·cosα",
      "a = b·cosα + c·cosβ",
      "a = √(b² + c²)"
    ],
    "answers": ["a² = b² + c² - 2bc·cosα"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Теорема косинусов</h5>
      <p>Обобщение теоремы Пифагора для произвольных треугольников</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Формулировка</strong>
          </div>
          <div class="card-body">
            <p>Квадрат стороны равен сумме квадратов двух других сторон минус удвоенное произведение этих сторон на косинус угла между ними</p>
            <p>$$a^2 = b^2 + c^2 - 2bc \\cdot \\cos\\alpha$$</p>
            <p>$$b^2 = a^2 + c^2 - 2ac \\cdot \\cos\\beta$$</p>
            <p>$$c^2 = a^2 + b^2 - 2ab \\cdot \\cos\\gamma$$</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Частные случаи</strong>
          </div>
          <div class="card-body">
            <p>Если α = 90°, то cos α = 0:</p>
            <p>$$a^2 = b^2 + c^2$$</p>
            <p>Теорема Пифагора!</p>
            <p>Если α = 0° (вырожденный треугольник):</p>
            <p>$$a^2 = b^2 + c^2 - 2bc = (b - c)^2$$</p>
            <p>$$a = |b - c|$$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Когда использовать:</h6>
      <p class="mb-1">• Чтобы найти сторону по двум сторонам и углу между ними</p>
      <p class="mb-1">• Чтобы найти угол по трём сторонам</p>
      <p class="mb-0">• Вместе с теоремой синусов для полного решения треугольников</p>
    </div>
  </div>`
  },


  {
    "id": "trig-eq-circle-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Уравнения",
    "title": "Решение уравнения sin x = a",
    "theme": "Тригонометрические уравнения",
    "text": "На рисунке показано решение уравнения $\\sin x = a$ на единичной окружности. Сколько решений имеет уравнение $\\sin x = 0.5$ на промежутке $[0; 2\\pi]$?",
    "JSXGraph": "true",
    "JSXGraphType": "trigEquationSolver",
    "choices": ["1", "2", "3", "4", "бесконечно много"],
    "answers": ["2"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Решение sin x = a на окружности</h5>
      <p>Уравнение sin x = a решается как пересечение горизонтальной линии y = a с единичной окружностью</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Количество решений</strong>
          </div>
          <div class="card-body">
            <p>Для уравнения sin x = a:</p>
            <p>• Если |a| > 1: нет решений</p>
            <p>• Если |a| = 1: одно семейство решений</p>
            <p>• Если |a| < 1: два семейства решений</p>
            <p>На промежутке [0; 2π] всегда 1 или 2 решения</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Для a = 0.5</strong>
          </div>
          <div class="card-body">
            <p>sin x = 0.5</p>
            <p>Одно решение: x₁ = arcsin(0.5) = π/6</p>
            <p>Второе решение: x₂ = π - π/6 = 5π/6</p>
            <p>На [0; 2π]: x = π/6 и x = 5π/6</p>
            <p>Все решения: x = (-1)^n·π/6 + πn</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Геометрическая интерпретация:</h6>
      <p class="mb-1">Горизонтальная линия y = a пересекает единичную окружность в двух точках</p>
      <p class="mb-0">Эти точки соответствуют углам x₁ и x₂, для которых sin x = a</p>
    </div>
  </div>`
  },


  {
    "id": "trig-graph-001",
    "type": "multiplechoices",
    "header": "Тригонометрия. Графики функций",
    "title": "Параметры синусоиды",
    "theme": "Графики тригонометрических функций",
    "text": "На рисунке показан график $y = A \\cdot \\sin(\\omega x + \\varphi)$. Что произойдёт при увеличении $\\omega$?",
    "JSXGraph": "true",
    "JSXGraphType": "trigGraphs",
    "choices": [
      "График растянется по горизонтали, период увеличится",
      "График сожмётся по горизонтали, период уменьшится",
      "Амплитуда увеличится",
      "График сместится вправо",
      "Частота колебаний уменьшится"
    ],
    "answers": ["График сожмётся по горизонтали, период уменьшится"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Параметр ω (омега)</h5>
      <p>ω - циклическая частота, влияет на период функции</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Период функции</strong>
          </div>
          <div class="card-body">
            <p>Период синуса: $T = \\frac{2\\pi}{\\omega}$</p>
            <p>При увеличении ω:</p>
            <p>• Знаменатель увеличивается</p>
            <p>• Период T уменьшается</p>
            <p>• График сжимается по горизонтали</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Частота колебаний</strong>
          </div>
          <div class="card-body">
            <p>ω связана с частотой: $f = \\frac{\\omega}{2\\pi}$</p>
            <p>Чем больше ω, тем выше частота</p>
            <p>Больше колебаний на том же промежутке</p>
            <p>График становится более "частым"</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Все параметры:</h6>
      <p class="mb-1">• A - амплитуда (растяжение по вертикали)</p>
      <p class="mb-1">• ω - частота (сжатие/растяжение по горизонтали)</p>
      <p class="mb-0">• φ - начальная фаза (сдвиг по горизонтали)</p>
    </div>
  </div>`
  },







  {
    "id": "arcsin-simple-001",
    "type": "multiplechoices",
    "header": "Арксинус. Быстрый счет",
    "title": "Чему равен arcsin 0?",
    "theme": "Арксинус",
    "text": "Вычислите: $\\arcsin 0$",
    "choices": [
      "$0$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answers": ["$0$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info" role="alert">
        <h5>📐 Ключевая идея</h5>
        <p class="mb-2"><strong>Арксинус отвечает на вопрос:</strong><br>
        "Какой угол в пределах от $-90^\\circ$ до $90^\\circ$ имеет такой синус?"</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white py-2">
          <strong>Простое правило:</strong>
        </div>
        <div class="card-body p-3">
          <p class="mb-2">$$\\arcsin 0 = 0$$</p>
          <p class="mb-0"><small>Потому что $\\sin 0 = 0$, и $0$ лежит в допустимом интервале.</small></p>
        </div>
      </div>
      
      <div class="alert alert-light border py-2">
        <p class="mb-1"><strong>💡 Запомните навсегда:</strong></p>
        <p class="mb-0">Нулевой синус → нулевой арксинус</p>
      </div>
    </div>`
},

  {
    "id": "arccos-simple-001",
    "type": "multiplechoices",
    "header": "Арккосинус. Быстрый счет",
    "title": "Чему равен arccos 0?",
    "theme": "Арккосинус",
    "text": "Вычислите: $\\arccos 0$",
    "choices": [
      "$0$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answers": ["$\\frac{\\pi}{2}$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info" role="alert">
        <h5>📐 Ключевая идея</h5>
        <p class="mb-2"><strong>Арккосинус отвечает на вопрос:</strong><br>
        "Какой угол в пределах от $0$ до $180^\\circ$ имеет такой косинус?"</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white py-2">
          <strong>Простое правило:</strong>
        </div>
        <div class="card-body p-3">
          <p class="mb-2">$$\\arccos 0 = \\frac{\\pi}{2} \\ (90^\\circ)$$</p>
          <p class="mb-0"><small>Потому что $\\cos 90^\\circ = 0$, и $90^\\circ$ лежит в допустимом интервале.</small></p>
        </div>
      </div>
      
      <div class="alert alert-light border py-2">
        <p class="mb-1"><strong>💡 Золотое правило:</strong></p>
        <ul class="mb-0 small">
          <li>$\\arcsin 0 = 0$</li>
          <li>$\\arccos 0 = \\frac{\\pi}{2}$</li>
        </ul>
      </div>
    </div>`
},

  {
    "id": "arccos-simple-002",
    "type": "multiplechoices",
    "header": "Арккосинус. Быстрый счет",
    "title": "Чему равен arccos 1?",
    "theme": "Арккосинус",
    "text": "Вычислите: $\\arccos 1$",
    "choices": [
      "$0$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answers": ["$0$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info" role="alert">
        <h5>📐 Ключевая идея</h5>
        <p class="mb-2"><strong>Арккосинус отвечает на вопрос:</strong><br>
        "Какой угол от $0$ до $180^\\circ$ имеет такой косинус?"</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white py-2">
          <strong>Простое правило:</strong>
        </div>
        <div class="card-body p-3">
          <p class="mb-2">$$\\arccos 1 = 0$$</p>
          <p class="mb-0"><small>Потому что $\\cos 0 = 1$, и $0$ лежит в допустимом интервале $[0, \\pi]$.</small></p>
        </div>
      </div>
      
      <div class="alert alert-light border py-2">
        <p class="mb-1"><strong>💡 Полезные значения:</strong></p>
        <ul class="mb-0 small">
          <li>$\\arccos 1 = 0$</li>
          <li>$\\arccos 0 = \\frac{\\pi}{2}$</li>
          <li>$\\arccos(-1) = \\pi$</li>
        </ul>
      </div>
    </div>`
},

  {
  "id": "arcsin-01",
  "type": "multiplechoices",
  "header": "Арксинус. Устный счет",
  "title": "arcsin 0",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin 0$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$0$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Нулевой синус → нулевой арксинус<br>
      $\\sin 0 = 0$ и $0$ ∈ $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin 0 = 0$
    </div>
  </div>`
},

  {
  "id": "arcsin-02",
  "type": "multiplechoices",
  "header": "Арксинус. Устный счет",
  "title": "arcsin ½",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin \\frac{1}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{6}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\sin \\frac{\\pi}{6} = \\frac{1}{2}$<br>
      И $\\frac{\\pi}{6}$ лежит в $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin \\frac{1}{2} = \\frac{\\pi}{6}$
    </div>
  </div>`
},

  {
  "id": "arcsin-03",
  "type": "multiplechoices",
  "header": "Арксинус. Устный счет",
  "title": "arcsin √2/2",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin \\frac{\\sqrt{2}}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{4}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$<br>
      И $\\frac{\\pi}{4}$ ∈ $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin \\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$
    </div>
  </div>`
},

  {
  "id": "arcsin-04",
  "type": "multiplechoices",
  "header": "Арксинус. Устный счет",
  "title": "arcsin √3/2",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin \\frac{\\sqrt{3}}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{3}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$<br>
      И $\\frac{\\pi}{3}$ ∈ $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin \\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$
    </div>
  </div>`
},

  {
  "id": "arcsin-05",
  "type": "multiplechoices",
  "header": "Арксинус. Устный счет",
  "title": "arcsin 1",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin 1$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{2}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\sin \\frac{\\pi}{2} = 1$<br>
      И $\\frac{\\pi}{2}$ — максимально возможное значение арксинуса
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin 1 = \\frac{\\pi}{2}$
    </div>
  </div>`
},

  {
  "id": "arccos-01",
  "type": "multiplechoices",
  "header": "Арккосинус. Устный счет",
  "title": "arccos 1",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos 1$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$0$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Косинус 1 только у угла 0<br>
      $\\cos 0 = 1$ и $0$ ∈ $[0, \\pi]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos 1 = 0$
    </div>
  </div>`
},

  {
  "id": "arccos-02",
  "type": "multiplechoices",
  "header": "Арккосинус. Устный счет",
  "title": "arccos √3/2",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos \\frac{\\sqrt{3}}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{6}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$<br>
      И $\\frac{\\pi}{6}$ ∈ $[0, \\pi]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos \\frac{\\sqrt{3}}{2} = \\frac{\\pi}{6}$
    </div>
  </div>`
},

  {
  "id": "arccos-03",
  "type": "multiplechoices",
  "header": "Арккосинус. Устный счет",
  "title": "arccos √2/2",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos \\frac{\\sqrt{2}}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{4}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\cos \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$<br>
      И $\\frac{\\pi}{4}$ ∈ $[0, \\pi]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos \\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$
    </div>
  </div>`
},

  {
  "id": "arccos-04",
  "type": "multiplechoices",
  "header": "Арккосинус. Устный счет",
  "title": "arccos ½",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos \\frac{1}{2}$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{3}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\cos \\frac{\\pi}{3} = \\frac{1}{2}$<br>
      И $\\frac{\\pi}{3}$ ∈ $[0, \\pi]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos \\frac{1}{2} = \\frac{\\pi}{3}$
    </div>
  </div>`
},

  {
  "id": "arccos-05",
  "type": "multiplechoices",
  "header": "Арккосинус. Устный счет",
  "title": "arccos 0",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos 0$",
  "choices": [
    "$0$",
    "$\\frac{\\pi}{6}$",
    "$\\frac{\\pi}{4}$",
    "$\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{2}$"
  ],
  "answers": ["$\\frac{\\pi}{2}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\cos \\frac{\\pi}{2} = 0$<br>
      И $\\frac{\\pi}{2}$ ∈ $[0, \\pi]$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos 0 = \\frac{\\pi}{2}$
    </div>
  </div>`
},

  {
  "id": "arcsin-neg-01",
  "type": "multiplechoices",
  "header": "Арксинус. Отрицательные значения",
  "title": "arcsin (-½)",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arcsin \\left(-\\frac{1}{2}\\right)$",
  "choices": [
    "$-\\frac{\\pi}{6}$",
    "$-\\frac{\\pi}{4}$",
    "$-\\frac{\\pi}{3}$",
    "$\\frac{\\pi}{6}$",
    "$0$"
  ],
  "answers": ["$-\\frac{\\pi}{6}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Арксинус — нечетная функция<br>
      $\\arcsin(-x) = -\\arcsin x$<br>
      Так как $\\arcsin \\frac{1}{2} = \\frac{\\pi}{6}$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arcsin\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$
    </div>
  </div>`
},

  {
  "id": "arccos-neg-01",
  "type": "multiplechoices",
  "header": "Арккосинус. Отрицательные значения",
  "title": "arccos (-½)",
  "theme": "Обратные тригонометрические функции",
  "text": "Вычислите: $\\arccos \\left(-\\frac{1}{2}\\right)$",
  "choices": [
    "$\\frac{\\pi}{3}$",
    "$\\frac{2\\pi}{3}$",
    "$\\frac{3\\pi}{4}$",
    "$\\frac{5\\pi}{6}$",
    "$\\pi$"
  ],
  "answers": ["$\\frac{2\\pi}{3}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> $\\arccos(-x) = \\pi - \\arccos x$<br>
      Так как $\\arccos \\frac{1}{2} = \\frac{\\pi}{3}$<br>
      То $\\arccos\\left(-\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$
    </div>
  </div>`
},

  {
  "id": "eq-sin-01",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение sin x = 0",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\sin x = 0$",
  "choices": [
    "$x = \\pi k$",
    "$x = \\frac{\\pi}{2} + \\pi k$",
    "$x = \\frac{\\pi}{2} + 2\\pi k$",
    "$x = \\pm \\frac{\\pi}{2} + 2\\pi k$",
    "$x = (-1)^k \\arcsin 0 + \\pi k$"
  ],
  "answers": ["$x = \\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Синус равен 0 на оси X единичной окружности<br>
      Точки: $0, \\pi, 2\\pi, ...$ и $-\\pi, -2\\pi, ...$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = \\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Все точки вида: $..., -2\\pi, -\\pi, 0, \\pi, 2\\pi, ...$</small>
    </div>
  </div>`
},

  {
  "id": "eq-cos-01",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение cos x = 1",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\cos x = 1$",
  "choices": [
    "$x = 2\\pi k$",
    "$x = \\pi + 2\\pi k$",
    "$x = \\pm 2\\pi k$",
    "$x = \\pi k$",
    "$x = \\frac{\\pi}{2} + \\pi k$"
  ],
  "answers": ["$x = 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Косинус равен 1 в крайней правой точке окружности<br>
      Точки: $..., -4\\pi, -2\\pi, 0, 2\\pi, 4\\pi, ...$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = 2\\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Четные кратные $\\pi$</small>
    </div>
  </div>`
},

{
  "id": "eq-sin-02",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение sin x = 1",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\sin x = 1$",
  "choices": [
    "$x = \\frac{\\pi}{2} + 2\\pi k$",
    "$x = \\frac{\\pi}{2} + \\pi k$",
    "$x = (-1)^k \\frac{\\pi}{2} + \\pi k$",
    "$x = \\frac{\\pi}{2} + \\frac{\\pi}{2} k$",
    "$x = \\pm \\frac{\\pi}{2} + 2\\pi k$"
  ],
  "answers": ["$x = \\frac{\\pi}{2} + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Синус равен 1 в верхней точке окружности<br>
      Угол $\\frac{\\pi}{2}$, и + полные обороты
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = \\frac{\\pi}{2} + 2\\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Только верхняя точка, а не верхняя+нижняя</small>
    </div>
  </div>`
},


  {
  "id": "eq-cos-02",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение cos x = 0",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\cos x = 0$",
  "choices": [
    "$x = \\frac{\\pi}{2} + \\pi k$",
    "$x = \\frac{\\pi}{2} + 2\\pi k$",
    "$x = \\pm \\frac{\\pi}{2} + 2\\pi k$",
    "$x = \\pi k$",
    "$x = (-1)^k \\frac{\\pi}{2} + \\pi k$"
  ],
  "answers": ["$x = \\frac{\\pi}{2} + \\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Косинус равен 0 на оси Y<br>
      Точки: верхняя ($\\frac{\\pi}{2}$) и нижняя ($\\frac{3\\pi}{2}$)<br>
      Разница между ними — $\\pi$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = \\frac{\\pi}{2} + \\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Чередование верхней и нижней точек</small>
    </div>
  </div>`
},

  {
  "id": "eq-sin-03",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение sin x = ½",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\sin x = \\frac{1}{2}$",
  "choices": [
    "$x = (-1)^k \\frac{\\pi}{6} + \\pi k$",
    "$x = \\pm \\frac{\\pi}{6} + 2\\pi k$",
    "$x = \\frac{\\pi}{6} + 2\\pi k$",
    "$x = \\frac{\\pi}{6} + \\pi k$",
    "$x = \\frac{\\pi}{6} \\text{ или } \\frac{5\\pi}{6}$"
  ],
  "answers": ["$x = (-1)^k \\frac{\\pi}{6} + \\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило для sin x = a:</strong><br>
      1. Первая серия: $x_1 = \\arcsin a + 2\\pi k$<br>
      2. Вторая серия: $x_2 = \\pi - \\arcsin a + 2\\pi k$<br>
      Можно объединить: $x = (-1)^k \\arcsin a + \\pi k$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = (-1)^k \\frac{\\pi}{6} + \\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Для k=0: $\\frac{\\pi}{6}$, для k=1: $\\frac{5\\pi}{6}$, и т.д.</small>
    </div>
  </div>`
},

  {
  "id": "eq-cos-03",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение cos x = ½",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\cos x = \\frac{1}{2}$",
  "choices": [
    "$x = \\pm \\frac{\\pi}{3} + 2\\pi k$",
    "$x = \\frac{\\pi}{3} + 2\\pi k$",
    "$x = (-1)^k \\frac{\\pi}{3} + \\pi k$",
    "$x = \\pm \\frac{\\pi}{6} + 2\\pi k$",
    "$x = \\frac{\\pi}{3} \\text{ или } \\frac{5\\pi}{3}$"
  ],
  "answers": ["$x = \\pm \\frac{\\pi}{3} + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило для cos x = a:</strong><br>
      Косинус четный: $\\cos(\\alpha) = \\cos(-\\alpha)$<br>
      $\\arccos \\frac{1}{2} = \\frac{\\pi}{3}$<br>
      Значит решения: $\\frac{\\pi}{3}$ и $-\\frac{\\pi}{3}$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = \\pm \\frac{\\pi}{3} + 2\\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Две симметричные точки относительно оси X</small>
    </div>
  </div>`
},

{
  "id": "ineq-sin-01",
  "type": "multiplechoices",
  "header": "Тригонометрические неравенства. Устный счет",
  "title": "Неравенство sin x > 0",
  "theme": "Тригонометрические неравенства",
  "text": "Решите неравенство: $\\sin x > 0$",
  "choices": [
    "$2\\pi k < x < \\pi + 2\\pi k$",
    "$\\pi k < x < \\pi + \\pi k$",
    "$-\\frac{\\pi}{2} + 2\\pi k < x < \\frac{\\pi}{2} + 2\\pi k$",
    "$0 + 2\\pi k < x < \\pi + 2\\pi k$",
    "$\\frac{\\pi}{2} + 2\\pi k < x < \\frac{3\\pi}{2} + 2\\pi k$"
  ],
  "answers": ["$2\\pi k < x < \\pi + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Синус положителен в верхней полуплоскости<br>
      От 0 до $\\pi$ (исключая края)
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $2\\pi k < x < \\pi + 2\\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Все интервалы от начала до середины окружности</small>
    </div>
  </div>`
},







{
  "id": "ineq-cos-01",
  "type": "multiplechoices",
  "header": "Тригонометрические неравенства. Устный счет",
  "title": "Неравенство cos x ≥ ½",
  "theme": "Тригонометрические неравенства",
  "text": "Решите неравенство: $\\cos x \\geq \\frac{1}{2}$",
  "choices": [
    "$-\\frac{\\pi}{3} + 2\\pi k \\leq x \\leq \\frac{\\pi}{3} + 2\\pi k$",
    "$\\frac{\\pi}{3} + 2\\pi k \\leq x \\leq \\frac{5\\pi}{3} + 2\\pi k$",
    "$\\frac{\\pi}{3} + 2\\pi k \\leq x \\leq \\frac{2\\pi}{3} + 2\\pi k$",
    "$-\\frac{\\pi}{6} + 2\\pi k \\leq x \\leq \\frac{\\pi}{6} + 2\\pi k$",
    "$0 + 2\\pi k \\leq x \\leq \\frac{\\pi}{3} + 2\\pi k$"
  ],
  "answers": ["$-\\frac{\\pi}{3} + 2\\pi k \\leq x \\leq \\frac{\\pi}{3} + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Косинус ≥ ½ в центральной части окружности<br>
      $\\cos x = \\frac{1}{2}$ при $x = \\pm \\frac{\\pi}{3}$<br>
      Между этими точками косинус больше
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $-\\frac{\\pi}{3} + 2\\pi k \\leq x \\leq \\frac{\\pi}{3} + 2\\pi k$<br>
      <small>Симметричный интервал около 0</small>
    </div>
  </div>`
},



{
  "id": "ineq-sin-02",
  "type": "multiplechoices",
  "header": "Тригонометрические неравенства. Устный счет",
  "title": "Неравенство sin x ≤ √2/2",
  "theme": "Тригонометрические неравенства",
  "text": "Решите неравенство: $\\sin x \\leq \\frac{\\sqrt{2}}{2}$",
  "choices": [
    "$-\\frac{3\\pi}{4} + 2\\pi k \\leq x \\leq \\frac{\\pi}{4} + 2\\pi k$",
    "$\\frac{\\pi}{4} + 2\\pi k \\leq x \\leq \\frac{3\\pi}{4} + 2\\pi k$",
    "$\\frac{\\pi}{4} + \\pi k \\leq x \\leq \\frac{3\\pi}{4} + \\pi k$",
    "$0 + 2\\pi k \\leq x \\leq \\frac{\\pi}{4} + 2\\pi k$",
    "$x \\leq \\frac{\\pi}{4} + 2\\pi k$"
  ],
  "answers": ["$-\\frac{3\\pi}{4} + 2\\pi k \\leq x \\leq \\frac{\\pi}{4} + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Алгоритм:</strong><br>
      1. $\\sin x = \\frac{\\sqrt{2}}{2}$ при $x = \\frac{\\pi}{4}$ и $x = \\frac{3\\pi}{4}$<br>
      2. Синус меньше между этими точками? НЕТ!<br>
      3. Синус меньше в нижней части и по краям
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $-\\frac{3\\pi}{4} + 2\\pi k \\leq x \\leq \\frac{\\pi}{4} + 2\\pi k$<br>
      <small>Интервал от $\\frac{5\\pi}{4}$ до $\\frac{9\\pi}{4}$ (но сдвинутый)</small>
    </div>
  </div>`
},





{
  "id": "ineq-cos-02",
  "type": "multiplechoices",
  "header": "Тригонометрические неравенства. Устный счет",
  "title": "Неравенство cos x < 0",
  "theme": "Тригонометрические неравенства",
  "text": "Решите неравенство: $\\cos x < 0$",
  "choices": [
    "$\\frac{\\pi}{2} + 2\\pi k < x < \\frac{3\\pi}{2} + 2\\pi k$",
    "$\\frac{\\pi}{2} + \\pi k < x < \\frac{3\\pi}{2} + \\pi k$",
    "$\\pi k < x < \\pi + \\pi k$",
    "$\\frac{\\pi}{2} + 2\\pi k < x < \\pi + 2\\pi k$",
    "$0 + 2\\pi k < x < \\pi + 2\\pi k$"
  ],
  "answers": ["$\\frac{\\pi}{2} + 2\\pi k < x < \\frac{3\\pi}{2} + 2\\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило:</strong> Косинус отрицателен во второй и третьей четвертях<br>
      От $\\frac{\\pi}{2}$ до $\\frac{3\\pi}{2}$ (исключая края)
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $\\frac{\\pi}{2} + 2\\pi k < x < \\frac{3\\pi}{2} + 2\\pi k$<br>
      <small>Левая половина окружности</small>
    </div>
  </div>`
},







{
  "id": "eq-tg-01",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение tg x = 1",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\tan x = 1$",
  "choices": [
    "$x = \\frac{\\pi}{4} + \\pi k$",
    "$x = \\frac{\\pi}{4} + 2\\pi k$",
    "$x = \\pm \\frac{\\pi}{4} + 2\\pi k$",
    "$x = \\frac{\\pi}{4} + \\frac{\\pi}{2} k$",
    "$x = (-1)^k \\frac{\\pi}{4} + \\pi k$"
  ],
  "answers": ["$x = \\frac{\\pi}{4} + \\pi k$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Правило для тангенса:</strong><br>
      Тангенс имеет период $\\pi$ (а не $2\\pi$!)<br>
      $\\arctan 1 = \\frac{\\pi}{4}$
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = \\frac{\\pi}{4} + \\pi k, \\ k \\in \\mathbb{Z}$<br>
      <small>Первый и третий квадранты (45° и 225°)</small>
    </div>
  </div>`
},



{
  "id": "eq-sin-neg-01",
  "type": "multiplechoices",
  "header": "Тригонометрические уравнения. Устный счет",
  "title": "Уравнение sin x = -1",
  "theme": "Тригонометрические уравнения",
  "text": "Решите уравнение: $\\sin x = -1$",
  "choices": [
    "$x = -\\frac{\\pi}{2} + 2\\pi k$",
    "$x = \\frac{3\\pi}{2} + 2\\pi k$",
    "$x = \\frac{\\pi}{2} + \\pi k$",
    "$x = (-1)^k (-\\frac{\\pi}{2}) + \\pi k$",
    "оба первых варианта верны"
  ],
  "answers": ["оба первых варианта верны"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-2" role="alert">
      <strong>📐 Важно:</strong> $-\\frac{\\pi}{2}$ и $\\frac{3\\pi}{2}$ — одна и та же точка!<br>
      Синус равен -1 в самой нижней точке окружности
    </div>
    <div class="alert alert-success">
      <strong>✓ Ответ:</strong> $x = -\\frac{\\pi}{2} + 2\\pi k$ ИЛИ $x = \\frac{3\\pi}{2} + 2\\pi k$<br>
      <small>Это эквивалентные записи</small>
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
    id: "vec_adv001",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Нахождение вектора по углу и длине",
    theme: "Векторы на плоскости",
    text: "Вектор имеет длину 5 и образует угол 53° с осью X. Оцените его проекции.",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Используйте формулы: $$x = |\\vec{v}|\\cos\\alpha, \\quad y = |\\vec{v}|\\sin\\alpha$$. cos53° ≈ 0.6, sin53° ≈ 0.8",
    choices: [
      "x ≈ 3, y ≈ 4",
      "x ≈ 4, y ≈ 3",
      "x ≈ 2.5, y ≈ 4.33",
      "x ≈ 4.33, y ≈ 2.5",
      "x ≈ 0, y ≈ 5",
      "x ≈ 5, y ≈ 0"
    ],
    answers: ["x ≈ 3, y ≈ 4"]
  },
  {
    id: "vec_adv002",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Вектор с заданными проекциями",
    theme: "Векторы на плоскости",
    text: "Вектор имеет проекцию на ось X = -3, а его длина равна 5. Какие значения может иметь проекция на ось Y?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Из формулы длины: $$y = \\pm\\sqrt{|\\vec{v}|^2 - x^2} = \\pm\\sqrt{25 - 9} = \\pm\\sqrt{16} = \\pm4$$",
    choices: [
      "4 или -4",
      "3 или -3",
      "5 или -5",
      "2 или -2",
      "Только 4",
      "Только -4"
    ],
    answers: ["4 или -4"]
  },
  {
    id: "vec_adv003",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Минимальная длина при заданной проекции",
    theme: "Векторы на плоскости",
    text: "Вектор имеет проекцию на ось X = 3. Какова минимально возможная длина такого вектора?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Длина минимальна, когда проекция на ось Y = 0: $$|\\vec{v}|_{min} = \\sqrt{3^2 + 0^2} = 3$$",
    choices: [
      "3",
      "0",
      "√3",
      "9",
      "Бесконечность",
      "Зависит от проекции на Y"
    ],
    answers: ["3"]
  },
  {
    id: "vec_adv004",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Максимальная длина при фиксированной сумме проекций",
    theme: "Векторы на плоскости",
    text: "Сумма проекций вектора на оси X и Y равна 6. Какова максимальная длина такого вектора?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Максимум достигается при x = y = 3: $$|\\vec{v}|_{max} = \\sqrt{3^2 + 3^2} = 3\\sqrt{2} \\approx 4.24$$",
    choices: [
      "3√2 ≈ 4.24",
      "6",
      "√12 ≈ 3.46",
      "√18 ≈ 4.24",
      "√36 = 6",
      "12"
    ],
    answers: ["3√2 ≈ 4.24", "√18 ≈ 4.24"]
  },
  {
    id: "vec_adv005",
    type: "multiplechoices",
    header: "Тест по векторам",
    title: "Угол между вектором и его проекцией",
    theme: "Векторы на плоскости",
    text: "Вектор v = (4, 3). Чему равен угол между вектором и его проекцией на ось X?",
    JSXGraph: "true",
    JSXGraphType: "interactiveVectors",
    hint: "Проекция на ось X: (4, 0). Косинус угла: $$\\cos\\theta = \\frac{4\\cdot4 + 3\\cdot0}{5\\cdot4} = \\frac{16}{20} = 0.8 \\Rightarrow \\theta \\approx 36.9^\\circ$$",
    choices: [
      "≈ 36.9°",
      "≈ 53.1°",
      "0°",
      "90°",
      "45°",
      "180°"
    ],
    answers: ["≈ 36.9°"]
  },














































  {
    "id": "cos001",
    "type": "multiplechoices",
    "header": "Планиметрия. Треугольники",
    "title": "Применение теоремы косинусов",
    "theme": "Теорема косинусов",
    "text": "В треугольнике $ABC$ известны стороны $AB = 5$, $BC = 7$ и угол $\\angle B = 60^{\\circ}$. Чему равна сторона $AC$?",
    "choices": [
      "$\\sqrt{19}$",
      "$\\sqrt{39}$",
      "$\\sqrt{49}$",
      "$\\sqrt{59}$",
      "$\\sqrt{79}$"
    ],
    "answers": ["$\\sqrt{39}$"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Теорема косинусов</h5>
      <p class="mb-2">Для любого треугольника со сторонами <strong>a, b, c</strong> и углом <strong>γ</strong> против стороны <strong>c</strong>:</p>
    </div>
    
    $$c^2 = a^2 + b^2 - 2ab \\cdot \\cos(\\gamma)$$
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Шаг 1: Определим стороны и угол</strong>
          </div>
          <div class="card-body">
            <p>Дано: $AB = 5$, $BC = 7$, угол $B = 60^{\\circ}$</p>
            <p>Сторона $AC$ лежит <strong>против угла B</strong>, поэтому:</p>
            <ul>
              <li>$a = BC = 7$ (против угла A)</li>
              <li>$b = AC = ?$ (против угла B)</li>
              <li>$c = AB = 5$ (против угла C)</li>
              <li>Угол $\\gamma = \\angle B = 60^{\\circ}$</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Шаг 2: Применяем теорему</strong>
          </div>
          <div class="card-body">
            <p>Для стороны $AC$ (обозначим её как $b$):</p>
            $$b^2 = a^2 + c^2 - 2ac \\cdot \\cos(\\angle B)$$
            $$AC^2 = 7^2 + 5^2 - 2 \\cdot 7 \\cdot 5 \\cdot \\cos 60^{\\circ}$$
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
        <div class="card border-warning">
          <div class="card-header bg-warning">
            <strong>Шаг 3: Вычисляем</strong>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                $$AC^2 = 49 + 25 - 2 \\cdot 7 \\cdot 5 \\cdot \\frac{1}{2}$$
                $$AC^2 = 74 - 35$$
                $$AC^2 = 39$$
              </div>
              <div class="col-md-6">
                <div class="alert alert-light border">
                  <p><strong>Ключевые значения:</strong></p>
                  $$\\cos 60^{\\circ} = \\frac{1}{2}$$
                  $$2 \\cdot 7 \\cdot 5 = 70$$
                  $$70 \\cdot \\frac{1}{2} = 35$$
                </div>
              </div>
            </div>
            <hr>
            <h5 class="text-center text-success mt-3">
              <strong>Ответ:</strong>
            </h5>
            $$AC = \\sqrt{39}$$
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-3 p-3 bg-light border rounded">
      <h6>📝 <strong>Краткое объяснение теоремы:</strong></h6>
      <ul class="mb-0">
        <li>Обобщает теорему Пифагора для <strong>любых треугольников</strong></li>
        <li>Позволяет найти сторону по <strong>двум сторонам и углу между ними</strong></li>
        <li>Если угол = 90°, то $\\cos 90^{\\circ} = 0$ и получаем $$c^2 = a^2 + b^2$$ (теорема Пифагора)</li>
        <li>Также позволяет найти угол по трём сторонам</li>
      </ul>
    </div>
  </div>`
  },

  {
    "id": "sin001",
    "type": "multiplechoices",
    "header": "Планиметрия. Треугольники",
    "title": "Применение теоремы синусов",
    "theme": "Теорема синусов",
    "text": "В треугольнике $ABC$ известны сторона $BC = 8$, угол $\\angle A = 30^{\\circ}$ и угол $\\angle B = 45^{\\circ}$. Чему равна сторона $AC$?",
    "choices": [
      "$4\\sqrt{2}$",
      "$4\\sqrt{3}$",
      "$8\\sqrt{2}$",
      "$8\\sqrt{3}$",
      "$16$"
    ],
    "answers": ["$8\\sqrt{2}$"],
    "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Теорема синусов</h5>
      <p class="mb-2">Для любого треугольника со сторонами <strong>a, b, c</strong> и противолежащими углами <strong>α, β, γ</strong>:</p>
    </div>
    
    $$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2R$$
    
    <p class="mb-3">где <strong>R</strong> - радиус описанной окружности.</p>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Шаг 1: Определим данные</strong>
          </div>
          <div class="card-body">
            <p>Дано: $BC = 8$, $\\angle A = 30^{\\circ}$, $\\angle B = 45^{\\circ}$</p>
            <p>Обозначим:</p>
            <ul>
              <li>$a = BC = 8$ (против угла A)</li>
              <li>$\\alpha = \\angle A = 30^{\\circ}$</li>
              <li>$b = AC = ?$ (против угла B)</li>
              <li>$\\beta = \\angle B = 45^{\\circ}$</li>
            </ul>
            <p>Найдём угол C:</p>
            $$\\angle C = 180^{\\circ} - \\angle A - \\angle B = 180^{\\circ} - 30^{\\circ} - 45^{\\circ} = 105^{\\circ}$$
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Шаг 2: Применяем теорему синусов</strong>
          </div>
          <div class="card-body">
            <p>Для сторон $BC$ и $AC$ и противолежащих им углов:</p>
            $$\\frac{BC}{\\sin A} = \\frac{AC}{\\sin B}$$
            $$\\frac{8}{\\sin 30^{\\circ}} = \\frac{AC}{\\sin 45^{\\circ}}$$
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
        <div class="card border-warning">
          <div class="card-header bg-warning">
            <strong>Шаг 3: Вычисляем</strong>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <p>Из пропорции:</p>
                $$AC = \\frac{8 \\cdot \\sin 45^{\\circ}}{\\sin 30^{\\circ}}$$
                $$AC = \\frac{8 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}}$$
                $$AC = \\frac{8 \\cdot \\sqrt{2}}{2} \\cdot \\frac{2}{1}$$
              </div>
              <div class="col-md-6">
                <div class="alert alert-light border">
                  <p><strong>Ключевые значения:</strong></p>
                  $$\\sin 30^{\\circ} = \\frac{1}{2}$$
                  $$\\sin 45^{\\circ} = \\frac{\\sqrt{2}}{2}$$
                  <p>Деление на дробь $\\frac{1}{2}$ равно умножению на 2</p>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12">
                $$AC = 8 \\cdot \\sqrt{2} = 8\\sqrt{2}$$
              </div>
            </div>
            <hr>
            <h5 class="text-center text-success mt-3">
              <strong>Ответ:</strong>
            </h5>
            $$AC = 8\\sqrt{2}$$
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-3 p-3 bg-light border rounded">
      <h6>📝 <strong>Краткое объяснение теоремы синусов:</strong></h6>
      <ul class="mb-0">
        <li>Отношение стороны к синусу противолежащего угла <strong>постоянно</strong> для всех сторон треугольника</li>
        <li>Это отношение равно <strong>диаметру описанной окружности</strong> (2R)</li>
        <li>Позволяет найти:
          <ul>
            <li>Сторону по двум углам и стороне</li>
            <li>Угол по двум сторонам и углу</li>
            <li>Радиус описанной окружности</li>
          </ul>
        </li>
        <li>Особенно полезна для <strong>непрямоугольных треугольников</strong></li>
      </ul>
    </div>
  </div>`
  },



  {
  "id": "physics-trig-008",
  "type": "multiplechoices",
  "header": "Физика. Кинематика",
  "title": "Относительная скорость при переправе",
  "theme": "Применение тригонометрии в физике",
  "text": "Лодка переплывает реку шириной L. Скорость лодки относительно воды v, скорость течения u. Чтобы переплыть перпендикулярно берегам, под каким углом α к берегу должна плыть лодка?",
  "choices": [
    "$\\sin\\alpha = \\frac{u}{v}$",
    "$\\cos\\alpha = \\frac{u}{v}$",
    "$\\tan\\alpha = \\frac{u}{v}$",
    "$\\sin\\alpha = \\frac{v}{u}$",
    "$\\cos\\alpha = \\frac{v}{u}$"
  ],
  "answers": ["$\\sin\\alpha = \\frac{u}{v}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Сложение скоростей</h5>
      <p>Скорость лодки относительно берега = скорость лодки относительно воды + скорость течения</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Условие задачи</strong>
          </div>
          <div class="card-body">
            <p>Хотим: скорость относительно берега ⊥ берегу</p>
            <p>Скорость лодки относительно воды: v</p>
            <p>Направлена под углом α к берегу</p>
            <p>Скорость течения: u (вдоль берега)</p>
            <p>Скорость относительно берега: $\\vec{v}_\\text{бер} = \\vec{v} + \\vec{u}$</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Решение</strong>
          </div>
          <div class="card-body">
            <p>Разложим v на составляющие:</p>
            <p>Поперёк реки: $v_\\perp = v \\cdot \\sin\\alpha$</p>
            <p>Вдоль реки: $v_\\parallel = v \\cdot \\cos\\alpha$</p>
            <p>Скорость вдоль берега должна компенсировать течение:</p>
            <p>$$v \\cdot \\cos\\alpha - u = 0$$</p>
            <p>Ой, не так! Для перпендикулярной переправы:</p>
            <p>$$v \\cdot \\sin\\alpha = v_\\text{бер}$$</p>
            <p>$$v \\cdot \\cos\\alpha = u$$</p>
            <p>Правильный ответ: $\\sin\\alpha = \\frac{u}{v}$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Три случая переправы:</h6>
      <p class="mb-1">1. Наименьшее время: α = 90° (прямо к противоположному берегу)</p>
      <p class="mb-1">2. Кратчайший путь: α такой, что $\\sin\\alpha = \\frac{u}{v}$</p>
      <p class="mb-0">3. Если u > v: кратчайший путь невозможен</p>
    </div>
  </div>`
},


{
  "id": "physics-trig-007",
  "type": "multiplechoices",
  "header": "Физика. Теплота",
  "title": "Эффективная площадь теплопередачи",
  "theme": "Применение тригонометрии в физике",
  "text": "Пластина площадью S освещается солнечными лучами под углом α. Как найти эффективную площадь, воспринимающую тепло?",
  "choices": [
    "$S_\\text{эфф} = S \\cdot \\cos\\alpha$",
    "$S_\\text{эфф} = S \\cdot \\sin\\alpha$",
    "$S_\\text{эфф} = S \\cdot \\tan\\alpha$",
    "$S_\\text{эфф} = \\frac{S}{\\cos\\alpha}$",
    "$S_\\text{эфф} = \\frac{S}{\\sin\\alpha}$"
  ],
  "answers": ["$S_\\text{эфф} = S \\cdot \\cos\\alpha$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Проекция площади</h5>
      <p>Эффективная площадь - проекция реальной площади на плоскость, перпендикулярную лучам</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Физический смысл</strong>
          </div>
          <div class="card-body">
            <p>При α = 0°: лучи падают перпендикулярно</p>
            <p>cos 0° = 1 ⇒ S_эфф = S (вся площадь работает)</p>
            <p>При α = 60°: cos 60° = 0.5</p>
            <p>S_эфф = 0.5S (половина эффективности)</p>
            <p>При α = 90°: лучи скользят вдоль поверхности</p>
            <p>cos 90° = 0 ⇒ S_эфф = 0 (нет нагрева)</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Практическое применение</strong>
          </div>
          <div class="card-body">
            <p>1. Солнечные батареи: наклоняют к солнцу</p>
            <p>2. Отопление: окна зимой</p>
            <p>3. Сельское хозяйство: освещённость растений</p>
            <p>4. Архитектура: проектирование освещения</p>
            <p>Мощность нагрева:</p>
            <p>$$P = I \\cdot S \\cdot \\cos\\alpha$$</p>
            <p>где I - интенсивность излучения</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Косинусный закон Ламберта:</h6>
      <p class="mb-1">Интенсивность излучения пропорциональна косинусу угла падения</p>
      <p class="mb-0">$$I_\\text{прин} = I_0 \\cdot \\cos\\alpha$$</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-006",
  "type": "multiplechoices",
  "header": "Физика. Электричество",
  "title": "Сила взаимодействия зарядов на расстоянии",
  "theme": "Применение тригонометрии в физике",
  "text": "Три одинаковых заряда q расположены в вершинах равностороннего треугольника со стороной a. Как найти силу, действующую на один заряд со стороны двух других?",
  "choices": [
    "$F = \\frac{kq^2}{a^2} \\cdot \\sqrt{3}$",
    "$F = \\frac{kq^2}{a^2} \\cdot \\cos 60^\\circ$",
    "$F = \\frac{kq^2}{a^2} \\cdot \\sin 60^\\circ$",
    "$F = \\frac{kq^2}{a^2} \\cdot 2\\cos 30^\\circ$",
    "$F = \\frac{2kq^2}{a^2} \\cdot \\cos 60^\\circ$"
  ],
  "answers": ["$F = \\frac{kq^2}{a^2} \\cdot \\sqrt{3}$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Сложение сил Кулона</h5>
      <p>Силы складываются векторно, нужно использовать тригонометрию</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Решение</strong>
          </div>
          <div class="card-body">
            <p>1. Сила от одного соседнего заряда:</p>
            <p>$$F_1 = \\frac{kq^2}{a^2}$$</p>
            <p>2. Две такие силы действуют под углом 60°</p>
            <p>3. Результирующая сила по теореме косинусов:</p>
            <p>$$F = \\sqrt{F_1^2 + F_1^2 + 2F_1F_1\\cos 60^\\circ}$$</p>
            <p>$$F = F_1 \\sqrt{2 + 2\\cdot\\frac{1}{2}} = F_1\\sqrt{3}$$</p>
            <p>$$F = \\frac{kq^2}{a^2} \\cdot \\sqrt{3}$$</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Альтернативное решение</strong>
          </div>
          <div class="card-body">
            <p>Можно сложить проекции:</p>
            <p>Горизонтальные составляющие:</p>
            <p>$$F_x = F_1 + F_1\\cos 60^\\circ = F_1(1 + \\frac{1}{2})$$</p>
            <p>Вертикальные составляющие:</p>
            <p>$$F_y = F_1\\sin 60^\\circ - F_1\\sin 60^\\circ = 0$$</p>
            <p>Итог: $F = F_x = \\frac{3}{2}F_1$</p>
            <p>Ой, ошибка! Вертикальные не компенсируются!</p>
            <p>Правильно: $F = \\sqrt{3}F_1$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Важные углы в задачах:</h6>
      <p class="mb-1">• 0° и 180°: силы вдоль одной прямой</p>
      <p class="mb-1">• 90°: теорема Пифагора</p>
      <p class="mb-1">• 60°: равносторонний треугольник</p>
      <p class="mb-0">• 120°: правильная геометрия</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-005",
  "type": "multiplechoices",
  "header": "Физика. Статика",
  "title": "Момент силы относительно оси",
  "theme": "Применение тригонометрии в физике",
  "text": "К рычагу длиной L приложена сила F под углом α. Как найти момент этой силы относительно оси вращения?",
  "choices": [
    "$M = F \\cdot L \\cdot \\sin\\alpha$",
    "$M = F \\cdot L \\cdot \\cos\\alpha$",
    "$M = F \\cdot L \\cdot \\tan\\alpha$",
    "$M = \\frac{F \\cdot L}{\\sin\\alpha}$",
    "$M = \\frac{F \\cdot L}{\\cos\\alpha}$"
  ],
  "answers": ["$M = F \\cdot L \\cdot \\sin\\alpha$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Момент силы</h5>
      <p>Момент силы характеризует её вращательное действие</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Определение момента</strong>
          </div>
          <div class="card-body">
            <p>Момент силы = сила × плечо</p>
            <p>Плечо - кратчайшее расстояние от оси до линии действия силы</p>
            <p>Если сила приложена под углом:</p>
            <p>Плечо = L · sin α</p>
            <p>где α - угол между рычагом и направлением силы</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Частные случаи</strong>
          </div>
          <div class="card-body">
            <p>При α = 90°: sin 90° = 1</p>
            <p>$$M = F \\cdot L$$ (максимальный момент)</p>
            <p>При α = 0°: sin 0° = 0</p>
            <p>$$M = 0$$ (сила направлена вдоль рычага)</p>
            <p>При α = 180°: sin 180° = 0</p>
            <p>$$M = 0$$ (сила направлена к оси)</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Правило моментов для равновесия:</h6>
      <p class="mb-1">Тело в равновесии, если сумма моментов сил = 0</p>
      <p class="mb-0">$$\\sum M = 0$$</p>
      <p class="mb-0">Или: сумма моментов по часовой стрелке = сумма моментов против часовой стрелки</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-004",
  "type": "multiplechoices",
  "header": "Физика. Колебания",
  "title": "Уравнение гармонических колебаний",
  "theme": "Применение тригонометрии в физике",
  "text": "Тело совершает гармонические колебания. Как зависит координата x от времени t с амплитудой A и циклической частотой ω?",
  "choices": [
    "$x = A \\cdot \\sin(\\omega t)$",
    "$x = A \\cdot \\cos(\\omega t)$", 
    "$x = A \\cdot \\tan(\\omega t)$",
    "$x = A \\cdot \\sin^2(\\omega t)$",
    "$x = A + \\sin(\\omega t)$"
  ],
  "answers": ["$x = A \\cdot \\sin(\\omega t)$", "$x = A \\cdot \\cos(\\omega t)$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Гармонические колебания</h5>
      <p>Колебания, описываемые синусом или косинусом, называются гармоническими</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Общий вид уравнения</strong>
          </div>
          <div class="card-body">
            <p>$$x(t) = A \\cdot \\sin(\\omega t + \\varphi_0)$$</p>
            <p>или</p>
            <p>$$x(t) = A \\cdot \\cos(\\omega t + \\varphi_0)$$</p>
            <p>где:</p>
            <p>• A - амплитуда (максимальное отклонение)</p>
            <p>• ω - циклическая частота</p>
            <p>• φ₀ - начальная фаза</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Физический смысл</strong>
          </div>
          <div class="card-body">
            <p>Маятник, пружина, LC-контур</p>
            <p>Период: $T = \\frac{2\\pi}{\\omega}$</p>
            <p>Частота: $f = \\frac{\\omega}{2\\pi}$</p>
            <p>Скорость: $v = A\\omega \\cdot \\cos(\\omega t + \\varphi_0)$</p>
            <p>Ускорение: $a = -A\\omega^2 \\cdot \\sin(\\omega t + \\varphi_0)$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Связь с единичной окружностью:</h6>
      <p class="mb-1">Представьте точку, движущуюся по окружности радиусом A</p>
      <p class="mb-0">Проекция на ось X даёт гармоническое колебание: $x = A \\cdot \\cos(\\omega t)$</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-003",
  "type": "multiplechoices",
  "header": "Физика. Оптика",
  "title": "Закон Снеллиуса (преломление)",
  "theme": "Применение тригонометрии в физике",
  "text": "Луч света переходит из воздуха в воду. Угол падения α, угол преломления β. Какой закон описывает отношение синусов этих углов?",
  "choices": [
    "$\\frac{\\sin\\alpha}{\\sin\\beta} = n$",
    "$\\frac{\\sin\\alpha}{\\sin\\beta} = \\frac{1}{n}$",
    "$\\sin\\alpha \\cdot \\sin\\beta = n$",
    "$\\sin\\alpha + \\sin\\beta = n$",
    "$\\frac{\\sin\\alpha}{\\cos\\beta} = n$"
  ],
  "answers": ["$\\frac{\\sin\\alpha}{\\sin\\beta} = n$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Закон преломления Снеллиуса</h5>
      <p>Отношение синусов углов падения и преломления равно относительному показателю преломления</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Формулировка закона</strong>
          </div>
          <div class="card-body">
            <p>$$\\frac{\\sin\\alpha}{\\sin\\beta} = n_{21}$$</p>
            <p>где $n_{21}$ - относительный показатель преломления второй среды относительно первой</p>
            <p>Если n > 1, луч отклоняется к нормали</p>
            <p>Если n < 1, луч отклоняется от нормали</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Пример: воздух → вода</strong>
          </div>
          <div class="card-body">
            <p>n(вода) ≈ 1.33</p>
            <p>$$\\frac{\\sin\\alpha}{\\sin\\beta} = 1.33$$</p>
            <p>Если α = 30°:</p>
            <p>sin 30° = 0.5</p>
            <p>sin β = 0.5 / 1.33 ≈ 0.376</p>
            <p>β ≈ arcsin(0.376) ≈ 22°</p>
            <p>Луч отклоняется к нормали</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Частные случаи:</h6>
      <p class="mb-1">• При α = 0°: sin 0° = 0 ⇒ луч не преломляется</p>
      <p class="mb-1">• При n = 1: sin α = sin β ⇒ луч не меняет направление</p>
      <p class="mb-0">• Предельный угол полного отражения: $\\sin\\alpha_\\text{пр} = \\frac{1}{n}$</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-002",
  "type": "multiplechoices",
  "header": "Физика. Механика",
  "title": "Начальная скорость при броске под углом",
  "theme": "Применение тригонометрии в физике",
  "text": "Тело брошено под углом α к горизонту с начальной скоростью v₀. Как найти вертикальную составляющую начальной скорости?",
  "choices": [
    "$v_{0y} = v_0 \\cdot \\sin\\alpha$",
    "$v_{0y} = v_0 \\cdot \\cos\\alpha$",
    "$v_{0y} = v_0 \\cdot \\tan\\alpha$",
    "$v_{0y} = v_0 \\cdot \\cot\\alpha$",
    "$v_{0y} = v_0 \\cdot \\sin^2\\alpha$"
  ],
  "answers": ["$v_{0y} = v_0 \\cdot \\sin\\alpha$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Разложение скорости при броске</h5>
      <p>Начальная скорость v₀ раскладывается на горизонтальную и вертикальную составляющие</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Горизонтальная составляющая</strong>
          </div>
          <div class="card-body">
            <p>Не меняется во время полёта</p>
            <p>$$v_{0x} = v_0 \\cdot \\cos\\alpha$$</p>
            <p>Определяет дальность полёта</p>
            <p>При α = 0°: cos 0° = 1 - вся скорость горизонтальна</p>
            <p>При α = 90°: cos 90° = 0 - горизонтальной скорости нет</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Вертикальная составляющая</strong>
          </div>
          <div class="card-body">
            <p>Меняется под действием силы тяжести</p>
            <p>$$v_{0y} = v_0 \\cdot \\sin\\alpha$$</p>
            <p>Определяет высоту и время полёта</p>
            <p>При α = 0°: sin 0° = 0 - вертикальной скорости нет</p>
            <p>При α = 90°: sin 90° = 1 - вся скорость вертикальна</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Формулы для броска под углом:</h6>
      <p class="mb-1">• Дальность: $L = \\frac{v_0^2 \\sin 2\\alpha}{g}$</p>
      <p class="mb-1">• Максимальная высота: $H = \\frac{v_0^2 \\sin^2\\alpha}{2g}$</p>
      <p class="mb-0">• Время полёта: $t = \\frac{2v_0 \\sin\\alpha}{g}$</p>
    </div>
  </div>`
},

{
  "id": "physics-trig-001",
  "type": "multiplechoices",
  "header": "Физика. Механика",
  "title": "Разложение силы на наклонной плоскости",
  "theme": "Применение тригонометрии в физике",
  "text": "Тело массой m лежит на наклонной плоскости с углом α. На какую силу нужно умножить mg, чтобы найти силу, удерживающую тело от скольжения?",
  "choices": [
    "$\\sin\\alpha$",
    "$\\cos\\alpha$", 
    "$\\tan\\alpha$",
    "$\\cot\\alpha$",
    "$\\sin^2\\alpha$"
  ],
  "answers": ["$\\sin\\alpha$"],
  "hint": `<div class="container-fluid p-0">
    <div class="alert alert-info mb-3" role="alert">
      <h5 class="alert-heading">📐 Разложение силы тяжести</h5>
      <p>Сила тяжести mg раскладывается на две составляющие</p>
    </div>
    
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header bg-primary text-white">
            <strong>Составляющие силы тяжести</strong>
          </div>
          <div class="card-body">
            <p>1. Сила, прижимающая к плоскости:</p>
            <p>$$F_\\text{приж} = mg \\cdot \\cos\\alpha$$</p>
            <p>2. Сила, вызывающая скольжение:</p>
            <p>$$F_\\text{скольж} = mg \\cdot \\sin\\alpha$$</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card border-success mb-3">
          <div class="card-header bg-success text-white">
            <strong>Чтобы удержать тело</strong>
          </div>
          <div class="card-body">
            <p>Нужно компенсировать силу скольжения:</p>
            <p>$$F_\\text{удерж} = F_\\text{скольж} = mg \\cdot \\sin\\alpha$$</p>
            <p>Это сила трения или приложенная сила</p>
            <p>При α = 0°: sin 0° = 0 - сила скольжения нулевая</p>
            <p>При α = 90°: sin 90° = 1 - полная сила тяжести</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-light border mt-3">
      <h6>💡 Запомните:</h6>
      <p class="mb-1">• Сила ВДОЛЬ плоскости: $mg\\sin\\alpha$</p>
      <p class="mb-0">• Сила ПЕРПЕНДИКУЛЯРНО плоскости: $mg\\cos\\alpha$</p>
    </div>
  </div>`
}









]

window.quizesSets = quizesSets;
