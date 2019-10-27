'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    return queryInterface.createSchema('gen');
  },

  down: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    return queryInterface.dropSchema('gen');
  }
};
