const colors = {
    secondary: '#6c757d',
    danger: '#dc3545',
    primary: '#007bff',
    success: '#28a745',
    yellow: '#ffc107'
};

style = {
    width: "100%",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "5px",
}

let boardConfig = {
    boundingbox: [-1, 5, 5, -1],
    axis: true,
    grid: true,
    showNavigation: false,
    showCopyright: false,
}

function regressionPointsGraph(board) {
    // Данные: (выручка, затраты) - обе переменные в пределах 1-5
    var data = [
        [1.0, 1.2],   // выручка 1.0, затраты 1.2
        [1.5, 1.6],   // выручка 1.5, затраты 1.6
        [2.0, 2.1],   // выручка 2.0, затраты 2.1
        [2.5, 2.4],   // выручка 2.5, затраты 2.4
        [3.0, 2.9],   // выручка 3.0, затраты 2.9
        [3.2, 3.3],   // выручка 3.2, затраты 3.3 (выброс)
        [3.8, 3.7],   // выручка 3.8, затраты 3.7
        [4.0, 3.9],   // выручка 4.0, затраты 3.9
        [4.5, 4.3],   // выручка 4.5, затраты 4.3
        [5.0, 4.8]    // выручка 5.0, затраты 4.8
    ];
    
    // Расчёт коэффициентов линейной регрессии
    var n = data.length;
    var sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    
    for (var i = 0; i < n; i++) {
        var x = data[i][0];
        var y = data[i][1];
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
    }
    
    var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;
    
    // Расчёт коэффициента корреляции R²
    var meanX = sumX / n;
    var meanY = sumY / n;
    var num = 0, denX = 0, denY = 0;
    for (var i = 0; i < n; i++) {
        var dx = data[i][0] - meanX;
        var dy = data[i][1] - meanY;
        num += dx * dy;
        denX += dx * dx;
        denY += dy * dy;
    }
    var r = num / Math.sqrt(denX * denY);
    var r2 = (r * r).toFixed(4);
    
    // Добавляем точки
    var points = [];
    for (var i = 0; i < n; i++) {
        points.push(board.create('point', [data[i][0], data[i][1]], {
            name: '',
            color: colors.primary,
            size: 4,
            strokeColor: colors.primary,
            fillColor: colors.primary,
            highlightStrokeColor: colors.danger,
            highlightFillColor: colors.danger
        }));
    }
    
    // Добавляем линию регрессии
    var line = board.create('functiongraph', [function(x) { return slope * x + intercept; }], {
        strokeColor: colors.secondary,
        strokeWidth: 3,
        dash: 0
    });
    
    // Уравнение регрессии на графике
    board.create('text', [1.2, 4.8, 'Затраты = ' + slope.toFixed(3) + ' × Выручка + ' + intercept.toFixed(2)], {
        fontSize: 12,
        color: colors.secondary,
        fontWeight: 'bold'
    });
    
    // R² на графике
    board.create('text', [1.2, 4.5, 'R² = ' + r2 + ' (' + (r2 * 100).toFixed(1) + '%)'], {
        fontSize: 11,
        color: colors.gray
    });
    
    // Подписи осей
    board.create('text', [5.2, 0.8, 'Выручка'], {
        fontSize: 12,
        color: colors.gray
    });
    
    board.create('text', [0.5, 5.0, 'Затраты'], {
        fontSize: 12,
        color: colors.gray,
        rotate: 90
    });
    
    return {
        style, boardConfig: { ...boardConfig, boundingbox: [-1, 6, 6, -1], } 
      //  ...boardConfig,
      //  style: 'scatter',
        // boardConfig: {
       //      boundingbox: [0.5, 5.5, 5.5, 0.5],
        //     axis: true,
        //     grid: true,
        //     pan: { enabled: true },
        //     zoom: { enabled: true, factorX: 1.2, factorY: 1.2 }
        // }
    };
}

