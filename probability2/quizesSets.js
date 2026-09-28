let quizesSets = [
  {
    "id": "statistics101",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Качественные данные",
    "theme": "Типы данных",
    "text": "Какие данные называют качественными (категориальными)?",
    "choices": [
      "Данные, которые можно измерить или подсчитать",
      "Данные, описывающие качества или категории и не являющиеся числовыми",
      "Только целые числа",
      "Только дробные значения"
    ],
    "answers": ["Данные, описывающие качества или категории и не являющиеся числовыми"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Качественные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Качественные (категориальные) данные описывают качества или категории.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Нечисловые данные</li><li>Делятся на <strong>номинальные</strong> и <strong>порядковые</strong></li><li>Примеры: пол, цвет, группа крови, уровень удовлетворённости</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Данные, описывающие качества или категории и не являющиеся числовыми</div></div></div>"
  },
  {
    "id": "statistics102",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Количественные данные",
    "theme": "Типы данных",
    "text": "На какие две группы делятся количественные (числовые) данные?",
    "choices": [
      "Номинальные и порядковые",
      "Дискретные и непрерывные",
      "Структурированные и неструктурированные",
      "Простые и сложные"
    ],
    "answers": ["Дискретные и непрерывные"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Количественные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Количественные данные представляют числовые значения, которые можно измерить или подсчитать.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Деление</h5></div><div class='card-body'><ul><li><strong>Дискретные</strong> — счётные значения (число студентов, машин)</li><li><strong>Непрерывные</strong> — измеримые значения (рост, вес, температура)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Дискретные и непрерывные</div></div></div>"
  },
  {
    "id": "statistics103",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Дискретные данные",
    "theme": "Типы данных",
    "text": "Что характерно для дискретных данных?",
    "choices": [
      "Принимают любое значение в диапазоне",
      "Получаются путём измерения",
      "Принимают только конкретные счётные значения, обычно целые числа",
      "Всегда являются дробными"
    ],
    "answers": ["Принимают только конкретные счётные значения, обычно целые числа"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Дискретные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Дискретные данные принимают только конкретные, счётные значения.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Обычно <strong>целые числа</strong></li><li>Получаются путём <strong>подсчёта</strong></li><li>Примеры: число студентов, число машин, число звонков</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Принимают только конкретные счётные значения, обычно целые числа</div></div></div>"
  },
  {
    "id": "statistics104",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Непрерывные данные",
    "theme": "Типы данных",
    "text": "Что характерно для непрерывных данных?",
    "choices": [
      "Только целые числа",
      "Могут принимать любое значение в диапазоне и быть дробными",
      "Получаются только путём подсчёта",
      "Не могут быть измерены"
    ],
    "answers": ["Могут принимать любое значение в диапазоне и быть дробными"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Непрерывные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Непрерывные данные могут принимать любое значение в диапазоне.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Свойства</h5></div><div class='card-body'><ul><li>Получаются путём <strong>измерения</strong></li><li>Могут быть <strong>дробными</strong></li><li>Примеры: рост, вес, время, температура, зарплата</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Могут принимать любое значение в диапазоне и быть дробными</div></div></div>"
  },
  {
    "id": "statistics105",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Номинальная шкала",
    "theme": "Шкалы измерений",
    "text": "Чем характеризуется номинальная шкала измерения?",
    "choices": [
      "Есть ранжирование, разница между рангами не фиксирована",
      "Равные интервалы и истинный ноль",
      "Классифицирует данные на группы без порядка, только метки",
      "Числовые данные с равными интервалами без истинного нуля"
    ],
    "answers": ["Классифицирует данные на группы без порядка, только метки"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Номинальная шкала</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Номинальная шкала классифицирует данные на отдельные группы без порядка.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Характеристики</h5></div><div class='card-body'><ul><li><strong>Нет ранжирования</strong></li><li>Только <strong>метки</strong></li><li>Примеры: пол (М/Ж), группа крови (A, B, O, AB), названия городов</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Классифицирует данные на группы без порядка, только метки</div></div></div>"
  },
  {
    "id": "statistics106",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Порядковая шкала",
    "theme": "Шкалы измерений",
    "text": "Какая шкала классифицирует данные с осмысленным порядком, но разница между рангами не фиксирована?",
    "choices": [
      "Номинальная",
      "Порядковая",
      "Интервальная",
      "Относительная"
    ],
    "answers": ["Порядковая"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Порядковая шкала</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Порядковая шкала классифицирует данные с осмысленным порядком.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Характеристики</h5></div><div class='card-body'><ul><li>Есть <strong>ранжирование</strong></li><li>Разница между рангами <strong>не фиксирована</strong></li><li>Примеры: уровень удовлетворённости (Низкий, Средний, Высокий), место в классе (1-й, 2-й, 3-й)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Порядковая</div></div></div>"
  },
  {
    "id": "statistics107",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Интервальная шкала",
    "theme": "Шкалы измерений",
    "text": "Чем характеризуется интервальная шкала измерения?",
    "choices": [
      "Только метки без порядка",
      "Есть порядок, но нет равных интервалов",
      "Числовые данные с равными интервалами, но без истинного нуля",
      "Числовые данные с равными интервалами и истинным нулём"
    ],
    "answers": ["Числовые данные с равными интервалами, но без истинного нуля"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Интервальная шкала</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Интервальная шкала — числовые данные с равными интервалами, но без истинного нуля.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Характеристики</h5></div><div class='card-body'><ul><li>Порядок <strong>осмыслен</strong></li><li><strong>Равные интервалы</strong></li><li><strong>Нет истинного нуля</strong></li><li>Примеры: температура (°C, °F), календарные годы, IQ-баллы</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Числовые данные с равными интервалами, но без истинного нуля</div></div></div>"
  },
  {
    "id": "statistics108",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Относительная шкала",
    "theme": "Шкалы измерений",
    "text": "Какая шкала обладает равными интервалами и истинным нулём, так что отношения имеют смысл?",
    "choices": [
      "Номинальная",
      "Порядковая",
      "Интервальная",
      "Относительная"
    ],
    "answers": ["Относительная"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Относительная шкала</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Относительная шкала — числовые данные с равными интервалами и истинным нулём.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Характеристики</h5></div><div class='card-body'><ul><li>Порядок <strong>осмыслен</strong></li><li><strong>Равные интервалы</strong></li><li><strong>Истинный ноль</strong> (отношения имеют смысл)</li><li>Примеры: рост, вес, возраст, доход, расстояние, температура (K)</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Относительная</div></div></div>"
  },
  {
    "id": "statistics109",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример номинальной шкалы",
    "theme": "Шкалы измерений",
    "text": "Какой из примеров относится к номинальной шкале?",
    "choices": [
      "Температура в °C",
      "Группа крови (A, B, O, AB)",
      "Уровень удовлетворённости (Низкий, Средний, Высокий)",
      "Рост в сантиметрах"
    ],
    "answers": ["Группа крови (A, B, O, AB)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Примеры номинальной шкалы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Номинальная шкала</strong> — только метки, без порядка.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li>Цвет глаз (Голубой, Карий, Чёрный)</li><li><strong>Группа крови (A, B, O, AB)</strong></li><li>Отдел (HR, IT, Финансы)</li></ul><p class='card-text mt-2'>Температура — интервальная, удовлетворённость — порядковая, рост — относительная.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Группа крови (A, B, O, AB)</div></div></div>"
  },
  {
    "id": "statistics110",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример порядковой шкалы",
    "theme": "Шкалы измерений",
    "text": "Какой из примеров относится к порядковой шкале?",
    "choices": [
      "Цвет глаз",
      "Уровень образования (Школа, ВУЗ)",
      "Вес в килограммах",
      "Календарный год"
    ],
    "answers": ["Уровень образования (Школа, ВУЗ)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Примеры порядковой шкалы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Порядковая шкала</strong> — есть порядок, но разница между рангами не фиксирована.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li>Оценка пользователя (Плохо, Хорошо, Отлично)</li><li><strong>Уровень образования (Школа, ВУЗ)</strong></li><li>Место в классе (1-й, 2-й, 3-й)</li></ul><p class='card-text mt-2'>Цвет глаз — номинальная, вес — относительная, год — интервальная.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Уровень образования (Школа, ВУЗ)</div></div></div>"
  },
  {
    "id": "statistics111",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример интервальной шкалы",
    "theme": "Шкалы измерений",
    "text": "Какой из примеров относится к интервальной шкале?",
    "choices": [
      "Вес в килограммах",
      "Температура в °C",
      "Группа крови",
      "Уровень удовлетворённости"
    ],
    "answers": ["Температура в °C"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Примеры интервальной шкалы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Интервальная шкала</strong> — равные интервалы, но нет истинного нуля.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>Температура в °C</strong> (0°C не означает отсутствие температуры)</li><li>Календарные годы (2000, 2020)</li><li>IQ-баллы</li></ul><p class='card-text mt-2'>Вес — относительная, группа крови — номинальная, удовлетворённость — порядковая.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Температура в °C</div></div></div>"
  },
  {
    "id": "statistics112",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример относительной шкалы",
    "theme": "Шкалы измерений",
    "text": "Какой из примеров относится к относительной шкале?",
    "choices": [
      "IQ-баллы",
      "Календарный год",
      "Вес в килограммах",
      "Названия городов"
    ],
    "answers": ["Вес в килограммах"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Примеры относительной шкалы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Относительная шкала</strong> — равные интервалы и истинный ноль.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры</h5></div><div class='card-body'><ul><li><strong>Вес в килограммах</strong> (0 означает отсутствие веса)</li><li>Рост (0 означает отсутствие роста)</li><li>Возраст (0 означает отсутствие возраста)</li><li>Доход (0 означает отсутствие дохода)</li></ul><p class='card-text mt-2'>IQ — интервальная, год — интервальная, города — номинальная.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Вес в килограммах</div></div></div>"
  },
  {
    "id": "statistics113",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Структурированные данные",
    "theme": "Форматы данных",
    "text": "Что характерно для структурированных данных?",
    "choices": [
      "Нет предопределённого формата",
      "Организованный формат, обычно в таблицах с фиксированной схемой",
      "Нет фиксированной схемы, но есть теги/ключи",
      "Только текстовые файлы"
    ],
    "answers": ["Организованный формат, обычно в таблицах с фиксированной схемой"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Структурированные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Организованный формат, обычно в таблицах с фиксированной схемой.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры и применение</h5></div><div class='card-body'><ul><li>Реляционные базы данных (MySQL, PostgreSQL)</li><li>Excel</li><li>Бизнес-отчёты, транзакции, аналитика</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Организованный формат, обычно в таблицах с фиксированной схемой</div></div></div>"
  },
  {
    "id": "statistics114",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Полуструктурированные данные",
    "theme": "Форматы данных",
    "text": "Что характерно для полуструктурированных данных?",
    "choices": [
      "Фиксированная схема в таблицах",
      "Нет фиксированной схемы, но есть структура (теги/ключи)",
      "Полностью неорганизованный формат",
      "Только изображения и видео"
    ],
    "answers": ["Нет фиксированной схемы, но есть структура (теги/ключи)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Полуструктурированные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Нет фиксированной схемы, но есть структура (теги/ключи).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры и применение</h5></div><div class='card-body'><ul><li>JSON, XML, логи, электронные письма</li><li>Веб-данные, логи, данные сенсоров</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Нет фиксированной схемы, но есть структура (теги/ключи)</div></div></div>"
  },
  {
    "id": "statistics115",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Неструктурированные данные",
    "theme": "Форматы данных",
    "text": "Что характерно для неструктурированных данных?",
    "choices": [
      "Организованный табличный формат",
      "Наличие тегов и ключей",
      "Нет предопределённого формата или структуры",
      "Только числовые данные"
    ],
    "answers": ["Нет предопределённого формата или структуры"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Неструктурированные данные</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Нет предопределённого формата или структуры.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Примеры и применение</h5></div><div class='card-body'><ul><li>Текстовые файлы, PDF, изображения, видео, данные соцсетей</li><li>Документы, медиафайлы, аналитика соцсетей</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Нет предопределённого формата или структуры</div></div></div>"
  },
  {
    "id": "statistics116",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Выбор статистических методов",
    "theme": "Ключевые моменты",
    "text": "Что определяет, какие статистические методы можно использовать для анализа данных?",
    "choices": [
      "Цвет данных",
      "Шкала измерения",
      "Размер файла",
      "Количество страниц"
    ],
    "answers": ["Шкала измерения"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевой момент</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong> Шкала измерения определяет, какие статистические методы можно использовать.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Почему это важно</h5></div><div class='card-body'><ul><li>Номинальные данные → только частоты и моды</li><li>Порядковые → медианы, ранговые корреляции</li><li>Интервальные и относительные → среднее, стандартное отклонение, параметрические тесты</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Шкала измерения</div></div></div>"
  },
  {
    "id": "statistics117",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Резюме: типы данных",
    "theme": "Резюме",
    "text": "Какое утверждение о типах данных верно?",
    "choices": [
      "Качественные данные всегда числовые",
      "Дискретные данные получаются путём измерения",
      "Качественные данные — категориальные, количественные — числовые",
      "Непрерывные данные всегда целые"
    ],
    "answers": ["Качественные данные — категориальные, количественные — числовые"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Резюме</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Основные выводы:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Сводка</h5></div><div class='card-body'><ul><li><strong>Качественные</strong> → Номинальные / Порядковые</li><li><strong>Количественные</strong> → Дискретные / Непрерывные</li><li><strong>Шкалы</strong> → Номинальная, Порядковая, Интервальная, Относительная</li><li><strong>Форматы</strong> → Структурированные, Полуструктурированные, Неструктурированные</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Качественные данные — категориальные, количественные — числовые</div></div></div>"
  }
]
window.quizesSets = quizesSets;