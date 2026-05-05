const { src, dest, series } = require("gulp");
const through = require("through2");
const fs = require("fs");

const reg1 =
  /<link[^>]*?href\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?data-href\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>/gi;

/**
 * 清理输出目录
 */
function clean(cb) {
  fs.rmSync("docs", { recursive: true, force: true });
  cb();
}

/**
 * 复制并处理 HTML 文件
 */
function copyHtml() {
  return src(["packages/**/*.html"])
    .pipe(
      through.obj(function (file, enc, cb) {
        let content = file.contents.toString();
        content = content.replace(reg1, `<link rel="stylesheet" href="$2" />`);
        file.contents = Buffer.from(content);
        cb(null, file);
      }),
    )
    .pipe(dest("docs"));
}

/**
 * 复制 README.md 到 docs 目录
 */
function copyIndex() {
  return src("README.md").pipe(dest("docs"));
}

module.exports = {
  generateDoc: series(clean, copyHtml, copyIndex),
  clean,
  copyHtml,
};
