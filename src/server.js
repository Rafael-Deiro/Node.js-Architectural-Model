'use strict';

const config = require('./config');
const routes = require('./routes');
const express = require('express');
const app = express();

const server = {
    start: function() {
        routes.init(app);

        app.listen(config.server.port, config.server.hostname, () => {
            console.log(`Server listening on http://${config.server.hostname}:${config.server.port} for \'${config.general.appName}\' application...`);
        });
    }
}

module.exports = server;