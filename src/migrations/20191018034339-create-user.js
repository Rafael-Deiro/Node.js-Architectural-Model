'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        validate: {
            max: 150
        },
        allowNull: false,
        field: 'user_email'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'user_password'
      },
      role: {
        type: Sequelize.ENUM('Admin', 'Guest', 'User'),
        defaultValue: 'User',
        allowNull: false,
        field: 'user_role'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};