'use strict';

import { Router, Request, Response } from 'express';
import { UserServices }  from '../services/user';
import { User } from '../models/user';

class UserController {
    public static init() {
        const router: Router = Router();
        
        router.get('/', (req: Request, res: Response) => {
            UserServices.getUsers()
            .then((users: User[]) => {
                res.json({ success: true, results: users });
            })
            .catch((err: Error) => {
                if (err.name.includes('Sequelize'))
                    res.json({ success: false, error: err });
                else
                    res.json({ success: false, error: { name: err.name, message: err.message } });
            });
        });

        router.post('/', (req: Request, res: Response) => {
            const sentUser = req.body;

            UserServices.registerUser(sentUser)
            .then((addedUser) => {
                res.json({ success: true, newUser: addedUser });
            })
            .catch((err) => {
                if (err.name.includes('Sequelize'))
                    res.json({ success: false, error: err });
                else
                    res.json({ success: false, error: { name: err.name, message: err.message } });
            });
        });
        
        return router;
    }
}

export { UserController }