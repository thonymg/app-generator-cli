/* eslint-enable rule */
const path = require('path');
const src = '../src/';

module.exports = {
	description: 'redux reducer',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du reducer ?'
		}
	],
	actions: [
		{
			type: 'add',
			path: src + 'reducers/{{name}}.js',
			templateFile: path.resolve(__dirname, 'reducer/reducer.hbs')
		},
		{
			type: 'add',
			path: src + 'reducers/{{name}}.test.js',
			templateFile: path.resolve(__dirname, 'reducer/spec.hbs')
		}
	]
};
