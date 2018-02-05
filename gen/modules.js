/* eslint-enable rule */
const path = require('path');
const {src} = require('./config');
const modulePath = src + 'module/rakoto.js'

module.exports = {
	description: 'redux reducer',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du module ?'
		}
	],
	actions: [
		{
			type: 'add',
			path: src + 'module/{{name}}.js',
			templateFile: path.resolve(__dirname, 'module/module.hbs')
		},
		{
			type: "modify",
			path: modulePath,
			pattern: /(\/\/ IMPORT MODULE FILES)/g,
			templateFile: path.resolve(__dirname, 'module/edit.hbs')
		},
	]
};
