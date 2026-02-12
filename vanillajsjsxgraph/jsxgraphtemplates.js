// jsxgraphtemplates.js
// Библиотека шаблонов для визуализации с помощью JSXGraph

/**
 * Инициализирует JSXGraph график в указанном элементе
 * @param {string} containerId - ID элемента-контейнера
 * @param {string} graphType - Тип графика ('pascal-triangle', 'normal-distribution', и т.д.)
 * @param {Object} params - Параметры графика
 *  
 */

/**
 * Создает дерево вероятностей
 */
function createProbabilityTree(containerId, width, height, params) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 3, 2, -2],
        axis: false,
        grid: false,
        showNavigation: false,
        showCopyright: false
    });

    const branches = params.branches || [];
    let y = 2;
    let xStart = -1.5;
    let xEnd = 1.5;

    // Корень
    board.create('point', [0, 2.5], {
        size: 4,
        color: '#007bff',
        fixed: true
    });
    board.create('text', [0, 2.8, 'Начало'], {
        fontSize: 12,
        color: '#007bff'
    });

    // Рисуем ветви
    branches.forEach((branch, index) => {
        const xPos = xStart + (index + 0.5) * (xEnd - xStart) / (branches.length + 1);

        // Узел первого уровня
        board.create('point', [xPos, 1.5], {
            size: 3,
            color: index === 0 ? '#28a745' : '#dc3545',
            fixed: true
        });

        // Линия от корня
        board.create('line', [[0, 2.5], [xPos, 1.5]], {
            strokeColor: index === 0 ? '#28a745' : '#dc3545',
            strokeWidth: 2
        });

        // Вероятность на ребре
        board.create('text', [(0 + xPos) / 2, 2, `p=${branch.probability}`], {
            fontSize: 10,
            color: '#6c757d'
        });

        // Метка узла
        board.create('text', [xPos, 1.2, branch.label], {
            fontSize: 12,
            fontWeight: 'bold',
            color: index === 0 ? '#28a745' : '#dc3545'
        });

        // Дети
        if (branch.children) {
            branch.children.forEach((child, childIndex) => {
                const childX = xPos - 0.3 + childIndex * 0.6;

                board.create('point', [childX, 0.5], {
                    size: 2,
                    color: '#ffc107',
                    fixed: true
                });

                board.create('line', [[xPos, 1.5], [childX, 0.5]], {
                    strokeColor: '#ffc107',
                    strokeWidth: 1.5
                });

                board.create('text', [childX, 0.2, child.label], {
                    fontSize: 10,
                    color: '#856404'
                });

                board.create('text', [(xPos + childX) / 2, 1, `p=${child.probability}`], {
                    fontSize: 9,
                    color: '#6c757d'
                });
            });
        }
    });

    return board;
}

/**
 * Создает треугольник Паскаля
 */
