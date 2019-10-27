'use strict';

import { general, server } from './config';
import { APIRoutes } from './routes';
import express from 'express';

export default class Server {
    public static async start() {
        const app: express.Application = express();

        app.get('/', (req, res) => {
            res.json({ success: true, message: 'App successfully online' });
        });

        app.use('/api', APIRoutes.init());

        app.listen(server.port, server.hostname, () => {
            console.log(`Server listening on http://${server.hostname}:${server.port} for \'${general.appName}\' application...`);
        });
    }
}