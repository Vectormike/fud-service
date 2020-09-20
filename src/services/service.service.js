const httpStatus = require('http-status');
const { Service } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get all Services
 * @returns {Promise<Service>}
 */
const getServices = async () => {
  try {
    const services = await Service.find();
    return services;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

/**
 * Get service
 * @param {ObjectId} serviceId
 * @returns {Promise<Service>}
 */
const getService = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
    }
    return service;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

/**
 * Create a service
 * @param {Object} serviceBody
 * @returns {Promise<Service>}
 */
const createService = async (serviceBody) => {
  try {
    const service = await Service.create(serviceBody);
    return service;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

/**
 * Update a service
 * @param {ObjectId} serviceId
 * @param {Object} serviceBody
 * @returns {Promise<Service>}
 */
const updateService = async (serviceId, serviceBody) => {
  try {
    const service = await Service.findByIdAndUpdate(serviceId, serviceBody, { useFindAndModify: false, new: true });
    return service;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

/**
 * Delete a service
 * @param {ObjectId} serviceId
 */
const deleteService = async (serviceId) => {
  try {
    await Service.findByIdAndRemove(serviceId, { useFindAndModify: false });
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

module.exports = { getServices, getService, createService, updateService, deleteService };
