gulp   = require "gulp"
jade   = require "gulp-jade"
config = require "../gulp-config"

gulp.task "jade", ->
  gulp
    .src config.src.jade
    .pipe jade
      locals:
        dev: true
    .pipe gulp.dest config.dist

