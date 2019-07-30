const server = require('../server'); // our Node application
const request = require('supertest')(server);

afterEach(() => {
    server.close();
});

describe('Restify test endpoint for testController ', () => {

    it('should return http status code 200', (done) => {
        request
            .get('/hello/Philippe')
            .expect(200, done);
    });

    it('returns hello Philippe', (done) => {
        request
            .get('/hello/Philippe')
            .expect('hello Philippe', done);
    });

    it('returns hello man ! if name param is empty', (done) => {
        request
            .get('/hello/')
            .expect('hello man !', done);
    });
});