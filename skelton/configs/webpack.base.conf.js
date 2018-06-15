const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: ['./src/index.tsx'],
  mode: 'development',
  output: {
      path: __dirname + '/../dist',
      filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin()],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public' },
    ]),
  ],
};
