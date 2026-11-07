
document.addEventListener('DOMContentLoaded',function(){
  var page=document.querySelector('.ah[data-section]');
  var sec=page?page.getAttribute('data-section'):'';
  document.querySelectorAll('.ah [data-nav]').forEach(function(a){
    if(a.getAttribute('data-nav')===sec){a.classList.add('on');}
  });
  var lib=document.querySelector('.ah [data-library]');
  if(!lib){return;}
  var btns=lib.querySelectorAll('.filters button');
  var cards=lib.querySelectorAll('[data-rubric]');
  var q=lib.querySelector('.filters input');
  var empty=lib.querySelector('.empty');
  var cur='all';
  function apply(){
    var text=(q&&q.value||'').toLowerCase().trim();var shown=0;
    cards.forEach(function(c){
      var ok=(cur==='all'||c.getAttribute('data-rubric')===cur)&&(!text||c.textContent.toLowerCase().indexOf(text)>-1);
      c.style.display=ok?'':'none';if(ok){shown++;}
    });
    btns.forEach(function(b){b.classList.toggle('on',b.getAttribute('data-filter')===cur);});
    if(empty){empty.style.display=shown?'none':'block';}
  }
  btns.forEach(function(b){b.addEventListener('click',function(){cur=b.getAttribute('data-filter');apply();});});
  if(q){q.addEventListener('input',apply);}
  var h=(location.hash||'').replace('#','');
  if(h){btns.forEach(function(b){if(b.getAttribute('data-filter')===h){cur=h;}});}
  apply();
});

