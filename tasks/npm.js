const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEPENDENCIES = ['plusnew'];
const DEV_DEPENDENCIES = [
  'typescript',
  'tslint',
  'tslint-config-airbnb',
  '@types/jasmine',
  'jasmine-core',
  'enzyme',
  'enzyme-adapter-plusnew',
  'karma',
  'karma-chrome-launcher',
  'karma-coverage',
  'karma-jasmine',
  'karma-sourcemap-loader',
  'webpack',
  'copy-webpack-plugin',
  'ts-loader'
];

function changeProjectname(dest, projectName) {
  const packagePath = path.join(dest, 'package.json');
  const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if (package.name === '') {
    package.name = projectName;
    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));
  }
}

function installDependencies(dest) {
  installDependency(dest, false, DEPENDENCIES);
  installDependency(dest, true, DEV_DEPENDENCIES);
}

function installDependency(dest, dev, packages) {
  spawnSync('npm', ['install', ...packages, dev ? '--save-dev' : '--save'], { cwd: dest, stdio: 'inherit' });
}

module.exports = function(dest, projectName) {
  changeProjectname(dest, projectName);
  installDependencies(dest);
}
