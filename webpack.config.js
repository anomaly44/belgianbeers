/**
 * Created by rob on 8/15/17.
 */

const path = require('path');
const config = require('./config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig],

  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: config.apiHost,
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        headers: {
          authorization: config.authorization,
          "content-type": "application/json"
        }
      }
    }
  }
};
