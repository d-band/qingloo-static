var gulp = require('gulp');
var del = require('del');
var qiniu = require('gulp-qiniu');
var prompt = require('gulp-prompt');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var pkg = require('./package.json');
var join = require('path').join;

gulp.task('clean', function(cb) {
  del(['dist/**'], cb);
});

gulp.task('build', ['clean'], shell.task([
  'dool build'
]));

gulp.task('copy', ['build'], function() {
  return gulp.src([
    'c/img/**',
    'c/res/**'
  ], {
    base: '.'
  }).pipe(gulp.dest('dist'));
});

gulp.task('lib-js', ['copy'], function() {
  return gulp.src('lib/**/*.js', {
      base: '.'
    })
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lib-js']);

gulp.task('publish', ['lib-js'], function() {
  gulp.src('package.json').pipe(prompt.prompt([{
    type: 'input',
    name: 'accessKey',
    message: 'Please enter accessKey'
  }, {
    type: 'input',
    name: 'secretKey',
    message: 'Please enter secretKey'
  }, {
    type: 'input',
    name: 'bucket',
    message: 'Please enter bucket'
  }], function(res) {
    res.private = false;
    return gulp.src('dist/**').pipe(qiniu(res, {
      dir: join('/', pkg.name, pkg.version)
    }));
  }));
});