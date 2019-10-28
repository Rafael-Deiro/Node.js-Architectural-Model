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
exports.production = {
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL || process.env.DB_URL,
    dialect: process.env.PROD_DB_DIALECT,
    migrationStorage: process.env.PROD_DB_MIGRATIONSTORAGE,
    migrationStoragePath: process.env.PROD_DB_MIGRATIONSTORAGEPATH
};
exports.development = {
    use_env_variable: null,
    url: process.env.DB_URL,
    dialect: process.env.DEV_DB_DIALECT,
    migrationStorage: process.env.DEV_DB_MIGRATIONSTORAGE,
    migrationStoragePath: process.env.DEV_DB_MIGRATIONSTORAGEPATH
};
//# sourceMappingURL=database.js.map