/* Інформаційний портал "Науковий центр" — основна логіка (jQuery) */

// ====== Словник перекладу UA -> EN ======
var I18N = {
  "ЗАКЛАД ВИЩОЇ ОСВІТИ":"HIGHER EDUCATION INSTITUTION",
  "Головна":"Home","Про сайт":"About","Галерея картинок":"Image Gallery","Галерея":"Gallery",
  "Новини":"News","Події":"Events","Контакти":"Contacts",
  "Дізнатися більше":"Learn more","Новини центру":"Center news","Долучитися":"Join us",
  "Усі новини":"All news","Надіслати":"Send",
  "Науковий центр університету":"University Research Center",
  "Сучасні дослідження та інновації світового рівня":"World-class research and innovation",
  "Наука без кордонів":"Science without borders",
  "Міжнародна співпраця, гранти та проєкти":"International cooperation, grants and projects",
  "Підтримка молодих вчених":"Support for young scientists",
  "Школа молодого вченого та студентська наука":"Young scientist school and student science",
  "Напрями діяльності":"Areas of activity",
  "Науковий центр об’єднує дослідників та студентів для розвитку науки та інновацій":"The center unites researchers and students to advance science and innovation",
  "Головні новини":"Top news",
  "Останні 10 подій та анонсів Наукового центру":"The latest 10 events and announcements of the Research Center",
  "Дослідження":"Research",
  "Фундаментальні та прикладні наукові дослідження у різних галузях.":"Fundamental and applied research in various fields.",
  "Освіта":"Education",
  "Підготовка молодих вчених, аспірантів та студентів.":"Training of young scientists, PhD students and students.",
  "Партнерство":"Partnership",
  "Співпраця з українськими та міжнародними установами.":"Cooperation with Ukrainian and international institutions.",
  "Інновації":"Innovation",
  "Впровадження результатів досліджень у практику.":"Implementation of research results into practice.",
  "Про Науковий центр":"About the Research Center",
  "Науковий центр закладу вищої освіти — це структурний підрозділ, що координує науково-дослідну діяльність, сприяє розвитку науки та впровадженню інновацій.":"The Research Center of the higher education institution is a unit that coordinates research activities and promotes science and innovation.",
  "Ми об’єднуємо досвідчених науковців, молодих дослідників та студентів, створюючи умови для якісних досліджень, публікацій та міжнародної співпраці.":"We unite experienced scientists, young researchers and students, creating conditions for quality research, publications and international cooperation.",
  "Сучасна матеріально-технічна база":"Modern facilities and equipment",
  "Підтримка грантових проєктів":"Support for grant projects",
  "Робота з міжнародними партнерами":"Work with international partners",
  "Науковців":"Scientists","Публікацій за рік":"Publications per year","Грантових проєктів":"Grant projects","Партнерів":"Partners",
  "Наша місія":"Our mission",
  "Мета":"Goal","Створення середовища для якісних та конкурентоспроможних досліджень.":"Creating an environment for quality and competitive research.",
  "Бачення":"Vision","Бути центром тяжіння наукової думки регіону та країни.":"To be the center of scientific thought of the region and country.",
  "Цінності":"Values","Відкритість, академічна доброчесність та інноваційність.":"Openness, academic integrity and innovation.",
  "Фотогалерея центру":"Center photo gallery",
  "Натисніть на зображення, щоб переглянути його у збільшеному вигляді":"Click an image to view it enlarged",
  "Лабораторія":"Laboratory","Конференція":"Conference","Семінар":"Seminar","Бібліотека":"Library","Обладнання":"Equipment","Презентація":"Presentation","Публікації":"Publications","Експеримент":"Experiment","Нагороди":"Awards",
  "Усі новини центру":"All center news",
  "Актуальні події, анонси та досягнення. Використайте фільтр за категоріями":"Current events, announcements and achievements. Use the category filter",
  "Усі":"All","Досягнення":"Achievements","Гранти":"Grants","Навчання":"Training",
  "Читати далі →":"Read more →",
  "Зв’яжіться з нами":"Get in touch",
  "Запитання щодо співпраці, досліджень або навчання? Напишіть нам — ми відповімо якнайшвидше.":"Questions about cooperation, research or studies? Write to us — we will reply as soon as possible.",
  "Ім’я *":"Name *","Тема":"Subject","Повідомлення *":"Message *",
  "Дякуємо! Ваше повідомлення надіслано.":"Thank you! Your message has been sent.",
  "Меню":"Menu","Розділи":"Sections","Конференції":"Conferences",
  "Календар подій":"Events calendar","Найближчі заходи та події Наукового центру":"Upcoming activities and events of the Research Center",
  "Оберіть дату у календарі, щоб переглянути події цього дня":"Pick a date in the calendar to view events of that day",
  "Показати всі події":"Show all events","На обрану дату подій немає":"No events on the selected date"
};

