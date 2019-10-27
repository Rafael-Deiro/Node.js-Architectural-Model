'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
var roles;
(function (roles) {
    roles[roles["admin"] = 0] = "admin";
    roles[roles["guest"] = 1] = "guest";
    roles[roles["user"] = 2] = "user";
})(roles || (roles = {}));
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
        field: 'email',
        validate: {
            isEmail: true,
            len: [10, 150],
            is: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }
    },
    password: {
        type: sequelize_1.DataTypes.CHAR(60, true),
        allowNull: false,
        field: 'password',
        validate: {
            notEmpty: true,
            min: 59,
            max: 60
        }
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('admin', 'guest', 'user'),
        defaultValue: 'user',
        allowNull: false,
        field: 'role',
        validate: {
            isIn: [['admin', 'guest', 'user']]
        }
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'updated_at'
    }
}, {
    sequelize: index_1.default,
    underscored: true,
    freezeTableName: true,
    tableName: 'users',
    schema: 'gen'
});
//# sourceMappingURL=user.js.map