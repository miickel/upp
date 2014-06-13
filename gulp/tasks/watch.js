var gulp = require('gulp');
var config = require('../gulp-config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.stylus, ['myth']);
  gulp.watch(config.src.jade, ['jade']);
});
