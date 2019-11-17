'use strict';

import { Server } from './server';
import { Logger } from './helpers/logs';

Server.start()
.catch((err: Error) => {
    Logger.logError(err);
    console.log('Couldn`t start the application server');
});