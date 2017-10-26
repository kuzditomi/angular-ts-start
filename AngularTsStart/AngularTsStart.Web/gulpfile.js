var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var lessify = require('node-lessify');
var jasmine = require('gulp-jasmine');
var typescript = require('gulp-typescript');

var paths = {
    pages: ['app/**/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: "app/index.ts",
    cache: {},
    packageCache: {}
}).plugin(tsify))
    .transform(lessify)
.on('error', function (err) {
    console.log(err);
});

gulp.task('html:copy', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('build'));
});

gulp.task('html:watch', () => {
    return gulp.src(paths.pages)
        .pipe(watch(paths.pages))
        .pipe(gulp.dest('build'));
});

gulp.task('ts:watch', bundle);

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'))
        .on('error', function (err) {
            console.log(err);
        });
}

gulp.task('unit-test', () => {
    gulp.src('tests/unit-tests/**/*.ts')
        .pipe(typescript())
        .pipe(jasmine());
});

gulp.task('default', ['html:copy', 'html:watch', 'ts:watch']);

watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);