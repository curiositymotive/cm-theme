// /gulp/tasks/symlink.js
var gulp = require('gulp');  
var symlink = require('gulp-sym');

gulp.task('symlink', function () {  
  return gulp
    .src('/Users/pitman/Documents/Git/ghost/content/themes/cm-theme')
    .pipe(symlink('node_modules/ghost/content/themes/cm-theme', { force: true }));
});