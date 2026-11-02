# Правила составления тестов для системы `quizesSets.js`

Документ описывает, как объект теста из `quizesSets.js` обрабатывается
скриптами:

- `vanillajsquizcardwithstorage2026.js` — рендер карточки, проверка ответа,
  сохранение в Firebase;
- `basicfirebasecrudauthservices.js` — подстановка `{var1-10}` / `{= ...}`,
  хэширование ответов, рендер KaTeX, парсер формул;
- `charts.js` — отрисовка Chart.js;
- `jsxgraphs.js` — отрисовка JSXGraph.

Правила ниже выведены из реального кода, а не из общих соображений.

---

## 1. Структура объекта теста

Каждый тест — объект в массиве `window.quizesSets`.

| Поле | Обязательность | Назначение |
|------|----------------|------------|
| `id` | **да** | Уникальный строковый идентификатор (латиница, цифры, `_`). |
| `type` | **да** | `"multiplechoices"` или `"mathwithrandomnumber"`. |
| `header` | **да** | Надзаголовок. Выводится в `#quizHeader` с номером страницы. |
| `title` | **да** | Короткий заголовок карточки. |
| `theme` | **да** | Тема (для группировки/фильтрации). |
| `text` | **да** | HTML-текст условия (см. §4). |
| `choices` | только для `multiplechoices` | Массив вариантов ответа (строки). **Перемешивается** `shuffle`. |
| `answers` | только для `multiplechoices` | Массив правильных ответов. **Хэшируется SHA-1**. Строка должна **точно** совпадать с одной из `choices`. |
| `answer` | только для `mathwithrandomnumber` | Выражение (см. §6). Должно содержать `{var1-10}`. |
| `hint` | **да** | HTML-подсказка с решением (см. §7). |
| `randomfrom` | только для `mathwithrandomnumber` | Массив значений для `var1-10`. **Всегда задавай.** |
| `chartjs` | опционально | Тип графика Chart.js (`"binom"`, `"poisson"`, `"normal"`, `"normalArea"`) **или массив** `{ type, id, config, resultId }`. |
| `chartjsId` | опционально | id `<canvas>` в `text` (по умолчанию `"quizChart"`). |
| `chartjsConfig` | опционально | Параметры графика. Строки с `{` прогоняются через `processquizwithrandomnumber`. |
| `chartjsResultId` | опционально | id блока, куда `normalArea` пишет `P(a<X<b)`. |
| `jsxgraph` | опционально | Тип JSXGraph **или массив** `{ type, id, config }`. |
| `jsxgraphId` | опционально | id `<div class="jxgbox">` в `text`. |
| `jsxgraphConfig` | опционально | Параметры JSXGraph. Строки с `{` прогоняются через парсер. |
| `JSXGraphType` | устарело | Старый механизм: `window.jsxtemplatefunctions[...]("box")`. Не использовать в новых тестах. |

---

## 2. Именование `id`

- Префикс по источнику/разделу:
  - `fipi_*` — задания ФИПИ/ОГЭ;
  - `tv_*` — теория вероятностей;
  - `excel*_*` — Excel-задачи;
  - `jsx_*` — JSXGraph-тесты;
  - `charttype_*`, `twochart_*`, `binom_chart_*`, `poisson_chart_*`,
    `normal_chart_*` — графические тесты;
  - `statistics*` — статистика.
- Внутри — латиница, цифры, `_`. Уникальность обязательна.

---

## 3. Тип `multiplechoices` — тест с выбором ответа

### 3.1 Как обрабатывается

```js
// updateQuiz()
const mixedAnswers = basicfirebasecrudauthservices.shuffle([...quiz.choices]);
getHashesArray(quiz.answers).then(res => {
  store.dispatch(seedState({ object: { answers: res, answer: null } }));
});
getHashesArray(mixedAnswers).then(res => {
  // id input'а = SHA-1 от текста варианта
  // radio, если answers.length === 1, иначе checkbox
});