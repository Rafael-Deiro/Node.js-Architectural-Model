'use strict';

import * as dotenv from 'dotenv';

dotenv.config();

type dialect = 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql';
type dbConfig = {
    username: string,
    password: string,
    database: string,
    host: string,
    port: number,
    dialect: dialect,
    migrationStorage: string,
    migrationStoragePath: string
}

export const databaseConfig = {
    production: {
        username: <string>process.env.PROD_DB_USERNAME,
        password: <string>process.env.PROD_DB_PASSWORD,
        database: <string>process.env.PROD_DB_NAME,
        host: <string>process.env.PROD_DB_HOST,
        port: parseInt(<string>process.env.PROD_DB_PORT),
        dialect: <dialect>process.env.PROD_DB_DIALECT,
        migrationStorage: <string>process.env.PROD_DB_MIGRATION_STORAGE,
        migrationStoragePath: <string>process.env.PROD_DB_MIGRATION_STORAGE_PATH
    },
    development: {
        username: <string>process.env.DEV_DB_USERNAME,
        password: <string>process.env.DEV_DB_PASSWORD,
        database: <string>process.env.DEV_DB_NAME,
        host: <string>process.env.DEV_DB_HOST,
        port: parseInt(<string>process.env.DEV_DB_PORT),
        dialect: <dialect>process.env.DEV_DB_DIALECT,
        migrationStorage: <string>process.env.DEV_DB_MIGRATION_STORAGE,
        migrationStoragePath: <string>process.env.DEV_DB_MIGRATION_STORAGE_PATH
    }
}
