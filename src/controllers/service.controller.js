const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { serviceService } = require('../services');

const getServices = catchAsync(async (req, res) => {
  const services = await serviceService.getServices();
  res.status(httpStatus.OK).json({ services });
});

const getService = catchAsync(async (req, res) => {
  const service = await serviceService.getService(req.params.serviceId);
  res.status(httpStatus.OK).json({ service });
});

const createService = catchAsync(async (req, res) => {
  const service = await serviceService.createService(req.body);
  res.status(httpStatus.CREATED).json({ service });
});

const updateService = catchAsync(async (req, res) => {
  const service = await serviceService.updateService(req.params.serviceId, req.body);
  res.status(httpStatus.CREATED).json({ service });
});

const deleteService = catchAsync(async (req, res) => {
  await serviceService.deleteService(req.params.serviceId);
  res.status(httpStatus.OK).end();
});
module.exports = { getServices, getService, createService, updateService, deleteService };
