const path = require('path');
// vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require('vue-loader')
// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './docs/main.js',	//打包的入口
  // 设置打包的出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',	//错误追踪工具
  //设置别名
  resolve: {
    alias: {
      '@': path.join(__dirname, '../docs'),
      '@components': path.join(__dirname, '../components')
    },
  },
  devServer: {
    static: '../dist'
  },
  //添加模块
  module: {
    rules: [
      {//设置.vue文件的解析规则
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {//设置css的解析规则
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {//设置css的解析规则
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {//设置加载图片资源的规则
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',	//配置输出后的html文件名（可携带目录）
      template: 'docs/public/index.html'	//配置模板
    })
  ]
};

