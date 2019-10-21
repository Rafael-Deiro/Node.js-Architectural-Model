'use strict';

import { User } from '../models/user';

class Services {
    public async registerUser(pUser: User) {
        return new Promise((resolve, reject) => {
            let user = new User(pUser);

            //Implement better user verification middleware before registering

            user.validate()
            .then(() => {
                if (user.isNewRecord){
                    // Implement user saving
                    throw new Error('User saving is not implemented yet');
                }
                else {
                    throw new Error('The sent user - somehow - already exists');
                }
            })
            .catch((err: Error) => {
                reject(err);
            });
        });
    }
    
    public async getUsers(): Promise<any> {
        return new Promise((resolve, reject) => {
            User.findAll()
            .then((users: User[]) => {
                if (users.length > 0)
                    resolve(users);
                else
                    throw new Error('No users were found');
            })
            .catch((err: Error) => {
                reject(err);
            });
        });
    }
}


export const UserServices = new Services();