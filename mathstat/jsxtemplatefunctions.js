const colors = {
    i: '#dc3545',
    j: '#007bff',
    negi: '#ffc107',
    negj: '#28a745',
    gray: '#6c757d'
};

// Function to dynamically load scripts
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadStylesheet(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

// Check if dependencies are loaded, if not load them
async function ensureDependencies() {
    const dependencies = [];

    // Check for JSXGraph
    if (typeof JXG === 'undefined' || !JXG.JSXGraph) {
        console.log('JSXGraph not found, loading from ../dist/');
        dependencies.push(loadScript('../dist/jsxgraphcore.js'));
        dependencies.push(loadStylesheet('../dist/jsxgraph.css'));
    }

    // Check for KaTeX
    if (typeof katex === 'undefined') {
        console.log('KaTeX not found, loading from ../dist/');
        dependencies.push(loadScript('../dist/katex.min.js'));
        dependencies.push(loadStylesheet('../dist/katex.min.css'));
    }

    // Wait for all dependencies to load
    await Promise.all(dependencies);

    // Small delay to ensure everything is initialized
    if (dependencies.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}




function unitVectors(id = 'box') {

    // Main execution with dependency checking
    ensureDependencies().then(() => {
        let graphDiv = document.getElementById(id);
        if (!graphDiv) {
            console.error(`Element with id '${id}' not found`);
            return;
        }

        graphDiv.style.width = "400px";
        graphDiv.style.width = "400px";
        graphDiv.style.display = "block";
        graphDiv.style.aspectRatio = "1/1";
        const board = JXG.JSXGraph.initBoard('box', {
            boundingbox: [-1.5, 1.5, 1.5, -1.5],
            axis: true,
            grid: true,
            showNavigation: false,
            showCopyright: false
        });

        const O = board.create('point', [0, 0], {
            name: 'O',
            size: 4,
            color: '#212529',
            fixed: true
        });

        const vectors = [
            {
                end: [1, 0],
                tex: '\\Huge { \\vec{ i }}',
                color: colors.i,
                labelX: 1.2,
                labelY: 0.2
            },
            {
                end: [0, 1],
                tex: '\\Huge { \\vec{ j }}',
                color: colors.j,
                labelX: 0.1,
                labelY: 1.2
            },
            {
                end: [-1, 0],
                tex: '-\\Huge { \\vec{ i }}',
                color: colors.negi,
                labelX: -1.2,
                labelY: 0.2
            },
            {
                end: [0, -1],
                tex: '-\\Huge { \\vec{ j }}',
                color: colors.negj,
                labelX: 0.1,
                labelY: -1.2
            }
        ];

        vectors.forEach(vec => {

            // console.log(vec);

            const P = board.create('point', vec.end, {
                size: 3,
                color: vec.color,
                fixed: true
            });

            board.create('arrow', [O, P], {
                strokeColor: vec.color,
                strokeWidth: 3,
                lastArrow: true,
                size: 8
            });

            //  var t1 = board.create('text',[0,1,"Hello World"]);
            // const text =  board.create('text', [5, 10], 'My Text');

            // Создаем текст с KaTeX
            //  Важно: передаем координаты как массив
            const text = board.create('text', [vec.labelX, vec.labelY, '...'], {
                color: vec.color,
                fixed: true,
                parse: false // Отключаем парсинг JSXGraph
            });

            // Рендерим KaTeX и устанавливаем как содержимое
            try {
                const html = katex.renderToString(vec.tex, {
                    displayMode: false,
                    throwOnError: false
                });
                text.setText(html);
            } catch (error) {
                console.error('KaTeX error:', error);
                text.setText(vec.tex);
            }


            board.create('circle', [O, 1], {
                strokeColor: colors.gray,
                strokeWidth: 0.5,
                dash: 2
            });
        })
    })
        .catch(error => {
            console.error('Failed to load dependencies:', error);
            const graphDiv = document.getElementById(id);
            if (graphDiv) {
                graphDiv.innerHTML = '<div style="color: red; padding: 20px;">Failed to load required libraries (JSXGraph/KaTeX). Please check that the files exist in the ../dist/ folder.</div>';
            }
        });

}


function makeJSXGraph() {
    console.log("jsx template functions");

    var board = JXG.JSXGraph.initBoard(
        'box', {
        boundingbox: [-10, 10, 10, -10],
        axis: true
    });
    var A = board.create('point', [2, 1], { name: 'A' });
    var f = board.create(
        'functiongraph',
        [(x) => 0.5 * x ** 2 - 2 * x],
        { strokeWidth: 3 });
}


let jsxtemplatefunctions = Object.assign({},
    {
        makeJSXGraph: makeJSXGraph,
        unitVectors: unitVectors

    })

window.jsxtemplatefunctions = jsxtemplatefunctions

