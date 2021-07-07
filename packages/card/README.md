# simplify card

 <p>
    <a href="https://www.npmjs.com/package/@buuug7/simplify-card?minimal=true">
        <img src="https://img.shields.io/npm/v/@buuug7/simplify-card.svg" alt="npm version">
  	</a>
  	<a href="https://npmcharts.com/compare/@buuug7/simplify-card?minimal=true">
  	    <img src="https://img.shields.io/npm/dm/@buuug7/simplify-card.svg" alt="npm downloads"> 
  	</a>
  	<a href="#">
  	   <img src="https://img.shields.io/bundlephobia/min/@buuug7/simplify-card.svg" alt="minified size"/>
  	</a>
 </p>

## Install

install `@buuug7/simplify-card` package via npm, and then import from `@buuug7/simplify-card/index.css` file.

```
npm install @buuug7/simplify-card
```

[Demo examples](https://buuug7.github.io/simplify/card/index.html)

## Usage

default

```html
<div class="card" style="width: 20rem; margin-bottom: 2rem">
  <div class="header">Lorem ipsum dolor sit amet</div>
  <div class="body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
    architecto at dolores illum maiores nam nobis repudiandae suscipit veniam?
    Beatae blanditiis dicta error impedit nam porro quod sint, ullam?
  </div>
</div>
```

with header

```html
<div class="card" style="width: 20rem; margin-bottom: 2rem">
  <div class="header">Lorem ipsum dolor sit amet</div>
  <div class="body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
    architecto at dolores illum maiores nam nobis repudiandae suscipit veniam?
    Beatae blanditiis dicta error impedit nam porro quod sint, ullam?
  </div>
  <div class="footer">2 days ago</div>
</div>
```

with img

```html
<div class="card" style="width: 20rem; margin-bottom: 2rem">
  <div class="header with-img">
    <img src="./with-img.jpg" alt="" />
  </div>
  <div class="body">
    <h4>Lorem ipsum dolor sit amet.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
      architecto at dolores illum maiores nam nobis repudiandae suscipit veniam?
      Beatae blanditiis dicta error impedit nam porro quod sint, ullam?
    </p>
    <div>
      <button class="btn">View</button>
    </div>
  </div>
</div>
```
