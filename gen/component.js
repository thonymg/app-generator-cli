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
			message: 'est ce un stateless component (sans état)?',
			default: true,
		},
		{
			type: 'confirm',
			name: 'styles',
			message: 'le component a t il besoins de styles ?',
			default: true,
		},
	],
	actions: data => {
		const actions = [];

		if (data.stateless) {
			actions.push({
				type: 'add',
				path: src + 'components/ui/{{name}}/{{name}}.js',
				templateFile: path.resolve(__dirname, 'components/stateless.hbs'),
			});
		} else {
			actions.push({
				type: 'add',
				path: src + 'components/ui/{{name}}/{{name}}.js',
				templateFile: path.resolve(__dirname, 'components/stateful.hbs'),
			});
		}

		if (data.styles) {
			actions.push({
				type: 'add',
				path: src + 'components/ui/{{name}}/{{name}}.css',
				templateFile: path.resolve(__dirname, 'components/styles.hbs'),
			});
		}

		actions.push({
			type: 'add',
			path: src + 'components/ui/{{name}}/index.js',
			templateFile: path.resolve(__dirname, 'components/index.hbs'),
		});

		actions.push({
			type: 'add',
			path: src + 'components/ui/{{name}}/{{name}}.test.js',
			templateFile: path.resolve(__dirname, 'components/spec.hbs'),
		});

		return actions;
	},
};
