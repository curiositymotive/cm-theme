// /gulp/tasks/ghost.js
var gulp = require('gulp');  
var ghost = require('ghost');  
var path = require('path');

var g;

gulp.task('ghost:start', function (callback) {  
    g = ghost({
        config: path.join(__dirname, '../ghost-dev-config.js')
    });

    g.then(function (ghostServer) {
        ghostServer.start();
    });

    callback();
});