function createPascalTriangle(containerId, width, height, params) {
    const n = params.n || 5; // Количество строк
    const highlightRow = params.highlightRow || n; // Строка для подсветки (0-based)
    const highlightCol = params.highlightCol || 2; // Столбец для подсветки (0-based)

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 3, 3, -1],
        axis: false,
        grid: false,
        showNavigation: false,
        showCopyright: false
    });

    // Генерируем биномиальные коэффициенты
    const coefficients = generatePascalsTriangle(n);

    // Координаты для отрисовки
    const points = [];
    for (let row = 0; row <= n; row++) {
        for (let col = 0; col <= row; col++) {
            const x = (col - row / 2) * 0.7;
            const y = 2.5 - row * 0.5;
            const value = coefficients[row][col];

            points.push({
                x, y, value,
                row, col,
                highlight: (row === highlightRow && col === highlightCol)
            });
        }
    }

    // Рисуем числа
    points.forEach(point => {
        const text = board.create('text', [point.x, point.y, point.value.toString()], {
            fontSize: point.highlight ? 16 : 14,
            color: point.highlight ? '#dc3545' : '#000'
        });

        // Подсвечиваем выбранный коэффициент
        if (point.highlight) {
            board.create('circle', [[point.x, point.y], 0.3], {
                strokeColor: '#dc3545',
                fillColor: 'none',
                strokeWidth: 2,
                dash: 2
            });

            // Подпись
            board.create('text', [point.x, point.y - 0.4, `C(${point.row},${point.col})`], {
                fontSize: 12,
                color: '#dc3545'
            });
        }
    });

    // Линии, соединяющие числа
    points.forEach(point => {
        if (point.row < n) { // Не для последней строки
            // Ищем два числа под текущим
            const leftChild = points.find(p =>
                p.row === point.row + 1 && p.col === point.col
            );
            const rightChild = points.find(p =>
                p.row === point.row + 1 && p.col === point.col + 1
            );

            if (leftChild && rightChild) {
                // Линия к левому потомку
                board.create('line', [[point.x, point.y], [leftChild.x, leftChild.y]], {
                    strokeColor: '#ccc',
                    strokeWidth: 1,
                    dash: 1
                });

                // Линия к правому потомку
                board.create('line', [[point.x, point.y], [rightChild.x, rightChild.y]], {
                    strokeColor: '#ccc',
                    strokeWidth: 1,
                    dash: 1
                });
            }
        }
    });

    // Добавляем подписи строк
    for (let row = 0; row <= n; row++) {
        board.create('text', [-3.2, 2.5 - row * 0.5, `n=${row}`], {
            fontSize: 12,
            color: '#666'
        });
    }

    // Добавляем формулу
    if (params.showFormula) {
        board.create('text', [0, -0.8, `C(${highlightRow},${highlightCol}) = ${coefficients[highlightRow][highlightCol]}`], {
            fontSize: 14,
            color: '#007bff'
        });
    }

    return board;
}

/**
 * Генерирует треугольник Паскаля
 */
function generatePascalsTriangle(n) {
    const triangle = [];
    for (let i = 0; i <= n; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        triangle[i][i] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
}

/**
 * Создает график нормального распределения
 */
function createNormalDistribution(containerId, width, height, params) {
    const mean = params.mean || 0;
    const stdDev = params.stdDev || 1;
    const showArea = params.showArea || null;
    const xMin = params.xMin || mean - 4 * stdDev;
    const xMax = params.xMax || mean + 4 * stdDev;
    
    // Вычисляем максимальное значение плотности в точке mean
    const maxDensity = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [xMin, maxDensity * 1.2, xMax, 0],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });
    
    // Функция плотности нормального распределения
    function normalPDF(x) {
        return Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) / (stdDev * Math.sqrt(2 * Math.PI));
    }
    
    // Создаем кривую нормального распределения
    const points = [];
    for (let x = xMin; x <= xMax; x += (xMax - xMin) / 200) {
        points.push([x, normalPDF(x)]);
    }
    
    const curve = board.create('curve', points, {
        strokeColor: '#007bff',
        strokeWidth: 3,
        strokeOpacity: 0.8,
        name: `N(${mean}, ${stdDev}²)`
    });
    
    // Добавляем вертикальную линию в точке среднего
    board.create('line', [[mean, 0], [mean, normalPDF(mean)]], {
        strokeColor: '#28a745',
        strokeWidth: 2,
        dash: 2
    });
    
    // Подпись среднего
    board.create('text', [mean, normalPDF(mean) * 1.1, `μ = ${mean}`], {
        fontSize: 12,
        color: '#28a745',
        anchorX: 'middle'
    });
    
    // Закрашиваем область если нужно
    if (showArea && Array.isArray(showArea) && showArea.length === 2) {
        const [a, b] = showArea;
        const areaPoints = [[a, 0]];
        
        for (let x = a; x <= b; x += (b - a) / 50) {
            areaPoints.push([x, normalPDF(x)]);
        }
        areaPoints.push([b, 0]);
        
        // Вычисляем площадь (приближенно)
        let area = 0;
        for (let x = a; x <= b; x += (b - a) / 100) {
            area += normalPDF(x) * (b - a) / 100;
        }
        
        board.create('polygon', areaPoints, {
            fillColor: 'rgba(0, 123, 255, 0.3)',
            strokeColor: 'none'
        });
        
        // Вертикальные линии
        board.create('line', [[a, 0], [a, normalPDF(a)]], {
            strokeColor: '#dc3545',
            strokeWidth: 2,
            dash: 2
        });
        
        board.create('line', [[b, 0], [b, normalPDF(b)]], {
            strokeColor: '#dc3545',
            strokeWidth: 2,
            dash: 2
        });
        
        // Подписи
        board.create('text', [a, -maxDensity * 0.1, `${a}`], {
            fontSize: 11,
            color: '#dc3545',
            anchorX: 'middle'
        });
        
        board.create('text', [b, -maxDensity * 0.1, `${b}`], {
            fontSize: 11,
            color: '#dc3545',
            anchorX: 'middle'
        });
        
        // Подпись площади
        board.create('text', [(a + b) / 2, normalPDF(mean) * 0.5, `${(area * 100).toFixed(1)}%`], {
            fontSize: 14,
            color: '#007bff',
            anchorX: 'middle',
            fontWeight: 'bold'
        });
    }
    
    // Добавляем подписи стандартных отклонений
    for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const x = mean + i * stdDev;
        if (x >= xMin && x <= xMax) {
            board.create('point', [x, 0], {
                size: 2,
                color: '#6c757d',
                fixed: true
            });
            
            board.create('text', [x, -maxDensity * 0.15, `${i}σ`], {
                fontSize: 10,
                color: '#6c757d',
                anchorX: 'middle'
            });
        }
    }
    
    // Добавляем информацию о параметрах
    board.create('text', [xMin + (xMax - xMin) * 0.1, maxDensity * 1.1, 
        `N(μ=${mean}, σ=${stdDev})`], {
        fontSize: 14,
        color: '#007bff',
        fontWeight: 'bold'
    });
    
    return board;
}

