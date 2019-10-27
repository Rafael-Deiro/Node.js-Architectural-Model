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
const database_1 = require("./database");
dotenv.config();
exports.general = {
    enviroment: 'development',
    appName: process.env.APP_NAME
};
exports.server = {
    hostname: process.env.HOSTNAME,
    port: parseInt(process.env.PORT)
};
exports.database = database_1.databaseConfig;
//# sourceMappingURL=index.js.map