function costsRevenueGraph(board) {
    // Данные: (выручка, затраты)
    var x1 = 10, y1 = 6;
    var x2 = 12, y2 = 7;
    
    // Угловой коэффициент и свободный член
    var a = (y2 - y1) / (x2 - x1); // a = 0.5
    var b = y1 - a * x1;           // b = 1
    
    // Точки (выручка, затраты)
    var point1 = board.create('point', [x1, y1], {
        name: 'A',
        color: colors.primary,
        size: 4,
        label: { offset: [5, -10], fontSize: 14 }
    });
    
    var point2 = board.create('point', [x2, y2], {
        name: 'B',
        color: colors.primary,
        size: 4,
        label: { offset: [5, -10], fontSize: 14 }
    });
    
    // Точка пересечения с осью Y (постоянные затраты)
    var pointIntercept = board.create('point', [0, b], {
        name: 'C',
        color: colors.success,
        size: 4,
        face: 'cross',
        label: { text: 'Постоянные затраты', offset: [10, -10], fontSize: 12 }
    });
    
    // Линия регрессии (зависимость затрат от выручки)
    var line = board.create('functiongraph', [function(x) { return a * x + b; }], {
        strokeColor: colors.secondary,
        strokeWidth: 3,
        dash: 0
    });
    
    // Подписи осей
    board.create('text', [14, 1.5, 'Выручка (млрд. руб.)'], {
        fontSize: 12,
        color: colors.secondary
    });
    
    board.create('text', [1, 8.5, 'Затраты (млрд. руб.)'], {
        fontSize: 12,
        color: colors.secondary,
        rotate: 90
    });
    
    // // Аннотация: уравнение прямой
    // board.create('text', [2, 8.2, 'Уравнение: затраты = 0.5 × выручка + 1'], {
    //     fontSize: 13,
    //     color: colors.secondary,
    //     fontWeight: 'bold'
    // });
    
    return {
        style: 'line',
        boardConfig: {
            boundingbox: [-1, 8, 15, -1],
            axis: true,
            grid: true,
            zoom: {
                factorX: 0.5,
                factorY: 0.5
            }
        }
    };
}


