/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Dependencies
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sass = require('gulp-sass');


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Path variables
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var paths = {
  allJs: './src/**/*.js',
  // allStyles: './src/styles/styles.scss'
  allStyles: './src/styles/*{.scss,.css}'  // Alternatively, use one file and import all others into it. Remember what Michael said about using an underscore for the file name on the actual file, but excluding it from the top of the main style file where we import those files. Also, exclude the extension when importing. SASS knows the extension.
};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Tasks
  Concatenate and babel .js and .scss/.css files
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
gulp.task('js', function() {
  return gulp.src(paths.allJs)
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./builds/'));
});

gulp.task('sass', function() {
  return gulp.src(paths.allStyles)
  .pipe(concat('all.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./builds'));
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Default tasks
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
gulp.task('default', ['js','sass']);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Watch tasks
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
gulp.watch([paths.allStyles], ['sass']);
gulp.watch([paths.allJs], ['js']);















// FIN
