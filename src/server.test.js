const server = require('./server'); // our Node application
const request = require('supertest')(server);

afterEach(() => {
    server.close();
});

describe('Restify test 404 and bad request', () => {

    it('should return http status code 404 if route if not found', (done) => {
        request
            .get('/notFoundedRoute')
            .expect(404, done);
    });

    it('should return the correct message for a 404 page', (done) => {
        request
            .get('/notFoundedRoute')
            .expect('404 not found for route /notFoundedRoute !', done);
    });

});