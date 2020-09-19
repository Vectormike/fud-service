const httpStatus = require('http-status');
const { Service } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a service
 * @param {Object} serviceBody
 * @returns {Promise<Service>}
 */
const createService = async (serviceBody) => {
  const service = await Service.create(serviceBody);
  return service;
};

module.exports = { createService };
