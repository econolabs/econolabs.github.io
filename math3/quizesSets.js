let quizesSets = [

  {
    "id": "algebra-fsu-001",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Квадрат суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно выражение $(a+b)^2$?",
    "choices": [
      "$a^2 - 2ab + b^2$",
      "$a^2 + 2ab + b^2$",
      "$a^2 - b^2$",
      "$a^3 + 3a^2b + 3ab^2 + b^3$",
      "$a^3 + b^3$"
    ],
    "answers": ["$a^2 + 2ab + b^2$"],
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
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • $a^2 - 2ab + b^2$ — это <strong>квадрат разности</strong> $(a-b)^2$.<br>
        • $a^2 - b^2$ — это <strong>разность квадратов</strong> $(a-b)(a+b)$.<br>
        • $a^3 + 3a^2b + 3ab^2 + b^3$ — это <strong>куб суммы</strong> $(a+b)^3$.<br>
        • $a^3 + b^3$ — это <strong>сумма кубов</strong> $(a+b)(a^2-ab+b^2)$.
      </div>

      <div class="alert alert-light border mt-2">
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
    "text": "Чему равно выражение $(a-b)^2$?",
    "choices": [
      "$a^2 - 2ab + b^2$",
      "$a^2 + 2ab + b^2$",
      "$a^2 - b^2$",
      "$a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 - b^3$"
    ],
    "answers": ["$a^2 - 2ab + b^2$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Квадрат разности</h5>
        <p>Формула квадрата разности двух выражений:</p>
        <p class="text-center">$$(a-b)^2 = a^2 - 2ab + b^2$$</p>
        <p class="mt-2">При возведении разности в квадрат <strong>удвоенное произведение</strong> берётся со знаком <strong>«минус»</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Раскроем скобки, рассматривая разность как сумму с отрицательным вторым слагаемым:</p>
          <p>$$(a-b)^2 = (a + (-b))^2 = a^2 + 2 \\cdot a \\cdot (-b) + (-b)^2$$</p>
          <p>$$= a^2 - 2ab + b^2$$</p>
          <p>Или через умножение многочленов:</p>
          <p>$$(a-b)(a-b) = a \\cdot a + a \\cdot (-b) + (-b) \\cdot a + (-b) \\cdot (-b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрическая интерпретация</strong>
            </div>
            <div class="card-body">
              <p>Квадрат со стороной $a$ «вырезает» квадрат со стороной $b$ из угла:</p>
              <div style="font-family: monospace; background: #f8f9fa; padding: 10px;">
                <div>┌─────────────────┬─────┐</div>
                <div>│                 │     │</div>
                <div>│      a²         │     │</div>
                <div>│                 │     │</div>
                <div>│         ┌───────┼─────┤</div>
                <div>│         │       │     │</div>
                <div>│         │  b²   │     │</div>
                <div>├─────────┴───────┤     │</div>
                <div>│                 │     │</div>
                <div>└─────────────────┴─────┘</div>
              </div>
              <p class="mt-2">Площадь оставшейся фигуры: $a^2 - 2ab + b^2$</p>
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
              <p>3. $(5 - m)^2 = 25 - 10m + m^2$ (перестановка слагаемых не меняет знак удвоенного произведения!)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • $a^2 + 2ab + b^2$ — это <strong>квадрат суммы</strong> $(a+b)^2$ (знак «плюс» перед $2ab$).<br>
        • $a^2 - b^2$ — это <strong>разность квадратов</strong> $(a-b)(a+b)$ (нет среднего члена).<br>
        • $a^3 - 3a^2b + 3ab^2 - b^3$ — это <strong>куб разности</strong> $(a-b)^3$ (третья степень).<br>
        • $a^3 - b^3$ — это <strong>разность кубов</strong> $(a-b)(a^2+ab+b^2)$.
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong> Квадрат разности = квадрат первого <strong>минус</strong> удвоенное произведение + квадрат второго.<br>
        Частая ошибка: забыть минус или написать $a^2 - b^2$.
      </div>
    </div>`
  },

  {
    "id": "algebra-fsu-003",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Разность квадратов",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно выражение $a^2 - b^2$?",
    "choices": [
      "$(a-b)(a+b)$",
      "$(a-b)^2$",
      "$(a+b)^2$",
      "$(a-b)(a^2+ab+b^2)$",
      "$(a+b)(a^2-ab+b^2)$"
    ],
    "answers": ["$(a-b)(a+b)$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Разность квадратов</h5>
        <p>Формула разности квадратов двух выражений:</p>
        <p class="text-center">$$a^2 - b^2 = (a-b)(a+b)$$</p>
        <p class="mt-2">Это единственная формула ФСУ, где <strong>нет удвоенного произведения</strong> и <strong>нет квадратов в правой части</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Раскроем скобки в произведении разности и суммы:</p>
          <p>$$(a-b)(a+b) = a \\cdot a + a \\cdot b - b \\cdot a - b \\cdot b$$</p>
          <p>$$= a^2 + ab - ab - b^2 = a^2 - b^2$$</p>
          <p class="mt-2"><strong>Важно:</strong> средние члены $ab$ и $-ab$ взаимно уничтожаются.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Геометрическая интерпретация</strong>
            </div>
            <div class="card-body">
              <p>Из квадрата $a^2$ вырезаем квадрат $b^2$:</p>
              <div style="font-family: monospace; background: #f8f9fa; padding: 10px;">
                <div>┌─────────────┬─────┐</div>
                <div>│             │     │</div>
                <div>│             │     │</div>
                <div>│     a²      │  b  │</div>
                <div>│             │     │</div>
                <div>│         ┌───┴─────┤</div>
                <div>│         │         │</div>
                <div>└─────────┴─────────┘</div>
                <div>    a        a-b</div>
              </div>
              <p>Оставшуюся фигуру можно разрезать и сложить в прямоугольник $(a-b) \\times (a+b)$.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $x^2 - 16 = (x-4)(x+4)$</p>
              <p>2. $49 - y^2 = (7-y)(7+y)$ (порядок множителей не важен)</p>
              <p>3. $(2x)^2 - 9 = (2x-3)(2x+3) = 4x^2 - 9$</p>
              <p>4. $x^4 - 1 = (x^2-1)(x^2+1) = (x-1)(x+1)(x^2+1)$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-danger mb-2">
        <strong>⚠️ Частые ошибки:</strong>
        <ul class="mb-0 mt-1">
          <li><strong>$a^2 + b^2$</strong> — не раскладывается на действительные множители!</li>
          <li>$a^2 - b^2 \\neq (a-b)^2$ (во втором случае есть $-2ab$)</li>
          <li>Не путайте с <strong>разностью кубов</strong> $a^3-b^3 = (a-b)(a^2+ab+b^2)$</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • $(a-b)^2$ — это <strong>квадрат разности</strong> $a^2 - 2ab + b^2$ (лишний член $-2ab$).<br>
        • $(a+b)^2$ — это <strong>квадрат суммы</strong> $a^2 + 2ab + b^2$ (не тот знак и лишний член).<br>
        • $(a-b)(a^2+ab+b^2)$ — это <strong>разность кубов</strong> $a^3 - b^3$ (третья степень).<br>
        • $(a+b)(a^2-ab+b^2)$ — это <strong>сумма кубов</strong> $a^3 + b^3$ (третья степень, плюс).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong> Разность квадратов = произведение разности на сумму.<br>
        Формула-«убийца» среднего члена: $ab - ab = 0$.
      </div>
    </div>`
  },

  {
    "id": "algebra-fsu-004",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Куб суммы",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно выражение $(a+b)^3$?",
    "choices": [
      "$a^3 + 3a^2b + 3ab^2 + b^3$",
      "$a^3 + 2a^2b + 2ab^2 + b^3$",
      "$a^3 + b^3$",
      "$a^3 + 3a^2b + 3ab^2 + b^3$",
      "$a^3 + 3a^2b - 3ab^2 + b^3$"
    ],
    "answers": ["$a^3 + 3a^2b + 3ab^2 + b^3$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Куб суммы</h5>
        <p>Формула куба суммы двух выражений:</p>
        <p class="text-center">$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$</p>
        <p class="mt-2">Коэффициенты <strong>1, 3, 3, 1</strong> — это третья строка <strong>треугольника Паскаля</strong>.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Куб суммы — это квадрат суммы, умноженный на сумму:</p>
          <p>$$(a+b)^3 = (a+b)^2 \\cdot (a+b) = (a^2 + 2ab + b^2)(a+b)$$</p>
          <p>Раскроем скобки:</p>
          <p>$$= a^2\\cdot a + a^2\\cdot b + 2ab\\cdot a + 2ab\\cdot b + b^2\\cdot a + b^2\\cdot b$$</p>
          <p>$$= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$$</p>
          <p>$$= a^3 + 3a^2b + 3ab^2 + b^3$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Треугольник Паскаля</strong>
            </div>
            <div class="card-body">
              <div style="font-family: monospace; text-align: center;">
                <div>n=0:       1</div>
                <div>n=1:      1   1</div>
                <div>n=2:     1   2   1</div>
                <div>n=3:    1   3   3   1</div>
                <div>n=4:   1   4   6   4   1</div>
              </div>
              <p class="mt-2">Каждое число — сумма двух чисел над ним.</p>
              <p>Строка для $n=3$ даёт коэффициенты куба суммы: $1, 3, 3, 1$.</p>
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
              <p>$$= x^3 + 6x^2 + 12x + 8$$</p>
              <p>2. $(2y+1)^3 = 8y^3 + 3 \\cdot 4y^2 \\cdot 1 + 3 \\cdot 2y \\cdot 1 + 1$</p>
              <p>$$= 8y^3 + 12y^2 + 6y + 1$$</p>
              <p>3. $(a+3)^3 = a^3 + 9a^2 + 27a + 27$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-danger mb-2">
        <strong>⚠️ Частые ошибки:</strong>
        <ul class="mb-0 mt-1">
          <li>Забывают коэффициент 3: пишут $a^3 + a^2b + ab^2 + b^3$</li>
          <li>Путают с квадратом суммы: $(a+b)^2 = a^2 + 2ab + b^2$</li>
          <li>Ошибаются в степенях: $3ab^2$, а не $3a^2b^2$</li>
          <li>Путают с суммой кубов: $a^3+b^3 = (a+b)(a^2-ab+b^2)$</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • $a^3 + 2a^2b + 2ab^2 + b^3$ — неправильные коэффициенты (должны быть 3, а не 2).<br>
        • $a^3 + 3a^2b + 3ab^2 + b^3$ — правильный ответ.<br>
        • $a^3 + b^3$ — это <strong>сумма кубов</strong> (нет средних членов).<br>
        • $a^3 + 3a^2b + 3ab^2 + b^3$ — правильный ответ (дублирование для проверки внимательности).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong> Куб суммы = куб первого + утроенный квадрат первого на второе + утроенное первое на квадрат второго + куб второго.<br>
        Коэффициенты: <strong>1 3 3 1</strong> — как у треугольника Паскаля!
      </div>
    </div>`
  },

  {
    "id": "algebra-fsu-005",
    "type": "multiplechoices",
    "header": "Алгебра. Формулы сокращенного умножения",
    "title": "Куб разности",
    "theme": "Формулы сокращенного умножения",
    "text": "Чему равно выражение $(a-b)^3$?",
    "choices": [
      "$a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 - 2a^2b + 2ab^2 - b^3$",
      "$a^3 - 3a^2b + 3ab^2 - b^3$",
      "$a^3 - b^3$",
      "$a^3 + 3a^2b + 3ab^2 + b^3$"
    ],
    "answers": ["$a^3 - 3a^2b + 3ab^2 - b^3$"],
    "hint": `<div class="container-fluid p-0">
      <div class="alert alert-info mb-3">
        <h5>📝 Куб разности</h5>
        <p>Формула куба разности двух выражений:</p>
        <p class="text-center">$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$</p>
        <p class="mt-2">Знаки чередуются: <strong>плюс, минус, плюс, минус</strong>.<br>
        Коэффициенты <strong>1, 3, 3, 1</strong> — как у куба суммы.</p>
      </div>
      
      <div class="card border-primary mb-3">
        <div class="card-header bg-primary text-white">
          <strong>Вывод формулы</strong>
        </div>
        <div class="card-body">
          <p>Куб разности — это куб суммы с отрицательным вторым слагаемым:</p>
          <p>$$(a-b)^3 = (a + (-b))^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3$$</p>
          <p>$$= a^3 - 3a^2b + 3ab^2 - b^3$$</p>
          <p>Или через умножение: $(a-b)^3 = (a-b)^2 \\cdot (a-b) = (a^2 - 2ab + b^2)(a-b)$</p>
          <p>$$= a^3 - a^2b - 2a^2b + 2ab^2 + ab^2 - b^3 = a^3 - 3a^2b + 3ab^2 - b^3$$</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">
              <strong>Треугольник Паскаля со знаками</strong>
            </div>
            <div class="card-body">
              <div style="font-family: monospace; text-align: center;">
                <div>$(a-b)^0:$       1</div>
                <div>$(a-b)^1:$      1    -1</div>
                <div>$(a-b)^2:$     1    -2     1</div>
                <div>$(a-b)^3:$    1    -3     3    -1</div>
                <div>$(a-b)^4:$   1    -4     6    -4     1</div>
              </div>
              <p class="mt-2">Знак $(-1)^k$ для $k$-го слагаемого.</p>
              <p><strong>Запомните:</strong> на нечётных степенях $b$ — минус.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-warning mb-3">
            <div class="card-header bg-warning text-dark">
              <strong>Примеры применения</strong>
            </div>
            <div class="card-body">
              <p>1. $(x-2)^3 = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3$</p>
              <p>$$= x^3 - 6x^2 + 12x - 8$$</p>
              <p>2. $(3y-1)^3 = 27y^3 - 3 \\cdot 9y^2 \\cdot 1 + 3 \\cdot 3y \\cdot 1 - 1$</p>
              <p>$$= 27y^3 - 27y^2 + 9y - 1$$</p>
              <p>3. $(5 - m)^3 = 125 - 75m + 15m^2 - m^3$</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-danger mb-2">
        <strong>⚠️ Частые ошибки:</strong>
        <ul class="mb-0 mt-1">
          <li>Забывают знак минус перед $b^3$</li>
          <li>Пишут $a^3 - 3a^2b - 3ab^2 - b^3$ (неправильные знаки)</li>
          <li>Путают с кубом суммы: $(a-b)^3 \\neq a^3 + 3a^2b + 3ab^2 + b^3$</li>
          <li>Путают с разностью кубов: $a^3-b^3 = (a-b)(a^2+ab+b^2)$</li>
        </ul>
      </div>
      
      <div class="alert alert-secondary mt-2">
        <strong>❌ Почему другие варианты не подходят?</strong><br>
        • $a^3 - 2a^2b + 2ab^2 - b^3$ — неправильные коэффициенты (должны быть 3, а не 2).<br>
        • $a^3 - 3a^2b + 3ab^2 - b^3$ — правильный ответ.<br>
        • $a^3 - b^3$ — это <strong>разность кубов</strong> (нет средних членов).<br>
        • $a^3 + 3a^2b + 3ab^2 + b^3$ — это <strong>куб суммы</strong> (все знаки плюс).
      </div>

      <div class="alert alert-light border mt-2">
        <strong>💡 Запомните:</strong> Куб разности = куб первого <strong>минус</strong> утроенный квадрат первого на второе <strong>плюс</strong> утроенное первое на квадрат второго <strong>минус</strong> куб второго.<br>
        Знаки чередуются: <strong>+ - + -</strong>
      </div>
    </div>`
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
    "id": "line_equation_system001-1",
    "type": "mathwithrandomnumber",
    "header": "Линейная функция",
    "title": "Уравнение прямой по двум точкам 1",
    "theme": "Системы уравнений",
    "text": "Прямая проходит через точки A(1, {= 2*{var1-10} + 3}) и B(3, {= 4*{var1-10} + 3}). Найдите угловой коэффициент k.",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Нахождение k через систему уравнений</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Составляем систему
      </div>
      <div class="card-body">
        <p>Уравнение прямой: $$ y = kx + b $$</p>
        <p>Подставляем координаты точек:</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k \\cdot 1 + b \\\\ {= 4*{var1-10} + 3} = k \\cdot 3 + b \\end{cases} $$</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k + b \\\\ {= 4*{var1-10} + 3} = 3k + b \\end{cases} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вычитаем уравнения
      </div>
      <div class="card-body">
        <p>Вычитаем первое уравнение из второго:</p>
        <p class="text-center">$$ ({= 4*{var1-10} + 3}) - ({= 2*{var1-10} + 3}) = (3k + b) - (k + b) $$</p>
        <p class="text-center">$$ {= (4*{var1-10} + 3) - (2*{var1-10} + 3)} = 2k $$</p>
        <p class="text-center">$$ {= 2*{var1-10}} = 2k $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Находим k
      </div>
      <div class="card-body">
        <p class="text-center">$$ k = \\frac{{= 2*{var1-10}}}{2} = {var1-10} $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> k = {var1-10}
    </div>
  </div>
</div>`,
    "randomfrom": [2, 3, 4, 5, 6]
  },

  {
    "id": "line_equation_system001-2",
    "type": "mathwithrandomnumber",
    "header": "Линейная функция",
    "title": "Уравнение прямой по двум точкам 2",
    "theme": "Системы уравнений",
    "text": "Прямая проходит через точки A(1, {= 2*{var1-10} + 3}) и B(3, {= 4*{var1-10} + 3}). Найдите угловой коэффициент k.",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Нахождение k через систему уравнений</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Составляем систему
      </div>
      <div class="card-body">
        <p>Уравнение прямой: $$ y = kx + b $$</p>
        <p>Подставляем координаты точек:</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k \\cdot 1 + b \\\\ {= 4*{var1-10} + 3} = k \\cdot 3 + b \\end{cases} $$</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k + b \\\\ {= 4*{var1-10} + 3} = 3k + b \\end{cases} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вычитаем уравнения
      </div>
      <div class="card-body">
        <p>Вычитаем первое уравнение из второго:</p>
        <p class="text-center">$$ ({= 4*{var1-10} + 3}) - ({= 2*{var1-10} + 3}) = (3k + b) - (k + b) $$</p>
        <p class="text-center">$$ {= (4*{var1-10} + 3) - (2*{var1-10} + 3)} = 2k $$</p>
        <p class="text-center">$$ {= 2*{var1-10}} = 2k $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Находим k
      </div>
      <div class="card-body">
        <p class="text-center">$$ k = \\frac{{= 2*{var1-10}}}{2} = {var1-10} $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> k = {var1-10}
    </div>
  </div>
</div>`,
    "randomfrom": [2, 4, 8, 10]
  },

  {
    "id": "line_equation_system001-3",
    "type": "mathwithrandomnumber",
    "header": "Линейная функция",
    "title": "Уравнение прямой по двум точкам 3",
    "theme": "Системы уравнений",
    "text": "Прямая проходит через точки A(1, {= 2*{var1-10} + 3}) и B(3, {= 4*{var1-10} + 3}). Найдите угловой коэффициент k.",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Нахождение k через систему уравнений</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Составляем систему
      </div>
      <div class="card-body">
        <p>Уравнение прямой: $$ y = kx + b $$</p>
        <p>Подставляем координаты точек:</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k \\cdot 1 + b \\\\ {= 4*{var1-10} + 3} = k \\cdot 3 + b \\end{cases} $$</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10} + 3} = k + b \\\\ {= 4*{var1-10} + 3} = 3k + b \\end{cases} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вычитаем уравнения
      </div>
      <div class="card-body">
        <p>Вычитаем первое уравнение из второго:</p>
        <p class="text-center">$$ ({= 4*{var1-10} + 3}) - ({= 2*{var1-10} + 3}) = (3k + b) - (k + b) $$</p>
        <p class="text-center">$$ {= (4*{var1-10} + 3) - (2*{var1-10} + 3)} = 2k $$</p>
        <p class="text-center">$$ {= 2*{var1-10}} = 2k $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Находим k
      </div>
      <div class="card-body">
        <p class="text-center">$$ k = \\frac{{= 2*{var1-10}}}{2} = {var1-10} $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> k = {var1-10}
    </div>
  </div>
</div>`,
    "randomfrom": [1, 10, 20]
  },

  {
    "id": "line_equation_system_b001",
    "type": "mathwithrandomnumber",
    "header": "Линейная функция",
    "title": "Уравнение прямой по двум точкам",
    "theme": "Системы уравнений",
    "text": "Прямая проходит через точки A(1, {= 2*{var1-10}}) и B(2, {= 3*{var1-10}}). Найдите коэффициент b в уравнении y = kx + b.",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Нахождение b через систему уравнений</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Составляем систему
      </div>
      <div class="card-body">
        <p>Уравнение прямой: $$ y = kx + b $$</p>
        <p>Подставляем координаты точек A(1, {= 2*{var1-10}}) и B(2, {= 3*{var1-10}}):</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10}} = k \\cdot 1 + b \\\\ {= 3*{var1-10}} = k \\cdot 2 + b \\end{cases} $$</p>
        <p class="text-center">$$ \\begin{cases} {= 2*{var1-10}} = k + b \\\\ {= 3*{var1-10}} = 2k + b \\end{cases} $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вычитаем уравнения
      </div>
      <div class="card-body">
        <p>Вычитаем первое уравнение из второго:</p>
        <p class="text-center">$$ {= 3*{var1-10}} - {= 2*{var1-10}} = (2k + b) - (k + b) $$</p>
        <p class="text-center">$$ {var1-10} = k $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Находим b
      </div>
      <div class="card-body">
        <p>Подставляем k = {var1-10} в первое уравнение:</p>
        <p class="text-center">$$ {= 2*{var1-10}} = {var1-10} + b $$</p>
        <p class="text-center">$$ b = {= 2*{var1-10}} - {var1-10} = {var1-10} $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> b = {var1-10}
    </div>
  </div>
</div>`,
    "randomfrom": [3, 4, 5, 6, 7]
  },




  {
    "id": "regression_slope_mental_002",
    "type": "mathwithrandomnumber",
    "header": "Линейная регрессия (устный счёт)",
    "title": "Найди угловой коэффициент",
    "theme": "Регрессия",
    "text": "Точки: $A({= {var1-10}}, {= {var1-10}*{var1-10}})$ и $B({= {var1-10}*2}, {= {var1-10}*{var1-10}*2})$. Найдите $k$.",
    "answer": "{var1-10}",
    "altpath": "currentDay",
    "randomfrom": [2, 3, 4, 5, 8, 10, 20],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт: находим k</h5></div><div class='card-body'><div class='alert alert-secondary'>$$k = \\frac{{= {var1-10}*{var1-10}*2} - {= {var1-10}*{var1-10}}}{{= {var1-10}*2} - {= {var1-10}}} = \\frac{{= {var1-10}*{var1-10}}}{{= {var1-10}}} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $k = {var1-10}$</div></div></div>"
  },

  {
    "id": "regression_intercept_mental_003",
    "type": "mathwithrandomnumber",
    "header": "Линейная регрессия (устный счёт)",
    "title": "Найди свободный член b",
    "altpath": "currentDay",
    "theme": "Регрессия",
    "text": "Прямая $y = 2x + b$ проходит через точку $({= {var1-10}}, {= {var1-10}*2 + {var1-10}})$. Найдите $b$.",
    "answer": "{var1-10}",
    "randomfrom": [2, 3, 4, 5, 8, 10, 20],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📐 Устный счёт: находим b</h5></div><div class='card-body'><div class='alert alert-secondary'>$$b = y - 2x = ({= {var1-10}*2 + {var1-10}}) - 2 \\cdot ({= {var1-10}}) = {= {var1-10}*2 + {var1-10}} - {= {var1-10}*2} = {var1-10}$$</div><div class='alert alert-success'><strong>✅ Ответ:</strong> $b = {var1-10}$</div></div></div>"
  },


  {
    "id": "regression_slope_001",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Вычисление коэффициента наклона k",
    "theme": "Регрессия",
    "altpath": "currentDay",
    "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Чему равен коэффициент наклона $k$ прямой, проходящей через эти точки?",
    "choices": [
      "$k = 2$",
      "$k = 0.5$",
      "$k = -2$",
      "$k = 1$",
      "$k = 8$"
    ],
    "answers": ["$k = 2$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Коэффициент наклона прямой (k)</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула углового коэффициента:</strong>
      $$k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем координаты точек</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $A(x_1, y_1) = (6, 2)$</p>
        <p class="card-text">Точка $B(x_2, y_2) = (10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим разности координат</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\Delta y = y_2 - y_1 = 10 - 2 = 8$$</p>
        <p class="card-text">$$\\Delta x = x_2 - x_1 = 10 - 6 = 4$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Вычисляем угловой коэффициент</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$k = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{4} = 2$$</p>
        <div class="alert alert-success mt-2">
          📈 <strong>Интерпретация:</strong> При увеличении $x$ на 1 единицу, $y$ увеличивается на 2 единицы.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $k = 2$
    </div>
  </div>
</div>`
  },

  {
    "id": "regression_intercept_002",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Вычисление свободного члена b",
    "theme": "Регрессия",
    "altpath": "currentDay",
    "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Уравнение прямой имеет вид $y = kx + b$. Найдите свободный член $b$.",
    "choices": [
      "$b = -10$",
      "$b = -6$",
      "$b = 0$",
      "$b = 6$",
      "$b = 10$"
    ],
    "answers": ["$b = -10$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Нахождение свободного члена b</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула для нахождения b:</strong>
      $$b = y_1 - k \\cdot x_1$$
      или
      $$b = y_2 - k \\cdot x_2$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Известные данные</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$k = 2$ (из предыдущего расчёта)</p>
        <p class="card-text">Точка $A(6, 2)$ или $B(10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Подставляем в уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Используем точку $A(6, 2)$:</p>
        <p class="card-text">$$y = kx + b \\Rightarrow 2 = 2 \\cdot 6 + b$$</p>
        <p class="card-text">$$2 = 12 + b$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 3: Решаем уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$b = 2 - 12 = -10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 4: Проверка со второй точкой</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $B(10, 10)$:</p>
        <p class="card-text">$$10 = 2 \\cdot 10 + b \\Rightarrow 10 = 20 + b \\Rightarrow b = -10$$ ✓</p>
        <div class="alert alert-info mt-2">
          📈 <strong>Уравнение прямой:</strong> $y = 2x - 10$
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $b = -10$
    </div>
  </div>
</div>`
  },

  {
    "id": "regression_equation_003",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Составление уравнения прямой",
    "theme": "Регрессия",
    "altpath": "currentDay",
    "text": "Даны две точки: $A(6, 2)$ и $B(10, 10)$. Какое уравнение прямой проходит через эти точки?",
    "choices": [
      "$y = 2x - 10$",
      "$y = 2x + 10$",
      "$y = 0.5x - 1$",
      "$y = 0.5x + 1$",
      "$y = 8x - 46$"
    ],
    "answers": ["$y = 2x - 10$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Уравнение прямой по двум точкам</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Общий вид уравнения прямой:</strong>
      $$y = kx + b$$
      где $k$ — угловой коэффициент, $b$ — свободный член.
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Находим угловой коэффициент k</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{10 - 2}{10 - 6} = \\frac{8}{4} = 2$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим свободный член b</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Используем точку $A(6, 2)$:</p>
        <p class="card-text">$$2 = 2 \\cdot 6 + b \\Rightarrow b = 2 - 12 = -10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Записываем уравнение</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2x - 10$$</p>
        <div class="alert alert-info mt-2">
          📊 <strong>Проверка:</strong><br>
          При $x = 6$: $y = 2 \\cdot 6 - 10 = 12 - 10 = 2$ ✓<br>
          При $x = 10$: $y = 2 \\cdot 10 - 10 = 20 - 10 = 10$ ✓
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 2x - 10$
    </div>
  </div>
</div>`
  },

  {
    "id": "regression_predict_004",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Прогнозирование по уравнению регрессии",
    "theme": "Регрессия",
    "altpath": "currentDay",
    "text": "По точкам $A(6, 2)$ и $B(10, 10)$ построено уравнение регрессии. Какое значение $y$ предсказывается для $x = 15$?",
    "choices": [
      "$y = 20$",
      "$y = 25$",
      "$y = 30$",
      "$y = 35$",
      "$y = 40$"
    ],
    "answers": ["$y = 20$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Прогнозирование по линейной регрессии</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Уравнение регрессии:</strong>
      $$y = 2x - 10$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Подставляем значение x = 15</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2 \\cdot 15 - 10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Вычисляем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 30 - 10 = 20$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Интерпретация</h5>
      </div>
      <div class="card-body">
        <div class="alert alert-info">
          📈 <strong>Прогноз:</strong> При $x = 15$ модель предсказывает $y = 20$.<br>
          ⚠️ <strong>Внимание:</strong> Экстраполяция за пределы исходного диапазона $[6, 10]$ может быть неточной!
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 20$
    </div>
  </div>
</div>`
  },

  {
    "id": "regression_interpolate_005",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Интерполяция по уравнению регрессии",
    "altpath": "currentDay",
    "theme": "Регрессия",
    "text": "По точкам $A(6, 2)$ и $B(10, 10)$ построено уравнение регрессии. Какое значение $y$ предсказывается для $x = 8$?",
    "choices": [
      "$y = 2$",
      "$y = 4$",
      "$y = 6$",
      "$y = 8$",
      "$y = 10$"
    ],
    "answers": ["$y = 6$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интерполяция по линейной регрессии</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Уравнение регрессии:</strong>
      $$y = 2x - 10$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Подставляем значение x = 8</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 2 \\cdot 8 - 10$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Вычисляем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$y = 16 - 10 = 6$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Визуализация</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$x$</th><th>$y = 2x - 10$</th><th>Тип</th></tr>
            </thead>
            <tbody>
              <tr><td>6</td><td>2</td><td class="table-info">Исходная точка A</td></tr>
              <tr class="table-success"><td>8</td><td>6</td><td>Интерполяция (внутри диапазона)</td></tr>
              <tr><td>10</td><td>10</td><td class="table-info">Исходная точка B</td></tr>
            </tbody>
          </table>
        </div>
        <div class="alert alert-info mt-2">
          📈 <strong>Интерполяция:</strong> $x = 8$ находится между 6 и 10, поэтому прогноз надёжен.
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $y = 6$
    </div>
  </div>
</div>`
  },

  {
    "id": "regression_formula_006",
    "type": "multiplechoices",
    "header": "Линейная регрессия по двум точкам",
    "title": "Уравнение прямой через две точки (каноническая форма)",
    "theme": "Регрессия",
    "text": "Какое уравнение прямой в канонической форме проходит через точки $A(6, 2)$ и $B(10, 10)$?",
    "choices": [
      "$\\frac{x - 6}{4} = \\frac{y - 2}{8}$",
      "$\\frac{x - 6}{8} = \\frac{y - 2}{4}$",
      "$\\frac{x - 2}{6} = \\frac{y - 6}{10}$",
      "$\\frac{x - 10}{6} = \\frac{y - 10}{2}$",
      "$\\frac{x - 2}{8} = \\frac{y - 6}{4}$"
    ],
    "answers": ["$\\frac{x - 6}{4} = \\frac{y - 2}{8}$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Каноническое уравнение прямой</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Каноническая форма уравнения прямой через две точки:</strong>
      $$\\frac{x - x_1}{x_2 - x_1} = \\frac{y - y_1}{y_2 - y_1}$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем координаты</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Точка $A(x_1, y_1) = (6, 2)$</p>
        <p class="card-text">Точка $B(x_2, y_2) = (10, 10)$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим разности</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$x_2 - x_1 = 10 - 6 = 4$$</p>
        <p class="card-text">$$y_2 - y_1 = 10 - 2 = 8$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Подставляем в формулу</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\frac{x - 6}{4} = \\frac{y - 2}{8}$$</p>
        <div class="alert alert-info mt-2">
          📐 Это уравнение можно упростить до $y = 2x - 10$:<br>
          $$\\frac{x - 6}{4} = \\frac{y - 2}{8} \\Rightarrow 8(x - 6) = 4(y - 2)$$<br>
          $$8x - 48 = 4y - 8 \\Rightarrow 4y = 8x - 40 \\Rightarrow y = 2x - 10$$
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\frac{x - 6}{4} = \\frac{y - 2}{8}$
    </div>
  </div>
</div>`
  },

  {
    "id": "statistics_regression_costs001",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Система линейных уравнений. Постоянные и переменные затраты предприятия",
    "theme": "Корреляционно-регрессионный анализ",
    "altpath": "currentDay",
    "functionGraph": "true",
    "functionType": "costsRevenueGraph",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Постоянные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Предполагая линейную зависимость затрат от выручки, найдите затраты предприятия при нулевой выручке (постоянные затраты).</div>
  </div>
</div>`,
    "answer": "{var1-10}/{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = 12,\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Уравнение линейной зависимости:</div>
    <div class="text-center">
      $$y = a \\cdot x + b$$
    </div>
    <div class="mb-2">где a — переменные затраты на единицу выручки, b — постоянные затраты.</div>
    
    <div class="mt-3 mb-2">3. Составляем систему уравнений:</div>
    <div class="text-center">
      $$
      \\begin{cases}
      6 = a \\cdot 10 + b \\\\
      7 = a \\cdot 12 + b
      \\end{cases}
      $$
    </div>
    
    <div class="mt-3 mb-2">4. Вычитаем первое уравнение из второго:</div>
    <div class="text-center">
      $$(7 - 6) = (12a - 10a) + (b - b)$$
      $$1 = 2a$$
      $$a = 0.5$$
    </div>
    
    <div class="mt-3 mb-2">5. Подставляем a в первое уравнение:</div>
    <div class="text-center">
      $$6 = 0.5 \\times 10 + b$$
      $$6 = 5 + b$$
      $$b = 1$$
    </div>
    
    <div class="mt-3 mb-2">6. Проверка через второе уравнение:</div>
    <div class="text-center">
      $$7 = 0.5 \\times 12 + 1 = 6 + 1 = 7$$ ✓
    </div>
    
    <div class="mt-3 mb-2">7. Затраты при нулевой выручке (x = 0):</div>
    <div class="text-center">
      $$y = a \\cdot 0 + b = b = 1$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: 1 млрд. руб.</div>
  </div>
</div>`,
    "randomfrom": ["12"]
  },

  {
    "id": "statistics_regression_cost002",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Линейная регрессия. Постоянные и переменные затраты предприятия",
    "theme": "Корреляционно-регрессионный анализ",
    "functionGraph": "true",
    "altpath": "currentDay",
    "functionType": "costsRevenueGraph",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Постоянные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Предполагая линейную зависимость затрат от выручки, найдите затраты предприятия при нулевой выручке (постоянные затраты).</div>
  </div>
</div>`,
    "answer": "{var1-10}/{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = 12,\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Угловой коэффициент (наклон):</div>
    <div class="text-center">
      $$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 6}{12 - 10} = \\frac{1}{2} = 0.5$$
    </div>
    
    <div class="mt-3 mb-2">3. Уравнение прямой:</div>
    <div class="text-center">
      $$y = a \\cdot x + b$$
    </div>
    
    <div class="mt-3 mb-2">4. Находим свободный член b (затраты при x = 0):</div>
    <div class="text-center">
      $$b = y_1 - a \\cdot x_1 = 6 - 0.5 \\times 10 = 6 - 5 = 1$$
    </div>
    
    <div class="mt-3 mb-2">5. Проверка через вторую точку:</div>
    <div class="text-center">
      $$b = y_2 - a \\cdot x_2 = 7 - 0.5 \\times 12 = 7 - 6 = 1$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: 1 млрд. руб.</div>
  </div>
</div>`,
    "randomfrom": ["12"]
  },

  {
    "id": "statistics_regression_costs003",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Система линейных уравнений. Постоянные и переменные затраты предприятия 2",
    "theme": "Корреляционно-регрессионный анализ",
    "altpath": "currentDay",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Постоянные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Предполагая линейную зависимость затрат от выручки, найдите затраты предприятия при нулевой выручке (постоянные затраты).</div>
  </div>
</div>`,
    "answer": "6-10/({var1-10}-10)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = {var1-10},\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Уравнение линейной зависимости:</div>
    <div class="text-center">
      $$y = a \\cdot x + b$$
    </div>
    <div class="mb-2">где a — переменные затраты на единицу выручки, b — постоянные затраты.</div>
    
    <div class="mt-3 mb-2">3. Составляем систему уравнений:</div>
    <div class="text-center">
      $$
      \\begin{cases}
      6 = a \\cdot 10 + b \\\\
      7 = a \\cdot {var1-10} + b
      \\end{cases}
      $$
    </div>
    
    <div class="mt-3 mb-2">4. Вычитаем первое уравнение из второго:</div>
    <div class="text-center">
      $$(7 - 6) = ({var1-10} \\cdot a - 10a) + (b - b)$$
      $$1 = ({var1-10} - 10) \\cdot a$$
      $$a = \\frac{1}{{var1-10} - 10} = {= 1 / ({var1-10} - 10)}$$
    </div>
    
    <div class="mt-3 mb-2">5. Подставляем a в первое уравнение:</div>
    <div class="text-center">
      $$6 = 10 \\cdot \\frac{1}{{var1-10} - 10} + b$$
      $$b = 6 - \\frac{10}{{var1-10} - 10} = {= 6 - 10 / ({var1-10} - 10)}$$
    </div>
    
    <div class="mt-3 mb-2">6. Затраты при нулевой выручке (x = 0):</div>
    <div class="text-center">
      $$y = a \\cdot 0 + b = b = {= 6 - 10 / ({var1-10} - 10)}$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: {= 6 - 10 / ({var1-10} - 10)} млрд. руб.</div>
  </div>
</div>`,
    "randomfrom": [12, 15, 20]
  },

  {
    "id": "statistics_regression_cost004",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Линейная регрессия. Постоянные и переменные затраты предприятия 2",
    "theme": "Корреляционно-регрессионный анализ",
    "altpath": "currentDay",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Постоянные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Предполагая линейную зависимость затрат от выручки, найдите затраты предприятия при нулевой выручке (постоянные затраты).</div>
  </div>
</div>`,
    "answer": "6-10/({var1-10}-10)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = 12,\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Угловой коэффициент (наклон):</div>
    <div class="text-center">
      $$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 6}{12 - 10} = \\frac{1}{2} = 0.5$$
    </div>
    
    <div class="mt-3 mb-2">3. Уравнение прямой:</div>
    <div class="text-center">
      $$y = a \\cdot x + b$$
    </div>
    
    <div class="mt-3 mb-2">4. Находим свободный член b (затраты при x = 0):</div>
    <div class="text-center">
      $$b = y_1 - a \\cdot x_1 = 6 - 0.5 \\times 10 = 6 - 5 = 1$$
    </div>
    
    <div class="mt-3 mb-2">5. Проверка через вторую точку:</div>
    <div class="text-center">
      $$b = y_2 - a \\cdot x_2 = 7 - 0.5 \\times 12 = 7 - 6 = 1$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: 1 млрд. руб.</div>
  </div>
</div>`,
    "randomfrom": [12, 15, 20]
  },

  {
    "id": "statistics_regression_varcost_system005",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Система линейных уравнений. Удельные затраты предприятия",
    "theme": "Корреляционно-регрессионный анализ",
    "altpath": "currentDay",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Удельные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Предполагая линейную зависимость затрат от выручки, найдите удельные (переменные) затраты на 1 руб. выручки (угловой коэффициент a).</div>
  </div>
</div>`,
    "answer": "1 / ({var1-10} - 10)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = {var1-10},\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Уравнение линейной зависимости:</div>
    <div class="text-center">
      $$y = a \\cdot x + b$$
    </div>
    <div class="mb-2">где a — удельные (переменные) затраты на единицу выручки, b — постоянные затраты.</div>
    
    <div class="mt-3 mb-2">3. Составляем систему уравнений:</div>
    <div class="text-center">
      $$
      \\begin{cases}
      6 = a \\cdot 10 + b \\\\
      7 = a \\cdot {var1-10} + b
      \\end{cases}
      $$
    </div>
    
    <div class="mt-3 mb-2">4. Вычитаем первое уравнение из второго:</div>
    <div class="text-center">
      $$(7 - 6) = ({var1-10} \\cdot a - 10a) + (b - b)$$
      $$1 = ({var1-10} - 10) \\cdot a$$
      $$a = \\frac{1}{{var1-10} - 10} = {= 1 / ({var1-10} - 10)}$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: {= 1 / ({var1-10} - 10)}</div>
  </div>
</div>`,
    "randomfrom": [12, 15, 20]
  },

  {
    "id": "statistics_regression_varcost_slope006",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
    "title": "Регрессия. Удельные затраты предприятия",
    "theme": "Корреляционно-регрессионный анализ",
    "altpath": "currentDay",
    "text": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Удельные затраты
  </div>
  <div class="card-body">
    <div class="mb-3">Затраты предприятия при выручке 10 млрд. руб. равны 6 млрд. руб., при выручке {var1-10} млрд. руб. равны 7 млрд. руб.</div>
    <div class="mb-3">Используя формулу углового коэффициента регрессии, найдите удельные (переменные) затраты на 1 руб. выручки.</div>
  </div>
</div>`,
    "answer": "1 / ({var1-10} - 10)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    Решение
  </div>
  <div class="card-body">
    <div class="mb-2">1. Исходные данные:</div>
    <div class="text-center">
      $$x_1 = 10,\\ y_1 = 6$$
      $$x_2 = {var1-10},\\ y_2 = 7$$
    </div>
    
    <div class="mt-3 mb-2">2. Формула углового коэффициента регрессии:</div>
    <div class="text-center">
      $$a = \\frac{y_2 - y_1}{x_2 - x_1}$$
    </div>
    
    <div class="mt-3 mb-2">3. Подставляем значения:</div>
    <div class="text-center">
      $$a = \\frac{7 - 6}{{var1-10} - 10} = \\frac{1}{{var1-10} - 10} = {= 1 / ({var1-10} - 10)}$$
    </div>
    
    <div class="alert alert-primary mt-3">Ответ: {= 1 / ({var1-10} - 10) </div>
  </div>
</div>`,
    "randomfrom": [12, 15, 20]
  },


  {
    "id": "finance_simple_interest_calc001",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
    "title": "Простые проценты",
    "theme": "Проценты",
    "text": "Какую сумму нужно положить под 10% годовых (простые проценты), чтобы через 2 года накопить {= {var1-10} * (1 + 2 * 0.1)} руб.?",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт первоначального вклада по простым процентам</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула простых процентов
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$ F = P \\cdot (1 + n \\cdot i) $$</p>
        <ul>
          <li><strong>F</strong> = {= {var1-10} * (1 + 2 * 0.1)} руб.</li>
          <li><strong>n</strong> = 2 года</li>
          <li><strong>i</strong> = 10% = 0.1</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">Из формулы выражаем P:</p>
        <p class="text-center">$$ P = \\frac{F}{1 + n \\cdot i} = \\frac{{= {var1-10} * (1 + 2 * 0.1)}}{1 + 2 \\cdot 0.1} $$</p>
        <p class="text-center">$$ P = \\frac{{= {var1-10} * (1 + 0.2)}}{1.2} = \\frac{{= {var1-10} * 1.2}}{1.2} = {var1-10} $$</p>
      </div>
    </div>
    
    
  </div>
</div>`,
    "randomfrom": [100, 200, 300, 400, 500],
    "altpath": "currentDay"
  },

  {
    "id": "finance_present_value_calc001",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
    "title": "Дисконтирование",
    "theme": "Проценты",
    "text": "Какую сумму нужно вложить сегодня под 10% годовых (сложные проценты), чтобы через 2 года получить {= {var1-10} * POWER(1.1, 2)} руб.?",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт приведённой стоимости</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула дисконтирования
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$PV = \\frac{FV}{(1 + i)^n}$$</p>
        <ul>
          <li><strong>FV</strong> = {= {var1-10} * POWER(1.1, 2)} руб.</li>
          <li><strong>n</strong> = 2 года</li>
          <li><strong>i</strong> = 10% = 0.1</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вывод формулы
      </div>
      <div class="card-body">
        <p class="card-text">Из формулы дисконтирования выражаем текущую стоимость:</p>
        <p class="text-center">$$PV = \\frac{FV}{(1 + i)^n} = \\frac{{= {var1-10} * POWER(1.1, 2)}}{(1 + 0.1)^2}$$</p>
        <p class="text-center">$$PV = \\frac{{= {var1-10} * POWER(1.1, 2)}}{1.21} = {var1-10}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Проверка
      </div>
      <div class="card-body">
        <p class="card-text">Если вложить {var1-10} руб. под 10% на 2 года:</p>
        <p class="text-center">$$ {var1-10} \\times (1.1)^2 = {var1-10} \\times 1.21 = {= {var1-10} * 1.21}$$ руб.</p>
      </div>
    </div>   
   
  </div>
</div>`,
    "randomfrom": [100, 200, 300, 400],
    "altpath": "currentDay"
  },

  {
    "id": "finance_compound_yield_calc001",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
    "title": "Сложная доходность",
    "theme": "Доходность",
    "text": "Инвестор купил актив за 100 руб. и продал его через 2 года за {= 100 * POWER(1 + {var1-10}/100, 2)} руб. Рассчитайте сложную годовую доходность (в процентах).",
    "answer": "{var1-10}",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт сложной годовой доходности</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула сложных процентов
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$ F = P \\cdot (1 + i)^n $$</p>
        <ul>
          <li><strong>P</strong> = 100 руб. (цена покупки)</li>
          <li><strong>F</strong> = {= 100 * POWER(1 + {var1-10}/100, 2)} руб. (цена продажи)</li>
          <li><strong>n</strong> = 2 года</li>
          <li><strong>i</strong> — искомая годовая доходность (в долях)</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вывод формулы доходности
      </div>
      <div class="card-body">
        <p>Из формулы сложных процентов выражаем доходность <strong>i</strong>:</p>
        <p class="text-center">$$ F = P \\cdot (1 + i)^n $$</p>
        <p class="text-center">$$ (1 + i)^n = \\frac{F}{P} $$</p>
        <p class="text-center">$$ 1 + i = \\sqrt[n]{\\frac{F}{P}} $$</p>
        <p class="text-center">$$ i = \\sqrt[n]{\\frac{F}{P}} - 1 $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Подстановка чисел
      </div>
      <div class="card-body">
        <p class="text-center">$$ i = \\sqrt[2]{\\frac{{= 100 * POWER(1 + {var1-10}/100, 2)}}{100}} - 1 $$</p>
        <p class="text-center">$$ i = \\sqrt[2]{POWER(1 + {var1-10}/100, 2)} - 1 $$</p>
        <p class="text-center">$$ i = (1 + {var1-10}/100) - 1 = \\frac{{var1-10}}{100} = {var1-10}\\% $$</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> {var1-10} процентов
    </div>
  </div>
</div>`,
    "randomfrom": [10, 20, 30, 40, 50],
    "altpath": "currentDay"
  },

  {
    "id": "finance_simple_interest001",
    "type": "multiplechoices",
    "header": "Финансовая математика",
    "title": "Простые проценты",
    "theme": "Проценты",
    "text": "$$F = P \\cdot (1 + n \\cdot i)$$\n\nДанная формула определяет:",
    "choices": [
      "Наращенную сумму по простым процентам",
      "Наращенную сумму по сложным процентам",
      "Дисконтированную стоимость",
      "Текущую стоимость аннуитета",
      "Формулу Гордона"
    ],
    "answers": ["Наращенную сумму по простым процентам"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Формула простых процентов</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Обозначения</div>
      <div class="card-body">
        <ul>
          <li><strong>F</strong> — наращенная сумма (будущая стоимость)</li>
          <li><strong>P</strong> — первоначальная сумма</li>
          <li><strong>n</strong> — количество периодов</li>
          <li><strong>i</strong> — процентная ставка</li>
        </ul>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Особенность</div>
      <div class="card-body">
        <p class="card-text">Проценты начисляются только на первоначальную сумму P.</p>
      </div>
    </div>
    <div class="alert alert-primary mt-3">Ответ: Наращенную сумму по простым процентам</div>
  </div>
</div>`,
    "altpath": "currentDay"
  },



  {
    "id": "finance_compound_interest001",
    "type": "multiplechoices",
    "header": "Финансовая математика",
    "title": "Сложные проценты",
    "theme": "Проценты",
    "text": "$$F = P \\cdot (1 + i)^n$$\n\nДанная формула определяет:",
    "choices": [
      "Наращенную сумму по простым процентам",
      "Наращенную сумму по сложным процентам",
      "Текущую стоимость аннуитета",
      "Формулу Гордона",
      "Будущую стоимость аннуитета"
    ],
    "answers": ["Наращенную сумму по сложным процентам"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Формула сложных процентов</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Обозначения</div>
      <div class="card-body">
        <ul>
          <li><strong>F</strong> — наращенная сумма (будущая стоимость)</li>
          <li><strong>P</strong> — первоначальная сумма</li>
          <li><strong>n</strong> — количество периодов</li>
          <li><strong>i</strong> — процентная ставка</li>
        </ul>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Особенность</div>
      <div class="card-body">
        <p class="card-text">Проценты начисляются на наращенную сумму (проценты на проценты).</p>
      </div>
    </div>
    <div class="alert alert-primary mt-3">Ответ: Наращенную сумму по сложным процентам</div>
  </div>
</div>`,
    "altpath": "currentDay"
  },

  {
    "id": "finance_present_value001",
    "type": "multiplechoices",
    "header": "Финансовая математика",
    "title": "Дисконтирование",
    "theme": "Проценты",
    "text": "$$P = \\frac{F}{(1 + i)^n}$$\n\nДанная формула определяет:",
    "choices": [
      "Будущую стоимость",
      "Текущую (приведённую) стоимость",
      "Наращенную сумму по простым процентам",
      "Формулу Гордона",
      "Перпетуитет"
    ],
    "answers": ["Текущую (приведённую) стоимость"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Формула дисконтирования</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Обозначения</div>
      <div class="card-body">
        <ul>
          <li><strong>P</strong> — текущая (приведённая) стоимость</li>
          <li><strong>F</strong> — будущая стоимость</li>
          <li><strong>n</strong> — количество периодов</li>
          <li><strong>i</strong> — ставка дисконтирования</li>
        </ul>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Смысл</div>
      <div class="card-body">
        <p class="card-text">Сколько нужно вложить сегодня, чтобы через n периодов получить сумму F.</p>
      </div>
    </div>
    <div class="alert alert-primary mt-3">Ответ: Текущую (приведённую) стоимость</div>
  </div>
</div>`,
    "altpath": "currentDay"
  },


  {
    "id": "math_infinite_geometric_series002",
    "type": "multiplechoices",
    "header": "Математика",
    "title": "Сумма бесконечной геометрической прогрессии",
    "theme": "Прогрессии",
    "text": "Дана бесконечно убывающая геометрическая прогрессия, где:\n\n- a — первый член\n- q — знаменатель (|q| < 1)\n\nПо какой формуле вычисляется сумма всех членов этой прогрессии?",
    "choices": [
      "$$ S = \\frac{a}{1 - q} $$",
      "$$ S = \\frac{a}{1 + q} $$",
      "$$ S = \\frac{a}{q - 1} $$",
      "$$ S = \\frac{a}{1 - q^n} $$",
      "$$ S = a \\cdot (1 - q^n) $$"
    ],
    "answers": ["$$ S = \\frac{a}{1 - q} $$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Сумма бесконечной геометрической прогрессии</h5>
  </div>
  <div class="card-body">
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Определение
      </div>
      <div class="card-body">
        <p>Геометрическая прогрессия — это последовательность чисел, где каждый следующий член получается умножением предыдущего на постоянное число <strong>q</strong> (знаменатель):</p>
        <p class="text-center">$$ a, \\; aq, \\; aq^2, \\; aq^3, \\; \\dots $$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Вывод формулы суммы
      </div>
      <div class="card-body">
        <p>Сумма первых <strong>n</strong> членов:</p>
        <p class="text-center">$$ S_n = a + aq + aq^2 + \\dots + aq^{n-1} = a \\cdot \\frac{1 - q^n}{1 - q} $$</p>
        
        <p>Если <strong>|q| < 1</strong>, то при <strong>n → ∞</strong> выполняется <strong>q^n → 0</strong>.</p>
        
        <p>Следовательно, сумма <strong>бесконечного</strong> числа членов:</p>
        <p class="text-center">$$ S = \\lim_{n \\to \\infty} S_n = a \\cdot \\frac{1 - 0}{1 - q} = \\frac{a}{1 - q} $$</p>
        
        <div class="alert alert-success mt-2">
          <strong>Формула:</strong> $$ S = \\frac{a}{1 - q} $$
        </div>
        <p class="mt-2"><strong>Условие применимости:</strong> |q| < 1 (прогрессия бесконечно убывает).</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-warning text-dark">
        Пример
      </div>
      <div class="card-body">
        <p>Рассмотрим прогрессию: $$ 1, \\; \\frac{1}{2}, \\; \\frac{1}{4}, \\; \\frac{1}{8}, \\; \\dots $$</p>
        <ul>
          <li>Первый член: a = 1</li>
          <li>Знаменатель: q = 1/2</li>
        </ul>
        <p class="text-center">$$ S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2 $$</p>
        <p>Проверка: 1 + 0.5 + 0.25 + 0.125 + ... = 2</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> $$ S = \\frac{a}{1 - q} $$
    </div>
  </div>
</div>`,
    "altpath": "currentDay"
  },


  {
    "id": "finance_growing_perpetuity001",
    "type": "multiplechoices",
    "header": "Финансовая математика",
    "title": "Растущий перпетуитет",
    "theme": "Аннуитеты",
    "text": "$$ PV = \\frac{C}{r - g} $$\n\nДанная формула определяет текущую стоимость:",
    "choices": [
      "Обычного аннуитета",
      "Перпетуитета с постоянным темпом роста",
      "Бесконечного аннуитета",
      "Формулу сложных процентов",
      "Наращенной суммы"
    ],
    "answers": ["Перпетуитета с постоянным темпом роста"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Растущий перпетуитет</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Обозначения</div>
      <div class="card-body">
        <ul>
          <li><strong>PV</strong> — текущая стоимость</li>
          <li><strong>C</strong> — первый платёж</li>
          <li><strong>r</strong> — ставка дисконтирования</li>
          <li><strong>g</strong> — темп роста платежей</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">Вывод через сумму бесконечной геометрической прогрессии</div>
      <div class="card-body">
        <p>Поток платежей растущего перпетуитета:</p>
        <p class="text-center">$$ C, \\; C(1+g), \\; C(1+g)^2, \\; C(1+g)^3, \\; \\dots $$</p>
        
        <p>Дисконтируем каждый платёж к текущему моменту:</p>
        <p class="text-center">$$ PV = \\frac{C}{1+r} + \\frac{C(1+g)}{(1+r)^2} + \\frac{C(1+g)^2}{(1+r)^3} + \\frac{C(1+g)^3}{(1+r)^4} + \\dots $$</p>
        
        <p>Выносим общий множитель:</p>
        <p class="text-center">$$ PV = \\frac{C}{1+r} \\left[ 1 + \\frac{1+g}{1+r} + \\left(\\frac{1+g}{1+r}\\right)^2 + \\left(\\frac{1+g}{1+r}\\right)^3 + \\dots \\right] $$</p>
        
        <p>В квадратных скобках — <strong>бесконечная геометрическая прогрессия</strong> с первым членом <strong>a = 1</strong> и знаменателем  $$ q = \\frac{1+g}{1+r} $$.</p>
        
        <p>При условии <strong>r > g</strong> выполняется <strong>|q| < 1</strong>, и сумма прогрессии равна:</p>
        <p class="text-center">$$ S = \\frac{a}{1 - q} = \\frac{1}{1 - \\frac{1+g}{1+r}} $$</p>
        
        <p>Упрощаем знаменатель суммы:</p>
        <p class="text-center">$$ 1 - \\frac{1+g}{1+r} = \\frac{1+r - (1+g)}{1+r} = \\frac{r - g}{1+r} $$</p>
        
        <p>Следовательно:</p>
        <p class="text-center">$$ S = \\frac{1}{\\frac{r - g}{1+r}} = \\frac{1+r}{r - g} $$</p>
        
        <p>Подставляем обратно в выражение для PV:</p>
        <p class="text-center">$$ PV = \\frac{C}{1+r} \\cdot \\frac{1+r}{r - g} = \\frac{C}{r - g} $$</p>
        
        <div class="alert alert-success mt-2">
          <strong>Итог:</strong> формула $$ PV = \\frac{C}{r - g} $$ — это текущая стоимость <strong>перпетуитета с постоянным темпом роста</strong> (растущего вечного аннуитета).
        </div>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">Условие применимости</div>
      <div class="card-body">
        <p class="card-text">Формула работает только при <strong>r > g</strong> (ставка дисконтирования больше темпа роста). Если r ≤ g, ряд расходится и текущая стоимость бесконечна.</p>
      </div>
    </div>
    
    <div class="alert alert-primary mt-3">
      <strong>Ответ:</strong> Перпетуитет с постоянным темпом роста
    </div>
  </div>
</div>`,
    "altpath": "currentDay"
  },

  {
    "id": "finance_perpetuity_calc001",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
    "title": "Перпетуитет",
    "theme": "Аннуитеты",
    "text": "Вечная рента приносит ежегодный платёж {var1-10} руб. Ставка дисконтирования 10%. Чему равна текущая стоимость перпетуитета?",
    "answer": "{var1-10} / 0.1",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт текущей стоимости перпетуитета</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула перпетуитета
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$PV = \\frac{C}{r}$$</p>
        <ul>
          <li><strong>C</strong> = {var1-10} руб.</li>
          <li><strong>r</strong> = 10% = 0.1</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Связь с бесконечной геометрической прогрессией
      </div>
      <div class="card-body">
        <p class="card-text">Текущая стоимость перпетуитета — это сумма бесконечно убывающей геометрической прогрессии дисконтированных платежей:</p>
        <p class="text-center">$$PV = \\frac{C}{1+r} + \\frac{C}{(1+r)^2} + \\frac{C}{(1+r)^3} + \\dots$$</p>
        <p class="text-center">$$PV = \\frac{C}{1+r} \\cdot \\frac{1}{1 - \\frac{1}{1+r}} = \\frac{C}{1+r} \\cdot \\frac{1+r}{r} = \\frac{C}{r}$$</p>
        <p>Первый член прогрессии: $$a = \\frac{C}{1+r}$$, знаменатель: $$q = \\frac{1}{1+r}$$. Сумма бесконечной прогрессии: $$S = \\frac{a}{1-q} = \\frac{C}{r}$$.</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$PV = \\frac{{var1-10}}{0.1} = {= {var1-10} / 0.1}$$</p>
      </div>
    </div>
    
   
  </div>
</div>`,
    "randomfrom": [10, 20, 30, 40, 50],
    "altpath": "currentDay"
  },

  {
    "id": "finance_gordon_calc001",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
    "title": "Модель Гордона",
    "theme": "Оценка акций",
    "text": "Ожидаемый дивиденд акции в следующем году составит {var1-10} руб. Требуемая норма доходности 12%, постоянный темп роста дивидендов 2%. Чему равна внутренняя стоимость акции?",
    "answer": "{var1-10} / (0.12 - 0.02)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Расчёт стоимости акции по модели Гордона</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Формула Гордона
      </div>
      <div class="card-body">
        <p class="card-text text-center">$$P = \\frac{D_1}{r - g}$$</p>
        <ul>
          <li><strong>D₁</strong> = {var1-10} руб.</li>
          <li><strong>r</strong> = 12% = 0.12</li>
          <li><strong>g</strong> = 2% = 0.02</li>
        </ul>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-secondary text-white">
        Связь с бесконечной геометрической прогрессией
      </div>
      <div class="card-body">
        <p class="card-text">Формула Гордона выводится из суммы бесконечно убывающей геометрической прогрессии:</p>
        <p class="text-center">$$P = \\frac{D_1}{1+r} + \\frac{D_1(1+g)}{(1+r)^2} + \\frac{D_1(1+g)^2}{(1+r)^3} + \\dots$$</p>
        <p class="text-center">$$P = \\frac{D_1}{1+r} \\cdot \\frac{1}{1 - \\frac{1+g}{1+r}} = \\frac{D_1}{r - g}$$</p>
        <p>Первый член прогрессии: $$a = \\frac{D_1}{1+r}$$, знаменатель: $$q = \\frac{1+g}{1+r}$$. При r > g сумма равна $$\\frac{a}{1-q} = \\frac{D_1}{r - g}$$.</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$P = \\frac{{var1-10}}{0.12 - 0.02} = \\frac{{var1-10}}{0.10} = {= {var1-10} / 0.1}$$</p>
      </div>
    </div>

  </div>
</div>`,
    "randomfrom": [5, 10, 15, 20, 25],
    "altpath": "currentDay"
  },


  {
    "id": "statistics_mean_mixed001",
    "type": "mathwithrandomnumber",
    "header": "Статистика",
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
    "randomfrom": [4, 9, 16, 25],
    "altpath": "currentDay"
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
    "title": "Описательная статистика",
    "theme": "Корреляционно-регрессионный анализ",
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
    "title": "Описательная статистика",
    "altpath": "currentDay",
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
    "altpath": "currentDay",
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
    "altpath": "currentDay",
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
    "altpath": "currentDay",
    "text": "$$\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\cdot \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Коэффициента детерминации", "Ковариации", "Коэффициента корреляции Пирсона", "Наклона регрессии"],
    "answers": ["Коэффициента корреляции Пирсона"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$r = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\cdot \\sigma_Y}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>ковариация</strong>, в знаменателе — <strong>произведение стандартных отклонений</strong>. Результат — безразмерная величина от -1 до 1. Это <strong>коэффициент корреляции Пирсона</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Коэффициент корреляции Пирсона</div></div></div>"
  },

  {
    "id": "statistics542",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Статистическая оценка",
    "theme": "Меры центральной тенденции",
    "altpath": "currentDay",
    "text": "$$\\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$\n\nДанная формула используется для расчёта:",
    "choices": ["Медианы", "Среднего арифметического", "Дисперсии", "Стандартного отклонения"],
    "answers": ["Среднего арифметического"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 О какой формуле идёт речь?</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дана формула:</strong> $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Анализ формулы</h5></div><div class='card-body'><p class='card-text'>В числителе — <strong>сумма всех значений</strong>, в знаменателе — <strong>количество значений</strong>. Это формула <strong>среднего арифметического</strong>.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Среднее арифметическое</div></div></div>"
  },

  {
    "id": "finance_wacc_calc003",
    "type": "mathwithrandomnumber",
    "header": "Финансовая математика",
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
    "id": "exponential_function001april",
    "type": "mathwithrandomnumber",
    "header": "Показательная функция",
    "title": "Свойства показательной функции",
    "theme": "Показательная функция",
    "text": "Чему равно $$2^{{var1-10}} = ?$$",
    "answer": "POWER(2, {var1-10})",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Вычисление показательной функции</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Определение показательной функции
      </div>
      <div class="card-body">
        <p class="card-text">Показательная функция — это функция вида $y = a^x$, где $a > 0$, $a \\neq 1$.</p>
        <p class="card-text">При возведении числа в отрицательную степень:</p>
        <p class="card-text text-center">$$a^{-n} = \\frac{1}{a^n}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Применяем определение
      </div>
      <div class="card-body">
        <p class="card-text">Нам нужно вычислить:</p>
        <p class="card-text text-center">$$2^{{var1-10}}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$2^{{var1-10}} = {=POWER(2, {var1-10})}$$</p>
        <p class="card-text text-center">$$2^{{var1-10}} = {=POWER(2, {var1-10})}$$</p>
      </div>
    </div>
    
  </div>
</div>`,
    "randomfrom": [-1, -2, -3, -4, -5]
  },


  {
    "id": "logarithms_product001",
    "type": "mathwithrandomnumber",
    "header": "Логарифмы",
    "title": "Свойства логарифмов",
    "theme": "Логарифмы",
    "text": "Чему равно $$\\log_{2}{var1-10} = ?$$",
    "answer": "LOG({var1-10}, 2)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Вычисление логарифма</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Определение логарифма
      </div>
      <div class="card-body">
        <p class="card-text">Логарифм числа $b$ по основанию $a$ — это показатель степени $c$, в которую нужно возвести $a$, чтобы получить $b$:</p>
        <p class="card-text text-center">$$\\log_a b = c \\quad \\Longleftrightarrow \\quad a^c = b$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Применяем определение
      </div>
      <div class="card-body">
        <p class="card-text">Нам нужно найти $c$, такое что:</p>
        <p class="card-text text-center">$$2^c = {var1-10}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$2^{{=LOG({var1-10}, 2)}} = {var1-10}$$</p>
        <p class="card-text text-center">$$\\log_{2}{var1-10} = {=LOG({var1-10}, 2)}$$</p>
      </div>
    </div>
    
   
  </div>
</div>`,
    "randomfrom": [8, 16, 32, 64]
  },

  {
    "id": "logarithms_product001april",
    "type": "mathwithrandomnumber",
    "header": "Логарифмы",
    "title": "Свойства логарифмов",
    "theme": "Логарифмы",
    "text": "Чему равно $$\\log_{2}{var1-10} = ?$$",
    "answer": "LOG({var1-10}, 2)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Вычисление логарифма</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Определение логарифма
      </div>
      <div class="card-body">
        <p class="card-text">Логарифм числа $b$ по основанию $a$ — это показатель степени $c$, в которую нужно возвести $a$, чтобы получить $b$:</p>
        <p class="card-text text-center">$$\\log_a b = c \\quad \\Longleftrightarrow \\quad a^c = b$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Применяем определение
      </div>
      <div class="card-body">
        <p class="card-text">Нам нужно найти $c$, такое что:</p>
        <p class="card-text text-center">$$2^c = {var1-10}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$2^{{=LOG({var1-10}, 2)}} = {var1-10}$$</p>
        <p class="card-text text-center">$$\\log_{2}{var1-10} = {=LOG({var1-10}, 2)}$$</p>
      </div>
    </div>
    
   
  </div>
</div>`,
    "randomfrom": [1 / 2, 1 / 4, 1 / 8]
  },

  {
    "id": "logarithms_product002",
    "type": "mathwithrandomnumber",
    "header": "Логарифмы",
    "title": "Свойства логарифмов",
    "theme": "Логарифмы",
    "text": "Чему равно $$\\log_{3}{var1-10} = ?$$",
    "answer": "LOG({var1-10}, 3)",
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>Вычисление логарифма</h5>
  </div>
  <div class="card-body">
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Определение логарифма
      </div>
      <div class="card-body">
        <p class="card-text">Логарифм числа $b$ по основанию $a$ — это показатель степени $c$, в которую нужно возвести $a$, чтобы получить $b$:</p>
        <p class="card-text text-center">$$\\log_a b = c \\quad \\Longleftrightarrow \\quad a^c = b$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        Применяем определение
      </div>
      <div class="card-body">
        <p class="card-text">Нам нужно найти $c$, такое что:</p>
        <p class="card-text text-center">$$3^c = {var1-10}$$</p>
      </div>
    </div>
    
    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        Вычисление
      </div>
      <div class="card-body">
        <p class="card-text">$$3^{{=LOG({var1-10}, 3)}} = {var1-10}$$</p>
        <p class="card-text text-center">$$\\log_{3}{var1-10} = {=LOG({var1-10}, 3)}$$</p>
      </div>
    </div>
    
    
  </div>
</div>`,
    "randomfrom": [9, 27, 81, 243]
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
    "id": "imaginary_i_euler_004",
    "type": "multiplechoices",
    "header": "Комплексные числа: Формула Эйлера",
    "title": "Связь экспоненты с тригонометрией",
    "theme": "Комплексные числа",

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

  {
    "id": "derivative_trig_002",
    "type": "multiplechoices",
    "header": "Дифференцирование: Тригонометрия",
    "title": "Производная синуса и косинуса",
    "theme": "Производные",

    "text": "Чему равна производная функции $f(x) = \\sin(x)$?",
    "choices": [
      "$\\sin(x)$",
      "$\\cos(x)$",
      "$-\\sin(x)$",
      "$-\\cos(x)$",
      "$\\tan(x)$"
    ],
    "answers": ["$\\cos(x)$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Производные тригонометрических функций</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Основные формулы:</strong>
      $$\\frac{d}{dx} \\sin(x) = \\cos(x)$$
      $$\\frac{d}{dx} \\cos(x) = -\\sin(x)$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>🎭 Образная ассоциация</h5>
      </div>
      <div class="card-body">
        <p class="card-text">🕊️ Чайка-синус взлетает 🚀 и превращается в чайку-косинус!</p>
        <p class="card-text">$$\uD83D\uDC0B \\sin(x) \\xrightarrow{\\text{производная}} \uD83D\uDC0B \\cos(x)$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Таблица производных тригонометрических функций</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$f(x)$</th><th>$f'(x)$</th></tr>
            </thead>
            <tbody>
              <tr class="table-success"><td>$\\sin(x)$</td><td>$\\cos(x)$</td></tr>
              <tr class="table-info"><td>$\\cos(x)$</td><td>$-\\sin(x)$</td></tr>
              <tr><td>$\\tan(x)$</td><td>$\\sec^2(x)$</td></tr>
              <tr><td>$\\cot(x)$</td><td>$-\\csc^2(x)$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $f'(x) = \\cos(x)$
    </div>
  </div>
</div>`
  },

  {
    "id": "derivative_power_001",
    "type": "multiplechoices",
    "header": "Дифференцирование: Степенная функция",
    "title": "Производная степенной функции",
    "theme": "Производные",

    "text": "Чему равна производная функции $f(x) = x^5$?",
    "choices": [
      "$5x^4$",
      "$4x^5$",
      "$5x^6$",
      "$x^4$",
      "$5x^5$"
    ],
    "answers": ["$5x^4$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Производная степенной функции</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула:</strong>
      $$\\frac{d}{dx} x^n = n \\cdot x^{n-1}$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем степень</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$f(x) = x^5$, здесь $n = 5$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Применяем формулу</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$f'(x) = 5 \\cdot x^{5-1} = 5x^4$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Таблица для запоминания</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$f(x)$</th><th>$f'(x)$</th></tr>
            </thead>
            <tbody>
              <tr><td>$x^2$</td><td>$2x$</td></tr>
              <tr><td>$x^3$</td><td>$3x^2$</td></tr>
              <tr><td>$x^4$</td><td>$4x^3$</td></tr>
              <tr class="table-success"><td>$x^5$</td><td>$5x^4$</td></tr>
              <tr><td>$x^{10}$</td><td>$10x^9$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $f'(x) = 5x^4$
    </div>
  </div>
</div>`
  },

  {
    "id": "derivative_exp_log_003",
    "type": "multiplechoices",
    "header": "Дифференцирование: Экспонента и логарифм",
    "title": "Производная экспоненты и натурального логарифма",
    "theme": "Производные",

    "text": "Чему равна производная функции $f(x) = e^x$?",
    "choices": [
      "$e^x$",
      "$x e^{x-1}$",
      "$\\frac{1}{x}$",
      "$\\ln(x)$",
      "$x e^x$"
    ],
    "answers": ["$e^x$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Производная экспоненты и логарифма</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Уникальное свойство экспоненты:</strong>
      $$\\frac{d}{dx} e^x = e^x$$
      <hr>
      <strong>📌 Производная натурального логарифма:</strong>
      $$\\frac{d}{dx} \\ln(x) = \\frac{1}{x}, \\quad x > 0$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>✨ Экспонента — функция, равная своей производной</h5>
      </div>
      <div class="card-body">
        <p class="card-text">Это уникальное свойство! Никакая другая функция не обладает им в такой простоте.</p>
        <div class="alert alert-success">
          🚀 Чайка-экспонента взлетает, и её скорость взлёта равна высоте!
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>📋 Таблица производных</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr><th>$f(x)$</th><th>$f'(x)$</th></tr>
            </thead>
            <tbody>
              <tr class="table-success"><td>$e^x$</td><td>$e^x$</td></tr>
              <tr><td>$a^x$</td><td>$a^x \\ln(a)$</td></tr>
              <tr class="table-info"><td>$\\ln(x)$</td><td>$\\frac{1}{x}$</td></tr>
              <tr><td>$\\log_a(x)$</td><td>$\\frac{1}{x \\ln(a)}$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $f'(x) = e^x$
    </div>
  </div>
</div>`
  },

  {
    "id": "derivative_sum_004",
    "type": "multiplechoices",
    "header": "Дифференцирование: Линейность",
    "title": "Производная суммы функций",
    "theme": "Производные",

    "text": "Чему равна производная функции $f(x) = x^3 + \\sin(x)$?",
    "choices": [
      "$3x^2 + \\cos(x)$",
      "$3x^2 - \\cos(x)$",
      "$x^3 + \\cos(x)$",
      "$3x^2 + \\sin(x)$",
      "$\\frac{x^4}{4} - \\cos(x)$"
    ],
    "answers": ["$3x^2 + \\cos(x)$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Производная суммы функций</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Правило линейности:</strong>
      $$(f(x) + g(x))' = f'(x) + g'(x)$$
      $$(f(x) - g(x))' = f'(x) - g'(x)$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Разбиваем на слагаемые</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$f(x) = x^3 + \\sin(x)$</p>
        <p class="card-text">$$f'(x) = (x^3)' + (\\sin(x))'$$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Находим производные каждого слагаемого</h5>
      </div>
      <div class="card-body">
        <ul>
          <li>$$(x^3)' = 3x^2$$</li>
          <li>$$(\\sin(x))' = \\cos(x)$$</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-success text-white">
        <h5>Шаг 3: Складываем</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$f'(x) = 3x^2 + \\cos(x)$$</p>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $f'(x) = 3x^2 + \\cos(x)$
    </div>
  </div>
</div>`
  },

  {
    "id": "integral_power_005",
    "type": "multiplechoices",
    "header": "Интегрирование: Степенная функция",
    "title": "Неопределённый интеграл степенной функции",
    "theme": "Интегралы",

    "text": "Чему равен неопределённый интеграл $\\int x^3 \\, dx$?",
    "choices": [
      "$\\frac{x^4}{4} + C$",
      "$3x^2 + C$",
      "$\\frac{x^2}{2} + C$",
      "$x^4 + C$",
      "$\\frac{x^3}{3} + C$"
    ],
    "answers": ["$\\frac{x^4}{4} + C$"],
    "hint": `
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5>📐 Интеграл степенной функции</h5>
  </div>
  <div class="card-body">
    
    <div class="alert alert-secondary mb-3">
      <strong>📌 Формула:</strong>
      $$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1$$
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 1: Определяем степень</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$\\int x^3 \\, dx$, здесь $n = 3$</p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header bg-info text-white">
        <h5>Шаг 2: Применяем формулу</h5>
      </div>
      <div class="card-body">
        <p class="card-text">$$\\int x^3 \\, dx = \\frac{x^{3+1}}{3+1} + C = \\frac{x^4}{4} + C$$</p>
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
              <tr><td>$\\int x^2 \\, dx$</td><td>$\\frac{x^3}{3} + C$</td></tr>
              <tr class="table-success"><td>$\\int x^3 \\, dx$</td><td>$\\frac{x^4}{4} + C$</td></tr>
              <tr><td>$\\int x^4 \\, dx$</td><td>$\\frac{x^5}{5} + C$</td></tr>
              <tr><td>$\\int x^n \\, dx$</td><td>$\\frac{x^{n+1}}{n+1} + C$</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning">
      <b>✅ Ответ:</b> $\\frac{x^4}{4} + C$
    </div>
  </div>
</div>`
  },

  {
    "id": "integral_trig_006",
    "type": "multiplechoices",
    "header": "Интегрирование: Тригонометрия",
    "title": "Интеграл от косинуса",
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
    "title": "Интеграл от 1/x",
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
    "title": "Вычисление площади под кривой",
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
    "title": "Интеграл от экспоненты",
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
    "title": "Интеграл суммы функций",
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
    "title": "Дробная степень",
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
    "randomfrom": [4, 9, 16, 25]
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
    "randomfrom": [8, 27, 64, 125]
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
    "randomfrom": [8, 27, 64, 125]
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
    "randomfrom": [4, 9, 16, 25]
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
    "randomfrom": [4, 9, 16, 25]
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
    "randomfrom": [2, 3, 4, 5]
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
    "randomfrom": [2, 3, 4, 5]
  },


  {
    "id": "number_e_limit_001",
    "type": "multiplechoices",
    "header": "Математический анализ: Число e",
    "title": "Определение числа e через предел",
    "theme": "Числа и пределы",

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
    "id": "stats-absfreq-001",
    "type": "multiplechoices",
    "header": "Статистика. Абсолютная частота",
    "title": "Что такое абсолютная частота?",
    "theme": "Элементы статистики",
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
    "title": "Что такое относительная частота?",
    "theme": "Элементы статистики",
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
    "title": "Что такое объём выборки?",
    "theme": "Элементы статистики",
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
    "title": "Что такое размах?",
    "theme": "Элементы статистики",
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
    "title": "Что такое мода?",
    "theme": "Элементы статистики",
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
    "title": "Что такое медиана?",
    "theme": "Элементы статистики",
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




]

window.quizesSets = quizesSets;
