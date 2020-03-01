const Joi = require('@hapi/joi');

const schema = Joi.array()
  .items(Joi.string())
  .min(1)
  .max(99)
  .required();

module.exports = schema;