function currentLang(){ return localStorage.getItem('lang') || 'uk'; }

function translate(lang){
  $('body').find('*').each(function(){
    if (this.children && this.children.length) return;          // тільки листові вузли
    var tn = this.tagName;
    if (tn === 'SCRIPT' || tn === 'STYLE' || tn === 'INPUT' || tn === 'IMG') return;
    var $el = $(this);
    if ($el.closest('[data-no-i18n]').length) return;           // не чіпати календар
    var uk = $el.attr('data-uk');
    if (uk === undefined) { uk = $.trim($el.text()); $el.attr('data-uk', uk); }
    if (uk === '') return;
    if (lang === 'en' && I18N[uk] !== undefined) $el.text(I18N[uk]);
    else $el.text(uk);
  });
  var phUk = 'Пошук новин...';
  $('#newsSearch').attr('placeholder', lang === 'en' ? 'Search news...' : phUk);
  $('html').attr('lang', lang);
}

$(function () {
  // ====== Внедрення пункту меню "Події" ======
  if (!$('.nav-link[href="events.html"]').length) {
    $('<li class="nav-item"><a class="nav-link" href="events.html">Події</a></li>')
      .insertAfter($('.nav-link[href="news.html"]').first().parent());
  }

  // ====== Внедрення перемикача мови та теми ======
  var controls = '<li class="nav-item d-flex align-items-center site-controls ms-lg-3">' +
    '<div class="lang-switch"><button type="button" data-lang="uk">UA</button><button type="button" data-lang="en">EN</button></div>' +
    '<button type="button" id="themeToggle" title="Тема"><i class="fa-solid fa-moon"></i></button>' +
    '</li>';
  $('.navbar-nav').append(controls);

  // —— Підсвічування активного пункту меню ——
  var path = location.pathname.split('/').pop() || 'index.html';
  $('.nav-link').each(function () {
    if ($(this).attr('href') === path) $(this).addClass('active');
  });

  // —— Поточний рік у футері ——
  $('#year').text(new Date().getFullYear());

  // ====== ТЕМА (темна/світла) ======
  function setTheme(t) {
    $('body').toggleClass('dark', t === 'dark');
    $('#themeToggle i').attr('class', t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon');
    localStorage.setItem('theme', t);
  }
  setTheme(localStorage.getItem('theme') || 'light');
  $(document).on('click', '#themeToggle', function () {
    setTheme($('body').hasClass('dark') ? 'light' : 'dark');
  });

  // ====== МОВА (UA/EN) ======
  function setLang(l) {
    translate(l);
    $('.lang-switch button').removeClass('active').filter('[data-lang="' + l + '"]').addClass('active');
    localStorage.setItem('lang', l);
  }
  setLang(currentLang());
  $(document).on('click', '.lang-switch button', function () {
    setLang($(this).data('lang'));
  });

  // —— Кнопка "нагору" ——
  var $toTop = $('#toTop');
  $(window).on('scroll', function () { $toTop.toggle($(this).scrollTop() > 350); });
  $toTop.on('click', function () { $('html,body').animate({ scrollTop: 0 }, 500); });

  // —— Допоміжне: формат дати ——
  var MON = ['січ.', 'лют.', 'бер.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'вер.', 'жовт.', 'лист.', 'груд.'];
  function formatDate(d) {
    var p = d.split('-');
    return parseInt(p[2], 10) + ' ' + MON[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }

  function newsCard(n) {
    return '' +
      '<article class="news-card" data-cat="' + n.category + '">' +
        '<div class="thumb" style="background-image:url(\'' + n.img + '\');background-size:cover;background-position:center">' +
          '<span class="badge-cat">' + n.category + '</span>' +
        '</div>' +
        '<div class="body">' +
          '<span class="date">' + formatDate(n.date) + '</span>' +
          '<h3>' + n.title + '</h3>' +
          '<p>' + n.text + '</p>' +
          '<a href="news.html" class="more">Читати далі →</a>' +
        '</div>' +
      '</article>';
  }

  // ====== НОВИНИ (AJAX) + ПОШУК + ФІЛЬТР ======
  var $newsHome = $('#newsHome');
  var $newsFull = $('#newsFull');

  if ($newsFull.length) {
    // поле пошуку
    $('#newsFilter').before('<div class="news-search"><i class="fa-solid fa-magnifying-glass"></i><input type="text" id="newsSearch" class="form-control" placeholder="Пошук новин..."></div>');
  }

  var curCat = 'Усі';
  function applyNewsFilter() {
    var q = $.trim(($('#newsSearch').val() || '')).toLowerCase();
    var shown = 0;
    $('#newsFull .news-card').each(function () {
      var $c = $(this);
      var okCat = (curCat === 'Усі' || $c.data('cat') === curCat);
      var txt = ($c.find('h3').text() + ' ' + $c.find('p').text()).toLowerCase();
      var okQ = (!q || txt.indexOf(q) > -1);
      var ok = okCat && okQ;
      $c.toggle(ok);
      if (ok) shown++;
    });
    $('#newsEmpty').toggle(shown === 0);
  }

  if ($newsHome.length || $newsFull.length) {
    $.getJSON('data/news.json')
      .done(function (data) {
        if ($newsHome.length) {
          $.each(data.slice(0, 10), function (i, n) { $newsHome.append(newsCard(n)); });
        }
        if ($newsFull.length) {
          $.each(data, function (i, n) { $newsFull.append(newsCard(n)); });
          $newsFull.after('<p id="newsEmpty" class="text-center text-muted" style="display:none">Нічого не знайдено</p>');
          var cats = ['Усі'];
          data.forEach(function (n) { if (cats.indexOf(n.category) === -1) cats.push(n.category); });
          $.each(cats, function (i, c) {
            $('#newsFilter').append('<button class="btn btn-sm me-2 mb-2 ' + (i === 0 ? 'btn-primary' : 'btn-outline-primary') + '" data-filter="' + c + '">' + c + '</button>');
          });
          $('#newsFilter').on('click', 'button', function () {
            curCat = $(this).data('filter');
            $('#newsFilter button').removeClass('btn-primary').addClass('btn-outline-primary');
            $(this).addClass('btn-primary').removeClass('btn-outline-primary');
            applyNewsFilter();
          });
          $('#newsSearch').on('keyup', applyNewsFilter);
        }
        translate(currentLang());
      })
      .fail(function () {
        $newsHome.add($newsFull).html('<p class="text-muted">Не вдалося завантажити новини. Відкрийте сайт через локальний сервер (http), а не як file://.</p>');
      });
  }

  // ====== СТОРІНКА ПОДІЙ (календар) ======
  if ($('#eventList').length) {
    function eventCard(e) {
      var p = e.date.split('-');
      return '<article class="event-card" data-date="' + e.date + '">' +
        '<div class="ev-date"><span class="d">' + parseInt(p[2], 10) + '</span><span class="m">' + MON[parseInt(p[1], 10) - 1] + '</span></div>' +
        '<div class="ev-body">' +
          '<span class="badge-cat">' + e.category + '</span>' +
          '<h3>' + e.title + '</h3>' +
          '<p class="ev-meta"><i class="fa-solid fa-clock"></i> ' + e.time + ' &nbsp; <i class="fa-solid fa-location-dot"></i> ' + e.place + '</p>' +
          '<p>' + e.text + '</p>' +
        '</div></article>';
    }
    function renderEvents(list) {
      var $l = $('#eventList').empty();
      if (!list.length) { $l.html('<p class="text-muted" data-uk="На обрану дату подій немає">На обрану дату подій немає</p>'); }
      else { list.forEach(function (e) { $l.append(eventCard(e)); }); }
      translate(currentLang());
    }
    $.getJSON('data/events.json').done(function (ev) {
      ev.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      var dates = ev.map(function (e) { return e.date; });
      if ($.fn.datepicker) {
        $('#eventCal').datepicker({
          dateFormat: 'yy-mm-dd',
          firstDay: 1,
          beforeShowDay: function (d) {
            var s = $.datepicker.formatDate('yy-mm-dd', d);
            return [true, dates.indexOf(s) > -1 ? 'ev-day' : '', ''];
          },
          onSelect: function (val) {
            renderEvents(ev.filter(function (e) { return e.date === val; }));
          }
        });
      }
      renderEvents(ev);
      $('#evShowAll').on('click', function () { renderEvents(ev); });
    });
  }

  // ====== ІНТЕРАКТИВНА КАРТА (Leaflet) ======
  if ($('#leafletMap').length && window.L) {
    var map = L.map('leafletMap').setView([49.5883, 34.5514], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '© OpenStreetMap'
    }).addTo(map);
    var pts = [
      [49.5883, 34.5514, '<b>Головний корпус</b><br>вул. Наукова, 12'],
      [49.5846, 34.5610, '<b>Науковий центр — лабораторії</b><br>корпус №3'],
      [49.5921, 34.5452, '<b>Наукова бібліотека</b><br>вул. Освітня, 5']
    ];
    pts.forEach(function (p) { L.marker([p[0], p[1]]).addTo(map).bindPopup(p[2]); });
  }

  // —— Галерея: лайтбокс на jQuery UI dialog ——
  if ($('#lightbox').length) {
    $('#lightbox').dialog({ autoOpen: false, modal: true, width: 'auto', resizable: false, show: { effect: 'fade', duration: 200 } });
    $('.gallery-grid').on('click', 'figure', function () {
      var src = $(this).find('img').attr('src');
      var cap = $(this).find('figcaption').text();
      $('#lightbox').html('<img src="' + src + '" style="max-width:80vw;max-height:75vh;border-radius:8px"><p class="text-center mt-2 mb-0">' + cap + '</p>');
      $('#lightbox').dialog('option', 'title', cap).dialog('open');
    });
  }

  // —— Валідація форми контактів ——
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    $(this).find('[required]').each(function () {
      if (!$.trim($(this).val())) { $(this).addClass('is-invalid'); ok = false; }
      else { $(this).removeClass('is-invalid'); }
    });
    var email = $('#cEmail').val();
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { $('#cEmail').addClass('is-invalid'); ok = false; }
    if (ok) {
      var msg = currentLang() === 'en' ? 'Thank you! Your message has been sent.' : 'Дякуємо! Ваше повідомлення надіслано.';
      $('#formMsg').removeClass('d-none').addClass('alert-success').text(msg);
      this.reset();
    }
  });

  // —— Анімація лічильників (about) ——
  if ($('.stat .num').length) {
    $('.stat .num').each(function () {
      var $t = $(this), end = parseInt($t.data('count'), 10);
      $({ v: 0 }).animate({ v: end }, { duration: 1500, step: function () { $t.text(Math.floor(this.v)); }, complete: function () { $t.text(end + '+'); } });
    });
  }
});
