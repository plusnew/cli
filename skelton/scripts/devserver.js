#! /usr/bin/env node

const http    = require('http');
const path    = require('path');
const fs      = require('fs');
const webpack = require('webpack');

const PORT = 3000;
const WEBPACK_CONFIG_PATH = path.join(__dirname, '..', 'configs', 'webpack.base.conf.js');

const INDEX_FILE = 'index.html';
const ERROR_NOT_FOUND = { code: 404, message: 'not found' };

const log = (err, stat) => console.log(stat.toString({colors: true}));
const webpackConfig = require(WEBPACK_CONFIG_PATH);
const compiler = webpack(webpackConfig, log);
compiler.watch({}, log);

const server = http.createServer((request, response) => {
  let target = path.join(compiler.outputPath, request.url);
  if (path.parse(target).ext === '') {
    target = path.join(target, INDEX_FILE);
  }

  if (fs.existsSync(target)) {
    response.end(fs.readFileSync(target));
  } else {
    response.statusCode = ERROR_NOT_FOUND.code;
    response.end(ERROR_NOT_FOUND.message);
  }
});

server.listen(PORT);
