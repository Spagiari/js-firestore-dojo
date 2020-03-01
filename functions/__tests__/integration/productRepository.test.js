const repository = require('../../app/v1/repositories/productRepository');

describe('Get product by code', () => {
  it('should return a single document', async () => {
    const document = await repository.getByCode('0003.00.11');

    expect(document).toHaveProperty('code');
    expect(document).toHaveProperty('description');
    expect(document).toHaveProperty('price');
    expect(document).toHaveProperty('basePrice');
    expect(document).toHaveProperty('maxDiscount');
  }, 10000);

  it('should return a error when find a document that not exists', async () => {
    let error;

    try {
      await repository.getByCode('0003.99.12');
    } catch (err) {
      error = !!err;
    }

    expect(error).toBe(true);
  }, 10000);
});
