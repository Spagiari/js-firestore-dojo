const productRepository = require('../repositories/productRepository');

class ProductService {
  async getPrices(productCodeList) {
    // throw new Error('Not implemented yet!');
    if (!Array.isArray(productCodeList)) throw new Error('Invalid argument');

    const products = await Promise.all(
      productCodeList.map(productCode => {
        return productRepository.getByCode(productCode).catch(() => {
          return null;
        });
      })
    );

    return products
      .filter(product => product)
      .map(product => {
        return { code: product.code, price: product.price };
      });
  }
}

module.exports = new ProductService();
