/* eslint-enable rule */
const path = require('path');
const { src } = require('./config');
const actionPath = src + 'actions/';

module.exports = {
	description: 'Redux action creator',
	prompts: [
		{
			type: 'confirm',
			name: 'init',
			message: 'Initilaisation ? ',
		},
		{
			type: 'list',
			name: 'next',
			message: 'nouvelle action ou édition',
			choices: [
				{ name: 'Editer une action creator', value: 'edit' },
				{ name: 'Ajouter une action creator', value: 'new' },
			],
		},
		{
			type: 'input',
			name: 'name',
			message: 'quel est le nom de la collection d actions ?',
		},
		{
			type: 'list',
			name: 'actionName',
			message: 'de quel type est l action ?',
			choices: [
				{ value: 'fetchApi' },
				{ value: 'get' },
				{ value: 'delete' },
				{ value: 'update' },
				{ value: '$$CUSTOM$$' }
			],
		},
	],
	actions: data => {
		const actions = [];

		if (data.init) {
			actions.push({
				type: 'add',
				path: src + 'actions/actionTypes.js',
				template: '//--ACTIONS TYPES DECLARATION--',
			});
		}

		if (data.next === 'new') {
			actions.push({
				type: 'add',
				path: src + 'actions/{{camelCase name}}.js',
				templateFile: path.resolve(__dirname, 'actions/actionCreator.hbs'),
			});

			actions.push({
				type: 'modify',
				path: actionPath + 'actionTypes.js',
				pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
				templateFile: path.resolve(__dirname, 'actions/actiontypes.hbs'),
			});
		}
		if (data.next === 'edit') {
			actions.push({
				type: 'modify',
				path: actionPath + 'actionTypes.js',
				pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
				templateFile: path.resolve(__dirname, 'actions/actiontypes.hbs'),
			});
			actions.push({
				type: 'modify',
				path: actionPath + '{{camelCase name}}.js',
				pattern: /(\/\/--ACTIONS CREATORS--)/g,
				templateFile: path.resolve(__dirname, 'actions/actionCreator.hbs'),
			});
		}

		return actions;
	},
};
