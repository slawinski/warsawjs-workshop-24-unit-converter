const supertest = require('supertest');

const { server, url } = require('../../backend/server');

const request = supertest(url);

describe('temperature api', () => {
  it('missing route should return 404', async () => {
    await server;
    await request.get('api/aaaa').expect(404);
  });

  it('good route should return 200', async () => {
    await server;
    await request.get('api/temperature').expect(200);
  });

  it('temp conventer', async () => {
    await server;
    await request.get('api/temperature?fromValue=50&fromUnit=C&toUnit=F').expect(404);
  });
});