function circle_center_origin(board, radius=3) {
    var p1 = board.create('point', [0, 0]);
    var c = board.create('circle', [p1, 3]);

    return { style: { ...style, width: "400px", height: "400px" },
     boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}

function integral_symmetric_x(board, a) {
    // Задаём значение a с проверкой типа
    const aValue = typeof a === "number" ? a : 3; // значение по умолчанию 3, если a не число

    // Создаём график функции y = x
    var graph = board.create('functiongraph', ['x'], {
        strokeColor: colors.primary,
        strokeWidth: 3,
        name: 'y = x'
    });

    // Создаём оси и сетку (если их нет в boardConfig)
    // if (!board.hasAxis) {
    //     board.create('axis', [[0, 0], [1, 0]], {
    //         ticks: {
    //             drawLabels: true,
    //             drawZero: true,
    //             insertTicks: true,
    //             ticksDistance: 1
    //         }
    //     });
    //     board.create('axis', [[0, 0], [0, 1]]);
    //     board.hasAxis = true;
    // }

    // Создаём интеграл для положительной части [0, a]
    board.create('integral', [
        [0, aValue],
        graph
    ], {
        fillColor: colors.success,
        fillOpacity: 0.3,
        strokeWidth: 0
    });

    // Создаём интеграл для отрицательной части [-a, 0]
    board.create('integral', [
        [-aValue, 0],
        graph
    ], {
        fillColor: colors.danger,
        fillOpacity: 0.3,
        strokeWidth: 0
    });

    // Отмечаем точки на графике
    board.create('point', [aValue, aValue], {
        strokeColor: colors.success,
        fillColor: colors.success,
        size: 4,
        name: `a = ${aValue}`,
        fixed: true,
        showInfobox: false
    });

    board.create('point', [-aValue, -aValue], {
        strokeColor: colors.danger,
        fillColor: colors.danger,
        size: 4,
        name: `-a = -${aValue}`,
        fixed: true,
        showInfobox: false
    });

    board.create('point', [0, 0], {
        strokeColor: colors.yellow,
        fillColor: colors.yellow,
        size: 4,
        name: '0',
        fixed: true,
        showInfobox: false
    });

    // Добавляем вертикальные линии для границ
    board.create('segment', [aValue, 0, aValue, aValue], {
        strokeColor: colors.success,
        dash: 2,
        strokeWidth: 1
    });

    board.create('segment', [-aValue, 0, -aValue, -aValue], {
        strokeColor: colors.danger,
        dash: 2,
        strokeWidth: 1
    });

    // Добавляем горизонтальные линии для наглядности
    board.create('segment', [0, aValue, aValue, aValue], {
        strokeColor: colors.success,
        dash: 2,
        strokeWidth: 1
    });

    board.create('segment', [-aValue, -aValue, 0, -aValue], {
        strokeColor: colors.danger,
        dash: 2,
        strokeWidth: 1
    });

    // Добавляем подписи для пояснения
    board.create('text', [1, aValue - 0.5, 'Положительная площадь'], {
        strokeColor: colors.success,
        fontSize: 12,
        anchorX: 'left',
        anchorY: 'bottom',
        fixed: true
    });

    board.create('text', [-aValue - 1.5, -aValue + 0.5, 'Отрицательная площадь'], {
        strokeColor: colors.danger,
        fontSize: 12,
        anchorX: 'left',
        anchorY: 'bottom',
        fixed: true
    });

    // Добавляем подпись с результатом
    board.create('text', [-aValue, aValue + 0.5, `∫₋ₐᵃ x dx = 0`], {
        strokeColor: colors.primary,
        fontSize: 14,
        anchorX: 'left',
        anchorY: 'bottom',
        fixed: true
    });

    return {
        style,
        boardConfig: {
            ...boardConfig,
            boundingbox: [-aValue - 1, aValue + 1, aValue + 1, -aValue - 1]
        }
    };
}

// Функция для конкретного теста с var1-10
function integral_test_visual(board) {
    // Здесь var1-10 - значение из randomfrom теста
    // Пробуем получить значение из разных возможных источников
    let a;

    if (board.args && typeof board.args.var1_10 === "number") {
        a = board.args.var1_10;
    } else if (board.args && typeof board.args['var1-10'] === "number") {
        a = board.args['var1-10'];
    } else {
        a = 3; // значение по умолчанию
    }

    return integral_symmetric_x(board, a);
}

function linearsimple4(board) {
    board.create('functiongraph', ['4*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}

function linearsimple3(board) {
    board.create('functiongraph', ['3*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}

function linearsimple2(board) {
    board.create('functiongraph', ['2*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}


function linearsimple(board) {
    board.create('functiongraph', ['1*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}


function system_intersect10(board) {
    board.create('functiongraph', ['0.5 * x + 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['-3 * x + 8'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 10, 6, -3] } }
}



function system_intersect9(board) {
    board.create('functiongraph', ['x + 1 -2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['-2 * x + 10'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 6, 10, -3] } }
}




function system_intersect8(board) {
    board.create('functiongraph', ['2 * x - 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['-x + 7'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 10, 6, -3] } }
}



function system_intersect7(board) {
    board.create('functiongraph', ['-3 * x + 7'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['2 * x - 3'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 10, 6, -3] } }
}



function system_intersect6(board) {
    board.create('functiongraph', ['4 * x - 3'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['x + 3'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-1, 8, 6, -1] } }
}


function system_intersect5(board) {
    board.create('functiongraph', ['3 * x - 1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', [' -2 * x + 9'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 8, 6, -4] } }
}


function system_intersect4(board) {
    board.create('functiongraph', ['0.5 * x + 1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['-x + 4'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}



function system_intersect3(board) {
    board.create('functiongraph', ['-2 * x + 5'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['x - 1'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 5, 7, -3] } }
}


function system_intersect2(board) {
    board.create('functiongraph', ['x + 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['3*x-2'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 6, 7, -4] } }
}



function system_intersect(board) {
    board.create('functiongraph', ['2 * x + 1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    board.create('functiongraph', ['-x + 4'], {
        strokeColor: colors.success,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 8, 6, -4] } }
}



function linear_through_origin(board) {
    board.create('functiongraph', ['-2 * x'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}




function linear_horizontal(board) {
    board.create('functiongraph', ['0*x+2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}




function linear_negative_steep(board) {
    board.create('functiongraph', ['-3*x+1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 5, 4, -4] } }
}



function linear_flat(board) {
    board.create('functiongraph', ['0.5*x+2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-5, 4, 4, -2] } }
}



function linear_zero_b(board) {
    board.create('functiongraph', ['3*x'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 4, 4, -4] } }
}


function linear_steep(board) {
    board.create('functiongraph', ['4*x-1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 5, 5, -4] } }
}



function linear_both_negative(board) {
    board.create('functiongraph', ['-1*x-3'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}




function linear_negative_b(board) {
    board.create('functiongraph', ['x - 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 5, 5, -3] } }
}


function linear_negative_k(board) {
    board.create('functiongraph', ['-2*x + 3'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 6, -4] } }
}



function linear_positive(board) {
    board.create('functiongraph', ['2 * x + 1'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}




function quadratic_2roots_negative(board) {
    board.create('functiongraph', ['-x * x + x + 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 5, 6, -4] } }
}



function quadratic_0roots(board) {
    board.create('functiongraph', ['x * x + 2 * x + 3'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
}


function quadratic_1root(board) {
    board.create('functiongraph', ['x * x - 4 * x + 4'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-1, 6, 6, -1] } }
}


function quadratic_2roots(board) {
    board.create('functiongraph', ['x * x - 3 * x + 2'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-1, 6, 6, -1] } }
}



function cosine(board) {
    board.create('functiongraph', ['cos(x)'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 2, 7, -2] } }
}





function absolute(board) {
    board.create('functiongraph', ['abs(x)'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -1] } }
}




function cubic(board) {
    board.create('functiongraph', ['x*x*x'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 11, 3, -3] } }
}



function logarithmic(board) {
    board.create('functiongraph', ['log(x)'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-1, 2, 4, -4] } }
}


function exponential(board) {
    board.create('functiongraph', ['exp(x)'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-3, 5, 3, -2] } }
}


function sinus(board) {
    board.create('functiongraph', ['sin(x)'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 2, 7, -2] } }
}



function quadratic(board) {
    board.create('functiongraph', ['x*x'], {
        strokeColor: colors.primary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-1, 5, 5, -4] } }
}

function linear(board) {
    board.create('functiongraph', ['2 * x + 1'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}