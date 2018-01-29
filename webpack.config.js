const webpack = require("webpack");
const path = require('path');

const nodeConfig = {
  entry: './src/index.js',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    filename: './index.js'
  }
};

const webConfig = {
  entry: {
    'coordinatesparser': './src/index.js',
    'coordinatesparser.min': './src/index.js'
  },
  devtool: "source-map",
  target: 'web', // <=== can be omitted as default is 'web'
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};

module.exports = [nodeConfig, webConfig];
