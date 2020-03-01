const request = require('supertest');

const app = require('../../start/app');

describe('Test all API endpoints', () => {
  describe('POST', () => {
    it('should get prices', async () => {
      const json = ['0005.55.22', '0003.00.11'];
      const expected = [
        { code: '0003.00.11', price: 200 },
        { code: '0005.55.22', price: 250 },
      ];
      delete json.createdAt;

      const response = await request(app)
        .post('/api/v1/getPrices')
        .send(json);

      const { statusCode, body } = response;

      expect(body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ code: expect.anything() }),
          expect.objectContaining({ price: expect.anything() }),
        ])
      );
      expect(statusCode).toEqual(200);
    });
  });
});
