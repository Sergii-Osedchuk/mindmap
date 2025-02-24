const data = [
  {
    name: "Накрийте на стіл",
    description: `Розмитість, сум’яття і розпорошеність думок = прокрастинація. 
        Чіткість - найважливіше для особистої продуктивності.
                  Точно знати чого прагнути, Написати свої думки, Встановити дедлайн, Перелік усього, що потрібно для досягнення мети, Перелік - в план, Не відкладати. Цілі – то паливо в печі досягнення.`,
  },
  {
    name: "Заздалегідь плануйте кожень день",
    description:
      "Правило 90/10. 10% часу - плануйте, 90% часу - працюйте. Планування вашої роботи протягом дня, тижня, місяця дозволить більш ефективно використовувати ваш час та знання. Відповідно досягнення мети виявиться простішим ніж очікувалось.",
  },
  {
    name: "До всього застосовуйте правило 80/20",
    description: `Вміння визначати з переліку усіх пунктів - найважливіші, це шлях до успішного та швидкого виконання поставленого завдання. 
В цьому допоможе правило 80/20. Наприклад, з 10 пунктів, які ви виписали, щоб виконати завдання, варто визначити 2 найважливіші і виконання на старті, саме їх, принесе 80% позитивного результату.
`,
  },
  {
    name: "Думайте про наслідки",
    description: `Те, що ви робите сьогодні, має відповідати тому, чого ви прагнете у майбутньому.
Майбутнє породжує впливи і визначає теперішні дії.
Успішні люди готові відкласти задоволення і йти на жертви у близькій перспективі, для того щоб отримати кращі результати в далекій перспективі.
Привчіть себе постійно використовувати свій час на найцінніше.
`,
  },
  {
    name: "Займайтесь творчою прокрастинацією",
    description: `Спочатку зробіть найважчі завдання!
Кажіть «ні» всьому, що не має великої цінності для вашого часу та життя.
Навмисна прокрастинація для мало важливих справ - це нормально.
Визначте завдання, які можете передати чи скасувати, щоб звільнити більше часу для справді важливої роботи.
`,
  },
  {
    name: "Постійно використовуйте метод АБВГД",
    description: `Пріоритети вирішують усе – перед початком роботи визначте головне завдання і зосередьтеся на ньому.
Метод АБВГД – ефективний спосіб сортування завдань:
А – критично важливі справи, які мають значні наслідки.
Б – завдання, які варто зробити, але їхнє невиконання не є катастрофічним.
В – корисні справи, але без наслідків при невиконанні.
Г – завдання, які можна делегувати.
Д – те, що можна виключити без шкоди.
Регулярне застосування методу формує звичку продуктивності.`,
  },
  {
    name: "Зосередьтесь на сферах ключових результатів",
    description: `Ваша робота – це конкретні результати – зрозумійте, за що вам платять, і сфокусуйтеся на цьому.
Ключові сфери результатів – 5-7 основних завдань, які визначають ваш успіх.
Оцініть свої навички – виявіть слабкі місця та працюйте над їхнім покращенням.
Слабка ланка стримує ваш прогрес – навіть якщо ви сильні у багатьох аспектах, одна слабкість може гальмувати кар’єрний ріст.
Розвиток ключових навичок усуває прокрастинацію – коли ви впевнені у своїх вміннях, вам легше братися до роботи.
`,
  },
  {
    name: "Скористайтеся зaконом трьох",
    description: `Визначте 3 основні завдання що приносять найбільше цінності та наполегливо працюйте над ними кожен день.
Правильний тайм-менеджмент дозволить робити більше за менший час.
На роботі працюйте весь час не відволікаючись, не забувайте також знаходити work-life баланс для гармонійного життя.
`,
  },
  {
    name: "Перед початком ретельно готуйтесь",
    description: `Створіть зручне робоче місце, це допоможе сфокусуватися виключно на роботі.
Найбільші наші вороги страх невдачі та сумніви, отже зробіть те чого боїтесь.
Вирівняйте спину, прийміть образ продуктивності, зробіть перший крок, скажіть "До роботи" та почніть працювати.
`,
  },
  {
    name: "Рухайтесь від бочки до бочки",
    description: `Великі завдання слід виконувати поступово, зосереджуючись на одному кроці за раз.
Навіть найскладніші цілі можна досягти, якщо діяти послідовно. 
Важливо не боятися масштабу роботи, а почати з першого кроку, адже наступні дії стануть зрозумілішими в процесі. 
Такий підхід допомагає досягти успіху в будь-якій сфері життя.
`,
  },
  {
    name: "Удосконалюйте свої ключові навички",
    description: `Постійне вдосконалення своїх ключових навичок є запорукою успіху. Навчання має бути безперервним процесом. 
Розвиток професійних умінь підвищує впевненість, продуктивність і мотивацію до роботи. 
Щоб досягти майстерності, необхідно читати, відвідувати курси та використовувати будь-які можливості для навчання.
`,
  },
  {
    name: "Використовуйте свої особливі таланти",
    description: `Вашим обов’язком є вирішити, що ви найбільше полюбляєте
робити, а тоді всім серцем намагатися робити це на відмінно.
Успішні люди – це незмінно ті, хто витратив час на визначення
того, що вони роблять добре і, на додачу, що їм подобається. Вони
знають, що роблять цінного у своїй галузі, і повністю зосереджуються
лише на цьому завданні чи сфері.
`,
  },
  {
    name: "Визначте основні перепони",
    description: `Правило 80/20 можна також застосовувати до вашого життя й
роботи. Це означає, що 80 % усіх перепон, тобто чинників, які
стримують вас від досягнення мети, є внутрішніми. Вони всередині
вас самих – у ваших особистих якостях, уміннях, звичках, дисципліні і компетенції.Лише 20 % чинників обмеження належать до зовнішніх і лежать
поза вами та вашою організацією.
`,
  },
  {
    name: "Тисніть на себе",
    description: `Сформуйте звичку докладати зусиль.
Працюйте так, наче на виконання найважливішої роботи є лише один день.
1. Ставте собі дедлайни та проміжні дедлайни для кожного завдання та дотримуйтесь їх.
2. Плануйте час на кожен крок проекту та намагайтесь побити свій рекорд.
`,
  },
  {
    name: "Максимізуйте свої особисті сили",
    description: `Бережіть та  підгодовуйте рівень своєї енергії.
Не перепрацьовуйте та працюйте у своєму темпі 
Спіть достатньо та повноцінно відпочивайте 
Дбайте про своє фізичне здоров’я та стежте за харчуванням.
Високий рівень енергії незамінний для високої продуктивності:
1. Проаналізуйте свої енергетичні рівні та щоденні звички здоров’я.
2. Оберіть одну діяльність , яку ви можете змінити негайно для покращення здоров’я та енергії,зробіть її  вашою повсякденною звичкою.
`,
  },
  {
    name: "Мотивуйте себе діяти",
    description: `Правильна мотивація-це запорука успіху! Працюйте над своєю самооцінкою, мисліть позитивно.
Оптимізм – це найважливіша риса, яку можна розвинути для
досягнення професійного й особистого успіху та щастя.
           Контролюйте власні думки, не забувайте, що станете тим, про
кого думаєте.
Повторюйте собі постійно: «Я можу це зробити! Можу!»
`,
  },
  {
    name: "Позбудьтесь технологічного рабства",
    description: `Керуйте технологіями, а не дозволяйте їм керувати вами! Використовуйте їх розумно, щоб підвищити ефективність, а не відволікатися.
Найкращі професіонали вміють обмежувати цифровий шум і зосереджуватися на головному.
Контролюйте свій час, вимикайте зайві сповіщення, не ставайте заручником смартфона!
Повторюйте собі постійно: «Я керую технологіями, а не вони мною!»
`,
  },
  {
    name: "Діліть завдання на частини",
    description: `Маленькі кроки ведуть до великих перемог! Дробіть складні справи на простіші, і вони стануть легкими та здійсненними.
Виконуйте роботу поступово, використовуючи метод «швейцарського сиру» – розпочніть із маленького шматочка, і все піде легше.
Чим більше зроблено – тим простіше продовжувати!
Повторюйте собі постійно: «Я можу зробити це поетапно і довести до кінця!»`,
  },
  {
    name: "Створюйте великі блоки часу",
    description: `Не відкладайте важливе на потім.
Кожна хвилина важлива! Ретельно плануйте свій час.
`,
  },
  {
    name: "Розвиньте відчуття крайньої необхідності",
    description: `Найкращий стан продуктивності - кураж. 
Не зволікай, зроби зараз, швидко дій, швидкий темп є завжди супроводом великого успіху.
`,
  },
  {
    name: "Виконуйте завдання по одному",
    description: ` Дисципліна та правильне розставлення пріоритетів бережуть час та збільшують продуктивність.
`,
  },
];

export default data;