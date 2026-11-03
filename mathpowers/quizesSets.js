let quizesSets = [

    // =====================================================================
    // ==================== СТЕПЕННАЯ ФУНКЦИЯ ==============================
    // =====================================================================
    {
        "id": "power_001_def",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "Определение степени",
        "theme": "Степенная функция",
        "text": "Чему равно выражение \\( a^0 \\) при \\( a \\neq 0 \\)?",
        "choices": ["0", "1", "a", "Не определено"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Свойство степеней</h5><p class='mb-1'>По определению любое число в нулевой степени равно <span class='badge badge-info'>единице</span>:</p><p class='text-center'>$$a^0 = 1, \\quad a \\neq 0$$</p><hr class='my-2'><p class='mb-0'><em>Почему?</em> \\( a^n : a^n = a^{n-n} = a^0 \\), а любое число, делённое само на себя, равно 1.</p></div>"
    },
    {
        "id": "power_002_props",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "Свойства степеней",
        "theme": "Степенная функция",
        "text": "Какое из равенств <strong>неверно</strong> для любых \\( a > 0 \\)?",
        "choices": [
            "\\( a^m \\cdot a^n = a^{m+n} \\)",
            "\\( (a^m)^n = a^{mn} \\)",
            "\\( a^m : a^n = a^{m-n} \\)",
            "\\( a^m + a^n = a^{m+n} \\)"
        ],
        "answers": ["\\( a^m + a^n = a^{m+n} \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Свойства степеней</h5><p class='mb-1'>Степени <strong>складываются при умножении</strong>, но <strong>не при сложении</strong>:</p><ul class='mb-2'><li>\\( a^m \\cdot a^n = a^{m+n} \\) ✔</li><li>\\( (a^m)^n = a^{mn} \\) ✔</li><li>\\( a^m : a^n = a^{m-n} \\) ✔</li><li>\\( a^m + a^n \\neq a^{m+n} \\) ✘</li></ul><hr class='my-2'><p class='mb-0'><em>Контрпример:</em> \\( 2^1 + 2^2 = 2 + 4 = 6 \\), а \\( 2^{1+2} = 8 \\).</p></div>"
    },
    {
        "id": "power_003_calc",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "Вычисление степени",
        "theme": "Степенная функция",
        "text": "Вычислите значение выражения \\( 2^3 \\cdot 2^4 \\).",
        "choices": ["2⁷ = 128", "2¹² = 4096", "4⁷ = 16384", "2⁶ = 64"],
        "answers": ["2⁷ = 128"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Умножение степеней</h5><p class='mb-1'>При умножении степеней с одинаковым основанием показатели <span class='badge badge-info'>складываются</span>:</p><p class='text-center'>$$ 2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128 $$</p><hr class='my-2'><p class='mb-0'><em>Проверка:</em> \\( 8 \\cdot 16 = 128 \\). ✔</p></div>"
    },
    {
        "id": "power_004_root",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "Корень и дробная степень",
        "theme": "Степенная функция",
        "text": "Чему равно \\( 49^{\\frac{1}{2}} \\)?",
        "choices": ["7", "14", "24.5", "2"],
        "answers": ["7"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Дробная степень</h5><p class='mb-1'>Степень \\( \\frac{1}{2} \\) — это <span class='badge badge-info'>квадратный корень</span>:</p><p class='text-center'>$$ a^{1/2} = \\sqrt{a} $$</p><hr class='my-2'><p class='mb-0'>$$ 49^{1/2} = \\sqrt{49} = 7 $$</p></div>"
    },
    {
        "id": "power_005_neg",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "Отрицательная степень",
        "theme": "Степенная функция",
        "text": "Чему равно \\( 2^{-3} \\)?",
        "choices": ["\\( \\frac{1}{8} \\)", "\\( -8 \\)", "\\( -6 \\)", "\\( 8 \\)"],
        "answers": ["\\( \\frac{1}{8} \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Отрицательная степень</h5><p class='mb-1'>Отрицательная степень — это <span class='badge badge-info'>обратное число</span>:</p><p class='text-center'>$$ a^{-n} = \\frac{1}{a^n} $$</p><hr class='my-2'><p class='mb-0'>$$ 2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} $$</p></div>"
    },
    {
        "id": "power_006_graph",
        "type": "multiplechoices",
        "header": "Степени и корни",
        "title": "График степенной функции",
        "theme": "Степенная функция",
        "text": "Как выглядит график функции \\( y = x^2 \\)?",
        "choices": ["Прямая", "Парабола", "Гипербола", "Кубическая парабола"],
        "answers": ["Парабола"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Степенная функция \\( y = x^2 \\)</h5><p class='mb-1'>График \\( y = x^2 \\) — <span class='badge badge-info'>парабола</span> с вершиной в начале координат, ветви направлены вверх.</p><hr class='my-2'><p class='mb-0'>Свойства: чётная функция, \\( y \\geq 0 \\), убывает при \\( x < 0 \\), возрастает при \\( x > 0 \\).</p></div>"
    },

    // =====================================================================
    // ==================== ПОКАЗАТЕЛЬНАЯ ФУНКЦИЯ ==========================
    // =====================================================================
    {
        "id": "exp_001_def",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Определение показательной функции",
        "theme": "Показательная функция",
        "text": "Какая функция называется показательной?",
        "choices": [
            "\\( y = x^a \\)",
            "\\( y = a^x \\), где \\( a > 0, a \\neq 1 \\)",
            "\\( y = \\log_a x \\)",
            "\\( y = ax + b \\)"
        ],
        "answers": ["\\( y = a^x \\), где \\( a > 0, a \\neq 1 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Показательная функция</h5><p class='mb-1'>Функция вида</p><p class='text-center'>$$ y = a^x, \\quad a > 0, \\ a \\neq 1 $$</p><hr class='my-2'><p class='mb-0'>Переменная \\( x \\) стоит <span class='badge badge-info'>в показателе степени</span>. Область определения — все действительные числа, область значений — \\( (0; +\\infty) \\).</p></div>"
    },
    {
        "id": "exp_002_mono",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Возрастание и убывание",
        "theme": "Показательная функция",
        "text": "При каком условии показательная функция \\( y = a^x \\) возрастает?",
        "choices": [
            "\\( a > 1 \\)",
            "\\( 0 < a < 1 \\)",
            "\\( a < 0 \\)",
            "\\( a = 1 \\)"
        ],
        "answers": ["\\( a > 1 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Монотонность \\( y = a^x \\)</h5><ul class='mb-2'><li>Если \\( a > 1 \\) — функция <span class='badge badge-info'>возрастает</span>.</li><li>Если \\( 0 < a < 1 \\) — функция <span class='badge badge-info'>убывает</span>.</li></ul><hr class='my-2'><p class='mb-0'><em>Интуиция:</em> \\( 2^1 = 2, 2^2 = 4, 2^3 = 8 \\) — растёт. А \\( (1/2)^1 = 0.5, (1/2)^2 = 0.25 \\) — убывает.</p></div>"
    },
    {
        "id": "exp_003_calc",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Вычисление показательного выражения",
        "theme": "Показательная функция",
        "text": "Вычислите \\( 3^5 : 3^4 \\).",
        "choices": ["3", "9", "1", "27"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Деление степеней</h5><p class='mb-1'>При делении степеней с одинаковым основанием показатели <span class='badge badge-info'>вычитаются</span>:</p><p class='text-center'>$$ 3^5 : 3^4 = 3^{5-4} = 3^1 = 3 $$</p><hr class='my-2'><p class='mb-0'><em>Проверка:</em> \\( 243 : 81 = 3 \\). ✔</p></div>"
    },
    {
        "id": "exp_004_solve",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Простейшее показательное уравнение",
        "theme": "Показательная функция",
        "text": "Решите уравнение \\( 2^x = 32 \\).",
        "choices": ["\\( x = 4 \\)", "\\( x = 5 \\)", "\\( x = 6 \\)", "\\( x = 16 \\)"],
        "answers": ["\\( x = 5 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Показательное уравнение</h5><p class='mb-1'>Приводим правую часть к основанию 2:</p><p class='text-center'>$$ 32 = 2^5 $$</p><hr class='my-2'><p class='mb-1'>Получаем:</p><p class='text-center'>$$ 2^x = 2^5 $$</p><p class='mb-1'>Основание \\( 2 > 1 \\), функция монотонна, значит:</p><p class='text-center'>$$ x = 5 $$</p></div>"
    },
    {
        "id": "exp_005_ineq",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Показательное неравенство",
        "theme": "Показательная функция",
        "text": "Решите неравенство \\( 2^x > 8 \\).",
        "choices": [
            "\\( x > 3 \\)",
            "\\( x < 3 \\)",
            "\\( x > 4 \\)",
            "\\( x < 4 \\)"
        ],
        "answers": ["\\( x > 3 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Показательное неравенство</h5><p class='mb-1'>Приводим обе части к одному основанию:</p><p class='text-center'>$$ 2^x > 2^3 $$</p><hr class='my-2'><p class='mb-1'>Основание \\( 2 > 1 \\), значит функция <strong>возрастает</strong> — знак неравенства <span class='badge badge-info'>сохраняется</span>:</p><p class='text-center'>$$ x > 3 $$</p><p class='mb-0'><em>Важно:</em> если основание \\( 0 < a < 1 \\), знак неравенства <span class='badge badge-warning'>меняется на противоположный</span>.</p></div>"
    },
    {
        "id": "exp_006_ineq_base",
        "type": "multiplechoices",
        "header": "Показательная функция",
        "title": "Знак неравенства при основании меньше 1",
        "theme": "Показательная функция",
        "text": "При решении неравенства \\( \\left(\\tfrac{1}{3}\\right)^x < \\left(\\tfrac{1}{3}\\right)^2 \\) знак неравенства для показателей:",
        "choices": [
            "Сохраняется: \\( x < 2 \\)",
            "Меняется: \\( x > 2 \\)",
            "Нельзя определить",
            "Оба варианта верны"
        ],
        "answers": ["Меняется: \\( x > 2 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Основание \\( 0 < a < 1 \\)</h5><p class='mb-1'>Функция \\( y = a^x \\) при \\( 0 < a < 1 \\) <span class='badge badge-info'>убывает</span>.</p><hr class='my-2'><p class='mb-1'>Поэтому при переходе к показателям <strong>знак неравенства меняется</strong>:</p><p class='text-center'>$$ \\left(\\tfrac{1}{3}\\right)^x < \\left(\\tfrac{1}{3}\\right)^2 \\;\\Rightarrow\\; x > 2 $$</p><p class='mb-0'><em>Проверка:</em> \\( (1/3)^3 = 1/27 < 1/9 = (1/3)^2 \\) — верно.</p></div>"
    },

    // =====================================================================
    // ==================== ЛОГАРИФМЫ ======================================
    // =====================================================================
    {
        "id": "log_001_def",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Определение логарифма",
        "theme": "Логарифмическая функция",
        "text": "Что такое \\( \\log_a b \\)?",
        "choices": [
            "Показатель степени, в которую надо возвести \\( a \\), чтобы получить \\( b \\)",
            "Произведение \\( a \\) и \\( b \\)",
            "Корень из \\( b \\) по основанию \\( a \\)",
            "\\( a \\) в степени \\( b \\)"
        ],
        "answers": ["Показатель степени, в которую надо возвести \\( a \\), чтобы получить \\( b \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Определение логарифма</h5><p class='mb-1'>Логарифм — это <span class='badge badge-info'>показатель степени</span>:</p><p class='text-center'>$$ \\log_a b = c \\;\\Leftrightarrow\\; a^c = b $$</p><hr class='my-2'><p class='mb-0'>Условия: \\( a > 0, a \\neq 1, b > 0 \\). <em>Пример:</em> \\( \\log_2 8 = 3 \\), потому что \\( 2^3 = 8 \\).</p></div>"
    },
    {
        "id": "log_002_calc",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Вычисление логарифма",
        "theme": "Логарифмическая функция",
        "text": "Вычислите \\( \\log_3 81 \\).",
        "choices": ["3", "4", "5", "27"],
        "answers": ["4"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Вычисление логарифма</h5><p class='mb-1'>Логарифм — это показатель степени:</p><p class='text-center'>$$ \\log_3 81 = c \\;\\Leftrightarrow\\; 3^c = 81 $$</p><hr class='my-2'><p class='mb-1'>Подбираем степень:</p><p class='text-center'>$$ 3^1 = 3, \\; 3^2 = 9, \\; 3^3 = 27, \\; 3^4 = 81 $$</p><p class='mb-0'>Значит, \\( \\log_3 81 = 4 \\).</p></div>"
    },
    {
        "id": "log_003_props",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Свойства логарифмов",
        "theme": "Логарифмическая функция",
        "text": "Чему равен \\( \\log_a (xy) \\)?",
        "choices": [
            "\\( \\log_a x \\cdot \\log_a y \\)",
            "\\( \\log_a x + \\log_a y \\)",
            "\\( \\log_a x - \\log_a y \\)",
            "\\( \\log_a x : \\log_a y \\)"
        ],
        "answers": ["\\( \\log_a x + \\log_a y \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифм произведения</h5><p class='text-center'>$$ \\log_a (xy) = \\log_a x + \\log_a y $$</p><hr class='my-2'><p class='mb-1'><strong>Другие свойства:</strong></p><ul class='mb-0'><li>\\( \\log_a \\frac{x}{y} = \\log_a x - \\log_a y \\)</li><li>\\( \\log_a x^n = n \\log_a x \\)</li><li>\\( \\log_a a = 1, \\quad \\log_a 1 = 0 \\)</li></ul></div>"
    },
    {
        "id": "log_004_power",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Логарифм степени",
        "theme": "Логарифмическая функция",
        "text": "Чему равен \\( \\log_a x^n \\)?",
        "choices": [
            "\\( n \\log_a x \\)",
            "\\( (\\log_a x)^n \\)",
            "\\( \\log_a x + n \\)",
            "\\( \\frac{1}{n} \\log_a x \\)"
        ],
        "answers": ["\\( n \\log_a x \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифм степени</h5><p class='mb-1'>Показатель степени можно <span class='badge badge-info'>вынести перед логарифмом</span>:</p><p class='text-center'>$$ \\log_a x^n = n \\log_a x $$</p><hr class='my-2'><p class='mb-0'><em>Пример:</em> \\( \\log_2 8 = \\log_2 2^3 = 3 \\log_2 2 = 3 \\).</p></div>"
    },
    {
        "id": "log_005_eq",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмическая функция",
        "text": "Решите уравнение \\( \\log_2 x = 4 \\).",
        "choices": ["\\( x = 8 \\)", "\\( x = 16 \\)", "\\( x = 2 \\)", "\\( x = 4 \\)"],
        "answers": ["\\( x = 16 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифмическое уравнение</h5><p class='mb-1'>По определению логарифма:</p><p class='text-center'>$$ \\log_2 x = 4 \\;\\Leftrightarrow\\; x = 2^4 $$</p><hr class='my-2'><p class='mb-1'>Вычисляем:</p><p class='text-center'>$$ x = 16 $$</p><p class='mb-0'><em>Проверка:</em> \\( 2^4 = 16 \\) ✔</p></div>"
    },
    {
        "id": "log_006_domain",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Область определения логарифма",
        "theme": "Логарифмическая функция",
        "text": "Какова область определения функции \\( y = \\log_a x \\)?",
        "choices": [
            "\\( x \\in (-\\infty; +\\infty) \\)",
            "\\( x > 0 \\)",
            "\\( x \\geq 0 \\)",
            "\\( x \\neq 0 \\)"
        ],
        "answers": ["\\( x > 0 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Область определения \\( \\log_a x \\)</h5><p class='mb-1'>Логарифм определён только для <span class='badge badge-info'>положительных чисел</span>:</p><p class='text-center'>$$ x > 0 $$</p><hr class='my-2'><p class='mb-0'><em>Почему?</em> Логарифм — это показатель степени, а \\( a^c > 0 \\) для любого \\( a > 0 \\). Значит, и \\( x = a^c \\) должно быть положительным.</p></div>"
    },
    {
        "id": "log_007_ineq",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Логарифмическое неравенство",
        "theme": "Логарифмическая функция",
        "text": "Решите неравенство \\( \\log_2 x > 3 \\).",
        "choices": [
            "\\( x > 8 \\)",
            "\\( x < 8 \\)",
            "\\( x > 6 \\)",
            "\\( 0 < x < 8 \\)"
        ],
        "answers": ["\\( x > 8 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифмическое неравенство</h5><p class='mb-1'>Используем определение логарифма:</p><p class='text-center'>$$ \\log_2 x > 3 \\;\\Leftrightarrow\\; x > 2^3 = 8 $$</p><hr class='my-2'><p class='mb-0'>Основание \\( 2 > 1 \\), функция возрастает — знак <span class='badge badge-info'>сохраняется</span>. С учётом ОДЗ: \\( x > 8 \\).</p></div>"
    },
    {
        "id": "log_008_ineq_base",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Логарифмическое неравенство с основанием < 1",
        "theme": "Логарифмическая функция",
        "text": "Решите неравенство \\( \\log_{1/2} x > 2 \\).",
        "choices": [
            "\\( x > 1/4 \\)",
            "\\( 0 < x < 1/4 \\)",
            "\\( x < 1/4 \\)",
            "\\( x > 4 \\)"
        ],
        "answers": ["\\( 0 < x < 1/4 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Основание \\( 0 < a < 1 \\)</h5><p class='mb-1'>Функция \\( \\log_{1/2} x \\) <span class='badge badge-info'>убывает</span>, поэтому при переходе к аргументу <strong>знак меняется</strong>:</p><p class='text-center'>$$ \\log_{1/2} x > 2 \\;\\Leftrightarrow\\; 0 < x < \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{4} $$</p><hr class='my-2'><p class='mb-0'>Не забываем про ОДЗ: \\( x > 0 \\). Итог: \\( 0 < x < \\frac{1}{4} \\).</p></div>"
    },
    {
        "id": "log_009_lg",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Десятичный и натуральный логарифм",
        "theme": "Логарифмическая функция",
        "text": "Что такое \\( \\lg x \\) и \\( \\ln x \\)?",
        "choices": [
            "\\( \\lg x = \\log_{10} x, \\; \\ln x = \\log_e x \\)",
            "\\( \\lg x = \\log_2 x, \\; \\ln x = \\log_{10} x \\)",
            "\\( \\lg x = \\ln x \\)",
            "\\( \\lg x = \\log_e x, \\; \\ln x = \\log_{10} x \\)"
        ],
        "answers": ["\\( \\lg x = \\log_{10} x, \\; \\ln x = \\log_e x \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Обозначения</h5><ul class='mb-2'><li>\\( \\lg x = \\log_{10} x \\) — <span class='badge badge-info'>десятичный</span> логарифм.</li><li>\\( \\ln x = \\log_e x \\) — <span class='badge badge-info'>натуральный</span> логарифм, где \\( e \\approx 2.718 \\).</li></ul><hr class='my-2'><p class='mb-0'>Основание \\( e \\) — «число Эйлера», важнейшая константа в математике (как \\( \\pi \\)).</p></div>"
    },
    {
        "id": "log_010_lg_calc",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Десятичный логарифм",
        "theme": "Логарифмическая функция",
        "text": "Вычислите \\( \\lg 1000 \\).",
        "choices": ["1", "2", "3", "10"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Десятичный логарифм</h5><p class='mb-1'>\\( \\lg x = \\log_{10} x \\) — это степень, в которую надо возвести 10, чтобы получить \\( x \\):</p><p class='text-center'>$$ \\lg 1000 = c \\;\\Leftrightarrow\\; 10^c = 1000 $$</p><hr class='my-2'><p class='mb-0'>$$ 10^3 = 1000 \\;\\Rightarrow\\; \\lg 1000 = 3 $$</p></div>"
    },
    {
        "id": "log_011_sum",
        "type": "multiplechoices",
        "header": "Логарифмы",
        "title": "Сумма логарифмов",
        "theme": "Логарифмическая функция",
        "text": "Вычислите \\( \\log_2 8 + \\log_2 16 \\).",
        "choices": ["3", "4", "7", "24"],
        "answers": ["7"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Сумма логарифмов</h5><p class='mb-1'><strong>Способ 1.</strong> Сумма логарифмов — логарифм произведения:</p><p class='text-center'>$$ \\log_2 8 + \\log_2 16 = \\log_2 (8 \\cdot 16) = \\log_2 128 = 7 $$</p><hr class='my-2'><p class='mb-1'><strong>Способ 2.</strong> Считаем каждый логарифм:</p><p class='text-center'>$$ \\log_2 8 = 3, \\quad \\log_2 16 = 4, \\quad 3 + 4 = 7 $$</p><p class='mb-0'><em>Проверка:</em> \\( 2^7 = 128 \\). ✔</p></div>"
    },

    // =====================================================================
    // ==================== СМЕШАННЫЕ ЗАДАНИЯ ==============================
    // =====================================================================
    {
        "id": "mix_001_exp_eq",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Показательное уравнение с дробью",
        "theme": "Показательные уравнения",
        "text": "Решите уравнение \\( 3^x = \\frac{1}{27} \\).",
        "choices": ["\\( x = 3 \\)", "\\( x = -3 \\)", "\\( x = -2 \\)", "\\( x = 9 \\)"],
        "answers": ["\\( x = -3 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Показательное уравнение</h5><p class='mb-1'>Записываем правую часть как степень с основанием 3 (с отрицательным показателем):</p><p class='text-center'>$$ \\frac{1}{27} = \\frac{1}{3^3} = 3^{-3} $$</p><hr class='my-2'><p class='mb-1'>Получаем:</p><p class='text-center'>$$ 3^x = 3^{-3} $$</p><p class='mb-1'>Основание \\( 3 > 1 \\), функция монотонна, значит:</p><p class='text-center'>$$ x = -3 $$</p></div>"
    },
    {
        "id": "mix_002_log_eq",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Логарифмическое уравнение с проверкой ОДЗ",
        "theme": "Логарифмические уравнения",
        "text": "Решите уравнение \\( \\log_3 (x - 1) = 2 \\).",
        "choices": ["\\( x = 7 \\)", "\\( x = 10 \\)", "\\( x = 9 \\)", "\\( x = 6 \\)"],
        "answers": ["\\( x = 10 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифмическое уравнение</h5><p class='mb-1'>По определению логарифма:</p><p class='text-center'>$$ \\log_3 (x - 1) = 2 \\;\\Leftrightarrow\\; x - 1 = 3^2 = 9 $$</p><hr class='my-2'><p class='mb-1'>Отсюда:</p><p class='text-center'>$$ x = 10 $$</p><p class='mb-1'><strong>Проверка ОДЗ:</strong></p><p class='text-center'>$$ x - 1 = 9 > 0 $$ — верно.</p></div>"
    },
    {
        "id": "mix_003_exp_ineq",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Показательное неравенство с основанием < 1",
        "theme": "Показательные неравенства",
        "text": "Решите неравенство \\( \\left(\\tfrac{1}{2}\\right)^x \\leq \\tfrac{1}{8} \\).",
        "choices": [
            "\\( x \\geq 3 \\)",
            "\\( x \\leq 3 \\)",
            "\\( x \\geq -3 \\)",
            "\\( x \\leq -3 \\)"
        ],
        "answers": ["\\( x \\geq 3 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Основание \\( 0 < a < 1 \\)</h5><p class='mb-1'>Приводим к одному основанию:</p><p class='text-center'>$$ \\left(\\tfrac{1}{2}\\right)^x \\leq \\left(\\tfrac{1}{2}\\right)^3 $$</p><hr class='my-2'><p class='mb-1'>Основание \\( 0 < \\frac{1}{2} < 1 \\), функция <strong>убывает</strong>, знак неравенства <span class='badge badge-info'>меняется</span>:</p><p class='text-center'>$$ x \\geq 3 $$</p><p class='mb-0'><em>Проверка:</em> при \\( x = 4 \\): \\( (1/2)^4 = 1/16 \\leq 1/8 \\) — верно.</p></div>"
    },
    {
        "id": "mix_004_log_prop",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Сумма десятичных логарифмов",
        "theme": "Свойства логарифмов",
        "text": "Вычислите \\( \\lg 20 + \\lg 50 \\).",
        "choices": ["3", "4", "70", "1000"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Логарифм произведения</h5><p class='mb-1'><strong>Способ 1.</strong> Сумма логарифмов:</p><p class='text-center'>$$ \\lg 20 + \\lg 50 = \\lg (20 \\cdot 50) = \\lg 1000 = 3 $$</p><hr class='my-2'><p class='mb-1'><strong>Способ 2.</strong> Считаем каждый логарифм:</p><p class='text-center'>$$ \\lg 20 = 1 + \\lg 2, \\quad \\lg 50 = 1 + \\lg 5 $$</p><p class='mb-1'>Сумма:</p><p class='text-center'>$$ 2 + (\\lg 2 + \\lg 5) = 2 + \\lg 10 = 2 + 1 = 3 $$</p></div>"
    },
    {
        "id": "mix_005_qual",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Связь показательной и логарифмической функций",
        "theme": "Смешанные задания",
        "text": "Функции \\( y = a^x \\) и \\( y = \\log_a x \\) являются:",
        "choices": [
            "Параллельными",
            "Взаимно обратными",
            "Одинаковыми",
            "Независимыми"
        ],
        "answers": ["Взаимно обратными"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Взаимно обратные функции</h5><p class='mb-1'>Показательная и логарифмическая функции с одинаковым основанием — <span class='badge badge-info'>взаимно обратные</span>:</p><p class='text-center'>$$ y = a^x \\;\\Leftrightarrow\\; x = \\log_a y $$</p><hr class='my-2'><p class='mb-0'>Их графики симметричны относительно прямой \\( y = x \\).</p></div>"
    },
    {
        "id": "mix_006_qual",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Основное логарифмическое тождество",
        "theme": "Логарифмы",
        "text": "Чему равно \\( a^{\\log_a b} \\)?",
        "choices": ["\\( a \\)", "\\( b \\)", "\\( 1 \\)", "\\( \\log_a b \\)"],
        "answers": ["\\( b \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Основное логарифмическое тождество</h5><p class='text-center'>$$ a^{\\log_a b} = b, \\quad a > 0, a \\neq 1, b > 0 $$</p><hr class='my-2'><p class='mb-0'><em>Смысл:</em> \\( \\log_a b \\) — это степень, в которую надо возвести \\( a \\), чтобы получить \\( b \\). Если мы <strong>возводим \\( a \\) в эту степень</strong>, то и получаем \\( b \\).</p></div>"
    },
    {
        "id": "mix_007_calc",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Применение основного тождества",
        "theme": "Логарифмы",
        "text": "Вычислите \\( 2^{\\log_2 5} \\).",
        "choices": ["2", "5", "10", "\\( \\log_2 5 \\)"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Основное логарифмическое тождество</h5><p class='mb-1'>По тождеству:</p><p class='text-center'>$$ a^{\\log_a b} = b $$</p><hr class='my-2'><p class='mb-1'>В нашем случае \\( a = 2, b = 5 \\):</p><p class='text-center'>$$ 2^{\\log_2 5} = 5 $$</p></div>"
    },
    {
        "id": "mix_008_graph",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "График логарифмической функции",
        "theme": "Логарифмическая функция",
        "text": "Через какую точку <strong>обязательно</strong> проходит график функции \\( y = \\log_a x \\) при любом \\( a > 0, a \\neq 1 \\)?",
        "choices": [
            "\\( (0; 0) \\)",
            "\\( (1; 0) \\)",
            "\\( (0; 1) \\)",
            "\\( (1; 1) \\)"
        ],
        "answers": ["\\( (1; 0) \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 График \\( y = \\log_a x \\)</h5><p class='mb-1'>Логарифм любого основания от 1 равен 0:</p><p class='text-center'>$$ \\log_a 1 = 0 \\;\\Rightarrow\\; (1; 0) $$</p><hr class='my-2'><p class='mb-0'>Это <span class='badge badge-info'>универсальная точка</span> для всех логарифмических функций. Также всегда проходит через \\( (a; 1) \\), потому что \\( \\log_a a = 1 \\).</p></div>"
    },
    {
        "id": "mix_009_solve_eq",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Квадратное уравнение с логарифмом",
        "theme": "Логарифмические уравнения",
        "text": "Решите уравнение \\( (\\log_2 x)^2 = 4 \\). В ответе укажите <strong>наибольший</strong> корень.",
        "choices": ["2", "4", "8", "16"],
        "answers": ["4"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Уравнение с логарифмом</h5><p class='mb-1'>Обозначим \\( t = \\log_2 x \\). Тогда:</p><p class='text-center'>$$ t^2 = 4 \\;\\Rightarrow\\; t = 2 \\text{ или } t = -2 $$</p><hr class='my-2'><p class='mb-1'>Возвращаемся к \\( x \\):</p><p class='text-center'>$$ \\log_2 x = 2 \\;\\Rightarrow\\; x = 4 $$</p><p class='text-center'>$$ \\log_2 x = -2 \\;\\Rightarrow\\; x = 2^{-2} = \\frac{1}{4} $$</p><p class='mb-1'>Оба корня удовлетворяют ОДЗ (\\( x > 0 \\)).</p><p class='mb-0'>Наибольший корень: \\( x = 4 \\).</p></div>"
    },
    {
        "id": "mix_010_qual",
        "type": "multiplechoices",
        "header": "Смешанные задания",
        "title": "Сравнение логарифмов",
        "theme": "Логарифмическая функция",
        "text": "Что больше: \\( \\log_2 5 \\) или \\( \\log_2 7 \\)?",
        "choices": [
            "\\( \\log_2 5 \\)",
            "\\( \\log_2 7 \\)",
            "Они равны",
            "Сравнить нельзя"
        ],
        "answers": ["\\( \\log_2 7 \\)"],
        "hint": "<div class='alert alert-primary'><h5 class='mb-2'>📐 Монотонность логарифма</h5><p class='mb-1'>Функция \\( y = \\log_2 x \\) <span class='badge badge-info'>возрастает</span> (основание \\( 2 > 1 \\)).</p><hr class='my-2'><p class='mb-1'>Значит, большему аргументу соответствует большее значение:</p><p class='text-center'>$$ 7 > 5 \\;\\Rightarrow\\; \\log_2 7 > \\log_2 5 $$</p><p class='mb-0'><em>Проверка:</em> \\( \\log_2 5 \\approx 2.32, \\log_2 7 \\approx 2.81 \\).</p></div>"
    },



];

window.quizesSets = quizesSets;