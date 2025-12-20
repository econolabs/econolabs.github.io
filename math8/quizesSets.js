let quizesSets = [

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
}








]

window.quizesSets = quizesSets;
