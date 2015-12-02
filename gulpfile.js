var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var server = require('gulp-server-livereload');
var rename = require("gulp-rename");

gulp.task('sass', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('example/sasshimi.css'))
    .pipe(gulp.dest('./'))
});

gulp.task('minify', function() {
  gulp.src('example/sasshimi.css')
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
  gulp.src('example/')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch',function() {
    gulp.watch('src/**/*.scss',['sass']);
});

gulp.task('default', ['sass', 'watch', 'webserver']);


