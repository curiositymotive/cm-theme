// /gulp/tasks/watch.js
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    default: '<span style="color: grey">Running:</span>'
};

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future builds)
 */
 gulp.task('sass', function () {
     return gulp.src('assets/scss/main.scss')
         .pipe(sass({
             includePaths: ['sass']
         }))
         .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
         .pipe(gulp.dest('assets/css')).pipe(gulp.dest('css'))
         //browserSync.reload();
 });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch-scss', function () {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/**/*.scss'], ['sass', 'browsersync:reload']);
});

gulp.task('ghost', ['ghost:start'], function (callback) {  
  gulp.watch('*.hbs', ['browsersync:reload']);

  callback();
});