'use strict';

const router = require('express').Router();
const userService = require('../../services/auth/user');

router.get('/', userService.getUsers);
router.post('/', userService.registerUser);

module.exports = router;