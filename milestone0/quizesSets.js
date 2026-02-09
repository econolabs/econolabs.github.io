let quizesSets = [

    {
  "id": "proportion_basic_1",
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: базовая",
  "theme": "Арифметика",
  "text": "Решите пропорцию: $$\\frac{x}{{var1-10}} = \\frac{1}{2}$$",
  "answer": "{var1-10}/2",
  "hint": "Чтобы найти x, умножьте обе части равенства на {var1-10}: $$x = {var1-10} \\times \\frac{1}{2}$$",
  "randomfrom": [2, 4, 6, 8, 10]
},
{
  "id": "proportion_basic_2", 
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: крест-накрест",
  "theme": "Арифметика",
  "text": "Решите пропорцию: $$\\frac{{var1-10}}{x} = \\frac{1}{4}$$",
  "answer": "{var1-10}*4",
  "hint": "Используйте правило крест-накрест: $$x = \\frac{{var1-10} \\times 4}{1} = {var1-10} \\times 4$$",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "proportion_fraction_1",
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: с дробями",
  "theme": "Арифметика",
  "text": "Решите пропорцию: $$\\frac{x}{\\frac{1}{4}} = \\frac{{var1-10}}{1}$$",
  "answer": "{var1-10}/4",
  "hint": "Деление на дробь равно умножению на обратную: $$x = {var1-10} \\times \\frac{1}{4}$$",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "proportion_fraction_2",
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: дроби с двух сторон",
  "theme": "Арифметика", 
  "text": "Решите пропорцию: $$\\frac{\\frac{1}{5}}{x} = \\frac{1}{{var1-10}}$$",
  "answer": "{var1-10}/5",
  "hint": "Используйте правило крест-накрест: $$\\frac{1}{5} \\times {var1-10} = x \\times 1$$, значит $$x = \\frac{{var1-10}}{5}$$",
  "randomfrom": [2, 4, 5, 8, 10]
},
{
  "id": "proportion_three_numbers",
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: три числа",
  "theme": "Арифметика",
  "text": "Решите пропорцию: $$\\frac{{var1-10}}{\\frac{1}{8}} = \\frac{x}{1}$$",
  "answer": "{var1-10}*8",
  "hint": "Деление на дробь: $$x = {var1-10} \\div \\frac{1}{8} = {var1-10} \\times 8$$",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "proportion_complex",
  "type": "mathwithrandomnumber",
  "header": "Пропорции",
  "title": "Пропорция: сложная",
  "theme": "Арифметика",
  "text": "Решите пропорцию: $$\\frac{\\frac{1}{2}}{\\frac{1}{4}} = \\frac{x}{{var1-10}}$$",
  "answer": "{var1-10}*2",
  "hint": "Упростите левую часть: $$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times 4 = 2$$. Тогда $$2 = \\frac{x}{{var1-10}}$$",
  "randomfrom": [1, 2, 3, 4, 5]
},

  {
  "id": "multiplication_1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 1",
  "theme": "Арифметика",
  "text": "Сколько будет {var1-10} × {var1-10}?",
  "answer": "{var1-10}*{var1-10}",
  "hint": "Вспомни таблицу умножения.",
  "randomfrom": [2, 3, 4, 5, 10]
},
{
  "id": "multiplication_2",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 2",
  "theme": "Арифметика",
  "text": "Найдите произведение чисел {var1-10} и {var1-10}.",
  "answer": "{var1-10}*{var1-10}",
  "hint": "Произведение — это результат умножения.",
  "randomfrom": [2, 3, 4, 5, 6, 7, 8]
},
{
  "id": "multiplication_3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 3",
  "theme": "Арифметика",
  "text": "  {var1-10} × {var1-10}",
  "answer": "{var1-10}*{var1-10}",
 // "hint": "Точка между числами — это знак умножения.",
  "randomfrom": [7, 8, 9,]
},

{
  "id": "multiplication_4",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 4",
  "theme": "Арифметика",
  "text": "{var1-10} * {={var1-10}+2}",
  "answer": "{var1-10}*({var1-10}+2)",
  "hint": "Точка между числами — это знак умножения.",
  "randomfrom": [2, 3, 4, 5, 6, 7]
},


{
  "id": "multiplication_5",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 5",
  "theme": "Арифметика",
  "text": "{var1-10} * {={var1-10}+2}",
  "answer": "{var1-10}*({var1-10}+2)",
  "hint": "Точка между числами — это знак умножения.",
  "randomfrom": [9, 11, 12, 13, 14, 15]
},

{
  "id": "multiplication_6",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Таблица умножения 6",
  "theme": "Арифметика",
  "text": "  {=({var1-10}+2)*{var1-10}} / {var1-10}",
  "answer": "{var1-10}+2",
  "hint": "Столбиком",
  "randomfrom": [9, 11, 12, 13, 14, 15]
},

{
  "id": "power_3_base",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Степень: куб числа",
  "theme": "Арифметика",
  "text": "Чему равно $${var1-10}^3$$?",
  "answer": "{var1-10}^3",
  "hint": "Возведите число в третью степень: $${var1-10} \\times {var1-10} \\times {var1-10}$$",
  "randomfrom": [2, 3, 4, 5]
},
{
  "id": "power_4_base", 
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Степень: четвертая степень",
  "theme": "Арифметика",
  "text": "Чему равно $${var1-10}^4$$?",
  "answer": "{var1-10}^4",
  "hint": "Возведите число в четвертую степень: $${var1-10} \\times {var1-10} \\times {var1-10} \\times {var1-10}$$",
  "randomfrom": [2, 3, 4, 5]
},

{
  "id": "equation_brackets_1",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: раскрытие скобок 1",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$({var1-10} + x) \\times 2 = {var1-10}$$",
  "answer": "{var1-10}/2 - {var1-10}",
  "hint": "Раскройте скобки: $$2 \\cdot {var1-10} + 2x = {var1-10}$$, затем упростите.",
  "randomfrom": [2, 4, 6, 8, 10]
},
{
  "id": "equation_brackets_2",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: раскрытие скобок 2",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$3 \\times (x - {var1-10}) = {var1-10}$$",
  "answer": "{var1-10}/3 + {var1-10}",
  "hint": "Раскройте скобки: $$3x - 3 \\cdot {var1-10} = {var1-10}$$, затем решите относительно x.",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "equation_brackets_3",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: двойные скобки",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$2 \\times (x + 1) = 3 \\times (x - {var1-10})$$",
  "answer": "3*{var1-10} + 2",
  "hint": "Раскройте обе скобки: $$2x + 2 = 3x - 3 \\cdot {var1-10}$$, затем соберите x в одной части.",
  "randomfrom": [1, 2, 3, 4]
},
{
  "id": "equation_brackets_4",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: с дробью",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\frac{1}{2} \\times (x + {var1-10}) = {var1-10}$$",
  "answer": "2*{var1-10} - {var1-10}",
  "hint": "Умножьте обе части на 2: $$x + {var1-10} = 2 \\cdot {var1-10}$$, затем найдите x.",
  "randomfrom": [2, 4, 6, 8]
},
{
  "id": "equation_brackets_5",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: распределительный закон",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$x \\times ({var1-10} + 1) = {var1-10} \\times 2$$",
  "answer": "2*{var1-10}/({var1-10} + 1)",
  "hint": "Упростите левую часть: $$x \\cdot ({var1-10} + 1) = {var1-10} \\cdot 2$$, затем разделите обе части на ({var1-10} + 1).",
  "randomfrom": [1, 2, 3, 4]
},
{
  "id": "equation_brackets_6",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Уравнение: комбинированное",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$({var1-10} \\times x) + {var1-10} = {var1-10} \\times 3$$",
  "answer": "3 - 1",
  "hint": "Упростите правую часть: $${var1-10}x + {var1-10} = 3 \\cdot {var1-10}$$. Вычтите {var1-10} из обеих частей.",
  "randomfrom": [2, 3, 4, 5]
},


{
  "id": "logarithm_basic_1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Логарифм 1",
  "theme": "Алгебра",
  "text": "Вычислите: log₂({var1-10})",
  "answer": "LOG({var1-10}, 2)",
  "hint": "Логарифм — это степень, в которую нужно возвести основание (2), чтобы получить число.",
  "randomfrom": [1, 2, 4, 8]
},
{
  "id": "logarithm_basic_2",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Логарифм 2",
  "theme": "Алгебра",
  "text": "Чему равен логарифм: lg({var1-10})",
  "answer": "LOG10({var1-10})",
  "hint": "lg — это десятичный логарифм (по основанию 10).",
  "randomfrom": [1, 10, 100]
},
{
  "id": "logarithm_basic_3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Логарифм 3",
  "theme": "Алгебра",
  "text": "Найдите значение: $$\\ln(e^{{var1-10}})$$",
  "answer": "{var1-10}",
  "hint": "$$\\ln$$ — это натуральный логарифм (по основанию $$e$$). $$\\ln(e^x) = x$$.",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "log_product",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт", 
  "title": "Логарифм произведения",
  "theme": "Алгебра",
  "text": "Чему равно выражение: $$\\log_{var1-10}({= {var1-10}^{var1-10}})$$",
  "answer": "{var1-10}",
  "hint": "Основное логарифмическое тождество: $$\\log_a(a^n) = n$$",
  "randomfrom": [2, 3, 4]
},
{
  "id": "logarithm_basic_3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Логарифм 3",
  "theme": "Алгебра",
  "text": "Найдите значение: $$\\ln(e^{{var1-10}})$$",
  "answer": "{var1-10}",
  "hint": "$$\\ln$$ — это натуральный логарифм (по основанию $$e$$). $$\\ln(e^x) = x$$.",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "log_product",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт", 
  "title": "Логарифм произведения",
  "theme": "Алгебра",
  "text": "Чему равно выражение: $$\\log_{var1-10}({= {var1-10}^{var1-10}})$$",
  "answer": "{var1-10}",
  "hint": "Основное логарифмическое тождество: $$\\log_a(a^n) = n$$",
  "randomfrom": [2, 3, 4]
},
{
  "id": "log_base_power",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Возведение основания в степень", 
  "theme": "Алгебра",
  "text": "Чему равно выражение: $$\\frac{1}{{var1-10}} \\cdot \\log_2({var1-10}^{var1-10})$$",
  "answer": "LOG({var1-10}, 2)",
  "hint": "Свойство: $$\\log_{a^n}(b) = \\frac{1}{n} \\cdot \\log_a(b)$$. Сначала примените свойство степени к аргументу.",
  "randomfrom": [2, 4]
},
{
  "id": "log_change_of_base",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт", 
  "title": "Смена основания логарифма",
  "theme": "Алгебра",
  "text": "Чему равно выражение: $$\\log_8({var1-10})$$ через логарифм по основанию 2.",
  "answer": "LOG({var1-10}, 2)/3",
  "hint": "Формула смены основания: $$\\log_a(b) = \\frac{\\log_c(b)}{\\log_c(a)}$$. Учтите, что $$8 = 2^3$$.",
  "randomfrom": [2, 4, 8] 
},
{
  "id": "log_base_argument_swap",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Смена основания и аргумента", 
  "theme": "Алгебра",
  "text": "Чему равно выражение: $$\\log_{{var1-10}}({var1-10}^{var1-10})$$?",
  "answer": "{var1-10}",
  "hint": "Основное логарифмическое тождество: $$\\log_a(a^n) = n$$",
  "randomfrom": [2, 3, 4, 5]
},




{
  "id": "log_equation_basic_1",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Лог. уравнение: базовое",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\log_2(x) = {var1-10}$$",
  "answer": "2^{var1-10}",
  "hint": "Вспомните определение логарифма: если $$\\log_a(b) = c$$, то $$b = a^c$$.",
  "randomfrom": [1, 2, 3, 4, 5]
},
{
  "id": "log_equation_basic_2",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Лог. уравнение: степень",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\log_3(x^{var1-10}) = {var1-10}$$",
  "answer": "3",
  "hint": "Сначала примените свойство логарифма степени: $$\\log_a(b^n) = n\\cdot\\log_a(b)$$.",
  "randomfrom": [2, 3, 4, 5]
},

{
  "id": "log_equation_equal_args",
  "type": "mathwithrandomnumber",
  "header": "Уравнения", 
  "title": "Лог. уравнение: равные аргументы",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\log_{var1-10}(x) = \\log_{var1-10}({var1-10}^2)$$",
  "answer": "{var1-10}^2",
  "hint": "Если $$\\log_a(f(x)) = \\log_a(g(x))$$, то $$f(x) = g(x)$$ (при условии положительности всех выражений).",
  "randomfrom": [2, 3, 4, 5]
},

{
  "id": "log_equation_constant",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Лог. уравнение: константа",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\log_{var1-10}({var1-10}^3) = x$$", 
  "answer": "3",
  "hint": "Вспомните основное логарифмическое тождество: $$\\log_a(a^n) = n$$.",
  "randomfrom": [2, 3, 4, 5]
},
{
  "id": "log_equation_sum",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Лог. уравнение: сумма",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\log_2(x) + \\log_2({var1-10}) = {var1-10}$$",
  "answer": "2^{var1-10}/{var1-10}",
  "hint": "Сначала примените свойство логарифма произведения: $$\\log_a(b) + \\log_a(c) = \\log_a(b\\cdot c)$$.",
  "randomfrom": [2, 4, 8]
},


{
  "id": "exp_equation_basic_1",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Пок. уравнение: базовое",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$2^x = {var1-10}$$",
  "answer": "LOG({var1-10}, 2)",
  "hint": "Представьте правую часть как степень двойки, или используйте логарифм: $$x = \\log_2({var1-10})$$.",
  "randomfrom": [2, 4, 8, 16, 32]
},
{
  "id": "exp_equation_basic_2",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Пок. уравнение: основание",
  "theme": "Алгебра",
  "text": "Решите уравнение: $${var1-10}^x = {var1-10}^2$$",
  "answer": "2",
  "hint": "Если основания равны и положительны, то показатели равны: $$a^x = a^c \\Rightarrow x = c$$.",
  "randomfrom": [2, 3, 4, 5]
},
{
  "id": "exp_equation_fraction",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Пок. уравнение: дробь",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$\\left(\\frac{1}{2}\\right)^x = {var1-10}$$",
  "answer": "LOG(1/{var1-10}, 2)",
  "hint": "Перепишите уравнение как $$2^{-x} = {var1-10}$$, затем $$-x = \\log_2({var1-10})$$.",
  "randomfrom": [2, 4, 8]
},
{
  "id": "exp_equation_sum",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Пок. уравнение: сумма",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$2^x + 2^x = {var1-10}$$",
  "answer": "LOG({var1-10}/2, 2)",
  "hint": "Упростите левую часть: $$2^x + 2^x = 2 \\cdot 2^x = 2^{x+1}$$.",
  "randomfrom": [4, 8, 16, 32]
},

{
  "id": "exp_equation_quadratic",
  "type": "mathwithrandomnumber",
  "header": "Уравнения",
  "title": "Пок. уравнение: квадрат",
  "theme": "Алгебра",
  "text": "Решите уравнение: $$({var1-10}^2)^x = {var1-10}^4$$",
  "answer": "2",
  "hint": "Упростите основание: $$({var1-10}^2)^x = {var1-10}^{2x}$$. Затем приравняйте показатели.",
  "randomfrom": [2, 3, 4, 5]
},


{
  "id": "math005random1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Упрощение выражения 4",
  "theme": "Уравнения",
  "text": "Чему равно x, если $${var1-10}x + 5 = 25$$?",
  "answer": "(25 - 5) / {var1-10}",
  "hint": "$${var1-10}x + 5 = 25 \\rightarrow {var1-10}x = 20 \\rightarrow x = \\frac{20}{{var1-10}} = {=20 / {var1-10}}$$",
  "randomfrom": [2, 4, 5, 10, 20]
},
{
  "id": "math005random2",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Упрощение выражения 5",
  "theme": "Уравнения",
  "text": "Чему равно x, если $$2x - {var1-10} = 10$$?",
  "answer": "(10 + {var1-10}) / 2",
  "hint": "$$2x - {var1-10} = 10 \\rightarrow 2x = {=10 + {var1-10}} \\rightarrow x = \\frac{{=10 + {var1-10}}}{2} = {=(10 + {var1-10}) / 2}$$",
  "randomfrom": [2, 4, 6, 8, 10, 12]
},
{
  "id": "math005random3",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Упрощение выражения 6",
  "theme": "Уравнения",
  "text": "Чему равно x, если $${var1-10}(x + 2) = 30$$?",
  "answer": "30 / {var1-10} - 2",
  "hint": "$${var1-10}(x + 2) = 30 \\rightarrow x + 2 = \\frac{30}{{var1-10}} = {=30 / {var1-10}} \\rightarrow x = {=30 / {var1-10} - 2}$$",
  "randomfrom": [3, 5, 6, 10, 15]
},

{
  "id": "math008random1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 2",
  "theme": "Неравенства",
  "text": "Найдите наибольшее целое  x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$",
  "answer": "FLOOR(({var1-10} + 7) / 2, 1)",
  "hint": "Решим неравенство: $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$ → $${var1-10} + 1 < 2x \\leq {var1-10} + 7$$ → $$\\frac{{var1-10} + 1}{2} < x \\leq \\frac{{var1-10} + 7}{2}$$. Наибольшее целое $$x = \\left\\lfloor \\frac{{var1-10} + 7}{2} \\right\\rfloor$$",
  "randomfrom": [2, 4, 6, 8, 10]
},
{
  "id": "math008random2",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 3",
  "theme": "Неравенства",
  "text": "Найдите наименьшее целое  x, удовлетворяющее неравенству $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$",
  "answer": "CEILING(({var1-10} + 2) / 2, 1)",
  "hint": "Решим неравенство: $${var1-10} < 2x - 1 \\leq {var1-10} + 6$$ → $${var1-10} + 1 < 2x \\leq {var1-10} + 7$$ → $$\\frac{{var1-10} + 1}{2} < x \\leq \\frac{{var1-10} + 7}{2}$$. Наименьшее целое $$x = \\left\\lceil \\frac{{var1-10} + 2}{2} \\right\\rceil$$",
  "randomfrom": [2, 4, 6, 8, 10]
},
{
  "id": "math008random3_max",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 4",
  "theme": "Неравенства",
  "text": "Найдите наибольшее целое  x, удовлетворяющее системе: $${var1-10}x - 2 \\geq 8$$ и $${var1-10}x + 2 \\leq 22$$",
  "answer": "FLOOR(20 / {var1-10}, 1)",
  "hint": "Решим систему: $${var1-10}x - 2 \\geq 8$$ → $${var1-10}x \\geq 10$$ → $$x \\geq \\frac{10}{{var1-10}}$$; $${var1-10}x + 2 \\leq 22$$ → $${var1-10}x \\leq 20$$ → $$x \\leq \\frac{20}{{var1-10}}$$. Наибольшее целое $$x = \\left\\lfloor \\frac{20}{{var1-10}} \\right\\rfloor$$",
  "randomfrom": [2, 4, 5, 10]
},
{
  "id": "math008random3_min",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Решение неравенства 5",
  "theme": "Неравенства",
  "text": "Найдите наименьшее целое  x, удовлетворяющее системе: $${var1-10}x - 2 \\geq 8$$ и $${var1-10}x + 2 \\leq 22$$",
  "answer": "CEILING(10 / {var1-10}, 1)",
  "hint": "Решим систему: $${var1-10}x - 2 \\geq 8$$ → $${var1-10}x \\geq 10$$ → $$x \\geq \\frac{10}{{var1-10}}$$; $${var1-10}x + 2 \\leq 22$$ → $${var1-10}x \\leq 20$$ → $$x \\leq \\frac{20}{{var1-10}}$$. Наименьшее целое $$x = \\left\\lceil \\frac{10}{{var1-10}} \\right\\rceil$$",
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
  "hint": "Вынесение общего множителя: $$x(x - {var1-10}) = 0$$ → $$x_1 = 0, x_2 = {var1-10}$$. Наибольший корень: $${var1-10}$$",
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
  "hint": "Вынесение общего множителя: $$x(x - {= {var1-10}*5}) = 0$$ → $$x_1 = 0, x_2 = {= {var1-10}*5}$$. Наименьший корень: $$0$$",
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
  "hint": "Теорема Виета: $$x_1 + x_2 = {= {var1-10}+1}, x_1 \\cdot x_2 = {var1-10}$$ → $$x_1 = 1, x_2 = {var1-10}$$. Наибольший корень: $${var1-10}$$",
  "randomfrom": [2, 3, 4, 5, 6, 7, 8]
},
{
  "id": "quadratic_oral_1",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Квадратное уравнение 1",
  "theme": "Квадратные уравнения",
  "text": "Найдите БОЛЬШИЙ корень уравнения: $$x^2 - {= {var1-10} + 5}x + {= {var1-10}*5} = 0$$",
  "answer": "{var1-10}",
  "hint": "Теорема Виета: ищем два числа, которые в сумме дают $${= {var1-10} + 5}$$, а в произведении $${= {var1-10}*5}$$. Это числа $$5$$ и $${var1-10}$$.",
  "randomfrom": [2, 3, 4, 5, 6]
},
{
  "id": "quadratic_oral_2", 
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Квадратное уравнение 2",
  "theme": "Квадратные уравнения",
  "text": "Найдите МЕНЬШИЙ корень уравнения: $$x^2 - {= {var1-10} + 7}x + {= {var1-10}*7} = 0$$",
  "answer": "{var1-10}",
  "hint": "Теорема Виета: ищем два числа, которые в сумме дают $${= {var1-10} + 7}$$, а в произведении $${= {var1-10}*7}$$. Это числа $${var1-10}$$ и $$7$$.",
  "randomfrom": [2, 3, 4, 5, 6]
},
{
  "id": "quadratic006",
  "type": "mathwithrandomnumber",
  "header": "Квадратные уравнения",
  "title": "Наименьший корень 3",
  "theme": "Квадратные уравнения",
  "text": "Найдите наименьший корень уравнения: $$x^2 - {= {var1-10}*{var1-10}} = 0$$",
  "answer": "-{var1-10}",
  "hint": "Разность квадратов: $$(x - {var1-10})(x + {var1-10}) = 0$$ → $$x_1 = {var1-10}, x_2 = -{var1-10}$$. Наименьший корень: $$-{var1-10}$$",
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
  "hint": "Теорема Виета: $$x_1 + x_2 = {= {var1-10}+5}, x_1 \\cdot x_2 = {= {var1-10}*5}$$ → $$x_1 = {var1-10}, x_2 = 5$$. Наибольший корень: $$5$$",
  "randomfrom": [2, 3, 4]
},
{
  "id": "quadratic008",
  "type": "mathwithrandomnumber",
  "header": "Квадратные уравнения",
  "title": "Наименьший корень 4",
  "theme": "Квадратные уравнения",
  "text": "Найдите наименьший корень уравнения: $$x^2 - {= {var1-10}*6}x + {= {var1-10}*8} = 0$$",
  "answer": "{= {var1-10}*2}",
  "hint": "Теорема Виета: $$x_1 + x_2 = {= {var1-10}*6}, x_1 \\cdot x_2 = {= {var1-10}*8}$$ → $$x_1 = {= {var1-10}*2}, x_2 = {= {var1-10}*4}$$. Наименьший корень: $${= {var1-10}*2}$$",
  "randomfrom": [2, 3, 4]
},

   {
    "id": "math002",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Проценты 1",
    "theme": "Числа",
    "text": "Чему равны 15% от 80?",
    "choices": [
      "10",
      "12",
      "15",
      "8",
      "18"
    ],
    "answers": ["12"],
    "hint": `<p>10% от числа — это то же самое, что разделить его на 10. 5% — это половина от 10%.</p>
    <ul>
    <li><strong>Шаг 1:</strong> 10% от 80 = 80 ÷ 10 = 8</li>
    <li><strong>Шаг 2:</strong> 5% от 80 = 8 ÷ 2 = 4</li><li><strong>Шаг 3:</strong> 15% = 10% + 5% = 8 + 4 = 12</li>
    </ul>`
  },
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
    "id": "math002random2",
    "type": "mathwithrandomnumber",
    "header": "Устный счёт",
    "title": "Проценты 3",
    "theme": "Числа",
    "text": "Чему равны 25% от {var1-10}?",
    "answer": "{var1-10}*0.25",
    "hint": "25% - это одна четвертая. {var1-10} ÷ 4 = {={var1-10}*0.25}",
    "randomfrom": [40, 80, 120, 160, 200, 240, 280, 320]
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
    "id": "fractions001",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение дробей",
    "theme": "Дроби",
    "text": "Вычислите:<br> $\\frac{1}{2} + \\frac{1}{3}$$",
    "choices": [
      "$\\frac{2}{5}$",
      "$\\frac{5}{6}$",
      "$\\frac{1}{6}$",
      "$\\frac{3}{5}$",
      "$\\frac{2}{3}$"
    ],
    "answers": ["$\\frac{5}{6}$"],
    "hint": "<p>Находим общий знаменатель 6.</p>$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$"
  },
  {
    "id": "fractions002",
    "type": "multiplechoices",
    "header": "Дроби 3",
    "title": "Вычитание дробей",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{3}{4} - \\frac{1}{2}$$",
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
    "text": "Вычислите: $\\frac{2}{3} \\times \\frac{3}{4}$$",
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
    "text": "Вычислите: $\\frac{2}{3} \\div \\frac{4}{5}$$",
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
    "id": "fractions006",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие скобок",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{1}{2}(x + 4)$$",
    "choices": [
      "$\\frac{x}{2} + 2$",
      "$\\frac{x}{2} + 4$",
      "$\\frac{x + 4}{2}$",
      "$2x + 2$",
      "$\\frac{1}{2}x + \\frac{1}{2}$"
    ],
    "answers": ["$\\frac{x}{2} + 2$"],
    "hint": "<p>Умножаем каждое слагаемое в скобках на дробь.</p>$$\\frac{1}{2}(x + 4) = \\frac{1}{2}x + \\frac{1}{2} \\times 4 = \\frac{x}{2} + 2$$"
  },
  {
    "id": "fractions007",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение за скобки",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $\\frac{x}{3} + \\frac{2}{3}$$",
    "choices": [
      "$\\frac{1}{3}(x + 2)$",
      "$\\frac{x + 2}{3}$",
      "$3(x + 2)$",
      "$\\frac{1}{3}x + 2$",
      "$x + \\frac{2}{3}$"
    ],
    "answers": ["$\\frac{1}{3}(x + 2)$"],
    "hint": "<p>Выносим общий множитель $\\frac{1}{3}$.</p>$$\\frac{x}{3} + \\frac{2}{3} = \\frac{1}{3}(x + 2)$$"
  },
  {
    "id": "fractions008",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение дробей 2",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{2}{5} + \\frac{1}{10}$$",
    "choices": [
      "$\\frac{3}{15}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{10}$",
      "$\\frac{5}{10}$",
      "$\\frac{4}{10}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Приводим к общему знаменателю 10.</p>$$\\frac{2}{5} + \\frac{1}{10} = \\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions009",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание дробей 2",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{5}{6} - \\frac{1}{3}$$",
    "choices": [
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{4}{6}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Приводим к общему знаменателю 6.</p>$$\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions010",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение выражения",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{3}{4}a + \\frac{1}{2}a$$",
    "choices": [
      "$\\frac{5}{4}a$",
      "$\\frac{4}{6}a$",
      "$\\frac{2}{3}a$",
      "$\\frac{7}{4}a$",
      "$a$"
    ],
    "answers": ["$\\frac{5}{4}a$"],
    "hint": "<p>Приводим дроби к общему знаменателю 4.</p>$$\\frac{3}{4}a + \\frac{2}{4}a = \\frac{5}{4}a$$"
  },
  {
    "id": "fractions011",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие двойных скобок",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{1}{2}(2x + 4) + \\frac{1}{3}(3x + 6)$",
    "choices": [
      "$2x + 4$",
      "$3x + 4$",
      "$x + 2$",
      "$2x + 2$",
      "$3x + 6$"
    ],
    "answers": ["$2x + 4$"],
    "hint": "<p>Раскрываем обе скобки.</p>$$\\frac{1}{2}(2x + 4) = x + 2$$$$\\frac{1}{3}(3x + 6) = x + 2$$$$(x + 2) + (x + 2) = 2x + 4$$"
  },
  {
    "id": "fractions012",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $1\\frac{1}{2} + 2\\frac{1}{4}$$",
    "choices": [
      "$3\\frac{3}{4}$",
      "$3\\frac{1}{2}$",
      "$3\\frac{2}{6}$",
      "$4$",
      "$3\\frac{1}{4}$"
    ],
    "answers": ["$3\\frac{3}{4}$"],
    "hint": "<p>Складываем отдельно целые и дробные части.</p>$$1\\frac{1}{2} + 2\\frac{1}{4} = 3 + \\frac{2}{4} + \\frac{1}{4} = 3\\frac{3}{4}$$"
  },
  {
    "id": "fractions013",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение на целое число",
    "theme": "Дроби",
    "text": "Вычислите: $3 \\times \\frac{2}{5}$$",
    "choices": [
      "$\\frac{6}{5}$",
      "$\\frac{2}{15}$",
      "$\\frac{5}{6}$",
      "$\\frac{3}{10}$",
      "$\\frac{1}{5}$"
    ],
    "answers": ["$\\frac{6}{5}$"],
    "hint": "<p>Умножаем числитель на целое число.</p>$$3 \\times \\frac{2}{5} = \\frac{3 \\times 2}{5} = \\frac{6}{5}$$"
  },
  {
    "id": "fractions014",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление на дробь",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{3}{4} \\div \\frac{1}{2}$$",
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
    "id": "fractions015",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение общего множителя",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $\\frac{2x}{5} + \\frac{4}{5}$$",
    "choices": [
      "$\\frac{2}{5}(x + 2)$",
      "$\\frac{1}{5}(2x + 4)$",
      "$\\frac{2x + 4}{5}$",
      "$\\frac{2}{5}x + 4$",
      "$x + \\frac{4}{5}$"
    ],
    "answers": ["$\\frac{2}{5}(x + 2)$"],
    "hint": "<p>Выносим общий множитель $\\frac{2}{5}$.</p>$$\\frac{2x}{5} + \\frac{4}{5} = \\frac{2}{5}(x + 2)$$"
  },
  {
    "id": "fractions016",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сокращение дроби",
    "theme": "Дроби",
    "text": "Сократите дробь: $\\frac{8}{12}$$",
    "choices": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{6}{8}$"
    ],
    "answers": ["$\\frac{2}{3}$"],
    "hint": "<p>Делим числитель и знаменатель на 4.</p>$$\\frac{8}{12} = \\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$"
  },
  {
    "id": "fractions017",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение трех дробей",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{1}{4} + \\frac{1}{2} + \\frac{1}{8}$$",
    "choices": [
      "$\\frac{7}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{6}$",
      "$\\frac{6}{8}$"
    ],
    "answers": ["$\\frac{7}{8}$"],
    "hint": "<p>Приводим к общему знаменателю 8.</p>$$\\frac{1}{4} + \\frac{1}{2} + \\frac{1}{8} = \\frac{2}{8} + \\frac{4}{8} + \\frac{1}{8} = \\frac{7}{8}$$"
  },
  {
    "id": "fractions018",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение сложного выражения",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{1}{2}x + \\frac{1}{4}x - \\frac{1}{8}x$$",
    "choices": [
      "$\\frac{5}{8}x$",
      "$\\frac{3}{4}x$",
      "$\\frac{7}{8}x$",
      "$\\frac{1}{2}x$",
      "$\\frac{2}{3}x$"
    ],
    "answers": ["$\\frac{5}{8}x$"],
    "hint": "<p>Приводим к общему знаменателю 8.</p>$$\\frac{4}{8}x + \\frac{2}{8}x - \\frac{1}{8}x = \\frac{5}{8}x$$"
  },
  {
    "id": "fractions019",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие скобок с дробями",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{2}{3}(x + 6)$",
    "choices": [
      "$\\frac{2}{3}x + 4$",
      "$\\frac{2}{3}x + 6$",
      "$\\frac{2x + 6}{3}$",
      "$\\frac{2}{3}x + 2$",
      "$x + 4$"
    ],
    "answers": ["$\\frac{2}{3}x + 4$"],
    "hint": "<p>Умножаем каждое слагаемое на дробь.</p>$$\\frac{2}{3}(x + 6) = \\frac{2}{3}x + \\frac{2}{3} \\times 6 = \\frac{2}{3}x + 4$$"
  },
  {
    "id": "fractions020",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $3\\frac{1}{2} - 1\\frac{1}{4}$$",
    "choices": [
      "$2\\frac{1}{4}$",
      "$2\\frac{1}{2}$",
      "$2\\frac{3}{4}$",
      "$1\\frac{3}{4}$",
      "$1\\frac{1}{4}$"
    ],
    "answers": ["$2\\frac{1}{4}$"],
    "hint": "<p>Вычитаем отдельно целые и дробные части.</p>$$3\\frac{1}{2} - 1\\frac{1}{4} = 2 + \\frac{2}{4} - \\frac{1}{4} = 2\\frac{1}{4}$$"
  },
  {
    "id": "fractions021",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $1\\frac{1}{2} \\times 2\\frac{2}{3}$$",
    "choices": [
      "$4$",
      "$3\\frac{2}{3}$",
      "$4\\frac{1}{3}$",
      "$3\\frac{1}{2}$",
      "$4\\frac{1}{2}$"
    ],
    "answers": ["$4$"],
    "hint": "<p>Переводим в неправильные дроби и умножаем.</p>$$1\\frac{1}{2} = \\frac{3}{2}, 2\\frac{2}{3} = \\frac{8}{3}$$$$\\frac{3}{2} \\times \\frac{8}{3} = \\frac{24}{6} = 4$$"
  },
  {
    "id": "fractions022",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $2\\frac{1}{2} \\div 1\\frac{1}{4}$$",
    "choices": [
      "$2$",
      "$1\\frac{1}{2}$",
      "$2\\frac{1}{4}$",
      "$1\\frac{3}{4}$",
      "$2\\frac{1}{2}$"
    ],
    "answers": ["$2$"],
    "hint": "<p>Переводим в неправильные дроби и делим.</p>$$2\\frac{1}{2} = \\frac{5}{2}, 1\\frac{1}{4} = \\frac{5}{4}$$$$\\frac{5}{2} \\div \\frac{5}{4} = \\frac{5}{2} \\times \\frac{4}{5} = 2$$"
  },
  {
    "id": "fractions023",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение с разными знаменателями",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{2}{3} + \\frac{3}{5}$",
    "choices": [
      "$\\frac{19}{15}$",
      "$\\frac{5}{8}$",
      "$\\frac{6}{15}$",
      "$\\frac{10}{15}$",
      "$\\frac{13}{15}$"
    ],
    "answers": ["$\\frac{19}{15}$"],
    "hint": "<p>Общий знаменатель 15.</p>$$\\frac{2}{3} + \\frac{3}{5} = \\frac{10}{15} + \\frac{9}{15} = \\frac{19}{15}$$"
  },
  {
    "id": "fractions024",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание с разными знаменателями",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{7}{8} - \\frac{2}{3}$$",
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
    "id": "fractions025",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение выражения со скобками",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{1}{4}(8x + 12) - \\frac{1}{2}(2x + 4)$$",
    "choices": [
      "$x + 1$",
      "$2x + 3$",
      "$x + 2$",
      "$2x + 1$",
      "$x + 3$"
    ],
    "answers": ["$x + 1$"],
    "hint": "<p>Раскрываем обе скобки и вычитаем.</p>$$\\frac{1}{4}(8x + 12) = 2x + 3$$$$\\frac{1}{2}(2x + 4) = x + 2$$$$(2x + 3) - (x + 2) = x + 1$$"
  },
  {
    "id": "fractions026",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение общего знаменателя",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $\\frac{3a}{4} + \\frac{5a}{4} - \\frac{a}{4}$$",
    "choices": [
      "$\\frac{7}{4}a$",
      "$\\frac{3}{4}a$",
      "$\\frac{5}{4}a$",
      "$\\frac{9}{4}a$",
      "$\\frac{1}{4}a$"
    ],
    "answers": ["$\\frac{7}{4}a$"],
    "hint": "<p>Все дроби имеют общий знаменатель 4.</p>$$\\frac{3a}{4} + \\frac{5a}{4} - \\frac{a}{4} = \\frac{7a}{4} = \\frac{7}{4}a$$"
  },
  {
    "id": "fractions027",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сокращение сложной дроби",
    "theme": "Дроби",
    "text": "Сократите: $\\frac{15}{25}$$",
    "choices": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{8}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{5}$",
      "$\\frac{6}{10}$"
    ],
    "answers": ["$\\frac{3}{5}$"],
    "hint": "<p>Делим числитель и знаменатель на 5.</p>$$\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$$"
  },
  {
    "id": "fractions028",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение трех дробей",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$$",
    "choices": [
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{5}$",
      "$\\frac{2}{3}$"
    ],
    "answers": ["$\\frac{2}{5}$"],
    "hint": "<p>Последовательно умножаем дроби.</p>$$\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} = \\frac{24}{60} = \\frac{2}{5}$$"
  },
  {
    "id": "fractions029",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление на целое число",
    "theme": "Дроби",
    "text": "Вычислите: $\\frac{3}{4} \\div 2$",
    "choices": [
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{1}{4}$"
    ],
    "answers": ["$\\frac{3}{8}$"],
    "hint": "<p>Деление на число - это умножение на обратную дробь.</p>$$\\frac{3}{4} \\div 2 = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$"
  },
  {
    "id": "fractions030",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Комбинированное выражение",
    "theme": "Дроби",
    "text": "Упростите: $\\frac{1}{2}(4x + 6) + \\frac{1}{3}(3x + 9)$$",
    "choices": [
      "$3x + 6$",
      "$2x + 5$",
      "$4x + 7$",
      "$3x + 5$",
      "$2x + 6$"
    ],
    "answers": ["$3x + 6$"],
    "hint": "<p>Раскрываем обе скобки и складываем.</p>$$\\frac{1}{2}(4x + 6) = 2x + 3$$$$\\frac{1}{3}(3x + 9) = x + 3$$$$(2x + 3) + (x + 3) = 3x + 6$$"
  },

  {
    "id": "powers001",
    "type": "multiplechoices",
    "header": "Степени",
    "title": "Упрощение выражений 2",
    "theme": "Степени",
    "text": "Упростите выражение: $a^3 \\cdot a^2$",
    "choices": [
      "$a^5$",
      "$a^6$",
      "$a$",
      "$a^9$",
      "$a^1$"
    ],
    "answers": ["$a^5$"],
    "hint": "<p>При умножении степеней с одинаковыми основаниями показатели складываются.</p>$$a^m \\cdot a^n = a^{m+n}$$$$a^3 \\cdot a^2 = a^{3+2} = a^5$$"
  },
  {
    "id": "powers002",
    "type": "multiplechoices",
    "header": "Степени",
    "title": "Упрощение выражений 3",
    "theme": "Степени",
    "text": "Упростите выражение: $\\frac{b^7}{b^4}$",
    "choices": [
      "$b^3$",
      "$b^{11}$",
      "$b^4$",
      "$b^7$",
      "$b^{28}$"
    ],
    "answers": ["$b^3$"],
    "hint": "<p>При делении степеней с одинаковыми основаниями показатели вычитаются.</p>$$\\frac{a^m}{a^n} = a^{m-n}$$$$\\frac{b^7}{b^4} = b^{7-4} = b^3$$"
  },
  {
    "id": "powers003",
    "type": "multiplechoices",
    "header": "Степени",
    "title": "Упрощение выражений 4",
    "theme": "Степени",
    "text": "Упростите выражение: $(c^2)^4$",
    "choices": [
      "$c^6$",
      "$c^8$",
      "$c^2$",
      "$c^{16}$",
      "$c^4$"
    ],
    "answers": ["$c^8$"],
    "hint": "<p>При возведении степени в степень показатели перемножаются.</p>$$(a^m)^n = a^{m \\cdot n}$$$$(c^2)^4 = c^{2 \\cdot 4} = c^8$$"
  },
  {
    "id": "powers004",
    "type": "multiplechoices",
    "header": "Степени",
    "title": "Упрощение выражений 5",
    "theme": "Степени",
    "text": "Упростите выражение: $(2x)^3$",
    "choices": [
      "$2x^3$",
      "$8x^3$",
      "$6x^3$",
      "$2x^4$",
      "$8x$"
    ],
    "answers": ["$8x^3$"],
    "hint": "<p>При возведении произведения в степень каждый множитель возводится в степень.</p>$$(ab)^n = a^n \\cdot b^n$$$$(2x)^3 = 2^3 \\cdot x^3 = 8x^3$$"
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
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}+5} \\\\ 2x + y = {= {var1-10}*2+1} \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}+5)*2-({var1-10}*2+1))/3",
    "hint": "<p><strong>Метод сложения</strong></p><p>Умножаем первое уравнение на 2: 2x + 4y = {= ({var1-10}+5)*2}</p><p>Вычитаем второе: 3y = {= ({var1-10}+5)*2 - ({var1-10}*2+1)} = {= {var1-10}+9}</p><p>y = {= ({var1-10}+9)/3}</p><p>Из первого уравнения: x = {= {var1-10}+5} - 2y = {= {var1-10}+5} - {= ({var1-10}+9)*2/3}</p><p>Ответ: x = {= ({var1-10}+1)/3}</p>",
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
    "answer": "(({var1-10}*7)-{var1-10})/2-({var1-10}*3)",
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
    "answer": "{var1-10}",
    "hint": "<p><strong>Метод сложения</strong></p><p>Вычитаем уравнения: (2x + 3y) - (3x + 2y) = 0</p><p>-x + y = 0 ⇒ y = x</p><p>Подставляем в первое: 2x + 3x = {= {var1-10}+10}</p><p>5x = {= {var1-10}+10}</p><p>x = {= ({var1-10}+10)/5}</p><p>Ответ: x = {= ({var1-10}+10)/5}</p>",
    "randomfrom": [5, 10, 15, 20]
  },

  {
    "id": "system021",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Комбинированная система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} x + 2y = {= {var1-10}*3} \\\\ 3x - y = {= {var1-10}*4} \\end{cases}$$ Найдите x",
    "answer": "(({var1-10}*3)+({var1-10}*4)*2)/7",
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
    "answer": "(({var1-10}+6)-({var1-10})*2)/3",
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
    "answer": "(({var1-10}*7)*3-({var1-10}*5)*4)/1",
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
    "answer": "(({var1-10}*7)*5-({var1-10}*3)*3)/16",
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
    "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: 4x + 4y = {= {var1-10}*8}</p><p>x + y = {= {var1-10}*2}</p><p>Вычитаем из первого уравнения: 2y = {= {var1-10}*4 - {var1-10}*2} = {= {var1-10}*2}</p><p>y = {var1-10}</p><p>x = {= {var1-10}*2} - y = {= {var1-10}*2} - {var1-10} = {var1-10}</p><p>Ответ: x = {var1-10}</p>",
    "randomfrom": [2, 3, 4, 5]
  },
  {
    "id": "system026",
    "type": "mathwithrandomnumber",
    "header": "Системы уравнений",
    "title": "Краевая система",
    "theme": "Системы уравнений",
    "text": "Решите систему уравнений: $$\\begin{cases} 2x + 5y = {= {var1-10}*7} \\\\ x - 5y = {var1-10} \\end{cases}$$ Найдите y",
    "answer": "(({var1-10}*7)-({var1-10})*2)/15",
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
    "answer": "(({var1-10}+7)*2-({var1-10}*2+1))/3",
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

]

window.quizesSets = quizesSets;
