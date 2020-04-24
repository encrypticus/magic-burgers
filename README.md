# Magic burgers

Magic burgers - это небольшая css-библиотека анимированных гамбургер-меню, вдохновленная [этой](https://github.com/jonsuh/hamburgers) библиотекой.
Также включает исходные sass-файлы. Библиотека модульная
и настраиваемая, что позволяет вам приготовить свой собственный гамбургер!



## Использование

1. С помощью команды ```git clone https://github.com/encrypticus/magic-burgers``` клонируйте репозиторий на свой компьютер или загрузите его как zip-архив. Затем в секции `<head>` на странице вашего сайта вставьте следующий код:

  ```html
  <link href="dist/hamburger.css" rel="stylesheet">
  ```
  
2. Добавьте на страницу следующую разметку:
  
  ```html
  <button class="hamburger">
    <span class="hamburger-inner">
      <span class="line-top">
        <span class="line-top-left"></span>
        <span class="line-top-right"></span>
      </span>
      <span class="line-center">
        <span class="line-center-left"></span>
        <span class="line-center-right"></span>
      </span>
      <span class="line-bottom">
        <span class="line-bottom-left"></span>
        <span class="line-bottom-right"></span>
      </span>
    </span>
  </button> 
  ```
3. Добавьте название класса того типа гамбургера, который вам нужен:

  ```html
  <button class="hamburger hamburger--arrowdown">
    <span class="hamburger-inner">
      <span class="line-top">
        <span class="line-top-left"></span>
        <span class="line-top-right"></span>
      </span>
      <span class="line-center">
        <span class="line-center-left"></span>
        <span class="line-center-right"></span>
      </span>
      <span class="line-bottom">
        <span class="line-bottom-left"></span>
        <span class="line-bottom-right"></span>
      </span>
    </span>
  </button> 
  ```
  Доступны следующие классы:

  ```
  hamburger--3d
  hamburger--alchemy
  hamburger--alchemy-r
  hamburger--arrowdown
  hamburger--arrowdown-r
  hamburger--arrowturn
  hamburger--arrowturn-r
  hamburger--collapse
  hamburger--juggler
  hamburger--magic
  hamburger--minify
  hamburger--shurikens
  hamburger--shurikens-r
  hamburger--shurikens-alt
  hamburger--shurikens-alt-r
  hamburger--simple
  hamburger--storm
  ```
  
  Примечание: -r классы - обратные варианты (например `hamburger--arrowturn` вращает гамбургер против часовой стрелки, в то время как 
  `hamburger--arrowturn-r` - по часовой)
  
4. Чтобы переключить состояние гамбургера, добавьте класс `is-active`:

  ```html
  <button class="hamburger hamburger--arrowdown is-active">
    <span class="hamburger-inner">
      <span class="line-top">
        <span class="line-top-left"></span>
        <span class="line-top-right"></span>
      </span>
      <span class="line-center">
        <span class="line-center-left"></span>
        <span class="line-center-right"></span>
      </span>
      <span class="line-bottom">
        <span class="line-bottom-left"></span>
        <span class="line-bottom-right"></span>
      </span>
    </span>
  </button> 
  ```
  
  Поскольку имя класса должно переключаться с помощью JavaScript, в директории `js/hamburger.js` находится файл `hamburger.js`, код в котором
  предназначен для этого. Просто подключите его на странице вашего сайта перед закрывающим тегом `</body>`, вставив следующий код:
  
  ```html
  <script src="js/hamburger.js"></script> 
  ```
  
  Также, если вы используете препроцессор pug, в директории `pug` находится файл `hamburger.pug` с примесью, создающей разметку для гамбургера.
  Подключив файл с примесью в своем коде, вы можете вызвать ее следующим образом:
  
  ```html
  +hamburger("class name")
  ```
    
  Где `class name` - это название класса того типа гамбургера, который вам нужен. Например:
  
  ```html
  +hamburger("3d")
  +hamburger("alchemy")
  +hamburger("juggler")
  +hamburger("shurikens-alt-r")
  ```
  
##Sass

Исходные файлы `.scss` доступны, если вы используете препроцессор Sass. Это дает вам гибкость и модульность.

1. Скопируйте файлы из директории `sass` в ваш проект

2. Импортируйте файл `hamburger.scss` внутри вашего файла:

  ```scss
  @import "path/to/hamburger";
  ```
  
3. Настройте свой гамбургер - удалите те типы в файле `hamburger.scss`, которые вы не планиуете использовать.

## Кастомизация

Чтобы переопределить настройки по умолчанию, объявите их перед импортом гамбургеров:

  ```scss
  $hamburger-layer-width: 30px;
  $hamburger-layer-height: 3px;
  $hamburger-layer-spacing: 5px;
  
  @import "hamburger";
  ```
  
Вы также можете создать отдельный файл (например, `hamburger-settings.scss`) с этими настройками, а затем импортировать его перед гамбургерами:

  ```scss
  @import "hamburger-settings"
  @import "hamburger";
  ```
  
Вот полный список настроек по умолчанию (находится в `sass/hamburger.scss`):

  ```scss
  $hamburger-layer-width        : 40px;
  $hamburger-layer-height       : 4px;
  $hamburger-layer-spacing      : 6px;
  $hamburger-padding            : 10px;
  $hamburger-layer-border-radius: 4px;
  $hamburger-layer-color        : #000;
  
  // Удалите или закомментироуйте типы гамбургеров, которые вам не нужны
  // чтобы они были исключены из скомпилированного CSS.
  $hamburger-types: (
    simple,
    collapse,
    storm,
    juggler,
    shurikens,
    shurikens-r,
    shurikens-alt,
    shurikens-alt-r,
    minify,
    arrowturn,
    arrowturn-r,
    arrowdown,
    arrowdown-r,
    magic,
    3d,
    alchemy,
    alchemy-r
  );
  ```
  
## Поддержка браузерами

Некоторые анимации используют CSSPerspective API, который не поддерживается в IE и Firefox.
Для подробной информации воспользуйтесь [caniuse.com](https://caniuse.com/#search=perspective).