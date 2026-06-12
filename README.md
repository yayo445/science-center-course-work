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

## Як запустити локально
Оскільки новини завантажуються через AJAX (`fetch`/`$.getJSON`), сайт потрібно відкривати через локальний HTTP-сервер, а не як `file://`:
```bash
cd portal
python3 -m http.server 8000
# відкрийте http://localhost:8000
```

## Розміщення на GitHub Pages (безкоштовно, з посиланням на сайт)

### Спосіб 1 — через веб-інтерфейс GitHub (найпростіший)
1. Зайдіть на https://github.com → **New repository** → назвіть, напр. `science-center`, зробіть **Public** → **Create repository**.
2. На сторінці репозиторію: **Add file → Upload files**.
3. Перетягніть **вміст** папки `portal/` (тобто сам `index.html`, папки `css`, `js`, `data`, `assets` — а НЕ саму папку `portal`). Натисніть **Commit changes**.
4. **Settings → Pages** → у розділі *Build and deployment* → *Source* оберіть **Deploy from a branch** → гілка **main**, папка **/ (root)** → **Save**.
5. Через ~1 хвилину вгорі з'явиться посилання виду:
   `https://<ваш-логін>.github.io/science-center/`

### Спосіб 2 — через Git (командний рядок)
```bash
cd portal
git init
git add .
git commit -m "Information portal: Scientific center"
git branch -M main
git remote add origin https://github.com/<ваш-логін>/science-center.git
git push -u origin main
```
Потім увімкніть Pages у **Settings → Pages** (гілка `main`, папка `/root`).

> ⚠️ Важливо: завантажуйте саме **вміст** папки `portal/`, щоб `index.html` опинився у корені репозиторію — інакше сайт відкриється за адресою `.../science-center/portal/`.
>
> GitHub Pages віддає сайт по HTTPS, тож AJAX-завантаження `news.json` та `events.json` працює коректно (на відміну від відкриття через `file://`).

## Розміщення на Netlify (альтернатива)
1. Створіть акаунт на https://www.netlify.com
2. **Add new site → Deploy manually** → перетягніть вміст папки `portal/`.
3. Або підключіть Git-репозиторій — deploy відбувається автоматично.

## Технології
- HTML5, CSS3 (Flexbox, Grid, media queries)
- JavaScript (ES5/ES6), jQuery 3.7, jQuery UI 1.13
- Bootstrap 5.3 (сітка, навігація, карусель)
- Font Awesome 6 (іконки)
- Google Maps (embed)
