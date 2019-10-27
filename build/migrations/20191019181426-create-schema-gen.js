'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize = sequelize_1.DataTypes) => {
        return queryInterface.createSchema('gen');
    },
    down: (queryInterface, Sequelize = sequelize_1.DataTypes) => {
        return queryInterface.dropSchema('gen');
    }
};
//# sourceMappingURL=20191019181426-create-schema-gen.js.map