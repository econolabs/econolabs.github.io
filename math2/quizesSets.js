let quizesSets = [

  {
    "id": "functiongraph001",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "linear",
    "func": (x) => 2 * x + 1,
    "choices": [
      "$y = x^2 + c$ (Квадратичная функция)",
      "$y = kx + b$ (Линейная функция)",
      "$y = \\sin(x)$ (Тригонометрическая функция)",
      "$y = a^x$ (Показательная функция)",
      "$y = \\log_a(x)$ (Логарифмическая функция)"
    ],
    "answers": ["$y = kx + b$ (Линейная функция)"],
    "hint": "Линейная функция имеет вид y = kx + b и представляет собой прямую линию на графике."
  },


{
    "id": "functiongraph00101",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение производной функции по графику 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Чему равна производная функции?",
    "functionType": "linear",
    "func": (x) => 2 * x + 1,
    "choices": [
      "2",
      "0",
      "1",
      "-1",
      "-2"
    ],
    "answers": ["2"],
    "hint": "Линейная функция имеет вид y = kx + b и представляет собой прямую линию на графике."
  },

   {
    "id": "functiongraph002",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 2",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "quadratic",
    "func": (x) => x * x - 2,
    "choices": [
      "$y = kx + b$ (Линейная функция)",
      "$y = x^2 + bx + c$ (Квадратичная функция)",
      "$y = \\cos(x)$ (Тригонометрическая функция)",
      "$y = e^x$ (Показательная функция)",
      "$y = \\ln(x)$ (Логарифмическая функция)"
    ],
    "answers": ["$y = x^2 + bx + c$ (Квадратичная функция)"],
    "hint": "Квадратичная функция имеет вид y = ax² + bx + c и представляет собой параболу на графике."
  },
  {
    "id": "functiongraph003",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "sinus",
    "func": (x) => 2 * Math.sin(x),
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
    "id": "functiongraph004",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 4",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "exponential",
    "func": (x) => Math.exp(x / 2),
    "choices": [
      "$y = \\tan(x)$ (Тангенс)",
      "$y = a^x$ (Показательная функция)",
      "$y = x^2$ (Квадратичная функция)",
      "$y = mx + b$ (Линейная функция)",
      "$y = \\log(x)$ (Логарифмическая функция)"
    ],
    "answers": ["$y = a^x$ (Показательная функция)"],
    "hint": "Показательная функция быстро растет (или убывает) и никогда не принимает отрицательных значений."
  },
  {
    "id": "functiongraph005",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 5",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "logarithmic",
    "func": (x) => x > 0 ? Math.log(x) : -10,
    "choices": [
      "$y = \\cos(x)$ (Косинусоидальная функция)",
      "$y = x^3$ (Кубическая функция)",
      "$y = \\log_a(x)$ (Логарифмическая функция)",
      "$y = \\frac{1}{x}$ (Гипербола)",
      "$y = \\sqrt{x}$ (Квадратный корень)"
    ],
    "answers": ["$y = \\log_a(x)$ (Логарифмическая функция)"],
    "hint": "Логарифмическая функция определена только для x > 0 и медленно возрастает."
  },
  {
    "id": "functiongraph006",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 6",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "cubic",
    "func": (x) => (x * x * x) / 5,
    "choices": [
      "$y = x^2$ (Квадратичная функция)",
      "$y = x^3$ (Кубическая функция)",
      "$y = \\sin(x)$ (Тригонометрическая функция)",
      "$y = e^x$ (Показательная функция)",
      "$y = \\ln(x)$ (Логарифмическая функция)"
    ],
    "answers": ["$y = x^3$ (Кубическая функция)"],
    "hint": "Кубическая функция имеет вид y = ax³ + bx² + cx + d и может иметь точки перегиба."
  },
  {
    "id": "functiongraph007",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 7",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "absolute",
    "func": (x) => Math.abs(x),
    "choices": [
      "$y = |x|$ (Функция модуля)",
      "$y = x^2$ (Квадратичная функция)",
      "$y = \\cos(x)$ (Тригонометрическая функция)",
      "$y = \\log(x)$ (Логарифмическая функция)",
      "$y = \\frac{1}{x}$ (Гипербола)"
    ],
    "answers": ["$y = |x|$ (Функция модуля)"],
    "hint": "Функция модуля всегда возвращает неотрицательные значения и имеет характерный 'угол' в начале координат."
  },
  {
    "id": "functiongraph008",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение типа функции по графику 8",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Какой тип функции представлен на графике?",
    "functionType": "cosine",
    "func": (x) => 2 * Math.cos(x),
    "choices": [
      "$y = \\sin(x)$ (Синусоидальная функция)",
      "$y = \\cos(x)$ (Косинусоидальная функция)",
      "$y = x^2$ (Квадратичная функция)",
      "$y = e^x$ (Показательная функция)",
      "$y = \\tan(x)$ (Тангенсоидальная функция)"
    ],
    "answers": ["$y = \\cos(x)$ (Косинусоидальная функция)"],
    "hint": "Косинусоидальная функция является периодической и начинается с максимального значения при x = 0."
  },


  {
  "id": "derivative_analysis_001",
  "type": "multiplechoices",
  "header": "Связь производных и поведения функции",
  "title": "Анализ производных линейной функции",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Дана функция $y = 2x + 1$ (график — прямая линия).",
  "functionType": "linear",
  "func": (x) => 2 * x + 1,
  "choices": [
    "$y' > 0$ (функция возрастает), $y'' = 0$ (нет выпуклости или вогнутости, график — прямая)",
    "$y' > 0$ (функция возрастает), $y'' > 0$ (график вогнут вверх)",
    "$y' < 0$ (функция убывает), $y'' = 0$ (нет перегиба, прямая)",
    "$y' = 0$ (функция постоянна), $y'' = 0$ (горизонтальная прямая)"
  ],
  "answers": ["$y' > 0$ (функция возрастает), $y'' = 0$ (нет выпуклости или вогнутости, график — прямая)"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Анализ производных линейной функции $y = 2x + 1$</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Вычисляем первую производную $y'$</div>
      <div class="card-body">
        <p class="card-text">$y = 2x + 1$</p>
        <p class="card-text">$y' = 2$</p>
        <p class="card-text mt-2">Так как $2 > 0$, то <span class="badge bg-success">$y' > 0$ на всём промежутке</span></p>
        <p class="card-text">Это означает, что функция <strong>строго возрастает</strong>.</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Вычисляем вторую производную $y''$</div>
      <div class="card-body">
        <p class="card-text">$y' = 2$</p>
        <p class="card-text">$y'' = 0$</p>
        <p class="card-text mt-2"><span class="badge bg-secondary">$y'' = 0$ на всём промежутке</span></p>
        <p class="card-text">Это означает, что график не имеет ни выпуклости, ни вогнутости — он представляет собой <strong>прямую линию</strong>.</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Шаг 3: Собираем результат</div>
      <div class="card-body">
        <p class="card-text">Для функции $y = 2x + 1$:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">✓ $y' = 2 > 0$ → функция <strong>возрастает</strong></li>
          <li class="list-group-item">✓ $y'' = 0$ → <strong>нет выпуклости/вогнутости</strong> (график — прямая)</li>
        </ul>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Правильный ответ:</b> $y' > 0$ (функция возрастает), $y'' = 0$ (нет выпуклости или вогнутости, график — прямая)
    </div>
    
  </div>
</div>`
  },

  {
  "id": "derivative_quadratic_x_positive",
  "type": "multiplechoices",
  "header": "Анализ производных квадратичной функции",
  "title": "Знаки производных y = x² на интервале x > 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = x^2$ на интервале $x > 0$ определите знаки первой и второй производных:",
  "functionType": "quadratic",
  "func": (x) => x * x,
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = x^2$ на интервале $x > 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = x^2$, $y' = 2x$, $y'' = 2$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x > 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 2x$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $2x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 2$</div>
              <div class="card-body">
                <p class="card-text">$2 > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВЗЛЕТАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$<br>
                  <em>График вогнут вниз — разгоняется как ракета</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — следим за чайкой</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = x^2$ (высота)</th><th>$y' = 2x$ (скорость)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</td><td>$0$</td><td>$0$</td><td>🕊️ Касание воды, мгновение покоя</td>
              </tr>
              <tr class="table-success">
                <td>$0.5$</td><td>$0.25$</td><td>$1$</td><td>🚀 Чайка взлетает, скорость 1</td>
              </tr>
              <tr class="table-success">
                <td>$1$</td><td>$1$</td><td>$2$</td><td>⚡ Скорость выросла до 2</td>
              </tr>
              <tr class="table-success">
                <td>$2$</td><td>$4$</td><td>$4$</td><td>🚀🚀 Скорость уже 4!</td>
              </tr>
              <tr class="table-success">
                <td>$3$</td><td>$9$</td><td>$6$</td><td>⚡⚡⚡ Разгон продолжается</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Чем дальше от воды, тем быстрее летит чайка!<br>
          Скорость (производная) растёт → $y'' > 0$
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x > 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>над водой</strong> → $y > 0$<br>
          🚀 Чайка <strong>взлетает</strong> → $y' > 0$<br>
          ⚡ Взлетает <strong>всё быстрее и быстрее</strong> → $y'' > 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 🚀 + ⚡ = $y' > 0$, $y'' > 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' > 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для $x > 0$</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🕊️ ЧАЙКА<br>$y > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🚀 ВЗЛЕТАЕТ<br>$y' > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              ⚡ ВСЁ БЫСТРЕЕ<br>$y'' > 0$
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_analysis_quadratic_001",
  "type": "multiplechoices",
  "header": "Анализ производных квадратичной функции",
  "title": "Определение поведения функции по знакам производных",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Дана функция $y = x^2$ (парабола, ветви вверх). Выберите верное описание знаков первой и второй производной на интервалах $x < 0$ и $x > 0$:",
  "functionType": "quadratic",
  "func": (x) => x * x,
  "choices": [
    "При $x < 0$: $y' < 0$, $y'' > 0$; при $x > 0$: $y' > 0$, $y'' > 0$",
    "При $x < 0$: $y' > 0$, $y'' > 0$; при $x > 0$: $y' < 0$, $y'' > 0$",
    "При $x < 0$: $y' < 0$, $y'' < 0$; при $x > 0$: $y' > 0$, $y'' < 0$",
    "При $x < 0$: $y' > 0$, $y'' < 0$; при $x > 0$: $y' < 0$, $y'' < 0$",
    "При $x < 0$: $y' = 0$, $y'' = 0$; при $x > 0$: $y' = 0$, $y'' = 0$"
  ],
  "answers": ["При $x < 0$: $y' < 0$, $y'' > 0$; при $x > 0$: $y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных квадратичной функции $y = x^2$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = x^2$, $y' = 2x$, $y'' = 2$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ (вогнута вниз) &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Замедляется = $y'' < 0$ (выпукла вверх)
    </div>

    <div class="row">
      <!-- Случай x > 0 -->
      <div class="col-md-6 mb-3">
        <div class="card h-100 border-success">
          <div class="card-header bg-success text-white">
            <h5>📈 При $x > 0$ (правая ветвь)</h5>
          </div>
          <div class="card-body">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 2x$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $2x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 2$</div>
              <div class="card-body">
                <p class="card-text">$2 > 0$</p>
                <div class="alert alert-warning mt-2 mb-0">
                  ⚡ <strong>ВЗЛЕТАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$<br>
                  <em>График вогнут вниз — разгоняется как ракета</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Случай x < 0 -->
      <div class="col-md-6 mb-3">
        <div class="card h-100 border-primary">
          <div class="card-header bg-primary text-white">
            <h5>📉 При $x < 0$ (левая ветвь)</h5>
          </div>
          <div class="card-body">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 2x$</div>
              <div class="card-body">
                <p class="card-text">При $x < 0$: $2x < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  📉 <strong>ПАДАЕТ</strong> → $y' < 0$<br>
                  <em>Функция убывает — чайка снижается, но всё ещё над водой</em>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 2$</div>
              <div class="card-body">
                <p class="card-text">$2 > 0$</p>
                <div class="alert alert-warning mt-2 mb-0">
                  ⚡ <strong>ПАДАЕТ, НО ЗАМЕДЛЯЕТСЯ?</strong> Нет!<br>
                  $y'' > 0$ значит <strong>ТОРМОЖЕНИЕ ПРИ СНИЖЕНИИ</strong><br>
                  <em>Скорость падения уменьшается (падение идёт на спад) — готовимся к взлёту</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Точка минимума — образ -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🎯 Точка минимума $x = 0$ — момент чуда</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          🕊️ Чайка долетела до самой воды (точка $x=0$, $y=0$):<br>
          • $y'(0) = 0$ — мгновение покоя, чайка коснулась воды<br>
          • $y'' > 0$ — она <strong>готова оттолкнуться и взлететь вверх</strong><br>
          <strong>Это точка минимума!</strong> — чайка коснулась воды и снова взмывает ввысь
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $y = x^2$</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-success">
              <strong>На всём пути чайка НАД ВОДОЙ</strong> ($y > 0$), кроме самой воды ($y=0$)
            </div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            🕊️ <strong>При $x < 0$ (слева от воды):</strong><br>
            Чайка 📉 <strong>падает</strong> ($y' < 0$), но падение 🐢 <strong>замедляется</strong> ($y'' > 0$)<br>
            <em>→ Скорость снижения уменьшается, готовится к касанию</em>
          </li>
          <li class="list-group-item">
            🕊️ <strong>При $x > 0$ (справа от воды):</strong><br>
            Чайка 🚀 <strong>взлетает</strong> ($y' > 0$), причём ⚡ <strong>всё быстрее и быстрее</strong> ($y'' > 0$)<br>
            <em>→ Разгоняется после отскока от воды</em>
          </li>
        </ul>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> При $x < 0$: $y' < 0$, $y'' > 0$; при $x > 0$: $y' > 0$, $y'' > 0$
      </div>
    </div>

    <!-- Дополнительная ассоциативная таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Ассоциативная таблица для запоминания</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>Знак $y'$</th><th>Образ</th><th>Знак $y''$</th><th>Образ</th><th>Форма графика</th></tr>
            </thead>
            <tbody>
              <tr class="table-success">
                <td>$y' > 0$</td><td>🚀 Взлетает</td>
                <td>$y'' > 0$</td><td>⚡ Всё быстрее</td><td>📈 Вогнута вниз (ускоряется)</td>
              </tr>
              <tr class="table-danger">
                <td>$y' < 0$</td><td>📉 Падает</td>
                <td>$y'' > 0$</td><td>🐢 Замедляет падение</td><td>📉 Тормозит перед минимумом</td>
              </tr>
              <tr class="table-warning">
                <td>$y' > 0$</td><td>🚀 Взлетает</td>
                <td>$y'' < 0$</td><td>🐢 Замедляет рост</td><td>📈 Выпукла вверх (насыщение)</td>
              </tr>
              <tr class="table-info">
                <td>$y' < 0$</td><td>📉 Падает</td>
                <td>$y'' < 0$</td><td>⚡ Падает всё быстрее</td><td>📉 Вогнута вниз (ускоряется вниз)</td>
              </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>

  </div>
</div>`
},


{
  "id": "derivative_absolute_x_positive",
  "type": "multiplechoices",
  "header": "Анализ производных функции модуля",
  "title": "Знаки производных y = |x| на интервале x > 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = |x|$ на интервале $x > 0$ определите знаки первой и второй производных:",
  "functionType": "absolute",
  "func": (x) => Math.abs(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' = 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' = 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' = 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = |x|$ на интервале $x > 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> При $x > 0$: $y = x$, $y' = 1$, $y'' = 0$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🛤️ Постоянная скорость = $y'' = 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x > 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 1$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $1 > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 0$</div>
              <div class="card-body">
                <p class="card-text">$0 = 0$</p>
                <div class="alert alert-secondary mt-2 mb-0">
                  🛤️ <strong>ЛЕТИТ С ПОСТОЯННОЙ СКОРОСТЬЮ</strong> → $y'' = 0$<br>
                  <em>График — прямая линия, нет ускорения</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка летит ровно</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = |x|$ (высота)</th><th>$y' = 1$ (скорость)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</th><th>$0$</th><th>$1$</th><th>🕊️ Отрыв от воды, скорость 1</th>
              </tr>
              <tr class="table-success">
                <td>$1$</th><th>$1$</th><th>$1$</th><th>🛤️ Всё так же скорость 1</th>
              寸
              <tr class="table-success">
                <td>$2$</th><th>$2$</th><th>$1$</th><th>🛤️ Скорость не меняется — 1</th>
              </tr>
              <tr class="table-success">
                <td>$3$</th><th>$3$</th><th>$1$</th><th>🛤️ Постоянная скорость</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Важно!</strong> Вторая производная $y'' = 0$, потому что скорость <strong>не меняется</strong>.<br>
          Чайка летит равномерно — ни разгона, ни торможения.
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x > 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>над водой</strong> → $y > 0$<br>
          🚀 Чайка <strong>взлетает</strong> → $y' > 0$<br>
          🛤️ Взлетает <strong>с постоянной скоростью</strong> → $y'' = 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 🚀 + 🛤️ = $y' > 0$, $y'' = 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' = 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для $x > 0$ (модуль)</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🕊️ ЧАЙКА<br>$y > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🚀 ВЗЛЕТАЕТ<br>$y' > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-secondary mb-0">
              🛤️ С const СКОРОСТЬЮ<br>$y'' = 0$
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_absolute_x_negative",
  "type": "multiplechoices",
  "header": "Анализ производных функции модуля",
  "title": "Знаки производных y = |x| на интервале x < 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = |x|$ на интервале $x < 0$ определите знаки первой и второй производных:",
  "functionType": "absolute",
  "func": (x) => Math.abs(x),
  "choices": [
    "$y' > 0$, $y'' = 0$",
    "$y' < 0$, $y'' = 0$",
    "$y' > 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' < 0$, $y'' = 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = |x|$ на интервале $x < 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> При $x < 0$: $y = -x$, $y' = -1$, $y'' = 0$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🛤️ Постоянная скорость = $y'' = 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🕊️ Что происходит при $x < 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = -1$</div>
              <div class="card-body">
                <p class="card-text">При $x < 0$: $-1 < 0$</p>
                <div class="alert alert-primary mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  📉 <strong>ПАДАЕТ</strong> → $y' < 0$<br>
                  <em>Функция убывает — чайка снижается к воде</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 0$</div>
              <div class="card-body">
                <p class="card-text">$0 = 0$</p>
                <div class="alert alert-secondary mt-2 mb-0">
                  🛤️ <strong>ПАДАЕТ С ПОСТОЯННОЙ СКОРОСТЬЮ</strong> → $y'' = 0$<br>
                  <em>График — прямая линия, скорость снижения не меняется</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка снижается ровно</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = |x|$ (высота)</th><th>$y' = -1$ (скорость)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$-3$</th><th>$3$</th><th>$-1$</th><th>🕊️ Высоко, снижается со скоростью 1</th>
              寸
              <tr class="table-info">
                <td>$-2$</th><th>$2$</th><th>$-1$</th><th>🛤️ Всё так же скорость 1 вниз</th>
              寸
              <tr class="table-info">
                <td>$-1$</th><th>$1$</th><th>$-1$</th><th>🛤️ Скорость не меняется — 1</th>
              寸
              <tr class="table-success">
                <td>$0$</th><th>$0$</th><th>$-1$</th><th>🕊️ Касание воды, скорость всё ещё 1</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Важно!</strong> Вторая производная $y'' = 0$, потому что скорость <strong>не меняется</strong>.<br>
          Чайка снижается равномерно — ни ускорения, ни замедления.
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x < 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-primary">
          🕊️ Чайка <strong>над водой</strong> → $y > 0$<br>
          📉 Чайка <strong>падает</strong> → $y' < 0$<br>
          🛤️ Падает <strong>с постоянной скоростью</strong> → $y'' = 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 📉 + 🛤️ = $y' < 0$, $y'' = 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' < 0$, $y'' = 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для $x < 0$ (модуль)</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🕊️ ЧАЙКА<br>$y > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-primary mb-0">
              📉 ПАДАЕТ<br>$y' < 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-secondary mb-0">
              🛤️ С const СКОРОСТЬЮ<br>$y'' = 0$
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Важное замечание про точку x = 0 -->
    <div class="card mt-3 border-danger">
      <div class="card-header bg-danger text-white">
        <h5>⚠️ Особенность функции $y = |x|$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-danger mb-0">
          В точке $x = 0$ производная <strong>НЕ СУЩЕСТВУЕТ</strong> (график имеет излом).<br>
          Чайка резко меняет направление: падала → оттолкнулась → полетела вверх.
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_cubic_x_negative",
  "type": "multiplechoices",
  "header": "Анализ производных кубической функции",
  "title": "Знаки производных y = x³ на интервале x < 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = x^3$ на интервале $x < 0$ определите знаки первой и второй производных:",
  "functionType": "cubic",
  "func": (x) => x * x * x,
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🧜‍♀️ Анализ производных $y = x^3$ на интервале $x < 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = x^3$, $y' = 3x^2$, $y'' = 6x$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🧜‍♀️ Что происходит при $x < 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 3x^2$</div>
              <div class="card-body">
                <p class="card-text">При $x < 0$: $3x^2 > 0$ (квадрат всегда ≥ 0)</p>
                <div class="alert alert-success mt-2 mb-0">
                  🧜‍♀️ <strong>РУСАЛКА</strong> (функция < 0)<br>
                  🚀 <strong>ВСПЛЫВАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — русалка поднимается из глубины</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 6x$</div>
              <div class="card-body">
                <p class="card-text">При $x < 0$: $6x < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ВСПЛЫВАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$<br>
                  <em>График выпуклый вверх — скорость всплытия уменьшается</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — русалка поднимается из глубины</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = x^3$ (глубина)</th><th>$y' = 3x^2$ (скорость)</th><th>$y'' = 6x$ (ускорение)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-danger">
                <td>$-3$</th><th>$-27$</th><th>$27$</th><th>$-18$</th><th>🧜‍♀️ Глубоко, быстро всплывает, но тормозит</th>
              </tr>
              <tr class="table-danger">
                <td>$-2$</th><th>$-8$</th><th>$12$</th><th>$-12$</th><th>🐢 Скорость уменьшается (12 → ...)</th>
              </tr>
              <tr class="table-warning">
                <td>$-1$</th><th>$-1$</th><th>$3$</th><th>$-6$</th><th>🐢 Совсем медленно, почти у поверхности</th>
              </tr>
              <tr class="table-info">
                <td>$0$</th><th>$0$</th><th>$0$</th><th>$0$</th><th>🔄 Мгновение покоя — точка перегиба</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Русалка всплывает 🚀, но <strong>замедляется</strong> 🐢!<br>
          Скорость (производная) уменьшается → $y'' < 0$
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🧜‍♀️ Образный итог для $x < 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-danger">
          🧜‍♀️ Русалка <strong>под водой</strong> → $y < 0$<br>
          🚀 Русалка <strong>всплывает</strong> → $y' > 0$<br>
          🐢 Всплывает <strong>всё медленнее</strong> → $y'' < 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🧜‍♀️ + 🚀 + 🐢 = $y' > 0$, $y'' < 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' < 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для $x < 0$ (кубическая)</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-danger mb-0">
              🧜‍♀️ РУСАЛКА<br>$y < 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🚀 ВСПЛЫВАЕТ<br>$y' > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-danger mb-0">
              🐢 ВСЁ МЕДЛЕННЕЕ<br>$y'' < 0$
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_cubic_x_positive",
  "type": "multiplechoices",
  "header": "Анализ производных кубической функции",
  "title": "Знаки производных y = x³ на интервале x > 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = x^3$ на интервале $x > 0$ определите знаки первой и второй производных:",
  "functionType": "cubic",
  "func": (x) => x * x * x,
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = x^3$ на интервале $x > 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = x^3$, $y' = 3x^2$, $y'' = 6x$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x > 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = 3x^2$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $3x^2 > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = 6x$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $6x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВЗЛЕТАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$<br>
                  <em>График вогнут вниз — разгоняется как ракета</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка разгоняется</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = x^3$ (высота)</th><th>$y' = 3x^2$ (скорость)</th><th>$y'' = 6x$ (ускорение)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</th><th>$0$</th><th>$0$</th><th>$0$</th><th>🔄 Мгновение покоя — точка перегиба</th>
              </tr>
              <tr class="table-success">
                <td>$1$</th><th>$1$</th><th>$3$</th><th>$6$</th><th>🚀 Чайка взлетает, скорость 3</th>
              </tr>
              <tr class="table-success">
                <td>$2$</th><th>$8$</th><th>$12$</th><th>$12$</th><th>⚡ Скорость выросла до 12!</th>
              </tr>
              <tr class="table-success">
                <td>$3$</th><th>$27$</th><th>$27$</th><th>$18$</th><th>⚡⚡⚡ Разгон продолжается</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Чайка взлетает 🚀 и <strong>разгоняется</strong> ⚡!<br>
          Скорость (производная) растёт → $y'' > 0$
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x > 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>над водой</strong> → $y > 0$<br>
          🚀 Чайка <strong>взлетает</strong> → $y' > 0$<br>
          ⚡ Взлетает <strong>всё быстрее</strong> → $y'' > 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 🚀 + ⚡ = $y' > 0$, $y'' > 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' > 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для $x > 0$ (кубическая)</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🕊️ ЧАЙКА<br>$y > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🚀 ВЗЛЕТАЕТ<br>$y' > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-success mb-0">
              ⚡ ВСЁ БЫСТРЕЕ<br>$y'' > 0$
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_logarithmic_x_positive",
  "type": "multiplechoices",
  "header": "Анализ производных логарифмической функции",
  "title": "Знаки производных y = ln(x) на интервале x > 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\ln(x)$ на интервале $x > 0$ определите знаки первой и второй производных:",
  "functionType": "logarithmic",
  "func": (x) => Math.log(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = \\ln(x)$ на интервале $x > 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\ln(x)$, $y' = \\frac{1}{x}$, $y'' = -\\frac{1}{x^2}$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Важное замечание про область определения -->
    <div class="alert alert-warning mb-3">
      <strong>⚠️ Важно!</strong> Логарифм определён только при $x > 0$ (чайка летает только над водой, никогда не ныряет).
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x > 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = \\frac{1}{x}$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $\\frac{1}{x} > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция может быть > 0 или < 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = -\\frac{1}{x^2}$</div>
              <div class="card-body">
                <p class="card-text">При $x > 0$: $-\\frac{1}{x^2} < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ВЗЛЕТАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$<br>
                  <em>График выпуклый вверх — скорость роста уменьшается</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка набирает высоту, но устаёт</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\ln(x)$ (высота)</th><th>$y' = 1/x$ (скорость)</th><th>$y'' = -1/x^2$ (ускорение)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0.5$</th><th>$-0.69$</th><th>$2$</th><th>$-4$</th><th>🧜‍♀️ Под водой, быстро всплывает, но тормозит</th>
              </tr>
              <tr class="table-warning">
                <td>$1$</th><th>$0$</th><th>$1$</th><th>$-1$</th><th>🕊️ На поверхности, скорость 1, замедляется</th>
              </tr>
              <tr class="table-success">
                <td>$2$</th><th>$0.69$</th><th>$0.5$</th><th>$-0.25$</th><th>🐢 Набрала высоту, летит медленнее</th>
              </tr>
              <tr class="table-success">
                <td>$3$</th><th>$1.10$</th><th>$0.33$</th><th>$-0.11$</th><th>🐢 Совсем медленно, почти зависла</th>
              </tr>
              <tr class="table-success">
                <td>$4$</th><th>$1.39$</th><th>$0.25$</th><th>$-0.06$</th><th>🦥 Очень медленно, рост почти остановился</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Чайка взлетает 🚀, но <strong>замедляется</strong> 🐢!<br>
          Скорость (производная) уменьшается → $y'' < 0$<br>
          Чем выше чайка, тем медленнее она летит — как будто устаёт.
        </div>
      </div>
    </div>

    <!-- График поведения -->
    <div class="card mb-3 border-info">
      <div class="card-header bg-info text-white">
        <h5>📈 Как меняется скорость?</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          $y' = \\frac{1}{x}$ — это гипербола:<br>
          • При $x \\to 0^+$: $y' \\to +\\infty$ (чайка вылетает с огромной скоростью из воды)<br>
          • При $x = 1$: $y' = 1$ (нормальная скорость)<br>
          • При $x \\to +\\infty$: $y' \\to 0$ (чайка почти остановилась, зависла в воздухе)
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x > 0$ (логарифм)</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>взлетает</strong> → $y' > 0$<br>
          🐢 Взлетает <strong>всё медленнее</strong> → $y'' < 0$
        </div>
        <div class="alert alert-info mt-2">
          📌 <strong>Важно:</strong> При $0 < x < 1$ чайка ещё <strong>под водой</strong> (🧜‍♀️ Русалка),<br>
          но всё равно <strong>всплывает</strong> с замедлением!
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️/🧜‍♀️ + 🚀 + 🐢 = $y' > 0$, $y'' < 0$</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' < 0$
      </div>
    </div>

    <!-- Ассоциативная мини-таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Запоминалка для логарифма $y = \\ln(x)$</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4">
            <div class="alert alert-success mb-0">
              🚀 ВЗЛЕТАЕТ<br>$y' > 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-danger mb-0">
              🐢 ВСЁ МЕДЛЕННЕЕ<br>$y'' < 0$
            </div>
          </div>
          <div class="col-4">
            <div class="alert alert-info mb-0">
              📈 ЛОГАРИФМ<br>растёт, но затухает
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_logarithmic_comparison",
  "type": "multiplechoices",
  "header": "Сравнение скорости роста логарифма",
  "title": "Скорость роста y = ln(x) на разных интервалах",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\ln(x)$ сравните значения первой производной $y'$ на интервалах $(0, 1)$ и $(1, +\\infty)$. Какое утверждение верно?",
  "functionType": "logarithmic",
  "func": (x) => Math.log(x),
  "choices": [
    "$y'$ больше на интервале $(0, 1)$",
    "$y'$ больше на интервале $(1, +\\infty)$",
    "$y'$ одинакова на обоих интервалах",
    "$y'$ отрицательна на $(0, 1)$ и положительна на $(1, +\\infty)$",
    "$y' = 0$ на обоих интервалах"
  ],
  "answers": ["$y'$ больше на интервале $(0, 1)$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Сравнение скорости роста $y = \\ln(x)$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Напоминание:</strong> $y' = \\frac{1}{x}$
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card h-100 border-warning">
          <div class="card-header bg-warning text-dark">
            <h5>🧜‍♀️ На интервале $(0, 1)$ — под водой</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-secondary">
              $x$ маленький → $y' = 1/x$ ОГРОМНЫЙ
            </div>
            <p class="card-text text-center mt-2">
              <strong>Числовые примеры:</strong><br>
              $x = 0.1$: $y' = 10$ ⚡⚡⚡<br>
              $x = 0.2$: $y' = 5$ ⚡⚡<br>
              $x = 0.5$: $y' = 2$ ⚡<br>
              $x = 0.8$: $y' = 1.25$ 
            </p>
            <div class="alert alert-info mt-2">
              💡 Русалка 🧜‍♀️ <strong>стремительно всплывает</strong> из глубины!<br>
              Скорость огромная, но быстро падает.
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="card h-100 border-success">
          <div class="card-header bg-success text-white">
            <h5>🕊️ На интервале $(1, +\\infty)$ — над водой</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-secondary">
              $x$ большой → $y' = 1/x$ МАЛЕНЬКИЙ
            </div>
            <p class="card-text text-center mt-2">
              <strong>Числовые примеры:</strong><br>
              $x = 1$: $y' = 1$<br>
              $x = 2$: $y' = 0.5$ 🐢<br>
              $x = 3$: $y' \\approx 0.33$ 🐢<br>
              $x = 10$: $y' = 0.1$ 🦥
            </p>
            <div class="alert alert-warning mt-2">
              💡 Чайка 🕊️ <strong>едва ползёт</strong> в небе.<br>
              Скорость маленькая и продолжает падать.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- График производной -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📉 График $y' = 1/x$ — гипербола</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          • При $x \\to 0^+$: $y' \\to +\\infty$ (скорость стремится к бесконечности)<br>
          • При $x = 1$: $y' = 1$<br>
          • При $x \\to +\\infty$: $y' \\to 0$ (скорость стремится к нулю)
        </div>
        <div class="alert alert-success mt-2">
          ✅ <strong>Вывод:</strong> Скорость максимальна <strong>сразу после старта</strong> (при маленьких $x$)<br>
          и постоянно <strong>убывает</strong> с ростом $x$.
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образное сравнение</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          🧜‍♀️ <strong>На интервале $(0, 1)$:</strong> Русалка вылетает из воды как ракета! 🚀🚀🚀<br>
          Скорость огромная (до бесконечности у самой поверхности).<br><br>
          🕊️ <strong>На интервале $(1, +\\infty)$:</strong> Чайка уже устала, еле машет крыльями 🐢<br>
          Скорость маленькая и стремится к нулю.
        </div>
        <hr>
        <div class="text-center">
          <h4>⚡ Максимальная скорость — в начале пути (при $x \\to 0^+$)</h4>
          <h4>🐢 Минимальная скорость — в бесконечности (при $x \\to +\\infty$)</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y'$ больше на интервале $(0, 1)$
      </div>
    </div>

    <!-- Ассоциативная таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Сравнительная таблица</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>Интервал</th><th>Образ</th><th>$x$</th><th>$y' = 1/x$</th><th>Скорость</th></tr>
            </thead>
            <tbody>
              <tr class="table-warning">
                <td>$(0, 1)$</th><th>🧜‍♀️ Русалка</th><th>$0.1$</th><th>$10$</th><th>⚡⚡⚡ ОГРОМНАЯ</th>
              </tr>
              <tr class="table-success">
                <td>$(1, +\\infty)$</th><th>🕊️ Чайка</th><th>$10$</th><th>$0.1$</th><th>🐢 МАЛЕНЬКАЯ</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_exponential_x_negative",
  "type": "multiplechoices",
  "header": "Анализ производных экспоненциальной функции",
  "title": "Знаки производных y = e^x на интервале x < 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = e^x$ на интервале $x < 0$ определите знаки первой и второй производных:",
  "functionType": "exponential",
  "func": (x) => Math.exp(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = e^x$ на интервале $x < 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = e^x$, $y' = e^x$, $y'' = e^x$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Важное замечание -->
    <div class="alert alert-success mb-3">
      <strong>✨ Особенность экспоненты:</strong> $y = y' = y''$ — функция, скорость и ускорение равны друг другу!
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🕊️ Что происходит при $x < 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = e^x$</div>
              <div class="card-body">
                <p class="card-text">При любом $x$: $e^x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = e^x$</div>
              <div class="card-body">
                <p class="card-text">$e^x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВЗЛЕТАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$<br>
                  <em>График вогнут вниз — разгоняется</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка разгоняется ещё под водой?</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = e^x$ (высота)</th><th>$y' = e^x$ (скорость)</th><th>$y'' = e^x$ (ускорение)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$-3$</th><th>$0.05$</th><th>$0.05$</th><th>$0.05$</th><th>🧜‍♀️ Почти под водой, чуть-чуть над</th>
              </tr>
              <tr class="table-info">
                <td>$-2$</th><th>$0.14$</th><th>$0.14$</th><th>$0.14$</th><th>🐣 Только вылупилась, еле ползёт</th>
              </tr>
              <tr class="table-success">
                <td>$-1$</th><th>$0.37$</th><th>$0.37$</th><th>$0.37$</th><th>🐥 Набирает скорость потихоньку</th>
              </tr>
              <tr class="table-success">
                <td>$0$</th><th>$1$</th><th>$1$</th><th>$1$</th><th>🕊️ Нормальная скорость 1</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Даже при отрицательных $x$ чайка уже <strong>над водой</strong> (хоть и низко)<br>
          и <strong>разгоняется</strong> ⚡, готовясь к стремительному взлёту!
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x < 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>над водой</strong> (хоть и низко) → $y > 0$<br>
          🚀 Чайка <strong>взлетает</strong> → $y' > 0$<br>
          ⚡ Взлетает <strong>всё быстрее</strong> → $y'' > 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 🚀 + ⚡ = $y' > 0$, $y'' > 0$</h4>
          <p class="text-muted">(как и при $x > 0$!)</p>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' > 0$
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_exponential_x_positive",
  "type": "multiplechoices",
  "header": "Анализ производных экспоненциальной функции",
  "title": "Знаки производных y = e^x на интервале x > 0",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = e^x$ на интервале $x > 0$ определите знаки первой и второй производных:",
  "functionType": "exponential",
  "func": (x) => Math.exp(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ производных $y = e^x$ на интервале $x > 0$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = e^x$, $y' = e^x$, $y'' = e^x$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x > 0$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Первая производная $y' = e^x$</div>
              <div class="card-body">
                <p class="card-text">$e^x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> (функция > 0)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$<br>
                  <em>Функция возрастает — чайка набирает высоту</em>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">Вторая производная $y'' = e^x$</div>
              <div class="card-body">
                <p class="card-text">$e^x > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВЗЛЕТАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$<br>
                  <em>График вогнут вниз — бешеный разгон</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — ракета улетает в космос</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = e^x$ (высота)</th><th>$y' = e^x$ (скорость)</th><th>$y'' = e^x$ (ускорение)</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-success">
                <td>$0$</th><th>$1$</th><th>$1$</th><th>$1$</th><th>🕊️ Старт! Скорость 1</th>
              </tr>
              <tr class="table-success">
                <td>$1$</th><th>$2.72$</th><th>$2.72$</th><th>$2.72$</th><th>🚀 Уже скорость 2.7!</th>
              </tr>
              <tr class="table-success">
                <td>$2$</th><th>$7.39$</th><th>$7.39$</th><th>$7.39$</th><th>⚡ Скорость 7.4 — растёт!</th>
              </tr>
              <tr class="table-success">
                <td>$3$</th><th>$20.09$</th><th>$20.09$</th><th>$20.09$</th><th>🚀🚀🚀 Скорость 20!</th>
              </tr>
              <tr class="table-success">
                <td>$4$</th><th>$54.60$</th><th>$54.60$</th><th>$54.60$</th><th>💫 Невероятный разгон!</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 <strong>Видите?</strong> Скорость и ускорение <strong>равны высоте</strong> и растут экспоненциально!<br>
          Чайка превратилась в 🚀 <strong>ракету</strong>, улетающую в космос!
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образный итог для $x > 0$</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🕊️ Чайка <strong>над водой</strong> → $y > 0$<br>
          🚀 Чайка <strong>взлетает</strong> → $y' > 0$<br>
          ⚡ Взлетает <strong>всё быстрее и быстрее</strong> → $y'' > 0$
        </div>
        <hr>
        <div class="text-center">
          <h4>🕊️ + 🚀 + ⚡ = $y' > 0$, $y'' > 0$</h4>
          <p class="text-muted">(и это невероятное ускорение!)</p>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y' > 0$, $y'' > 0$
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_exponential_comparison",
  "type": "multiplechoices",
  "header": "Сравнение скорости роста экспоненты",
  "title": "Скорость роста y = e^x на разных интервалах",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = e^x$ сравните значения первой производной $y'$ на интервалах $(-\\infty, 0)$ и $(0, +\\infty)$. Какое утверждение верно?",
  "functionType": "exponential",
  "func": (x) => Math.exp(x),
  "choices": [
    "$y'$ больше на интервале $(-\\infty, 0)$",
    "$y'$ больше на интервале $(0, +\\infty)$",
    "$y'$ одинакова на обоих интервалах",
    "$y'$ отрицательна на $(-\\infty, 0)$ и положительна на $(0, +\\infty)$",
    "$y' = 0$ на обоих интервалах"
  ],
  "answers": ["$y'$ больше на интервале $(0, +\\infty)$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Сравнение скорости роста $y = e^x$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Напоминание:</strong> $y' = e^x$ — это та же экспонента!
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card h-100 border-info">
          <div class="card-header bg-info text-white">
            <h5>🐣 На интервале $(-\\infty, 0)$</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-secondary">
              $x$ отрицательный → $e^x$ МАЛЕНЬКИЙ
            </div>
            <p class="card-text text-center mt-2">
              <strong>Числовые примеры:</strong><br>
              $x = -3$: $y' \\approx 0.05$ 🐌<br>
              $x = -2$: $y' \\approx 0.14$ 🐢<br>
              $x = -1$: $y' \\approx 0.37$ 🐥<br>
              $x = 0$: $y' = 1$ 
            </p>
            <div class="alert alert-info mt-2">
              💡 Чайка только <strong>вылупилась из яйца</strong> 🐣,<br>
              еле ползёт, набирается сил перед полётом.
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="card h-100 border-danger">
          <div class="card-header bg-danger text-white">
            <h5>🚀 На интервале $(0, +\\infty)$</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-secondary">
              $x$ положительный → $e^x$ ОГРОМНЫЙ
            </div>
            <p class="card-text text-center mt-2">
              <strong>Числовые примеры:</strong><br>
              $x = 0$: $y' = 1$<br>
              $x = 1$: $y' \\approx 2.72$ 🚀<br>
              $x = 2$: $y' \\approx 7.39$ ⚡<br>
              $x = 3$: $y' \\approx 20.09$ 💫
            </p>
            <div class="alert alert-danger mt-2">
              💡 Чайка превратилась в 🚀 <strong>ракету</strong>,<br>
              улетающую с бешеной скоростью!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- График производной -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📈 График $y' = e^x$ — та же экспонента</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-secondary">
          • При $x \\to -\\infty$: $y' \\to 0$ (скорость стремится к нулю)<br>
          • При $x = 0$: $y' = 1$<br>
          • При $x \\to +\\infty$: $y' \\to +\\infty$ (скорость стремится к бесконечности)
        </div>
        <div class="alert alert-warning mt-2">
          ✅ <strong>Вывод:</strong> Скорость <strong>минимальна</strong> при $x \\to -\\infty$ (чайка только родилась)<br>
          и <strong>максимальна</strong> при $x \\to +\\infty$ (ракета улетает в космос)!
        </div>
      </div>
    </div>

    <!-- Образный итог -->
    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>🕊️ Образное сравнение</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-success">
          🐣 <strong>На интервале $(-\\infty, 0)$:</strong><br>
          Чайка только вылупилась, еле дышит, скорость почти нулевая 🐌<br><br>
          🚀 <strong>На интервале $(0, +\\infty)$:</strong><br>
          Чайка превратилась в ракету, скорость растёт экспоненциально и улетает в бесконечность! 💫
        </div>
        <hr>
        <div class="text-center">
          <h4>📈 Экспонента: от 0 до ∞ за мгновение!</h4>
        </div>
      </div>
      <div class="card-footer bg-warning text-dark">
        <strong>✅ Правильный ответ:</strong> $y'$ больше на интервале $(0, +\\infty)$
      </div>
    </div>

    <!-- Ассоциативная таблица -->
    <div class="card mt-3 border-secondary">
      <div class="card-header bg-secondary text-white">
        <h5>📋 Сравнительная таблица</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>Интервал</th><th>Образ</th><th>$x$</th><th>$y' = e^x$</th><th>Скорость</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$(-\\infty, 0)$</th><th>🐣 Птенец</th><th>$-3$</th><th>$0.05$</th><th>🐌 ОЧЕНЬ МАЛЕНЬКАЯ</th>
              </tr>
              <tr class="table-danger">
                <td>$(0, +\\infty)$</th><th>🚀 Ракета</th><th>$3$</th><th>$20.09$</th><th>💫 ОГРОМНАЯ</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</div>`
},

{
  "id": "derivative_sinus_interval_1",
  "type": "multiplechoices",
  "header": "Анализ производных синуса",
  "title": "Знаки производных y = sin(x) на интервале (0, π/2)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\sin(x)$ на интервале $x \\in (0, \\frac{\\pi}{2})$ определите знаки первой и второй производных:",
  "functionType": "sinus",
  "func": (x) => Math.sin(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ $y = \\sin(x)$ на $(0, \\frac{\\pi}{2})$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\sin(x)$, $y' = \\cos(x)$, $y'' = -\\sin(x)$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x \\in (0, \\frac{\\pi}{2})$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = \\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (0, \\frac{\\pi}{2})$: $\\cos(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> ($y > 0$)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (0, \\frac{\\pi}{2})$: $\\sin(x) > 0$ ⇒ $-\\sin(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ВЗЛЕТАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка набирает высоту, но устаёт</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\sin(x)$</th><th>$y' = \\cos(x)$</th><th>$y'' = -\\sin(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</th><th>$0$</th><th>$1$</th><th>$0$</th><th>🕊️ Старт! Максимальная скорость 1</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/6$</th><th>$0.5$</th><th>$0.87$</th><th>$-0.5$</th><th>🚀 Взлетает, скорость 0.87</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/4$</th><th>$0.71$</th><th>$0.71$</th><th>$-0.71$</th><th>🐢 Скорость упала до 0.71</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/3$</th><th>$0.87$</th><th>$0.5$</th><th>$-0.87$</th><th>🐢 Совсем медленно, почти у пика</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 Чайка 🕊️ взлетает с максимальной скоростью в момент старта ($x=0$),<br>
          но постепенно <strong>замедляется</strong> 🐢, приближаясь к пику ($x = \\pi/2$).
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' > 0$, $y'' < 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_sinus_interval_2",
  "type": "multiplechoices",
  "header": "Анализ производных синуса",
  "title": "Знаки производных y = sin(x) на интервале (π/2, π)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\sin(x)$ на интервале $x \\in (\\frac{\\pi}{2}, \\pi)$ определите знаки первой и второй производных:",
  "functionType": "sinus",
  "func": (x) => Math.sin(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' < 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ $y = \\sin(x)$ на $(\\frac{\\pi}{2}, \\pi)$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\sin(x)$, $y' = \\cos(x)$, $y'' = -\\sin(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🕊️ Что происходит при $x \\in (\\frac{\\pi}{2}, \\pi)$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = \\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{\\pi}{2}, \\pi)$: $\\cos(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> ($y > 0$)<br>
                  📉 <strong>ПАДАЕТ</strong> → $y' < 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{\\pi}{2}, \\pi)$: $\\sin(x) > 0$ ⇒ $-\\sin(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ПАДАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка падает, замедляясь</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\sin(x)$</th><th>$y' = \\cos(x)$</th><th>$y'' = -\\sin(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$\\pi/2$</th><th>$1$</th><th>$0$</th><th>$-1$</th><th>🕊️ Пик, мгновение покоя</th>
              </tr>
              <tr class="table-success">
                <td>$2\\pi/3$</th><th>$0.87$</th><th>$-0.5$</th><th>$-0.87$</th><th>📉 Начала падать, скорость -0.5</th>
              </tr>
              <tr class="table-success">
                <td>$3\\pi/4$</th><th>$0.71$</th><th>$-0.71$</th><th>$-0.71$</th><th>🐢 Падает быстрее, но замедляется</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/6$</th><th>$0.5$</th><th>$-0.87$</th><th>$-0.5$</th><th>🐢 Почти у воды</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' < 0$, $y'' < 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_sinus_interval_3",
  "type": "multiplechoices",
  "header": "Анализ производных синуса",
  "title": "Знаки производных y = sin(x) на интервале (π, 3π/2)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\sin(x)$ на интервале $x \\in (\\pi, \\frac{3\\pi}{2})$ определите знаки первой и второй производных:",
  "functionType": "sinus",
  "func": (x) => Math.sin(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' < 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🧜‍♀️ Анализ $y = \\sin(x)$ на $(\\pi, \\frac{3\\pi}{2})$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\sin(x)$, $y' = \\cos(x)$, $y'' = -\\sin(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-danger">
      <div class="card-header bg-danger text-white">
        <h5>🧜‍♀️ Что происходит при $x \\in (\\pi, \\frac{3\\pi}{2})$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = \\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\pi, \\frac{3\\pi}{2})$: $\\cos(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🧜‍♀️ <strong>РУСАЛКА</strong> ($y < 0$)<br>
                  📉 <strong>ПАДАЕТ ГЛУБЖЕ</strong> → $y' < 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\pi, \\frac{3\\pi}{2})$: $\\sin(x) < 0$ ⇒ $-\\sin(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ПАДАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — русалка ныряет с ускорением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\sin(x)$</th><th>$y' = \\cos(x)$</th><th>$y'' = -\\sin(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$\\pi$</th><th>$0$</th><th>$-1$</th><th>$0$</th><th>🌊 На поверхности, ныряет</th>
              </tr>
              <tr class="table-success">
                <td>$7\\pi/6$</th><th>$-0.5$</th><th>$-0.87$</th><th>$0.5$</th><th>🧜‍♀️ Ныряет, скорость -0.87</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/4$</th><th>$-0.71$</th><th>$-0.71$</th><th>$0.71$</th><th>⚡ Разгоняется в глубину</th>
              </tr>
              <tr class="table-success">
                <td>$4\\pi/3$</th><th>$-0.87$</th><th>$-0.5$</th><th>$0.87$</th><th>⚡⚡ Всё быстрее!</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' < 0$, $y'' > 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_sinus_interval_4",
  "type": "multiplechoices",
  "header": "Анализ производных синуса",
  "title": "Знаки производных y = sin(x) на интервале (3π/2, 2π)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\sin(x)$ на интервале $x \\in (\\frac{3\\pi}{2}, 2\\pi)$ определите знаки первой и второй производных:",
  "functionType": "sinus",
  "func": (x) => Math.sin(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🧜‍♀️ Анализ $y = \\sin(x)$ на $(\\frac{3\\pi}{2}, 2\\pi)$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\sin(x)$, $y' = \\cos(x)$, $y'' = -\\sin(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🧜‍♀️ Что происходит при $x \\in (\\frac{3\\pi}{2}, 2\\pi)$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = \\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{3\\pi}{2}, 2\\pi)$: $\\cos(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🧜‍♀️ <strong>РУСАЛКА</strong> ($y < 0$)<br>
                  🚀 <strong>ВСПЛЫВАЕТ</strong> → $y' > 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{3\\pi}{2}, 2\\pi)$: $\\sin(x) < 0$ ⇒ $-\\sin(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВСПЛЫВАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — русалка выплывает с ускорением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\sin(x)$</th><th>$y' = \\cos(x)$</th><th>$y'' = -\\sin(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$3\\pi/2$</th><th>$-1$</th><th>$0$</th><th>$1$</th><th>🧜‍♀️ На дне, мгновение покоя</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/3$</th><th>$-0.87$</th><th>$0.5$</th><th>$0.87$</th><th>🚀 Начала всплывать, скорость 0.5</th>
              </tr>
              <tr class="table-success">
                <td>$7\\pi/4$</th><th>$-0.71$</th><th>$0.71$</th><th>$0.71$</th><th>⚡ Разгоняется</th>
              </tr>
              <tr class="table-success">
                <td>$11\\pi/6$</th><th>$-0.5$</th><th>$0.87$</th><th>$0.5$</th><th>⚡⚡ Всё быстрее к поверхности</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' > 0$, $y'' > 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_cosine_interval_1",
  "type": "multiplechoices",
  "header": "Анализ производных косинуса",
  "title": "Знаки производных y = cos(x) на интервале (0, π/2)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\cos(x)$ на интервале $x \\in (0, \\frac{\\pi}{2})$ определите знаки первой и второй производных:",
  "functionType": "cosine",
  "func": (x) => Math.cos(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' < 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ $y = \\cos(x)$ на $(0, \\frac{\\pi}{2})$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\cos(x)$, $y' = -\\sin(x)$, $y'' = -\\cos(x)$
    </div>

    <!-- Образная шпаргалка -->
    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ (над водой) &nbsp;&nbsp;|&nbsp;&nbsp;
      🧜‍♀️ Русалка = $y < 0$ (под водой)<br>
      🚀 Взлетает = $y' > 0$ (возрастает) &nbsp;&nbsp;|&nbsp;&nbsp;
      📉 Падает = $y' < 0$ (убывает)<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;&nbsp;|&nbsp;&nbsp;
      🐢 Всё медленнее = $y'' < 0$
    </div>

    <!-- Графическая метафора -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>🕊️ Что происходит при $x \\in (0, \\frac{\\pi}{2})$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (0, \\frac{\\pi}{2})$: $\\sin(x) > 0$ ⇒ $-\\sin(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> ($y > 0$)<br>
                  📉 <strong>ПАДАЕТ</strong> → $y' < 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (0, \\frac{\\pi}{2})$: $\\cos(x) > 0$ ⇒ $-\\cos(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ПАДАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Числовой пример -->
    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка падает с замедлением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\cos(x)$</th><th>$y' = -\\sin(x)$</th><th>$y'' = -\\cos(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</th><th>$1$</th><th>$0$</th><th>$-1$</th><th>🕊️ На пике, мгновение покоя</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/6$</th><th>$0.87$</th><th>$-0.5$</th><th>$-0.87$</th><th>📉 Начала падать, скорость -0.5</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/4$</th><th>$0.71$</th><th>$-0.71$</th><th>$-0.71$</th><th>🐢 Падает, замедляясь</th>
              </tr>
              <tr class="table-success">
                <td>$\\pi/3$</th><th>$0.5$</th><th>$-0.87$</th><th>$-0.5$</th><th>🐢 Почти у воды</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-warning mt-3">
          💡 Чайка 🕊️ начинает падать с максимальной скоростью в середине интервала,<br>
          но постепенно <strong>замедляется</strong> 🐢, приближаясь к нулю.
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' < 0$, $y'' < 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_cosine_interval_2",
  "type": "multiplechoices",
  "header": "Анализ производных косинуса",
  "title": "Знаки производных y = cos(x) на интервале (π/2, π)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\cos(x)$ на интервале $x \\in (\\frac{\\pi}{2}, \\pi)$ определите знаки первой и второй производных:",
  "functionType": "cosine",
  "func": (x) => Math.cos(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' < 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🧜‍♀️ Анализ $y = \\cos(x)$ на $(\\frac{\\pi}{2}, \\pi)$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\cos(x)$, $y' = -\\sin(x)$, $y'' = -\\cos(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-danger">
      <div class="card-header bg-danger text-white">
        <h5>🧜‍♀️ Что происходит при $x \\in (\\frac{\\pi}{2}, \\pi)$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{\\pi}{2}, \\pi)$: $\\sin(x) > 0$ ⇒ $-\\sin(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🧜‍♀️ <strong>РУСАЛКА</strong> ($y < 0$)<br>
                  📉 <strong>ПАДАЕТ ГЛУБЖЕ</strong> → $y' < 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{\\pi}{2}, \\pi)$: $\\cos(x) < 0$ ⇒ $-\\cos(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ПАДАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — русалка ныряет с ускорением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\cos(x)$</th><th>$y' = -\\sin(x)$</th><th>$y'' = -\\cos(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$\\pi/2$</th><th>$0$</th><th>$-1$</th><th>$0$</th><th>🌊 На поверхности, начинает нырять</th>
              </tr>
              <tr class="table-success">
                <td>$2\\pi/3$</th><th>$-0.5$</th><th>$-0.87$</th><th>$0.5$</th><th>🧜‍♀️ Ныряет, скорость -0.87</th>
              </tr>
              <tr class="table-success">
                <td>$3\\pi/4$</th><th>$-0.71$</th><th>$-0.71$</th><th>$0.71$</th><th>⚡ Разгоняется в глубину</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/6$</th><th>$-0.87$</th><th>$-0.5$</th><th>$0.87$</th><th>⚡⚡ Всё быстрее!</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' < 0$, $y'' > 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_cosine_interval_3",
  "type": "multiplechoices",
  "header": "Анализ производных косинуса",
  "title": "Знаки производных y = cos(x) на интервале (π, 3π/2)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\cos(x)$ на интервале $x \\in (\\pi, \\frac{3\\pi}{2})$ определите знаки первой и второй производных:",
  "functionType": "cosine",
  "func": (x) => Math.cos(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' > 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🧜‍♀️ Анализ $y = \\cos(x)$ на $(\\pi, \\frac{3\\pi}{2})$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\cos(x)$, $y' = -\\sin(x)$, $y'' = -\\cos(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🧜‍♀️ Что происходит при $x \\in (\\pi, \\frac{3\\pi}{2})$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\pi, \\frac{3\\pi}{2})$: $\\sin(x) < 0$ ⇒ $-\\sin(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🧜‍♀️ <strong>РУСАЛКА</strong> ($y < 0$)<br>
                  🚀 <strong>ВСПЛЫВАЕТ</strong> → $y' > 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\pi, \\frac{3\\pi}{2})$: $\\cos(x) < 0$ ⇒ $-\\cos(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  ⚡ <strong>ВСПЛЫВАЕТ ВСЁ БЫСТРЕЕ</strong> → $y'' > 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — русалка выплывает с ускорением</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\cos(x)$</th><th>$y' = -\\sin(x)$</th><th>$y'' = -\\cos(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$\\pi$</th><th>$-1$</th><th>$0$</th><th>$1$</th><th>🧜‍♀️ На дне, начинает всплывать</th>
              </tr>
              <tr class="table-success">
                <td>$7\\pi/6$</th><th>$-0.87$</th><th>$0.5$</th><th>$0.87$</th><th>🚀 Начала всплывать, скорость 0.5</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/4$</th><th>$-0.71$</th><th>$0.71$</th><th>$0.71$</th><th>⚡ Разгоняется</th>
              </tr>
              <tr class="table-success">
                <td>$4\\pi/3$</th><th>$-0.5$</th><th>$0.87$</th><th>$0.5$</th><th>⚡⚡ Всё быстрее к поверхности</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' > 0$, $y'' > 0$</h5>
      </div>
    </div>
  </div>
</div>`
},

{
  "id": "derivative_cosine_interval_4",
  "type": "multiplechoices",
  "header": "Анализ производных косинуса",
  "title": "Знаки производных y = cos(x) на интервале (3π/2, 2π)",
  "theme": "Числа и производные",
  "functionGraph": "true",
  "text": "Для функции $y = \\cos(x)$ на интервале $x \\in (\\frac{3\\pi}{2}, 2\\pi)$ определите знаки первой и второй производных:",
  "functionType": "cosine",
  "func": (x) => Math.cos(x),
  "choices": [
    "$y' > 0$, $y'' > 0$",
    "$y' > 0$, $y'' < 0$",
    "$y' < 0$, $y'' > 0$",
    "$y' < 0$, $y'' < 0$",
    "$y' = 0$, $y'' = 0$"
  ],
  "answers": ["$y' > 0$, $y'' < 0$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>🕊️ Анализ $y = \\cos(x)$ на $(\\frac{3\\pi}{2}, 2\\pi)$</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Исходные данные:</strong> $y = \\cos(x)$, $y' = -\\sin(x)$, $y'' = -\\cos(x)$
    </div>

    <div class="alert alert-info mb-3">
      <strong>🎭 Образные ассоциации:</strong><br>
      🕊️ Чайка = $y > 0$ &nbsp;|&nbsp; 🧜‍♀️ Русалка = $y < 0$<br>
      🚀 Взлетает = $y' > 0$ &nbsp;|&nbsp; 📉 Падает = $y' < 0$<br>
      ⚡ Всё быстрее = $y'' > 0$ &nbsp;|&nbsp; 🐢 Всё медленнее = $y'' < 0$
    </div>

    <div class="card mb-3 border-success">
      <div class="card-header bg-success text-white">
        <h5>🕊️ Что происходит при $x \\in (\\frac{3\\pi}{2}, 2\\pi)$?</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y' = -\\sin(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{3\\pi}{2}, 2\\pi)$: $\\sin(x) < 0$ ⇒ $-\\sin(x) > 0$</p>
                <div class="alert alert-success mt-2 mb-0">
                  🕊️ <strong>ЧАЙКА</strong> ($y > 0$)<br>
                  🚀 <strong>ВЗЛЕТАЕТ</strong> → $y' > 0$
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-2">
              <div class="card-header bg-info text-white">$y'' = -\\cos(x)$</div>
              <div class="card-body">
                <p class="card-text">При $x \\in (\\frac{3\\pi}{2}, 2\\pi)$: $\\cos(x) > 0$ ⇒ $-\\cos(x) < 0$</p>
                <div class="alert alert-danger mt-2 mb-0">
                  🐢 <strong>ВЗЛЕТАЕТ, НО ВСЁ МЕДЛЕННЕЕ</strong> → $y'' < 0$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 border-primary">
      <div class="card-header bg-primary text-white">
        <h5>📊 Числовой пример — чайка взлетает, замедляясь</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = \\cos(x)$</th><th>$y' = -\\sin(x)$</th><th>$y'' = -\\cos(x)$</th><th>Образ</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$3\\pi/2$</th><th>$0$</th><th>$1$</th><th>$0$</th><th>🌊 У поверхности, начинает взлёт</th>
              </tr>
              <tr class="table-success">
                <td>$5\\pi/3$</th><th>$0.5$</th><th>$0.87$</th><th>$-0.5$</th><th>🚀 Взлетает, скорость 0.87</th>
              </tr>
              <tr class="table-success">
                <td>$7\\pi/4$</th><th>$0.71$</th><th>$0.71$</th><th>$-0.71$</th><th>🐢 Замедляется</th>
              </tr>
              <tr class="table-success">
                <td>$11\\pi/6$</th><th>$0.87$</th><th>$0.5$</th><th>$-0.87$</th><th>🐢 Почти у пика</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mt-2 border-warning">
      <div class="card-header bg-warning text-dark">
        <h5>✅ Правильный ответ: $y' > 0$, $y'' < 0$</h5>
      </div>
    </div>
  </div>
</div>`
},























  {
    "id": "quadraticroots001",
    "type": "multiplechoices",
    "header": "Анализ квадратичных функций",
    "title": "Определение количества корней квадратного уравнения 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Сколько корней имеет данное квадратное уравнение?",
    "functionType": "quadratic_2roots",
    "func": (x) => x * x - 3 * x + 2, // (x-1)(x-2) = x² - 3x + 2
    "choices": [
      "0 корней",
      "1 корень",
      "2 корня",
      "3 корня",
      "Бесконечно много корней"
    ],
    "answers": ["2 корня"],
    "hint": "Дискриминант D = b² - 4ac = (-3)² - 4×1×2 = 9 - 8 = 1 > 0, значит уравнение имеет 2 различных действительных корня."
  },
  {
    "id": "quadraticroots002",
    "type": "multiplechoices",
    "header": "Анализ квадратичных функций",
    "title": "Определение количества корней квадратного уравнения 2",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Сколько корней имеет данное квадратное уравнение?",
    "functionType": "quadratic_1root",
    "func": (x) => x * x - 4 * x + 4, // (x-2)² = x² - 4x + 4
    "choices": [
      "0 корней",
      "1 корень",
      "2 корня",
      "3 корня",
      "Бесконечно много корней"
    ],
    "answers": ["1 корень"],
    "hint": "Дискриминант D = b² - 4ac = (-4)² - 4×1×4 = 16 - 16 = 0, значит уравнение имеет 1 действительный корень (кратности 2)."
  },
  {
    "id": "quadraticroots003",
    "type": "multiplechoices",
    "header": "Анализ квадратичных функций",
    "title": "Определение количества корней квадратного уравнения 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Сколько корней имеет данное квадратное уравнение?",
    "functionType": "quadratic_0roots",
    "func": (x) => x * x + 2 * x + 5, // D = 4 - 20 = -16 < 0
    "choices": [
      "0 корней",
      "1 корень",
      "2 корня",
      "3 корня",
      "Бесконечно много корней"
    ],
    "answers": ["0 корней"],
    "hint": "Дискриминант D = b² - 4ac = 2² - 4×1×5 = 4 - 20 = -16 < 0, значит уравнение не имеет действительных корней."
  },
  {
    "id": "quadraticroots004",
    "type": "multiplechoices",
    "header": "Анализ квадратичных функций",
    "title": "Определение количества корней квадратного уравнения 4",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Сколько корней имеет данное квадратное уравнение?",
    "functionType": "quadratic_2roots_negative",
    "func": (x) => -x * x + x + 2, // -x² + x + 2, D = 1 + 8 = 9 > 0
    "choices": [
      "0 корней",
      "1 корень",
      "2 корня",
      "3 корня",
      "Бесконечно много корней"
    ],
    "answers": ["2 корня"],
    "hint": "Дискриминант D = b² - 4ac = 1² - 4×(-1)×2 = 1 + 8 = 9 > 0, значит уравнение имеет 2 различных действительных корня, даже если парабола направлена вниз."
  },

  {
    "id": "linearcoeff001",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_positive",
    "func": (x) => 2 * x + 1,
    "choices": [
      "k = 2, b = 1",
      "k = 1, b = 2",
      "k = 3, b = 0",
      "k = 2, b = -1",
      "k = -2, b = 1"
    ],
    "answers": ["k = 2, b = 1"],
    "hint": "Функция пересекает ось Y в точке (0,1) - это b. Угловой коэффициент k = 2 (при изменении x на 1, y изменяется на 2)."
  },
  {
    "id": "linearcoeff002",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 2",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_negative_k",
    "func": (x) => -2 * x + 3,
    "choices": [
      "k = -2, b = 3",
      "k = 2, b = 3",
      "k = -3, b = 2",
      "k = -2, b = -3",
      "k = 3, b = -2"
    ],
    "answers": ["k = -2, b = 3"],
    "hint": "Функция пересекает ось Y в точке (0,3) - это b. Угловой коэффициент отрицательный k = -2 (функция убывает)."
  },
  {
    "id": "linearcoeff003",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_zero_b",
    "func": (x) => 3 * x,
    "choices": [
      "k = 3, b = 0",
      "k = 0, b = 3",
      "k = 1, b = 3",
      "k = 3, b = 1",
      "k = -3, b = 0"
    ],
    "answers": ["k = 3, b = 0"],
    "hint": "Функция проходит через начало координат (0,0) - значит b = 0. Угловой коэффициент k = 3."
  },
  {
    "id": "linearcoeff004",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 4",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_negative_b",
    "func": (x) => 1 * x - 2,
    "choices": [
      "k = 1, b = -2",
      "k = -1, b = 2",
      "k = 2, b = -1",
      "k = 1, b = 2",
      "k = -2, b = 1"
    ],
    "answers": ["k = 1, b = -2"],
    "hint": "Функция пересекает ось Y в точке (0,-2) - это b. Угловой коэффициент положительный k = 1."
  },
  {
    "id": "linearcoeff005",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 5",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_both_negative",
    "func": (x) => -1 * x - 3,
    "choices": [
      "k = -1, b = -3",
      "k = -3, b = -1",
      "k = 1, b = -3",
      "k = -1, b = 3",
      "k = 3, b = -1"
    ],
    "answers": ["k = -1, b = -3"],
    "hint": "Функция пересекает ось Y в точке (0,-3) - это b. Угловой коэффициент отрицательный k = -1."
  },
  {
    "id": "linearcoeff006",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 6",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_steep",
    "func": (x) => 4 * x - 1,
    "choices": [
      "k = 4, b = -1",
      "k = 3, b = -1",
      "k = 4, b = 1",
      "k = -4, b = -1",
      "k = 2, b = -1"
    ],
    "answers": ["k = 4, b = -1"],
    "hint": "Функция пересекает ось Y в точке (0,-1) - это b. Крутой наклон указывает на большой угловой коэффициент k = 4."
  },
  {
    "id": "linearcoeff007",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 7",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_flat",
    "func": (x) => 0.5 * x + 2,
    "choices": [
      "k = 0.5, b = 2",
      "k = 2, b = 0.5",
      "k = 1, b = 2",
      "k = 0.5, b = -2",
      "k = -0.5, b = 2"
    ],
    "answers": ["k = 0.5, b = 2"],
    "hint": "Функция пересекает ось Y в точке (0,2) - это b. Пологий наклон указывает на маленький угловой коэффициент k = 0.5."
  },
  {
    "id": "linearcoeff008",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 8",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_negative_steep",
    "func": (x) => -3 * x + 1,
    "choices": [
      "k = -3, b = 1",
      "k = 3, b = 1",
      "k = -2, b = 1",
      "k = -3, b = -1",
      "k = 1, b = -3"
    ],
    "answers": ["k = -3, b = 1"],
    "hint": "Функция пересекает ось Y в точке (0,1) - это b. Крутой отрицательный наклон указывает на k = -3."
  },
  {
    "id": "linearcoeff009",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 9",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_horizontal",
    "func": (x) => 0 * x + 2,
    "choices": [
      "k = 0, b = 2",
      "k = 2, b = 0",
      "k = 1, b = 2",
      "k = 0, b = -2",
      "k = -2, b = 0"
    ],
    "answers": ["k = 0, b = 2"],
    "hint": "Горизонтальная линия означает, что угловой коэффициент k = 0. Функция пересекает ось Y в точке (0,2) - это b."
  },
  {
    "id": "linearcoeff010",
    "type": "multiplechoices",
    "header": "Анализ линейных функций",
    "title": "Определение коэффициентов линейной функции 10",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Определите коэффициенты k и b в уравнении y = kx + b для данного графика:",
    "functionType": "linear_through_origin",
    "func": (x) => -2 * x,
    "choices": [
      "k = -2, b = 0",
      "k = 2, b = 0",
      "k = 0, b = -2",
      "k = -1, b = 0",
      "k = -2, b = 1"
    ],
    "answers": ["k = -2, b = 0"],
    "hint": "Функция проходит через начало координат (0,0) - значит b = 0. Отрицательный наклон указывает на k = -2."
  },















   {
    "id": "system001",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 2x + 1<br>y = -x + 4",
    "functionType": "system_intersect",
    "func": (x) => [2 * x + 1, -x + 4],
    "choices": [
      "x = 1, y = 3",
      "x = 2, y = 5",
      "x = 3, y = 2",
      "x = 1, y = 2",
      "x = 2, y = 3"
    ],
    "answers": ["x = 1, y = 3"],
    "hint": "Решаем систему: 2x + 1 = -x + 4 ⇒ 3x = 3 ⇒ x = 1, подставляем: y = 2×1 + 1 = 3"
  },
  {
    "id": "system002",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 2",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = x + 2<br>y = 3x - 2",
    "functionType": "system_intersect2",
    "func": (x) => [x + 2, 3 * x - 2],
    "choices": [
      "x = 2, y = 4",
      "x = 1, y = 3",
      "x = 3, y = 5",
      "x = 2, y = 3",
      "x = 1, y = 4"
    ],
    "answers": ["x = 2, y = 4"],
    "hint": "Решаем систему: x + 2 = 3x - 2 ⇒ 4 = 2x ⇒ x = 2, подставляем: y = 2 + 2 = 4"
  },
  {
    "id": "system003",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 3",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = -2x + 5<br>y = x - 1",
    "functionType": "system_intersect3",
    "func": (x) => [-2 * x + 5, x - 1],
    "choices": [
      "x = 2, y = 1",
      "x = 1, y = 0",
      "x = 3, y = 2",
      "x = 2, y = 2",
      "x = 1, y = 3"
    ],
    "answers": ["x = 2, y = 1"],
    "hint": "Решаем систему: -2x + 5 = x - 1 ⇒ 6 = 3x ⇒ x = 2, подставляем: y = 2 - 1 = 1"
  },
  {
    "id": "system004",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 4",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 0.5x + 1<br>y = -x + 4",
    "functionType": "system_intersect4",
    "func": (x) => [0.5 * x + 1, -x + 4],
    "choices": [
      "x = 2, y = 2",
      "x = 3, y = 2.5",
      "x = 2, y = 3",
      "x = 1, y = 1.5",
      "x = 4, y = 0"
    ],
    "answers": ["x = 2, y = 2"],
    "hint": "Решаем систему: 0.5x + 1 = -x + 4 ⇒ 1.5x = 3 ⇒ x = 2, подставляем: y = 0.5×2 + 1 = 2"
  },
  {
    "id": "system005",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 5",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 3x - 1<br>y = -2x + 9",
    "functionType": "system_intersect5",
    "func": (x) => [3 * x - 1, -2 * x + 9],
    "choices": [
      "x = 2, y = 5",
      "x = 3, y = 8",
      "x = 1, y = 2",
      "x = 2, y = 7",
      "x = 3, y = 3"
    ],
    "answers": ["x = 2, y = 5"],
    "hint": "Решаем систему: 3x - 1 = -2x + 9 ⇒ 5x = 10 ⇒ x = 2, подставляем: y = 3×2 - 1 = 5"
  },
  {
    "id": "system006",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 6",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 4x - 3<br>y = x + 3",
    "functionType": "system_intersect6",
    "func": (x) => [4 * x - 3, x + 3],
    "choices": [
      "x = 2, y = 5",
      "x = 1, y = 4",
      "x = 3, y = 6",
      "x = 2, y = 6",
      "x = 1, y = 5"
    ],
    "answers": ["x = 2, y = 5"],
    "hint": "Решаем систему: 4x - 3 = x + 3 ⇒ 3x = 6 ⇒ x = 2, подставляем: y = 2 + 3 = 5"
  },
  {
    "id": "system007",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 7",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = -3x + 7<br>y = 2x - 3",
    "functionType": "system_intersect7",
    "func": (x) => [-3 * x + 7, 2 * x - 3],
    "choices": [
      "x = 2, y = 1",
      "x = 1, y = 4",
      "x = 3, y = 3",
      "x = 2, y = 2",
      "x = 1, y = 1"
    ],
    "answers": ["x = 2, y = 1"],
    "hint": "Решаем систему: -3x + 7 = 2x - 3 ⇒ 10 = 5x ⇒ x = 2, подставляем: y = 2×2 - 3 = 1"
  },
  {
    "id": "system008",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 8",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 2x - 2<br>y = -x + 7",
    "functionType": "system_intersect8",
    "func": (x) => [2 * x - 2, -x + 7],
    "choices": [
      "x = 3, y = 4",
      "x = 2, y = 2",
      "x = 4, y = 6",
      "x = 3, y = 5",
      "x = 2, y = 5"
    ],
    "answers": ["x = 3, y = 4"],
    "hint": "Решаем систему: 2x - 2 = -x + 7 ⇒ 3x = 9 ⇒ x = 3, подставляем: y = 2×3 - 2 = 4"
  },
  {
    "id": "system009",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 9",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = x + 1<br>y = -2x + 10",
    "functionType": "system_intersect9",
    "func": (x) => [x + 1, -2 * x + 10],
    "choices": [
      "x = 3, y = 4",
      "x = 2, y = 3",
      "x = 4, y = 5",
      "x = 3, y = 5",
      "x = 2, y = 4"
    ],
    "answers": ["x = 3, y = 4"],
    "hint": "Решаем систему: x + 1 = -2x + 10 ⇒ 3x = 9 ⇒ x = 3, подставляем: y = 3 + 1 = 4"
  },
  {
    "id": "system010",
    "type": "multiplechoices",
    "header": "Системы линейных уравнений",
    "title": "Решение системы уравнений по графикам 10",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Найдите решение системы уравнений (точку пересечения графиков):<br>y = 0.5x + 2<br>y = -3x + 8",
    "functionType": "system_intersect10",
    "func": (x) => [0.5 * x + 2, -3 * x + 8],
    "choices": [
      "x = 2, y = 3",
      "x = 1, y = 2.5",
      "x = 3, y = 3.5",
      "x = 2, y = 2",
      "x = 1, y = 5"
    ],
    "answers": ["x = 2, y = 3"],
    "hint": "Решаем систему: 0.5x + 2 = -3x + 8 ⇒ 3.5x = 6 ⇒ x = 2, подставляем: y = 0.5×2 + 2 = 3"
  },

  


  {
    "id": "derivative001",
    "type": "multiplechoices",
    "header": "Производная и касательная",
    "title": "Определение производной в точке 1",
    "theme": "Производная",
    "functionGraph": "true",
    "text": "Чему равен тангенс угла наклона касательной к графику функции y = x² в точке x = 0?",
    "functionType": "quadratic",
    "func": (x) => x * x,
    "pointX": 0,
    "choices": [
      "Больше нуля",
      "Меньше нуля", 
      "Равен нулю",
      "Не определена",
      "Бесконечность"
    ],
    "answers": ["Равен нулю"],
    "hint": "В вершине параболы y = x² касательная горизонтальна. Производная y' = 2x, при x=0: y'(0) = 0."
  },


  {
    "id": "der001",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "functionType": "linear_x",
    "func": (x) => x,
    "title": "Производная линейной функции y = x",
    "theme": "Производная функции y = x",
    "text": "Чему равна производная функции $y = x$?",
    "choices": [
      "0",
      "1",
      "x",
      "$\\frac{1}{x}$",
      "$x^2$"
    ],
    "answers": ["1"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство через предел:</h5>
<p>По определению производной: $f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$</p>
<p>Для функции $y = x$:</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{(x + \\Delta x) - x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{\\Delta x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} 1 = 1$</p>
<p>Таким образом, $(x)' = 1$.</p>
<p><strong>Геометрический смысл:</strong> производная равна угловому коэффициенту касательной. Для прямой $y = x$ угол наклона равен 45°, $tg(45°) = 1$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der002",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "functionType": "linear_2x",
    "func": (x) => x,
    "title": "Производная функции y = 2x",
    "theme": "Производная функции y = 2x",
    "text": "Чему равна производная функции $y = 2x$?",
    "choices": [
      "0",
      "1",
      "2",
      "$2x$",
      "$\\frac{1}{2}$"
    ],
    "answers": ["2"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство через предел:</h5>
<p>По определению производной: $f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$</p>
<p>Для функции $y = 2x$:</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{2(x + \\Delta x) - 2x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{2x + 2\\Delta x - 2x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{2\\Delta x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} 2 = 2$</p>
<p>Таким образом, $(2x)' = 2$.</p>
<p><strong>Общее правило:</strong> $(kx)' = k$, где $k$ — постоянный коэффициент.</p>
<p><strong>Геометрический смысл:</strong> угловой коэффициент прямой $y = 2x$ равен 2.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der003",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная функции y = 3x",
    "theme": "Производная функции y = 3x",
    "functionType": "linear_3x",
    "func": (x) => 3*x,
    "text": "Чему равна производная функции $y = 3x$?",
    "choices": [
      "0",
      "1",
      "3",
      "$3x$",
      "$\\frac{1}{3}$"
    ],
    "answers": ["3"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство через предел:</h5>
<p>Используем определение производной: $f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$</p>
<p>Для $y = 3x$:</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{3(x + \\Delta x) - 3x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{3x + 3\\Delta x - 3x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{3\\Delta x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} 3 = 3$</p>
<p>Таким образом, $(3x)' = 3$.</p>
<p><strong>Можно также использовать правило:</strong> производная константы, умноженной на функцию, равна константе, умноженной на производную функции: $(k \\cdot x)' = k \\cdot (x)' = k \\cdot 1 = k$.</p>
<p>В данном случае $k = 3$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der004",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная функции y = 4x",
    "theme": "Производная функции y = 4x",
    "text": "Чему равна производная функции $y = 4x$?",
    "functionType": "linear_4x",
    "func": (x) => 4*x,
    "choices": [
      "0",
      "1",
      "4",
      "$4x$",
      "$\\frac{1}{4}$"
    ],
    "answers": ["4"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство через предел:</h5>
<p>Применим определение производной: $f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$</p>
<p>Для функции $y = 4x$:</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{4(x + \\Delta x) - 4x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{4x + 4\\Delta x - 4x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{4\\Delta x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} 4 = 4$</p>
<p>Таким образом, $(4x)' = 4$.</p>
<p><strong>Общая формула:</strong> для любой линейной функции $y = kx + b$ производная равна $k$ — коэффициенту при $x$.</p>
<p>В данном случае $k = 4$, $b = 0$, поэтому $y' = 4$.</p>
<p><strong>Физический смысл:</strong> если $x$ — время, а $y$ — координата, то производная $y' = 4$ означает постоянную скорость движения, равную 4 единицам длины в единицу времени.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der005",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная функции y = kx (общий случай)",
    "theme": "Производная линейной функции",
    "text": "Чему равна производная функции $y = kx$, где $k$ — постоянная?",
    "functionType": "linear_4x",
    "func": (x) => 4*x,
    "choices": [
      "0",
      "1",
      "k",
      "$kx$",
      "$\\frac{k}{x}$"
    ],
    "answers": ["k"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство через предел для общего случая:</h5>
<p>По определению производной: $f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$</p>
<p>Для функции $y = kx$:</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{k(x + \\Delta x) - kx}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{kx + k\\Delta x - kx}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{k\\Delta x}{\\Delta x}$</p>
<p>$f'(x) = \\lim\\limits_{\\Delta x \\to 0} k = k$</p>
<p>Таким образом, $(kx)' = k$.</p>
<p><strong>Это фундаментальное правило:</strong> производная линейной функции равна её угловому коэффициенту.</p>
<p><strong>Следствия:</strong></p>
<ul>
<li>$(x)' = 1$ (при $k = 1$)</li>
<li>$(2x)' = 2$ (при $k = 2$)</li>
<li>$(3x)' = 3$ (при $k = 3$)</li>
<li>$(4x)' = 4$ (при $k = 4$)</li>
</ul>
<p>Правило работает для любого действительного числа $k$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der006",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная суммы функций",
    "theme": "Производная функции y = x + 2x",
    "text": "Чему равна производная функции $y = x + 2x$?",
    "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "choices": [
      "1",
      "2",
      "3",
      "$3x$",
      "$x^2$"
    ],
    "answers": ["3"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Решение двумя способами:</h5>
<p><strong>Способ 1: Упростить функцию</strong></p>
<p>$y = x + 2x = 3x$</p>
<p>$(3x)' = 3$ (как было доказано ранее)</p>
<p><strong>Способ 2: Использовать правило производной суммы</strong></p>
<p>$(f(x) + g(x))' = f'(x) + g'(x)$</p>
<p>Для $y = x + 2x$:</p>
<p>$y' = (x)' + (2x)' = 1 + 2 = 3$</p>
<p><strong>Способ 3: Через определение предела</strong></p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{[(x + \\Delta x) + 2(x + \\Delta x)] - [x + 2x]}{\\Delta x}$</p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{x + \\Delta x + 2x + 2\\Delta x - 3x}{\\Delta x}$</p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{3\\Delta x}{\\Delta x} = 3$</p>
<p>Все три способа дают одинаковый результат: $y' = 3$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der007",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Уравнение касательной к линейной функции",
    "theme": "Геометрический смысл производной",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Уравнение касательной к графику функции $y = 3x$ в точке $x_0 = 2$ имеет вид:",
    "choices": [
      "$y = 3x$",
      "$y = 3x - 6$",
      "$y = 3x + 6$",
      "$y = 3(x - 2) + 6$",
      "$y = 6$"
    ],
    "answers": ["$y = 3x$"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Решение:</h5>
<p>Для линейной функции касательная совпадает с самой функцией.</p>
<p><strong>Общее уравнение касательной:</strong> $y = f'(x_0)(x - x_0) + f(x_0)$</p>
<p>Для $y = 3x$:</p>
<ul>
<li>$f(x) = 3x$</li>
<li>$f'(x) = 3$ (производная постоянна для всех $x$)</li>
<li>В точке $x_0 = 2$: $f(2) = 3 \\cdot 2 = 6$</li>
<li>$f'(2) = 3$</li>
</ul>
<p>Уравнение касательной:</p>
<p>$y = 3(x - 2) + 6 = 3x - 6 + 6 = 3x$</p>
<p>Таким образом, касательная к прямой $y = 3x$ в любой её точке совпадает с самой прямой.</p>
<p><strong>Геометрический смысл:</strong> для линейной функции угловой коэффициент касательной равен угловому коэффициенту самой прямой, поэтому они совпадают.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der008",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Физический смысл производной для y = 4x",
    "theme": "Производная как скорость изменения",
     "functionType": "linear_4x",
    "func": (x) => 4*x,
    "text": "Если $y = 4x$ описывает путь тела (в метрах) в зависимости от времени $x$ (в секундах), то скорость тела равна:",
    "choices": [
      "0 м/с",
      "1 м/с",
      "2 м/с",
      "3 м/с",
      "4 м/с"
    ],
    "answers": ["4 м/с"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Физический смысл производной:</h5>
<p>В физике производная пути по времени равна мгновенной скорости: $v(t) = s'(t)$.</p>
<p>Для функции $s(t) = 4t$:</p>
<p>$v(t) = s'(t) = (4t)' = 4$ (м/с)</p>
<p><strong>Доказательство через определение производной:</strong></p>
<p>$v(t) = \\lim\\limits_{\\Delta t \\to 0} \\frac{s(t + \\Delta t) - s(t)}{\\Delta t}$</p>
<p>$v(t) = \\lim\\limits_{\\Delta t \\to 0} \\frac{4(t + \\Delta t) - 4t}{\\Delta t}$</p>
<p>$v(t) = \\lim\\limits_{\\Delta t \\to 0} \\frac{4\\Delta t}{\\Delta t} = 4$</p>
<p>Скорость постоянна и равна 4 м/с.</p>
<p><strong>Физическая интерпретация:</strong> тело движется равномерно прямолинейно со скоростью 4 м/с.</p>
<p>В момент времени $t = 0$: $s(0) = 0$ (тело в начале координат)</p>
<p>За 1 секунду: $s(1) = 4$ м</p>
<p>За 2 секунды: $s(2) = 8$ м</p>
<p>Скорость постоянна: $v = \\frac{\\Delta s}{\\Delta t} = \\frac{4}{1} = \\frac{8}{2} = 4$ м/с</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der009",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная с использованием константы",
    "theme": "Производная функции y = C·x",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Если $y = Cx$, где $C$ — постоянное число, то $y' = $",
    "choices": [
      "0",
      "1",
      "C",
      "$Cx$",
      "$\\frac{C}{x}$"
    ],
    "answers": ["C"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Формальное доказательство через предел:</h5>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{C(x + \\Delta x) - Cx}{\\Delta x}$</p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{Cx + C\\Delta x - Cx}{\\Delta x}$</p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{C\\Delta x}{\\Delta x}$</p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} C = C$</p>
<p><strong>Правило вынесения константы:</strong> $(C \\cdot f(x))' = C \\cdot f'(x)$</p>
<p>В нашем случае: $(Cx)' = C \\cdot (x)' = C \\cdot 1 = C$</p>
<p><strong>Примеры:</strong></p>
<ul>
<li>При $C = 1$: $(x)' = 1$</li>
<li>При $C = 2$: $(2x)' = 2$</li>
<li>При $C = 3$: $(3x)' = 3$</li>
<li>При $C = 4$: $(4x)' = 4$</li>
<li>При $C = 100$: $(100x)' = 100$</li>
</ul>
<p>Правило работает для любого действительного числа $C$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der010",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Сравнение производных линейных функций",
    "theme": "Производные функций y = x, 2x, 3x, 4x",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Какая из функций имеет наибольшую производную?",
    "choices": [
      "$y = x$",
      "$y = 2x$",
      "$y = 3x$",
      "$y = 4x$",
      "Все производные равны"
    ],
    "answers": ["$y = 4x$"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Сравнение производных:</h5>
<ul>
<li>$(x)' = 1$</li>
<li>$(2x)' = 2$</li>
<li>$(3x)' = 3$</li>
<li>$(4x)' = 4$</li>
</ul>
<p>Наибольшая производная равна 4 у функции $y = 4x$.</p>
<p><strong>Геометрическая интерпретация:</strong></p>
<p>Производная равна тангенсу угла наклона касательной (в данном случае — самой прямой):</p>
<ul>
<li>$y = x$: $tg\\alpha = 1$, $\\alpha = 45°$</li>
<li>$y = 2x$: $tg\\alpha = 2$, $\\alpha \\approx 63.4°$</li>
<li>$y = 3x$: $tg\\alpha = 3$, $\\alpha \\approx 71.6°$</li>
<li>$y = 4x$: $tg\\alpha = 4$, $\\alpha \\approx 76.0°$</li>
</ul>
<p>Чем больше производная, тем круче график функции.</p>
<p><strong>Физическая интерпретация:</strong></p>
<p>Если $x$ — время, $y$ — путь, то производная — скорость:</p>
<ul>
<li>Для $y = x$: скорость = 1</li>
<li>Для $y = 2x$: скорость = 2</li>
<li>Для $y = 3x$: скорость = 3</li>
<li>Для $y = 4x$: скорость = 4 (наибольшая)</li>
</ul>
<p>Тело, движущееся по закону $y = 4x$, имеет наибольшую скорость.</p>
</div>
</div>
</div>
</div>
</div>`
  },

  
  {
    "id": "der2_001",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "functionType": "linear_x",
    "func": (x) => x,
    "title": "Производная второго порядка функции y = x",
    "theme": "Вторая производная функции y = x",    
    "text": "Чему равна вторая производная функции $y = x$?",
    "choices": [
      "0",
      "1",
      "x",
      "$\\frac{1}{x}$",
      "$x^2$"
    ],
    "answers": ["0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Решение через последовательное дифференцирование:</h5>
<p>Первая производная: $y' = (x)' = 1$</p>
<p>Вторая производная — это производная от первой производной:</p>
<p>$y'' = (y')' = (1)' = 0$</p>
<p><strong>Через предел (формальное определение):</strong></p>
<p>По определению второй производной: $f''(x) = \\lim\\limits_{h \\to 0} \\frac{f'(x+h) - f'(x)}{h}$</p>
<p>Для $y = x$: $f'(x) = 1$, $f'(x+h) = 1$</p>
<p>$f''(x) = \\lim\\limits_{h \\to 0} \\frac{1 - 1}{h} = \\lim\\limits_{h \\to 0} \\frac{0}{h} = 0$</p>
<p><strong>Физический смысл:</strong> если $x$ — время, а $y$ — координата, то вторая производная — это ускорение. Для равномерного прямолинейного движения ($y = x$ при подходящих единицах) ускорение равно нулю.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_002",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная второго порядка функции y = 2x",
    "theme": "Вторая производная функции y = 2x",
     "functionType": "linear_2x",
    "func": (x) => 2*x,
    "text": "Чему равна вторая производная функции $y = 2x$?",
    "choices": [
      "0",
      "1",
      "2",
      "$2x$",
      "4"
    ],
    "answers": ["0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Доказательство:</h5>
<p><strong>Шаг 1: Находим первую производную</strong></p>
<p>$y = 2x$</p>
<p>$y' = (2x)' = 2$ (по правилу $(kx)' = k$)</p>
<p><strong>Шаг 2: Находим вторую производную</strong></p>
<p>$y'' = (y')' = (2)' = 0$ (производная константы равна нулю)</p>
<p><strong>Через определение:</strong></p>
<p>$f''(x) = \\lim\\limits_{h \\to 0} \\frac{f'(x+h) - f'(x)}{h}$</p>
<p>Для $y = 2x$: $f'(x) = 2$, $f'(x+h) = 2$</p>
<p>$f''(x) = \\lim\\limits_{h \\to 0} \\frac{2 - 2}{h} = \\lim\\limits_{h \\to 0} 0 = 0$</p>
<p><strong>Общее правило:</strong> для любой линейной функции $y = kx + b$ вторая производная равна нулю, так как первая производная $y' = k$ — постоянна.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_003",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная второго порядка функции y = 3x",
    "theme": "Вторая производная функции y = 3x",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Чему равна вторая производная функции $y = 3x$?",
    "choices": [
      "0",
      "1",
      "3",
      "6",
      "9"
    ],
    "answers": ["0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Подробное решение:</h5>
<p>Функция: $y = 3x$</p>
<p><strong>Первая производная (через предел):</strong></p>
<p>$y' = \\lim\\limits_{\\Delta x \\to 0} \\frac{3(x+\\Delta x) - 3x}{\\Delta x} = \\lim\\limits_{\\Delta x \\to 0} \\frac{3\\Delta x}{\\Delta x} = 3$</p>
<p><strong>Вторая производная (через предел):</strong></p>
<p>$y'' = \\lim\\limits_{h \\to 0} \\frac{y'(x+h) - y'(x)}{h}$</p>
<p>Но $y'(x) = 3$ для всех $x$, и $y'(x+h) = 3$ для всех $x$ и $h$</p>
<p>$y'' = \\lim\\limits_{h \\to 0} \\frac{3 - 3}{h} = \\lim\\limits_{h \\to 0} \\frac{0}{h} = 0$</p>
<p><strong>Более короткий способ:</strong></p>
<p>$y = 3x \\Rightarrow y' = 3 \\Rightarrow y'' = 0$</p>
<p><strong>Физическая интерпретация:</strong> движение по закону $s = 3t$ — равномерное прямолинейное движение со скоростью 3 м/с. Ускорение (вторая производная пути по времени) равно нулю.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_004",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Производная второго порядка функции y = 4x",
    "theme": "Вторая производная функции y = 4x",
    "text": "Чему равна вторая производная функции $y = 4x$?",
     "functionType": "linear_4x",
    "func": (x) => 4*x,
    "choices": [
      "0",
      "1",
      "4",
      "8",
      "16"
    ],
    "answers": ["0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Решение с пояснениями:</h5>
<p><strong>Метод последовательного дифференцирования:</strong></p>
<ol>
<li>$y = 4x$</li>
<li>$y' = \\frac{d}{dx}(4x) = 4$ (производная линейной функции)</li>
<li>$y'' = \\frac{d}{dx}(4) = 0$ (производная константы)</li>
</ol>
<p><strong>Определение через предел:</strong></p>
<p>Вторая производная: $f''(x) = \\lim\\limits_{h \\to 0} \\frac{f'(x+h) - f'(x)}{h}$</p>
<p>Для $f(x) = 4x$: $f'(x) = 4$, $f'(x+h) = 4$</p>
<p>$f''(x) = \\lim\\limits_{h \\to 0} \\frac{4 - 4}{h} = \\lim\\limits_{h \\to 0} 0 = 0$</p>
<p><strong>Математическое обоснование:</strong></p>
<p>Линейная функция имеет постоянную первую производную. Производная от постоянной функции всегда равна нулю. Следовательно, вторая производная любой линейной функции равна нулю.</p>
<p>Это верно для $y = kx + b$ при любых $k$ и $b$.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_005",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Вторая производная функции y = kx (общий случай)",
    "theme": "Вторая производная линейной функции",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Чему равна вторая производная функции $y = kx$, где $k$ — постоянная?",
    "choices": [
      "0",
      "1",
      "k",
      "$k^2$",
      "$2k$"
    ],
    "answers": ["0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Общее доказательство:</h5>
<p><strong>Алгоритм нахождения второй производной:</strong></p>
<ol>
<li>Найти первую производную: $y' = \\frac{d}{dx}(kx) = k$</li>
<li>Найти производную от полученной функции: $y'' = \\frac{d}{dx}(k) = 0$</li>
</ol>
<p><strong>Формальное доказательство через предел:</strong></p>
<p>Первая производная: $f'(x) = \\lim\\limits_{h \\to 0} \\frac{k(x+h) - kx}{h} = \\lim\\limits_{h \\to 0} \\frac{kh}{h} = k$</p>
<p>Вторая производная: $f''(x) = \\lim\\limits_{h \\to 0} \\frac{f'(x+h) - f'(x)}{h} = \\lim\\limits_{h \\to 0} \\frac{k - k}{h} = \\lim\\limits_{h \\to 0} 0 = 0$</p>
<p><strong>Важное следствие:</strong> Все линейные функции имеют нулевую вторую производную.</p>
<p><strong>Примеры:</strong></p>
<ul>
<li>$y = x$: $y'' = 0$</li>
<li>$y = 2x$: $y'' = 0$</li>
<li>$y = 3x$: $y'' = 0$</li>
<li>$y = 4x$: $y'' = 0$</li>
<li>$y = 100x$: $y'' = 0$</li>
<li>$y = -5x$: $y'' = 0$</li>
</ul>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_006",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Физический смысл второй производной для y = 3x",
    "theme": "Ускорение при равномерном движении",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "text": "Если $y = 3x$ описывает путь тела в метрах в зависимости от времени $x$ в секундах, то ускорение тела равно:",
    "choices": [
      "0 м/с²",
      "1 м/с²",
      "3 м/с²",
      "6 м/с²",
      "9 м/с²"
    ],
    "answers": ["0 м/с²"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Физическая интерпретация:</h5>
<p><strong>Первая производная</strong> пути по времени — это <strong>скорость</strong>:</p>
<p>$v(t) = s'(t) = (3t)' = 3$ м/с</p>
<p><strong>Вторая производная</strong> пути по времени — это <strong>ускорение</strong>:</p>
<p>$a(t) = s''(t) = (3)' = 0$ м/с²</p>
<p><strong>Вывод:</strong> Тело движется равномерно прямолинейно с постоянной скоростью 3 м/с. При равномерном движении ускорение равно нулю.</p>
<p><strong>Проверка через определение ускорения:</strong></p>
<p>Ускорение — это изменение скорости за единицу времени:</p>
<p>$a = \\lim\\limits_{\\Delta t \\to 0} \\frac{v(t+\\Delta t) - v(t)}{\\Delta t}$</p>
<p>Так как $v(t) = 3$ м/с для всех $t$, то $v(t+\\Delta t) = 3$ м/с</p>
<p>$a = \\lim\\limits_{\\Delta t \\to 0} \\frac{3 - 3}{\\Delta t} = 0$</p>
<p><strong>Реальное движение:</strong> если тело за каждую секунду проходит 3 метра, его скорость постоянна, ускорение отсутствует.</p>
</div>
</div>
</div>
</div>
</div>`
  },
  {
    "id": "der2_007",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Сравнение вторых производных",
    "theme": "Вторые производные функций y = x, 2x, 3x, 4x",
    "text": "Сравните вторые производные функций: $y = x$, $y = 2x$, $y = 3x$, $y = 4x$",
     "functionType": "linear_3x",
    "func": (x) => 2*x+x,
    "choices": [
      "Все вторые производные равны 0",
      "Вторая производная больше у функции с большим коэффициентом",
      "Вторая производная пропорциональна коэффициенту",
      "Вторая производная равна квадрату коэффициента",
      "Вторые производные не существуют"
    ],
    "answers": ["Все вторые производные равны 0"],
    "hint": `<div class="container">
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<h5>Сравнительный анализ:</h5>
<p>Вычислим вторые производные для всех функций:</p>
<table class="table table-bordered">
<thead>
<tr><th>Функция</th><th>Первая производная</th><th>Вторая производная</th></tr>
</thead>
<tbody>
<tr><td>$y = x$</td><td>$y' = 1$</td><td>$y'' = 0$</td></tr>
<tr><td>$y = 2x$</td><td>$y' = 2$</td><td>$y'' = 0$</td></tr>
<tr><td>$y = 3x$</td><td>$y' = 3$</td><td>$y'' = 0$</td></tr>
<tr><td>$y = 4x$</td><td>$y' = 4$</td><td>$y'' = 0$</td></tr>
</tbody>
</table>
<p><strong>Общий вывод:</strong> Для любой линейной функции $y = kx + b$ вторая производная равна нулю независимо от значения коэффициента $k$.</p>
<p><strong>Доказательство:</strong></p>
<p>$y = kx + b$</p>
<p>$y' = k$ (производная линейной функции)</p>
<p>$y'' = (k)' = 0$ (производная константы)</p>
<p><strong>Геометрический смысл:</strong> Вторая производная характеризует выпуклость/вогнутость функции. Для прямой линии нет кривизны, поэтому вторая производная равна нулю.</p>
</div>
</div>
</div>
</div>
</div>`
  },

{
  "id": "integral001random1",
  "type": "mathwithrandomnumber",
  "header": "Математический анализ",
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
  "header": "Математический анализ",
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
  "header": "Математический анализ",
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
  "header": "Математический анализ",
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

    {
    "id": "algebra-fsu-001",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Квадрат суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу квадрата суммы?",
    "choices": [
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$a^2 - b^2 = (a-b)(a+b)$",
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$"
    ],
    "answers": ["$(a+b)^2 = a^2 + 2ab + b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Квадрат суммы</h5>
        <p>Формула квадрата суммы двух выражений:</p>
        <p class="text-center">$$(a+b)^2 = a^2 + 2ab + b^2$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Раскроем скобки по определению квадрата и правилу умножения многочленов:</p>
          <p>$$(a+b)^2 = (a+b)(a+b) = a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b$$</p>
          <p>$$= a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрическая интерпретация</strong>
            </div>
            <div class="card-body">
              <p>Представим квадрат со стороной $(a+b)$:</p>
              <div style="font-family: monospace;">
                <div>┌─────────┬─────┐</div>
                <div>│    a²   │ ab  │ a</div>
                <div>├─────────┼─────┤</div>
                <div>│    ab   │ b²  │ b</div>
                <div>└─────────┴─────┘</div>
                <div>   a        b</div>
              </div>
              <p>Площадь всего квадрата: $(a+b)^2$</p>
              <p>Сумма площадей частей: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x+3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$</p>
              <p>2. $(2y+5)^2 = (2y)^2 + 2 \\cdot 2y \\cdot 5 + 5^2 = 4y^2 + 20y + 25$</p>
              <p>3. $(a+b+c)^2$ можно представить как $[(a+b)+c]^2$ и применить формулу дважды.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните:</strong> Квадрат суммы = квадрат первого + удвоенное произведение + квадрат второго.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-002",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Квадрат разности",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу квадрата разности?",
    "choices": [
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$a^2 - b^2 = (a-b)(a+b)$",
      "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$"
    ],
    "answers": ["$(a-b)^2 = a^2 - 2ab + b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Квадрат разности</h5>
        <p>Формула квадрата разности двух выражений:</p>
        <p class="text-center">$$(a-b)^2 = a^2 - 2ab + b^2$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Раскроем скобки:</p>
          <p>$$(a-b)^2 = (a-b)(a-b) = a \\cdot a + a \\cdot (-b) + (-b) \\cdot a + (-b) \\cdot (-b)$$</p>
          <p>$$= a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$$</p>
          <p>Или используя формулу квадрата суммы: $(a-b)^2 = [a + (-b)]^2 = a^2 + 2a(-b) + (-b)^2 = a^2 - 2ab + b^2$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрическая интерпретация</strong>
            </div>
            <div class="card-body">
              <p>Представим квадрат со стороной $a$, из которого вырезан квадрат со стороной $b$:</p>
              <div style="font-family: monospace;">
                <div>┌──────────────┐</div>
                <div>│ a²           │</div>
                <div>│  ┌─────┐     │</div>
                <div>│  │ b²  │     │ a-b</div>
                <div>│  └─────┘     │</div>
                <div>└──────────────┘</div>
                <div>      b</div>
              </div>
              <p>Площадь заштрихованной части: $a^2 - b^2$</p>
              <p>Но её можно представить иначе: $(a-b)^2 + 2b(a-b) = (a-b)^2 + 2ab - 2b^2$</p>
              <p>Приравнивая: $a^2 - b^2 = (a-b)^2 + 2ab - 2b^2$</p>
              <p>Отсюда: $(a-b)^2 = a^2 - 2ab + b^2$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x-4)^2 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = x^2 - 8x + 16$</p>
              <p>2. $(3y-2)^2 = (3y)^2 - 2 \\cdot 3y \\cdot 2 + 2^2 = 9y^2 - 12y + 4$</p>
              <p>3. $(a-b-c)^2$ можно представить как $[(a-b)-c]^2$ и применить формулу.</p>
              <p>4. Важно: $(-a+b)^2 = (b-a)^2 = b^2 - 2ab + a^2 = a^2 - 2ab + b^2$ — та же формула!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Частая ошибка:</strong> $(a-b)^2 \\neq a^2 - b^2$! Не путайте с разностью квадратов.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-003",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Разность квадратов",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу разности квадратов?",
    "choices": [
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$a^2 - b^2 = (a-b)(a+b)$",
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$"
    ],
    "answers": ["$a^2 - b^2 = (a-b)(a+b)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Разность квадратов</h5>
        <p>Формула разности квадратов двух выражений:</p>
        <p class="text-center">$$a^2 - b^2 = (a-b)(a+b)$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Умножим $(a-b)$ на $(a+b)$:</p>
          <p>$$(a-b)(a+b) = a \\cdot a + a \\cdot b + (-b) \\cdot a + (-b) \\cdot b$$</p>
          <p>$$= a^2 + ab - ab - b^2 = a^2 - b^2$$</p>
          <p>Таким образом, разность квадратов раскладывается на произведение разности и суммы.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрическая интерпретация</strong>
            </div>
            <div class="card-body">
              <p>Площадь квадрата со стороной $a$ минус площадь квадрата со стороной $b$:</p>
              <div style="font-family: monospace;">
                <div>┌──────────────┐</div>
                <div>│              │</div>
                <div>│      a²      │ a-b</div>
                <div>│  ┌─────┐     │</div>
                <div>│  │ b²  │     │ b</div>
                <div>│  └─────┘     │</div>
                <div>└──────────────┘</div>
              </div>
              <p>Заштрихованную область можно разрезать и сложить в прямоугольник:</p>
              <p>Размеры прямоугольника: $(a-b)$ и $(a+b)$</p>
              <p>Площадь: $(a-b)(a+b)$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)$</p>
              <p>2. $4y^2 - 25 = (2y)^2 - 5^2 = (2y-5)(2y+5)$</p>
              <p>3. $a^4 - b^4 = (a^2)^2 - (b^2)^2 = (a^2 - b^2)(a^2 + b^2) = (a-b)(a+b)(a^2 + b^2)$</p>
              <p>4. $1 - x^2 = (1-x)(1+x)$</p>
              <p>5. Важно: $a^2 + b^2$ не раскладывается на множители в вещественных числах!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Обратная операция:</strong> Формулу можно использовать и в обратную сторону: $(a-b)(a+b) = a^2 - b^2$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-004",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Куб суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу куба суммы?",
    "choices": [
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$"
    ],
    "answers": ["$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Куб суммы</h5>
        <p>Формула куба суммы двух выражений:</p>
        <p class="text-center">$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Раскроем скобки, используя определение куба и правило умножения многочленов:</p>
          <p>$$(a+b)^3 = (a+b)(a+b)(a+b)$$</p>
          <p>Сначала перемножим первые две скобки: $(a+b)(a+b) = a^2 + 2ab + b^2$</p>
          <p>Затем умножим результат на $(a+b)$:</p>
          <p>$$(a^2 + 2ab + b^2)(a+b) = a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$$</p>
          <p>$$= a^3 + 3a^2b + 3ab^2 + b^3$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Запоминание коэффициентов</strong>
            </div>
            <div class="card-body">
              <p>Коэффициенты в формуле куба суммы соответствуют третьей строке треугольника Паскаля:</p>
              <p>1</p>
              <p>1 1</p>
              <p>1 2 1</p>
              <p><strong>1 3 3 1</strong> ← коэффициенты для $(a+b)^3$</p>
              <p>То есть: $1a^3 + 3a^2b + 3ab^2 + 1b^3$</p>
              <p>Знаки все положительные.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x+2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3$</p>
              <p>$= x^3 + 6x^2 + 12x + 8$</p>
              <p>2. $(2y+1)^3 = (2y)^3 + 3 \\cdot (2y)^2 \\cdot 1 + 3 \\cdot 2y \\cdot 1^2 + 1^3$</p>
              <p>$= 8y^3 + 12y^2 + 6y + 1$</p>
              <p>3. $(a+b+c)^3$ можно представить как $[(a+b)+c]^3$ и применить формулу.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Мнемоническое правило:</strong> Куб суммы = куб первого + утроенное произведение квадрата первого на второе + утроенное произведение первого на квадрат второго + куб второго.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-005",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Куб разности",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу куба разности?",
    "choices": [
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$"
    ],
    "answers": ["$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Куб разности</h5>
        <p>Формула куба разности двух выражений:</p>
        <p class="text-center">$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Можно вывести аналогично кубу суммы или представить как куб суммы с отрицательным вторым слагаемым:</p>
          <p>$$(a-b)^3 = [a + (-b)]^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3$$</p>
          <p>$$= a^3 - 3a^2b + 3ab^2 - b^3$$</p>
          <p>Или раскрыть скобки: $(a-b)^3 = (a-b)(a-b)(a-b)$</p>
          <p>Сначала: $(a-b)(a-b) = a^2 - 2ab + b^2$</p>
          <p>Затем: $(a^2 - 2ab + b^2)(a-b) = a^3 - a^2b - 2a^2b + 2ab^2 + ab^2 - b^3 = a^3 - 3a^2b + 3ab^2 - b^3$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Запоминание знаков</strong>
            </div>
            <div class="card-body">
              <p>Знаки в формуле куба разности чередуются, начиная с плюса:</p>
              <p>$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$</p>
              <p>Можно запомнить так: знаки идут по схеме +, -, +, -</p>
              <p>Коэффициенты те же, что и для куба суммы: 1, 3, 3, 1</p>
              <p>Треугольник Паскаля: <strong>1 3 3 1</strong> с чередующимися знаками.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x-1)^3 = x^3 - 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 - 1^3$</p>
              <p>$= x^3 - 3x^2 + 3x - 1$</p>
              <p>2. $(2y-3)^3 = (2y)^3 - 3 \\cdot (2y)^2 \\cdot 3 + 3 \\cdot 2y \\cdot 3^2 - 3^3$</p>
              <p>$= 8y^3 - 36y^2 + 54y - 27$</p>
              <p>3. $(a-b-c)^3$ можно представить как $[(a-b)-c]^3$ и применить формулу.</p>
              <p>4. Важно: $(-a+b)^3 = (b-a)^3 = b^3 - 3b^2a + 3ba^2 - a^3 = -(a^3 - 3a^2b + 3ab^2 - b^3)$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Проверка:</strong> Подставьте $a=2$, $b=1$: $(2-1)^3 = 1^3 = 1$, и по формуле: $2^3 - 3\\cdot2^2\\cdot1 + 3\\cdot2\\cdot1^2 - 1^3 = 8 - 12 + 6 - 1 = 1$ ✓
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-006",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Сумма кубов",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу суммы кубов?",
    "choices": [
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$",
      "$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$",
      "$a^2 - b^2 = (a-b)(a+b)$"
    ],
    "answers": ["$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Сумма кубов</h5>
        <p>Формула суммы кубов двух выражений:</p>
        <p class="text-center">$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Умножим $(a+b)$ на $(a^2 - ab + b^2)$ и проверим:</p>
          <p>$$(a+b)(a^2 - ab + b^2) = a \\cdot a^2 + a \\cdot (-ab) + a \\cdot b^2 + b \\cdot a^2 + b \\cdot (-ab) + b \\cdot b^2$$</p>
          <p>$$= a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3$$</p>
          <p>Средние слагаемые взаимно уничтожаются.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Запоминание структуры</strong>
            </div>
            <div class="card-body">
              <p>Формула имеет вид: сумма кубов = (сумма) × (квадрат первого минус произведение плюс квадрат второго)</p>
              <p>$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$</p>
              <p>Мнемоническое правило: "Сумма на неполный квадрат разности"</p>
              <p>Обратите внимание: $a^2 - ab + b^2$ — это почти $(a-b)^2 = a^2 - 2ab + b^2$, но без удвоенного произведения.</p>
              <p>Это выражение называется <strong>неполным квадратом разности</strong>.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $x^3 + 8 = x^3 + 2^3 = (x+2)(x^2 - 2x + 4)$</p>
              <p>2. $27y^3 + 1 = (3y)^3 + 1^3 = (3y+1)(9y^2 - 3y + 1)$</p>
              <p>3. $a^6 + b^6 = (a^2)^3 + (b^2)^3 = (a^2 + b^2)(a^4 - a^2b^2 + b^4)$</p>
              <p>4. $1 + x^3 = (1+x)(1 - x + x^2)$</p>
              <p>5. Важно: $a^3 + b^3 \\neq (a+b)^3$! $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Проверка:</strong> Для $a=2$, $b=1$: $2^3 + 1^3 = 8 + 1 = 9$, и по формуле: $(2+1)(4 - 2 + 1) = 3 × 3 = 9$ ✓
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-007",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Разность кубов",
    "theme": "Формулы сокращенного умножения",
    "text": "Какой из следующих вариантов представляет собой формулу разности кубов?",
    "choices": [
      "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
      "$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$",
      "$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$",
      "$a^2 - b^2 = (a-b)(a+b)$"
    ],
    "answers": ["$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Разность кубов</h5>
        <p>Формула разности кубов двух выражений:</p>
        <p class="text-center">$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Умножим $(a-b)$ на $(a^2 + ab + b^2)$ и проверим:</p>
          <p>$$(a-b)(a^2 + ab + b^2) = a \\cdot a^2 + a \\cdot ab + a \\cdot b^2 + (-b) \\cdot a^2 + (-b) \\cdot ab + (-b) \\cdot b^2$$</p>
          <p>$$= a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3$$</p>
          <p>Средние слагаемые взаимно уничтожаются.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Запоминание структуры</strong>
            </div>
            <div class="card-body">
              <p>Формула имеет вид: разность кубов = (разность) × (квадрат первого плюс произведение плюс квадрат второго)</p>
              <p>$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$</p>
              <p>Мнемоническое правило: "Разность на неполный квадрат суммы"</p>
              <p>Обратите внимание: $a^2 + ab + b^2$ — это почти $(a+b)^2 = a^2 + 2ab + b^2$, но без удвоенного произведения.</p>
              <p>Это выражение называется <strong>неполным квадратом суммы</strong>.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $x^3 - 27 = x^3 - 3^3 = (x-3)(x^2 + 3x + 9)$</p>
              <p>2. $8y^3 - 1 = (2y)^3 - 1^3 = (2y-1)(4y^2 + 2y + 1)$</p>
              <p>3. $a^6 - b^6 = (a^2)^3 - (b^2)^3 = (a^2 - b^2)(a^4 + a^2b^2 + b^4)$</p>
              <p>$= (a-b)(a+b)(a^4 + a^2b^2 + b^4)$</p>
              <p>4. $1 - x^3 = (1-x)(1 + x + x^2)$</p>
              <p>5. Важно: $a^3 - b^3 \\neq (a-b)^3$! $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Проверка:</strong> Для $a=3$, $b=1$: $3^3 - 1^3 = 27 - 1 = 26$, и по формуле: $(3-1)(9 + 3 + 1) = 2 × 13 = 26$ ✓
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-008",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Квадрат суммы трех чисел",
    "theme": "Формулы сокращенного умножения",
    "text": "Как раскрывается квадрат суммы трех чисел $(a+b+c)^2$?",
    "choices": [
      "$a^2 + b^2 + c^2$",
      "$a^2 + b^2 + c^2 + ab + bc + ac$",
      "$a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$",
      "$a^2 + b^2 + c^2 + 3ab + 3bc + 3ac$",
      "$(a+b)^2 + (b+c)^2 + (a+c)^2$"
    ],
    "answers": ["$a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Квадрат суммы трех чисел</h5>
        <p>Формула квадрата суммы трех выражений:</p>
        <p class="text-center">$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Представим сумму трех как сумму двух: $(a+b+c)^2 = [(a+b)+c]^2$</p>
          <p>Применим формулу квадрата суммы: $(x+y)^2 = x^2 + 2xy + y^2$, где $x = a+b$, $y = c$</p>
          <p>$$[(a+b)+c]^2 = (a+b)^2 + 2(a+b)c + c^2$$</p>
          <p>$$= a^2 + 2ab + b^2 + 2ac + 2bc + c^2$$</p>
          <p>$$= a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$$</p>
          <p>Или перемножим напрямую: $(a+b+c)(a+b+c)$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Мнемоническое правило</strong>
            </div>
            <div class="card-body">
              <p>Квадрат суммы трех чисел равен сумме квадратов всех чисел плюс удвоенные произведения всех возможных пар.</p>
              <p>Пары: $ab$, $bc$, $ac$ — всего три пары.</p>
              <p>Каждое произведение входит с коэффициентом 2.</p>
              <p>Общая формула: $$(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ac)$$</p>
              <p>Для четырех чисел аналогично: квадраты всех + удвоенные произведения всех пар.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x+y+1)^2 = x^2 + y^2 + 1^2 + 2xy + 2y\\cdot1 + 2x\\cdot1$</p>
              <p>$= x^2 + y^2 + 1 + 2xy + 2y + 2x$</p>
              <p>2. $(a+2b+3c)^2 = a^2 + (2b)^2 + (3c)^2 + 2a(2b) + 2(2b)(3c) + 2a(3c)$</p>
              <p>$= a^2 + 4b^2 + 9c^2 + 4ab + 12bc + 6ac$</p>
              <p>3. $(x-y+z)^2$: здесь $b = -y$, применяем ту же формулу:</p>
              <p>$= x^2 + (-y)^2 + z^2 + 2x(-y) + 2(-y)z + 2xz$</p>
              <p>$= x^2 + y^2 + z^2 - 2xy - 2yz + 2xz$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Проверка:</strong> Для $a=1$, $b=2$, $c=3$: $(1+2+3)^2 = 6^2 = 36$, и по формуле: $1^2+2^2+3^2+2\\cdot1\\cdot2+2\\cdot2\\cdot3+2\\cdot1\\cdot3 = 1+4+9+4+12+6=36$ ✓
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-009",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $x^2 + 6x + 9$?",
    "choices": [
      "Квадрат суммы: $(x+3)^2$",
      "Квадрат разности: $(x-3)^2$",
      "Разность квадратов: $(x-3)(x+3)$",
      "Куб суммы: $(x+3)^3$",
      "Сумма кубов: $(x+3)(x^2 - 3x + 9)$"
    ],
    "answers": ["Квадрат суммы: $(x+3)^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Узнавание формулы по виду выражения</h5>
        <p>Дано: $x^2 + 6x + 9$</p>
        <p>Нужно определить, какую формулу сокращенного умножения можно применить.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Анализ выражения</strong>
        </div>
        <div class="card-body">
          <p>1. Выражение имеет три члена — это намек на квадрат суммы или разности.</p>
          <p>2. Первый член: $x^2$ — квадрат $x$</p>
          <p>3. Последний член: $9 = 3^2$ — квадрат 3</p>
          <p>4. Средний член: $6x = 2 \\cdot x \\cdot 3$ — удвоенное произведение $x$ и 3</p>
          <p>5. Знак перед средним членом: плюс</p>
          <p>6. Знак перед последним членом: плюс</p>
          
          <p>Это соответствует формуле квадрата суммы: $(a+b)^2 = a^2 + 2ab + b^2$</p>
          <p>Здесь: $a = x$, $b = 3$</p>
          <p>$$(x+3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Метод выделения полного квадрата</strong>
            </div>
            <div class="card-body">
              <p>Можно проверить, является ли выражение полным квадратом:</p>
              <p>1. Извлечь корень из первого члена: $\\sqrt{x^2} = x$</p>
              <p>2. Извлечь корень из последнего члена: $\\sqrt{9} = 3$</p>
              <p>3. Проверить средний член: $2 \\cdot x \\cdot 3 = 6x$ — совпадает</p>
              <p>4. Знаки: оба плюса → квадрат суммы</p>
              <p>Итог: $(x+3)^2$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Почему не другие варианты?</strong>
            </div>
            <div class="card-body">
              <p><strong>Квадрат разности</strong>: $(x-3)^2 = x^2 - 6x + 9$ — знак среднего члена минус</p>
              <p><strong>Разность квадратов</strong>: $(x-3)(x+3) = x^2 - 9$ — только два члена</p>
              <p><strong>Куб суммы</strong>: $(x+3)^3 = x^3 + 9x^2 + 27x + 27$ — четыре члена</p>
              <p><strong>Сумма кубов</strong>: $(x+3)(x^2 - 3x + 9) = x^3 + 27$ — не совпадает</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общий алгоритм:</strong> Для трехчлена вида $ax^2 + bx + c$ проверьте, является ли он полным квадратом: $a = m^2$, $c = n^2$, $b = 2mn$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-010",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении 2",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $4x^2 - 20x + 25$?",
    "choices": [
      "Квадрат суммы: $(2x+5)^2$",
      "Квадрат разности: $(2x-5)^2$",
      "Разность квадратов: $(2x-5)(2x+5)$",
      "Куб разности: $(2x-5)^3$",
      "Разность кубов: $(2x-5)(4x^2+10x+25)$"
    ],
    "answers": ["Квадрат разности: $(2x-5)^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Узнавание формулы по виду выражения</h5>
        <p>Дано: $4x^2 - 20x + 25$</p>
        <p>Анализируем структуру выражения.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Анализ выражения</strong>
        </div>
        <div class="card-body">
          <p>1. Три члена → возможен квадрат суммы или разности</p>
          <p>2. Первый член: $4x^2 = (2x)^2$ — квадрат $2x$</p>
          <p>3. Последний член: $25 = 5^2$ — квадрат 5</p>
          <p>4. Средний член: $-20x = -2 \\cdot (2x) \\cdot 5$ — удвоенное произведение со знаком минус</p>
          <p>5. Знаки: первый плюс, средний минус, последний плюс</p>
          
          <p>Это соответствует формуле квадрата разности: $(a-b)^2 = a^2 - 2ab + b^2$</p>
          <p>Здесь: $a = 2x$, $b = 5$</p>
          <p>$$(2x-5)^2 = (2x)^2 - 2 \\cdot 2x \\cdot 5 + 5^2 = 4x^2 - 20x + 25$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка выделением полного квадрата</strong>
            </div>
            <div class="card-body">
              <p>1. Корень из первого члена: $\\sqrt{4x^2} = 2x$</p>
              <p>2. Корень из последнего члена: $\\sqrt{25} = 5$</p>
              <p>3. Проверка среднего: $2 \\cdot 2x \\cdot 5 = 20x$, знак минус → квадрат разности</p>
              <p>4. Результат: $(2x-5)^2$</p>
              
              <p>Можно также представить как: $4x^2 - 20x + 25 = (2x)^2 - 2 \\cdot 2x \\cdot 5 + 5^2$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Почему не другие варианты?</strong>
            </div>
            <div class="card-body">
              <p><strong>Квадрат суммы</strong>: $(2x+5)^2 = 4x^2 + 20x + 25$ — знак среднего плюс</p>
              <p><strong>Разность квадратов</strong>: $(2x-5)(2x+5) = 4x^2 - 25$ — только два члена</p>
              <p><strong>Куб разности</strong>: $(2x-5)^3 = 8x^3 - 60x^2 + 150x - 125$ — четыре члена, кубические</p>
              <p><strong>Разность кубов</strong>: $(2x-5)(4x^2+10x+25) = 8x^3 - 125$ — не совпадает</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Важно:</strong> Обращайте внимание на коэффициенты! $4x^2$ — это $(2x)^2$, а не $(4x)^2$. $(4x)^2 = 16x^2$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-011",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении 3",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $9a^2 - 16b^2$?",
    "choices": [
      "Квадрат суммы: $(3a+4b)^2$",
      "Квадрат разности: $(3a-4b)^2$",
      "Разность квадратов: $(3a-4b)(3a+4b)$",
      "Сумма кубов: $(3a+4b)(9a^2-12ab+16b^2)$",
      "Разность кубов: $(3a-4b)(9a^2+12ab+16b^2)$"
    ],
    "answers": ["Разность квадратов: $(3a-4b)(3a+4b)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Узнавание формулы по виду выражения</h5>
        <p>Дано: $9a^2 - 16b^2$</p>
        <p>Всего два члена, соединенных знаком минус — явный признак разности квадратов.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Анализ выражения</strong>
        </div>
        <div class="card-body">
          <p>1. Выражение имеет два члена → возможны: разность квадратов, сумма/разность кубов</p>
          <p>2. Знак между членами: минус → возможны: разность квадратов, разность кубов</p>
          <p>3. Первый член: $9a^2 = (3a)^2$ — квадрат</p>
          <p>4. Второй член: $16b^2 = (4b)^2$ — квадрат</p>
          <p>5. Оба члена — квадраты → это разность квадратов</p>
          
          <p>Формула разности квадратов: $a^2 - b^2 = (a-b)(a+b)$</p>
          <p>Здесь: $a = 3a$, $b = 4b$ (внимание: $a$ в формуле и $a$ в выражении — разные!)</p>
          <p>Лучше обозначить: $X = 3a$, $Y = 4b$</p>
          <p>Тогда: $X^2 - Y^2 = (X-Y)(X+Y)$</p>
          <p>$$(3a)^2 - (4b)^2 = (3a-4b)(3a+4b)$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Умножим $(3a-4b)(3a+4b)$:</p>
              <p>$$(3a-4b)(3a+4b) = 3a \\cdot 3a + 3a \\cdot 4b - 4b \\cdot 3a - 4b \\cdot 4b$$</p>
              <p>$$= 9a^2 + 12ab - 12ab - 16b^2 = 9a^2 - 16b^2$$ ✓</p>
              <p>Средние члены $+12ab$ и $-12ab$ взаимно уничтожаются.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Почему не другие варианты?</strong>
            </div>
            <div class="card-body">
              <p><strong>Квадрат суммы</strong>: $(3a+4b)^2 = 9a^2 + 24ab + 16b^2$ — три члена, есть $24ab$</p>
              <p><strong>Квадрат разности</strong>: $(3a-4b)^2 = 9a^2 - 24ab + 16b^2$ — три члена, есть $-24ab$</p>
              <p><strong>Сумма кубов</strong>: $9a^2 - 16b^2$ не является суммой кубов</p>
              <p><strong>Разность кубов</strong>: $(3a)^3 - (4b)^3 = 27a^3 - 64b^3$ — кубы, а не квадраты</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общее правило:</strong> Если выражение имеет вид $X^2 - Y^2$ (разность двух квадратов), то это разность квадратов: $(X-Y)(X+Y)$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-012",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении 4",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $x^3 + 8$?",
    "choices": [
      "Квадрат суммы: $(x+2)^2$",
      "Куб суммы: $(x+2)^3$",
      "Сумма кубов: $(x+2)(x^2-2x+4)$",
      "Разность кубов: $(x-2)(x^2+2x+4)$",
      "Разность квадратов: $(x-2)(x+2)$"
    ],
    "answers": ["Сумма кубов: $(x+2)(x^2-2x+4)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Узнавание формулы по виду выражения</h5>
        <p>Дано: $x^3 + 8$</p>
        <p>Два члена, соединенных знаком плюс — возможны сумма кубов или квадрат суммы (но тогда должно быть три члена).</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Анализ выражения</strong>
        </div>
        <div class="card-body">
          <p>1. Выражение имеет два члена → возможны: сумма квадратов (не раскладывается), сумма кубов</p>
          <p>2. Знак между членами: плюс → возможна сумма кубов</p>
          <p>3. Первый член: $x^3$ — куб $x$</p>
          <p>4. Второй член: $8 = 2^3$ — куб 2</p>
          <p>5. Оба члена — кубы → это сумма кубов</p>
          
          <p>Формула суммы кубов: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$</p>
          <p>Здесь: $a = x$, $b = 2$</p>
          <p>$$x^3 + 2^3 = (x+2)(x^2 - x\\cdot2 + 2^2) = (x+2)(x^2 - 2x + 4)$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Умножим $(x+2)(x^2 - 2x + 4)$:</p>
              <p>$$(x+2)(x^2 - 2x + 4) = x \\cdot x^2 + x \\cdot (-2x) + x \\cdot 4 + 2 \\cdot x^2 + 2 \\cdot (-2x) + 2 \\cdot 4$$</p>
              <p>$$= x^3 - 2x^2 + 4x + 2x^2 - 4x + 8 = x^3 + 8$$ ✓</p>
              <p>Средние члены взаимно уничтожаются: $-2x^2+2x^2=0$, $4x-4x=0$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Почему не другие варианты?</strong>
            </div>
            <div class="card-body">
              <p><strong>Квадрат суммы</strong>: $(x+2)^2 = x^2 + 4x + 4$ — три члена, нет $x^3$</p>
              <p><strong>Куб суммы</strong>: $(x+2)^3 = x^3 + 6x^2 + 12x + 8$ — четыре члена</p>
              <p><strong>Разность кубов</strong>: $(x-2)(x^2+2x+4) = x^3 - 8$ — даёт $x^3 - 8$, а не $+8$</p>
              <p><strong>Разность квадратов</strong>: $(x-2)(x+2) = x^2 - 4$ — нет $x^3$, нет 8</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните:</strong> $x^3 + 8 = x^3 + 2^3$ — сумма кубов. Частые случаи: $x^3+1$, $x^3+8$, $x^3+27$, $x^3+64$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-013",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении 5",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $27 - y^3$?",
    "choices": [
      "Квадрат разности: $(3-y)^2$",
      "Куб разности: $(3-y)^3$",
      "Сумма кубов: $(3+y)(9-3y+y^2)$",
      "Разность кубов: $(3-y)(9+3y+y^2)$",
      "Разность квадратов: $(3-y)(3+y)$"
    ],
    "answers": ["Разность кубов: $(3-y)(9+3y+y^2)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Узнавание формулы по виду выражения</h5>
        <p>Дано: $27 - y^3$</p>
        <p>Два члена, соединенных знаком минус — возможны разность квадратов или разность кубов.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Анализ выражения</strong>
        </div>
        <div class="card-body">
          <p>1. Выражение имеет два члена → возможны: разность квадратов, разность кубов</p>
          <p>2. Знак между членами: минус → возможны: разность квадратов, разность кубов</p>
          <p>3. Первый член: $27 = 3^3$ — куб 3</p>
          <p>4. Второй член: $y^3$ — куб $y$</p>
          <p>5. Оба члена — кубы → это разность кубов</p>
          
          <p>Формула разности кубов: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</p>
          <p>Здесь: $a = 3$, $b = y$</p>
          <p>$$3^3 - y^3 = (3-y)(3^2 + 3\\cdot y + y^2) = (3-y)(9 + 3y + y^2)$$</p>
          <p>Обратите внимание на порядок: $27 - y^3 = 3^3 - y^3$, а не $y^3 - 27$.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Умножим $(3-y)(9 + 3y + y^2)$:</p>
              <p>$$(3-y)(9 + 3y + y^2) = 3\\cdot9 + 3\\cdot3y + 3\\cdot y^2 - y\\cdot9 - y\\cdot3y - y\\cdot y^2$$</p>
              <p>$$= 27 + 9y + 3y^2 - 9y - 3y^2 - y^3 = 27 - y^3$$ ✓</p>
              <p>Средние члены взаимно уничтожаются: $9y-9y=0$, $3y^2-3y^2=0$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Почему не другие варианты?</strong>
            </div>
            <div class="card-body">
              <p><strong>Квадрат разности</strong>: $(3-y)^2 = 9 - 6y + y^2$ — три члена, нет $y^3$</p>
              <p><strong>Куб разности</strong>: $(3-y)^3 = 27 - 27y + 9y^2 - y^3$ — четыре члена</p>
              <p><strong>Сумма кубов</strong>: $(3+y)(9-3y+y^2) = 27 + y^3$ — даёт $27 + y^3$, а не $- y^3$</p>
              <p><strong>Разность квадратов</strong>: $(3-y)(3+y) = 9 - y^2$ — нет $y^3$, нет 27</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните:</strong> $27 - y^3 = 3^3 - y^3$ — разность кубов. Аналогично: $8-x^3$, $64-a^3$, $1-b^3$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-014",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Узнавание формулы в выражении 6",
    "theme": "Формулы сокращенного умножения",
    "text": "Какая формула сокращенного умножения представлена в выражении $a^6 - b^6$?",
    "choices": [
      "Квадрат разности: $(a^3-b^3)^2$",
      "Разность квадратов: $(a^3-b^3)(a^3+b^3)$",
      "Разность кубов: $(a^2-b^2)(a^4+a^2b^2+b^4)$",
      "И разность квадратов, и разность кубов",
      "Ни одна из формул не подходит"
    ],
    "answers": ["И разность квадратов, и разность кубов"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Комбинированное выражение</h5>
        <p>Дано: $a^6 - b^6$</p>
        <p>Это выражение можно разложить несколькими способами, используя разные формулы.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Способ 1: как разность квадратов</strong>
        </div>
        <div class="card-body">
          <p>Представим: $a^6 = (a^3)^2$, $b^6 = (b^3)^2$</p>
          <p>Тогда: $$a^6 - b^6 = (a^3)^2 - (b^3)^2$$</p>
          <p>По формуле разности квадратов: $(X^2 - Y^2) = (X-Y)(X+Y)$</p>
          <p>$$= (a^3 - b^3)(a^3 + b^3)$$</p>
          <p>Дальше каждую скобку можно разложить:</p>
          <p>$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ — разность кубов</p>
          <p>$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ — сумма кубов</p>
          <p>Итог: $(a-b)(a+b)(a^2 + ab + b^2)(a^2 - ab + b^2)$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Способ 2: как разность кубов</strong>
        </div>
        <div class="card-body">
          <p>Представим: $a^6 = (a^2)^3$, $b^6 = (b^2)^3$</p>
          <p>Тогда: $$a^6 - b^6 = (a^2)^3 - (b^2)^3$$</p>
          <p>По формуле разности кубов: $(X^3 - Y^3) = (X-Y)(X^2 + XY + Y^2)$</p>
          <p>$$= (a^2 - b^2)((a^2)^2 + a^2b^2 + (b^2)^2)$$</p>
          <p>$$= (a^2 - b^2)(a^4 + a^2b^2 + b^4)$$</p>
          <p>Дальше $a^2 - b^2$ раскладываем как разность квадратов: $(a-b)(a+b)$</p>
          <p>Итог: $(a-b)(a+b)(a^4 + a^2b^2 + b^4)$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Сравнение результатов</strong>
            </div>
            <div class="card-body">
              <p>Оба способа дают разложение на множители, но множители разные:</p>
              <p><strong>Способ 1:</strong> $(a-b)(a+b)(a^2+ab+b^2)(a^2-ab+b^2)$</p>
              <p><strong>Способ 2:</strong> $(a-b)(a+b)(a^4+a^2b^2+b^4)$</p>
              <p>Это означает, что:</p>
              <p>$$(a^2+ab+b^2)(a^2-ab+b^2) = a^4 + a^2b^2 + b^4$$</p>
              <p>Можно проверить умножением — это верно!</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">
              <strong>Ответ на вопрос</strong>
            </div>
            <div class="card-body">
              <p>Выражение $a^6 - b^6$ можно рассматривать и как разность квадратов ($(a^3)^2 - (b^3)^2$), и как разность кубов ($(a^2)^3 - (b^2)^3$).</p>
              <p>Поэтому верный ответ: <strong>И разность квадратов, и разность кубов</strong>.</p>
              <p>Это частный случай: $a^{2n} - b^{2n}$ можно рассматривать и как разность квадратов, и если $n$ кратно 3, то и как разность кубов.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общее правило:</strong> $a^{mn} - b^{mn}$ можно рассматривать как разность $m$-х степеней: $(a^n)^m - (b^n)^m$, и как разность $n$-х степеней: $(a^m)^n - (b^m)^n$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-015",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Применение формулы квадрата суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно $(2x+3y)^2$?",
    "choices": [
      "$4x^2 + 9y^2$",
      "$4x^2 + 6xy + 9y^2$",
      "$4x^2 + 12xy + 9y^2$",
      "$2x^2 + 12xy + 3y^2$",
      "$4x^2 + 9y^2 + 12xy$"
    ],
    "answers": ["$4x^2 + 12xy + 9y^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формулы квадрата суммы</h5>
        <p>Формула: $(a+b)^2 = a^2 + 2ab + b^2$</p>
        <p>В нашем случае: $a = 2x$, $b = 3y$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Квадрат первого слагаемого: $(2x)^2 = 4x^2$</p>
          <p>2. Удвоенное произведение: $2 \\cdot (2x) \\cdot (3y) = 2 \\cdot 2x \\cdot 3y = 12xy$</p>
          <p>3. Квадрат второго слагаемого: $(3y)^2 = 9y^2$</p>
          <p>4. Собираем все: $4x^2 + 12xy + 9y^2$</p>
          
          <p>Или в одну строку:</p>
          <p>$$(2x+3y)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 3y + (3y)^2 = 4x^2 + 12xy + 9y^2$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Раскроем скобки без формулы:</p>
              <p>$$(2x+3y)^2 = (2x+3y)(2x+3y)$$</p>
              <p>$$= 2x \\cdot 2x + 2x \\cdot 3y + 3y \\cdot 2x + 3y \\cdot 3y$$</p>
              <p>$$= 4x^2 + 6xy + 6xy + 9y^2 = 4x^2 + 12xy + 9y^2$$ ✓</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Забывают удвоенное произведение: $4x^2 + 9y^2$</p>
              <p><strong>Ошибка 2:</strong> Неправильно вычисляют коэффициенты: $2 \\cdot 2x \\cdot 3y = 12xy$, а не $6xy$</p>
              <p><strong>Ошибка 3:</strong> Не возводят в квадрат коэффициенты: $(2x)^2 = 4x^2$, а не $2x^2$</p>
              <p><strong>Ошибка 4:</strong> Неправильный порядок: $2x^2 + 12xy + 3y^2$ — коэффициенты не возведены в квадрат</p>
              <p><strong>Ошибка 5:</strong> Правильный ответ, но в другом порядке: $4x^2 + 9y^2 + 12xy$ — тоже правильно, но обычно пишут в порядке убывания степеней.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Алгоритм:</strong> 1) Возвести в квадрат каждый член; 2) Найти удвоенное произведение; 3) Сложить все с правильными знаками.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-016",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Применение формулы квадрата разности",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно $(5a - 2b)^2$?",
    "choices": [
      "$25a^2 - 4b^2$",
      "$25a^2 - 20ab + 4b^2$",
      "$25a^2 - 10ab + 4b^2$",
      "$5a^2 - 20ab + 2b^2$",
      "$25a^2 + 4b^2 - 20ab$"
    ],
    "answers": ["$25a^2 - 20ab + 4b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формулы квадрата разности</h5>
        <p>Формула: $(a-b)^2 = a^2 - 2ab + b^2$</p>
        <p>В нашем случае: $a = 5a$, $b = 2b$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Квадрат первого слагаемого: $(5a)^2 = 25a^2$</p>
          <p>2. Удвоенное произведение: $2 \\cdot (5a) \\cdot (2b) = 2 \\cdot 5a \\cdot 2b = 20ab$</p>
          <p>Со знаком минус: $-20ab$</p>
          <p>3. Квадрат второго слагаемого: $(2b)^2 = 4b^2$</p>
          <p>4. Собираем все: $25a^2 - 20ab + 4b^2$</p>
          
          <p>Или в одну строку:</p>
          <p>$$(5a-2b)^2 = (5a)^2 - 2 \\cdot 5a \\cdot 2b + (2b)^2 = 25a^2 - 20ab + 4b^2$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Раскроем скобки без формулы:</p>
              <p>$$(5a-2b)^2 = (5a-2b)(5a-2b)$$</p>
              <p>$$= 5a \\cdot 5a + 5a \\cdot (-2b) + (-2b) \\cdot 5a + (-2b) \\cdot (-2b)$$</p>
              <p>$$= 25a^2 - 10ab - 10ab + 4b^2 = 25a^2 - 20ab + 4b^2$$ ✓</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Путают с разностью квадратов: $25a^2 - 4b^2$</p>
              <p><strong>Ошибка 2:</strong> Неправильный коэффициент: $2 \\cdot 5a \\cdot 2b = 20ab$, а не $10ab$</p>
              <p><strong>Ошибка 3:</strong> Забывают знак минус у удвоенного произведения</p>
              <p><strong>Ошибка 4:</strong> Не возводят в квадрат коэффициенты: $(5a)^2 = 25a^2$, а не $5a^2$</p>
              <p><strong>Ошибка 5:</strong> Правильный ответ в другом порядке: $25a^2 + 4b^2 - 20ab$ — тоже верно</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Важно:</strong> $(a-b)^2 = a^2 - 2ab + b^2$, а не $a^2 - b^2$! Это разные формулы.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-017",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Применение формулы разности квадратов",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно произведение $(7m+4n)(7m-4n)$?",
    "choices": [
      "$49m^2 - 16n^2$",
      "$49m^2 + 16n^2$",
      "$7m^2 - 4n^2$",
      "$49m^2 - 28mn + 16n^2$",
      "$49m^2 + 28mn - 16n^2$"
    ],
    "answers": ["$49m^2 - 16n^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формулы разности квадратов</h5>
        <p>Формула: $(a+b)(a-b) = a^2 - b^2$</p>
        <p>В нашем случае: $a = 7m$, $b = 4n$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Квадрат первого выражения: $(7m)^2 = 49m^2$</p>
          <p>2. Квадрат второго выражения: $(4n)^2 = 16n^2$</p>
          <p>3. Разность: $49m^2 - 16n^2$</p>
          
          <p>Или в одну строку:</p>
          <p>$$(7m+4n)(7m-4n) = (7m)^2 - (4n)^2 = 49m^2 - 16n^2$$</p>
          <p>Средние члены $+28mn$ и $-28mn$ взаимно уничтожаются.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Перемножим напрямую:</p>
              <p>$$(7m+4n)(7m-4n) = 7m \\cdot 7m + 7m \\cdot (-4n) + 4n \\cdot 7m + 4n \\cdot (-4n)$$</p>
              <p>$$= 49m^2 - 28mn + 28mn - 16n^2 = 49m^2 - 16n^2$$ ✓</p>
              <p>$-28mn + 28mn = 0$ — слагаемые действительно сокращаются.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Забывают возвести в квадрат коэффициенты: $7m^2 - 4n^2$</p>
              <p><strong>Ошибка 2:</strong> Путают с квадратом разности: $49m^2 - 28mn + 16n^2$</p>
              <p><strong>Ошибка 3:</strong> Неправильный знак: $49m^2 + 16n^2$</p>
              <p><strong>Ошибка 4:</strong> Оставляют средние члены: $49m^2 + 28mn - 16n^2$</p>
              <p><strong>Ошибка 5:</strong> Не возводят в квадрат оба выражения</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Преимущество формулы:</strong> Вместо умножения двух скобок с четырьмя слагаемыми получаем сразу ответ — разность двух квадратов.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-018",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Применение формулы суммы кубов",
    "theme": "Формулы сокращенного умножения",
    "text": "Разложите на множители $64 + a^3$",
    "choices": [
      "$(4+a)(16-4a+a^2)$",
      "$(4+a)(16+4a+a^2)$",
      "$(4-a)(16+4a+a^2)$",
      "$(4+a)^3$",
      "$(8+a)(64-8a+a^2)$"
    ],
    "answers": ["$(4+a)(16-4a+a^2)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формулы суммы кубов</h5>
        <p>Формула: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$</p>
        <p>В нашем случае: $64 + a^3 = 4^3 + a^3$</p>
        <p>Значит: $b = 4$, $a = a$ (в формуле)</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Представляем 64 как куб: $64 = 4^3$</p>
          <p>2. Применяем формулу суммы кубов: $X^3 + Y^3 = (X+Y)(X^2 - XY + Y^2)$</p>
          <p>Где $X = a$, $Y = 4$</p>
          <p>3. Получаем: $a^3 + 4^3 = (a+4)(a^2 - a\\cdot4 + 4^2)$</p>
          <p>4. Упрощаем: $(a+4)(a^2 - 4a + 16)$</p>
          
          <p>Или в одну строку:</p>
          <p>$$64 + a^3 = 4^3 + a^3 = (4+a)(4^2 - 4\\cdot a + a^2) = (4+a)(16 - 4a + a^2)$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Умножим $(4+a)(16 - 4a + a^2)$:</p>
              <p>$$(4+a)(16 - 4a + a^2) = 4\\cdot16 + 4\\cdot(-4a) + 4\\cdot a^2 + a\\cdot16 + a\\cdot(-4a) + a\\cdot a^2$$</p>
              <p>$$= 64 - 16a + 4a^2 + 16a - 4a^2 + a^3 = 64 + a^3$$ ✓</p>
              <p>Слагаемые $-16a+16a=0$, $4a^2-4a^2=0$ — сокращаются.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Путают с квадратом суммы: $(4+a)^2 = 16 + 8a + a^2$</p>
              <p><strong>Ошибка 2:</strong> Неправильный знак в неполном квадрате: $(4+a)(16+4a+a^2)$</p>
              <p><strong>Ошибка 3:</strong> Путают с разностью кубов: $(4-a)(16+4a+a^2)$</p>
              <p><strong>Ошибка 4:</strong> Неправильно определяют куб: $64 = 8^2$, а не $4^3$ (но $8^2=64$, а $4^3=64$ — оба верны, но для суммы кубов нужен куб)</p>
              <p><strong>Ошибка 5:</strong> $(8+a)(64-8a+a^2)$ — это было бы для $a^3 + 8^3 = a^3 + 512$, а не 64</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните:</strong> $64 = 4^3$, а $512 = 8^3$. Для суммы кубов важно правильно определить, куб какого числа.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-019",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Применение формулы разности кубов",
    "theme": "Формулы сокращенного умножения",
    "text": "Разложите на множители $125x^3 - 8y^3$",
    "choices": [
      "$(5x-2y)(25x^2+10xy+4y^2)$",
      "$(5x-2y)(25x^2-10xy+4y^2)$",
      "$(5x+2y)(25x^2-10xy+4y^2)$",
      "$(5x-2y)^3$",
      "$(5x-2y)(25x^2+20xy+4y^2)$"
    ],
    "answers": ["$(5x-2y)(25x^2+10xy+4y^2)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формулы разности кубов</h5>
        <p>Формула: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</p>
        <p>В нашем случае: $125x^3 - 8y^3 = (5x)^3 - (2y)^3$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Представляем как кубы: $125x^3 = (5x)^3$, $8y^3 = (2y)^3$</p>
          <p>2. Применяем формулу разности кубов: $X^3 - Y^3 = (X-Y)(X^2 + XY + Y^2)$</p>
          <p>Где $X = 5x$, $Y = 2y$</p>
          <p>3. Получаем: $(5x)^3 - (2y)^3 = (5x-2y)[(5x)^2 + (5x)(2y) + (2y)^2]$</p>
          <p>4. Упрощаем: $(5x-2y)(25x^2 + 10xy + 4y^2)$</p>
          
          <p>Или в одну строку:</p>
          <p>$$125x^3 - 8y^3 = (5x)^3 - (2y)^3 = (5x-2y)(25x^2 + 10xy + 4y^2)$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>Умножим $(5x-2y)(25x^2 + 10xy + 4y^2)$:</p>
              <p>$$(5x-2y)(25x^2 + 10xy + 4y^2) = 5x\\cdot25x^2 + 5x\\cdot10xy + 5x\\cdot4y^2 - 2y\\cdot25x^2 - 2y\\cdot10xy - 2y\\cdot4y^2$$</p>
              <p>$$= 125x^3 + 50x^2y + 20xy^2 - 50x^2y - 20xy^2 - 8y^3 = 125x^3 - 8y^3$$ ✓</p>
              <p>Слагаемые $+50x^2y-50x^2y=0$, $+20xy^2-20xy^2=0$ — сокращаются.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Неправильный знак в неполном квадрате: $(5x-2y)(25x^2-10xy+4y^2)$</p>
              <p><strong>Ошибка 2:</strong> Путают с суммой кубов: $(5x+2y)(25x^2-10xy+4y^2)$</p>
              <p><strong>Ошибка 3:</strong> Путают с кубом разности: $(5x-2y)^3 = 125x^3 - 150x^2y + 60xy^2 - 8y^3$</p>
              <p><strong>Ошибка 4:</strong> Неправильно вычисляют коэффициенты: $5x \\cdot 2y = 10xy$, а не $20xy$</p>
              <p><strong>Ошибка 5:</strong> Не возводят в квадрат коэффициенты: $(5x)^2 = 25x^2$, а не $5x^2$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните структуру:</strong> Разность кубов = (разность) × (квадрат первого + произведение + квадрат второго).
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-020",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Упрощение выражения с формулами",
    "theme": "Формулы сокращенного умножения",
    "text": "Упростите выражение $(x+3)^2 - (x-2)^2$",
    "choices": [
      "$10x+5$",
      "$10x+13$",
      "$2x+5$",
      "$2x+13$",
      "$10x+1$"
    ],
    "answers": ["$10x+5$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Упрощение с использованием формул</h5>
        <p>Дано: $(x+3)^2 - (x-2)^2$</p>
        <p>Можно раскрыть каждый квадрат по формуле, а можно применить другую стратегию.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Способ 1: Раскрытие квадратов</strong>
        </div>
        <div class="card-body">
          <p>1. $(x+3)^2 = x^2 + 6x + 9$</p>
          <p>2. $(x-2)^2 = x^2 - 4x + 4$</p>
          <p>3. Вычитаем: $(x^2 + 6x + 9) - (x^2 - 4x + 4)$</p>
          <p>4. Раскрываем скобки: $x^2 + 6x + 9 - x^2 + 4x - 4$</p>
          <p>5. Приводим подобные: $(x^2 - x^2) + (6x + 4x) + (9 - 4) = 10x + 5$</p>
        </div>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Способ 2: Использование разности квадратов</strong>
        </div>
        <div class="card-body">
          <p>Заметим, что $A^2 - B^2 = (A-B)(A+B)$</p>
          <p>Здесь $A = x+3$, $B = x-2$</p>
          <p>Тогда: $(x+3)^2 - (x-2)^2 = [(x+3) - (x-2)] \\cdot [(x+3) + (x-2)]$</p>
          <p>Упрощаем первую скобку: $(x+3) - (x-2) = x+3-x+2 = 5$</p>
          <p>Вторая скобка: $(x+3) + (x-2) = x+3+x-2 = 2x+1$</p>
          <p>Произведение: $5 \\cdot (2x+1) = 10x + 5$</p>
          <p>Этот способ короче и элегантнее!</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Проверка подстановкой</strong>
            </div>
            <div class="card-body">
              <p>Подставим $x=0$ в исходное выражение:</p>
              <p>$(0+3)^2 - (0-2)^2 = 3^2 - (-2)^2 = 9 - 4 = 5$</p>
              <p>Подставим $x=0$ в результат $10x+5$: $10\\cdot0+5=5$ ✓</p>
              <p>Подставим $x=1$: $(1+3)^2 - (1-2)^2 = 4^2 - (-1)^2 = 16-1=15$</p>
              <p>$10\\cdot1+5=15$ ✓</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Неправильно раскрывают квадрат разности: $(x-2)^2 = x^2 - 4$ (без $-4x$)</p>
              <p><strong>Ошибка 2:</strong> Ошибаются в знаках при вычитании: забывают сменить знаки во второй скобке</p>
              <p><strong>Ошибка 3:</strong> $10x+13$ — получается, если не вычесть 4, а прибавить</p>
              <p><strong>Ошибка 4:</strong> $2x+5$ — если сложить $6x$ и $-4x$ как $2x$, но забыть, что это разные знаки</p>
              <p><strong>Ошибка 5:</strong> $2x+13$ — комбинация ошибок</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Совет:</strong> При вычитании выражений в скобках всегда внимательно меняйте знаки: $-(a-b-c) = -a+b+c$.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-021",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Определение формулы по геометрической модели",
    "theme": "Формулы сокращенного умножения",
    "text": "На рисунке изображен квадрат со стороной $a+b$, разделенный на четыре части. Какая формула соответствует площади всего квадрата?",
    "choices": [
      "$a^2 + b^2$",
      "$(a+b)^2$",
      "$a^2 + 2ab + b^2$",
      "$(a-b)^2$",
      "$a^2 - b^2$"
    ],
    "answers": ["$a^2 + 2ab + b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Геометрическая интерпретация формулы</h5>
        <p>Квадрат со стороной $(a+b)$ можно разделить на 4 части:</p>
        <ol>
          <li>Квадрат со стороной $a$ (площадь $a^2$)</li>
          <li>Квадрат со стороной $b$ (площадь $b^2$)</li>
          <li>Два прямоугольника со сторонами $a$ и $b$ (площадь $ab$ каждый)</li>
        </ol>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Геометрическая модель</strong>
        </div>
        <div class="card-body text-center">
          <div style="font-family: monospace; font-size: 1.1em;">
            <div>┌─────────┬─────┐</div>
            <div>│         │     │</div>
            <div>│   a²    │ ab  │  a</div>
            <div>│         │     │</div>
            <div>├─────────┼─────┤</div>
            <div>│         │     │</div>
            <div>│   ab    │ b²  │  b</div>
            <div>│         │     │</div>
            <div>└─────────┴─────┘</div>
            <div>     a        b</div>
          </div>
          <p class="mt-3">Сторона всего квадрата: $a+b$</p>
          <p>Площадь всего квадрата: $(a+b)^2$</p>
          <p>Сумма площадей частей: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$</p>
          <p>Таким образом: $(a+b)^2 = a^2 + 2ab + b^2$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Анализ вариантов</strong>
            </div>
            <div class="card-body">
              <p><strong>$a^2 + b^2$</strong> — только квадраты, нет прямоугольников</p>
              <p><strong>$(a+b)^2$</strong> — это площадь всего квадрата, но не разложение на части</p>
              <p><strong>$a^2 + 2ab + b^2$</strong> — правильное разложение площади на части</p>
              <p><strong>$(a-b)^2$</strong> — площадь квадрата со стороной $(a-b)$</p>
              <p><strong>$a^2 - b^2$</strong> — разность площадей двух квадратов</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Геометрические модели других формул</strong>
            </div>
            <div class="card-body">
              <p><strong>Разность квадратов $a^2-b^2$</strong>:</p>
              <p>Из квадрата $a^2$ вырезаем квадрат $b^2$, остаток можно разрезать и сложить в прямоугольник $(a-b)(a+b)$</p>
              
              <p><strong>Квадрат разности $(a-b)^2$</strong>:</p>
              <p>Площадь квадрата со стороной $(a-b)$ — это $a^2$ минус два прямоугольника $ab$ плюс $b^2$ (но $b^2$ вычитается дважды, поэтому добавляется обратно)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Геометрический смысл:</strong> Формулы сокращенного умножения имеют наглядные геометрические интерпретации, которые помогают их понять и запомнить.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-022",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Неполный квадрат суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Какое выражение называется неполным квадратом суммы?",
    "choices": [
      "$a^2 + 2ab + b^2$",
      "$a^2 + ab + b^2$",
      "$a^2 - 2ab + b^2$",
      "$a^2 - ab + b^2$",
      "$a^2 + b^2$"
    ],
    "answers": ["$a^2 + ab + b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Понятие неполного квадрата</h5>
        <p>Неполный квадрат — это выражение, похожее на квадрат суммы или разности, но без удвоенного произведения (или с одинарным произведением).</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Определения</strong>
        </div>
        <div class="card-body">
          <p><strong>Полный квадрат суммы:</strong> $a^2 + 2ab + b^2 = (a+b)^2$</p>
          <p><strong>Неполный квадрат суммы:</strong> $a^2 + ab + b^2$</p>
          <p>Разница: вместо $2ab$ стоит $ab$.</p>
          
          <p><strong>Полный квадрат разности:</strong> $a^2 - 2ab + b^2 = (a-b)^2$</p>
          <p><strong>Неполный квадрат разности:</strong> $a^2 - ab + b^2$</p>
          <p>Разница: вместо $2ab$ стоит $ab$.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Где встречаются неполные квадраты?</strong>
            </div>
            <div class="card-body">
              <p>Неполные квадраты появляются в формулах суммы и разности кубов:</p>
              <p>$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$</p>
              <p>Здесь $a^2 - ab + b^2$ — неполный квадрат разности</p>
              <p>$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$</p>
              <p>Здесь $a^2 + ab + b^2$ — неполный квадрат суммы</p>
              <p>Название "неполный" указывает, что вместо $2ab$ стоит $ab$.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры неполных квадратов</strong>
            </div>
            <div class="card-body">
              <p>1. Для $a=2x$, $b=3y$:</p>
              <p>Полный квадрат суммы: $4x^2 + 12xy + 9y^2$</p>
              <p>Неполный квадрат суммы: $4x^2 + 6xy + 9y^2$</p>
              
              <p>2. Для $a=5$, $b=1$:</p>
              <p>Полный квадрат разности: $25 - 10 + 1 = 16$</p>
              <p>Неполный квадрат разности: $25 - 5 + 1 = 21$</p>
              
              <p>3. $x^2 + x + 1$ — неполный квадрат суммы при $a=x$, $b=1$</p>
              <p>4. $4y^2 - 2y + 1$ — неполный квадрат разности при $a=2y$, $b=1$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Важно:</strong> Неполные квадраты $a^2 ± ab + b^2$ не являются полными квадратами (не раскладываются как $(a±b)^2$), но участвуют в разложении суммы/разности кубов.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-023",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Формула квадрата разности с отрицательным вторым слагаемым",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно $(x - (-y))^2$?",
    "choices": [
      "$x^2 - 2xy + y^2$",
      "$x^2 + 2xy + y^2$",
      "$x^2 - y^2$",
      "$x^2 + y^2$",
      "$x^2 - 2xy - y^2$"
    ],
    "answers": ["$x^2 + 2xy + y^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Работа с отрицательными знаками</h5>
        <p>Дано: $(x - (-y))^2$</p>
        <p>Сначала упростим выражение в скобках, затем возведем в квадрат.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Упростим выражение в скобках: $x - (-y) = x + y$</p>
          <p>Минус на минус дает плюс: $-(-y) = +y$</p>
          
          <p>2. Теперь имеем: $(x + y)^2$</p>
          
          <p>3. Применяем формулу квадрата суммы: $(a+b)^2 = a^2 + 2ab + b^2$</p>
          <p>Где $a = x$, $b = y$</p>
          
          <p>4. Получаем: $(x+y)^2 = x^2 + 2xy + y^2$</p>
          
          <p>Или в одну строку:</p>
          <p>$$(x - (-y))^2 = (x + y)^2 = x^2 + 2xy + y^2$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Альтернативный подход</strong>
            </div>
            <div class="card-body">
              <p>Можно рассматривать как квадрат разности: $(a-b)^2$ где $b = -y$</p>
              <p>Тогда: $(x - (-y))^2 = [x - (-y)]^2$</p>
              <p>По формуле квадрата разности: $(a-b)^2 = a^2 - 2ab + b^2$</p>
              <p>Здесь $a = x$, $b = -y$</p>
              <p>Подставляем: $x^2 - 2x(-y) + (-y)^2 = x^2 + 2xy + y^2$</p>
              <p>Тот же результат.</p>
              <p>Важно: $(-y)^2 = y^2$ (квадрат всегда неотрицательный)</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Типичные ошибки</strong>
            </div>
            <div class="card-body">
              <p><strong>Ошибка 1:</strong> Не упрощают скобки: $(x-(-y))^2 = x^2 - 2x(-y) + (-y)^2$, но затем ошибаются в знаках</p>
              <p><strong>Ошибка 2:</strong> $-2x(-y)$ вычисляют как $-2xy$ вместо $+2xy$</p>
              <p><strong>Ошибка 3:</strong> $(-y)^2$ вычисляют как $-y^2$ вместо $y^2$</p>
              <p><strong>Ошибка 4:</strong> Сразу применяют формулу квадрата разности без учета, что $b$ отрицательное</p>
              <p><strong>Ошибка 5:</strong> Получают $x^2 - 2xy + y^2$ — это было бы для $(x-y)^2$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общее правило:</strong> $(a - (-b))^2 = (a+b)^2 = a^2 + 2ab + b^2$. Всегда сначала упрощайте выражение в скобках.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-024",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Квадрат суммы с коэффициентами",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно $(3x + 4y)^2$?",
    "choices": [
      "$9x^2 + 16y^2$",
      "$9x^2 + 24xy + 16y^2$",
      "$3x^2 + 24xy + 4y^2$",
      "$9x^2 + 12xy + 16y^2$",
      "$6x^2 + 24xy + 8y^2$"
    ],
    "answers": ["$9x^2 + 24xy + 16y^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Квадрат суммы с коэффициентами</h5>
        <p>Формула: $(a+b)^2 = a^2 + 2ab + b^2$</p>
        <p>В нашем случае: $a = 3x$, $b = 4y$</p>
        <p>Важно правильно возводить в квадрат коэффициенты.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p>1. Квадрат первого слагаемого: $(3x)^2 = 9x^2$</p>
          <p>Квадрат коэффициента: $3^2 = 9$, переменная $x^2$</p>
          
          <p>2. Удвоенное произведение: $2 \\cdot (3x) \\cdot (4y) = 2 \\cdot 3x \\cdot 4y = 24xy$</p>
          <p>Сначала $2 \\cdot 3 \\cdot 4 = 24$, затем $x \\cdot y = xy$</p>
          
          <p>3. Квадрат второго слагаемого: $(4y)^2 = 16y^2$</p>
          <p>Квадрат коэффициента: $4^2 = 16$, переменная $y^2$</p>
          
          <p>4. Собираем: $9x^2 + 24xy + 16y^2$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка умножением</strong>
            </div>
            <div class="card-body">
              <p>$(3x+4y)(3x+4y) = 3x\\cdot3x + 3x\\cdot4y + 4y\\cdot3x + 4y\\cdot4y$</p>
              <p>$= 9x^2 + 12xy + 12xy + 16y^2 = 9x^2 + 24xy + 16y^2$ ✓</p>
              
              <p>Можно проверить подстановкой числовых значений:</p>
              <p>Пусть $x=1$, $y=1$: $(3+4)^2 = 7^2 = 49$</p>
              <p>По формуле: $9\\cdot1 + 24\\cdot1 + 16\\cdot1 = 9+24+16=49$ ✓</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Анализ ошибок в вариантах</strong>
            </div>
            <div class="card-body">
              <p><strong>$9x^2 + 16y^2$</strong> — нет удвоенного произведения</p>
              <p><strong>$3x^2 + 24xy + 4y^2$</strong> — коэффициенты не возведены в квадрат</p>
              <p><strong>$9x^2 + 12xy + 16y^2$</strong> — неправильный коэффициент у $xy$ (12 вместо 24)</p>
              <p><strong>$6x^2 + 24xy + 8y^2$</strong> — коэффициенты удвоены, а не возведены в квадрат</p>
              <p><strong>Правильно:</strong> $9x^2 + 24xy + 16y^2$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Правило:</strong> $(ka)^2 = k^2a^2$, а не $ka^2$! Квадрат коэффициента умножается на квадрат переменной.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-025",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Обратное применение формулы",
    "theme": "Формулы сокращенного умножения",
    "text": "Представьте выражение $x^2 - 10x + 25$ в виде квадрата двучлена.",
    "choices": [
      "$(x-5)^2$",
      "$(x+5)^2$",
      "$(x-10)^2$",
      "$(x-25)^2$",
      "$(x-5)(x+5)$"
    ],
    "answers": ["$(x-5)^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Обратное применение формулы</h5>
        <p>Дано: $x^2 - 10x + 25$</p>
        <p>Нужно представить в виде $(a±b)^2 = a^2 ± 2ab + b^2$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Метод выделения полного квадрата</strong>
        </div>
        <div class="card-body">
          <p>1. Первый член: $x^2$ — это квадрат $x$</p>
          <p>2. Последний член: $25 = 5^2$ — это квадрат 5</p>
          <p>3. Средний член: $-10x$ — должен равняться $±2ab$</p>
          
          <p>Проверим для $a=x$, $b=5$:</p>
          <p>$2ab = 2 \\cdot x \\cdot 5 = 10x$</p>
          <p>Знак среднего члена минус → значит, в формуле квадрата разности</p>
          
          <p>4. Получаем: $x^2 - 10x + 25 = x^2 - 2 \\cdot x \\cdot 5 + 5^2 = (x-5)^2$</p>
          
          <p>Проверим: $(x-5)^2 = x^2 - 10x + 25$ ✓</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Проверка вариантов</strong>
            </div>
            <div class="card-body">
              <p><strong>$(x-5)^2$</strong>: $x^2 - 10x + 25$ ✓</p>
              <p><strong>$(x+5)^2$</strong>: $x^2 + 10x + 25$ — знак среднего плюс</p>
              <p><strong>$(x-10)^2$</strong>: $x^2 - 20x + 100$ — не совпадает</p>
              <p><strong>$(x-25)^2$</strong>: $x^2 - 50x + 625$ — не совпадает</p>
              <p><strong>$(x-5)(x+5)$</strong>: $x^2 - 25$ — только два члена</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Общий алгоритм</strong>
            </div>
            <div class="card-body">
              <p>Чтобы представить трехчлен $ax^2 + bx + c$ в виде квадрата двучлена:</p>
              <ol>
                <li>$a$ должно быть полным квадратом: $a = m^2$</li>
                <li>$c$ должно быть полным квадратом: $c = n^2$</li>
                <li>$b$ должно равняться $2mn$ (с учетом знака)</li>
                <li>Тогда: $ax^2 + bx + c = (mx ± n)^2$</li>
                <li>Знак выбирается по знаку $b$: если $b > 0$, то $+$; если $b < 0$, то $-$</li>
              </ol>
              <p>В нашем случае: $a=1=1^2$, $c=25=5^2$, $b=-10=-2\\cdot1\\cdot5$ → $(1x-5)^2$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Проверка:</strong> Всегда можно раскрыть скобки предложенного варианта и сравнить с исходным выражением.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-026",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Разложение на множители с использованием нескольких формул",
    "theme": "Формулы сокращенного умножения",
    "text": "Разложите на множители $x^4 - 16$",
    "choices": [
      "$(x^2-4)(x^2+4)$",
      "$(x-2)(x+2)(x^2+4)$",
      "$(x-2)^2(x+2)^2$",
      "$(x-4)(x+4)$",
      "$(x^2-4)^2$"
    ],
    "answers": ["$(x-2)(x+2)(x^2+4)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Многоступенчатое разложение</h5>
        <p>Дано: $x^4 - 16$</p>
        <p>Это разность квадратов: $x^4 = (x^2)^2$, $16 = 4^2$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Пошаговое решение</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Применяем формулу разности квадратов:</p>
          <p>$$x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4)$$</p>
          
          <p><strong>Шаг 2:</strong> Замечаем, что $x^2 - 4$ — тоже разность квадратов:</p>
          <p>$$x^2 - 4 = x^2 - 2^2 = (x-2)(x+2)$$</p>
          
          <p><strong>Шаг 3:</strong> $x^2 + 4$ на множители в вещественных числах не раскладывается.</p>
          
          <p><strong>Итог:</strong> $$x^4 - 16 = (x-2)(x+2)(x^2+4)$$</p>
          
          <p>Можно проверить умножением:</p>
          <p>$(x-2)(x+2) = x^2 - 4$</p>
          <p>$(x^2-4)(x^2+4) = x^4 - 16$ ✓</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Анализ вариантов</strong>
            </div>
            <div class="card-body">
              <p><strong>$(x^2-4)(x^2+4)$</strong> — правильно, но не до конца разложено</p>
              <p><strong>$(x-2)(x+2)(x^2+4)$</strong> — полностью разложено ✓</p>
              <p><strong>$(x-2)^2(x+2)^2$</strong> — это было бы для $x^4 - 8x^2 + 16$, а не $x^4 - 16$</p>
              <p><strong>$(x-4)(x+4)$</strong> — это $x^2 - 16$, а не $x^4 - 16$</p>
              <p><strong>$(x^2-4)^2$</strong> — это $x^4 - 8x^2 + 16$, а не $x^4 - 16$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Дополнительные возможности</strong>
            </div>
            <div class="card-body">
              <p>В комплексных числах $x^2 + 4$ тоже раскладывается:</p>
              <p>$$x^2 + 4 = x^2 - (2i)^2 = (x-2i)(x+2i)$$</p>
              <p>где $i = \\sqrt{-1}$ — мнимая единица.</p>
              <p>Тогда полное разложение в комплексных числах:</p>
              <p>$$x^4 - 16 = (x-2)(x+2)(x-2i)(x+2i)$$</p>
              <p>Но в школьном курсе обычно ограничиваются вещественными числами.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общая стратегия:</strong> При разложении на множители: 1) Вынести общий множитель; 2) Применить формулы сокращенного умножения; 3) Продолжать, пока возможно.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-027",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Определение знака в формуле",
    "theme": "Формулы сокращенного умножения",
    "text": "Если в выражении $a^2 + □ab + b^2$ вместо □ стоит 2, то это квадрат суммы. А если вместо □ стоит -2?",
    "choices": [
      "Квадрат суммы",
      "Квадрат разности",
      "Разность квадратов",
      "Сумма кубов",
      "Разность кубов"
    ],
    "answers": ["Квадрат разности"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Анализ структуры выражения</h5>
        <p>Рассмотрим общий вид: $a^2 + kab + b^2$</p>
        <p>Значение коэффициента $k$ определяет, какой формуле соответствует выражение.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Известные формулы</strong>
        </div>
        <div class="card-body">
          <p><strong>Квадрат суммы:</strong> $(a+b)^2 = a^2 + 2ab + b^2$ → $k = 2$</p>
          <p><strong>Квадрат разности:</strong> $(a-b)^2 = a^2 - 2ab + b^2$ → $k = -2$</p>
          <p><strong>Неполный квадрат суммы:</strong> $a^2 + ab + b^2$ → $k = 1$ (в формуле суммы кубов)</p>
          <p><strong>Неполный квадрат разности:</strong> $a^2 - ab + b^2$ → $k = -1$ (в формуле разности кубов)</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Решение задачи</strong>
            </div>
            <div class="card-body">
              <p>Дано: $a^2 + kab + b^2$, где $k = -2$</p>
              <p>Тогда: $a^2 + (-2)ab + b^2 = a^2 - 2ab + b^2$</p>
              <p>Это в точности формула квадрата разности: $(a-b)^2$</p>
              
              <p>Проверим: $(a-b)^2 = (a-b)(a-b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$ ✓</p>
              
              <p>Таким образом, при $k = -2$ получаем квадрат разности.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Другие значения k</strong>
            </div>
            <div class="card-body">
              <p><strong>$k = 0$:</strong> $a^2 + b^2$ — сумма квадратов (не раскладывается в вещественных числах)</p>
              <p><strong>$k = 1$:</strong> $a^2 + ab + b^2$ — неполный квадрат суммы</p>
              <p><strong>$k = -1$:</strong> $a^2 - ab + b^2$ — неполный квадрат разности</p>
              <p><strong>$k = 2$:</strong> $a^2 + 2ab + b^2$ — квадрат суммы</p>
              <p><strong>$k = -2$:</strong> $a^2 - 2ab + b^2$ — квадрат разности</p>
              <p><strong>|k| > 2$:</strong> Не является полным квадратом (если $a$ и $b$ — переменные без коэффициентов)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Ключевой признак:</strong> Для полного квадрата двучлена коэффициент при $ab$ должен быть равен $±2$. Знак "+" — квадрат суммы, знак "-" — квадрат разности.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-028",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Вычисление с использованием формул",
    "theme": "Формулы сокращенного умножения",
    "text": "Вычислите $101^2$, используя формулу сокращенного умножения.",
    "choices": [
      "10001",
      "10201",
      "11001",
      "12001",
      "10021"
    ],
    "answers": ["10201"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Применение формул для устного счета</h5>
        <p>Чтобы вычислить $101^2$, представим 101 как $100 + 1$</p>
        <p>Тогда $101^2 = (100 + 1)^2$</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение по формуле квадрата суммы</strong>
        </div>
        <div class="card-body">
          <p>Формула: $(a+b)^2 = a^2 + 2ab + b^2$</p>
          <p>Здесь: $a = 100$, $b = 1$</p>
          <p>$$(100+1)^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2$$</p>
          <p>$$= 10000 + 200 + 1 = 10201$$</p>
          
          <p>Проверим: $101 \\times 101 = 101 \\times 100 + 101 \\times 1 = 10100 + 101 = 10201$ ✓</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Другие примеры устного счета</strong>
            </div>
            <div class="card-body">
              <p><strong>$99^2$:</strong> $(100-1)^2 = 100^2 - 2\\cdot100\\cdot1 + 1^2 = 10000 - 200 + 1 = 9801$</p>
              <p><strong>$102^2$:</strong> $(100+2)^2 = 10000 + 400 + 4 = 10404$</p>
              <p><strong>$98^2$:</strong> $(100-2)^2 = 10000 - 400 + 4 = 9604$</p>
              <p><strong>$51^2$:</strong> $(50+1)^2 = 2500 + 100 + 1 = 2601$</p>
              <p><strong>$49^2$:</strong> $(50-1)^2 = 2500 - 100 + 1 = 2401$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Анализ вариантов</strong>
            </div>
            <div class="card-body">
              <p><strong>10001</strong> — это $100^2 + 1$, а не $(100+1)^2$</p>
              <p><strong>10201</strong> — правильно: $10000+200+1$ ✓</p>
              <p><strong>11001</strong> — $100^2 + 1000 + 1$</p>
              <p><strong>12001</strong> — $100^2 + 2000 + 1$</p>
              <p><strong>10021</strong> — $100^2 + 20 + 1$</p>
              <p>Частая ошибка: $101^2 = 100^2 + 1^2 = 10000+1=10001$ — неверно, забывают удвоенное произведение.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Общая техника:</strong> Чтобы возвести в квадрат число близкое к круглому, представьте его как (круглое ± небольшое число) и примените формулу квадрата суммы/разности.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-029",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Выражение, не являющееся формулой",
    "theme": "Формулы сокращенного умножения",
    "text": "Какое из следующих выражений НЕ является верной формулой сокращенного умножения?",
    "choices": [
      "$(a+b)^2 = a^2 + 2ab + b^2$",
      "$(a-b)^2 = a^2 - 2ab + b^2$",
      "$a^2 - b^2 = (a-b)(a+b)$",
      "$a^3 + b^3 = (a+b)^3$",
      "$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$"
    ],
    "answers": ["$a^3 + b^3 = (a+b)^3$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Проверка формул на корректность</h5>
        <p>Нужно найти выражение, которое не является верным тождеством.</p>
        <p>Проверим каждое утверждение.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Проверка вариантов</strong>
        </div>
        <div class="card-body">
          <p><strong>1. $(a+b)^2 = a^2 + 2ab + b^2$</strong> — верно, это формула квадрата суммы ✓</p>
          
          <p><strong>2. $(a-b)^2 = a^2 - 2ab + b^2$</strong> — верно, это формула квадрата разности ✓</p>
          
          <p><strong>3. $a^2 - b^2 = (a-b)(a+b)$</strong> — верно, это формула разности квадратов ✓</p>
          
          <p><strong>4. $a^3 + b^3 = (a+b)^3$</strong> — <span class="text-danger">НЕВЕРНО!</span></p>
          <p>Проверим: $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</p>
          <p>Это не равно $a^3 + b^3$, если $a$ и $b$ не нулевые.</p>
          <p>Правильная формула: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ ✗</p>
          
          <p><strong>5. $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</strong> — верно, это формула разности кубов ✓</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Контрпример для неверной формулы</strong>
            </div>
            <div class="card-body">
              <p>Чтобы убедиться, что $a^3 + b^3 \\neq (a+b)^3$, подставим конкретные числа.</p>
              <p>Пусть $a=1$, $b=1$:</p>
              <p>$a^3 + b^3 = 1^3 + 1^3 = 1 + 1 = 2$</p>
              <p>$(a+b)^3 = (1+1)^3 = 2^3 = 8$</p>
              <p>$2 \\neq 8$ → формула неверна.</p>
              
              <p>Другой пример: $a=2$, $b=1$:</p>
              <p>$2^3 + 1^3 = 8 + 1 = 9$</p>
              <p>$(2+1)^3 = 3^3 = 27$</p>
              <p>$9 \\neq 27$</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Правильные формулы для кубов</strong>
            </div>
            <div class="card-body">
              <p><strong>Куб суммы:</strong> $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</p>
              <p><strong>Куб разности:</strong> $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$</p>
              <p><strong>Сумма кубов:</strong> $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$</p>
              <p><strong>Разность кубов:</strong> $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</p>
              
              <p>Частая ошибка: путают сумму кубов с кубом суммы. Это разные формулы!</p>
              <p>Сумма кубов: $a^3+b^3$ — два слагаемых</p>
              <p>Куб суммы: $(a+b)^3$ — четыре слагаемых после раскрытия</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Запомните:</strong> $a^3 + b^3 \\neq (a+b)^3$! Это одна из самых распространенных ошибок в алгебре.
      </div>
    </div>`
  },
  {
    "id": "algebra-fsu-030",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Обобщение формул",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равна сумма $a^2 + b^2$, если известно, что $a+b=5$ и $ab=6$?",
    "choices": [
      "13",
      "17",
      "19",
      "25",
      "37"
    ],
    "answers": ["13"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Использование формул для вычисления выражений</h5>
        <p>Дано: $a+b=5$, $ab=6$</p>
        <p>Найти: $a^2 + b^2$</p>
        <p>Используем связь между этими выражениями через формулы.</p>
      </div>
      
      <div class="card border-success mb-3">
        <div class="card-header bg-success text-white">
          <strong>Решение через квадрат суммы</strong>
        </div>
        <div class="card-body">
          <p>Из формулы квадрата суммы: $(a+b)^2 = a^2 + 2ab + b^2$</p>
          <p>Выразим $a^2 + b^2$:</p>
          <p>$$a^2 + b^2 = (a+b)^2 - 2ab$$</p>
          <p>Подставляем известные значения:</p>
          <p>$$a^2 + b^2 = 5^2 - 2 \\cdot 6 = 25 - 12 = 13$$</p>
          
          <p>Проверим на конкретных числах. Из $a+b=5$ и $ab=6$ следует, что $a$ и $b$ — корни уравнения $x^2 - 5x + 6 = 0$:</p>
          <p>$x^2 - 5x + 6 = (x-2)(x-3) = 0$ → $a=2$, $b=3$ или наоборот.</p>
          <p>Тогда $a^2 + b^2 = 2^2 + 3^2 = 4 + 9 = 13$ ✓</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-primary mb-3">
            <div class="card-header bg-primary text-white">
              <strong>Другие полезные связи</strong>
            </div>
            <div class="card-body">
              <p>Из формул можно получить:</p>
              <p>1. $a^2 + b^2 = (a+b)^2 - 2ab$</p>
              <p>2. $a^2 - b^2 = (a-b)(a+b)$</p>
              <p>3. $(a-b)^2 = (a+b)^2 - 4ab$</p>
              <p>4. $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$</p>
              <p>5. $a^3 - b^3 = (a-b)^3 + 3ab(a-b)$</p>
              
              <p>В нашем случае, если нужно найти $(a-b)^2$:</p>
              <p>$(a-b)^2 = (a+b)^2 - 4ab = 25 - 24 = 1$</p>
              <p>Значит, $a-b = ±1$.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Анализ вариантов</strong>
            </div>
            <div class="card-body">
              <p><strong>13</strong> — правильно: $25 - 12 = 13$ ✓</p>
              <p><strong>17</strong> — если сложить: $25 + 12 = 37$, но не вычесть</p>
              <p><strong>19</strong> — $25 - 6 = 19$ (не умножили на 2)</p>
              <p><strong>25</strong> — только $(a+b)^2$, без вычитания $2ab$</p>
              <p><strong>37</strong> — $(a+b)^2 + 2ab = 25 + 12 = 37$ (знак ошибка)</p>
              <p>Частые ошибки: забывают коэффициент 2 или ошибаются в знаке.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-light border">
        <strong>💡 Формула-помощник:</strong> $a^2 + b^2 = (a+b)^2 - 2ab$. Запомните её — она часто используется в задачах.
      </div>
    </div>`
  }
,

 


  {
  "id": "powers001",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 2",
  "theme": "Степени",
  "text": "Упростите выражение: $$a^3 \\cdot a^2$$",
  "choices": [
    "$a^5$",
    "$a^6$", 
    "$a$",
    "$a^9$",
    "$a^1$"
  ],
  "answers": ["$a^5$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Умножение степеней с одинаковыми основаниями</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При умножении степеней с одинаковыми основаниями показатели складываются:</p>
        <p class="card-text text-center">$$a^m \\cdot a^n = a^{m+n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$a^3 \\cdot a^2 = a^{3+2} = a^5$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $a^5$
    </div>
  </div>
</div>`
},
{
  "id": "powers002",
  "type": "multiplechoices",
  "header": "Степени", 
  "title": "Упрощение выражений 3",
  "theme": "Степени",
  "text": "Упростите выражение: $$\\frac{b^7}{b^4}$$",
  "choices": [
    "$b^3$",
    "$b^{11}$",
    "$b^4$",
    "$b^7$", 
    "$b^{28}$"
  ],
  "answers": ["$b^3$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Деление степеней с одинаковыми основаниями</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При делении степеней с одинаковыми основаниями показатели вычитаются:</p>
        <p class="card-text text-center">$$\\frac{a^m}{a^n} = a^{m-n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$\\frac{b^7}{b^4} = b^{7-4} = b^3$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $b^3$
    </div>
  </div>
</div>`
},
{
  "id": "powers003",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 4",
  "theme": "Степени", 
  "text": "Упростите выражение: $$(c^2)^4$$",
  "choices": [
    "$c^6$",
    "$c^8$",
    "$c^2$",
    "$c^{16}$",
    "$c^4$"
  ],
  "answers": ["$c^8$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Возведение степени в степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При возведении степени в степень показатели перемножаются:</p>
        <p class="card-text text-center">$$(a^m)^n = a^{m \\cdot n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$(c^2)^4 = c^{2 \\cdot 4} = c^8$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $c^8$
    </div>
  </div>
</div>`
},
{
  "id": "powers004",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 5",
  "theme": "Степени",
  "text": "Упростите выражение: $$(2x)^3$$",
  "choices": [
    "$2x^3$",
    "$8x^3$", 
    "$6x^3$",
    "$2x^4$",
    "$8x$"
  ],
  "answers": ["$8x^3$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Возведение произведения в степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При возведении произведения в степень каждый множитель возводится в степень:</p>
        <p class="card-text text-center">$$(ab)^n = a^n \\cdot b^n$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$(2x)^3 = 2^3 \\cdot x^3 = 8x^3$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $8x^3$
    </div>
  </div>
</div>`
},
{
  "id": "powers005", 
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 6",
  "theme": "Степени",
  "text": "Чему равно значение выражения $$5^0$$",
  "choices": [
    "0",
    "1", 
    "5",
    "25", 
    "не определено"
  ],
  "answers": ["1"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Нулевая степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Любое число (кроме нуля) в нулевой степени равно 1:</p>
        <p class="card-text text-center">$$a^0 = 1 \\text{ (где } a \\neq 0\\text{)}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$5^0 = 1$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> 1
    </div>
  </div>
</div>`
},
{
  "id": "powers006",
  "type": "multiplechoices", 
  "header": "Степени",
  "title": "Упрощение выражений 7",
  "theme": "Степени",
  "text": "Упростите выражение: $$a^5 \\cdot a^{-2}$$",
  "choices": [
    "$a^3$",
    "$a^7$",
    "$a^{-10}$", 
    "$a^{-3}$",
    "$a^{10}$"
  ],
  "answers": ["$a^3$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Умножение степеней с отрицательным показателем</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При умножении степеней с одинаковыми основаниями показатели складываются (включая отрицательные):</p>
        <p class="card-text text-center">$$a^m \\cdot a^n = a^{m+n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$a^5 \\cdot a^{-2} = a^{5 + (-2)} = a^3$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $a^3$
    </div>
  </div>
</div>`
},
{
  "id": "powers007",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 8", 
  "theme": "Степени",
  "text": "Упростите выражение: $$\\left(\\frac{x}{y}\\right)^3$$",
  "choices": [
    "$\\frac{x^3}{y}$",
    "$\\frac{x}{y^3}$", 
    "$\\frac{x^3}{y^3}$",
    "$\\frac{x^2}{y^2}$",
    "$\\frac{x}{y}$"
  ],
  "answers": ["$\\frac{x^3}{y^3}$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Возведение дроби в степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При возведении дроби в степень и числитель, и знаменатель возводятся в степень:</p>
        <p class="card-text text-center">$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$\\left(\\frac{x}{y}\\right)^3 = \\frac{x^3}{y^3}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $\\frac{x^3}{y^3}$
    </div>
  </div>
</div>`
},
{
  "id": "powers008",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 9",
  "theme": "Степени",
  "text": "Упростите выражение: $$2^3 \\cdot 2^4$$", 
  "choices": [
    "$2^7$",
    "$2^{12}$",
    "$4^7$",
    "$8^2$",
    "$16^3$"
  ],
  "answers": ["$2^7$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Умножение степеней с одинаковыми основаниями</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При умножении степеней с одинаковыми основаниями показатели складываются:</p>
        <p class="card-text text-center">$$a^m \\cdot a^n = a^{m+n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$2^3 \\cdot 2^4 = 2^{3+4} = 2^7$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> $2^7$
    </div>
  </div>
</div>`
},

{
  "id": "powers_negative001",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Отрицательная степень", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{-2}$$ в виде десятичной дроби",
  "answer": "1 / POWER({var1-10}, 2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Отрицательная степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Число в отрицательной степени равно единице, делённой на это число в положительной степени:</p>
        <p class="card-text text-center">$$a^{-n} = \\frac{1}{a^n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {={var1-10}}^{-2} = \\frac{1}{{var1-10}^2} $$</p>
        <p class="card-text">$$ {={var1-10}^2} = {=POWER({var1-10},2)} $$</p>
        <p class="card-text">$$\\frac{1}{{= POWER({var1-10}, 2)}} = {= 1 / POWER({var1-10}, 2)}$$</p>
      </div>
    </div>
     <div class="card-footer bg-warning">
      <b>Ответ:</b> {= 1 / POWER({var1-10}, 2)}
    </div>
   
  </div>
</div>`,
  "randomfrom": [2, 3, 4, 5, 6]
},
{
  "id": "powers_negative002",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Отрицательная степень дроби", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $$\\left(\\frac{1}{{var1-10}}\\right)^{-3}$$",
  "answer": "POWER({var1-10}, 3)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Отрицательная степень дроби</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Дробь в отрицательной степени переворачивается:</p>
        <p class="card-text text-center">$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$\\left(\\frac{1}{{var1-10}}\\right)^{-3} = \\left(\\frac{{var1-10}}{1}\\right)^3 = {var1-10}^3$$</p>
        <p class="card-text">$$ {var1-10}^3 = {= POWER({var1-10}, 3)} $$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER({var1-10}, 3)}
    </div>
  </div>
</div>`,
  "randomfrom": [2, 3, 4, 5, 6]
},
{
  "id": "powers_negative003",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Произведение положительной и отрицательной степени", 
  "theme": "Степени",
  "text": "Упростите выражение: $${var1-10}^3 \\cdot {var1-10}^{-5}$$ и запишите ответ в виде десятичной дроби",
  "answer": "1 / POWER({var1-10}, 2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Умножение степеней</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При умножении степеней с одинаковыми основаниями показатели складываются:</p>
        <p class="card-text text-center">$$a^m \\cdot a^n = a^{m+n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^3 \\cdot {var1-10}^{-5} = {var1-10}^{3 + (-5)} = {var1-10}^{-2}$$</p>
        <p class="card-text">$$ {var1-10}^{-2} = \\frac{1}{{var1-10}^2}$$</p>
        <p class="card-text">$$ {var1-10}^2 = {= POWER({var1-10}, 2)}$$</p>
        <p class="card-text">$$\\frac{1}{{= POWER({var1-10}, 2)}} = {= 1 / POWER({var1-10}, 2)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= 1 / POWER({var1-10}, 2)}
    </div>
  </div>
</div>`,
  "randomfrom": [2, 3, 4, 5, 6]
},
{
  "id": "powers_fraction001",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Дробная степень (квадратный корень)", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{1/2}$$?",
  "answer": "SQRT({var1-10})",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Дробная степень 1/2</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Степень 1/2 означает квадратный корень:</p>
        <p class="card-text text-center">$$a^{1/2} = \\sqrt{a}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{1/2} = \\sqrt{{var1-10}}$$</p>
        <p class="card-text">$$\\sqrt{{var1-10}} = {= SQRT({var1-10})}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= SQRT({var1-10})}
    </div>
  </div>
</div>`,
  "randomfrom": [ 4, 9, 16, 25]
},
{
  "id": "powers_fraction002",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Дробная степень (кубический корень)", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{1/3}$$?",
  "answer": "POWER({var1-10}, 1/3)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Дробная степень 1/3</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Степень 1/3 означает кубический корень:</p>
        <p class="card-text text-center">$$a^{1/3} = \\sqrt[3]{a}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{1/3} = \\sqrt[3]{{var1-10}}$$</p>
        <p class="card-text">$$\\sqrt[3]{{var1-10}} = {= POWER({var1-10}, 1/3)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER({var1-10}, 1/3)}
    </div>
  </div>
</div>`,
  "randomfrom": [ 8, 27, 64, 125]
},
{
  "id": "powers_fraction003",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Дробная степень 2/3", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{2/3}$$?",
  "answer": "POWER(POWER({var1-10}, 1/3), 2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Дробная степень m/n</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Степень m/n можно представить двумя способами:</p>
        <p class="card-text text-center">$$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{2/3} = (\\sqrt[3]{{var1-10}})^2$$</p>
        <p class="card-text">$$\\sqrt[3]{{var1-10}} = {= POWER({var1-10}, 1/3)}$$</p>
        <p class="card-text">$$({= POWER({var1-10}, 1/3)})^2 = {= POWER(POWER({var1-10}, 1/3), 2)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER(POWER({var1-10}, 1/3), 2)}
    </div>
  </div>
</div>`,
  "randomfrom": [ 8, 27, 64, 125]
},
{
  "id": "powers_fraction004",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Дробная степень 3/2", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{3/2}$$?",
  "answer": "POWER(POWER({var1-10}, 1/2), 3)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Дробная степень 3/2</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Степень 3/2 можно представить как:</p>
        <p class="card-text text-center">$$a^{3/2} = (\\sqrt{a})^3 = \\sqrt{a^3}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{3/2} = (\\sqrt{{var1-10}})^3$$</p>
        <p class="card-text">$$\\sqrt{{var1-10}} = {= SQRT({var1-10})}$$</p>
        <p class="card-text">$$({= SQRT({var1-10})})^3 = {= POWER(POWER({var1-10}, 1/2), 3)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER(POWER({var1-10}, 1/2), 3)}
    </div>
  </div>
</div>`,
  "randomfrom": [ 4, 9, 16, 25]
},
{
  "id": "powers_negative_fraction001",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Отрицательная дробная степень", 
  "theme": "Степени",
  "text": "Чему равно значение выражения $${var1-10}^{-1/2}$$?",
  "answer": "1 / SQRT({var1-10})",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Отрицательная дробная степень</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">Сначала применяем правило отрицательной степени, затем дробной:</p>
        <p class="card-text text-center">$$a^{-m/n} = \\frac{1}{a^{m/n}} = \\frac{1}{\\sqrt[n]{a^m}}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{-1/2} = \\frac{1}{{var1-10}^{1/2}} = \\frac{1}{\\sqrt{{var1-10}}}$$</p>
        <p class="card-text">$$\\sqrt{{var1-10}} = {= SQRT({var1-10})}$$</p>
        <p class="card-text">$$\\frac{1}{{= SQRT({var1-10})}} = {= 1 / SQRT({var1-10})}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= 1 / SQRT({var1-10})}
    </div>
  </div>
</div>`,
  "randomfrom": [ 4, 9, 16, 25]
},
{
  "id": "powers_mixed001",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Смешанное выражение со степенями", 
  "theme": "Степени",
  "text": "Упростите выражение: $$\\frac{{var1-10}^{3} \\cdot {var1-10}^{-1/2}}{{var1-10}^{1/2}}$$",
  "answer": "POWER({var1-10}, 2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Смешанное выражение со степенями</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 1: Складываем показатели в числителе</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^{3} \\cdot {var1-10}^{-1/2} = {var1-10}^{3 + (-1/2)} = {var1-10}^{2.5} = {var1-10}^{5/2}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Шаг 2: Вычитаем показатель знаменателя</div>
      <div class="card-body">
        <p class="card-text">$$\\frac{{var1-10}^{5/2}}{{var1-10}^{1/2}} = {var1-10}^{5/2 - 1/2} = {var1-10}^{4/2} = {var1-10}^2$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Результат</div>
      <div class="card-body">
        <p class="card-text">$$ {var1-10}^2 = {= POWER({var1-10}, 2)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER({var1-10}, 2)}
    </div>
  </div>
</div>`,
  "randomfrom": [ 2, 3, 4, 5]
},

{
  "id": "powers_mixed002",
  "type": "mathwithrandomnumber",
  "header": "Степени",
  "title": "Степень степени с дробным показателем", 
  "theme": "Степени",
  "text": "Упростите выражение: $$({var1-10}^{2/3})^{3}$$",
  "answer": "POWER({var1-10}, 2)",
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Степень степени</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Правило</div>
      <div class="card-body">
        <p class="card-text">При возведении степени в степень показатели перемножаются:</p>
        <p class="card-text text-center">$$(a^m)^n = a^{m \\cdot n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">Применяем правило</div>
      <div class="card-body">
        <p class="card-text">$$({var1-10}^{2/3})^{3} = {var1-10}^{(2/3) \\cdot 3} = {var1-10}^{2}$$</p>
        <p class="card-text">$$ {var1-10}^2 = {= POWER({var1-10}, 2)}$$</p>
      </div>
    </div>
    
    <div class="card-footer bg-warning">
      <b>Ответ:</b> {= POWER({var1-10}, 2)}
    </div>
  </div>
</div>`,
  "randomfrom": [ 2, 3, 4, 5]
},


{
  "id": "number_e_limit_001",
  "type": "multiplechoices",
  "header": "Математический анализ: Число e",
  "title": "Определение числа e через предел",
  "theme": "Числа и пределы",
  "functionGraph": "false",
  "text": "Число $e$ (основание натурального логарифма) определяется как предел последовательности. Какой из следующих пределов равен числу $e$?",
  "choices": [
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$",
    "$\\lim_{n \\to \\infty} \\left(1 + n\\right)^{\\frac{1}{n}}$",
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^{n^2}$",
    "$\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n}\\right)^n$",
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n^2}\\right)^n$"
  ],
  "answers": ["$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Число e: классическое определение через предел</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Определение числа e:</strong>
      $$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$$
      где $n$ — натуральное число (можно также $n \\in \\mathbb{R}$, $n \\to \\infty$).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Историческая справка</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Число $e$ впервые исследовал Якоб Бернулли в XVII веке при изучении задачи о непрерывном начислении процентов.</p>
        <p class="card-text">Формула: если вклад $1$ под $100\\%$ годовых начислять $n$ раз в год, то итоговая сумма:</p>
        <p class="card-text">$$\\left(1 + \\frac{1}{n}\\right)^n$$</p>
        <p class="card-text">При $n \\to \\infty$ получается $e \\approx 2.71828$.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Проверка на малых n</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$n$</th><th>$\\left(1 + \\frac{1}{n}\\right)^n$</th><th>Приближение</th></tr>
            </thead>
            <tbody>
              <tr><td>$1$</td><td>$(2)^1 = 2$</td><td>$2.00000$</td></tr>
              <tr><td>$2$</td><td>$(1.5)^2 = 2.25$</td><td>$2.25000$</td></tr>
              <tr><td>$5$</td><td>$(1.2)^5$</td><td>$2.48832$</td></tr>
              <tr><td>$10$</td><td>$(1.1)^{10}$</td><td>$2.59374$</td></tr>
              <tr><td>$100$</td><td>$(1.01)^{100}$</td><td>$2.70481$</td></tr>
              <tr><td>$1000$</td><td>$(1.001)^{1000}$</td><td>$2.71692$</td></tr>
              <tr><td>$10000$</td><td>$(1.0001)^{10000}$</td><td>$2.71815$</td></tr>
              <tr class="table-success"><td>$\\infty$</td><td>$e$</td><td>$2.71828...$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Почему другие варианты не подходят?</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">❌ $(1 + n)^{1/n} \\to 1$ (стремится к 1)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 + 1/n)^{n^2} \\to \\infty$ (расходится)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 - 1/n)^n \\to 1/e \\approx 0.3679$ (обратное число)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 + 1/n^2)^n \\to 1$ (стремится к 1)</li>
          <li class="list-group-item list-group-item-success">✅ $(1 + 1/n)^n \\to e \\approx 2.71828$</li>
        </ul>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $\\displaystyle \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$
    </div>

  </div>
</div>`
},

{
  "id": "number_e_derivative_002",
  "type": "multiplechoices",
  "header": "Математический анализ: Число e",
  "title": "Число e как основание натурального логарифма",
  "theme": "Числа и производные",
  "functionGraph": "false",
  "text": "Известно, что производная логарифмической функции $y = \\log_a(x)$ равна $\\frac{1}{x \\ln(a)}$. При каком основании $a$ производная функции $y = \\log_a(x)$ равна $\\frac{1}{x}$?",
  "choices": [
    "$a = 10$",
    "$a = 2$",
    "$a = e$",
    "$a = \\pi$",
    "$a = \\frac{1}{2}$"
  ],
  "answers": ["$a = e$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Число e и натуральный логарифм</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула производной логарифма:</strong>
      $$\\frac{d}{dx} \\log_a(x) = \\frac{1}{x \\ln(a)}$$
      где $\\ln(a)$ — натуральный логарифм основания $a$.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Условие задачи</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Нам нужно, чтобы:</p>
        <p class="card-text">$$\\frac{d}{dx} \\log_a(x) = \\frac{1}{x}$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Приравниваем формулы</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\frac{1}{x \\ln(a)} = \\frac{1}{x}$$</p>
        <p class="card-text">Сокращаем $\\frac{1}{x}$ (при $x \\neq 0$):</p>
        <p class="card-text">$$\\frac{1}{\\ln(a)} = 1$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Решаем уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\ln(a) = 1$$</p>
        <p class="card-text">По определению натурального логарифма:</p>
        <p class="card-text">$$a = e^1 = e$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Результат</h5>
      </div>
      <div class="card-body">
        <p class="card-text">При $a = e$ получаем:</p>
        <p class="card-text">$$\\frac{d}{dx} \\ln(x) = \\frac{1}{x}$$</p>
        <p class="card-text">Это свойство делает число $e$ <strong>естественным</strong> основанием логарифма.</p>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $a = e$
    </div>

  </div>
</div>`
},

{
  "id": "number_e_exponential_003",
  "type": "multiplechoices",
  "header": "Математический анализ: Число e",
  "title": "Число e в определении экспоненты",
  "theme": "Числа и пределы",
  "functionGraph": "false",
  "text": "Функция $f(x) = e^x$ (экспонента) может быть определена через предел. Какой из следующих пределов равен $e^x$?",
  "choices": [
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n$",
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{n}{x}\\right)^n$",
    "$\\lim_{n \\to \\infty} \\left(1 + x\\right)^{\\frac{n}{x}}$",
    "$\\lim_{n \\to \\infty} \\left(1 - \\frac{x}{n}\\right)^n$",
    "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{nx}\\right)^n$"
  ],
  "answers": ["$\\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Определение экспоненты через предел</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Определение экспоненты:</strong>
      $$e^x = \\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n$$
      Это обобщение классического предела для числа $e$ (при $x=1$ получаем $e$).
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Связь с классическим определением</h5>
      </div>
      <div class="card-body">
        <p class="card-text">При $x = 1$:</p>
        <p class="card-text">$$e^1 = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$</p>
        <p class="card-text">✓ Согласуется с определением числа $e$.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Пример для x = 2</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$e^2 \\approx 7.389$$</p>
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$n$</th><th>$\\left(1 + \\frac{2}{n}\\right)^n$</th><th>Приближение</th></tr>
            </thead>
            <tbody>
              <tr><td>$10$</td><td>$(1.2)^{10}$</td><td>$6.1917$</td></tr>
              <tr><td>$100$</td><td>$(1.02)^{100}$</td><td>$7.2446$</td></tr>
              <tr><td>$1000$</td><td>$(1.002)^{1000}$</td><td>$7.3743$</td></tr>
              <tr class="table-success"><td>$\\infty$</td><td>$e^2$</td><td>$7.3891$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Почему другие варианты не подходят?</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">❌ $(1 + n/x)^n \\to \\infty$ (расходится)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 + x)^{n/x}$ — не предел по $n$ (зависит от $n$ в показателе иначе)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 - x/n)^n \\to e^{-x}$ (обратная экспонента)</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 + 1/(nx))^n \\to 1$ (стремится к 1)</li>
          <li class="list-group-item list-group-item-success">✅ $(1 + x/n)^n \\to e^x$</li>
        </ul>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $\\displaystyle \\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n = e^x$
    </div>

  </div>
</div>`
},

{
  "id": "number_e_properties_004",
  "type": "multiplechoices",
  "header": "Математический анализ: Число e",
  "title": "Уникальные свойства числа e",
  "theme": "Числа и свойства",
  "functionGraph": "false",
  "text": "Какое из следующих утверждений о числе $e$ является ВЕРНЫМ?",
  "choices": [
    "Площадь под гиперболой $y = 1/x$ от $1$ до $e$ равна $1$",
    "Число $e$ является корнем уравнения $\\ln(x) = 0$",
    "Число $e$ — это $\\frac{22}{7}$",
    "$e$ — это $\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n}\\right)^n$",
    "$e$ — это $\\frac{\\pi}{2}$"
  ],
  "answers": ["Площадь под гиперболой $y = 1/x$ от $1$ до $e$ равна $1$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Геометрическое свойство числа e</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Интегральное определение числа e:</strong>
      $$\\int_{1}^{e} \\frac{1}{x} \\, dx = 1$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Вычисляем интеграл</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int_{1}^{e} \\frac{1}{x} \\, dx = \\ln|x| \\Big|_{1}^{e} = \\ln(e) - \\ln(1) = 1 - 0 = 1$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Геометрический смысл</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Площадь фигуры под гиперболой $y = 1/x$ на интервале $[1, e]$ равна в точности $1$.</p>
        <div class="alert alert-secondary">
          <strong>📐 Графическая интерпретация:</strong><br>
          $$\\text{Площадь} = \\int_{1}^{e} \\frac{1}{x} dx = 1$$
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Проверка остальных утверждений</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">❌ $\\ln(x) = 0$ ⇒ $x = 1$ (а не $e$)</li>
          <li class="list-group-item list-group-item-danger">❌ $22/7 \\approx 3.142$ — это приближение $\\pi$, не $e$</li>
          <li class="list-group-item list-group-item-danger">❌ $(1 - 1/n)^n \\to 1/e \\approx 0.3679$</li>
          <li class="list-group-item list-group-item-danger">❌ $\\pi/2 \\approx 1.571$ — это не $e$</li>
          <li class="list-group-item list-group-item-success">✅ $\\int_{1}^{e} 1/x \\, dx = 1$ — верно!</li>
        </ul>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> Площадь под гиперболой $y = 1/x$ от $1$ до $e$ равна $1$
    </div>

  </div>
</div>`
},

{
  "id": "imaginary_i_definition_001",
  "type": "multiplechoices",
  "header": "Комплексные числа: Мнимая единица",
  "title": "Определение мнимой единицы i",
  "theme": "Комплексные числа",
  "functionGraph": "false",
  "text": "Мнимая единица $i$ определяется как число, квадрат которого равен...",
  "choices": [
    "$i^2 = 1$",
    "$i^2 = -1$",
    "$i^2 = 0$",
    "$i^2 = i$",
    "$i^2 = \\sqrt{-1}$"
  ],
  "answers": ["$i^2 = -1$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Определение мнимой единицы i</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Определение:</strong>
      $$i^2 = -1$$
      где $i$ — мнимая единица.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Историческая справка</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Мнимую единицу ввёл Леонард Эйлер в XVIII веке для решения уравнений вида $x^2 + 1 = 0$.</p>
        <p class="card-text">Уравнение $x^2 = -1$ не имеет решений среди действительных чисел, но имеет два решения в комплексных: $x = i$ и $x = -i$.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Почему другие варианты не подходят?</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">❌ $i^2 = 1$ ⇒ $i = 1$ или $i = -1$ (действительные числа)</li>
          <li class="list-group-item list-group-item-success">✅ $i^2 = -1$ — корректное определение</li>
          <li class="list-group-item list-group-item-danger">❌ $i^2 = 0$ ⇒ $i = 0$ (действительное число)</li>
          <li class="list-group-item list-group-item-danger">❌ $i^2 = i$ ⇒ $i(i - 1) = 0$ ⇒ $i = 0$ или $i = 1$</li>
          <li class="list-group-item list-group-item-warning">⚠️ $i = \\sqrt{-1}$ — это обозначение, но формальное определение через $i^2 = -1$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Степени числа i</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$i^1$</th><th>$i^2$</th><th>$i^3$</th><th>$i^4$</th><th>$i^5$</th><th>$i^{4k}$</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$i$</th><th>$-1$</th><th>$-i$</th><th>$1$</th><th>$i$</th><th>$1$</th>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="card-text mt-2">Степени $i$ циклически повторяются с периодом 4:</p>
        <p class="card-text">$$i^{4k} = 1,\\quad i^{4k+1} = i,\\quad i^{4k+2} = -1,\\quad i^{4k+3} = -i$$</p>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $i^2 = -1$
    </div>

  </div>
</div>`
},

{
  "id": "imaginary_i_powers_002",
  "type": "multiplechoices",
  "header": "Комплексные числа: Степени i",
  "title": "Вычисление степени мнимой единицы",
  "theme": "Комплексные числа",
  "functionGraph": "false",
  "text": "Чему равно $i^{2025}$?",
  "choices": [
    "$1$",
    "$-1$",
    "$i$",
    "$-i$",
    "$0$"
  ],
  "answers": ["$i$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Вычисление степеней мнимой единицы</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Цикличность степеней i:</strong>
      $$i^{4k} = 1,\\quad i^{4k+1} = i,\\quad i^{4k+2} = -1,\\quad i^{4k+3} = -i$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Находим остаток от деления показателя на 4</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$2025 \\div 4 = 506 \\text{ и остаток } 1$$</p>
        <p class="card-text">Проверка: $4 \\times 506 = 2024$, $2025 - 2024 = 1$</p>
        <p class="card-text">$$2025 = 4 \\times 506 + 1$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Применяем правило цикличности</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$i^{2025} = i^{4 \\times 506 + 1} = (i^4)^{506} \\cdot i^1$$</p>
        <p class="card-text">$$i^4 = 1 \\Rightarrow (i^4)^{506} = 1^{506} = 1$$</p>
        <p class="card-text">$$i^{2025} = 1 \\cdot i = i$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Таблица остатков</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>Остаток r</th><th>$i^{4k+r}$</th><th>Пример</th></tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>$0$</th><th>$1$</th><th>$i^{4} = 1$</th>
              </tr>
              <tr class="table-success">
                <td>$1$</th><th>$i$</th><th>$i^{2025} = i$</th>
              </tr>
              <tr class="table-warning">
                <td>$2$</th><th>$-1$</th><th>$i^{2026} = -1$</th>
              </tr>
              <tr class="table-danger">
                <td>$3$</th><th>$-i$</th><th>$i^{2027} = -i$</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $i^{2025} = i$
    </div>

  </div>
</div>`
},

{
  "id": "imaginary_i_conjugate_003",
  "type": "multiplechoices",
  "header": "Комплексные числа: Сопряжённые числа",
  "title": "Свойства комплексного сопряжения",
  "theme": "Комплексные числа",
  "functionGraph": "false",
  "text": "Для комплексного числа $z = a + bi$ (где $a, b \\in \\mathbb{R}$) комплексно-сопряжённым называется число $\\bar{z} = a - bi$. Чему равно произведение $z \\cdot \\bar{z}$?",
  "choices": [
    "$a^2 + b^2$",
    "$a^2 - b^2$",
    "$2a$",
    "$2bi$",
    "$a^2 + 2abi + b^2$"
  ],
  "answers": ["$a^2 + b^2$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Произведение комплексно-сопряжённых чисел</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Определение:</strong>
      $$z = a + bi,\\quad \\bar{z} = a - bi$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Перемножаем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$z \\cdot \\bar{z} = (a + bi)(a - bi)$$</p>
        <p class="card-text">Это формула разности квадратов:</p>
        <p class="card-text">$$(a + bi)(a - bi) = a^2 - (bi)^2$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Учитываем $i^2 = -1$</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$(bi)^2 = b^2 \\cdot i^2 = b^2 \\cdot (-1) = -b^2$$</p>
        <p class="card-text">$$a^2 - (-b^2) = a^2 + b^2$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Результат</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$z \\cdot \\bar{z} = a^2 + b^2$$</p>
        <p class="card-text">Это <strong>действительное</strong> неотрицательное число!</p>
        <div class="alert alert-warning">
          💡 <strong>Геометрический смысл:</strong> $|z| = \\sqrt{a^2 + b^2}$ — модуль числа $z$,<br>
          а $z \\cdot \\bar{z} = |z|^2$ — квадрат модуля.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $z \\cdot \\bar{z} = a^2 + b^2$
    </div>

  </div>
</div>`
},

{
  "id": "imaginary_i_euler_004",
  "type": "multiplechoices",
  "header": "Комплексные числа: Формула Эйлера",
  "title": "Связь экспоненты с тригонометрией",
  "theme": "Комплексные числа",
  "functionGraph": "false",
  "text": "Формула Эйлера устанавливает связь между экспонентой и тригонометрическими функциями. Какое из равенств является формулой Эйлера?",
  "choices": [
    "$e^{ix} = \\cos(x) + i\\sin(x)$",
    "$e^{ix} = \\cos(x) - i\\sin(x)$",
    "$e^{x} = \\cos(ix) + \\sin(ix)$",
    "$i^i = e^{-\\pi/2}$",
    "$e^{i\\pi} + 1 = 0$"
  ],
  "answers": ["$e^{ix} = \\cos(x) + i\\sin(x)$"],
  "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Формула Эйлера — жемчужина математики</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула Эйлера:</strong>
      $$e^{ix} = \\cos(x) + i\\sin(x)$$
      где $x \\in \\mathbb{R}$, $i$ — мнимая единица.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Частный случай — тождество Эйлера</h5>
      </div>
      <div class="card-body">
        <p class="card-text">При $x = \\pi$ получается <strong>самая красивая формула в математике</strong>:</p>
        <p class="card-text">$$e^{i\\pi} = \\cos(\\pi) + i\\sin(\\pi) = -1 + i \\cdot 0 = -1$$</p>
        <p class="card-text">$$e^{i\\pi} + 1 = 0$$</p>
        <div class="alert alert-success">
          ✨ Связывает 5 фундаментальных констант: $e$, $i$, $\\pi$, $1$, $0$!
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Геометрический смысл</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$e^{ix}$ задаёт точку на <strong>единичной окружности</strong> комплексной плоскости:</p>
        <ul>
          <li>Действительная часть: $\\cos(x)$</li>
          <li>Мнимая часть: $\\sin(x)$</li>
          <li>Модуль: $|e^{ix}| = 1$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Проверка остальных вариантов</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item list-group-item-success">✅ $e^{ix} = \\cos x + i\\sin x$ — формула Эйлера</li>
          <li class="list-group-item list-group-item-danger">❌ $e^{ix} = \\cos x - i\\sin x = e^{-ix}$ (сопряжённое)</li>
          <li class="list-group-item list-group-item-danger">❌ $e^x = \\cos(ix) + \\sin(ix)$ — неверно</li>
          <li class="list-group-item list-group-item-info">ℹ️ $i^i = e^{-\\pi/2}$ — следствие формулы Эйлера, но не сама формула</li>
          <li class="list-group-item list-group-item-info">ℹ️ $e^{i\\pi} + 1 = 0$ — тождество Эйлера (частный случай)</li>
        </ul>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Правильный ответ:</b> $e^{ix} = \\cos(x) + i\\sin(x)$
    </div>

  </div>
</div>`
},




 
// Тесты по логарифмам
{
  "id": "log001",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Вычисление логарифмов 1",
  "theme": "Логарифмы",
  "text": "Чему равен $\\log_2 8$?",
  "choices": [
    "2",
    "3", 
    "4",
    "1",
    "0"
  ],
  "answers": ["3"],
  "hint": "<p>Логарифм - это показатель степени, в которую нужно возвести основание, чтобы получить число.</p>$$\\log_a b = c \\text{ означает } a^c = b$$$$2^3 = 8$$$$\\log_2 8 = 3$$"
},
{
  "id": "log002",
  "type": "multiplechoices",
  "header": "Логарифмы", 
  "title": "Вычисление логарифмов 2",
  "theme": "Логарифмы",
  "text": "Чему равен $\\log_{10} 100$?",
  "choices": [
    "1",
    "2",
    "10",
    "100", 
    "0"
  ],
  "answers": ["2"],
  "hint": "<p>Логарифм по основанию 10 показывает, в какую степень нужно возвести 10.</p>$$\\log_{10} 100 = c \\text{ означает } 10^c = 100$$$$10^2 = 100$$$$\\log_{10} 100 = 2$$"
},
{
  "id": "log003",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Вычисление логарифмов 3",
  "theme": "Логарифмы", 
  "text": "Чему равен $\\log_5 25$?",
  "choices": [
    "1",
    "2",
    "5",
    "25",
    "0"
  ],
  "answers": ["2"],
  "hint": "<p>Найдем степень, в которую нужно возвести 5, чтобы получить 25.</p>$$\\log_5 25 = c \\text{ означает } 5^c = 25$$$$5^2 = 25$$$$\\log_5 25 = 2$$"
},
{
  "id": "log004",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Вычисление логарифмов 4",
  "theme": "Логарифмы",
  "text": "Чему равен $\\log_3 1$?",
  "choices": [
    "0", 
    "1",
    "3",
    "-1",
    "не определено"
  ],
  "answers": ["0"],
  "hint": "<p>Логарифм единицы по любому основанию равен 0.</p>$$\\log_a 1 = 0 \\text{ для любого } a > 0, a \\neq 1$$$$3^0 = 1$$$$\\log_3 1 = 0$$"
},
{
  "id": "log005", 
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Вычисление логарифмов 5",
  "theme": "Логарифмы",
  "text": "Чему равен $\\log_7 7$?",
  "choices": [
    "0",
    "1", 
    "7",
    "14", 
    "49"
  ],
  "answers": ["1"],
  "hint": "<p>Логарифм числа по равному ему основанию равен 1.</p>$$\\log_a a = 1 \\text{ для любого } a > 0, a \\neq 1$$$$7^1 = 7$$$$\\log_7 7 = 1$$"
},
{
  "id": "log006",
  "type": "multiplechoices", 
  "header": "Логарифмы",
  "title": "Основные свойства",
  "theme": "Логарифмы",
  "text": "Упростите выражение: $\\log_2 4 + \\log_2 8$",
  "choices": [
    "3",
    "4",
    "5", 
    "6",
    "7"
  ],
  "answers": ["5"],
  "hint": "<p>Используем свойство сложения логарифмов с одинаковыми основаниями.</p>$$\\log_a b + \\log_a c = \\log_a (b \\cdot c)$$$$\\log_2 4 + \\log_2 8 = \\log_2 (4 \\cdot 8) = \\log_2 32$$$$2^5 = 32$$$$\\log_2 32 = 5$$"
},
{
  "id": "log007",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Основные свойства 2", 
  "theme": "Логарифмы",
  "text": "Упростите выражение: $\\log_3 81 - \\log_3 3$",
  "choices": [
    "2",
    "3", 
    "4",
    "1",
    "0"
  ],
  "answers": ["3"],
  "hint": "<p>Используем свойство вычитания логарифмов с одинаковыми основаниями.</p>$$\\log_a b - \\log_a c = \\log_a \\left(\\frac{b}{c}\\right)$$$$\\log_3 81 - \\log_3 3 = \\log_3 \\left(\\frac{81}{3}\\right) = \\log_3 27$$$$3^3 = 27$$$$\\log_3 27 = 3$$"
},
{
  "id": "log008",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Основные свойства 3",
  "theme": "Логарифмы",
  "text": "Упростите выражение: $2 \\cdot \\log_5 25$", 
  "choices": [
    "2",
    "3",
    "4",
    "5",
    "6"
  ],
  "answers": ["4"],
  "hint": "<p>Используем свойство вынесения множителя перед логарифмом.</p>$$n \\cdot \\log_a b = \\log_a (b^n)$$$$2 \\cdot \\log_5 25 = \\log_5 (25^2) = \\log_5 625$$$$5^4 = 625$$$$\\log_5 625 = 4$$"
},
{
  "id": "log009",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Основные свойства 4",
  "theme": "Логарифмы",
  "text": "Чему равен $\\ln e$? ($\\ln$ - натуральный логарифм)",
  "choices": [
    "0",
    "1", 
    "e",
    "2",
    "10"
  ],
  "answers": ["1"],
  "hint": "<p>Натуральный логарифм - это логарифм по основанию e.</p>$$\\ln x = \\log_e x$$<p>Число e - это математическая константа, основание натурального логарифма.</p><p>Способы вычисления e:</p>$$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828$$$$e = \\sum_{n=0}^{\\infty} \\frac{1}{n!} = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\frac{1}{4!} + \\cdots$$<p>Уникальные свойства числа e:</p>$$\\frac{d}{dx}e^x = e^x$$$$\\int e^x dx = e^x + C$$$$e^{i\\pi} + 1 = 0 \\text{ (формула Эйлера)}$$<p>Свойство логарифма:</p>$$\\ln e = 1$$<p>так как</p>$$e^1 = e$$"
},
{
  "id": "log010",
  "type": "multiplechoices",
  "header": "Логарифмы",
  "title": "Основные свойства 5",
  "theme": "Логарифмы",
  "text": "Чему равен $\\log_4 2$?",
  "choices": [
    "$\\frac{1}{2}$",
    "$\\frac{1}{4}$",
    "2", 
    "4",
    "8"
  ],
  "answers": ["$\\frac{1}{2}$"],
  "hint": "<p>Представим 2 как корень из 4.</p>$$2 = 4^{\\frac{1}{2}}$$$$\\log_4 2 = \\log_4 4^{\\frac{1}{2}}$$$$\\log_a a^c = c$$$$\\log_4 4^{\\frac{1}{2}} = \\frac{1}{2}$$"
},

 
  {
    "id": "math004random1",
    "type": "quizwithrandomnumber",
    "header": "Устный счёт",
    "title": "Степени 2",
    "theme": "Степени",
    "text": "Чему равно {var1-10}² + {={var1-10}+2}²?",
    "answer": "{var1-10}*{var1-10}+({var1-10}+2) *({var1-10}+2)",
    "hint": `
    Число во второй степени можно вынести за скобку<br>
    {var1-10}² = {={var1-10}*{var1-10}}, {={var1-10}+2}² = {=({var1-10}+2) *({var1-10}+2)}, сумма = {={var1-10}*{var1-10}+({var1-10}+2) *({var1-10}+2)}`,
    "randomfrom": [3, 4, 5, 6, 7, 8]
  },
  {
    "id": "math004random2",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Степени 3",
    "theme": "Степени",
    "text": "Чему равно {var1-10}³ - {var1-10}²?",
    "answer": "POWER({var1-10}, 3) - POWER({var1-10}, 2)",
    "hint": "{var1-10}³ = {={var1-10}*{var1-10}*{var1-10}}, {var1-10}² = {={var1-10}*{var1-10}}, разность = {={var1-10}*{var1-10}*{var1-10}- {var1-10}*{var1-10}}",
    "randomfrom": [2, 3, 4, 5, 6, 8, 10]
  },

  {
  "id": "math004random3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Степени 4", 
  "theme": "Степени",
  "text": "Чему равно $$2^{{var1-10}} + 2^{{var1-10} + 1}$$?",
  "answer": "POWER(2, {var1-10}) + POWER(2, {var1-10} + 1)",
  "hint": "$2^{{var1-10}} = {= POWER(2, {var1-10})}$, $2^{{var1-10} + 1} = {= POWER(2, {var1-10} + 1)}$, сумма = {= POWER(2, {var1-10}) + POWER(2, {var1-10} + 1)}",
  "randomfrom": [2, 3, 4, 5, 6]
},

  {
    "id": "math005",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Упрощение выражения 3",
    "theme": "Уравнения",
    "text": "Чему равно x, если 3x + 5 = 20?",
    "choices": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "answers": ["5"],
    "hint": "<p>Нужно изолировать x на одной стороне уравнения.</p><ul><li><strong>Шаг 1:</strong> Вычтите 5 из обеих частей: 3x +5 - 5 = 20 - 5 → 3x = 15</li><li><strong>Шаг 2:</strong> Разделите обе части на 3: 3x / 3 = 15 / 3 → x = 5</li></ul>"
  },
  {
    "id": "math005random1",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Упрощение выражения 4",
    "theme": "Уравнения",
    "text": "Чему равно x, если {var1-10}x +5 = 25?",
    "answer": "(25 - 5) / {var1-10}",
    "hint": "{var1-10}x +5 = 25 → {var1-10}x = 20 → x = 20 / {var1-10}= {=20 / {var1-10}}",
    "randomfrom": [2, 4, 5, 10, 20]
  },
  {
    "id": "math005random2",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Упрощение выражения 5",
    "theme": "Уравнения",
    "text": "Чему равно x, если 2x - {var1-10}= 10?",
    "answer": "(10 +{var1-10}) / 2",
    "hint": "2x - {var1-10}= 10 → 2x = {=10 +{var1-10}} → x = {=(10 +{var1-10}) / 2}",
    "randomfrom": [2, 4, 6, 8, 10, 12]
  },
  {
    "id": "math005random3",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Упрощение выражения 6",
    "theme": "Уравнения",
    "text": "Чему равно x, если {var1-10}(x +2) = 30?",
    "answer": "30 / {var1-10}- 2",
    "hint": "{var1-10}(x +2) = 30 → x +2 = 30 / {var1-10}= {=30 / {var1-10}} → x = {=30 / {var1-10}- 2}",
    "randomfrom": [3, 5, 6, 10, 15]
  },

  {
    "id": "math008",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Решение неравенства 1",
    "theme": "Неравенства",
    "text": "Для каких целых x верно неравенство 1 < 2x - 3 ≤ 5?",
    "choices": [
      "x = 2, 3",
      "x = 3, 4",
      "x = 2, 3, 4",
      "x = 3, 4, 5",
      "x = 4, 5"
    ],
    "answers": ["x = 3, 4"],
    "hint": "<p>Решите двойное неравенство по частям.</p><ul><li><strong>Часть 1:</strong> 1 < 2x - 3 → 1 +3 < 2x → 4 < 2x → 2 < x → x > 2</li><li><strong>Часть 2:</strong> 2x - 3 ≤ 5 → 2x ≤ 5 +3 → 2x ≤ 8 → x ≤ 4</li><li><strong>Объединение:</strong> 2 < x ≤ 4. Целые числа, удовлетворяющие этому условию: 3 и 4.</li></ul>"
  },
{
  "id": "math008random1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 2",
  "theme": "Неравенства",
  "text": "Найдите наибольшее целое x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$",
  "answer": "FLOOR(({var1-10} + 7) / 2, 1)",
  "hint": "Решим неравенство: ${var1-10} < 2x - 1 \\leq {var1-10} + 6$ → ${var1-10} + 1 < 2x \\leq {var1-10} + 7$ → $\\frac{{var1-10} + 1}{2} < x \\leq \\frac{{var1-10} + 7}{2}$. Наибольшее целое x = $\\left\\lfloor \\frac{{var1-10} + 7}{2} \\right\\rfloor$",
  "randomfrom": [2, 4, 6, 8, 10]
},

 {
  "id": "math008random2",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 3",
  "theme": "Неравенства",
  "text": "Найдите наименьшее целое x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$",
  "answer": "CEILING(({var1-10} + 2) / 2, 1)",
  "hint": "Решим неравенство: ${var1-10} < 2x - 1 \\leq {var1-10} + 6$ → ${var1-10} + 1 < 2x \\leq {var1-10} + 7$ → $\\frac{{var1-10} + 1}{2} < x \\leq \\frac{{var1-10} + 7}{2}$. Наименьшее целое x = $\\left\\lceil \\frac{{var1-10} + 2}{2} \\right\\rceil$",
  "randomfrom": [2, 4, 6, 8, 10]
},

  {
  "id": "math008random3_max",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 4",
  "theme": "Неравенства",
  "text": "<p>Найдите наибольшее целое x, удовлетворяющее системе:</p>$${var1-10}x - 2 \\geq 8$$  и $${var1-10}x + 2 \\leq 22$$",
  "answer": "FLOOR(20 / {var1-10}, 1)",
  "hint": "Решим систему: ${var1-10}x - 2 \\geq 8$ → ${var1-10}x \\geq 10$ → $x \\geq \\frac{10}{{var1-10}}$; ${var1-10}x + 2 \\leq 22$ → ${var1-10}x \\leq 20$ → $x \\leq \\frac{20}{{var1-10}}$. Наибольшее целое x = $\\left\\lfloor \\frac{20}{{var1-10}} \\right\\rfloor$",
  "randomfrom": [2, 4, 5, 10]
},

{
  "id": "math008random3_min",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 5",
  "theme": "Неравенства",
  "text": "Найдите наименьшее целое x, удовлетворяющее системе: $${var1-10}x - 2 \\geq 8$$ и $${var1-10}x + 2 \\leq 22$$",
  "answer": "CEILING(10 / {var1-10}, 1)",
  "hint": "Решим систему: ${var1-10}x - 2 \\geq 8$ → ${var1-10}x \\geq 10$ → $x \\geq \\frac{10}{{var1-10}}$; ${var1-10}x + 2 \\leq 22$ → ${var1-10}x \\leq 20$ → $x \\leq \\frac{20}{{var1-10}}$. Наименьшее целое x = $\\left\\lceil \\frac{10}{{var1-10}} \\right\\rceil$",
  "randomfrom": [2, 4, 5, 10]
},

    {
    "id": "quadratic001",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наибольший корень 1",
    "theme": "Квадратные уравнения",
    "text": "Найдите наибольший корень уравнения: $$x^2 - {var1-10}x = 0$$",
    "answer": "{var1-10}",
    "hint": "<p><strong>Способ 1: Вынесение общего множителя</strong></p><p>Шаг 1: Выносим x за скобки</p>$$x^2 - {var1-10}x = x(x - {var1-10}) = 0$$<p>Шаг 2: Приравниваем каждый множитель к нулю</p>$$x = 0 \\quad \\text{или} \\quad x - {var1-10} = 0$$<p>Шаг 3: Находим корни</p>$$x_1 = 0, \\quad x_2 = {var1-10}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{var1-10}, c = 0</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{var1-10})^2 - 4 \\cdot 1 \\cdot 0 = {= {var1-10}*{var1-10}}$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{var1-10} \\pm {var1-10}}{2}$$$$x_1 = \\frac{{var1-10} - {var1-10}}{2} = 0, \\quad x_2 = \\frac{{var1-10} + {var1-10}}{2} = {var1-10}$$<p>Наибольший корень: {var1-10}</p>",
    "randomfrom": [3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    "id": "quadratic002",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наименьший корень 1",
    "theme": "Квадратные уравнения",
    "text": "Найдите наименьший корень уравнения: $$x^2 - {= {var1-10}*5}x = 0$$",
    "answer": "0",
    "hint": "<p><strong>Способ 1: Вынесение общего множителя</strong></p><p>Шаг 1: Выносим x за скобки</p>$$x^2 - {= {var1-10}*5}x = x(x - {= {var1-10}*5}) = 0$$<p>Шаг 2: Приравниваем каждый множитель к нулю</p>$$x = 0 \\quad \\text{или} \\quad x - {= {var1-10}*5} = 0$$<p>Шаг 3: Находим корни</p>$$x_1 = 0, \\quad x_2 = {= {var1-10}*5}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= {var1-10}*5}, c = 0</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= {var1-10}*5})^2 - 4 \\cdot 1 \\cdot 0 = {= {var1-10}*{var1-10}*25}$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= {var1-10}*5} \\pm {= {var1-10}*5}}{2}$$$$x_1 = \\frac{{= {var1-10}*5} - {= {var1-10}*5}}{2} = 0, \\quad x_2 = \\frac{{= {var1-10}*5} + {= {var1-10}*5}}{2} = {= {var1-10}*5}$$<p>Наименьший корень: 0</p>",
    "randomfrom": [2, 3, 4, 5, 6]
  },
  {
    "id": "quadratic003",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наибольший корень 2",
    "theme": "Квадратные уравнения",
    "text": "Найдите наибольший корень уравнения: $$x^2 - {= {var1-10}+1}x + {var1-10} = 0$$",
    "answer": "{var1-10}",
    "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = {= {var1-10}+1}, \\quad x_1 \\cdot x_2 = {var1-10}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= {var1-10}+1}, а произведение {var1-10}</p><p>Подходят числа: 1 и {var1-10}, так как:</p><p>1 + {var1-10} = {= {var1-10}+1}, 1 × {var1-10} = {var1-10}</p><p>Шаг 3: Записываем корни</p>$$x_1 = 1, \\quad x_2 = {var1-10}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= {var1-10}+1}, c = {var1-10}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= {var1-10}+1})^2 - 4 \\cdot 1 \\cdot {var1-10}$$$$D = {= ({var1-10}+1)*({var1-10}+1)} - {= {var1-10}*4}$$$$D = {= {var1-10}*{var1-10} + 2*{var1-10} + 1} - {= {var1-10}*4} = {= {var1-10}*{var1-10} - 2*{var1-10} + 1} = ({= {var1-10}-1})^2$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= {var1-10}+1} \\pm {= {var1-10}-1}}{2}$$$$x_1 = \\frac{{= {var1-10}+1} - {= {var1-10}-1}}{2} = \\frac{2}{2} = 1$$$$x_2 = \\frac{{= {var1-10}+1} + {= {var1-10}-1}}{2} = \\frac{{= {var1-10}*2}}{2} = {var1-10}$$<p>Наибольший корень: {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5, 6, 7, 8]
  },
  {
    "id": "quadratic004",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наименьший корень 2",
    "theme": "Квадратные уравнения",
    "text": "Найдите наименьший корень уравнения: $$x^2 - {= {var1-10}*2}x - {= {var1-10}*3} = 0$$",
    "answer": "-{var1-10}",
    "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = {= {var1-10}*2}, \\quad x_1 \\cdot x_2 = -{= {var1-10}*3}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= {var1-10}*2}, а произведение {= -{var1-10}*3}</p><p>Подходят числа: {= {var1-10}*3} и {= -{var1-10}}, так как:</p><p>{= {var1-10}*3} + ({= -{var1-10}}) = {= {var1-10}*2}</p><p>{= {var1-10}*3} × ({= -{var1-10}}) = {= -{var1-10}*3}</p><p>Шаг 3: Записываем корни</p>$$x_1 = {= -{var1-10}}, \\quad x_2 = {= {var1-10}*3}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= {var1-10}*2}, c = -{= {var1-10}*3}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= {var1-10}*2})^2 - 4 \\cdot 1 \\cdot (-{= {var1-10}*3})$$$$D = {= {var1-10}*{var1-10}*4} + {= {var1-10}*12} = {= {var1-10}*4*({var1-10} + 3)}$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= {var1-10}*2} \\pm \\sqrt{{= {var1-10}*4*({var1-10}+3)}}}{2}$$$$x = \\frac{{= {var1-10}*2} \\pm {= {var1-10}*2 + 2?}}{2}$$<p>Для конкретного значения {var1-10} дискриминант вычисляется численно.</p><p>Наименьший корень: {= -{var1-10}}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "quadratic005",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наибольший корень 3",
    "theme": "Квадратные уравнения",
    "text": "Найдите наибольший корень уравнения: $$x^2 + {= {var1-10}*2}x - {= {var1-10}*3} = 0$$",
    "answer": "{var1-10}",
    "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = -{= {var1-10}*2}, \\quad x_1 \\cdot x_2 = -{= {var1-10}*3}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= -{var1-10}*2}, а произведение {= -{var1-10}*3}</p><p>Подходят числа: {var1-10} и {= -{var1-10}*3}, так как:</p><p>{var1-10} + ({= -{var1-10}*3}) = {= -{var1-10}*2}</p><p>{var1-10} × ({= -{var1-10}*3}) = {= -{var1-10}*3}</p><p>Шаг 3: Записываем корни</p>$$x_1 = {= -{var1-10}*3}, \\quad x_2 = {var1-10}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = {= {var1-10}*2}, c = -{= {var1-10}*3}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = ({= {var1-10}*2})^2 - 4 \\cdot 1 \\cdot (-{= {var1-10}*3})$$$$D = {= {var1-10}*{var1-10}*4} + {= {var1-10}*12} = {= {var1-10}*4*({var1-10} + 3)}$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-{= {var1-10}*2} \\pm \\sqrt{{= {var1-10}*4*({var1-10}+3)}}}{2}$$<p>Наибольший корень: {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "quadratic006",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наименьший корень 3",
    "theme": "Квадратные уравнения",
    "text": "Найдите наименьший корень уравнения: $$x^2 - {= {var1-10}*{var1-10}} = 0$$",
    "answer": "-{var1-10}",
    "hint": "<p>Разность квадратов.</p>$$x^2 - {= {var1-10}*{var1-10}} = 0$$$$(x - {var1-10})(x + {var1-10}) = 0$$$$x_1 = {var1-10}, x_2 = -{var1-10}$$<p>Наименьший корень: -${var1-10}$</p>",
    "randomfrom": [3, 4, 5, 6, 7, 8]
  },
  {
    "id": "quadratic007",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наибольший корень 4",
    "theme": "Квадратные уравнения",
    "text": "Найдите наибольший корень уравнения: $$x^2 - {= {var1-10}+5}x + {= {var1-10}*5} = 0$$",
    "answer": "5",
    "hint": "<p>Ищем корни через теорему Виета.</p>$$x^2 - {= {var1-10}+5}x + {= {var1-10}*5} = 0$$<p>Сумма корней: ${= {var1-10}+5}$, произведение: ${= {var1-10}*5}$</p><p>Корни: ${var1-10}$ и 5</p><p>Наибольший корень: 5</p>",
    "randomfrom": [2, 3, 4]
  },
  {
    "id": "quadratic008",
    "type": "mathwithrandomnumber",
    "header": "Квадратные уравнения",
    "title": "Наименьший корень 4",
    "theme": "Квадратные уравнения",
    "text": "<p>Найдите наименьший корень уравнения:<p>$$x^2 - {= {var1-10}*7}x + {= {var1-10}*10} = 0$$",
    "answer": "{var1-10}",
    "hint": "<p>Ищем корни через теорему Виета.</p>$$x^2 - {= {var1-10}*7}x + {= {var1-10}*10} = 0$$<p>Сумма корней: ${= {var1-10}*7}$, произведение: ${= {var1-10}*10}$</p><p>Корни: ${var1-10}$ и ${= {var1-10}*5}$</p><p>Наименьший корень: ${var1-10}$</p>",
    "randomfrom": [2, 3, 4]
  },

  

    
   {
    "id": "system009",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Симметричная система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + y = {= {var1-10}*2} \\\\ x - y = 2 \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}*2)+2)/2",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 2x = {= {var1-10}*2 + 2}</p><p>x = {= ({var1-10}*2 + 2)/2} = {= {var1-10} + 1}</p><p>Ответ: x = {= {var1-10} + 1}</p>",
    "randomfrom": [3, 4, 5, 6, 7]
  },
  {
    "id": "system010",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Противоположные коэффициенты",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + 3y = {= {var1-10}*5} \\\\ 2x - 3y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "(({var1-10}*5)-{var1-10})/6",
    "hint": "<p><strong>Метод сложения</strong></p><p>Вычитаем уравнения: 6y = {= {var1-10}*5 - {var1-10}} = {= {var1-10}*4}</p><p>y = {= {var1-10}*4/6} = {= {var1-10}*2/3}</p><p>Ответ: y = {= {var1-10}*2/3}</p>",
    "randomfrom": [3, 6, 9, 12]
  },
{
    "id": "system011",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Удвоенная сумма",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}+2} \\\\ 2x + y = {= {var1-10}*2+1} \\end{cases}$$ Найдите x",
    "answer": "{var1-10}",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое уравнение на 2: 2x + 4y = {= ({var1-10}+2)*2}</p><p>Вычитаем второе: 3y = {= ({var1-10}+2)*2 - ({var1-10}*2+1)} = 3</p><p>y = 1</p><p>Из первого уравнения: x = {= {var1-10}+2} - 2 = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [2, 5, 8, 11]
},

  {
    "id": "system012",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Зеркальные коэффициенты",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 3x + 2y = {= {var1-10}*4} \\\\ 2x + 3y = {= {var1-10}*5} \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}*4)*3-({var1-10}*5)*2)/5",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое на 3, второе на 2:</p><p>9x + 6y = {= {var1-10}*12}</p><p>4x + 6y = {= {var1-10}*10}</p><p>Вычитаем: 5x = {= {var1-10}*2}</p><p>x = {= {var1-10}*2/5}</p><p>Ответ: x = {= {var1-10}*2/5}</p>",
    "randomfrom": [5, 10, 15, 20]
  },
  {
    "id": "system013",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Обратные отношения",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 4x - y = {= {var1-10}*3} \\\\ x + y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "({var1-10}-(({var1-10}*3)+{var1-10})/5)",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 5x = {= {var1-10}*3 + {var1-10}} = {= {var1-10}*4}</p><p>x = {= {var1-10}*4/5}</p><p>y = {var1-10} - x = {var1-10} - {= {var1-10}*4/5} = {= {var1-10}/5}</p><p>Ответ: y = {= {var1-10}/5}</p>",
    "randomfrom": [5, 10, 15, 20]
  },

  {
    "id": "system015",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Разностная система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x - 3y = {= {var1-10}} \\\\ 2x + 3y = {= {var1-10}*4} \\end{cases}$$ Найдите x",
    "answer": "({var1-10}+({var1-10}*4))/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 3x = {= {var1-10} + {var1-10}*4} = {= {var1-10}*5}</p><p>x = {= {var1-10}*5/3}</p><p>Ответ: x = {= {var1-10}*5/3}</p>",
    "randomfrom": [3, 6, 9, 12]
  },
  {
  "id": "system016",
  "type": "mathwithrandomnumber",
  "header": "Системы уравнений",
  "title": "Сбалансированная система",
  "theme": "Системы уравнений",
  "text": "Решите систему уравнений: $$\\begin{cases} 5x + 2y = {= {var1-10}*7} \\\\ 3x - 2y = {var1-10} \\end{cases}$$ Найдите y",
  "answer": "{var1-10}",
  "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 8x = {= {var1-10}*7 + {var1-10}} = {= {var1-10}*8}</p><p>x = {var1-10}</p><p>Из первого уравнения: 2y = {= {var1-10}*7} - 5x = {= {var1-10}*7} - {= {var1-10}*5} = {= {var1-10}*2}</p><p>y = {var1-10}</p><p>Ответ: y = {var1-10}</p>",
  "randomfrom": [2, 3, 4, 5]
},
  {
    "id": "system017",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Кратные коэффициенты",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 4y = {= {var1-10}*5} \\\\ 2x - 4y = {= {var1-10}*2} \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}*5)+({var1-10}*2))/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 3x = {= {var1-10}*5 + {var1-10}*2} = {= {var1-10}*7}</p><p>x = {= {var1-10}*7/3}</p><p>Ответ: x = {= {var1-10}*7/3}</p>",
    "randomfrom": [3, 6, 9, 12]
  },
  {
    "id": "system018",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Взаимно простые коэффициенты",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 3x + 5y = {= {var1-10}*8} \\\\ 2x - 5y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "(({var1-10}*8)*2-({var1-10})*3)/25",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое на 2, второе на 3:</p><p>6x + 10y = {= {var1-10}*16}</p><p>6x - 15y = {= {var1-10}*3}</p><p>Вычитаем: 25y = {= {var1-10}*16 - {var1-10}*3} = {= {var1-10}*13}</p><p>y = {= {var1-10}*13/25}</p><p>Ответ: y = {= {var1-10}*13/25}</p>",
    "randomfrom": [5, 10, 15, 20]
  },
  {
  "id": "system019",
  "type": "mathwithrandomnumber",
  "header": "Системы уравнений",
  "title": "Симметричные правые части",
  "theme": "Системы уравнений",
  "text": "Решите систему уравнений: $$\\begin{cases} 2x + 3y = {= {var1-10}+10} \\\\ 3x + 2y = {= {var1-10}+10} \\end{cases}$$ Найдите x",
  "answer": "({var1-10}+10)/5",
  "hint": "<p><strong>Сложение уравнений</strong></p><p>Складываем уравнения: (2x+3y) + (3x+2y) = {= ({var1-10}+10)*2}</p><p>5x + 5y = {= ({var1-10}+10)*2}</p><p>x + y = {= ({var1-10}+10)*2/5}</p><p>Вычитаем уравнения: (2x+3y) - (3x+2y) = 0</p><p>-x + y = 0 ⇒ y = x</p><p>Подставляем y = x в x + y = {= ({var1-10}+10)*2/5}:</p><p>2x = {= ({var1-10}+10)*2/5}</p><p>x = {= ({var1-10}+10)/5}</p><p>Ответ: x = {= ({var1-10}+10)/5}</p>",
  "randomfrom": [5, 10, 15, 20]
},

  {
    "id": "system021",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Комбинированная система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}*3} \\\\ 3x - y = {= {var1-10}*4} \\end{cases}$$ Найдите x",
    "answer": "({var1-10}*11)/7",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем второе уравнение на 2: 6x - 2y = {= {var1-10}*8}</p><p>Складываем с первым: 7x = {= {var1-10}*3 + {var1-10}*8} = {= {var1-10}*11}</p><p>x = {= {var1-10}*11/7}</p><p>Ответ: x = {= {var1-10}*11/7}</p>",
    "randomfrom": [7, 14, 21, 28]
  },
  {
    "id": "system022",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Простая замена",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + y = {= {var1-10}+6} \\\\ x - y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "(6-{var1-10})/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 3x = {= {var1-10}+6 + {var1-10}} = {= {var1-10}*2+6}</p><p>x = {= ({var1-10}*2+6)/3}</p><p>Из второго уравнения: y = x - {var1-10} = {= ({var1-10}*2+6)/3} - {var1-10} = {= (6 - {var1-10})/3}</p><p>Ответ: y = {= (6 - {var1-10})/3}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "system023",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Умноженная система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 3x + 4y = {= {var1-10}*7} \\\\ 2x + 3y = {= {var1-10}*5} \\end{cases}$$ Найдите x",
    "answer": "{var1-10}",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое на 3, второе на 4:</p><p>9x + 12y = {= {var1-10}*21}</p><p>8x + 12y = {= {var1-10}*20}</p><p>Вычитаем: x = {= {var1-10}*21 - {var1-10}*20} = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "system024",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Разностные коэффициенты",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 5x - 2y = {= {var1-10}*3} \\\\ 3x + 2y = {= {var1-10}*7} \\end{cases}$$ Найдите y",
    "answer": "({var1-10}*26)/16",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое на 3, второе на 5:</p><p>15x - 6y = {= {var1-10}*9}</p><p>15x + 10y = {= {var1-10}*35}</p><p>Вычитаем: 16y = {= {var1-10}*35 - {var1-10}*9} = {= {var1-10}*26}</p><p>y = {= {var1-10}*26/16} = {= {var1-10}*13/8}</p><p>Ответ: y = {= {var1-10}*13/8}</p>",
    "randomfrom": [4, 8, 12, 16]
  },
  {
    "id": "system025",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Симметричное решение",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 3y = {= {var1-10}*4} \\\\ 3x + y = {= {var1-10}*4} \\end{cases}$$ Найдите x",
    "answer": "{var1-10}",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 4x + 4y = {= {var1-10}*8}</p><p>x + y = {= {var1-10}*2}</p><p>Вычитаем из первого уравнения второе: (x+3y) - (3x+y) = 0</p><p>-2x + 2y = 0 ⇒ x = y</p><p>Подставляем в x + y = {= {var1-10}*2}: 2x = {= {var1-10}*2}</p><p>x = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "system026",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Краевая система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + 5y = {= {var1-10}*7} \\\\ x - 5y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "{var1-10}/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 3x = {= {var1-10}*7 + {var1-10}} = {= {var1-10}*8}</p><p>x = {= {var1-10}*8/3}</p><p>Из второго уравнения: 5y = x - {var1-10} = {= {var1-10}*8/3} - {var1-10} = {= {var1-10}*5/3}</p><p>y = {= {var1-10}/3}</p><p>Ответ: y = {= {var1-10}/3}</p>",
    "randomfrom": [3, 6, 9, 12]
  },
  {
    "id": "system027",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Простая симметрия",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 4x + y = {= {var1-10}*5} \\\\ 2x - y = {var1-10} \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}*5)+{var1-10})/6",
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 6x = {= {var1-10}*5 + {var1-10}} = {= {var1-10}*6}</p><p>x = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "system028",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Обратная симметрия",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}+7} \\\\ 2x + y = {= {var1-10}*2+1} \\end{cases}$$ Найдите y",
    "answer": "({var1-10}+13)/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое на 2: 2x + 4y = {= ({var1-10}+7)*2}</p><p>Вычитаем второе: 3y = {= ({var1-10}+7)*2 - ({var1-10}*2+1)} = {= {var1-10}+13}</p><p>y = {= ({var1-10}+13)/3}</p><p>Ответ: y = {= ({var1-10}+13)/3}</p>",
    "randomfrom": [2, 5, 8, 11]
  },

  {
    "id": "derivative001",
    "type": "multiplechoices",
    "header": "Производная и касательная",
    "title": "Определение производной в точке 1",
    "theme": "Производная",
    "functionGraph": "true",
    "text": "Чему равен тангенс угла наклона касательной к графику функции y = x² в точке x = 0?",
    "functionType": "derivative_parabola_vertex",
    "func": (x) => x * x,
    "pointX": 0,
    "choices": [
      "Больше нуля",
      "Меньше нуля", 
      "Равен нулю",
      "Не определена",
      "Бесконечность"
    ],
    "answers": ["Равен нулю"],
    "hint": "В вершине параболы y = x² касательная горизонтальна. Производная y' = 2x, при x=0: y'(0) = 0."
  },

{
    "id": "functiongraph00101",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение производной функции по графику 1",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Чему равна производная функции?",
    "functionType": "linear",
    "func": (x) => 2 * x + 1,
    "choices": [
      "2",
      "0",
      "1",
      "-1",
      "-2"
    ],
    "answers": ["2"],
    "hint": "Линейная функция имеет вид y = kx + b и представляет собой прямую линию на графике."
  },

  {
    "id": "functiongraph00101",
    "type": "multiplechoices",
    "header": "Анализ графиков функций",
    "title": "Определение производной функции по графику 2",
    "theme": "Числа",
    "functionGraph": "true",
    "text": "Чему равна вторая производная функции?",
    "functionType": "linear",
    "func": (x) => 2 * x + 1,
    "choices": [
      "2",
      "0",
      "1",
      "-1",
      "-2"
    ],
    "answers": ["0"],
    "hint": "Линейная функция имеет вид y = kx + b и представляет собой прямую линию на графике."
  },

  
]

window.quizesSets = quizesSets;
