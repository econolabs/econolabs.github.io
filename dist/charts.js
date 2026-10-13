/* ============================================================================
 * charts.js — графики распределений для страницы «Теория вероятностей»
 * Экспортирует window.charts с функциями:
 *   - binom(canvasId, params)   — биномиальное распределение
 *   - poisson(canvasId, params) — распределение Пуассона
 *   - normal(canvasId, params)  — нормальное распределение
 *   - normalArea(canvasId, params, ids) — нормальное с закрашенной площадью
 *   - renderChart(containerId, config) — универсальный рендер по конфигу
 *   - initAll()                 — инициализация всех стандартных графиков страницы
 * ========================================================================== */

(function () {
  "use strict";

  // -------- Математические помощники --------
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

  // -------- Цвета и defaults --------
  const chartColors = {
    green: "rgba(33, 115, 70, 0.75)",
    greenBorder: "rgba(33, 115, 70, 1)",
    blueBorder: "rgba(13, 110, 253, 1)",
    blueLight: "rgba(13, 110, 253, 0.18)",
    orange: "rgba(253, 126, 20, 0.75)",
    orangeBorder: "rgba(253, 126, 20, 1)",
  };

  if (window.Chart) {
    Chart.defaults.font.family = "'Segoe UI', Tahoma, sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = "#495057";
  }

  // -------- Хранилище инстансов графиков (чтобы не пересоздавать) --------
  const charts = new Map();

  function getOrDestroy(canvasId) {
    if (charts.has(canvasId)) {
      const c = charts.get(canvasId);
      // если canvas в DOM заменили — уничтожаем старый
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
              title: (items) =>
                `x = ${parseFloat(items[0].label).toFixed(3)}`,
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
  //  На вход: canvasId, { mu, sigma, a, b }
  //  Плюс: опциональный callback onUpdate(p) для отображения P(a<X<b)
  // ============================================================
  function areaBetween(labels, data, a, b) {
    if (a > b) {
      const t = a;
      a = b;
      b = t;
    }
    let sum = 0;
    for (let i = 0; i < labels.length - 1; i++) {
      const x1 = labels[i];
      const x2 = labels[i + 1];
      const y1 = data[i];
      const y2 = data[i + 1];
      const lo = Math.max(x1, a);
      const hi = Math.min(x2, b);
      if (hi <= lo) continue;
      const t1 = (lo - x1) / (x2 - x1);
      const t2 = (hi - x1) / (x2 - x1);
      const yLo = y1 + (y2 - y1) * t1;
      const yHi = y1 + (y2 - y1) * t2;
      sum += ((yLo + yHi) / 2) * (hi - lo);
    }
    return sum;
  }

  function normalArea(canvasId, params, onUpdate) {
    const mu = parseFloat(params.mu);
    const sigma = parseFloat(params.sigma);
    const a = parseFloat(params.a);
    const b = parseFloat(params.b);

    const ctx = getCtx(canvasId);
    if (!ctx) return null;

    const { labels, data } = buildNormData(mu, sigma);
    const p = areaBetween(labels, data, a, b);

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
            borderColor: "rgba(13, 110, 253, 1)",
            backgroundColor: "rgba(13, 110, 253, 0.05)",
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
            tension: 0.35,
          },
          {
            label: "P(a < X < b)",
            data: fillData,
            borderColor: "rgba(253, 126, 20, 1)",
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
              title: (items) =>
                `x = ${parseFloat(items[0].label).toFixed(3)}`,
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
  //  УНИВЕРСАЛЬНЫЙ РЕНДЕР ПО КОНФИГУ
  //  renderChart('myCanvas', { type: 'binom', n: 20, p: 0.5 })
  //  renderChart('myCanvas', { type: 'poisson', lambda: 5 })
  //  renderChart('myCanvas', { type: 'normal', mu: 0, sigma: 1 })
  //  renderChart('myCanvas', { type: 'normalArea', mu: 0, sigma: 1, a: -1, b: 1 }, cb)
  // ============================================================
  function renderChart(containerId, config, onUpdate) {
    if (!config || !config.type) return null;
    switch (config.type) {
      case "binom":
        return binom(containerId, config);
      case "poisson":
        return poisson(containerId, config);
      case "normal":
        return normal(containerId, config);
      case "normalArea":
        return normalArea(containerId, config, onUpdate);
      default:
        console.warn("charts.renderChart: неизвестный тип", config.type);
        return null;
    }
  }

  // ============================================================
  //  ИНИЦИАЛИЗАЦИЯ СТАНДАРТНЫХ ГРАФИКОВ СТРАНИЦЫ
  //  (только если соответствующие canvas есть в DOM)
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
        const lambda = parseFloat(
          document.getElementById("poisL")?.value ?? 5
        );
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
        const sigma = parseFloat(
          document.getElementById("normSigma")?.value ?? 1
        );
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
        const sigma = parseFloat(
          document.getElementById("contSigma")?.value ?? 1
        );
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
  //  Публичное API
  // ============================================================
  window.charts = {
    // графики по отдельности
    binom,
    poisson,
    normal,
    normalArea,
    renderChart,
    initAll,
    // хелперы — пригодятся для тестов
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