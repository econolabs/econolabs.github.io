(function () {
    'use strict';

    (function() {
        const env = {"NODE_ENV":"development"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    function timeout(ms, res = "fulfilled") {
      return new Promise(resolve => setTimeout(()=>resolve(res), ms));
    }

    /**
      * Initial load
    */

    function drawChart() {

        let options = {
            series: [{
                name: 'Points',
                type: 'scatter',

                //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
                data: [{
                    x: 1,
                    y: 2.14
                }, {
                    x: 1.2,
                    y: 2.19
                }, {
                    x: 1.8,
                    y: 2.43
                }, {
                    x: 2.3,
                    y: 3.8
                }, {
                    x: 2.6,
                    y: 4.14
                }, {
                    x: 2.9,
                    y: 5.4
                }, {
                    x: 3.2,
                    y: 5.8
                }, {
                    x: 3.8,
                    y: 6.04
                }, {
                    x: 4.55,
                    y: 6.77
                }, {
                    x: 4.9,
                    y: 8.1
                }, {
                    x: 5.1,
                    y: 9.4
                }, {
                    x: 7.1,
                    y: 7.14
                }, {
                    x: 9.18,
                    y: 8.4
                }]
            }, {
                name: 'Line',
                type: 'line',
                data: [{
                    x: 1,
                    y: 2
                }, 
               
                 {
                    x: 10,
                    y: 11
                }]
            }],
            chart: {
                height: 350,
                type: 'line',
            },
            fill: {
                type: 'solid',
            },
            markers: {
                size: [6, 0]
            },
            tooltip: {
                shared: false,
                intersect: true,
            },
            legend: {
                show: false
            },
            xaxis: {
                type: 'numeric',
                min: 0,
                max: 12,
                tickAmount: 12
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }

    async function initialLoad() {

     //   let res = await getUser();
     let res = await timeout(5000, "Done");

        

        if (!res) {
            $("#formcontainer").style.display = "block";
        }
    }


    initialLoad().then(() => {
        drawChart();
        console.log("chart");
    });

})();
