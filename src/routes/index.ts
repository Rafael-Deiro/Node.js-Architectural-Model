'use strict';

import { UserController } from '../controllers/user';
import { Router, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';

class APIRoutes {
    public static init(){
        const router: Router = Router();

        router.all('*', (req: Request, res: Response, next: NextFunction) => {
            console.log(`Request made to: ${req.originalUrl}`);
            next();
        });

        router.use(bodyParser.json());
        router.use('/user', UserController.init());

        return router;
    }
}

export { APIRoutes }