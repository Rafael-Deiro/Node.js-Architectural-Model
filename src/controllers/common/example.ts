'use strict';

import { Router, Request, Response } from 'express';
import { ExampleServices } from '../../services/example';
import { Example } from '../../models/example';
import { Logger } from '../../helpers/logs';

class ExampleController {
    public static init() {
        const router: Router = Router();

        router.get('/', (req: Request, res: Response) => {
            ExampleServices.getExamples()
            .then((examples: Example[]) => {
                res.json({ success: true, results: examples });
            })
            .catch((err: Error) => {
                Logger.logError(err);
                
                if (err.name.includes('Sequelize'))
                    res.json({ success: false, error: err });
                else
                    res.json({ success: false, error: { name: err.name, message: err.message } });
            });
        });

        return router;
    }
}

export { ExampleController }