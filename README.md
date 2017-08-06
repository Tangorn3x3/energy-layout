# energy-layout
Верстка макета

# Технологии

В проекте использованы следующие технологии и библиотеки:
  - HTML, JQuery
  - LESS (http://lesscss.org/)
  - Mustache.JS (https://github.com/janl/mustache.js)
  - WebStorm 2017
  
Для компиляции LESS потребуется: 
  - установленный Node.js (https://nodejs.org/en/download/) 
  - плагин LESS ($ npm install -g less)
  
# Содержимое проекта
1. HTML-файлы (index.html и др.)
2. Файлы-шаблоны для Mustache.js (*.mustache)
3. JavaScript файлы с настройками partial-шаблонов и массивами данных :
```javascript
<script type="text/javascript" src="templates/shared/data.js" ></script>
<script type="text/javascript" src="templates/main/data.js" ></script>
<script type="text/javascript" src="templates/main/config.js" ></script>
```


Каждая страница имеет свой HTML-файл. В него подгружается основной шаблон Mustache.
В конфигурационном файле для каждого основного фаблона перечислены пути и наименования подчиненных шаблонов, которые используются при рендеринге страницы.

> **Обязательное условие:**
 в настроечном массиве должны быть перечислены все partials, включая те, которые используются внутри подключаемых шаблонов!


# Структура папок

**Assets** :

	img - (графика для шаблона)
	js - (кастомные скрипты)
	stylesheet  - (таблицы стилей LESS и CSS)
	vendor   - (сторонние JS-библиотеки)

**Templates**   - *(шаблоны и разметка)* : 

	branch   - (шаблоны, настройки и данные для страницы Руководство)
	main    - (шаблоны, настройки и данные для страницы Главная)
	posts    - (шаблоны для встроенных элементов, связанных с Постами)
	shared    - (шаблоны и данные общие для всего проекта: шапка, футер, навигация и т.д.) 
