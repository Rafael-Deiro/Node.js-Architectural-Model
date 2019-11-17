'use strict';

import { Model, DataTypes } from "sequelize";
import conn from './index';
import { exampleType } from './exampleType';

export interface IExample {
    readonly  id?: number,
    type: exampleType,
    title: string,
    text: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
}

class Example extends Model implements IExample {
    public readonly id!: number;
    public type!: exampleType;
    public title!: string;
    public text!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Example.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.ENUM('type 1', 'type 2', 'type 3'),
        defaultValue: 'type 1',
        allowNull: false,
        field: 'type',
        validate: {
            isIn: [['type 1', 'type 2', 'type 3']]
        }
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'title',
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    text: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'text',
        validate: {
            notEmpty: true,
            len: [3, 255]
        }
    }
}, {
    sequelize: conn,
    underscored: true,
    freezeTableName: true,
    tableName: 'examples',
    schema: 'gen',
    timestamps: false
});

export { Example };