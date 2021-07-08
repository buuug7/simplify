# simplify switch

 <p>
    <a href="https://www.npmjs.com/package/@buuug7/simplify-switch?minimal=true">
        <img src="https://img.shields.io/npm/v/@buuug7/simplify-switch.svg" alt="npm version">
  	</a>
  	<a href="https://npmcharts.com/compare/@buuug7/simplify-switch?minimal=true">
  	    <img src="https://img.shields.io/npm/dm/@buuug7/simplify-switch.svg" alt="npm downloads"> 
  	</a>
  	<a href="#">
  	   <img src="https://img.shields.io/bundlephobia/min/@buuug7/simplify-switch.svg" alt="minified size"/>
  	</a>
 </p>

## Install

install `@buuug7/simplify-switch` package via npm, and then import from `@buuug7/simplify-switch/index.css` file.

```
npm install @buuug7/simplify-switch
```

[Demo examples](https://buuug7.github.io/simplify/switch/index.html)

## Usage

```html
<div class="switch"></div>
<div class="switch active"></div>
```

use javascript

```javascript
document.querySelectorAll(".switch").forEach(function (node) {
  node.addEventListener("click", function (e) {
    const t = e.target.closest(".switch");
    const active = t.classList.contains("active");
    active ? t.classList.remove("active") : t.classList.add("active");
  });
});
```
