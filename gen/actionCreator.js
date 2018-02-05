/* eslint-enable rule */
const path = require('path');
const { src } = require('./config');
const actionPath = src + 'actions/';

const fun = ['get', 'pull'];

module.exports = {
	description: 'Redux action creator',
	prompts: [
		{
			type: 'confirm',
			name: 'init',
			message: 'Initilaisation (pas encore de fichier action type ?) ',
			default: false,
		},
		{
			type: 'list',
			name: 'next',
			message: 'nouvelle action ou édition',
			choices: [
				{ name: 'Ajouter une action creator', value: 'new' },
				{ name: 'Editer une action creator', value: 'edit' },
			],
			default: 'new',
		},
		{
			type: 'input',
			name: 'actionName',
			message: 'quel est le nom de la collection d actions ?',
			validate: function(actionName) {
				return actionName !== '';
			},
		},
		{
			type: 'list',
			name: 'scope',
			message: 'quel est le domaine (scope) de l action ?',
			choices: [
				{ value: 'API' },
				{ value: 'UI' },
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
			if (data.scope === 'API') {
				actions.push(
					{
						type: 'add',
						path: src + 'actions/{{camelCase actionName}}_actions.js',
						templateFile: path.resolve(
							__dirname,
							'actions/actionCreatorsAPI.hbs'
						),
					},
					{
						type: 'add',
						path: src + 'reducers/{{actionName}}/{{actionName}}_reducer.js',
						templateFile: path.resolve(__dirname, 'reducer/reducer.hbs'),
					},
					{
						type: 'add',
						path:
							src + 'reducers/{{actionName}}/{{actionName}}_reducer.test.js',
						templateFile: path.resolve(__dirname, 'reducer/spec.hbs'),
					}
				);

				actions.push({
					type: 'modify',
					path: actionPath + 'actionTypes.js',
					pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
					templateFile: path.resolve(__dirname, 'actions/actiontypesAPI.hbs'),
				});
			} else if (data.scope === 'UI') {
				actions.push(
					{
						type: 'add',
						path: src + 'actions/{{camelCase actionName}}_actions.js',
						templateFile: path.resolve(
							__dirname,
							'actions/actionCreatorsUI.hbs'
						),
					},
					{
						type: 'add',
						path: src + 'reducers/{{actionName}}/{{actionName}}_reducer.js',
						templateFile: path.resolve(__dirname, 'reducer/reducer.hbs'),
					},
					{
						type: 'add',
						path:
							src + 'reducers/{{actionName}}/{{actionName}}_reducer.test.js',
						templateFile: path.resolve(__dirname, 'reducer/spec.hbs'),
					}
				);

				actions.push({
					type: 'modify',
					path: actionPath + 'actionTypes.js',
					pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
					templateFile: path.resolve(__dirname, 'actions/actiontypesUI.hbs'),
				});
			}
		}
		if (data.next === 'edit') {
			if (data.scope === 'API') {
				actions.push({
					type: 'modify',
					path: actionPath + 'actionTypes.js',
					pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
					templateFile: path.resolve(__dirname, 'actions/actiontypesAPI.hbs'),
				});
				actions.push({
					type: 'modify',
					path: actionPath + '{{camelCase actionName}}_actions.js',
					pattern: /(\/\/--ACTIONS CREATORS--)/g,
					templateFile: path.resolve(
						__dirname,
						'actions/actionCreatorsAPI.hbs'
					),
				});
			} else if (data.scope === 'UI') {
				actions.push({
					type: 'modify',
					path: actionPath + 'actionTypes.js',
					pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
					templateFile: path.resolve(__dirname, 'actions/actiontypesUI.hbs'),
				});
				actions.push({
					type: 'modify',
					path: actionPath + '{{camelCase actionName}}_actions.js',
					pattern: /(\/\/--ACTIONS CREATORS--)/g,
					templateFile: path.resolve(__dirname, 'actions/actionCreatorsUI.hbs'),
				});
			}
		}

		return actions;
	},
};
