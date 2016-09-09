const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

var paths = {
  allJs: './src/**/*.js',
  allStyles: './src/styles/*{.scss,.css}'  //Alternatively, use one file and import all others into it. Remember what Michael said about using an underscore for the file name on the actual file, but excluding it from the 'hub' style file where we import those files. Also, exclude the extension. SASS knows the extension.
};

gulp.task('js', function() {
  return gulp.src(paths.allJs)
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./builds/'));
});

gulp.task('default', ['js']);

gulp.watch([paths.allJs], ['js']);

gulp.task('sass', function() {
  return gulp.src(paths.allStyles)
  .pipe(concat('all.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./builds'));
});














// FIN
