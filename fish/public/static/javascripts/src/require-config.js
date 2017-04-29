var fileVersion = {
    'zepto': '/static/javascripts/libs/zepto/1.1.6/zepto.min',
    "require-text": "/static/javascripts/libs/require/2.1.11/plugins/require-text/text.min",
    "require-css": "/static/javascripts/libs/require/2.1.11/plugins/require-css/css.min",
    'swiper': '/static/javascripts/libs/swiper/3.1.0/swiper.min',
    'loan-home': '/static/javascripts/src/home'
};
requirejs.config({
    baseUrl: '',
    urlArgs: '1.0.0',
    paths: fileVersion,
    waitSeconds: 0, //超时时间
    shim: { //deps依赖关系
        zepto: {
            exports: '$'
        },
        swiper: {
            deps: ['css!swiper-css']
        }
    },
    map: {
        "*": {
            'css': 'require-css',
            'jquery': 'zepto',
            'swiper-css': '/static/javascripts/libs/swiper/3.1.0/swiper.min'
        }
    }
});