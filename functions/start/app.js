require('express-async-errors');

require('../config/bootstrap');

const restoqueMiddlewares = require('@restoque/pdx-middlewares-lib');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const config = require('config');

const router = require('../routes');

class App {
  constructor() {
    this.init();
  }

  init() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
    this.swagger();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    const versions = Object.keys(router);

    versions.forEach(version => {
      const routes = Object.keys(router[version]);
      routes.forEach(route => {
        this.server.use(`/api/${version}`, router[version][route]);
      });
    });
  }

  exceptionHandler() {
    this.server.use(restoqueMiddlewares.globalErrorHandler);
  }

  swagger() {
    const swaggerConfig = config.get('swagger');
    const swaggerVersions = Object.keys(config.get('swagger'));

    swaggerVersions.forEach(version => {
      this.server.use(
        `/api/${version}/docs`,
        swaggerUi.serve,
        swaggerUi.setup(swaggerJSDoc(swaggerConfig[version]))
      );
    });
  }
}

module.exports = new App().server;