/**
 * Создает геометрическое распределение
 */
function createGeometricDistribution(containerId, width, height, params) {
    const p = params.p || 0.3;
    const maxK = params.maxK || 10;

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-1, 0.4, maxK + 1, -0.05],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    // Функция геометрического распределения
    function geometricPMF(k, prob = p) {
        return prob * Math.pow(1 - prob, k - 1);
    }

    // Создаем точки
    for (let k = 1; k <= maxK; k++) {
        const prob = geometricPMF(k);
        board.create('point', [k, prob], {
            size: 4,
            color: '#007bff',
            name: `P(X=${k})=${prob.toFixed(3)}`
        });

        // Столбцы
        board.create('line', [[k, 0], [k, prob]], {
            strokeColor: '#007bff',
            strokeWidth: 2
        });
    }

    // Формула
    board.create('text', [maxK / 2, 0.35, `P(X=k) = p(1-p)^{k-1}, p=${p}`], {
        fontSize: 12,
        color: '#6c757d'
    });

    return board;
}

/**
 * Создает диаграмму Эйлера
 */
function createEulerDiagram(containerId, width, height, params) {
    const pA = params.pA || 0.4;
    const pB = params.pB || 0.3;
    const pIntersection = params.pIntersection || 0.1;

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 2, 2, -1.5],
        axis: false,
        grid: false,
        showNavigation: false,
        showCopyright: false
    });

    // Круги
    const circleA = board.create('circle', [[-0.5, 0], 1], {
        strokeColor: '#007bff',
        fillColor: 'rgba(0, 123, 255, 0.2)',
        strokeWidth: 2,
        label: { text: 'A', fontSize: 16, color: '#007bff' }
    });

    const circleB = board.create('circle', [[0.5, 0], 1], {
        strokeColor: '#dc3545',
        fillColor: 'rgba(220, 53, 69, 0.2)',
        strokeWidth: 2,
        label: { text: 'B', fontSize: 16, color: '#dc3545' }
    });

    // Подписи вероятностей
    board.create('text', [-1.2, 0.5, `P(A)=${pA}`], {
        fontSize: 12,
        color: '#007bff'
    });

    board.create('text', [1.2, 0.5, `P(B)=${pB}`], {
        fontSize: 12,
        color: '#dc3545'
    });

    board.create('text', [0, 0, `P(A∩B)=${pIntersection}`], {
        fontSize: 12,
        color: '#28a745'
    });

    board.create('text', [0, -1.2, `P(A∪B)=${(pA + pB - pIntersection).toFixed(2)}`], {
        fontSize: 12,
        color: '#6c757d'
    });

    return board;
}

/**
 * Создает сравнение дисперсий
 */
