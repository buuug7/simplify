const { src, dest, series } = require("gulp");
const through = require("through2");
const rimraf = require("rimraf");

const reg1 =
  /<link[^>]*?href\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?data-href\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>/gi;

function clean(cb) {
  rimraf("docs/**/*", (err) => {
    if (err) {
      console.log(err);
    }
    cb();
  });
}

function copyHtml() {
  return src(["packages/**/*.html"])
    .pipe(
      through.obj(function (file, enc, cb) {
        let content = file.contents.toString();
        content = content.replace(reg1, `<link rel="stylesheet" href="$2" />`);
        file.contents = Buffer.from(content);
        cb(null, file);
      })
    )
    .pipe(dest("docs"));
}

function copyIndex() {
  return src("README.md").pipe(dest("docs"));
}

module.exports = {
  generateDoc: series(clean, copyHtml, copyIndex),
  clean,
  copyHtml,
};
