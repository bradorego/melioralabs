var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  minifyHTML = require('gulp-htmlmin'),
  del = require('del'),
  concat = require('gulp-concat');
let nunjucksRender = require('gulp-nunjucks-render');
let browserSync = require('browser-sync').create();
let runSequence = require('run-sequence');


const DEV_ROOT = './dev',
  PROD_ROOT = './deploy',
  JS_ROOT = `${DEV_ROOT}/js`,
  CSS_ROOT = `${DEV_ROOT}/css`,
  SCSS_ROOT = `${DEV_ROOT}/scss`;

// define tasks here
gulp.task('default', ['sass', 'nunjucks', 'concat-js', 'concat-css', 'serve'], function () {
  gulp.watch(`${DEV_ROOT}/nunjucks/**/*.njs`, ['nunjucks']);
  gulp.watch(`${SCSS_ROOT}/*.scss`, ['sass']);
  gulp.watch([`${CSS_ROOT}/*.css`, `!${CSS_ROOT}/all.css`], ['concat-css']);
  gulp.watch([`${JS_ROOT}/*.js`, `!${JS_ROOT}/all.js`], ['concat-js']);
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

gulp.task('sass', function () {
  return gulp.src(`${SCSS_ROOT}/meliora.scss`)
    .pipe(sass())
    .pipe(gulp.dest(CSS_ROOT))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('concat-js', function () {
  del.sync([`${JS_ROOT}/all.js`]);
  return gulp.src([`${JS_ROOT}/jquery.js`, `${JS_ROOT}/wow.min.js`, `${JS_ROOT}/bootstrap.min.js`, './dev/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest(JS_ROOT));
});

gulp.task('concat-css', function () {
  del.sync([`${CSS_ROOT}/all.css`]);
  return gulp.src(`${CSS_ROOT}/*.css`)
    .pipe(concat('all.css'))
    .pipe(gulp.dest(CSS_ROOT));
});

// Configure the browserSync task
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: DEV_ROOT,
    },
    port: 8000
  })
})

gulp.task('serve-deploy', function() {
  browserSync.init({
    server: {
      baseDir: PROD_ROOT,
    },
    port: 8001
  })
})

gulp.task('serve-prod', ['serve-deploy']);

gulp.task('uglifyjs-deploy', function () {
  del.sync([`${PROD_ROOT}/js`]);
  return gulp.src(`${JS_ROOT}/all.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${PROD_ROOT}/js`));
});

gulp.task('uglifycss-deploy', function () {
  del.sync([`${PROD_ROOT}/css`]);
  return gulp.src(`${CSS_ROOT}/all.css`)
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${PROD_ROOT}/css`));
});
gulp.task('deploy-img', function () {
  del.sync([`${PROD_ROOT}/img`]);
  return gulp.src(`${DEV_ROOT}/img/**/*.*`)
    .pipe(gulp.dest(`${PROD_ROOT}/img`));
});
gulp.task('deploy-font', function () {
  del.sync([`${PROD_ROOT}/fonts`]);
  return gulp.src(`${DEV_ROOT}/fonts/**/*.*`)
    .pipe(gulp.dest(`${PROD_ROOT}/fonts`));
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
});;

gulp.task('clean', function () {
  return del.sync(PROD_ROOT);
});

gulp.task('deploy', ['build']); /// alias, because I know I'll do both

gulp.task('prebuild', ['nunjucks', 'sass', 'concat-js', 'concat-css']);
gulp.task('deploy-copy', [], () => {
  gulp.src(`${DEV_ROOT}/portfolio/**.*`)
    .pipe(gulp.dest(`${PROD_ROOT}/portfolio`));
  gulp.src(`${DEV_ROOT}/robots.txt`)
    .pipe(gulp.dest(PROD_ROOT));
  return gulp.src(`${DEV_ROOT}/favicon.ico`)
    .pipe(gulp.dest(PROD_ROOT));
});
gulp.task('build', [], function () { /// then copy stuff!
  runSequence('prebuild', 'clean', 'deploy-img', 'deploy-font', 'uglifyjs-deploy', 'uglifycss-deploy', 'minifyHTML', 'deploy-copy');
});
