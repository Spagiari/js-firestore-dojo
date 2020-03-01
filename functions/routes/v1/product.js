const { Router } = require('express');

const productController = require('../../app/v1/controllers/productController');

const routes = new Router();

/**
 * @swagger
 * /getPrices:
 *   post:
 *     tags:
 *       - Products
 *     description: Get prices for a list of product codes
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: payload
 *         description: List of product codes
 *         schema:
 *           $ref: "#/definitions/"
 *     responses:
 *       201:
 *         description: Sucess, register created.
 *       400:
 *         description: Error.
 */
routes.post('/getPrices', productController.getPrices);

module.exports = routes;
