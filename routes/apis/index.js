'use strict';

const v1ApiController = require('./v1');
const express = require('express');
const router = express.Router();

router.use('/v1', v1ApiController);

module.exports = router;