'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Main v1 Router!" });
});

router.get('/test', (req, res) => {
    res.json({ message: "Test passed!" });
});

module.exports = router;