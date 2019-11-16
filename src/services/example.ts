'use strict';

import { Example } from '../models/example';

class Services {
    public async getExamples(): Promise<any> {
        return new Promise((resolve, reject) => {
            Example.findAll()
            .then((examples: Example[]) => {
                if (examples.length > 0)
                    resolve(examples);
                else
                    throw new Error('No examples were found');
            })
            .catch((err: Error) => {
                reject(err);
            });
        });
    }
}

export const ExampleServices = new Services();