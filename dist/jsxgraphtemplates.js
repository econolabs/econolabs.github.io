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




function linear_4x(board) {
    board.create('functiongraph', ['4*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}

function linear_3x(board) {
    board.create('functiongraph', ['3*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}

function linear_2x(board) {
    board.create('functiongraph', ['2*x'], {
        strokeColor: colors.secondary,
        strokeWidth: 3
    });
    return { style, boardConfig: { ...boardConfig, boundingbox: [-2, 3, 3, -2] } }
}


function linear_x(board) {
    board.create('functiongraph', ['x'], {
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
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 10, 6, -4] } }
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
    return { style, boardConfig: { ...boardConfig, boundingbox: [-4, 4, 4, -4] } }
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