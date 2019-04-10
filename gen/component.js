/* eslint-enable rule */
const path = require('path');
const src = '../src/';

module.exports = {
	description: 'React component',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom du component ?',
			validate: function(name) {
				return name !== '';
			},
		},
		{
			type: 'confirm',
			name: 'stateless',
			message: 'est ce un stateless component (function)?',
			default: true,
		},
		{
			type: 'confirm',
			name: 'styles',
			message: 'besoins de styles ?',
			default: true,
		},
	],
	actions: data => {
		const actions = [];

		if (data.stateless) {
			actions.push({
				type: 'add',
				path: src + 'components/{{name}}/{{name}}.component.js',
				templateFile: path.resolve(__dirname, 'components/stateless.hbs'),
			});
		} else {
			actions.push({
				type: 'add',
				path: src + 'components/{{name}}/{{name}}.component.js',
				templateFile: path.resolve(__dirname, 'components/statefull.hbs'),
			});
		}

		if (data.styles) {
			actions.push({
				type: 'add',
				path: src + 'components/{{name}}/{{name}}.component.css',
				templateFile: path.resolve(__dirname, 'components/styles.hbs'),
			});
		}

		actions.push({
			type: 'add',
			path: src + 'components/{{name}}/{{name}}.component.test.js',
			templateFile: path.resolve(__dirname, 'components/spec.hbs'),
		});

		return actions;
	},
};
