var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify-es').default;
var browserSync = require('browser-sync').create();


let nunjucksRender = require('gulp-nunjucks-render');
let runSequence = require('run-sequence');
let del = require('del');
let minifyHTML = require('gulp-htmlmin');


const DEV_ROOT = `./dev`
const SCSS_ROOT = `${DEV_ROOT}/scss`;
const JS_ROOT = `${DEV_ROOT}/js`;
const CSS_ROOT = `${DEV_ROOT}/css`;
const PROD_ROOT = `./deploy`;
const VENDOR_ROOT = `${DEV_ROOT}/vendor`;


// Copy third-party dependencies from /node_modules into /vendor
gulp.task('vendor', function() {
  // boostrap scss
  gulp.src(['./node_modules/bootstrap/scss/**/*'])
    .pipe(gulp.dest(`${VENDOR_ROOT}/bootstrap/scss`));

  // Font Awesome
  gulp.src([
      './node_modules/font-awesome/**/*',
      '!./node_modules/font-awesome/{less,less/*}',
      '!./node_modules/font-awesome/{scss,scss/*}',
      '!./node_modules/font-awesome/.*',
      '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
    .pipe(gulp.dest(`${VENDOR_ROOT}/font-awesome`))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest(`${VENDOR_ROOT}/jquery`))

  // Vide.js
  return gulp.src(['./node_modules/vide/dist/*'])
    .pipe(gulp.dest(`${VENDOR_ROOT}/vide`))

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src(`${SCSS_ROOT}/**/*.scss`)
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(CSS_ROOT))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      `${CSS_ROOT}/*.css`,
      `!${CSS_ROOT}/*.min.css`
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(CSS_ROOT))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
      `${JS_ROOT}/*.js`,
      `!${JS_ROOT}/*.min.js`
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(JS_ROOT))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:minify']);

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Configure the browserSync task
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: DEV_ROOT
    },
    open: false
  });
});

gulp.task('serve-prod', ['serve-deploy']);
gulp.task('serve-deploy', () => {
  browserSync.init({
    server: {
      baseDir: PROD_ROOT
    }
  });
});

gulp.task('nunjucks', () => {
  return gulp.src(`${DEV_ROOT}/nunjucks/pages/**/*.njs`)
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: [`${DEV_ROOT}/nunjucks/templates`]
    }))
  // output files in app folder
  .pipe(gulp.dest(DEV_ROOT))
  .pipe(browserSync.reload({
    stream: true
  }));
});
gulp.task('minifyHTML', function() {
  return gulp.src(`${DEV_ROOT}/**/*.html`)
    .pipe(minifyHTML({
      "collapseWhitespace": true,
      "minifyCSS": true,
      "minifyJS": true,
      "removeComments": true
    }))
    .pipe(gulp.dest(PROD_ROOT));
});

gulp.task('copy-img', () => {
  return gulp.src(`${DEV_ROOT}/img/**`)
    .pipe(gulp.dest(`${PROD_ROOT}/img`));
});
gulp.task('copy-video', () => {
  return gulp.src(`${DEV_ROOT}/mp4/**`)
    .pipe(gulp.dest(`${PROD_ROOT}/mp4`));
});
gulp.task('copy-css', () => {
  return gulp.src(`${CSS_ROOT}/*.min.css`)
    .pipe(gulp.dest(`${PROD_ROOT}/css`));
});
gulp.task('copy-js', () => {
  return gulp.src(`${JS_ROOT}/*.min.js`)
    .pipe(gulp.dest(`${PROD_ROOT}/js`));
});
gulp.task('copy-vendor', () => {
  return gulp.src(`${VENDOR_ROOT}/**/*.min.*`)
    .pipe(gulp.dest(`${PROD_ROOT}/vendor`));
});
gulp.task('copy-font', () => {
  gulp.src(`${DEV_ROOT}/**/*.woff`)
    .pipe(gulp.dest(PROD_ROOT));
  gulp.src(`${DEV_ROOT}/**/*.woff2`)
    .pipe(gulp.dest(PROD_ROOT));
  gulp.src(`${DEV_ROOT}/**/*.eot`)
    .pipe(gulp.dest(PROD_ROOT));
  return gulp.src(`${DEV_ROOT}/**/*.ttf`)
    .pipe(gulp.dest(PROD_ROOT));
});



gulp.task('clean', () => {
  return del.sync(PROD_ROOT);
});

gulp.task('prebuild', () => {
  runSequence('vendor', 'nunjucks', 'css', 'js');
});
gulp.task('build', () => {
  runSequence('prebuild', 'clean', 'minifyHTML', 'copy-img', 'copy-css', 'copy-js', 'copy-vendor', 'copy-video', 'copy-font' )
  gulp.src(`${DEV_ROOT}/robots.txt`)
    .pipe(gulp.dest(PROD_ROOT));
  gulp.src(`${DEV_ROOT}/.htaccess`)
    .pipe(gulp.dest(PROD_ROOT));
  gulp.src(`${DEV_ROOT}/portfolio/**`, {
      dot: true
    })
    .pipe(gulp.dest(`${PROD_ROOT}/portfolio`));
  return gulp.src(`${DEV_ROOT}/favicon.ico`)
    .pipe(gulp.dest(PROD_ROOT));
});

gulp.task('default', ['dev']);

// Watch task
gulp.task('dev', ['vendor', 'nunjucks', 'css', 'js', 'serve'], function() {
  gulp.watch(`${DEV_ROOT}/nunjucks/**/*.njs`, ['nunjucks']);
  gulp.watch(`${SCSS_ROOT}/*.scss`, ['css']);
  gulp.watch(`${JS_ROOT}/*.js`, ['js']);
});
