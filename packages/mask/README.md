# simplify mask

 <p>
    <a href="https://www.npmjs.com/package/@buuug7/simplify-mask?minimal=true">
        <img src="https://img.shields.io/npm/v/@buuug7/simplify-mask.svg" alt="npm version">
  	</a>
  	<a href="https://npmcharts.com/compare/@buuug7/simplify-mask?minimal=true">
  	    <img src="https://img.shields.io/npm/dm/@buuug7/simplify-mask.svg" alt="npm downloads"> 
  	</a>
  	<a href="#">
  	   <img src="https://img.shields.io/bundlephobia/min/@buuug7/simplify-mask.svg" alt="minified size"/>
  	</a>
 </p>

## Install

install `@buuug7/simplify-mask` package via npm, and then import from `@buuug7/simplify-mask/index.css` file.

```
npm install @buuug7/simplify-mask
```

[Demo examples](https://buuug7.github.io/simplify/mask/index.html)

## Usage

interact with javascript

```javascript
document.querySelector("#openMask").addEventListener("click", () => {
  // disable scroll
  document.body.style.overflow = "hidden";
  showMask();
});

function showMask() {
  const mask = document.createElement("div");
  mask.className = "mask show";
  document.body.appendChild(mask);

  // optional
  // click mask to remove
  mask.addEventListener("click", () => {
    document.body.removeChild(mask);
  });
}
```
