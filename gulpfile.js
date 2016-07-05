var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var watchify   = require('watchify');
var babel      = require('babelify');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');
var prefixer   = require('gulp-autoprefixer');
var cleancss   = require('gulp-clean-css');

/**
 *
 */
gulp.task('javascript:compile', () => {
    var bundler = browserify('./src/js/primer.js', {
        debug: true
    }).transform(babel);

    return bundler.bundle()
        .on('error', (err) => {})
        .pipe(source('primer.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

/**
 *
 */
gulp.task('javascript:uglify', () => {
    return gulp.src('dist/js/primer.js')
        .pipe(uglify())
        .pipe(rename('primer.min.js'))
        .pipe(gulp.dest('dist/js/'));
});

/**
 *
 */
gulp.task('sass:compile', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

/**
 *
 */
gulp.task('sass:minify', () => {
    return gulp.src('./dist/css/primer.css')
        .pipe(cleancss())
        .pipe(rename('primer.min.css'))
        .pipe(gulp.dest('./dist/css'));
});