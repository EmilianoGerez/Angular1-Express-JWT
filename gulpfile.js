var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

var gulpconfig = require('./gulpconfig');

gulp.task('js-lint', function() {
    gulp
        .src(gulpconfig.jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(browserSync.stream());
});

gulp.task('angular-module-build', ['angular-app-build'], function() {
    gulp.src(gulpconfig.angularModulesFiles)
        .pipe(concat('app-modules.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./client/build'));
});

gulp.task('angular-app-build', function() {
    gulp.src(gulpconfig.angularFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('app-files.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./client/build'))
        .pipe(browserSync.stream())
        .pipe(sourcemaps.write())
        .pipe(browserSync.stream());
});


gulp.task('clean-build', function(cb) {
    rimraf('./client/build', cb);
});

gulp.task('sass', function() {
    return gulp
        .src(gulpconfig.sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest(gulpconfig.outputCss))
        .pipe(sourcemaps.write(gulpconfig.outputCss))
        .pipe(browserSync.stream());
});

gulp.task('express-server', ['nodemon'], function() {
    browserSync.init({
        proxy: {
            target: "http://localhost:3000"
        },
        port: '5000'
    });
});

gulp.task('nodemon', function(cb) {
    var started = false;

    return nodemon({
        script: './server/bin/www'
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('watch', ['express-server'], function() {
    // gulp.watch(gulpconfig.jsFiles, ['js-lint']);
    gulp.watch(gulpconfig.angularModulesFiles, ['angular-module-build']);
    gulp.watch(gulpconfig.angularFiles, ['angular-app-build']);
    gulp.watch(gulpconfig.sassFiles, ['sass']);
    gulp.watch(gulpconfig.htmlFiles).on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'angular-module-build', 'watch']);