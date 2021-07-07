# simplify alert

 <p>
    <a href="https://www.npmjs.com/package/@buuug7/simplify-alert?minimal=true">
        <img src="https://img.shields.io/npm/v/@buuug7/simplify-alert.svg" alt="npm version">
  	</a>
  	<a href="https://npmcharts.com/compare/@buuug7/simplify-alert?minimal=true">
  	    <img src="https://img.shields.io/npm/dm/@buuug7/simplify-alert.svg" alt="npm downloads"> 
  	</a>
  	<a href="#">
  	   <img src="https://img.shields.io/bundlephobia/min/@buuug7/simplify-alert.svg" alt="minified size"/>
  	</a>
 </p>

## Install

install `@buuug7/simplify-alert` package via npm, and then import from `@buuug7/simplify-alert/index.css` file.

```
npm install @buuug7/simplify-alert
```

[Demo examples](https://buuug7.github.io/simplify/alert/index.html)

## Usage

#### default

```html
<div class="alert">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias
  aspernatur deserunt distinctio dolorem, excepturi fugit harum in inventore
  iure, libero quis quod reprehenderit tempore voluptatibus! Dicta perspiciatis
  qui quia.
</div>
```

#### primary

```html
<div class="alert primary">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias
  aspernatur deserunt distinctio dolorem, excepturi fugit harum in inventore
  iure, libero quis quod reprehenderit tempore voluptatibus! Dicta perspiciatis
  qui quia.
</div>
```

#### with dismiss

```html
<div class="alert with-dismiss" id="dismissAlert">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias
  aspernatur deserunt distinctio dolorem, excepturi fugit harum in inventore
  iure, libero quis quod reprehenderit tempore voluptatibus! Dicta perspiciatis
  qui quia.
</div>
```

close dismiss alert use javascript

```javascript
const alert = document.querySelector('#dismissAlert');
alert.addEventListener('click', function (e) {
  alert.style.display = 'none';
});
```
