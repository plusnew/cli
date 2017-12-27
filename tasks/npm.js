const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function changeProjectname(dest, projectName) {
  const packagePath = path.join(dest, 'package.json');
  const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  package.name = projectName;
  fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));
}

function installDependencies(dest) {
  spawnSync('npm', ['install'], { cwd: dest, stdio: 'inherit' })
}

module.exports = function(dest, projectName) {
  changeProjectname(dest, projectName);
  installDependencies(dest);
}
