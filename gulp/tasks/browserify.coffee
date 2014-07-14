gulp         = require "gulp"
source       = require "vinyl-source-stream"
watchify     = require "watchify"
browserify   = require "browserify"
bundleLogger = require "../util/bundleLogger"
handleErrors = require "../util/handleErrors"
config       = require "../gulp-config"

gulp.task "browserify", ->
  bundleMethod = if global.isWatching then watchify else browserify
  bundler = bundleMethod
    entries: config.src.browserify
    extensions: [".coffee"]

  bundle = ->
    bundleLogger.start()
    bundler
      .bundle debug: true
      .on "error", handleErrors
      .on "end", bundleLogger.end
      .pipe source config.dest.browserify
      .pipe gulp.dest config.dist

  bundler.on "update", bundle  if global.isWatching
  bundle()

