// 默认配置文件
module.exports = {
  // 定义打包模式
  mode: 'production', //默认值，产品模式下，输出文件最小化
  // mode:'development', //开发模式，输出文件不会最小化
  // 定义打包的入口文件--通常选取依赖于很多其他文件的JS做入口
  entry: './src/js/index.js',
  // 定义打包得到的输出文件及其所在目录
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
    publicPath: ''
  },
  // 定义打包非js文件所用到的加载器(loader)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|ttf)$/i,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'img/[name].[ext]?[hash]',
              publicPath: 'dist/'
            }
          }
        ]
      }
    ]
  }
  // 定义扩展功能性插件
}