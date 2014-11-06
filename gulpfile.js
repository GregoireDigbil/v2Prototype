'use strict';

var gulp = require('gulp');
var to5 = require('gulp-6to5');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

// do not transpile what is already supported
var to5ops = {
    blacklist: ['forOf', 'letScoping', 'generators']
};

gulp.task('to5', function() {
    return gulp.src('lib/**')
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(to5(to5ops))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('lib/**/*.js', ['to5']);
});

gulp.task('default', ['to5', 'watch']);
