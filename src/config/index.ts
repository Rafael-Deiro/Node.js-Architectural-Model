'use strict';

import * as dotenv from 'dotenv';
import { databaseConfig } from './database';

dotenv.config();

export const general = {
    enviroment: 'development',
    appName: <string>process.env.APP_NAME
}

export const server = {
    hostname: <string>process.env.HOSTNAME,
    port: parseInt(<string>process.env.PORT)
};

export const database = databaseConfig;