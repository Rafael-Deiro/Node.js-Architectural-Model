/**
 * Use this file's content as a skeleton when creating a new migration.
 * Sequelize API's documentation: https://sequelize.org/master/identifiers.html
 */

'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    /**
     * Insert here the code executed for your migration
     */
  },

  down: (queryInterface: QueryInterface, Sequelize = DataTypes) => {
    /**
     * Insert here the code to rollback the migration if the it fails
     */
  }
};