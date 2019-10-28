'use strict';

import * as dotenv from 'dotenv';

dotenv.config();

type dialect = 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql';
type dbConfig = {
    use_env_variable: string | null,
    url: string | undefined,
    dialect: string,
    migrationStorage: string,
    migrationStoragePath: string
}

export const production: dbConfig = {
    use_env_variable: 'DATABASE_URL',
    url: <string>process.env.DATABASE_URL || process.env.DB_URL,
    dialect: <dialect>process.env.PROD_DB_DIALECT,
    migrationStorage: <string>process.env.PROD_DB_MIGRATIONSTORAGE,
    migrationStoragePath: <string>process.env.PROD_DB_MIGRATIONSTORAGEPATH
}

export const development: dbConfig = {
    use_env_variable: null,
    url: <string>process.env.DB_URL,
    dialect: <dialect>process.env.DEV_DB_DIALECT,
    migrationStorage: <string>process.env.DEV_DB_MIGRATIONSTORAGE,
    migrationStoragePath: <string>process.env.DEV_DB_MIGRATIONSTORAGEPATH
}
