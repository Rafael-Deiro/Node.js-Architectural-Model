'use strict';

const express = require('express');
const server = express();

module.exports = {
    create: function(config, db) {
        const routes = require('../routes');

        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        routes.init(server);
    },
    start: function() {
        const hostname = server.get('hostname');
        const port = server.get('port');

        server.listen(port, hostname, () => {
            console.log(`Server listening on http://${hostname}:${port}`);
        });
    }
};