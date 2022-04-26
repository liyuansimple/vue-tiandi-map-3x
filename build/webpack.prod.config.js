const path = require('path');
// vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'production',
  entry: './components/index.js',	//打包的入口
  // 设置打包的出口
  output: {
    filename: '../index.js',
    path: path.resolve(__dirname, './'),
    library: 'VueTiandiMap',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
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
    new VueLoaderPlugin()
  ]
};

