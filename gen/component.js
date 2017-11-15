const path = require('path');
const src = '../src/';

module.exports = {
	description: 'React component',
	prompts: [{
    type: 'input',
    name: 'name',
    message: 'quel est le nom du component ?',
  }, {
    type: 'confirm',
    name: 'stateless',
    message: 'est ce un stateless component (sans état)?',
    default: true,
  }, {
    type: 'confirm',
    name: 'styles',
    message: 'le component a t ilbesoins de styles ?',
    default: true,
  }],
	actions: (data) => {
    const actions = [];

    if (data.stateless) {
      actions.push({
        type: 'add',
        path: src + 'components/{{name}}/{{name}}.js',
        templateFile: path.resolve(__dirname, 'component/stateless.hbs'),
      });
    } else {
      actions.push({
        type: 'add',
        path: src + 'components/{{name}}/{{name}}.js',
        templateFile: path.resolve(__dirname,'component/stateful.hbs'),
      });
    }

    if (data.styles) {
      actions.push({
        type: 'add',
        path: src + 'components/{{name}}/{{name}}.scss',
        templateFile: path.resolve(__dirname, 'component/styles.hbs'),
      });
    }

    actions.push({
      type: 'add',
      path: src + 'components/{{name}}/index.js',
      templateFile: path.resolve(__dirname, 'component/index.hbs'),
    });

    actions.push({
      type: 'add',
      path: src + 'components/{{name}}/{{name}}.spec.jsx',
      templateFile: path.resolve(__dirname,'component/spec.hbs'),
    });

    return actions;
  },
}
