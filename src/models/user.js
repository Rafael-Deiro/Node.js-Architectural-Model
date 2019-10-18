'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
          max: 150
      },
      allowNull: false,
      field: 'user_email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_password'
    },
    role: {
      type: DataTypes.ENUM('Admin', 'Guest', 'User'),
      defaultValue: 'User',
      allowNull: false,
      field: 'user_role'
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};