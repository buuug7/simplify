# simplify form

## install

install `@buuug7/simplify-form` package via npm, and then import the `@buuug7/simplify-form/index.css` file.

```
npm install @buuug7/simplify-form
```


[Demo examples](https://buuug7.github.io/simplify/form/index.html)

## Usage

input

```html
<input class="form-control" type="text" placeholder="placeholder" />
```

input with form text

```html
<input class="form-control" type="text" placeholder="email" />
<div id="emailHelp" class="form-text">
  We never share your email with other.
</div>
```

input disabled

```html
<input class="form-control" type="text" placeholder="placeholder" disabled />
```

input with label

```html
<div>
  <label class="form-label" for="username">username</label>
  <input
    class="form-control"
    type="text"
    id="username"
    placeholder="username"
  />
</div>
```

input file

```html
<input class="form-control" type="file" />
```

textarea

```html
<textarea class="form-control" placeholder="description"></textarea>
```

select

```html
<select class="form-select">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

select multiple

```html
<select class="form-select" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

select small

```html
<select class="form-select sm">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

Check

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label"> Default checkbox </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" checked />
  <label class="form-check-label"> Checked checkbox </label>
</div>
```

Check inline

```html
<div class="form-check inline">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label"> Default checkbox </label>
</div>
<div class="form-check inline">
  <input class="form-check-input" type="checkbox" value="" checked />
  <label class="form-check-label"> Checked checkbox </label>
</div>
```

Check disabled

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled />
  <label class="form-check-label"> Default checkbox </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled checked />
  <label class="form-check-label"> Checked checkbox </label>
</div>
```

Radio

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioName1" />
  <label class="form-check-label"> Default radio </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioName1" checked />
  <label class="form-check-label"> Default checked radio </label>
</div>
```

Radio disable

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioName2" disabled />
  <label class="form-check-label"> Default radio </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="radioName2"
    checked
    disabled
  />
  <label class="form-check-label"> Default checked radio </label>
</div>
```
