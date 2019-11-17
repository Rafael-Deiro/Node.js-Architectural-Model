'use strict';

import { Router } from 'express';
import { ExampleController } from '../controllers/common/example';

class GeneralRoutes {
    public static init() {
        const router = Router();

        router.use('/example', ExampleController.init());

        return router;
    }
}

export { GeneralRoutes }