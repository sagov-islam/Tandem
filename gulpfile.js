const {src, dest, watch, parallel, series} = require('gulp');


const server = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const include = require('gulp-file-include');

function startServer() {
    server.init({
        server: {
            baseDir: 'dist/'
        },
        notify: false
    })
}

function styles() {
    return src(['app/scss/base/variables.scss',
                'app/scss/base/functions.scss',
                'app/scss/base/fonts.scss',
                'app/scss/base/helpers.scss',
                'app/scss/base/mixins.scss',
                'app/scss/base/reboot.scss',
                'app/scss/base/helpers.scss',
                'app/scss/blocks/**/*.scss',
                'app/scss/libs/**/*.scss',
                'app/scss/style.scss',
                'app/scss/base/adaptation.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(sass({}))
        .pipe(prefixer({
            overrideBrowserslist: ['last 5 version'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css')) 
        .pipe(server.stream())
}


function scripts() {
    return src(['app/js/libs/**/*.js', 'app/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(rename({
            suffix: '.min',
            dirname: ''
        }))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/js/'))
}


function html() {
    return src('app/*.html')
        .pipe(sourcemaps.init())
        .pipe(include())
        .pipe(htmlmin({}))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/'))
}

function images() {
    return src( 'app/images/**/*.+(jpg|svg|png)')
    .pipe(dest('dist/images'))
}

function fonts() {
    return src('app/fonts/**/*.+(otf|ttf|woff|woff2|svg|eot)')
    .pipe(dest('dist/fonts'))
}


function watcher() {
    watch(['app/html/**/*.html', 'app/*.html'], html).on('change', server.reload);
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js'], scripts).on('change', server.reload);
    watch(['app/images/**/*.+(jpg|svg|png)'], images).on('change', server.reload);
    watch(['app/fonts/**/*'], fonts).on('change', server.reload);
}

function deleteDist() {
    return del('dist');
}

exports.build = series(deleteDist, styles, html, images, scripts)
exports.default = parallel(startServer, watcher, series( styles, html, scripts, fonts));