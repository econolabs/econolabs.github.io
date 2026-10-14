/* ============================================================================
 * charts.js — графики распределений и контрольных карт на Chart.js
 * Экспортирует window.charts с функциями:
 *   - binom(boardId, params)         — биномиальное распределение (столбики)
 *   - poisson(boardId, params)       — распределение Пуассона (столбики)
 *   - normal(boardId, params)        — нормальное распределение (кривая)
 *   - normalArea(boardId, params)    — нормальное с закрашенной площадью
 *   - shewhartChart(boardId, params) — контрольная карта Шухарта
 *   - renderChart(id, config)        — универсальный рендер по конфигу
 *   - initAll()                      — инициализация графиков страницы
 *   - _math                          — математические помощники
 *   - _charts                        — Map инстансов Chart.js
 * ========================================================================== */

(function () {
  "use strict";

  // ============================================================
  //  МАТЕМАТИЧЕСКИЕ ПОМОЩНИКИ
  // ============================================================
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

  // Площадь под нормальной кривой между a и b (метод трапеций)
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
  //  ЦВЕТА И DEFAULTS
  // ============================================================
  const chartColors = {
    green: "rgba(33, 115, 70, 0.75)",
    greenBorder: "rgba(33, 115, 70, 1)",
    blueBorder: "rgba(13, 110, 253, 1)",
    blueLight: "rgba(13, 110, 253, 0.18)",
    orange: "rgba(253, 126, 20, 0.75)",
    orangeBorder: "rgba(253, 126, 20, 1)",
    redBorder: "rgba(220, 53, 69, 1)",
    redDash: "rgba(220, 53, 69, 0.85)",
    greenLine: "rgba(25, 135, 84, 1)",
  };

  if (window.Chart) {
    Chart.defaults.font.family = "'Segoe UI', Tahoma, sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = "#495057";
  }

  // ============================================================
  //  ХРАНИЛИЩЕ ИНСТАНСОВ ГРАФИКОВ
  // ============================================================
  const charts = new Map();

  function getOrDestroy(canvasId) {
    if (charts.has(canvasId)) {
      const c = charts.get(canvasId);
      const existing = document.getElementById(canvasId);
      if (!existing || existing !== c.canvas) {
        c.destroy();
        charts.delete(canvasId);
      } else {
        return c;
      }
    }
    return null;
  }

  function getCtx(canvasId) {
    const el = document.getElementById(canvasId);
    if (!el) return null;
    return el.getContext("2d");
  }

  // ============================================================
  //  БИНОМИАЛЬНОЕ
  // ============================================================
  function buildBinomData(n, p) {
    const labels = [];
    const data = [];
    for (let k = 0; k <= n; k++) {
      labels.push(k);
      data.push(binomPMF(k, n, p));
    }
    return { labels, data };
  }

  function binom(canvasId, params) {
    const n = parseInt(params.n, 10);
    const p = parseFloat(params.p);
    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const { labels, data } = buildBinomData(n, p);

    const existing = getOrDestroy(canvasId);
    if (existing) {
      existing.data.labels = labels;
      existing.data.datasets[0].data = data;
      existing.update("none");
      return existing;
    }

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "P(X = k)",
            data,
            backgroundColor: chartColors.green,
            borderColor: chartColors.greenBorder,
            borderWidth: 1,
            borderRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c) => `P(X=${c.label}) = ${c.parsed.y.toFixed(5)}`,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "k", color: "#6c757d" },
            grid: { display: false },
          },
          y: {
            title: { display: true, text: "P(X = k)", color: "#6c757d" },
            beginAtZero: true,
            grid: { color: "#eef1f3" },
          },
        },
      },
    });
    charts.set(canvasId, chart);
    return chart;
  }

  // ============================================================
  //  ПУАССОН
  // ============================================================
  function buildPoisData(lambda) {
    const labels = [];
    const data = [];
    const maxK = Math.max(15, Math.ceil(lambda * 3));
    for (let k = 0; k <= maxK; k++) {
      labels.push(k);
      data.push(poissonPMF(k, lambda));
    }
    return { labels, data };
  }

  function poisson(canvasId, params) {
    const lambda = parseFloat(params.lambda);
    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const { labels, data } = buildPoisData(lambda);

    const existing = getOrDestroy(canvasId);
    if (existing) {
      existing.data.labels = labels;
      existing.data.datasets[0].data = data;
      existing.update("none");
      return existing;
    }

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "P(X = k)",
            data,
            backgroundColor: chartColors.orange,
            borderColor: chartColors.orangeBorder,
            borderWidth: 1,
            borderRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c) => `P(X=${c.label}) = ${c.parsed.y.toFixed(5)}`,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "k", color: "#6c757d" },
            grid: { display: false },
          },
          y: {
            title: { display: true, text: "P(X = k)", color: "#6c757d" },
            beginAtZero: true,
            grid: { color: "#eef1f3" },
          },
        },
      },
    });
    charts.set(canvasId, chart);
    return chart;
  }

  // ============================================================
  //  НОРМАЛЬНОЕ
  // ============================================================
  function buildNormData(mu, sigma) {
    const labels = [];
    const data = [];
    const xMin = mu - 4 * sigma;
    const xMax = mu + 4 * sigma;
    const steps = 200;
    const step = (xMax - xMin) / steps;
    for (let i = 0; i <= steps; i++) {
      const x = xMin + i * step;
      labels.push(x);
      data.push(normalPDF(x, mu, sigma));
    }
    return { labels, data };
  }

  function normal(canvasId, params) {
    const mu = parseFloat(params.mu);
    const sigma = parseFloat(params.sigma);
    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const { labels, data } = buildNormData(mu, sigma);

    const existing = getOrDestroy(canvasId);
    if (existing) {
      existing.data.labels = labels;
      existing.data.datasets[0].data = data;
      existing.update("none");
      return existing;
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "f(x)",
            data,
            borderColor: chartColors.blueBorder,
            backgroundColor: chartColors.blueLight,
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0.35,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => `x = ${parseFloat(items[0].label).toFixed(3)}`,
              label: (c) => `f(x) = ${c.parsed.y.toFixed(5)}`,
            },
          },
        },
        scales: {
          x: {
            type: "linear",
            title: { display: true, text: "x", color: "#6c757d" },
            grid: { color: "#eef1f3" },
            ticks: { callback: (v) => parseFloat(v).toFixed(1) },
          },
          y: {
            title: { display: true, text: "f(x)", color: "#6c757d" },
            beginAtZero: true,
            grid: { color: "#eef1f3" },
          },
        },
      },
    });
    charts.set(canvasId, chart);
    return chart;
  }

  // ============================================================
  //  НОРМАЛЬНОЕ С ЗАКРАШЕННОЙ ПЛОЩАДЬЮ
  // ============================================================
  function normalArea(canvasId, params, onUpdate) {
    const mu = parseFloat(params.mu);
    const sigma = parseFloat(params.sigma);
    const a = parseFloat(params.a);
    const b = parseFloat(params.b);

    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const { labels, data } = buildNormData(mu, sigma);
    const p = areaBetween(mu, sigma, a, b);

    const fillData = data.map((y, i) => {
      const x = labels[i];
      return x >= Math.min(a, b) && x <= Math.max(a, b) ? y : null;
    });

    if (typeof onUpdate === "function") {
      onUpdate({ p, a: Math.min(a, b), b: Math.max(a, b) });
    }

    const existing = getOrDestroy(canvasId);
    if (existing) {
      existing.data.labels = labels;
      existing.data.datasets[0].data = data;
      existing.data.datasets[1].data = fillData;
      existing.update("none");
      return existing;
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "f(x)",
            data,
            borderColor: chartColors.blueBorder,
            backgroundColor: "rgba(13, 110, 253, 0.05)",
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
            tension: 0.35,
          },
          {
            label: "P(a < X < b)",
            data: fillData,
            borderColor: chartColors.orangeBorder,
            backgroundColor: "rgba(253, 126, 20, 0.35)",
            borderWidth: 1.5,
            fill: "origin",
            pointRadius: 0,
            tension: 0.35,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 200 },
        plugins: {
          legend: { display: true, position: "top" },
          tooltip: {
            callbacks: {
              title: (items) => `x = ${parseFloat(items[0].label).toFixed(3)}`,
              label: (c) =>
                c.datasetIndex === 0
                  ? `f(x) = ${c.parsed.y.toFixed(5)}`
                  : `внутри [a, b]: f(x) = ${c.parsed.y.toFixed(5)}`,
            },
          },
        },
        scales: {
          x: {
            type: "linear",
            title: { display: true, text: "x", color: "#6c757d" },
            grid: { color: "#eef1f3" },
            ticks: { callback: (v) => parseFloat(v).toFixed(1) },
          },
          y: {
            title: { display: true, text: "f(x)", color: "#6c757d" },
            beginAtZero: true,
            grid: { color: "#eef1f3" },
          },
        },
      },
    });
    charts.set(canvasId, chart);
    return chart;
  }

  // ============================================================
  //  КОНТРОЛЬНАЯ КАРТА ШУХАРТА
  //  params: {
  //    mean: number,          // центральная линия μ
  //    sigma: number,         // стандартное отклонение σ
  //    k: number,             // множитель границ (по умолчанию 3)
  //    points: array|string   // массив наблюдений (можно строкой "[1,2,3]")
  //  }
  // ============================================================
  function shewhartChart(canvasId, params) {
    const mean = parseFloat(params.mean);
    const sigma = parseFloat(params.sigma);
    const k = params.k !== undefined ? parseFloat(params.k) : 3;

    // --- Парсим points: массив или строка ---
    let points = params.points;
    if (typeof points === "string") {
      try {
        points = JSON.parse(points);
      } catch (e) {
        console.warn(
          "shewhartChart: не удалось распарсить points как JSON, пробую split по запятой"
        );
        points = points
          .replace(/[\[\]\s]/g, "")
          .split(",")
          .map((s) => parseFloat(s))
          .filter((n) => !isNaN(n));
      }
    }
    if (!Array.isArray(points)) points = [];
    points = points.map((v) => parseFloat(v));

    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const ucl = mean + k * sigma;
    const lcl = mean - k * sigma;

    // Точки-выбросы
    const pointColors = points.map((y) =>
      y > ucl || y < lcl ? "rgba(220, 53, 69, 1)" : "rgba(13, 110, 253, 1)"
    );
    const pointSizes = points.map((y) => (y > ucl || y < lcl ? 8 : 4));

    // Метки по оси X
    const labels = points.map((_, i) => i + 1);

    const existing = getOrDestroy(canvasId);

    const datasets = [
      {
        label: "Значения",
        data: points,
        borderColor: "rgba(13, 110, 253, 1)",
        backgroundColor: "rgba(13, 110, 253, 0.08)",
        borderWidth: 2,
        pointBackgroundColor: pointColors,
        pointBorderColor: "#fff",
        pointBorderWidth: 1.5,
        pointRadius: pointSizes,
        pointHoverRadius: pointSizes.map((s) => s + 1),
        tension: 0.15,
        fill: false,
        order: 1,
      },
      {
        label: `UCL = ${ucl.toFixed(2)}`,
        data: points.map(() => ucl),
        borderColor: chartColors.redDash,
        borderWidth: 1.5,
        borderDash: [6, 4],
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        order: 2,
      },
      {
        label: `CL = ${mean.toFixed(2)}`,
        data: points.map(() => mean),
        borderColor: chartColors.greenLine,
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        order: 3,
      },
      {
        label: `LCL = ${lcl.toFixed(2)}`,
        data: points.map(() => lcl),
        borderColor: chartColors.redDash,
        borderWidth: 1.5,
        borderDash: [6, 4],
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        order: 4,
      },
    ];

    if (existing) {
      existing.data.labels = labels;
      existing.data.datasets = datasets;
      existing.update("none");
      return existing;
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              font: { size: 11 },
            },
          },
          tooltip: {
            callbacks: {
              label: (c) => {
                if (c.dataset.label === "Значения") {
                  return `Точка ${c.label}: ${c.parsed.y}`;
                }
                return c.dataset.label;
              },
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Номер наблюдения", color: "#6c757d" },
            grid: { display: false },
          },
          y: {
            title: { display: true, text: "Значение", color: "#6c757d" },
            grid: { color: "#eef1f3" },
            suggestedMin: Math.min(lcl, ...points) - sigma,
            suggestedMax: Math.max(ucl, ...points) + sigma,
          },
        },
      },
    });

    charts.set(canvasId, chart);
    return chart;
  }

  // ============================================================
  //  УНИВЕРСАЛЬНЫЙ РЕНДЕР ПО ТИПУ
  // ============================================================
  function renderChart(canvasId, config, onUpdate) {
    if (!config || !config.type) return null;
    switch (config.type) {
      case "binom":
        return binom(canvasId, config);
      case "poisson":
        return poisson(canvasId, config);
      case "normal":
        return normal(canvasId, config);
      case "normalArea":
        return normalArea(canvasId, config, onUpdate);
      case "shewhart":
        return shewhartChart(canvasId, config);
      default:
        console.warn("charts.renderChart: неизвестный тип", config.type);
        return null;
    }
  }

  // ============================================================
  //  ИНИЦИАЛИЗАЦИЯ ГРАФИКОВ СТРАНИЦЫ
  // ============================================================
  function initAll() {
    // --- Биномиальное ---
    if (document.getElementById("binomChart")) {
      const render = () => {
        const n = parseInt(document.getElementById("binomN")?.value ?? 20, 10);
        const p = parseFloat(document.getElementById("binomP")?.value ?? 0.5);
        const nv = document.getElementById("binomNVal");
        const pv = document.getElementById("binomPVal");
        if (nv) nv.textContent = n;
        if (pv) pv.textContent = p.toFixed(2);
        binom("binomChart", { n, p });
      };
      ["binomN", "binomP"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", render);
      });
      render();
    }

    // --- Пуассон ---
    if (document.getElementById("poisChart")) {
      const render = () => {
        const lambda = parseFloat(document.getElementById("poisL")?.value ?? 5);
        const lv = document.getElementById("poisLVal");
        if (lv) lv.textContent = lambda.toFixed(1);
        poisson("poisChart", { lambda });
      };
      const el = document.getElementById("poisL");
      if (el) el.addEventListener("input", render);
      render();
    }

    // --- Нормальное ---
    if (document.getElementById("normChart")) {
      const render = () => {
        const mu = parseFloat(document.getElementById("normMu")?.value ?? 0);
        const sigma = parseFloat(document.getElementById("normSigma")?.value ?? 1);
        const mv = document.getElementById("normMuVal");
        const sv = document.getElementById("normSigmaVal");
        if (mv) mv.textContent = mu.toFixed(1);
        if (sv) sv.textContent = sigma.toFixed(1);
        normal("normChart", { mu, sigma });
      };
      ["normMu", "normSigma"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", render);
      });
      render();
    }

    // --- Плотность с площадью ---
    if (document.getElementById("contChart")) {
      const render = () => {
        const mu = parseFloat(document.getElementById("contMu")?.value ?? 0);
        const sigma = parseFloat(document.getElementById("contSigma")?.value ?? 1);
        const a = parseFloat(document.getElementById("contA")?.value ?? -1);
        const b = parseFloat(document.getElementById("contB")?.value ?? 1);

        const mv = document.getElementById("contMuVal");
        const sv = document.getElementById("contSigmaVal");
        const av = document.getElementById("contAVal");
        const bv = document.getElementById("contBVal");
        if (mv) mv.textContent = mu.toFixed(1);
        if (sv) sv.textContent = sigma.toFixed(1);
        if (av) av.textContent = a.toFixed(1);
        if (bv) bv.textContent = b.toFixed(1);

        normalArea("contChart", { mu, sigma, a, b }, ({ p, a, b }) => {
          const res = document.getElementById("contResult");
          if (res) {
            res.innerHTML =
              `<strong>P(${a.toFixed(1)} &lt; X &lt; ${b.toFixed(1)}) = ${p.toFixed(4)}</strong>` +
              ` &nbsp;·&nbsp; <span class="text-muted">≈ ${(p * 100).toFixed(2)} %</span>`;
          }
        });
      };
      ["contMu", "contSigma", "contA", "contB"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", render);
      });
      render();
    }
  }

  // ============================================================
  //  ПУБЛИЧНОЕ API
  // ============================================================
  window.charts = {
    // отдельные графики
    binom,
    poisson,
    normal,
    normalArea,
    shewhartChart,
    shewhart: shewhartChart, // синоним для удобства
    renderChart,
    initAll,
    // хелперы
    _math: { binomPMF, poissonPMF, normalPDF, areaBetween },
    _charts: charts,
  };

  // Автоинициализация после загрузки DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();