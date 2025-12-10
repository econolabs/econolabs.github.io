let quizesSets = [

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
  }




    
]

window.quizesSets = quizesSets;
