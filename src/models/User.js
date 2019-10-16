'use strict';

const sequelize = require('../config/sequelize').connect();
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class User extends Model {
    email;
    password;
    role;

    new = async () => {
        if (!email || !password){
            return Promise.reject(Error('Please send an email and a password'));
        }
        else {
            try {
                // Encrypt password and check DB for duplicates

                let newUser = await User.create({
                    email: this.email,
                    password: this.password,
                    role: this.role
                });

                return Promise.resolve({ saved: true, newUser: newUser });
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    }
}

User.init({
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
    }
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;