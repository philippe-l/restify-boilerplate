const TestCtrl = require('../controllers/testController');
const testCtrl = new TestCtrl();

module.exports.init = function (server) {
    server.get('/hello/:name', testCtrl.testResponse);

    //404
    server.on('NotFound', function(req, res, err, next) {
        res.header('content-type', 'text/plain');
        res.send(404, '404 not found for route ' + req.path() + ' !');    // in NotFound, must manually send the response
        return next();
    });
}