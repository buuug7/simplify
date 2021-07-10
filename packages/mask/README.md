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
  let { instance, close } = showMask();
  
  // close mask 
  instance.addEventListener("click", () => {
    close();
  });
});

function showMask() {
  const mask = document.createElement("div");
  mask.className = "mask";
  document.body.appendChild(mask);
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    mask.classList.add("show");
  }, 0);

  const close = (() => {
    // remove mask after transition end
    mask.addEventListener("transitionend", (e) => {
      const target = e.target;
      const contains = target.classList.contains("hide");
      if (contains) {
        document.body.removeChild(mask);
        document.body.style.overflow = "auto";
      }
    });

    return () => {
      mask.classList.remove("show");
      mask.classList.add("hide");
    };
  })();

  return { instance: mask, close };
}

```