(function(){
  var L={"Обсудить задачу": "Выйти на связь", "Чем я помогу": "Что умеет напарник", "Ассистент эксперта": "Напарник эксперта", "Один специалист вместо трёх фрилансеров": "Один напарник вместо трёх наёмников", "Что я делаю": "Задания", "Шесть задач, которые можно поручить": "Шесть заданий для напарника", "Разовая задача": "Разовое задание", "В вашей команде": "В вашем отряде", "техспец": "механик", "ресёрчер": "разведчик", "методист": "архивист", "Техспец": "Механик", "Ресёрчер": "Разведчик", "Методист": "Архивист", "Библиотека": "Архив", "Методика": "Протокол", "Услуги": "Найм", "Подписка": "Караван", "Обо мне": "Досье", "Контакты": "Рация", "Меню": "Терминал", "Открыть библиотеку": "Открыть архив", "В библиотеку": "В архив", "Подробнее о методике →": "Читать протокол →", "Как устроена подписка": "Как устроен караван", "Скачать PDF бесплатно": "Скачать голодиск", "↓ Скачать PDF": "↓ Скачать голодиск", "Получить бесплатно в Telegram": "Забрать голодиск в Telegram", "Получить во ВКонтакте": "Забрать голодиск во ВКонтакте", "Сообщить о нерабочей ссылке в Telegram": "Сообщить о битом голодиске в Telegram", "Сообщить о нерабочей ссылке во ВКонтакте": "Сообщить о битом голодиске во ВКонтакте", "Узнать о выходе во ВКонтакте": "Узнать о новом голодиске во ВКонтакте", "Узнать о выходе в Telegram": "Узнать о новом голодиске в Telegram", "Подписка на Boosty": "Присоединиться к каравану на Boosty", "Подписаться на Boosty": "Присоединиться к каравану на Boosty", "Написать в Telegram": "Выйти на связь в Telegram", "Написать во ВКонтакте": "Выйти на связь во ВКонтакте", "Заказать исследование": "Нанять разведчика", "Полное резюме": "Полное досье", "Открыть →": "В путь →", "На главную": "Вернуться в убежище", "Рубрики": "Сектора", "С чего начать": "С чего начать вылазку", "Выбор автора": "Находки разведчика", "Как я работаю": "Протокол разведки", "Бесплатно": "Даром", "По подписке": "Для каравана", "PDF-справочников": "голодисков в архиве", "страниц": "страниц записей", "рубрик": "секторов", "за текущие материалы": "крышек за находки", "Все справочники": "Архив голодисков", "Такой страницы нет": "Здесь только пустошь", "Ошибка 404": "Сектор не найден · 404", "Где читать": "Рация", "Файлы": "Голодиски", "Оговорка": "Предупреждение", "Обновления": "Сводки", "Читать дальше": "Рядом в архиве", "Похожие справочники": "Рядом в архиве", "Опыт и образование": "Досье: путь", "Навыки и технологии": "Навыки и перки", "Что уже опубликовано": "Находки, что уже в архиве", "Новые справочники — в Telegram и ВКонтакте": "Сводки о новых находках — в Telegram и ВКонтакте", "Как я проверяю информацию": "Протокол: как я проверяю сведения", "Справочники и исследования на заказ": "Найм разведчика: справочники и исследования"},R=[["^Проверено (\\d\\d\\.\\d\\d\\.\\d{4})$", "Сверено $1"], ["^Выпуск 2026$", "Запись 2026"], ["^Все (\\d+) справочников →$", "Весь архив: $1 голодисков →"]],G={"button": "Словарь Пустоши", "tip": "Непонятные слова вроде «голодиск» или «караван»? Загляните в словарь — кнопка слева внизу.", "footer_link": "Что это за стиль? Словарь", "kicker": "Как читать этот сайт", "title": "Словарь «Пустоши»", "intro": ["Это сайт ассистента эксперта — техспеца, ресёрчера и методиста в одном лице. Здесь можно заказать помощь с техникой, нейросетями и поиском информации для курса, блога или школы, а также бесплатно скачать справочники — PDF-файлы.", "Оформление «Пустошь» работает как скин в игре: содержание то же самое, меняются только вид и названия кнопок. Если слово непонятно, найдите его в словаре ниже. А если навести курсор на кнопку или пункт меню, появится его обычное название."], "origin_title": "Откуда этот стиль", "origin": ["Стиль вдохновлён Fallout 2 — культовой ролевой игрой 1998 года о мире после ядерной войны. Её действие происходит в Пустоши — выжженной земле, где люди живут в маленьких поселениях и подземных убежищах, торгуют через караваны и ищут полезные находки.", "Мир игры выглядит как фантазия 1950-х годов о будущем, которое так и не наступило: тяжёлые металлические панели с заклёпками, зелёные экраны старых компьютеров, круглые красные кнопки, цвета ржавчины, песка и янтаря.", "Что взято в оформление: коричневые металлические панели на заклёпках — как интерфейс игры; зелёные «экраны» с цифрами, отметками и списками файлов — как терминалы и наручный компьютер героя; красные лампочки на кнопках — как в меню; янтарные заголовки — как надписи на панелях. Всего три основных цвета: коричневый, янтарный и зелёный."], "terms_title": "Словарь", "terms": [["Архив", "Библиотека: все справочники сайта"], ["Голодиск", "Один справочник — PDF-файл. В игре так называются носители с записями"], ["Скачать · забрать голодиск", "Получить справочник бесплатно"], ["Сверено 27.10.2026", "Дата, когда сведения в справочнике проверены"], ["Сектора", "Рубрики — темы справочников"], ["Протокол", "Методика: как я ищу и проверяю информацию"], ["Найм · Выйти на связь", "Услуги: обсудить задачу — разово или в вашу команду"], ["Напарник эксперта", "Ассистент эксперта: помогаю тем, кто учит и делится знаниями"], ["Механик · Разведчик · Архивист", "Техспец (техника и нейросети) · ресёрчер (поиск и проверка информации) · методист (учебные материалы)"], ["Разведчик", "Аналитик, который ищет сведения в открытых источниках"], ["Караван", "Подписка: караваны возят товары по Пустоши, а подписка «привозит» новые материалы"], ["Крышки", "Деньги Пустоши: в серии игр крышки от бутылок служат валютой. «0 крышек» — бесплатно"], ["Даром", "Бесплатно"], ["Досье", "Страница «Обо мне»"], ["Перки", "Особые умения — так их называют в ролевых играх"], ["Рация · Выйти на связь", "Контакты · написать сообщение в Telegram или ВКонтакте"], ["Терминал", "Меню сайта на телефоне"], ["Убежище · Пустошь", "Главная страница · такой страницы нет (ошибка 404)"]], "tips_title": "Как пользоваться", "tips": ["Начните с «Архива»: выберите сектор (рубрику) или найдите справочник через поиск.", "На странице справочника — краткий пересказ, зелёный «экран» со списком файлов и кнопка «Скачать голодиск».", "Чем свежее дата «Сверено», тем точнее цены, ссылки и условия в справочнике.", "Адреса страниц обычные: «Архив» — это раздел /library, «Найм» — /services."], "note": "Сайт не связан с создателями и издателями игры. Название игры упомянуто только для того, чтобы объяснить, откуда стиль. Рисунков, логотипов, персонажей и текстов из игры здесь нет — всё оформление своё, шрифты из открытой библиотеки Google Fonts."},KEY='wasteland',ROMAN=['','Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ'];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function active(){var l=document.getElementById('ah-theme');return !(l&&(l.getAttribute('href')||'').indexOf('theme-'+KEY)<0);}
  function labels(){
    document.querySelectorAll('.ah a,.ah button,.ah span,.ah h1,.ah h2,.ah h3,.ah h4,.ah summary').forEach(function(el){
      if(el.children.length||el.closest('.ah-gl')){return;}
      var t=el.textContent.trim();if(!t){return;}
      var v=L[t];
      if(!v){for(var i=0;i<R.length;i++){var re=new RegExp(R[i][0]);if(re.test(t)){
        v=t.replace(re,R[i][1]);if(v.indexOf('ROMAN')===0){v=ROMAN[+v.slice(5)]||t;}break;}}}
      if(v&&v!==t){el.textContent=v;if(!el.title){el.title='Обычное название: '+t;}}
    });
  }
  function glossary(){
    if(!G||document.querySelector('.ah-gl')){return;}
    var h='<div class="ah-gl-box" role="document"><button type="button" class="ah-gl-x" aria-label="Закрыть">×</button>'
      +'<span class="kicker">'+esc(G.kicker)+'</span><h2 id="ah-gl-t">'+esc(G.title)+'</h2>';
    G.intro.forEach(function(p){h+='<p>'+esc(p)+'</p>';});
    h+='<h3>'+esc(G.origin_title)+'</h3>';G.origin.forEach(function(p){h+='<p>'+esc(p)+'</p>';});
    h+='<h3>'+esc(G.terms_title)+'</h3><dl class="ah-gl-terms">';
    G.terms.forEach(function(x){h+='<div><dt>'+esc(x[0])+'</dt><dd>'+esc(x[1])+'</dd></div>';});
    h+='</dl><h3>'+esc(G.tips_title)+'</h3><ul>';G.tips.forEach(function(p){h+='<li>'+esc(p)+'</li>';});
    h+='</ul><p class="ah-gl-note">'+esc(G.note)+'</p></div>';
    var box=document.createElement('div');box.className='ah ah-gl';box.hidden=true;
    box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-labelledby','ah-gl-t');box.innerHTML=h;
    var btn=document.createElement('button');btn.type='button';btn.className='ah ah-gl-btn';btn.textContent=G.button;
    btn.setAttribute('aria-haspopup','dialog');
    document.body.appendChild(btn);document.body.appendChild(box);
    function open(){box.hidden=false;document.documentElement.style.overflow='hidden';box.querySelector('.ah-gl-x').focus();}
    function close(){box.hidden=true;document.documentElement.style.overflow='';btn.focus();}
    btn.addEventListener('click',open);
    box.addEventListener('click',function(e){if(e.target===box||e.target.classList.contains('ah-gl-x')){close();}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden){close();}});
    document.querySelectorAll('.ah .legal').forEach(function(f){
      var a=document.createElement('button');a.type='button';a.className='ah-gl-link';a.textContent=G.footer_link;
      a.addEventListener('click',open);f.appendChild(a);});
    var seen=false;try{seen=localStorage.getItem('ah-gl-'+KEY)==='1';localStorage.setItem('ah-gl-'+KEY,'1');}catch(e){}
    if(!seen){var tip=document.createElement('div');tip.className='ah ah-gl-tip';tip.textContent=G.tip;document.body.appendChild(tip);
      setTimeout(function(){tip.classList.add('out');},7000);setTimeout(function(){tip.remove();},7600);
      btn.addEventListener('click',function(){tip.remove();});}
  }
  function run(){if(!active()){return;}labels();glossary();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
})();

