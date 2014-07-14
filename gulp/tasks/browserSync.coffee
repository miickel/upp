gulp        = require "gulp"
browserSync = require "browser-sync"
config      = require "../gulp-config"

gulp.task "browserSync", ["build"], ->
  browserSync.init config.src.sync,
    open: false
    notify: false
    logConnections: false
    server:
      baseDir: config.dist
