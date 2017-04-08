/**
 * 工具函数模块
 */
var __isImageMimetype = function(mimetype) {
    return mimetype.split('/')[0] === 'image';
};

var __isExcelMimetype = function(mimetype) {
    mimetype = mimetype.split('/');
    return mimetype[1] &&
        (mimetype[1] === 'vnd.ms-excel' || mimetype[1] === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
};

var __isBinaryMimetype = function(mimetype) {
    return mimetype === 'application/octet-stream';
};

var __outputError = function(logger, level, req, error) {
    logger[level]('\r\n title: %s \r\n url: %s \r\n params: %j \r\n user-agent: %s \r\n',
        (error.name || '') + '  ' + (error.message || ''),
        req.originalUrl || '', {
            query: req.query || {},
            params: req.params || {},
            body: req.body.data || req.body || {}
        }, req.get('User-Agent') || '', error.stack);
};

module.exports = {
    isImageMimetype: __isImageMimetype,
    isExcelMimetype: __isExcelMimetype,
    isBinaryMimetype: __isBinaryMimetype,
    outputError: __outputError
};