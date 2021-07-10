# simplify drawer

 <p>
    <a href="https://www.npmjs.com/package/@buuug7/simplify-drawer?minimal=true">
        <img src="https://img.shields.io/npm/v/@buuug7/simplify-drawer.svg" alt="npm version">
  	</a>
  	<a href="https://npmcharts.com/compare/@buuug7/simplify-drawer?minimal=true">
  	    <img src="https://img.shields.io/npm/dm/@buuug7/simplify-drawer.svg" alt="npm downloads"> 
  	</a>
  	<a href="#">
  	   <img src="https://img.shields.io/bundlephobia/min/@buuug7/simplify-drawer.svg" alt="minified size"/>
  	</a>
 </p>

## Install

install `@buuug7/simplify-drawer` package via npm, and then import from `@buuug7/simplify-drawer/index.css` file.

```
npm install @buuug7/simplify-drawer
```

[Demo examples](https://buuug7.github.io/simplify/drawer/index.html)

## Usage



```html
<button id="show-drawer-1" class="btn" data-drawer="#drawer-1">
  show drawer
</button>

<div class="drawer" id="drawer-1">
  <div class="header">
    <h4 class="title">simplify drawer</h4>
    <button class="btn btn-close">close</button>
  </div>
  <div class="body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto
    beatae consectetur dolorem, doloremque dolores ducimus eaque earum, ex ipsam
    itaque iusto neque, quaerat quasi quisquam rem sit sunt voluptatem.
  </div>
</div>
```

interact with javascript, mask is from `@buuug7/simplify-mask` package

```javascript
initDrawer("#show-drawer-1");

function initDrawer(selector) {
  const showDrawerBtn = document.querySelector(selector);
  let mask;
  showDrawerBtn.addEventListener("click", () => {
    drawer.classList.remove("hide");
    drawer.classList.add("show");
    mask = showMask();
  });

  const drawer = document.querySelector(showDrawerBtn.dataset.drawer);
  const close = drawer.querySelector(".btn-close");

  close.addEventListener("click", () => {
    drawer.classList.add("hide");
  });

  drawer.addEventListener("transitionend", (e) => {
    const target = e.target;
    const contains = target.classList.contains("hide");
    if (contains) {
      drawer.classList.remove("hide");
      drawer.classList.remove("show");
      mask.close();
    }
  });
  return drawer;
}

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
