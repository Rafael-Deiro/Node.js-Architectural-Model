'use strict';

import { Sequelize } from  "sequelize";
import { database } from '../config';

let conn = new Sequelize(database.database, database.username, database.password, database);

export default conn;

conn.authenticate()
.then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
.catch((err: Error) => {
    console.log(`Couldn't connect to database with Sequelize: ${err}`);
});