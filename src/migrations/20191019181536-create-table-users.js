'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
      schema: "gen",
      charset: 'utf8'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
