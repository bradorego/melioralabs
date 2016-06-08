var gulp = require('gulp'),
  less = require('gulp-less')
  serve = require('gulp-serve'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  concat = require('gulp-concat');

// define tasks here
gulp.task('default', ['less', 'concat-js', 'concat-css', 'serve'], function () {
  gulp.watch('./dev/less/*.less', ['less']);
  gulp.watch(['./dev/css/*.css', '!./dev/css/all.css'], ['concat-css']);
  gulp.watch(['./dev/js/*.js', '!./dev/js/all.js'], ['concat-js']);
});

gulp.task('concat-js', function () {
  del.sync(['./dev/js/all.js']);
  return gulp.src(['dev/js/jquery.js', 'dev/js/wow.min.js', 'dev/js/bootstrap.min.js', './dev/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dev/js/'));
});

gulp.task('less', function () {
  // del.sync(['./dev/css/creative.css']);
  return gulp.src('./dev/less/meliora.less')
    .pipe(less())
    .pipe(gulp.dest('./dev/css/'));
});

gulp.task('concat-css', function () {
  del.sync(['./dev/css/all.css']);
  return gulp.src('./dev/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dev/css/'));
});

gulp.task('serve', serve({
  root: ['dev'],
  port: 8000
}));

gulp.task('serve-deploy', serve({
  root: ['deploy'],
  port: 8001
}))


gulp.task('uglifyjs-deploy', function () {
  del.sync(['./deploy/js']);
  return gulp.src('./dev/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('./deploy/js'));
});

gulp.task('uglifycss-deploy', function () {
  del.sync(['./deploy/css']);
  return gulp.src('./dev/css/all.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./deploy/css'));
});
gulp.task('deploy-img', function () {
  del.sync(['./deploy/img']);
  return gulp.src('./dev/img/**/*.*')
    .pipe(gulp.dest('./deploy/img'));
});

gulp.task('build', ['less', 'deploy-img', 'uglifyjs-deploy', 'uglifycss-deploy'], function () { /// then copy stuff!
  del.sync(['./deploy/index.html']);
  del.sync(['./deploy/favicon.ico']);
  gulp.src('./dev/favicon.ico')
    .pipe(gulp.dest('./deploy'));
  return gulp.src('./dev/index.html')
    .pipe(gulp.dest('./deploy'));
});
