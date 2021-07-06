# simplify nav

## install

install `@buuug7/simplify-nav` package via npm, and then import the `@buuug7/simplify-nav/index.css` file.

```
npm install @buuug7/simplify-nav
```

## Usage

> navbar search input require the style of `@buuug7/simplify-form` package.

navbar default with primary color

```html
<div class="navbar">...</div>
```

white color

```html
<div class="navbar white">...</div>
```

white color with shadow

```html
<div class="navbar white shadow">...</div>
```

navbar detail

```html
<div class="navbar">
  <div class="container">
    <div class="left">
      <a class="toggle-btn" id="toggle-btn-1" href="#12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </a>

      <a href="#333" class="title">Simplify</a>
    </div>

    <div class="content">
      <ul>
        <li class="item active"><a href="#1">Music</a></li>
        <li class="item"><a href="#2">Movies</a></li>
        <li class="item"><a href="#3">Games</a></li>
      </ul>
    </div>

    <div class="right">
      <a class="item search-btn" id="search-btn-1" href="#123">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </a>
    </div>
  </div>

  <div class="expand-menu">
    <ul>
      <li><a href="#">Music</a></li>
      <li><a href="#">Movies</a></li>
      <li><a href="#">Games</a></li>
    </ul>
  </div>
  <div class="search-panel">
    <input class="form-control" placeholder="Search keyword" type="text" />
    <span class="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </span>
  </div>
</div>
```
