const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const serviceRoute = require('./service.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/services', serviceRoute);

module.exports = router;
