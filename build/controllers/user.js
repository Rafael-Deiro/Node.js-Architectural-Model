'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../services/user");
class UserController {
    static init() {
        const router = express_1.Router();
        router.get('/', (req, res) => {
            user_1.UserServices.getUsers()
                .then((users) => {
                res.json({ success: true, results: users });
            })
                .catch((err) => {
                if (err.name.includes('Sequelize'))
                    res.json({ success: false, error: err });
                else
                    res.json({ success: false, error: { name: err.name, message: err.message } });
            });
        });
        router.post('/', (req, res) => {
            const sentUser = req.body;
            user_1.UserServices.registerUser(sentUser)
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
exports.UserController = UserController;
//# sourceMappingURL=user.js.map