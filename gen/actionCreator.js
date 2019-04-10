/* eslint-enable rule */
const path = require('path');
const { src } = require('./config');
const actionPath = src + 'actions/';

const fun = ['get', 'pull'];

module.exports = {
	description: 'Feature (redux action + reducer)',
	prompts: [
		{
			type: 'input',
			name: 'actionName',
			message: 'quel est le nom de la collection ?',
			validate: function(actionName) {
				return actionName !== '';
			},
		},


		{
			type: 'confirm',
			name: 'next',
			message: 'nouvelle action ? ',
			default: true,
		},
		{
			type: 'list',
			name: 'scope',
			message: 'quel est le domaine (scope) de la collection ?',
			choices: [
				{ value: 'API' },
				{ value: 'UI' },
			],
		},
	],
	actions: data => {
		const actions = [];

		if (data.next === true) {
			if (data.scope === 'API') {
				actions.push(
					{
						type: 'add',
						path: src + 'store/{{camelCase actionName}}/actions/{{camelCase actionName}}.actions.js',
						templateFile: path.resolve(
							__dirname,
							'actions/actionCreatorsAPI.hbs'
						),
					},
					{
						type: 'add',
						path: src + 'store/{{camelCase actionName}}/reducer/{{camelCase actionName}}.reducer.js',
						templateFile: path.resolve(__dirname, 'reducer/reducer.hbs'),
					},
					{
						type: 'add',
						path:
							src + 'store/{{camelCase actionName}}/reducer/{{camelCase actionName}}.reducer.test.js',
						templateFile: path.resolve(__dirname, 'reducer/spec.hbs'),
					},
				{
					type: 'add',
					path: 	src + 'store/{{camelCase actionName}}/actions/{{camelCase actionName}}.actionTypes.js',
					templateFile: path.resolve(__dirname, 'actions/actiontypesAPI.hbs'),
				});
			} else if (data.scope === 'UI') {
				actions.push(
					{
						type: 'add',
						path: src + 'store/{{camelCase actionName}}/actions/{{camelCase actionName}}.actions.js',
						templateFile: path.resolve(
							__dirname,
							'actions/actionCreatorsUI.hbs'
						),
					},
					{
						type: 'add',
						path: src +  'store/{{camelCase actionName}}/reducer/{{camelCase actionName}}.reducer.js',
						templateFile: path.resolve(__dirname, 'reducer/reducer.hbs'),
					},
					{
						type: 'add',
						path:
							src +'store/{{camelCase actionName}}/reducer/{{camelCase actionName}}.reducer.test.js',
						templateFile: path.resolve(__dirname, 'reducer/spec.hbs'),
					}
				,{
					type: 'add',
					path: 	src + 'store/{{camelCase actionName}}/actions/{{camelCase actionName}}.actionTypes.js',
					templateFile: path.resolve(__dirname, 'actions/actiontypesUI.hbs'),
				});
			}
		}
		// if (data.next === 'edit') {
		// 	if (data.scope === 'API') {
		// 		actions.push({
		// 			type: 'modify',
		// 			path: actionPath + 'actionTypes.js',
		// 			pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
		// 			templateFile: path.resolve(__dirname, 'actions/actiontypesAPI.hbs'),
		// 		});
		// 		actions.push({
		// 			type: 'modify',
		// 			path: actionPath + '{{camelCase actionName}}_actions.js',
		// 			pattern: /(\/\/--ACTIONS CREATORS--)/g,
		// 			templateFile: path.resolve(
		// 				__dirname,
		// 				'actions/actionCreatorsAPI.hbs'
		// 			),
		// 		});
		// 	} else if (data.scope === 'UI') {
		// 		actions.push({
		// 			type: 'modify',
		// 			path: actionPath + 'actionTypes.js',
		// 			pattern: /(\/\/--ACTIONS TYPES DECLARATION--)/g,
		// 			templateFile: path.resolve(__dirname, 'actions/actiontypesUI.hbs'),
		// 		});
		// 		actions.push({
		// 			type: 'modify',
		// 			path: actionPath + '{{camelCase actionName}}_actions.js',
		// 			pattern: /(\/\/--ACTIONS CREATORS--)/g,
		// 			templateFile: path.resolve(__dirname, 'actions/actionCreatorsUI.hbs'),
		// 		});
		// 	}
		// }

		return actions;
	},
};
