/* eslint-enable rule */
const path = require('path');
const src = '../src/';

module.exports = {
	description: 'react-redux container',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du container ?',
			validate: function(name) {
				return name !== '';
			},
		},
		{
			type: 'input',
			name: 'component',
			message: 'quel est le nom du component a wrapper ?',
			validate: function(name) {
				return name !== '';
			},
		},
	],
	actions: [
		{
			type: 'add',
			path: src + 'components/containers/{{name}}/{{name}}_container.js',
			templateFile: path.resolve(__dirname, 'containers/container.hbs'),
		},
		{
			type: 'add',
			path: src + 'components/containers/{{name}}/index.js',
			templateFile: path.resolve(__dirname, 'containers/index.hbs'),
		},
		{
			type: 'add',
			path: src + 'components/containers/{{name}}/{{name}}_container.test.js',
			templateFile: path.resolve(__dirname, 'containers/spec.hbs'),
		},
	],
};
