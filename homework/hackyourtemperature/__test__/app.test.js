import supertest from 'supertest';
import app from '../app.js';
const request = supertest(app);

describe('GET /', () => {
  it('should return "hello from backend to frontend!"', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello from backend to frontend!');
  });
});

describe('POST / weather', () => {
  it(' It should return weather info for a valid cite name', async () => {
    const cityName = { cityName: 'Amsterdam' };
    const response = await request.post('/weather').send(cityName);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('Weather');
  });

  it('It should return City not found in case the city name incorrect', async () => {
    const response = await request.post('/weather').send({
      cityName: 'InvalidCity',
    });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('weatherText', 'City not found');
  });
});
