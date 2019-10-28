'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class Services {
    async registerUser(pUser) {
        return new Promise((resolve, reject) => {
            let user = new user_1.User(pUser);
            //Implement better user verification middleware before registering
            user.validate()
                .then(() => {
                if (user.isNewRecord) {
                    // Implement user saving
                    throw new Error('User saving is not implemented yet');
                }
                else {
                    throw new Error('The sent user - somehow - already exists');
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    async getUsers() {
        return new Promise((resolve, reject) => {
            user_1.User.findAll()
                .then((users) => {
                if (users.length > 0)
                    resolve(users);
                else
                    throw new Error('No users were found');
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
exports.UserServices = new Services();
//# sourceMappingURL=user.js.map