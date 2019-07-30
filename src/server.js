var restify = require('restify');
const routes = require('./routes');

var server = restify.createServer();

routes.init(server);

try {
    server.listen(8080, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

    //404
    server.on('NotFound', function(req, res, err, next) {
        res.header('content-type', 'text/plain');
        res.send(404, '404 not found for route ' + req.path() + ' !');    // in NotFound, must manually send the response
        return next();
    });

}
catch(error) {
    console.error(error);
}

module.exports = server;
