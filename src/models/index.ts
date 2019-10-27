'use strict';

import { Sequelize } from  "sequelize";
import { database, general } from '../config';

let conn: Sequelize;

if (process.env.DATABASE_URL){
    console.log('Running heroku database');
    conn = new Sequelize(database.development.url, database.development)
}
else {
    console.log('Running local database');
    conn = new Sequelize(database['development'].database, database['development'].username, database['development'].password, database['development'])
}

export default conn;

conn.authenticate()
.then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
.catch((err: Error) => {
    console.log(`Couldn't connect to database with Sequelize: ${err}`);
});