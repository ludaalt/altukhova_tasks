'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const del = require('del');

gulp.task('clean', function() {
  return del(['dist/**']);  
});

gulp.task('styles', function(){
  return gulp.src('./src/styles/**/*.scss')
  .pipe(sass.sync())
  .pipe(gulp.dest('./src/styles/css/'))
  .pipe(gulp.src('./src/styles/css/**/*.css'))
  .pipe(concatCss('bundle.css'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('autoprefixer', function() {
  return gulp.src('dist/bundle.css')
  .pipe(autoprefixer({
    overrideBrowserslist:  ['last 2 versions'],
    cascade: false
  }))  
});

gulp.task('browserSync', function() {
  browserSync.init({
      server: {
          baseDir: "./src/index.html"
      }
  });
});