function createVarianceComparison(containerId, width, height, params) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [0, 0.5, 10, -0.05],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    // Функция для создания нормального распределения с заданным σ
    function createDistribution(mean, sigma, color, label) {
        const points = [];
        for (let x = 0; x <= 10; x += 0.2) {
            const y = Math.exp(-0.5 * ((x - mean) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
            points.push([x, y]);
        }

        board.create('curve', points, {
            strokeColor: color,
            strokeWidth: 2,
            label: { text: label, fontSize: 12 }
        });
    }

    // Создаем распределения с разными σ
    createDistribution(5, 1, '#007bff', 'σ=1 (узкое)');
    createDistribution(5, 2.5, '#dc3545', 'σ=2.5 (широкое)');

    board.create('text', [5, 0.45, 'Сравнение дисперсий'], {
        fontSize: 14,
        color: '#6c757d'
    });

    return board;
}

/**
 * Создает гистограмму
 */
function createHistogram(containerId, width, height, params) {
    const data = params.data || [12, 15, 18, 22, 25, 28, 30];
    const bins = params.bins || 5;

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [0, Math.max(...data) + 5, data.length + 1, -2],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    // Создаем столбцы гистограммы
    data.forEach((value, index) => {
        const x = index + 0.5;

        // Столбец
        const rect = board.create('polygon', [
            [index, 0],
            [index + 1, 0],
            [index + 1, value],
            [index, value]
        ], {
            fillColor: index % 2 === 0 ? '#007bff' : '#28a745',
            fillOpacity: 0.6,
            strokeColor: '#333',
            strokeWidth: 1
        });

        // Подпись значения
        board.create('text', [x, value + 1, value.toString()], {
            fontSize: 10
        });
    });

    board.create('text', [data.length / 2, -1.5, 'Гистограмма распределения данных'], {
        fontSize: 12,
        color: '#6c757d'
    });

    return board;
}

/**
 * Создает scatter plot
 */
function createScatterPlot(containerId, width, height, params) {
    const data = params.data || [
        [1, 2], [2, 3], [3, 5], [4, 4], [5, 6],
        [6, 5], [7, 8], [8, 7], [9, 9], [10, 10]
    ];

    const xValues = data.map(d => d[0]);
    const yValues = data.map(d => d[1]);

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [
            Math.min(...xValues) - 1,
            Math.max(...yValues) + 1,
            Math.max(...xValues) + 1,
            Math.min(...yValues) - 1
        ],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    // Создаем точки
    data.forEach((point, index) => {
        board.create('point', point, {
            size: 3,
            color: '#007bff',
            name: `(${point[0]}, ${point[1]})`
        });
    });

    // Линия регрессии (если есть)
    if (params.showRegression) {
        // Простая линейная регрессия
        const n = data.length;
        const sumX = xValues.reduce((a, b) => a + b, 0);
        const sumY = yValues.reduce((a, b) => a + b, 0);
        const sumXY = data.reduce((sum, [x, y]) => sum + x * y, 0);
        const sumX2 = xValues.reduce((sum, x) => sum + x * x, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const regressionLine = board.create('line', [
            [Math.min(...xValues), slope * Math.min(...xValues) + intercept],
            [Math.max(...xValues), slope * Math.max(...xValues) + intercept]
        ], {
            strokeColor: '#dc3545',
            strokeWidth: 2,
            dash: 2,
            label: { text: `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`, fontSize: 12 }
        });
    }

    return board;
}

/**
 * Создает биномиальное распределение
 */
function createBinomialDistribution(containerId, width, height, params) {
    const n = params.n || 10;
    const p = params.p || 0.5;

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-1, 0.4, n + 1, -0.05],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    // Функция биномиального распределения
    function binomialPMF(k, n, p) {
        // C(n,k) * p^k * (1-p)^(n-k)
        const comb = factorial(n) / (factorial(k) * factorial(n - k));
        return comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }

    function factorial(num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    // Создаем точки
    for (let k = 0; k <= n; k++) {
        const prob = binomialPMF(k, n, p);
        board.create('point', [k, prob], {
            size: 4,
            color: '#007bff',
            name: `P(X=${k})=${prob.toFixed(3)}`
        });

        // Столбцы
        board.create('line', [[k, 0], [k, prob]], {
            strokeColor: '#007bff',
            strokeWidth: 2
        });
    }

    // Формула
    board.create('text', [n / 2, 0.35, `Bin(${n}, ${p})`], {
        fontSize: 12,
        color: '#6c757d'
    });

    return board;
}

/**
 * Создает box plot
 */
function createBoxPlot(containerId, width, height, params) {
    const data = params.data || [10, 15, 20, 25, 30, 35, 40, 45, 50];

    // Вычисляем статистики
    data.sort((a, b) => a - b);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const q1 = data[Math.floor(data.length * 0.25)];
    const median = data[Math.floor(data.length * 0.5)];
    const q3 = data[Math.floor(data.length * 0.75)];

    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [min - 5, 2, max + 5, -2],
        axis: true,
        grid: true,
        showNavigation: false,
        showCopyright: false
    });

    const y = 0;

    // Минимум и максимум
    board.create('line', [[min, y], [max, y]], {
        strokeColor: '#333',
        strokeWidth: 2
    });

    // Усы
    board.create('line', [[min, y - 0.2], [min, y + 0.2]], {
        strokeColor: '#333',
        strokeWidth: 2
    });

    board.create('line', [[max, y - 0.2], [max, y + 0.2]], {
        strokeColor: '#333',
        strokeWidth: 2
    });

    // Box
    board.create('polygon', [
        [q1, y - 0.5],
        [q3, y - 0.5],
        [q3, y + 0.5],
        [q1, y + 0.5]
    ], {
        fillColor: 'rgba(0, 123, 255, 0.3)',
        strokeColor: '#007bff',
        strokeWidth: 2
    });

    // Медиана
    board.create('line', [[median, y - 0.5], [median, y + 0.5]], {
        strokeColor: '#dc3545',
        strokeWidth: 2
    });

    // Подписи
    board.create('text', [min, y - 1, `min=${min}`], { fontSize: 10 });
    board.create('text', [q1, y - 1, `Q1=${q1}`], { fontSize: 10 });
    board.create('text', [median, y + 1.2, `median=${median}`], { fontSize: 10, color: '#dc3545' });
    board.create('text', [q3, y - 1, `Q3=${q3}`], { fontSize: 10 });
    board.create('text', [max, y - 1, `max=${max}`], { fontSize: 10 });

    // Все точки данных
    data.forEach(value => {
        board.create('point', [value, y], {
            size: 2,
            color: '#666'
        });
    });

    return board;
}


