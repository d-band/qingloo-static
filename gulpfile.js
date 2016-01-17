var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var pkg = require('./package.json');

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