const fs = require('fs');
const path = require('path');

function changeProjectname(dest, projectName) {
	const packagePath = path.join(dest, 'package.json');
	const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
	if (package.name === '') {
		package.name = projectName;
		fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));
	}
}

module.exports = function(dest, projectName) {
	changeProjectname(dest, projectName);
};
