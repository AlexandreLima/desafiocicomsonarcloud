const request = require('supertest')
const server =  require('../index')

describe('Get Raiz', () => {
    it('Get', async (done) => {
        const res = await request(server)
                            .get('/')
                            .send()

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('nome');
        done();
    })
})

afterAll(async done => {
    server.close();
    done();
})