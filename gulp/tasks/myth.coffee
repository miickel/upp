gulp   = require "gulp"
concat = require "gulp-concat"
myth   = require "gulp-myth"
stylus = require "gulp-stylus"
config = require "../gulp-config"

gulp.task "myth", ->
  gulp
    .src config.src.stylus
    .pipe stylus()
    .pipe myth()
    .pipe concat config.dest.stylus
    .pipe gulp.dest config.dist

