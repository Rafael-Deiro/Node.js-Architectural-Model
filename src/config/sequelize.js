'use strict';

const Sequelize = require('sequelize');
const config = require('./index').database;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
});

function connect(){
    sequelize.authenticate()
    .then(() => {
        console.log('Connection successfully established to database with Sequelize!');
    })
    .catch(err => {
        console.log(`Couldn't connect to database with Sequelize: ${err}`);
    });

    return sequelize;
}

module.exports = { connect: connect }