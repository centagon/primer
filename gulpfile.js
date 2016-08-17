/* eslint no-console: "off" */
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const babel = require('babelify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

/**
 *
 */
gulp.task('js:compile', () => {
    const bundler = browserify('./src/js/primer.js', {
        debug: true
    }).transform(babel);

    return bundler.bundle()
        .on('error', (err) => {
            console.log(err);
        })
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
gulp.task('js:uglify', () =>
    gulp.src('dist/js/primer.js')
        .pipe(uglify())
        .pipe(rename('primer.min.js'))
        .pipe(gulp.dest('dist/js/'))
);

/**
 *
 */
gulp.task('sass:compile', () =>
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'))
);

/**
 *
 */
gulp.task('sass:minify', () =>
    gulp.src('./dist/css/primer.css')
        .pipe(cleancss())
        .pipe(rename('primer.min.css'))
        .pipe(gulp.dest('./dist/css'))
);

gulp.task('default', () => {
    gulp.watch('src/scss/**/*.scss', ['sass:compile', 'sass:minify']);
    gulp.watch('src/js/**/*.js', ['js:compile', 'js:uglify']);
});