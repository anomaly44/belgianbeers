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
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  plugins: [HtmlWebpackPluginConfig],

  devServer: {
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
