let quizesSets = [
  {
    "id": "statistics701",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое теорема Байеса?",
    "theme": "Теорема Байеса",
    "text": "Что позволяет делать теорема Байеса (Bayes' theorem)?",
    "choices": [
      "Вычислять среднее значение выборки",
      "Обновлять вероятность события на основе новой информации (свидетельства)",
      "Строить гистограммы",
      "Находить медиану распределения"
    ],
    "answers": ["Обновлять вероятность события на основе новой информации (свидетельства)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Теорема Байеса</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Назначение:</strong> Обновление вероятности события на основе новой информации (свидетельства).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Что она даёт</h5></div><div class='card-body'><ul><li>Вероятность <strong>причины</strong> при наблюдаемом <strong>следствии</strong></li><li>Применяется в медицине, спам-фильтрах, машинном обучении</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Обновлять вероятность события на основе новой информации (свидетельства)</div></div></div>"
  },
  {
    "id": "statistics702",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула Байеса",
    "theme": "Формулы",
    "text": "Какая формула соответствует теореме Байеса?",
    "choices": [
      "$P(A \\mid B) = \\dfrac{P(A) \\times P(B)}{P(B \\mid A)}$",
      "$P(A \\mid B) = \\dfrac{P(B \\mid A) \\times P(A)}{P(B)}$",
      "$P(A \\mid B) = P(A) + P(B)$",
      "$P(A \\mid B) = 1 - P(A)$"
    ],
    "answers": ["$P(A \\mid B) = \\dfrac{P(B \\mid A) \\times P(A)}{P(B)}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула Байеса</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A \\mid B) = \\dfrac{P(B \\mid A) \\times P(A)}{P(B)}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li><strong>Числитель:</strong> правдоподобие × априорная вероятность</li><li><strong>Знаменатель:</strong> полная вероятность свидетельства</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\mid B) = \\dfrac{P(B \\mid A) \\times P(A)}{P(B)}$</div></div></div>"
  },
  {
    "id": "statistics703",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Априорная вероятность",
    "theme": "Терминология",
    "text": "Что такое априорная вероятность (prior probability)?",
    "choices": [
      "Вероятность свидетельства при условии события",
      "Обновлённая вероятность после получения свидетельства",
      "Начальное представление о событии до получения свидетельства",
      "Наблюдаемые данные"
    ],
    "answers": ["Начальное представление о событии до получения свидетельства"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Априорная вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Начальное представление о событии до получения свидетельства.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Обозначение</h5></div><div class='card-body'><p>$P(A)$ — априорная вероятность события A.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Начальное представление о событии до получения свидетельства</div></div></div>"
  },
  {
    "id": "statistics704",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Правдоподобие",
    "theme": "Терминология",
    "text": "Что такое правдоподобие (likelihood)?",
    "choices": [
      "Вероятность события до получения данных",
      "Вероятность свидетельства при условии события",
      "Обновлённая вероятность",
      "Наблюдаемые данные"
    ],
    "answers": ["Вероятность свидетельства при условии события"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Правдоподобие</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Вероятность свидетельства при условии события.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Обозначение</h5></div><div class='card-body'><p>$P(B \\mid A)$ — вероятность свидетельства B при условии события A.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Вероятность свидетельства при условии события</div></div></div>"
  },
  {
    "id": "statistics705",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Апостериорная вероятность",
    "theme": "Терминология",
    "text": "Что такое апостериорная вероятность (posterior probability)?",
    "choices": [
      "Начальное представление о событии",
      "Вероятность свидетельства",
      "Обновлённая вероятность после получения свидетельства",
      "Наблюдаемые данные"
    ],
    "answers": ["Обновлённая вероятность после получения свидетельства"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Апостериорная вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Обновлённая вероятность после получения свидетельства.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Обозначение</h5></div><div class='card-body'><p>$P(A \\mid B)$ — апостериорная вероятность события A после наблюдения B.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Обновлённая вероятность после получения свидетельства</div></div></div>"
  },
  {
    "id": "statistics706",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Свидетельство",
    "theme": "Терминология",
    "text": "Что понимают под свидетельством (evidence) в теореме Байеса?",
    "choices": [
      "Начальное представление о событии",
      "Наблюдаемые данные или информацию",
      "Обновлённую вероятность",
      "Априорную вероятность"
    ],
    "answers": ["Наблюдаемые данные или информацию"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Свидетельство</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Наблюдаемые данные или информация.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Роль</h5></div><div class='card-body'><p>Свидетельство (например, результат теста) используется для обновления априорной вероятности в апостериорную.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Наблюдаемые данные или информацию</div></div></div>"
  },
  {
    "id": "statistics707",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: диагностика заболевания",
    "theme": "Примеры",
    "text": "Болезнь поражает 1% населения. Тест правильно выявляет 98% заражённых и даёт 5% ложноположительных результатов. Если тест положительный, какова вероятность, что человек болен?",
    "choices": [
      "98%",
      "50%",
      "около 16.4%",
      "1%"
    ],
    "answers": ["около 16.4%"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Диагностика заболевания</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $P(D) = 0.01$, $P(+ \\mid D) = 0.98$, $P(+ \\mid \\bar{D}) = 0.05$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение по Байесу</h5></div><div class='card-body'><p>$$P(D \\mid +) = \\dfrac{0.98 \\times 0.01}{0.98 \\times 0.01 + 0.05 \\times 0.99} = 0.164 \\approx 16.4\\%$$</p></div></div><div class='alert alert-warning'><strong>⚠️ Ловушка:</strong> интуиция подсказывает 98%, но реальный ответ — около 16.4%, потому что болезнь редкая.</div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> около 16.4%</div></div></div>"
  },
  {
    "id": "statistics708",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: обнаружение спама",
    "theme": "Примеры",
    "text": "Письмо является спамом в 20% случаев. Фильтр правильно определяет 90% спама и ошибочно помечает 5% обычных писем. Если письмо помечено как спам, какова вероятность, что оно действительно спам?",
    "choices": [
      "20%",
      "50%",
      "около 81.8%",
      "90%"
    ],
    "answers": ["около 81.8%"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Обнаружение спама</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> $P(S) = 0.20$, $P(\\text{Пометить} \\mid S) = 0.90$, $P(\\text{Пометить} \\mid \\bar{S}) = 0.05$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение по Байесу</h5></div><div class='card-body'><p>$$P(S \\mid \\text{Пометить}) = \\dfrac{0.90 \\times 0.20}{0.90 \\times 0.20 + 0.05 \\times 0.80} = 0.818 \\approx 81.8\\%$$</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> около 81.8%</div></div></div>"
  },
  {
    "id": "statistics709",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Полная вероятность",
    "theme": "Формулы",
    "text": "Как раскладывается знаменатель $P(B)$ в теореме Байеса по формуле полной вероятности?",
    "choices": [
      "$P(B) = P(A) + P(B)$",
      "$P(B) = P(B \\mid A) \\times P(A) + P(B \\mid \\bar{A}) \\times P(\\bar{A})$",
      "$P(B) = P(A) \\times P(B)$",
      "$P(B) = 1 - P(A)$"
    ],
    "answers": ["$P(B) = P(B \\mid A) \\times P(A) + P(B \\mid \\bar{A}) \\times P(\\bar{A})$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Полная вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(B) = P(B \\mid A) \\times P(A) + P(B \\mid \\bar{A}) \\times P(\\bar{A})$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><ul><li>Учитываются <strong>все возможные способы</strong>, которыми может произойти B</li><li>Используется в знаменателе теоремы Байеса</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(B) = P(B \\mid A) \\times P(A) + P(B \\mid \\bar{A}) \\times P(\\bar{A})$</div></div></div>"
  },
  {
    "id": "statistics710",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: медицинская диагностика",
    "theme": "Применение",
    "text": "В какой области теорема Байеса используется для постановки диагноза по результатам анализов?",
    "choices": [
      "Фильтрация спама",
      "Медицинская диагностика",
      "Прогноз погоды",
      "Машинное обучение"
    ],
    "answers": ["Медицинская диагностика"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Применение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Медицинская диагностика:</strong> Диагноз по результатам анализов.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Другие применения</h5></div><div class='card-body'><ul><li><strong>Фильтрация спама</strong> — классификация писем</li><li><strong>Машинное обучение</strong> — наивный байесовский классификатор</li><li><strong>Прогноз погоды</strong> — обновление вероятности дождя</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Медицинская диагностика</div></div></div>"
  },
  {
    "id": "statistics711",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Применение: машинное обучение",
    "theme": "Применение",
    "text": "Как называется классификатор в машинном обучении, основанный на теореме Байеса?",
    "choices": [
      "Логистическая регрессия",
      "Метод опорных векторов",
      "Наивный байесовский классификатор",
      "Дерево решений"
    ],
    "answers": ["Наивный байесовский классификатор"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Машинное обучение</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Наивный байесовский классификатор (Naive Bayes classifier)</strong> — основан на теореме Байеса.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Применение</h5></div><div class='card-body'><ul><li>Классификация текстов</li><li>Фильтрация спама</li><li>Анализ тональности</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Наивный байесовский классификатор</div></div></div>"
  },
  {
    "id": "statistics712",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение о теореме Байеса верно?",
    "choices": [
      "Она не требует априорной вероятности",
      "Она обновляет вероятность на основе новых свидетельств",
      "Она применима только в медицине",
      "Она заменяет формулу условной вероятности"
    ],
    "answers": ["Она обновляет вероятность на основе новых свидетельств"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>Формула: $P(A \\mid B) = \\dfrac{P(B \\mid A) \\times P(A)}{P(B)}$</li><li>Требуется <strong>априорная вероятность</strong> и <strong>правдоподобие</strong></li><li>Применяется в медицине, спам-фильтрах, ML, прогнозе погоды</li><li>Помогает принимать решения в условиях <strong>неопределённости</strong></li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Она обновляет вероятность на основе новых свидетельств</div></div></div>"
  }
]
  

window.quizesSets = quizesSets;