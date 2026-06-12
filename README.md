# Інформаційний портал «Науковий центр закладу вищої освіти»

Курсова робота з дисципліни «Веб-програмування та веб-дизайн».

- **Варіант:** 12 — «Науковий центр закладу вищої освіти»
- **Група:** 301-ТН
- **Виконав:** Литвин Назар Андрійович
- **Ступінь складності:** 1 (HTML / CSS / JavaScript / jQuery / jQuery UI / Bootstrap, Flexbox, Grid, media queries)

## Структура проєкту
```
portal/
├─ index.html        # Головна (шапка, меню, слайдер, 10 новин, футер)
├─ about.html        # Про сайт
├─ gallery.html      # Галерея картинок (лайтбокс)
├─ news.html         # Новини (фільтр за категоріями + пошук)
├─ events.html       # Події (календар jQuery UI)
├─ contacts.html     # Контакти (карта Google + інтерактивна карта Leaflet + форма)
├─ css/style.css     # Стилі (адаптивні, Flexbox/Grid, media queries, темна тема)
├─ js/main.js        # Логіка jQuery (AJAX, слайдер, фільтр, пошук, тема, мова, карта)
├─ data/news.json    # Дані новин (10 записів)
├─ data/events.json  # Дані подій
└─ assets/img/       # Зображення (логотип, слайди, галерея)
```

## Додатковий функціонал
- 🌗 Перемикач темної / світлої теми (зберігається у `localStorage`)
- 🔍 Пошук по новинах у реальному часі
- 📅 Сторінка подій з інтерактивним календарем (jQuery UI Datepicker)
- 🌐 Перемикач мов UA / EN
- 🗺️ Інтерактивна карта з маркерами корпусів (Leaflet + OpenStreetMap)
```
## Технології
- HTML5, CSS3 (Flexbox, Grid, media queries)
- JavaScript (ES5/ES6), jQuery 3.7, jQuery UI 1.13
- Bootstrap 5.3 (сітка, навігація, карусель)
- Font Awesome 6 (іконки)
- Google Maps (embed)
