// /gulp/tasks/symlink.js
var gulp = require('gulp');  
var symlink = require('gulp-sym');

gulp.task('symlink', function () {  
  return gulp
    // set to the root of this repo
    .src('/YOURPATH/cm-theme')
    .pipe(symlink('node_modules/ghost/content/themes/cm-theme', { force: true }));
});

gulp.task('symlink-2', function () {  
  return gulp
    // set to your local images path  
    .src('/YOURPATH/cm-theme/ghost/content/images')
    .pipe(symlink('node_modules/ghost/content/images', { force: true }));
});