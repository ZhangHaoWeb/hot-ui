'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
    return gulp.src('./src/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./lib'))
});

gulp.task('copyfont', function() {
    return gulp.src('./src/fonts/**')
      .pipe(cssmin())
      .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('src/*.scss', ['build']);
});