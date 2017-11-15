const path = require('path');
const src = '../src/';

module.exports = {
  description: 'react-redux container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'quel est le nom du container container ?',
  }, {
    type: 'input',
    name: 'component',
    message: 'quel est le nom du component a wrapper ?',
  }],
  actions: [{
    type: 'add',
    path: src + 'containers/{{name}}/{{name}}.js',
    templateFile: path.resolve(__dirname, 'container/container.hbs'),
  }, {
    type : 'add',
    path: src + 'containers/{{name}}/index.js',
    templateFile: path.resolve(__dirname, 'container/index.hbs'),
  }, {
    type: 'add',
    path: src + 'containers/{{name}}/{{name}}.spec.js',
    templateFile: path.resolve(__dirname, 'container/spec.hbs'),
  }],
};
