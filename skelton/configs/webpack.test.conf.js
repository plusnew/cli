const config = require('./webpack.base.conf.js');
const path = require('path');
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

config.entry = config.entry.concat(...testfiles);
config.output.filename = 'app.test.js'

module.exports = config;
