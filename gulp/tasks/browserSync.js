var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../gulp-config');

gulp.task('browserSync', ['build'], function() {
  browserSync.init(config.src.sync, {
    open: false,
    notify: false,
    logConnections: false,
    server: {
      baseDir: config.dist
    }
  });
});
