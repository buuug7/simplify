# simplify alert

## Install

install `@buuug7/simplify-alert` package via npm, and then import the `@buuug7/simplify-alert/index.css` file.

```
npm install @buuug7/simplify-alert
```

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
alert.addEventListener('click', function(e) {
  alert.style.display = 'none';
});
```
