const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('partials/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

function watchTask() {
    watch(['partials/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
