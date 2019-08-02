var restify = require('restify');
const routes = require('./routes');

var app = restify.createServer();

routes.init(app);

module.exports = app;
