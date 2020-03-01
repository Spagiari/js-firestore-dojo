const restoque = require('@restoque/pdx-repositories-lib');

class ProductRepository extends restoque.FirestoreBaseRepository {
  constructor() {
    super('product');
  }

  async getByCode(code) {
    // throw new Error('Not implemented yet!');
    const queryRef = this.collection.where('code', '==', code);
    const snapshot = await queryRef.get();

    if (snapshot.empty) throw new Error('Not Found');

    return snapshot.docs[0].data();
  }
}

module.exports = new ProductRepository();
