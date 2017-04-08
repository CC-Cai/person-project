/**
 * 日志模块（包含Odms日志）
 * 
 */
var tracer = require('tracer');
var Util = require('util');
var _ = require('lodash');
var config = require('../config/config');


var methods = ['debug', 'log', 'info', 'warn', 'error'];

module.exports = (function() {
    var obj = {};
    var tracerLogger = tracer.colorConsole({ level: config.log.level });

    methods.forEach(function(method) {
        obj[method] = function() {
            tracerLogger[method].apply(null, arguments);
        };
    });

    return obj;
})();