'use strict';

import { Sequelize } from  "sequelize";
import { database, general } from '../config';
import { Logger } from '../helpers/logs';

let env = general.enviroment;
let conn: Sequelize = new Sequelize(String(database[env].url), Object(database[env]));

export default conn;

conn.authenticate()
.then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
.catch((err: Error) => {
    Logger.logError(err);
    console.log(`Couldn't connect to database with Sequelize.`);
});