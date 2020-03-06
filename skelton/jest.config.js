const path = require('path');

module.exports = {
	verbose: true,
	rootDir: __dirname,
	roots: [ '<rootDir>/src' ],
	modulePaths: [ 'src' ],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	transformIgnorePatterns: [ 'node_modules/(?!@plusnew/)' ],
	moduleFileExtensions: [ 'tsx', 'ts', 'js' ],
	moduleNameMapper: {
		'\\.(png|jpg|gif)$': path.join(__dirname, 'mocks', 'file.js'),
		'\\.(scss)$': 'identity-obj-proxy'
	}
};
