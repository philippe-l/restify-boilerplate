const TestCtrl = require('../controllers/testController');
const testCtrl = new TestCtrl();

module.exports.init = function (server) {
    server.get('/hello/:name', testCtrl.testResponse);
}