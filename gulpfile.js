'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var log = require('fancy-log');
var eslint = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src(['./lib/client.js', './lib/request_helper.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', function() {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './lib/client.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('giantswarm.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', log.error)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});
