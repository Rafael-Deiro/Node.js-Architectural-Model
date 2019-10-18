'use strict';

require('dotenv').config();
const database = require('./database');

const config = {
    general: {
        enviroment: process.env.NODE_ENVIROMENT,
        appName: process.env.APP_NAME
    },
    server: {
        hostname: process.env.HOSTNAME,
        port: process.env.PORT
    },
    database: database
}

module.exports = config;