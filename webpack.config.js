var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: { path: `${__dirname}/public/js`, filename: 'index.js' },
  externals: {
    "react": "React"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      }
    ]
  }
};
