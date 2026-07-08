(function () {
    const editor = document.getElementById('markdown-editor');
    const preview = document.getElementById('markdown-preview');
    const charCount = document.getElementById('char-count');
    const statusMessage = document.getElementById('status-message');

    // Ключ для localStorage
    const STORAGE_KEY = 'markdown_content';

    // Функция рендеринга Markdown в HTML с Bootstrap классами
    function renderMarkdownWithBootstrap(markdownText) {
        try {
            if (!markdownText || markdownText.trim() === '') {
                preview.innerHTML = `<p class="text-muted fst-italic">Введите Markdown текст для предпросмотра...</p>`;
                return true;
            }

            // Проверяем, доступен ли marked
            if (typeof marked === 'undefined') {
                throw new Error('Библиотека marked не загружена');
            }

            // Используем marked.parse() для новых версий (v4+)
            let htmlContent;
            if (typeof marked.parse === 'function') {
                // Новая версия marked (v4+)
                htmlContent = marked.parse(markdownText);
            } else if (typeof marked === 'function') {
                // Старая версия marked
                htmlContent = marked(markdownText);
            } else {
                throw new Error('Неизвестная версия marked');
            }

            // Применяем Bootstrap классы к сгенерированному HTML
            htmlContent = applyBootstrapClasses(htmlContent);

            preview.innerHTML = htmlContent;
            return true;
        } catch (error) {
            console.error('Ошибка рендеринга:', error);
            preview.innerHTML = `
              <div class="alert alert-danger" role="alert">
                <h5 class="alert-heading">❌ Ошибка парсинга Markdown</h5>
                <p class="mb-0">${error.message}</p>
              </div>
            `;
            return false;
        }
    }

    // Функция применения Bootstrap классов к HTML
    function applyBootstrapClasses(html) {
        // Создаем временный DOM элемент для манипуляций
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Применяем классы к заголовкам
        tempDiv.querySelectorAll('h1').forEach(el => {
            el.className = 'display-4 mt-4 mb-3';
        });
        tempDiv.querySelectorAll('h2').forEach(el => {
            el.className = 'display-6 mt-4 mb-3';
        });
        tempDiv.querySelectorAll('h3').forEach(el => {
            el.className = 'h3 mt-4 mb-3';
        });
        tempDiv.querySelectorAll('h4').forEach(el => {
            el.className = 'h4 mt-3 mb-2';
        });
        tempDiv.querySelectorAll('h5').forEach(el => {
            el.className = 'h5 mt-3 mb-2';
        });
        tempDiv.querySelectorAll('h6').forEach(el => {
            el.className = 'h6 mt-3 mb-2';
        });

        // Параграфы
        tempDiv.querySelectorAll('p').forEach(el => {
            el.className = 'lead';
        });

        // Ссылки
        tempDiv.querySelectorAll('a').forEach(el => {
            el.className = 'text-primary text-decoration-none';
        });

        // Списки
        tempDiv.querySelectorAll('ul').forEach(el => {
            el.className = 'list-group mb-3';
        });
        tempDiv.querySelectorAll('ol').forEach(el => {
            el.className = 'list-group list-group-numbered mb-3';
        });
        tempDiv.querySelectorAll('ul li, ol li').forEach(el => {
            if (!el.closest('ul') && !el.closest('ol')) {
                el.className = 'list-group-item';
            } else {
                // Для вложенных списков
                const parent = el.closest('ul, ol');
                if (parent && parent.className.includes('list-group')) {
                    el.className = 'list-group-item';
                }
            }
        });

        // Цитаты
        tempDiv.querySelectorAll('blockquote').forEach(el => {
            el.className = 'blockquote p-3 bg-light border-start border-5 border-primary';
        });

        // Код блоки
        tempDiv.querySelectorAll('pre').forEach(el => {
            el.className = 'bg-primary text-light p-3 rounded';
        });
        tempDiv.querySelectorAll('pre code').forEach(el => {
            el.className = el.className || '';
        });

        // Код в строке
        tempDiv.querySelectorAll('p code, li code, td code, th code').forEach(el => {
            el.className = 'bg-light text-danger p-1 rounded';
        });

        // Таблицы
        tempDiv.querySelectorAll('table').forEach(el => {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            el.className = 'table table-sm table-striped table-hover';
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);
        });

        // // Заголовки таблиц
        // tempDiv.querySelectorAll('th').forEach(el => {
        //     el.className = 'table-dark';
        // });

        // Изображения
        tempDiv.querySelectorAll('img').forEach(el => {
            el.className = 'img-fluid rounded my-3';
        });

        // Горизонтальные линии
        tempDiv.querySelectorAll('hr').forEach(el => {
            el.className = 'my-4';
        });

        // Жирный текст
        tempDiv.querySelectorAll('strong, b').forEach(el => {
            el.className = 'fw-bold';
        });

        // Курсив
        tempDiv.querySelectorAll('em, i').forEach(el => {
            el.className = 'fst-italic';
        });

        // Чекбоксы в списках задач
        tempDiv.querySelectorAll('input[type="checkbox"]').forEach(el => {
            el.className = 'form-check-input me-2';
            el.disabled = true;
        });

        return tempDiv.innerHTML;
    }


    function doSaveFirebase() {
        let { application } = window.basicfirebasecrudauthservices.loadState();

        let currentDay = new Intl.DateTimeFormat("en", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric"
        }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");

          let userEmail = application.email.replace(/[^a-zA-Z0-9]/g, "_");


        let htmlPost = {
                 id: "strategic" + userEmail + "media",
                content: document.getElementById('markdown-preview').innerHTML,
                 type: "html",
                 theme: "Методы стратегического анализа",
                title: "Методы стратегического анализа " + application.user,
                 answer: "",
                 comment: "",
                 quizString: "",
                 deleted: false,
            email: application.email,
            user: application.user,
                 avatarUrl: "",
                date: new Intl.DateTimeFormat("ru", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric"
                }).format(new Date()) //Date().toJSON()
        };

     //   console.log(htmlPost)

          let updates = {};
          updates["currentDay/" + currentDay + "/posts/" + htmlPost.id] = htmlPost;
          updates["/usersCraft/" + userEmail + "/posts/" + htmlPost.id] = htmlPost;


          window.basicfirebasecrudauthservices.updateFirebaseNode(updates)
          .then(()=>{console.log(updates)})

          console.log(updates)
    }

    // Функция обновления предпросмотра и сохранения
    function updatePreview() {
        const markdownText = editor.value;

        // Обновляем счетчик символов
        charCount.textContent = `${markdownText.length} символов`;

        // Рендерим
        renderMarkdownWithBootstrap(markdownText);

        // Сохраняем в localStorage
        try {
            localStorage.setItem(STORAGE_KEY, markdownText);
            showStatus('💾 Сохранено в localStorage', 'success');
            doSaveFirebase()
        } catch (error) {
            console.error('Ошибка сохранения:', error);
            showStatus('❌ Ошибка сохранения в localStorage', 'danger');
        }
    }

    // Функция отображения статуса
    function showStatus(message, type = 'info') {
        statusMessage.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
              ${message}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;

        // Автоматически скрываем через 3 секунды
        setTimeout(() => {
            const alert = statusMessage.querySelector('.alert');
            if (alert) {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }
        }, 3000);
    }

    // Функция загрузки из localStorage
    function loadFromStorage() {
        try {
            const savedContent = localStorage.getItem(STORAGE_KEY);
            if (savedContent !== null && savedContent.trim() !== '') {
                editor.value = savedContent;
                updatePreview();
                showStatus('📂 Загружено из localStorage', 'info');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Ошибка загрузки из localStorage:', error);
            return false;
        }
    }

    // Функция установки примера
    function setExampleContent() {
        const exampleMarkdown = `
        # Стратегический анализ предприятия по производству наполнителей для кошачьих туалетов

![Пример изображения](https://cdn.corporatefinanceinstitute.com/assets/strategic-analysis2.jpeg)

## 1. PESTLE-анализ (макросреда)

| Категория | Факторы | Влияние | Возможности / Угрозы |
|-----------|---------|---------|---------------------|
| **P**olitical (Политика) | Экологические нормы по утилизации отходов, санкции на импорт сырья | Высокое | Угроза: запрет на определённые виды наполнителей (силикагель) |
| **E**conomic (Экономика) | Рост числа домашних животных (+8% в год), инфляция, снижение доходов населения | Среднее | Возможность: рост рынка, переход на эконом-сегмент |
| **S**ocial (Социум) | Тренд на экологичность, рост числа владельцев кошек, урбанизация | Высокое | Возможность: рост спроса на биоразлагаемые наполнители |
| **T**echnological (Технологии) | Новые технологии переработки, автоматизация производства | Среднее | Возможность: снижение себестоимости, улучшение качества |
| **E**nvironmental (Экология) | Требования к биоразлагаемости, углеродный след | Высокое | Возможность: выпуск экологичных наполнителей |
| **L**egal (Право) | Ветеринарные сертификаты, маркировка товаров | Среднее | Угроза: штрафы за нарушение маркировки |

---

## 2. Модель 5 сил М. Портера

| Сила | Степень влияния (1-5) | Почему |
|------|----------------------|--------|
| Угроза новичков | **3** | Низкие барьеры для мелких производителей (древесный наполнитель), но высокие для силикагеля (дорогое оборудование) |
| Власть поставщиков | **3** | Зависимость от бентонитовой глины и древесины, но есть альтернативные поставщики |
| Власть покупателей | **4** | Покупатели легко переключаются между брендами, чувствительны к цене и качеству |
| Угроза субститутов | **3** | Альтернативы: древесные гранулы, бумажные наполнители, силикагель |
| Соперничество | **4** | Много игроков: Ever Clean, Cat's Best, N1, Pi-Pi, местные производители, ценовые войны |

**Итог:** Отрасль **средней привлекательности**. Конкуренция высокая, но рынок растёт. Успех зависит от себестоимости, качества и маркетинга.

---

## 3. SWOT-анализ

### Сильные стороны (S)
- S1: Широкий ассортимент (древесный, бентонитовый, силикагель)
- S2: Низкая себестоимость за счёт вертикальной интеграции
- S3: Долгосрочные контракты с крупными сетями (Ozon, Wildberries, «Пятёрочка»)
- S4: Собственная лаборатория контроля качества
- S5: Узнаваемый бренд в регионе

### Слабые стороны (W)
- W1: Слабая дистрибуция в регионах
- W2: Устаревшее оборудование на некоторых линиях
- W3: Высокая логистическая себестоимость (тяжёлый товар)
- W4: Отсутствие экологичных упаковок
- W5: Зависимость от импортного сырья (бентонит)

### Возможности (O)
- O1: Рост рынка зоотоваров (+12% в год)
- O2: Тренд на экологичность → биоразлагаемые наполнители
- O3: Выход на маркетплейсы (Wildberries, Ozon)
- O4: Государственные субсидии на переработку отходов
- O5: Создание премиальной линейки «Эко»

### Угрозы (T)
- T1: Рост цен на сырьё (бентонит, древесина) на 15-20%
- T2: Ужесточение экологических требований
- T3: Агрессивная экспансия зарубежных брендов
- T4: Падение спроса в эконом-сегменте из-за инфляции
- T5: Логистический кризис (рост цен на перевозки)

---

## 4. Матрица SWOT: стратегии

| | **Возможности (O)** | **Угрозы (T)** |
|---|---|---|
| **Сильные стороны (S)** | **S-O: Агрессивный рост**<br>1. S1+S2+O1+O3 → Расширение ассортимента на маркетплейсах<br>2. S3+S4+O2 → Запуск биоразлагаемой линейки<br>3. S5+O5 → Создание премиум-бренда «Эко-Кот» | **S-T: Защита**<br>1. S2+T1 → Долгосрочные контракты с поставщиками<br>2. S3+T3 → Укрепление отношений с сетями<br>3. S4+T2 → Получение эко-сертификатов |
| **Слабые стороны (W)** | **W-O: Преодоление**<br>1. W3+O3 → Открытие складов в регионах<br>2. W4+O2 → Инвестиции в экологичную упаковку<br>3. W1+O1 → Поиск региональных дистрибьюторов | **W-T: Оборона**<br>1. W2+T1 → Модернизация оборудования для снижения затрат<br>2. W5+T2 → Поиск местных поставщиков сырья<br>3. W3+T5 → Оптимизация логистики |

---

## 5. SPACE-анализ

### Оценка факторов

| Группа | Фактор | Оценка |
|--------|--------|--------|
| **FS** | Рентабельность (ROE = 12%) | 4 |
| **FS** | Финансовая устойчивость | 4 |
| **FS** | Доступ к капиталу | 3 |
| **FS** | Ликвидность | 4 |
| **FS** | Долг/капитал (40%) | 4 |
| **СРЕДНЯЯ FS** | | **3.8** |

| Группа | Фактор | Оценка |
|--------|--------|--------|
| **IS** | Темп роста отрасли (12% в год) | 5 |
| **IS** | Прибыльность отрасли (средняя) | 3 |
| **IS** | Стабильность спроса | 4 |
| **IS** | Барьеры входа (средние) | 3 |
| **IS** | Технологический уровень | 3 |
| **СРЕДНЯЯ IS** | | **3.6** |

| Группа | Фактор | Оценка |
|--------|--------|--------|
| **ES** | Технологические изменения (умеренные) | -3 |
| **ES** | Инфляция (высокая) | -4 |
| **ES** | Эластичность спроса (высокая) | -4 |
| **ES** | Давление конкурентов (высокое) | -4 |
| **ES** | Ценовая эластичность (высокая) | -4 |
| **СРЕДНЯЯ ES** | | **-3.8** |

| Группа | Фактор | Оценка |
|--------|--------|--------|
| **CA** | Доля рынка (15%) | -3 |
| **CA** | Качество продукции (хорошее) | -2 |
| **CA** | Лояльность клиентов | -3 |
| **CA** | Технологическое превосходство | -3 |
| **CA** | Контроль каналов сбыта | -4 |
| **СРЕДНЯЯ CA** | | **-3.0** |

### Расчёт координат

| | Формула | Расчёт | Результат |
|---|---|---|---|
| **X** | IS + CA | 3.6 + (-3.0) | **0.6** |
| **Y** | FS + ES | 3.8 + (-3.8) | **0.0** |

**Точка (0.6; 0.0)** → **Квадрант: АГРЕССИВНАЯ СТРАТЕГИЯ (пограничная с конкурентной)**

### Рекомендуемые стратегические действия:

1. **Усиление рыночной позиции** — агрессивный выход на маркетплейсы (O3) с использованием сильного бренда (S5)
2. **Развитие продуктовой линейки** — запуск премиального биоразлагаемого наполнителя (S1+O2)
3. **Укрепление финансовой устойчивости** — снижение долговой нагрузки, оптимизация затрат
4. **Поиск стратегического партнёра** — для расширения региональной дистрибуции
5. **Инвестиции в модернизацию** — замена устаревшего оборудования (W2) за счёт прибыли от роста

---

## 6. BSC (Сбалансированная система показателей)

### Финансовая перспектива
- Цель: Увеличить выручку на 20%
- KPI: Выручка, ROI, рентабельность
- Инициатива: Выход на маркетплейсы, расширение ассортимента

### Клиентская перспектива
- Цель: Повысить NPS до 50
- KPI: NPS, доля рынка, повторные покупки
- Инициатива: Запуск программы лояльности, улучшение качества

### Внутренние процессы
- Цель: Снизить себестоимость на 10%
- KPI: Себестоимость тонны, процент брака, время производства
- Инициатива: Модернизация оборудования, внедрение бережливого производства

### Обучение и рост
- Цель: Повысить квалификацию персонала
- KPI: Часы обучения, текучесть кадров
- Инициатива: Корпоративное обучение, наставничество

---

## 7. Итоговые рекомендации

### Приоритетные стратегии на 2024-2025 годы:

1. **Агрессивный выход на маркетплейсы** (Wildberries, Ozon) — использовать сильный бренд и широкий ассортимент
2. **Запуск премиальной экологичной линейки** — биоразлагаемый наполнитель в эко-упаковке
3. **Оптимизация логистики** — открытие региональных складов для снижения транспортных расходов
4. **Модернизация оборудования** — автоматизация для снижения себестоимости
5. **Поиск местных поставщиков** — снижение зависимости от импортного сырья (бентонит)

### Ключевые риски и способы их снижения:
- Рост цен на сырьё → долгосрочные контракты, замена поставщиков
- Ужесточение экологических норм → сертификация продукции
- Конкуренция → дифференциация, укрепление бренда

---

> **Вывод:** Предприятие находится в хорошей позиции для агрессивного роста при сохранении финансовой стабильности. Рекомендуется сфокусироваться на расширении каналов сбыта и развитии премиальных экологичных продуктов, одновременно модернизируя производство для снижения затрат.
        `;

        editor.value = exampleMarkdown;
        updatePreview();
        showStatus('✅ Загружен пример с Bootstrap стилями', 'success');
    }

    // Функция очистки
    function clearContent() {
        if (editor.value.trim() === '') {
            showStatus('⚠️ Поле уже пустое', 'warning');
            return;
        }

        if (confirm('Вы уверены, что хотите очистить весь контент?')) {
            editor.value = '';
            updatePreview();
            showStatus('🗑️ Контент очищен', 'info');
        }
    }

    // Обработчик события ввода с задержкой для производительности
    let timeoutId = null;
    editor.addEventListener('input', function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            updatePreview();
        }, 300);
    });

    // Обработчик для кнопки "Пример"
    document.getElementById('load-example-btn').addEventListener('click', function () {
        if (editor.value.trim() !== '') {
            if (!confirm('Текущий контент будет заменён. Продолжить?')) {
                return;
            }
        }
        setExampleContent();
    });

    // Обработчик для кнопки "Очистить"
    document.getElementById('clear-btn').addEventListener('click', clearContent);

    // Сохраняем при потере фокуса
    editor.addEventListener('blur', function () {
        const currentContent = editor.value;
        const savedContent = localStorage.getItem(STORAGE_KEY);
        if (currentContent !== savedContent) {
            updatePreview();
        }
    });

    // Инициализация
    document.addEventListener('DOMContentLoaded', function () {
        // Проверяем загрузку marked
        if (typeof marked === 'undefined') {
            preview.innerHTML = `
              <div class="alert alert-danger" role="alert">
                <h5 class="alert-heading">❌ Ошибка загрузки библиотеки</h5>
                <p class="mb-0">Библиотека marked не загружена. Проверьте подключение.</p>
              </div>
            `;
            return;
        }

        const hasSaved = loadFromStorage();

        if (!hasSaved) {
            setExampleContent();
        }
    });

    // Обработка изменений в localStorage из других вкладок
    window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY && e.newValue !== null) {
            const currentValue = editor.value;
            if (currentValue !== e.newValue) {
                editor.value = e.newValue;
                updatePreview();
                showStatus('🔄 Обновлено из другой вкладки', 'info');
            }
        }
    });

})();
