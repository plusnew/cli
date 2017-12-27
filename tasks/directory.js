const fs = require('fs');

module.exports = function(dest) {
  const exists = fs.existsSync(dest);
  if (exists === false) {
    fs.mkdirSync(dest);
  }
}