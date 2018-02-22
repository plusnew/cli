const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
      path: __dirname + '/../dist',
      filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ],
    rules: []
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public' },
    ]),
  ],
};
