# simplify modal

## install

install `@buuug7/simplify-modal` package via npm, and then import from `@buuug7/simplify-modal/index.css` file.

```
npm install @buuug7/simplify-modal
```

[Demo examples](https://buuug7.github.io/simplify/modal/index.html)

## usage

default

```html
<p>
  <button class="btn" id="openModal">open modal</button>
</p>
<div class="modal">
  <div class="modal-dialog">
    <div class="modal-header">
      <div class="title">My modal</div>
      <button class="close btn">close</button>
    </div>
    <div class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa
        doloribus, eveniet iure nulla ut! Accusantium asperiores, earum hic
        ipsum laborum minima molestiae nihil officiis quisquam rem repellat
        sunt. Ratione.
      </p>
    </div>
  </div>
</div>
```

use javascript open and close modal

```javascript
function addMask() {
  const mask = document.createElement('div');
  mask.className = 'mask show';
  document.body.appendChild(mask);
}

function removeMask() {
  const mask = document.querySelector('.mask');
  if (mask) {
    document.body.removeChild(mask);
  }
}

document.querySelector('#openModal').addEventListener('click', () => {
  openModal();
});

function openModal() {
  const modal = document.querySelector('.modal');
  const closeBtn = modal.querySelector('.close');

  addMask();
  modal.style.display = 'block';
  modal.classList.add('show');
  document.body.classList.add('modal-open');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    removeMask();
  });
}
```
