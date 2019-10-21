'use strict';

import { Model, DataTypes } from "sequelize";
import { BinaryLike } from "crypto";
import conn from './index';

enum roles {
  'admin',
  'guest',
  'user'
}

export interface INewUser {
  email: string,
  password: BinaryLike,
  role: roles
}

export interface IUserAttributes extends INewUser {
  readonly id?: number;
  email: string;
  password: BinaryLike;
  role: roles;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

class User extends Model implements IUserAttributes {
  public id!: number;
  public email!: string;
  public password!: BinaryLike;
  public role!: roles;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    field: 'email',
    validate: {
      isEmail: true,
      len: [10, 150],
      is: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    }
  },
  password: {
    type: DataTypes.CHAR(60, true),
    allowNull: false,
    field: 'password',
    validate: {
      notEmpty: true,
      min: 59,
      max: 60
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'guest', 'user'),
    defaultValue: 'user',
    allowNull: false,
    field: 'role',
    validate: {
      isIn: [['admin', 'guest', 'user']]
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}, {
  sequelize: conn,
  underscored: true,
  freezeTableName: true,
  tableName: 'users',
  schema: 'gen'
});

export { User };