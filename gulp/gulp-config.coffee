module.exports =

  dist: "./dist"

  src:
    sync: ["./dist/**"]
    browserify: ["./lib/scripts/app.coffee"]
    stylus: [
      "./node_modules/normalize.css/normalize.css"
      "./lib/styles/main.styl"
    ]
    jade: ["./lib/templates/**/*.jade"]
    images: ["./lib/graphics/**"]

  dest:
    stylus: "styles.css"
    browserify: "scripts.js"
    images: "./dist/graphics"
