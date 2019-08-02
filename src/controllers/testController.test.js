const app = require('../app');
const request = require('supertest');


describe('Restify test endpoint for testController ', () => {

    it('should return http status code 200', (done) => {
        request(app)
            .get('/hello/Philippe').then(response => {
                expect(response.status).toBe(200);
                done();
        });
    });

    it('returns hello Philippe', (done) => {
        request(app)
            .get('/hello/Philippe').then(response => {
                expect(response.text).toBe('hello Philippe');
                done();
        });
    });

    it('returns hello man ! if name param is empty', (done) => {
        request(app)
            .get('/hello/').then(response => {
                expect(response.text).toBe('hello man !');
                done();
        });
    });
});