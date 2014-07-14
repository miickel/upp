gulp     = require "gulp"
changed  = require "gulp-changed"
imagemin = require "gulp-imagemin"
config   = require "../gulp-config"

gulp.task "images", ->
  gulp
    .src config.src.images
    .pipe changed config.dest.images
    .pipe imagemin()
    .pipe gulp.dest config.dest.images

