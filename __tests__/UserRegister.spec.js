const request = require('supertest');
const app = require('../app');

describe('User Registration', () => {
    it('return 200 OK when signup request is valid', (done) => {
        request(app)
            .post('/api/1.0/users')
            .send({
                username: 'user1',
                email: 'user1@mail.com',
                password: 'Password123'
            })
            .then((response) => {
                expect(response.status).toBe(200);
                done();
            });
    });
    
    it('return success message when signup request is valid', (done) => {
        request(app)
            .post('/api/1.0/users')
            .send({
                username: 'user1',
                email: 'user1@mail.com',
                password: 'Password123'
            })
            .then((response) => {
                expect(response.text).toEqual('User created');
                done();
            });
    });
});
