module.exports = {
  dist: './dist',
  src: {
    sync: ['./dist/**'],
    stylus: [
      './node_modules/normalize.css/normalize.css',
      './lib/styles/main.styl'
    ],
    browserify: ['./lib/scripts/app.coffee'],
    jade: ['./lib/templates/**/*.jade'],
    images: ['./lib/graphics/**']
  },
  dest: {
    stylus: 'styles.css',
    browserify: 'scripts.js',
    images: './dist/graphics'
  }
};
