const component = require('./gen/component');
const container = require('./gen/container');
const route = require('./gen/route');
const reducer = require('./gen/reducer');
const actions = require('./gen/actionCreator');

module.exports = function (plop) {
	plop.setGenerator('component', component);
	plop.setGenerator('reducer', reducer);
	plop.setGenerator('route', route);
	plop.setGenerator('container', container);
	plop.setGenerator('actions', actions);
}
