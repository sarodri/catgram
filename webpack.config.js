const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },

  plugins: [
   new htmlWebpackPlugin({
    template: 'src/index.html'
   })
  ],
  mode: 'development'  ,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  } 
}
