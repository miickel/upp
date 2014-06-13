var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../gulp-config');

gulp.task('jade', function() {
  return gulp.src(config.src.jade)
    .pipe(jade({
      locals: {
        dev: true
      }
    }))
    .pipe(gulp.dest(config.dist));
});
