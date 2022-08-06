const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const through2 = require('through2');
const rename = require('gulp-rename');

const paths = {
  dest: {
    lib: 'lib',
    esm: 'esm',
    dist: 'dist',
  },
  styles: './src/styles/index.scss',
  scripts: ['./src/components/**/*.{ts,tsx}', '!./src/components/**/*.stories.{ts,tsx}', '!./src/components/**/__tests__/**'],
};

function cssInjection (content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

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
    .pipe(
      through2.obj(function z (file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
          file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      }),
    )
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
 * 公共样式——压缩
 */
function buildCommonStylesMin () {
  return gulp.src('src/styles/commonStyle/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename(function (path) {
      return {
        dirname: path.dirname,
        basename: 'commonStyle',
        extname: ".min.css"
      };
    }))
    .pipe(gulp.dest('./css'))
}

/**
 * 公共样式——未压缩
 */
function buildCommonStylesMax () {
  return gulp.src('src/styles/commonStyle/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function (path) {
      return {
        dirname: path.dirname,
        basename: 'commonStyle',
        extname: ".css"
      };
    }))
    .pipe(gulp.dest('./css'))
}



// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行执行任务
const build = gulp.parallel(buildScripts, buildCommonStylesMin, buildCommonStylesMax);

exports.build = build;

exports.default = build;