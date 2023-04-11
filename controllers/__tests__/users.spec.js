const request = require('supertest')
const app = require('../../app')

describe('Users API', () => {
  describe('Test GET /launches', () => {

    test('It should response with 200 success', async () => {
      const response = await request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200)
    })
    test('It should response with 200 success', async () => {
      const response = await request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(response.body).toStrictEqual({id: 1, name: 'Jose Luis Cerón'})
    })
  })
})