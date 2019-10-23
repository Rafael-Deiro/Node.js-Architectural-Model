'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    return queryInterface.createSchema('gen');
  },

  down: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    return queryInterface.dropSchema('gen');
  }
};
