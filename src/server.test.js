const app = require('./app'); // our Node application
const request = require('supertest');

describe('Restify test 404 and bad request', () => {

    it('should return http status code 404 if route if not found', (done) => {
        request(app)
            .get('/notFoundedRoute').then(response => {
                expect(response.statusCode).toBe(404);
                done();
        })

    });

    it('should return the correct message for a 404 page', (done) => {
        request(app)
            .get('/notFoundedRoute').then(response => {
                // console.log(response.text);
                expect(response.text).toBe('404 not found for route /notFoundedRoute !');
                done();
        })
    });

});