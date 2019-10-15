'use strict';

const apiRoute = require('./apis');
const express = require('express');

function init(server = express()) {
    server.get('*', (req, res, next) => {
        console.log(`Request made to: ${req.originalUrl}`);
        next();
    });

    server.use('/api', apiRoute);
}

module.exports = { init: init };