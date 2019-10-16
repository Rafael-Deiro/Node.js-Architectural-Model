'use strict';

const router = require('express').Router();
const userController = require('../../controllers/api/user');

router.use('/user', userController);

module.exports = router;