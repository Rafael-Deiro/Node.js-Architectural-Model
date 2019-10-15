'use strict';

const server = require('./server');
const configs = require('./configs');
const db = require('./configs/db');

server.create(configs, db);
server.start();