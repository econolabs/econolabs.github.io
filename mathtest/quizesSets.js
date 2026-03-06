let quizesSets = [

 {
        "id": "matrix_system_001",
        "type": "multiplechoices",
        "header": "Матрицы и системы",
        "title": "Система в матричном виде",
        "theme": "Матрицы",
        "text": `Дана система линейных уравнений: <br> 
                 $$\\begin{cases} 2x + 3y = 8 \\\\ x - 2y = -3 \\end{cases}$$ <br> 
                 Как эта система выглядит в матричном виде? $$A \\cdot X = B$$`,
        "choices": [
            "$$\\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$$",
            "$$\\begin{pmatrix} 2 & 1 \\\\ 3 & -2 \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$$",
            "$$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$$",
            "$$\\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$",
            "$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} \\cdot \\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$$"
        ],
        "answers": ["$$\\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$$"],
        "hint": `<p>Вспомните правило умножения матриц:</p>
                 <p>$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\cdot \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} a \\cdot x + b \\cdot y \\\\ c \\cdot x + d \\cdot y \\end{pmatrix}$$</p>
                 <p>В матрице <strong>A</strong> коэффициенты расставляются так же, как в системе: первая строка — первое уравнение, первый столбец — коэффициенты при первом неизвестном (x).</p>`
    },
    
   {
    "id": "matrix_solution_002",
    "type": "multiplechoices",
    "header": "Матрицы и системы",
    "title": "Алгоритм решения через обратную матрицу",
    "theme": "Матрицы",
    "text": `Дана система линейных уравнений: <br> 
             $$\\begin{cases} 2x + 3y = 8 \\\\ x - 2y = -3 \\end{cases}$$ <br> 
             Студент решает её матричным методом. В каком шаге его рассуждений содержится **ошибка**?`,
    "choices": [
        `<strong>Шаг 1 (Нахождение определителя):</strong><br>
         $$\\det(A) = \\begin{vmatrix} 2 & 3 \\\\ 1 & -2 \\end{vmatrix} = 2 \\cdot (-2) - 3 \\cdot 1 = -4 - 3 = -7$$`,
        
        `<strong>Шаг 2 (Обратная матрица):</strong><br>
         $$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix}$$`,
        
        `<strong>Шаг 3 (Умножение на B):</strong><br>
         $$X = A^{-1} \\cdot B = \\frac{1}{-7} \\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix} \\cdot \\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$$`,
        
        `<strong>Шаг 4 (Вычисление):</strong><br>
         $$X = \\frac{1}{-7} \\begin{pmatrix} (-2)\\cdot8 + (-3)\\cdot(-3) \\\\ (-1)\\cdot8 + 2\\cdot(-3) \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -16 - 9 \\\\ -8 - 6 \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -25 \\\\ -14 \\end{pmatrix}$$`,
        
        `<strong>Шаг 5 (Финальный ответ):</strong><br>
         $$X = \\begin{pmatrix} 25/7 \\\\ 2 \\end{pmatrix} \\approx (3.57, 2)$$`
    ],
    "answers": [
        `<strong>Шаг 4 (Вычисление):</strong><br>
         $$X = \\frac{1}{-7} \\begin{pmatrix} (-2)\\cdot8 + (-3)\\cdot(-3) \\\\ (-1)\\cdot8 + 2\\cdot(-3) \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -16 - 9 \\\\ -8 - 6 \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -25 \\\\ -14 \\end{pmatrix}$$`
    ],
    "hint": `<p><strong>Разбор ошибки:</strong></p>
             <p>В шаге 4 ошибка в знаке при вычислении первого элемента:</p>
             <p>Было: $$(-2)\\cdot8 + (-3)\\cdot(-3) = -16 - 9 = -25$$</p>
             <p>Правильно: $$(-2)\\cdot8 + (-3)\\cdot(-3) = -16 + 9 = -7$$</p>
             <p>Почему? $$(-3) \\cdot (-3) = +9$$, а не -9.</p>
             <p><strong>Правильное решение:</strong></p>
             <p>$$X = \\frac{1}{-7} \\begin{pmatrix} -16 + 9 \\\\ -8 - 6 \\end{pmatrix} = \\frac{1}{-7} \\begin{pmatrix} -7 \\\\ -14 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$</p>`
},


{
    "id": "matrix_steps_003",
    "type": "multiplechoices",
    "header": "Матрицы и системы",
    "title": "Порядок действий матричного метода",
    "theme": "Матрицы",
    "text": `Для решения системы $$\\begin{cases} 2x + 3y = 8 \\\\ x - 2y = -3 \\end{cases}$$ матричным методом, расположите шаги в правильном порядке:`,
    "choices": [
        "1. Записать систему в виде A·X = B<br>2. Найти A⁻¹<br>3. Умножить: X = A⁻¹·B<br>4. Найти det(A)",
        
        "1. Записать систему в виде A·X = B<br>2. Найти det(A)<br>3. Найти A⁻¹<br>4. Умножить: X = A⁻¹·B",
        
        "1. Найти det(A)<br>2. Записать систему в виде A·X = B<br>3. Найти A⁻¹<br>4. Умножить: X = A⁻¹·B",
        
        "1. Записать систему в виде A·X = B<br>2. Умножить: X = A⁻¹·B<br>3. Найти det(A)<br>4. Найти A⁻¹",
        
        "1. Найти A⁻¹<br>2. Записать систему в виде A·X = B<br>3. Найти det(A)<br>4. Умножить: X = A⁻¹·B"
    ],
    "answers": [
        "1. Записать систему в виде A·X = B<br>2. Найти det(A)<br>3. Найти A⁻¹<br>4. Умножить: X = A⁻¹·B"
    ],
    "hint": `<p><strong>Правильный алгоритм:</strong></p>
             <ol>
                 <li>Записать систему в матричном виде A·X = B</li>
                 <li>Проверить, что det(A) ≠ 0 (система имеет решение)</li>
                 <li>Найти обратную матрицу A⁻¹</li>
                 <li>Умножить: X = A⁻¹·B</li>
             </ol>
             <p>Нельзя найти A⁻¹, не зная det(A), так как A⁻¹ = (1/det(A))·A*</p>`
},

{
    "id": "matrix_inverse_004",
    "type": "multiplechoices",
    "header": "Матрицы и системы",
    "title": "Формула обратной матрицы 2x2",
    "theme": "Матрицы",
    "text": `Для матрицы $$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$ формула обратной матрицы: 
             $$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$.
             <br><br>Студент находит обратную матрицу для $$A = \\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix}$$.
             В каком варианте представлен <strong>правильный промежуточный результат</strong> ДО умножения на 1/det(A)?`,
    "choices": [
        "$$\\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix}$$",
        "$$\\begin{pmatrix} -2 & 3 \\\\ 1 & 2 \\end{pmatrix}$$",
        "$$\\begin{pmatrix} 2 & -3 \\\\ -1 & -2 \\end{pmatrix}$$",
        "$$\\begin{pmatrix} -2 & -3 \\\\ 1 & 2 \\end{pmatrix}$$",
        "$$\\begin{pmatrix} 2 & 3 \\\\ 1 & -2 \\end{pmatrix}$$"
    ],
    "answers": ["$$\\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix}$$"],
    "hint": `<p><strong>Правило для матрицы 2x2:</strong></p>
             <p>Для матрицы $$\\begin{pmatrix} \\color{red}{a} & \\color{blue}{b} \\\\ \\color{blue}{c} & \\color{red}{d} \\end{pmatrix}$$:</p>
             <ul>
                 <li>Меняем местами элементы на <strong class="text-danger">главной диагонали</strong> (a и d)</li>
                 <li>Меняем знаки у элементов на <strong class="text-primary">побочной диагонали</strong> (b и c)</li>
             </ul>
             <p>Получаем: $$\\begin{pmatrix} \\color{red}{d} & -\\color{blue}{b} \\\\ -\\color{blue}{c} & \\color{red}{a} \\end{pmatrix}$$</p>
             <p>Для нашей матрицы: $$\\begin{pmatrix} \\color{red}{2} & \\color{blue}{3} \\\\ \\color{blue}{1} & \\color{red}{-2} \\end{pmatrix} \\rightarrow \\begin{pmatrix} \\color{red}{-2} & -\\color{blue}{3} \\\\ -\\color{blue}{1} & \\color{red}{2} \\end{pmatrix} = \\begin{pmatrix} -2 & -3 \\\\ -1 & 2 \\end{pmatrix}$$</p>`
},

{
    "id": "matrix_det_005",
    "type": "multiplechoices",
    "header": "Матрицы и определители",
    "title": "Вычисление определителя матрицы 2x2",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$$
             <br>
             Чему равен определитель (детерминант) этой матрицы?`,
    "choices": [
        "$\\det(A) = 4 \\cdot 6 + 7 \\cdot 2 = 24 + 14 = 38$",
        "$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$",
        "$\\det(A) = 4 \\cdot 2 - 7 \\cdot 6 = 8 - 42 = -34$",
        "$\\det(A) = 4 \\cdot 7 - 2 \\cdot 6 = 28 - 12 = 16$",
        "$\\det(A) = 4 \\cdot 6 - 2 \\cdot 7 = 24 - 14 = 10$"
    ],
    "answers": ["$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$"],
    "hint": `<p><strong>Формула для матрицы 2x2:</strong></p>
             <p>Для матрицы $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$:</p>
             <p>$$\\det(A) = a \\cdot d - b \\cdot c$$</p>
             <p><strong>Важно:</strong> Из произведения элементов на <span style="color: green;">главной диагонали</span> (↘) вычитаем произведение элементов на <span style="color: red;">побочной диагонали</span> (↙).</p>
             <p>В нашем случае:</p>
             <p>$$\\det(A) = \\begin{vmatrix} \\color{green}{4} & \\color{red}{7} \\\\ \\color{red}{2} & \\color{green}{6} \\end{vmatrix} = \\color{green}{4} \\cdot \\color{green}{6} - \\color{red}{7} \\cdot \\color{red}{2} = 24 - 14 = 10$$</p>`
},


{
    "id": "matrix_det_006",
    "type": "multiplechoices",
    "header": "Матрицы и определители",
    "title": "Определитель матрицы с отрицательными числами",
    "theme": "Матрицы",
    "text": `Данa матрица:
             <br>
             $$B = \\begin{pmatrix} -3 & 5 \\\\ 2 & -4 \\end{pmatrix}$$
             <br>
             Найдите определитель этой матрицы.`,
    "choices": [
        "$\\det(B) = (-3) \\cdot (-4) - 5 \\cdot 2 = 12 - 10 = 2$",
        "$\\det(B) = (-3) \\cdot (-4) + 5 \\cdot 2 = 12 + 10 = 22$",
        "$\\det(B) = (-3) \\cdot 2 - 5 \\cdot (-4) = -6 + 20 = 14$",
        "$\\det(B) = (-3) \\cdot 5 - 2 \\cdot (-4) = -15 + 8 = -7$",
        "$\\det(B) = (-3) \\cdot (-4) - 2 \\cdot 5 = 12 - 10 = 2$"
    ],
    "answers": ["$\\det(B) = (-3) \\cdot (-4) - 5 \\cdot 2 = 12 - 10 = 2$"],
    "hint": `<p><strong>Формула для матрицы 2x2:</strong></p>
             <p>$$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = a \\cdot d - b \\cdot c$$</p>
             <p><strong>Пошаговое решение:</strong></p>
             <ol>
                 <li>Подставляем значения: a = -3, b = 5, c = 2, d = -4</li>
                 <li>Вычисляем: (-3) · (-4) - 5 · 2</li>
                 <li>Вспоминаем правило знаков: (-3) · (-4) = +12</li>
                 <li>12 - 10 = 2</li>
             </ol>
             <p><strong>Визуально:</strong></p>
             <p>$$\\begin{vmatrix} \\color{green}{-3} & \\color{red}{5} \\\\ \\color{red}{2} & \\color{green}{-4} \\end{vmatrix} = (\\color{green}{-3} \\cdot \\color{green}{-4}) - (\\color{red}{5} \\cdot \\color{red}{2}) = 12 - 10 = 2$$</p>`
},

{
    "id": "matrix_det_007",
    "type": "multiplechoices",
    "header": "Матрицы и определители",
    "title": "Определитель матрицы с переменными",
    "theme": "Матрицы",
    "text": `Данa матрица:
             <br>
             $$C = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$
             <br>
             Известно, что a = 2, b = 3, c = -1, d = 5.
             <br>
             Чему равен определитель?`,
    "choices": [
        "$\\det(C) = 2 \\cdot 5 - 3 \\cdot (-1) = 10 + 3 = 13$",
        "$\\det(C) = 2 \\cdot 5 + 3 \\cdot (-1) = 10 - 3 = 7$",
        "$\\det(C) = 2 \\cdot (-1) - 3 \\cdot 5 = -2 - 15 = -17$",
        "$\\det(C) = 2 \\cdot 3 - (-1) \\cdot 5 = 6 + 5 = 11$",
        "$\\det(C) = 2 \\cdot 5 - (-1) \\cdot 3 = 10 + 3 = 13$"
    ],
    "answers": ["$\\det(C) = 2 \\cdot 5 - 3 \\cdot (-1) = 10 + 3 = 13$"],
    "hint": `<p><strong>Формула:</strong> $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = a \\cdot d - b \\cdot c$$</p>
             <p><strong>Подстановка:</strong></p>
             <p>a = 2, b = 3, c = -1, d = 5</p>
             <p>$$\\det = 2 \\cdot 5 - 3 \\cdot (-1)$$</p>
             <p><strong>Внимание с знаками:</strong> $$3 \\cdot (-1) = -3$$, но перед этим произведением стоит знак минус:</p>
             <p>$$10 - (-3) = 10 + 3 = 13$$</p>`
},

{
    "id": "matrix_det_008",
    "type": "multiplechoices",
    "header": "Матрицы и определители",
    "title": "Свойства определителя",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}, \\quad \\det(A) = 10$$
             <br>
             Как изменится определитель, если поменять местами строки матрицы?
             <br>
             $$B = \\begin{pmatrix} 2 & 6 \\\\ 4 & 7 \\end{pmatrix}$$`,
    "choices": [
        "$\\det(B) = \\det(A) = 10$",
        "$\\det(B) = -\\det(A) = -10$",
        "$\\det(B) = 2 \\cdot \\det(A) = 20$",
        "$\\det(B) = \\frac{1}{2} \\cdot \\det(A) = 5$",
        "$\\det(B) = \\det(A)^2 = 100$"
    ],
    "answers": ["$\\det(B) = -\\det(A) = -10$"],
    "hint": `<p><strong>Важное свойство определителя:</strong></p>
             <p>При перестановке двух строк (или двух столбцов) матрицы, определитель <strong>меняет знак</strong> на противоположный.</p>
             <p><strong>Проверим вычислением:</strong></p>
             <p>$$\\det(B) = \\begin{vmatrix} 2 & 6 \\\\ 4 & 7 \\end{vmatrix} = 2 \\cdot 7 - 6 \\cdot 4 = 14 - 24 = -10$$</p>
             <p>Действительно, получили -10, что равно -det(A).</p>`
},

{
    "id": "matrix_inverse_009",
    "type": "multiplechoices",
    "header": "Матрицы и обратные матрицы",
    "title": "Нахождение обратной матрицы 2x2",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$A = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}$$
             <br>
             Найдите обратную матрицу <strong>A⁻¹</strong>.`,
    "choices": [
        "$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$",
        
        "$$A^{-1} = \\frac{1}{29} \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} \\frac{3}{29} & -\\frac{7}{29} \\\\ -\\frac{2}{29} & \\frac{5}{29} \\end{pmatrix}$$",
        
        "$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}$$",
        
        "$$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} -3 & 7 \\\\ 2 & -5 \\end{pmatrix}$$",
        
        "$$A^{-1} = \\frac{1}{15} \\begin{pmatrix} 3 & 7 \\\\ 2 & 5 \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{5} & \\frac{7}{15} \\\\ \\frac{2}{15} & \\frac{1}{3} \\end{pmatrix}$$"
    ],
    "answers": ["$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$"],
    "hint": `<p><strong>Алгоритм нахождения обратной матрицы 2x2:</strong></p>
             <p>Для матрицы $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$:</p>
             <ol>
                 <li><strong>Шаг 1:</strong> Находим определитель: $$\\det(A) = a \\cdot d - b \\cdot c$$</li>
                 <li><strong>Шаг 2:</strong> Меняем местами элементы на главной диагонали (a и d)</li>
                 <li><strong>Шаг 3:</strong> Меняем знаки у элементов на побочной диагонали (b и c)</li>
                 <li><strong>Шаг 4:</strong> Делим всё на определитель: $$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$</li>
             </ol>
             <p><strong>Решение для данной матрицы:</strong></p>
             <p>$$\\det(A) = 5 \\cdot 3 - 7 \\cdot 2 = 15 - 14 = 1$$</p>
             <p>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$</p>
             <p><strong>Проверка:</strong> $$A \\cdot A^{-1} = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$</p>`
},

{
    "id": "matrix_inverse_010",
    "type": "multiplechoices",
    "header": "Матрицы и обратные матрицы",
    "title": "Обратная матрица с дробями",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$B = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$$
             <br>
             Найдите обратную матрицу <strong>B⁻¹</strong>.`,
    "choices": [
        "$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -1.5 \\\\ -1 & 2 \\end{pmatrix}$$",
        
        "$$B^{-1} = \\frac{1}{14} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{7} & -\\frac{3}{14} \\\\ -\\frac{1}{7} & \\frac{2}{7} \\end{pmatrix}$$",
        
        "$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix} = \\begin{pmatrix} 2 & 1.5 \\\\ 1 & 1 \\end{pmatrix}$$",
        
        "$$B^{-1} = \\frac{1}{8} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 0.25 & -0.375 \\\\ -0.25 & 0.5 \\end{pmatrix}$$",
        
        "$$B^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix}$$"
    ],
    "answers": ["$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -1.5 \\\\ -1 & 2 \\end{pmatrix}$$"],
    "hint": `<p><strong>Пошаговое решение:</strong></p>
             <p>$$B = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$$</p>
             <p><strong>Шаг 1:</strong> Находим определитель:</p>
             <p>$$\\det(B) = 4 \\cdot 2 - 3 \\cdot 2 = 8 - 6 = 2$$</p>
             <p><strong>Шаг 2:</strong> Составляем матрицу из алгебраических дополнений:</p>
             <p>$$\\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix}$$</p>
             <p><strong>Шаг 3:</strong> Делим на определитель:</p>
             <p>$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -\\frac{3}{2} \\\\ -1 & 2 \\end{pmatrix}$$</p>
             <p><strong>Проверка:</strong> $$B \\cdot B^{-1} = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 & -1.5 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$</p>`
},

