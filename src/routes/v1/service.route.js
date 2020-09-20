const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const serviceValidation = require('../../validations/service.validation');
const serviceController = require('../../controllers/service.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), serviceController.getServices)
  .post(auth('admin'), validate(serviceValidation.createService), serviceController.createService);

router
  .route('/:serviceId')
  .get(auth('admin'), serviceController.getService)
  .put(auth('admin'), validate(serviceValidation.updateService), serviceController.updateService)
  .delete(auth('admin'), serviceController.deleteService);

module.exports = router;
