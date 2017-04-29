var http = require('http');
var rError = require('../request-error');
var config = require('../../config/config');
var querystring = require('querystring');

var _requestFcotory = function(url, methods) {
    return function(params) {
        return new Promise(function(resolve, reject) {
            http.get({
                host: config.serviceHost,
                path: url + '?' + (querystring.stringify(params) ? querystring.stringify(params) : '') + '&t=' + new Date().getTime(),
                headers: {
                    'User-Agent': 'curl/7.30.0',
                    'Accept': '*/*',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                timeout: 200,
            }, function(response) {
                var resData = '';
                if (response.statusCode == 200) {
                    response.on("data", function(data) {
                        resData += data;
                    });
                    response.on("end", function() {
                        if (resData) {
                            resolve(JSON.parse(resData));
                        } else {
                            resolve([]);
                        }

                    });
                } else {
                    reject(new rError());
                }
            });
        });
    };
};


module.exports = {
    fetchList: _requestFcotory('/fishapi/cardproducts'),
    fetchProductCategory: _requestFcotory('/fishapi/producttypes')
};