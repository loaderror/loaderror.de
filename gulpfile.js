var gulp = require("gulp");
var util = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var shell = require("gulp-shell");

var config = {
  scripts: "js/_*.js",
  styles: "scss/*.scss",
  styles_main: "scss/loaderror.scss",
  sass_error_message: "[node-sass] <%= error %> in <%= file %>",
  sass_include_paths: require("bourbon").includePaths.join(' -I ')
}

console.log(config.sass_include_paths)

gulp.task("default", ["scripts", "styles"]);

gulp.task("scripts", function () {
  return gulp.src(config.scripts)
    .pipe(concat("loaderror.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/"));
});

gulp.task("styles", function () {
  return gulp.src("")
    .pipe(shell('mkdir -p css'))
    .pipe(shell(`scss -I ${config.sass_include_paths} ${config.styles_main} css/loaderror.css`));
});

gulp.task("deploy", function () {
  return gulp.src("")
    .pipe(shell("tar -cvzf site.tar.gz *.php *.png *.ico css/* js/loaderror.js"))
    .pipe(shell("scp -P 5190 site.tar.gz loaderror@loaderror.de:~"))
    .pipe(shell("ssh loaderror@loaderror.de -p 5190 './deploy.sh' "))
});

gulp.task("watch", function () {
  gulp.watch(config.scripts, ["scripts"]);
  gulp.watch(config.styles, ["styles"]);
});
