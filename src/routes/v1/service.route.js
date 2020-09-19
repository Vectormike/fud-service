const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const serviceValidation = require('../../validations/service.validation');
const serviceController = require('../../controllers/service.controller');

const router = express.Router();

router.route('/').post(auth('admin'), validate(serviceValidation.createService), serviceController.createService);

module.exports = router;
