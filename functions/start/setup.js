const restoqueHelpers = require('@restoque/pdx-helpers-lib');
const path = require('path');

const validatorsPath = path.resolve(__dirname, '..', 'app', 'v1', 'validators');
const swaggerPath = path.resolve(__dirname, '..', 'app', 'v1', 'swagger');
const version = 'v1';

restoqueHelpers.helpers.swagger({ validatorsPath, swaggerPath, version });
