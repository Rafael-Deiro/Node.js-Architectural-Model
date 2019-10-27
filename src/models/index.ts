'use strict';

import { Sequelize } from  "sequelize";
import { database, general } from '../config';

<<<<<<< HEAD
let env = general.enviroment;
let conn: Sequelize = new Sequelize(String(database[env].url), Object(database[env]));
=======
let conn: Sequelize;

if (process.env.DATABASE_URL){
    console.log('Running heroku database');
    conn = new Sequelize(database.development.url, database.development)
}
else {
    console.log('Running local database');
    conn = new Sequelize(database['development'].database, database['development'].username, database['development'].password, database['development'])
}
>>>>>>> eeac084cf061044e344790b90ae7322a61cbcefd

export default conn;

conn.authenticate()
.then(() => {
    console.log('Connection successfully established to database with Sequelize!');
})
.catch((err: Error) => {
    console.log(`Couldn't connect to database with Sequelize: ${err}`);
});