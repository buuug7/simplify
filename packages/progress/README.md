# simplify progress

## install

install `@buuug7/simplify-progress` package via npm, and then import from `@buuug7/simplify-progress/index.css` file.

```
npm install @buuug7/simplify-progress
```

[Demo examples](https://buuug7.github.io/simplify/progress/index.html)

## usage

```html
<div class="progress">
  <div class="bar" style="width: 50%"></div>
</div>
```

the progress bar width style specified the progress current percentage, you can change it dynamic by using javascript like below.

```javascript
function progress(selector) {
  let el = document.querySelector(selector);
  let percentage = 50;
  let id = setInterval(frame, 100);

  function frame() {
    if (percentage >= 100) {
      clearInterval(id);
    } else {
      percentage++;
      el.style.width = percentage + '%';
    }
  }
}
```
