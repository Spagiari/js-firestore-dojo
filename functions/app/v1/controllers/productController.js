const productService = require('../services/productService');
/**
 * Resourceful controller for interacting with Products
 */

class ProductController {
  /**
   * Get prices for a list of products.
   * GET
   *
   * @param {req} req - Express request object
   * @param {res} res - Express response object
   */
  async getPrices(req, res) {
    // throw new Error('Not implemented yet!');
    const data = await productService.getPrices(req.body);
    return res.status(200).json(data);
  }
}

module.exports = new ProductController();
