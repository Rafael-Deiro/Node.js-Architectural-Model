'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
let env = config_1.general.enviroment;
let conn = new sequelize_1.Sequelize(String(config_1.database[env].url), Object(config_1.database[env]));
exports.default = conn;
conn.authenticate()
    .then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
    .catch((err) => {
    console.log(`Couldn't connect to database with Sequelize: ${err}`);
});
//# sourceMappingURL=index.js.map