import supertest from 'supertest';
const app = require('./app');
const request = supertest(app);

describe('GET /', () => {
  it('should return "hello from backend to frontend!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello from backend to frontend!');
  });
});
