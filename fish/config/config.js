var env = process.env.NODE_ENV;
var private;

try {
    private = {
        port: 3000,
        log: {
            level: 'debug',
            tracer: {
                dir: './logs'
            }
        },
        serviceHost: '112.74.184.28',
    };
} catch (error) {
    console.warn('There is no matched config file for current environment');
    private = {};
}

// 公用配置
var defaults = {

};

module.exports = Object.assign(defaults, private);