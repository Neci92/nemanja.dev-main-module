const url = 'http://nemanja.local/';

const { series, src, dest, watch, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");


function styles() {
    return src('src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(cleanCss({ compatibility: 'ie11' }))
        .pipe(sourcemaps.write())
        .pipe(dest('./nemanja.dev/assets/css'))
        .pipe(browserSync.stream());
}

function typescript() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(dest('./nemanja.dev/assets/js'))
        .pipe(browserSync.stream());;
}

function scripts() {
    return src(['src/js/app.js'])
        .pipe(webpack(require('./webpack.config')))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(dest('./nemanja.dev/assets/js'))
        .pipe(browserSync.stream());
}

function optImages() {
    return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(imagemin())
        .pipe(dest('nemanja.dev/assets/images'));
}

function copyImages() {
    return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(dest('nemanja.dev/assets/images'));
}

function cleanImages() {
    return src('nemanja.dev/assets/images', {
        read: false,
        allowEmpty: true
    }).pipe(clean());
}

function watchForChanges() {
    browserSync.init({
        proxy: url
    });
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js', scripts);
    watch('src/js/**/*.ts', typescript);
    watch("**/*.php").on('change', browserSync.reload);
    watch('src/images/**/*.{jpg,jpeg,png,svg,gif}').on('change', function () {
        copyImages();
        browserSync.reload();
    });
}

exports.watch = series(cleanImages, parallel(scripts, typescript, styles, copyImages), watchForChanges);
exports.default = series(cleanImages, parallel(scripts, typescript, styles, optImages));
