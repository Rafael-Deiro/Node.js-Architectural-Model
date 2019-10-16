'use strict';

require('dotenv').config();

const config = {
    general: {
        enviroment: process.env.NODE_ENVIROMENT,
        appName: process.env.APP_NAME
    },
    server: {
        hostname: process.env.HOSTNAME,
        port: process.env.PORT
    },
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
}

module.exports = config;