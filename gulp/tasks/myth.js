var gulp = require('gulp');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var stylus = require('gulp-stylus');
var config = require('../gulp-config');

gulp.task('myth', function() {
  return gulp.src(config.src.stylus)
    .pipe(stylus())
    .pipe(myth())
    .pipe(concat(config.dest.stylus))
    .pipe(gulp.dest(config.dist));
});
