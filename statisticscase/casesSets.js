//https://support.microsoft.com/en-us/office/statistical-functions-reference-624dac86-a375-4435-bc25-76d659719ffd

let casesSets = [
   {
      id: 1,
      formula: "AVERAGE",
      title: "Показатели центра распределения. Среднеарифметическое значение",
      html: `
        <div class="alert alert-primary" role="alert">
    Введите в колонку заголовок и 11 цифр. Рассчитайте для них среднее значение 
        </div>
        <div>
        Returns the average (arithmetic mean) of the arguments. For example, if the range A1:A20 contains numbers, the formula =AVERAGE(A1:A20) returns the average of those numbers.<br><hr>
     Функция СРЗНАЧ возвращает среднее арифметическое аргументов. Например, если диапазон A1:A20 содержит числа, формула =СРЗНАЧ(A1:A20) возвращает среднее значение этих чисел.
        </div>   
     `},


   {
      id: 2,
      formula: "MODE.SNGL",
      title: "Показатели центра распределения. Мода",
      html: `
          <div class="alert alert-primary" role="alert">
      Введите в колонку заголовок и 11 цифр. Некоторые из них должны повторяться. Рассчитайте для них моду 
          </div>
          <div>
         MODE.SNGL function Returns the most frequently occurring, or repetitive, value in an array or range of data.<br>
         <hr>
       МОДА.ОДН Возвращает наиболее часто встречающееся или повторяющееся значение в массиве или интервале данных.
          </div>   
       `},

   {
      id: 3,
      formula: "MEDIAN",
      title: "Показатели центра распределения. Медиана",
      html: `
          <div class="alert alert-primary" role="alert">
      Введите в колонку заголовок и 11 цифр. Рассчитайте для них моду 
          </div>
          <div>
         MEDIAN returns the median of the given numbers. The median is the number in the middle of a set of numbers; that is, half the numbers have values that are greater than the median, and half have values that are less<br>
         <hr>
       Функция МЕДИАНА возвращает медиану заданных чисел. Медиана — это число, которое является серединой множества чисел
          </div>   
       `},


   {
      id: 4, formula: "MIN",
      title: "Минимальное значение",
      html: `
       <div class="alert alert-primary" role="alert">
  Введите в колонку заголовок и 11 цифр. Рассчитайте для них минимальное значение 
      </div> 
         <div>         
       =MIN(A2:A7) Наименьшее число в диапазоне 
          </div>    
   `},

   {
      id: 5, formula: "MAX",
      title: "Максимальное значение",
      html: `
     <div class="alert alert-primary" role="alert">
  Введите в колонку заголовок и 11 цифр. Рассчитайте для них максимальное значение
    </div>    
     <div>         
       =MAX(A2:A7) Наибольшее число в диапазоне
     </div>  
  `},

   {
      id: 6, formula: "SMALL",
      title: "Второе наименьшее число в диапазоне",
      html: `
  <div class="alert alert-primary" role="alert">
Введите в колонку заголовок и 11 цифр. Рассчитайте для них второе наименьшее число в диапазоне
 </div>    
  <div>         
    =SMALL(A2:A7, 2) Второе наименьшее число в диапазоне
  </div>  
`},

   {
      id: 7, formula: "LARGE",
      title: "Третье наибольшее число в диапазоне",
      html: `
<div class="alert alert-primary" role="alert">
Введите в колонку заголовок и 11 цифр. Рассчитайте для них третье наибольшее число в диапазоне
</div>    
<div>         
 =LARGE(A2:A7;3) Третье наибольшее число в диапазоне
</div>  
`},


   {
      id: 8,
      formula: "QUARTILE",
      title: "Показатели распределения. КВАРТИЛЬ",
      html: `
       <div class="alert alert-primary" role="alert">
   Введите в колонку заголовок и 11 цифр. Рассчитайте для них первый квартиль 
       </div>
       <div>
      QUARTILE function Returns the quartile of a data set. Quartiles often are used in sales and survey data to divide populations into groups.<br>
      For example, you can use QUARTILE to find the top 25 percent of incomes in a population<br>
      =QUARTILE(A2:A9,1) QUARTILE.EXC QUARTILE.INC
      <hr>
    Функция КВАРТИЛЬ озвращает квартиль множества данных.<br>
    Квартиль часто используются при анализе продаж для разбиения генеральной совокупности на группы.<br>
    Например, можно воспользоваться функцией КВАРТИЛЬ, чтобы найти среди всех предприятий 25 процентов наиболее доходных.<br>
    =КВАРТИЛЬ(A2:A9;1)
       </div>   
    `},


   {
      id: 9,
      formula: "PERCENTILE.INC",
      title: "Показатели распределения. ПЕРСЕНТИЛЬ",
      html: `
          <div class="alert alert-primary" role="alert">
      Введите в колонку заголовок и 11 цифр. Рассчитайте для них 67 персентиль
          </div>
          <div>
         PERCENTILE function Returns the k-th percentile of values in a range. You can use this function to establish a threshold of acceptance. For example, you can decide to examine candidates who score above the 90th percentile.<br>
         =PERCENTILE.INC(array,k) k Required. The percentile value in the range 0..1, inclusive
         <hr>
        =Функция ПЕРСЕНТИЛЬ ПРОЦЕНТИЛЬ.ИСКЛ и Функция ПРОЦЕНТИЛЬ.ВКЛ.<br>
       ПЕРСЕНТИЛЬ(массив;k) k  Обязательный. Значение процентили в интервале от 0 до 1, включая эти числа.<br>
       То есть процент указывается в виде десятичной дроби!
          </div>   
       `},


   {
      id: 10, formula: "AVEDEV",
      title: "Среднее абсолютных значений отклонений точек данных от среднего",
      html: `
         <div class="alert alert-primary" role="alert">
    Введите в колонку заголовок и 11 цифр. Рассчитайте для них среднее абсолютных значений отклонений точек данных от среднего 
        </div>
        <div>
     AVEDEV Returns the average of the absolute deviations of data points from their mean.<br><hr>
     Возвращает среднее абсолютных значений отклонений точек данных от среднего. СРОТКЛ является мерой разброса множества данных.<br>
     Уравнение для среднего отклонения<br>
     <img src='https://cxcs.microsoft.net/static/public/office/ru-ru/2c328fff-b4af-4e42-bb34-4f7bf5e2e85c/ee16ba75f4d39db65ad8550c92983268af136c0b.gif' />
     </div>
     `},

   {
      id: 11, formula: "DEVSQ",
      title: "Сумма квадратов отклонений точек данных от их среднего",
      html: `
         <div class="alert alert-primary" role="alert">
    Введите в колонку заголовок и 11 цифр. Рассчитайте для них сумму квадратов отклонений точек данных от их среднего 
        </div>   
        <div>Найдите формулу в поисковой системе самостоятельно!</div>
     `,
      hint: `<div>DEVSQ</div>`
   },



   {
      id: 12, formula: "CORREL",
      title: "Коэффициент корреляции двух диапазонов ячеек",
      html: `
         <div class="alert alert-primary" role="alert">
    Введите в две  колонки заголовок и по 11 цифр. Во второй колонке все цифры ВДВОЕ больше.<br>
    Рассчитайте для них коэффициент корреляции двух диапазонов ячеек <br>
    Сделайте вывод
        </div>
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
        `
      ,
      hint: `<div>
               CORREL
            </div>`
   },

   {
      id: 13, formula: "CORREL",
      title: "Коэффициент корреляции двух диапазонов ячеек 2",
      html: `
         < div class= "alert alert-primary" role="alert" >
         Введите в две колонки заголовок и по 11 цифр.В первой колонке числа увеличиваются, во второй уменьшаются.< br >
            Рассчитайте для них коэффициент корреляции двух диапазонов ячеек<br>
    Сделайте вывод
        </div>
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
      hint: `<div>
            CORREL
         </div>`},


   {
      id: 14, formula: "CORREL",
      title: "Коэффициент корреляции двух диапазонов ячеек 3",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две колонки заголовок и по 11 цифр.Все цифры рандомные.< br >
         Рассчитайте для них коэффициент корреляции двух диапазонов ячеек < br >
            Сделайте вывод
        </div >
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
      hint: `<div>
            CORREL
         </div>`},


   {
      id: 15, formula: "COVARIANCE.P",
      title: "Ковариация (среднее произведений отклонений для каждой пары точек в двух наборах данных) 1",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две  колонки заголовок и по 11 цифр.Во второй колонке все цифры ВДВОЕ больше.< br >
         Рассчитайте для них ковариацию двух диапазонов ячеек < br >
            Сделайте вывод
        </div>
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
      hint: `<div>
            COVARIANCE.P
         </div>`},

   {
      id: 16, formula: "COVARIANCE.P",
      title: "Ковариация (среднее произведений отклонений для каждой пары точек в двух наборах данных) 2",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две колонки заголовок и по 11 цифр.В первой колонке числа увеличиваются, во второй уменьшаются.< br >
         Рассчитайте для них ковариацию двух диапазонов ячеек < br >
            Сделайте вывод
        </div >
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
      hint: `<div>
            COVARIANCE.P
         </div>`},


   {
      id: 17, formula: "COVARIANCE.P",
      title: "Ковариация (среднее произведений отклонений для каждой пары точек в двух наборах данных) 3",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две колонки заголовок и по 11 цифр.Все цифры рандомные.< br >
         Рассчитайте для них ковариацию двух диапазонов ячеек < br >
            Сделайте вывод
        </div >
         <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
      hint: `<div>
            COVARIANCE.P
         </div>`},


   {
      id: 18, formula: "SLOPE",
      title: "Наклон линии линейной регрессии",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две колонки заголовок и по 11 цифр..Во второй колонке все цифры ВДВОЕ больше.< br >
         Рассчитайте для них НАКЛОН < br >
            Возвращает наклон линии линейной регрессии для точек данных в аргументах известные_значения_y и известные_значения_x.< br >
               Наклон определяется как частное от деления расстояния по вертикали на расстояние по горизонтали между двумя любыми точками прямой; иными словами, наклон — это скорость изменения значений вдоль прямой.
       SKEW function. Returns the skewness of a distribution.< br >
   Skewness characterizes the degree of asymmetry of a distribution around its mean.< br >
      Positive skewness indicates a distribution with an asymmetric tail extending toward more positive values.< br >
         Negative skewness indicates a distribution with an asymmetric tail extending toward more negative values.< br >
            Функция НАКЛОН.Возвращает наклон линии линейной регрессии для точек данных в аргументах известные_значения_y и известные_значения_x.< br >
               Наклон определяется как частное от деления расстояния по вертикали на расстояние по горизонтали между двумя любыми точками прямой; иными словами, наклон — это скорость изменения значений вдоль прямой.
         </div >
          <div>Найдите формулу в поисковой системе самостоятельно!</div>
   `,
   hint: `<div>
         SLOPE
      </div>`},


   {
      id: 19, formula: "INTERCEPT",
      title: "ОТРЕЗОК. Точка пересечения линии с осью y",
      html: `
   < div class="alert alert-primary" role = "alert" >
      Введите в две колонки заголовок и по 11 цифр.Все цифры рандомные.< br >
         Рассчитайте для них Функция ОТРЕЗОК < br >
            Вычисляет точку пересечения линии с осью y, используя значения аргументов "известные_значения_x" и "известные_значения_y".Точка пересечения находится на оптимальной линии регрессии, проведенной через точки, заданные аргументами "известные_значения_x" и "известные_значения_y".Функция ОТРЕЗОК используется, если нужно определить значение зависимой переменной при нулевом значении независимой переменной.Например, с помощью функции ОТРЕЗОК можно предсказать электрическое сопротивление металла при температуре 0°C, если имеются данные измерений при комнатной температуре и выше.
       INTERCEPT function.<br>
   Calculates the point at which a line will intersect the y-axis by using existing x-values and y-values. The intercept point is based on a best-fit regression line plotted through the known x-values and known y-values. Use the INTERCEPT function when you want to determine the value of the dependent variable when the independent variable is 0 (zero). For example, you can use the INTERCEPT function to predict a metal's electrical resistance at 0°C when your data points were taken at room temperature and higher<br>
      Функция НАКЛОН. Возвращает наклон линии линейной регрессии для точек данных в аргументах известные_значения_y и известные_значения_x.<br>
         Наклон определяется как частное от деления расстояния по вертикали на расстояние по горизонтали между двумя любыми точками прямой; иными словами, наклон — это скорость изменения значений вдоль прямой.
      </div>   
          <div>Найдите формулу в поисковой системе самостоятельно!</div>

       `,
       hint: `<div>
             INTERCEPT
          </div>`},

]
   ;

window.casesSets = casesSets;