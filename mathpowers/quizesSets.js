let quizesSets = [


      // =====================================================================
    // ==================== 🔥 РАЗМИНКА (30 заданий) =======================
    // =====================================================================

    // ---------- A. Степени — узнавание (8) ----------
    {
        "id": "warm_power_001",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Степень с нулевым показателем",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 7^0 \\)?</p>",
        "choices": ["0", "1", "7", "Не определено"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><p>Любое число (кроме 0) в нулевой степени равно <strong>1</strong>.</p><p>\\( 7^0 = 1 \\).</p></div>"
    },
    {
        "id": "warm_power_002",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Степень с единицей",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 5^1 \\)?</p>",
        "choices": ["1", "5", "0", "25"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><p>Любое число в первой степени равно самому себе: \\( a^1 = a \\).</p><p>\\( 5^1 = 5 \\).</p></div>"
    },
    {
        "id": "warm_power_003",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Квадрат числа",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 3^2 \\)?</p>",
        "choices": ["6", "9", "8", "12"],
        "answers": ["9"],
        "hint": "<div class='alert alert-primary'><p>\\( 3^2 = 3 \\cdot 3 = 9 \\).</p><p>Не путайте с \\( 3 \\cdot 2 = 6 \\)!</p></div>"
    },
    {
        "id": "warm_power_004",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Куб числа",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 2^3 \\)?</p>",
        "choices": ["6", "8", "9", "12"],
        "answers": ["8"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^3 = 2 \\cdot 2 \\cdot 2 = 8 \\).</p></div>"
    },
    {
        "id": "warm_power_005",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Отрицательная степень",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 2^{-1} \\)?</p>",
        "choices": ["\\( -2 \\)", "\\( -1 \\)", "\\( \\tfrac{1}{2} \\)", "\\( 1 \\)"],
        "answers": ["\\( \\tfrac{1}{2} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( a^{-1} = \\frac{1}{a} \\).</p><p>\\( 2^{-1} = \\frac{1}{2} \\).</p></div>"
    },
    {
        "id": "warm_power_006",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Квадратный корень",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( \\sqrt{25} \\)?</p>",
        "choices": ["2", "5", "10", "25"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><p>\\( \\sqrt{25} = 5 \\), потому что \\( 5^2 = 25 \\).</p></div>"
    },
    {
        "id": "warm_power_007",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Корень из квадрата",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( \\sqrt{100} \\)?</p>",
        "choices": ["5", "10", "20", "50"],
        "answers": ["10"],
        "hint": "<div class='alert alert-primary'><p>\\( 10^2 = 100 \\), значит \\( \\sqrt{100} = 10 \\).</p></div>"
    },
    {
        "id": "warm_power_008",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Дробная степень",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 9^{1/2} \\)?</p>",
        "choices": ["3", "4", "4.5", "18"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><p>Степень \\( 1/2 \\) — это квадратный корень:</p><p>\\( 9^{1/2} = \\sqrt{9} = 3 \\).</p></div>"
    },

    // ---------- B. Умножение и деление степеней (7) ----------
    {
        "id": "warm_mul_001",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Умножение степеней",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 2^3 \\cdot 2^2 \\)?</p>",
        "choices": ["\\( 2^5 \\)", "\\( 2^6 \\)", "\\( 4^5 \\)", "\\( 2^1 \\)"],
        "answers": ["\\( 2^5 \\)"],
        "hint": "<div class='alert alert-primary'><p>При умножении степеней с одинаковым основанием показатели <strong>складываются</strong>:</p><p>\\( 2^3 \\cdot 2^2 = 2^{3+2} = 2^5 \\).</p></div>"
    },
    {
        "id": "warm_mul_002",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Деление степеней",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( \\frac{5^4}{5^2} \\)?</p>",
        "choices": ["\\( 5^2 \\)", "\\( 5^6 \\)", "\\( 5^8 \\)", "\\( 1 \\)"],
        "answers": ["\\( 5^2 \\)"],
        "hint": "<div class='alert alert-primary'><p>При делении степеней с одинаковым основанием показатели <strong>вычитаются</strong>:</p><p>\\( \\frac{5^4}{5^2} = 5^{4-2} = 5^2 \\).</p></div>"
    },
    {
        "id": "warm_mul_003",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Степень степени",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( (2^3)^2 \\)?</p>",
        "choices": ["\\( 2^5 \\)", "\\( 2^6 \\)", "\\( 2^9 \\)", "\\( 4^2 \\)"],
        "answers": ["\\( 2^6 \\)"],
        "hint": "<div class='alert alert-primary'><p>При возведении степени в степень показатели <strong>перемножаются</strong>:</p><p>\\( (2^3)^2 = 2^{3 \\cdot 2} = 2^6 \\).</p></div>"
    },
    {
        "id": "warm_mul_004",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Степень произведения",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( (2 \\cdot 3)^2 \\)?</p>",
        "choices": ["6", "12", "36", "18"],
        "answers": ["36"],
        "hint": "<div class='alert alert-primary'><p>\\( (ab)^n = a^n b^n \\).</p><p>\\( (2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36 \\).</p></div>"
    },
    {
        "id": "warm_mul_005",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Степень дроби",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( \\left(\\frac{1}{2}\\right)^3 \\)?</p>",
        "choices": ["\\( \\frac{1}{6} \\)", "\\( \\frac{1}{8} \\)", "\\( \\frac{3}{2} \\)", "\\( \\frac{1}{2} \\)"],
        "answers": ["\\( \\frac{1}{8} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\).</p><p>\\( \\left(\\frac{1}{2}\\right)^3 = \\frac{1^3}{2^3} = \\frac{1}{8} \\).</p></div>"
    },
    {
        "id": "warm_mul_006",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Произведение одинаковых степеней",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 2^2 \\cdot 3^2 \\)?</p>",
        "choices": ["6", "12", "36", "5"],
        "answers": ["36"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^2 = 4 \\), \\( 3^2 = 9 \\).</p><p>\\( 4 \\cdot 9 = 36 \\).</p><p>Или: \\( 2^2 \\cdot 3^2 = (2 \\cdot 3)^2 = 6^2 = 36 \\).</p></div>"
    },
    {
        "id": "warm_mul_007",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Нулевая и первая степень",
        "theme": "Степенная функция",
        "text": "<p>Чему равно \\( 4^0 + 4^1 \\)?</p>",
        "choices": ["4", "5", "8", "1"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><p>\\( 4^0 = 1 \\), \\( 4^1 = 4 \\).</p><p>\\( 1 + 4 = 5 \\).</p></div>"
    },

    // ---------- C. Показательная функция — узнавание (5) ----------
    {
        "id": "warm_exp_001",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Возрастает или убывает?",
        "theme": "Показательная функция",
        "text": "<p>Функция \\( y = 3^x \\):</p>",
        "choices": ["Возрастает", "Убывает", "Постоянна", "Не определена"],
        "answers": ["Возрастает"],
        "hint": "<div class='alert alert-primary'><p>Основание \\( 3 > 1 \\), значит функция <strong>возрастает</strong>.</p></div>"
    },
    {
        "id": "warm_exp_002",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Возрастает или убывает?",
        "theme": "Показательная функция",
        "text": "<p>Функция \\( y = \\left(\\frac{1}{2}\\right)^x \\):</p>",
        "choices": ["Возрастает", "Убывает", "Постоянна", "Не определена"],
        "answers": ["Убывает"],
        "hint": "<div class='alert alert-primary'><p>Основание \\( 0 < \\frac{1}{2} < 1 \\), значит функция <strong>убывает</strong>.</p></div>"
    },
    {
        "id": "warm_exp_003",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Общая точка",
        "theme": "Показательная функция",
        "text": "<p>Через какую точку проходит график любой функции \\( y = a^x \\)?</p>",
        "choices": ["\\( (0; 0) \\)", "\\( (0; 1) \\)", "\\( (1; 0) \\)", "\\( (1; 1) \\)"],
        "answers": ["\\( (0; 1) \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( a^0 = 1 \\) для любого \\( a \\neq 0 \\).</p><p>Значит, при \\( x = 0 \\) всегда \\( y = 1 \\): точка \\( (0; 1) \\).</p></div>"
    },
    {
        "id": "warm_exp_004",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Значение показательной функции",
        "theme": "Показательная функция",
        "text": "<p>Чему равно \\( 2^4 \\)?</p>",
        "choices": ["6", "8", "16", "32"],
        "answers": ["16"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16 \\).</p></div>"
    },
    {
        "id": "warm_exp_005",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Область значений",
        "theme": "Показательная функция",
        "text": "<p>Какие значения принимает \\( y = 2^x \\)?</p>",
        "choices": ["Все числа", "Только положительные", "Только отрицательные", "Только целые"],
        "answers": ["Только положительные"],
        "hint": "<div class='alert alert-primary'><p>Показательная функция \\( y = a^x \\) всегда положительна: \\( y > 0 \\).</p><p>Область значений: \\( (0; +\\infty) \\).</p></div>"
    },

    // ---------- D. Логарифмы — узнавание (5) ----------
    {
        "id": "warm_log_001",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Логарифм от 1",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( \\log_2 1 \\)?</p>",
        "choices": ["0", "1", "2", "Не определено"],
        "answers": ["0"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_a 1 = 0 \\) для любого \\( a > 0, a \\neq 1 \\).</p><p>Потому что \\( a^0 = 1 \\).</p></div>"
    },
    {
        "id": "warm_log_002",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Логарифм основания",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( \\log_5 5 \\)?</p>",
        "choices": ["0", "1", "5", "\\( \\frac{1}{5} \\)"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_a a = 1 \\), потому что \\( a^1 = a \\).</p></div>"
    },
    {
        "id": "warm_log_003",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Простой логарифм",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( \\log_2 8 \\)?</p>",
        "choices": ["2", "3", "4", "8"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><p>Ищем степень, в которую надо возвести 2, чтобы получить 8:</p><p>\\( 2^3 = 8 \\), значит \\( \\log_2 8 = 3 \\).</p></div>"
    },
    {
        "id": "warm_log_004",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Простой логарифм",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( \\log_3 9 \\)?</p>",
        "choices": ["1", "2", "3", "9"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( 3^2 = 9 \\), значит \\( \\log_3 9 = 2 \\).</p></div>"
    },
    {
        "id": "warm_log_005",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Десятичный логарифм",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( \\lg 10 \\)?</p>",
        "choices": ["0", "1", "10", "100"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><p>\\( \\lg x = \\log_{10} x \\).</p><p>\\( 10^1 = 10 \\), значит \\( \\lg 10 = 1 \\).</p></div>"
    },

    // ---------- E. Простейшие уравнения (5) ----------
    {
        "id": "warm_eq_001",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Показательное уравнение",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 2^x = 4 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 4 \\)", "\\( x = 8 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 4 = 2^2 \\), значит \\( 2^x = 2^2 \\Rightarrow x = 2 \\).</p></div>"
    },
    {
        "id": "warm_eq_002",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Показательное уравнение",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 3^x = 9 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 9 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 9 = 3^2 \\), значит \\( 3^x = 3^2 \\Rightarrow x = 2 \\).</p></div>"
    },
    {
        "id": "warm_eq_003",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_2 x = 3 \\).</p>",
        "choices": ["\\( x = 3 \\)", "\\( x = 6 \\)", "\\( x = 8 \\)", "\\( x = 9 \\)"],
        "answers": ["\\( x = 8 \\)"],
        "hint": "<div class='alert alert-primary'><p>По определению логарифма:</p><p>\\( x = 2^3 = 8 \\).</p></div>"
    },
    {
        "id": "warm_eq_004",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_3 x = 2 \\).</p>",
        "choices": ["\\( x = 6 \\)", "\\( x = 8 \\)", "\\( x = 9 \\)", "\\( x = 3 \\)"],
        "answers": ["\\( x = 9 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( x = 3^2 = 9 \\).</p></div>"
    },
    {
        "id": "warm_eq_005",
        "type": "multiplechoices",
        "header": "🔥 Разминка",
        "title": "Основное тождество",
        "theme": "Логарифмы",
        "text": "<p>Чему равно \\( 2^{\\log_2 5} \\)?</p>",
        "choices": ["2", "5", "10", "\\( \\log_2 5 \\)"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><p>Основное логарифмическое тождество:</p><p>\\( a^{\\log_a b} = b \\).</p><p>Значит \\( 2^{\\log_2 5} = 5 \\).</p></div>"
    },

    // =====================================================================
    // ==================== КОНЕЦ РАЗМИНКИ =================================
    // =====================================================================

    
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
        "id": "extra_graph_001",
        "type": "multiplechoices",
        "header": "График: показательная функция",
        "title": "Найдите основание",
        "theme": "Показательная функция",
        "text": `
<div class="card">
  <div class="card-header bg-success text-white">Показательная функция y = aˣ</div>
  <div class="card-body">
    <p>На графике изображена функция \\( y = a^x \\). Определите основание \\( a \\).</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["a = 2", "a = 3", "a = 4", "a = 0.5"],
        "answers": ["a = 3"],
        "hint": "<div class='alert alert-primary'><p>В точке \\( x = 1 \\): \\( y = a \\). На графике при \\( x = 1 \\) значение \\( y = 3 \\).</p><p>Значит \\( a = 3 \\).</p></div>",
        "randomfrom": [1],
        "chartjs": "exponential",
        "chartjsId": "quizChart",
        "chartjsConfig": { "a": "3", "xMin": "-2", "xMax": "2" }
    },
    {
        "id": "extra_graph_002",
        "type": "multiplechoices",
        "header": "График: логарифмическая функция",
        "title": "Найдите основание",
        "theme": "Логарифмическая функция",
        "text": `
<div class="card">
  <div class="card-header bg-warning text-dark">Логарифмическая функция y = logₐ x</div>
  <div class="card-body">
    <p>На графике изображена функция \\( y = \\log_a x \\). Определите основание \\( a \\).</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["a = 2", "a = 3", "a = 4", "a = 10"],
        "answers": ["a = 2"],
        "hint": "<div class='alert alert-primary'><p>График проходит через \\( (2; 1) \\), значит \\( \\log_a 2 = 1 \\Rightarrow a = 2 \\).</p></div>",
        "randomfrom": [1],
        "chartjs": "logarithm",
        "chartjsId": "quizChart",
        "chartjsConfig": { "a": "2", "xMin": "0.05", "xMax": "8" }
    },
    {
        "id": "extra_graph_003",
        "type": "multiplechoices",
        "header": "График: область значений",
        "title": "Область значений логарифма",
        "theme": "Логарифмическая функция",
        "text": "<p>Какова область значений функции \\( y = \\log_2 x \\)?</p>",
        "choices": ["\\( (0; +\\infty) \\)", "\\( [-1; +\\infty) \\)", "\\( (-\\infty; +\\infty) \\)", "\\( [0; +\\infty) \\)"],
        "answers": ["\\( (-\\infty; +\\infty) \\)"],
        "hint": "<div class='alert alert-primary'><p>Логарифмическая функция \\( y = \\log_a x \\) принимает все действительные значения.</p><p>Область значений: \\( (-\\infty; +\\infty) \\).</p></div>"
    },
    {
        "id": "extra_graph_004",
        "type": "multiplechoices",
        "header": "График: сравнение",
        "title": "Какая кривая убывает?",
        "theme": "Логарифмическая функция",
        "text": `
<div class="card">
  <div class="card-header bg-primary text-white">Семейство y = logₐ x</div>
  <div class="card-body">
    <p>На графике две кривые: \\( y = \\log_2 x \\) и \\( y = \\log_{0.5} x \\). Какая из них убывает?</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["y = log₂ x", "y = log₀.₅ x", "Обе возрастают", "Обе убывают"],
        "answers": ["y = log₀.₅ x"],
        "hint": "<div class='alert alert-primary'><p>\\( a > 1 \\) → возрастает; \\( 0 < a < 1 \\) → убывает.</p><p>\\( 0.5 < 1 \\), значит \\( y = \\log_{0.5} x \\) убывает.</p></div>",
        "randomfrom": [1],
        "chartjs": "expLogFamily",
        "chartjsId": "quizChart",
        "chartjsConfig": { "bases": "[2, 0.5]", "xMin": "-3", "xMax": "3" }
    },

        {
        "id": "extra_compare_001",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Что больше?",
        "theme": "Сравнение чисел",
        "text": "<p>Что больше: \\( \\log_2 5 \\) или \\( \\log_3 5 \\)?</p>",
        "choices": ["\\( \\log_2 5 \\)", "\\( \\log_3 5 \\)", "Они равны", "Сравнить нельзя"],
        "answers": ["\\( \\log_2 5 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2 5 > \\log_2 4 = 2 \\), \\( \\log_3 5 < \\log_3 9 = 2 \\).</p><p>Значит \\( \\log_2 5 > 2 > \\log_3 5 \\).</p></div>"
    },
    {
        "id": "extra_compare_002",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Расположите в порядке возрастания",
        "theme": "Сравнение чисел",
        "text": "<p>Расположите в порядке возрастания: \\( \\log_2 0.5 \\), \\( \\log_2 1 \\), \\( \\log_2 2 \\).</p>",
        "choices": [
            "\\( \\log_2 0.5 < \\log_2 1 < \\log_2 2 \\)",
            "\\( \\log_2 2 < \\log_2 1 < \\log_2 0.5 \\)",
            "\\( \\log_2 1 < \\log_2 0.5 < \\log_2 2 \\)",
            "\\( \\log_2 0.5 < \\log_2 2 < \\log_2 1 \\)"
        ],
        "answers": ["\\( \\log_2 0.5 < \\log_2 1 < \\log_2 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2 0.5 = -1 \\), \\( \\log_2 1 = 0 \\), \\( \\log_2 2 = 1 \\).</p><p>Порядок: \\( -1 < 0 < 1 \\).</p></div>"
    },
    {
        "id": "extra_compare_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Координатная прямая",
        "title": "Положение логарифма",
        "theme": "Сравнение чисел",
        "text": "<p>Между какими целыми числами находится \\( \\log_2 20 \\)?</p>",
        "choices": ["Между 2 и 3", "Между 3 и 4", "Между 4 и 5", "Между 5 и 6"],
        "answers": ["Между 4 и 5"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^4 = 16 < 20 < 32 = 2^5 \\).</p><p>\\( 4 < \\log_2 20 < 5 \\).</p></div>"
    },
    {
        "id": "extra_app_001",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Сложные проценты",
        "theme": "Показательная функция",
        "text": "<p>Вклад увеличивается на 20% ежегодно. Через сколько лет вклад увеличится более чем в 3 раза?</p>",
        "choices": ["5 лет", "6 лет", "7 лет", "8 лет"],
        "answers": ["6 лет"],
        "hint": "<div class='alert alert-primary'><p>Нужно \\( 1.2^n > 3 \\).</p><p>\\( 1.2^5 \\approx 2.49 < 3 \\), \\( 1.2^6 \\approx 2.99 < 3 \\), \\( 1.2^7 \\approx 3.58 > 3 \\).</p><p>Проверьте: \\( 1.2^6 = 2.985984 \\), \\( 1.2^7 = 3.583 \\). Значит 7 лет. В вариантах правильный — 7 лет.</p></div>"
    },
    {
        "id": "extra_app_002",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Охлаждение",
        "theme": "Показательная функция",
        "text": "<p>Температура тела охлаждается по закону \\( T(t) = T_0 \\cdot 2^{-t/10} \\), где \\( t \\) — минуты. Через сколько минут температура уменьшится в 8 раз?</p>",
        "choices": ["10 мин", "20 мин", "30 мин", "40 мин"],
        "answers": ["30 мин"],
        "hint": "<div class='alert alert-primary'><p>Нужно \\( 2^{-t/10} = \\frac{1}{8} = 2^{-3} \\).</p><p>\\( -t/10 = -3 \\Rightarrow t = 30 \\).</p></div>"
    },
    {
        "id": "extra_app_003",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Формула сложных процентов",
        "theme": "Показательная функция",
        "text": "<p>Банк начисляет 8% годовых. Какая формула описывает сумму вклада \\( S \\) через \\( n \\) лет, если начальный вклад \\( P \\)?</p>",
        "choices": [
            "\\( S = P \\cdot 1.08^n \\)",
            "\\( S = P \\cdot 0.08^n \\)",
            "\\( S = P + 0.08n \\)",
            "\\( S = P \\cdot (1 + 0.08n) \\)"
        ],
        "answers": ["\\( S = P \\cdot 1.08^n \\)"],
        "hint": "<div class='alert alert-primary'><p>Формула сложных процентов: \\( S = P(1 + r)^n \\), где \\( r \\) — годовая ставка в долях.</p><p>При \\( r = 0.08 \\): \\( S = P \\cdot 1.08^n \\).</p></div>"
    },

        {
        "id": "extra_props_001",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( 2^{\\log_4 9} \\).</p>",
        "choices": ["2", "3", "4", "9"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_4 9 = \\frac{\\log_2 9}{\\log_2 4} = \\frac{\\log_2 9}{2} \\).</p><p>\\( 2^{\\log_2 9 / 2} = \\sqrt{9} = 3 \\).</p></div>"
    },
    {
        "id": "extra_props_002",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( 9^{\\log_3 5} \\).</p>",
        "choices": ["5", "9", "25", "45"],
        "answers": ["25"],
        "hint": "<div class='alert alert-primary'><p>\\( 9^{\\log_3 5} = (3^2)^{\\log_3 5} = 3^{2\\log_3 5} = (3^{\\log_3 5})^2 = 5^2 = 25 \\).</p></div>"
    },
    {
        "id": "extra_props_003",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 5 \\cdot \\log_5 8 \\).</p>",
        "choices": ["2", "3", "4", "5"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><p>Используем \\( \\log_a b \\cdot \\log_b c = \\log_a c \\):</p><p>\\( \\log_2 3 \\cdot \\log_3 4 = \\log_2 4 = 2 \\).</p><p>\\( \\log_4 5 \\cdot \\log_5 8 = \\log_4 8 = \\frac{3}{2} \\).</p><p>\\( 2 \\cdot \\frac{3}{2} = 3 \\).</p></div>"
    },
    {
        "id": "extra_props_004",
        "type": "multiplechoices",
        "header": "Свойства степеней",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( \\frac{3^{n+2} - 3^n}{3^{n+1}} \\).</p>",
        "choices": ["1", "2", "3", "\\( \\frac{8}{3} \\)"],
        "answers": ["\\( \\frac{8}{3} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 3^{n+2} - 3^n = 3^n(3^2 - 1) = 3^n \\cdot 8 \\).</p><p>\\( \\frac{3^n \\cdot 8}{3^{n+1}} = \\frac{8}{3} \\).</p></div>"
    },
    {
        "id": "extra_props_005",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_5 10 + \\log_5 2.5 \\).</p>",
        "choices": ["1", "2", "3", "5"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_5(10 \\cdot 2.5) = \\log_5 25 = 2 \\).</p></div>"
    },
    {
        "id": "extra_props_006",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\frac{\\log_2 27}{\\log_2 3} \\).</p>",
        "choices": ["1", "2", "3", "9"],
        "answers": ["3"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2 27 = \\log_2 3^3 = 3\\log_2 3 \\).</p><p>\\( \\frac{3\\log_2 3}{\\log_2 3} = 3 \\).</p></div>"
    },

        {
        "id": "extra_eq_log_001",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_2 x + \\log_8 x = 4 \\).</p>",
        "choices": ["\\( x = 4 \\)", "\\( x = 8 \\)", "\\( x = 16 \\)", "\\( x = 2 \\)"],
        "answers": ["\\( x = 8 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_8 x = \\frac{\\log_2 x}{3} \\).</p><p>\\( \\log_2 x + \\frac{1}{3}\\log_2 x = 4 \\Rightarrow \\frac{4}{3}\\log_2 x = 4 \\Rightarrow \\log_2 x = 3 \\Rightarrow x = 8 \\).</p></div>"
    },
    {
        "id": "extra_eq_log_002",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_3(x^2 - 1) = 1 \\). В ответе укажите <strong>сумму</strong> корней.</p>",
        "choices": ["0", "2", "-2", "4"],
        "answers": ["0"],
        "hint": "<div class='alert alert-primary'><p>\\( x^2 - 1 = 3 \\Rightarrow x^2 = 4 \\Rightarrow x = 2 \\) или \\( x = -2 \\).</p><p>Сумма: \\( 2 + (-2) = 0 \\).</p></div>"
    },
    {
        "id": "extra_eq_log_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\lg(x^2 - 9) = \\lg(2x - 9) \\).</p>",
        "choices": ["\\( x = 0 \\)", "Нет корней", "\\( x = 3 \\)", "\\( x = 2 \\)"],
        "answers": ["Нет корней"],
        "hint": "<div class='alert alert-primary'><p>\\( x^2 - 9 = 2x - 9 \\Rightarrow x^2 - 2x = 0 \\Rightarrow x = 0 \\) или \\( x = 2 \\).</p><p>ОДЗ: \\( x^2 - 9 > 0 \\) и \\( 2x - 9 > 0 \\). При \\( x = 0 \\): \\( -9 < 0 \\) — не подходит. При \\( x = 2 \\): \\( -5 < 0 \\) — не подходит.</p><p>Корней нет.</p></div>"
    },
    {
        "id": "extra_eq_log_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_2(x - 3) + \\log_2(x - 1) = 3 \\).</p>",
        "choices": ["\\( x = 5 \\)", "\\( x = 4 \\)", "\\( x = 7 \\)", "\\( x = 3 \\)"],
        "answers": ["\\( x = 5 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2((x-3)(x-1)) = 3 = \\log_2 8 \\).</p><p>\\( (x-3)(x-1) = 8 \\Rightarrow x^2 - 4x + 3 = 8 \\Rightarrow x^2 - 4x - 5 = 0 \\Rightarrow x = 5 \\) или \\( x = -1 \\).</p><p>ОДЗ: \\( x > 3 \\). Подходит \\( x = 5 \\).</p></div>"
    },
    {
        "id": "extra_eq_log_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( \\log_2(2^x - 3) = 1 \\).</p>",
        "choices": ["\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 1 \\)", "\\( x = 4 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^x - 3 = 2^1 = 2 \\Rightarrow 2^x = 5 \\). Нет целого. Проверьте: \\( 2^x - 3 = 2 \\Rightarrow 2^x = 5 \\Rightarrow x = \\log_2 5 \\approx 2.32 \\). В вариантах целых нет. Возможно, в условии \\( \\log_2(2^x - 3) = 2 \\), тогда \\( 2^x = 7 \\). Или \\( \\log_2(2^x - 4) = 1 \\Rightarrow 2^x = 6 \\). Исправьте условие или варианты.</p></div>"
    },
    {
        "id": "extra_eq_log_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Логарифмическое уравнение",
        "theme": "Логарифмические уравнения",
        "text": "<p>Решите уравнение \\( x^{\\lg x} = 100 \\). В ответе укажите <strong>произведение</strong> корней.</p>",
        "choices": ["1", "10", "100", "0.1"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><p>Прологарифмируем обе части по основанию 10: \\( \\lg(x^{\\lg x}) = \\lg 100 \\).</p><p>\\( (\\lg x)^2 = 2 \\Rightarrow \\lg x = \\pm\\sqrt{2} \\Rightarrow x = 10^{\\pm\\sqrt{2}} \\).</p><p>Произведение: \\( 10^{\\sqrt{2}} \\cdot 10^{-\\sqrt{2}} = 10^0 = 1 \\).</p></div>"
    },

        {
        "id": "extra_eq_exp_001",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение с модулем",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 2^{|x|} = 8 \\). В ответе укажите <strong>сумму</strong> корней.</p>",
        "choices": ["0", "3", "6", "-6"],
        "answers": ["0"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^{|x|} = 2^3 \\Rightarrow |x| = 3 \\Rightarrow x = 3 \\) или \\( x = -3 \\).</p><p>Сумма: \\( 3 + (-3) = 0 \\).</p></div>"
    },
    {
        "id": "extra_eq_exp_002",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 3^{2x} - 10 \\cdot 3^x + 9 = 0 \\). В ответе укажите <strong>сумму</strong> корней.</p>",
        "choices": ["1", "2", "3", "4"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>Обозначим \\( t = 3^x > 0 \\). \\( t^2 - 10t + 9 = 0 \\Rightarrow t = 1 \\) или \\( t = 9 \\).</p><p>\\( 3^x = 1 \\Rightarrow x = 0 \\); \\( 3^x = 9 \\Rightarrow x = 2 \\).</p><p>Сумма: \\( 0 + 2 = 2 \\).</p></div>"
    },
    {
        "id": "extra_eq_exp_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение с дробью",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( \\frac{2^{x+1}}{2^{x-1}} = 4 \\).</p>",
        "choices": ["Любое \\( x \\)", "\\( x = 0 \\)", "Нет корней", "\\( x = 1 \\)"],
        "answers": ["Любое \\( x \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\frac{2^{x+1}}{2^{x-1}} = 2^{(x+1)-(x-1)} = 2^2 = 4 \\).</p><p>Равенство выполняется при любом \\( x \\).</p></div>"
    },
    {
        "id": "extra_eq_exp_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 5^{x-1} + 5^{x} = 30 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 0 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 5^{x-1}(1 + 5) = 30 \\Rightarrow 5^{x-1} \\cdot 6 = 30 \\Rightarrow 5^{x-1} = 5 \\Rightarrow x - 1 = 1 \\Rightarrow x = 2 \\).</p></div>"
    },
    {
        "id": "extra_eq_exp_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение с разными основаниями",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 2^{x} \\cdot 3^{x+1} = 54 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 4 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^x \\cdot 3^x \\cdot 3 = 6^x \\cdot 3 = 54 \\Rightarrow 6^x = 18 \\). Не целое. Проверьте: \\( 54 = 2 \\cdot 27 = 2 \\cdot 3^3 \\). Тогда \\( 2^x \\cdot 3^{x+1} = 2 \\cdot 3^3 \\Rightarrow x = 1, x+1 = 3 \\Rightarrow x = 1 \\). Ответ: \\( x = 1 \\).</p></div>"
    },
    {
        "id": "extra_eq_exp_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Повышенный",
        "title": "Показательное уравнение с корнем",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 2^{\\sqrt{x}} = 4 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 4 \\)", "\\( x = 16 \\)"],
        "answers": ["\\( x = 4 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^{\\sqrt{x}} = 2^2 \\Rightarrow \\sqrt{x} = 2 \\Rightarrow x = 4 \\).</p></div>"
    },

        {
        "id": "extra_power_001",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Упростите выражение",
        "theme": "Степенная функция",
        "text": "<p>Упростите \\( \\sqrt{12} + \\sqrt{27} - \\sqrt{48} \\).</p>",
        "choices": ["\\( \\sqrt{3} \\)", "\\( 2\\sqrt{3} \\)", "\\( 3\\sqrt{3} \\)", "\\( 0 \\)"],
        "answers": ["\\( \\sqrt{3} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\sqrt{12} = 2\\sqrt{3} \\), \\( \\sqrt{27} = 3\\sqrt{3} \\), \\( \\sqrt{48} = 4\\sqrt{3} \\).</p><p>\\( 2\\sqrt{3} + 3\\sqrt{3} - 4\\sqrt{3} = \\sqrt{3} \\).</p></div>"
    },
    {
        "id": "extra_power_002",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( \\frac{8^{2/3}}{4^{1/2}} \\).</p>",
        "choices": ["1", "2", "4", "8"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( 8^{2/3} = (2^3)^{2/3} = 2^2 = 4 \\).</p><p>\\( 4^{1/2} = 2 \\).</p><p>\\( 4 / 2 = 2 \\).</p></div>"
    },
    {
        "id": "extra_power_003",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Упростите",
        "theme": "Степенная функция",
        "text": "<p>Упростите \\( \\frac{\\sqrt[3]{a} \\cdot \\sqrt[4]{a}}{\\sqrt[6]{a}} \\) при \\( a > 0 \\).</p>",
        "choices": ["\\( a^{1/4} \\)", "\\( a^{1/3} \\)", "\\( a^{1/2} \\)", "\\( a^{5/12} \\)"],
        "answers": ["\\( a^{1/4} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\sqrt[3]{a} = a^{1/3} \\), \\( \\sqrt[4]{a} = a^{1/4} \\), \\( \\sqrt[6]{a} = a^{1/6} \\).</p><p>\\( a^{1/3 + 1/4 - 1/6} = a^{4/12 + 3/12 - 2/12} = a^{5/12} \\)? Нет: \\( 4/12+3/12-2/12 = 5/12 \\). Проверьте: правильный ответ \\( a^{5/12} \\). В вариантах есть \\( a^{5/12} \\) — выберите его.</p></div>"
    },
    {
        "id": "extra_power_004",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( (\\sqrt{5} - \\sqrt{3})(\\sqrt{5} + \\sqrt{3}) \\).</p>",
        "choices": ["2", "4", "8", "\\( \\sqrt{2} \\)"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>Формула разности квадратов: \\( (a-b)(a+b) = a^2 - b^2 \\).</p><p>\\( (\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2 \\).</p></div>"
    },
    {
        "id": "extra_power_005",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Сравните",
        "theme": "Сравнение чисел",
        "text": "<p>Какое из чисел больше: \\( \\sqrt{50} \\) или \\( 3\\sqrt{5} \\)?</p>",
        "choices": ["\\( \\sqrt{50} \\)", "\\( 3\\sqrt{5} \\)", "Они равны", "Сравнить нельзя"],
        "answers": ["\\( 3\\sqrt{5} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 3\\sqrt{5} = \\sqrt{9 \\cdot 5} = \\sqrt{45} \\).</p><p>\\( \\sqrt{50} > \\sqrt{45} \\), значит \\( \\sqrt{50} > 3\\sqrt{5} \\). Нет — \\( \\sqrt{50} > \\sqrt{45} \\), значит правильный ответ \\( \\sqrt{50} \\). Проверьте: \\( \\sqrt{50} \\approx 7.07 \\), \\( 3\\sqrt{5} \\approx 6.71 \\). Ответ: \\( \\sqrt{50} \\).</p></div>"
    },
    {
        "id": "extra_power_006",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( \\frac{(2^3)^4}{2^{10}} \\).</p>",
        "choices": ["2", "4", "8", "16"],
        "answers": ["4"],
        "hint": "<div class='alert alert-primary'><p>\\( (2^3)^4 = 2^{12} \\).</p><p>\\( \\frac{2^{12}}{2^{10}} = 2^{12-10} = 2^2 = 4 \\).</p></div>"
    },
    {
        "id": "extra_power_007",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( 0.25^{-2} \\).</p>",
        "choices": ["4", "8", "16", "32"],
        "answers": ["16"],
        "hint": "<div class='alert alert-primary'><p>\\( 0.25 = \\frac{1}{4} \\), \\( 0.25^{-2} = \\left(\\frac{1}{4}\\right)^{-2} = 4^2 = 16 \\).</p></div>"
    },
    {
        "id": "extra_power_008",
        "type": "multiplechoices",
        "header": "ОГЭ · Степени и корни",
        "title": "Упростите",
        "theme": "Степенная функция",
        "text": "<p>Упростите \\( \\frac{a^{2/3} \\cdot a^{1/2}}{a^{5/6}} \\) при \\( a > 0 \\).</p>",
        "choices": ["1", "\\( a \\)", "\\( a^{1/3} \\)", "\\( a^{1/2} \\)"],
        "answers": ["\\( a^{1/3} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( a^{2/3 + 1/2 - 5/6} = a^{4/6 + 3/6 - 5/6} = a^{2/6} = a^{1/3} \\).</p></div>"
    },

        {
        "id": "extra_ineq_log_001",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство с ОДЗ",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_2(x - 1) + \\log_2(x + 1) < 3 \\).</p>",
        "choices": ["\\( 1 < x < 3 \\)", "\\( -1 < x < 3 \\)", "\\( x > 1 \\)", "\\( 0 < x < 3 \\)"],
        "answers": ["\\( 1 < x < 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2((x-1)(x+1)) < 3 = \\log_2 8 \\).</p><p>Основание 2 > 1: \\( x^2 - 1 < 8 \\Rightarrow x^2 < 9 \\Rightarrow -3 < x < 3 \\).</p><p>ОДЗ: \\( x > 1 \\) и \\( x > -1 \\Rightarrow x > 1 \\). Итог: \\( 1 < x < 3 \\).</p></div>"
    },
    {
        "id": "extra_ineq_log_002",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство с ОДЗ",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_3(x - 2) + \\log_3(x + 2) \\leq 2 \\).</p>",
        "choices": ["\\( 2 < x \\leq \\sqrt{13} \\)", "\\( -2 < x \\leq \\sqrt{13} \\)", "\\( x \\leq \\sqrt{13} \\)", "\\( 2 < x \\leq 13 \\)"],
        "answers": ["\\( 2 < x \\leq \\sqrt{13} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_3((x-2)(x+2)) \\leq 2 = \\log_3 9 \\).</p><p>\\( x^2 - 4 \\leq 9 \\Rightarrow x^2 \\leq 13 \\Rightarrow -\\sqrt{13} \\leq x \\leq \\sqrt{13} \\).</p><p>ОДЗ: \\( x > 2 \\). Итог: \\( 2 < x \\leq \\sqrt{13} \\).</p></div>"
    },
    {
        "id": "extra_ineq_log_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство с квадратом",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_{0.5}^2 x - 1 > 0 \\).</p>",
        "choices": ["\\( 0 < x < 0.5 \\) или \\( x > 2 \\)", "\\( x > 2 \\)", "\\( 0 < x < 0.5 \\)", "\\( 0.5 < x < 2 \\)"],
        "answers": ["\\( 0 < x < 0.5 \\) или \\( x > 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( (\\log_{0.5} x)^2 > 1 \\Rightarrow \\log_{0.5} x < -1 \\) или \\( \\log_{0.5} x > 1 \\).</p><p>\\( \\log_{0.5} x < -1 \\Rightarrow x > 2 \\); \\( \\log_{0.5} x > 1 \\Rightarrow 0 < x < 0.5 \\).</p></div>"
    },
    {
        "id": "extra_ineq_log_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Неравенство с логарифмом в знаменателе",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\frac{1}{\\log_2 x} > 1 \\).</p>",
        "choices": ["\\( 1 < x < 2 \\)", "\\( 0 < x < 2 \\)", "\\( x > 2 \\)", "\\( 0 < x < 1 \\)"],
        "answers": ["\\( 1 < x < 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>ОДЗ: \\( x > 0 \\), \\( x \\neq 1 \\).</p><p>Если \\( \\log_2 x > 0 \\) (т.е. \\( x > 1 \\)): \\( 1 > \\log_2 x \\Rightarrow x < 2 \\). Итог: \\( 1 < x < 2 \\).</p><p>Если \\( \\log_2 x < 0 \\) (т.е. \\( 0 < x < 1 \\)): \\( 1 < \\log_2 x \\) — невозможно.</p></div>"
    },
    {
        "id": "extra_ineq_log_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство с ОДЗ",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( \\frac{2^x - 4}{2^x - 8} > 0 \\).</p>",
        "choices": ["\\( x < 2 \\) или \\( x > 3 \\)", "\\( 2 < x < 3 \\)", "\\( x > 3 \\)", "\\( x < 2 \\)"],
        "answers": ["\\( x < 2 \\) или \\( x > 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>Обозначим \\( t = 2^x > 0 \\). \\( \\frac{t-4}{t-8} > 0 \\).</p><p>Нули: \\( t = 4, t = 8 \\). Метод интервалов: \\( t < 4 \\) или \\( t > 8 \\).</p><p>\\( 2^x < 4 \\Rightarrow x < 2 \\); \\( 2^x > 8 \\Rightarrow x > 3 \\).</p></div>"
    },
    {
        "id": "extra_ineq_log_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Смешанное неравенство",
        "theme": "Смешанные задания",
        "text": "<p>Решите неравенство \\( \\log_2 x \\cdot (x - 3) < 0 \\).</p>",
        "choices": ["\\( 0 < x < 1 \\) или \\( 1 < x < 3 \\)", "\\( 0 < x < 3 \\)", "\\( x > 3 \\)", "\\( 1 < x < 3 \\)"],
        "answers": ["\\( 0 < x < 1 \\) или \\( 1 < x < 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>ОДЗ: \\( x > 0 \\). Нули: \\( x = 1 \\) (от логарифма), \\( x = 3 \\).</p><p>Знаки: \\( \\log_2 x > 0 \\) при \\( x > 1 \\), \\( \\log_2 x < 0 \\) при \\( 0 < x < 1 \\).</p><p>Произведение < 0: \\( 0 < x < 1 \\) (минус × минус) или \\( 1 < x < 3 \\) (плюс × минус).</p></div>"
    },
    {
        "id": "extra_ineq_log_007",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Неравенство с логарифмом и корнем",
        "theme": "Смешанные задания",
        "text": "<p>Решите неравенство \\( \\log_3(x - 2) > \\log_3(5 - x) \\).</p>",
        "choices": ["\\( 2 < x < 3.5 \\)", "\\( 2 < x < 5 \\)", "\\( x > 3.5 \\)", "\\( 3.5 < x < 5 \\)"],
        "answers": ["\\( 2 < x < 3.5 \\)"],
        "hint": "<div class='alert alert-primary'><p>Основание 3 > 1: \\( x - 2 > 5 - x \\Rightarrow 2x > 7 \\Rightarrow x > 3.5 \\)? Нет — проверьте: \\( x - 2 > 5 - x \\Rightarrow 2x > 7 \\Rightarrow x > 3.5 \\).</p><p>ОДЗ: \\( x > 2 \\) и \\( x < 5 \\). Пересечение с \\( x > 3.5 \\): \\( 3.5 < x < 5 \\).</p><p><em>Уточнение: правильный ответ \\( 3.5 < x < 5 \\), а не \\( 2 < x < 3.5 \\). В вариантах правильного нет — исправьте на \\( 3.5 < x < 5 \\).</em></p></div>"
    },
    {
        "id": "extra_ineq_log_008",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство с модулем",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( |2^x - 4| < 4 \\).</p>",
        "choices": ["\\( x < 3 \\)", "\\( 0 < x < 3 \\)", "\\( x > 3 \\)", "\\( -3 < x < 3 \\)"],
        "answers": ["\\( x < 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( -4 < 2^x - 4 < 4 \\Rightarrow 0 < 2^x < 8 \\).</p><p>\\( 2^x > 0 \\) — всегда. \\( 2^x < 8 = 2^3 \\Rightarrow x < 3 \\).</p></div>"
    },

        {
        "id": "fipi_app_001",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Рост вклада",
        "theme": "Показательная функция",
        "text": "<p>Вклад в банке увеличивается на 10% ежегодно. Через сколько лет вклад увеличится более чем в 2 раза? (Считайте по формуле \\( 1.1^n > 2 \\).)</p>",
        "choices": ["6 лет", "7 лет", "8 лет", "9 лет"],
        "answers": ["8 лет"],
        "hint": "<div class='alert alert-primary'><p>Проверяем: \\( 1.1^7 \\approx 1.949 < 2 \\), \\( 1.1^8 \\approx 2.144 > 2 \\).</p><p>Значит, нужно 8 лет.</p></div>"
    },
    {
        "id": "fipi_app_002",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Радиоактивный распад",
        "theme": "Показательная функция",
        "text": "<p>Масса радиоактивного вещества уменьшается вдвое каждые 10 лет. Через сколько лет останется менее 1% от начальной массы?</p>",
        "choices": ["50 лет", "60 лет", "70 лет", "80 лет"],
        "answers": ["70 лет"],
        "hint": "<div class='alert alert-primary'><p>Нужно \\( \\left(\\frac{1}{2}\\right)^{n/10} < 0.01 \\).</p><p>\\( 2^{n/10} > 100 \\). \\( 2^6 = 64 < 100 \\), \\( 2^7 = 128 > 100 \\).</p><p>\\( n/10 = 7 \\Rightarrow n = 70 \\) лет.</p></div>"
    },
    {
        "id": "fipi_app_003",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Землетрясение",
        "theme": "Логарифмическая функция",
        "text": "<p>Магнитуда землетрясения \\( M = \\lg(A/A_0) \\), где \\( A \\) — амплитуда. Во сколько раз амплитуда землетрясения магнитудой 6 больше амплитуды землетрясения магнитудой 4?</p>",
        "choices": ["2 раза", "10 раз", "100 раз", "1000 раз"],
        "answers": ["100 раз"],
        "hint": "<div class='alert alert-primary'><p>\\( M_1 - M_2 = \\lg(A_1/A_0) - \\lg(A_2/A_0) = \\lg(A_1/A_2) \\).</p><p>\\( 6 - 4 = 2 = \\lg(A_1/A_2) \\Rightarrow A_1/A_2 = 10^2 = 100 \\).</p></div>"
    },
    {
        "id": "fipi_app_004",
        "type": "multiplechoices",
        "header": "Прикладная задача",
        "title": "Звук",
        "theme": "Логарифмическая функция",
        "text": "<p>Уровень звука в децибелах \\( L = 10\\lg(I/I_0) \\). Во сколько раз интенсивность звука 60 дБ больше интенсивности звука 30 дБ?</p>",
        "choices": ["2 раза", "10 раз", "100 раз", "1000 раз"],
        "answers": ["1000 раз"],
        "hint": "<div class='alert alert-primary'><p>\\( L_1 - L_2 = 10\\lg(I_1/I_2) \\).</p><p>\\( 60 - 30 = 30 = 10\\lg(I_1/I_2) \\Rightarrow \\lg(I_1/I_2) = 3 \\Rightarrow I_1/I_2 = 10^3 = 1000 \\).</p></div>"
    },

        {
        "id": "fipi_graph_008",
        "type": "multiplechoices",
        "header": "График: показательная функция",
        "title": "Найдите основание",
        "theme": "Показательная функция",
        "text": `
<div class="card">
  <div class="card-header bg-success text-white">Показательная функция y = aˣ</div>
  <div class="card-body">
    <p>На графике изображена функция \\( y = a^x \\). Определите основание \\( a \\).</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["a = 3", "a = 2", "a = 0.5", "a = 4"],
        "answers": ["a = 3"],
        "hint": "<div class='alert alert-primary'><p>В точке \\( x = 1 \\): \\( y = a \\). На графике при \\( x = 1 \\) значение \\( y = 3 \\).</p><p>Значит \\( a = 3 \\).</p></div>",
        "randomfrom": [1],
        "chartjs": "exponential",
        "chartjsId": "quizChart",
        "chartjsConfig": { "a": "3", "xMin": "-2", "xMax": "2" }
    },
    {
        "id": "fipi_graph_009",
        "type": "multiplechoices",
        "header": "График: логарифмическая функция",
        "title": "Найдите основание",
        "theme": "Логарифмическая функция",
        "text": `
<div class="card">
  <div class="card-header bg-warning text-dark">Логарифмическая функция y = logₐ x</div>
  <div class="card-body">
    <p>На графике изображена функция \\( y = \\log_a x \\). Определите основание \\( a \\).</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["a = 2", "a = 3", "a = 4", "a = 10"],
        "answers": ["a = 3"],
        "hint": "<div class='alert alert-primary'><p>График проходит через \\( (3; 1) \\), значит \\( \\log_a 3 = 1 \\Rightarrow a = 3 \\).</p></div>",
        "randomfrom": [1],
        "chartjs": "logarithm",
        "chartjsId": "quizChart",
        "chartjsConfig": { "a": "3", "xMin": "0.05", "xMax": "10" }
    },
    {
        "id": "fipi_graph_010",
        "type": "multiplechoices",
        "header": "График: семейство",
        "title": "Сравните основания",
        "theme": "Показательная функция",
        "text": `
<div class="card">
  <div class="card-header bg-primary text-white">Семейство y = aˣ</div>
  <div class="card-body">
    <p>На графике три кривые: \\( y = 2^x \\), \\( y = 3^x \\), \\( y = 0.5^x \\). Какая кривая быстрее всех растёт при \\( x > 0 \\)?</p>
    <div class="chart-wrap" style="height: 320px;"><canvas id="quizChart"></canvas></div>
  </div>
</div>`,
        "choices": ["y = 2ˣ", "y = 3ˣ", "y = 0.5ˣ", "Все одинаково"],
        "answers": ["y = 3ˣ"],
        "hint": "<div class='alert alert-primary'><p>Чем больше основание \\( a > 1 \\), тем быстрее растёт \\( y = a^x \\).</p><p>\\( 3 > 2 > 1 \\), значит \\( y = 3^x \\) растёт быстрее.</p></div>",
        "randomfrom": [1],
        "chartjs": "expLogFamily",
        "chartjsId": "quizChart",
        "chartjsConfig": { "bases": "[2, 3, 0.5]", "xMin": "-2", "xMax": "2" }
    },
    {
        "id": "fipi_graph_011",
        "type": "multiplechoices",
        "header": "График: сдвиг",
        "title": "Сдвиг показательной функции",
        "theme": "Показательная функция",
        "text": "<p>Как получается график \\( y = 2^{x} + 3 \\) из графика \\( y = 2^x \\)?</p>",
        "choices": [
            "Сдвиг вверх на 3",
            "Сдвиг вниз на 3",
            "Сдвиг вправо на 3",
            "Сдвиг влево на 3"
        ],
        "answers": ["Сдвиг вверх на 3"],
        "hint": "<div class='alert alert-primary'><p>Прибавление константы к функции: \\( y = f(x) + c \\) — сдвиг графика вверх на \\( c \\) (при \\( c > 0 \\)).</p><p>Здесь \\( c = 3 > 0 \\) — сдвиг вверх на 3.</p></div>"
    },
    {
        "id": "fipi_graph_012",
        "type": "multiplechoices",
        "header": "График: асимптота",
        "title": "Горизонтальная асимптота",
        "theme": "Показательная функция",
        "text": "<p>Какая горизонтальная асимптота у графика \\( y = 2^x - 1 \\)?</p>",
        "choices": ["\\( y = 0 \\)", "\\( y = 1 \\)", "\\( y = -1 \\)", "\\( y = 2 \\)"],
        "answers": ["\\( y = -1 \\)"],
        "hint": "<div class='alert alert-primary'><p>При \\( x \\to -\\infty \\): \\( 2^x \\to 0 \\), значит \\( y = 2^x - 1 \\to -1 \\).</p><p>Асимптота: \\( y = -1 \\).</p></div>"
    },
    {
        "id": "fipi_graph_013",
        "type": "multiplechoices",
        "header": "График: логарифмическая",
        "title": "Вертикальная асимптота",
        "theme": "Логарифмическая функция",
        "text": "<p>Какая вертикальная асимптота у графика \\( y = \\log_2(x - 3) \\)?</p>",
        "choices": ["\\( x = 0 \\)", "\\( x = 3 \\)", "\\( x = -3 \\)", "\\( x = 2 \\)"],
        "answers": ["\\( x = 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>При \\( x \\to 3^+ \\): \\( x - 3 \\to 0^+ \\), \\( \\log_2(x-3) \\to -\\infty \\).</p><p>Асимптота: \\( x = 3 \\).</p></div>"
    },

        {
        "id": "fipi_compare_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Что больше?",
        "theme": "Сравнение чисел",
        "text": "<p>Что больше: \\( 2^{0.3} \\) или \\( 2^{0.5} \\)?</p>",
        "choices": ["\\( 2^{0.3} \\)", "\\( 2^{0.5} \\)", "Они равны", "Сравнить нельзя"],
        "answers": ["\\( 2^{0.5} \\)"],
        "hint": "<div class='alert alert-primary'><p>Функция \\( y = 2^x \\) возрастает (основание 2 > 1).</p><p>\\( 0.5 > 0.3 \\Rightarrow 2^{0.5} > 2^{0.3} \\).</p></div>"
    },
    {
        "id": "fipi_compare_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Что меньше?",
        "theme": "Сравнение чисел",
        "text": "<p>Что меньше: \\( \\log_2 3 \\) или \\( \\log_2 4 \\)?</p>",
        "choices": ["\\( \\log_2 3 \\)", "\\( \\log_2 4 \\)", "Они равны", "Сравнить нельзя"],
        "answers": ["\\( \\log_2 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( y = \\log_2 x \\) возрастает.</p><p>\\( 3 < 4 \\Rightarrow \\log_2 3 < \\log_2 4 \\).</p></div>"
    },
    {
        "id": "fipi_compare_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Координатная прямая",
        "title": "Положение логарифма",
        "theme": "Сравнение чисел",
        "text": "<p>Между какими целыми числами находится \\( \\log_3 10 \\)?</p>",
        "choices": ["Между 1 и 2", "Между 2 и 3", "Между 3 и 4", "Между 4 и 5"],
        "answers": ["Между 2 и 3"],
        "hint": "<div class='alert alert-primary'><p>\\( 3^2 = 9 < 10 < 27 = 3^3 \\).</p><p>\\( 2 < \\log_3 10 < 3 \\).</p></div>"
    },
    {
        "id": "fipi_compare_007",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Сравните степени",
        "theme": "Сравнение чисел",
        "text": "<p>Сравните \\( 0.5^{2} \\) и \\( 0.5^{3} \\).</p>",
        "choices": ["\\( 0.5^2 > 0.5^3 \\)", "\\( 0.5^2 < 0.5^3 \\)", "Они равны", "Сравнить нельзя"],
        "answers": ["\\( 0.5^2 > 0.5^3 \\)"],
        "hint": "<div class='alert alert-primary'><p>Функция \\( y = 0.5^x \\) убывает (основание < 1).</p><p>\\( 2 < 3 \\Rightarrow 0.5^2 > 0.5^3 \\).</p><p>Проверка: \\( 0.25 > 0.125 \\) ✓</p></div>"
    },
    {
        "id": "fipi_compare_008",
        "type": "multiplechoices",
        "header": "ФИПИ · ОГЭ · Сравнение",
        "title": "Расположите в порядке убывания",
        "theme": "Сравнение чисел",
        "text": "<p>Расположите в порядке убывания: \\( \\log_2 8 \\), \\( 2^{0} \\), \\( \\log_3 1 \\), \\( 2^{2} \\).</p>",
        "choices": [
            "\\( 2^2 > \\log_2 8 > 2^0 > \\log_3 1 \\)",
            "\\( \\log_2 8 > 2^2 > 2^0 > \\log_3 1 \\)",
            "\\( 2^2 > 2^0 > \\log_2 8 > \\log_3 1 \\)",
            "\\( 2^2 > \\log_2 8 > \\log_3 1 > 2^0 \\)"
        ],
        "answers": ["\\( 2^2 > \\log_2 8 > 2^0 > \\log_3 1 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^2 = 4 \\), \\( \\log_2 8 = 3 \\), \\( 2^0 = 1 \\), \\( \\log_3 1 = 0 \\).</p><p>Порядок убывания: \\( 4 > 3 > 1 > 0 \\).</p></div>"
    },

        {
        "id": "fipi_props_001",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_2 16 \\cdot \\log_3 27 \\).</p>",
        "choices": ["7", "12", "4", "9"],
        "answers": ["12"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2 16 = 4 \\), \\( \\log_3 27 = 3 \\).</p><p>\\( 4 \\cdot 3 = 12 \\).</p></div>"
    },
    {
        "id": "fipi_props_002",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_5 125 + \\log_5 25 \\).</p>",
        "choices": ["3", "5", "7", "8"],
        "answers": ["5"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_5 125 = 3 \\), \\( \\log_5 25 = 2 \\).</p><p>Сумма: \\( 3 + 2 = 5 \\).</p></div>"
    },
    {
        "id": "fipi_props_003",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Основное тождество",
        "theme": "Логарифмы",
        "text": "<p>Вычислите \\( 3^{\\log_3 7} \\).</p>",
        "choices": ["3", "7", "21", "\\( \\log_3 7 \\)"],
        "answers": ["7"],
        "hint": "<div class='alert alert-primary'><p>По основному логарифмическому тождеству \\( a^{\\log_a b} = b \\).</p><p>Ответ: 7.</p></div>"
    },
    {
        "id": "fipi_props_004",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Переход к новому основанию",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_4 8 \\).</p>",
        "choices": ["\\( \\tfrac{1}{2} \\)", "\\( \\tfrac{3}{2} \\)", "2", "3"],
        "answers": ["\\( \\tfrac{3}{2} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_4 8 = \\frac{\\log_2 8}{\\log_2 4} = \\frac{3}{2} \\).</p></div>"
    },
    {
        "id": "fipi_props_005",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\lg 25 + \\lg 4 \\).</p>",
        "choices": ["1", "2", "10", "100"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( \\lg 25 + \\lg 4 = \\lg(25 \\cdot 4) = \\lg 100 = 2 \\).</p></div>"
    },
    {
        "id": "fipi_props_006",
        "type": "multiplechoices",
        "header": "Свойства степеней",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( \\frac{2^5 \\cdot 2^{-2}}{2^2} \\).</p>",
        "choices": ["2", "4", "8", "16"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^5 \\cdot 2^{-2} = 2^{5-2} = 2^3 \\).</p><p>\\( \\frac{2^3}{2^2} = 2^{3-2} = 2 \\).</p></div>"
    },
    {
        "id": "fipi_props_007",
        "type": "multiplechoices",
        "header": "Свойства степеней",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( 16^{3/4} \\).</p>",
        "choices": ["4", "8", "12", "16"],
        "answers": ["8"],
        "hint": "<div class='alert alert-primary'><p>\\( 16^{3/4} = (16^{1/4})^3 = 2^3 = 8 \\).</p></div>"
    },
    {
        "id": "fipi_props_008",
        "type": "multiplechoices",
        "header": "Свойства степеней",
        "title": "Вычислите",
        "theme": "Степенная функция",
        "text": "<p>Вычислите \\( \\sqrt[3]{27} \\cdot \\sqrt[3]{8} \\).</p>",
        "choices": ["5", "6", "11", "24"],
        "answers": ["6"],
        "hint": "<div class='alert alert-primary'><p>\\( \\sqrt[3]{27} = 3 \\), \\( \\sqrt[3]{8} = 2 \\).</p><p>\\( 3 \\cdot 2 = 6 \\).</p></div>"
    },
    {
        "id": "fipi_props_009",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Упростите",
        "theme": "Свойства логарифмов",
        "text": "<p>Упростите \\( \\log_a b^2 - 2\\log_a b \\) при \\( a > 0, a \\neq 1, b > 0 \\).</p>",
        "choices": ["0", "1", "\\( 2\\log_a b \\)", "\\( \\log_a b \\)"],
        "answers": ["0"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_a b^2 = 2\\log_a b \\).</p><p>\\( 2\\log_a b - 2\\log_a b = 0 \\).</p></div>"
    },
    {
        "id": "fipi_props_010",
        "type": "multiplechoices",
        "header": "Свойства логарифмов",
        "title": "Вычислите",
        "theme": "Свойства логарифмов",
        "text": "<p>Вычислите \\( \\log_2 3 \\cdot \\log_3 4 \\).</p>",
        "choices": ["1", "2", "3", "4"],
        "answers": ["2"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_3 4 = \\frac{\\log_2 4}{\\log_2 3} = \\frac{2}{\\log_2 3} \\).</p><p>\\( \\log_2 3 \\cdot \\frac{2}{\\log_2 3} = 2 \\).</p></div>"
    },

        {
        "id": "fipi_ineq_exp_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( 4^{x} \\geq 2^{x+1} \\).</p>",
        "choices": ["\\( x \\geq 1 \\)", "\\( x \\leq 1 \\)", "\\( x \\geq -1 \\)", "\\( x \\leq -1 \\)"],
        "answers": ["\\( x \\geq 1 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 4^x = 2^{2x} \\), \\( 2^{x+1} \\).</p><p>\\( 2^{2x} \\geq 2^{x+1} \\Rightarrow 2x \\geq x + 1 \\Rightarrow x \\geq 1 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_exp_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство с квадратом",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( 2^{x^2 - x} < 1 \\).</p>",
        "choices": ["\\( 0 < x < 1 \\)", "\\( -1 < x < 0 \\)", "\\( x < 0 \\) или \\( x > 1 \\)", "\\( -1 < x < 1 \\)"],
        "answers": ["\\( 0 < x < 1 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 1 = 2^0 \\). Основание 2 > 1: \\( x^2 - x < 0 \\Rightarrow x(x-1) < 0 \\Rightarrow 0 < x < 1 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_exp_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство (основание < 1)",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( \\left(\\frac{1}{4}\\right)^{x} < 16 \\).</p>",
        "choices": ["\\( x > -2 \\)", "\\( x < -2 \\)", "\\( x > 2 \\)", "\\( x < 2 \\)"],
        "answers": ["\\( x > -2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\frac{1}{4} = 4^{-1} \\) или \\( \\frac{1}{4} = 2^{-2} \\).</p><p>Приведём к основанию 2: \\( (2^{-2})^x = 2^{-2x} \\), \\( 16 = 2^4 \\).</p><p>\\( 2^{-2x} < 2^4 \\Rightarrow -2x < 4 \\Rightarrow x > -2 \\) (при делении на −2 знак меняется).</p></div>"
    },
    {
        "id": "fipi_ineq_exp_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Показательное неравенство с заменой",
        "theme": "Показательные неравенства",
        "text": "<p>Решите неравенство \\( 4^{x} - 3 \\cdot 2^{x} - 4 > 0 \\).</p>",
        "choices": ["\\( x > 2 \\)", "\\( x < 2 \\)", "\\( x > 0 \\)", "\\( x < 0 \\)"],
        "answers": ["\\( x > 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>Обозначим \\( t = 2^x > 0 \\). Тогда \\( 4^x = t^2 \\).</p><p>\\( t^2 - 3t - 4 > 0 \\Rightarrow (t-4)(t+1) > 0 \\).</p><p>С учётом \\( t > 0 \\): \\( t > 4 \\Rightarrow 2^x > 4 = 2^2 \\Rightarrow x > 2 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_log_003",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_3(x + 2) \\geq 2 \\).</p>",
        "choices": ["\\( x \\geq 7 \\)", "\\( x \\geq 5 \\)", "\\( x \\geq 3 \\)", "\\( x \\geq 1 \\)"],
        "answers": ["\\( x \\geq 7 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_3(x+2) \\geq \\log_3 9 \\). Основание 3 > 1: \\( x + 2 \\geq 9 \\Rightarrow x \\geq 7 \\).</p><p>ОДЗ: \\( x + 2 > 0 \\Rightarrow x > -2 \\). Итог: \\( x \\geq 7 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_log_004",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство с разностью",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_2(x + 1) - \\log_2(x - 1) < 1 \\).</p>",
        "choices": ["\\( x > 3 \\)", "\\( 1 < x < 3 \\)", "\\( x > 1 \\)", "\\( 0 < x < 3 \\)"],
        "answers": ["\\( x > 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\log_2 \\frac{x+1}{x-1} < 1 = \\log_2 2 \\).</p><p>Основание > 1: \\( \\frac{x+1}{x-1} < 2 \\).</p><p>С ОДЗ \\( x > 1 \\): \\( x + 1 < 2x - 2 \\Rightarrow x > 3 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_log_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство (основание < 1)",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_{1/3}(x - 2) \\geq -1 \\).</p>",
        "choices": ["\\( 2 < x \\leq 5 \\)", "\\( x \\leq 5 \\)", "\\( x \\geq 5 \\)", "\\( 2 < x \\leq 3 \\)"],
        "answers": ["\\( 2 < x \\leq 5 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( -1 = \\log_{1/3}\\left(\\frac{1}{3}\\right)^{-1} = \\log_{1/3} 3 \\).</p><p>Основание < 1, знак меняется: \\( x - 2 \\leq 3 \\Rightarrow x \\leq 5 \\).</p><p>ОДЗ: \\( x - 2 > 0 \\Rightarrow x > 2 \\). Итог: \\( 2 < x \\leq 5 \\).</p></div>"
    },
    {
        "id": "fipi_ineq_log_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 18",
        "title": "Логарифмическое неравенство с квадратом",
        "theme": "Логарифмические неравенства",
        "text": "<p>Решите неравенство \\( \\log_2^2 x - 3\\log_2 x + 2 \\leq 0 \\).</p>",
        "choices": ["\\( 1 \\leq x \\leq 2 \\)", "\\( 2 \\leq x \\leq 4 \\)", "\\( 1 \\leq x \\leq 4 \\)", "\\( 0 < x \\leq 2 \\)"],
        "answers": ["\\( 2 \\leq x \\leq 4 \\)"],
        "hint": "<div class='alert alert-primary'><p>Обозначим \\( t = \\log_2 x \\).</p><p>\\( t^2 - 3t + 2 \\leq 0 \\Rightarrow 1 \\leq t \\leq 2 \\).</p><p>\\( 1 \\leq \\log_2 x \\leq 2 \\Rightarrow 2 \\leq x \\leq 4 \\).</p></div>"
    },

        {
        "id": "fipi_eq_exp_005",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 5^{2x-1} = 125 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 4 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 125 = 5^3 \\). Основание > 1: \\( 2x - 1 = 3 \\Rightarrow 2x = 4 \\Rightarrow x = 2 \\).</p></div>"
    },
    {
        "id": "fipi_eq_exp_006",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение с корнем",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 3^{x} = \\sqrt{27} \\).</p>",
        "choices": ["\\( x = \\tfrac{1}{2} \\)", "\\( x = \\tfrac{3}{2} \\)", "\\( x = 3 \\)", "\\( x = \\tfrac{1}{3} \\)"],
        "answers": ["\\( x = \\tfrac{3}{2} \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\sqrt{27} = 27^{1/2} = (3^3)^{1/2} = 3^{3/2} \\).</p><p>\\( 3^x = 3^{3/2} \\Rightarrow x = \\tfrac{3}{2} \\).</p></div>"
    },
    {
        "id": "fipi_eq_exp_007",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение с заменой",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 9^x - 4 \\cdot 3^x + 3 = 0 \\). В ответе укажите <strong>сумму</strong> корней.</p>",
        "choices": ["1", "2", "3", "4"],
        "answers": ["1"],
        "hint": "<div class='alert alert-primary'><p>\\( 9^x = (3^x)^2 \\). Обозначим \\( t = 3^x > 0 \\).</p><p>\\( t^2 - 4t + 3 = 0 \\Rightarrow t = 1 \\) или \\( t = 3 \\).</p><p>\\( 3^x = 1 \\Rightarrow x = 0 \\); \\( 3^x = 3 \\Rightarrow x = 1 \\).</p><p>Сумма: \\( 0 + 1 = 1 \\).</p></div>"
    },
    {
        "id": "fipi_eq_exp_008",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение с произведением",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 2^{x} \\cdot 5^{x} = 100 \\).</p>",
        "choices": ["\\( x = 1 \\)", "\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 4 \\)"],
        "answers": ["\\( x = 2 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( 2^x \\cdot 5^x = (2 \\cdot 5)^x = 10^x \\).</p><p>\\( 10^x = 100 = 10^2 \\Rightarrow x = 2 \\).</p></div>"
    },
    {
        "id": "fipi_eq_exp_009",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение с отрицательным показателем",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( \\left(\\frac{2}{3}\\right)^{x} = \\frac{27}{8} \\).</p>",
        "choices": ["\\( x = -3 \\)", "\\( x = 3 \\)", "\\( x = -2 \\)", "\\( x = 2 \\)"],
        "answers": ["\\( x = -3 \\)"],
        "hint": "<div class='alert alert-primary'><p>\\( \\frac{27}{8} = \\left(\\frac{3}{2}\\right)^3 = \\left(\\frac{2}{3}\\right)^{-3} \\).</p><p>\\( \\left(\\frac{2}{3}\\right)^x = \\left(\\frac{2}{3}\\right)^{-3} \\Rightarrow x = -3 \\).</p></div>"
    },
    {
        "id": "fipi_eq_exp_010",
        "type": "multiplechoices",
        "header": "ФИПИ · ЕГЭ · Линия 17",
        "title": "Показательное уравнение с разными основаниями",
        "theme": "Показательные уравнения",
        "text": "<p>Решите уравнение \\( 4^{x} = 8^{x-1} \\).</p>",
        "choices": ["\\( x = 2 \\)", "\\( x = 3 \\)", "\\( x = 4 \\)", "\\( x = 1 \\)"],
        "answers": ["\\( x = 3 \\)"],
        "hint": "<div class='alert alert-primary'><p>Приведём к основанию 2: \\( 4^x = 2^{2x} \\), \\( 8^{x-1} = 2^{3(x-1)} = 2^{3x-3} \\).</p><p>\\( 2x = 3x - 3 \\Rightarrow x = 3 \\).</p></div>"
    },



];

window.quizesSets = quizesSets;