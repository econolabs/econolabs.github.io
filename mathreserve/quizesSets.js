let quizesSets = [
{
    "id": "fractions001",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{1}{2} + \\frac{1}{3}$$",
    "choices": [
      "$\\frac{2}{5}$",
      "$\\frac{5}{6}$",
      "$\\frac{1}{6}$",
      "$\\frac{3}{5}$",
      "$\\frac{2}{3}$"
    ],
    "answers": ["$\\frac{5}{6}$"],
    "hint": "<p>Находим общий знаменатель 6.</p>$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$"
  },
  {
    "id": "fractions002",
    "type": "multiplechoices",
    "header": "Дроби 3",
    "title": "Вычитание дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{3}{4} - \\frac{1}{2}$$",
    "choices": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{4}$",
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$"
    ],
    "answers": ["$\\frac{1}{4}$"],
    "hint": "<p>Приводим к общему знаменателю 4.</p>$$\\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$$"
  },
  {
    "id": "fractions003",
    "type": "multiplechoices",
    "header": "Дроби 4",
    "title": "Умножение дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} \\times \\frac{3}{4}$$",
    "choices": [
      "$\\frac{6}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{7}$",
      "$\\frac{2}{4}$",
      "$\\frac{3}{6}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Умножаем числители и знаменатели.</p>$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions004",
    "type": "multiplechoices",
    "header": "Дроби 5",
    "title": "Деление дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} \\div \\frac{4}{5}$$",
    "choices": [
      "$\\frac{8}{15}$",
      "$\\frac{5}{6}$",
      "$\\frac{6}{8}$",
      "$\\frac{10}{12}$",
      "$\\frac{4}{7}$"
    ],
    "answers": ["$\\frac{5}{6}$"],
    "hint": "<p>Деление заменяем умножением на обратную дробь.</p>$$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$"
  },

 {
    "id": "fractions006",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие скобок",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{1}{2}(x + 4)$$",
    "choices": [
      "$\\frac{x}{2} + 2$",
      "$\\frac{x}{2} + 4$",
      "$\\frac{x + 4}{2}$",
      "$2x + 2$",
      "$\\frac{1}{2}x + \\frac{1}{2}$"
    ],
    "answers": ["$\\frac{x}{2} + 2$"],
    "hint": "<p>Умножаем каждое слагаемое в скобках на дробь.</p>$$\\frac{1}{2}(x + 4) = \\frac{1}{2}x + \\frac{1}{2} \\times 4 = \\frac{x}{2} + 2$$"
  },
  {
    "id": "fractions007",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение за скобки",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $$\\frac{x}{3} + \\frac{2}{3}$$",
    "choices": [
      "$\\frac{1}{3}(x + 2)$",
      "$\\frac{x + 2}{3}$",
      "$3(x + 2)$",
      "$\\frac{1}{3}x + 2$",
      "$x + \\frac{2}{3}$"
    ],
    "answers": ["$\\frac{1}{3}(x + 2)$"],
    "hint": "<p>Выносим общий множитель $\\frac{1}{3}$.</p>$$\\frac{x}{3} + \\frac{2}{3} = \\frac{1}{3}(x + 2)$$"
  },
  {
    "id": "fractions008",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение дробей 2",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{5} + \\frac{1}{10}$$",
    "choices": [
      "$\\frac{3}{15}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{10}$",
      "$\\frac{5}{10}$",
      "$\\frac{4}{10}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Приводим к общему знаменателю 10.</p>$$\\frac{2}{5} + \\frac{1}{10} = \\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions009",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание дробей 2",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{5}{6} - \\frac{1}{3}$$",
    "choices": [
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{4}{6}$"
    ],
    "answers": ["$\\frac{1}{2}$"],
    "hint": "<p>Приводим к общему знаменателю 6.</p>$$\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$$"
  },
  {
    "id": "fractions010",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение выражения",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{3}{4}a + \\frac{1}{2}a$$",
    "choices": [
      "$\\frac{5}{4}a$",
      "$\\frac{4}{6}a$",
      "$\\frac{2}{3}a$",
      "$\\frac{7}{4}a$",
      "$a$"
    ],
    "answers": ["$\\frac{5}{4}a$"],
    "hint": "<p>Приводим дроби к общему знаменателю 4.</p>$$\\frac{3}{4}a + \\frac{2}{4}a = \\frac{5}{4}a$$"
  },
  {
    "id": "fractions011",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие двойных скобок",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{1}{2}(2x + 4) + \\frac{1}{3}(3x + 6)$$",
    "choices": [
      "$2x + 4$",
      "$3x + 4$",
      "$x + 2$",
      "$2x + 2$",
      "$3x + 6$"
    ],
    "answers": ["$2x + 4$"],
    "hint": "<p>Раскрываем обе скобки.</p>$$\\frac{1}{2}(2x + 4) = x + 2$$$$\\frac{1}{3}(3x + 6) = x + 2$$$$(x + 2) + (x + 2) = 2x + 4$$"
  },
  {
    "id": "fractions012",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $$1\\frac{1}{2} + 2\\frac{1}{4}$$",
    "choices": [
      "$3\\frac{3}{4}$",
      "$3\\frac{1}{2}$",
      "$3\\frac{2}{6}$",
      "$4$",
      "$3\\frac{1}{4}$"
    ],
    "answers": ["$3\\frac{3}{4}$"],
    "hint": "<p>Складываем отдельно целые и дробные части.</p>$$1\\frac{1}{2} + 2\\frac{1}{4} = 3 + \\frac{2}{4} + \\frac{1}{4} = 3\\frac{3}{4}$$"
  },
  {
    "id": "fractions013",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение на целое число",
    "theme": "Дроби",
    "text": "Вычислите: $$3 \\times \\frac{2}{5}$$",
    "choices": [
      "$\\frac{6}{5}$",
      "$\\frac{2}{15}$",
      "$\\frac{5}{6}$",
      "$\\frac{3}{10}$",
      "$\\frac{1}{5}$"
    ],
    "answers": ["$\\frac{6}{5}$"],
    "hint": "<p>Умножаем числитель на целое число.</p>$$3 \\times \\frac{2}{5} = \\frac{3 \\times 2}{5} = \\frac{6}{5}$$"
  },
  {
    "id": "fractions014",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление на дробь",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{3}{4} \\div \\frac{1}{2}$$",
    "choices": [
      "$\\frac{3}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{8}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$"
    ],
    "answers": ["$\\frac{3}{2}$"],
    "hint": "<p>Умножаем на обратную дробь.</p>$$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$$"
  },
  {
    "id": "fractions015",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение общего множителя",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $$\\frac{2x}{5} + \\frac{4}{5}$$",
    "choices": [
      "$\\frac{2}{5}(x + 2)$",
      "$\\frac{1}{5}(2x + 4)$",
      "$\\frac{2x + 4}{5}$",
      "$\\frac{2}{5}x + 4$",
      "$x + \\frac{4}{5}$"
    ],
    "answers": ["$\\frac{2}{5}(x + 2)$"],
    "hint": "<p>Выносим общий множитель $\\frac{2}{5}$.</p>$$\\frac{2x}{5} + \\frac{4}{5} = \\frac{2}{5}(x + 2)$$"
  },
  {
    "id": "fractions016",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сокращение дроби",
    "theme": "Дроби",
    "text": "Сократите дробь: $$\\frac{8}{12}$$",
    "choices": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{6}{8}$"
    ],
    "answers": ["$\\frac{2}{3}$"],
    "hint": "<p>Делим числитель и знаменатель на 4.</p>$$\\frac{8}{12} = \\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$"
  },
  {
    "id": "fractions017",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение трех дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{1}{4} + \\frac{1}{2} + \\frac{1}{8}$$",
    "choices": [
      "$\\frac{7}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{6}$",
      "$\\frac{6}{8}$"
    ],
    "answers": ["$\\frac{7}{8}$"],
    "hint": "<p>Приводим к общему знаменателю 8.</p>$$\\frac{1}{4} + \\frac{1}{2} + \\frac{1}{8} = \\frac{2}{8} + \\frac{4}{8} + \\frac{1}{8} = \\frac{7}{8}$$"
  },
  {
    "id": "fractions018",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение сложного выражения",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{1}{2}x + \\frac{1}{4}x - \\frac{1}{8}x$$",
    "choices": [
      "$\\frac{5}{8}x$",
      "$\\frac{3}{4}x$",
      "$\\frac{7}{8}x$",
      "$\\frac{1}{2}x$",
      "$\\frac{2}{3}x$"
    ],
    "answers": ["$\\frac{5}{8}x$"],
    "hint": "<p>Приводим к общему знаменателю 8.</p>$$\\frac{4}{8}x + \\frac{2}{8}x - \\frac{1}{8}x = \\frac{5}{8}x$$"
  },
  {
    "id": "fractions019",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Раскрытие скобок с дробями",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{2}{3}(x + 6)$$",
    "choices": [
      "$\\frac{2}{3}x + 4$",
      "$\\frac{2}{3}x + 6$",
      "$\\frac{2x + 6}{3}$",
      "$\\frac{2}{3}x + 2$",
      "$x + 4$"
    ],
    "answers": ["$\\frac{2}{3}x + 4$"],
    "hint": "<p>Умножаем каждое слагаемое на дробь.</p>$$\\frac{2}{3}(x + 6) = \\frac{2}{3}x + \\frac{2}{3} \\times 6 = \\frac{2}{3}x + 4$$"
  },
  {
    "id": "fractions020",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $$3\\frac{1}{2} - 1\\frac{1}{4}$$",
    "choices": [
      "$2\\frac{1}{4}$",
      "$2\\frac{1}{2}$",
      "$2\\frac{3}{4}$",
      "$1\\frac{3}{4}$",
      "$1\\frac{1}{4}$"
    ],
    "answers": ["$2\\frac{1}{4}$"],
    "hint": "<p>Вычитаем отдельно целые и дробные части.</p>$$3\\frac{1}{2} - 1\\frac{1}{4} = 2 + \\frac{2}{4} - \\frac{1}{4} = 2\\frac{1}{4}$$"
  },
  {
    "id": "fractions021",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $$1\\frac{1}{2} \\times 2\\frac{2}{3}$$",
    "choices": [
      "$4$",
      "$3\\frac{2}{3}$",
      "$4\\frac{1}{3}$",
      "$3\\frac{1}{2}$",
      "$4\\frac{1}{2}$"
    ],
    "answers": ["$4$"],
    "hint": "<p>Переводим в неправильные дроби и умножаем.</p>$$1\\frac{1}{2} = \\frac{3}{2}, 2\\frac{2}{3} = \\frac{8}{3}$$$$\\frac{3}{2} \\times \\frac{8}{3} = \\frac{24}{6} = 4$$"
  },
  {
    "id": "fractions022",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление смешанных чисел",
    "theme": "Дроби",
    "text": "Вычислите: $$2\\frac{1}{2} \\div 1\\frac{1}{4}$$",
    "choices": [
      "$2$",
      "$1\\frac{1}{2}$",
      "$2\\frac{1}{4}$",
      "$1\\frac{3}{4}$",
      "$2\\frac{1}{2}$"
    ],
    "answers": ["$2$"],
    "hint": "<p>Переводим в неправильные дроби и делим.</p>$$2\\frac{1}{2} = \\frac{5}{2}, 1\\frac{1}{4} = \\frac{5}{4}$$$$\\frac{5}{2} \\div \\frac{5}{4} = \\frac{5}{2} \\times \\frac{4}{5} = 2$$"
  },
  {
    "id": "fractions023",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сложение с разными знаменателями",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} + \\frac{3}{5}$$",
    "choices": [
      "$\\frac{19}{15}$",
      "$\\frac{5}{8}$",
      "$\\frac{6}{15}$",
      "$\\frac{10}{15}$",
      "$\\frac{13}{15}$"
    ],
    "answers": ["$\\frac{19}{15}$"],
    "hint": "<p>Общий знаменатель 15.</p>$$\\frac{2}{3} + \\frac{3}{5} = \\frac{10}{15} + \\frac{9}{15} = \\frac{19}{15}$$"
  },
  {
    "id": "fractions024",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вычитание с разными знаменателями",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{7}{8} - \\frac{2}{3}$$",
    "choices": [
      "$\\frac{5}{24}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$\\frac{5}{12}$",
      "$\\frac{7}{24}$"
    ],
    "answers": ["$\\frac{5}{24}$"],
    "hint": "<p>Общий знаменатель 24.</p>$$\\frac{7}{8} - \\frac{2}{3} = \\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$$"
  },
  {
    "id": "fractions025",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Упрощение выражения со скобками",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{1}{4}(8x + 12) - \\frac{1}{2}(2x + 4)$$",
    "choices": [
      "$x + 1$",
      "$2x + 3$",
      "$x + 2$",
      "$2x + 1$",
      "$x + 3$"
    ],
    "answers": ["$x + 1$"],
    "hint": "<p>Раскрываем обе скобки и вычитаем.</p>$$\\frac{1}{4}(8x + 12) = 2x + 3$$$$\\frac{1}{2}(2x + 4) = x + 2$$$$(2x + 3) - (x + 2) = x + 1$$"
  },
  {
    "id": "fractions026",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Вынесение общего знаменателя",
    "theme": "Дроби",
    "text": "Вынесите общий множитель: $$\\frac{3a}{4} + \\frac{5a}{4} - \\frac{a}{4}$$",
    "choices": [
      "$\\frac{7}{4}a$",
      "$\\frac{3}{4}a$",
      "$\\frac{5}{4}a$",
      "$\\frac{9}{4}a$",
      "$\\frac{1}{4}a$"
    ],
    "answers": ["$\\frac{7}{4}a$"],
    "hint": "<p>Все дроби имеют общий знаменатель 4.</p>$$\\frac{3a}{4} + \\frac{5a}{4} - \\frac{a}{4} = \\frac{7a}{4} = \\frac{7}{4}a$$"
  },
  {
    "id": "fractions027",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Сокращение сложной дроби",
    "theme": "Дроби",
    "text": "Сократите: $$\\frac{15}{25}$$",
    "choices": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{8}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{5}$",
      "$\\frac{6}{10}$"
    ],
    "answers": ["$\\frac{3}{5}$"],
    "hint": "<p>Делим числитель и знаменатель на 5.</p>$$\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$$"
  },
  {
    "id": "fractions028",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Умножение трех дробей",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$$",
    "choices": [
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{5}$",
      "$\\frac{2}{3}$"
    ],
    "answers": ["$\\frac{2}{5}$"],
    "hint": "<p>Последовательно умножаем дроби.</p>$$\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} = \\frac{24}{60} = \\frac{2}{5}$$"
  },
  {
    "id": "fractions029",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Деление на целое число",
    "theme": "Дроби",
    "text": "Вычислите: $$\\frac{3}{4} \\div 2$$",
    "choices": [
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{1}{4}$"
    ],
    "answers": ["$\\frac{3}{8}$"],
    "hint": "<p>Деление на число - это умножение на обратную дробь.</p>$$\\frac{3}{4} \\div 2 = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$"
  },
  {
    "id": "fractions030",
    "type": "multiplechoices",
    "header": "Дроби",
    "title": "Комбинированное выражение",
    "theme": "Дроби",
    "text": "Упростите: $$\\frac{1}{2}(4x + 6) + \\frac{1}{3}(3x + 9)$$",
    "choices": [
      "$3x + 6$",
      "$2x + 5$",
      "$4x + 7$",
      "$3x + 5$",
      "$2x + 6$"
    ],
    "answers": ["$3x + 6$"],
    "hint": "<p>Раскрываем обе скобки и складываем.</p>$$\\frac{1}{2}(4x + 6) = 2x + 3$$$$\\frac{1}{3}(3x + 9) = x + 3$$$$(2x + 3) + (x + 3) = 3x + 6$$"
  },

]