function initJSXGraph(containerId, graphType, params = {}) {
    if (!containerId || !graphType) {
        console.error('Не указан containerId или graphType');
        return null;
    }

    // Получаем элемент контейнера
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Элемент с ID "${containerId}" не найден`);
        return null;
    }

    // Очищаем контейнер
    container.innerHTML = '';

    // Определяем размеры контейнера
    const width = container.offsetWidth || 400;
    const height = container.offsetHeight || 300;

    let board;

    switch (graphType.toLowerCase()) {
        case 'pascal-triangle':
            board = createPascalTriangle(containerId, width, height, params);
            break;

        case 'normal-distribution':
            board = createNormalDistribution(containerId, width, height, params);
            break;

        case 'geometric-distribution':
            board = createGeometricDistribution(containerId, width, height, params);
            break;

        case 'euler-diagram':
            board = createEulerDiagram(containerId, width, height, params);
            break;

        case 'variance-comparison':
            board = createVarianceComparison(containerId, width, height, params);
            break;

        case 'histogram':
            board = createHistogram(containerId, width, height, params);
            break;

        case 'scatter-plot':
            board = createScatterPlot(containerId, width, height, params);
            break;

        case 'binomial-distribution':
            board = createBinomialDistribution(containerId, width, height, params);
            break;

        case 'box-plot':
            board = createBoxPlot(containerId, width, height, params);
            break;

        case "probability-tree":
            board = createProbabilityTree(containerId, width, height, params);
            break;


        default:
            console.error(`Неизвестный тип графика: ${graphType}`);
            return null;
    }

    return board;
}

// Экспортируем функцию для использования в других файлах
if (typeof window !== 'undefined') {
    window.initJSXGraph = initJSXGraph;
    window.JSXGraphTemplates = {
        initJSXGraph,
        createPascalTriangle,
        createNormalDistribution,
        createGeometricDistribution,
        createEulerDiagram,
        createVarianceComparison,
        createHistogram,
        createScatterPlot,
        createBinomialDistribution,
        createBoxPlot
    };
}