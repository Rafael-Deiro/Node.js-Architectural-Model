'use strict';

const router = require('express').Router();
const v1ApiController = require('./v1');

router.use('/v1', v1ApiController);

module.exports = router;