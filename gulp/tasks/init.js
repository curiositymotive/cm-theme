// /gulp/tasks/init.js
var gulp = require('gulp');  
var replace = require('gulp-replace');

gulp.task('init', ['symlink'], function () {  
  return gulp
    .src('node_modules/ghost/core/server/data/default-settings.json', {base : './'})
    .pipe(replace(/casper/g, 'cm-theme'))
    .pipe(gulp.dest('./'));
});