(function(){
  var L={"Обсудить задачу": "Призвать на службу", "Чем я помогу": "Чем служу", "Ассистент эксперта": "Советник при дворе", "Один специалист вместо трёх фрилансеров": "Один рыцарь вместо трёх наёмников", "Что я делаю": "Служба", "Шесть задач, которые можно поручить": "Шесть поручений для советника", "Разовая задача": "Разовое поручение", "В вашей команде": "В вашей свите", "техспец": "зодчий", "ресёрчер": "разведчик", "методист": "летописец", "Техспец": "Зодчий", "Ресёрчер": "Разведчик", "Методист": "Летописец", "Библиотека": "Хранилище", "Методика": "Устав", "Услуги": "Наём", "Подписка": "Казна", "Обо мне": "Герой", "Контакты": "Гонцы", "Меню": "Свиток", "Открыть библиотеку": "Войти в хранилище", "В библиотеку": "В хранилище", "Подробнее о методике →": "Читать устав →", "Как устроена подписка": "Узнать о казне", "Скачать PDF бесплатно": "Забрать свиток", "↓ Скачать PDF": "↓ Забрать свиток", "Получить бесплатно в Telegram": "Забрать свиток в Telegram", "Получить во ВКонтакте": "Забрать свиток во ВКонтакте", "Сообщить о нерабочей ссылке в Telegram": "Сообщить о порванном свитке в Telegram", "Сообщить о нерабочей ссылке во ВКонтакте": "Сообщить о порванном свитке во ВКонтакте", "Узнать о выходе во ВКонтакте": "Узнать о новом свитке во ВКонтакте", "Узнать о выходе в Telegram": "Узнать о новом свитке в Telegram", "Подписка на Boosty": "Вступить в орден на Boosty", "Подписаться на Boosty": "Вступить в орден на Boosty", "Написать в Telegram": "Отправить гонца в Telegram", "Написать во ВКонтакте": "Отправить гонца во ВКонтакте", "Заказать исследование": "Нанять разведчика", "Полное резюме": "Летопись героя", "Открыть →": "В поход →", "На главную": "К воротам замка", "Рубрики": "Земли королевства", "С чего начать": "С чего начать поход", "Выбор автора": "Выбор летописца", "Как я работаю": "Устав разведчика", "Бесплатно": "Без золота", "По подписке": "Для ордена", "PDF-справочников": "свитков в хранилище", "страниц": "страниц летописей", "рубрик": "земель", "за текущие материалы": "золота за свитки", "Все справочники": "Хранилище свитков", "Такой страницы нет": "Здесь лишь туман войны", "Ошибка 404": "Неизведанные земли · 404", "Где читать": "Гонцы", "Файлы": "Свитки", "Оговорка": "Оговорка летописца", "Обновления": "Вести", "Читать дальше": "Соседние свитки", "Похожие справочники": "Соседние свитки", "Опыт и образование": "Летопись героя", "Навыки и технологии": "Умения героя", "Что уже опубликовано": "Свитки, что уже в хранилище", "Новые справочники — в Telegram и ВКонтакте": "Вести о новых свитках — в Telegram и ВКонтакте", "Как я проверяю информацию": "Устав: как я проверяю сведения", "Справочники и исследования на заказ": "Наём разведчика: справочники и исследования"},R=[["^Проверено (\\d\\d\\.\\d\\d\\.\\d{4})$", "Печать от $1"], ["^Выпуск 2026$", "Свиток 2026 года"], ["^Все (\\d+) справочников →$", "Все $1 свитков →"], ["^0(\\d)$", "ROMAN$1"]],G={"button": "⚜ Словарь замка", "tip": "Непонятные слова вроде «Хранилище» или «Казна»? Загляните в словарь — кнопка слева внизу.", "footer_link": "Что это за стиль? Словарь", "kicker": "Как читать этот сайт", "title": "Словарь «Замка»", "intro": ["Это сайт ассистента эксперта — техспеца, ресёрчера и методиста в одном лице. Здесь можно заказать помощь с техникой, нейросетями и поиском информации для курса, блога или школы, а также бесплатно скачать справочники — PDF-файлы.", "Оформление «Замок» работает как скин в игре: содержание то же самое, меняются только вид и названия кнопок. Если слово непонятно, найдите его в словаре ниже. А если навести курсор на кнопку или пункт меню, появится его обычное название."], "origin_title": "Откуда этот стиль", "origin": ["Стиль вдохновлён «Героями Меча и Магии III» — пошаговой стратегией 1999 года. В России она вышла под названием «Герои Меча и Магии III: Возрождение Эрафии». В игре вы отстраиваете город, нанимаете армию и путешествуете по карте, открывая неизведанные земли, скрытые «туманом войны».", "«Замок» — город рыцарей и светлых сил: копейщики, грифоны, ангелы. Его узнают по белому камню, синим знамёнам и золоту.", "Что взято в оформление: пергамент — как у свитков и окон игры; золотые рамки и объёмные «литые» кнопки — как в интерфейсе; синие знамёна — в шапке и подвале; шрифты с засечками и большая первая буква абзаца (буквица) — как в старинных книгах; гербы — вместо обычных иконок рубрик."], "terms_title": "Словарь", "terms": [["Хранилище", "Библиотека: все справочники сайта"], ["Свиток", "Один справочник — PDF-файл"], ["Забрать свиток", "Скачать справочник бесплатно"], ["Печать от 27.10.2026", "Дата, когда сведения в справочнике проверены"], ["Земли королевства", "Рубрики — темы справочников"], ["Устав", "Методика: как я ищу и проверяю информацию"], ["Наём · Призвать на службу", "Услуги: обсудить задачу — разово или в вашу команду"], ["Советник при дворе", "Ассистент эксперта: помогаю тем, кто учит и делится знаниями"], ["Зодчий · Разведчик · Летописец", "Техспец (техника и нейросети) · ресёрчер (поиск и проверка информации) · методист (учебные материалы)"], ["Разведчик", "Аналитик, который ищет сведения в открытых источниках"], ["Казна", "Подписка на новые и обновлённые материалы"], ["Орден", "Подписчики на Boosty"], ["Герой", "Страница «Обо мне»"], ["Летопись героя", "Опыт, образование и полное резюме"], ["Гонцы · Отправить гонца", "Контакты · написать сообщение в Telegram или ВКонтакте"], ["Золото · Без золота", "Деньги · бесплатно"], ["Туман войны", "Такой страницы нет — ошибка 404"], ["Соседние свитки", "Похожие справочники"]], "tips_title": "Как пользоваться", "tips": ["Начните с «Хранилища»: выберите землю (рубрику) или найдите справочник через поиск.", "На странице справочника — краткий пересказ, список файлов и кнопка «Забрать свиток».", "Чем свежее «печать», тем точнее цены, ссылки и условия в справочнике.", "Адреса страниц обычные: «Хранилище» — это раздел /library, «Наём» — /services."], "note": "Сайт не связан с создателями и издателями игры. Название игры упомянуто только для того, чтобы объяснить, откуда стиль. Рисунков, логотипов и текстов из игры здесь нет — всё оформление своё, шрифты из открытой библиотеки Google Fonts."},KEY='castle',ROMAN=['','Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ'];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function active(){var l=document.getElementById('ah-theme');return !(l&&(l.getAttribute('href')||'').indexOf('theme-'+KEY)<0);}
  function labels(){
    document.querySelectorAll('.ah a,.ah button,.ah span,.ah h1,.ah h2,.ah h3,.ah h4,.ah summary').forEach(function(el){
      if(el.children.length||el.closest('.ah-gl')){return;}
      var t=el.textContent.trim();if(!t){return;}
      var v=L[t];
      if(!v){for(var i=0;i<R.length;i++){var re=new RegExp(R[i][0]);if(re.test(t)){
        v=t.replace(re,R[i][1]);if(v.indexOf('ROMAN')===0){v=ROMAN[+v.slice(5)]||t;}break;}}}
      if(v&&v!==t){el.textContent=v;if(!el.title){el.title='Обычное название: '+t;}}
    });
  }
  function glossary(){
    if(!G||document.querySelector('.ah-gl')){return;}
    var h='<div class="ah-gl-box" role="document"><button type="button" class="ah-gl-x" aria-label="Закрыть">×</button>'
      +'<span class="kicker">'+esc(G.kicker)+'</span><h2 id="ah-gl-t">'+esc(G.title)+'</h2>';
    G.intro.forEach(function(p){h+='<p>'+esc(p)+'</p>';});
    h+='<h3>'+esc(G.origin_title)+'</h3>';G.origin.forEach(function(p){h+='<p>'+esc(p)+'</p>';});
    h+='<h3>'+esc(G.terms_title)+'</h3><dl class="ah-gl-terms">';
    G.terms.forEach(function(x){h+='<div><dt>'+esc(x[0])+'</dt><dd>'+esc(x[1])+'</dd></div>';});
    h+='</dl><h3>'+esc(G.tips_title)+'</h3><ul>';G.tips.forEach(function(p){h+='<li>'+esc(p)+'</li>';});
    h+='</ul><p class="ah-gl-note">'+esc(G.note)+'</p></div>';
    var box=document.createElement('div');box.className='ah ah-gl';box.hidden=true;
    box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-labelledby','ah-gl-t');box.innerHTML=h;
    var btn=document.createElement('button');btn.type='button';btn.className='ah ah-gl-btn';btn.textContent=G.button;
    btn.setAttribute('aria-haspopup','dialog');
    document.body.appendChild(btn);document.body.appendChild(box);
    function open(){box.hidden=false;document.documentElement.style.overflow='hidden';box.querySelector('.ah-gl-x').focus();}
    function close(){box.hidden=true;document.documentElement.style.overflow='';btn.focus();}
    btn.addEventListener('click',open);
    box.addEventListener('click',function(e){if(e.target===box||e.target.classList.contains('ah-gl-x')){close();}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden){close();}});
    document.querySelectorAll('.ah .legal').forEach(function(f){
      var a=document.createElement('button');a.type='button';a.className='ah-gl-link';a.textContent=G.footer_link;
      a.addEventListener('click',open);f.appendChild(a);});
    var seen=false;try{seen=localStorage.getItem('ah-gl-'+KEY)==='1';localStorage.setItem('ah-gl-'+KEY,'1');}catch(e){}
    if(!seen){var tip=document.createElement('div');tip.className='ah ah-gl-tip';tip.textContent=G.tip;document.body.appendChild(tip);
      setTimeout(function(){tip.classList.add('out');},7000);setTimeout(function(){tip.remove();},7600);
      btn.addEventListener('click',function(){tip.remove();});}
  }
  function run(){if(!active()){return;}labels();glossary();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
})();

document.addEventListener('DOMContentLoaded',function(){
  var link=document.getElementById('ah-theme');if(!link){return;}
  var cur=(link.getAttribute('href').match(/theme-(\w+)\.css/)||[])[1];
  document.querySelectorAll('.ah [data-theme]').forEach(function(b){
    b.classList.toggle('on',b.getAttribute('data-theme')===cur);
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-theme');link.setAttribute('href','assets/theme-'+t+'.css');
      try{localStorage.setItem('ah-theme',t);}catch(e){}
      location.reload();
    });
  });
});
