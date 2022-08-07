const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');

const paths = {
  dest: {
    lib: 'dist/lib',
    esm: 'dist/esm',
    dist: 'dist/dist',
    css: 'dist/css',
    types: 'dist/types',
    commonStyles: 'dist/css/components',
  },
  styles: 'src/styles/index.scss',
  commonStyles: 'src/styles/commonStyle/index.scss',
  inputComponentStyles: ['src/styles/componentStyle/**.scss', '!src/styles/componentStyle/index.scss'],
  scripts: ['./src/**/**.{ts,tsx}', '!./src/components/**/*.stories.{ts,tsx}', '!./src/components/**/__tests__/**', '!./src/styles'],
  sdkSrc: 'src/**/*.{ts,tsx,js}',
  tsSrc: ['src/components/**/*.{ts,tsx}', '!src/components/**/*.stories.{ts,tsx}', '!src/components/**/__tests__/**']
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts (babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS () {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM () {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

/**
 * 编译Style
 * @param {boolean} isMin 是否压缩
 * @param {string} basename 文件名
 */
function compileStyle (isMin, basename) {
  if (isMin) {
    return gulp.src(paths.styles)
      .pipe(sass().on('error', sass.logError))
      .pipe(rename(function (path) {
        return {
          dirname: path.dirname,
          basename: basename,
          extname: ".css"
        };
      }))
      .pipe(gulp.dest(paths.dest.css))
  } else {
    return gulp.src(paths.styles)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(rename(function (path) {
        return {
          dirname: path.dirname,
          basename: basename,
          extname: ".min.css"
        };
      }))
      .pipe(gulp.dest(paths.dest.css))
  }
}

/**
 * 生成基础样式
 */
function buildBasicStylesMin () {
  return compileStyle(true, 'basic')
}
function buildBasicStylesMax () {
  return compileStyle(false, 'basic')
}

/**
 * 全量加载css
 */
function buildSpeedStylesMin () {
  return compileStyle(true, 'speed')
}
function buildSpeedStylesMax () {
  return compileStyle(false, 'speed')
}

/**
 * 按需加载组件样式
 */
function buildComponentStyle () {
  return gulp.src(paths.inputComponentStyles)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename(function (path) {
      return {
        dirname: path.dirname,
        basename: path.basename,
        extname: ".css"
      };
    }))
    .pipe(gulp.dest(paths.dest.commonStyles))
}


/**
 * 编译SDK
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileSDK (babelEnv, destDir) {
  process.env.BABEL_ENV = babelEnv;
  return gulp.src(paths.sdkSrc)
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(concat('speed.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destDir))
}

/**
 * SDK
 */
function compressionSdkCJS () {
  const { dest } = paths;
  return compileSDK('cjs', dest.lib)
}
function compressionSdkESM () {
  const { dest } = paths;
  return compileSDK('esm', dest.esm)
}

/**
 * 编译Type
 */
function buildTypes () {
  var tsProject = ts.createProject('tsconfig.json');
  return gulp.src(paths.tsSrc)
    .pipe(tsProject())
    .pipe(gulp.dest(paths.dest.types));
}


// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

const buildSDK = gulp.series(compressionSdkCJS, compressionSdkESM);

const buildStyle = gulp.parallel(buildBasicStylesMin, buildBasicStylesMax, buildSpeedStylesMax, buildSpeedStylesMin, buildComponentStyle);

// 整体并行执行任务
const build = gulp.parallel(buildTypes, buildScripts, buildSDK, buildStyle);

exports.build = build;

exports.default = build;