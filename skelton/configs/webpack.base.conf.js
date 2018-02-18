const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
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
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public' },
    ]),
  ],
};
