'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


gulp.task('clean', function() {
    return del(['./dist/**']);  
});

gulp.task('css', function() { 
return gulp.src('./src/sass/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css')) 
    .pipe(gulp.src('./src/css/*.css'))
      .pipe(concatCss('bundle.css'))
      .pipe(autoprefixer({
        overrideBrowserslist:  ['last 2 versions'],
        cascade: false
      }))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/style/'))
      .pipe(browserSync.stream());
});

gulp.task('copy', function() {
  return gulp.src('./src/index.html') 
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.src('./src/img/**'))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  
  gulp.watch('./src/sass/**/*.scss', gulp.parallel('css'));
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
});

gulp.task('default', gulp.parallel('clean', 'css', 'copy', 'serve'));


