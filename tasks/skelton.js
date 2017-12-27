const path = require('path');
const fs = require('fs');

function copy(source, dest) {
	var files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourceFile = path.join(source, file);
    const destFile = path.join(dest, file);
    if (fs.statSync(sourceFile).isDirectory() === true) {
      fs.mkdirSync(destFile);
      copy(sourceFile, destFile);
    } else {
      fs.copyFileSync(sourceFile, destFile);
    }
  });
  
}

module.exports = function(dest) {
  const source = path.join(__dirname, '..', 'skelton');
  copy(source, dest);
}