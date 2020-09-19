const Joi = require('@hapi/joi');

const createService = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    icon: Joi.string().required(),
  }),
};

module.exports = { createService };
