gulp   = require "gulp"
config = require "../gulp-config"

gulp.task "watch", [
  "setWatch"
  "browserSync"
], ->
  gulp.watch config.src.images, ["images"]
  gulp.watch config.src.stylus, ["myth"]
  gulp.watch config.src.jade,   ["jade"]

