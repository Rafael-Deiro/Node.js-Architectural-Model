'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createSchema('gen');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropSchema('gen');
  }
};
