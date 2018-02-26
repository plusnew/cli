const config = require('./webpack.base.conf.js');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const SOURCE_DIRECTORY = path.join(__dirname, '..', 'src');

const testfiles = [];

function getTestFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if(fs.statSync(filePath).isDirectory()) {
      getTestFiles(filePath);
    } else if(filePath.match(/.test.(tsx|ts)/)) {
      testfiles.push(filePath);
    }
  });
}

getTestFiles(SOURCE_DIRECTORY);

config.entry = testfiles;
config.output.filename = 'app.test.js';

config.plugins.push(
  new webpack.SourceMapDevToolPlugin({
    filename: null, // if no value is provided the sourcemap is inlined
    test: /\.(ts|tsx)($|\?)/i // process .js and .ts files only
  })
);

// config.module.rules.push({
//   enforce: 'post',
//   test: /\.(ts|tsx)$/,
//   loader: 'istanbul-instrumenter-loader',
//   include: path.resolve('src/'),
//   exclude: /\.test\.(ts|tsx)$/,
// });

module.exports = config;
