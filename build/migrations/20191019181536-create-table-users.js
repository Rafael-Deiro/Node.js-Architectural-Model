'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize = sequelize_1.DataTypes) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING(150),
                validate: {
                    max: 150
                },
                allowNull: false,
                field: 'email'
            },
            password: {
                type: Sequelize.CHAR(60, true),
                allowNull: false,
                field: 'password'
            },
            role: {
                type: Sequelize.ENUM('admin', 'guest', 'user'),
                defaultValue: 'user',
                allowNull: false,
                field: 'role'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        }, {
            charset: 'utf8'
        });
    },
    down: (queryInterface, Sequelize = sequelize_1.DataTypes) => {
        return queryInterface.dropTable('users');
    }
};
//# sourceMappingURL=20191019181536-create-table-users.js.map