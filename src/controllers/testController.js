var TestController = function() {
    // var self = this;

    this.testResponse = function respond(req, res, next) {
        res.header('content-type', 'text/plain');
        if (req.params.name !== '') {
            return res.send(200, 'hello ' + req.params.name);
        }
        res.send(200, 'hello man !');
        next();
    }

}

module.exports = TestController;
