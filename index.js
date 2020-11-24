'use strict';

module.exports = require('router');
module.exports.Request = require('./request');
module.exports.Response = require('./response');

global.router = module.exports