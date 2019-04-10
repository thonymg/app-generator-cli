/* eslint-enable rule */
const path = require('path');
const src = '../src/';

module.exports = {
	description: 'redux reducer',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du reducer ?',
			validate: function(name) {
				return name !== '';
			},
		},
	],
	actions: [
		{
			type: 'add',
			path: src + 'store/reducers/{{name}}/{{name}}.reducer.js',
			templateFile: path.resolve(__dirname, 'reducer/reducer.hbs'),
		},
		{
			type: 'add',
			path: src + 'store/reducers/{{name}}/{{name}}.reducer.test.js',
			templateFile: path.resolve(__dirname, 'reducer/spec.hbs'),
		},
	],
};
