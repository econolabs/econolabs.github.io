var b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], m = b; function v(e) { if (e instanceof String && e.includes("table")) { let t = /table/i; return console.log(e.replace(t, 'table class="table table-sm"')), e.replace(t, 'table class="table table-sm"') } return e } var u = v; var h = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; function g(e = {}) { let t = 0, r = 0; Object.keys(e).forEach(i => { r < h.findIndex(n => n === i.substring(0, 1)) && (r = h.findIndex(n => n === i.substring(0, 1)) + 1), t < parseInt(i.substring(1)) && (t = parseInt(i.substring(1))) }); let a = new Array(t).fill("").map(() => new Array(r).fill("")); return Object.keys(e).map(i => { let [n, ...l] = i, o = h.findIndex(d => d === n), s = parseInt(l) - 1; a[s][o] = e[i] }), a } var w = g; function T(e) { var t = document.createElement("table"); t.setAttribute("class", "table table-bordered table-sm"); var r = document.createElement("thead"), a = document.createElement("tr"), i = document.createElement("th"); i.innerText = " ", a.appendChild(i), e && Array.isArray(e) && e[0] && e[0].forEach((l, o) => { var s = document.createElement("th"); s.setAttribute("class", "text-center"), s.innerText = m[o], a.appendChild(s) }), r.appendChild(a), t.appendChild(r); var n = document.createElement("tbody"); return e && Array.isArray(e) && e.forEach((s, o) => { var s = document.createElement("tr"), d = document.createElement("td"); d.setAttribute("scope", "row"), d.innerText = o + 1, s.appendChild(d), e[o] && e[o].forEach((p, c) => { var f = document.createElement("td"); f.innerText = e[o][c], s.appendChild(f) }), n.appendChild(s) }), t.appendChild(n), t } var A = T; function S(e, t) { return Math.floor(Math.random() * (t - e + 1) + e) } var C = S; function $(e, t) {
    return document.getElementById(e).innerHTML = `
    <div class="card m-1">
        <div class="card-body" id="studentquiz">
            <h5 class="card-title">${t?.theme ? t.theme : ""}</h5>
            <p class="card-text">${t?.title ? t.title : ""}</p>
            <hr />
            <div class=row>
                <div class="col-12 col-lg-3">
                    <img src=${t.avatarUrl}
                            data-bs-toggle="tooltip" data-bs-html="true" 
                            alt=${t.id} id=${t.id} class="avatar"
                            title=${t.user}>
                    <div class="m-1">
                    ${t?.user ? u(t.user) : ""}
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div id="studenthint" class="mb-3">${t?.quizString ? u(t.quizString) : ""}</div>
                </div>
            <div>    
            <hr />
        </div>
    </div>`} var F = $; function I({ type: e = "", content: t = {}, options: r = null, seriesWithNames: a = null }) { if (console.log(t), e.includes("scatter")) { let o = { chart: { type: "scatter", zoom: { enabled: !0, type: "xy" } }, title: { text: "", align: "left", style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "normal", marginTop: "2rem", cssClass: "apexcharts-title" } }, xaxis: { title: { text: void 0, style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 200, cssClass: "apexcharts-xaxis-title" } }, tickAmount: 7, labels: { formatter: function (p) { return parseFloat(p).toFixed(1) } } }, yaxis: { title: { text: void 0, style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 200, cssClass: "apexcharts-yaxis-title" } }, tickAmount: 7 } }, s = a || (t?.series ? [{ name: "y", data: t?.series }] : [{ name: "y", data: [[5, 5], [-5, 5], [-5, -5], [5, -5], [1, 1], [-2, -2]] }]); return r ? { ...o, ...r } : (t.series, { ...o, series: s }) } if (e.includes("datetimeareanocategories")) return { chart: { type: "area", zoom: { autoScaleYaxis: !0 } }, title: { text: "", align: "left", style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "normal", marginTop: "2rem", cssClass: "apexcharts-title" } }, dataLabels: { enabled: !1 }, markers: { size: 0, style: "hollow" }, xaxis: { type: "datetime", title: { text: void 0, style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "normal", cssClass: "apexcharts-xaxis-title" } } }, tooltip: { x: { format: "dd MMM yyyy" } }, fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: .7, opacityTo: .9, stops: [0, 100] } }, yaxis: { title: { text: void 0, style: { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 200, cssClass: "apexcharts-yaxis-title" } }, labels: { formatter: function (s) { return parseFloat(s).toFixed(1) } } }, series: t.series } } function k(e) {
    return `<table class="table table-striped table-bordered table-hover">
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">Period</th>
        <th scope="col">D</th>
        <th scope="col">\u041A</th>
        <th scope="col">Sum</th>
        <th scope="col">Type</th>                  
    </tr>
</thead>
<tbody>
    ${[...new Set(e.map(r => r.period))].map(r => Array.isArray(e) && e.filter(a => a.period === r).map((a, i) => `<tr>
                <th scope="row">${i + 1}</th>
                <td><small>${a?.period}</td>
                <td><small>${a?.d}</td>
                <td><small>${a?.k}</td>
                <td><small>${a?.sum}</td>
                <td><small>${a?.type ? a.type : ""}</td>
               </tr>`).join("")).join("")}
</tbody>
</table>`} var E = k; function y({ indicator: e = "Sales", balanceIndicators: t = [], records: r = [], periods: a = ["default"], period: i = "default" }) { let n = 0, l = 0, o = t.filter(s => s.type === "asset").map(s => s.title); return Array.isArray(r) && r.forEach(s => { let d = a.findIndex(c => c === s.period), p = a.findIndex(c => c === i) + 1; s.d === e && p > d && (n = n + parseFloat(s.sum)), s.k === e && p > d && (l = l + parseFloat(s.sum)) }), o.includes(e) ? n - l : l - n } function j(e, t) {
    let r = [...new Set(e.map(a => a.period))]; return "<table class='table'><thead><tr class='bg-secondary text-white'>" + [" ", ...r].map(a => `<th scope="col">${a}</th>`).join("") + "</tr></thead><tbody>" + t.filter(a => a.type === "asset" && a.title.length > 2).map(a => `
                <tr>
                    <th scope="row" class="text-small">${a.title}</th>

                    ${r.map((i, n) => `<td>${y({ indicator: a.title, balanceIndicators: t, records: e, periods: r, period: r[n] })}</td>`)}
                    
                </tr>`).join("") + "</tbody></table><table class='table'><thead><tr class='bg-secondary text-white'>" + [" ", ...r].map(a => `<th scope="col">${a}</th>`).join("") + "</tr></thead><tbody>" + t.filter(a => a.type !== "asset" && a.title.length > 2).map((a, i) => `
                <tr>
                    <th scope="row">${a.title}</th>

                    ${r.map((n, l) => `<td>${y({ indicator: a.title, balanceIndicators: t, records: e, periods: r, period: r[l] })}</td>`)}
                    
                </tr>`).join("") + "</tbody></table>"
} var B = j; function x({ indicator: e = "Sales", balanceIndicators: t = [], records: r = [], periods: a = ["default"], period: i = "default" }) { let n = 0, l = 0, o = t.filter(s => s.type === "asset").map(s => s.title); return Array.isArray(r) && r.forEach(s => { let d = a.findIndex(c => c === s.period), p = a.findIndex(c => c === i) + 1; s.d === e && p > d && (n = n + parseFloat(s.sum)), s.k === e && p > d && (l = l + parseFloat(s.sum)) }), o.includes(e) ? n - l : l - n } function D(e, t, r, a) { let i = []; function n(l) { let o = a.findIndex(s => l === s.title); return a[o].type === "asset" } return r.map(l => { n(e) ? (i.push(x({ indicator: e, balanceIndicators: a, records: t, periods: r, period: l })), i.push(0)) : (i.push(0), i.push(x({ indicator: e, balanceIndicators: a, records: t, periods: r, period: l }))) }), i } function M(e, t) { let r = [...new Set(e.map(l => l.period))], a = []; t.forEach(l => { l.title.length > 2 && a.push({ name: l.title, data: D(l.title, e, r, t) }) }); let i = []; return r.forEach(l => { i.push("Asset " + l), i.push("Cap+L " + l) }), { ...{ chart: { type: "bar", stacked: !0, zoom: { enabled: !0 }, width: "90%", height: "80%" }, plotOptions: { bar: { borderRadius: 1, horizontal: !1 } }, legend: { position: "bottom" }, fill: { opacity: 1 }, xaxis: { categories: i } }, series: a } } var U = M; function O(e, t) {
    let [r, ...a] = t, i = [...new Set(e.map(l => l.period))]; function n(l = [], o = "cash", s) { let d = 0; return l.forEach(p => (p?.type && p.type.includes(o) && p.period === s && (d = d + parseFloat(p.sum)), null)), d } return "<table class='table'><thead><tr class='bg-secondary text-white'>" + [r, ...i].map(l => `<th scope="col">${l}</th>`).join("") + "</tr></thead><tbody>" + a.map(l => `<tr>
            <th scope="row" class="text-small">${l}</th>
            ${i.map(o => `<td>${n(e, l, o)}</td>`).join("")}            
        </tr>`) + "</tbody></table>"
} var H = O; function P(e, t) {
    let r = [...new Set(e.map(l => l.period))], [a, ...i] = t; function n(l = [], o = "cash", s) { let d = 0; return l.forEach(p => (p?.type && p.type.includes(o) && p.period === s && (d = d + parseFloat(p.sum)), null)), d } return "<table class='table'><thead><tr class='bg-secondary text-white'>" + [a, ...r].map(l => `<th scope="col">${l}</th>`).join("") + "</tr></thead><tbody>" + i.map(l => `<tr>
            <th scope="row" class="text-small">${l}</th>
            ${r.map(o => `<td>${n(e, l, o)}</td>`).join("")}                            
        </tr>`) + "</tbody></table>"
} var R = P; function V(e, t) { return Math.floor(Math.random() * (t - e + 1) + e) } function L(e, t) { let r, a, i; do r = t[V(0, t.length - 1)], a = r?.description && (typeof r.description == "string" || r.description instanceof String) ? r.description : " " + !!r?.alt_description && (typeof r.alt_description == "string" || r.alt_description instanceof String) ? r.alt_description : " ", i = !a.includes("woman") && !a.includes("girl"); while (e !== i); return r.urls.thumb } var Q = L; function W(e, t) {
    return document.getElementById(e).innerHTML = `
        <div class="card-body m-1">
        <h5 class="card-title">${t?.theme ? t.theme : ""}</h5>
        <p class="card-text">${t?.title ? t.title : ""}</p>
        <hr />
        <div id="studenthint" class="mb-3">${t?.quizhint ? u(t.quizhint) : ""}</div>
        <div id="hint" class="mb-3">
            ${t?.hint ? u(t.hint) : ""}
        </div>
        <hr />
        <div id="examplequizstring" class="mb-3">
            ${t?.exampleQuizString ? u(t.exampleQuizString) : ""}
        </div>
        <div id="examplespreadsheet" class="mb-3">
            ${t?.exampleSpreadsheet ? u(t.exampleSpreadsheet) : ""}
        </div>

        <div class="p-2 feedbackquiz" style="display: none;">
            <label for="feedbackquiztextarea" class="form-label"></label>
            <textarea id="feedbackquiztextarea" class="form-control form-control-sm feedbackquiztextarea"
                aria-label="form-control-sm">
            </textarea>
            <div class="form-text feedbackquizhelp"></div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">  
            <button class="btn btn-sm btn-outline-secondary quizbutton" type="button" style="display: none;">Button</button>
        </div>

    </div>     
`} var _ = W; function G(e, t) { let r = null; return (...a) => { window.clearTimeout(r), r = window.setTimeout(() => { e.apply(null, a) }, t) } } var Z = G; function N(e, t, r, a, i, n) { if (!t) return document.getElementById("useremailinputgroup").style.removeProperty("display"), null; let l = { id: a, title: r.title, theme: r.theme, answer: "", comment: r.title + " (" + r.theme + ")", type: "html", content: e, quizString: "", deleted: !1, email: t?.email, user: t?.user ? t?.user : "anonymous", avatarUrl: t?.avatarUrl ? t.avatarUrl : null, date: new Intl.DateTimeFormat("ru", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(new Date) }, o = new Intl.DateTimeFormat("en", { weekday: "short", year: "numeric", month: "short", day: "numeric" }).format(new Date).replace(/[^a-zA-Z0-9]/g, "_"), s = { id: i(o), title: r.title, theme: r.theme, email: t?.email, user: "quiz", avatarUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=100", timestamp: +Date.now() }, d = t.email.replace(/[^a-zA-Z0-9]/g, "_"), p = {}; p["/quizescases/quizesCasesIds/" + a + "/studenthints/" + d] = { email: t.email, hint: e }, p["/usersCraft/" + d + "/posts/" + a] = l, p["/currentDay/" + o + "/posts/" + s.id] = s, n(p) } var Y = N; export { m as alphabet, u as applyClassToTableTag, w as createMinimalProtoArray, Z as debounce, Q as findUnspalshImageByGender, I as getApexchartOptionsFromCase, A as makeDomNodeForSpreadsheet, C as randomIntFromInterval, F as vanillajsQuizByDateCard, _ as vanillajsQuizCard, E as vanillajsShowAccountingRecords, B as vanillajsShowBalanceMarkUp, U as vanillajsShowBalanceStackedBars, H as vanillajsShowCashFlowMarkUp, R as vanillajsShowFinancialResultsMarkUp, Y as writeUserHint };