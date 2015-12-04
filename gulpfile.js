/*eslint-env node */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

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
    .pipe( gulp.dest('dist') );
});

gulp.task('default', ['lint', 'compress'], function() {

});
