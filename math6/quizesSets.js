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
    answers: [ "4/5"]
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





    
]

window.quizesSets = quizesSets;
