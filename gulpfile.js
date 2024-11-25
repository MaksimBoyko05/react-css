const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
  return tsProject.src()
    .pipe(tsProject()) 
    .pipe(concat('bundle.js')) 
    .pipe(uglify())
    .pipe(gulp.dest('src/dist')); 
});

gulp.task('default', gulp.series('build'));
