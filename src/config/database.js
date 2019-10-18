'use strict';

require('dotenv').config();

const config = {
    development: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        dialect: process.env.DEV_DB_DIALECT,
        migrationStorage: process.env.DEV_DB_MIGRATION_STORAGE,
        migrationStoragePath: process.env.DEV_DB_MIGRATION_STORAGE_PATH
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        dialect: process.env.PROD_DB_DIALECT,
        migrationStorage: process.env.PROD_DB_MIGRATION_STORAGE,
        migrationStoragePath: process.env.PROD_DB_MIGRATION_STORAGE_PATH
    }
}

module.exports = config;