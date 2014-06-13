var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var config = require('../gulp-config');

gulp.task('images', function() {
  return gulp.src(config.src.images)
    .pipe(changed(config.dest.images))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest.images));
});
