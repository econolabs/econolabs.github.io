
//ЭП
//1.
// 
//14. Вероятность


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
// 16. Математическое ожидание случайной величиниы



let quizesSets = 
[

  // Первообразная и интеграл
{
    "id": "integral001random1",
    "type": "mathwithrandomnumber",
    "header": "Математический анализ",
    "title": "13. Первообразная и интеграл",
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
    "title": "13. Первообразная и интеграл",
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
    "title": "13. Первообразная и интеграл",
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
    "title": "13. Первообразная и интеграл",
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
    "id": "integral_trig_006",
    "type": "multiplechoices",
    "header": "Интегрирование: Тригонометрия",
    "title": "13. Первообразная и интеграл",
    "theme": "Интегралы",

    "text": "Чему равен неопределённый интеграл $\\int \\cos(x) \\, dx$?",
    "choices": [
      "$\\sin(x) + C$",
      "$-\\sin(x) + C$",
      "$\\cos(x) + C$",
      "$-\\cos(x) + C$",
      "$\\tan(x) + C$"
    ],
    "answers": ["$\\sin(x) + C$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интегралы тригонометрических функций</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Основные формулы:</strong>
      $$\\int \\cos(x) \\, dx = \\sin(x) + C$$
      $$\\int \\sin(x) \\, dx = -\\cos(x) + C$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>🎭 Образная ассоциация</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Интеграл — это "обратное" действие к производной.</p>
        <p class="card-text">Если производная синуса — косинус, то интеграл косинуса — синус!</p>
        <div class="alert alert-success">
          $$\uD83D\uDC0B \\cos(x) \\xrightarrow{\\text{интеграл}} \uD83D\uDC0B \\sin(x) + C$$
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Таблица интегралов</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$\\int f(x) \\, dx$</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-success"><td>$\\int \\cos(x) \\, dx$</td><td>$\\sin(x) + C$</td></tr>
              <tr><td>$\\int \\sin(x) \\, dx$</td><td>$-\\cos(x) + C$</td></tr>
              <tr><td>$\\int \\sec^2(x) \\, dx$</td><td>$\\tan(x) + C$</td></tr>
              <tr><td>$\\int \\csc^2(x) \\, dx$</td><td>$-\\cot(x) + C$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\sin(x) + C$
    </div>
  </div>
</div>`
  },

  {
    "id": "integral_1_over_x_007",
    "type": "multiplechoices",
    "header": "Интегрирование: Обратная пропорциональность",
    "title": "13. Первообразная и интеграл",
    "theme": "Интегралы",

    "text": "Чему равен неопределённый интеграл $\\int \\frac{1}{x} \\, dx$ (при $x > 0$)?",
    "choices": [
      "$\\ln|x| + C$",
      "$\\frac{1}{x^2} + C$",
      "$\\ln(x) + C$",
      "$e^x + C$",
      "$\\frac{x^2}{2} + C$"
    ],
    "answers": ["$\\ln|x| + C$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интеграл от 1/x — особый случай!</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Важная формула:</strong>
      $$\\int \\frac{1}{x} \\, dx = \\ln|x| + C, \\quad x \\neq 0$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Почему это особый случай?</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Если бы мы применили формулу $\\int x^n dx = \\frac{x^{n+1}}{n+1}$ при $n = -1$:</p>
        <p class="card-text">$$\\int x^{-1} dx = \\frac{x^{0}}{0} = \\frac{1}{0} \\text{ — не определено!}$$</p>
        <p class="card-text">Поэтому нужна отдельная формула с логарифмом.</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Проверка дифференцированием</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Проверим, что производная логарифма даёт $1/x$:</p>
        <p class="card-text">$$\\frac{d}{dx} \\ln|x| = \\frac{1}{x}$$</p>
        <p class="card-text">Значит, интеграл верный!</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Важные интегралы</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$\\int f(x) \\, dx$</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-warning"><td>$\\int \\frac{1}{x} \\, dx$</td><td>$\\ln|x| + C$</td></tr>
              <tr><td>$\\int e^x \\, dx$</td><td>$e^x + C$</td></tr>
              <tr><td>$\\int \\frac{1}{x \\ln(a)} \\, dx$</td><td>$\\log_a|x| + C$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\ln|x| + C$
    </div>
  </div>
</div>`
  },

  {
    "id": "integral_definite_008",
    "type": "multiplechoices",
    "header": "Интегрирование: Определённый интеграл",
    "title": "13. Первообразная и интеграл",
    "theme": "Интегралы",

    "text": "Чему равен определённый интеграл $\\int_0^1 x^2 \\, dx$?",
    "choices": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{4}$",
      "$0$"
    ],
    "answers": ["$\\frac{1}{3}$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Определённый интеграл и площадь</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула Ньютона-Лейбница:</strong>
      $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$
      где $F(x)$ — первообразная $f(x)$.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Находим первообразную</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Для $f(x) = x^2$:</p>
        <p class="card-text">$$F(x) = \\frac{x^3}{3}$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Применяем формулу Ньютона-Лейбница</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int_0^1 x^2 \\, dx = F(1) - F(0) = \\frac{1^3}{3} - \\frac{0^3}{3}$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Вычисляем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int_0^1 x^2 \\, dx = \\frac{1}{3} - 0 = \\frac{1}{3}$$</p>
        <div class="alert alert-info mt-2">
          📐 <strong>Геометрический смысл:</strong> Площадь под параболой $y = x^2$ на отрезке $[0, 1]$ равна $\\frac{1}{3}$.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\frac{1}{3}$
    </div>
  </div>
</div>`
  },

  {
    "id": "integral_exp_009",
    "type": "multiplechoices",
    "header": "Интегрирование: Экспонента",
    "title": "13. Первообразная и интеграл",
    "theme": "Интегралы",

    "text": "Чему равен неопределённый интеграл $\\int e^x \\, dx$?",
    "choices": [
      "$e^x + C$",
      "$\\frac{e^{x+1}}{x+1} + C$",
      "$\\ln|e^x| + C$",
      "$x e^{x-1} + C$",
      "$e^{x^2} + C$"
    ],
    "answers": ["$e^x + C$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интеграл от экспоненты</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула:</strong>
      $$\\int e^x \\, dx = e^x + C$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>✨ Уникальное свойство</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Экспонента — единственная функция, которая</p>
        <ul>
          <li><strong>Не меняется при дифференцировании:</strong> $(e^x)' = e^x$</li>
          <li><strong>Не меняется при интегрировании:</strong> $\\int e^x dx = e^x + C$</li>
        </ul>
        <div class="alert alert-success">
          🚀 Чайка-экспонента остаётся самой собой!
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Таблица интегралов экспоненты</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$\\int f(x) \\, dx$</th><th>Результат</th></tr>
            </thead>
            <tbody>
              <tr class="table-success"><td>$\\int e^x \\, dx$</td><td>$e^x + C$</td></tr>
              <tr><td>$\\int e^{kx} \\, dx$</td><td>$\\frac{1}{k} e^{kx} + C$</td></tr>
              <tr><td>$\\int a^x \\, dx$</td><td>$\\frac{a^x}{\\ln(a)} + C$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $e^x + C$
    </div>
  </div>
</div>`
  },


  {
    "id": "integral_sum_010",
    "type": "multiplechoices",
    "header": "Интегрирование: Линейность",
    "title": "13. Первообразная и интеграл",
    "theme": "Интегралы",

    "text": "Чему равен интеграл $\\int (x^2 + \\sin(x)) \\, dx$?",
    "choices": [
      "$\\frac{x^3}{3} - \\cos(x) + C$",
      "$\\frac{x^3}{3} + \\cos(x) + C$",
      "$2x + \\cos(x) + C$",
      "$\\frac{x^3}{3} - \\sin(x) + C$",
      "$x^2 - \\cos(x) + C$"
    ],
    "answers": ["$\\frac{x^3}{3} - \\cos(x) + C$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интеграл суммы</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Правило линейности:</strong>
      $$\\int (f(x) + g(x)) \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Разбиваем на интегралы</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int (x^2 + \\sin(x)) \\, dx = \\int x^2 \\, dx + \\int \\sin(x) \\, dx$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим каждый интеграл</h5>
      </div>
      <div class="card-body">
        <ul>
          <li>$$\\int x^2 \\, dx = \\frac{x^3}{3} + C_1$$</li>
          <li>$$\\int \\sin(x) \\, dx = -\\cos(x) + C_2$$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Складываем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int (x^2 + \\sin(x)) \\, dx = \\frac{x^3}{3} - \\cos(x) + C$$</p>
        <p class="card-text">(где $C = C_1 + C_2$)</p>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\frac{x^3}{3} - \\cos(x) + C$
    </div>
  </div>
</div>`
  },



  // Вероятность



  {
    "id": "statistics_mean_mixed001",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
    "header": "Статистика",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
    "header": "Статистика",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
    "header": "Тест",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "altpath": "currentDay",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Коэффициента корреляции", "Ковариации по генеральной совокупности", "Ковариации по выборке", "Коэффициента детерминации"],
    "answers": ["Ковариации по генеральной совокупности"],
    "hint": `<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\text{Cov}(X,Y) = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма произведений отклонений</strong>, в знаменателе — <strong>n</strong>. Это <strong>ковариация по генеральной совокупности</strong> (COVARIANCE.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Ковариация по генеральной совокупности</div></div></div>`
  },

  {
    "id": "statistics543",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "14.  Вероятность",
    "altpath": "currentDay",
    "theme": "14.  Вероятность",
    "text": "$$\\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}$$\n\nДанная формула используется для расчёта (при чётном количестве наблюдений):",
    "choices": ["Среднего арифметического", "Моды", "Медианы", "Квартиля"],
    "answers": ["Медианы"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$Me = \\frac{x_{n/2} + x_{n/2+1}}{2}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Формула берёт <strong>два центральных элемента</strong> упорядоченного ряда и делит их сумму на 2. Это <strong>медиана</strong> для чётного количества наблюдений.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Медиана</div></div></div>"
  },

  {
    "id": "statistics544",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "14.  Вероятность",
    "altpath": "currentDay",
    "theme": "14.  Вероятность",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Стандартного отклонения", "Дисперсии по выборке", "Дисперсии по генеральной совокупности", "Среднего абсолютного отклонения"],
    "answers": ["Дисперсии по генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма квадратов отклонений</strong> от среднего, в знаменателе — <strong>n</strong> (деление на количество наблюдений). Это <strong>дисперсия по генеральной совокупности</strong> (VAR.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Дисперсия по генеральной совокупности</div></div></div>"
  },


  {
    "id": "statistics545",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "altpath": "currentDay",
    "text": "$$\\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Дисперсии", "Стандартного отклонения по генеральной совокупности", "Среднего абсолютного отклонения", "Размаха вариации"],
    "answers": ["Стандартного отклонения по генеральной совокупности"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>Это <strong>квадратный корень из дисперсии</strong>. Результат выражается в тех же единицах, что и исходные данные. Это <strong>стандартное отклонение по генеральной совокупности</strong> (STDEV.P).</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Стандартное отклонение по генеральной совокупности</div></div></div>"
  },

  {
    "id": "statistics542",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "altpath": "currentDay",
    "text": "$$\\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Медианы", "Среднего арифметического", "Дисперсии", "Стандартного отклонения"],
    "answers": ["Среднего арифметического"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма всех значений</strong>, в знаменателе — <strong>количество значений</strong>. Это формула <strong>среднего арифметического</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее арифметическое</div></div></div>"
  },

  {
    "id": "stats-absfreq-001",
    "type": "multiplechoices",
    "header": "Статистика. Абсолютная частота",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равна абсолютная частота числа 5?",
    "choices": [
      "3",
      "4",
      "5",
      "6",
      "10"
    ],
    "answers": ["5"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Абсолютная частота</h5>
        <p><strong>Абсолютная частота</strong> — это количество раз, которое данное значение встречается в ряду данных.</p>
        <p class="mt-2">Обозначается обычно как <strong>n</strong> или <strong>f</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5</p>
          <p>Подсчитаем, сколько раз встречается число <strong>5</strong>:</p>
          <ul>
            <li>1-е число: <strong>5</strong> ✓ (1)</li>
            <li>2-е число: 7</li>
            <li>3-е число: <strong>5</strong> ✓ (2)</li>
            <li>4-е число: 3</li>
            <li>5-е число: <strong>5</strong> ✓ (3)</li>
            <li>6-е число: 8</li>
            <li>7-е число: 7</li>
            <li>8-е число: <strong>5</strong> ✓ (4)</li>
            <li>9-е число: 2</li>
            <li>10-е число: <strong>5</strong> ✓ (5)</li>
          </ul>
          <p class="mt-2"><strong>Ответ: 5</strong> (число 5 встречается 5 раз)</p>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 3 — это сколько раз встречается, например, число 7 (но не 5).<br>
        • 4 — близкий, но неверный результат.<br>
        • 6 — слишком много.<br>
        • 10 — это общее количество чисел в ряду (объём выборки).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong> Абсолютная частота = <strong>сколько раз</strong> встретилось значение.<br>
        Обозначение: <strong>nᵢ</strong> (частота i-го значения).
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 Важно отличать:</strong>
        </div>
        <div class="card-body">
          <p>• <strong>Абсолютная частота</strong> — количество повторений (целое число).</p>
          <p>• <strong>Относительная частота</strong> — абсолютная частота, делённая на объём выборки (доля или процент).</p>
          <p class="mb-0">В данном примере относительная частота числа 5 равна $5/10 = 0.5$ (50%).</p>
        </div>
      </div>
    </div>`
},

{
    "id": "stats-relfreq-002",
    "type": "multiplechoices",
    "header": "Статистика. Относительная частота",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равна относительная частота числа 5 (в долях единицы)?",
    "choices": [
      "0,5",
      "0,4",
      "0,6",
      "0,5",
      "0,7",
      "2"
    ],
    "answers": ["0,5"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Относительная частота</h5>
        <p><strong>Относительная частота</strong> — это отношение абсолютной частоты значения к общему объёму выборки.</p>
        <p class="text-center mt-2">$$\\text{Относительная частота} = \\frac{\\text{Абсолютная частота}}{\\text{Объём выборки}}$$</p>
        <p>Выражается в долях единицы (от 0 до 1) или в процентах.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5</p>
          <ul>
            <li><strong>Объём выборки</strong> (общее количество чисел) = <strong>10</strong></li>
            <li><strong>Абсолютная частота</strong> числа 5 = <strong>5</strong> (нашли в прошлом тесте)</li>
            <li><strong>Относительная частота</strong> = $\\frac{5}{10} = 0,5$</li>
          </ul>
          <p class="mt-2 text-success"><strong>Ответ: 0,5</strong> (или 50%, если в процентах)</p>
        </div>
      </div>
      
      <div class="alert alert-warning mb-2">
        <strong>⚠️ Внимание:</strong> В вопросе указано <strong>«в долях единицы»</strong>, поэтому ответ 0,5, а не 50% или 1/2.
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 0,4 — слишком мало (соответствует абсолютной частоте 4).<br>
        • 0,6 — слишком много (соответствует абсолютной частоте 6).<br>
        • 0,7 — соответствует абсолютной частоте 7 (но в выборке всего 5 пятёрок).<br>
        • 2 — это вообще не доля единицы (больше 1).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        • Абсолютная частота: $n = 5$ — <strong>сколько раз</strong>.<br>
        • Относительная частота: $w = 5/10 = 0,5$ — <strong>какая доля</strong>.<br>
        • Сумма всех относительных частот всегда равна <strong>1</strong>.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 Для справки</strong>
        </div>
        <div class="card-body">
          <p>Относительная частота для каждого значения в этом ряду:</p>
          <ul class="mb-0">
            <li>Число 2: $1/10 = 0,1$</li>
            <li>Число 3: $1/10 = 0,1$</li>
            <li>Число 5: $5/10 = 0,5$</li>
            <li>Число 7: $2/10 = 0,2$</li>
            <li>Число 8: $1/10 = 0,1$</li>
            <li><strong>Сумма: $0,1 + 0,1 + 0,5 + 0,2 + 0,1 = 1,0$ ✓</strong></li>
          </ul>
        </div>
      </div>
    </div>`
},

{
    "id": "stats-sample-003",
    "type": "multiplechoices",
    "header": "Статистика. Объём выборки",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равен объём выборки?",
    "choices": [
      "5",
      "10",
      "52",
      "5,2",
      "0,5"
    ],
    "answers": ["10"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Объём выборки</h5>
        <p><strong>Объём выборки</strong> (обозначается <strong>n</strong> или <strong>N</strong>) — это общее количество элементов в ряду данных.</p>
        <p class="text-center mt-2">$$n = \\text{сколько всего чисел (измерений, наблюдений)}$$</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5</p>
          <p>Просто <strong>посчитаем</strong> количество чисел:</p>
          <ul>
            <li>1-е число: 5</li>
            <li>2-е число: 7</li>
            <li>3-е число: 5</li>
            <li>4-е число: 3</li>
            <li>5-е число: 5</li>
            <li>6-е число: 8</li>
            <li>7-е число: 7</li>
            <li>8-е число: 5</li>
            <li>9-е число: 2</li>
            <li>10-е число: 5</li>
          </ul>
          <p class="mt-2">Всего чисел: <strong>10</strong></p>
          <p class="text-success"><strong>Ответ: 10</strong></p>
        </div>
      </div>
      
      <div class="alert alert-warning mb-2">
        <strong>⚠️ Частые ошибки:</strong>
        <ul class="mb-0 mt-1">
          <li>Не путайте объём выборки с <strong>абсолютной частотой</strong> (сколько раз встретилось конкретное число).</li>
          <li>Не путайте с <strong>суммой значений</strong> (здесь сумма = 5+7+5+3+5+8+7+5+2+5 = 52).</li>
          <li>Не путайте со <strong>средним арифметическим</strong> (52/10 = 5,2).</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 5 — это абсолютная частота числа 5 (а не объём выборки).<br>
        • 52 — это <strong>сумма всех чисел</strong> в ряду.<br>
        • 5,2 — это <strong>среднее арифметическое</strong> (52/10).<br>
        • 0,5 — это относительная частота числа 5 (5/10).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        • Объём выборки = <strong>сколько всего</strong>.<br>
        • Абсолютная частота = <strong>сколько раз встретилось конкретное значение</strong>.<br>
        • Относительная частота = абсолютная частота / объём выборки.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 Сводка для этого ряда чисел</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <strong>Понятие</strong>
            </div>
            <div class="col-6">
              <strong>Значение</strong>
            </div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-6">Объём выборки (N)</div>
            <div class="col-6"><strong>10</strong></div>
          </div>
          <div class="row">
            <div class="col-6">Абсолютная частота числа 5</div>
            <div class="col-6">5</div>
          </div>
          <div class="row">
            <div class="col-6">Относительная частота числа 5</div>
            <div class="col-6">0,5 (50%)</div>
          </div>
          <div class="row">
            <div class="col-6">Сумма всех значений</div>
            <div class="col-6">52</div>
          </div>
          <div class="row">
            <div class="col-6">Среднее арифметическое</div>
            <div class="col-6">5,2</div>
          </div>
        </div>
      </div>
    </div>`
},

{
    "id": "stats-range-004",
    "type": "multiplechoices",
    "header": "Статистика. Размах",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равен размах этого ряда?",
    "choices": [
      "2",
      "8",
      "5",
      "6",
      "10"
    ],
    "answers": ["6"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Размах ряда</h5>
        <p><strong>Размах</strong> — это разность между наибольшим и наименьшим значениями в ряду данных.</p>
        <p class="text-center mt-2">$$R = x_{\\text{max}} - x_{\\text{min}}$$</p>
        <p>Показывает, насколько сильно разбросаны данные.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Ряд чисел: <strong>5, 7, 5, 3, 5, 8, 7, 5, 2, 5</strong></p>
          
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="alert alert-success text-center">
                <strong>Наибольшее значение</strong><br>
                $$x_{\\text{max}} = 8$$
              </div>
            </div>
            <div class="col-md-6">
              <div class="alert alert-danger text-center">
                <strong>Наименьшее значение</strong><br>
                $$x_{\\text{min}} = 2$$
              </div>
            </div>
          </div>
          
          <p class="text-center mt-3">
            $$R = x_{\\text{max}} - x_{\\text{min}} = 8 - 2 = 6$$
          </p>
          
          <p class="text-success"><strong>Ответ: 6</strong></p>
        </div>
      </div>
      
      <div class="alert alert-warning mb-2">
        <strong>⚠️ Частые ошибки:</strong>
        <ul class="mb-0 mt-1">
          <li>Называют размахом <strong>само наибольшее значение</strong> (8).</li>
          <li>Называют размахом <strong>само наименьшее значение</strong> (2).</li>
          <li>Путают с <strong>абсолютной частотой</strong> моды (5).</li>
          <li>Путают с <strong>объёмом выборки</strong> (10).</li>
          <li>Вычитают не из максимума минимум, а наоборот (получают отрицательное число, но размах всегда положительный).</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 2 — это <strong>минимальное значение</strong> в ряду (а не размах).<br>
        • 8 — это <strong>максимальное значение</strong> в ряду (а не размах).<br>
        • 5 — это <strong>абсолютная частота</strong> числа 5 (мода), а не размах.<br>
        • 10 — это <strong>объём выборки</strong> (количество чисел), а не размах.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Размах = <strong>максимум − минимум</strong><br>
        Характеризует <strong>ширину</strong> разброса данных.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 Сводка для этого ряда чисел</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">Наибольшее значение (max)</div>
            <div class="col-6"><strong>8</strong></div>
          </div>
          <div class="row">
            <div class="col-6">Наименьшее значение (min)</div>
            <div class="col-6"><strong>2</strong></div>
          </div>
          <div class="row">
            <div class="col-6">Объём выборки (n)</div>
            <div class="col-6">10</div>
          </div>
          <div class="row">
            <div class="col-6">Сумма значений</div>
            <div class="col-6">52</div>
          </div>
          <div class="row">
            <div class="col-6">Среднее арифметическое</div>
            <div class="col-6">5,2</div>
          </div>
          <div class="row">
            <div class="col-6">Мода (наиболее частое значение)</div>
            <div class="col-6">5</div>
          </div>
          <div class="row">
            <div class="col-6">Абсолютная частота моды</div>
            <div class="col-6">5</div>
          </div>
          <div class="row">
            <div class="col-6">Относительная частота моды</div>
            <div class="col-6">0,5</div>
          </div>
          <div class="row bg-light">
            <div class="col-6"><strong>Размах</strong></div>
            <div class="col-6"><strong>8 - 2 = 6</strong></div>
          </div>
        </div>
      </div>
      
      <div class="card border-success mt-2">
        <div class="card-header bg-success text-white">
          <strong>📌 Наглядный пример</strong>
        </div>
        <div class="card-body">
          <p>Представьте ряд точек на числовой прямой:</p>
          <div style="font-family: monospace; text-align: center; font-size: 14px;">
            <div>——•——•——•——•——•——•——•——•——•——•——→</div>
            <div>0   1   2   3   4   5   6   7   8   9   10</div>
            <div>    ↑                               ↑</div>
            <div>   min                            max</div>
            <div>   (2)                             (8)</div>
          </div>
          <p class="mt-2 text-center">Расстояние между крайними точками = <strong>6</strong> — это и есть размах.</p>
        </div>
      </div>
    </div>`
},

{
    "id": "stats-mode-005",
    "type": "multiplechoices",
    "header": "Статистика. Мода",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равна мода этого ряда?",
    "choices": [
      "2",
      "3",
      "5",
      "7",
      "8"
    ],
    "answers": ["5"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Мода ряда</h5>
        <p><strong>Мода</strong> — это значение, которое <strong>чаще всего встречается</strong> в ряду данных.</p>
        <p class="text-center mt-2">$$\\text{Мода} = \\text{значение с наибольшей абсолютной частотой}$$</p>
        <p>Обозначается обычно как <strong>Mo</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение</strong>
        </div>
        <div class="card-body">
          <p>Ряд чисел: <strong>5, 7, 5, 3, 5, 8, 7, 5, 2, 5</strong></p>
          
          <p>Подсчитаем абсолютную частоту каждого значения:</p>
          
          <table class="table table-bordered mt-3">
            <thead class="thead-light">
              <tr><th>Значение</th><th>Сколько раз встречается</th><th>Абсолютная частота</th></tr>
            </thead>
            <tbody>
              <tr><td>2</td><td>один раз</td><td>1</td></tr>
              <tr><td>3</td><td>один раз</td><td>1</td></tr>
              <tr class="table-success"><td><strong>5</strong></td><td><strong>пять раз</strong></td><td><strong>5</strong></td></tr>
              <tr><td>7</td><td>два раза</td><td>2</td></tr>
              <tr><td>8</td><td>один раз</td><td>1</td></tr>
            </tbody>
          </table>
          
          <p>Чаще всего (5 раз) встречается число <strong>5</strong>.</p>
          <p class="text-success"><strong>Ответ: мода = 5</strong></p>
        </div>
      </div>
      
      <div class="alert alert-warning mb-2">
        <strong>⚠️ Важные нюансы про моду:</strong>
        <ul class="mb-0 mt-1">
          <li><strong>Унимодальный ряд</strong> — одна мода (как в нашем примере).</li>
          <li><strong>Мультимодальный ряд</strong> — несколько мод (например: 1, 1, 2, 2, 3 → моды 1 и 2).</li>
          <li><strong>Если все значения встречаются одинаково часто</strong> — моды нет (или говорят, что ряд не модальный).</li>
          <li>Моду можно найти <strong>и для нечисловых данных</strong> (например, самый популярный цвет или бренд).</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 2, 3, 7, 8 — эти числа встречаются реже (1 или 2 раза), чем 5 (5 раз).<br>
        • 5 — правильный ответ, так как имеет <strong>наибольшую абсолютную частоту</strong>.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        • Мода = <strong>«толпа»</strong> (самое популярное значение).<br>
        • Не путайте моду с <strong>абсолютной частотой</strong> (5 — это значение, а частота моды = 5).<br>
        • Мода, в отличие от среднего, не чувствительна к выбросам.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 Полная сводка для этого ряда</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6"><strong>Характеристика</strong></div>
            <div class="col-6"><strong>Значение</strong></div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-6">Объём выборки</div>
            <div class="col-6">10</div>
          </div>
          <div class="row">
            <div class="col-6">Сумма значений</div>
            <div class="col-6">52</div>
          </div>
          <div class="row">
            <div class="col-6">Среднее арифметическое</div>
            <div class="col-6">5,2</div>
          </div>
          <div class="row">
            <div class="col-6">Наименьшее значение (min)</div>
            <div class="col-6">2</div>
          </div>
          <div class="row">
            <div class="col-6">Наибольшее значение (max)</div>
            <div class="col-6">8</div>
          </div>
          <div class="row">
            <div class="col-6">Размах</div>
            <div class="col-6">6</div>
          </div>
          <div class="row bg-light">
            <div class="col-6"><strong>Мода</strong></div>
            <div class="col-6"><strong>5</strong></div>
          </div>
          <div class="row">
            <div class="col-6">Абсолютная частота моды</div>
            <div class="col-6">5</div>
          </div>
          <div class="row">
            <div class="col-6">Относительная частота моды</div>
            <div class="col-6">0,5 (50%)</div>
          </div>
        </div>
      </div>
      
      <div class="card border-success mt-2">
        <div class="card-header bg-success text-white">
          <strong>📌 Примеры из жизни</strong>
        </div>
        <div class="card-body">
          <ul class="mb-0">
            <li>В опросе «Какой цвет вам нравится?» мода — самый популярный цвет.</li>
            <li>В магазине мода — самый продаваемый размер обуви.</li>
            <li>В классе мода — наиболее распространённая оценка за контрольную.</li>
          </ul>
        </div>
      </div>
      
      <div class="alert alert-warning mt-2">
        <strong>🔍 Интересный факт:</strong><br>
        Слово «мода» происходит от латинского <em>modus</em> — «мера, правило, способ». В статистику этот термин ввёл пионер британской статистики Карл Пирсон.
      </div>
    </div>`
},

{
    "id": "stats-median-006",
    "type": "multiplechoices",
    "header": "Статистика. Медиана",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
    "text": "Дан следующий ряд чисел: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5. Чему равна медиана этого ряда?",
    "choices": [
      "5",
      "5,2",
      "5,5",
      "5",
      "2"
    ],
    "answers": ["5"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📊 Медиана ряда</h5>
        <p><strong>Медиана</strong> — это число, которое находится <strong>в середине</strong> упорядоченного по возрастанию ряда данных.</p>
        <p class="text-center mt-2">
          Если количество элементов <strong>нечётное</strong>: медиана = средний элемент.<br>
          Если количество элементов <strong>чётное</strong>: медиана = среднее арифметическое двух средних элементов.
        </p>
        <p>Обозначается обычно как <strong>Me</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Решение (пошагово)</strong>
        </div>
        <div class="card-body">
          <p><strong>Шаг 1:</strong> Исходный ряд: 5, 7, 5, 3, 5, 8, 7, 5, 2, 5</p>
          <p><strong>Шаг 2:</strong> Упорядочиваем по возрастанию:</p>
          <div class="alert alert-success text-center">
            <strong>2, 3, 5, 5, 5, 5, 5, 7, 7, 8</strong>
          </div>
          <p><strong>Шаг 3:</strong> Количество элементов = <strong>10</strong> (чётное)</p>
          <p><strong>Шаг 4:</strong> Находим два средних элемента:</p>
          <ul>
            <li>5-й элемент: <strong>5</strong></li>
            <li>6-й элемент: <strong>5</strong></li>
          </ul>
          <p><strong>Шаг 5:</strong> Медиана = среднее арифметическое двух средних:</p>
          <p class="text-center">$$\\frac{5 + 5}{2} = \\frac{10}{2} = 5$$</p>
          <p class="text-success"><strong>Ответ: медиана = 5</strong></p>
        </div>
      </div>
      
      <div class="alert alert-warning mb-2">
        <strong>⚠️ Важные нюансы про медиану:</strong>
        <ul class="mb-0 mt-1">
          <li>Перед поиском медианы ряд <strong>обязательно нужно упорядочить</strong> (по возрастанию или убыванию).</li>
          <li>Медиана устойчива к <strong>выбросам</strong> (в отличие от среднего арифметического).</li>
          <li>Если количество элементов нечётное (например, 9), медиана — это <strong>5-й элемент</strong>.</li>
          <li>Если чётное (10) — два средних элемента: 5-й и 6-й.</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 5,2 — это <strong>среднее арифметическое</strong> (сумма 52 / 10).<br>
        • 5,5 — часто получается, если ошибочно взять два центральных числа 5 и 5 (не влияет), <strong>или</strong> если неправильно упорядочить.<br>
        • 2 — это <strong>минимальное значение</strong> (минимум), а не медиана.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        • Медиана делит упорядоченный ряд <strong>пополам</strong>: 50% элементов ≤ медианы, 50% ≥ медианы.<br>
        • В нашем ряду: 2, 3, (5,5,5,5,5), 7, 7, 8 — все пятёрки по центру.<br>
        • Медиана = 5 означает, что половина чисел ≤ 5, половина ≥ 5.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📈 ПОЛНАЯ СВОДКА для этого ряда</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6"><strong>Характеристика</strong></div>
            <div class="col-6"><strong>Значение</strong></div>
          </div>
          <hr class="my-1">
          <div class="row">
            <div class="col-6">Объём выборки</div>
            <div class="col-6">10</div>
          </div>
          <div class="row">
            <div class="col-6">Сумма значений</div>
            <div class="col-6">52</div>
          </div>
          <div class="row">
            <div class="col-6">Среднее арифметическое</div>
            <div class="col-6">5,2</div>
          </div>
          <div class="row">
            <div class="col-6">Минимум (min)</div>
            <div class="col-6">2</div>
          </div>
          <div class="row">
            <div class="col-6">Максимум (max)</div>
            <div class="col-6">8</div>
          </div>
          <div class="row">
            <div class="col-6">Размах</div>
            <div class="col-6">6</div>
          </div>
          <div class="row">
            <div class="col-6">Мода</div>
            <div class="col-6">5</div>
          </div>
          <div class="row bg-light">
            <div class="col-6"><strong>Медиана</strong></div>
            <div class="col-6"><strong>5</strong></div>
          </div>
        </div>
      </div>
      
      <div class="card border-success mt-2">
        <div class="card-header bg-success text-white">
          <strong>📌 Что важнее: среднее, мода или медиана?</strong>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <strong>Среднее</strong><br>
              Чувствительно к выбросам<br>
              <span class="text-muted">Пример: доход в стране</span>
            </div>
            <div class="col-md-4">
              <strong>Мода</strong><br>
              Для самых частых значений<br>
              <span class="text-muted">Пример: популярный размер обуви</span>
            </div>
            <div class="col-md-4">
              <strong>Медиана</strong><br>
              Устойчива к выбросам<br>
              <span class="text-muted">Пример: цены на жильё</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-info mt-2">
        <strong>🔍 Интересный факт:</strong><br>
        В симметричном распределении <strong>среднее = мода = медиана</strong>. В нашем примере они почти совпали (5,2; 5; 5), что говорит о почти симметричном распределении пятёрок в центре.
      </div>
    </div>`
},

{
    "id": "combin-dice-001",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲 Исходы бросания кубика</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 3 — слишком мало (это, например, количество чётных исходов).<br>
        • 8, 12 — у стандартного кубика нет столько граней.<br>
        • 36 — это количество исходов при <strong>двух</strong> бросаниях кубика (6×6).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При одном бросании кубика — <strong>6 равновозможных исходов</strong>.
      </div>
    </div>`
},

{
    "id": "combin-dice-002",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>📊 Классическое определение вероятности</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/2 — вероятность выпадения <strong>чётного</strong> числа.<br>
        • 1/4 — вероятность выпадения, например, числа больше 4? (2/6=1/3, не 1/4).<br>
        • 1/3 — вероятность выпадения числа больше 4 (5 или 6).<br>
        • 4/6 = 2/3 — слишком большая вероятность.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        У каждого отдельного числа на кубике вероятность выпадения $\\frac{1}{6}$.
      </div>
    </div>`
},

{
    "id": "combin-dice-003",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>📊 Вероятность события</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/6 — вероятность одного конкретного числа.<br>
        • 1/3 — вероятность чисел, кратных 3 (3 и 6).<br>
        • 2/3 — вероятность чисел, нечётных или больших 3.<br>
        • 5/6 — почти всегда, кроме одного исхода.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Чётных чисел на кубике 3 из 6 → вероятность $\\frac{1}{2}$.
      </div>
    </div>`
},

{
    "id": "combin-dice-004",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲 Основное правило комбинаторики</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 12 — это $6+6$ (неправильное сложение, нужно умножение).<br>
        • 18, 21, 42 — не соответствуют $6 \\times 6 = 36$.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При бросании двух кубиков — <strong>36 равновозможных исходов</strong>.
      </div>
      
      <div class="card border-info mt-2">
        <div class="card-header bg-info text-white">
          <strong>📌 Таблица исходов</strong>
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
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲 Сумма на двух кубиках</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/6 — это правильный ответ, но его нужно записать как 6/36.<br>
        • 1/9 ≈ 4/36 — соответствует сумме, например, 5 или 9?<br>
        • 5/36 — соответствует сумме 6 или 8.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Сумма 7 — самая вероятная при бросании двух кубиков. Её вероятность $\\frac{6}{36} = \\frac{1}{6}$.
      </div>
      
      <div class="card border-warning mt-2">
        <div class="card-header bg-warning text-dark">
          <strong>📊 Для справки: вероятности сумм</strong>
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
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲 Произведение на двух кубиках</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/9 — это правильный ответ (4/36 = 1/9).<br>
        • 1/12 — соответствует 3/36 (например, произведение 18?).<br>
        • 1/18 — соответствует 2/36 (например, произведение 6?).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При поиске произведения важно не забывать про обратные пары: (2,6) и (6,2) — разные исходы.
      </div>
    </div>`
},

{
    "id": "combin-dice-007",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲 Событие «хотя бы один»</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/6 = 6/36 — вероятность того, что на <strong>конкретном</strong> кубике выпала 6.<br>
        • 1/3 = 12/36 — близко, но неверно (ошибка: сложили 6+6, забыли вычесть повторяющийся (6,6)).<br>
        • 2/6 ≈ 12/36 — та же ошибка.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        $P(\\text{хотя бы один}) = 1 - P(\\text{ни одного})$ — это часто проще, чем прямой подсчёт.
      </div>
    </div>`
},

{
    "id": "combin-dice-008",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲 Сумма больше 9</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 5/36 — это сумма = 8 или сумма = 6.<br>
        • 10/36 — это сумма ≥ 9? (9 даёт 4/36, всего 4+3+2+1=10/36, но 9 не входит).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Суммы 10, 11, 12 вместе дают 6 исходов (3+2+1) из 36 → 1/6.
      </div>
    </div>`
},

{
    "id": "combin-dice-009",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲🎲 Основное правило комбинаторики</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 18 — это $6 \\times 3$ или $6 + 6 + 6$ (неверно).<br>
        • 36 — это для двух кубиков.<br>
        • 72 — $6 \\times 12$ или $216/3$ (неверно).<br>
        • 1296 — это $6^4$ (для четырёх кубиков).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Для $n$ кубиков: общее число исходов = $6^n$.
      </div>
    </div>`
},

{
    "id": "combin-dice-010",
    "type": "multiplechoices",
    "header": "Комбинаторика. Игральный кубик",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>🎲🎲🎲 Три одинаковых числа</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/216 — это вероятность конкретной тройки, например (1,1,1).<br>
        • 1/36 — это правильный ответ (6/216 = 1/36).<br>
        • 1/6 — слишком большая вероятность.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Вероятность выпадения трёх одинаковых чисел = $\\frac{6}{216} = \\frac{1}{36}$.
      </div>
    </div>`
},

{
    "id": "combin-coin-001",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1 — слишком мало (это если бы монета упала только одной стороной).<br>
        • 3, 4, 6 — у монеты нет столько сторон (если только это не монета из фэнтези!).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При одном подбрасывании монеты — <strong>2 равновозможных исхода</strong>.
      </div>
    </div>`
},

{
    "id": "combin-coin-002",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <h5>📊 Вероятность выпадения орла</h5>
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 0 — вероятность невозможного события.<br>
        • 1/4 — слишком мало (1/4 = 0,25).<br>
        • 1/3 — ≈ 0,333, неверно.<br>
        • 1 — вероятность достоверного события (орёл выпадает всегда, но это не так).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        У монеты 2 стороны, поэтому вероятность орла = $\\frac{1}{2}$.
      </div>
    </div>`
},

{
    "id": "combin-coin-003",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 2 — это количество исходов при одном подбрасывании.<br>
        • 3 — неверно (некоторые забывают про исход (Р,О)).<br>
        • 6, 8 — слишком много.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При двух подбрасываниях монеты — $2^2 = 4$ исхода.
      </div>
    </div>`
},

{
    "id": "combin-coin-004",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/2 — вероятность одного орла.<br>
        • 1/3 — неверно.<br>
        • 1/6 — вероятность чего-то с кубиком.<br>
        • 1/8 — вероятность трёх орлов подряд.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Вероятность двух орлов подряд = $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.
      </div>
    </div>`
},

{
    "id": "combin-coin-005",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух решек (противоположное событие).<br>
        • 1/2 — вероятность орла в конкретном броске (или ровно одного орла).<br>
        • 1/3, 2/3 — не соответствуют.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        $P(\\text{хотя бы один орёл}) = 1 - P(\\text{все решки}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.
      </div>
    </div>`
},

{
    "id": "combin-coin-006",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух орлов <strong>или</strong> двух решек.<br>
        • 3/4 — вероятность хотя бы одного орла.<br>
        • 1/3, 2/3 — не соответствуют.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При двух подбрасываниях: ровно один орёл выпадает в 2 случаях из 4 → $\\frac{1}{2}$.
      </div>
    </div>`
},

{
    "id": "combin-coin-007",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 4 — для двух подбрасываний.<br>
        • 6 — не степень двойки.<br>
        • 9, 12 — неверные результаты.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При трёх подбрасываниях монеты — $2^3 = 8$ исходов.
      </div>
    </div>`
},

{
    "id": "combin-coin-008",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/4 — вероятность двух орлов подряд.<br>
        • 1/6 — вероятность чего-то с кубиком.<br>
        • 3/8 — вероятность ровно двух орлов.<br>
        • 1/2 — вероятность орла в одном броске.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        Вероятность $n$ орлов подряд = $\\left(\\frac{1}{2}\\right)^n$.
      </div>
    </div>`
},

{
    "id": "combin-coin-009",
    "type": "multiplechoices",
    "header": "Комбинаторика. Монета",
    "title": "14.  Вероятность",
    "theme": "14.  Вероятность",
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
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • 1/8 — вероятность трёх решек (противоположное событие).<br>
        • 3/8 — вероятность ровно одного орла?<br>
        • 1/2 — слишком мало для трёх бросков.<br>
        • 5/8 — неверно.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong><br>
        При трёх бросках: $P(\\text{хотя бы один орёл}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.
      </div>
    </div>`
},


]






window.quizesSets = quizesSets;