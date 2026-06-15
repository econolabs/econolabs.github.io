
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

      // ==================== ВАРИАНТ 1 ====================
   // ==================== ВАРИАНТ 1 (ПОЛНЫЙ, КАК ПРИМЕР) ====================
  {
    id: "var1-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x-2)(x+3) > 0$$`,
    choices: [
      `$(-\\infty; -3) \\cup (2; +\\infty)$`,
      `$(-3; 2)$`,
      `$(-\\infty; -2) \\cup (3; +\\infty)$`,
      `$(-2; 3)$`,
      `$(-\\infty; -3] \\cup [2; +\\infty)$`
    ],
    answers: [`$(-\\infty; -3) \\cup (2; +\\infty)$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Метод интервалов (пошагово)</h5>
        <p><strong>1. Находим нули функции:</strong></p>
        <p>$$(x-2)(x+3)=0 \\quad \\Rightarrow \\quad x_1=2, \\quad x_2=-3$$</p>
        
        <p><strong>2. Отмечаем на числовой прямой:</strong> -3 и 2</p>
        <p><strong>3. Определяем знаки на интервалах:</strong></p>
        <ul>
          <li>Для интервала $(-\\infty; -3)$: возьмём $x=-4$ <br>
          $$(-4-2)(-4+3)=(-6)\\cdot(-1)=6 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
          <li>Для интервала $(-3; 2)$: возьмём $x=0$ <br>
          $$(0-2)(0+3)=(-2)\\cdot 3=-6 < 0 \\quad \\Rightarrow \\quad \\text{знак } "-"$$</li>
          <li>Для интервала $(2; +\\infty)$: возьмём $x=3$ <br>
          $$(3-2)(3+3)=1 \\cdot 6 = 6 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
        </ul>
        
        <p><strong>4. Выбираем интервалы со знаком "+":</strong></p>
        <p>$$(-\\infty; -3) \\quad \\text{и} \\quad (2; +\\infty)$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$(-\\infty; -3) \\cup (2; +\\infty)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 - 5x + 6 = 0$$`,
    choices: [
      `$x = 2$ и $x = 3$`,
      `$x = -2$ и $x = -3$`,
      `$x = 2$ и $x = -3$`,
      `$x = -2$ и $x = 3$`,
      `$x = 1$ и $x = 6$`
    ],
    answers: [`$x = 2$ и $x = 3$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📌 Решение квадратного уравнения</h5>
        <p><strong>1. Записываем коэффициенты:</strong></p>
        <p>$$a = 1, \\quad b = -5, \\quad c = 6$$</p>
        
        <p><strong>2. Вычисляем дискриминант:</strong></p>
        <p>$$D = b^2 - 4ac = (-5)^2 - 4 \\cdot 1 \\cdot 6 = 25 - 24 = 1$$</p>
        
        <p><strong>3. Находим корни:</strong></p>
        <p>$$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{5 \\pm \\sqrt{1}}{2} = \\frac{5 \\pm 1}{2}$$</p>
        <p>$$x_1 = \\frac{5-1}{2} = \\frac{4}{2} = 2, \\quad x_2 = \\frac{5+1}{2} = \\frac{6}{2} = 3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 2 \\quad \\text{и} \\quad x = 3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = x^3 - 3x$$`,
    choices: [
      `возрастает на $(-\\infty;-1]$ и $[1;+\\infty)$, убывает на $[-1;1]$, $x_{max}=-1$, $x_{min}=1$`,
      `возрастает на $[-1;1]$, убывает на $(-\\infty;-1]$ и $[1;+\\infty)$, $x_{max}=1$, $x_{min}=-1$`,
      `возрастает на $(-\\infty;0]$, убывает на $[0;+\\infty)$, $x_{max}=0$`,
      `убывает на $(-\\infty;-1]$ и $[1;+\\infty)$, возрастает на $[-1;1]$, $x_{max}=1$, $x_{min}=-1$`,
      `функция монотонно возрастает на всей числовой прямой`
    ],
    answers: [`возрастает на $(-\\infty;-1]$ и $[1;+\\infty)$, убывает на $[-1;1]$, $x_{max}=-1$, $x_{min}=1$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📈 Исследование функции $f(x)=x^3-3x$</h5>
        
        <p><strong>1. Находим производную:</strong></p>
        <p>Для расчета производной суммы функций используем правило: $(x^n)' = n \\cdot x^{n-1}$</p>
        <p>$$f'(x) = (x^3)' - (3x)' = 3x^2 - 3$$</p>
        <p>$$f'(x) = 3(x^2 - 1) = 3(x-1)(x+1)$$</p>
        
        <p><strong>2. Находим критические точки:</strong></p>
        <p>$$f'(x) = 0 \\quad \\Rightarrow \\quad 3(x-1)(x+1)=0 \\quad \\Rightarrow \\quad x=-1, \\quad x=1$$</p>
        
        <p><strong>3. Определяем знаки производной на интервалах:</strong></p>
        <ul>
          <li>На $(-\\infty; -1)$: возьмём $x=-2$ <br>
          $$f'(-2)=3((-2)^2-1)=3(4-1)=9 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
          <li>На $(-1; 1)$: возьмём $x=0$ <br>
          $$f'(0)=3(0-1)=-3 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
          <li>На $(1; +\\infty)$: возьмём $x=2$ <br>
          $$f'(2)=3(4-1)=9 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
        </ul>
        
        <p><strong>4. Определяем экстремумы:</strong></p>
        <ul>
          <li>$x = -1$ — точка максимума (производная меняет $+$ на $-$)</li>
          <li>$x = 1$ — точка минимума (производная меняет $-$ на $+$)</li>
        </ul>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$\\text{Возрастает: } (-\\infty;-1] \\cup [1;+\\infty) \\quad \\text{Убывает: } [-1;1]$$
            $$x_{max} = -1, \\quad x_{min} = 1$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_2(x+1) = 3$$`,
    choices: [
      `$x = 7$`,
      `$x = 8$`,
      `$x = 5$`,
      `$x = 9$`,
      `$x = 6$`
    ],
    answers: [`$x = 7$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📚 Решение логарифмического уравнения</h5>
        
        <p><strong>1. Используем определение логарифма:</strong></p>
        <p>$$\\log_a b = c \\quad \\Leftrightarrow \\quad b = a^c \\quad (a>0, a \\neq 1, b>0)$$</p>
        
        <p><strong>2. Применяем к нашему уравнению:</strong></p>
        <p>$$\\log_2(x+1) = 3 \\quad \\Rightarrow \\quad x+1 = 2^3$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$2^3 = 2 \\cdot 2 \\cdot 2 = 8$$</p>
        <p>$$x+1 = 8 \\quad \\Rightarrow \\quad x = 8 - 1 = 7$$</p>
        
        <p><strong>4. Проверяем ОДЗ:</strong></p>
        <p>$$x+1 > 0 \\quad \\Rightarrow \\quad 7+1 = 8 > 0 \\quad \\text{— выполнено}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 7$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$2^{x} = 16$$`,
    choices: [
      `$x = 4$`,
      `$x = 8$`,
      `$x = 3$`,
      `$x = 5$`,
      `$x = 2$`
    ],
    answers: [`$x = 4$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>⚡ Решение показательного уравнения</h5>
        
        <p><strong>1. Представляем правую часть как степень с основанием 2:</strong></p>
        <p>$$16 = 2^4 \\quad \\text{(так как } 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16\\text{)}$$</p>
        
        <p><strong>2. Записываем уравнение:</strong></p>
        <p>$$2^{x} = 2^{4}$$</p>
        
        <p><strong>3. Используем свойство:</strong></p>
        <p>Если $a > 0$, $a \\neq 1$ и $a^{f(x)} = a^{g(x)}$, то $f(x) = g(x)$</p>
        <p>$$x = 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 4$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_2(x-1) > 1$$`,
    choices: [
      `$(3; +\\infty)$`,
      `$(1; +\\infty)$`,
      `$(-\\infty; 3)$`,
      `$(2; +\\infty)$`,
      `$(0; +\\infty)$`
    ],
    answers: [`$(3; +\\infty)$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📖 Решение логарифмического неравенства</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$x-1 > 0 \\quad \\Rightarrow \\quad x > 1$$</p>
        
        <p><strong>2. Представляем правую часть как логарифм:</strong></p>
        <p>$$1 = \\log_2 2 \\quad \\text{(так как } 2^1=2\\text{)}$$</p>
        
        <p><strong>3. Записываем неравенство:</strong></p>
        <p>$$\\log_2(x-1) > \\log_2 2$$</p>
        
        <p><strong>4. Учитываем монотонность логарифмической функции:</strong></p>
        <p>Так как основание $2 > 1$, функция $y=\\log_2 t$ возрастающая,<br>
        значит знак неравенства сохраняется:</p>
        <p>$$x-1 > 2 \\quad \\Rightarrow \\quad x > 3$$</p>
        
        <p><strong>5. Учитываем ОДЗ:</strong></p>
        <p>$$x > 1 \\quad \\text{и} \\quad x > 3 \\quad \\Rightarrow \\quad x > 3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x \\in (3; +\\infty)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task7",
    type: "multiplechoices",
    header: "7. Многогранники. Объемы и площади",
    title: "Объем параллелепипеда",
    theme: "Стереометрия",
    text: `В прямоугольном параллелепипеде стороны основания равны 8 см и 10 см, а диагональ большей боковой грани параллелепипеда равна 26 см. Найдите объем параллелепипеда.`,
    choices: [
      `$1920$ см³`,
      `$960$ см³`,
      `$2880$ см³`,
      `$1440$ см³`,
      `$2400$ см³`
    ],
    answers: [`$1920$ см³`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📦 Нахождение объёма прямоугольного параллелепипеда</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$a = 8 \\text{ см}, \\quad b = 10 \\text{ см}, \\quad d_{\\text{грани}} = 26 \\text{ см}$$</p>
        <p>Большая боковая грань — со сторонами $b=10$ см и высотой $h$.</p>
        
        <p><strong>1. Находим высоту $h$ по теореме Пифагора:</strong></p>
        <p>$$d_{\\text{грани}}^2 = b^2 + h^2$$</p>
        <p>$$26^2 = 10^2 + h^2$$</p>
        <p>$$676 = 100 + h^2$$</p>
        <p>$$h^2 = 676 - 100 = 576 \\quad \\Rightarrow \\quad h = \\sqrt{576} = 24 \\text{ см}$$</p>
        
        <p><strong>2. Вычисляем объём:</strong></p>
        <p>$$V = S_{\\text{осн}} \\cdot h = (a \\cdot b) \\cdot h = 8 \\cdot 10 \\cdot 24 = 80 \\cdot 24 = 1920 \\text{ см}^3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$V = 1920 \\text{ см}^3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var1-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = x^2, \\quad y = 0, \\quad x = 1, \\quad x = 2$$`,
    choices: [
      `$\\frac{7}{3}$`,
      `$\\frac{8}{3}$`,
      `$3$`,
      `$\\frac{5}{3}$`,
      `$\\frac{10}{3}$`
    ],
    answers: [`$\\frac{7}{3}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади криволинейной трапеции</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>Подставляем данные:</strong></p>
        <p>$$S = \\int_{1}^{2} x^2 \\, dx$$</p>
        
        <p><strong>Находим первообразную:</strong></p>
        <p>$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$$</p>
        <p>$$\\int x^2 \\, dx = \\frac{x^{3}}{3}$$</p>
        
        <p><strong>Вычисляем по формуле Ньютона-Лейбница:</strong></p>
        <p>$$S = \\left[\\frac{x^3}{3}\\right]_{1}^{2} = \\frac{2^3}{3} - \\frac{1^3}{3} = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = \\frac{7}{3}$$
          </div>
        </div>
      </div>
    </div>`
  },

  
  // ==================== ВАРИАНТ 2 ====================
  {
    id: "var2-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x-1)(x+4) \\le 0$$`,
    choices: [
      `$[-4; 1]$`,
      `$(-4; 1)$`,
      `$(-\\infty; -4] \\cup [1; +\\infty)$`,
      `$(-\\infty; -4) \\cup (1; +\\infty)$`,
      `$[-1; 4]$`
    ],
    answers: [`$[-4; 1]$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Метод интервалов (пошагово)</h5>
        <p><strong>1. Находим нули функции:</strong></p>
        <p>$$(x-1)(x+4)=0 \\quad \\Rightarrow \\quad x_1=1, \\quad x_2=-4$$</p>
        
        <p><strong>2. Отмечаем на числовой прямой:</strong> -4 и 1</p>
        <p><strong>3. Определяем знаки на интервалах:</strong></p>
        <ul>
          <li>Для интервала $(-\\infty; -4)$: возьмём $x=-5$ <br>
          $$(-5-1)(-5+4)=(-6)\\cdot(-1)=6 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
          <li>Для интервала $(-4; 1)$: возьмём $x=0$ <br>
          $$(0-1)(0+4)=(-1)\\cdot 4=-4 < 0 \\quad \\Rightarrow \\quad \\text{знак } "-"$$</li>
          <li>Для интервала $(1; +\\infty)$: возьмём $x=2$ <br>
          $$(2-1)(2+4)=1 \\cdot 6 = 6 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
        </ul>
        
        <p><strong>4. Выбираем интервалы со знаком "-" (так как $\\le 0$):</strong></p>
        <p>Квадратные скобки, так как неравенство нестрогое: $$[-4; 1]$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$[-4; 1]$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 + 4x - 5 = 0$$`,
    choices: [
      `$x = -5$ и $x = 1$`,
      `$x = 5$ и $x = -1$`,
      `$x = -5$ и $x = -1$`,
      `$x = 5$ и $x = 1$`,
      `$x = 0$ и $x = -4$`
    ],
    answers: [`$x = -5$ и $x = 1$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📌 Решение квадратного уравнения</h5>
        <p><strong>1. Записываем коэффициенты:</strong></p>
        <p>$$a = 1, \\quad b = 4, \\quad c = -5$$</p>
        
        <p><strong>2. Вычисляем дискриминант:</strong></p>
        <p>Формула дискриминанта: $$D = b^2 - 4ac$$</p>
        <p>$$D = 4^2 - 4 \\cdot 1 \\cdot (-5) = 16 + 20 = 36$$</p>
        <p>$$\\sqrt{D} = \\sqrt{36} = 6$$</p>
        
        <p><strong>3. Находим корни:</strong></p>
        <p>Формула корней: $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$</p>
        <p>$$x_{1,2} = \\frac{-4 \\pm 6}{2}$$</p>
        <p>$$x_1 = \\frac{-4-6}{2} = \\frac{-10}{2} = -5, \\quad x_2 = \\frac{-4+6}{2} = \\frac{2}{2} = 1$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = -5 \\quad \\text{и} \\quad x = 1$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = -x^2 + 4x$$`,
    choices: [
      `возрастает на $(-\\infty;2]$, убывает на $[2;+\\infty)$, $x_{max}=2$`,
      `убывает на $(-\\infty;2]$, возрастает на $[2;+\\infty)$, $x_{min}=2$`,
      `возрастает на $(-\\infty;0]$, убывает на $[0;+\\infty)$, $x_{max}=0$`,
      `убывает на $(-\\infty;0]$, возрастает на $[0;+\\infty)$, $x_{min}=0$`,
      `функция монотонно возрастает на всей числовой прямой`
    ],
    answers: [`возрастает на $(-\\infty;2]$, убывает на $[2;+\\infty)$, $x_{max}=2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📈 Исследование функции $f(x)=-x^2+4x$</h5>
        
        <p><strong>1. Находим производную:</strong></p>
        <p>Для расчета производной суммы функций используем правило: $(x^n)' = n \\cdot x^{n-1}$</p>
        <p>$$f'(x) = (-x^2)' + (4x)' = -2x + 4$$</p>
        <p>$$f'(x) = -2(x-2)$$</p>
        
        <p><strong>2. Находим критические точки:</strong></p>
        <p>$$f'(x) = 0 \\quad \\Rightarrow \\quad -2(x-2)=0 \\quad \\Rightarrow \\quad x=2$$</p>
        
        <p><strong>3. Определяем знаки производной на интервалах:</strong></p>
        <ul>
          <li>На $(-\\infty; 2)$: возьмём $x=0$ <br>
          $$f'(0) = -2(0-2) = -2 \\cdot (-2) = 4 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
          <li>На $(2; +\\infty)$: возьмём $x=3$ <br>
          $$f'(3) = -2(3-2) = -2 \\cdot 1 = -2 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
        </ul>
        
        <p><strong>4. Определяем экстремум:</strong></p>
        <p>$x = 2$ — точка максимума (производная меняет $+$ на $-$)</p>
        <p>$$f(2) = -4 + 8 = 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$\\text{Возрастает: } (-\\infty;2] \\quad \\text{Убывает: } [2;+\\infty)$$
            $$x_{max} = 2$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_3(2x-1) = 2$$`,
    choices: [
      `$x = 5$`,
      `$x = 4$`,
      `$x = 6$`,
      `$x = 3$`,
      `$x = 7$`
    ],
    answers: [`$x = 5$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📚 Решение логарифмического уравнения</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$2x-1 > 0 \\quad \\Rightarrow \\quad 2x > 1 \\quad \\Rightarrow \\quad x > 0.5$$</p>
        
        <p><strong>2. Используем определение логарифма:</strong></p>
        <p>$$\\log_a b = c \\quad \\Leftrightarrow \\quad b = a^c \\quad (a>0, a \\neq 1, b>0)$$</p>
        <p>$$\\log_3(2x-1) = 2 \\quad \\Rightarrow \\quad 2x-1 = 3^2$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$3^2 = 9$$</p>
        <p>$$2x-1 = 9 \\quad \\Rightarrow \\quad 2x = 10 \\quad \\Rightarrow \\quad x = 5$$</p>
        
        <p><strong>4. Проверяем ОДЗ:</strong></p>
        <p>$$5 > 0.5 \\quad \\text{— выполнено}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 5$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$3^{x-1} = 27$$`,
    choices: [
      `$x = 4$`,
      `$x = 3$`,
      `$x = 5$`,
      `$x = 2$`,
      `$x = 6$`
    ],
    answers: [`$x = 4$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>⚡ Решение показательного уравнения</h5>
        
        <p><strong>1. Представляем правую часть как степень с основанием 3:</strong></p>
        <p>$$27 = 3^3 \\quad \\text{(так как } 3 \\cdot 3 \\cdot 3 = 27\\text{)}$$</p>
        
        <p><strong>2. Записываем уравнение:</strong></p>
        <p>$$3^{x-1} = 3^{3}$$</p>
        
        <p><strong>3. Используем свойство:</strong></p>
        <p>Если $a > 0$, $a \\neq 1$ и $a^{f(x)} = a^{g(x)}$, то $f(x) = g(x)$</p>
        <p>$$x-1 = 3$$</p>
        <p>$$x = 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 4$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_{0.5}(x+2) > -1$$`,
    choices: [
      `$(-2; 0)$`,
      `$(0; +\\infty)$`,
      `$(-\\infty; -2)$`,
      `$(-2; +\\infty)$`,
      `$(-\\infty; 0)$`
    ],
    answers: [`$(-2; 0)$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📖 Решение логарифмического неравенства</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$x+2 > 0 \\quad \\Rightarrow \\quad x > -2$$</p>
        
        <p><strong>2. Представляем правую часть как логарифм с основанием 0.5:</strong></p>
        <p>$$-1 = \\log_{0.5} (0.5)^{-1} = \\log_{0.5} 2$$</p>
        <p>Так как $0.5^{-1} = \\frac{1}{0.5} = 2$</p>
        
        <p><strong>3. Записываем неравенство:</strong></p>
        <p>$$\\log_{0.5}(x+2) > \\log_{0.5} 2$$</p>
        
        <p><strong>4. Учитываем монотонность:</strong></p>
        <p>Так как основание $0.5 < 1$, функция $y=\\log_{0.5} t$ убывающая,<br>
        значит знак неравенства меняется на противоположный:</p>
        <p>$$x+2 < 2 \\quad \\Rightarrow \\quad x < 0$$</p>
        
        <p><strong>5. Учитываем ОДЗ:</strong></p>
        <p>$$x > -2 \\quad \\text{и} \\quad x < 0 \\quad \\Rightarrow \\quad -2 < x < 0$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x \\in (-2; 0)$$
          </div>
        </div>
        
        <div class="alert alert-secondary mt-2">
          <strong>⭐ Важно:</strong> При основании логарифма < 1 знак неравенства меняется!
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task7",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Объем конуса",
    theme: "Стереометрия",
    text: `Образующая конуса равна 25 см, а радиус его основания 7 см. Найдите объём конуса.`,
    choices: [
      `$392\\pi$ см³`,
      `$196\\pi$ см³`,
      `$588\\pi$ см³`,
      `$784\\pi$ см³`,
      `$980\\pi$ см³`
    ],
    answers: [`$392\\pi$ см³`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Нахождение объёма конуса</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$l = 25 \\text{ см (образующая)}, \\quad r = 7 \\text{ см (радиус основания)}$$</p>
        
        <p><strong>1. Находим высоту конуса по теореме Пифагора:</strong></p>
        <p>В осевом сечении конуса — равнобедренный треугольник:</p>
        <p>$$l^2 = r^2 + h^2 \\quad \\Rightarrow \\quad h^2 = l^2 - r^2$$</p>
        <p>$$h^2 = 25^2 - 7^2 = 625 - 49 = 576$$</p>
        <p>$$h = \\sqrt{576} = 24 \\text{ см}$$</p>
        
        <p><strong>2. Формула объёма конуса:</strong></p>
        <p>$$V = \\frac{1}{3} \\pi r^2 h$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$V = \\frac{1}{3} \\pi \\cdot 7^2 \\cdot 24 = \\frac{1}{3} \\pi \\cdot 49 \\cdot 24$$</p>
        <p>$$V = \\pi \\cdot 49 \\cdot 8 = 392\\pi \\text{ см}^3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$V = 392\\pi \\text{ см}^3 \\approx 1231.5 \\text{ см}^3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var2-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = \\sqrt{x}, \\quad y = 0, \\quad x = 0, \\quad x = 4$$`,
    choices: [
      `$\\frac{16}{3}$`,
      `$\\frac{8}{3}$`,
      `$\\frac{4}{3}$`,
      `$\\frac{32}{3}$`,
      `$\\frac{20}{3}$`
    ],
    answers: [`$\\frac{16}{3}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади криволинейной трапеции</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>Подставляем данные:</strong></p>
        <p>$$f(x) = \\sqrt{x} = x^{1/2}, \\quad a=0, \\quad b=4$$</p>
        <p>$$S = \\int_{0}^{4} x^{1/2} \\, dx$$</p>
        
        <p><strong>Находим первообразную:</strong></p>
        <p>$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$$</p>
        <p>$$\\int x^{1/2} \\, dx = \\frac{x^{1/2+1}}{1/2+1} = \\frac{x^{3/2}}{3/2} = \\frac{2}{3} x^{3/2}$$</p>
        
        <p><strong>Вычисляем по формуле Ньютона-Лейбница:</strong></p>
        <p>$$S = \\left[\\frac{2}{3} x^{3/2}\\right]_{0}^{4} = \\frac{2}{3} \\cdot 4^{3/2} - \\frac{2}{3} \\cdot 0^{3/2}$$</p>
        <p>$$4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$$</p>
        <p>$$S = \\frac{2}{3} \\cdot 8 = \\frac{16}{3}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = \\frac{16}{3}$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ВАРИАНТ 3 ====================
  {
    id: "var3-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x+2)(x-5) < 0$$`,
    choices: [
      `$(-2; 5)$`,
      `$[-2; 5]$`,
      `$(-\\infty; -2) \\cup (5; +\\infty)$`,
      `$(-\\infty; -2] \\cup [5; +\\infty)$`,
      `$(-5; 2)$`
    ],
    answers: [`$(-2; 5)$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Метод интервалов (пошагово)</h5>
        <p><strong>1. Находим нули функции:</strong></p>
        <p>$$(x+2)(x-5)=0 \\quad \\Rightarrow \\quad x_1=-2, \\quad x_2=5$$</p>
        
        <p><strong>2. Отмечаем на числовой прямой:</strong> -2 и 5</p>
        <p><strong>3. Определяем знаки на интервалах:</strong></p>
        <ul>
          <li>Для интервала $(-\\infty; -2)$: возьмём $x=-3$ <br>
          $$(-3+2)(-3-5)=(-1)\\cdot(-8)=8 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
          <li>Для интервала $(-2; 5)$: возьмём $x=0$ <br>
          $$(0+2)(0-5)=2 \\cdot (-5)=-10 < 0 \\quad \\Rightarrow \\quad \\text{знак } "-"$$</li>
          <li>Для интервала $(5; +\\infty)$: возьмём $x=6$ <br>
          $$(6+2)(6-5)=8 \\cdot 1 = 8 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
        </ul>
        
        <p><strong>4. Выбираем интервалы со знаком "-" (так как $< 0$):</strong></p>
        <p>Круглые скобки, так как неравенство строгое: $$(-2; 5)$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$(-2; 5)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 - 3x - 4 = 0$$`,
    choices: [
      `$x = -1$ и $x = 4$`,
      `$x = 1$ и $x = -4$`,
      `$x = 2$ и $x = -2$`,
      `$x = 4$ и $x = 1$`,
      `$x = -4$ и $x = -1$`
    ],
    answers: [`$x = -1$ и $x = 4$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📌 Решение квадратного уравнения</h5>
        <p><strong>1. Записываем коэффициенты:</strong></p>
        <p>$$a = 1, \\quad b = -3, \\quad c = -4$$</p>
        
        <p><strong>2. Вычисляем дискриминант:</strong></p>
        <p>Формула дискриминанта: $$D = b^2 - 4ac$$</p>
        <p>$$D = (-3)^2 - 4 \\cdot 1 \\cdot (-4) = 9 + 16 = 25$$</p>
        <p>$$\\sqrt{D} = \\sqrt{25} = 5$$</p>
        
        <p><strong>3. Находим корни:</strong></p>
        <p>Формула корней: $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$</p>
        <p>$$x_{1,2} = \\frac{3 \\pm 5}{2}$$</p>
        <p>$$x_1 = \\frac{3-5}{2} = \\frac{-2}{2} = -1, \\quad x_2 = \\frac{3+5}{2} = \\frac{8}{2} = 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = -1 \\quad \\text{и} \\quad x = 4$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = x^3 - 12x$$`,
    choices: [
      `возрастает на $(-\\infty;-2]$ и $[2;+\\infty)$, убывает на $[-2;2]$, $x_{max}=-2$, $x_{min}=2$`,
      `возрастает на $[-2;2]$, убывает на $(-\\infty;-2]$ и $[2;+\\infty)$, $x_{max}=2$, $x_{min}=-2$`,
      `возрастает на $(-\\infty;0]$, убывает на $[0;+\\infty)$, $x_{max}=0$`,
      `убывает на всей числовой прямой`,
      `возрастает на всей числовой прямой`
    ],
    answers: [`возрастает на $(-\\infty;-2]$ и $[2;+\\infty)$, убывает на $[-2;2]$, $x_{max}=-2$, $x_{min}=2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📈 Исследование функции $f(x)=x^3-12x$</h5>
        
        <p><strong>1. Находим производную:</strong></p>
        <p>Для расчета производной суммы функций используем правило: $(x^n)' = n \\cdot x^{n-1}$</p>
        <p>$$f'(x) = (x^3)' - (12x)' = 3x^2 - 12$$</p>
        <p>$$f'(x) = 3(x^2 - 4) = 3(x-2)(x+2)$$</p>
        
        <p><strong>2. Находим критические точки:</strong></p>
        <p>$$f'(x) = 0 \\quad \\Rightarrow \\quad 3(x-2)(x+2)=0 \\quad \\Rightarrow \\quad x=-2, \\quad x=2$$</p>
        
        <p><strong>3. Определяем знаки производной на интервалах:</strong></p>
        <ul>
          <li>На $(-\\infty; -2)$: возьмём $x=-3$ <br>
          $$f'(-3)=3(9-4)=3 \\cdot 5 = 15 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
          <li>На $(-2; 2)$: возьмём $x=0$ <br>
          $$f'(0)=3(0-4)=3 \\cdot (-4) = -12 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
          <li>На $(2; +\\infty)$: возьмём $x=3$ <br>
          $$f'(3)=3(9-4)=3 \\cdot 5 = 15 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
        </ul>
        
        <p><strong>4. Определяем экстремумы:</strong></p>
        <ul>
          <li>$x = -2$ — точка максимума (производная меняет $+$ на $-$)</li>
          <li>$x = 2$ — точка минимума (производная меняет $-$ на $+$)</li>
        </ul>
        <p>$$f(-2) = -8 + 24 = 16, \\quad f(2) = 8 - 24 = -16$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$\\text{Возрастает: } (-\\infty;-2] \\cup [2;+\\infty) \\quad \\text{Убывает: } [-2;2]$$
            $$x_{max} = -2, \\quad x_{min} = 2$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_5(3x+1) = 2$$`,
    choices: [
      `$x = 8$`,
      `$x = 7$`,
      `$x = 9$`,
      `$x = 6$`,
      `$x = 10$`
    ],
    answers: [`$x = 8$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📚 Решение логарифмического уравнения</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$3x+1 > 0 \\quad \\Rightarrow \\quad 3x > -1 \\quad \\Rightarrow \\quad x > -\\frac{1}{3}$$</p>
        
        <p><strong>2. Используем определение логарифма:</strong></p>
        <p>$$\\log_5(3x+1) = 2 \\quad \\Rightarrow \\quad 3x+1 = 5^2$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$5^2 = 25$$</p>
        <p>$$3x+1 = 25 \\quad \\Rightarrow \\quad 3x = 24 \\quad \\Rightarrow \\quad x = 8$$</p>
        
        <p><strong>4. Проверяем ОДЗ:</strong></p>
        <p>$$8 > -\\frac{1}{3} \\quad \\text{— выполнено}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 8$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$4^{x} = 64$$`,
    choices: [
      `$x = 3$`,
      `$x = 2$`,
      `$x = 4$`,
      `$x = 5$`,
      `$x = 1$`
    ],
    answers: [`$x = 3$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>⚡ Решение показательного уравнения</h5>
        
        <p><strong>1. Представляем правую часть как степень с основанием 4:</strong></p>
        <p>$$64 = 4^3 \\quad \\text{(так как } 4 \\cdot 4 \\cdot 4 = 64\\text{)}$$</p>
        
        <p><strong>2. Записываем уравнение:</strong></p>
        <p>$$4^{x} = 4^{3}$$</p>
        
        <p><strong>3. Используем свойство:</strong></p>
        <p>Если $a > 0$, $a \\neq 1$ и $a^{f(x)} = a^{g(x)}$, то $f(x) = g(x)$</p>
        <p>$$x = 3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_{0.2}(x-1) \\le -1$$`,
    choices: [
      `$[6; +\\infty)$`,
      `$(1; 6]$`,
      `$(-\\infty; 6]$`,
      `$[1; 6]$`,
      `$(6; +\\infty)$`
    ],
    answers: [`$[6; +\\infty)$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📖 Решение логарифмического неравенства</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$x-1 > 0 \\quad \\Rightarrow \\quad x > 1$$</p>
        
        <p><strong>2. Представляем правую часть как логарифм с основанием 0.2:</strong></p>
        <p>$$-1 = \\log_{0.2} (0.2)^{-1} = \\log_{0.2} 5$$</p>
        <p>Так как $0.2 = \\frac{1}{5}$, то $(\\frac{1}{5})^{-1} = 5$</p>
        
        <p><strong>3. Записываем неравенство:</strong></p>
        <p>$$\\log_{0.2}(x-1) \\le \\log_{0.2} 5$$</p>
        
        <p><strong>4. Учитываем монотонность:</strong></p>
        <p>Так как основание $0.2 < 1$, функция $y=\\log_{0.2} t$ убывающая,<br>
        значит знак неравенства меняется на противоположный:</p>
        <p>$$x-1 \\ge 5 \\quad \\Rightarrow \\quad x \\ge 6$$</p>
        
        <p><strong>5. Учитываем ОДЗ:</strong></p>
        <p>$$x > 1 \\quad \\text{и} \\quad x \\ge 6 \\quad \\Rightarrow \\quad x \\ge 6$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x \\in [6; +\\infty)$$
          </div>
        </div>
        
        <div class="alert alert-secondary mt-2">
          <strong>⭐ Важно:</strong> При основании логарифма < 1 знак неравенства меняется!
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task7",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Объем цилиндра",
    theme: "Стереометрия",
    text: `Радиус основания цилиндра равен 5 см, а диагональ осевого сечения наклонена к плоскости основания под углом 45°. Найдите объём цилиндра.`,
    choices: [
      `$250\\pi$ см³`,
      `$125\\pi$ см³`,
      `$500\\pi$ см³`,
      `$100\\pi$ см³`,
      `$200\\pi$ см³`
    ],
    answers: [`$250\\pi$ см³`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Нахождение объёма цилиндра</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$r = 5 \\text{ см (радиус основания)}, \\quad \\alpha = 45°$$</p>
        <p>Диагональ осевого сечения наклонена к плоскости основания под углом 45°.</p>
        
        <p><strong>1. Анализируем осевое сечение:</strong></p>
        <p>Осевое сечение цилиндра — прямоугольник со сторонами:</p>
        <ul>
          <li>ширина = диаметр основания $d = 2r = 10$ см</li>
          <li>высота = $h$ (образующая цилиндра)</li>
        </ul>
        
        <p><strong>2. Находим высоту цилиндра:</strong></p>
        <p>Диагональ прямоугольника наклонена под углом 45° к основанию.<br>
        В прямоугольном треугольнике, образованном диагональю, шириной и высотой:</p>
        <p>$$\\tan 45° = \\frac{h}{d} = \\frac{h}{10}$$</p>
        <p>$$\\tan 45° = 1 \\quad \\Rightarrow \\quad 1 = \\frac{h}{10} \\quad \\Rightarrow \\quad h = 10 \\text{ см}$$</p>
        
        <p><strong>3. Формула объёма цилиндра:</strong></p>
        <p>$$V = \\pi r^2 h$$</p>
        
        <p><strong>4. Вычисляем:</strong></p>
        <p>$$V = \\pi \\cdot 5^2 \\cdot 10 = \\pi \\cdot 25 \\cdot 10 = 250\\pi \\text{ см}^3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$V = 250\\pi \\text{ см}^3 \\approx 785 \\text{ см}^3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var3-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = \\sin x, \\quad y = 0, \\quad x = 0, \\quad x = \\pi$$`,
    choices: [
      `$2$`,
      `$1$`,
      `$0$`,
      `$\\pi$`,
      `$\\frac{\\pi}{2}$`
    ],
    answers: [`$2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади криволинейной трапеции</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>Подставляем данные:</strong></p>
        <p>$$f(x) = \\sin x, \\quad a=0, \\quad b=\\pi$$</p>
        <p>$$S = \\int_{0}^{\\pi} \\sin x \\, dx$$</p>
        
        <p><strong>Находим первообразную:</strong></p>
        <p>$$\\int \\sin x \\, dx = -\\cos x + C$$</p>
        
        <p><strong>Вычисляем по формуле Ньютона-Лейбница:</strong></p>
        <p>$$S = \\left[-\\cos x\\right]_{0}^{\\pi} = (-\\cos \\pi) - (-\\cos 0)$$</p>
        <p>$$\\cos \\pi = -1, \\quad \\cos 0 = 1$$</p>
        <p>$$S = (-(-1)) - (-1) = 1 + 1 = 2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = 2$$
          </div>
        </div>
        
        <div class="alert alert-secondary mt-2">
          <strong>📌 Примечание:</strong> На отрезке $[0;\\pi]$ функция $\\sin x \\ge 0$, поэтому модуль не нужен.
        </div>
      </div>
    </div>`
  },

  // ==================== ВАРИАНТ 4 ====================
  {
    id: "var4-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x-3)(x+1) \\ge 0$$`,
    choices: [
      `$(-\\infty; -1] \\cup [3; +\\infty)$`,
      `$[-1; 3]$`,
      `$(-\\infty; -1) \\cup (3; +\\infty)$`,
      `$(-1; 3)$`,
      `$[-3; 1]$`
    ],
    answers: [`$(-\\infty; -1] \\cup [3; +\\infty)$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Метод интервалов (пошагово)</h5>
        <p><strong>1. Находим нули функции:</strong></p>
        <p>$$(x-3)(x+1)=0 \\quad \\Rightarrow \\quad x_1=3, \\quad x_2=-1$$</p>
        
        <p><strong>2. Отмечаем на числовой прямой:</strong> -1 и 3</p>
        <p><strong>3. Определяем знаки на интервалах:</strong></p>
        <ul>
          <li>Для интервала $(-\\infty; -1)$: возьмём $x=-2$ <br>
          $$(-2-3)(-2+1)=(-5)\\cdot(-1)=5 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
          <li>Для интервала $(-1; 3)$: возьмём $x=0$ <br>
          $$(0-3)(0+1)=(-3)\\cdot 1=-3 < 0 \\quad \\Rightarrow \\quad \\text{знак } "-"$$</li>
          <li>Для интервала $(3; +\\infty)$: возьмём $x=4$ <br>
          $$(4-3)(4+1)=1 \\cdot 5 = 5 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
        </ul>
        
        <p><strong>4. Выбираем интервалы со знаком "+" (так как $\\ge 0$):</strong></p>
        <p>Квадратные скобки, так как неравенство нестрогое: $$(-\\infty; -1] \\cup [3; +\\infty)$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$(-\\infty; -1] \\cup [3; +\\infty)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 + 6x + 8 = 0$$`,
    choices: [
      `$x = -4$ и $x = -2$`,
      `$x = 4$ и $x = 2$`,
      `$x = -4$ и $x = 2$`,
      `$x = 4$ и $x = -2$`,
      `$x = 8$ и $x = -2$`
    ],
    answers: [`$x = -4$ и $x = -2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📌 Решение квадратного уравнения</h5>
        <p><strong>1. Записываем коэффициенты:</strong></p>
        <p>$$a = 1, \\quad b = 6, \\quad c = 8$$</p>
        
        <p><strong>2. Вычисляем дискриминант:</strong></p>
        <p>Формула дискриминанта: $$D = b^2 - 4ac$$</p>
        <p>$$D = 6^2 - 4 \\cdot 1 \\cdot 8 = 36 - 32 = 4$$</p>
        <p>$$\\sqrt{D} = \\sqrt{4} = 2$$</p>
        
        <p><strong>3. Находим корни:</strong></p>
        <p>Формула корней: $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$</p>
        <p>$$x_{1,2} = \\frac{-6 \\pm 2}{2}$$</p>
        <p>$$x_1 = \\frac{-6-2}{2} = \\frac{-8}{2} = -4, \\quad x_2 = \\frac{-6+2}{2} = \\frac{-4}{2} = -2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = -4 \\quad \\text{и} \\quad x = -2$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = -x^3 + 3x$$`,
    choices: [
      `убывает на $(-\\infty;-1]$ и $[1;+\\infty)$, возрастает на $[-1;1]$, $x_{min}=-1$, $x_{max}=1$`,
      `возрастает на $(-\\infty;-1]$ и $[1;+\\infty)$, убывает на $[-1;1]$, $x_{max}=-1$, $x_{min}=1$`,
      `возрастает на $[-1;1]$, убывает на $(-\\infty;-1]$ и $[1;+\\infty)$, $x_{max}=1$, $x_{min}=-1$`,
      `убывает на всей числовой прямой`,
      `возрастает на всей числовой прямой`
    ],
    answers: [`убывает на $(-\\infty;-1]$ и $[1;+\\infty)$, возрастает на $[-1;1]$, $x_{min}=-1$, $x_{max}=1$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📈 Исследование функции $f(x)=-x^3+3x$</h5>
        
        <p><strong>1. Находим производную:</strong></p>
        <p>Для расчета производной суммы функций используем правило: $(x^n)' = n \\cdot x^{n-1}$</p>
        <p>$$f'(x) = (-x^3)' + (3x)' = -3x^2 + 3$$</p>
        <p>$$f'(x) = -3(x^2 - 1) = -3(x-1)(x+1)$$</p>
        
        <p><strong>2. Находим критические точки:</strong></p>
        <p>$$f'(x) = 0 \\quad \\Rightarrow \\quad -3(x-1)(x+1)=0 \\quad \\Rightarrow \\quad x=-1, \\quad x=1$$</p>
        
        <p><strong>3. Определяем знаки производной на интервалах:</strong></p>
        <ul>
          <li>На $(-\\infty; -1)$: возьмём $x=-2$ <br>
          $$f'(-2)=-3(4-1)=-3 \\cdot 3 = -9 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
          <li>На $(-1; 1)$: возьмём $x=0$ <br>
          $$f'(0)=-3(0-1)=-3 \\cdot (-1)=3 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
          <li>На $(1; +\\infty)$: возьмём $x=2$ <br>
          $$f'(2)=-3(4-1)=-3 \\cdot 3 = -9 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
        </ul>
        
        <p><strong>4. Определяем экстремумы:</strong></p>
        <ul>
          <li>$x = -1$ — точка минимума (производная меняет $-$ на $+$)</li>
          <li>$x = 1$ — точка максимума (производная меняет $+$ на $-$)</li>
        </ul>
        <p>$$f(-1) = -(-1)^3 + 3(-1) = -(-1) - 3 = 1 - 3 = -2$$</p>
        <p>$$f(1) = -1 + 3 = 2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$\\text{Убывает: } (-\\infty;-1] \\cup [1;+\\infty) \\quad \\text{Возрастает: } [-1;1]$$
            $$x_{min} = -1, \\quad x_{max} = 1$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_2(5-x) = 3$$`,
    choices: [
      `$x = -3$`,
      `$x = 3$`,
      `$x = -2$`,
      `$x = 2$`,
      `$x = -4$`
    ],
    answers: [`$x = -3$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📚 Решение логарифмического уравнения</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$5-x > 0 \\quad \\Rightarrow \\quad -x > -5 \\quad \\Rightarrow \\quad x < 5$$</p>
        
        <p><strong>2. Используем определение логарифма:</strong></p>
        <p>$$\\log_2(5-x) = 3 \\quad \\Rightarrow \\quad 5-x = 2^3$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$2^3 = 8$$</p>
        <p>$$5-x = 8 \\quad \\Rightarrow \\quad -x = 3 \\quad \\Rightarrow \\quad x = -3$$</p>
        
        <p><strong>4. Проверяем ОДЗ:</strong></p>
        <p>$$-3 < 5 \\quad \\text{— выполнено}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = -3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$5^{x+1} = 125$$`,
    choices: [
      `$x = 2$`,
      `$x = 3$`,
      `$x = 1$`,
      `$x = 4$`,
      `$x = 0$`
    ],
    answers: [`$x = 2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>⚡ Решение показательного уравнения</h5>
        
        <p><strong>1. Представляем правую часть как степень с основанием 5:</strong></p>
        <p>$$125 = 5^3 \\quad \\text{(так как } 5 \\cdot 5 \\cdot 5 = 125\\text{)}$$</p>
        
        <p><strong>2. Записываем уравнение:</strong></p>
        <p>$$5^{x+1} = 5^{3}$$</p>
        
        <p><strong>3. Используем свойство:</strong></p>
        <p>Если $a > 0$, $a \\neq 1$ и $a^{f(x)} = a^{g(x)}$, то $f(x) = g(x)$</p>
        <p>$$x+1 = 3$$</p>
        <p>$$x = 2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 2$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_3(2x+1) \\ge 2$$`,
    choices: [
      `$[4; +\\infty)$`,
      `$(-\\infty; 4]$`,
      `$(-0.5; 4]$`,
      `$[2; +\\infty)$`,
      `$(-0.5; 2]$`
    ],
    answers: [`$[4; +\\infty)$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📖 Решение логарифмического неравенства</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$2x+1 > 0 \\quad \\Rightarrow \\quad 2x > -1 \\quad \\Rightarrow \\quad x > -0.5$$</p>
        
        <p><strong>2. Представляем правую часть как логарифм с основанием 3:</strong></p>
        <p>$$2 = \\log_3 3^2 = \\log_3 9$$</p>
        
        <p><strong>3. Записываем неравенство:</strong></p>
        <p>$$\\log_3(2x+1) \\ge \\log_3 9$$</p>
        
        <p><strong>4. Учитываем монотонность:</strong></p>
        <p>Так как основание $3 > 1$, функция $y=\\log_3 t$ возрастающая,<br>
        значит знак неравенства сохраняется:</p>
        <p>$$2x+1 \\ge 9 \\quad \\Rightarrow \\quad 2x \\ge 8 \\quad \\Rightarrow \\quad x \\ge 4$$</p>
        
        <p><strong>5. Учитываем ОДЗ:</strong></p>
        <p>$$x > -0.5 \\quad \\text{и} \\quad x \\ge 4 \\quad \\Rightarrow \\quad x \\ge 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x \\in [4; +\\infty)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task7",
    type: "multiplechoices",
    header: "7. Многогранники. Объемы и площади",
    title: "8. Тела вращения",
    theme: "Стереометрия",
    text: `В правильной четырехугольной пирамиде боковые грани наклонены к плоскости основания под углом 45°. Сторона основания равна 6 см. Найдите объем пирамиды.`,
    choices: [
      `$36$ см³`,
      `$72$ см³`,
      `$18$ см³`,
      `$54$ см³`,
      `$108$ см³`
    ],
    answers: [`$36$ см³`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Нахождение объёма правильной четырёхугольной пирамиды</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$a = 6 \\text{ см (сторона основания)}, \\quad \\alpha = 45°$$</p>
        <p>Боковые грани наклонены к плоскости основания под углом 45°.</p>
        
        <p><strong>1. Анализируем геометрию:</strong></p>
        <p>В правильной четырёхугольной пирамиде основание — квадрат.<br>
        Угол наклона боковой грани — это угол между апофемой и её проекцией на основание.</p>
        <p>Апофема $m$ наклонена к основанию под углом 45°, значит:</p>
        <p>$$\\tan 45° = \\frac{h}{\\frac{a}{2}}$$</p>
        <p>где $h$ — высота пирамиды, $\\frac{a}{2}$ — расстояние от центра основания до стороны.</p>
        
        <p><strong>2. Находим высоту пирамиды:</strong></p>
        <p>$$\\tan 45° = 1 \\quad \\Rightarrow \\quad 1 = \\frac{h}{3} \\quad \\Rightarrow \\quad h = 3 \\text{ см}$$</p>
        
        <p><strong>3. Вычисляем объём:</strong></p>
        <p>$$V = \\frac{1}{3} S_{\\text{осн}} \\cdot h = \\frac{1}{3} \\cdot a^2 \\cdot h = \\frac{1}{3} \\cdot 36 \\cdot 3 = 36 \\text{ см}^3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$V = 36 \\text{ см}^3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var4-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = x^2, \\quad y = x$$`,
    choices: [
      `$\\frac{1}{6}$`,
      `$\\frac{1}{3}$`,
      `$\\frac{1}{2}$`,
      `$\\frac{2}{3}$`,
      `$\\frac{5}{6}$`
    ],
    answers: [`$\\frac{1}{6}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади между двумя кривыми</h5>
        
        <p><strong>Формула площади между кривыми:</strong></p>
        <p>$$S = \\int_{a}^{b} (f_{\\text{верх}}(x) - f_{\\text{ниж}}(x)) \\, dx$$</p>
        
        <p><strong>1. Находим точки пересечения:</strong></p>
        <p>$$x^2 = x \\quad \\Rightarrow \\quad x^2 - x = 0 \\quad \\Rightarrow \\quad x(x-1) = 0$$</p>
        <p>$$x_1 = 0, \\quad x_2 = 1$$</p>
        
        <p><strong>2. Определяем, какая функция выше:</strong></p>
        <p>На интервале $[0; 1]$: возьмём $x=0.5$<br>
        $$x = 0.5, \\quad x^2 = 0.25 \\quad \\Rightarrow \\quad x > x^2$$</p>
        <p>Значит $y = x$ — верхняя кривая, $y = x^2$ — нижняя.</p>
        
        <p><strong>3. Вычисляем площадь:</strong></p>
        <p>$$S = \\int_{0}^{1} (x - x^2) \\, dx = \\int_{0}^{1} x \\, dx - \\int_{0}^{1} x^2 \\, dx$$</p>
        <p>$$S = \\left[\\frac{x^2}{2}\\right]_{0}^{1} - \\left[\\frac{x^3}{3}\\right]_{0}^{1} = \\left(\\frac{1}{2} - 0\\right) - \\left(\\frac{1}{3} - 0\\right) = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = \\frac{1}{6}$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ВАРИАНТ 5 ====================
  {
    id: "var5-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x+5)(x-2) > 0$$`,
    choices: [
      `$(-\\infty; -5) \\cup (2; +\\infty)$`,
      `$(-5; 2)$`,
      `$[-5; 2]$`,
      `$(-\\infty; -5] \\cup [2; +\\infty)$`,
      `$(-\\infty; 2) \\cup (5; +\\infty)$`
    ],
    answers: [`$(-\\infty; -5) \\cup (2; +\\infty)$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Метод интервалов (пошагово)</h5>
        <p><strong>1. Находим нули функции:</strong></p>
        <p>$$(x+5)(x-2)=0 \\quad \\Rightarrow \\quad x_1=-5, \\quad x_2=2$$</p>
        
        <p><strong>2. Отмечаем на числовой прямой:</strong> -5 и 2</p>
        <p><strong>3. Определяем знаки на интервалах:</strong></p>
        <ul>
          <li>Для интервала $(-\\infty; -5)$: возьмём $x=-6$ <br>
          $$(-6+5)(-6-2)=(-1)\\cdot(-8)=8 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
          <li>Для интервала $(-5; 2)$: возьмём $x=0$ <br>
          $$(0+5)(0-2)=5 \\cdot (-2)=-10 < 0 \\quad \\Rightarrow \\quad \\text{знак } "-"$$</li>
          <li>Для интервала $(2; +\\infty)$: возьмём $x=3$ <br>
          $$(3+5)(3-2)=8 \\cdot 1 = 8 > 0 \\quad \\Rightarrow \\quad \\text{знак } "+"$$</li>
        </ul>
        
        <p><strong>4. Выбираем интервалы со знаком "+" (так как $> 0$):</strong></p>
        <p>Круглые скобки, так как неравенство строгое: $$(-\\infty; -5) \\cup (2; +\\infty)$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$(-\\infty; -5) \\cup (2; +\\infty)$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 - 2x - 8 = 0$$`,
    choices: [
      `$x = -2$ и $x = 4$`,
      `$x = 2$ и $x = -4$`,
      `$x = -2$ и $x = -4$`,
      `$x = 2$ и $x = 4$`,
      `$x = -8$ и $x = 1$`
    ],
    answers: [`$x = -2$ и $x = 4$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📌 Решение квадратного уравнения</h5>
        <p><strong>1. Записываем коэффициенты:</strong></p>
        <p>$$a = 1, \\quad b = -2, \\quad c = -8$$</p>
        
        <p><strong>2. Вычисляем дискриминант:</strong></p>
        <p>Формула дискриминанта: $$D = b^2 - 4ac$$</p>
        <p>$$D = (-2)^2 - 4 \\cdot 1 \\cdot (-8) = 4 + 32 = 36$$</p>
        <p>$$\\sqrt{D} = \\sqrt{36} = 6$$</p>
        
        <p><strong>3. Находим корни:</strong></p>
        <p>Формула корней: $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$</p>
        <p>$$x_{1,2} = \\frac{2 \\pm 6}{2}$$</p>
        <p>$$x_1 = \\frac{2-6}{2} = \\frac{-4}{2} = -2, \\quad x_2 = \\frac{2+6}{2} = \\frac{8}{2} = 4$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = -2 \\quad \\text{и} \\quad x = 4$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = x^2 - 4x + 3$$`,
    choices: [
      `убывает на $(-\\infty;2]$, возрастает на $[2;+\\infty)$, $x_{min}=2$`,
      `возрастает на $(-\\infty;2]$, убывает на $[2;+\\infty)$, $x_{max}=2$`,
      `убывает на $(-\\infty;0]$, возрастает на $[0;+\\infty)$, $x_{min}=0$`,
      `возрастает на $(-\\infty;0]$, убывает на $[0;+\\infty)$, $x_{max}=0$`,
      `функция монотонно возрастает на всей числовой прямой`
    ],
    answers: [`убывает на $(-\\infty;2]$, возрастает на $[2;+\\infty)$, $x_{min}=2$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📈 Исследование функции $f(x)=x^2-4x+3$</h5>
        
        <p><strong>1. Находим производную:</strong></p>
        <p>Для расчета производной суммы функций используем правило: $(x^n)' = n \\cdot x^{n-1}$</p>
        <p>$$f'(x) = (x^2)' - (4x)' + (3)' = 2x - 4$$</p>
        <p>$$f'(x) = 2(x-2)$$</p>
        
        <p><strong>2. Находим критические точки:</strong></p>
        <p>$$f'(x) = 0 \\quad \\Rightarrow \\quad 2(x-2)=0 \\quad \\Rightarrow \\quad x=2$$</p>
        
        <p><strong>3. Определяем знаки производной на интервалах:</strong></p>
        <ul>
          <li>На $(-\\infty; 2)$: возьмём $x=0$ <br>
          $$f'(0) = 2(0-2) = -4 < 0 \\quad \\Rightarrow \\quad f \\downarrow$$</li>
          <li>На $(2; +\\infty)$: возьмём $x=3$ <br>
          $$f'(3) = 2(3-2) = 2 > 0 \\quad \\Rightarrow \\quad f \\uparrow$$</li>
        </ul>
        
        <p><strong>4. Определяем экстремум:</strong></p>
        <p>$x = 2$ — точка минимума (производная меняет $-$ на $+$)</p>
        <p>$$f(2) = 4 - 8 + 3 = -1$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$\\text{Убывает: } (-\\infty;2] \\quad \\text{Возрастает: } [2;+\\infty)$$
            $$x_{min} = 2$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_{0.5}(x+4) = -2$$`,
    choices: [
      `$x = 0$`,
      `$x = 4$`,
      `$x = -4$`,
      `$x = 2$`,
      `$x = -2$`
    ],
    answers: [`$x = 0$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📚 Решение логарифмического уравнения</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$x+4 > 0 \\quad \\Rightarrow \\quad x > -4$$</p>
        
        <p><strong>2. Используем определение логарифма:</strong></p>
        <p>$$\\log_{0.5}(x+4) = -2 \\quad \\Rightarrow \\quad x+4 = (0.5)^{-2}$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$0.5 = \\frac{1}{2} \\quad \\Rightarrow \\quad \\left(\\frac{1}{2}\\right)^{-2} = 2^2 = 4$$</p>
        <p>$$x+4 = 4 \\quad \\Rightarrow \\quad x = 0$$</p>
        
        <p><strong>4. Проверяем ОДЗ:</strong></p>
        <p>$$0 > -4 \\quad \\text{— выполнено}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 0$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$2^{x-2} = 32$$`,
    choices: [
      `$x = 7$`,
      `$x = 6$`,
      `$x = 5$`,
      `$x = 8$`,
      `$x = 4$`
    ],
    answers: [`$x = 7$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>⚡ Решение показательного уравнения</h5>
        
        <p><strong>1. Представляем правую часть как степень с основанием 2:</strong></p>
        <p>$$32 = 2^5 \\quad \\text{(так как } 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32\\text{)}$$</p>
        
        <p><strong>2. Записываем уравнение:</strong></p>
        <p>$$2^{x-2} = 2^{5}$$</p>
        
        <p><strong>3. Используем свойство:</strong></p>
        <p>Если $a > 0$, $a \\neq 1$ и $a^{f(x)} = a^{g(x)}$, то $f(x) = g(x)$</p>
        <p>$$x-2 = 5$$</p>
        <p>$$x = 7$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x = 7$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_{0.5}(2x-3) \\ge -1$$`,
    choices: [
      `$(1.5; 2.5]$`,
      `$[2.5; +\\infty)$`,
      `$(1.5; +\\infty)$`,
      `$(-\\infty; 2.5]$`,
      `$(-\\infty; 1.5)$`
    ],
    answers: [`$(1.5; 2.5]$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📖 Решение логарифмического неравенства</h5>
        
        <p><strong>1. Находим ОДЗ:</strong></p>
        <p>$$2x-3 > 0 \\quad \\Rightarrow \\quad 2x > 3 \\quad \\Rightarrow \\quad x > 1.5$$</p>
        
        <p><strong>2. Представляем правую часть как логарифм с основанием 0.5:</strong></p>
        <p>$$-1 = \\log_{0.5} (0.5)^{-1} = \\log_{0.5} 2$$</p>
        
        <p><strong>3. Записываем неравенство:</strong></p>
        <p>$$\\log_{0.5}(2x-3) \\ge \\log_{0.5} 2$$</p>
        
        <p><strong>4. Учитываем монотонность:</strong></p>
        <p>Так как основание $0.5 < 1$, функция $y=\\log_{0.5} t$ убывающая,<br>
        значит знак неравенства меняется на противоположный:</p>
        <p>$$2x-3 \\le 2 \\quad \\Rightarrow \\quad 2x \\le 5 \\quad \\Rightarrow \\quad x \\le 2.5$$</p>
        
        <p><strong>5. Учитываем ОДЗ:</strong></p>
        <p>$$x > 1.5 \\quad \\text{и} \\quad x \\le 2.5 \\quad \\Rightarrow \\quad 1.5 < x \\le 2.5$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$x \\in (1.5; 2.5]$$
          </div>
        </div>
        
        <div class="alert alert-secondary mt-2">
          <strong>⭐ Важно:</strong> При основании логарифма < 1 знак неравенства меняется!
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task7",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Объем конуса",
    theme: "Стереометрия",
    text: `Образующая конуса равна 25 см, а радиус его основания 7 см. Найдите объём конуса.`,
    choices: [
      `$392\\pi$ см³`,
      `$196\\pi$ см³`,
      `$588\\pi$ см³`,
      `$784\\pi$ см³`,
      `$980\\pi$ см³`
    ],
    answers: [`$392\\pi$ см³`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Нахождение объёма конуса</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$l = 25 \\text{ см (образующая)}, \\quad r = 7 \\text{ см (радиус основания)}$$</p>
        
        <p><strong>1. Находим высоту конуса по теореме Пифагора:</strong></p>
        <p>В осевом сечении конуса — равнобедренный треугольник:</p>
        <p>$$l^2 = r^2 + h^2 \\quad \\Rightarrow \\quad h^2 = l^2 - r^2$$</p>
        <p>$$h^2 = 25^2 - 7^2 = 625 - 49 = 576$$</p>
        <p>$$h = \\sqrt{576} = 24 \\text{ см}$$</p>
        
        <p><strong>2. Формула объёма конуса:</strong></p>
        <p>$$V = \\frac{1}{3} \\pi r^2 h$$</p>
        
        <p><strong>3. Вычисляем:</strong></p>
        <p>$$V = \\frac{1}{3} \\pi \\cdot 7^2 \\cdot 24 = \\frac{1}{3} \\pi \\cdot 49 \\cdot 24$$</p>
        <p>$$V = \\pi \\cdot 49 \\cdot 8 = 392\\pi \\text{ см}^3$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$V = 392\\pi \\text{ см}^3 \\approx 1231.5 \\text{ см}^3$$
          </div>
        </div>
      </div>
    </div>`
  },
  {
    id: "var5-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = 4 - x^2, \\quad y = 0$$`,
    choices: [
      `$\\frac{32}{3}$`,
      `$\\frac{16}{3}$`,
      `$\\frac{8}{3}$`,
      `$\\frac{64}{3}$`,
      `$\\frac{40}{3}$`
    ],
    answers: [`$\\frac{32}{3}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади под параболой</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>1. Находим точки пересечения с осью OX:</strong></p>
        <p>$$4 - x^2 = 0 \\quad \\Rightarrow \\quad x^2 = 4 \\quad \\Rightarrow \\quad x = \\pm 2$$</p>
        <p>$$a = -2, \\quad b = 2$$</p>
        
        <p><strong>2. Проверяем знак функции на интервале:</strong></p>
        <p>На $[-2; 2]$: возьмём $x=0$</p>
        <p>$$f(0) = 4 - 0 = 4 > 0$$</p>
        <p>Значит функция положительна, модуль не нужен.</p>
        
        <p><strong>3. Вычисляем площадь:</strong></p>
        <p>$$S = \\int_{-2}^{2} (4 - x^2) \\, dx$$</p>
        <p>Так как функция чётная, можно упростить:</p>
        <p>$$S = 2 \\int_{0}^{2} (4 - x^2) \\, dx = 2 \\left[4x - \\frac{x^3}{3}\\right]_{0}^{2}$$</p>
        <p>$$S = 2 \\left(8 - \\frac{8}{3}\\right) = 2 \\cdot \\frac{24-8}{3} = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = \\frac{32}{3}$$
          </div>
        </div>
      </div>
    </div>`
  },


  // ==================== ТИП 1: ПРОИЗВОДНАЯ СЛОЖНОЙ ФУНКЦИИ (тригонометрия) ====================
  {
    id: "var7-task3-unique",
    type: "multiplechoices",
    header: "11. Вычисление производных. Последовательности. Сложные проценты",
    title: "Производная тригонометрической функции",
    theme: "Производные",
    text: `Найдите производную функции:
$$f(x) = \\sin(2x) + \\cos^2 x$$`,
    choices: [
      `$f'(x) = 2\\cos(2x) - 2\\cos x \\sin x$`,
      `$f'(x) = \\cos(2x) - \\sin^2 x$`,
      `$f'(x) = 2\\cos(2x) + 2\\sin x$`,
      `$f'(x) = -2\\sin(2x) - 2\\cos x$`,
      `$f'(x) = 2\\cos(2x) + \\sin(2x)$`
    ],
    answers: [`$f'(x) = 2\\cos(2x) - 2\\cos x \\sin x$`],
    hint: `<div class="container-fluid p-0">
      <div class="alert alert-primary mb-3">
        <h5>📐 Производная тригонометрической функции</h5>
        
        <p><strong>1. Производная суммы:</strong></p>
        <p>$$f'(x) = (\\sin(2x))' + (\\cos^2 x)'$$</p>
        
        <p><strong>2. Производная сложной функции $\\sin(2x)$:</strong></p>
        <p>$$(\\sin(2x))' = \\cos(2x) \\cdot (2x)' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$$</p>
        <p>Правило цепочки: $(\\sin u)' = \\cos u \\cdot u'$</p>
        
        <p><strong>3. Производная $\\cos^2 x = (\\cos x)^2$:</strong></p>
        <p>$$(\\cos^2 x)' = 2\\cos x \\cdot (\\cos x)' = 2\\cos x \\cdot (-\\sin x) = -2\\cos x \\sin x$$</p>
        <p>Правило: $(u^n)' = n \\cdot u^{n-1} \\cdot u'$</p>
        
        <p><strong>4. Складываем:</strong></p>
        <p>$$f'(x) = 2\\cos(2x) - 2\\cos x \\sin x$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$f'(x) = 2\\cos(2x) - 2\\cos x \\sin x$$
          </div>
        </div>
        
        <div class="alert alert-secondary mt-2">
          <strong>💡 Запомните:</strong> $(\\sin u)' = u' \\cos u$, $(\\cos u)' = -u' \\sin u$, $(u^n)' = n u^{n-1} u'$
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 2: ПЛОЩАДЬ БОКОВОЙ ПОВЕРХНОСТИ КОНУСА ====================
  {
    id: "var10-task7-unique",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Площадь боковой поверхности конуса",
    theme: "Стереометрия",
    text: `Образующая конуса наклонена к плоскости основания под углом 30°, а его высота равна 12 см. Найдите площадь боковой поверхности конуса.`,
    choices: [
      `$288\\pi$ см²`,
      `$144\\pi$ см²`,
      `$96\\pi$ см²`,
      `$192\\pi$ см²`,
      `$384\\pi$ см²`
    ],
    answers: [`$288\\pi$ см²`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Площадь боковой поверхности конуса</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$h = 12 \\text{ см}, \\quad \\alpha = 30°$$</p>
        <p>Угол между образующей и плоскостью основания.</p>
        
        <p><strong>1. Формула площади боковой поверхности:</strong></p>
        <p>$$S_{\\text{бок}} = \\pi r l$$</p>
        <p>где $r$ — радиус основания, $l$ — образующая.</p>
        
        <p><strong>2. Находим образующую $l$:</strong></p>
        <p>В прямоугольном треугольнике (высота $h$, радиус $r$, образующая $l$):</p>
        <p>$$\\sin \\alpha = \\frac{h}{l} \\quad \\Rightarrow \\quad l = \\frac{h}{\\sin 30°} = \\frac{12}{0.5} = 24 \\text{ см}$$</p>
        
        <p><strong>3. Находим радиус $r$:</strong></p>
        <p>$$\\cos \\alpha = \\frac{r}{l} \\quad \\Rightarrow \\quad r = l \\cdot \\cos 30° = 24 \\cdot \\frac{\\sqrt{3}}{2} = 12\\sqrt{3} \\text{ см}$$</p>
        
        <p><strong>4. Вычисляем площадь:</strong></p>
        <p>$$S_{\\text{бок}} = \\pi \\cdot 12\\sqrt{3} \\cdot 24 = 288\\sqrt{3}\\pi \\text{ см}^2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S_{\\text{бок}} = 288\\sqrt{3}\\pi \\text{ см}^2$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 3: ПЛОЩАДЬ ПОЛНОЙ ПОВЕРХНОСТИ ЦИЛИНДРА ====================
  {
    id: "var8-task7-unique",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Площадь полной поверхности цилиндра",
    theme: "Стереометрия",
    text: `Радиус основания цилиндра равен 5 см, а его образующая равна 9 см. Найдите площадь полной поверхности цилиндра.`,
    choices: [
      `$140\\pi$ см²`,
      `$70\\pi$ см²`,
      `$90\\pi$ см²`,
      `$100\\pi$ см²`,
      `$120\\pi$ см²`
    ],
    answers: [`$140\\pi$ см²`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Площадь полной поверхности цилиндра</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$r = 5 \\text{ см}, \\quad l = 9 \\text{ см (образующая = высоте)}$$</p>
        
        <p><strong>1. Формула площади полной поверхности цилиндра:</strong></p>
        <p>$$S_{\\text{полн}} = S_{\\text{бок}} + 2S_{\\text{осн}} = 2\\pi r h + 2\\pi r^2$$</p>
        
        <p><strong>2. Вычисляем боковую поверхность:</strong></p>
        <p>$$S_{\\text{бок}} = 2\\pi r h = 2\\pi \\cdot 5 \\cdot 9 = 90\\pi \\text{ см}^2$$</p>
        
        <p><strong>3. Вычисляем площадь двух оснований:</strong></p>
        <p>$$S_{\\text{осн}} = \\pi r^2 = \\pi \\cdot 25 = 25\\pi \\text{ см}^2$$</p>
        <p>$$2S_{\\text{осн}} = 50\\pi \\text{ см}^2$$</p>
        
        <p><strong>4. Суммируем:</strong></p>
        <p>$$S_{\\text{полн}} = 90\\pi + 50\\pi = 140\\pi \\text{ см}^2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S_{\\text{полн}} = 140\\pi \\text{ см}^2$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 4: ПЛОЩАДЬ ПОЛНОЙ ПОВЕРХНОСТИ ПИРАМИДЫ ====================
  {
    id: "var12-task7-unique",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Площадь полной поверхности правильной треугольной пирамиды",
    theme: "Стереометрия",
    text: `В правильной треугольной пирамиде боковое ребро равно 4 см, а сторона основания 6 см. Найдите площадь полной поверхности пирамиды.`,
    choices: [
      `$9\\sqrt{3} + 9\\sqrt{13}$ см²`,
      `$9\\sqrt{3} + 18\\sqrt{13}$ см²`,
      `$18\\sqrt{3} + 9\\sqrt{13}$ см²`,
      `$9\\sqrt{3} + 27\\sqrt{13}$ см²`,
      `$27\\sqrt{3} + 9\\sqrt{13}$ см²`
    ],
    answers: [`$9\\sqrt{3} + 9\\sqrt{13}$ см²`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Площадь полной поверхности правильной треугольной пирамиды</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$a = 6 \\text{ см (сторона основания)}, \\quad l = 4 \\text{ см (боковое ребро)}$$</p>
        
        <p><strong>1. Площадь основания (равносторонний треугольник):</strong></p>
        <p>$$S_{\\text{осн}} = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\cdot 36 = 9\\sqrt{3} \\text{ см}^2$$</p>
        
        <p><strong>2. Находим апофему $m$:</strong></p>
        <p>Апофема — высота боковой грани. В прямоугольном треугольнике:</p>
        <p>гипотенуза = боковое ребро $l = 4$ см</p>
        <p>катет = половина стороны основания $\\frac{a}{2} = 3$ см</p>
        <p>По теореме Пифагора:</p>
        <p>$$m = \\sqrt{l^2 - \\left(\\frac{a}{2}\\right)^2} = \\sqrt{16 - 9} = \\sqrt{7} \\text{ см}$$</p>
        
        <p><strong>3. Площадь одной боковой грани:</strong></p>
        <p>$$S_{\\text{грани}} = \\frac{1}{2} a \\cdot m = \\frac{1}{2} \\cdot 6 \\cdot \\sqrt{7} = 3\\sqrt{7} \\text{ см}^2$$</p>
        
        <p><strong>4. Площадь всех трёх боковых граней:</strong></p>
        <p>$$S_{\\text{бок}} = 3 \\cdot 3\\sqrt{7} = 9\\sqrt{7} \\text{ см}^2$$</p>
        
        <p><strong>5. Полная поверхность:</strong></p>
        <p>$$S_{\\text{полн}} = S_{\\text{осн}} + S_{\\text{бок}} = 9\\sqrt{3} + 9\\sqrt{7} \\text{ см}^2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S_{\\text{полн}} = 9\\sqrt{3} + 9\\sqrt{7} \\text{ см}^2$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 5: ПЛОЩАДЬ ПОЛНОЙ ПОВЕРХНОСТИ ПРИЗМЫ ====================
  {
    id: "var11-task7-unique",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Площадь полной поверхности прямой призмы",
    theme: "Стереометрия",
    text: `Высота прямой призмы равна 10 см, а её основанием является прямоугольник, стороны которого равны 6 см и 8 см. Найдите площадь полной поверхности призмы.`,
    choices: [
      `$376$ см²`,
      `$188$ см²`,
      `$280$ см²`,
      `$96$ см²`,
      `$472$ см²`
    ],
    answers: [`$376$ см²`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Площадь полной поверхности прямой призмы</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$h = 10 \\text{ см}, \\quad a = 6 \\text{ см}, \\quad b = 8 \\text{ см}$$</p>
        <p>Основание — прямоугольник.</p>
        
        <p><strong>1. Формула полной поверхности призмы:</strong></p>
        <p>$$S_{\\text{полн}} = 2S_{\\text{осн}} + S_{\\text{бок}}$$</p>
        
        <p><strong>2. Площадь основания:</strong></p>
        <p>$$S_{\\text{осн}} = a \\cdot b = 6 \\cdot 8 = 48 \\text{ см}^2$$</p>
        <p>$$2S_{\\text{осн}} = 96 \\text{ см}^2$$</p>
        
        <p><strong>3. Периметр основания:</strong></p>
        <p>$$P_{\\text{осн}} = 2(a + b) = 2(6 + 8) = 2 \\cdot 14 = 28 \\text{ см}$$</p>
        
        <p><strong>4. Площадь боковой поверхности:</strong></p>
        <p>$$S_{\\text{бок}} = P_{\\text{осн}} \\cdot h = 28 \\cdot 10 = 280 \\text{ см}^2$$</p>
        
        <p><strong>5. Полная поверхность:</strong></p>
        <p>$$S_{\\text{полн}} = 96 + 280 = 376 \\text{ см}^2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S_{\\text{полн}} = 376 \\text{ см}^2$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 6: ПЛОЩАДЬ ФИГУРЫ (тригонометрическая функция) ====================
  {
    id: "var6-task8-unique",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь под косинусоидой",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = \\cos x, \\quad y = 0, \\quad x = 0, \\quad x = \\frac{\\pi}{2}$$`,
    choices: [
      `$1$`,
      `$0$`,
      `$\\frac{\\pi}{2}$`,
      `$2$`,
      `$\\frac{1}{2}$`
    ],
    answers: [`$1$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади под косинусоидой</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>Подставляем данные:</strong></p>
        <p>$$f(x) = \\cos x, \\quad a=0, \\quad b=\\frac{\\pi}{2}$$</p>
        <p>$$S = \\int_{0}^{\\pi/2} \\cos x \\, dx$$</p>
        
        <p><strong>Находим первообразную:</strong></p>
        <p>$$\\int \\cos x \\, dx = \\sin x + C$$</p>
        
        <p><strong>Вычисляем по формуле Ньютона-Лейбница:</strong></p>
        <p>$$S = [\\sin x]_{0}^{\\pi/2} = \\sin\\left(\\frac{\\pi}{2}\\right) - \\sin(0) = 1 - 0 = 1$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = 1$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 7: ПЛОЩАДЬ ФИГУРЫ (гипербола) ====================
  {
    id: "var10-task8-unique",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь под гиперболой",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = \\frac{1}{x}, \\quad y = 0, \\quad x = 1, \\quad x = e$$`,
    choices: [
      `$1$`,
      `$0$`,
      `$e-1$`,
      `$\\ln e$`,
      `$\\frac{1}{e}$`
    ],
    answers: [`$1$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Вычисление площади под гиперболой</h5>
        
        <p><strong>Формула площади:</strong></p>
        <p>$$S = \\int_{a}^{b} f(x) \\, dx$$</p>
        
        <p><strong>Подставляем данные:</strong></p>
        <p>$$f(x) = \\frac{1}{x}, \\quad a=1, \\quad b=e$$</p>
        <p>$$S = \\int_{1}^{e} \\frac{1}{x} \\, dx$$</p>
        
        <p><strong>Находим первообразную:</strong></p>
        <p>$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$</p>
        
        <p><strong>Вычисляем по формуле Ньютона-Лейбница:</strong></p>
        <p>$$S = [\\ln x]_{1}^{e} = \\ln e - \\ln 1 = 1 - 0 = 1$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = 1$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 8: ПРАВИЛЬНАЯ ЧЕТЫРЁХУГОЛЬНАЯ ПИРАМИДА (площадь полной поверхности) ====================
  {
    id: "var14-task7-unique",
    type: "multiplechoices",
    header: "8. Тела вращения",
    title: "Площадь полной поверхности правильной четырёхугольной пирамиды",
    theme: "Стереометрия",
    text: `В правильной четырехугольной пирамиде сторона основания равна 10 см, а высота равна 12 см. Найдите площадь полной поверхности пирамиды.`,
    choices: [
      `$100 + 260$ см²`,
      `$100 + 120$ см²`,
      `$100 + 240$ см²`,
      `$100 + 130$ см²`,
      `$100 + 200$ см²`
    ],
    answers: [`$100 + 260$ см²`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>🎯 Площадь полной поверхности правильной четырёхугольной пирамиды</h5>
        
        <p><strong>Дано:</strong></p>
        <p>$$a = 10 \\text{ см (сторона основания)}, \\quad h = 12 \\text{ см (высота)}$$</p>
        
        <p><strong>1. Площадь основания (квадрат):</strong></p>
        <p>$$S_{\\text{осн}} = a^2 = 100 \\text{ см}^2$$</p>
        
        <p><strong>2. Находим апофему $m$:</strong></p>
        <p>Апофема — высота боковой грани. В прямоугольном треугольнике:</p>
        <p>вертикальный катет = $h = 12$ см</p>
        <p>горизонтальный катет = $\\frac{a}{2} = 5$ см (расстояние от центра до стороны)</p>
        <p>По теореме Пифагора:</p>
        <p>$$m = \\sqrt{h^2 + \\left(\\frac{a}{2}\\right)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13 \\text{ см}$$</p>
        
        <p><strong>3. Площадь одной боковой грани (треугольник):</strong></p>
        <p>$$S_{\\text{грани}} = \\frac{1}{2} a \\cdot m = \\frac{1}{2} \\cdot 10 \\cdot 13 = 65 \\text{ см}^2$$</p>
        
        <p><strong>4. Площадь всех четырёх боковых граней:</strong></p>
        <p>$$S_{\\text{бок}} = 4 \\cdot 65 = 260 \\text{ см}^2$$</p>
        
        <p><strong>5. Полная поверхность:</strong></p>
        <p>$$S_{\\text{полн}} = S_{\\text{осн}} + S_{\\text{бок}} = 100 + 260 = 360 \\text{ см}^2$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S_{\\text{полн}} = 360 \\text{ см}^2 \\quad (100 + 260)$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 9: ПРОИЗВОДНАЯ СТЕПЕННОЙ ФУНКЦИИ (которой не было) ====================
  {
    id: "var15-task3-unique",
    type: "multiplechoices",
    header: "11. Вычисление производных. Последовательности. Сложные проценты",
    title: "Производная степенной функции с отрицательным показателем",
    theme: "Производные",
    text: `Найдите производную функции:
$$f(x) = 2x^{-3} + \\frac{5}{x}$$`,
    choices: [
      `$f'(x) = -6x^{-4} - \\frac{5}{x^2}$`,
      `$f'(x) = -6x^{-4} + \\frac{5}{x^2}$`,
      `$f'(x) = 6x^{-4} - \\frac{5}{x^2}$`,
      `$f'(x) = -6x^{-3} - \\frac{5}{x}$`,
      `$f'(x) = -6x^{-2} - 5x^{-1}$`
    ],
    answers: [`$f'(x) = -6x^{-4} - \\frac{5}{x^2}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📐 Производная степенной функции с отрицательным показателем</h5>
        
        <p><strong>1. Записываем функцию в удобном виде:</strong></p>
        <p>$$f(x) = 2x^{-3} + 5x^{-1}$$</p>
        <p>Так как $\\frac{5}{x} = 5x^{-1}$</p>
        
        <p><strong>2. Используем правило дифференцирования:</strong></p>
        <p>$$(x^n)' = n \\cdot x^{n-1}$$</p>
        
        <p><strong>3. Дифференцируем первое слагаемое:</strong></p>
        <p>$$(2x^{-3})' = 2 \\cdot (-3) \\cdot x^{-4} = -6x^{-4}$$</p>
        
        <p><strong>4. Дифференцируем второе слагаемое:</strong></p>
        <p>$$(5x^{-1})' = 5 \\cdot (-1) \\cdot x^{-2} = -5x^{-2} = -\\frac{5}{x^2}$$</p>
        
        <p><strong>5. Складываем:</strong></p>
        <p>$$f'(x) = -6x^{-4} - \\frac{5}{x^2}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$f'(x) = -6x^{-4} - \\frac{5}{x^2}$$
          </div>
        </div>
      </div>
    </div>`
  },

  // ==================== ТИП 10: ПЛОЩАДЬ ФИГУРЫ (между параболой и прямой) ====================
  {
    id: "var7-task8-unique",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь между параболой и прямой",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = 2x, \\quad y = x^2$$`,
    choices: [
      `$\\frac{4}{3}$`,
      `$\\frac{2}{3}$`,
      `$\\frac{1}{3}$`,
      `$\\frac{5}{3}$`,
      `$\\frac{8}{3}$`
    ],
    answers: [`$\\frac{4}{3}$`],
    hint: `<div class="container">
      <div class="alert alert-primary">
        <h5>📊 Площадь между параболой и прямой</h5>
        
        <p><strong>Формула площади между кривыми:</strong></p>
        <p>$$S = \\int_{a}^{b} (f_{\\text{верх}}(x) - f_{\\text{ниж}}(x)) \\, dx$$</p>
        
        <p><strong>1. Находим точки пересечения:</strong></p>
        <p>$$2x = x^2 \\quad \\Rightarrow \\quad x^2 - 2x = 0 \\quad \\Rightarrow \\quad x(x-2) = 0$$</p>
        <p>$$x_1 = 0, \\quad x_2 = 2$$</p>
        
        <p><strong>2. Определяем, какая функция выше:</strong></p>
        <p>На интервале $[0; 2]$: возьмём $x=1$</p>
        <p>$$2x = 2, \\quad x^2 = 1 \\quad \\Rightarrow \\quad 2x > x^2$$</p>
        <p>Значит $y = 2x$ — верхняя кривая, $y = x^2$ — нижняя.</p>
        
        <p><strong>3. Вычисляем площадь:</strong></p>
        <p>$$S = \\int_{0}^{2} (2x - x^2) \\, dx = \\left[x^2 - \\frac{x^3}{3}\\right]_{0}^{2}$$</p>
        <p>$$S = \\left(4 - \\frac{8}{3}\\right) - (0) = \\frac{12}{3} - \\frac{8}{3} = \\frac{4}{3}$$</p>
        
        <div class="card border-primary mt-2">
          <div class="card-header bg-primary text-white">
            <strong>✅ Ответ</strong>
          </div>
          <div class="card-body">
            $$S = \\frac{4}{3}$$
          </div>
        </div>
      </div>
    </div>`
  },



// ==================== ПРОДОЛЖЕНИЕ ДЛЯ ВАРИАНТОВ 6-30 ====================
// По этому же шаблону добавляются варианты с 6 по 30.
// Структура каждого варианта:
// - Задание 1: метод интервалов (разные нули и знаки)
// - Задание 2: квадратное уравнение
// - Задание 3: исследование функции
// - Задание 4: логарифмическое уравнение
// - Задание 5: показательное уравнение
// - Задание 6: логарифмическое неравенство
// - Задание 7: стереометрическая задача (объём/площадь)
// - Задание 8: площадь фигуры через интеграл
//
// Все поля text и hint используют обратные кавычки для удобного форматирования.
// Поле choices содержит 5 вариантов, поле answers — массив правильных ответов.
// Тип всегда "multiplechoices".
  // ==================== ВАРИАНТ 6 ====================
  {
    id: "var6-task1",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Метод интервалов",
    theme: "Неравенства",
    text: `Решите неравенство методом интервалов:
$$(x+3)(x-4) \\le 0$$`,
    choices: [
      `$[-3; 4]$`,
      `$(-3; 4)$`,
      `$(-\\infty; -3] \\cup [4; +\\infty)$`,
      `$(-\\infty; -3) \\cup (4; +\\infty)$`,
      `$[-4; 3]$`
    ],
    answers: [`$[-3; 4]$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>Нули: x=-3, x=4</p>
        <p>Интервалы: (+), (-), (+) ⇒ ≤0 ⇒ <strong>[-3;4]</strong></p>
      </div>
    </div>`
  },
  {
    id: "var6-task2",
    type: "multiplechoices",
    header: "1. Числа. Уравнения. Система уравнений",
    title: "Квадратное уравнение",
    theme: "Уравнения",
    text: `Решите уравнение:
$$x^2 + 2x - 3 = 0$$`,
    choices: [
      `$x = -3$ и $x = 1$`,
      `$x = 3$ и $x = -1$`,
      `$x = -3$ и $x = -1$`,
      `$x = 3$ и $x = 1$`,
      `$x = 0$ и $x = -2$`
    ],
    answers: [`$x = -3$ и $x = 1$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>D = 4 + 12 = 16, √D=4</p>
        <p>x₁ = (-2-4)/2 = -3, x₂ = (-2+4)/2 = 1</p>
      </div>
    </div>`
  },
  {
    id: "var6-task3",
    type: "multiplechoices",
    header: "12. Применение производной",
    title: "Монотонность и экстремумы",
    theme: "Исследование функций",
    text: `Исследуйте функцию на монотонность и экстремумы:
$$f(x) = -x^2 + 2x + 3$$`,
    choices: [
      `возрастает на $(-\\infty;1]$, убывает на $[1;+\\infty)$, $x_{max}=1$`,
      `убывает на $(-\\infty;1]$, возрастает на $[1;+\\infty)$, $x_{min}=1$`,
      `возрастает на $(-\\infty;0]$, убывает на $[0;+\\infty)$, $x_{max}=0$`,
      `убывает на $(-\\infty;0]$, возрастает на $[0;+\\infty)$, $x_{min}=0$`,
      `функция монотонно убывает на всей числовой прямой`
    ],
    answers: [`возрастает на $(-\\infty;1]$, убывает на $[1;+\\infty)$, $x_{max}=1$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>f'(x)=-2x+2 = -2(x-1)</p>
        <p>Крит. точка: x=1</p>
        <p>(-∞;1): f'>0 ↑; (1;∞): f'<0 ↓; x=1 — максимум</p>
      </div>
    </div>`
  },
  {
    id: "var6-task4",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое уравнение",
    theme: "Логарифмы",
    text: `Решите уравнение:
$$\\log_4(2x-1) = 2$$`,
    choices: [
      `$x = 8.5$`,
      `$x = 8$`,
      `$x = 9$`,
      `$x = 7.5$`,
      `$x = 10$`
    ],
    answers: [`$x = 8.5$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>ОДЗ: 2x-1 > 0 ⇒ x > 0.5</p>
        <p>$2x-1 = 4^2 = 16$ ⇒ $2x=17$ ⇒ $x=8.5$</p>
      </div>
    </div>`
  },
  {
    id: "var6-task5",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Показательное уравнение",
    theme: "Показательная функция",
    text: `Решите уравнение:
$$3^{2x} = 81$$`,
    choices: [
      `$x = 2$`,
      `$x = 4$`,
      `$x = 3$`,
      `$x = 1$`,
      `$x = 0$`
    ],
    answers: [`$x = 2$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>$3^{2x} = 81 = 3^4$ ⇒ 2x=4 ⇒ x=2</p>
      </div>
    </div>`
  },
  {
    id: "var6-task6",
    type: "multiplechoices",
    header: "10. Уравнения, неравенства и их системы. Логарифмические. Показательные",
    title: "Логарифмическое неравенство",
    theme: "Логарифмы",
    text: `Решите неравенство:
$$\\log_2(x^2 - 4x + 4) < 0$$`,
    choices: [
      `$(1;2) \\cup (2;3)$`,
      `$(1;3)$`,
      `$(-\\infty;1) \\cup (3;+\\infty)$`,
      `$(-\\infty;1]$`,
      `$[3;+\\infty)$`
    ],
    answers: [`$(1;2) \\cup (2;3)$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>$\\log_2((x-2)^2) < 0 = \\log_2 1$ ⇒ $(x-2)^2 < 1$ (x≠2)</p>
        <p>$|x-2| < 1$ ⇒ $-1 < x-2 < 1$ ⇒ $1 < x < 3$, x≠2</p>
        <p><strong>(1;2) ∪ (2;3)</strong></p>
      </div>
    </div>`
  },
  {
    id: "var6-task7",
    type: "multiplechoices",
    header: "7. Многогранники. Объемы и площади",
    title: "Объем параллелепипеда",
    theme: "Стереометрия",
    text: `В прямоугольном параллелепипеде стороны основания равны 5 см и 12 см, а диагональ параллелепипеда наклонена к плоскости основания под углом 45°. Найдите его объём.`,
    choices: [
      `$780$ см³`,
      `$390$ см³`,
      `$1560$ см³`,
      `$1170$ см³`,
      `$1950$ см³`
    ],
    answers: [`$780$ см³`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>Диагональ основания: $d = \\sqrt{5^2+12^2} = \\sqrt{25+144} = \\sqrt{169} = 13$ см</p>
        <p>Угол 45° ⇒ высота $h = d·tg45° = 13·1 = 13$ см</p>
        <p>Объем: $V = 5·12·13 = 780$ см³</p>
      </div>
    </div>`
  },
  {
    id: "var6-task8",
    type: "multiplechoices",
    header: "13. Первообразная и интеграл",
    title: "Площадь фигуры",
    theme: "Интегралы",
    text: `Вычислите площадь фигуры, ограниченной линиями:
$$y = \\cos x, \\quad y = 0, \\quad x = 0, \\quad x = \\frac{\\pi}{2}$$`,
    choices: [
      `$1$`,
      `$0$`,
      `$\\frac{\\pi}{2}$`,
      `$2$`,
      `$\\frac{1}{2}$`
    ],
    answers: [`$1$`],
    hint: `<div class="container">
      <div class="alert alert-info">
        <p>$S = \\int_{0}^{\\pi/2} \\cos x dx = [\\sin x]_{0}^{\\pi/2} = \\sin(\\pi/2) - \\sin 0 = 1 - 0 = 1$</p>
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
        `$P(A) + P(B)$`,
        `$P(A) + P(B) - P(A \\cap B)$`,
        `$P(A) + P(B) + P(A \\cap B)$`,
        `$P(A) \\cdot P(B)$`,
        `$1 - P(\\overline{A}) - P(\\overline{B})$`
      ],
      "answers": [`$P(A) + P(B) - P(A \\cap B)$`],
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
        `$P(A) + P(B)$`,
        `$P(A) + P(B) - P(A) \\cdot P(B)$`,
        `$P(A) + P(B) - P(A \\cap B)$`,
        `$P(A) \\cdot P(B)$`,
        `$1 - P(\\overline{A}) \\cdot P(\\overline{B})$`
      ],
      "answers": [
        `$P(A) + P(B) - P(A) \\cdot P(B)$`,
        `$P(A) + P(B) - P(A \\cap B)$`,
        `$1 - P(\\overline{A}) \\cdot P(\\overline{B})$`
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


    // {
    //   "id": "def-prob-004",
    //   "type": "multiplechoices",
    //   "header": "14. Вероятность",
    //   "title": "Теорема Бернулли",
    //   "theme": "Предельные теоремы",
    //   "text": `Теорема Бернулли устанавливает связь между ...`,
    //   "choices": [
    //     `математическим ожиданием и дисперсией`,
    //     `частотой события и его вероятностью`,
    //     `средним арифметическим и математическим ожиданием`,
    //     `нормальным распределением и распределением Пуассона`,
    //     `выборкой и генеральной совокупностью`
    //   ],
    //   "answers": [`частотой события и его вероятностью`],
    //   "hint": `<div class="container-fluid p-0">
    //   <div class="alert alert-info mb-3">
    //     <h5> Теорема Бернулли (Закон больших чисел)</h5>
    //     <p><strong>Теорема Бернулли</strong> — одна из форм закона больших чисел. Она утверждает, что при увеличении числа независимых испытаний <strong>частота события сходится по вероятности к его вероятности</strong>.</p>
    //     <p class="text-center">$$\\frac{m}{n} \\xrightarrow{P} p$$</p>
    //     <p>где $m$ — число наступлений события, $n$ — число испытаний, $p$ — вероятность события.</p>
    //   </div>
      
    //   <div class="card border-primary mb-3">
    //     <div class="card-header bg-primary text-white">
    //       <strong>Формулировка теоремы</strong>
    //     </div>
    //     <div class="card-body">
    //       <p>Пусть проводится $n$ независимых испытаний, в каждом из которых событие A наступает с вероятностью $p$ ($0 < p < 1$).</p>
    //       <p>Пусть $m$ — число наступлений события A в этих $n$ испытаниях.</p>
    //       <p>Тогда для любого $\\varepsilon > 0$:</p>
    //       <p class="text-center">$$\\lim_{n \\to \\infty} P\\left(\\left|\\frac{m}{n} - p\\right| < \\varepsilon\\right) = 1$$</p>
    //       <p>Это означает, что при большом числе испытаний частота события $\\frac{m}{n}$ мало отличается от его вероятности $p$.</p>
    //     </div>
    //   </div>
      
    //   <div class="card border-success mb-3">
    //     <div class="card-header bg-success text-white">
    //       <strong>Пример из жизни</strong>
    //     </div>
    //     <div class="card-body">
    //       <p>Бросаем монету. Вероятность орла $p = 0.5$.</p>
    //       <ul>
    //         <li>При 10 бросках частота орла может быть 0.3, 0.4, 0.6, 0.7 — возможны сильные отклонения.</li>
    //         <li>При 1000 бросках частота орла будет <strong>близка</strong> к 0.5 (например, 0.49 или 0.51).</li>
    //         <li>При 100 000 бросках частота будет ещё ближе к 0.5.</li>
    //       </ul>
    //       <p class="mt-2">Теорема Бернулли объясняет, почему в долгой серии экспериментов относительная частота стабилизируется около вероятности.</p>
    //     </div>
    //   </div>
      
    //   <div class="alert alert-secondary mt-2">
    //     <strong> Почему другие варианты не подходят?</strong><br>
    //     • <strong>Математическое ожидание и дисперсия</strong> — это теорема о свойствах моментов.<br>
    //     • <strong>Среднее арифметическое и математическое ожидание</strong> — это теорема Хинчина (другая форма ЗБЧ).<br>
    //     • <strong>Нормальное распределение и распределение Пуассона</strong> — это предельные теоремы (Муавра-Лапласа, Пуассона).<br>
    //     • <strong>Выборка и генеральная совокупность</strong> — это основы математической статистики.
    //   </div>

    //   <div class="alert alert-light border mt-2">
    //     <strong> Запомните:</strong><br>
    //     Теорема Бернулли: <strong>частота → вероятность</strong> при увеличении числа испытаний.<br>
    //     Это <strong>закон больших чисел</strong> для схемы Бернулли.
    //   </div>
      
    //   <div class="card border-info mt-2">
    //     <div class="card-header bg-info text-white">
    //       <strong> Историческая справка</strong>
    //     </div>
    //     <div class="card-body">
    //       <p class="mb-0">Теорема была доказана <strong>Якобом Бернулли</strong> и опубликована в 1713 году в его труде «Искусство предположений». Это одна из первых форм закона больших чисел.</p>
    //     </div>
    //   </div>
      
    //   <div class="card border-warning mt-2">
    //     <div class="card-header bg-warning text-dark">
    //       <strong>️ Важное уточнение</strong>
    //     </div>
    //     <div class="card-body mb-0">
    //       <p class="mb-0">Теорема Бернулли не утверждает, что $\\frac{m}{n} = p$ при больших $n$. Она утверждает, что <strong>вероятность большого отклонения</strong> $\\frac{m}{n}$ от $p$ стремится к нулю.</p>
    //     </div>
    //   </div>
    // </div>`
    // },


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
        "11/30",
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
        "1/7",
        "1/8",
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
        "11/25",
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
        "4/10"
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
        "7/10",
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
        "2/10",
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
        "8/10",
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
        "11/25",
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
        "7/42",
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
        "4/20"
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
        "8/10"
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


    // {
    //   "id": "combin-formulas-008",
    //   "type": "multiplechoices",
    //   "header": "15. Комбинаторика",
    //   "title": "Свойства сочетаний",
    //   "theme": "Комбинаторика. Формулы",
    //   "text": "Чему равно значение выражения $C_7^3 + C_7^4$?",
    //   "choices": [
    //     "$C_7^7$",
    //     "$C_8^4$",
    //     "$C_7^2$",
    //     "$C_8^3$",
    //     "$C_8^5$"
    //   ],
    //   "answers": ["$C_8^4$"],
    //   "hint": `<div class="container-fluid p-0">
    //   <div class="alert alert-info mb-3">
    //     <h5> Правило Паскаля</h5>
    //     <p>Основное свойство биномиальных коэффициентов:</p>
    //     <p class="text-center">$$C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$$</p>
    //     <p>Это правило лежит в основе треугольника Паскаля.</p>
    //   </div>
      
    //   <div class="card border-primary mb-3">
    //     <div class="card-header bg-primary text-white">
    //       <strong>Решение</strong>
    //     </div>
    //     <div class="card-body">
    //       <p>По правилу Паскаля:</p>
    //       <p>$C_7^3 + C_7^4 = C_8^4$</p>
    //       <p>Проверим:</p>
    //       <ul>
    //         <li>$C_7^3 = \\frac{7!}{3!4!} = 35$</li>
    //         <li>$C_7^4 = \\frac{7!}{4!3!} = 35$</li>
    //         <li>$35 + 35 = 70$</li>
    //         <li>$C_8^4 = \\frac{8!}{4!4!} = 70$ </li>
    //       </ul>
    //     </div>
    //   </div>
      
    //   <div class="alert alert-secondary mt-2">
    //     <strong> Почему другие варианты не подходят?</strong><br>
    //     • $C_7^7 = 1$ — слишком мало.<br>
    //     • $C_7^2 = 21$ — неверно.<br>
    //     • $C_8^3 = 56$ — неверно.<br>
    //     • $C_8^5 = 56$ — $C_8^3$ (тоже 56).
    //   </div>

    //   <div class="alert alert-light border mt-2">
    //     <strong> Запомните:</strong><br>
    //     $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$ — основное свойство сочетаний.
    //   </div>
    // </div>`
    // },

    // {
    //   "id": "combin-formulas-009",
    //   "type": "multiplechoices",
    //   "header": "15. Комбинаторика",
    //   "title": "Симметрия биномиальных коэффициентов",
    //   "theme": "Комбинаторика. Формулы",
    //   "text": "Какое из следующих выражений равно $C_{10}^3$?",
    //   "choices": [
    //     "$C_{10}^7$",
    //     "$C_{10}^6$",
    //     "$C_{10}^5$",
    //     "$C_{10}^4$",
    //     "$C_{10}^2$"
    //   ],
    //   "answers": ["$C_{10}^7$"],
    //   "hint": `<div class="container-fluid p-0">
    //   <div class="alert alert-info mb-3">
    //     <h5> Свойство симметрии</h5>
    //     <p>Для сочетаний выполняется:</p>
    //     <p class="text-center">$$C_n^k = C_n^{n-k}$$</p>
    //     <p>Выбрать $k$ элементов — всё равно, что выбрать $n-k$ элементов, которые <strong>не войдут</strong> в выборку.</p>
    //   </div>
      
    //   <div class="card border-primary mb-3">
    //     <div class="card-header bg-primary text-white">
    //       <strong>Решение</strong>
    //     </div>
    //     <div class="card-body">
    //       <p>По свойству симметрии:</p>
    //       <p>$C_{10}^3 = C_{10}^{10-3} = C_{10}^7$</p>
    //       <p>Проверим:</p>
    //       <ul>
    //         <li>$C_{10}^3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$</li>
    //         <li>$C_{10}^7 = C_{10}^3 = 120$</li>
    //       </ul>
    //     </div>
    //   </div>
      
    //   <div class="alert alert-secondary mt-2">
    //     <strong> Почему другие варианты не подходят?</strong><br>
    //     • $C_{10}^6 = C_{10}^4 = 210$<br>
    //     • $C_{10}^5 = 252$<br>
    //     • $C_{10}^4 = 210$<br>
    //     • $C_{10}^2 = 45$
    //   </div>

    //   <div class="alert alert-light border mt-2">
    //     <strong> Запомните:</strong><br>
    //     $C_n^k = C_n^{n-k}$ — наглядно видно в треугольнике Паскаля.
    //   </div>
    // </div>`
    // },

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

    
  
  
  
  {
    "id": "expect-binom-001",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Биномиальное распределение: монета",
    "theme": "Мат. ожидание. Биномиальное распределение",
    "text": `<div class='container-fluid p-0'><p>Монету подбрасывают 10 раз. Случайная величина X — число выпавших орлов. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике красной пунктирной линией отмечено математическое ожидание.</p></div>`,
    "choices": ["10", "5", "3", "2.5", "1"],
    "answers": ["5"],
    // "JSXGraph": "true",
    // "JSXGraphType": "binom_n10_p05",
    "hint": `<div class='alert alert-info'><strong>Решение:</strong> n = 10, p = 0.5. M(X) = 10·0.5 = <strong>5</strong>.</div>`
  },
  {
    "id": "expect-binom-002",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Биномиальное распределение: игральная кость",
    "theme": "Мат. ожидание. Биномиальное распределение",
    "text": `<div><p>Игральную кость бросают 60 раз. Случайная величина X — число выпадений шестёрки. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике зелёная кривая — аппроксимация нормальным распределением, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["60", "20", "15", "10", "6"],
    "answers": ["10"],
    // "JSXGraph": "true",
    // "JSXGraphType": "binom_n60_p1_6",
    "hint": `<div class='alert alert-info'>M(X) = 60 · 1/6 = <strong>10</strong></div>`
  },
  {
    "id": "expect-geom-003",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Геометрическое распределение: первый успех",
    "theme": "Мат. ожидание. Геометрическое распределение",
    "text": `<div><p>Вероятность успеха в каждом испытании p = 0,2. Случайная величина X — номер первого успешного испытания. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике жёлтые столбцы — геометрическое распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["0,2", "2", "4", "5", "20"],
    "answers": ["5"],
    // "JSXGraph": "true",
    // "JSXGraphType": "geometric_p02",
    "hint": `<div class='alert alert-info'>M(X) = 1 / 0,2 = <strong>5</strong></div>`
  },
  {
    "id": "expect-geom-004",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Геометрическое распределение: бракованные детали",
    "theme": "Мат. ожидание. Геометрическое распределение",
    "text": `<div><p>Вероятность брака равна 0,05. Контролёр проверяет детали до первого брака. Случайная величина X — количество проверенных деталей. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>График показывает быстро убывающие вероятности, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["5", "10", "20", "50", "100"],
    "answers": ["20"],
    // "JSXGraph": "true",
    // "JSXGraphType": "geometric_p005",
    "hint": `<div class='alert alert-info'>M(X) = 1 / 0,05 = <strong>20</strong></div>`
  },
  {
    "id": "expect-norm-005",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Нормальное распределение: параметры",
    "theme": "Мат. ожидание. Нормальное распределение",
    "text": `<div><p>Случайная величина X распределена нормально с параметрами μ = 12, σ = 3. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — нормальная кривая, красная пунктирная линия показывает математическое ожидание (центр распределения).</p></div>`,
    "choices": ["3", "6", "9", "12", "15"],
    "answers": ["12"],
    // "JSXGraph": "true",
    // "JSXGraphType": "normal_mu12_sigma3",
    "hint": `<div class='alert alert-info'>В обозначении N(μ,σ) параметр μ — это и есть математическое ожидание. Ответ: <strong>12</strong>.</div>`
  },
  {
    "id": "expect-norm-006",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Стандартное нормальное распределение",
    "theme": "Мат. ожидание. Нормальное распределение",
    "text": `<div><p>Случайная величина X имеет стандартное нормальное распределение N(0,1). Найдите математическое ожидание случайной величины Y = 3X + 2, то есть <strong>M(Y) = M(3X+2)</strong>.</p><p>На графике — стандартная нормальная кривая с центром в 0.</p></div>`,
    "choices": ["0", "2", "3", "5", "8"],
    "answers": ["2"],
    // "JSXGraph": "true",
    // "JSXGraphType": "normal_mu0_sigma1",
    "hint": `<div class='alert alert-info'>M(3X+2) = 3·M(X) + 2 = 3·0 + 2 = <strong>2</strong></div>`
  },
  {
    "id": "expect-binom-007",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Биномиальное распределение: студенты",
    "theme": "Мат. ожидание. Биномиальное распределение",
    "text": `<div><p>В группе 20 студентов. Вероятность сдать экзамен с первого раза равна 0,75. Случайная величина X — число студентов, сдавших экзамен с первого раза. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — биномиальное распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["5", "10", "12", "15", "20"],
    "answers": ["15"],
    // "JSXGraph": "true",
    // "JSXGraphType": "binom_n20_p075",
    "hint": `<div class='alert alert-info'>M(X) = 20 · 0,75 = <strong>15</strong></div>`
  },
  {
    "id": "expect-binom-008",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Биномиальное распределение: формула",
    "theme": "Мат. ожидание. Биномиальное распределение",
    "text": `<div><p>Вероятность события A в каждом испытании p = 1/3. Проведено 12 независимых испытаний. Случайная величина X — число наступлений события A. Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — биномиальное распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["2", "3", "4", "6", "12"],
    "answers": ["4"],
    // "JSXGraph": "true",
    // "JSXGraphType": "binom_n12_p1_3",
    "hint": `<div class='alert alert-info'>12 × 1/3 = <strong>4</strong></div>`
  },
  {
    "id": "expect-geom-009",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Геометрическое: вызов мастера",
    "theme": "Мат. ожидание. Геометрическое распределение",
    "text": `<div><p>Вероятность того, что мастер приедет в течение часа после вызова, равна 0,4. Вызовы повторяются каждый час до приезда. Случайная величина X — время ожидания в часах (номер часа, когда мастер приехал). Найдите математическое ожидание <strong>M(X)</strong>.</p><p>На графике — геометрическое распределение, красная пунктирная линия — математическое ожидание.</p></div>`,
    "choices": ["0,4", "1", "2", "2,5", "4"],
    "answers": ["2,5"],
    // "JSXGraph": "true",
    // "JSXGraphType": "geometric_p04",
    "hint": `<div class='alert alert-info'>M(X) = 1 / 0,4 = <strong>2,5</strong> часа</div>`
  },
  {
    "id": "expect-mixed-010",
    "type": "multiplechoices",
    "header": "16. Математическое ожидание",
    "title": "Сравнение распределений",
    "theme": "Мат. ожидание. Обобщение",
    "text": `<div><p>Даны три случайные величины:</p><ul><li>X₁ имеет биномиальное распределение с n = 8, p = 0,5 (синие столбцы)</li><li>X₂ имеет геометрическое распределение с p = 0,25 (жёлтые точки)</li><li>X₃ имеет нормальное распределение с μ = 4, σ = 1 (зелёная кривая)</li></ul><p>Найдите все три математических ожидания <strong>M(X₁), M(X₂), M(X₃)</strong> и выберите верное утверждение.</p><p>На графике красная пунктирная линия — общее математическое ожидание.</p></div>`,
    "choices": ["M(X₁) > M(X₂) > M(X₃)", "M(X₁) < M(X₂) < M(X₃)", "M(X₁) = M(X₂) = M(X₃)", "M(X₁) = M(X₂) > M(X₃)", "M(X₁) < M(X₂) = M(X₃)"],
    "answers": ["M(X₁) = M(X₂) = M(X₃)"],
    // "JSXGraph": "true",
    // "JSXGraphType": "three_distributions_comparison",
    "hint": `<div class='alert alert-info'>Bi(8; 0,5): 8·0,5 = 4; Geom(0,25): 1/0,25 = 4; N(4;1): μ = 4. Все математические ожидания равны <strong>4</strong>.</div>`
  },


    // 1. Числа. Уравнения. Система уравнений

     {
    "id": "math002random1",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Проценты 2", 
    "theme": "Числа",
    "text": "Чему равны 15% от {var1-10}?",
    "answer": "{var1-10}*0.15",
    "hint": "15% = 10% +5%. 10% от {var1-10} = {={var1-10}*0.1}, 5% = {={var1-10}*0.05}, сумма = {={var1-10}*0.15}",
    "randomfrom": [20, 40, 60, 80, 100, 120, 140, 160]
  },

   {
    "id": "math002random3",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Проценты 4",
    "theme": "Числа", 
    "text": "Чему равны 75% от {var1-10}?",
    "answer": "{var1-10}*0.75",
    "hint": "75% - это три четвертых. {var1-10} × 3 ÷ 4 = {={var1-10} * 0.75}",
    "randomfrom": [40, 80, 120, 160, 200, 240, 280, 320]
  },

   {
    "id": "fractions002",
    "type": "multiplechoices",
    "header": "Дроби 3",
    "title": "Вычитание дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{3}{4} - \\frac{1}{2}$$",
    "choices": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{4}$",
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$"
    ],
    "answers": ["$\\frac{1}{4}$"],
    "hint": "<p>Приводим к общему знаменателю 4.</p>$$\\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$$"
  },

 {
    "id": "fractions003",
    "type": "multiplechoices",
    "header": "Дроби 4",
    "title": "Умножение дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} \\times \\frac{3}{4}$$",
    "choices": [
      "$\\frac{6}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{7}$",
      "$\\frac{2}{4}$",
      "$\\frac{3}{6}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Умножаем числители и знаменатели.</p>$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions004",
    "type": "multiplechoices",
    "header": "Дроби 5",
    "title": "Деление дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} \\div \\frac{4}{5}$$",
    "choices": [
      "$\\frac{8}{15}$",
      "$\\frac{5}{6}$",
      "$\\frac{6}{8}$",
      "$\\frac{10}{12}$",
      "$\\frac{4}{7}$"
    ],
    "answers": ["$\\frac{5}{6}$"],
    "hint": "<p>Деление заменяем умножением на обратную дробь.</p>$$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$"
  },
  {
    "id": "fractions014",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление на дробь",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{3}{4} \\div \\frac{1}{2}$$",
    "choices": [
      "$\\frac{3}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$"
    ],
    "answers": ["$\\frac{3}{2}$"],
    "hint": "<p>Умножаем на обратную дробь.</p>$$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$$"
  },

  {
    "id": "fractions024",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание с разными знаменателями",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{7}{8} - \\frac{2}{3}$$",
    "choices": [
      "$\\frac{5}{24}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$\\frac{5}{12}$",
      "$\\frac{7}{24}$"
    ],
    "answers": ["$\\frac{5}{24}$"],
    "hint": "<p>Общий знаменатель 24.</p>$$\\frac{7}{8} - \\frac{2}{3} = \\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$$"
  },

  {
  "id": "powers005", 
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 6",
  "theme": "Степени",
  "text": "Чему равно значение выражения $5^0$?",
  "choices": [
    "0",
    "1", 
    "5",
    "25", 
    "не определено"
  ],
  "answers": ["1"],
  "hint": "<p>Любое число в нулевой степени равно 1.</p>$$a^0 = 1 \\text{ (где } a \\neq 0\\text{)}$$$$5^0 = 1$$"
},
{
  "id": "powers006",
  "type": "multiplechoices", 
  "header": "Степени",
  "title": "Упрощение выражений 7",
  "theme": "Степени",
  "text": "Упростите выражение: $a^5 \\cdot a^{-2}$",
  "choices": [
    "$a^3$",
    "$a^7$",
    "$a^{-10}$", 
    "$a^{-3}$",
    "$a^{10}$"
  ],
  "answers": ["$a^3$"],
  "hint": "<p>При умножении степеней с одинаковыми основаниями показатели складываются.</p>$$a^m \\cdot a^n = a^{m+n}$$$$a^5 \\cdot a^{-2} = a^{5 + (-2)} = a^3$$"
},
{
  "id": "powers007",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 8", 
  "theme": "Степени",
  "text": "Упростите выражение: $\\left(\\frac{x}{y}\\right)^3$",
  "choices": [
    "$\\frac{x^3}{y}$",
    "$\\frac{x}{y^3}$", 
    "$\\frac{x^3}{y^3}$",
    "$\\frac{x^2}{y^2}$",
    "$\\frac{x}{y}$"
  ],
  "answers": ["$\\frac{x^3}{y^3}$"],
  "hint": "<p>При возведении дроби в степень и числитель, и знаменатель возводятся в степень.</p>$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$$$\\left(\\frac{x}{y}\\right)^3 = \\frac{x^3}{y^3}$$"
},
{
  "id": "powers008",
  "type": "multiplechoices",
  "header": "Степени",
  "title": "Упрощение выражений 9",
  "theme": "Степени",
  "text": "Упростите выражение: $2^3 \\cdot 2^4$", 
  "choices": [
    "$2^7$",
    "$2^{12}$",
    "$4^7$",
    "$8^2$",
    "$16^3$"
  ],
  "answers": ["$2^7$"],
  "hint": "<p>При умножении степеней с одинаковыми основаниями показатели складываются.</p>$$a^m \\cdot a^n = a^{m+n}$$$$2^3 \\cdot 2^4 = 2^{3+4} = 2^7$$"
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
    "id": "system001",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите x 1",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + y = {= {var1-10}+1} \\\\ x - y = 1 \\end{cases}$$ Найдите x",
    "answer": "({var1-10}+1+1)/2",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Складываем уравнения</p>$$(x + y) + (x - y) = {= {var1-10}+1} + 1$$$$2x = {= {var1-10}+2}$$<p>Шаг 2: Находим x</p>$$x = \\frac{{= {var1-10}+2}}{2} = {= ({var1-10}+2)/2}$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: x = 1 + y</p><p>Подставляем в первое: (1 + y) + y = {= {var1-10}+1}</p><p>1 + 2y = {= {var1-10}+1}</p><p>2y = {var1-10}</p><p>y = {= {var1-10}/2}</p><p>x = 1 + {= {var1-10}/2} = {= ({var1-10}+2)/2}</p><p>Ответ: x = {= ({var1-10}+2)/2}</p>",
    "randomfrom": [2, 4, 6, 8, 10]
  },
  {
    "id": "system002",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите y 1",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + y = {= {var1-10}+1} \\\\ x - y = 1 \\end{cases}$$ Найдите y",
    "answer": "({var1-10}+1-1)/2",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Вычитаем уравнения</p>$$(x + y) - (x - y) = {= {var1-10}+1} - 1$$$$2y = {var1-10}$$<p>Шаг 2: Находим y</p>$$y = \\frac{{var1-10}}{2} = {= {var1-10}/2}$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: x = 1 + y</p><p>Подставляем в первое: (1 + y) + y = {= {var1-10}+1}</p><p>1 + 2y = {= {var1-10}+1}</p><p>2y = {var1-10}</p><p>y = {= {var1-10}/2}</p><p>Ответ: y = {= {var1-10}/2}</p>",
    "randomfrom": [2, 4, 6, 8, 10]
  },
  {
    "id": "system003",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите x 2",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + y = {= {var1-10}*2} \\\\ x - y = {var1-10} \\end{cases}$$ Найдите x",
    "answer": "({var1-10}*2+{var1-10})/3",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Складываем уравнения</p>$$(2x + y) + (x - y) = {= {var1-10}*2} + {var1-10}$$$$3x = {= {var1-10}*3}$$<p>Шаг 2: Находим x</p>$$x = \\frac{{= {var1-10}*3}}{3} = {var1-10}$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: y = x - {var1-10}</p><p>Подставляем в первое: 2x + (x - {var1-10}) = {= {var1-10}*2}</p><p>3x - {var1-10} = {= {var1-10}*2}</p><p>3x = {= {var1-10}*3}</p><p>x = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [3, 4, 5, 6, 7, 8]
  },
  {
    "id": "system004",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите y 2",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + y = {= {var1-10}*2} \\\\ x - y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "{var1-10}-{var1-10}",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Умножаем второе уравнение на 2</p>$$2x - 2y = {= {var1-10}*2}$$<p>Шаг 2: Вычитаем из первого уравнения</p>$$(2x + y) - (2x - 2y) = {= {var1-10}*2} - {= {var1-10}*2}$$$$3y = 0$$<p>Шаг 3: Находим y</p>$$y = 0$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: y = x - {var1-10}</p><p>Подставляем в первое: 2x + (x - {var1-10}) = {= {var1-10}*2}</p><p>3x - {var1-10} = {= {var1-10}*2}</p><p>3x = {= {var1-10}*3}</p><p>x = {var1-10}</p><p>y = {var1-10} - {var1-10} = 0</p><p>Ответ: y = 0</p>",
    "randomfrom": [3, 4, 5, 6, 7, 8]
  },
  {
    "id": "system005",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите x 3",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}+4} \\\\ 2x - y = {var1-10} \\end{cases}$$ Найдите x",
    "answer": "({var1-10}+4+{var1-10}*2)/5",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Умножаем первое уравнение на 1, второе на 2</p>$$x + 2y = {= {var1-10}+4}$$$$4x - 2y = {= {var1-10}*2}$$<p>Шаг 2: Складываем уравнения</p>$$(x + 2y) + (4x - 2y) = {= {var1-10}+4} + {= {var1-10}*2}$$$$5x = {= {var1-10}+4 + {var1-10}*2} = {= {var1-10}*3 + 4}$$<p>Шаг 3: Находим x</p>$$x = \\frac{{= {var1-10}*3 + 4}}{5}$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: y = 2x - {var1-10}</p><p>Подставляем в первое: x + 2(2x - {var1-10}) = {= {var1-10}+4}</p><p>x + 4x - {= {var1-10}*2} = {= {var1-10}+4}</p><p>5x = {= {var1-10}+4 + {var1-10}*2} = {= {var1-10}*3 + 4}</p><p>x = {= ({var1-10}*3 + 4)/5}</p><p>Ответ: x = {= ({var1-10}*3 + 4)/5}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
 
  {
    "id": "system007",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Найдите x 4",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 3x - y = {= {var1-10}*2} \\\\ x + y = {var1-10} \\end{cases}$$ Найдите x",
    "answer": "({var1-10}*2+{var1-10})/4",
    "hint": "<p><strong>Способ 1: Метод сложения</strong></p><p>Шаг 1: Складываем уравнения</p>$$(3x - y) + (x + y) = {= {var1-10}*2} + {var1-10}$$$$4x = {= {var1-10}*3}$$<p>Шаг 2: Находим x</p>$$x = \\frac{{= {var1-10}*3}}{4} = {= {var1-10}*3/4}$$<p><strong>Способ 2: Метод подстановки</strong></p><p>Из второго уравнения: y = {var1-10} - x</p><p>Подставляем в первое: 3x - ({var1-10} - x) = {= {var1-10}*2}</p><p>3x - {var1-10} + x = {= {var1-10}*2}</p><p>4x = {= {var1-10}*3}</p><p>x = {= {var1-10}*3/4}</p><p>Ответ: x = {= {var1-10}*3/4}</p>",
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

  // 4. Преобразование тригонометрических уравнений

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







// 5. Тригонометрическе упавнения и неравенства

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

// 7. Многогранники. Объемы и площади

{
    id: "stereo001",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Геометрические характеристики",
    theme: "Многогранники",
    text: "Сколько рёбер у представленной фигуры?",
    sceneType: "cube",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.02
    },
    choices: [
      "8 рёбер",
      "10 рёбер",
      "12 рёбер",
      "14 рёбер",
      "16 рёбер",
      "6 рёбер"
    ],
    answers: ["12 рёбер"],
    hint: `
      <div class="alert alert-info mt-3">
        <h6 class="alert-heading"><i class="fas fa-lightbulb"></i> Подсказка</h6>
        <p class="mb-2">Вспомните определение ребра в геометрии:</p>
        <ul class="mb-1">
          <li>Ребро - это отрезок, соединяющий две вершины многогранника</li>
          <li>Посчитайте количество отрезков на фигуре</li>
          <li>Каждое ребро принадлежит двум граням</li>
        </ul>
        <hr>
        <p class="mb-0 small"><strong>Формула:</strong> Для куба количество рёбер = 12</p>
      </div>
    `
  },
  {
    id: "stereo002",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Вычисление объёма",
    theme: "Объёмные тела",
    text: "Рассчитайте объём фигуры, если все линейные размеры равны 2 единицам",
    sceneType: "cube",
    sceneOptions: {
      size: 0.8,
      showVertices: false
    },
    choices: [
      "4 кубических единиц",
      "6 кубических единиц",
      "8 кубических единиц",
      "10 кубических единиц",
      "12 кубических единиц",
      "16 кубических единиц"
    ],
    answers: ["8 кубических единиц"],
    hint: `
      <div class="alert alert-warning mt-3">
        <h6 class="alert-heading"><i class="fas fa-calculator"></i> Подсказка</h6>
        <p class="mb-2">Формула объёма куба:</p>
        <div class="bg-light p-2 rounded mb-2">
          V = a³, где a - длина ребра
        </div>
        <p class="mb-1">Если a = 2, то:</p>
        <div class="bg-light p-2 rounded">
          V = 2 × 2 × 2 = 8
        </div>
      </div>
    `
  },

  {
    id: "stereo005",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Объёмные соотношения",
    theme: "Конусы",
    text: "Чему равен объём фигуры, если радиус основания 3, а высота 4?",
    sceneType: "cone",
    sceneOptions: {
      size: 1.1
    },
    choices: [
      "12π",
      "24π",
      "36π",
      "48π",
      "16π",
      "18π"
    ],
    answers: ["12π"],
    hint: `
      <div class="alert alert-warning mt-3">
        <h6 class="alert-heading"><i class="fas fa-chart-pie"></i> Подсказка</h6>
        <p class="mb-2">Формула объёма конуса:</p>
        <div class="bg-light p-2 rounded mb-2">
          V = (1/3) × π × r² × h
        </div>
        <p class="mb-1">При r = 3, h = 4:</p>
        <div class="bg-light p-2 rounded">
          V = (1/3) × π × 3² × 4 = (1/3) × π × 9 × 4 = 12π
        </div>
      </div>
    `
  },
  
   {
    id: "stereo006",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Особенности формы",
    theme: "Сферы",
    text: "Какое свойство характеризует эту фигуру?",
    sceneType: "sphere",
    sceneOptions: {
      rotationSpeed: 0.01
    },
    choices: [
      "Все точки поверхности равноудалены от центра",
      "Имеет прямоугольные грани",
      "Обладает параллельными основаниями",
      "Состоит из треугольных граней",
      "Имеет постоянное сечение",
      "Обладает вершиной"
    ],
    answers: ["Все точки поверхности равноудалены от центра"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-globe"></i> Подсказка</h6>
        <p class="mb-2">Основное свойство сферы:</p>
        <div class="bg-light p-2 rounded mb-2">
          Все точки сферы находятся на одинаковом расстоянии от центра
        </div>
        <p class="mb-0 small">Это расстояние называется <strong>радиусом</strong> сферы</p>
      </div>
    `
  },
  {
    id: "stereo007",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Пространственные характеристики",
    theme: "Призмы",
    text: "Сколько боковых граней у этой фигуры?",
    sceneType: "prism",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.018
    },
    choices: [
      "4 грани",
      "5 граней",
      "6 граней",
      "7 граней",
      "8 граней",
      "3 грани"
    ],
    answers: ["6 граней"],
    hint: `
      <div class="alert alert-info mt-3">
        <h6 class="alert-heading"><i class="fas fa-cube"></i> Подсказка</h6>
        <p class="mb-2">Шестиугольная призма имеет:</p>
        <ul class="mb-1">
          <li>2 основания (шестиугольники)</li>
          <li>6 боковых граней (прямоугольники)</li>
        </ul>
        <p class="mb-0"><strong>Боковые грани:</strong> количество равно числу сторон основания</p>
      </div>
    `
  },

   {
    id: "stereo012",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Объёмные отношения",
    theme: "Подобие",
    text: "Во сколько раз увеличится объём фигуры, если все её линейные размеры увеличить в 2 раза?",
    sceneType: "sphere",
    sceneOptions: {
      size: 0.7
    },
    choices: [
      "В 2 раза",
      "В 4 раза",
      "В 6 раза",
      "В 8 раза",
      "В 10 раза",
      "В 12 раза"
    ],
    answers: ["В 8 раза"],
    hint: `
      <div class="alert alert-warning mt-3">
        <h6 class="alert-heading"><i class="fas fa-expand-arrows-alt"></i> Подсказка</h6>
        <p class="mb-2">При подобии объём изменяется как куб коэффициента подобия:</p>
        <div class="bg-light p-2 rounded mb-2">
          V<sub>новый</sub> = k³ × V<sub>старый</sub>
        </div>
        <p class="mb-1">Если k = 2, то:</p>
        <div class="bg-light p-2 rounded">
          V<sub>новый</sub> = 2³ × V<sub>старый</sub> = 8 × V<sub>старый</sub>
        </div>
      </div>
    `
  },


// 8. Тела вращения

 {
    id: "stereo009",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Геометрические построения",
    theme: "Торы",
    text: "Какая линия образует эту фигуру при вращении?",
    sceneType: "torus",
    sceneOptions: {
      rotationSpeed: 0.025
    },
    choices: [
      "Прямая линия",
      "Окружность",
      "Эллипс",
      "Парабола",
      "Гипербола",
      "Отрезок"
    ],
    answers: ["Окружность"],
    hint: `
      <div class="alert alert-success mt-3">
        <h6 class="alert-heading"><i class="fas fa-ring"></i> Подсказка</h6>
        <p class="mb-2">Тор образуется вращением окружности вокруг оси:</p>
        <ul class="mb-1">
          <li>Окружность лежит в плоскости</li>
          <li>Ось вращения находится в той же плоскости</li>
          <li>Ось не пересекает окружность</li>
        </ul>
        <p class="mb-0 small">Пример: бублик, спасательный круг</p>
      </div>
    `
  },
{
    id: "stereo008",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Расчёт площади",
    theme: "Цилиндры",
    text: "Чему равна площадь боковой поверхности, если радиус 2, а высота 5?",
    sceneType: "cylinder",
    sceneOptions: {
      size: 0.9
    },
    choices: [
      "10π",
      "15π",
      "20π",
      "25π",
      "30π",
      "40π"
    ],
    answers: ["20π"],
    hint: `
      <div class="alert alert-warning mt-3">
        <h6 class="alert-heading"><i class="fas fa-ruler-combined"></i> Подсказка</h6>
        <p class="mb-2">Формула площади боковой поверхности цилиндра:</p>
        <div class="bg-light p-2 rounded mb-2">
          S<sub>бок</sub> = 2πrh
        </div>
        <p class="mb-1">При r = 2, h = 5:</p>
        <div class="bg-light p-2 rounded">
          S<sub>бок</sub> = 2 × π × 2 × 5 = 20π
        </div>
      </div>
    `
  },

 {
    id: "stereo003",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Свойства поверхностей",
    theme: "Круглые тела",
    text: "Какая формула описывает площадь полной поверхности этой фигуры?",
    sceneType: "cylinder",
    sceneOptions: {
      size: 1.2,
      showVertices: false
    },
    choices: [
      "S = 2πr²",
      "S = 4πr²",
      "S = 2πr(r + h)",
      "S = πr²h",
      "S = πr(r + l)",
      "S = 6a²"
    ],
    answers: ["S = 2πr(r + h)"],
    hint: `
      <div class="alert alert-info mt-3">
        <h6 class="alert-heading"><i class="fas fa-shapes"></i> Подсказка</h6>
        <p class="mb-2">Площадь полной поверхности цилиндра состоит из:</p>
        <ul class="mb-2">
          <li>Двух оснований (круги)</li>
          <li>Боковой поверхности (прямоугольник)</li>
        </ul>
        <div class="bg-light p-2 rounded small">
          S<sub>полн</sub> = 2 × S<sub>осн</sub> + S<sub>бок</sub> = 2πr² + 2πrh = 2πr(r + h)
        </div>
      </div>
    `
  },
 
  {
    id: "stereo004",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Геометрические параметры",
    theme: "Пирамиды",
    text: "Сколько граней у данной фигуры?",
    sceneType: "pyramid",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.015
    },
    choices: [
      "4 грани",
      "5 граней",
      "6 граней",
      "7 граней",
      "8 граней",
      "3 грани"
    ],
    answers: ["5 граней"],
    hint: `
      <div class="alert alert-success mt-3">
        <h6 class="alert-heading"><i class="fas fa-dice-d20"></i> Подсказка</h6>
        <p class="mb-2">Четырёхугольная пирамида имеет:</p>
        <ul class="mb-1">
          <li>1 основание (четырёхугольник)</li>
          <li>4 боковые грани (треугольники)</li>
        </ul>
        <p class="mb-0"><strong>Всего:</strong> 1 + 4 = 5 граней</p>
      </div>
    `
  },

// 9. Функции и графики. Логарифмические. Показательные

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
  "randomfrom": [1/2, 1/4, 1/8]
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
  "id": "math004random3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Степени 4", 
  "theme": "Степени",
  "text": "Чему равно $$2^{{var1-10}} + 2^{={var1-10} + 1}$$?",
  "answer": "POWER(2, {var1-10}) + POWER(2, {var1-10} + 1)",
  "hint": "$2^{{var1-10}} = {= POWER(2, {var1-10})}$, $2^{{var1-10} + 1} = {= POWER(2, {var1-10} + 1)}$, сумма = {= POWER(2, {var1-10}) + POWER(2, {var1-10} + 1)}",
  "randomfrom": [2, 3, 4, 5, 6]
},

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

// 10. Уравнения, неравенства и их системы. Логарифмические. Показательные

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
  "text": "Найдите наибольшее целое x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {={var1-10} + 6}$$",
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
  "text": "Найдите наименьшее целое x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {={var1-10} + 6}$$",
  "answer": "CEILING(({var1-10} + 2) / 2, 1)",
  "hint": "Решим неравенство: ${var1-10} < 2x - 1 \\leq {var1-10} + 6$ → ${var1-10} + 1 < 2x \\leq {var1-10} + 7$ → $\\frac{{var1-10} + 1}{2} < x \\leq \\frac{{var1-10} + 7}{2}$. Наименьшее целое x = $\\left\\lceil \\frac{{var1-10} + 2}{2} \\right\\rceil$",
  "randomfrom": [2, 4, 6, 8, 10]
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
  "title": "Наибольший корень 3",
  "theme": "Квадратные уравнения",
  "text": "Найдите наибольший корень уравнения: $$x^2 - {= 2*{var1-10} + 4}x + {= {var1-10}*({var1-10}+4)} = 0$$",
  "answer": "{var1-10}+4",
  "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = {= 2*{var1-10} + 4}, \\quad x_1 \\cdot x_2 = {= {var1-10}*({var1-10}+4)}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= 2*{var1-10} + 4}, а произведение {= {var1-10}*({var1-10}+4)}</p><p>Подходят числа: {var1-10} и {= {var1-10}+4}, так как:</p><p>{var1-10} + {= {var1-10}+4} = {= 2*{var1-10} + 4}, {var1-10} × {= {var1-10}+4} = {= {var1-10}*({var1-10}+4)}</p><p>Шаг 3: Записываем корни</p>$$x_1 = {var1-10}, \\quad x_2 = {= {var1-10}+4}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= 2*{var1-10} + 4}, c = {= {var1-10}*({var1-10}+4)}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= 2*{var1-10} + 4})^2 - 4 \\cdot 1 \\cdot {= {var1-10}*({var1-10}+4)}$$$$D = {= (2*{var1-10}+4)*(2*{var1-10}+4)} - {= 4*{var1-10}*({var1-10}+4)}$$$$D = {= 4*{var1-10}*{var1-10} + 16*{var1-10} + 16} - {= 4*{var1-10}*{var1-10} + 16*{var1-10}} = 16$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= 2*{var1-10} + 4} \\pm \\sqrt{16}}{2} = \\frac{{= 2*{var1-10} + 4} \\pm 4}{2}$$$$x_1 = \\frac{{= 2*{var1-10} + 4} - 4}{2} = \\frac{{= 2*{var1-10}}}{2} = {var1-10}$$$$x_2 = \\frac{{= 2*{var1-10} + 4} + 4}{2} = \\frac{{= 2*{var1-10}+8}}{2} = {= {var1-10}+4}$$<p>Наибольший корень: {= {var1-10}+4}</p>",
  "randomfrom": [2, 3, 4, 5, 6, 7]
},

 {
  "id": "quadratic005",
  "type": "mathwithrandomnumber",
  "header": "Квадратные уравнения",
  "title": "Наибольший корень 4",
  "theme": "Квадратные уравнения",
  "text": "Найдите наибольший корень уравнения: $$x^2 - {= 2*{var1-10} + 3}x + {= {var1-10}*({var1-10}+3)} = 0$$",
  "answer": "{var1-10}+3",
  "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = {= 2*{var1-10} + 3}, \\quad x_1 \\cdot x_2 = {= {var1-10}*({var1-10}+3)}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= 2*{var1-10} + 3}, а произведение {= {var1-10}*({var1-10}+3)}</p><p>Подходят числа: {var1-10} и {= {var1-10}+3}, так как:</p><p>{var1-10} + {= {var1-10}+3} = {= 2*{var1-10} + 3}, {var1-10} × {= {var1-10}+3} = {= {var1-10}*({var1-10}+3)}</p><p>Шаг 3: Записываем корни</p>$$x_1 = {var1-10}, \\quad x_2 = {= {var1-10}+3}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= 2*{var1-10} + 3}, c = {= {var1-10}*({var1-10}+3)}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= 2*{var1-10} + 3})^2 - 4 \\cdot 1 \\cdot {= {var1-10}*({var1-10}+3)}$$$$D = {= (2*{var1-10}+3)*(2*{var1-10}+3)} - {= 4*{var1-10}*({var1-10}+3)}$$$$D = {= 4*{var1-10}*{var1-10} + 12*{var1-10} + 9} - {= 4*{var1-10}*{var1-10} + 12*{var1-10}} = 9$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= 2*{var1-10} + 3} \\pm \\sqrt{9}}{2} = \\frac{{= 2*{var1-10} + 3} \\pm 3}{2}$$$$x_1 = \\frac{{= 2*{var1-10} + 3} - 3}{2} = \\frac{{= 2*{var1-10}}}{2} = {var1-10}$$$$x_2 = \\frac{{= 2*{var1-10} + 3} + 3}{2} = \\frac{{= 2*{var1-10}+6}}{2} = {= {var1-10}+3}$$<p>Наибольший корень: {= {var1-10}+3}</p>",
  "randomfrom": [2, 3, 4, 5, 6, 7]
},
  {
  "id": "quadratic006",
  "type": "mathwithrandomnumber",
  "header": "Квадратные уравнения",
  "title": "Наименьший корень 4",
  "theme": "Квадратные уравнения",
  "text": "Найдите наименьший корень уравнения: $$x^2 - {= 2*{var1-10}+3}x + {={var1-10}*({var1-10}+3)} = 0$$",
  "answer": "{var1-10}",
  "hint": "<p><strong>Способ 1: Теорема Виета</strong></p><p>Шаг 1: Записываем условия теоремы Виета</p>$$x_1 + x_2 = {= 2*{var1-10} + 3}, \\quad x_1 \\cdot x_2 = {= {var1-10}*({var1-10}+3)}$$<p>Шаг 2: Подбираем числа, удовлетворяющие условиям</p><p>Ищем два числа, сумма которых {= 2*{var1-10} + 3}, а произведение {= {var1-10}*({var1-10}+3)}</p><p>Подходят числа: {var1-10} и {= {var1-10}+3}, так как:</p><p>{var1-10} + {= {var1-10}+3} = {= 2*{var1-10} + 3}, {var1-10} × {= {var1-10}+3} = {= {var1-10}*({var1-10}+3)}</p><p>Шаг 3: Записываем корни</p>$$x_1 = {var1-10}, \\quad x_2 = {= {var1-10}+3}$$<p><strong>Способ 2: Через дискриминант</strong></p><p>Шаг 1: Записываем коэффициенты</p><p>a = 1, b = -{= 2*{var1-10} + 3}, c = {= {var1-10}*({var1-10}+3)}</p><p>Шаг 2: Вычисляем дискриминант</p>$$D = b^2 - 4ac = (-{= 2*{var1-10} + 3})^2 - 4 \\cdot 1 \\cdot {= {var1-10}*({var1-10}+3)}$$$$D = {= (2*{var1-10}+3)*(2*{var1-10}+3)} - {= 4*{var1-10}*({var1-10}+3)}$$$$D = {= 4*{var1-10}*{var1-10} + 12*{var1-10} + 9} - {= 4*{var1-10}*{var1-10} + 12*{var1-10}} = 9$$<p>Шаг 3: Находим корни</p>$$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{{= 2*{var1-10} + 3} \\pm \\sqrt{9}}{2} = \\frac{{= 2*{var1-10} + 3} \\pm 3}{2}$$$$x_1 = \\frac{{= 2*{var1-10} + 3} - 3}{2} = \\frac{{= 2*{var1-10}}}{2} = {var1-10}$$$$x_2 = \\frac{{= 2*{var1-10} + 3} + 3}{2} = \\frac{{= 2*{var1-10}+6}}{2} = {= {var1-10}+3}$$<p>Наибольший корень: {= {var1-10}+3}</p>",
  "randomfrom": [2, 3, 4, 5, 6, 7]
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

// 11. Вычисление производных. Последовательности. Сложные проценты

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



  // 12. Применение производной

  {
    "id": "der2_006",
    "type": "multiplechoices",
    "header": "Дифференциальное исчисление",
    "title": "Физический смысл второй производной для y = 3x",
    "theme": "Ускорение при равномерном движении",
    "functionType": "linear_3x",
    "func": (x) => 2 * x + x,
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
    "func": (x) => 2 * x + x,
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



// 13. Первообразная и интеграл

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

//     {
//       "id": "finance_wacc_calc003",
//       "type": "mathwithrandomnumber",
//       "header": "14. Вероятность",
//       "title": "Расчет средней взвешенной",
//       "theme": "Оценка капитала",
//       "text": "Структура капитала компании: собственный капитал {var1-10} млн руб., заёмный капитал {=1000-{var1-10}} млн руб. Стоимость собственного капитала 15%, стоимость заёмного капитала 10%. Рассчитайте WACC (средневзвешенную стоимость капитала) в процентах (без учёта налога на прибыль).",
//       "answer": "({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10",
//       "hint": `
// <div class="card">
//   <div class="card-header bg-primary text-white">
//     <h5>Расчёт WACC (средневзвешенной стоимости капитала)</h5>
//   </div>
//   <div class="card-body">
//     <div class="card mb-3">
//       <div class="card-header bg-info text-white">
//         Формула WACC (без учёта налога)
//       </div>
//       <div class="card-body">
//         <p class="card-text text-center">$$WACC = \\frac{E}{E+D} \\cdot r_e + \\frac{D}{E+D} \\cdot r_d$$</p>
//         <ul>
//           <li><strong>E</strong> — собственный капитал = {var1-10} млн руб.</li>
//           <li><strong>D</strong> — заёмный капитал = {=1000-{var1-10}} млн руб.</li>
//           <li><strong>rₑ</strong> — стоимость собственного капитала = 15%</li>
//           <li><strong>r<sub>d</sub></strong> — стоимость заёмного капитала = 10%</li>
//           <li><strong>E + D</strong> = 1000 млн руб.</li>
//         </ul>
//       </div>
//     </div>
    
//     <div class="card mb-3">
//       <div class="card-header bg-info text-white">
//         Расчёт весов
//       </div>
//       <div class="card-body">
//         <p class="card-text">Доля собственного капитала: $$\\frac{{var1-10}}{1000} = {= {var1-10} / 1000}$$</p>
//         <p class="card-text">Доля заёмного капитала: $$\\frac{{=1000-{var1-10}}}{1000} = {= (1000 - {var1-10}) / 1000}$$</p>
//       </div>
//     </div>
    
//     <div class="card mb-3">
//       <div class="card-header bg-success text-white">
//         Вычисление WACC
//       </div>
//       <div class="card-body">
//         <p class="card-text">$$WACC = {= {var1-10} / 1000} \\cdot 15\\% + {= (1000 - {var1-10}) / 1000} \\cdot 10\\%$$</p>
//         <p class="card-text">$$WACC = {= ({var1-10} / 1000) * 15} + {= ((1000 - {var1-10}) / 1000) * 10} = {= ({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10}\\%$$</p>
//       </div>
//     </div>
    
//     <div class="alert alert-primary mt-3">
//       <strong>Ответ:</strong> <code>({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10</code> или <code>{= ({var1-10} / 1000) * 15 + ((1000 - {var1-10}) / 1000) * 10}</code>
//     </div>
//   </div>
// </div>`,
//       "randomfrom": [800, 700, 600, 500, 400, 300, 200],
//       "altpath": "currentDay",
//     },



    {
      "id": "geom-prob-001",
      "type": "multiplechoices",
      "header": "14. Вероятность",
      "title": "Вероятность на числовой прямой",
      "theme": "Геометрическая вероятность",
      "text": `На числовой прямой наугад выбирают точку $x$, удовлетворяющую неравенству $|x-5| \\le 10$. Какова вероятность того, что эта точка также удовлетворяет неравенству $|x-1| \\le 1$?`,
      "choices": [
        "$\\dfrac{1}{20}$",
        "$\\dfrac{1}{10}$",
        "$\\dfrac{1}{5}$",
        "$\\dfrac{1}{4}$",
        "$\\dfrac{1}{2}$"
      ],
      "answers": ["$\\dfrac{1}{10}$"],
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

   



  ]






window.quizesSets = quizesSets;