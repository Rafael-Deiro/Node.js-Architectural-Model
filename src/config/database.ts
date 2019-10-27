'use strict';

import * as dotenv from 'dotenv';

dotenv.config();

type dialect = 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql';
type dbConfig = {
<<<<<<< HEAD
    use_env_variable: string,
    url: string | undefined,
    dialect: string,
=======
    url: string,
    username: string,
    password: string,
    database: string,
    host: string,
    port: number,
    dialect: dialect,
>>>>>>> eeac084cf061044e344790b90ae7322a61cbcefd
    migrationStorage: string,
    migrationStoragePath: string
}

<<<<<<< HEAD
export const production: dbConfig = {
    use_env_variable: 'DATABASE_URL',
    url: <string>process.env.DATABASE_URL || process.env.PROD_DB_URL,
    dialect: <dialect>process.env.PROD_DB_DIALECT,
    migrationStorage: <string>process.env.PROD_DB_MIGRATIONSTORAGE,
    migrationStoragePath: <string>process.env.PROD_DB_MIGRATIONSTORAGEPATH
}

export const development: dbConfig = {
    use_env_variable: 'DATABASE_URL',
    url: <string>process.env.DATABASE_URL || process.env.DEV_DB_URL,
    dialect: <dialect>process.env.DEV_DB_DIALECT,
    migrationStorage: <string>process.env.DEV_DB_MIGRATIONSTORAGE,
    migrationStoragePath: <string>process.env.DEV_DB_MIGRATIONSTORAGEPATH
}
=======
export const databaseConfig = {
    production: {
        use_env_variable: 'DATABASE_URL',
        url: <string>process.env.DATABASE_URL,
        username: <string>process.env.PROD_DB_USERNAME,
        password: <string>process.env.PROD_DB_PASSWORD,
        database: <string>process.env.PROD_DB_NAME,
        host: <string>process.env.PROD_DB_HOST,
        port: parseInt(<string>process.env.PROD_DB_PORT),
        dialect: <dialect>'postgres',
        migrationStorage: <string>process.env.PROD_DB_MIGRATION_STORAGE,
        migrationStoragePath: <string>process.env.PROD_DB_MIGRATION_STORAGE_PATH
    },
    development: {
        use_env_variable: 'DATABASE_URL',
        url: <string>process.env.DATABASE_URL,
        username: <string>process.env.DEV_DB_USERNAME,
        password: <string>process.env.DEV_DB_PASSWORD,
        database: <string>process.env.DEV_DB_NAME,
        host: <string>process.env.DEV_DB_HOST,
        port: parseInt(<string>process.env.DEV_DB_PORT),
        dialect: <dialect>'postgres',
        migrationStorage: <string>process.env.DEV_DB_MIGRATION_STORAGE,
        migrationStoragePath: <string>process.env.DEV_DB_MIGRATION_STORAGE_PATH
    }
}
>>>>>>> eeac084cf061044e344790b90ae7322a61cbcefd
