const component = require('./gen/component');
const container = require('./gen/container');
const route = require('./gen/route');
const reducer = require('./gen/reducer');
const actions = require('./gen/actionCreator');

module.exports = function (plop) {
	plop.setGenerator('Redux - Feature', actions);
	plop.setGenerator('Redux - Container', container);
	plop.setGenerator('React - Component', component);
	// plop.setGenerator('reducer', reducer);
	// plop.setGenerator('route', route);

}
