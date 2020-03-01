const service = require('../../app/v1/services/productService');

describe('should get prices', () => {
  it('case one', async () => {
    console.log(service);
    const expected = [{ code: '0003.00.11', price: 200 }];
    const document = await service.getPrices(['0003.00.11']);

    expect(document).toEqual(expect.arrayContaining(expected));
  });

  it('case two', async () => {
    const expected = [
      { code: '0003.00.11', price: 200 },
      { code: '0005.55.22', price: 250 },
      { code: '0002.01.00', price: 120 },
    ];
    const document = await service.getPrices([
      '0003.00.11',
      '0005.55.22',
      '0002.01.00',
    ]);

    expect(document).toEqual(expected);
  });

  it('case three', async () => {
    const expected = [
      { code: '0003.00.11', price: 200 },
      { code: '0005.55.22', price: 250 },
      { code: '0002.01.00', price: 120 },
    ];
    const document = await service.getPrices([
      '0003.00.11',
      '0005.55.22',
      '0002.01.00',
      '0002.01.04',
    ]);

    expect(document).toEqual(expected);
  });

  it('case four', async () => {
    const expected = [];
    const document = await service.getPrices([]);

    expect(document).toEqual(expected);
  });

  it('should return a error when an invalid parameter is used', async () => {
    let error;

    try {
      await repository.getPrices('0003.00.12');
    } catch (err) {
      error = !!err;
    }

    expect(error).toBe(true);
  });
});
