var Util = require('util');

var RequestError = module.exports = function() {
    this.name = 'Request-Error';
    this.code = '00001';
    this.message = '请求接口出错,找不到指定资源';

    Error.captureStackTrace(this, RequestError);
};

Util.inherits(RequestError, Error);