{
    "id": "matrix_inverse_011",
    "type": "multiplechoices",
    "header": "Матрицы и обратные матрицы",
    "title": "Поиск ошибки в обратной матрице",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$C = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$$
             <br>
             Студент нашел обратную матрицу:
             <br>
             $$C^{-1} = \\frac{1}{3} \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} \\frac{2}{3} & -\\frac{1}{3} \\\\ -\\frac{1}{3} & \\frac{2}{3} \\end{pmatrix}$$
             <br>
             В чем ошибка студента?`,
    "choices": [
        "<strong>Ошибки нет</strong> - это правильная обратная матрица",
        
        "<strong>Ошибка в определителе:</strong> det(C) = 2·2 - 1·1 = 4 - 1 = 3, а не 3",
        
        "<strong>Ошибка в знаках:</strong> нужно менять знаки у всех элементов",
        
        "<strong>Ошибка в формуле:</strong> обратная матрица находится делением исходной матрицы на определитель",
        
        "<strong>Ошибка в перестановке:</strong> нужно менять местами элементы на главной диагонали и менять знаки на побочной"
    ],
    "answers": ["<strong>Ошибки нет</strong> - это правильная обратная матрица"],
    "hint": `<p><strong>Проверим правильность:</strong></p>
             <p><strong>Шаг 1:</strong> Находим определитель:</p>
             <p>$$\\det(C) = 2 \\cdot 2 - 1 \\cdot 1 = 4 - 1 = 3$$ - верно</p>
             <p><strong>Шаг 2:</strong> По формуле для матрицы 2x2:</p>
             <p>$$C^{-1} = \\frac{1}{\\det(C)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{3} \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$$ - верно</p>
             <p><strong>Шаг 3:</strong> Проверка умножением:</p>
             <p>$$C \\cdot C^{-1} = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} \\cdot \\frac{1}{3} \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\frac{1}{3} \\begin{pmatrix} 4-1 & -2+2 \\\\ 2-2 & -1+4 \\end{pmatrix} = \\frac{1}{3} \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$</p>
             <p>Всё верно! Студент правильно нашел обратную матрицу.</p>`
},

{
    "id": "matrix_inverse_012",
    "type": "multiplechoices",
    "header": "Матрицы и обратные матрицы",
    "title": "Свойства обратной матрицы",
    "theme": "Матрицы",
    "text": `Дана матрица:
             <br>
             $$A = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}, \\quad A^{-1} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$
             <br>
             Чему равна обратная матрица для <strong>A⁻¹</strong>, то есть <strong>(A⁻¹)⁻¹</strong>?`,
    "choices": [
        "$$(A^{-1})^{-1} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$",
        
        "$$(A^{-1})^{-1} = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}$$",
        
        "$$(A^{-1})^{-1} = \\begin{pmatrix} 5 & -7 \\\\ -2 & 3 \\end{pmatrix}$$",
        
        "$$(A^{-1})^{-1} = \\begin{pmatrix} 3 & 7 \\\\ 2 & 5 \\end{pmatrix}$$",
        
        "$$(A^{-1})^{-1} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$"
    ],
    "answers": ["$$(A^{-1})^{-1} = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}$$"],
    "hint": `<p><strong>Важное свойство:</strong></p>
             <p>Для любой обратимой матрицы A выполняется:</p>
             <p>$$(A^{-1})^{-1} = A$$</p>
             <p>Обратная матрица к обратной даёт исходную матрицу.</p>
             <p><strong>Проверим вычислением:</strong></p>
             <p>Для матрицы $$A^{-1} = \\begin{pmatrix} 3 & -7 \\\\ -2 & 5 \\end{pmatrix}$$:</p>
             <p>$$\\det(A^{-1}) = 3 \\cdot 5 - (-7) \\cdot (-2) = 15 - 14 = 1$$</p>
             <p>$$(A^{-1})^{-1} = \\frac{1}{1} \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix} = \\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix} = A$$</p>`
},



  {
  "id": "system016",
  "type": "mathwithrandomnumber",
  "header": "Системы уравнений",
  "title": "Сбалансированная система",
  "theme": "Системы уравнений",
  "text": "Решите систему уравнений: $$\\begin{cases} 5x + 2y = {= {var1-10}*7} \\\\ 3x - 2y = {var1-10} \\end{cases}$$ Найдите y",
  "answer": "{var1-10}",
  "hint": "<p><strong>Метод сложения</strong></p><p>Складываем уравнения: <br>8x = ({var1-10} * 7) + ({var1-10}) = {= ({var1-10}*7) + ({var1-10})} = {= {var1-10}*8}</p><p>x = {var1-10}</p><p>Из первого уравнения: <br>2y = ({var1-10} * 7) - 5 * {var1-10} = {= ({var1-10}*7) - (5*({var1-10}))} = {= {var1-10}*2}</p><p>y = {var1-10}</p><p><strong>Ответ: y = {var1-10}</strong></p>",
  "randomfrom": [2, 3, 4, 5]
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
    "id": "derivative_sign001",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Линейная функция с положительным коэффициентом",
    "theme": "Производная",
    "text": "Дан график функции $$y = 2x + 1$$. Определите знак производной в любой точке.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-primary'>Теория</span></p><p>Для линейной функции $$y = kx + b$$ производная $$y' = k$$ постоянна во всех точках.</p><p>Здесь $$k = 2 > 0$$, значит производная <strong>положительна</strong> в любой точке.</p>"
  },
  {
    "id": "derivative_sign002",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Линейная функция с отрицательным коэффициентом",
    "theme": "Производная",
    "text": "Дан график функции $$y = -3x + 5$$. Определите знак производной в любой точке.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>Производная линейной функции $$y = kx + b$$ равна $$k$$.</p><p>Здесь $$k = -3 < 0$$, поэтому производная <strong>отрицательна</strong> во всех точках.</p>"
  },
  {
    "id": "derivative_sign003",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Горизонтальная прямая",
    "theme": "Производная",
    "text": "Дан график функции $$y = 4$$. Определите знак производной в любой точке.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Равна нулю"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>Горизонтальная прямая имеет постоянное значение. Её производная равна нулю во всех точках.</p><p>$$y' = 0$$.</p>"
  },
  {
    "id": "derivative_sign004",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Парабола ветвями вверх (левая ветвь)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^2$$. Определите знак производной при $$x < 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Зависит от конкретного x"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>Производная $$y' = 2x$$.</p><p>При $$x < 0$$: $$2x < 0$$, значит производная <strong>отрицательна</strong>.</p>"
  },
  {
    "id": "derivative_sign005",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Парабола ветвями вверх (правая ветвь)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^2$$. Определите знак производной при $$x > 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Зависит от конкретного x"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y' = 2x$$.</p><p>При $$x > 0$$: $$2x > 0$$, значит производная <strong>положительна</strong>.</p>"
  },
  {
    "id": "derivative_sign006",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Парабола ветвями вверх (вершина)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^2$$. Определите знак производной при $$x = 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Равна нулю"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>В вершине параболы касательная горизонтальна.</p><p>$$y' = 2x$$, при $$x=0$$: $$y'(0) = 0$$.</p>"
  },
  {
    "id": "derivative_sign007",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубическая парабола (отрицательная область)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^3$$. Определите знак производной при $$x < 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>Производная $$y' = 3x^2$$ всегда неотрицательна.</p><p>При $$x < 0$$: $$3x^2 > 0$$, значит производная <strong>положительна</strong>.</p>"
  },
  {
    "id": "derivative_sign008",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубическая парабола (положительная область)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^3$$. Определите знак производной при $$x > 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>$$y' = 3x^2$$.</p><p>При $$x > 0$$: $$3x^2 > 0$$, значит производная <strong>положительна</strong>.</p>"
  },
  {
    "id": "derivative_sign009",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубическая парабола (точка перегиба)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^3$$. Определите знак производной при $$x = 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Равна нулю"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y' = 3x^2$$.</p><p>При $$x = 0$$: $$3 \\cdot 0^2 = 0$$.</p><p>В точке перегиба касательная горизонтальна.</p>"
  },
  {
    "id": "derivative_sign010",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Гипербола (положительная ветвь)",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\frac{1}{x}$$ при $$x > 0$$. Определите знак производной.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>Производная $$y' = -\\frac{1}{x^2}$$.</p><p>При любом $$x \\neq 0$$: $$-\\frac{1}{x^2} < 0$$.</p><p>Значит производная <strong>отрицательна</strong> на всей области определения.</p>"
  },
  {
    "id": "derivative_sign011",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Гипербола (отрицательная ветвь)",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\frac{1}{x}$$ при $$x < 0$$. Определите знак производной.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y' = -\\frac{1}{x^2}$$.</p><p>Квадрат числа всегда положителен, поэтому $$-\\frac{1}{x^2} < 0$$ для любого $$x \\neq 0$$.</p><p>Производная <strong>отрицательна</strong> и при $$x < 0$$ тоже.</p>"
  },
  {
    "id": "derivative_sign012",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Квадратный корень",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\sqrt{x}$$ при $$x > 0$$. Определите знак производной.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>$$y = x^{1/2}$$, производная $$y' = \\frac{1}{2\\sqrt{x}}$$.</p><p>При $$x > 0$$: $$\\frac{1}{2\\sqrt{x}} > 0$$.</p><p>Функция возрастает, производная <strong>положительна</strong>.</p>"
  },
  {
    "id": "derivative_sign013",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубический корень (отрицательная область)",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\sqrt[3]{x}$$. Определите знак производной при $$x < 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y = x^{1/3}$$, производная $$y' = \\frac{1}{3\\sqrt[3]{x^2}}$$.</p><p>$$\\sqrt[3]{x^2} > 0$$ для всех $$x \\neq 0$$.</p><p>Значит производная <strong>положительна</strong> при любых $$x \\neq 0$$.</p>"
  },
  {
    "id": "derivative_sign014",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубический корень (положительная область)",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\sqrt[3]{x}$$. Определите знак производной при $$x > 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Положительная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>$$y' = \\frac{1}{3\\sqrt[3]{x^2}}$$.</p><p>Знаменатель всегда положителен, поэтому $$y' > 0$$.</p><p>Производная <strong>положительна</strong>.</p>"
  },
  {
    "id": "derivative_sign015",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Кубический корень (ноль)",
    "theme": "Производная",
    "text": "Дан график функции $$y = \\sqrt[3]{x}$$. Определите знак производной при $$x = 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Не определена"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>Производная $$y' = \\frac{1}{3\\sqrt[3]{x^2}}$$.</p><p>При $$x = 0$$ знаменатель равен нулю, значит производная <strong>не определена</strong> (стремится к бесконечности).</p><p>Касательная в этой точке вертикальна.</p>"
  },
  {
    "id": "derivative_sign016",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Сумма функций",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^2 + x$$. Определите знак производной при $$x = -1$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>$$y' = 2x + 1$$.</p><p>При $$x = -1$$: $$2\\cdot(-1) + 1 = -2 + 1 = -1 < 0$$.</p><p>Производная <strong>отрицательна</strong>.</p>"
  },
  {
    "id": "derivative_sign017",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Сумма функций (ноль)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^2 + x$$. Определите знак производной при $$x = -0.5$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Равна нулю"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y' = 2x + 1$$.</p><p>При $$x = -0.5$$: $$2\\cdot(-0.5) + 1 = -1 + 1 = 0$$.</p><p>В этой точке касательная горизонтальна.</p>"
  },
  {
    "id": "derivative_sign018",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Степенная функция (четная степень)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^4$$. Определите знак производной при $$x < 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>Производная $$y' = 4x^3$$.</p><p>При $$x < 0$$: $$x^3 < 0$$, значит $$4x^3 < 0$$.</p><p>Производная <strong>отрицательна</strong>.</p>"
  },
  {
    "id": "derivative_sign019",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Степенная функция (четная степень, ноль)",
    "theme": "Производная",
    "text": "Дан график функции $$y = x^4$$. Определите знак производной при $$x = 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Равна нулю"],
    "hint": "<p><span class='badge bg-primary'>Подсказка</span></p><p>$$y' = 4x^3$$.</p><p>При $$x = 0$$: $$4\\cdot 0^3 = 0$$.</p>"
  },
  {
    "id": "derivative_sign020",
    "type": "multiplechoices",
    "header": "Знак производной",
    "title": "Обобщение",
    "theme": "Производная",
    "text": "Дан график функции $$y = |x|$$. Определите знак производной при $$x < 0$$.",
    "choices": [
      "Положительная",
      "Отрицательная", 
      "Равна нулю",
      "Не определена"
    ],
    "answers": ["Отрицательная"],
    "hint": "<p><span class='badge bg-success'>Решение</span></p><p>При $$x < 0$$: $$y = -x$$, производная $$y' = -1$$.</p><p>Значит производная <strong>отрицательна</strong>.</p>"
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
    "answer": "({var1-10}+13)/3",
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


  
]

window.quizesSets = quizesSets;
