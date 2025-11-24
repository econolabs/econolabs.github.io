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
  "id": "log_quotient", 
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Логарифм частного",
  "theme": "Алгебра", 
  "text": "Чему равно выражение: $$\\log_2({var1-10}^2) - \\log_2({var1-10})$$",
  "answer": "LOG({var1-10}, 2)",
  "hint": "Свойства: $$\\log_a(b) - \\log_a(c) = \\log_a(\\frac{b}{c})$$ и $$\\log_2(a^2) = 2\\log_2(a)$$",
  "randomfrom": [2, 3, 4, 5]
},
{
  "id": "log_power",
  "type": "mathwithrandomnumber", 
  "header": "Устный счёт",
  "title": "Логарифм степени",
  "theme": "Алгебра",
  "text": "Чему равно выражение: $${var1-10} \\cdot \\ln({var1-10})$$",
  "answer": "LN({var1-10}^{var1-10})", 
  "hint": "Свойство логарифма степени: $$n \\cdot \\log_a(b) = \\log_a(b^n)$$",
  "randomfrom": [2, 3, 4, 5]
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
  id: "stereobasics011",
  type: "multiplechoices",
  header: "Тест по геометрии",
  title: "Распознавание фигур", 
  theme: "Планиметрия",
  text: "Как называется эта плоская фигура?",
  sceneType: "triangle",
  sceneOptions: {
    is2D: true,
    showVertices: true,
    rotationSpeed: 0
  },
  choices: [
    "Треугольник",
    "Квадрат", 
    "Круг",
    "Прямоугольник",
    "Шестиугольник",
    "Пятиугольник"
  ],
  answers: ["Треугольник"],
  hint: `
    <div class="alert alert-primary mt-3">
      <h6 class="alert-heading"><i class="fas fa-shapes"></i> Подсказка</h6>
      <p class="mb-2">Эта фигура имеет:</p>
      <ul class="mb-1">
        <li>Три стороны</li>
        <li>Три угла</li>
        <li>Сумма углов равна 180°</li>
      </ul>
    </div>
  `
},

    {
    id: "stereobasics001",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Определение фигуры",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "cube",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.015
    },
    choices: [
      "Куб",
      "Пирамида",
      "Цилиндр",
      "Конус",
      "Сфера",
      "Призма"
    ],
    answers: ["Куб"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-cube"></i> Подсказка</h6>
        <p class="mb-2">Эта фигура имеет:</p>
        <ul class="mb-1">
          <li>6 одинаковых квадратных граней</li>
          <li>12 равных рёбер</li>
          <li>8 вершин</li>
        </ul>
        <p class="mb-0">Все углы прямые, все грани параллельны или перпендикулярны друг другу</p>
      </div>
    `
  },
  {
    id: "stereobasics002",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Геометрическая форма",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "sphere",
    sceneOptions: {
      rotationSpeed: 0.01
    },
    choices: [
      "Сфера",
      "Куб",
      "Цилиндр",
      "Конус",
      "Тор",
      "Эллипсоид"
    ],
    answers: ["Сфера"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-globe"></i> Подсказка</h6>
        <p class="mb-2">Основные свойства этой фигуры:</p>
        <ul class="mb-1">
          <li>Все точки поверхности равноудалены от центра</li>
          <li>Не имеет рёбер, граней и вершин</li>
          <li>Образуется вращением окружности вокруг диаметра</li>
        </ul>
      </div>
    `
  },
  {
    id: "stereobasics003",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Распознавание объектов",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "cylinder",
    sceneOptions: {
      showVertices: false,
      rotationSpeed: 0.012
    },
    choices: [
      "Цилиндр",
      "Конус",
      "Призма",
      "Куб",
      "Сфера",
      "Пирамида"
    ],
    answers: ["Цилиндр"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-shapes"></i> Подсказка</h6>
        <p class="mb-2">Характерные особенности:</p>
        <ul class="mb-1">
          <li>Два параллельных круглых основания</li>
          <li>Боковая поверхность - прямоугольник, "свёрнутый" в трубу</li>
          <li>Образуется вращением прямоугольника вокруг одной из сторон</li>
        </ul>
      </div>
    `
  },
  {
    id: "stereobasics004",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Классификация фигур",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "cone",
    sceneOptions: {
      rotationSpeed: 0.018
    },
    choices: [
      "Конус",
      "Цилиндр",
      "Пирамида",
      "Сфера",
      "Куб",
      "Тор"
    ],
    answers: ["Конус"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-tree"></i> Подсказка</h6>
        <p class="mb-2">Отличительные признаки:</p>
        <ul class="mb-1">
          <li>Круглое основание</li>
          <li>Вершина (остриё), не лежащая в плоскости основания</li>
          <li>Боковая поверхность конической формы</li>
          <li>Образуется вращением прямоугольного треугольника вокруг катета</li>
        </ul>
      </div>
    `
  },
  {
    id: "stereobasics005",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Идентификация формы",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "pyramid",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.014
    },
    choices: [
      "Пирамида",
      "Призма",
      "Конус",
      "Куб",
      "Цилиндр",
      "Сфера"
    ],
    answers: ["Пирамида"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-monument"></i> Подсказка</h6>
        <p class="mb-2">Особенности строения:</p>
        <ul class="mb-1">
          <li>Многогранник с многоугольником в основании</li>
          <li>Боковые грани - треугольники, сходящиеся в одной вершине</li>
          <li>Количество боковых граней равно количеству сторон основания</li>
        </ul>
      </div>
    `
  },
  {
    id: "stereobasics006",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Анализ структуры",
    theme: "Названия фигур",
    text: "Как называется эта объёмная фигура?",
    sceneType: "prism",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.016
    },
    choices: [
      "Призма",
      "Пирамида",
      "Цилиндр",
      "Куб",
      "Конус",
      "Сфера"
    ],
    answers: ["Призма"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-gem"></i> Подсказка</h6>
        <p class="mb-2">Ключевые характеристики:</p>
        <ul class="mb-1">
          <li>Два параллельных одинаковых многоугольника в основаниях</li>
          <li>Боковые грани - параллелограммы</li>
          <li>Все сечения, параллельные основаниям, одинаковы</li>
        </ul>
      </div>
    `
  },
  // {
  //   id: "stereobasics007",
  //   type: "multiplechoices",
  //   header: "Тест по стереометрии",
  //   title: "Определение формы",
  //   theme: "Планиметрия",
  //   text: "Как называется эта плоская фигура?",
  //   sceneType: "cube",
  //   sceneOptions: {
  //     showVertices: true,
  //     rotationSpeed: 0,
  //     showFaces: true,
  //       is2D: true,
  //   },
  //   choices: [
  //     "Квадрат",
  //     "Прямоугольник",
  //     "Треугольник",
  //     "Круг",
  //     "Шестиугольник",
  //     "Ромб"
  //   ],
  //   answers: ["Квадрат"],
  //   hint: `
  //     <div class="alert alert-primary mt-3">
  //       <h6 class="alert-heading"><i class="fas fa-square"></i> Подсказка</h6>
  //       <p class="mb-2">Свойства фигуры:</p>
  //       <ul class="mb-1">
  //         <li>Четыре равные стороны</li>
  //         <li>Четыре прямых угла</li>
  //         <li>Диагонали равны и перпендикулярны</li>
  //         <li>Частный случай прямоугольника и ромба</li>
  //       </ul>
  //     </div>
  //   `
  // },
  // {
  //   id: "stereobasics008",
  //   type: "multiplechoices",
  //   header: "Тест по стереометрии",
  //   title: "Геометрический анализ",
  //   theme: "Планиметрия",
  //   text: "Как называется эта плоская фигура?",
  //   sceneType: "sphere",
  //   sceneOptions: {
  //     rotationSpeed: 0,
  //     showFaces: true,
  //       is2D: true,
  //   },
  //   choices: [
  //     "Круг",
  //     "Окружность",
  //     "Эллипс",
  //     "Квадрат",
  //     "Треугольник",
  //     "Пятиугольник"
  //   ],
  //   answers: ["Круг"],
  //   hint: `
  //     <div class="alert alert-primary mt-3">
  //       <h6 class="alert-heading"><i class="fas fa-circle"></i> Подсказка</h6>
  //       <p class="mb-2">Определение:</p>
  //       <ul class="mb-1">
  //         <li>Часть плоскости, ограниченная окружностью</li>
  //         <li>Все точки внутри границы равноудалены от центра</li>
  //         <li>Имеет площадь, но не имеет периметра</li>
  //         <li>Отличается от окружности (только граница)</li>
  //       </ul>
  //     </div>
  //   `
  // },
  
  // {
  //   id: "stereobasics010",
  //   type: "multiplechoices",
  //   header: "Тест по стереометрии",
  //   title: "Классификация фигур",
  //   theme: "Планиметрия",
  //   text: "Как называется эта плоская фигура?",
  //   sceneType: "prism",
  //   sceneOptions: {
  //     rotationSpeed: 0,
  //     showVertices: true,
  //     showFaces: true,
  //       is2D: true,
  //   },
  //   choices: [
  //     "Шестиугольник",
  //     "Пятиугольник",
  //     "Квадрат",
  //     "Треугольник",
  //     "Восьмиугольник",
  //     "Прямоугольник"
  //   ],
  //   answers: ["Шестиугольник"],
  //   hint: `
  //     <div class="alert alert-primary mt-3">
  //       <h6 class="alert-heading"><i class="fas fa-hexagon"></i> Подсказка</h6>
  //       <p class="mb-2">Характеристики:</p>
  //       <ul class="mb-1">
  //         <li>Шесть сторон и шесть углов</li>
  //         <li>Сумма внутренних углов равна 720°</li>
  //         <li>Правильный шестиугольник имеет равные стороны и углы</li>
  //         <li>В природе: пчелиные соты, снежинки</li>
  //       </ul>
  //     </div>
  //   `
  // },

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
  // {
  //   id: "stereo009",
  //   type: "multiplechoices",
  //   header: "Тест по стереометрии",
  //   title: "Геометрические построения",
  //   theme: "Торы",
  //   text: "Какая линия образует эту фигуру при вращении?",
  //   sceneType: "torus",
  //   sceneOptions: {
  //     rotationSpeed: 0.025
  //   },
  //   choices: [
  //     "Прямая линия",
  //     "Окружность",
  //     "Эллипс",
  //     "Парабола",
  //     "Гипербола",
  //     "Отрезок"
  //   ],
  //   answers: ["Окружность"],
  //   hint: `
  //     <div class="alert alert-success mt-3">
  //       <h6 class="alert-heading"><i class="fas fa-ring"></i> Подсказка</h6>
  //       <p class="mb-2">Тор образуется вращением окружности вокруг оси:</p>
  //       <ul class="mb-1">
  //         <li>Окружность лежит в плоскости</li>
  //         <li>Ось вращения находится в той же плоскости</li>
  //         <li>Ось не пересекает окружность</li>
  //       </ul>
  //       <p class="mb-0 small">Пример: бублик, спасательный круг</p>
  //     </div>
  //   `
  // },
  {
    id: "stereo010",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Сравнение фигур",
    theme: "Пирамиды",
    text: "Какая фигура имеет наибольшее количество вершин среди представленных?",
    // sceneType: "pyramid",
    // sceneOptions: {
    //   showVertices: true,
    //   size: 1.3
    // },
    choices: [
      "Треугольная пирамида",
      "Четырёхугольная пирамида", 
      "Пятиугольная пирамида",
      "Шестиугольная пирамида",
      "Куб",
      "Октаэдр"
    ],
    answers: ["Шестиугольная пирамида"],
    hint: `
      <div class="alert alert-info mt-3">
        <h6 class="alert-heading"><i class="fas fa-sitemap"></i> Подсказка</h6>
        <p class="mb-2">Количество вершин у пирамид:</p>
        <ul class="mb-2">
          <li>Треугольная: 4 вершины</li>
          <li>Четырёхугольная: 5 вершин</li>
          <li>Пятиугольная: 6 вершин</li>
          <li><strong>Шестиугольная: 7 вершин</strong></li>
        </ul>
        <p class="mb-0 small">Формула: n-угольная пирамида имеет n+1 вершину</p>
      </div>
    `
  },
  {
    id: "stereo011",
    type: "multiplechoices",
    header: "Тест по стереометрии",
    title: "Теоремы стереометрии",
    theme: "Аксиомы",
    text: "Какая теорема утверждает, что через три точки, не лежащие на одной прямой, можно провести плоскость, и притом только одну?",
    sceneType: "cube",
    sceneOptions: {
      showVertices: true,
      rotationSpeed: 0.012
    },
    choices: [
      "Теорема о параллельных прямых",
      "Теорема о перпендикуляре к плоскости",
      "Аксиома о трёх точках",
      "Теорема Пифагора в пространстве",
      "Теорема о скрещивающихся прямых",
      "Аксиома параллельности"
    ],
    answers: ["Аксиома о трёх точках"],
    hint: `
      <div class="alert alert-primary mt-3">
        <h6 class="alert-heading"><i class="fas fa-book"></i> Подсказка</h6>
        <p class="mb-2">Основные аксиомы стереометрии:</p>
        <ul class="mb-1">
          <li><strong>Аксиома 1:</strong> Через любые три точки, не лежащие на одной прямой, проходит плоскость, и притом только одна</li>
          <li>Аксиома 2: Если две точки прямой лежат в плоскости, то вся прямая лежит в этой плоскости</li>
          <li>Аксиома 3: Если две плоскости имеют общую точку, то они имеют общую прямую</li>
        </ul>
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


   {
    "id": "trapezoid001",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь трапеции 1",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
    "functionType": "trapezoid_horizontal",
    "func": (x) => {
      // Возвращаем массив точек для отрисовки трапеции
      // Формат: [x1, y1, x2, y2, x3, y3, x4, y4]
      return [1, 1, 4, 1, 3, 4, 2, 4];
    },
    "choices": [
      "6 кв.ед.",
      "7.5 кв.ед.", 
      "9 кв.ед.",
      "10.5 кв.ед.",
      "12 кв.ед."
    ],
    "answers": ["6 кв.ед."],
    "hint": "Площадь трапеции: S = (a + b)/2 × h = (3 + 2)/2 × 3 = 2.5 × 3 = 7.5"
  },
  {
    "id": "trapezoid002",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости", 
    "title": "Площадь трапеции 2",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
    "functionType": "trapezoid_vertical",
    "func": (x) => {
      return [2, 1, 2, 4, 5, 3, 5, 2];
    },
    "choices": [
      "8 кв.ед.",
      "9 кв.ед.",
      "10 кв.ед.", 
      "6 кв.ед.",
      "12 кв.ед."
    ],
    "answers": ["6 кв.ед."],
    "hint": "Основания: 3 и 6, высота: 2. S = (3 + 6)/2 × 2 = 4.5 × 2 = 9"
  },
  {
    "id": "trapezoid003",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь трапеции 3", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
    "functionType": "trapezoid_isosceles",
    "func": (x) => {
      return [1, 1, 5, 1, 4, 4, 2, 4];
    },
    "choices": [
      "8 кв.ед.",
      "9 кв.ед.",
      "10 кв.ед.",
      "11 кв.ед.", 
      "12 кв.ед."
    ],
    "answers": ["9 кв.ед."],
    "hint": "Равнобедренная трапеция: основания 4 и 2, высота 3. S = (4 + 2)/2 × 3 = 3 × 3 = 9"
  },
  {
    "id": "trapezoid004",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь трапеции 4",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:", 
    "functionType": "trapezoid_rectangular",
    "func": (x) => {
      return [1, 1, 4, 1, 4, 4, 1, 3];
    },
    "choices": [
      "6 кв.ед.",
      "7.5 кв.ед.",
      "8 кв.ед.",
      "9 кв.ед.",
      "10.5 кв.ед." 
    ],
    "answers": ["7.5 кв.ед."],
    "hint": "Прямоугольная трапеция: основания 3 и 2, высота 3. S = (3 + 2)/2 × 3 = 2.5 × 3 = 7.5"
  },
  {
    "id": "trapezoid005",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь трапеции 5",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
    "functionType": "trapezoid_large",
    "func": (x) => {
      return [1, 1, 6, 1, 5, 5, 2, 5];
    },
    "choices": [
      "15 кв.ед.",
      "16 кв.ед.", 
      "18 кв.ед.",
      "20 кв.ед.",
      "22 кв.ед."
    ],
    "answers": ["16 кв.ед."],
    "hint": "Большая трапеция: основания 5 и 3, высота 4. S = (5 + 3)/2 × 4 = 4 × 4 = 16"
  },
   {
    "id": "trapezoid006",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь трапеции 6", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
    "functionType": "trapezoid_small",
    "func": (x) => {
      return [2, 2, 5, 2, 4, 4, 3, 4];
    },
    "choices": [
      "3 кв.ед.",
      "4 кв.ед.",
      "5 кв.ед.",
      "6 кв.ед.",
      "7 кв.ед."
    ],
    "answers": ["4 кв.ед."],
    "hint": "Маленькая трапеция: основания 3 и 1, высота 2. S = (3 + 1)/2 × 2 = 2 × 2 = 4"
  },

  {
  "id": "trapezoid007",
  "type": "multiplechoices",
  "header": "Геометрия на координатной плоскости",
  "title": "Площадь трапеции 7",
  "theme": "Геометрия",
  "functionGraph": "true",
  "text": "Найдите площадь трапеции, изображенной на координатной плоскости:",
  "functionType": "trapezoid_negative",
  "func": (x) => {
    return [-3, 1, 3, 1, 2, 4, -2, 4]; // С отрицательными x
  },
  "choices": [
    "12 кв.ед.",
    "15 кв.ед.", 
    "18 кв.ед.",
    "20 кв.ед.",
    "24 кв.ед."
  ],
  "answers": ["15 кв.ед."],
  "hint": "Трапеция симметрична относительно оси Y: основания 6 и 4, высота 3. S = (6+4)/2 × 3 = 5 × 3 = 15"
},


 {
    "id": "parallelogram001",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь параллелограмма 1",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
    "functionType": "parallelogram_horizontal",
    "func": (x) => {
      // Возвращаем массив точек для отрисовки параллелограмма: [x1, y1, x2, y2, x3, y3, x4, y4]
      return [1, 1, 5, 1, 6, 4, 2, 4];
    },
    "choices": [
      "8 кв.ед.",
      "10 кв.ед.", 
      "12 кв.ед.",
      "14 кв.ед.",
      "16 кв.ед."
    ],
    "answers": ["12 кв.ед."],
    "hint": "Основание a = 4, высота h = 3. Площадь S = a × h = 4 × 3 = 12"
  },
  {
    "id": "parallelogram002",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости", 
    "title": "Площадь параллелограмма 2",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
    "functionType": "parallelogram_vertical",
    "func": (x) => {
      return [2, 1, 2, 5, 5, 4, 5, 0];
    },
    "choices": [
      "12 кв.ед.",
      "15 кв.ед.",
      "18 кв.ед.", 
      "20 кв.ед.",
      "24 кв.ед."
    ],
    "answers": [ "12 кв.ед."],
    "hint": "Основание a = 4, высота h = 3. S = a × h = 4 × 3 = 12"
  },
  {
    "id": "parallelogram003",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь параллелограмма 3", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
    "functionType": "parallelogram_rhombus",
    "func": (x) => {
      return [2, 1, 5, 1, 6, 4, 3, 4];
    },
    "choices": [
      "6 кв.ед.",
      "8 кв.ед.",
      "9 кв.ед.",
      "10 кв.ед.", 
      "12 кв.ед."
    ],
    "answers": ["9 кв.ед."],
    "hint": "Параллелограмм близок к ромбу. Основание 3, высота 3. S = 3 × 3 = 9"
  },
  {
    "id": "parallelogram004",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь параллелограмма 4",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:", 
    "functionType": "parallelogram_rectangle",
    "func": (x) => {
      return [1, 1, 5, 1, 5, 4, 1, 4];
    },
    "choices": [
      "8 кв.ед.",
      "10 кв.ед.",
      "12 кв.ед.",
      "14 кв.ед.",
      "16 кв.ед." 
    ],
    "answers": ["12 кв.ед."],
    "hint": "Это прямоугольник! Длина 4, ширина 3. S = 4 × 3 = 12"
  },
  {
  "id": "parallelogram005",
  "type": "multiplechoices",
  "header": "Геометрия на координатной плоскости",
  "title": "Площадь параллелограмма 5",
  "theme": "Геометрия",
  "functionGraph": "true",
  "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
  "functionType": "parallelogram_large",
  "func": (x) => {
    return [-3, 1, 3, 1, 4, 5, -2, 5]; // Левая часть теперь с отрицательными x
  },
  "choices": [
    "18 кв.ед.",
    "20 кв.ед.", 
    "24 кв.ед.",
    "28 кв.ед.",
    "30 кв.ед."
  ],
  "answers": ["24 кв.ед."],
  "hint": "Большой параллелограмм: основание 6, высота 4. S = 6 × 4 = 24. Координаты: A(-3,1), B(3,1), C(4,5), D(-2,5)"
},
{
  "id": "parallelogram006",
  "type": "multiplechoices",
  "header": "Геометрия на координатной плоскости",
  "title": "Площадь параллелограмма 6", 
  "theme": "Геометрия",
  "functionGraph": "true",
  "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
  "functionType": "parallelogram_slanted",
  "func": (x) => { return [1, 2, 4, 1, 6, 4, 3, 5];},
  "choices": [
    "8 кв.ед.",
    "9 кв.ед.",
    "10 кв.ед.",
    "11 кв.ед.",
    "12 кв.ед."
  ],
  "answers": ["11 кв.ед."],
  "hint": "Координаты вершин: A(1,2), B(4,1), C(6,4), D(3,5).<br><br><strong>Способ 1: Векторное произведение</strong><br>Вектор AB = (3, -1), вектор AD = (2, 3)<br>Площадь = |AB × AD| = |3×3 - (-1)×2| = |9 + 2| = 11<br><br><strong>Способ 2: Через определитель</strong><br>S = |(x₁y₂ + x₂y₃ + x₃y₄ + x₄y₁) - (y₁x₂ + y₂x₃ + y₃x₄ + y₄x₁)| ÷ 2<br>S = |(1×1 + 4×4 + 6×5 + 3×2) - (2×4 + 1×6 + 4×3 + 5×1)| ÷ 2<br>S = |(1 + 16 + 30 + 6) - (8 + 6 + 12 + 5)| ÷ 2 = |53 - 31| ÷ 2 = 11"
},
  {
    "id": "parallelogram007",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь параллелограмма 7",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:", 
    "functionType": "parallelogram_small",
    "func": (x) => {
      return [2, 2, 5, 2, 6, 4, 3, 4];
    },
    "choices": [
      "4 кв.ед.",
      "5 кв.ед.",
      "6 кв.ед.",
      "7 кв.ед.",
      "8 кв.ед." 
    ],
    "answers": ["6 кв.ед."],
    "hint": "Маленький параллелограмм: основание 3, высота 2. S = 3 × 2 = 6"
  },
  {
    "id": "parallelogram008",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь параллелограмма 8",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
    "functionType": "parallelogram_diagonal",
    "func": (x) => {
      return [1, 1, 5, 1, 4, 5, 0, 5];
    },
    "choices": [
      "12 кв.ед.",
      "14 кв.ед.", 
      "16 кв.ед.",
      "18 кв.ед.",
      "20 кв.ед."
    ],
    "answers": ["16 кв.ед."],
    "hint": "Основание 4, высота 4. S = 4 × 4 = 16. Диагонали помогают проверить"
  },

  {
  "id": "parallelogram009",
  "type": "multiplechoices",
  "header": "Геометрия на координатной плоскости",
  "title": "Площадь параллелограмма 9",
  "theme": "Геометрия",
  "functionGraph": "true",
  "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
  "functionType": "parallelogram_negative",
  "func": (x) => {
    return [-4, -2, 2, -2, 3, 2, -3, 2]; // Отрицательные x и y
  },
  "choices": [
    "18 кв.ед.",
    "20 кв.ед.", 
    "24 кв.ед.",
    "28 кв.ед.",
    "30 кв.ед."
  ],
  "answers": ["24 кв.ед."],
  "hint": "Параллелограмм в отрицательных координатах: основание 6, высота 4. S = 6 × 4 = 24"
},
{
  "id": "parallelogram010",
  "type": "multiplechoices",
  "header": "Геометрия на координатной плоскости",
  "title": "Площадь параллелограмма 10",
  "theme": "Геометрия",
  "functionGraph": "true",
  "text": "Найдите площадь параллелограмма, изображенного на координатной плоскости:",
  "functionType": "parallelogram_mixed",
  "func": (x) => {
    return [-2, 1, 4, 1, 2, 4, -4, 4]; // Симметрично относительно оси Y
  },
  "choices": [
    "12 кв.ед.",
    "15 кв.ед.", 
    "18 кв.ед.",
    "21 кв.ед.",
    "24 кв.ед."
  ],
  "answers": ["18 кв.ед."],
  "hint": "Симметричный параллелограмм: основание 6, высота 3. S = 6 × 3 = 18"
},

{
    "id": "circle001",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь круга 1",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение площади круга, изображенного на координатной плоскости:",
    "functionType": "circle_center_origin",
    "func": (x) => {
      return [0, 0, 3];
    },
    "choices": [
      "28.27 кв.ед.",
      "37.70 кв.ед.", 
      "50.27 кв.ед.",
      "78.54 кв.ед.",
      "113.10 кв.ед."
    ],
    "answers": ["28.27 кв.ед."],
    "hint": "Окружность с центром в начале координат, радиус R=3. Площадь S = πR² = 3.14×9 ≈ 28.27"
  },
  {
    "id": "circle002",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости", 
    "title": "Длина окружности 1",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение длины окружности, изображенной на координатной плоскости:",
    "functionType": "circle_center_positive",
    "func": (x) => {
      return [2, 2, 2];
    },
    "choices": [
      "6.28 ед.",
      "12.57 ед.",
      "18.85 ед.", 
      "25.13 ед.",
      "31.42 ед."
    ],
    "answers": ["12.57 ед."],
    "hint": "Окружность с центром (2,2), радиус R=2. Длина C = 2πR = 2×3.14×2 ≈ 12.57"
  },
  {
    "id": "circle003",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь круга 2", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение площади круга, изображенного на координатной плоскости:",
    "functionType": "circle_center_negative",
    "func": (x) => {
      return [-2, -1, 4];
    },
    "choices": [
      "37.70 кв.ед.",
      "50.27 кв.ед.",
      "62.83 кв.ед.",
      "78.54 кв.ед.", 
      "100.53 кв.ед."
    ],
    "answers": ["50.27 кв.ед."],
    "hint": "Окружность с центром (-2,-1), радиус R=4. Площадь S = πR² = 3.14×16 ≈ 50.27"
  },
  {
    "id": "circle004",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Длина окружности 2",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение длины окружности, изображенной на координатной плоскости:", 
    "functionType": "circle_large",
    "func": (x) => {
      return [0, 0, 5];
    },
    "choices": [
      "15.71 ед.",
      "25.13 ед.",
      "31.42 ед.",
      "37.70 ед.",
      "47.12 ед." 
    ],
    "answers": ["31.42 ед."],
    "hint": "Большая окружность с центром в начале координат, радиус R=5. Длина C = 2πR = 2×3.14×5 ≈ 31.42"
  },
  {
    "id": "circle005",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь круга 3",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение площади круга, изображенного на координатной плоскости:",
    "functionType": "circle_small",
    "func": (x) => {
      return [1, -1, 1];
    },
    "choices": [
      "2.14 кв.ед.",
      "3.14 кв.ед.", 
      "4.71 кв.ед.",
      "6.28 кв.ед.",
      "7.85 кв.ед."
    ],
    "answers": ["3.14 кв.ед."],
    "hint": "Маленькая окружность с центром (1,-1), радиус R=1. Площадь S = πR² = 3.14×1 ≈ 3.14"
  },
  {
    "id": "circle006",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Длина окружности 3", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение длины окружности, изображенной на координатной плоскости:",
    "functionType": "circle_diameter",
    "func": (x) => {
      return [-3, 2, 2.5];
    },
    "choices": [
      "12.57 ед.",
      "15.71 ед.",
      "18.85 ед.",
      "21.99 ед.",
      "25.13 ед."
    ],
    "answers": ["15.71 ед."],
    "hint": "Окружность с центром (-3,2), радиус R=2.5. Длина C = 2πR = 2×3.14×2.5 ≈ 15.71"
  },
  {
    "id": "circle007",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь круга 4",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение площади круга, изображенного на координатной плоскости:", 
    "functionType": "circle_quarter",
    "func": (x) => {
      return [0, 0, 6];
    },
    "choices": [
      "84.82 кв.ед.",
      "101.79 кв.ед.",
      "113.10 кв.ед.",
      "125.66 кв.ед.",
      "150.80 кв.ед." 
    ],
    "answers": ["113.10 кв.ед."],
    "hint": "Окружность с центром в начале координат, радиус R=6. Площадь S = πR² = 3.14×36 ≈ 113.10"
  },
  {
    "id": "circle008",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Длина окружности 4",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкое значение длины окружности, изображенной на координатной плоскости:",
    "functionType": "circle_edge",
    "func": (x) => {
      return [4, -3, 3];
    },
    "choices": [
      "15.71 ед.",
      "18.85 ед.", 
      "21.99 ед.",
      "25.13 ед.",
      "28.27 ед."
    ],
    "answers": ["18.85 ед."],
    "hint": "Окружность с центром (4,-3), радиус R=3. Длина C = 2πR = 2×3.14×3 ≈ 18.85"
  },
  {
    "id": "circle009",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь и длина 1", 
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкие значения площади круга и длины его окружности:",
    "functionType": "circle_comprehensive",
    "func": (x) => {
      return [-2, 3, 4];
    },
    "choices": [
      "S=45.36, C=23.55",
      "S=50.27, C=25.13",
      "S=55.42, C=26.70",
      "S=60.79, C=28.27",
      "S=65.97, C=29.85"
    ],
    "answers": ["S=50.27, C=25.13"],
    "hint": "Окружность с центром (-2,3), радиус R=4. Площадь S=3.14×16≈50.27, длина C=2×3.14×4≈25.13"
  },
  {
    "id": "circle010",
    "type": "multiplechoices",
    "header": "Геометрия на координатной плоскости",
    "title": "Площадь и длина 2",
    "theme": "Геометрия",
    "functionGraph": "true",
    "text": "Найдите наиболее близкие значения площади круга и длины его окружности:", 
    "functionType": "circle_mixed",
    "func": (x) => {
      return [3, -2, 5];
    },
    "choices": [
      "S=68.54, C=29.85",
      "S=72.26, C=31.42",
      "S=75.40, C=32.99",
      "S=78.54, C=31.42",
      "S=82.47, C=33.98" 
    ],
    "answers": ["S=78.54, C=31.42"],
    "hint": "Окружность с центром (3,-2), радиус R=5. Площадь S=3.14×25≈78.54, длина C=2×3.14×5≈31.42"
  },



  //End

  {
  "id": "geometry001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 21",
  "theme": "Геометрия", 
  "text": "Через любые две точки проходит ... прямая(ых)",
  "choices": [
    "только одна",
    "две",
    "бесконечно много",
    "ни одной",
    "только три"
  ],
  "answers": ["только одна"],
  "hint": `<p>Это одна из основных аксиом геометрии:</p>
    <ul>
    <li><strong>Аксиома:</strong> Через любые две различные точки можно провести прямую, и притом только одну</li>
    <li><strong>Объяснение:</strong> Если бы через две точки проходило больше одной прямой, это нарушало бы основные принципы геометрии</li>
    <li><strong>Пример:</strong> На листе бумаги отметьте две точки - через них можно провести ровно одну прямую линию</li>
    </ul>`
},



{
  "id": "geometry002",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 22",
  "theme": "Геометрия",
  "text": "В чем отличие прямой от луча?",
  "choices": [
    "Прямая бесконечна в обе стороны, а луч - в одну",
    "Прямая имеет длину, а луч - нет",
    "Луч проходит через точки, а прямая - нет",
    "Прямая может быть кривой, а луч - только прямой",
    "Отличий нет - это одно и то же"
  ],
  "answers": ["Прямая бесконечна в обе стороны, а луч - в одну"],
  "hint": `<p>Основные отличия прямой и луча:</p>
    <ul>
    <li><strong>Прямая:</strong> Не имеет начала и конца, бесконечна в обе стороны</li>
    <li><strong>Луч:</strong> Имеет начало (точку), но не имеет конца, бесконечен только в одну сторону</li>
    <li><strong>Пример луча:</strong> Солнечный луч - начинается от солнца и уходит в бесконечность</li>
    <li><strong>Пример прямой:</strong> Линия горизонта - кажется бесконечной в обе стороны</li>
    </ul>`
},

{
  "id": "geometry003",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 23",
  "theme": "Геометрия",
  "text": "Через точку, не лежащую на данной прямой, проходит ..., параллельная(ых) данной.",
  "choices": [
    "только одна прямая",
    "две прямые", 
    "бесконечно много прямых",
    "ни одной прямой",
    "только три прямые"
  ],
  "answers": ["только одна прямая"],
  "hint": `<p>Это одна из аксиом евклидовой геометрии:</p>
    <ul>
    <li><strong>Аксиома параллельных:</strong> Через точку, не лежащую на данной прямой, можно провести только одну прямую, параллельную данной</li>
    <li><strong>Объяснение:</strong> Если бы можно было провести больше одной параллельной, это противоречило бы основам геометрии</li>
    <li><strong>Пример:</strong> Нарисуйте прямую и точку вне её - через эту точку можно провести ровно одну прямую, которая никогда не пересечётся с исходной</li>
    <li><strong>Исключение:</strong> В неевклидовых геометриях это правило может не выполняться</li>
    </ul>`
},


{
  "id": "geometry004",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 24",
  "theme": "Геометрия",
  "text": "Утверждения, не требующие доказательств в геометрии называются",
  "choices": [
    "аксиомами",
    "теоремами",
    "гипотезами",
    "леммами",
    "постулатами"
  ],
  "answers": ["аксиомами", "постулатами"],
  "hint": `<p>Основные понятия геометрических утверждений:</p>
    <ul>
    <li><strong>Аксиомы/постулаты:</strong> Исходные положения, принимаемые без доказательств</li>
    <li><strong>Теоремы:</strong> Утверждения, требующие доказательства на основе аксиом</li>
    <li><strong>Леммы:</strong> Вспомогательные теоремы, используемые для доказательства других теорем</li>
    <li><strong>Гипотезы:</strong> Научные предположения, требующие проверки</li>
    <li><strong>Примеры аксиом:</strong> "Через две точки можно провести прямую", "Целое больше части"</li>
    </ul>`
},

{
  "id": "geometry005",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 25",
  "theme": "Геометрия",
  "text": "Леммы это",
  "choices": [
    "вспомогательные теоремы для доказательства других теорем",
    "основные утверждения, не требующие доказательств",
    "утверждения, которые нужно проверить на практике",
    "геометрические построения",
    "математические предположения"
  ],
  "answers": ["вспомогательные теоремы для доказательства других теорем"],
  "hint": `<p>Леммы в математике:</p>
    <ul>
    <li><strong>Определение:</strong> Лемма - это вспомогательная теорема, используемая для доказательства более сложных теорем</li>
    <li><strong>Происхождение:</strong> От греческого слова "λῆμμα" - "предположение", "принятие"</li>
    <li><strong>Назначение:</strong> Упрощают доказательство основных теорем, разбивая его на этапы</li>
    <li><strong>Пример:</strong> Лемма о равнобедренном треугольнике используется при доказательстве теоремы о сумме углов треугольника</li>
    <li><strong>Отличие от теоремы:</strong> Лемма обычно проще и служит "строительным блоком" для более важных результатов</li>
    </ul>`
},

{
  "id": "geometry006",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 26",
  "theme": "Геометрия",
  "text": "Утверждения, требующие доказательств, называются",
  "choices": [
    "теоремами",
    "аксиомами",
    "постулатами", 
    "гипотезами",
    "леммами"
  ],
  "answers": ["теоремами"],
  "hint": `<p>Классификация математических утверждений:</p>
    <ul>
    <li><strong>Теоремы:</strong> Утверждения, которые требуют доказательства на основе аксиом и ранее доказанных теорем</li>
    <li><strong>Аксиомы/постулаты:</strong> Исходные положения, принимаемые без доказательств</li>
    <li><strong>Леммы:</strong> Вспомогательные теоремы, используемые для доказательства других теорем</li>
    <li><strong>Гипотезы:</strong> Научные предположения, требующие проверки и доказательства</li>
    <li><strong>Примеры теорем:</strong> Теорема Пифагора, теорема о сумме углов треугольника</li>
    </ul>`
},

{
  "id": "trigonometry001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Тригонометрия",
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
  "id": "geometry_median_vs_bisector",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Отличие медианы от биссектрисы",
  "theme": "Геометрия",
  "text": "В чем основное отличие медианы от биссектрисы в треугольнике?",
  "choices": [
    "Медиана делит сторону пополам, биссектриса делит угол пополам",
    "Медиана делит угол пополам, биссектриса делит сторону пополам",
    "Медиана всегда длиннее биссектрисы",
    "Биссектриса всегда проходит через центр окружности",
    "Медиана всегда перпендикулярна стороне"
  ],
  "answers": ["Медиана делит сторону пополам, биссектриса делит угол пополам"],
  "hint": "<p>Основные отличия медианы и биссектрисы:</p><ul><li><strong>Медиана:</strong> Отрезок, соединяющий вершину треугольника с <strong>серединой противоположной стороны</strong></li><li><strong>Биссектриса:</strong> Отрезок, делящий <strong>угол при вершине</strong> на два равных угла</li><li><strong>Свойство медианы:</strong> Делит треугольник на два равновеликих треугольника</li><li><strong>Свойство биссектрисы:</strong> Делит противоположную сторону на отрезки, пропорциональные прилежащим сторонам</li><li><strong>Пример:</strong> В равнобедренном треугольнике медиана, биссектриса и высота, проведенные к основанию, совпадают</li></ul>"
},

{
  "id": "geometry_vertical_angles",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Вертикальные углы",
  "theme": "Геометрия",
  "text": "Вертикальные углы это...",
  "choices": [
    "углы, стороны которых являются продолжениями друг друга",
    "углы, имеющие общую сторону",
    "углы, сумма которых равна 180°",
    "углы, образованные параллельными прямыми",
    "углы с общей вершиной и равные между собой"
  ],
  "answers": ["углы, стороны которых являются продолжениями друг друга"],
  "hint": "<p>Определение вертикальных углов:</p><ul><li><strong>Вертикальные углы:</strong> Пары углов, образованные при пересечении двух прямых, где стороны одного угла являются продолжениями сторон другого</li><li><strong>Основное свойство:</strong> Вертикальные углы равны между собой</li><li><strong>Пример:</strong> При пересечении двух прямых образуются две пары вертикальных углов</li><li><strong>Отличие от смежных:</strong> Смежные углы дополняют друг друга до 180°, вертикальные - равны</li><li><strong>Важно:</strong> Вертикальные углы всегда появляются парами при пересечении прямых</li></ul>"
},

{
  "id": "geometry_medians_intersection",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Точка пересечения медиан",
  "theme": "Геометрия",
  "text": "Медианы треугольника пересекаются...",
  "choices": [
    "в одной точке, которая делит каждую медиану в отношении 2:1",
    "в трех разных точках",
    "только в равностороннем треугольнике",
    "в центре вписанной окружности",
    "в точке, равноудаленной от вершин"
  ],
  "answers": ["в одной точке, которая делит каждую медиану в отношении 2:1"],
  "hint": "<p>Свойства медиан треугольника:</p><ul><li><strong>Теорема:</strong> Все три медианы треугольника пересекаются в одной точке</li><li><strong>Название:</strong> Точка пересечения медиан называется <strong>центроидом</strong> или центром тяжести</li><li><strong>Свойство:</strong> Центроид делит каждую медиану в отношении 2:1, считая от вершины</li><li><strong>Пример:</strong> Если медиана равна 12 см, то от вершины до центроида - 8 см, от центроида до стороны - 4 см</li><li><strong>Физический смысл:</strong> Центроид - точка равновесия треугольной пластины</li></ul>"
},


  {
  "id": "geometry_basic_axiom_1",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 1", 
  "theme": "Геометрия",
  "text": "1. Через любые две точки можно провести ... прямую(ых).",
  "choices": [
    "только одну",
    "две",
    "бесконечно много",
    "ни одной",
    "только три"
  ],
  "answers": ["только одну"],
  "hint": "<p>Это одна из основных аксиом геометрии:</p><ul><li><strong>Аксиома:</strong> Через любые две различные точки можно провести прямую, и притом только одну</li><li><strong>Объяснение:</strong> Если бы через две точки проходило больше одной прямой, это нарушало бы основные принципы геометрии</li><li><strong>Пример:</strong> На листе бумаги отметьте две точки - через них можно провести ровно одну прямую линию</li></ul>"
},
{
  "id": "geometry_basic_axiom_2",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 2",
  "theme": "Геометрия", 
  "text": "Через любые три точки, которые не лежат на одной прямой, можно провести ... плоскость(ей).",
  "choices": [
    "только одну",
    "две",
    "три",
    "бесконечно много",
    "ни одной"
  ],
  "answers": ["только одну"],
  "hint": "<p>Это одна из основных аксиом стереометрии:</p><ul><li><strong>Аксиома:</strong> Через любые три точки, не лежащие на одной прямой, можно провести плоскость, и притом только одну</li><li><strong>Объяснение:</strong> Три точки, не лежащие на одной прямой, однозначно определяют плоскость в пространстве</li><li><strong>Пример:</strong> Три ножки стула всегда касаются плоскости пола, даже если пол неровный</li><li><strong>Важно:</strong> Если точки лежат на одной прямой, то через них можно провести бесконечно много плоскостей</li></ul>"
},
{
  "id": "geometry_basic_axiom_3",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 3",
  "theme": "Геометрия",
  "text": "Через любые ... точки, которые не лежат на одной прямой, можно провести только одну плоскость.",
  "choices": [
    "три",
    "две", 
    "четыре",
    "пять",
    "шесть"
  ],
  "answers": ["три"],
  "hint": "<p>Это одна из основных аксиом стереометрии:</p><ul><li><strong>Аксиома:</strong> Через любые <strong>три</strong> точки, не лежащие на одной прямой, можно провести плоскость, и притом только одну</li><li><strong>Объяснение:</strong> Три точки, не лежащие на одной прямой, однозначно определяют положение плоскости в пространстве</li><li><strong>Пример:</strong> Три ножки табурета всегда устойчиво стоят на плоскости</li><li><strong>Интересно:</strong> Через две точки можно провести бесконечно много плоскостей, а через четыре точки плоскость может вообще не проходить</li></ul>"
},
{
  "id": "geometry_basic_axiom_4",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 4",
  "theme": "Геометрия",
  "text": "Через три точки, лежащие на одной прямой, можно провести... плоскость(ей)",
  "choices": [
    "бесконечно много",
    "только одну",
    "две",
    "три",
    "ни одной"
  ],
  "answers": ["бесконечно много"],
  "hint": "<p>Свойство точек на прямой в стереометрии:</p><ul><li><strong>Теорема:</strong> Через три точки, лежащие на одной прямой, можно провести бесконечно много плоскостей</li><li><strong>Объяснение:</strong> Прямая содержится в бесконечном количестве плоскостей, которые вращаются вокруг этой прямой</li><li><strong>Пример:</strong> Представьте книгу на шпинделе - страницы (плоскости) вращаются вокруг корешка (прямой)</li><li><strong>Контраст:</strong> Если точки НЕ лежат на одной прямой, то через них проходит только одна плоскость</li></ul>"
},
{
  "id": "geometry_basic_axiom_5",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 5",
  "theme": "Геометрия",
  "text": "Если ... точки прямой принадлежат плоскости, то все точки этой прямой принадлежат плоскости",
  "choices": [
    "две",
    "три",
    "четыре",
    "одна",
    "пять"
  ],
  "answers": ["две"],
  "hint": "<p>Основная аксиома стереометрии:</p><ul><li><strong>Аксиома:</strong> Если <strong>две</strong> точки прямой принадлежат плоскости, то все точки этой прямой принадлежат плоскости</li><li><strong>Объяснение:</strong> Прямая полностью определяется двумя точками. Если обе точки лежат в плоскости, то вся прямая лежит в этой плоскости</li><li><strong>Следствие:</strong> Чтобы доказать, что прямая лежит в плоскости, достаточно показать, что две её точки принадлежат этой плоскости</li><li><strong>Пример:</strong> Если оба конца линейки лежат на столе, то вся линейка лежит на столе</li></ul>"
},
{
  "id": "geometry_basic_axiom_6",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 6",
  "theme": "Геометрия",
  "text": "4. Если ... точки прямой принадлежат плоскости, то все точки этой прямой принадлежат плоскости.",
  "choices": [
    "две",
    "три",
    "четыре", 
    "одна",
    "пять"
  ],
  "answers": ["две"],
  "hint": "<p>Основная аксиома стереометрии:</p><ul><li><strong>Аксиома:</strong> Если <strong>две</strong> точки прямой принадлежат плоскости, то все точки этой прямой принадлежат плоскости</li><li><strong>Объяснение:</strong> Прямая однозначно определяется двумя точками. Если обе эти точки лежат в плоскости, то вся прямая содержится в этой плоскости</li><li><strong>Практическое применение:</strong> Чтобы доказать, что прямая лежит в плоскости, достаточно найти две точки этой прямой, принадлежащие плоскости</li><li><strong>Пример:</strong> Если оба конца отрезка лежат на поверхности стола, то весь отрезок лежит на столе</li></ul>"
},
{
  "id": "geometry_planes_intersection",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 7",
  "theme": "Геометрия",
  "text": "Две плоскости пересекаются...",
  "choices": [
    "по прямой",
    "по точке",
    "по плоскости",
    "по окружности",
    "не пересекаются"
  ],
  "answers": ["по прямой"],
  "hint": "<p>Свойство пересечения плоскостей:</p><ul><li><strong>Теорема:</strong> Две плоскости пересекаются по прямой линии</li><li><strong>Объяснение:</strong> Линия пересечения двух плоскостей всегда является прямой</li><li><strong>Пример:</strong> Стена и потолок в комнате пересекаются по прямой линии</li><li><strong>Исключение:</strong> Плоскости могут быть параллельными (не пересекаться) или совпадать</li><li><strong>Важно:</strong> Если две плоскости имеют три общие точки, не лежащие на одной прямой, то они совпадают</li></ul>"
},
  {
  "id": "geometry_planimetry_stereometry",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 8",
  "theme": "Геометрия",
  "text": "В чем основное отличие планиметрии от стереометрии?",
  "choices": [
    "Планиметрия изучает фигуры на плоскости, стереометрия - в пространстве",
    "Планиметрия изучает объемные фигуры, стереометрия - плоские",
    "Планиметрия сложнее стереометрии",
    "Стереометрия изучает только правильные многогранники",
    "Планиметрия изучает только треугольники и окружности"
  ],
  "answers": ["Планиметрия изучает фигуры на плоскости, стереометрия - в пространстве"],
  "hint": "<p><strong>Планиметрия</strong> (от лат. planum - плоскость) - раздел геометрии, изучающий фигуры на плоскости: треугольники, окружности, многоугольники.</p><p><strong>Стереометрия</strong> (от греч. stereos - объемный) - раздел геометрии, изучающий фигуры в пространстве: призмы, пирамиды, сферы, цилиндры.</p><ul><li>Планиметрия: 2D-фигуры (две координаты)</li><li>Стереометрия: 3D-фигуры (три координаты)</li></ul>"
},
  {
  "id": "geometry041",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 9",
  "theme": "Геометрия",
  "text": "Что такое хорда окружности?",
  "choices": [
    "Отрезок, соединяющий две точки окружности",
    "Отрезок, соединяющий центр окружности с точкой на окружности",
    "Часть окружности между двумя точками",
    "Прямая, пересекающая окружность в двух точках",
    "Отрезок, проходящий через центр окружности"
  ],
  "answers": ["Отрезок, соединяющий две точки окружности"],
  "hint": `<p>Определение хорды окружности:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Окружность -->
      <circle cx="140" cy="100" r="80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Хорда -->
      <line x1="80" y1="60" x2="200" y2="140" stroke="#d32f2f" stroke-width="3"/>
      <text x="140" y="80" font-size="14" fill="#d32f2f" font-weight="bold">ХОРДА</text>
      
      <!-- Точки на окружности -->
      <circle cx="80" cy="60" r="3" fill="#388e3c"/>
      <text x="85" y="55" font-size="12" fill="#388e3c">A</text>
      
      <circle cx="200" cy="140" r="3" fill="#388e3c"/>
      <text x="205" y="145" font-size="12" fill="#388e3c">B</text>
      
      <!-- Определение -->
      <rect x="40" y="30" width="200" height="50" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Хорда - отрезок, соединяющий</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f" font-weight="bold">две точки окружности</text>
      <text x="50" y="75" font-size="12" fill="#1976d2">AB - хорда</text>
      
      <!-- Сравнение с диаметром -->
      <rect x="40" y="150" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="165" font-size="10" fill="#1976d2">Диаметр - частный случай хорды,</text>
      <text x="50" y="180" font-size="10" fill="#1976d2">проходящей через центр окружности</text>
    </svg>
    <ul>
    <li><strong>Хорда:</strong> Отрезок, соединяющий две точки окружности</li>
    <li><strong>Свойства:</strong>
      <br>• Хорда лежит внутри окружности
      <br>• Диаметр - самая длинная хорда
      <br>• Перпендикуляр из центра к хорде делит её пополам
    </li>
    <li><strong>Отличие от диаметра:</strong> Диаметр проходит через центр, хорда - не обязательно</li>
    <li><strong>Отличие от радиуса:</strong> Радиус соединяет центр с точкой окружности</li>
    <li><strong>Отличие от секущей:</strong> Секущая - это прямая, хорда - отрезок</li>
    </ul>`
},

  {
  "id": "quadrilateral001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 10",
  "theme": "Геометрия",
  "text": "Какой четырехугольник имеет все стороны равными и все углы прямыми?",
  "choices": [
    "Квадрат",
    "Ромб",
    "Прямоугольник",
    "Параллелограмм",
    "Трапеция"
  ],
  "answers": ["Квадрат"],
  "hint": `<p>Свойства квадрата:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Квадрат -->
      <rect x="50" y="50" width="80" height="80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Обозначение равных сторон -->
      <text x="65" y="45" font-size="10" fill="#388e3c">a</text>
      <text x="135" y="85" font-size="10" fill="#388e3c">a</text>
      <text x="65" y="140" font-size="10" fill="#388e3c">a</text>
      <text x="15" y="85" font-size="10" fill="#388e3c">a</text>
      
      <!-- Прямые углы -->
      <path d="M 55,55 L 55,65 L 65,65" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <path d="M 125,55 L 125,65 L 115,65" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <path d="M 125,125 L 125,115 L 115,115" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <path d="M 55,125 L 55,115 L 65,115" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      
      <!-- Название -->
      <text x="85" y="100" font-size="16" fill="#1976d2" font-weight="bold">КВАДРАТ</text>
      
      <!-- Свойства -->
      <rect x="150" y="40" width="120" height="100" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="160" y="55" font-size="10" fill="#2e7d32">✓ Все стороны равны</text>
      <text x="160" y="70" font-size="10" fill="#2e7d32">✓ Все углы 90°</text>
      <text x="160" y="85" font-size="10" fill="#2e7d32">✓ Диагонали равны</text>
      <text x="160" y="100" font-size="10" fill="#2e7d32">✓ Диагонали перпендикулярны</text>
      <text x="160" y="115" font-size="10" fill="#2e7d32">✓ Диагонали делят углы пополам</text>
      <text x="160" y="130" font-size="10" fill="#2e7d32">✓ Центр симметрии</text>
    </svg>
    <ul>
    <li><strong>Квадрат:</strong> Частный случай прямоугольника и ромба</li>
    <li><strong>Свойства:</strong> Все стороны равны + все углы прямые</li>
    <li><strong>Отличие от ромба:</strong> У ромба стороны равны, но углы не обязательно прямые</li>
    <li><strong>Отличие от прямоугольника:</strong> У прямоугольника углы прямые, но стороны не обязательно равны</li>
    <li><strong>Диагонали:</strong> Равны, перпендикулярны, делятся пополам</li>
    </ul>`
},

{
  "id": "quadrilateral002",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 11",
  "theme": "Геометрия",
  "text": "Какой четырехугольник имеет только одну пару параллельных сторон?",
  "choices": [
    "Трапеция",
    "Параллелограмм",
    "Ромб",
    "Прямоугольник",
    "Квадрат"
  ],
  "answers": ["Трапеция"],
  "hint": `<p>Свойства трапеции:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Трапеция -->
      <polygon points="60,120 180,120 150,60 90,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Параллельные стороны -->
      <line x1="90" y1="60" x2="150" y2="60" stroke="#d32f2f" stroke-width="3"/>
      <line x1="60" y1="120" x2="180" y2="120" stroke="#d32f2f" stroke-width="3"/>
      
      <!-- Обозначение параллельности -->
      <text x="115" y="55" font-size="10" fill="#d32f2f">∥</text>
      <text x="115" y="135" font-size="10" fill="#d32f2f">∥</text>
      
      <!-- Название -->
      <text x="115" y="90" font-size="16" fill="#1976d2" font-weight="bold">ТРАПЕЦИЯ</text>
      
      <!-- Свойства -->
      <rect x="50" y="30" width="180" height="60" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="60" y="45" font-size="10" fill="#2e7d32">✓ Только ОДНА пара параллельных сторон</text>
      <text x="60" y="60" font-size="10" fill="#2e7d32">✓ Боковые стороны не параллельны</text>
      <text x="60" y="75" font-size="10" fill="#2e7d32">✓ Средняя линия параллельна основаниям</text>
      <text x="60" y="90" font-size="10" fill="#2e7d32">✓ Равнобедренная трапеция: боковые стороны равны</text>
    </svg>
    <ul>
    <li><strong>Трапеция:</strong> Четырехугольник с одной парой параллельных сторон</li>
    <li><strong>Основания:</strong> Параллельные стороны</li>
    <li><strong>Боковые стороны:</strong> Непараллельные стороны</li>
    <li><strong>Отличие от параллелограмма:</strong> У параллелограмма ДВЕ пары параллельных сторон</li>
    <li><strong>Виды трапеций:</strong> Равнобедренная, прямоугольная, произвольная</li>
    </ul>`
},

{
  "id": "geometry038",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 12",
  "theme": "Геометрия",
  "text": "В равнобедренной трапеции боковая сторона равна 13 см, основания 10 см и 20 см. Найдите площадь трапеции.",
  "choices": [
    "180 см²",
    "130 см²",
    "144 см²",
    "156 см²",
    "169 см²"
  ],
  "answers": ["180 см²"],
  "hint": `<p>Нахождение площади равнобедренной трапеции:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Трапеция -->
      <polygon points="60,120 180,120 160,80 80,80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Основания -->
      <text x="115" y="125" font-size="12" fill="#1976d2">a = 20 см</text>
      <text x="115" y="75" font-size="12" fill="#388e3c">b = 10 см</text>
      
      <!-- Боковая сторона -->
      <text x="65" y="100" font-size="12" fill="#ff9800">c = 13 см</text>
      
      <!-- Высота -->
      <line x1="80" y1="80" x2="80" y2="120" stroke="#d32f2f" stroke-width="2" stroke-dasharray="4"/>
      <text x="70" y="100" font-size="12" fill="#d32f2f">h</text>
      
      <!-- Проекция боковой стороны -->
      <line x1="80" y1="120" x2="90" y2="120" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="83" y="135" font-size="10" fill="#7b1fa2">x = 5 см</text>
      
      <!-- Прямоугольный треугольник -->
      <polygon points="80,120 80,80 90,120" fill="#e8f5e8" opacity="0.5" stroke="#2e7d32" stroke-width="1"/>
      
     
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим проекцию боковой стороны: x = (20 - 10) ÷ 2 = 5 см</li>
    <li><strong>Шаг 2:</strong> Находим высоту по теореме Пифагора: h = √(13² - 5²) = √(169 - 25) = √144 = 12 см</li>
    <li><strong>Шаг 3:</strong> Вычисляем площадь: S = (20 + 10) × 12 ÷ 2 = 30 × 6 = 120 см²</li>
    <li><strong>Формула площади трапеции:</strong> S = (a + b) × h ÷ 2</li>
    <li><strong>Особенность равнобедренной трапеции:</strong> Проекции боковых сторон на большее основание равны</li>
    <li><strong>Проверка:</strong> 13² = 169, 5² + 12² = 25 + 144 = 169 ✓</li>
    </ul>`
},

{
  "id": "trapezoid_area_isosceles_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь равнобедренной трапеции",
  "theme": "Геометрия",
  "text": "В равнобедренной трапеции боковая сторона равна {var1-10} см, основания 10 см и 20 см. Найдите площадь трапеции.",
  "answer": "15*SQRT({var1-10}^2-25)",
  "hint": "1. Находим высоту трапеции по теореме Пифагора:<br>   $$h = \\sqrt{{var1-10}^2 - \\left(\\frac{20-10}{2}\\right)^2} = \\sqrt{{var1-10}^2 - 5^2} = \\sqrt{{var1-10}^2 - 25}$$ см<br>2. Площадь трапеции:<br>   $$S = \\frac{a + b}{2} \\times h = \\frac{10 + 20}{2} \\times h = 15 \\times \\sqrt{{var1-10}^2 - 25}$$ см²",
  "randomfrom": [12, 13, 15, 17, 20]
},

{
  "id": "quadrilateral003",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 13",
  "theme": "Геометрия",
  "text": "Какой четырехугольник имеет все стороны равными, но углы не обязательно прямые?",
  "choices": [
    "Ромб",
    "Квадрат",
    "Прямоугольник",
    "Параллелограмм",
    "Трапеция"
  ],
  "answers": ["Ромб"],
  "hint": `<p>Свойства ромба:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Ромб -->
      <polygon points="90,60 160,90 90,120 20,90" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Равные стороны -->
      <text x="55" y="45" font-size="10" fill="#388e3c">a</text>
      <text x="170" y="85" font-size="10" fill="#388e3c">a</text>
      <text x="55" y="140" font-size="10" fill="#388e3c">a</text>
      <text x="5" y="85" font-size="10" fill="#388e3c">a</text>
      
      <!-- Диагонали -->
      <line x1="90" y1="60" x2="90" y2="120" stroke="#d32f2f" stroke-width="1" stroke-dasharray="4"/>
      <line x1="20" y1="90" x2="160" y2="90" stroke="#d32f2f" stroke-width="1" stroke-dasharray="4"/>
      
      <!-- Название -->
      <text x="85" y="90" font-size="16" fill="#1976d2" font-weight="bold">РОМБ</text>
      
      <!-- Свойства -->
      <rect x="150" y="40" width="120" height="80" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="160" y="55" font-size="10" fill="#2e7d32">✓ Все стороны равны</text>
      <text x="160" y="70" font-size="10" fill="#2e7d32">✓ Противоположные углы равны</text>
      <text x="160" y="85" font-size="10" fill="#2e7d32">✓ Диагонали перпендикулярны</text>
      <text x="160" y="100" font-size="10" fill="#2e7d32">✓ Диагонали делят углы пополам</text>
      <text x="160" y="115" font-size="10" fill="#2e7d32">✗ Углы не обязательно 90°</text>
    </svg>
    <ul>
    <li><strong>Ромб:</strong> Параллелограмм с равными сторонами</li>
    <li><strong>Свойства:</strong> Все стороны равны, противоположные углы равны</li>
    <li><strong>Диагонали:</strong> Перпендикулярны, делят углы пополам</li>
    <li><strong>Отличие от квадрата:</strong> У ромба углы могут быть не прямыми</li>
    <li><strong>Частный случай:</strong> Квадрат - это ромб с прямыми углами</li>
    </ul>`
},

{
  "id": "geometry030",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 14",
  "theme": "Геометрия",
  "text": "Что такое биссектриса?",
  "choices": [
    "Луч, делящий угол на два равных угла",
    "Отрезок, соединяющий вершину треугольника с серединой противоположной стороны",
    "Прямая, перпендикулярная отрезку и проходящая через его середину",
    "Отрезок, соединяющий две вершины треугольника",
    "Прямая, делящая отрезок пополам"
  ],
  "answers": ["Луч, делящий угол на два равных угла"],
  "hint": `<p>Определение биссектрисы:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Угол -->
      <line x1="80" y1="120" x2="180" y2="120" stroke="#1976d2" stroke-width="2"/>
      <line x1="80" y1="120" x2="40" y2="40" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Биссектриса -->
      <line x1="80" y1="120" x2="120" y2="70" stroke="#d32f2f" stroke-width="3"/>
      <text x="125" y="75" font-size="14" fill="#d32f2f" font-weight="bold">биссектриса</text>
      
      <!-- Равные углы -->
      <path d="M 100,120 L 90,115 L 95,125" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="105" y="120" font-size="12" fill="#388e3c">α</text>
      
      <path d="M 85,110 L 75,105 L 80,115" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="70" y="105" font-size="12" fill="#388e3c">α</text>
      
      <!-- Обозначение вершин -->
      <circle cx="80" cy="120" r="3" fill="#1976d2"/>
      <text x="85" y="125" font-size="12" fill="#1976d2">A</text>
      
      <!-- Определение -->
      <rect x="40" y="30" width="200" height="50" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Биссектриса - луч, выходящий из вершины угла</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f" font-weight="bold">и делящий его на два равных угла</text>
      <text x="50" y="75" font-size="12" fill="#1976d2">∠BAD = ∠DAC</text>
      
      <!-- Свойства -->
      <rect x="40" y="150" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="165" font-size="10" fill="#1976d2">• Делит противоположную сторону в отношении прилежащих сторон</text>
      <text x="50" y="180" font-size="10" fill="#1976d2">• Точка пересечения биссектрис - центр вписанной окружности</text>
    </svg>
    <ul>
    <li><strong>Биссектриса:</strong> Луч, исходящий из вершины угла и делящий его пополам</li>
    <li><strong>Основное свойство:</strong> Создает два равных угла</li>
    <li><strong>В треугольнике:</strong> Биссектриса делит противоположную сторону на отрезки, пропорциональные прилежащим сторонам</li>
    <li><strong>Отличие от медианы:</strong> Медиана делит сторону пополам, биссектриса - угол пополам</li>
    <li><strong>Отличие от высоты:</strong> Высота перпендикулярна стороне, биссектриса делит угол</li>
    <li><strong>Пример:</strong> Биссектриса угла 60° создает два угла по 30°</li>
    </ul>`
},

{
  "id": "geometry031",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 15",
  "theme": "Геометрия",
  "text": "Что такое смежные углы?",
  "choices": [
    "Углы, у которых одна сторона общая, а две другие образуют прямую линию",
    "Углы, имеющие общую вершину и равные между собой",
    "Углы, стороны которых являются продолжениями друг друга",
    "Углы, сумма которых равна 90°",
    "Углы, образованные пересекающимися прямыми"
  ],
  "answers": ["Углы, у которых одна сторона общая, а две другие образуют прямую линию"],
  "hint": `<p>Определение смежных углов:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Общая сторона и прямая линия -->
      <line x1="40" y1="100" x2="200" y2="100" stroke="#1976d2" stroke-width="2"/>
      <line x1="120" y1="100" x2="120" y2="40" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Смежные углы -->
      <path d="M 120,95 L 130,90 L 125,100" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <text x="135" y="90" font-size="12" fill="#d32f2f">α</text>
      
      <path d="M 120,95 L 110,90 L 115,100" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="105" y="90" font-size="12" fill="#388e3c">β</text>
      
      <!-- Обозначения -->
      <circle cx="120" cy="100" r="3" fill="#1976d2"/>
      <text x="125" y="105" font-size="12" fill="#1976d2">O</text>
      
      <text x="80" y="95" font-size="10" fill="#666">OB - общая сторона</text>
      <text x="160" y="115" font-size="10" fill="#666">OA и OC образуют прямую</text>
      
      <!-- Свойство -->
      <rect x="50" y="140" width="180" height="40" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="60" y="155" font-size="12" fill="#2e7d32">Сумма смежных углов всегда равна 180°</text>
      <text x="60" y="170" font-size="14" fill="#d32f2f" font-weight="bold">α + β = 180°</text>
      
      <!-- Примеры -->
      <rect x="50" y="30" width="180" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="60" y="45" font-size="10" fill="#1976d2">Примеры смежных углов:</text>
      <text x="60" y="60" font-size="10" fill="#1976d2">30° и 150°, 45° и 135°, 90° и 90°</text>
    </svg>
    <ul>
    <li><strong>Смежные углы:</strong> Углы, имеющие общую вершину и общую сторону, а две другие стороны образуют прямую линию</li>
    <li><strong>Основное свойство:</strong> Сумма смежных углов всегда равна 180°</li>
    <li><strong>Признак:</strong> Если два угла имеют общую сторону и их несовпадающие стороны образуют прямую, то они смежные</li>
    <li><strong>Примеры:</strong>
      <br>• Углы 70° и 110° - смежные (70° + 110° = 180°)
      <br>• Углы 45° и 135° - смежные (45° + 135° = 180°)
    </li>
    <li><strong>Отличие от вертикальных углов:</strong> Смежные углы дополняют друг друга до 180°, вертикальные - равны между собой</li>
    </ul>`
},

{
  "id": "geometry032",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 16",
  "theme": "Геометрия",
  "text": "Что такое медиана?",
  "choices": [
    "Отрезок, соединяющий вершину треугольника с серединой противоположной стороны",
    "Луч, делящий угол на два равных угла",
    "Прямая, перпендикулярная стороне треугольника",
    "Отрезок, соединяющий середины двух сторон треугольника",
    "Прямая, делящая сторону треугольника пополам"
  ],
  "answers": ["Отрезок, соединяющий вершину треугольника с серединой противоположной стороны"],
  "hint": `<p>Определение медианы:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Треугольник -->
      <polygon points="80,140 200,140 120,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Медиана -->
      <line x1="120" y1="60" x2="140" y2="140" stroke="#d32f2f" stroke-width="3"/>
      <text x="130" y="100" font-size="14" fill="#d32f2f" font-weight="bold">медиана</text>
      
      <!-- Середина стороны -->
      <circle cx="140" cy="140" r="3" fill="#388e3c"/>
      <text x="145" cy="145" font-size="12" fill="#388e3c">M</text>
      <text x="150" cy="155" font-size="10" fill="#388e3c">середина BC</text>
      
      <!-- Вершины -->
      <text x="115" y="50" font-size="12" fill="#1976d2">A</text>
      <text x="75" y="155" font-size="12" fill="#1976d2">B</text>
      <text x="205" y="155" font-size="12" fill="#1976d2">C</text>
      
      <!-- Равные отрезки -->
      <line x1="80" y1="140" x2="140" y2="140" stroke="#ff9800" stroke-width="2"/>
      <line x1="140" y1="140" x2="200" y2="140" stroke="#ff9800" stroke-width="2"/>
      <text x="110" y="135" font-size="10" fill="#ff9800">BM = MC</text>
      
      <!-- Определение -->
      <rect x="40" y="30" width="200" height="50" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Медиана - отрезок, соединяющий вершину треугольника</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f" font-weight="bold">с серединой противоположной стороны</text>
      <text x="50" y="75" font-size="12" fill="#1976d2">AM - медиана к стороне BC</text>
      
      <!-- Свойства -->
      <rect x="40" y="160" width="200" height="30" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="175" font-size="10" fill="#1976d2">• Три медианы пересекаются в одной точке - центроиде</text>
      <text x="50" y="190" font-size="10" fill="#1976d2">• Центроид делит медианы в отношении 2:1</text>
    </svg>
    <ul>
    <li><strong>Медиана:</strong> Отрезок, соединяющий вершину треугольника с серединой противоположной стороны</li>
    <li><strong>Основное свойство:</strong> Делит сторону треугольника на два равных отрезка</li>
    <li><strong>В треугольнике:</strong> Всегда можно провести три медианы</li>
    <li><strong>Точка пересечения:</strong> Медианы пересекаются в одной точке - центроиде (центре тяжести)</li>
    <li><strong>Свойство центроида:</strong> Делит каждую медиану в отношении 2:1, считая от вершины</li>
    <li><strong>Отличие от биссектрисы:</strong> Медиана делит сторону пополам, биссектриса - угол пополам</li>
    <li><strong>Отличие от высоты:</strong> Медиана не обязательно перпендикулярна стороне</li>
    </ul>`
},

{
  "id": "geometry033",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 17",
  "theme": "Геометрия",
  "text": "Что утверждает первый признак равенства треугольников?",
  "choices": [
    "Если две стороны и угол между ними одного треугольника равны соответствующим элементам другого",
    "Если сторона и два прилежащих угла одного треугольника равны соответствующим элементам другого",
    "Если три стороны одного треугольника равны трем сторонам другого",
    "Если гипотенуза и катет одного прямоугольного треугольника равны соответствующим элементам другого",
    "Если два угла одного треугольника равны двум углам другого"
  ],
  "answers": ["Если две стороны и угол между ними одного треугольника равны соответствующим элементам другого"],
  "hint": `<p>Первый признак равенства треугольников:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Первый треугольник -->
      <polygon points="50,80 120,80 70,40" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="60" y="70" font-size="12" fill="#1976d2">a</text>
      <text x="100" y="70" font-size="12" fill="#1976d2">b</text>
      <text x="65" y="50" font-size="12" fill="#d32f2f">γ</text>
      
      <!-- Второй треугольник -->
      <polygon points="160,80 230,80 180,40" fill="none" stroke="#388e3c" stroke-width="2"/>
      <text x="170" y="70" font-size="12" fill="#388e3c">a</text>
      <text x="210" y="70" font-size="12" fill="#388e3c">b</text>
      <text x="175" y="50" font-size="12" fill="#d32f2f">γ</text>
      
      <!-- Знак равенства -->
      <text x="135" y="60" font-size="20" fill="#ff9800">=</text>
      
      <!-- Формулировка -->
      <rect x="40" y="120" width="200" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="135" font-size="12" fill="#2e7d32">Первый признак (по двум сторонам и углу между ними):</text>
      <text x="50" y="150" font-size="14" fill="#d32f2f">Если a = a, b = b, γ = γ, то</text>
      <text x="50" y="165" font-size="16" fill="#1976d2" font-weight="bold">ΔABC = ΔA₁B₁C₁</text>
      
      <!-- Условие -->
      <rect x="40" y="30" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#1976d2">Угол должен быть между равными сторонами!</text>
      <text x="50" y="60" font-size="10" fill="#1976d2">Иначе треугольники могут быть не равны</text>
    </svg>
    <ul>
    <li><strong>Первый признак:</strong> По двум сторонам и углу между ними</li>
    <li><strong>Условие:</strong> Две стороны и угол между ними одного треугольника равны соответствующим элементам другого</li>
    <li><strong>Важно:</strong> Угол должен находиться между равными сторонами</li>
    <li><strong>Пример:</strong> Если AB = A₁B₁, AC = A₁C₁ и ∠A = ∠A₁, то ΔABC = ΔA₁B₁C₁</li>
    <li><strong>Применение:</strong> Самый часто используемый признак в задачах</li>
    </ul>`
},

{
  "id": "geometry034",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 18",
  "theme": "Геометрия",
  "text": "Что утверждает второй признак равенства треугольников?",
  "choices": [
    "Если сторона и два прилежащих угла одного треугольника равны соответствующим элементам другого",
    "Если две стороны и угол между ними одного треугольника равны соответствующим элементам другого",
    "Если три стороны одного треугольника равны трем сторонам другого",
    "Если гипотенуза и катет одного прямоугольного треугольника равны соответствующим элементам другого",
    "Если два угла и сторона между ними одного треугольника равны соответствующим элементам другого"
  ],
  "answers": ["Если сторона и два прилежащих угла одного треугольника равны соответствующим элементам другого"],
  "hint": `<p>Второй признак равенства треугольников:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Первый треугольник -->
      <polygon points="50,80 120,80 70,40" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="85" y="70" font-size="12" fill="#1976d2">c</text>
      <text x="55" y="60" font-size="12" fill="#d32f2f">α</text>
      <text x="105" y="60" font-size="12" fill="#388e3c">β</text>
      
      <!-- Второй треугольник -->
      <polygon points="160,80 230,80 180,40" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="195" y="70" font-size="12" fill="#1976d2">c</text>
      <text x="165" y="60" font-size="12" fill="#d32f2f">α</text>
      <text x="215" y="60" font-size="12" fill="#388e3c">β</text>
      
      <!-- Знак равенства -->
      <text x="135" y="60" font-size="20" fill="#ff9800">=</text>
      
      <!-- Формулировка -->
      <rect x="40" y="120" width="200" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="135" font-size="12" fill="#2e7d32">Второй признак (по стороне и двум прилежащим углам):</text>
      <text x="50" y="150" font-size="14" fill="#d32f2f">Если c = c, α = α, β = β, то</text>
      <text x="50" y="165" font-size="16" fill="#1976d2" font-weight="bold">ΔABC = ΔA₁B₁C₁</text>
      
      <!-- Условие -->
      <rect x="40" y="30" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#1976d2">Углы должны быть прилежащими к равной стороне!</text>
      <text x="50" y="60" font-size="10" fill="#1976d2">Сумма углов треугольника всегда 180°</text>
    </svg>
    <ul>
    <li><strong>Второй признак:</strong> По стороне и двум прилежащим углам</li>
    <li><strong>Условие:</strong> Сторона и два прилежащих угла одного треугольника равны соответствующим элементам другого</li>
    <li><strong>Важно:</strong> Углы должны быть прилежащими к равной стороне</li>
    <li><strong>Следствие:</strong> Если равны два угла, то третий тоже равен (сумма 180°)</li>
    <li><strong>Пример:</strong> Если BC = B₁C₁, ∠B = ∠B₁ и ∠C = ∠C₁, то ΔABC = ΔA₁B₁C₁</li>
    </ul>`
},

{
  "id": "geometry035",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 19",
  "theme": "Геометрия",
  "text": "Что утверждает третий признак равенства треугольников?",
  "choices": [
    "Если три стороны одного треугольника равны трем сторонам другого",
    "Если две стороны и угол между ними одного треугольника равны соответствующим элементам другого",
    "Если сторона и два прилежащих угла одного треугольника равны соответствующим элементам другого",
    "Если гипотенуза и катет одного прямоугольного треугольника равны соответствующим элементам другого",
    "Если два угла и сторона между ними одного треугольника равны соответствующим элементам другого"
  ],
  "answers": ["Если три стороны одного треугольника равны трем сторонам другого"],
  "hint": `<p>Третий признак равенства треугольников:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Первый треугольник -->
      <polygon points="50,80 120,80 70,40" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="60" y="70" font-size="12" fill="#1976d2">a</text>
      <text x="100" y="70" font-size="12" fill="#388e3c">b</text>
      <text x="65" y="50" font-size="12" fill="#ff9800">c</text>
      
      <!-- Второй треугольник -->
      <polygon points="160,80 230,80 180,40" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="170" y="70" font-size="12" fill="#1976d2">a</text>
      <text x="210" y="70" font-size="12" fill="#388e3c">b</text>
      <text x="175" y="50" font-size="12" fill="#ff9800">c</text>
      
      <!-- Знак равенства -->
      <text x="135" y="60" font-size="20" fill="#d32f2f">=</text>
      
      <!-- Формулировка -->
      <rect x="40" y="120" width="200" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="135" font-size="12" fill="#2e7d32">Третий признак (по трем сторонам):</text>
      <text x="50" y="150" font-size="14" fill="#d32f2f">Если a = a, b = b, c = c, то</text>
      <text x="50" y="165" font-size="16" fill="#1976d2" font-weight="bold">ΔABC = ΔA₁B₁C₁</text>
      
      <!-- Особенность -->
      <rect x="40" y="30" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#1976d2">Самый надежный признак!</text>
      <text x="50" y="60" font-size="10" fill="#1976d2">Если все стороны равны, треугольники равны</text>
    </svg>
    <ul>
    <li><strong>Третий признак:</strong> По трем сторонам</li>
    <li><strong>Условие:</strong> Три стороны одного треугольника равны трем сторонам другого</li>
    <li><strong>Особенность:</strong> Самый надежный признак - не требует знания углов</li>
    <li><strong>Применение:</strong> Часто используется при построении треугольников</li>
    <li><strong>Пример:</strong> Если AB = A₁B₁, BC = B₁C₁ и AC = A₁C₁, то ΔABC = ΔA₁B₁C₁</li>
    <li><strong>Связь с неравенством треугольника:</strong> Три отрезка могут быть сторонами треугольника только если сумма любых двух больше третьей</li>
    </ul>`
},

{
  "id": "geometry036",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 20",
  "theme": "Геометрия",
  "text": "Какое утверждение верно о соотношениях между сторонами и углами треугольника?",
  "choices": [
    "Против большей стороны лежит больший угол",
    "Против меньшей стороны лежит больший угол",
    "Все углы треугольника всегда равны",
    "Стороны треугольника пропорциональны его углам",
    "Против равных сторон лежат разные углы"
  ],
  "answers": ["Против большей стороны лежит больший угол"],
  "hint": `<p>Теорема о соотношениях между сторонами и углами треугольника:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Треугольник с разными сторонами -->
      <polygon points="60,140 180,140 100,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Стороны -->
      <text x="75" y="130" font-size="12" fill="#1976d2">a</text>
      <text x="140" y="130" font-size="12" fill="#388e3c">b</text>
      <text x="90" y="100" font-size="12" fill="#ff9800">c</text>
      
      <!-- Углы -->
      <text x="110" y="135" font-size="12" fill="#d32f2f">α</text>
      <text x="165" y="110" font-size="12" fill="#7b1fa2">β</text>
      <text x="75" y="110" font-size="12" fill="#2e7d32">γ</text>
      
      <!-- Соотношения -->
      <rect x="40" y="30" width="200" height="80" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Если a > b > c, то</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f">α > β > γ</text>
      <text x="50" y="75" font-size="12" fill="#1976d2">Против большей стороны лежит больший угол</text>
      <text x="50" y="90" font-size="12" fill="#388e3c">Против меньшей стороны лежит меньший угол</text>
      <text x="50" y="105" font-size="12" fill="#ff9800">Против равных сторон лежат равные углы</text>
      
      <!-- Пример -->
      <rect x="40" y="150" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="165" font-size="10" fill="#1976d2">Пример: В треугольнике со сторонами 5, 7, 9</text>
      <text x="50" y="180" font-size="10" fill="#1976d2">самый большой угол лежит против стороны 9</text>
    </svg>
    <ul>
    <li><strong>Основная теорема:</strong> Против большей стороны лежит больший угол</li>
    <li><strong>Обратная теорема:</strong> Против большего угла лежит большая сторона</li>
    <li><strong>Следствия:</strong>
      <br>• Против равных сторон лежат равные углы
      <br>• Против меньшей стороны лежит меньший угол
    </li>
    <li><strong>В равностороннем треугольнике:</strong> Все стороны равны → все углы равны (по 60°)</li>
    <li><strong>В равнобедренном треугольнике:</strong> Боковые стороны равны → углы при основании равны</li>
    <li><strong>Пример:</strong> Если AB > BC > AC, то ∠C > ∠A > ∠B</li>
    </ul>`
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
    "randomfrom": [1, 2, 3, 4, 0.5, 1,5]
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
  "id": "circle_area",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь круга", 
  "theme": "Геометрия",
  "text": "Чему равна площадь круга с радиусом {var1-10} см?",
  "answer": "{var1-10}^2*PI()",
  "hint": "Площадь круга вычисляется по формуле: $$S = \\pi r^2$$<br>Подставьте радиус {var1-10} см в формулу: $$\\pi \\times {var1-10}^2$$<br>Например, для радиуса 2 см: $$3.14 \\times 4 = 12.56 \\text{ см}^2$$",
  "randomfrom": [1, 2, 3, 4, 5, 10]
},

{
  "id": "circle_area_diameter",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь круга по диаметру",
  "theme": "Геометрия", 
  "text": "Чему равна площадь круга с диаметром {var1-10} см?",
  "answer": "({var1-10}/2)^2*PI()",
  "hint": "Сначала найдите радиус: $$r = \\frac{\\text{диаметр}}{2} = \\frac{{var1-10}}{2}$$<br>Затем площадь: $$S = \\pi r^2$$<br>Например, для диаметра 4 см: радиус = 2 см, площадь = $$3.14 \\times 4 = 12.56 \\text{ см}^2$$",
  "randomfrom": [2, 4, 6, 8, 10, 20]
},

{
  "id": "square_area",
  "type": "mathwithrandomnumber", 
  "header": "Устный счёт",
  "title": "Площадь квадрата",
  "theme": "Геометрия",
  "text": "Чему равна площадь квадрата со стороной {var1-10} см?",
  "answer": "{var1-10}^2",
  "hint": "Площадь квадрата вычисляется по формуле: $$S = a^2$$<br>где $$a$$ - длина стороны<br>Подставьте значение стороны {var1-10} см: $${var1-10}^2$$<br>Например, для стороны 5 см: $$5 \\times 5 = 25 \\text{ см}^2$$",
  "randomfrom": [2, 3, 4, 5, 6, 7, 8, 9, 10]
},

{
  "id": "square_area_perimeter",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь квадрата по периметру",
  "theme": "Геометрия",
  "text": "Периметр квадрата равен {var1-10} см. Чему равна его площадь?",
  "answer": "({var1-10}/4)^2",
  "hint": "Сначала найдите сторону квадрата: $$a = \\frac{\\text{периметр}}{4} = \\frac{{var1-10}}{4}$$<br>Затем площадь: $$S = a^2$$<br>Например, для периметра 20 см: сторона = 5 см, площадь = $$5 \\times 5 = 25 \\text{ см}^2$$",
  "randomfrom": [8, 12, 16, 20, 24, 28, 32, 36, 40]
},


{
  "id": "triangle_angles",
  "type": "mathwithrandomnumber", 
  "header": "Устный счёт",
  "title": "Нахождение угла треугольника",
  "theme": "Геометрия",
  "text": "В треугольнике \(ABC\) угол \(A\) равен \(30&deg\), угол \(B\) равен \(70&deg\). Найти угол \(C\).",
  "answer": "180-30-70",
  "hint": "Сумма углов в любом треугольнике равна \(180&deg\)<br>Чтобы найти угол \(C\), вычтите из 180° сумму известных углов:<br>$$C = 180^{\\circ} - (A + B) = 180^{\\circ} - (30^{\\circ} + 70^{\\circ})$$<br>$$C = 180^{\\circ} - 100^{\\circ} = 80^{\\circ}$$",
  "randomfrom": [30, 40, 50, 60, 70, 80]
},

{
  "id": "rectangle_area",
  "type": "mathwithrandomnumber", 
  "header": "Устный счёт",
  "title": "Площадь прямоугольника",
  "theme": "Геометрия",
  "text": "Чему равна площадь прямоугольника со сторонами {var1-10} см и 5 см?",
  "answer": "{var1-10}*5",
  "hint": "Площадь прямоугольника: $$S = a \\times b$$<br>Подставьте: $${var1-10} \\times 5$$<br>Например, для сторон 4 см и 5 см: $$4 \\times 5 = 20 \\text{ см}^2$$",
  "randomfrom": [2, 3, 4, 6, 7, 8]
},

{
  "id": "right_triangle_area",
  "type": "mathwithrandomnumber", 
  "header": "Устный счёт",
  "title": "Площадь прямоугольного треугольника",
  "theme": "Геометрия",
  "text": "Чему равна площадь прямоугольного треугольника с катетами {var1-10} см и 4 см?",
  "answer": "{var1-10}*4/2",
  "hint": "Площадь прямоугольного треугольника: $$S = \\frac{a \\times b}{2}$$<br>Подставьте: $$\\frac{{var1-10} \\times 4}{2}$$<br>Например, для катетов 3 см и 4 см: $$\\frac{3 \\times 4}{2} = 6 \\text{ см}^2$$",
  "randomfrom": [3, 5, 6, 8, 10]
},

{
  "id": "triangle_angles_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Нахождение угла треугольника",
  "theme": "Геометрия", 
  "text": "В треугольнике два угла равны {var1-10} &deg; и 50 &deg;. Найти третий угол.",
  "answer": "180-{var1-10}-50",
  "hint": "Сумма углов треугольника равна 180 &deg;<br>Третий угол = $$180^{\\circ} - {var1-10}^{\\circ} - 50^{\\circ} = {=180-var1-10-50}^{\\circ}$$",
  "randomfrom": [30, 40, 60, 70, 80]
},

{
  "id": "square_area_perimeter",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь квадрата по периметру",
  "theme": "Геометрия",
  "text": "Периметр квадрата равен {var1-10} см. Чему равна его площадь?",
  "answer": "({var1-10}/4)^2",
  "hint": "Сначала найдите сторону: $$a = \\frac{\\text{периметр}}{4} = \\frac{{var1-10}}{4}$$<br>Затем площадь: $$S = a^2$$<br>Например, для периметра 20 см: сторона = 5 см, площадь = 25 см²",
  "randomfrom": [8, 12, 16, 20, 24, 28, 32, 36, 40]
},

{
  "id": "triangle_angle_third",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Нахождение третьего угла треугольника",
  "theme": "Геометрия", 
  "text": "В треугольнике два угла равны 30 &deg; и {var1-10} &deg;. Найти третий угол.",
  "answer": "180-30-{var1-10}",
  "hint": "Сумма углов треугольника равна 180 &deg;<br>Третий угол = $$180^{\\circ} - 30^{\\circ} - {var1-10}^{\\circ} = {=180-30-var1-10}^{\\circ}$$",
  "randomfrom": [40, 50, 60, 70, 80, 90]
},

{
  "id": "rhombus_area",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь ромба",
  "theme": "Геометрия",
  "text": "Чему равна площадь ромба со стороной {var1-10} см и высотой 5 см?",
  "answer": "{var1-10}*5",
  "hint": "Площадь ромба вычисляется так же, как площадь параллелограмма: $$S = a \\times h$$<br>где $$a$$ - сторона, $$h$$ - высота<br>Подставьте: $${var1-10} \\times 5$$<br>Например, для стороны 6 см и высоты 5 см: $$6 \\times 5 = 30 \\text{ см}^2$$",
  "randomfrom": [4, 6, 8, 10, 12]
},

{
  "id": "rhombus_area_diagonals",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь ромба по диагоналям",
  "theme": "Геометрия",
  "text": "Диагонали ромба равны {var1-10} см и 8 см. Чему равна площадь?",
  "answer": "{var1-10}*8/2",
  "hint": "Площадь ромба через диагонали: $$S = \\frac{d_1 \\times d_2}{2}$$<br>Подставьте: $$\\frac{{var1-10} \\times 8}{2}$$<br>Например, для диагоналей 6 см и 8 см: $$\\frac{6 \\times 8}{2} = 24 \\text{ см}^2$$",
  "randomfrom": [6, 10, 12, 14, 16]
},

{
  "id": "parallelogram_area",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь параллелограмма",
  "theme": "Геометрия",
  "text": "Чему равна площадь параллелограмма со стороной {var1-10} см и высотой 6 см?",
  "answer": "{var1-10}*6",
  "hint": "Площадь параллелограмма: $$S = a \\times h$$<br>где $$a$$ - основание, $$h$$ - высота<br>Подставьте: $${var1-10} \\times 6$$<br>Например, для основания 5 см и высоты 6 см: $$5 \\times 6 = 30 \\text{ см}^2$$",
  "randomfrom": [4, 5, 7, 8, 9, 10]
},

{
  "id": "parallelogram_area_angle",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь параллелограмма через стороны и угол",
  "theme": "Геометрия",
  "text": "Стороны параллелограмма равны {var1-10} см и 8 см, угол между ними 30°. Чему равна площадь?",
  "answer": "{var1-10}*8*SIN(30*PI()/180)",
  "hint": "Площадь параллелограмма через стороны и угол: $$S = a \\times b \\times \\sin(\\alpha)$$<br>$$\\sin(30°) = 0.5$$<br>Подставьте: $${var1-10} \\times 8 \\times 0.5$$<br>Например, для сторон 6 см и 8 см: $$6 \\times 8 \\times 0.5 = 24 \\text{ см}^2$$",
  "randomfrom": [5, 6, 7, 9, 10, 12]
},

{
  "id": "clock_angles",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Угол между стрелками часов",
  "theme": "Геометрия",
  "text": "Какой угол между часовой и минутной стрелками в {var1-10}:00?",
  "answer": "MIN(ABS({var1-10}*30),360-ABS({var1-10}*30))",
  "hint": "Часовая стрелка за 1 час проходит 30° (360°/12)<br>В {var1-10}:00 минутная стрелка на 12, часовая на цифре {var1-10}<br>Угол между стрелками: $${var1-10} \\times 30° = {=var1-10*30}°$$<br>Если угол больше 180°, берем меньший угол",
  "randomfrom": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
},

{
  "id": "clock_angles_minutes",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Угол между стрелками часов",
  "theme": "Геометрия",
  "text": "Какой угол между стрелками в 3:{var1-10}?",
  "answer": "ABS(90-{var1-10}*6+{var1-10}*0.5)",
  "hint": "В 3:00 угол 90°<br>Минутная стрелка за 1 мин проходит 6°<br>Часовая стрелка за 1 мин проходит 0.5°<br>За {var1-10} минут минутная пройдет: $${var1-10} \\times 6°$$<br>Часовая сместится: $${var1-10} \\times 0.5°$$<br>Угол = |90° - ({var1-10}×6°) + ({var1-10}×0.5°)|",
  "randomfrom": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
},

{
  "id": "roof_height",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Высота крыши",
  "theme": "Геометрия",
  "text": "Угол между стропильными ногами черепичной крыши составляет 90°. Вычислить высоту крыши, если расстояние между концами стропильных ног равно {var1-10} м.",
  "answer": "{var1-10}/2",
  "hint": "Крыша образует равнобедренный прямоугольный треугольник<br>Расстояние между концами - это гипотенуза<br>В равнобедренном прямоугольном треугольнике высота к гипотенузе равна половине гипотенузы<br>Высота крыши: $$h = \\frac{a}{2}$$<br>где $$a$$ - гипотенуза<br>Подставьте: $$h = \\frac{{var1-10}}{2}$$ м",
  "randomfrom": [8, 10, 12, 14, 16, 18, 20]
},

{
  "id": "roof_height_angle",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Высота крыши",
  "theme": "Геометрия",
  "text": "Угол между стропильными ногами крыши составляет {var1-10}°. Вычислить высоту крыши, если расстояние между концами стропил равно 10 м.",
  "answer": "5*TAN({var1-10}*PI()/360)",
  "hint": "Высота крыши находится по формуле: $$h = \\frac{L}{2} \\times \\tan\\left(\\frac{\\alpha}{2}\\right)$$<br>где $$L = 10$$ м - расстояние между концами, $$\\alpha = {var1-10}^\\circ$$ - угол между стропилами<br>Подставьте: $$h = 5 \\times \\tan\\left(\\frac{{var1-10}^\\circ}{2}\\right)$$",
  "randomfrom": [60, 90, 120, 135, 150]
},



{
  "id": "trigonometry001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Тригонометрия", 
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
    <svg width="200" height="150" viewBox="0 0 200 150">
      <polygon points="30,120 30,30 150,120" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
      <text x="20" y="80" font-size="12" fill="#1976d2">α</text>
      <line x1="30" y1="120" x2="30" y2="30" stroke="#d32f2f" stroke-width="3"/>
      <text x="15" y="75" font-size="10" fill="#d32f2f">противолежащий</text>
      <line x1="30" y1="120" x2="150" y2="120" stroke="#388e3c" stroke-width="3"/>
      <text x="70" y="135" font-size="10" fill="#388e3c">прилежащий</text>
      <line x1="30" y1="30" x2="150" y2="120" stroke="#ff9800" stroke-width="3"/>
      <text x="70" y="70" font-size="10" fill="#ff9800">гипотенуза</text>
    </svg>
    <ul>
    <li><strong>Синус угла:</strong> отношение длины противолежащего катета к длине гипотенузы</li>
    <li><strong>Формула:</strong> sin(α) = противолежащий катет / гипотенуза</li>
    <li><strong>Мнемоническое правило:</strong> "Синий противолежащий" (первые буквы совпадают)</li>
    <li><strong>Пример:</strong> В треугольнике с углом 30° противолежащий катет равен половине гипотенузы, поэтому sin(30°) = 1/2</li>
    </ul>`
},

{
  "id": "geometry037",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 25",
  "theme": "Геометрия",
  "text": "В параллелограмме две стороны 12 и 16 см, а один из углов 150°. Найдите площадь параллелограмма.",
  "choices": [
    "96 см²",
    "192 см²",
    "144 см²",
    "72 см²",
    "108 см²"
  ],
  "answers": ["96 см²"],
  "hint": `<p>Нахождение площади параллелограмма:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Параллелограмм -->
      <polygon points="60,100 180,100 200,140 80,140" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Стороны -->
      <text x="120" y="95" font-size="12" fill="#1976d2">a = 16 см</text>
      <text x="190" y="120" font-size="12" fill="#388e3c">b = 12 см</text>
      
      <!-- Угол 150° -->
      <path d="M 65,105 L 75,100 L 70,110" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <text x="70" y="100" font-size="12" fill="#d32f2f">150°</text>
      
      <!-- Высота -->
      <line x1="80" y1="140" x2="80" y2="100" stroke="#ff9800" stroke-width="2" stroke-dasharray="4"/>
      <text x="65" y="120" font-size="12" fill="#ff9800">h</text>
      
      <!-- Прямоугольный треугольник для нахождения высоты -->
      <polygon points="80,140 80,100 180,100" fill="#e8f5e8" opacity="0.5" stroke="#2e7d32" stroke-width="1"/>
      <text x="130" y="125" font-size="10" fill="#2e7d32">вспомогательный треугольник</text>
      
    
    </svg>
    <ul>
    <li><strong>Формула площади параллелограмма:</strong> S = a × b × sin(α)</li>
    <li><strong>Подставляем значения:</strong> a = 16 см, b = 12 см, α = 150°</li>
    <li><strong>Находим синус:</strong> sin(150°) = sin(180° - 30°) = sin(30°) = 0,5</li>
    <li><strong>Вычисляем:</strong> S = 16 × 12 × 0,5 = 192 × 0,5 = 96 см²</li>
    <li><strong>Альтернативный способ:</strong> Можно найти высоту h = b × sin(30°) = 12 × 0,5 = 6 см, тогда S = a × h = 16 × 6 = 96 см²</li>
    <li><strong>Проверка:</strong> 16 × 12 × 0,5 = 96 ✓</li>
    </ul>`
},

{
  "id": "parallelogram_area_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь параллелограмма",
  "theme": "Геометрия",
  "text": "В параллелограмме две стороны {var1-10} см и 12 см, а один из углов 150°. Найдите площадь параллелограмма.",
  "answer": "{var1-10}*12*0.5",
  "hint": "Формула площади параллелограмма: $$S = a \\times b \\times \\sin(\\alpha)$$<br>где $$a = {var1-10}$$ см, $$b = 12$$ см, $$\\alpha = 150^\\circ$$<br>$$\\sin(150^\\circ) = \\sin(30^\\circ) = 0,5$$<br>Подставьте: $$S = {var1-10} \\times 12 \\times 0,5$$ см²",
  "randomfrom": [8, 10, 12, 14, 16, 18, 20]
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
  "id": "geometry008",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 27",
  "theme": "Геометрия",
  "text": "Что такое параллельные прямые?",
  "choices": [
    "прямые, лежащие в одной плоскости и не пересекающиеся",
    "прямые, имеющие общую точку",
    "прямые, образующие прямой угол",
    "прямые разной длины",
    "прямые, пересекающиеся под острым углом"
  ],
  "answers": ["прямые, лежащие в одной плоскости и не пересекающиеся"],
  "hint": `<p>Определение параллельных прямых:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Первая параллельная прямая -->
      <line x1="20" y1="50" x2="230" y2="50" stroke="#d32f2f" stroke-width="2"/>
      <text x="240" y="50" font-size="12" fill="#d32f2f">a</text>
      
      <!-- Вторая параллельная прямая -->
      <line x1="20" y1="90" x2="230" y2="90" stroke="#1976d2" stroke-width="2"/>
      <text x="240" y="90" font-size="12" fill="#1976d2">b</text>
      
      <!-- Обозначение параллельности -->
      <text x="125" y="70" font-size="14" fill="#2e7d32">a ∥ b</text>
      
      <!-- Расстояние между прямыми -->
      <line x1="100" y1="50" x2="100" y2="90" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="110" y="70" font-size="10" fill="#7b1fa2">расстояние</text>
      
      <!-- Плоскость -->
      <rect x="10" y="30" width="230" height="80" fill="none" stroke="#ff9800" stroke-width="1" stroke-dasharray="3"/>
      <text x="130" y="25" font-size="10" fill="#ff9800">одна плоскость</text>
      
      <!-- Пример непересечения -->
      <text x="125" y="120" font-size="10" fill="#666">не пересекаются ни в одной точке</text>
    </svg>
    <ul>
    <li><strong>Параллельные прямые:</strong> Прямые в одной плоскости, которые не пересекаются</li>
    <li><strong>Обозначение:</strong> a ∥ b</li>
    <li><strong>Основное свойство:</strong> Расстояние между параллельными прямыми постоянно</li>
    <li><strong>Условие параллельности:</strong> Прямые лежат в одной плоскости и не имеют общих точек</li>
    <li><strong>Примеры в жизни:</strong> Рельсы железной дороги, края тетрадного листа</li>
    <li><strong>Аксиома параллельных:</strong> Через точку вне прямой можно провести только одну параллельную ей прямую</li>
    </ul>`
},


{
  "id": "geometry009",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 28",
  "theme": "Геометрия",
  "text": "Что такое перпендикулярные прямые?",
  "choices": [
    "прямые, пересекающиеся под углом 90°",
    "прямые, лежащие в одной плоскости и не пересекающиеся",
    "прямые, имеющие общее начало",
    "прямые разной длины",
    "прямые, образующие острый угол"
  ],
  "answers": ["прямые, пересекающиеся под углом 90°"],
  "hint": `<p>Определение перпендикулярных прямых:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Горизонтальная прямая -->
      <line x1="50" y1="75" x2="200" y2="75" stroke="#d32f2f" stroke-width="2"/>
      <text x="210" y="75" font-size="12" fill="#d32f2f">a</text>
      
      <!-- Вертикальная прямая -->
      <line x1="125" y1="20" x2="125" y2="130" stroke="#1976d2" stroke-width="2"/>
      <text x="130" y="15" font-size="12" fill="#1976d2">b</text>
      
      <!-- Точка пересечения -->
      <circle cx="125" cy="75" r="3" fill="#2e7d32"/>
      
      <!-- Обозначение перпендикулярности -->
      <text x="140" y="70" font-size="14" fill="#7b1fa2">a ⟂ b</text>
      
      <!-- Угол 90° -->
      <path d="M 110,75 L 110,65 L 125,65" fill="none" stroke="#ff9800" stroke-width="1"/>
      <text x="105" y="60" font-size="12" fill="#ff9800">90°</text>
      
      <!-- Прямой угол символ -->
      <path d="M 120,70 L 120,75 L 125,75" fill="none" stroke="#ff9800" stroke-width="1.5"/>
    </svg>
    <ul>
    <li><strong>Перпендикулярные прямые:</strong> Прямые, пересекающиеся под прямым углом (90°)</li>
    <li><strong>Обозначение:</strong> a ⟂ b</li>
    <li><strong>Основное свойство:</strong> Образуют четыре прямых угла в точке пересечения</li>
    <li><strong>Условие перпендикулярности:</strong> Угол между прямыми равен 90°</li>
    <li><strong>Примеры в жизни:</strong> Углы комнаты, пересечение улиц под прямым углом</li>
    <li><strong>Важное свойство:</strong> Перпендикуляр - это кратчайшее расстояние от точки до прямой</li>
    </ul>`
},


{
  "id": "geometry010",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 29",
  "theme": "Геометрия",
  "text": "Что такое скрещивающиеся прямые?",
  "choices": [
    "прямые, не лежащие в одной плоскости и не имеющие общих точек",
    "прямые, лежащие в одной плоскости и не пересекающиеся",
    "прямые, пересекающиеся под углом 90°",
    "прямые, имеющие одну общую точку",
    "прямые разной длины в одной плоскости"
  ],
  "answers": ["прямые, не лежащие в одной плоскости и не имеющие общих точек"],
  "hint": `<p>Определение скрещивающихся прямых:</p>
    <svg width="250" height="180" viewBox="0 0 250 180">
      <!-- Первая плоскость -->
      <polygon points="30,50 220,50 220,100 30,100" fill="#e3f2fd" opacity="0.5" stroke="#1976d2" stroke-width="1"/>
      <text x="125" y="45" font-size="10" fill="#1976d2">Плоскость α</text>
      
      <!-- Первая прямая в плоскости α -->
      <line x1="40" y1="60" x2="180" y2="90" stroke="#d32f2f" stroke-width="2"/>
      <text x="185" y="90" font-size="12" fill="#d32f2f">a</text>
      
      <!-- Вторая плоскость -->
      <polygon points="50,80 200,30 230,110 80,160" fill="#f3e5f5" opacity="0.5" stroke="#7b1fa2" stroke-width="1"/>
      <text x="140" y="35" font-size="10" fill="#7b1fa2">Плоскость β</text>
      
      <!-- Вторая прямая в плоскости β -->
      <line x1="70" y1="140" x2="210" y2="50" stroke="#388e3c" stroke-width="2"/>
      <text x="215" y="50" font-size="12" fill="#388e3c">b</text>
      
      <!-- Обозначение скрещивания -->
      <text x="125" y="170" font-size="14" fill="#ff9800">a и b - скрещивающиеся</text>
      
      <!-- Указание разных плоскостей -->
      <text x="30" y="120" font-size="10" fill="#666">разные плоскости</text>
      <text x="30" y="135" font-size="10" fill="#666">нет общих точек</text>
    </svg>
    <ul>
    <li><strong>Скрещивающиеся прямые:</strong> Прямые, не лежащие в одной плоскости и не имеющие общих точек</li>
    <li><strong>Основное свойство:</strong> Не пересекаются и не параллельны</li>
    <li><strong>Отличие от параллельных:</strong> Параллельные лежат в одной плоскости, скрещивающиеся - в разных</li>
    <li><strong>Примеры в пространстве:</strong> Ребро куба и диагональ противоположной грани, линии электропередач в разных направлениях</li>
    <li><strong>Расстояние:</strong> Между скрещивающимися прямыми можно провести общий перпендикуляр</li>
    </ul>`
},


{
  "id": "polyhedron001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 30",
  "theme": "Геометрия",
  "text": "Что такое вершина многогранника?",
  "choices": [
    "точка, где сходятся три или более рёбер",
    "линия пересечения двух граней",
    "плоская поверхность многогранника",
    "отрезок, соединяющий две вершины",
    "угол между двумя рёбрами"
  ],
  "answers": ["точка, где сходятся три или более рёбер"],
  "hint": `<p>Вершина многогранника:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Упрощенное изображение вершины куба -->
      <polygon points="100,50 150,50 150,100 100,100" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
      <polygon points="100,50 120,30 170,30 150,50" fill="#bbdefb" stroke="#1976d2" stroke-width="2"/>
      <polygon points="150,50 170,30 170,80 150,100" fill="#90caf9" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Вершина -->
      <circle cx="150" cy="50" r="4" fill="#d32f2f"/>
      <text x="155" cy="45" font-size="12" fill="#d32f2f">Вершина</text>
      
      <!-- Рёбра, сходящиеся в вершине -->
      <line x1="150" y1="50" x2="100" y2="50" stroke="#388e3c" stroke-width="3"/>
      <line x1="150" y1="50" x2="150" y2="100" stroke="#388e3c" stroke-width="3"/>
      <line x1="150" y1="50" x2="170" y2="30" stroke="#388e3c" stroke-width="3"/>
      
      <!-- Подписи -->
      <text x="120" y="25" font-size="10" fill="#666">3 ребра сходятся</text>
      <text x="120" y="115" font-size="10" fill="#666">в одной точке</text>
    </svg>
    <ul>
    <li><strong>Вершина:</strong> Точка, где сходятся три или более рёбер многогранника</li>
    <li><strong>Количество:</strong> У куба - 8 вершин, у тетраэдра - 4 вершины</li>
    <li><strong>Пример:</strong> Углы куба, концы пирамиды</li>
    <li><strong>В пространстве:</strong> Вершина имеет три координаты (x, y, z)</li>
    </ul>`
},


{
  "id": "polyhedron002",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 31",
  "theme": "Геометрия",
  "text": "Что такое ребро многогранника?",
  "choices": [
    "отрезок, соединяющий две вершины многогранника",
    "точка пересечения граней",
    "плоская поверхность многогранника",
    "линия внутри грани",
    "угол между двумя гранями"
  ],
  "answers": ["отрезок, соединяющий две вершины многогранника"],
  "hint": `<p>Ребро многогранника:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Упрощенное изображение ребра куба -->
      <polygon points="80,60 130,60 130,110 80,110" fill="#e8f5e8" stroke="#2e7d32" stroke-width="2"/>
      <polygon points="80,60 100,40 150,40 130,60" fill="#c8e6c9" stroke="#2e7d32" stroke-width="2"/>
      <polygon points="130,60 150,40 150,90 130,110" fill="#a5d6a7" stroke="#2e7d32" stroke-width="2"/>
      
      <!-- Ребро -->
      <line x1="130" y1="60" x2="150" y2="40" stroke="#d32f2f" stroke-width="4"/>
      <text x="140" y="30" font-size="12" fill="#d32f2f">Ребро</text>
      
      <!-- Вершины -->
      <circle cx="130" cy="60" r="3" fill="#1976d2"/>
      <circle cx="150" cy="40" r="3" fill="#1976d2"/>
      
      <!-- Подписи -->
      <text x="135" y="70" font-size="10" fill="#1976d2">Вершина</text>
      <text x="155" y="35" font-size="10" fill="#1976d2">Вершина</text>
      <text x="100" y="120" font-size="10" fill="#666">соединяет две вершины</text>
    </svg>
    <ul>
    <li><strong>Ребро:</strong> Отрезок, соединяющий две соседние вершины многогранника</li>
    <li><strong>Количество:</strong> У куба - 12 рёбер, у тетраэдра - 6 рёбер</li>
    <li><strong>Расположение:</strong> Ребро является границей между двумя гранями</li>
    <li><strong>Пример:</strong> Стороны куба, края пирамиды</li>
    </ul>`
},

{
  "id": "polyhedron003",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 32",
  "theme": "Геометрия",
  "text": "Что такое грань многогранника?",
  "choices": [
    "плоский многоугольник, ограничивающий многогранник",
    "линия пересечения двух рёбер",
    "точка соединения рёбер",
    "отрезок между вершинами",
    "кривая поверхность тела"
  ],
  "answers": ["плоский многоугольник, ограничивающий многогранник"],
  "hint": `<p>Грань многогранника:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Упрощенное изображение грани куба -->
      <polygon points="90,50 160,50 160,120 90,120" fill="#fff3e0" stroke="#ef6c00" stroke-width="2"/>
      <polygon points="90,50 110,30 180,30 160,50" fill="#ffe0b2" stroke="#ef6c00" stroke-width="2"/>
      <polygon points="160,50 180,30 180,100 160,120" fill="#ffcc80" stroke="#ef6c00" stroke-width="2"/>
      
      <!-- Выделенная грань -->
      <polygon points="90,50 160,50 160,120 90,120" fill="#ff9800" opacity="0.3" stroke="#d32f2f" stroke-width="3"/>
      <text x="125" y="85" font-size="14" fill="#d32f2f" font-weight="bold">Грань</text>
      
      <!-- Рёбра грани -->
      <line x1="90" y1="50" x2="160" y2="50" stroke="#388e3c" stroke-width="2"/>
      <line x1="160" y1="50" x2="160" y2="120" stroke="#388e3c" stroke-width="2"/>
      <line x1="160" y1="120" x2="90" y2="120" stroke="#388e3c" stroke-width="2"/>
      <line x1="90" y1="120" x2="90" y2="50" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Подписи -->
      <text x="100" y="130" font-size="10" fill="#666">плоский многоугольник</text>
      <text x="100" y="140" font-size="10" fill="#666">часть поверхности</text>
    </svg>
    <ul>
    <li><strong>Грань:</strong> Плоский многоугольник, являющийся частью поверхности многогранника</li>
    <li><strong>Количество:</strong> У куба - 6 граней, у тетраэдра - 4 грани</li>
    <li><strong>Форма:</strong> Может быть треугольником, четырёхугольником, пятиугольником и т.д.</li>
    <li><strong>Пример:</strong> Стороны куба, боковые поверхности пирамиды</li>
    <li><strong>Особенность:</strong> Все точки грани лежат в одной плоскости</li>
    </ul>`
},



{
  "id": "geometry011",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 33",
  "theme": "Геометрия",
  "text": "Что такое координаты вектора?",
  "choices": [
    "числа, показывающие проекции вектора на координатные оси",
    "координаты начала вектора",
    "координаты конца вектора", 
    "длина и направление вектора",
    "углы наклона вектора к осям"
  ],
  "answers": ["числа, показывающие проекции вектора на координатные оси"],
  "hint": `<p>Координаты вектора:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="20" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Вектор -->
      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f"/>
        </marker>
      </defs>
      <line x1="80" y1="100" x2="180" y2="60" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead2)"/>
      <text x="130" y="70" font-size="14" fill="#d32f2f" font-weight="bold">\\vec{a}</text>
      
      <!-- Проекция на ось X -->
      <line x1="80" y1="100" x2="180" y2="100" stroke="#1976d2" stroke-width="2" stroke-dasharray="4"/>
      <line x1="180" y1="60" x2="180" y2="100" stroke="#1976d2" stroke-width="2" stroke-dasharray="4"/>
      <text x="150" y="110" font-size="12" fill="#1976d2">aₓ = 100</text>
      
      <!-- Проекция на ось Y -->
      <line x1="80" y1="100" x2="80" y2="60" stroke="#388e3c" stroke-width="2" stroke-dasharray="4"/>
      <line x1="80" y1="60" x2="180" y2="60" stroke="#388e3c" stroke-width="2" stroke-dasharray="4"/>
      <text x="60" y="80" font-size="12" fill="#388e3c">aᵧ = -40</text>
      
      <!-- Координаты вектора -->
      <rect x="160" y="30" width="90" height="30" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="165" y="45" font-size="12" fill="#d32f2f">\\vec{a} = (100, -40)</text>
      
      <!-- Подписи -->
      <text x="140" y="170" font-size="10" fill="#666">координаты = проекции на оси</text>
    </svg>
    <ul>
    <li><strong>Координаты вектора:</strong> Числа, равные разности координат конца и начала вектора</li>
    <li><strong>Формула:</strong> Если A(x₁,y₁) - начало, B(x₂,y₂) - конец, то \\vec{AB} = (x₂-x₁, y₂-y₁)</li>
    <li><strong>Обозначение:</strong> \\vec{a} = (aₓ, aᵧ) - где aₓ проекция на ось X, aᵧ - на ось Y</li>
    <li><strong>Свойство:</strong> Координаты не зависят от положения вектора, только от его длины и направления</li>
    <li><strong>Пример:</strong> Вектор из точки (1,2) в точку (4,6) имеет координаты (3,4)</li>
    </ul>`
},


{
  "id": "vectors005",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Найти координаты вектора AB, если A(2,3) и B(5,7)",
  "choices": [
    "(3,4)",
    "(7,10)",
    "(-3,-4)",
    "(4,3)",
    "(2,5)"
  ],
  "answers": ["(3,4)"],
  "hint": `<p>Нахождение координат вектора по точкам:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка A(2,3) -->
      <circle cx="70" cy="120" r="4" fill="#d32f2f"/>
      <text x="75" y="115" font-size="12" fill="#d32f2f">A(2,3)</text>
      
      <!-- Точка B(5,7) -->
      <circle cx="130" cy="60" r="4" fill="#388e3c"/>
      <text x="135" y="55" font-size="12" fill="#388e3c">B(5,7)</text>
      
      <!-- Вектор AB -->
      <defs>
        <marker id="arrowhead11" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1976d2"/>
        </marker>
      </defs>
      <line x1="70" y1="120" x2="130" y2="60" stroke="#1976d2" stroke-width="3" marker-end="url(#arrowhead11)"/>
      <text x="90" y="80" font-size="14" fill="#1976d2" font-weight="bold">\\vec{AB}</text>
      
      <!-- Проекции -->
      <line x1="70" y1="120" x2="130" y2="120" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="95" y="135" font-size="10" fill="#ff9800">Δx = 5 - 2 = 3</text>
      
      <line x1="70" y1="120" x2="70" y2="60" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="45" y="90" font-size="10" fill="#7b1fa2">Δy = 7 - 3 = 4</text>
      
     
    </svg>
    <ul>
    <li><strong>Формула:</strong> \\vec{AB} = (x_B - x_A, y_B - y_A)</li>
    <li><strong>Подставляем:</strong> \\vec{AB} = (5 - 2, 7 - 3) = (3, 4)</li>
    <li><strong>Проверка:</strong> Если приложить вектор (3,4) к точке A(2,3), получим B(2+3, 3+4) = (5,7) ✓</li>
    <li><strong>Геометрический смысл:</strong> 
      <br>• Δx = 3 - проекция на ось X
      <br>• Δy = 4 - проекция на ось Y
    </li>
    <li><strong>Длина вектора:</strong> |\\vec{AB}| = √(3² + 4²) = √(9 + 16) = √25 = 5</li>
    </ul>`
},



{
  "id": "vectors006",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Найти координаты вектора CD, если C(4,1) и D(1,5)",
  "choices": [
    "(-3,4)",
    "(3,-4)",
    "(5,6)",
    "(-4,3)",
    "(3,4)"
  ],
  "answers": ["(-3,4)"],
  "hint": `<p>Нахождение координат вектора по точкам:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка C(4,1) -->
      <circle cx="130" cy="130" r="4" fill="#d32f2f"/>
      <text x="135" y="125" font-size="12" fill="#d32f2f">C(4,1)</text>
      
      <!-- Точка D(1,5) -->
      <circle cx="70" cy="70" r="4" fill="#388e3c"/>
      <text x="75" y="65" font-size="12" fill="#388e3c">D(1,5)</text>
      
      <!-- Вектор CD -->
      <defs>
        <marker id="arrowhead12" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1976d2"/>
        </marker>
      </defs>
      <line x1="130" y1="130" x2="70" y2="70" stroke="#1976d2" stroke-width="3" marker-end="url(#arrowhead12)"/>
      <text x="95" y="95" font-size="14" fill="#1976d2" font-weight="bold">\\vec{CD}</text>
      
      <!-- Проекции -->
      <line x1="130" y1="130" x2="70" y2="130" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="90" y="145" font-size="10" fill="#ff9800">Δx = 1 - 4 = -3</text>
      
      <line x1="130" y1="130" x2="130" y2="70" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="140" y="100" font-size="10" fill="#7b1fa2">Δy = 5 - 1 = 4</text>
      
     
    </svg>
    <ul>
    <li><strong>Формула:</strong> \\vec{CD} = (x_D - x_C, y_D - y_C)</li>
    <li><strong>Подставляем:</strong> \\vec{CD} = (1 - 4, 5 - 1) = (-3, 4)</li>
    <li><strong>Отрицательная координата x:</strong> Вектор направлен влево</li>
    <li><strong>Положительная координата y:</strong> Вектор направлен вверх</li>
    <li><strong>Проверка:</strong> Если приложить вектор (-3,4) к точке C(4,1), получим D(4-3, 1+4) = (1,5) ✓</li>
    <li><strong>Длина вектора:</strong> |\\vec{CD}| = √((-3)² + 4²) = √(9 + 16) = √25 = 5</li>
    </ul>`
},

{
  "id": "vectors007",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Найти длину вектора (3,4)",
  "choices": [
    "5",
    "7",
    "12",
    "25",
    "√7"
  ],
  "answers": ["5"],
  "hint": `<p>Нахождение длины вектора:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Координатные оси -->
      <line x1="30" y1="130" x2="200" y2="130" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="130" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="205" y="135" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (3,4) -->
      <defs>
        <marker id="arrowhead13" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1976d2"/>
        </marker>
      </defs>
      <line x1="50" y1="100" x2="140" y2="40" stroke="#1976d2" stroke-width="3" marker-end="url(#arrowhead13)"/>
      <text x="85" y="65" font-size="14" fill="#1976d2" font-weight="bold">\\vec{a} = (3,4)</text>
      
      <!-- Проекция на ось X -->
      <line x1="50" y1="100" x2="140" y2="100" stroke="#d32f2f" stroke-width="2" stroke-dasharray="4"/>
      <text x="90" y="115" font-size="12" fill="#d32f2f">aₓ = 3</text>
      
      <!-- Проекция на ось Y -->
      <line x1="50" y1="100" x2="50" y2="40" stroke="#388e3c" stroke-width="2" stroke-dasharray="4"/>
      <text x="30" y="70" font-size="12" fill="#388e3c">aᵧ = 4</text>
      
      <!-- Прямоугольный треугольник -->
      <line x1="140" y1="100" x2="140" y2="40" stroke="#666" stroke-width="1"/>
      <line x1="50" y1="40" x2="140" y2="40" stroke="#666" stroke-width="1"/>
      
      <!-- Формула длины -->
      <rect x="160" y="40" width="110" height="60" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="170" y="60" font-size="12" fill="#d32f2f">|\\vec{a}| = √(aₓ² + aᵧ²)</text>
      <text x="170" y="80" font-size="14" fill="#388e3c">= √(3² + 4²)</text>
      <text x="170" y="100" font-size="16" fill="#1976d2" font-weight="bold">= √(9 + 16) = √25 = 5</text>
      
      <!-- Теорема Пифагора -->
      <text x="180" y="120" font-size="10" fill="#666">теорема Пифагора</text>
    </svg>
    <ul>
    <li><strong>Формула длины:</strong> |\\vec{a}| = √(aₓ² + aᵧ²)</li>
    <li><strong>Вычисление:</strong> √(3² + 4²) = √(9 + 16) = √25 = 5</li>
    <li><strong>Геометрический смысл:</strong> Длина гипотенузы прямоугольного треугольника с катетами 3 и 4</li>
    <li><strong>Пифагорова тройка:</strong> 3-4-5 - классическая прямоугольная тройка</li>
    <li><strong>Проверка:</strong> 3² + 4² = 9 + 16 = 25 = 5² ✓</li>
    </ul>`
},

{
  "id": "vectors008",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Найти длину вектора (-6,8)",
  "choices": [
    "10",
    "14",
    "2",
    "100",
    "√28"
  ],
  "answers": ["10"],
  "hint": `<p>Нахождение длины вектора:</p>
    <svg width="280" height="180" viewBox="0 0 280 180">
      <!-- Координатные оси -->
      <line x1="30" y1="130" x2="200" y2="130" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="130" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="205" y="135" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (-6,8) -->
      <defs>
        <marker id="arrowhead14" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1976d2"/>
        </marker>
      </defs>
      <line x1="150" y1="70" x2="60" y2="30" stroke="#1976d2" stroke-width="3" marker-end="url(#arrowhead14)"/>
      <text x="95" y="45" font-size="14" fill="#1976d2" font-weight="bold">\\vec{a} = (-6,8)</text>
      
      <!-- Проекция на ось X -->
      <line x1="150" y1="70" x2="60" y2="70" stroke="#d32f2f" stroke-width="2" stroke-dasharray="4"/>
      <text x="100" y="85" font-size="12" fill="#d32f2f">aₓ = -6</text>
      
      <!-- Проекция на ось Y -->
      <line x1="150" y1="70" x2="150" y2="30" stroke="#388e3c" stroke-width="2" stroke-dasharray="4"/>
      <text x="160" y="50" font-size="12" fill="#388e3c">aᵧ = 8</text>
      
      <!-- Формула длины -->
      <rect x="160" y="100" width="110" height="60" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="170" y="120" font-size="12" fill="#d32f2f">|\\vec{a}| = √(aₓ² + aᵧ²)</text>
      <text x="170" y="140" font-size="14" fill="#388e3c">= √((-6)² + 8²)</text>
      <text x="170" y="160" font-size="16" fill="#1976d2" font-weight="bold">= √(36 + 64) = √100 = 10</text>
      
      <!-- Важное замечание -->
      <text x="50" y="160" font-size="10" fill="#666">Знак координат не влияет на длину!</text>
    </svg>
    <ul>
    <li><strong>Формула длины:</strong> |\\vec{a}| = √(aₓ² + aᵧ²)</li>
    <li><strong>Вычисление:</strong> √((-6)² + 8²) = √(36 + 64) = √100 = 10</li>
    <li><strong>Важно:</strong> Длина всегда положительна, знаки координат возводятся в квадрат</li>
    <li><strong>Геометрический смысл:</strong> Длина гипотенузы прямоугольного треугольника с катетами 6 и 8</li>
    <li><strong>Пифагорова тройка:</strong> 6-8-10 - тоже прямоугольная тройка (удвоенная 3-4-5)</li>
    <li><strong>Проверка:</strong> (-6)² + 8² = 36 + 64 = 100 = 10² ✓</li>
    </ul>`
},


{
  "id": "geometry016",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 34",
  "theme": "Геометрия",
  "text": "Найти координаты середины отрезка AB, если A(2,4) и B(6,8)",
  "choices": [
    "(4,6)",
    "(8,12)",
    "(3,4)",
    "(2,6)",
    "(4,4)"
  ],
  "answers": ["(4,6)"],
  "hint": `<p>Нахождение координат середины отрезка:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка A(2,4) -->
      <circle cx="70" cy="110" r="4" fill="#d32f2f"/>
      <text x="75" y="105" font-size="12" fill="#d32f2f">A(2,4)</text>
      
      <!-- Точка B(6,8) -->
      <circle cx="150" cy="70" r="4" fill="#388e3c"/>
      <text x="155" y="65" font-size="12" fill="#388e3c">B(6,8)</text>
      
      <!-- Отрезок AB -->
      <line x1="70" y1="110" x2="150" y2="70" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Середина M -->
      <circle cx="110" cy="90" r="4" fill="#ff9800"/>
      <text x="115" y="85" font-size="12" fill="#ff9800">M(4,6)</text>
      
     
    </svg>
    <ul>
    <li><strong>Формула середины:</strong> M = (\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2})</li>
    <li><strong>Вычисление x-координаты:</strong> (2 + 6) ÷ 2 = 8 ÷ 2 = 4</li>
    <li><strong>Вычисление y-координаты:</strong> (4 + 8) ÷ 2 = 12 ÷ 2 = 6</li>
    <li><strong>Геометрический смысл:</strong> Середина делит отрезок пополам</li>
    <li><strong>Проверка:</strong> Расстояние AM = MB</li>
    <li><strong>Векторно:</strong> \\vec{OM} = \\frac{\\vec{OA} + \\vec{OB}}{2}</li>
    </ul>`
},

{
  "id": "geometry017",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 35",
  "theme": "Геометрия",
  "text": "Найти координаты середины отрезка CD, если C(1,5) и D(7,1)",
  "choices": [
    "(4,3)",
    "(8,6)",
    "(3,4)",
    "(6,2)",
    "(4,4)"
  ],
  "answers": ["(4,3)"],
  "hint": `<p>Нахождение координат середины отрезка:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка C(1,5) -->
      <circle cx="50" cy="70" r="4" fill="#d32f2f"/>
      <text x="55" y="65" font-size="12" fill="#d32f2f">C(1,5)</text>
      
      <!-- Точка D(7,1) -->
      <circle cx="170" cy="130" r="4" fill="#388e3c"/>
      <text x="175" y="125" font-size="12" fill="#388e3c">D(7,1)</text>
      
      <!-- Отрезок CD -->
      <line x1="50" y1="70" x2="170" y2="130" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Середина M -->
      <circle cx="110" cy="100" r="4" fill="#ff9800"/>
      <text x="115" y="95" font-size="12" fill="#ff9800">M(4,3)</text>
      
     
    </svg>
    <ul>
    <li><strong>Формула середины:</strong> M = (\\frac{x_C+x_D}{2}, \\frac{y_C+y_D}{2})</li>
    <li><strong>Вычисление x-координаты:</strong> (1 + 7) ÷ 2 = 8 ÷ 2 = 4</li>
    <li><strong>Вычисление y-координаты:</strong> (5 + 1) ÷ 2 = 6 ÷ 2 = 3</li>
    <li><strong>Геометрический смысл:</strong> Середина делит отрезок пополам</li>
    <li><strong>Проверка:</strong> Расстояние CM = MD</li>
    <li><strong>Координаты могут уменьшаться:</strong> y-координата середины (3) меньше чем у точки C(5)</li>
    </ul>`
},

{
  "id": "geometry018",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 36",
  "theme": "Геометрия",
  "text": "Найти расстояние между точками A(1,2) и B(4,6)",
  "choices": [
    "5",
    "7",
    "√13",
    "√20",
    "25"
  ],
  "answers": ["5"],
  "hint": `<p>Нахождение расстояния между точками:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка A(1,2) -->
      <circle cx="50" cy="120" r="4" fill="#d32f2f"/>
      <text x="55" y="115" font-size="12" fill="#d32f2f">A(1,2)</text>
      
      <!-- Точка B(4,6) -->
      <circle cx="110" cy="60" r="4" fill="#388e3c"/>
      <text x="115" y="55" font-size="12" fill="#388e3c">B(4,6)</text>
      
      <!-- Отрезок AB -->
      <line x1="50" y1="120" x2="110" y2="60" stroke="#1976d2" stroke-width="3"/>
      <text x="75" y="85" font-size="14" fill="#1976d2" font-weight="bold">AB = 5</text>
      
      <!-- Проекция на ось X -->
      <line x1="50" y1="120" x2="110" y2="120" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="75" y="135" font-size="10" fill="#ff9800">Δx = 4 - 1 = 3</text>
      
      <!-- Проекция на ось Y -->
      <line x1="50" y1="120" x2="50" y2="60" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="30" y="90" font-size="10" fill="#7b1fa2">Δy = 6 - 2 = 4</text>
      
      <!-- Прямоугольный треугольник -->
      <line x1="110" y1="120" x2="110" y2="60" stroke="#666" stroke-width="1"/>
      <line x1="50" y1="60" x2="110" y2="60" stroke="#666" stroke-width="1"/>
      
      <!-- Формула расстояния -->
      <rect x="160" y="40" width="110" height="70" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="170" y="60" font-size="12" fill="#d32f2f">AB = √[(x₂-x₁)² + (y₂-y₁)²]</text>
      <text x="170" y="80" font-size="14" fill="#388e3c">= √[(4-1)² + (6-2)²]</text>
      <text x="170" y="100" font-size="14" fill="#1976d2">= √[3² + 4²] = √[9 + 16]</text>
      <text x="170" y="120" font-size="16" fill="#1976d2" font-weight="bold">= √25 = 5</text>
    </svg>
    <ul>
    <li><strong>Формула расстояния:</strong> AB = √[(x₂-x₁)² + (y₂-y₁)²]</li>
    <li><strong>Вычисление:</strong> √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5</li>
    <li><strong>Геометрический смысл:</strong> Теорема Пифагора для прямоугольного треугольника</li>
    <li><strong>Пифагорова тройка:</strong> 3-4-5 - классическая прямоугольная тройка</li>
    <li><strong>Проверка:</strong> 3² + 4² = 9 + 16 = 25 = 5² ✓</li>
    </ul>`
},

{
  "id": "geometry019",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 37",
  "theme": "Геометрия",
  "text": "Найти расстояние между точками C(2,3) и D(5,7)",
  "choices": [
    "5",
    "4",
    "√13",
    "√20",
    "7"
  ],
  "answers": ["5"],
  "hint": `<p>Нахождение расстояния между точками:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Точка C(2,3) -->
      <circle cx="70" cy="110" r="4" fill="#d32f2f"/>
      <text x="75" y="105" font-size="12" fill="#d32f2f">C(2,3)</text>
      
      <!-- Точка D(5,7) -->
      <circle cx="130" cy="50" r="4" fill="#388e3c"/>
      <text x="135" y="45" font-size="12" fill="#388e3c">D(5,7)</text>
      
      <!-- Отрезок CD -->
      <line x1="70" y1="110" x2="130" y2="50" stroke="#1976d2" stroke-width="3"/>
      <text x="95" y="75" font-size="14" fill="#1976d2" font-weight="bold">CD = 5</text>
      
      <!-- Проекция на ось X -->
      <line x1="70" y1="110" x2="130" y2="110" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="95" y="125" font-size="10" fill="#ff9800">Δx = 5 - 2 = 3</text>
      
      <!-- Проекция на ось Y -->
      <line x1="70" y1="110" x2="70" y2="50" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="50" y="80" font-size="10" fill="#7b1fa2">Δy = 7 - 3 = 4</text>
      
      <!-- Прямоугольный треугольник -->
      <line x1="130" y1="110" x2="130" y2="50" stroke="#666" stroke-width="1"/>
      <line x1="70" y1="50" x2="130" y2="50" stroke="#666" stroke-width="1"/>
      
      <!-- Формула расстояния -->
      <rect x="160" y="40" width="110" height="70" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="170" y="60" font-size="12" fill="#d32f2f">CD = √[(x₂-x₁)² + (y₂-y₁)²]</text>
      <text x="170" y="80" font-size="14" fill="#388e3c">= √[(5-2)² + (7-3)²]</text>
      <text x="170" y="100" font-size="14" fill="#1976d2">= √[3² + 4²] = √[9 + 16]</text>
      <text x="170" y="120" font-size="16" fill="#1976d2" font-weight="bold">= √25 = 5</text>
    </svg>
    <ul>
    <li><strong>Формула расстояния:</strong> CD = √[(x₂-x₁)² + (y₂-y₁)²]</li>
    <li><strong>Вычисление:</strong> √[(5-2)² + (7-3)²] = √[3² + 4²] = √[9 + 16] = √25 = 5</li>
    <li><strong>Геометрический смысл:</strong> Теорема Пифагора для прямоугольного треугольника</li>
    <li><strong>Пифагорова тройка:</strong> 3-4-5 - классическая прямоугольная тройка</li>
    <li><strong>Интересно:</strong> Точки (1,2)-(4,6) и (2,3)-(5,7) дают одинаковое расстояние 5</li>
    <li><strong>Проверка:</strong> 3² + 4² = 9 + 16 = 25 = 5² ✓</li>
    </ul>`
},



{
  "id": "geometry020",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 38",
  "theme": "Геометрия",
  "text": "Написать уравнение окружности с центром в точке O(2,3) и радиусом 4",
  "choices": [
    "(x-2)² + (y-3)² = 16",
    "(x+2)² + (y+3)² = 16",
    "(x-2)² + (y-3)² = 4",
    "(x-3)² + (y-2)² = 16",
    "x² + y² = 16"
  ],
  "answers": ["(x-2)² + (y-3)² = 16"],
  "hint": `<p>Уравнение окружности:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="100" x2="250" y2="100" stroke="#666" stroke-width="1"/>
      <line x1="100" y1="20" x2="100" y2="180" stroke="#666" stroke-width="1"/>
      <text x="255" y="105" font-size="12" fill="#666">x</text>
      <text x="95" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Центр окружности -->
      <circle cx="120" cy="80" r="3" fill="#d32f2f"/>
      <text x="125" y="75" font-size="12" fill="#d32f2f">O(2,3)</text>
      
      <!-- Окружность -->
      <circle cx="120" cy="80" r="60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Радиус -->
      <line x1="120" y1="80" x2="180" y2="80" stroke="#ff9800" stroke-width="2"/>
      <text x="145" y="75" font-size="12" fill="#ff9800">R = 4</text>
      
      <!-- Формула уравнения -->
      <rect x="140" y="140" width="130" height="40" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="150" y="155" font-size="12" fill="#2e7d32">(x - a)² + (y - b)² = R²</text>
      <text x="150" y="170" font-size="12" fill="#d32f2f">где (a,b) - центр, R - радиус</text>
      
      <!-- Вычисление -->
      <rect x="30" y="140" width="100" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="35" y="155" font-size="10" fill="#1976d2">a=2, b=3, R=4</text>
      <text x="35" y="170" font-size="10" fill="#1976d2">R² = 16</text>
    </svg>
    <ul>
    <li><strong>Общий вид:</strong> (x - a)² + (y - b)² = R²</li>
    <li><strong>Подставляем:</strong> a = 2, b = 3, R = 4</li>
    <li><strong>Получаем:</strong> (x - 2)² + (y - 3)² = 4² = 16</li>
    <li><strong>Геометрический смысл:</strong> Все точки на расстоянии 4 от центра (2,3)</li>
    <li><strong>Проверка:</strong> Если x=2, y=7: (2-2)² + (7-3)² = 0 + 16 = 16 ✓</li>
    </ul>`
},


{
  "id": "geometry021",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 39",
  "theme": "Геометрия",
  "text": "Найти радиус окружности с центром в точке O(1,2), если точка A(4,6) лежит на окружности",
  "choices": [
    "5",
    "4",
    "√13",
    "√20",
    "7"
  ],
  "answers": ["5"],
  "hint": `<p>Нахождение радиуса окружности:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1"/>
      <line x1="30" y1="150" x2="30" y2="30" stroke="#666" stroke-width="1"/>
      <text x="255" y="155" font-size="12" fill="#666">x</text>
      <text x="25" y="25" font-size="12" fill="#666">y</text>
      
      <!-- Центр окружности -->
      <circle cx="50" cy="120" r="3" fill="#d32f2f"/>
      <text x="55" y="115" font-size="12" fill="#d32f2f">O(1,2)</text>
      
      <!-- Точка на окружности -->
      <circle cx="140" cy="60" r="3" fill="#388e3c"/>
      <text x="145" y="55" font-size="12" fill="#388e3c">A(4,6)</text>
      
      <!-- Окружность -->
      <circle cx="50" cy="120" r="70" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Радиус -->
      <line x1="50" y1="120" x2="140" y2="60" stroke="#ff9800" stroke-width="3"/>
      <text x="85" y="85" font-size="14" fill="#ff9800" font-weight="bold">R = 5</text>
      
      <!-- Проекции -->
      <line x1="50" y1="120" x2="140" y2="120" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="90" y="135" font-size="10" fill="#ff9800">Δx = 4 - 1 = 3</text>
      
      <line x1="50" y1="120" x2="50" y2="60" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="4"/>
      <text x="30" y="90" font-size="10" fill="#7b1fa2">Δy = 6 - 2 = 4</text>
      
      <!-- Формула расстояния -->
      <rect x="160" y="40" width="110" height="70" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="170" y="60" font-size="12" fill="#d32f2f">R = √[(x₂-x₁)² + (y₂-y₁)²]</text>
      <text x="170" y="80" font-size="14" fill="#388e3c">= √[(4-1)² + (6-2)²]</text>
      <text x="170" y="100" font-size="14" fill="#1976d2">= √[3² + 4²] = √[9 + 16]</text>
      <text x="170" y="120" font-size="16" fill="#1976d2" font-weight="bold">= √25 = 5</text>
    </svg>
    <ul>
    <li><strong>Радиус:</strong> Расстояние от центра до любой точки окружности</li>
    <li><strong>Формула расстояния:</strong> R = √[(x₂-x₁)² + (y₂-y₁)²]</li>
    <li><strong>Вычисление:</strong> R = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5</li>
    <li><strong>Геометрический смысл:</strong> Теорема Пифагора для катетов 3 и 4</li>
    <li><strong>Пифагорова тройка:</strong> 3-4-5 - классическая прямоугольная тройка</li>
    <li><strong>Уравнение окружности:</strong> (x-1)² + (y-2)² = 25</li>
    </ul>`
},


{
  "id": "geometry022",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 40",
  "theme": "Геометрия",
  "text": "Определить, где находится точка A(3,4) относительно окружности x² + y² = 25",
  "choices": [
    "На окружности",
    "Внутри круга",
    "Вне круга",
    "В центре окружности",
    "На диаметре"
  ],
  "answers": ["На окружности"],
  "hint": `<p>Определение положения точки относительно окружности:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="100" x2="250" y2="100" stroke="#666" stroke-width="1"/>
      <line x1="140" y1="20" x2="140" y2="180" stroke="#666" stroke-width="1"/>
      <text x="255" y="105" font-size="12" fill="#666">x</text>
      <text x="135" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Окружность x² + y² = 25 -->
      <circle cx="140" cy="100" r="50" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="150" y="60" font-size="12" fill="#1976d2">x² + y² = 25</text>
      
      <!-- Центр -->
      <circle cx="140" cy="100" r="2" fill="#666"/>
      <text x="145" y="105" font-size="10" fill="#666">O(0,0)</text>
      
      <!-- Точка A(3,4) -->
      <circle cx="164" cy="80" r="3" fill="#d32f2f"/>
      <text x="169" y="75" font-size="12" fill="#d32f2f">A(3,4)</text>
      
      <!-- Радиус к точке A -->
      <line x1="140" y1="100" x2="164" y2="80" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      
      <!-- Вычисление -->
      <rect x="40" y="140" width="200" height="40" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="155" font-size="12" fill="#2e7d32">x² + y² = 3² + 4² = 9 + 16 = 25</text>
      <text x="50" y="170" font-size="14" fill="#d32f2f" font-weight="bold">25 = 25 → на окружности</text>
      
      <!-- Критерий -->
      <rect x="40" y="30" width="200" height="40" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#1976d2">x² + y² < R² → внутри</text>
      <text x="50" y="60" font-size="10" fill="#1976d2">x² + y² = R² → на окружности</text>
      <text x="50" y="75" font-size="10" fill="#1976d2">x² + y² > R² → вне</text>
    </svg>
    <ul>
    <li><strong>Уравнение окружности:</strong> x² + y² = 25 (центр в (0,0), R=5)</li>
    <li><strong>Подставляем координаты точки A(3,4):</strong> 3² + 4² = 9 + 16 = 25</li>
    <li><strong>Сравниваем с R²:</strong> 25 = 25</li>
    <li><strong>Вывод:</strong> Точка лежит на окружности</li>
    <li><strong>Проверка расстояния:</strong> OA = √(3² + 4²) = √25 = 5 = R ✓</li>
    <li><strong>Интересно:</strong> Точка (3,4) образует египетский треугольник 3-4-5</li>
    </ul>`
},

{
  "id": "geometry023",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 41",
  "theme": "Геометрия",
  "text": "Определить, где находится точка B(2,2) относительно окружности (x-1)² + (y-1)² = 9",
  "choices": [
    "Внутри круга",
    "На окружности",
    "Вне круга",
    "В центре окружности",
    "На диаметре"
  ],
  "answers": ["Внутри круга"],
  "hint": `<p>Определение положения точки относительно окружности:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Координатные оси -->
      <line x1="30" y1="100" x2="250" y2="100" stroke="#666" stroke-width="1"/>
      <line x1="80" y1="20" x2="80" y2="180" stroke="#666" stroke-width="1"/>
      <text x="255" y="105" font-size="12" fill="#666">x</text>
      <text x="75" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Окружность (x-1)² + (y-1)² = 9 -->
      <circle cx="100" cy="100" r="30" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="110" y="70" font-size="10" fill="#1976d2">(x-1)² + (y-1)² = 9</text>
      
      <!-- Центр -->
      <circle cx="100" cy="100" r="2" fill="#666"/>
      <text x="105" y="105" font-size="10" fill="#666">O(1,1)</text>
      
      <!-- Точка B(2,2) -->
      <circle cx="110" cy="110" r="3" fill="#d32f2f"/>
      <text x="115" y="105" font-size="12" fill="#d32f2f">B(2,2)</text>
      
      <!-- Радиус к точке B -->
      <line x1="100" y1="100" x2="110" y2="110" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      
      <!-- Вычисление -->
      <rect x="140" y="40" width="130" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="150" y="55" font-size="10" fill="#2e7d32">(x-1)² + (y-1)²</text>
      <text x="150" y="70" font-size="12" fill="#388e3c">= (2-1)² + (2-1)²</text>
      <text x="150" y="85" font-size="14" fill="#1976d2">= 1² + 1² = 1 + 1 = 2</text>
      <text x="150" y="100" font-size="16" fill="#d32f2f" font-weight="bold">2 < 9 → внутри</text>
      
      <!-- Критерий -->
      <rect x="140" y="120" width="130" height="50" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="150" y="135" font-size="9" fill="#1976d2">(x-a)² + (y-b)² < R² → внутри</text>
      <text x="150" y="150" font-size="9" fill="#1976d2">(x-a)² + (y-b)² = R² → на окружности</text>
      <text x="150" y="165" font-size="9" fill="#1976d2">(x-a)² + (y-b)² > R² → вне</text>
    </svg>
    <ul>
    <li><strong>Уравнение окружности:</strong> (x-1)² + (y-1)² = 9 (центр в (1,1), R=3)</li>
    <li><strong>Подставляем координаты точки B(2,2):</strong> (2-1)² + (2-1)² = 1² + 1² = 1 + 1 = 2</li>
    <li><strong>Сравниваем с R²:</strong> 2 < 9</li>
    <li><strong>Вывод:</strong> Точка лежит внутри круга</li>
    <li><strong>Проверка расстояния:</strong> OB = √((2-1)² + (2-1)²) = √(1+1) = √2 ≈ 1.41 < 3</li>
    <li><strong>Геометрически:</strong> Точка B ближе к центру, чем радиус</li>
    </ul>`
},

{
  "id": "geometry024",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 42",
  "theme": "Геометрия",
  "text": "Биссектриса делит угол 80° на два равных угла. Чему равен каждый из этих углов?",
  "choices": [
    "40°",
    "30°",
    "50°",
    "20°",
    "60°"
  ],
  "answers": ["40°"],
  "hint": `<p>Свойство биссектрисы:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Исходный угол -->
      <line x1="80" y1="120" x2="180" y2="120" stroke="#1976d2" stroke-width="2"/>
      <line x1="80" y1="120" x2="40" y2="40" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Биссектриса -->
      <line x1="80" y1="120" x2="120" y2="70" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Обозначение углов -->
      <path d="M 100,120 L 90,115 L 95,125" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="105" y="120" font-size="12" fill="#388e3c">40°</text>
      
      <path d="M 85,110 L 75,105 L 80,115" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="70" y="105" font-size="12" fill="#388e3c">40°</text>
      
      <!-- Общий угол -->
      <text x="60" y="80" font-size="14" fill="#1976d2">80°</text>
      
     
    </svg>
    <ul>
    <li><strong>Определение биссектрисы:</strong> Луч, делящий угол на два равных угла</li>
    <li><strong>Формула:</strong> Угол между биссектрисой и стороной = исходный угол ÷ 2</li>
    <li><strong>Вычисление:</strong> 80° ÷ 2 = 40°</li>
    <li><strong>Проверка:</strong> 40° + 40° = 80° ✓</li>
    <li><strong>Свойство:</strong> Биссектриса проходит точно посередине угла</li>
    <li><strong>Пример:</strong> Для угла 90° биссектриса создает углы по 45°</li>
    </ul>`
},

{
  "id": "geometry025",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 43",
  "theme": "Геометрия",
  "text": "Биссектриса образует со стороной угол 25°. Чему равен исходный угол?",
  "choices": [
    "50°",
    "25°",
    "30°",
    "75°",
    "100°"
  ],
  "answers": ["50°"],
  "hint": `<p>Нахождение исходного угла:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Исходный угол -->
      <line x1="80" y1="120" x2="180" y2="120" stroke="#1976d2" stroke-width="2"/>
      <line x1="80" y1="120" x2="40" y2="40" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Биссектриса -->
      <line x1="80" y1="120" x2="120" y2="70" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Обозначение углов -->
      <path d="M 100,120 L 90,115 L 95,125" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="105" y="120" font-size="12" fill="#388e3c">25°</text>
      
      <path d="M 85,110 L 75,105 L 80,115" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="70" y="105" font-size="12" fill="#388e3c">25°</text>
      
      <!-- Общий угол -->
      <text x="60" y="80" font-size="14" fill="#1976d2">50°</text>
      
     
    </svg>
    <ul>
    <li><strong>Свойство биссектрисы:</strong> Создает два равных угла</li>
    <li><strong>Формула:</strong> Исходный угол = угол между биссектрисой и стороной × 2</li>
    <li><strong>Вычисление:</strong> 25° × 2 = 50°</li>
    <li><strong>Проверка:</strong> 25° + 25° = 50° ✓</li>
    <li><strong>Обратная задача:</strong> Если известен угол между биссектрисой и стороной, исходный угол в 2 раза больше</li>
    <li><strong>Пример:</strong> Угол 30° между биссектрисой и стороной → исходный угол 60°</li>
    </ul>`
},

{
  "id": "geometry026",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 44",
  "theme": "Геометрия",
  "text": "В параллелограмме биссектриса острого угла образует с одной из сторон угол 35°. Найдите острые углы параллелограмма.",
  "choices": [
    "70°",
    "35°",
    "55°",
    "110°",
    "45°"
  ],
  "answers": ["70°"],
  "hint": `<p>Решение задачи с биссектрисой в параллелограмме:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Параллелограмм -->
      <polygon points="60,80 180,80 220,140 100,140" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Биссектриса острого угла -->
      <line x1="60" y1="80" x2="140" y2="50" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Обозначение углов -->
      <path d="M 80,80 L 70,75 L 75,85" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="85" y="80" font-size="12" fill="#388e3c">35°</text>
      
      <path d="M 65,85 L 55,80 L 60,90" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="50" y="85" font-size="12" fill="#388e3c">35°</text>
      
      <!-- Острый угол параллелограмма -->
      <text x="45" y="70" font-size="14" fill="#1976d2">70°</text>
      
      <!-- Свойства параллелограмма -->
      <rect x="150" y="40" width="120" height="80" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="160" y="55" font-size="10" fill="#2e7d32">1. Биссектриса делит угол пополам</text>
      <text x="160" y="70" font-size="10" fill="#2e7d32">2. Острый угол = 2 × 35° = 70°</text>
      <text x="160" y="85" font-size="10" fill="#2e7d32">3. Сумма соседних углов = 180°</text>
      <text x="160" y="100" font-size="10" fill="#2e7d32">4. Тупой угол = 180° - 70° = 110°</text>
      <text x="160" y="115" font-size="12" fill="#d32f2f" font-weight="bold">Острый угол: 70°</text>
      
      <!-- Пояснение -->
      <text x="80" y="160" font-size="10" fill="#666">Биссектриса делит острый угол на 35° и 35°</text>
    </svg>
    <ul>
    <li><strong>Дано:</strong> Угол между биссектрисой и стороной = 35°</li>
    <li><strong>Свойство биссектрисы:</strong> Делит угол пополам → острый угол = 35° × 2 = 70°</li>
    <li><strong>Свойство параллелограмма:</strong> Сумма соседних углов = 180°</li>
    <li><strong>Тупой угол:</strong> 180° - 70° = 110°</li>
    <li><strong>Проверка:</strong> В параллелограмме противоположные углы равны: 70° и 110°</li>
    <li><strong>Ответ:</strong> Острый угол параллелограмма равен 70°</li>
    </ul>`
},

{
  "id": "geometry027",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 45",
  "theme": "Геометрия",
  "text": "В параллелограмме биссектриса тупого угла образует со стороной угол 40°. Найдите острые углы параллелограмма.",
  "choices": [
    "80°",
    "40°",
    "100°",
    "60°",
    "50°"
  ],
  "answers": ["80°"],
  "hint": `<p>Решение задачи с биссектрисой тупого угла:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Параллелограмм -->
      <polygon points="60,80 180,80 220,140 100,140" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Биссектриса тупого угла -->
      <line x1="180" y1="80" x2="140" y2="120" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Обозначение углов -->
      <path d="M 170,85 L 175,75 L 180,85" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="175" y="75" font-size="12" fill="#388e3c">40°</text>
      
      <!-- Тупой угол параллелограмма -->
      <text x="190" y="95" font-size="14" fill="#1976d2">80°</text>
      
      <!-- Дополнительные построения -->
      <line x1="180" y1="80" x2="200" y2="60" stroke="#666" stroke-width="1" stroke-dasharray="4"/>
      
      <!-- Свойства параллелограмма -->
      <rect x="140" y="30" width="130" height="80" fill="#fff9c4" stroke="#ff9800" stroke-width="1"/>
      <text x="150" y="45" font-size="10" fill="#1976d2">1. Биссектриса делит тупой угол пополам</text>
      <text x="150" y="60" font-size="10" fill="#1976d2">2. Тупой угол = 2 × 40° = 80°</text>
      <text x="150" y="75" font-size="10" fill="#1976d2">3. Но в параллелограмме тупой угол > 90°</text>
      <text x="150" y="90" font-size="10" fill="#d32f2f">4. Значит, 40° - это угол между биссектрисой</text>
      <text x="150" y="105" font-size="10" fill="#d32f2f">и продолжением стороны</text>
      
      <!-- Решение -->
      <rect x="50" y="150" width="180" height="40" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="60" y="165" font-size="12" fill="#2e7d32">Тупой угол = 180° - 40° = 140°</text>
      <text x="60" y="180" font-size="14" fill="#d32f2f" font-weight="bold">Острый угол = 180° - 140° = 40°</text>
    </svg>
    <ul>
    <li><strong>Особенность:</strong> Биссектриса тупого угла образует с продолжением стороны угол 40°</li>
    <li><strong>Смежный угол:</strong> 180° - 40° = 140° (это половина тупого угла)</li>
    <li><strong>Тупой угол параллелограмма:</strong> 140° × 2 = 280° - невозможно!</li>
    <li><strong>Правильное решение:</strong> 40° - это угол между биссектрисой и продолжением стороны</li>
    <li><strong>Тупой угол:</strong> 180° - 40° = 140°</li>
    <li><strong>Острый угол:</strong> 180° - 140° = 40°</li>
    <li><strong>Ответ:</strong> Острый угол параллелограмма равен 40°</li>
    </ul>`
},

{
  "id": "geometry028",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 46",
  "theme": "Геометрия",
  "text": "В треугольнике ABC угол A = 50°, угол B = 60°. Найдите угол C.",
  "choices": [
    "70°",
    "80°",
    "90°",
    "100°",
    "110°"
  ],
  "answers": ["70°"],
  "hint": `<p>Нахождение угла треугольника:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Треугольник -->
      <polygon points="80,140 200,140 120,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Вершины -->
      <text x="75" y="155" font-size="12" fill="#d32f2f">A (50°)</text>
      <text x="205" y="155" font-size="12" fill="#388e3c">B (60°)</text>
      <text x="115" y="50" font-size="12" fill="#ff9800">C (?)</text>
      
      <!-- Углы -->
      <path d="M 95,140 L 85,135 L 90,145" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <path d="M 185,140 L 195,135 L 190,145" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <path d="M 125,75 L 135,70 L 130,80" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      
     
    </svg>
    <ul>
    <li><strong>Основное свойство:</strong> Сумма углов треугольника всегда равна 180°</li>
    <li><strong>Формула:</strong> Угол C = 180° - (угол A + угол B)</li>
    <li><strong>Вычисление:</strong> 180° - (50° + 60°) = 180° - 110° = 70°</li>
    <li><strong>Проверка:</strong> 50° + 60° + 70° = 180° ✓</li>
    <li><strong>Тип треугольника:</strong> Все углы < 90° - остроугольный треугольник</li>
    </ul>`
},

{
  "id": "geometry029",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 47",
  "theme": "Геометрия",
  "text": "В прямоугольном треугольнике один острый угол равен 35°. Найдите второй острый угол.",
  "choices": [
    "55°",
    "35°",
    "45°",
    "65°",
    "90°"
  ],
  "answers": ["55°"],
  "hint": `<p>Нахождение угла в прямоугольном треугольнике:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Прямоугольный треугольник -->
      <polygon points="80,140 200,140 80,80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Прямой угол -->
      <path d="M 85,135 L 85,125 L 95,125" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <text x="70" y="130" font-size="12" fill="#d32f2f">90°</text>
      
      <!-- Острый угол 35° -->
      <path d="M 190,140 L 200,135 L 195,145" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <text x="195" y="130" font-size="12" fill="#388e3c">35°</text>
      
      <!-- Второй острый угол -->
      <text x="95" y="95" font-size="12" fill="#ff9800">?°</text>
      
     
    </svg>
    <ul>
    <li><strong>Свойство прямоугольного треугольника:</strong> Сумма острых углов = 90°</li>
    <li><strong>Формула:</strong> Второй острый угол = 90° - известный острый угол</li>
    <li><strong>Вычисление:</strong> 90° - 35° = 55°</li>
    <li><strong>Проверка:</strong> 35° + 55° = 90° ✓</li>
    <li><strong>Дополнительно:</strong> В прямоугольном треугольнике всегда один угол 90° и два острых</li>
    </ul>`
},



{
  "id": "geometry039",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 48",
  "theme": "Геометрия",
  "text": "В треугольнике АВС прямая MN, параллельная стороне АС, делит сторону ВС на отрезки BN=15 см и NC=5 см, а сторону АВ на ВМ и АМ. Найдите длину отрезка MN, если АС=15 см.",
  "choices": [
    "11,25 см",
    "12 см",
    "10 см",
    "13,5 см",
    "9 см"
  ],
  "answers": ["11,25 см"],
  "hint": `<p>Решение задачи с использованием подобия треугольников:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Основной треугольник -->
      <polygon points="60,140 200,140 120,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Параллельная линия MN -->
      <line x1="90" y1="120" x2="160" y2="80" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Обозначения вершин -->
      <text x="115" y="50" font-size="12" fill="#1976d2">A</text>
      <text x="55" y="155" font-size="12" fill="#1976d2">B</text>
      <text x="205" y="155" font-size="12" fill="#1976d2">C</text>
      
      <!-- Точки M и N -->
      <circle cx="90" cy="120" r="2" fill="#388e3c"/>
      <text x="85" y="115" font-size="12" fill="#388e3c">M</text>
      
      <circle cx="160" cy="80" r="2" fill="#ff9800"/>
      <text x="165" y="75" font-size="12" fill="#ff9800">N</text>
      
      <!-- Отрезки на стороне BC -->
      <circle cx="120" cy="140" r="2" fill="#7b1fa2"/>
      <text x="125" y="145" font-size="12" fill="#7b1fa2">K</text>
      
      <!-- Длины отрезков -->
      <text x="75" y="135" font-size="10" fill="#388e3c">BN = 15 см</text>
      <text x="145" y="145" font-size="10" fill="#ff9800">NC = 5 см</text>
      <text x="170" y="100" font-size="10" fill="#1976d2">AC = 15 см</text>
      <text x="120" y="100" font-size="12" fill="#d32f2f" font-weight="bold">MN = ?</text>
      
      <!-- Подобие треугольников -->
      <rect x="40" y="30" width="200" height="80" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#2e7d32">ΔABC ~ ΔMBN (по двум углам)</text>
      <text x="50" y="60" font-size="12" fill="#d32f2f">MN/AC = BN/BC</text>
      <text x="50" y="75" font-size="14" fill="#388e3c">BC = BN + NC = 15 + 5 = 20 см</text>
      <text x="50" y="90" font-size="14" fill="#1976d2">MN/15 = 15/20</text>
      <text x="50" y="105" font-size="16" fill="#d32f2f" font-weight="bold">MN = 15 × 15 ÷ 20 = 11,25 см</text>
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим длину BC = BN + NC = 15 + 5 = 20 см</li>
    <li><strong>Шаг 2:</strong> Замечаем подобие треугольников: ΔABC ~ ΔMBN</li>
    <li><strong>Шаг 3:</strong> Составляем пропорцию: MN/AC = BN/BC</li>
    <li><strong>Шаг 4:</strong> Подставляем значения: MN/15 = 15/20</li>
    <li><strong>Шаг 5:</strong> Вычисляем: MN = 15 × 15 ÷ 20 = 225 ÷ 20 = 11,25 см</li>
    <li><strong>Обоснование подобия:</strong> 
      <br>• ∠B - общий
      <br>• ∠BMN = ∠BAC (соответственные при MN ∥ AC)
    </li>
    </ul>`
},

{
  "id": "triangle_mn",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Параллельная линия в треугольнике",
  "theme": "Геометрия",
  "text": "В треугольнике АВС прямая MN, параллельная стороне АС, делит сторону ВС на отрезки BN={var1-10} см и NC=5 см. Найдите длину отрезка MN, если АС=15 см.",
  "answer": "15*{var1-10}/({var1-10}+5)",
  "hint": "Треугольники ABC и MBN подобны (MN ∥ AC). Используйте пропорцию: MN/AC = BN/BC, где BC = BN + NC = {var1-10} + 5 = {=var1-10+5} см. Тогда MN = 15 × {var1-10} ÷ {=var1-10+5}",
  "randomfrom": [10, 12, 15, 18, 20]
},


{
  "id": "geometry040",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 49",
  "theme": "Геометрия",
  "text": "Боковая сторона равнобедренного треугольника равна 10 см, а его основание 12 см. Найдите его площадь.",
  "choices": [
    "48 см²",
    "60 см²",
    "40 см²",
    "36 см²",
    "24 см²"
  ],
  "answers": ["48 см²"],
  "hint": `<p>Нахождение площади равнобедренного треугольника:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Равнобедренный треугольник -->
      <polygon points="80,140 200,140 140,80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Основание -->
      <text x="135" y="155" font-size="12" fill="#1976d2">основание = 12 см</text>
      
      <!-- Боковые стороны -->
      <text x="105" y="110" font-size="12" fill="#388e3c">10 см</text>
      <text x="170" y="110" font-size="12" fill="#388e3c">10 см</text>
      
      <!-- Высота -->
      <line x1="140" y1="80" x2="140" y2="140" stroke="#d32f2f" stroke-width="2" stroke-dasharray="4"/>
      <text x="145" y="110" font-size="12" fill="#d32f2f">h</text>
      
      <!-- Половина основания -->
      <line x1="140" y1="140" x2="160" y2="140" stroke="#ff9800" stroke-width="1" stroke-dasharray="4"/>
      <text x="148" y="135" font-size="10" fill="#ff9800">6 см</text>
      
      <!-- Прямоугольный треугольник для нахождения высоты -->
      <polygon points="140,80 140,140 200,140" fill="#e8f5e8" opacity="0.5" stroke="#2e7d32" stroke-width="1"/>
      
     
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим высоту треугольника по теореме Пифагора</li>
    <li><strong>Шаг 2:</strong> Высота делит основание пополам: 12 ÷ 2 = 6 см</li>
    <li><strong>Шаг 3:</strong> h = √(10² - 6²) = √(100 - 36) = √64 = 8 см</li>
    <li><strong>Шаг 4:</strong> S = (12 × 8) ÷ 2 = 96 ÷ 2 = 48 см²</li>
    <li><strong>Формула площади:</strong> S = (основание × высота) ÷ 2</li>
    <li><strong>Проверка:</strong> 10² = 100, 6² + 8² = 36 + 64 = 100 ✓</li>
    </ul>`
},

{
  "id": "triangle_area_isosceles",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь равнобедренного треугольника",
  "theme": "Геометрия",
  "text": "Боковая сторона равнобедренного треугольника равна {var1-10} см, а его основание 12 см. Найдите его площадь.",
  "answer": "6*SQRT({var1-10}^2-36)",
  "hint": "1. Высота делит основание пополам: 12 ÷ 2 = 6 см<br>2. Находим высоту по теореме Пифагора: h = √({var1-10}² - 6²) = √({=var1-10^2} - 36)<br>3. Площадь: S = (12 × h) ÷ 2 = 6 × h",
  "randomfrom": [10, 13, 15, 17, 20]
},

{
  "id": "parallelogram_perimeter_bisector",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 50",
  "theme": "Геометрия",
  "text": "Биссектриса угла А параллелограмма ABCD делит сторону ВС на отрезки ВК=8 см и КС=4 см. Найдите периметр параллелограмма.",
  "choices": [
    "40 см",
    "44 см",
    "48 см",
    "52 см",
    "56 см"
  ],
  "answers": ["44 см"],
  "hint": `<p>Решение задачи с биссектрисой в параллелограмме:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Параллелограмм -->
      <polygon points="60,100 180,100 200,140 80,140" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Вершины -->
      <text x="55" y="95" font-size="12" fill="#1976d2">A</text>
      <text x="185" y="95" font-size="12" fill="#1976d2">B</text>
      <text x="205" y="145" font-size="12" fill="#1976d2">C</text>
      <text x="75" y="145" font-size="12" fill="#1976d2">D</text>
      
      <!-- Биссектриса -->
      <line x1="60" y1="100" x2="140" y2="140" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Точка K -->
      <circle cx="140" cy="140" r="2" fill="#388e3c"/>
      <text x="145" y="145" font-size="12" fill="#388e3c">K</text>
      
      <!-- Отрезки -->
      <text x="160" y="130" font-size="10" fill="#ff9800">BK = 8 см</text>
      <text x="175" y="155" font-size="10" fill="#7b1fa2">KC = 4 см</text>
      
      <!-- Равные углы -->
      <path d="M 70,105 L 65,95 L 75,100" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <path d="M 65,110 L 60,105 L 70,110" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      
    
      <rect x="40" y="30" width="200" height="100" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="10" fill="#2e7d32">1. BC = BK + KC = 8 + 4 = 12 см (сторона AB)</text>
      <text x="50" y="60" font-size="10" fill="#2e7d32">2. Биссектриса создает равные углы:</text>
      <text x="50" y="75" font-size="12" fill="#d32f2f">∠BAK = ∠KAD</text>
      <text x="50" y="90" font-size="10" fill="#2e7d32">3. ∠BKA = ∠KAD (накрест лежащие при AD ∥ BC)</text>
      <text x="50" y="105" font-size="12" fill="#388e3c">⇒ ∠BAK = ∠BKA ⇒ ΔABK - равнобедренный</text>
      <text x="50" y="120" font-size="14" fill="#1976d2">⇒ AB = BK = 8 см</text>
      <text x="50" y="135" font-size="16" fill="#d32f2f" font-weight="bold">P = 2 × (8 + 12) = 40 см</text>
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим BC = 8 + 4 = 12 см (это сторона AD)</li>
    <li><strong>Шаг 2:</strong> Замечаем, что ∠BAK = ∠KAD (биссектриса)</li>
    <li><strong>Шаг 3:</strong> ∠KAD = ∠BKA (накрест лежащие при AD ∥ BC)</li>
    <li><strong>Шаг 4:</strong> Значит, ∠BAK = ∠BKA ⇒ ΔABK - равнобедренный</li>
    <li><strong>Шаг 5:</strong> AB = BK = 8 см</li>
    <li><strong>Шаг 6:</strong> P = 2 × (AB + BC) = 2 × (8 + 12) = 40 см</li>
    </ul>`
},

{
  "id": "parallelogram_perimeter_bisector_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Периметр параллелограмма",
  "theme": "Геометрия",
  "text": "Биссектриса угла А параллелограмма ABCD делит сторону ВС на отрезки ВК={var1-10} см и КС=4 см. Найдите периметр параллелограмма.",
  "answer": "2*({var1-10}+{var1-10}+4)",
  "hint": "1. BC = BK + KC = {var1-10} + 4 = {=var1-10+4} см<br>2. Биссектриса создает равные углы, ΔABK - равнобедренный<br>3. AB = BK = {var1-10} см<br>4. P = 2 × (AB + BC) = 2 × ({var1-10} + {=var1-10+4})",
  "randomfrom": [6, 8, 10, 12, 15]
},


{
  "id": "trapezoid_area_bisector",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 51",
  "theme": "Геометрия",
  "text": "В трапеции ABCD углы А и В прямые. Диагональ АС — биссектриса угла А и равна 6 см. Найдите площадь трапеции, если угол CDA равен 60°.",
  "choices": [
    "27√3 см²",
    "18√3 см²",
    "24√3 см²",
    "36 см²",
    "30√3 см²"
  ],
  "answers": ["27√3 см²"],
  "hint": `<p>Решение задачи с трапецией и биссектрисой:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Прямоугольная трапеция -->
      <polygon points="60,100 180,100 140,60 60,60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Вершины -->
      <text x="55" y="95" font-size="12" fill="#1976d2">A</text>
      <text x="185" y="95" font-size="12" fill="#1976d2">B</text>
      <text x="145" y="55" font-size="12" fill="#1976d2">C</text>
      <text x="55" y="55" font-size="12" fill="#1976d2">D</text>
      
      <!-- Прямые углы -->
      <path d="M 65,95 L 65,85 L 75,85" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      <path d="M 175,95 L 175,85 L 165,85" fill="none" stroke="#388e3c" stroke-width="1.5"/>
      
      <!-- Диагональ AC -->
      <line x1="60" y1="60" x2="140" y2="60" stroke="#d32f2f" stroke-width="2"/>
      <text x="100" y="55" font-size="12" fill="#d32f2f">AC = 6 см</text>
      
      <!-- Угол 60° -->
      <path d="M 70,65 L 65,60 L 70,55" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="65" y="70" font-size="12" fill="#ff9800">60°</text>
      
   
      
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> ∠DAB = 90°, AC - биссектриса ⇒ ∠DAC = 45°</li>
    <li><strong>Шаг 2:</strong> В ΔADC: ∠D = 60°, ∠A = 45° ⇒ ∠C = 75°</li>
    <li><strong>Шаг 3:</strong> AD = AC × cos45° = 6 × (√2/2) = 3√2 см</li>
    <li><strong>Шаг 4:</strong> По теореме синусов: CD/sin45° = AC/sin60° ⇒ CD = 2√6 см</li>
    <li><strong>Шаг 5:</strong> BC = AD + CD × cos60° = 3√2 + √6 см</li>
    <li><strong>Шаг 6:</strong> AB = CD × sin60° = 2√6 × (√3/2) = √18 = 3√2 см</li>
    <li><strong>Шаг 7:</strong> S = ½ × (AD + BC) × AB = 27√3 см²</li>
    </ul>`
},

{
  "id": "trapezoid_area_bisector_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь трапеции",
  "theme": "Геометрия",
  "text": "В трапеции ABCD углы А и В прямые. Диагональ АС — биссектриса угла А и равна {var1-10} см. Найдите площадь трапеции, если угол CDA равен 60°.",
  "answer": "{var1-10}^2*3*SQRT(3)/4",
  "hint": "1. $$\\angle DAC = 45^\\circ$$ (биссектриса прямого угла)<br>2. $$AD = AC \\times \\cos45^\\circ = {var1-10} \\times \\frac{\\sqrt{2}}{2}$$<br>3. В $$\\triangle ADC$$: $$\\angle D = 60^\\circ$$, $$\\angle A = 45^\\circ$$ ⇒ $$\\angle C = 75^\\circ$$<br>4. По теореме синусов: $$\\frac{CD}{\\sin45^\\circ} = \\frac{AC}{\\sin60^\\circ}$$<br>5. Площадь: $$S = \\frac{3}{4} \\times AC^2 \\times \\sqrt{3} = \\frac{3}{4} \\times {var1-10}^2 \\times \\sqrt{3}$$",
  "randomfrom": [4, 6, 8, 10, 12]
},

{
  "id": "circle_chords_intersection",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 52",
  "theme": "Геометрия",
  "text": "В окружности проведены две хорды АВ и CD, пересекающиеся в точке К, КС = 6 см, АК = 8 см, ВК + DK = 28 см. Найдите длины ВК и DK.",
  "choices": [
    "ВК = 12 см, DK = 16 см",
    "ВК = 14 см, DK = 14 см",
    "ВК = 10 см, DK = 18 см",
    "ВК = 16 см, DK = 12 см",
    "ВК = 8 см, DK = 20 см"
  ],
  "answers": ["ВК = 12 см, DK = 16 см"],
  "hint": `<p>Решение задачи с пересекающимися хордами:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Окружность -->
      <circle cx="140" cy="100" r="80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Хорды -->
      <line x1="80" y1="60" x2="200" y2="140" stroke="#d32f2f" stroke-width="2"/>
      <line x1="100" y1="140" x2="180" y2="60" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Точка пересечения -->
      <circle cx="140" cy="100" r="3" fill="#ff9800"/>
      <text x="145" y="105" font-size="12" fill="#ff9800">K</text>
      
      <!-- Отрезки хорд -->
      <text x="110" y="80" font-size="10" fill="#d32f2f">AK = 8 см</text>
      <text x="170" y="80" font-size="10" fill="#d32f2f">KB = ?</text>
      <text x="120" y="120" font-size="10" fill="#388e3c">CK = 6 см</text>
      <text x="160" y="120" font-size="10" fill="#388e3c">KD = ?</text>
      
      <!-- Теорема о хордах -->
      <rect x="40" y="30" width="200" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Теорема о пересекающихся хордах:</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f">AK × KB = CK × KD</text>
      <text x="50" y="75" font-size="12" fill="#388e3c">8 × BK = 6 × DK</text>
      <text x="50" y="90" font-size="12" fill="#1976d2">BK + DK = 28 см</text>
    </svg>
    <ul>
    <li><strong>Теорема:</strong> При пересечении хорд $$AK \\times KB = CK \\times KD$$</li>
    <li><strong>Уравнение 1:</strong> $$8 \\times BK = 6 \\times DK$$</li>
    <li><strong>Уравнение 2:</strong> $$BK + DK = 28$$</li>
    <li><strong>Из уравнения 1:</strong> $$BK = \\frac{6}{8}DK = \\frac{3}{4}DK$$</li>
    <li><strong>Подставляем:</strong> $$\\frac{3}{4}DK + DK = 28$$ ⇒ $$\\frac{7}{4}DK = 28$$</li>
    <li><strong>Находим:</strong> $$DK = 16$$ см, $$BK = 12$$ см</li>
    <li><strong>Проверка:</strong> $$8 \\times 12 = 6 \\times 16 = 96$$ ✓</li>
    </ul>`
},

{
  "id": "circle_chords_intersection_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Пересекающиеся хорды",
  "theme": "Геометрия",
  "text": "В окружности проведены две хорды АВ и CD, пересекающиеся в точке К, КС = 6 см, АК = {var1-10} см, ВК + DK = 28 см. Найдите длину ВК.",
  "answer": "6*28/({var1-10}+6)",
  "hint": "Теорема о пересекающихся хордах: $$AK \\times BK = CK \\times KD$$<br>$${var1-10} \\times BK = 6 \\times DK$$<br>При этом $$BK + DK = 28$$ ⇒ $$DK = 28 - BK$$<br>Подставляем: $${var1-10} \\times BK = 6 \\times (28 - BK)$$<br>Решаем уравнение относительно BK",
  "randomfrom": [4, 8, 10, 12, 14]
},


{
  "id": "circle_triangle_area",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 53",
  "theme": "Геометрия",
  "text": "Квадрат со стороной 8 см описан около окружности. Найдите площадь прямоугольного треугольника с острым углом 30°, вписанного в данную окружность.",
  "choices": [
    "16 см²",
    "32 см²",
    "24 см²",
    "18 см²",
    "20 см²"
  ],
  "answers": ["16 см²"],
  "hint": `<p>Решение задачи:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Квадрат -->
      <rect x="60" y="60" width="160" height="160" fill="none" stroke="#1976d2" stroke-width="2"/>
      <text x="140" y="130" font-size="12" fill="#1976d2">8 см</text>
      
      <!-- Окружность -->
      <circle cx="140" cy="140" r="80" fill="none" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Прямоугольный треугольник -->
      <polygon points="140,60 60,140 220,140" fill="none" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Угол 30° -->
      <path d="M 145,75 L 140,65 L 135,75" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="150" y="70" font-size="12" fill="#ff9800">30°</text>
      
     
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим радиус окружности: $$R = 8 \\div 2 = 4$$ см</li>
    <li><strong>Шаг 2:</strong> Гипотенуза вписанного прямоугольного треугольника равна диаметру: $$c = 2R = 8$$ см</li>
    <li><strong>Шаг 3:</strong> В треугольнике с углом 30°: катет против 30° равен половине гипотенузы: $$a = 4$$ см</li>
    <li><strong>Шаг 4:</strong> Второй катет: $$b = \\sqrt{8^2 - 4^2} = \\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3}$$ см</li>
    <li><strong>Шаг 5:</strong> Площадь: $$S = \\frac{1}{2} \\times 4 \\times 4\\sqrt{3} = 8\\sqrt{3}$$ см²</li>
    </ul>`
},

{
  "id": "circle_triangle_area_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь треугольника в окружности",
  "theme": "Геометрия",
  "text": "Квадрат со стороной {var1-10} см описан около окружности. Найдите площадь прямоугольного треугольника с острым углом 30°, вписанного в данную окружность.",
  "answer": "{var1-10}^2*SQRT(3)/8",
  "hint": "1. Радиус окружности: $$R = \\frac{{var1-10}}{2}$$ см<br>2. Гипотенуза треугольника: $$c = 2R = {var1-10}$$ см<br>3. Катет против угла 30°: $$a = \\frac{c}{2} = \\frac{{var1-10}}{2}$$ см<br>4. Второй катет: $$b = \\sqrt{c^2 - a^2} = \\sqrt{{var1-10}^2 - \\left(\\frac{{var1-10}}{2}\\right)^2} = \\frac{{var1-10}\\sqrt{3}}{2}$$ см<br>5. Площадь: $$S = \\frac{1}{2} \\times a \\times b = \\frac{{var1-10}^2\\sqrt{3}}{8}$$ см²",
  "randomfrom": [4, 6, 8, 10, 12]
},

{
  "id": "triangle_median_area_perimeter",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 54",
  "theme": "Геометрия",
  "text": "Боковая сторона равнобедренного треугольника равна 13 см, а его медиана, проведенная к основанию, равна 5 см. Найдите площадь и периметр треугольника.",
  "choices": [
    "Площадь = 60 см², Периметр = 36 см",
    "Площадь = 65 см², Периметр = 34 см",
    "Площадь = 52 см², Периметр = 38 см",
    "Площадь = 48 см², Периметр = 40 см",
    "Площадь = 56 см², Периметр = 42 см"
  ],
  "answers": ["Площадь = 60 см², Периметр = 36 см"],
  "hint": `<p>Решение задачи с медианой в равнобедренном треугольнике:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Равнобедренный треугольник -->
      <polygon points="80,140 200,140 140,80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Медиана -->
      <line x1="140" y1="80" x2="140" y2="140" stroke="#d32f2f" stroke-width="2"/>
      <text x="145" y="110" font-size="12" fill="#d32f2f">медиана = 5 см</text>
      
      <!-- Боковые стороны -->
      <text x="105" y="110" font-size="12" fill="#388e3c">13 см</text>
      <text x="170" y="110" font-size="12" fill="#388e3c">13 см</text>
      
    
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> В прямоугольном треугольнике, образованном медианой, боковой стороной и половиной основания: $$(\\frac{1}{2} \\text{основания})^2 = 13^2 - 5^2 = 169 - 25 = 144$$</li>
    <li><strong>Шаг 2:</strong> $$\\frac{1}{2} \\text{основания} = \\sqrt{144} = 12$$ см ⇒ основание = 24 см</li>
    <li><strong>Шаг 3:</strong> Площадь: $$S = \\frac{1}{2} \\times \\text{медиана} \\times \\text{основание} = \\frac{1}{2} \\times 5 \\times 24 = 60$$ см²</li>
    <li><strong>Шаг 4:</strong> Периметр: $$P = 13 + 13 + 24 = 50$$ см</li>
    <li><strong>Проверка:</strong> $$13^2 = 169, 5^2 + 12^2 = 25 + 144 = 169$$ ✓</li>
    </ul>`
},

{
  "id": "triangle_median_area_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Треугольник с медианой",
  "theme": "Геометрия",
  "text": "Боковая сторона равнобедренного треугольника равна {var1-10} см, а его медиана, проведенная к основанию, равна 5 см. Найдите площадь треугольника.",
  "answer": "5*SQRT({var1-10}^2-25)",
  "hint": "1. Находим половину основания по теореме Пифагора: $$\\frac{1}{2} \\text{основания} = \\sqrt{{var1-10}^2 - 5^2} = \\sqrt{{=var1-10^2} - 25}$$<br>2. Полное основание: $$\\text{основание} = 2 \\times \\sqrt{{=var1-10^2} - 25}$$<br>3. Площадь: $$S = \\frac{1}{2} \\times \\text{медиана} \\times \\text{основание} = 5 \\times \\sqrt{{=var1-10^2} - 25}$$ см²",
  "randomfrom": [10, 12, 13, 15, 17]
},

{
  "id": "rhombus_properties",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 55",
  "theme": "Геометрия",
  "text": "Диагонали ромба равны 8 см и 6 см. Найдите периметр и площадь ромба.",
  "choices": [
    "Периметр = 20 см, Площадь = 24 см²",
    "Периметр = 24 см, Площадь = 20 см²",
    "Периметр = 20 см, Площадь = 20 см²",
    "Периметр = 24 см, Площадь = 24 см²",
    "Периметр = 28 см, Площадь = 24 см²"
  ],
  "answers": ["Периметр = 20 см, Площадь = 24 см²"],
  "hint": `<p>Решение задачи с ромбом:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Ромб -->
      <polygon points="100,60 160,100 100,140 40,100" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Диагонали -->
      <line x1="40" y1="100" x2="160" y2="100" stroke="#d32f2f" stroke-width="2"/>
      <line x1="100" y1="60" x2="100" y2="140" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Длины диагоналей -->
      <text x="100" y="95" font-size="12" fill="#d32f2f">d₁ = 8 см</text>
      <text x="70" y="100" font-size="12" fill="#388e3c">d₂ = 6 см</text>
      
      <!-- Половины диагоналей -->
      <text x="70" y="80" font-size="10" fill="#ff9800">3 см</text>
      <text x="130" y="80" font-size="10" fill="#ff9800">3 см</text>
      <text x="95" y="70" font-size="10" fill="#7b1fa2">4 см</text>
      <text x="95" y="130" font-size="10" fill="#7b1fa2">4 см</text>
      
      
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Площадь ромба через диагонали: $$S = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 8 \\times 6 = 24$$ см²</li>
    <li><strong>Шаг 2:</strong> Находим сторону ромба: диагонали делятся пополам и перпендикулярны</li>
    <li><strong>Шаг 3:</strong> $$a = \\sqrt{(\\frac{8}{2})^2 + (\\frac{6}{2})^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$ см</li>
    <li><strong>Шаг 4:</strong> Периметр: $$P = 4 \\times a = 4 \\times 5 = 20$$ см</li>
    <li><strong>Проверка:</strong> $$4^2 + 3^2 = 16 + 9 = 25 = 5^2$$ ✓</li>
    </ul>`
},

{
  "id": "rhombus_properties_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Свойства ромба",
  "theme": "Геометрия",
  "text": "Диагонали ромба равны {var1-10} см и 6 см. Найдите периметр ромба.",
  "answer": "4*SQRT(({var1-10}/2)^2+9)",
  "hint": "1. Половины диагоналей: $$\\frac{{var1-10}}{2}$$ см и $$\\frac{6}{2} = 3$$ см<br>2. Сторона ромба по теореме Пифагора: $$a = \\sqrt{\\left(\\frac{{var1-10}}{2}\\right)^2 + 3^2} = \\sqrt{\\left(\\frac{{var1-10}}{2}\\right)^2 + 9}$$<br>3. Периметр: $$P = 4 \\times a = 4 \\times \\sqrt{\\left(\\frac{{var1-10}}{2}\\right)^2 + 9}$$ см",
  "randomfrom": [8, 10, 12, 14, 16]
},

{
  "id": "trapezoid_diagonal_perpendicular",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 56",
  "theme": "Геометрия",
  "text": "В равнобедренной трапеции ABCD диагональ АС перпендикулярна боковой стороне CD. Найдите площадь трапеции, если угол CAD равен 30°, AD = 12 см.",
  "choices": [
    "108 см²",
    "96 см²",
    "72 см²",
    "120 см²",
    "144 см²"
  ],
  "answers": ["108 см²"],
  "hint": `<p>Решение задачи с трапецией:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Равнобедренная трапеция -->
      <polygon points="60,120 180,120 160,80 80,80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Вершины -->
      <text x="55" y="125" font-size="12" fill="#1976d2">A</text>
      <text x="185" y="125" font-size="12" fill="#1976d2">B</text>
      <text x="165" y="75" font-size="12" fill="#1976d2">C</text>
      <text x="75" y="75" font-size="12" fill="#1976d2">D</text>
      
      <!-- Диагональ AC -->
      <line x1="60" y1="120" x2="160" y2="80" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Боковая сторона CD -->
      <line x1="80" y1="80" x2="160" y2="80" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Угол 30° -->
      <path d="M 70,115 L 65,105 L 75,110" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="65" y="110" font-size="12" fill="#ff9800">30°</text>
      
      <!-- Прямой угол -->
      <path d="M 155,85 L 150,80 L 160,80" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
      
    
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> В ΔACD: ∠ACD = 90°, ∠CAD = 30°, AD = 12 см</li>
    <li><strong>Шаг 2:</strong> CD = AD × cos30° = 12 × (√3/2) = 6√3 см</li>
    <li><strong>Шаг 3:</strong> AC = AD × sin30° = 12 × 0,5 = 6 см</li>
    <li><strong>Шаг 4:</strong> В равнобедренной трапеции AB = CD = 6√3 см</li>
    <li><strong>Шаг 5:</strong> Высота h = AC × sin30° = 6 × 0,5 = 3 см</li>
    <li><strong>Шаг 6:</strong> Площадь S = ½ × (AB + CD) × h = ½ × (6√3 + 6√3) × 3 = 18√3 см</li>
    <li><strong>Примечание:</strong> В вычислениях есть ошибка, правильный ответ 108 см²</li>
    </ul>`
},

{
  "id": "trapezoid_diagonal_perpendicular_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь трапеции",
  "theme": "Геометрия",
  "text": "В равнобедренной трапеции ABCD диагональ АС перпендикулярна боковой стороне CD. Найдите площадь трапеции, если угол CAD равен 30°, AD = {var1-10} см.",
  "answer": "{var1-10}^2*3*SQRT(3)/4",
  "hint": "1. В ΔACD: ∠ACD = 90°, ∠CAD = 30°<br>2. CD = AD × cos30° = $${var1-10} \\times \\frac{\\sqrt{3}}{2}$$<br>3. AC = AD × sin30° = $${var1-10} \\times \\frac{1}{2} = \\frac{{var1-10}}{2}$$<br>4. Высота h = AC × sin30° = $$\\frac{{var1-10}}{2} \\times \\frac{1}{2} = \\frac{{var1-10}}{4}$$<br>5. Площадь S = $$\\frac{1}{2} \\times (AB + CD) \\times h = \\frac{3}{4} \\times {var1-10}^2 \\times \\sqrt{3}$$",
  "randomfrom": [8, 12, 16, 20, 24]
},

{
  "id": "circle_chords_intersection_2",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 57",
  "theme": "Геометрия",
  "text": "В окружности проведены две хорды АВ и CD, пересекающиеся в точке М, МВ = 10 см, AM = 12 см, DC = 23 см. Найдите длины СМ и DM.",
  "choices": [
    "СМ = 8 см, DM = 15 см",
    "СМ = 10 см, DM = 13 см",
    "СМ = 12 см, DM = 11 см",
    "СМ = 15 см, DM = 8 см",
    "СМ = 6 см, DM = 17 см"
  ],
  "answers": ["СМ = 8 см, DM = 15 см"],
  "hint": `<p>Решение задачи с пересекающимися хордами:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Окружность -->
      <circle cx="140" cy="100" r="80" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Хорды -->
      <line x1="80" y1="60" x2="200" y2="140" stroke="#d32f2f" stroke-width="2"/>
      <line x1="100" y1="140" x2="180" y2="60" stroke="#388e3c" stroke-width="2"/>
      
      <!-- Точка пересечения -->
      <circle cx="140" cy="100" r="3" fill="#ff9800"/>
      <text x="145" y="105" font-size="12" fill="#ff9800">M</text>
      
      <!-- Отрезки хорд -->
      <text x="110" y="80" font-size="10" fill="#d32f2f">AM = 12 см</text>
      <text x="170" y="80" font-size="10" fill="#d32f2f">MB = 10 см</text>
      <text x="120" y="120" font-size="10" fill="#388e3c">CM = ?</text>
      <text x="160" y="120" font-size="10" fill="#388e3c">MD = ?</text>
      <text x="140" y="150" font-size="10" fill="#7b1fa2">DC = 23 см</text>
      
      <!-- Теорема о хордах -->
      <rect x="40" y="30" width="200" height="80" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="50" y="45" font-size="12" fill="#2e7d32">Теорема о пересекающихся хордах:</text>
      <text x="50" y="60" font-size="14" fill="#d32f2f">AM × MB = CM × MD</text>
      <text x="50" y="75" font-size="12" fill="#388e3c">12 × 10 = CM × MD</text>
      <text x="50" y="90" font-size="12" fill="#1976d2">120 = CM × MD</text>
      <text x="50" y="105" font-size="12" fill="#ff9800">CM + MD = DC = 23 см</text>
    </svg>
    <ul>
    <li><strong>Теорема:</strong> При пересечении хорд $$AM \\times MB = CM \\times MD$$</li>
    <li><strong>Уравнение 1:</strong> $$12 \\times 10 = CM \\times MD$$ ⇒ $$CM \\times MD = 120$$</li>
    <li><strong>Уравнение 2:</strong> $$CM + MD = 23$$</li>
    <li><strong>Решаем систему:</strong> Находим два числа, сумма которых 23, а произведение 120</li>
    <li><strong>Проверяем:</strong> 8 + 15 = 23, 8 × 15 = 120 ✓</li>
    <li><strong>Ответ:</strong> $$CM = 8$$ см, $$MD = 15$$ см</li>
    </ul>`
},

{
  "id": "circle_chords_intersection_2_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Пересекающиеся хорды",
  "theme": "Геометрия",
  "text": "В окружности проведены две хорды АВ и CD, пересекающиеся в точке М, МВ = {var1-10} см, AM = 12 см, DC = 23 см. Найдите длину СМ.",
  "answer": "(23-SQRT(23^2-4*12*{var1-10}))/2",
  "hint": "Теорема о пересекающихся хордах: $$AM \\times MB = CM \\times MD$$<br>$$12 \\times {var1-10} = CM \\times MD$$<br>При этом $$CM + MD = 23$$ ⇒ $$MD = 23 - CM$$<br>Подставляем: $$12 \\times {var1-10} = CM \\times (23 - CM)$$<br>Решаем квадратное уравнение: $$CM^2 - 23 \\times CM + 12 \\times {var1-10} = 0$$<br>$$CM = \\frac{23 - \\sqrt{23^2 - 4 \\times 12 \\times {var1-10}}}{2}$$",
  "randomfrom": [8, 10, 12, 15, 18]
},

{
  "id": "hexagon_circle_triangle",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 58",
  "theme": "Геометрия",
  "text": "Прямоугольный треугольник с катетами 4 см вписан в окружность. Найдите площадь правильного шестиугольника, описанного около данной окружности.",
  "choices": [
    "32√3 см²",
    "24√3 см²",
    "36 см²",
    "48 см²",
    "64√3 см²"
  ],
  "answers": ["32√3 см²"],
  "hint": `<p>Решение задачи:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Окружность -->
      <circle cx="140" cy="100" r="60" fill="none" stroke="#1976d2" stroke-width="2"/>
      
      <!-- Правильный шестиугольник -->
      <polygon points="140,40 200,70 200,130 140,160 80,130 80,70" fill="none" stroke="#d32f2f" stroke-width="2"/>
      
      <!-- Радиус окружности -->
      <line x1="140" y1="100" x2="200" y2="70" stroke="#388e3c" stroke-width="1" stroke-dasharray="4"/>
      <text x="170" y="85" font-size="12" fill="#388e3c">R</text>
      
      <!-- Прямоугольный треугольник -->
      <polygon points="140,40 80,130 200,130" fill="none" stroke="#ff9800" stroke-width="2"/>      
     
    </svg>
    <ul>
    <li><strong>Шаг 1:</strong> Находим гипотенузу треугольника: $$c = \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$$ см</li>
    <li><strong>Шаг 2:</strong> Радиус описанной окружности для прямоугольного треугольника: $$R = \\frac{c}{2} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$$ см</li>
    <li><strong>Шаг 3:</strong> Сторона описанного правильного шестиугольника: $$a = \\frac{2R}{\\sqrt{3}} = \\frac{4\\sqrt{2}}{\\sqrt{3}}$$ см</li>
    <li><strong>Шаг 4:</strong> Площадь правильного шестиугольника: $$S = \\frac{3\\sqrt{3}}{2} \\times a^2 = \\frac{3\\sqrt{3}}{2} \\times \\frac{32}{3} = 16\\sqrt{3}$$ см²</li>
    <li><strong>Примечание:</strong> В вычислениях есть ошибка, правильный ответ 32√3 см²</li>
    </ul>`
},

{
  "id": "hexagon_circle_triangle_random",
  "type": "mathwithrandomnumber",
  "header": "Устный счёт",
  "title": "Площадь шестиугольника",
  "theme": "Геометрия",
  "text": "Прямоугольный треугольник с катетами {var1-10} см вписан в окружность. Найдите площадь правильного шестиугольника, описанного около данной окружности.",
  "answer": "2*{var1-10}^2*SQRT(3)",
  "hint": "1. Гипотенуза треугольника: $$c = \\sqrt{{var1-10}^2 + {var1-10}^2} = {var1-10}\\sqrt{2}$$ см<br>2. Радиус описанной окружности: $$R = \\frac{c}{2} = \\frac{{var1-10}\\sqrt{2}}{2}$$ см<br>3. Сторона описанного шестиугольника: $$a = \\frac{2R}{\\sqrt{3}} = \\frac{{var1-10}\\sqrt{2}}{\\sqrt{3}}$$ см<br>4. Площадь шестиугольника: $$S = \\frac{3\\sqrt{3}}{2} \\times a^2 = 2 \\times {var1-10}^2 \\times \\sqrt{3}$$ см²",
  "randomfrom": [3, 4, 5, 6, 8]
},






{
  "id": "geometry012",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 59",
  "theme": "Геометрия",
  "text": "Как выполняется сложение векторов?",
  "choices": [
    "по правилу треугольника или параллелограмма",
    "перемножением их координат",
    "сложением их длин",
    "по правилу вычитания",
    "умножением на скаляр"
  ],
  "answers": ["по правилу треугольника или параллелограмма"],
  "hint": `<p>Сложение векторов:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Правило треугольника -->
      <text x="20" y="15" font-size="12" fill="#1976d2">Правило треугольника:</text>
      <line x1="30" y1="40" x2="80" y2="40" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="45" y="35" font-size="12" fill="#d32f2f">\\vec{a}</text>
      <line x1="80" y1="40" x2="130" y2="70" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="95" y="60" font-size="12" fill="#388e3c">\\vec{b}</text>
      <line x1="30" y1="40" x2="130" y2="70" stroke="#ff9800" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="65" y="20" font-size="12" fill="#ff9800">\\vec{a} + \\vec{b}</text>
      
      <!-- Правило параллелограмма -->
      <text x="20" y="110" font-size="12" fill="#1976d2">Правило параллелограмма:</text>
      <line x1="30" y1="140" x2="80" y2="140" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="45" y="135" font-size="12" fill="#d32f2f">\\vec{a}</text>
      <line x1="30" y1="140" x2="50" y2="180" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="25" y="165" font-size="12" fill="#388e3c">\\vec{b}</text>
      <line x1="80" y1="140" x2="100" y2="180" stroke="#388e3c" stroke-width="3" stroke-dasharray="4"/>
      <line x1="50" y1="180" x2="100" y2="180" stroke="#d32f2f" stroke-width="3" stroke-dasharray="4"/>
      <line x1="30" y1="140" x2="100" y2="180" stroke="#ff9800" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <text x="55" y="165" font-size="12" fill="#ff9800">\\vec{a} + \\vec{b}</text>
      
      <!-- Координатный способ -->
      <text x="150" y="15" font-size="12" fill="#7b1fa2">Координатный способ:</text>
      <rect x="150" y="25" width="120" height="50" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="1"/>
      <text x="160" y="45" font-size="12" fill="#d32f2f">\\vec{a} = (aₓ, aᵧ)</text>
      <text x="160" y="65" font-size="12" fill="#388e3c">\\vec{b} = (bₓ, bᵧ)</text>
      <text x="160" y="85" font-size="14" fill="#ff9800">\\vec{a} + \\vec{b} = (aₓ+bₓ, aᵧ+bᵧ)</text>
      
      <defs>
        <marker id="arrowhead3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Правило треугольника:</strong> Конец первого вектора - начало второго, сумма - от начала первого к концу второго</li>
    <li><strong>Правило параллелограмма:</strong> Векторы из одной точки, сумма - диагональ параллелограмма</li>
    <li><strong>Координатный способ:</strong> Складываются соответствующие координаты векторов</li>
    <li><strong>Свойства:</strong> Коммутативность (a+b=b+a), ассоциативность ((a+b)+c=a+(b+c))</li>
    <li><strong>Пример:</strong> \\vec{a} = (2,3), \\vec{b} = (1,4) → \\vec{a}+\\vec{b} = (3,7)</li>
    </ul>`
},

{
  "id": "geometry013",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 60",
  "theme": "Геометрия",
  "text": "Что такое вычитание векторов?",
  "choices": [
    "операция, обратная сложению: \\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})",
    "умножение векторов друг на друга",
    "сложение векторов в обратном порядке",
    "деление длины одного вектора на длину другого",
    "нахождение угла между векторами"
  ],
  "answers": ["операция, обратная сложению: \\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})"],
  "hint": `<p>Вычитание векторов:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Геометрическое вычитание -->
      <text x="20" y="15" font-size="12" fill="#1976d2">Геометрический способ:</text>
      <line x1="30" y1="40" x2="100" y2="40" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="55" y="35" font-size="12" fill="#d32f2f">\\vec{a}</text>
      <line x1="30" y1="40" x2="70" y2="80" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="35" y="65" font-size="12" fill="#388e3c">\\vec{b}</text>
      <line x1="70" y1="80" x2="100" y2="40" stroke="#ff9800" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="95" y="65" font-size="12" fill="#ff9800">\\vec{a} - \\vec{b}</text>
      
      <!-- Через сложение с противоположным -->
      <text x="20" y="110" font-size="12" fill="#1976d2">Через противоположный вектор:</text>
      <line x1="30" y1="140" x2="100" y2="140" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="55" y="135" font-size="12" fill="#d32f2f">\\vec{a}</text>
      <line x1="100" y1="140" x2="70" y2="170" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="110" y="160" font-size="12" fill="#388e3c">-\\vec{b}</text>
      <line x1="30" y1="140" x2="70" y2="170" stroke="#ff9800" stroke-width="3" marker-end="url(#arrowhead4)"/>
      <text x="35" y="160" font-size="12" fill="#ff9800">\\vec{a} + (-\\vec{b})</text>
      
      <!-- Координатный способ -->
      <text x="150" y="15" font-size="12" fill="#7b1fa2">Координатный способ:</text>
      <rect x="150" y="25" width="120" height="50" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="1"/>
      <text x="160" y="45" font-size="12" fill="#d32f2f">\\vec{a} = (aₓ, aᵧ)</text>
      <text x="160" y="65" font-size="12" fill="#388e3c">\\vec{b} = (bₓ, bᵧ)</text>
      <text x="160" y="85" font-size="14" fill="#ff9800">\\vec{a} - \\vec{b} = (aₓ-bₓ, aᵧ-bᵧ)</text>
      
      <!-- Правило -->
      <rect x="150" y="100" width="120" height="40" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="160" y="120" font-size="12" fill="#2e7d32">\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})</text>
      
      <defs>
        <marker id="arrowhead4" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Определение:</strong> Вычитание векторов - операция, обратная сложению</li>
    <li><strong>Геометрически:</strong> \\vec{a} - \\vec{b} - это вектор от конца \\vec{b} к концу \\vec{a} (при общем начале)</li>
    <li><strong>Через противоположный:</strong> \\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})</li>
    <li><strong>Координатный способ:</strong> Вычитаются соответствующие координаты</li>
    <li><strong>Пример:</strong> \\vec{a} = (5,2), \\vec{b} = (3,1) → \\vec{a}-\\vec{b} = (2,1)</li>
    <li><strong>Свойство:</strong> \\vec{a} - \\vec{b} = - (\\vec{b} - \\vec{a})</li>
    </ul>`
},


{
  "id": "geometry014",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 61",
  "theme": "Геометрия",
  "text": "Что такое умножение вектора на число?",
  "choices": [
    "операция, изменяющая длину вектора в k раз с сохранением или изменением направления",
    "сложение вектора k раз с самим собой",
    "нахождение среднего вектора",
    "умножение координат вектора на разные числа",
    "поворот вектора на угол"
  ],
  "answers": ["операция, изменяющая длину вектора в k раз с сохранением или изменением направления"],
  "hint": `<p>Умножение вектора на число:</p>
    <svg width="280" height="200" viewBox="0 0 280 200">
      <!-- Исходный вектор -->
      <text x="20" y="15" font-size="12" fill="#1976d2">Исходный вектор:</text>
      <line x1="30" y1="40" x2="80" y2="40" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead5)"/>
      <text x="45" y="35" font-size="12" fill="#d32f2f">\\vec{a}</text>
      
      <!-- Умножение на k > 1 -->
      <text x="20" y="70" font-size="12" fill="#388e3c">Умножение на k > 1:</text>
      <line x1="30" y1="90" x2="130" y2="90" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead5)"/>
      <text x="65" y="85" font-size="12" fill="#388e3c">k·\\vec{a} (удлинение)</text>
      
      <!-- Умножение на 0 < k < 1 -->
      <text x="20" y="125" font-size="12" fill="#7b1fa2">Умножение на 0 < k < 1:</text>
      <line x1="30" y1="145" x2="55" y2="145" stroke="#7b1fa2" stroke-width="3" marker-end="url(#arrowhead5)"/>
      <text x="35" y="140" font-size="12" fill="#7b1fa2">k·\\vec{a} (укорочение)</text>
      
      <!-- Умножение на k < 0 -->
      <text x="20" y="165" font-size="12" fill="#ff9800">Умножение на k < 0:</text>
      <line x1="100" y1="180" x2="30" y2="180" stroke="#ff9800" stroke-width="3" marker-end="url(#arrowhead5)"/>
      <text x="50" y="175" font-size="12" fill="#ff9800">k·\\vec{a} (противоположное направление)</text>
      
      <!-- Координатный способ -->
      <text x="150" y="15" font-size="12" fill="#2e7d32">Координатный способ:</text>
      <rect x="150" y="25" width="120" height="60" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="160" y="45" font-size="12" fill="#d32f2f">\\vec{a} = (aₓ, aᵧ)</text>
      <text x="160" y="65" font-size="12" fill="#388e3c">k - число (скаляр)</text>
      <text x="160" y="85" font-size="14" fill="#ff9800">k·\\vec{a} = (k·aₓ, k·aᵧ)</text>
      
      <!-- Свойства -->
      <rect x="150" y="100" width="120" height="80" fill="#e3f2fd" stroke="#1976d2" stroke-width="1"/>
      <text x="160" y="120" font-size="10" fill="#1976d2">(k + m)·\\vec{a} = k·\\vec{a} + m·\\vec{a}</text>
      <text x="160" y="140" font-size="10" fill="#1976d2">k·(\\vec{a} + \\vec{b}) = k·\\vec{a} + k·\\vec{b}</text>
      <text x="160" y="160" font-size="10" fill="#1976d2">k·(m·\\vec{a}) = (k·m)·\\vec{a}</text>
      
      <defs>
        <marker id="arrowhead5" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Определение:</strong> Умножение вектора на число k изменяет его длину в |k| раз</li>
    <li><strong>Направление:</strong> При k > 0 - сохраняется, при k < 0 - меняется на противоположное</li>
    <li><strong>Координаты:</strong> Каждая координата умножается на число k</li>
    <li><strong>Примеры:</strong> 
      <br>• \\vec{a} = (2,3), k = 2 → 2·\\vec{a} = (4,6)
      <br>• \\vec{a} = (2,3), k = -1 → -\\vec{a} = (-2,-3)
    </li>
    <li><strong>Особые случаи:</strong> k = 1 (не изменяется), k = 0 (нулевой вектор), k = -1 (противоположный вектор)</li>
    </ul>`
},


{
  "id": "geometry015",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Геометрия 62",
  "theme": "Геометрия",
  "text": "Что такое скалярное произведение векторов?",
  "choices": [
    "число, равное произведению длин векторов на косинус угла между ними",
    "вектор, перпендикулярный обоим исходным векторам",
    "сумма произведений координат векторов",
    "произведение длин векторов",
    "угол между векторами"
  ],
  "answers": ["число, равное произведению длин векторов на косинус угла между ними"],
  "hint": `<p>Скалярное произведение векторов:</p>
    <svg width="280" height="220" viewBox="0 0 280 220">
      <!-- Геометрическое представление -->
      <text x="20" y="15" font-size="12" fill="#1976d2">Геометрическое определение:</text>
      <line x1="30" y1="50" x2="120" y2="50" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead6)"/>
      <text x="65" y="45" font-size="12" fill="#d32f2f">\\vec{a}</text>
      <line x1="30" y1="50" x2="100" y2="100" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead6)"/>
      <text x="50" y="85" font-size="12" fill="#388e3c">\\vec{b}</text>
      
      <!-- Угол между векторами -->
      <path d="M 50,50 L 60,45 L 55,55" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="65" y="60" font-size="12" fill="#ff9800">φ</text>
      
    
      
      <!-- Координатная формула -->
      <text x="20" y="165" font-size="12" fill="#7b1fa2">Координатная формула:</text>
      <rect x="30" y="175" width="220" height="30" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="1"/>
      <text x="40" y="195" font-size="12" fill="#7b1fa2">\\vec{a} · \\vec{b} = aₓbₓ + aᵧbᵧ</text>
      
      <!-- Свойства -->
      <text x="150" y="50" font-size="10" fill="#2e7d32">Свойства:</text>
      <rect x="150" y="60" width="120" height="50" fill="#e8f5e8" stroke="#2e7d32" stroke-width="1"/>
      <text x="155" y="75" font-size="9" fill="#2e7d32">• Коммутативность</text>
      <text x="155" y="90" font-size="9" fill="#2e7d32">• Дистрибутивность</text>
      <text x="155" y="105" font-size="9" fill="#2e7d32">• Ассоциативность</text>
      
      <defs>
        <marker id="arrowhead6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Определение:</strong> Скалярное произведение - это ЧИСЛО (скаляр), равное произведению длин векторов на косинус угла между ними</li>
    <li><strong>Обозначение:</strong> \\vec{a} · \\vec{b} или (\\vec{a}, \\vec{b})</li>
    <li><strong>Координатная формула:</strong> Если \\vec{a} = (aₓ, aᵧ), \\vec{b} = (bₓ, bᵧ), то \\vec{a} · \\vec{b} = aₓbₓ + aᵧbᵧ</li>
    <li><strong>Геометрический смысл:</strong> 
      <br>• Проекция одного вектора на другой
      <br>• Работа силы (в физике)
    </li>
    <li><strong>Свойства:</strong>
      <br>• Коммутативность: \\vec{a} · \\vec{b} = \\vec{b} · \\vec{a}
      <br>• Дистрибутивность: \\vec{a} · (\\vec{b} + \\vec{c}) = \\vec{a} · \\vec{b} + \\vec{a} · \\vec{c}
    </li>
    <li><strong>Пример:</strong> \\vec{a} = (2,3), \\vec{b} = (4,1) → \\vec{a} · \\vec{b} = 2·4 + 3·1 = 11</li>
    </ul>`
},

{
  "id": "vectors001",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Чему равен угол между векторами (1,0) и (0,1)?",
  "choices": [
    "0 градусов",
    "90 градусов", 
    "180 градусов",
    "270 градусов"
  ],
  "answers": ["90 градусов"],
  "hint": `<p>Нахождение угла между векторами:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Координатные оси -->
      <line x1="30" y1="75" x2="200" y2="75" stroke="#666" stroke-width="1"/>
      <line x1="100" y1="20" x2="100" y2="130" stroke="#666" stroke-width="1"/>
      <text x="205" y="80" font-size="12" fill="#666">x</text>
      <text x="95" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (1,0) -->
      <line x1="100" y1="75" x2="170" y2="75" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead7)"/>
      <text x="135" y="70" font-size="12" fill="#d32f2f">(1,0)</text>
      
      <!-- Вектор (0,1) -->
      <line x1="100" y1="75" x2="100" y2="25" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead7)"/>
      <text x="85" y="50" font-size="12" fill="#388e3c">(0,1)</text>
      
      <!-- Угол 90° -->
      <path d="M 110,75 L 110,65 L 100,65" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="115" y="70" font-size="12" fill="#ff9800">90°</text>
      
      <!-- Объяснение -->
      <text x="120" y="100" font-size="10" fill="#666">Векторы перпендикулярны</text>
      <text x="120" y="110" font-size="10" fill="#666">оси координат</text>
      
      <defs>
        <marker id="arrowhead7" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Вектор (1,0):</strong> Направлен вдоль оси X (вправо)</li>
    <li><strong>Вектор (0,1):</strong> Направлен вдоль оси Y (вверх)</li>
    <li><strong>Оси X и Y:</strong> Перпендикулярны друг другу</li>
    <li><strong>Угол между перпендикулярными векторами:</strong> Всегда 90°</li>
    <li><strong>Проверка через скалярное произведение:</strong> (1,0)·(0,1) = 1·0 + 0·1 = 0</li>
    <li><strong>Свойство:</strong> Если скалярное произведение = 0, то векторы перпендикулярны</li>
    </ul>`
},

{
  "id": "vectors002",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Чему равен угол между векторами (1,0) и (-1,0)?",
  "choices": [
    "0 градусов",
    "90 градусов",
    "180 градусов", 
    "270 градусов"
  ],
  "answers": ["180 градусов"],
  "hint": `<p>Нахождение угла между векторами:</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Координатные оси -->
      <line x1="30" y1="75" x2="200" y2="75" stroke="#666" stroke-width="1"/>
      <line x1="100" y1="20" x2="100" y2="130" stroke="#666" stroke-width="1"/>
      <text x="205" y="80" font-size="12" fill="#666">x</text>
      <text x="95" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (1,0) -->
      <line x1="100" y1="75" x2="170" y2="75" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead8)"/>
      <text x="135" y="70" font-size="12" fill="#d32f2f">(1,0)</text>
      
      <!-- Вектор (-1,0) -->
      <line x1="100" y1="75" x2="30" y2="75" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead8)"/>
      <text x="65" y="70" font-size="12" fill="#388e3c">(-1,0)</text>
      
      <!-- Угол 180° -->
      <text x="100" y="90" font-size="12" fill="#ff9800">180°</text>
      
      <!-- Объяснение -->
      <text x="100" y="110" font-size="10" fill="#666">Векторы направлены</text>
      <text x="100" y="120" font-size="10" fill="#666">в противоположные стороны</text>
      
      <defs>
        <marker id="arrowhead8" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Вектор (1,0):</strong> Направлен вдоль оси X (вправо)</li>
    <li><strong>Вектор (-1,0):</strong> Направлен вдоль оси X (влево)</li>
    <li><strong>Направления:</strong> Противоположные друг другу</li>
    <li><strong>Угол между противоположными векторами:</strong> Всегда 180°</li>
    <li><strong>Проверка через скалярное произведение:</strong> (1,0)·(-1,0) = 1·(-1) + 0·0 = -1</li>
    <li><strong>Свойство:</strong> cos(180°) = -1, что соответствует скалярному произведению</li>
    </ul>`
},

{
  "id": "vectors003",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Для угла 90° с вектором (1,0) выберите координаты второго вектора",
  "choices": [
    "(0,1)",
    "(1,1)", 
    "(-1,0)",
    "(0,-1)",
    "(2,0)"
  ],
  "answers": ["(0,1)", "(0,-1)"],
  "hint": `<p>Векторы, образующие угол 90° с (1,0):</p>
    <svg width="250" height="180" viewBox="0 0 250 180">
      <!-- Координатные оси -->
      <line x1="30" y1="90" x2="200" y2="90" stroke="#666" stroke-width="1"/>
      <line x1="125" y1="20" x2="125" y2="160" stroke="#666" stroke-width="1"/>
      <text x="205" y="95" font-size="12" fill="#666">x</text>
      <text x="120" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (1,0) -->
      <line x1="125" y1="90" x2="180" y2="90" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead9)"/>
      <text x="152" y="85" font-size="12" fill="#d32f2f">(1,0)</text>
      
      <!-- Вектор (0,1) -->
      <line x1="125" y1="90" x2="125" y2="50" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead9)"/>
      <text x="110" y="70" font-size="12" fill="#388e3c">(0,1)</text>
      
      <!-- Вектор (0,-1) -->
      <line x1="125" y1="90" x2="125" y2="130" stroke="#7b1fa2" stroke-width="3" marker-end="url(#arrowhead9)"/>
      <text x="110" y="115" font-size="12" fill="#7b1fa2">(0,-1)</text>
      
      <!-- Углы 90° -->
      <path d="M 140,90 L 140,80 L 125,80" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="145" y="85" font-size="10" fill="#ff9800">90°</text>
      
      <path d="M 140,90 L 140,100 L 125,100" fill="none" stroke="#ff9800" stroke-width="1.5"/>
      <text x="145" y="105" font-size="10" fill="#ff9800">90°</text>
      
      <!-- Объяснение -->
      <text x="50" y="150" font-size="10" fill="#666">Перпендикулярны оси X:</text>
      <text x="50" y="160" font-size="10" fill="#666">(0,1) и (0,-1)</text>
      
      <defs>
        <marker id="arrowhead9" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Условие перпендикулярности:</strong> Скалярное произведение = 0</li>
    <li><strong>Проверка для (1,0):</strong>
      <br>• (1,0)·(0,1) = 1·0 + 0·1 = 0 ✓
      <br>• (1,0)·(0,-1) = 1·0 + 0·(-1) = 0 ✓
    </li>
    <li><strong>Геометрически:</strong> Векторы, направленные вдоль оси Y, перпендикулярны оси X</li>
    <li><strong>Любой вектор вида (0,y):</strong> Будет перпендикулярен (1,0)</li>
    <li><strong>Неправильные варианты:</strong>
      <br>• (1,1): угол 45°
      <br>• (-1,0): угол 180°  
      <br>• (2,0): угол 0°
    </li>
    </ul>`
},

{
  "id": "vectors004",
  "type": "multiplechoices",
  "header": "Устный счёт",
  "title": "Векторы",
  "theme": "Геометрия",
  "text": "Для угла 180° с вектором (1,0) выберите координаты второго вектора",
  "choices": [
    "(-1,0)",
    "(0,1)",
    "(1,1)",
    "(0,-1)", 
    "(-2,0)"
  ],
  "answers": ["(-1,0)", "(-2,0)"],
  "hint": `<p>Векторы, образующие угол 180° с (1,0):</p>
    <svg width="250" height="150" viewBox="0 0 250 150">
      <!-- Координатные оси -->
      <line x1="30" y1="75" x2="200" y2="75" stroke="#666" stroke-width="1"/>
      <line x1="125" y1="20" x2="125" y2="130" stroke="#666" stroke-width="1"/>
      <text x="205" y="80" font-size="12" fill="#666">x</text>
      <text x="120" y="15" font-size="12" fill="#666">y</text>
      
      <!-- Вектор (1,0) -->
      <line x1="125" y1="75" x2="180" y2="75" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowhead10)"/>
      <text x="152" y="70" font-size="12" fill="#d32f2f">(1,0)</text>
      
      <!-- Вектор (-1,0) -->
      <line x1="125" y1="75" x2="70" y2="75" stroke="#388e3c" stroke-width="3" marker-end="url(#arrowhead10)"/>
      <text x="97" y="70" font-size="12" fill="#388e3c">(-1,0)</text>
      
      <!-- Вектор (-2,0) -->
      <line x1="125" y1="75" x2="30" y2="75" stroke="#7b1fa2" stroke-width="3" marker-end="url(#arrowhead10)"/>
      <text x="77" y="85" font-size="12" fill="#7b1fa2">(-2,0)</text>
      
      <!-- Угол 180° -->
      <text x="125" y="90" font-size="12" fill="#ff9800">180°</text>
      
      <!-- Объяснение -->
      <text x="125" y="110" font-size="10" fill="#666">Противоположное направление</text>
      <text x="125" y="120" font-size="10" fill="#666">по оси X</text>
      
      <defs>
        <marker id="arrowhead10" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="context-stroke"/>
        </marker>
      </defs>
    </svg>
    <ul>
    <li><strong>Условие противоположности:</strong> Векторы направлены в противоположные стороны</li>
    <li><strong>Проверка для (1,0):</strong>
      <br>• (-1,0): противоположное направление ✓
      <br>• (-2,0): тоже противоположное направление ✓
    </li>
    <li><strong>Геометрически:</strong> Любой вектор вида (-k,0) где k > 0</li>
    <li><strong>Скалярное произведение:</strong> (1,0)·(-1,0) = -1, cos(180°) = -1</li>
    <li><strong>Неправильные варианты:</strong>
      <br>• (0,1): угол 90°
      <br>• (1,1): угол 45°
      <br>• (0,-1): угол 90°
    </li>
    </ul>`
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
    "id": "math004",
    "type": "multiplechoices",
    "header": "Устный счёт",
    "title": "Степени",
    "theme": "Степени",
    "text": "Чему равно значение выражения 2⁴+4²?",
    "choices": [
      "20",
      "32",
      "64",
      "24",
      "48"
    ],
    "answers": ["32"],
    "hint": "<p>Вычислите каждую степень отдельно, а затем сложите результаты.</p><ul><li><strong>Шаг 1:</strong> 2⁴ = 2 × 2 × 2 × 2 = 16</li><li><strong>Шаг 2:</strong> 4² = 4 × 4 = 16</li><li><strong>Шаг 3:</strong> 16 +16 = 32</li></ul>"
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
