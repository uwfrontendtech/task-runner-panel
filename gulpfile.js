/*eslint-env node */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('copy', function() {
  gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js','!node_modules/**','!dist/**'])
    .pipe(eslint({
      extends: 'eslint:recommended',
      envs: ['browser']
    }))
    .pipe(eslint.formatEach('compact', process.stderrr));
});

gulp.task('compress', function() {
  return gulp.src('scripts/*.js')
    .pipe( uglify() )
    .pipe( gulp.dest('dist/scripts') );
});

gulp.task('sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'copy', 'compress', 'sass'], function() {});

gulp.task('watch', function() {
  gulp.watch(['scripts/**/*.js','styles/**/*.scss'],['default']);
});
