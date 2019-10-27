'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.databaseConfig = {
    production: {
        use_env_variable: 'DATABASE_URL',
        url: process.env.DATABASE_URL,
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOST,
        port: parseInt(process.env.PROD_DB_PORT),
        dialect: process.env.PROD_DB_DIALECT,
        migrationStorage: process.env.PROD_DB_MIGRATION_STORAGE,
        migrationStoragePath: process.env.PROD_DB_MIGRATION_STORAGE_PATH
    },
    development: {
        use_env_variable: 'DATABASE_URL',
        url: process.env.DATABASE_URL,
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOST,
        port: parseInt(process.env.DEV_DB_PORT),
        dialect: process.env.DEV_DB_DIALECT,
        migrationStorage: process.env.DEV_DB_MIGRATION_STORAGE,
        migrationStoragePath: process.env.DEV_DB_MIGRATION_STORAGE_PATH
    }
};
//# sourceMappingURL=database.js.map