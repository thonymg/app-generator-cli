/* eslint-disable rule */

const path = require('path');
const src = '../src/';

module.exports = {
	description: 'react-router route',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom de la route ?',
			validate: function(name) {
				return name !== '';
			},
		},
		{
			type: 'input',
			name: 'title',
			message: 'quel est le titre de la route ?',
		},
		{
			type: 'confirm',
			name: 'styles',
			message: 'la route a t il besoin de style ?',
			default: true,
		},
	],
	actions: data => {
		const actions = [
			{
				type: 'add',
				path: src + 'routes/{{name}}/{{name}}.js',
				templateFile: path.resolve(__dirname, 'route/route.hbs'),
			},
			{
				type: 'add',
				path: src + 'routes/{{name}}/index.js',
				templateFile: path.resolve(__dirname, 'route/index.hbs'),
			},
			{
				type: 'add',
				path: src + 'routes/{{name}}/{{name}}.test.js',
				templateFile: path.resolve(__dirname, 'route/spec.hbs'),
			},
		];

		if (data.styles) {
			actions.push({
				type: 'add',
				path: src + 'routes/{{name}}/{{name}}.css',
				templateFile: path.resolve(__dirname, 'route/styles.hbs'),
			});
		}

		return actions;
	},
};
