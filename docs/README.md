# simplify

A simplified, opinionated CSS component library. We only support the latest browser feature，and will not focus on
compatibility with old browsers, because we don't want to be bothered by the heavy burden of web history. Please forget
the fear of being dominated by outdated browsers.

一个简单, 有态度(固执己见)的 CSS 组件库. 只支持最新的浏览器功能, 不会把精力放在兼容旧浏览器上, 因为不想被沉重的 web 历史包袱所困扰. 请忘记被过时浏览器主宰的恐惧.

> Note: The framework only provide style and basic interaction with raw Javascript, how to integrate with other framework is depending on you. for example, if you use React or Vue, you need to wrap this as a component.

## before you start

We used the [bootstrap-reboot](https://github.com/twbs/bootstrap/blob/main/dist/css/bootstrap-reboot.css) as the default reset CSS to reset the browser default style. You can include it in your html before you start.

```html
<!-- bootstrap-reboot.css -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap-reboot.css" />
```

## usage

Install single package of simplify component library

```bash
npm install @buuug7/simplify-<component-name></component-name>
```

Install all the packages of simplify

```bash
npm install @buuug7/simplify
```

## usage with CDN

```html
<!-- bootstrap-reboot.css -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap-reboot.css" />

<!-- include all simplify packages css -->
<link rel="stylesheet" href="https://unpkg.com/@buuug7/simplify@latest/index.css" />

<!-- or include single component css as below -->
<link rel="stylesheet" href="https://unpkg.com/@buuug7/simplify-<component-name>@latest/index.css" />
```

## components

- [button](packages/button/index.html)
- [form](packages/form/index.html)
- [nav](packages/nav/index.html)
- [pagination](packages/pagination/index.html)
- [drawer](packages/drawer/index.html)
- [alert](packages/alert/index.html)
- [progress](packages/progress/index.html)
- [badge](packages/badge/index.html)
- [breadcrumb](packages/breadcrumb/index.html)
- [skeleton](packages/skeleton/index.html)
- [spinner](packages/spinner/index.html)
- [snackbar](packages/snackbar/index.html)
- [modal](packages/modal/index.html)
- [tag](packages/tag/index.html)
- [card](packages/card/index.html)
- [switch](packages/switch/index.html)
- [star-rating](packages/star-rating/index.html)
- [mask](packages/mask/index.html)

## TODO

- [x] add basic transition for every component

```

```
