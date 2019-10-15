'use strict';

const lodash = require('lodash');
const env = process.env.NODE_ENVIROMENT || 'local';
const envConfig = require(`./${env}`);

let defaultConfig = { env: env };

module.exports = lodash.merge(defaultConfig, envConfig);