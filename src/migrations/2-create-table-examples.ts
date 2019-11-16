'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
        return queryInterface.createTable({ schema: 'gen', tableName: 'examples' }, {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            type: {
                type: Sequelize.ENUM('type 1', 'type 2', 'type 3'),
                defaultValue: 'type 1',
                allowNull: false,
                field: 'type',
                validate: {
                    isIn: [['type 1', 'type 2', 'type 3']]
                }
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
                field: 'title',
                validate: {
                    notEmpty: true,
                    len: [3, 50]
                }
            },
            text: {
                type: Sequelize.STRING(255),
                allowNull: false,
                field: 'text',
                validate: {
                    notEmpty: true,
                    len: [3, 255]
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updatedAt: {
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        }, {
            charset: 'utf8'
        });
    },

    down: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
        return queryInterface.dropTable('examples');
    }
};