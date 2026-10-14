/* ============================================================================
 * jsxgraphs.js — графики распределений на JSXGraph
 * Экспортирует window.jsxgraphs с функциями:
 *   - binom(boardId, params)      — биномиальное распределение (столбики)
 *   - poisson(boardId, params)    — распределение Пуассона (столбики)
 *   - normal(boardId, params)     — нормальное распределение (кривая)
 *   - normalArea(boardId, params) — нормальное с закрашенной областью
 *   - functionGraph(boardId, cfg) — график произвольной функции
 *   - sliderFunction(boardId, cfg)— функция с ползунками
 *   - tangentLine(boardId, cfg)   — касательная к графику
 *   - render(boardId, config)     — низкоуровневый рендер
 *   - renderByType(id, type, cfg) — универсальный вызов по типу
 * ========================================================================== */

(function () {
    "use strict";

    const boards = new Map();

    // Математические помощники
    function binomCoeff(n, k) {
        if (k < 0 || k > n) return 0;
        if (k === 0 || k === n) return 1;
        let c = 1;
        for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
        return c;
    }

    function binomPMF(k, n, p) {
        if (k < 0 || k > n) return 0;
        return binomCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }

    function factorial(n) {
        let f = 1;
        for (let i = 2; i <= n; i++) f *= i;
        return f;
    }

    function poissonPMF(k, lambda) {
        return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
    }

    function normalPDF(x, mu, sigma) {
        return (
            (1 / (sigma * Math.sqrt(2 * Math.PI))) *
            Math.exp(-Math.pow(x - mu, 2) / (2 * sigma * sigma))
        );
    }

    // Уничтожение старого борда
    function freeBoard(boardId) {
        if (boards.has(boardId)) {
            try {
                JXG.JSXGraph.freeBoard(boards.get(boardId));
            } catch (e) { /* ignore */ }
            boards.delete(boardId);
        }
    }

    // Создание борда
    function createBoard(boardId, opts) {
        const el = document.getElementById(boardId);
        if (!el) return null;
        freeBoard(boardId);
        const board = JXG.JSXGraph.initBoard(boardId, Object.assign({
            boundingbox: [-2, 1, 10, -0.2],
            axis: true,
            showCopyright: false,
            showNavigation: false,
            keepAspectRatio: false
        }, opts || {}));
        boards.set(boardId, board);
        return board;
    }

    // ============================================================
    //  КРИВАЯ НАДЁЖНОСТИ (экспоненциальное снижение)
    //  config: { lambda0, theta, xMax, color }
    // ============================================================
    function reliabilityCurve(boardId, config) {
        const lambda0 = parseFloat(config.lambda0);
        const theta = parseFloat(config.theta);
        const xMax = parseFloat(config.xMax || 10);

        const board = createBoard(boardId, {
            boundingbox: [0, lambda0 * 1.1, xMax, -lambda0 * 0.05],
            axis: true,
        });
        if (!board) return null;

        board.create('functiongraph', [
            (t) => lambda0 * Math.exp(-theta * t),
            0,
            xMax,
        ], {
            strokeColor: config.color || '#0d6efd',
            strokeWidth: 2,
        });

        return board;
    }

    // ============================================================
    //  КРИВАЯ НАДЁЖНОСТИ С КАСАТЕЛЬНОЙ В ТОЧКЕ
    //  config: { lambda0, theta, xMax, gliderX }
    // ============================================================
    function reliabilityTangent(boardId, config) {
        const lambda0 = parseFloat(config.lambda0);
        const theta = parseFloat(config.theta);
        const xMax = parseFloat(config.xMax || 10);
        const gliderX = parseFloat(config.gliderX || 2);

        const board = createBoard(boardId, {
            boundingbox: [0, lambda0 * 1.1, xMax, -lambda0 * 0.05],
            axis: true,
        });
        if (!board) return null;

        // Кривая
        const curve = board.create('functiongraph', [
            (t) => lambda0 * Math.exp(-theta * t),
            0,
            xMax,
        ], {
            strokeColor: '#0d6efd',
            strokeWidth: 2,
        });

        // Точка-глайдер на кривой
        const gx = gliderX;
        const gy = lambda0 * Math.exp(-theta * gx);
        const glider = board.create('glider', [gx, gy, curve], {
            name: 'A',
            size: 4,
            color: '#dc3545',
        });

        // Касательная
        board.create('tangent', [glider], {
            strokeColor: '#198754',
            strokeWidth: 2,
        });

        return board;
    }

    // ============================================================
    //  БИНОМИАЛЬНОЕ
    // ============================================================
    function binom(boardId, params) {
        const n = parseInt(params.n, 10);
        const p = parseFloat(params.p);
        const board = createBoard(boardId, {
            boundingbox: [-1, 0.5, n + 1, -0.05],
            axis: true
        });
        if (!board) return null;

        for (let k = 0; k <= n; k++) {
            const prob = binomPMF(k, n, p);
            // Вертикальная линия-столбик
            board.create('segment', [[k, 0], [k, prob]], {
                strokeColor: '#217346',
                strokeWidth: 4,
                fixed: true,
                highlight: false
            });
            // Точка на вершине столбика
            board.create('point', [k, prob], {
                size: 2,
                color: '#217346',
                fixed: true,
                name: '',
                highlight: false
            });
        }

        return board;
    }

    // ============================================================
    //  ПУАССОН
    // ============================================================
    function poisson(boardId, params) {
        const lambda = parseFloat(params.lambda);
        const maxK = Math.max(15, Math.ceil(lambda * 3));
        const board = createBoard(boardId, {
            boundingbox: [-1, Math.max(0.3, 1 / Math.sqrt(lambda)), maxK + 1, -0.03],
            axis: true
        });
        if (!board) return null;

        for (let k = 0; k <= maxK; k++) {
            const prob = poissonPMF(k, lambda);
            board.create('segment', [[k, 0], [k, prob]], {
                strokeColor: '#fd7e14',
                strokeWidth: 4,
                fixed: true,
                highlight: false
            });
            board.create('point', [k, prob], {
                size: 2,
                color: '#fd7e14',
                fixed: true,
                name: '',
                highlight: false
            });
        }

        return board;
    }

    // ============================================================
    //  НОРМАЛЬНОЕ
    // ============================================================
    function normal(boardId, params) {
        const mu = parseFloat(params.mu);
        const sigma = parseFloat(params.sigma);
        const xMin = mu - 4 * sigma;
        const xMax = mu + 4 * sigma;

        const board = createBoard(boardId, {
            boundingbox: [xMin, Math.max(0.5, 1 / (sigma * Math.sqrt(2 * Math.PI)) * 1.3), xMax, -0.05],
            axis: true
        });
        if (!board) return null;

        board.create('functiongraph', [
            (x) => normalPDF(x, mu, sigma),
            xMin,
            xMax
        ], {
            strokeColor: '#0d6efd',
            strokeWidth: 2
        });

        return board;
    }

    // ============================================================
    //  НОРМАЛЬНОЕ С ЗАКРАШЕННОЙ ПЛОЩАДЬЮ
    // ============================================================
    function normalArea(boardId, params, onUpdate) {
        const mu = parseFloat(params.mu);
        const sigma = parseFloat(params.sigma);
        const a = parseFloat(params.a);
        const b = parseFloat(params.b);
        const xMin = mu - 4 * sigma;
        const xMax = mu + 4 * sigma;

        const board = createBoard(boardId, {
            boundingbox: [xMin, Math.max(0.5, 1 / (sigma * Math.sqrt(2 * Math.PI)) * 1.3), xMax, -0.05],
            axis: true
        });
        if (!board) return null;

        // Кривая
        board.create('functiongraph', [
            (x) => normalPDF(x, mu, sigma),
            xMin,
            xMax
        ], {
            strokeColor: '#0d6efd',
            strokeWidth: 2
        });

        // Закрашенная область (если a < b)
        if (a < b) {
            board.create('integral', [
                [a, b],
                (x) => normalPDF(x, mu, sigma)
            ], {
                fillColor: '#fd7e14',
                fillOpacity: 0.4,
                strokeColor: '#fd7e14',
                strokeWidth: 1
            });

            // Вертикальные линии на границах
            board.create('segment', [[a, 0], [a, normalPDF(a, mu, sigma)]], {
                strokeColor: '#fd7e14',
                strokeWidth: 1,
                dash: 2
            });
            board.create('segment', [[b, 0], [b, normalPDF(b, mu, sigma)]], {
                strokeColor: '#fd7e14',
                strokeWidth: 1,
                dash: 2
            });
        }

        // Приближённая площадь методом трапеций
        const p = areaBetween(mu, sigma, a, b);

        if (typeof onUpdate === 'function') {
            onUpdate({ p, a: Math.min(a, b), b: Math.max(a, b) });
        }

        return board;
    }

    function areaBetween(mu, sigma, a, b) {
        if (a > b) {
            const t = a;
            a = b;
            b = t;
        }
        const steps = 200;
        const step = (b - a) / steps;
        let sum = 0;
        for (let i = 0; i < steps; i++) {
            const x1 = a + i * step;
            const x2 = x1 + step;
            const y1 = normalPDF(x1, mu, sigma);
            const y2 = normalPDF(x2, mu, sigma);
            sum += ((y1 + y2) / 2) * step;
        }
        return sum;
    }

    // ============================================================
    //  ПРОИЗВОЛЬНЫЙ ГРАФИК ФУНКЦИИ
    // ============================================================
    function functionGraph(boardId, config) {
        const xMin = config.xMin !== undefined ? parseFloat(config.xMin) : -6;
        const xMax = config.xMax !== undefined ? parseFloat(config.xMax) : 6;
        const yMin = config.yMin !== undefined ? parseFloat(config.yMin) : -6;
        const yMax = config.yMax !== undefined ? parseFloat(config.yMax) : 6;

        const board = createBoard(boardId, {
            boundingbox: [xMin, yMax, xMax, yMin],
            axis: true
        });
        if (!board) return null;

        board.create('functiongraph', [config.f, xMin, xMax], {
            strokeColor: config.color || '#0d6efd',
            strokeWidth: 2
        });

        return board;
    }

    // ============================================================
    //  ФУНКЦИЯ С ПОЛЗУНКОМ
    // ============================================================
    function sliderFunction(boardId, config) {
        const board = createBoard(boardId, config.board || {
            boundingbox: [-8, 8, 8, -8],
            axis: true
        });
        if (!board) return null;

        // Ползунки
        const sliders = {};
        (config.sliders || []).forEach(s => {
            const pos = s.pos || [[-6, -6], [-3, -6]];
            sliders[s.name] = board.create('slider', [pos[0], pos[1], [s.min, s.start, s.max]], {
                name: s.name,
                snapWidth: s.snapWidth || 0.1
            });
        });

        // Функция как JessieCode-строка
        if (config.f) {
            board.create('functiongraph', [config.f, -8, 8], {
                strokeColor: config.color || '#dc3545',
                strokeWidth: 2
            });
        }

        return board;
    }

    // ============================================================
    //  КАСАТЕЛЬНАЯ
    // ============================================================
    function tangentLine(boardId, config) {
        const xMin = config.xMin !== undefined ? parseFloat(config.xMin) : -6;
        const xMax = config.xMax !== undefined ? parseFloat(config.xMax) : 6;

        const board = createBoard(boardId, {
            boundingbox: [xMin, 6, xMax, -6],
            axis: true
        });
        if (!board) return null;

        const curve = board.create('functiongraph', [config.f, xMin, xMax], {
            strokeColor: '#0d6efd',
            strokeWidth: 2
        });

        const gliderPos = config.glider || [1, 1];
        const glider = board.create('glider', [parseFloat(gliderPos[0]), parseFloat(gliderPos[1]), curve], {
            name: 'A',
            size: 4,
            color: '#dc3545'
        });

        board.create('tangent', [glider], {
            strokeColor: '#198754',
            strokeWidth: 2
        });

        return board;
    }

    // ============================================================
    //  УНИВЕРСАЛЬНЫЙ РЕНДЕР ПО ТИПУ
    // ============================================================
    function renderByType(boardId, type, config) {
        switch (type) {
            case 'binom': return binom(boardId, config);
            case 'poisson': return poisson(boardId, config);
            case 'normal': return normal(boardId, config);
            case 'normalArea': return normalArea(boardId, config);
            case 'function': return functionGraph(boardId, config);
            case 'slider': return sliderFunction(boardId, config);
            case 'tangent': return tangentLine(boardId, config);
            case 'reliability': return reliabilityCurve(boardId, config);
            case 'reliabilityTangent': return reliabilityTangent(boardId, config);
            default:
                console.warn('jsxgraphs: неизвестный тип', type);
                return null;
        }
    }

    // ============================================================
    //  ПУБЛИЧНОЕ API
    // ============================================================
    window.jsxgraphs = {
        binom,
        poisson,
        normal,
        normalArea,
        functionGraph,
        sliderFunction,
        tangentLine,
        renderByType,
        _boards: boards
    };
})();