'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
let conn = new sequelize_1.Sequelize(config_1.database['development'].database, config_1.database['development'].username, config_1.database['development'].password, config_1.database['development']);
exports.default = conn;
conn.authenticate()
    .then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
    .catch((err) => {
    console.log(`Couldn't connect to database with Sequelize: ${err}`);
});
//# sourceMappingURL=index.js.map