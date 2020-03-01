const path = require('path');
const { helpers } = require('@restoque/pdx-helpers-lib');

const { directory } = helpers;

const files = directory
  .getDirectories(path.resolve(__dirname, '..', '..', 'app', 'v1', 'swagger'))
  .map(directories =>
    directory.getFiles(directories).map(file => path.resolve(directories, file))
  );

module.exports = {
  swaggerDefinition: {
    info: {
      title: '{{}}',
      version: '{{}}.0.0',
    },
    basePath: '/{{}}/api/v1',
  },
  apis: [
    `${path.resolve(__dirname, '..', '..', 'routes', '{{}}')}`,
    ...[].concat(...files),
  ],
};
