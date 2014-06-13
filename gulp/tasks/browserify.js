var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var config = require('../gulp-config');

gulp.task('browserify', function() {
  var bundleMethod = global.isWatching ? watchify : browserify;
  var bundler = bundleMethod({
    entries: config.src.browserify,
    extensions: ['.coffee']
  });

  var bundle = function() {
    bundleLogger.start();

    return bundler
      .bundle({
        debug: true
      })
      .on('error', handleErrors)
      .pipe(source(config.dest.browserify))
      .pipe(gulp.dest(config.dist))
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    bundler.on('update', bundle);
  }

  return bundle();
});
