// gulpfile.js
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', {recurse: true});

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span>'
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
 });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/**/*.scss'], ['sass']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch']);