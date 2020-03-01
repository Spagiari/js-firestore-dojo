const restoque = require('@restoque/pdx-repositories-lib');

class ProductRepository extends restoque.FirestoreBaseRepository {
  constructor() {
    super('product');
  }

  async getByCode(code) {
    throw new Error('Not implemented yet!');
  }
}

module.exports = new ProductRepository();
