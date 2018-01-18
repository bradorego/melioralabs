var gulp = require('gulp'),
  sass = require('gulp-sass')
  serve = require('gulp-serve'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  minifyHTML = require('gulp-htmlmin'),
  del = require('del'),
  concat = require('gulp-concat');

const DEV_ROOT = './dev',
  PROD_ROOT = './deploy',
  JS_ROOT = `${DEV_ROOT}/js`,
  CSS_ROOT = `${DEV_ROOT}/css`,
  SCSS_ROOT = `${DEV_ROOT}/scss`;

// define tasks here
gulp.task('default', ['sass', 'concat-js', 'concat-css', 'serve'], function () {
  gulp.watch(`${SCSS_ROOT}/*.scss`, ['sass']);
  gulp.watch([`${CSS_ROOT}/*.css`, `!${CSS_ROOT}/all.css`], ['concat-css']);
  gulp.watch([`${JS_ROOT}/*.js`, `!${JS_ROOT}/all.js`], ['concat-js']);
});

gulp.task('concat-js', function () {
  del.sync([`${JS_ROOT}/all.js`]);
  return gulp.src([`${JS_ROOT}/jquery.js`, `${JS_ROOT}/wow.min.js`, `${JS_ROOT}/bootstrap.min.js`, './dev/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest(JS_ROOT));
});

gulp.task('sass', function () {
  // del.sync(['./dev/css/creative.css']);
  return gulp.src(`${SCSS_ROOT}/meliora.scss`)
    .pipe(sass())
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('concat-css', function () {
  del.sync([`${CSS_ROOT}/all.css`]);
  return gulp.src(`${CSS_ROOT}/*.css`)
    .pipe(concat('all.css'))
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('serve', serve({
  root: ['dev'],
  port: 8000
}));

gulp.task('serve-prod', ['serve-deploy']);

gulp.task('serve-deploy', serve({
  root: ['deploy'],
  port: 8001
}))


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

gulp.task('build', ['clean', 'sass', 'deploy-img', 'deploy-font', 'uglifyjs-deploy', 'uglifycss-deploy', 'minifyHTML'], function () { /// then copy stuff!
  gulp.src(`${DEV_ROOT}/portfolio/**.*`)
    .pipe(gulp.dest(`${PROD_ROOT}/portfolio`));
  gulp.src(`${DEV_ROOT}/robots.txt`)
    .pipe(gulp.dest(PROD_ROOT));
  return gulp.src(`${DEV_ROOT}/favicon.ico`)
    .pipe(gulp.dest(PROD_ROOT));
});
