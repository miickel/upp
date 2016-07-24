var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var p = require('gulp-load-plugins')();
var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');

/**
 * Paths & config
 */

const CONFIG = {

  src: {
    assets: './lib/assets/**/*',
    pug: './lib/templates/**/*.jade',
    stylus: './lib/styles/index.styl'
  },

  dest: {
    dist: './dist'
  },

  // plugin options
  options: {
    pug: {
      pretty: true,
      locals: {}
    },
    stylus: {
      'include-css': true,
      use: [
        nib(),
        rupture(),
        jeet()
      ]
    }
  }

};

/**
 * Default tasks & watch
 */

gulp.task('default', ['serve']);
gulp.task('build', ['copy', 'stylus', 'pug']);
gulp.task('copy', ['copy-normalize', 'copy-assets']);
gulp.task('serve', ['build'], () => {
  browserSync.init({
    online: false,
    open: false,
    reloadOnRestart: true,
    notify: false,
    server: {
      baseDir: CONFIG.dest.dist
    }
  });

  gulp.watch(CONFIG.src.pug, ['pug']);
  gulp.watch(CONFIG.src.stylus, ['stylus']);
  gulp.watch(CONFIG.src.assets, browserSync.reload);
  gulp.watch('./dist/*.html', browserSync.reload);
});

/**
 * Tasks
 */

gulp.task('copy-assets', () => {
  return gulp
    .src(CONFIG.src.assets)
    .pipe(gulp.dest(CONFIG.dest.dist));
});

gulp.task('copy-normalize', () => {
  return gulp
    .src('./node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest(CONFIG.dest.dist));
});

gulp.task('pug', () => {
  return gulp
    .src(CONFIG.src.pug)
    .pipe(p.pug(CONFIG.options.pug))
    .pipe(gulp.dest(CONFIG.dest.dist));
});

gulp.task('stylus', () => {
  return gulp
    .src(CONFIG.src.stylus)
    .pipe(p.sourcemaps.init())
    .pipe(p.stylus(CONFIG.options.stylus))
    .pipe(p.sourcemaps.write())
    .pipe(gulp.dest(CONFIG.dest.dist))
    .pipe(browserSync.stream());
});
