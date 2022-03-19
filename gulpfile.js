const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
    return src('partials/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'));
}

function watchTask() {
    watch(['partials/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
