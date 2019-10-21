'use strict';

import Server from './server';

Server.start()
.catch((err: Error) => {
    console.log({ message: 'Couldn`t start the application server', error: err.message, stack: err.stack });
});