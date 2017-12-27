const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEPENDENCIES = ['plusnew'];
const DEV_DEPENDENCIES = [
  'webpack',
  'awesome-typescript-loader',
  'copy-webpack-plugin',
  'typescript',
  'tslint',
  'tslint-config-airbnb',
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
  DEPENDENCIES.forEach(installDependency.bind(null, dest, false));
  DEV_DEPENDENCIES.forEach(installDependency.bind(null, dest, true));
}

function installDependency(dest, dev, package) {
  spawnSync('npm', ['install', package, dev ? '--save-dev' : '--save'], { cwd: dest, stdio: 'inherit' })
}

module.exports = function(dest, projectName) {
  changeProjectname(dest, projectName);
  installDependencies(dest);
}
