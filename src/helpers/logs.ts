'use strict';

import * as fs from 'fs';
import * as path from 'path';
import { general as cfg } from '../config';

class Logger {
    private logsPath: string;
    private static instance: Logger = new Logger();

    public constructor() {
        this.logsPath = path.resolve(cfg.logsPath);

        if (!fs.existsSync(this.logsPath)) {
            fs.mkdir(this.logsPath, (err: Error|null) => {
                if (err)
                    console.log(err.message);
            });
        }
    }

    public logToFile(filename: string, contents: string) {
        fs.appendFile(`${this.logsPath}/${filename}`, contents, (err: Error|null) => {
            if (err)
                console.log('Logger couldn\'t log to the desired path.');
            else
                console.log(`Successfuly logged to '${filename}'!`);
        });
    }

    public static logError(err: Error) {
        const logger = Logger.instance;
        const logTime = new Date();
        const logText = `Log Time: ${logTime}\nError: ${err}\n\n`;

        logger.logToFile('errors.txt', logText);
    }
}

export { Logger }