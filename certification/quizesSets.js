let quizesSets = [

      // ============================================================
    // ============ БЛОК 2: ПРОВЕРКА ГИПОТЕЗ =======================
    // ============================================================

        {
        id: "spc_chart_001",
        type: "mathwithrandomnumber",
        header: "SPC · Chart.js",
        title: "Сколько точек вышло за границы?",
        theme: "Контрольные карты",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Контрольная карта Шухарта
  </div>
  <div class="card-body">
    <p>Центральная линия: μ = 100. Границы: μ ± 3σ, где σ = 5. На графике — 12 последовательных измерений метрики.</p>

    <div class="chart-wrap" style="height: 340px;">
      <canvas id="quizChart"></canvas>
    </div>

    <div class="alert alert-warning mt-3 mb-0">
      <strong>Вопрос:</strong> Сколько точек вышло за контрольные границы?
      Введите целое число.
    </div>
  </div>
</div>`,
        answer: "{var1-10}*2/{var1-10}",
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📊 Чтение контрольной карты</h5>
  <p>Границы 3σ для μ = 100, σ = 5:</p>
  <ul>
    <li>UCL = 100 + 3·5 = <strong>115</strong>;</li>
    <li>LCL = 100 − 3·5 = <strong>85</strong>.</li>
  </ul>
  <hr>
  <p class="mb-0">На графике красные (крупные) точки — те, что вышли за границы. Их <strong>2</strong>.</p>
</div>`,
        randomfrom: [1],
        chartjs: "shewhart",
        chartjsId: "quizChart",
        chartjsConfig: {
            mean: "100",
            sigma: "5",
            k: "3",
            points: "[98,102,101,99,104,117,103,97,101,84,100,102]"
        }
    },
    {
        id: "spc_chart_002",
        type: "multiplechoices",
        header: "SPC · Chart.js",
        title: "Что означает красная точка?",
        theme: "Контрольные карты",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Контрольная карта Шухарта
  </div>
  <div class="card-body">
    <p>На графике красные точки выделены особым цветом и размером.</p>

    <div class="chart-wrap" style="height: 340px;">
      <canvas id="quizChart"></canvas>
    </div>

    <div class="alert alert-warning mt-3 mb-0">
      <strong>Вопрос:</strong> Что означает красная точка?
    </div>
  </div>
</div>`,
        choices: [
            "Случайное отклонение в пределах нормы",
            "Особая причина: процесс вышел из-под контроля",
            "Ошибка измерения",
            "Нулевое значение"
        ],
        answers: ["Особая причина: процесс вышел из-под контроля"],
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📊 Как читать красные точки</h5>
  <p>В контрольных картах Шухарта точки вне границ 3σ выделяют особым цветом, потому что их появление с вероятностью ≈ 0.3 % не объясняется естественной вариабельностью.</p>
  <hr>
  <p class="mb-0">Это сигнал о <strong>специальной причине</strong>: сбой, ошибка, скачок нагрузки. Нужно <strong>остановить</strong> процесс и найти причину.</p>
</div>`,
        randomfrom: [1],
        chartjs: "shewhart",
        chartjsId: "quizChart",
        chartjsConfig: {
            mean: "200",
            sigma: "10",
            k: "3",
            points: "[195,202,198,205,207,220,199,203,201,178,204,200]"
        }
    },
    {
        id: "spc_chart_003",
        type: "mathwithrandomnumber",
        header: "SPC · Chart.js",
        title: "Значение UCL",
        theme: "Контрольные карты",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    UCL по правилу 3σ
  </div>
  <div class="card-body">
    <p>На графике — контрольная карта с параметрами μ = <strong>{var1-10}0</strong>, σ = <strong>4</strong>, границы построены по правилу 3σ.</p>

    <div class="chart-wrap" style="height: 340px;">
      <canvas id="quizChart"></canvas>
    </div>

    <div class="alert alert-warning mt-3 mb-0">
      <strong>Вопрос:</strong> Чему равна верхняя контрольная граница UCL? Введите число.
    </div>
  </div>
</div>`,
        answer: "{var1-10}*10+12",
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📐 Формула UCL</h5>
  <p class="text-center">$$ UCL = \\mu + 3\\sigma $$</p>
  <hr>
  <p class="mb-1">Подставляем:</p>
  <p class="text-center">$$ UCL = {var1-10}0 + 3 \\cdot 4 = {= {var1-10} * 10 + 12 } $$</p>
  <p class="mb-0">На графике UCL отмечена красной пунктирной линией.</p>
</div>`,
        randomfrom: [18, 20, 22, 25, 28],
        chartjs: "shewhart",
        chartjsId: "quizChart",
        chartjsConfig: {
            mean: "{= {var1-10} * 10}",
            sigma: "4",
            k: "3",
            points: "[{= {var1-10} * 10 - 3}, {= {var1-10} * 10 + 2}, {= {var1-10} * 10 - 1}, {= {var1-10} * 10 + 5}, {= {var1-10} * 10}, {= {var1-10} * 10 + 4}, {= {var1-10} * 10 - 6}, {= {var1-10} * 10 + 3}, {= {var1-10} * 10 - 2}, {= {var1-10} * 10 + 1}]"
        }
    },


    {
        id: "hyp_001",
        type: "multiplechoices",
        header: "Проверка гипотез · ОКСИС",
        title: "Ошибка I рода",
        theme: "Проверка гипотез",
        text: `
<div class="card">
  <div class="card-header bg-danger text-white">
    Ошибки I и II рода
  </div>
  <div class="card-body">
    <p>Проверяется гипотеза H₀: «новая версия системы не отличается по производительности от старой».</p>
    <p class="mb-0">Что такое <strong>ошибка I рода</strong>?</p>
  </div>
</div>`,
        choices: [
            "Принять H₀, когда она ложна",
            "Отклонить H₀, когда она верна",
            "Отклонить H₀, когда она ложна",
            "Принять H₀, когда она верна"
        ],
        answers: ["Отклонить H₀, когда она верна"],
        hint: `
<div class="alert alert-danger">
  <h5 class="mb-3">⚠️ Ошибки I и II рода</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th></th><th>H₀ верна</th><th>H₀ ложна</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>H₀ приняли</strong></td>
        <td class="table-success">✅ Верно</td>
        <td class="table-warning">⚠️ Ошибка II рода (β)</td>
      </tr>
      <tr>
        <td><strong>H₀ отклонили</strong></td>
        <td class="table-danger">❌ Ошибка I рода (α)</td>
        <td class="table-success">✅ Верно</td>
      </tr>
    </tbody>
  </table>
  <p class="mb-1"><strong>Аналогия с судом:</strong></p>
  <ul class="mb-0">
    <li>H₀: «обвиняемый невиновен».</li>
    <li><strong>Ошибка I рода</strong> — осудить невиновного.</li>
    <li><strong>Ошибка II рода</strong> — оправдать виновного.</li>
  </ul>
</div>`
    },
    {
        id: "hyp_002",
        type: "multiplechoices",
        header: "Проверка гипотез · ОКСИС",
        title: "p-значение",
        theme: "Проверка гипотез",
        text: `
<div class="card">
  <div class="card-header bg-danger text-white">
    p-значение
  </div>
  <div class="card-body">
    <p>В A/B-тесте получено p-значение = <strong>0.03</strong>. Уровень значимости α = <strong>0.05</strong>.</p>
    <p class="mb-0">Какое решение принимается?</p>
  </div>
</div>`,
        choices: [
            "Принять H₀",
            "Отклонить H₀ в пользу H₁",
            "Увеличить выборку",
            "Нельзя принять решение"
        ],
        answers: ["Отклонить H₀ в пользу H₁"],
        hint: `
<div class="alert alert-danger">
  <h5 class="mb-3">📊 Правило p-значения</h5>
  <table class="table table-sm">
    <thead class="table-light"><tr><th>Условие</th><th>Решение</th></tr></thead>
    <tbody>
      <tr><td><strong>p &lt; α</strong></td><td>Отклоняем H₀</td></tr>
      <tr><td><strong>p ≥ α</strong></td><td>Нет оснований отклонить H₀</td></tr>
    </tbody>
  </table>
  <hr>
  <p class="mb-1">В нашем случае:</p>
  <p class="text-center">$$ p = 0.03 < \\alpha = 0.05 $$</p>
  <p class="mb-0">Значит, результат <strong>статистически значим</strong> на уровне 5 %. Отклоняем H₀.</p>
</div>`
    },
    {
        id: "hyp_003",
        type: "mathwithrandomnumber",
        header: "Проверка гипотез · ОКСИС",
        title: "Расчёт z-статистики",
        theme: "Проверка гипотез",
        text: `
<div class="card">
  <div class="card-header bg-danger text-white">
    z-критерий
  </div>
  <div class="card-body">
    <p>Выборочное среднее время отклика <strong>x̄ = {var1-10}0 мс</strong>, генеральное среднее по стандарту <strong>μ₀ = 200 мс</strong>, σ = 40 мс, n = 100.</p>
    <p class="mb-0">Найдите z-статистику. Введите число с точностью до 0.1.</p>
  </div>
</div>`,
        answer: "ROUND(({var1-10} * 10 - 200) / (40 / 10), 1)",
        hint: `
<div class="alert alert-danger">
  <h5 class="mb-3">📐 z-критерий</h5>
  <p class="text-center">$$ Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} $$</p>
  <hr>
  <p class="mb-1">Подставляем:</p>
  <p class="text-center">$$ SE = \\frac{40}{10} = 4 $$</p>
  <p class="text-center">$$ Z = \\frac{ {= {var1-10} * 10} - 200 }{4} = {= ROUND(({var1-10} * 10 - 200) / 4, 1) } $$</p>
  
  <p class="mb-0">Если <strong>|Z| &gt; 1.96</strong>, гипотеза H₀ отклоняется на уровне 5 %.</p>
</div>`,
        randomfrom: [22, 24, 26, 18]
    },
    {
        id: "hyp_004",
        type: "multiplechoices",
        header: "Проверка гипотез · ОКСИС",
        title: "Когда использовать t-критерий?",
        theme: "Проверка гипотез",
        text: `
<div class="card">
  <div class="card-header bg-danger text-white">
    z- или t-критерий?
  </div>
  <div class="card-body">
    <p>Выборка <strong>n = 15</strong>, стандартное отклонение генеральной совокупности <strong>неизвестно</strong>. Какое распределение использовать для проверки гипотезы о среднем?</p>
  </div>
</div>`,
        choices: [
            "Нормальное распределение (z-критерий)",
            "Распределение Стьюдента (t-критерий)",
            "Распределение Пуассона",
            "Хи-квадрат"
        ],
        answers: ["Распределение Стьюдента (t-критерий)"],
        hint: `
<div class="alert alert-danger">
  <h5 class="mb-3">📊 Выбор критерия</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>Ситуация</th><th>Критерий</th></tr>
    </thead>
    <tbody>
      <tr><td>σ известна, любое n</td><td>z</td></tr>
      <tr><td>σ неизвестна, n &gt; 30</td><td>z (приближённо)</td></tr>
      <tr><td>σ неизвестна, <strong>n &lt; 30</strong></td><td><strong>t</strong></td></tr>
    </tbody>
  </table>
  <p class="mb-1">t-распределение имеет более <strong>тяжёлые хвосты</strong>, чем нормальное, потому что мы «не знаем» σ и заменяем её выборочной s.</p>
  <p class="mb-0">Число степеней свободы: <strong>df = n − 1 = 14</strong>.</p>
</div>`
    },
    {
        id: "hyp_005",
        type: "multiplechoices",
        header: "Проверка гипотез · ОКСИС",
        title: "χ²-критерий Пирсона",
        theme: "Проверка гипотез",
        text: `
<div class="card">
  <div class="card-header bg-danger text-white">
    Критерий согласия Пирсона
  </div>
  <div class="card-body">
    <p>Проверяется гипотеза о том, что распределение дефектов по 5 категориям соответствует ожидаемому. Используется критерий χ². Число степеней свободы <strong>df</strong>?</p>
  </div>
</div>`,
        choices: [
            "5",
            "4",
            "6",
            "3"
        ],
        answers: ["4"],
        hint: `
<div class="alert alert-danger">
  <h5 class="mb-3">📐 Критерий χ²</h5>
  <p class="text-center">$$ \\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i} $$</p>
  <p class="mb-2">где <em>O<sub>i</sub></em> — наблюдаемые частоты, <em>E<sub>i</sub></em> — ожидаемые.</p>
  <hr>
  <p class="mb-1"><strong>Число степеней свободы</strong> для критерия согласия:</p>
  <p class="text-center">$$ df = k - 1 $$</p>
  <p class="mb-0">При <em>k = 5</em> категориях: <strong>df = 4</strong>.</p>
</div>`
    },

        // ============================================================
    // ============ БЛОК 3: КОНТРОЛЬНЫЕ КАРТЫ И Cp/Cpk ============
    // ============================================================
    {
        id: "spc_001",
        type: "multiplechoices",
        header: "SPC · ОКСИС",
        title: "Что такое контрольная карта Шухарта?",
        theme: "Статистическое управление процессами",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Контрольная карта Шухарта
  </div>
  <div class="card-body">
    <p>Для чего используется контрольная карта Шухарта (Shewhart chart)?</p>
  </div>
</div>`,
        choices: [
            "Для прогнозирования прибыли компании",
            "Для различения обычных (случайных) и особых (неестественных) вариаций процесса",
            "Для расчёта среднего значения выборки",
            "Для сравнения двух команд разработчиков"
        ],
        answers: ["Для различения обычных (случайных) и особых (неестественных) вариаций процесса"],
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📊 Идея контрольной карты</h5>
  <p>Любой процесс имеет <strong>естественную вариабельность</strong> (common cause). Но иногда возникают <strong>особые причины</strong> (special cause) — сбой сервера, ошибка разработчика, всплеск нагрузки.</p>
  <hr>
  <p class="mb-2"><strong>Элементы карты Шухарта:</strong></p>
  <ul>
    <li><strong>CL</strong> — центральная линия (среднее);</li>
    <li><strong>UCL</strong> — верхняя контрольная граница (обычно μ + 3σ);</li>
    <li><strong>LCL</strong> — нижняя контрольная граница (μ − 3σ);</li>
    <li><strong>Точки</strong> — последовательные измерения метрики.</li>
  </ul>
  <p class="mb-0"><strong>Правило:</strong> если точка выходит за 3σ — процесс «вышел из-под контроля», нужно искать особую причину.</p>
</div>`
    },
    {
        id: "spc_002",
        type: "multiplechoices",
        header: "SPC · ОКСИС",
        title: "Точка за границей 3σ",
        theme: "Статистическое управление процессами",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Чтение контрольной карты
  </div>
  <div class="card-body">
    <p>На графике показана контрольная карта времени отклика сервера. Одна из точек вышла за <strong>верхнюю контрольную границу</strong>.</p>

    <svg viewBox="0 0 620 260" width="100%" style="max-width:620px; display:block; margin:0 auto;">
      <rect x="0" y="0" width="620" height="260" fill="#fff" stroke="#adb5bd"/>

      <!-- Оси -->
      <line x1="60" y1="220" x2="600" y2="220" stroke="#495057" stroke-width="1.5"/>
      <line x1="60" y1="20"  x2="60"  y2="220" stroke="#495057" stroke-width="1.5"/>

      <!-- UCL -->
      <line x1="60" y1="60"  x2="600" y2="60"  stroke="#dc3545" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="605" y="64"  font-size="12" fill="#dc3545">UCL</text>

      <!-- CL -->
      <line x1="60" y1="120" x2="600" y2="120" stroke="#198754" stroke-width="1.5"/>
      <text x="605" y="124" font-size="12" fill="#198754">CL</text>

      <!-- LCL -->
      <line x1="60" y1="180" x2="600" y2="180" stroke="#dc3545" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="605" y="184" font-size="12" fill="#dc3545">LCL</text>

      <!-- Точки -->
      <polyline points="100,140 160,125 220,110 280,105 340,130 400,45 460,120 520,135 580,125"
                fill="none" stroke="#0d6efd" stroke-width="2"/>

      <!-- Все точки -->
      <circle cx="100" cy="140" r="4" fill="#0d6efd"/>
      <circle cx="160" cy="125" r="4" fill="#0d6efd"/>
      <circle cx="220" cy="110" r="4" fill="#0d6efd"/>
      <circle cx="280" cy="105" r="4" fill="#0d6efd"/>
      <circle cx="340" cy="130" r="4" fill="#0d6efd"/>
      <circle cx="400" cy="45"  r="6" fill="#dc3545" stroke="#fff" stroke-width="1.5"/>
      <circle cx="460" cy="120" r="4" fill="#0d6efd"/>
      <circle cx="520" cy="135" r="4" fill="#0d6efd"/>
      <circle cx="580" cy="125" r="4" fill="#0d6efd"/>
    </svg>

    <p class="mt-3 mb-0">Что это означает?</p>
  </div>
</div>`,
        choices: [
            "Случайное колебание, реагировать не нужно",
            "Процесс вышел из-под контроля, нужно искать особую причину",
            "Среднее значение сместилось",
            "Нужно увеличить размер выборки"
        ],
        answers: ["Процесс вышел из-под контроля, нужно искать особую причину"],
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📊 Правило 3σ</h5>
  <p>На контрольной карте Шухарта границы проведены на уровне <strong>μ ± 3σ</strong>.</p>
  <p>Вероятность, что точка выйдет за одну границу <em>по чистой случайности</em>, мала — около <strong>0.135 %</strong> для каждой границы.</p>
  <hr>
  <p class="mb-2"><strong>Действие:</strong> если точка вышла за границу, процесс считается <strong>нестабильным</strong>.</p>
  <ul class="mb-0">
    <li>Нужно <strong>остановить</strong> процесс или вмешаться;</li>
    <li>Найти <strong>особую причину</strong> (сбой, ошибка, нагрузка);</li>
    <li>Устранить причину и пересчитать границы.</li>
  </ul>
</div>`
    },
    {
        id: "spc_003",
        type: "multiplechoices",
        header: "SPC · ОКСИС",
        title: "Индекс воспроизводимости Cp",
        theme: "Индексы воспроизводимости",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Индекс Cp
  </div>
  <div class="card-body">
    <p>Время отклика сервера должно лежать в интервале <strong>[180; 220] мс</strong> (ширина допуска 40 мс). Стандартное отклонение процесса <strong>σ = 5 мс</strong>.</p>
    <p class="mb-0">Найдите индекс воспроизводимости Cp.</p>
  </div>
</div>`,
        choices: [
            "1.0",
            "1.33",
            "1.67",
            "2.0"
        ],
        answers: ["1.33"],
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📐 Формула Cp</h5>
  <p class="text-center">$$ C_p = \\frac{USL - LSL}{6\\sigma} $$</p>
  <p class="mb-2">где <em>USL</em> — верхняя граница допуска, <em>LSL</em> — нижняя.</p>
  <hr>
  <p class="mb-1">Подставляем:</p>
  <p class="text-center">$$ C_p = \\frac{220 - 180}{6 \\cdot 5} = \\frac{40}{30} = 1.33 $$</p>
  <p class="mb-0"><strong>Интерпретация:</strong> Cp ≥ 1.33 считается приемлемым; Cp ≥ 1.67 — хорошим; Cp ≥ 2.0 — мировым классом.</p>
</div>`
    },
    {
        id: "spc_004",
        type: "multiplechoices",
        header: "SPC · ОКСИС",
        title: "Cpk vs Cp",
        theme: "Индексы воспроизводимости",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Чем Cpk отличается от Cp?
  </div>
  <div class="card-body">
    <p>В каком случае <strong>Cpk &lt; Cp</strong>?</p>
  </div>
</div>`,
        choices: [
            "Когда процесс центрирован относительно середины допуска",
            "Когда среднее процесса смещено от середины допуска",
            "Когда σ = 0",
            "Никогда, они всегда равны"
        ],
        answers: ["Когда среднее процесса смещено от середины допуска"],
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📊 Cp vs Cpk</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>Индекс</th><th>Что учитывает</th><th>Формула</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Cp</strong></td>
        <td>Только <em>ширину</em> процесса</td>
        <td>(USL − LSL) / 6σ</td>
      </tr>
      <tr>
        <td><strong>Cpk</strong></td>
        <td>Ширину <strong>и</strong> смещение</td>
        <td>min((USL − μ)/3σ, (μ − LSL)/3σ)</td>
      </tr>
    </tbody>
  </table>
  <hr>
  <p class="mb-1"><strong>Ключевое:</strong></p>
  <ul class="mb-0">
    <li>Если процесс <strong>центрирован</strong> — Cp = Cpk.</li>
    <li>Если среднее <strong>смещено</strong> — Cpk &lt; Cp.</li>
    <li>Cpk всегда ≤ Cp.</li>
  </ul>
</div>`
    },
    {
        id: "spc_005",
        type: "mathwithrandomnumber",
        header: "SPC · ОКСИС",
        title: "Расчёт Cpk",
        theme: "Индексы воспроизводимости",
        text: `
<div class="card">
  <div class="card-header bg-warning text-dark">
    Расчёт Cpk
  </div>
  <div class="card-body">
    <p>Допуск: <strong>[100; 200] мс</strong>. Среднее процесса <strong>μ = {= 120 + {var1-10}} мс</strong>, σ = 10 мс.</p>
    <p class="mb-0">Найдите Cpk. Введите число с точностью до 0.01.</p>
  </div>
</div>`,
        answer: "ROUND(Math.min((200 - (120 + {var1-10})) / 30, ((120 + {var1-10}) - 100) / 30), 2)",
        hint: `
<div class="alert alert-warning">
  <h5 class="mb-3">📐 Расчёт Cpk</h5>
  <p class="text-center">$$ C_{pk} = \\min\\left( \\frac{USL - \\mu}{3\\sigma},\\; \\frac{\\mu - LSL}{3\\sigma} \\right) $$</p>
  <hr>
  <p class="mb-2"><strong>Верхняя сторона:</strong></p>
  <p class="text-center">$$ \\frac{200 - {= 120 + {var1-10}}}{30} = {= ROUND((200 - (120 + {var1-10})) / 30, 2) } $$</p>
  <p class="mb-2"><strong>Нижняя сторона:</strong></p>
  <p class="text-center">$$ \\frac{120 + {var1-10} - 100}{30} = {= ROUND(((120 + {var1-10}) - 100) / 30, 2) } $$</p>
  <p class="mb-0">Cpk = минимум из двух. Если среднее близко к верхней границе, ограничение будет сверху.</p>
</div>`,
        randomfrom: [20, 30, 40, 50, 60]
    },

    // ============================================================
    // ============ БЛОК 4: ПЛАНЫ ВЫБОРОЧНОГО КОНТРОЛЯ ============
    // ============================================================
    {
        id: "sampling_001",
        type: "multiplechoices",
        header: "Выборочный контроль · ОКСИС",
        title: "Что такое AQL?",
        theme: "Приёмочный контроль",
        text: `
<div class="card">
  <div class="card-header bg-info text-white">
    AQL — Acceptable Quality Level
  </div>
  <div class="card-body">
    <p>Что означает <strong>AQL</strong> в планах выборочного контроля?</p>
  </div>
</div>`,
        choices: [
            "Среднее качество партии",
            "Приемлемый уровень качества — максимальная доля дефектов, считающаяся приемлемой",
            "Максимальная доля дефектов, при которой партия бракуется",
            "Размер выборки"
        ],
        answers: ["Приемлемый уровень качества — максимальная доля дефектов, считающаяся приемлемой"],
        hint: `
<div class="alert alert-info">
  <h5 class="mb-3">📊 AQL и LTPD</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>Термин</th><th>Расшифровка</th><th>Смысл</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>AQL</strong></td>
        <td>Acceptable Quality Level</td>
        <td>Доля дефектов, которую <strong>приемлемо</strong> считать хорошей партией</td>
      </tr>
      <tr>
        <td><strong>LTPD</strong></td>
        <td>Lot Tolerance Percent Defective</td>
        <td>Доля дефектов, при которой партия <strong>должна быть отклонена</strong></td>
      </tr>
    </tbody>
  </table>
  <hr>
  <p class="mb-1"><strong>Два риска:</strong></p>
  <ul class="mb-0">
    <li><strong>Риск поставщика α</strong> — забраковать хорошую партию (при уровне AQL);</li>
    <li><strong>Риск потребителя β</strong> — принять плохую партию (при уровне LTPD).</li>
  </ul>
</div>`
    },
    {
        id: "sampling_002",
        type: "multiplechoices",
        header: "Выборочный контроль · ОКСИС",
        title: "Операционная характеристика",
        theme: "Приёмочный контроль",
        text: `
<div class="card">
  <div class="card-header bg-info text-white">
    OC-кривая плана контроля
  </div>
  <div class="card-body">
    <p>На графике показана операционная характеристика плана выборочного контроля.</p>

    <svg viewBox="0 0 620 300" width="100%" style="max-width:620px; display:block; margin:0 auto;">
      <rect x="0" y="0" width="620" height="300" fill="#fff" stroke="#adb5bd"/>

      <!-- Оси -->
      <line x1="60" y1="250" x2="600" y2="250" stroke="#495057" stroke-width="1.5"/>
      <line x1="60" y1="30"  x2="60"  y2="250" stroke="#495057" stroke-width="1.5"/>

      <!-- Подписи осей -->
      <text x="320" y="285" text-anchor="middle" font-size="13" fill="#495057">Доля дефектов в партии (p)</text>
      <text x="20" y="140" text-anchor="middle" font-size="13" fill="#495057" transform="rotate(-90, 20, 140)">Вероятность приёмки</text>

      <!-- Деления по Y -->
      <text x="50" y="50"  text-anchor="end" font-size="11" fill="#495057">1.0</text>
      <text x="50" y="95"  text-anchor="end" font-size="11" fill="#495057">0.9</text>
      <text x="50" y="140" text-anchor="end" font-size="11" fill="#495057">0.5</text>
      <text x="50" y="185" text-anchor="end" font-size="11" fill="#495057">0.1</text>
      <text x="50" y="230" text-anchor="end" font-size="11" fill="#495057">0.0</text>

      <!-- Горизонтальные направляющие -->
      <line x1="60" y1="50"  x2="600" y2="50"  stroke="#e9ecef" stroke-width="1"/>
      <line x1="60" y1="95"  x2="600" y2="95"  stroke="#e9ecef" stroke-width="1"/>
      <line x1="60" y1="140" x2="600" y2="140" stroke="#e9ecef" stroke-width="1"/>
      <line x1="60" y1="185" x2="600" y2="185" stroke="#e9ecef" stroke-width="1"/>

      <!-- OC-кривая (убывающая) -->
      <path d="M 60 45 Q 180 45 240 90 T 360 185 Q 420 220 600 245"
            fill="none" stroke="#0d6efd" stroke-width="3"/>

      <!-- AQL и LTPD метки -->
      <line x1="180" y1="45" x2="180" y2="250" stroke="#198754" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="180" y="270" text-anchor="middle" font-size="12" fill="#198754">AQL</text>

      <line x1="360" y1="185" x2="360" y2="250" stroke="#dc3545" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="360" y="270" text-anchor="middle" font-size="12" fill="#dc3545">LTPD</text>

      <circle cx="180" cy="50"  r="4" fill="#198754"/>
      <circle cx="360" cy="185" r="4" fill="#dc3545"/>
    </svg>

    <p class="mt-3 mb-0">Что показывает точка <strong>AQL</strong> на этой кривой?</p>
  </div>
</div>`,
        choices: [
            "Вероятность приёмки партии при уровне AQL очень высокая (близка к 1)",
            "Вероятность приёмки партии при уровне AQL равна 0.5",
            "Партия отклоняется при AQL",
            "Партия приёмки не зависит от AQL"
        ],
        answers: ["Вероятность приёмки партии при уровне AQL очень высокая (близка к 1)"],
        hint: `
<div class="alert alert-info">
  <h5 class="mb-3">📊 Чтение OC-кривой</h5>
  <p><strong>По горизонтали:</strong> доля дефектов в партии.</p>
  <p><strong>По вертикали:</strong> вероятность принять партию.</p>
  <hr>
  <p class="mb-2"><strong>Две ключевые точки:</strong></p>
  <ul class="mb-2">
    <li><strong>AQL</strong> — доля дефектов, которую считаем приемлемой. Вероятность приёмки здесь должна быть <strong>высокой (≥ 0.95)</strong>. Иначе хорошие партии будут часто браковаться (риск поставщика α).</li>
    <li><strong>LTPD</strong> — доля дефектов, при которой партия должна быть отклонена. Вероятность приёмки здесь должна быть <strong>низкой (≤ 0.10)</strong>. Иначе плохие партии будут часто приниматься (риск потребителя β).</li>
  </ul>
  <p class="mb-0">Чем <strong>круче</strong> кривая, тем <strong>лучше</strong> план различает хорошие и плохие партии.</p>
</div>`
    },
    {
        id: "sampling_003",
        type: "multiplechoices",
        header: "Выборочный контроль · ОКСИС",
        title: "Риск поставщика и потребителя",
        theme: "Приёмочный контроль",
        text: `
<div class="card">
  <div class="card-header bg-info text-white">
    Риски в выборочном контроле
  </div>
  <div class="card-body">
    <p>Что такое <strong>риск потребителя β</strong>?</p>
  </div>
</div>`,
        choices: [
            "Вероятность забраковать хорошую партию",
            "Вероятность принять плохую партию",
            "Вероятность ошибки при отборе выборки",
            "Вероятность отказа оборудования"
        ],
        answers: ["Вероятность принять плохую партию"],
        hint: `
<div class="alert alert-info">
  <h5 class="mb-3">📊 Два риска</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>Риск</th><th>Обозначение</th><th>Что означает</th><th>Кто страдает</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Риск поставщика</strong></td>
        <td>α</td>
        <td>Забраковать хорошую партию</td>
        <td>Поставщик</td>
      </tr>
      <tr>
        <td><strong>Риск потребителя</strong></td>
        <td>β</td>
        <td>Принять плохую партию</td>
        <td>Потребитель</td>
      </tr>
    </tbody>
  </table>
  <hr>
  <p class="mb-2">Типичные значения:</p>
  <ul class="mb-0">
    <li>α = 0.05 (5 %)</li>
    <li>β = 0.10 (10 %)</li>
  </ul>
</div>`
    },
    {
        id: "sampling_004",
        type: "multiplechoices",
        header: "Выборочный контроль · ОКСИС",
        title: "Одноступенчатый и двухступенчатый контроль",
        theme: "Приёмочный контроль",
        text: `
<div class="card">
  <div class="card-header bg-info text-white">
    Виды планов контроля
  </div>
  <div class="card-body">
    <p>Чем <strong>двухступенчатый</strong> план отличается от <strong>одноступенчатого</strong>?</p>
  </div>
</div>`,
        choices: [
            "Использует меньший размер выборки",
            "Использует две выборки: если результат первой неоднозначен, берётся вторая",
            "Не требует контроля",
            "Работает только с долей дефектов"
        ],
        answers: ["Использует две выборки: если результат первой неоднозначен, берётся вторая"],
        hint: `
<div class="alert alert-info">
  <h5 class="mb-3">📊 Сравнение планов</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>План</th><th>Как работает</th><th>Плюсы</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Одноступенчатый</strong></td>
        <td>Берём одну выборку n. Если дефектов ≤ c — принимаем, иначе — бракуем.</td>
        <td>Простой, предсказуемый</td>
      </tr>
      <tr>
        <td><strong>Двухступенчатый</strong></td>
        <td>Берём первую выборку n₁. Если дефектов ≤ c₁ — принимаем; если ≥ c₂ — бракуем; если между — берём вторую выборку n₂.</td>
        <td>В среднем меньше объём контроля</td>
      </tr>
      <tr>
        <td><strong>Последовательный</strong></td>
        <td>Проверяем по одному изделию, пока не накопится достаточно данных для решения.</td>
        <td>Наименьший средний объём</td>
      </tr>
    </tbody>
  </table>
  <p class="mb-0">Двухступенчатый план экономит ресурсы, потому что в большинстве случаев решение принимается уже на первой выборке.</p>
</div>`
    },
    {
        id: "sampling_005",
        type: "mathwithrandomnumber",
        header: "Выборочный контроль · ОКСИС",
        title: "Размер выборки по AQL",
        theme: "Приёмочный контроль",
        text: `
<div class="card">
  <div class="card-header bg-info text-white">
    Размер выборки
  </div>
  <div class="card-body">
    <p>Партия содержит <strong>{= {var1-10} * 100}</strong> изделий. По стандарту для уровня контроля II и AQL = 1 % размер выборки составляет <strong>{var1-10}</strong> изделий.</p>
    <p class="mb-0">Какой процент от партии составляет выборка? Введите число с точностью до 1 %.</p>
  </div>
</div>`,
        answer: "{= ROUND(100 / 100, 0) }",
        hint: `
<div class="alert alert-info">
  <h5 class="mb-3">📐 Доля выборки</h5>
  <p class="text-center">$$ \\text{Доля} = \\frac{n}{N} \\cdot 100\\% $$</p>
  <hr>
  <p class="mb-1">Подставляем:</p>
  <p class="text-center">$$ n = {var1-10},\\quad N = {= {var1-10} * 100} $$</p>
  <p class="text-center">$$ \\text{Доля} = \\frac{ {var1-10} }{ {= {var1-10} * 100} } \\cdot 100\\% = 1\\% $$</p>
  <p class="mb-0"><strong>Важное наблюдение:</strong> доля выборки <strong>не зависит</strong> от объёма партии при фиксированных AQL и уровне контроля. Стандарты (например, ISO 2859-1) задают объём выборки по AQL и уровню контроля, а не по размеру партии.</p>
</div>`,
        randomfrom: [2, 3, 4, 5, 6]
    },

    // ============================================================
    // ============ БЛОК 5: МОДЕЛИ НАДЁЖНОСТИ =====================
    // ============================================================
    {
        id: "reliability_001",
        type: "multiplechoices",
        header: "Надёжность · ОКСИС",
        title: "Что такое MTBF?",
        theme: "Метрики надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    MTBF
  </div>
  <div class="card-body">
    <p>Что означает метрика <strong>MTBF</strong>?</p>
  </div>
</div>`,
        choices: [
            "Maximum Time Between Failures",
            "Mean Time Between Failures — среднее время между отказами",
            "Minimum Time Before Failure",
            "Mean Test Before Failure"
        ],
        answers: ["Mean Time Between Failures — среднее время между отказами"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📊 Основные метрики надёжности</h5>
  <table class="table">
    <thead class="table-light">
      <tr><th>Метрика</th><th>Расшифровка</th><th>Смысл</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MTBF</strong></td>
        <td>Mean Time Between Failures</td>
        <td>Среднее время <strong>между</strong> отказами (для восстанавливаемых систем)</td>
      </tr>
      <tr>
        <td><strong>MTTF</strong></td>
        <td>Mean Time To Failure</td>
        <td>Среднее время <strong>до</strong> первого отказа (для невосстанавливаемых)</td>
      </tr>
      <tr>
        <td><strong>MTTR</strong></td>
        <td>Mean Time To Repair</td>
        <td>Среднее время <strong>восстановления</strong> после отказа</td>
      </tr>
    </tbody>
  </table>
  <hr>
  <p class="mb-1"><strong>Связь с коэффициентом готовности:</strong></p>
  <p class="text-center">$$ A = \\frac{MTBF}{MTBF + MTTR} $$</p>
  <p class="mb-0">Чем больше MTBF и меньше MTTR, тем выше готовность системы.</p>
</div>`
    },
    {
        id: "reliability_002",
        type: "multiplechoices",
        header: "Надёжность · ОКСИС",
        title: "Экспоненциальное распределение",
        theme: "Модели надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Модель отказов
  </div>
  <div class="card-body">
    <p>Время между отказами сервера описывается <strong>экспоненциальным распределением</strong> с интенсивностью отказов λ.</p>
    <p class="mb-0">Какая формула вероятности безотказной работы на интервале [0; t]?</p>
  </div>
</div>`,
        choices: [
            "$$ P(t) = \\lambda t $$",
            "$$ P(t) = e^{-\\lambda t} $$",
            "$$ P(t) = 1 - e^{-\\lambda t} $$",
            "$$ P(t) = \\frac{1}{\\lambda t} $$"
        ],
        answers: ["$$ P(t) = e^{-\\lambda t} $$"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📐 Экспоненциальная модель</h5>
  <p class="mb-2">Если время до отказа распределено экспоненциально с интенсивностью λ, то:</p>
  <ul class="mb-2">
    <li><strong>Вероятность безотказной работы</strong> до момента t: <em>P(t) = e<sup>−λt</sup></em>.</li>
    <li><strong>Вероятность отказа</strong> до момента t: <em>F(t) = 1 − e<sup>−λt</sup></em>.</li>
    <li><strong>MTBF</strong> = 1 / λ.</li>
  </ul>
  <hr>
  <p class="mb-2"><strong>Пример:</strong> λ = 0.001 отказов в час (≈ 1 отказ на 1000 часов).</p>
  <p class="text-center">$$ P(1000) = e^{-0.001 \\cdot 1000} = e^{-1} \\approx 0.368 $$</p>
  <p class="mb-0">Вероятность проработать без отказа 1000 часов — около 37 %.</p>
</div>`
    },
    {
        id: "reliability_003",
        type: "mathwithrandomnumber",
        header: "Надёжность · ОКСИС",
        title: "Расчёт MTBF",
        theme: "Метрики надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    MTBF через интенсивность отказов
  </div>
  <div class="card-body">
    <p>Интенсивность отказов сервера <strong>λ = 0.00{var1-10} отказов в час</strong>.</p>
    <p class="mb-0">Найдите MTBF в часах. Введите целое число.</p>
  </div>
</div>`,
        answer: "ROUND(1 / (0.00 * 1 + {var1-10} / 1000), 0)",
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📐 Связь MTBF и λ</h5>
  <p class="text-center">$$ MTBF = \\frac{1}{\\lambda} $$</p>
  <hr>
  <p class="mb-1">Подставляем λ = 0.00{var1-10}:</p>
  <p class="text-center">$$ MTBF = \\frac{1}{0.00{var1-10}} = {= ROUND(1 / ({var1-10} / 1000), 0) } \\text{ часов} $$</p>
  <p class="mb-0"><strong>Интерпретация:</strong> чем меньше λ, тем больше MTBF и выше надёжность системы.</p>
</div>`,
        randomfrom: [2, 4, 5, 8, 10]
    },
    {
        id: "reliability_004",
        type: "multiplechoices",
        header: "Надёжность · ОКСИС",
        title: "Модель роста надёжности",
        theme: "Модели надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Модель роста надёжности
  </div>
  <div class="card-body">
    <p>Что описывают модели роста надёжности (например, Jelinski–Moranda, Musa–Okumoto)?</p>
  </div>
</div>`,
        choices: [
            "Снижение количества оставшихся дефектов по мере тестирования",
            "Увеличение прибыли от релиза к релизу",
            "Рост нагрузки на сервер",
            "Увеличение числа пользователей"
        ],
        answers: ["Снижение количества оставшихся дефектов по мере тестирования"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📊 Модели роста надёжности</h5>
  <p class="mb-2">По мере тестирования:</p>
  <ul class="mb-2">
    <li>Найденные дефекты <strong>устраняются</strong>;</li>
    <li>Интенсивность отказов λ(t) <strong>снижается</strong>;</li>
    <li>Оценка количества <strong>оставшихся дефектов</strong> уточняется.</li>
  </ul>
  <hr>
  <p class="mb-2"><strong>Модель Musa–Okumoto (базовая):</strong></p>
  <p class="text-center">$$ \\lambda(t) = \\lambda_0 \\cdot e^{-\\theta t} $$</p>
  <p class="mb-2">где λ₀ — начальная интенсивность, θ — параметр роста.</p>
  <p class="mb-0"><strong>Применение:</strong> прогноз даты выхода на заданный уровень надёжности (например, «0.1 отказа на 1000 часов»).</p>
</div>`
    },
    {
        id: "reliability_005",
        type: "multiplechoices",
        header: "Надёжность · ОКСИС",
        title: "Коэффициент готовности",
        theme: "Метрики надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Коэффициент готовности A
  </div>
  <div class="card-body">
    <p>MTBF = <strong>990 часов</strong>, MTTR = <strong>10 часов</strong>. Найдите коэффициент готовности.</p>
  </div>
</div>`,
        choices: [
            "0.99",
            "0.95",
            "0.90",
            "0.999"
        ],
        answers: ["0.99"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📐 Формула готовности</h5>
  <p class="text-center">$$ A = \\frac{MTBF}{MTBF + MTTR} $$</p>
  <hr>
  <p class="mb-1">Подставляем:</p>
  <p class="text-center">$$ A = \\frac{990}{990 + 10} = \\frac{990}{1000} = 0.99 $$</p>
  <p class="mb-2"><strong>Интерпретация:</strong> система готова к работе 99 % времени, недоступна 1 % времени.</p>
  <p class="mb-0">За год (8760 часов) это соответствует примерно <strong>87.6 часа</strong> недоступности — типичный показатель для SLA уровня «99 %» (two nines).</p>
</div>`
    },

        {
        id: "reliab_jsx_001",
        type: "multiplechoices",
        header: "Надёжность · JSXGraph",
        title: "Как меняется λ(t)?",
        theme: "Модели роста надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Модель роста надёжности
  </div>
  <div class="card-body">
    <p>На графике показана зависимость интенсивности отказов λ(t) от времени тестирования t. Модель: λ(t) = λ₀·e^(−θt).</p>

    <div id="quizJsxGraph" class="jxgbox" style="width:100%; aspect-ratio:16/9; max-width:600px; margin:0 auto;"></div>

    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Как меняется интенсивность отказов по мере тестирования?
    </div>
  </div>
</div>`,
        choices: [
            "Растёт — система ухудшается",
            "Убывает — система становится надёжнее",
            "Не меняется",
            "Сначала растёт, потом падает"
        ],
        answers: ["Убывает — система становится надёжнее"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📊 Модель роста надёжности</h5>
  <p>По мере тестирования:</p>
  <ul>
    <li>Дефекты <strong>находятся</strong> и <strong>исправляются</strong>;</li>
    <li>Интенсивность отказов <strong>снижается</strong>;</li>
    <li>Кривая λ(t) идёт <strong>вниз</strong>.</li>
  </ul>
  <hr>
  <p class="mb-2">Модель Musa–Okumoto:</p>
  <p class="text-center">$$ \\lambda(t) = \\lambda_0 \\cdot e^{-\\theta t} $$</p>
  <p class="mb-0">λ₀ — начальная интенсивность, θ — параметр роста.</p>
</div>`,
        randomfrom: [1],
        jsxgraph: "reliability",
        jsxgraphId: "quizJsxGraph",
        jsxgraphConfig: {
            lambda0: "0.01",
            theta: "0.3",
            xMax: "10",
            color: "#0d6efd"
        }
    },
    {
        id: "reliab_jsx_002",
        type: "multiplechoices",
        header: "Надёжность · JSXGraph",
        title: "Смысл касательной к кривой надёжности",
        theme: "Модели роста надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Касательная к кривой надёжности
  </div>
  <div class="card-body">
    <p>На графике показана кривая λ(t) и <strong>касательная</strong> в точке A. Двигая точку A, можно наблюдать, как меняется наклон касательной.</p>

    <div id="quizJsxGraph" class="jxgbox" style="width:100%; aspect-ratio:16/9; max-width:600px; margin:0 auto;"></div>

    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Что означает <em>угловой коэффициент</em> касательной в точке A?
    </div>
  </div>
</div>`,
        choices: [
            "Значение λ(t) в точке A",
            "Скорость изменения интенсивности отказов в точке A",
            "Общее число дефектов",
            "Размер выборки"
        ],
        answers: ["Скорость изменения интенсивности отказов в точке A"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📐 Геометрический смысл касательной</h5>
  <p>Угловой коэффициент касательной = <strong>производная</strong> функции в этой точке:</p>
  <p class="text-center">$$ k = \\lambda'(t) $$</p>
  <hr>
  <p class="mb-2"><strong>Для модели λ(t) = λ₀·e^(−θt):</strong></p>
  <p class="text-center">$$ \\lambda'(t) = -\\theta \\cdot \\lambda_0 \\cdot e^{-\\theta t} = -\\theta \\lambda(t) $$</p>
  <p class="mb-2">Производная всегда <strong>отрицательная</strong> — кривая убывает. Наклон тем круче, чем <strong>больше θ</strong> (быстрее рост надёжности).</p>
  <p class="mb-0">В точке A касательная показывает, насколько быстро снижается интенсивность отказов.</p>
</div>`,
        randomfrom: [1],
        jsxgraph: "reliabilityTangent",
        jsxgraphId: "quizJsxGraph",
        jsxgraphConfig: {
            lambda0: "0.01",
            theta: "0.3",
            xMax: "10",
            gliderX: "3"
        }
    },
    {
        id: "reliab_jsx_003",
        type: "multiplechoices",
        header: "Надёжность · JSXGraph",
        title: "Сравнение двух моделей роста",
        theme: "Модели роста надёжности",
        text: `
<div class="card">
  <div class="card-header bg-success text-white">
    Сравнение двух моделей
  </div>
  <div class="card-body">
    <p>На двух графиках показаны кривые надёжности с одинаковым λ₀, но разными значениями θ.</p>

    <div class="row">
      <div class="col-md-6">
        <div id="quizJsxGraphA" class="jxgbox" style="width:100%; aspect-ratio:1/1;"></div>
        <div class="text-center mt-2"><strong>Модель А (θ = 0.1)</strong></div>
      </div>
      <div class="col-md-6">
        <div id="quizJsxGraphB" class="jxgbox" style="width:100%; aspect-ratio:1/1;"></div>
        <div class="text-center mt-2"><strong>Модель Б (θ = 0.5)</strong></div>
      </div>
    </div>

    <div class="alert alert-success mt-3 mb-0">
      <strong>Вопрос:</strong> Какая модель быстрее снижает интенсивность отказов?
    </div>
  </div>
</div>`,
        choices: [
            "Модель А (θ = 0.1)",
            "Модель Б (θ = 0.5)",
            "Обе одинаково",
            "Нельзя определить"
        ],
        answers: ["Модель Б (θ = 0.5)"],
        hint: `
<div class="alert alert-success">
  <h5 class="mb-3">📊 Роль параметра θ</h5>
  <p>Чем <strong>больше θ</strong>, тем:</p>
  <ul class="mb-2">
    <li>круче кривая падает;</li>
    <li>быстрее снижается интенсивность отказов;</li>
    <li>быстрее достигается требуемый уровень надёжности.</li>
  </ul>
  <hr>
  <p class="mb-2">Сравнение: при θ = 0.1 λ(10) ≈ 0.0037; при θ = 0.5 λ(10) ≈ 0.00007.</p>
  <p class="mb-0">Модель Б снижает интенсивность отказов <strong>на порядок быстрее</strong>.</p>
</div>`,
        randomfrom: [1],
        jsxgraph: [
            { type: "reliability", id: "quizJsxGraphA", config: { lambda0: "0.01", theta: "0.1", xMax: "10" } },
            { type: "reliability", id: "quizJsxGraphB", config: { lambda0: "0.01", theta: "0.5", xMax: "10" } }
        ]
    },


    // ==================== ТЕМА 1: Основы качества и стандартизации ====================
    {
        "id": "qa_001",
        "type": "multiplechoices",
        "header": "Тема 1. Основы качества и стандартизации",
        "title": "Понятие качества ИС",
        "theme": "Качество ПО",
        "text": "Что из перечисленного наиболее полно характеризует качество информационной системы?",
        "choices": [
            "Отсутствие ошибок в коде",
            "Совокупность свойств, определяющих способность системы удовлетворять потребности пользователей",
            "Высокая скорость работы",
            "Красивый интерфейс"
        ],
        "answers": ["Совокупность свойств, определяющих способность системы удовлетворять потребности пользователей"],
        "hint": "<div class='alert alert-primary'><h5>Качество ИС</h5><p>Это комплексная характеристика, включающая функциональность, надёжность, производительность, удобство использования и безопасность.</p></div>"
    },
    {
        "id": "qa_002",
        "type": "multiplechoices",
        "header": "Тема 1. Основы качества и стандартизации",
        "title": "Жизненный цикл ПО",
        "theme": "ЖЦ ПО",
        "text": "На каком этапе жизненного цикла ПО закладывается основа качества?",
        "choices": [
            "На этапе тестирования",
            "На этапе эксплуатации",
            "На всех этапах, начиная с анализа требований",
            "Только на этапе разработки"
        ],
        "answers": ["На всех этапах, начиная с анализа требований"],
        "hint": "<div class='alert alert-primary'><p>Качество должно закладываться на всех этапах ЖЦ, а не проверяться только в конце.</p></div>"
    },
  {
    "id": "qa_003",
    "type": "multiplechoices",
    "header": "Тема 1. Основы качества и стандартизации",
    "title": "ISO 25010",
    "theme": "Стандарты",
    "text": "Сколько основных характеристик качества включает модель ISO 25010?",
    "choices": [
        "6",
        "8",
        "10",
        "12"
    ],
    "answers": ["8"],
    "hint": "<div class='alert alert-primary'><p>ISO 25010 включает 8 характеристик: функциональная пригодность, производительность, совместимость, удобство использования, надёжность, безопасность, поддерживаемость, переносимость.</p><p><a href='https://www.iso.org/standard/78176.html' target='_blank' rel='noopener'>Официальная страница ISO/IEC 25010:2023</a></p></div>"
},
{
    "id": "qa_004",
    "type": "multiplechoices",
    "header": "Тема 1. Основы качества и стандартизации",
    "title": "Стандарты ИТ",
    "theme": "Стандарты",
    "text": "Какой стандарт устанавливает требования к системе менеджмента качества?",
    "choices": [
        "ISO 27001",
        "ISO 9001",
        "ISO 25010",
        "ГОСТ 34.601"
    ],
    "answers": ["ISO 9001"],
    "hint": "<div class='alert alert-primary'><p>ISO 9001 — это базовый стандарт для систем менеджмента качества.</p><p><a href='https://www.iso.org/standard/9001' target='_blank' rel='noopener'>Официальная страница ISO 9001</a></p></div>"
},
{
    "id": "qa_005",
    "type": "multiplechoices",
    "header": "Тема 1. Основы качества и стандартизации",
    "title": "ISO 27001",
    "theme": "Безопасность",
    "text": "Что регулирует стандарт ISO 27001?",
    "choices": [
        "Качество программного обеспечения",
        "Систему менеджмента информационной безопасности",
        "Процессы разработки ПО",
        "Экологические требования"
    ],
    "answers": ["Систему менеджмента информационной безопасности"],
    "hint": "<div class='alert alert-primary'><p>ISO 27001 — это стандарт для системы менеджмента информационной безопасности (СМИБ).</p><p><a href='https://www.iso.org/standard/27001' target='_blank' rel='noopener'>Официальная страница ISO/IEC 27001</a></p></div>"
},
{
    "id": "qa_006",
    "type": "multiplechoices",
    "header": "Тема 1. Основы качества и стандартизации",
    "title": "ГОСТы для ИС",
    "theme": "Стандарты",
    "text": "Какой ГОСТ регламентирует стадии создания автоматизированных систем?",
    "choices": [
        "ГОСТ 19.101",
        "ГОСТ 34.601",
        "ГОСТ 34.603",
        "ГОСТ Р ИСО/МЭК 12207"
    ],
    "answers": ["ГОСТ 34.601"],
    "hint": "<div class='alert alert-primary'><p>ГОСТ 34.601-90 — это основной стандарт по стадиям создания АС.</p><p><a href='https://meganorm.ru/Data2/1/4294850/4294850117.htm' target='_blank' rel='noopener'>Текст ГОСТ 34.601-90 в ИС «Меганорм»</a></p></div>"
},
{
    "id": "qa_007",
    "type": "multiplechoices",
    "header": "Тема 1. Основы качества и стандартизации",
    "title": "Принципы ISO 9001",
    "theme": "СМК",
    "text": "Какой принцип НЕ относится к ISO 9001?",
    "choices": [
        "Ориентация на потребителя",
        "Процессный подход",
        "Максимизация прибыли",
        "Непрерывное улучшение"
    ],
    "answers": ["Максимизация прибыли"],
    "hint": "<div class='alert alert-primary'><p>ISO 9001 основан на 7 принципах, среди которых нет максимизации прибыли.</p><p><a href='https://www.iso.org/standard/9001' target='_blank' rel='noopener'>Официальная страница ISO 9001</a></p></div>"
},

    // ==================== ТЕМА 2: Сертификация ИС ====================
    {
    "id": "qa_008",
    "type": "multiplechoices",
    "header": "Тема 2. Сертификация информационных систем",
    "title": "Цели сертификации",
    "theme": "Сертификация",
    "text": "Что НЕ является целью сертификации?",
    "choices": [
        "Подтверждение соответствия требованиям",
        "Повышение конкурентоспособности",
        "Увеличение прибыли компании (гарантированно)",
        "Обеспечение доверия потребителей"
    ],
    "answers": ["Увеличение прибыли компании (гарантированно)"],
    "hint": "<div class='alert alert-primary'><p>Сертификация повышает доверие и конкурентоспособность, но не гарантирует прибыль.</p><p><a href='https://www.consultant.ru/document/cons_doc_LAW_40241/' target='_blank' rel='noopener'>ФЗ-184 «О техническом регулировании»</a></p></div>"
},
    {
        "id": "qa_009",
        "type": "multiplechoices",
        "header": "Тема 2. Сертификация информационных систем",
        "title": "Объекты сертификации",
        "theme": "Сертификация",
        "text": "Что может быть объектом сертификации в ИТ-сфере?",
        "choices": [
            "Только программное обеспечение",
            "Только аппаратное обеспечение",
            "ПО, аппаратно-программные комплексы, СЗИ, системы в целом",
            "Только документация"
        ],
        "answers": ["ПО, аппаратно-программные комплексы, СЗИ, системы в целом"],
        "hint": "<div class='alert alert-primary'><p>Объектами могут быть ПО, аппаратные средства, системы защиты и информационные системы в целом.</p></div>"
    },
   {
    "id": "qa_010",
    "type": "multiplechoices",
    "header": "Тема 2. Сертификация информационных систем",
    "title": "ФСТЭК",
    "theme": "Сертификация",
    "text": "За что отвечает ФСТЭК России в сфере сертификации?",
    "choices": [
        "За сертификацию всех ИТ-продуктов",
        "За сертификацию средств защиты информации",
        "За сертификацию качества ПО",
        "За сертификацию веб-сайтов"
    ],
    "answers": ["За сертификацию средств защиты информации"],
    "hint": "<div class='alert alert-primary'><p>ФСТЭК — это регулятор в сфере сертификации СЗИ и аттестации объектов информатизации.</p><p><a href='https://fstec.ru/' target='_blank' rel='noopener'>Официальный сайт ФСТЭК России</a></p></div>"
},
{
    "id": "qa_011",
    "type": "multiplechoices",
    "header": "Тема 2. Сертификация информационных систем",
    "title": "SSL-сертификаты",
    "theme": "Сертификация",
    "text": "Какой тип SSL-сертификата требует наиболее строгой проверки организации?",
    "choices": [
        "DV (Domain Validation)",
        "OV (Organization Validation)",
        "EV (Extended Validation)",
        "Wildcard"
    ],
    "answers": ["EV (Extended Validation)"],
    "hint": "<div class='alert alert-primary'><p>EV (Extended Validation) — это сертификат с полной проверкой организации, обычно используется банками и крупными компаниями.</p><p><a href='https://cabforum.org/working-groups/server/baseline-requirements/' target='_blank' rel='noopener'>CA/Browser Forum Baseline Requirements</a></p></div>"
},
{
    "id": "qa_012",
    "type": "multiplechoices",
    "header": "Тема 2. Сертификация информационных систем",
    "title": "Процедура сертификации",
    "theme": "Сертификация",
    "text": "Какой этап следует после испытаний в процедуре сертификации?",
    "choices": [
        "Выдача сертификата",
        "Анализ результатов",
        "Инспекционный контроль",
        "Подача заявки"
    ],
    "answers": ["Анализ результатов"],
    "hint": "<div class='alert alert-primary'><p>После испытаний проводится анализ результатов, затем решение о выдаче сертификата.</p><p><a href='https://www.consultant.ru/document/cons_doc_LAW_40241/' target='_blank' rel='noopener'>ФЗ-184 «О техническом регулировании»</a></p></div>"
},

    // ==================== ТЕМА 3: Методы контроля качества ====================
    {
        "id": "qa_013",
        "type": "multiplechoices",
        "header": "Тема 3. Методы и средства контроля качества",
        "title": "Статический анализ",
        "theme": "Методы",
        "text": "Что такое статический анализ кода?",
        "choices": [
            "Анализ работающего приложения",
            "Анализ кода без его выполнения",
            "Тестирование производительности",
            "Проверка безопасности на лету"
        ],
        "answers": ["Анализ кода без его выполнения"],
        "hint": "<div class='alert alert-primary'><p>Статический анализ проводится без выполнения программы, на основе исходного кода.</p></div>"
    },
    {
        "id": "qa_014",
        "type": "multiplechoices",
        "header": "Тема 3. Методы и средства контроля качества",
        "title": "Техники тест-дизайна",
        "theme": "Тестирование",
        "text": "Техника 'анализ граничных значений' используется для:",
        "choices": [
            "Тестирования всех возможных комбинаций",
            "Тестирования на границах классов эквивалентности",
            "Автоматизации тестов",
            "Тестирования производительности"
        ],
        "answers": ["Тестирования на границах классов эквивалентности"],
        "hint": "<div class='alert alert-primary'><p>Анализ граничных значений проверяет крайние значения входных данных.</p></div>"
    },
    {
        "id": "qa_015",
        "type": "multiplechoices",
        "header": "Тема 3. Методы и средства контроля качества",
        "title": "Инструменты тестирования",
        "theme": "Тестирование",
        "text": "Какой инструмент используется для автоматизации тестирования веб-интерфейсов?",
        "choices": [
            "JMeter",
            "Selenium",
            "Postman",
            "SonarQube"
        ],
        "answers": ["Selenium"],
        "hint": "<div class='alert alert-primary'><p>Selenium — это фреймворк для автоматизации тестирования веб-приложений.</p></div>"
    },
    {
        "id": "qa_016",
        "type": "multiplechoices",
        "header": "Тема 3. Методы и средства контроля качества",
        "title": "Цикломатическая сложность",
        "theme": "Метрики",
        "text": "Что измеряет цикломатическая сложность кода?",
        "choices": [
            "Количество строк кода",
            "Количество независимых путей в программе",
            "Количество комментариев",
            "Процент дублирования"
        ],
        "answers": ["Количество независимых путей в программе"],
        "hint": "<div class='alert alert-primary'><p>Цикломатическая сложность показывает число возможных путей выполнения.</p></div>"
    },
   {
    "id": "qa_017",
    "type": "multiplechoices",
    "header": "Тема 3. Методы и средства контроля качества",
    "title": "Тестирование безопасности",
    "theme": "Безопасность",
    "text": "Что такое DAST (Dynamic Application Security Testing)?",
    "choices": [
        "Анализ исходного кода на уязвимости",
        "Анализ работающего приложения на уязвимости",
        "Анализ сторонних библиотек",
        "Тестирование производительности"
    ],
    "answers": ["Анализ работающего приложения на уязвимости"],
    "hint": "<div class='alert alert-primary'><p>DAST — это динамическое тестирование безопасности, проверяется работающее приложение.</p><p><a href='https://owasp.org/www-project-top-ten/' target='_blank' rel='noopener'>OWASP Top 10</a></p></div>"
},
    {
        "id": "qa_018",
        "type": "multiplechoices",
        "header": "Тема 3. Методы и средства контроля качества",
        "title": "CI/CD",
        "theme": "Процессы",
        "text": "Что означает аббревиатура CI/CD?",
        "choices": [
            "Continuous Integration / Continuous Delivery",
            "Code Integration / Code Deployment",
            "Continuous Improvement / Continuous Development",
            "Client Integration / Client Delivery"
        ],
        "answers": ["Continuous Integration / Continuous Delivery"],
        "hint": "<div class='alert alert-primary'><p>CI/CD — это практики непрерывной интеграции и доставки.</p></div>"
    },

    // ==================== ТЕМА 4: Управление качеством ====================
  {
    "id": "qa_019",
    "type": "multiplechoices",
    "header": "Тема 4. Управление качеством и сертификация в организации",
    "title": "Внедрение СМК",
    "theme": "СМК",
    "text": "С чего начинается внедрение СМК по ISO 9001?",
    "choices": [
        "С сертификации",
        "С анализа текущих процессов",
        "С закупки ПО",
        "С обучения персонала"
    ],
    "answers": ["С анализа текущих процессов"],
    "hint": "<div class='alert alert-primary'><p>Внедрение СМК начинается с анализа текущих процессов и определения целей.</p><p><a href='https://www.iso.org/standard/9001' target='_blank' rel='noopener'>Официальная страница ISO 9001</a></p></div>"
},
    {
        "id": "qa_020",
        "type": "multiplechoices",
        "header": "Тема 4. Управление качеством и сертификация в организации",
        "title": "Политика качества",
        "theme": "СМК",
        "text": "Что такое политика качества?",
        "choices": [
            "Инструкция по тестированию",
            "Официальное заявление о намерениях в области качества",
            "План тестирования",
            "Отчёт об аудите"
        ],
        "answers": ["Официальное заявление о намерениях в области качества"],
        "hint": "<div class='alert alert-primary'><p>Политика качества — это документ, декларирующий цели и подходы организации к качеству.</p></div>"
    },
    {
    "id": "qa_021",
    "type": "multiplechoices",
    "header": "Тема 4. Управление качеством и сертификация в организации",
    "title": "PDCA",
    "theme": "Улучшение",
    "text": "Что означает буква 'C' в цикле PDCA?",
    "choices": [
        "Control (контроль)",
        "Check (проверка)",
        "Correct (исправление)",
        "Create (создание)"
    ],
    "answers": ["Check (проверка)"],
    "hint": "<div class='alert alert-primary'><p>PDCA: Plan, Do, Check, Act.</p><p><a href='https://www.iso.org/standard/9001' target='_blank' rel='noopener'>ISO 9001 — цикл PDCA</a></p></div>"
},
    {
    "id": "qa_022",
    "type": "multiplechoices",
    "header": "Тема 4. Управление качеством и сертификация в организации",
    "title": "Аудит СМК",
    "theme": "Аудит",
    "text": "Какой аудит проводится силами самой организации?",
    "choices": [
        "Внешний аудит",
        "Внутренний аудит",
        "Инспекционный контроль",
        "Сертификационный аудит"
    ],
    "answers": ["Внутренний аудит"],
    "hint": "<div class='alert alert-primary'><p>Внутренний аудит проводится сотрудниками организации для проверки СМК.</p><p><a href='https://www.iso.org/standard/70017.html' target='_blank' rel='noopener'>ISO 19011 — руководство по аудиту систем менеджмента</a></p></div>"
},
    {
        "id": "qa_023",
        "type": "multiplechoices",
        "header": "Тема 4. Управление качеством и сертификация в организации",
        "title": "NPS",
        "theme": "Метрики",
        "text": "Что измеряет NPS (Net Promoter Score)?",
        "choices": [
            "Удовлетворённость качеством кода",
            "Лояльность и готовность рекомендовать продукт",
            "Производительность системы",
            "Уровень дефектности"
        ],
        "answers": ["Лояльность и готовность рекомендовать продукт"],
        "hint": "<div class='alert alert-primary'><p>NPS — это индекс лояльности клиентов, показывающий, готовы ли они рекомендовать продукт.</p></div>"
    },
    {
        "id": "qa_024",
        "type": "multiplechoices",
        "header": "Тема 4. Управление качеством и сертификация в организации",
        "title": "Качество и сертификация",
        "theme": "Общее",
        "text": "Какое утверждение о качестве и сертификации является верным?",
        "choices": [
            "Качество проверяется только при тестировании",
            "Сертификация гарантирует отсутствие дефектов",
            "Качество закладывается на всех этапах ЖЦ, а сертификация подтверждает соответствие требованиям",
            "Сертификация и качество — это одно и то же"
        ],
        "answers": ["Качество закладывается на всех этапах ЖЦ, а сертификация подтверждает соответствие требованиям"],
        "hint": "<div class='alert alert-success'><p>Качество — это процесс, сертификация — это подтверждение соответствия.</p></div>"
    },

  // ==================== ТОП-10 ГОРЯЧИХ КЛАВИШ ====================
  {
    id: "vscode001",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Копирование и вставка",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш используется для копирования выделенного фрагмента кода в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + X",
      "Ctrl + C",
      "Ctrl + V",
      "Ctrl + Z",
      "Ctrl + A",
      "Ctrl + S"
    ],
    hint: "Первая буква английского слова 'Copy'",
    answers: ["Ctrl + C"]
  },

  {
    id: "vscode002",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Сохранение файла",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш сохраняет текущий файл в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + S",
      "Ctrl + Shift + S",
      "Ctrl + D",
      "Ctrl + W",
      "Alt + S",
      "F2"
    ],
    hint: "Первая буква английского слова 'Save'",
    answers: ["Ctrl + S"]
  },

  {
    id: "vscode003",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Отмена действия",
    theme: "Базовые операции",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш отменяет последнее действие в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + Y",
      "Ctrl + Z",
      "Ctrl + X",
      "Ctrl + Backspace",
      "Alt + Backspace",
      "Ctrl + D"
    ],
    hint: "Последняя буква алфавита — отмена последнего действия",
    answers: ["Ctrl + Z"]
  },

  {
    id: "vscode004",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Поиск в файле",
    theme: "Поиск и навигация",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает поиск по текущему файлу в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + F",
      "Ctrl + H",
      "Ctrl + Shift + F",
      "Ctrl + P",
      "Ctrl + G",
      "Alt + F"
    ],
    hint: "Первая буква английского слова 'Find'",
    answers: ["Ctrl + F"]
  },

  {
    id: "vscode005",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Быстрый переход к файлу",
    theme: "Поиск и навигация",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает панель быстрого перехода к файлу по имени в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + P",
      "Ctrl + Shift + P",
      "Ctrl + O",
      "Ctrl + T",
      "Ctrl + G",
      "Alt + P"
    ],
    hint: "Первая буква английского слова 'Palette' (но без Shift — это переход к файлу)",
    answers: ["Ctrl + P"]
  },

  {
    id: "vscode006",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Палитра команд",
    theme: "Управление",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш открывает палитру команд (Command Palette) в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + Shift + P",
      "Ctrl + P",
      "Ctrl + Shift + C",
      "F1",
      "Ctrl + Alt + P",
      "Alt + Shift + P"
    ],
    hint: "Ctrl + P, но с добавлением Shift",
    answers: ["Ctrl + Shift + P"]
  },

  {
    id: "vscode007",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Комментирование строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш закомментирует текущую строку (или выделенный блок) в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + /",
      "Ctrl + ;",
      "Ctrl + K",
      "Alt + /",
      "Ctrl + Shift + /",
      "Ctrl + '"
    ],
    hint: "Самый простой символ — обычный слэш",
    answers: ["Ctrl + /"]
  },

  {
    id: "vscode008",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Выделить следующее вхождение",
    theme: "Мультикурсор",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш добавляет следующий курсор на следующем вхождении выделенного текста в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Ctrl + D",
      "Ctrl + Shift + D",
      "Alt + D",
      "Ctrl + Alt + D",
      "Ctrl + U",
      "F3"
    ],
    hint: "Первая буква английского слова 'Duplicate' — но здесь это 'Add selection to next find match'",
    answers: ["Ctrl + D"]
  },

  {
    id: "vscode009",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Перемещение строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш перемещает текущую строку вверх или вниз в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Alt + ↑ / Alt + ↓",
      "Ctrl + ↑ / Ctrl + ↓",
      "Shift + ↑ / Shift + ↓",
      "Ctrl + Shift + ↑ / ↓",
      "Alt + Shift + ↑ / ↓",
      "Ctrl + Alt + ↑ / ↓"
    ],
    hint: "Используется клавиша Alt вместе со стрелками",
    answers: ["Alt + ↑ / Alt + ↓"]
  },

  {
    id: "vscode010",
    type: "multiplechoices",
    header: "Тест по горячим клавишам VS Code",
    title: "Дублирование строки",
    theme: "Редактирование",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое сочетание клавиш дублирует текущую строку вниз в VS Code?</p>
      </div>
    </div>`,
    choices: [
      "Shift + Alt + ↓",
      "Ctrl + D",
      "Ctrl + Shift + D",
      "Alt + ↓",
      "Shift + ↓",
      "Ctrl + Alt + ↓"
    ],
    hint: "Shift + Alt + стрелка вниз",
    answers: ["Shift + Alt + ↓"]
  },

  // ==================== ТОП-5 REGEX ====================
  {
    id: "regex001",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Цифры",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует одной или более цифрам?</p>
      </div>
    </div>`,
    choices: [
      "\\d+",
      "\\w+",
      "\\s+",
      "[a-z]+",
      ".*",
      "\\D+"
    ],
    hint: "d — digit (цифра), + — один или более раз",
    answers: ["\\d+"]
  },

  {
    id: "regex002",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Email",
    theme: "Практические regex",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение чаще всего используется для проверки простого email-адреса?</p>
      </div>
    </div>`,
    choices: [
      "^[\\w.-]+@[\\w.-]+\\.\\w{2,}$",
      "^\\d+@\\d+\\.\\d+$",
      "^[a-z]+@[a-z]+$",
      "^.*@.*$",
      "^\\w+@\\w+$",
      "^[A-Z]+@[A-Z]+\\.[A-Z]+$"
    ],
    hint: "Начинается с ^, содержит @ и домен с точкой",
    answers: ["^[\\w.-]+@[\\w.-]+\\.\\w{2,}$"]
  },

  {
    id: "regex003",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Пробелы",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует одному или более пробельным символам (пробел, таб, перенос)?</p>
      </div>
    </div>`,
    choices: [
      "\\s+",
      "\\d+",
      "\\w+",
      "\\S+",
      " +",
      "\\t+"
    ],
    hint: "s — space (пробельный символ)",
    answers: ["\\s+"]
  },

  {
    id: "regex004",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Слово целиком",
    theme: "Границы слов",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение найдёт слово "test" как отдельное слово (не часть другого слова)?</p>
      </div>
    </div>`,
    choices: [
      "\\btest\\b",
      "test",
      "^test$",
      "\\wtest\\w",
      "[test]",
      "test.*"
    ],
    hint: "\\b — граница слова (word boundary)",
    answers: ["\\btest\\b"]
  },

  {
    id: "regex005",
    type: "multiplechoices",
    header: "Тест по регулярным выражениям",
    title: "Любой символ",
    theme: "Базовые regex",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое регулярное выражение соответствует любой строке (включая пустую) от начала до конца?</p>
      </div>
    </div>`,
    choices: [
      "^.*$",
      "^.+$",
      "^\\w*$",
      "^\\d*$",
      "^.?$",
      "^.*"
    ],
    hint: "Точка — любой символ, звёздочка — ноль или более раз",
    answers: ["^.*$"]
  },

  
  
  
    {
    id: "crypto001",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Симметричное шифрование",
    theme: "Типы шифрования",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что характеризует симметричное шифрование?</p>
      </div>
    </div>`,
    choices: [
      "Использует разные ключи для шифрования и дешифрования",
      "Использует один и тот же ключ для шифрования и дешифрования", 
      "Не требует использования ключей",
      "Использует только открытые ключи",
      "Основано на хеш-функциях",
      "Использует математические задачи высокой сложности"
    ],
    hint: "Название происходит от слова 'симметрия' - одинаковость",
    answers: ["Использует один и тот же ключ для шифрования и дешифрования"]
  },
  {
    id: "crypto002",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Асимметричное шифрование",
    theme: "Криптография с открытым ключом",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Каков основной принцип асимметричного шифрования?</p>
      </div>
    </div>`,
    choices: [
      "Использование одного секретного ключа",
      "Использование пары ключей: открытого и закрытого", 
      "Шифрование без использования ключей",
      "Использование только хеш-функций",
      "Шифрование с помощью соли",
      "Использование симметричных алгоритмов"
    ],
    hint: "Приставка 'а-' означает отрицание, то есть 'несимметричное'",
    answers: ["Использование пары ключей: открытого и закрытого"]
  },
  {
    id: "crypto003", 
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Открытый ключ",
    theme: "Публичные ключи",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Для чего используется открытый ключ в асимметричной криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Для дешифрования сообщений",
      "Для создания цифровой подписи", 
      "Для шифрования сообщений, предназначенных владельцу ключа",
      "Для хеширования паролей",
      "Для генерации соли",
      "Для симметричного шифрования"
    ],
    hint: "Этот ключ можно свободно распространять - он открытый",
    answers: ["Для шифрования сообщений, предназначенных владельцу ключа"]
  },
  {
    id: "crypto004",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Закрытый ключ", 
    theme: "Секретные ключи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что из перечисленного характеризует закрытый ключ?</p>
      </div>
    </div>`,
    choices: [
      "Может свободно распространяться",
      "Используется для шифрования сообщений", 
      "Должен храниться в секрете владельцем",
      "Используется для хеширования паролей",
      "Генерируется случайным образом для каждого сеанса",
      "Не требуется для асимметричного шифрования"
    ],
    hint: "Этот ключ должен быть известен только владельцу",
    answers: ["Должен храниться в секрете владельцем"]
  },
  {
    id: "crypto005",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Соль в криптографии",
    theme: "Защита паролей",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какова основная цель использования 'соли' (salt) в криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Ускорение процесса шифрования",
      "Замедление процесса дешифрования", 
      "Защита от атак радужных таблиц",
      "Увеличение длины ключа",
      "Создание цифровой подписи",
      "Генерация открытых ключей"
    ],
    hint: "Соль делает одинаковые пароли разными после хеширования",
    answers: ["Защита от атак радужных таблиц"]
  },
  {
    id: "crypto006",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Цифровая подпись",
    theme: "Аутентификация и целостность",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что обеспечивает цифровая подпись?</p>
      </div>
    </div>`,
    choices: [
      "Шифрование содержимого сообщения",
      "Аутентификацию отправителя и целостность данных", 
      "Сжатие передаваемых данных",
      "Случайное перемешивание данных",
      "Генерацию симметричных ключей",
      "Создание радужных таблиц"
    ],
    hint: "Цифровая подпись - электронный аналог handwritten signature",
    answers: ["Аутентификацию отправителя и целостность данных"]
  },
  {
    id: "crypto007",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Сравнение типов шифрования", 
    theme: "Симметричное vs Асимметричное",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое основное преимущество симметричного шифрования перед асимметричным?</p>
      </div>
    </div>`,
    choices: [
      "Более безопасное",
      "Более быстрое выполнение операций", 
      "Не требует обмена ключами",
      "Использует более простые алгоритмы",
      "Поддерживает цифровые подписи",
      "Легче реализовать"
    ],
    hint: "Симметричные алгоритмы обычно работают быстрее из-за меньшей вычислительной сложности",
    answers: ["Более быстрое выполнение операций"]
  },
  {
    id: "crypto008",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Хеш-функции", 
    theme: "Односторонние преобразования",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое свойство характеризует криптографическую хеш-функцию?</p>
      </div>
    </div>`,
    choices: [
      "Обратимость преобразования",
      "Детерминированность и необратимость", 
      "Случайность результата",
      "Переменная длина вывода",
      "Использование симметричных ключей",
      "Зависимость от секретного ключа"
    ],
    hint: "Из хеша нельзя восстановить исходные данные",
    answers: ["Детерминированность и необратимость"]
  },
  {
    id: "crypto009",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Процесс создания цифровой подписи", 
    theme: "Механизм подписания",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой ключ используется для создания цифровой подписи?</p>
      </div>
    </div>`,
    choices: [
      "Открытый ключ отправителя",
      "Закрытый ключ отправителя", 
      "Открытый ключ получателя",
      "Закрытый ключ получателя",
      "Симметричный ключ сессии",
      "Случайно сгенерированный ключ"
    ],
    hint: "Подпись может создать только отправитель с помощью своего секретного ключа",
    answers: ["Закрытый ключ отправителя"]
  },
  {
    id: "crypto010",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Проверка цифровой подписи",
    theme: "Верификация подписи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой ключ используется для проверки цифровой подписи?</p>
      </div>
    </div>`,
    choices: [
      "Закрытый ключ отправителя",
      "Открытый ключ отправителя", 
      "Закрытый ключ получателя",
      "Открытый ключ получателя",
      "Симметричный ключ",
      "Хеш-функция"
    ],
    hint: "Проверить подпись может любой, у кого есть открытый ключ отправителя",
    answers: ["Открытый ключ отправителя"]
  },
  {
    id: "crypto011",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Гибридные криптосистемы", 
    theme: "Комбинирование подходов",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Почему часто используют гибридные криптосистемы (симметричное + асимметричное)?</p>
      </div>
    </div>`,
    choices: [
      "Чтобы сделать систему менее безопасной",
      "Чтобы объединить скорость симметричного и безопасность обмена ключами асимметричного", 
      "Чтобы упростить реализацию",
      "Чтобы избежать использования хеш-функций",
      "Чтобы исключить необходимость в цифровых подписях",
      "Чтобы использовать только открытые ключи"
    ],
    hint: "Каждый тип шифрования имеет свои сильные и слабые стороны",
    answers: ["Чтобы объединить скорость симметричного и безопасность обмена ключами асимметричного"]
  },
  {
    id: "crypto012",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Свойства соли", 
    theme: "Характеристики salt",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какое свойство должно быть у криптографической соли?</p>
      </div>
    </div>`,
    choices: [
      "Должна быть секретной",
      "Должна быть уникальной для каждого пароля", 
      "Должна быть короткой",
      "Должна быть предсказуемой",
      "Должна быть одинаковой для всех пользователей",
      "Должна шифроваться отдельно"
    ],
    hint: "Уникальность соли предотвращает использование precomputed таблиц",
    answers: ["Должна быть уникальной для каждого пароля"]
  },
  {
    id: "crypto013",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Атака радужных таблиц", 
    theme: "Защита паролей",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как соль защищает от атак радужных таблиц?</p>
      </div>
    </div>`,
    choices: [
      "Ускоряет перебор паролей",
      "Увеличивает длину пароля", 
      "Делает precomputed таблицы неэффективными",
      "Шифрует радужные таблицы",
      "Создает уникальные радужные таблицы",
      "Замедляет работу хеш-функции"
    ],
    hint: "Соль требует создания отдельных таблиц для каждой возможной соли",
    answers: ["Делает precomputed таблицы неэффективными"]
  },
  {
    id: "crypto014",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Примеры алгоритмов", 
    theme: "Популярные криптосистемы",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой из перечисленных алгоритмов является асимметричным?</p>
      </div>
    </div>`,
    choices: [
      "AES",
      "RSA", 
      "DES",
      "3DES",
      "Blowfish",
      "RC4"
    ],
    hint: "Этот алгоритм назван по первым буквам фамилий создателей",
    answers: ["RSA"]
  },
  {
    id: "crypto015",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Целостность данных",
    theme: "Гарантии подлинности",
    text: `<div class="container-fluid">
      <div class="alert alert-success mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как цифровая подпись обеспечивает целостность данных?</p>
      </div>
    </div>`,
    choices: [
      "Шифруя содержимое сообщения",
      "Сравнивая хеш исходного сообщения с хешом полученного", 
      "Сжимая данные перед передачей",
      "Используя симметричное шифрование",
      "Генерируя случайные числа",
      "Создавая резервные копии"
    ],
    hint: "Подпись обычно создается на основе хеша сообщения",
    answers: ["Сравнивая хеш исходного сообщения с хешом полученного"]
  },
  {
    id: "crypto016",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Неотказуемость", 
    theme: "Свойства цифровой подписи",
    text: `<div class="container-fluid">
      <div class="alert alert-danger mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Что означает свойство 'неотказуемость' в контексте цифровых подписей?</p>
      </div>
    </div>`,
    choices: [
      "Отправитель не может отказаться от авторства подписанного сообщения",
      "Сообщение не может быть изменено", 
      "Сообщение не может быть прочитано третьими лицами",
      "Подпись не может быть проверена",
      "Ключи не могут быть скомпрометированы",
      "Алгоритм не может быть взломан"
    ],
    hint: "Это свойство также известно как 'non-repudiation'",
    answers: ["Отправитель не может отказаться от авторства подписанного сообщения"]
  },
  {
    id: "crypto017",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Длина ключей", 
    theme: "Безопасность ключей",
    text: `<div class="container-fluid">
      <div class="alert alert-primary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Почему асимметричные ключи обычно длиннее симметричных при одинаковом уровне безопасности?</p>
      </div>
    </div>`,
    choices: [
      "Асимметричные алгоритмы менее эффективны",
      "Асимметричные алгоритмы основаны на математических задачах, которые легче решить", 
      "Симметричные алгоритмы используют более сложную математику",
      "Асимметричные ключи должны быть читаемыми человеком",
      "Симметричные ключи автоматически удлиняются",
      "Асимметричные алгоритмы медленнее"
    ],
    hint: "Асимметричная криптография основана на задачах, которые проще решить при наличии дополнительной информации",
    answers: ["Асимметричные алгоритмы основаны на математических задачах, которые легче решить"]
  },
  {
    id: "crypto018",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Хранение соли", 
    theme: "Практическое применение",
    text: `<div class="container-fluid">
      <div class="alert alert-secondary mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Как обычно хранится соль в системах аутентификации?</p>
      </div>
    </div>`,
    choices: [
      "В отдельном секретном хранилище",
      "Вместе с хешем пароля в открытом виде", 
      "В зашифрованном виде",
      "Только в памяти сервера",
      "На устройстве пользователя",
      "В базе данных открытых ключей"
    ],
    hint: "Соль не является секретной - ее основная функция в уникальности",
    answers: ["Вместе с хешем пароля в открытом виде"]
  },
  {
    id: "crypto019",
    type: "multiplechoices",
    header: "Тест по основам криптографии",
    title: "Электронные сертификаты", 
    theme: "Инфраструктура открытых ключей",
    text: `<div class="container-fluid">
      <div class="alert alert-info mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Для чего используются электронные сертификаты в криптографии?</p>
      </div>
    </div>`,
    choices: [
      "Для хранения симметричных ключей",
      "Для подтверждения подлинности открытых ключей", 
      "Для генерации случайных чисел",
      "Для хеширования паролей",
      "Для создания солей",
      "Для ускорения шифрования"
    ],
    hint: "Сертификаты связывают открытый ключ с идентификатором владельца",
    answers: ["Для подтверждения подлинности открытых ключей"]
  },
  {
    id: "crypto020",
    type: "multiplechoices",
    header: "Тест по основам криптографии", 
    title: "Криптографические протоколы",
    theme: "Практическое применение",
    text: `<div class="container-fluid">
      <div class="alert alert-warning mt-3">
        <strong>Вопрос:</strong>
        <p class="mb-0">Какой протокол использует гибридное шифрование для безопасного веб-соединения?</p>
      </div>
    </div>`,
    choices: [
      "HTTP",
      "HTTPS (SSL/TLS)", 
      "FTP",
      "SMTP",
      "TCP",
      "UDP"
    ],
    hint: "Этот протокол обеспечивает безопасность соединения в браузере",
    answers: ["HTTPS (SSL/TLS)"]
  },
    {
    id: "sql001",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Основы SQL",
    theme: "Введение в SQL",
    text: "Что означает аббревиатура SQL?",
    choices: [
      "Structured Question Language",
      "Structured Query Language", 
      "Simple Query Language",
      "Standard Question Logic"
    ],
    hint: "В переводе это означает 'язык структурированных запросов'",
    answers: ["Structured Query Language"]
  },
  {
    id: "sql002", 
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Команда SELECT",
    theme: "Основы языка SQL",
    text: "Что делает команда SQL SELECT?",
    choices: [
      "Удаляет данные",
      "Добавляет новые данные", 
      "Выбирает данные из таблицы",
      "Изменяет структуру таблицы",
      "Создает новую таблицу",
      "Удаляет таблицу"
    ],
    hint: "Select в переводе означает Выбрать",
    answers: ["Выбирает данные из таблицы"]
  },
  {
    id: "sql003",
    type: "multiplechoices", 
    header: "Тест по базам данных",
    title: "Фильтрация WHERE",
    theme: "Условия выборки",
    text: "Какая конструкция используется для фильтрации строк в SQL?",
    choices: [
      "FILTER BY",
      "HAVING",
      "WHERE",
      "CONDITION"
    ],
    hint: "Эта конструкция переводится как 'Где'",
    answers: ["WHERE"]
  },
  {
    id: "sql004",
    type: "multiplechoices",
    header: "Тест по базам данных", 
    title: "Сортировка данных",
    theme: "Упорядочивание результатов",
    text: "Как отсортировать результаты по убыванию?",
    choices: [
      "SORT DESC",
      "ORDER BY DESC", 
      "ORDER DESC",
      "SORT BY DESC"
    ],
    hint: "Используется конструкция ORDER BY с дополнительным ключевым словом",
    answers: ["ORDER BY DESC"]
  },
  {
    id: "sql005",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "JOIN операции", 
    theme: "Соединение таблиц",
    text: "Какой тип JOIN возвращает все строки из обеих таблиц, даже если нет совпадений?",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN", 
      "FULL OUTER JOIN"
    ],
    hint: "Этот JOIN объединяет результаты и левого, и правого JOIN",
    answers: ["FULL OUTER JOIN"]
  },
  {
    id: "sql006",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Агрегатные функции", 
    theme: "Вычисления над группами",
    text: "Какая функция вычисляет среднее значение?",
    choices: [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MAX()",
      "MIN()"
    ],
    hint: "Сокращение от Average",
    answers: ["AVG()"]
  },
  {
    id: "sql007",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Группировка данных", 
    theme: "Группировка и агрегация",
    text: "Какая конструкция используется для группировки строк с одинаковыми значениями?",
    choices: [
      "GROUP BY",
      "ORDER BY", 
      "WHERE",
      "HAVING"
    ],
    hint: "Переводится как 'Группировать по'",
    answers: ["GROUP BY"]
  },
  {
    id: "sql008",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Фильтрация групп", 
    theme: "Условия для групп",
    text: "Чем отличается HAVING от WHERE?",
    choices: [
      "HAVING используется до GROUP BY, WHERE - после",
      "HAVING фильтрует группы, WHERE фильтрует строки",
      "WHERE работает быстрее чем HAVING", 
      "Разницы нет, это синонимы"
    ],
    hint: "HAVING применяется к результатам группировки",
    answers: ["HAVING фильтрует группы, WHERE фильтрует строки"]
  },
  {
    id: "sql009",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Подзапросы", 
    theme: "Вложенные запросы",
    text: "Где можно использовать подзапрос в SQL?",
    choices: [
      "Только в WHERE",
      "Только в SELECT", 
      "В WHERE, SELECT, FROM и других разделах",
      "Только в INSERT"
    ],
    hint: "Подзапросы довольно универсальны в SQL",
    answers: ["В WHERE, SELECT, FROM и других разделах"]
  },
  {
    id: "sql010",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Изменение данных", 
    theme: "DML команды",
    text: "Какая команда используется для обновления существующих данных?",
    choices: [
      "INSERT",
      "UPDATE",
      "MODIFY", 
      "ALTER"
    ],
    hint: "Переводится как 'Обновить'",
    answers: ["UPDATE"]
  },
  {
    id: "sql011",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Удаление данных", 
    theme: "Операции удаления",
    text: "Чем отличается DELETE от TRUNCATE?",
    choices: [
      "TRUNCATE можно откатить, DELETE - нет",
      "DELETE удаляет таблицу, TRUNCATE - только данные",
      "TRUNCATE быстрее и не логирует удаление каждой строки", 
      "DELETE работает только с условием WHERE"
    ],
    hint: "TRUNCATE работает на уровне таблицы",
    answers: ["TRUNCATE быстрее и не логирует удаление каждой строки"]
  },
  {
    id: "sql012",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Создание таблиц", 
    theme: "DDL команды",
    text: "Какая команда создает новую таблицу?",
    choices: [
      "CREATE TABLE",
      "NEW TABLE",
      "ADD TABLE", 
      "MAKE TABLE"
    ],
    hint: "Состоит из двух слов: Create + Table",
    answers: ["CREATE TABLE"]
  },
  {
    id: "sql013",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Ограничения (Constraints)", 
    theme: "Целостность данных",
    text: "Какое ограничение гарантирует уникальность значений в столбце?",
    choices: [
      "PRIMARY KEY",
      "FOREIGN KEY", 
      "CHECK",
      "DEFAULT"
    ],
    hint: "Также автоматически создает индекс",
    answers: ["PRIMARY KEY"]
  },
  {
    id: "sql014",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Индексы", 
    theme: "Оптимизация запросов",
    text: "Для чего используются индексы в базе данных?",
    choices: [
      "Для хранения резервных копий",
      "Для ускорения операций выборки",
      "Для увеличения размера базы данных", 
      "Для ограничения доступа к данным"
    ],
    hint: "Как индекс в книге помогает быстрее найти информацию",
    answers: ["Для ускорения операций выборки"]
  },
  {
    id: "sql015",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "UNION оператор", 
    theme: "Объединение запросов",
    text: "Что делает оператор UNION?",
    choices: [
      "Объединяет таблицы по столбцам",
      "Объединяет результаты двух запросов в один набор",
      "Создает связь между таблицами", 
      "Группирует повторяющиеся строки"
    ],
    hint: "Объединяет результаты по строкам, а не по столбцам",
    answers: ["Объединяет результаты двух запросов в один набор"]
  },
  {
    id: "sql016",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Нереляционные БД", 
    theme: "Типы баз данных",
    text: "Какие из перечисленных являются типами NoSQL баз данных?",
    choices: [
      "Документные",
      "Колоночные", 
      "Ключ-значение",
      "Графовые",
      "Все перечисленные"
    ],
    hint: "NoSQL включает несколько различных подходов к хранению данных",
    answers: ["Все перечисленные"]
  },
  {
    id: "sql017",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Транзакции", 
    theme: "Управление транзакциями",
    text: "Какие свойства объединяет аббревиатура ACID?",
    choices: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Consistency, Integrity, Data", 
      "Atomicity, Control, Isolation, Database",
      "All, Commit, Insert, Delete"
    ],
    hint: "Атомарность, Согласованность, Изолированность, Долговечность",
    answers: ["Atomicity, Consistency, Isolation, Durability"]
  },
  {
    id: "sql018",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Нормализация", 
    theme: "Проектирование БД",
    text: "Какова цель нормализации базы данных?",
    choices: [
      "Увеличить скорость всех запросов",
      "Устранить избыточность и аномалии данных",
      "Упростить запросы SELECT", 
      "Увеличить размер базы данных"
    ],
    hint: "Помогает избежать дублирования и противоречивости данных",
    answers: ["Устранить избыточность и аномалии данных"]
  },
  {
    id: "sql019",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Оконные функции", 
    theme: "Аналитические функции",
    text: "Что такое оконные функции в SQL?",
    choices: [
      "Функции для работы с датой и временем",
      "Функции, которые выполняют вычисления над набором строк без их группировки",
      "Функции для создания новых окон в приложении", 
      "Функции для управления доступом к данным"
    ],
    hint: "Они работают с 'окном' строк относительно текущей строки",
    answers: ["Функции, которые выполняют вычисления над набором строк без их группировки"]
  },
  {
    id: "sql020",
    type: "multiplechoices",
    header: "Тест по базам данных",
    title: "Хранимые процедуры", 
    theme: "Программирование в БД",
    text: "Что такое хранимая процедура?",
    choices: [
      "Резервная копия базы данных",
      "Набор SQL-операторов, сохраненных в базе данных для многократного использования",
      "Процесс создания индексов", 
      "Метод шифрования данных"
    ],
    hint: "Позволяет хранить и выполнять логику на стороне сервера БД",
    answers: ["Набор SQL-операторов, сохраненных в базе данных для многократного использования"]
  },

    {
    id: "psy001",
    type: "multiplechoices",
    header: "SQL для психологических исследований",
    title: "LEFT JOIN с данными пациентов",
    theme: "Анализ терапевтических сессий",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Пациенты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Анна</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Борис</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Виктор</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Дарья</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Елена</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Сергей</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Сессии:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">patient_id</th><th class="p-1">дата</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-01-10</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>2024-01-17</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>3</small></td><td class="p-1"><small>2024-01-15</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>5</small></td><td class="p-1"><small>2024-01-20</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>2024-01-18</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>8</small></td><td class="p-1"><small>2024-01-22</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-info mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Пациенты.id 
FROM Пациенты 
LEFT JOIN Сессии ON Пациенты.id = Сессии.patient_id 
WHERE Сессии.patient_id IS NULL</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id пациентов будут в результате?</p>
    </div>`,
    choices: [
      "2, 4, 6",
      "2, 4, 5, 6", 
      "2, 4",
      "1, 3, 5",
      "4, 5, 6"
    ],
    hint: "Ищем пациентов, у которых никогда не было сессий",
    answers: ["2, 4, 6"]
  },
  {
    id: "psy002",
    type: "multiplechoices",
    header: "SQL для психологических исследований", 
    title: "RIGHT JOIN с тестами личности",
    theme: "Анализ пройденных тестов",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-success">Таблица Студенты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Ольга</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Иван</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Мария</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Алексей</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Наталья</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Дмитрий</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-success">Таблица Тесты_результаты:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">student_id</th><th class="p-1">тест</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>MMPI</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>16-факторов</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>2</small></td><td class="p-1"><small>MMPI</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>4</small></td><td class="p-1"><small>СМИЛ</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>Айзенк</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>7</small></td><td class="p-1"><small>Кеттелл</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-warning mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Тесты_результаты.id 
FROM Студенты 
RIGHT JOIN Тесты_результаты ON Студенты.id = Тесты_результаты.student_id 
WHERE Студенты.id IS NOT NULL</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id из Тесты_результаты будут в результате?</p>
    </div>`,
    choices: [
      "1, 2, 3, 4, 5, 6",
      "1, 2, 3, 4", 
      "1, 2, 3, 4, 6",
      "5 только",
      "3, 4, 6"
    ],
    hint: "RIGHT JOIN сохраняет все результаты тестов, WHERE оставляет только те, где студент существует",
    answers: ["1, 2, 3, 4"]
  },
 
  {
    id: "psy005",
    type: "multiplechoices",
    header: "SQL для психологических исследований", 
    title: "LEFT JOIN с условием в JOIN",
    theme: "Фильтрация методов терапии",
    text: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Психологи:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">имя</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>Доктор А</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>Доктор Б</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>Доктор В</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>Доктор Г</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>Доктор Д</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>Доктор Е</small></td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <h6 class="text-primary">Таблица Сеансы:</h6>
          <table class="table table-sm table-bordered">
            <thead class="thead-light">
              <tr><th class="p-1">id</th><th class="p-1">psych_id</th><th class="p-1">метод</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-1"><small>1</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>2</small></td><td class="p-1"><small>1</small></td><td class="p-1"><small>Гештальт</small></td></tr>
              <tr><td class="p-1"><small>3</small></td><td class="p-1"><small>2</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>4</small></td><td class="p-1"><small>3</small></td><td class="p-1"><small>Психоанализ</small></td></tr>
              <tr><td class="p-1"><small>5</small></td><td class="p-1"><small>NULL</small></td><td class="p-1"><small>КПТ</small></td></tr>
              <tr><td class="p-1"><small>6</small></td><td class="p-1"><small>6</small></td><td class="p-1"><small>КПТ</small></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="alert alert-info mt-3">
        <strong>SQL запрос:</strong>
        <pre class="bg-light p-3 border rounded mt-2"><code>SELECT Психологи.id 
FROM Психологи 
LEFT JOIN Сеансы ON Психологи.id = Сеансы.psych_id AND Сеансы.метод = 'КПТ'</code></pre>
      </div>
      <p class="text-muted mb-0">Какие id психологов будут в результате?</p>
    </div>`,
    choices: [
      "1, 2, 3, 4, 5, 6",
      "1, 2, 3, 6", 
      "1, 3, 5, 6",
      "1, 3 только",
      "1, 2, 3, 4, 6"
    ],
    hint: "LEFT JOIN сохраняет всех психологов, но соединяет только с сеансами КПТ",
    answers: ["1, 2, 3, 4, 5, 6"]
  },

   {
    id: "join006",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Множественные LEFT JOIN",
    theme: "Несколько LEFT JOIN",
    text: `Таблицы: Users(id,name), Orders(id,user_id), Payments(id,order_id).
    Что вернет запрос?
    <pre>SELECT u.name, o.id, p.amount
    FROM Users u
    LEFT JOIN Orders o ON u.id = o.user_id
    LEFT JOIN Payments p ON o.id = p.order_id
    WHERE p.id IS NULL</pre>`,
    choices: [
      "Пользователей без заказов",
      "Заказы без платежей", 
      "Пользователи, у которых есть заказы но нет платежей",
      "Всех пользователей с заказами и платежами",
      "Пользователей без заказов и без платежей"
    ],
    hint: "Последний JOIN и фильтр по p.id IS NULL - ключевые",
    answers: ["Пользователи, у которых есть заказы но нет платежей"]
  },
  {
    id: "join007",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "RIGHT JOIN с агрегацией", 
    theme: "RIGHT JOIN + GROUP BY",
    text: `Таблицы: Products(id,name), Sales(id,product_id,quantity).
    Что вычисляет запрос?
    <pre>SELECT p.name, COUNT(s.id) as sales_count
    FROM Sales s 
    RIGHT JOIN Products p ON s.product_id = p.id
    GROUP BY p.id, p.name</pre>`,
    choices: [
      "Количество продаж по каждому продукту (включая продукты без продаж)",
      "Только продукты, у которых есть продажи", 
      "Общее количество всех продаж",
      "Продукты без продаж",
      "Среднее количество продаж на продукт"
    ],
    hint: "RIGHT JOIN сохраняет все продукты, COUNT считает только существующие продажи",
    answers: ["Количество продаж по каждому продукту (включая продукты без продаж)"]
  },
  {
    id: "join008",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с подзапросом", 
    theme: "JOIN с производными таблицами",
    text: `Что делает этот запрос?
    <pre>SELECT u.name, recent_orders.total
    FROM Users u
    LEFT JOIN (
        SELECT user_id, SUM(amount) as total 
        FROM Orders 
        WHERE order_date >= '2024-01-01'
        GROUP BY user_id
    ) recent_orders ON u.id = recent_orders.user_id</pre>`,
    choices: [
      "Показывает всех пользователей и их общие суммы заказов за 2024 год",
      "Только пользователей с заказами в 2024 году", 
      "Общую сумму всех заказов за 2024 год",
      "Пользователей без заказов в 2024 году",
      "Заказы сделанные до 2024 года"
    ],
    hint: "LEFT JOIN с подзапросом сохраняет всех пользователей",
    answers: ["Показывает всех пользователей и их общие суммы заказов за 2024 год"]
  },
  {
    id: "join009",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Фильтрация по связанной таблице", 
    theme: "WHERE с условием из JOIN",
    text: `Таблицы: Customers(id,name), Orders(id,customer_id,status).
    Каких клиентов вернет запрос?
    <pre>SELECT c.name
    FROM Customers c
    LEFT JOIN Orders o ON c.id = o.customer_id
    WHERE o.status = 'completed' 
       OR o.customer_id IS NULL</pre>`,
    choices: [
      "Только клиентов с завершенными заказами",
      "Клиентов с завершенными заказами И клиентов без заказов", 
      "Всех клиентов независимо от заказов",
      "Только клиентов без заказов",
      "Клиентов с незавершенными заказами"
    ],
    hint: "OR o.customer_id IS NULL включает клиентов без заказов",
    answers: ["Клиентов с завершенными заказами И клиентов без заказов"]
  },
  {
    id: "join010",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с HAVING", 
    theme: "Фильтрация групп после JOIN",
    text: `Таблицы: Departments(id,name), Employees(id,dept_id,salary).
    Что найдет этот запрос?
    <pre>SELECT d.name, COUNT(e.id) as emp_count
    FROM Departments d
    LEFT JOIN Employees e ON d.id = e.dept_id
    GROUP BY d.id, d.name
    HAVING COUNT(e.id) = 0 
        OR AVG(e.salary) > 50000</pre>`,
    choices: [
      "Отделы без сотрудников И отделы со средней зарплатой > 50000",
      "Только отделы без сотрудников", 
      "Только отделы с высокой зарплатой",
      "Все отделы с сотрудниками",
      "Отделы с количеством сотрудников = 0"
    ],
    hint: "HAVING работает с результатами агрегации после GROUP BY",
    answers: ["Отделы без сотрудников И отделы со средней зарплатой > 50000"]
  },
  {
    id: "join011",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "RIGHT JOIN с IS NULL фильтром", 
    theme: "Нахождение отсутствующих связей",
    text: `Таблицы: Students(id,name), Enrollments(id,student_id,course_id).
    Как найти курсы, на которые никто не записался?
    <pre>SELECT c.name
    FROM Enrollments e
    RIGHT JOIN Courses c ON e.course_id = c.id
    WHERE e.course_id IS NULL</pre>`,
    choices: [
      "Курсы без записей",
      "Студентов без курсов", 
      "Все курсы со записями",
      "Курсы с максимальным количеством записей",
      "Студентов записанных на все курсы"
    ],
    hint: "RIGHT JOIN сохраняет все курсы, WHERE фильтрует те, где нет записей",
    answers: ["Курсы без записей"]
  },
  {
    id: "join012",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с COALESCE", 
    theme: "Обработка NULL значений",
    text: `Что делает COALESCE в этом запросе?
    <pre>SELECT u.name, COALESCE(SUM(o.amount), 0) as total_spent
    FROM Users u
    LEFT JOIN Orders o ON u.id = o.user_id
    GROUP BY u.id, u.name</pre>`,
    choices: [
      "Заменяет NULL на 0 для пользователей без заказов",
      "Фильтрует пользователей без заказов", 
      "Суммирует только ненулевые заказы",
      "Вычисляет среднее значение заказов",
      "Группирует пользователей по категориям"
    ],
    hint: "COALESCE возвращает первый не-NULL аргумент",
    answers: ["Заменяет NULL на 0 для пользователей без заказов"]
  },
  {
    id: "join013",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Самостоятельный LEFT JOIN", 
    theme: "Self JOIN с фильтрацией",
    text: `Таблица Employees(id,name,manager_id). Как найти сотрудников без подчиненных?
    <pre>SELECT e1.name
    FROM Employees e1
    LEFT JOIN Employees e2 ON e1.id = e2.manager_id
    WHERE e2.manager_id IS NULL</pre>`,
    choices: [
      "Сотрудников без менеджеров",
      "Сотрудников без подчиненных", 
      "Всех менеджеров",
      "Сотрудников с максимальным количеством подчиненных",
      "Всех сотрудников независимо от иерархии"
    ],
    hint: "e2 - это потенциальные подчиненные, их отсутствие означает нет подчиненных",
    answers: ["Сотрудников без подчиненных"]
  },
  {
    id: "join014",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с LIMIT в подзапросе", 
    theme: "JOIN с ограниченным подзапросом",
    text: `Что делает этот запрос?
    <pre>SELECT p.name, recent.price
    FROM Products p
    LEFT JOIN (
        SELECT product_id, price 
        FROM PriceHistory 
        ORDER BY change_date DESC 
        LIMIT 1
    ) recent ON p.id = recent.product_id</pre>`,
    choices: [
      "Показывает все продукты с их последней ценой",
      "Только продукты с историей цен", 
      "Продукты без истории цен",
      "Все цены из истории для каждого продукта",
      "Среднюю цену для каждого продукта"
    ],
    hint: "Подзапрос возвращает последнюю запись из истории цен для каждого продукта",
    answers: ["Показывает все продукты с их последней ценой"]
  },
  {
    id: "join015",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Комбинирование LEFT и INNER JOIN", 
    theme: "Смешанные типы JOIN",
    text: `Таблицы: A(id), B(id,a_id), C(id,b_id). Что вернет запрос?
    <pre>SELECT a.id, b.id, c.id
    FROM A a
    LEFT JOIN B b ON a.id = b.a_id
    INNER JOIN C c ON b.id = c.b_id</pre>`,
    choices: [
      "Все строки из A с соответствующими B и C",
      "Только строки где есть все три связи A-B-C", 
      "Строки из A даже если нет B или C",
      "Только строки где есть A и B, но C может отсутствовать",
      "Все возможные комбинации A, B, C"
    ],
    hint: "INNER JOIN после LEFT JOIN фильтрует окончательный результат",
    answers: ["Только строки где есть все три связи A-B-C"]
  },

    {
    id: "join001",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "LEFT JOIN с фильтрацией",
    theme: "LEFT JOIN и WHERE",
    text: `Даны таблицы: Users (id, name) и Orders (id, user_id, amount). 
    Какие пользователи будут выбраны этим запросом?
    <pre>SELECT u.name 
    FROM Users u 
    LEFT JOIN Orders o ON u.id = o.user_id 
    WHERE o.user_id IS NULL</pre>`,
    choices: [
      "Все пользователи с заказами",
      "Только пользователи без заказов", 
      "Все пользователи независимо от заказов",
      "Только пользователи с самыми дорогими заказами",
      "Запрос вернет ошибку"
    ],
    hint: "Фильтр WHERE o.user_id IS NULL ищет строки, где соединение не найдено",
    answers: ["Только пользователи без заказов"]
  },
  {
    id: "join002",
    type: "multiplechoices",
    header: "Тест по соединению таблиц", 
    title: "RIGHT JOIN с условием",
    theme: "RIGHT JOIN и фильтрация",
    text: `Таблицы: Departments (id, name) и Employees (id, name, dept_id).
    Что вернет этот запрос?
    <pre>SELECT d.name, e.name 
    FROM Employees e 
    RIGHT JOIN Departments d ON e.dept_id = d.id 
    WHERE e.id IS NOT NULL</pre>`,
    choices: [
      "Все отделы и всех сотрудников",
      "Только отделы, в которых есть сотрудники",
      "Всех сотрудников и их отделы", 
      "Отделы без сотрудников",
      "Только сотрудников без отделов"
    ],
    hint: "RIGHT JOIN возвращает все отделы, а WHERE фильтрует только те, где есть сотрудники",
    answers: ["Только отделы, в которых есть сотрудники"]
  },
  {
    id: "join003", 
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Множественная фильтрация JOIN",
    theme: "LEFT JOIN с несколькими условиями",
    text: `Таблицы: Products (id, name, price) и Categories (id, name).
    Что делает этот запрос?
    <pre>SELECT p.name, c.name 
    FROM Products p 
    LEFT JOIN Categories c ON p.category_id = c.id AND c.name = 'Электроника'
    WHERE p.price > 1000</pre>`,
    choices: [
      "Все продукты дороже 1000 с категорией 'Электроника'",
      "Все продукты дороже 1000, но категория показывается только если это 'Электроника'", 
      "Только продукты категории 'Электроника' дороже 1000",
      "Продукты без категории дороже 1000",
      "Все продукты с категориями независимо от цены"
    ],
    hint: "Условие c.name = 'Электроника' в JOIN фильтрует соединение, но не строки продуктов",
    answers: ["Все продукты дороже 1000, но категория показывается только если это 'Электроника'"]
  },
  {
    id: "join004",
    type: "multiplechoices", 
    header: "Тест по соединению таблиц",
    title: "Комбинирование LEFT и RIGHT JOIN",
    theme: "Разница между LEFT и RIGHT JOIN",
    text: `В чем основная разница между этими запросами?
    <pre>1. SELECT * FROM A LEFT JOIN B ON A.id = B.a_id
    2. SELECT * FROM B RIGHT JOIN A ON A.id = B.a_id</pre>`,
    choices: [
      "Первый быстрее второго",
      "Они возвращают разные результаты", 
      "Это идентичные запросы, возвращают одинаковые результаты",
      "Первый использует индекс, второй - нет",
      "Второй запрос синтаксически неверен"
    ],
    hint: "LEFT JOIN и RIGHT JOIN - зеркальные операции",
    answers: ["Это идентичные запросы, возвращают одинаковые результаты"]
  },
  {
    id: "join005",
    type: "multiplechoices",
    header: "Тест по соединению таблиц",
    title: "Фильтрация до и после JOIN",
    theme: "WHERE vs ON условия",
    text: `Какая разница между этими запросами?
    <pre>Запрос 1:
    SELECT * FROM A 
    LEFT JOIN B ON A.id = B.a_id AND B.status = 'active'
    
    Запрос 2:
    SELECT * FROM A 
    LEFT JOIN B ON A.id = B.a_id 
    WHERE B.status = 'active' OR B.a_id IS NULL</pre>`,
    choices: [
        "Запрос 1 вернет все строки из A, Запрос 2 - только активные или без связи",
        "Оба запроса возвращают одинаковый результат",
        "Запрос 2 вернет ошибку из-за OR",
        "Запрос 1 вернет только активные связи",
        "Запрос 2 вернет все строки из A"
    ],
    hint: "<div class='alert alert-primary'><p>Условие в ON фильтрует соединение, но не строки левой таблицы. Условие в WHERE фильтрует итоговый результат.</p><p><a href='https://github.com/CODECRUNCHWORLDWIDE/C1-Code-Crunch-Convos/blob/main/curriculum/week-10-databases-sql/quiz.md' target='_blank' rel='noopener'>Разбор JOIN и WHERE</a></p></div>",
    answers: ["Запрос 1 вернет все строки из A, Запрос 2 - только активные или без связи"]
},

   {
    "id": "git001",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Инициализация и клонирование",
    "theme": "Начало работы с Git",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда создает новый локальный репозиторий Git в текущей директории?</p>\n      </div>\n    </div>",
    "choices": [
      "git clone",
      "git init",
      "git start",
      "git create",
      "git new",
      "git repo"
    ],
    "hint": "Команда начинается с буквы 'i'",
    "answers": ["git init"]
  },
  {
    "id": "git002",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Клонирование репозитория",
    "theme": "Начало работы с Git",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какой командой можно скопировать удаленный репозиторий на свой компьютер?</p>\n      </div>\n    </div>",
    "choices": [
      "git copy",
      "git download",
      "git clone",
      "git pull",
      "git fetch",
      "git replicate"
    ],
    "hint": "Эта команда используется для создания локальной копии удаленного репозитория",
    "answers": ["git clone"]
  },
  {
    "id": "git003",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Добавление файлов",
    "theme": "Работа с изменениями",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда добавляет изменения в индекс (staging area) перед коммитом?</p>\n      </div>\n    </div>",
    "choices": [
      "git commit",
      "git add",
      "git push",
      "git stage",
      "git include",
      "git save"
    ],
    "hint": "Команда из трех букв, начинается с 'a'",
    "answers": ["git add"]
  },
  {
    "id": "git004",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Сохранение изменений",
    "theme": "Работа с изменениями",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда создает коммит (снимок) текущего состояния репозитория?</p>\n      </div>\n    </div>",
    "choices": [
      "git add",
      "git save",
      "git commit",
      "git snapshot",
      "git store",
      "git record"
    ],
    "hint": "Команда из 6 букв, начинается с 'c' и заканчивается на 't'",
    "answers": ["git commit"]
  },
  {
    "id": "git005",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Отправка изменений",
    "theme": "Взаимодействие с удаленным репозиторием",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда отправляет локальные коммиты в удаленный репозиторий?</p>\n      </div>\n    </div>",
    "choices": [
      "git pull",
      "git push",
      "git send",
      "git upload",
      "git export",
      "git deploy"
    ],
    "hint": "Команда из 4 букв, противоположна команде 'pull'",
    "answers": ["git push"]
  },
  {
    "id": "git006",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Получение изменений",
    "theme": "Взаимодействие с удаленным репозиторием",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда загружает изменения из удаленного репозитория и объединяет их с локальными?</p>\n      </div>\n    </div>",
    "choices": [
      "git push",
      "git fetch",
      "git pull",
      "git merge",
      "git download",
      "git update"
    ],
    "hint": "Команда из 4 букв, противоположна команде 'push'",
    "answers": ["git pull"]
  },
  {
    "id": "git007",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Проверка статуса",
    "theme": "Просмотр информации",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда показывает текущее состояние рабочей директории и индекса?</p>\n      </div>\n    </div>",
    "choices": [
      "git check",
      "git status",
      "git info",
      "git state",
      "git view",
      "git show"
    ],
    "hint": "Команда из 6 букв, показывает состояние репозитория",
    "answers": ["git status"]
  },
  {
    "id": "git008",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Просмотр истории",
    "theme": "Просмотр информации",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда отображает историю коммитов в репозитории?</p>\n      </div>\n    </div>",
    "choices": [
      "git history",
      "git log",
      "git list",
      "git commits",
      "git timeline",
      "git show"
    ],
    "hint": "Команда из 3 букв, показывает записи в хронологическом порядке",
    "answers": ["git log"]
  },
  {
    "id": "git009",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Создание ветки",
    "theme": "Работа с ветками",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда создает новую ветку в Git?</p>\n      </div>\n    </div>",
    "choices": [
      "git branch",
      "git checkout",
      "git new-branch",
      "git create-branch",
      "git switch",
      "git fork"
    ],
    "hint": "Команда из 6 букв, также используется для просмотра списка веток",
    "answers": ["git branch"]
  },
  {
    "id": "git010",
    "type": "multiplechoices",
    "header": "Тест по основным командам Git",
    "title": "Объединение веток",
    "theme": "Работа с ветками",
    "text": "<div class=\"container-fluid\">\n      <div class=\"alert alert-primary mt-3\">\n        <strong>Вопрос:</strong>\n        <p class=\"mb-0\">Какая команда объединяет изменения из одной ветки в текущую?</p>\n      </div>\n    </div>",
    "choices": [
      "git combine",
      "git join",
      "git merge",
      "git unite",
      "git integrate",
      "git connect"
    ],
    "hint": "Команда из 5 букв, начинается с 'm' и заканчивается на 'e'",
    "answers": ["git merge"]
  }

];

window.quizesSets = quizesSets;