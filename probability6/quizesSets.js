let quizesSets = [
  {
    "id": "statistics501",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Что такое условная вероятность?",
    "theme": "Условная вероятность",
    "text": "Что означает P(A | B)?",
    "choices": [
      "Вероятность того, что произойдут и A, и B",
      "Вероятность A при условии, что B уже произошло",
      "Вероятность B при условии, что A уже произошло",
      "Вероятность того, что не произойдёт ни A, ни B"
    ],
    "answers": ["Вероятность A при условии, что B уже произошло"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Условная вероятность</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Обозначение:</strong> P(A | B) — «вероятность A при условии B».</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Вероятность события A при условии, что событие B уже произошло.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Вероятность A при условии, что B уже произошло</div></div></div>"
  },
  {
    "id": "statistics502",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Формула условной вероятности",
    "theme": "Формулы",
    "text": "Какая формула соответствует условной вероятности P(A | B)?",
    "choices": [
      "$P(A|B) = \\dfrac{P(A) \\cdot P(B)}{P(A)}$",
      "$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$",
      "$P(A|B) = P(A) + P(B)$",
      "$P(A|B) = 1 - P(A)$"
    ],
    "answers": ["$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Формула</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Компоненты</h5></div><div class='card-body'><ul><li>$P(A \\cap B)$ — вероятность того, что произойдут и A, и B</li><li>$P(B)$ — вероятность B самого по себе</li><li>$P(B) > 0$ — нельзя обуславливать на невозможном</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$</div></div></div>"
  },
  {
    "id": "statistics503",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Условие применимости",
    "theme": "Формулы",
    "text": "Какое условие должно выполняться для P(B) при вычислении P(A | B)?",
    "choices": [
      "P(B) = 0",
      "P(B) > 0",
      "P(B) = 1",
      "P(B) < 0"
    ],
    "answers": ["P(B) > 0"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Условие</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Правило:</strong> P(B) должна быть больше 0.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Почему</h5></div><div class='card-body'><p>Нельзя обуславливать на невозможном событии — деление на ноль невозможно.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> P(B) > 0</div></div></div>"
  },
  {
    "id": "statistics504",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Геометрический смысл",
    "theme": "Понимание",
    "text": "Как условная вероятность P(A | B) интерпретируется на диаграмме Венна?",
    "choices": [
      "Как весь круг A",
      "Как доля круга B, которая также находится внутри A",
      "Как весь круг B",
      "Как область вне обоих кругов"
    ],
    "answers": ["Как доля круга B, которая также находится внутри A"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Диаграмма Венна</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Интерпретация:</strong> P(A | B) — доля круга B, которая также находится внутри A.</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула в терминах Венна</h5></div><div class='card-body'><p>Пересечение (A ∩ B), делённое на весь круг B.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> Как доля круга B, которая также находится внутри A</div></div></div>"
  },
  {
    "id": "statistics505",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Правило умножения",
    "theme": "Свойства",
    "text": "Какая формула выражает правило умножения для P(A ∩ B)?",
    "choices": [
      "$P(A \\cap B) = P(A) + P(B)$",
      "$P(A \\cap B) = P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$",
      "$P(A \\cap B) = P(A) - P(B)$",
      "$P(A \\cap B) = 1 - P(A)$"
    ],
    "answers": ["$P(A \\cap B) = P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Правило умножения</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A \\cap B) = P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Следствие</h5></div><div class='card-body'><p>Из этой формулы выводится формула условной вероятности.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\cap B) = P(A|B) \\cdot P(B) = P(B|A) \\cdot P(A)$</div></div></div>"
  },
  {
    "id": "statistics506",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Цепное правило",
    "theme": "Свойства",
    "text": "Какая формула соответствует цепному правилу для трёх событий?",
    "choices": [
      "$P(A \\cap B \\cap C) = P(A) + P(B) + P(C)$",
      "$P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$",
      "$P(A \\cap B \\cap C) = P(A) \\cdot P(B) \\cdot P(C)$",
      "$P(A \\cap B \\cap C) = 1 - P(A)$"
    ],
    "answers": ["$P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Цепное правило</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Формула:</strong> $$P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$$</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Вероятность совместного наступления нескольких событий раскладывается через последовательные условные вероятности.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$</div></div></div>"
  },
  {
    "id": "statistics507",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Независимость",
    "theme": "Свойства",
    "text": "Какое условие означает, что события A и B независимы?",
    "choices": [
      "P(A|B) = 0",
      "P(A|B) = P(A)",
      "P(A|B) = 1",
      "P(A|B) = P(B)"
    ],
    "answers": ["P(A|B) = P(A)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Независимость</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Если A и B независимы, то P(A|B) = P(A).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Знание B <strong>ничего не меняет</strong> в вероятности A.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> P(A|B) = P(A)</div></div></div>"
  },
  {
    "id": "statistics508",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Зависимые события",
    "theme": "Свойства",
    "text": "Какое условие означает, что события A и B зависимы?",
    "choices": [
      "P(A|B) = P(A)",
      "P(A|B) ≠ P(A)",
      "P(A|B) = 0",
      "P(A|B) = 1"
    ],
    "answers": ["P(A|B) ≠ P(A)"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Зависимые события</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Определение:</strong> Если A и B зависимы, то P(A|B) ≠ P(A).</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Смысл</h5></div><div class='card-body'><p>Наступление B <strong>сдвигает шансы</strong> A.</p></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> P(A|B) ≠ P(A)</div></div></div>"
  },
  {
    "id": "statistics509",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: король червей",
    "theme": "Примеры",
    "text": "Вытянута карта червей. Какова вероятность, что это король?",
    "choices": [
      "$\\dfrac{1}{52}$",
      "$\\dfrac{1}{13}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{13}{52}$"
    ],
    "answers": ["$\\dfrac{1}{13}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Король червей</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> A = карта является королём, B = карта является червями</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>P(A ∩ B) = 1/52 (король червей)</li><li>P(B) = 13/52 (всего 13 червей)</li><li>P(A|B) = (1/52) ÷ (13/52) = 1/13</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{1}{13}$</div></div></div>"
  },
  {
    "id": "statistics510",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Пример: выпало 4 при чётном",
    "theme": "Примеры",
    "text": "Известно, что при броске кости выпало чётное число. Какова вероятность, что это 4?",
    "choices": [
      "$\\dfrac{1}{6}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{2}{3}$"
    ],
    "answers": ["$\\dfrac{1}{3}$"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Выпало 4 при чётном</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> A = выпало 4, B = выпало чётное (2, 4, 6)</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Решение</h5></div><div class='card-body'><ul><li>P(A ∩ B) = 1/6</li><li>P(B) = 3/6</li><li>P(A|B) = (1/6) ÷ (3/6) = 1/3</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> $\\dfrac{1}{3}$</div></div></div>"
  },
  {
    "id": "statistics511",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Медицинский тест",
    "theme": "Примеры",
    "text": "Болезнь поражает 1% населения. Тест имеет 90% чувствительность и 5% ложноположительных результатов. Если тест положительный, какова вероятность, что человек действительно болен?",
    "choices": [
      "90%",
      "50%",
      "около 15.4%",
      "5%"
    ],
    "answers": ["около 15.4%"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Медицинский тест</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Дано:</strong> P(D) = 0.01, P(T|D) = 0.90, P(T|не D) = 0.05</div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Формула Байеса</h5></div><div class='card-body'><p>$$P(D|T) = \\dfrac{P(T|D) \\cdot P(D)}{P(T|D) \\cdot P(D) + P(T|\\bar{D}) \\cdot P(\\bar{D})}$$</p><ul><li>= (0.90 × 0.01) ÷ (0.90 × 0.01 + 0.05 × 0.99)</li><li>= 0.009 ÷ 0.0585 ≈ <strong>0.154</strong></li></ul></div></div><div class='alert alert-warning'><strong>⚠️ Ловушка:</strong> интуиция подсказывает 90%, но реальный ответ — около 15.4%, потому что болезнь редкая.</div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> около 15.4%</div></div></div>"
  },
  {
    "id": "statistics512",
    "type": "multiplechoices",
    "header": "Тест",
    "title": "Ключевой вывод",
    "theme": "Резюме",
    "text": "Какое утверждение об условной вероятности верно?",
    "choices": [
      "P(A|B) = P(B|A) всегда",
      "P(A|B) — доля круга B, попадающая в A",
      "P(A|B) не может быть больше 1",
      "Условная вероятность не зависит от P(B)"
    ],
    "answers": ["P(A|B) — доля круга B, попадающая в A"],
    "hint": "<div class='card'><div class='card-header bg-primary text-white'><h5>📊 Ключевые выводы</h5></div><div class='card-body'><div class='alert alert-secondary mb-3'><strong>📌 Запомните:</strong></div><div class='card mb-3'><div class='card-header bg-info text-white'><h5>🔍 Основные выводы</h5></div><div class='card-body'><ul><li>$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$</li><li>P(A|B) — это <strong>доля круга B</strong>, попадающая в A</li><li>P(B) должна быть <strong>больше 0</strong></li><li>При <strong>независимости</strong>: $P(A|B) = P(A)$</li><li>Применяется в медицине, картах, играх, опросах</li></ul></div></div><div class='alert alert-success'><strong>✅ Правильный ответ:</strong> P(A|B) — доля круга B, попадающая в A</div></div></div>"
  }
]

window.quizesSets = quizesSets;