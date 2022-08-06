const { override, overrideDevServer } = require('customize-cra');

const CompressionWebpackPlugin = require('compression-webpack-plugin');


// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = __dirname + './lib';
    config.output.publicPath = './';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    )
  }
  return config;
}

module.exports = {
  webpack: override(
    addCustomize(),
  ),
}
