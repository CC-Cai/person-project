var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('card/index', {
        title: 'homePage',
        layout: 'layout/pages/layout2'
    });
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    res.render('card/list', {
        title: 'homePage',
        layout: 'layout/pages/layout3'
    });
});

module.exports = router;