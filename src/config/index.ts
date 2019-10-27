'use strict';

import * as dotenv from 'dotenv';
import * as databaseConfig from './database';

dotenv.config();

type enviroment = 'development' | 'production';

export const general = {
    enviroment: <enviroment>process.env.NODE_ENV,
    appName: <string>process.env.APP_NAME
}

export const server = {
    hostname: <string>process.env.HOSTNAME,
    port: parseInt(<string>process.env.PORT)
};

export const database = databaseConfig;