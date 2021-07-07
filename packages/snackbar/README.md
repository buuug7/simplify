# simplify snackbar

## install

install `@buuug7/simplify-snackbar` package via npm, and then import from `@buuug7/simplify-snackbar/index.css` file.

```
npm install @buuug7/simplify-snackbar
```

[Demo examples](https://buuug7.github.io/simplify/snackbar/index.html)

## usage

```html
<div class="snackbar" id="my-snackbar">
  <span class="text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </span>
  <span class="close">x</span>
</div>
```

use javascript open and close

```javascript
function showSnackbar() {
  let el = document.querySelector('#my-snackbar');
  el.classList.add('show');

  // add event to hidden snackbar
  el.querySelector('.close').addEventListener('click', () => {
    el.classList.remove('show');
  });
}
```
