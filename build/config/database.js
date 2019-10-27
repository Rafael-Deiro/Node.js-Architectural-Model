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
let databaseConfig;
exports.databaseConfig = databaseConfig;
switch (process.env.NODE_ENV) {
    case 'production':
        exports.databaseConfig = databaseConfig = {
            username: process.env.PROD_DB_USERNAME,
            password: process.env.PROD_DB_PASSWORD,
            database: process.env.PROD_DB_NAME,
            host: process.env.PROD_DB_HOST,
            port: parseInt(process.env.PROD_DB_PORT),
            dialect: process.env.PROD_DB_DIALECT,
            migrationStorage: process.env.PROD_DB_MIGRATION_STORAGE,
            migrationStoragePath: process.env.PROD_DB_MIGRATION_STORAGE_PATH
        };
        break;
    default:
        /*databaseConfig = {
            username: <string>process.env.DEV_DB_USERNAME,
            password: <string>process.env.DEV_DB_PASSWORD,
            database: <string>process.env.DEV_DB_NAME,
            host: <string>process.env.DEV_DB_HOST,
            port: parseInt(<string>process.env.DEV_DB_PORT),
            dialect: <dialect>process.env.DEV_DB_DIALECT,
            migrationStorage: <string>process.env.DEV_DB_MIGRATION_STORAGE,
            migrationStoragePath: <string>process.env.DEV_DB_MIGRATION_STORAGE_PATH
        };*/
        exports.databaseConfig = databaseConfig = {
            username: 'rafael',
            password: '22072000',
            database: 'dev.nodeSample',
            host: 'localhost',
            port: parseInt('5432'),
            dialect: 'postgres',
            migrationStorage: './build/migrations',
            migrationStoragePath: 'sequelize-meta.json'
        };
        break;
}
//# sourceMappingURL=database.js.map