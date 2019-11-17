'use strict';

import { general, server } from './config';
import { APIRoutes } from './routes';
import express from 'express';

export class Server {

    public static async start() {
        const app: express.Application = express();
        const appRoutes = {
            user: {
                list: 'GET /api/user',
                create: 'POST /api/user'
            }
        }

        app.get('/', (req, res) => {
            res.json({ success: true, message: 'App successfully online', avaliableRoutes: appRoutes });
        });

        app.use('/api', APIRoutes.init());

        app.listen(process.env.PORT || server.port, () => {
            console.log(`Server listening on port ${process.env.PORT || server.port} for \'${general.appName}\' application using ${general.enviroment} enviroment...`);
        });
    }
}