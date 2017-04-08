var express = require('express');
var router = express.Router();
var loanService = require('../../lib/service/loan-service');


/* GET home page. */
router.get('/', function(req, res, next) {
    Promise.all([
            loanService.fetchProductCategory({ producttype: 1 }),
            loanService.fetchList({ hot: 1 })
        ])
        .then(function(result) {
            res.render('loan/home', {
                title: '小鱼儿贷款平台',
                layout: 'layout/pages/layout',
                css: ['loan/home.css'],
                productCategory: result[0] || [],
                hotProducts: result[1] || []
            });
        });

});


router.get('/list', function(req, res, next) {
    var loantype = req.query.loantype || '';
    loanService.fetchList({ loantype: loantype })
        .then(function(result) {
            res.render('loan/list', {
                data: result,
                title: '小鱼儿贷款平台',
                layout: 'layout/pages/layout',
                css: ['/loan/list.css'],
            });
        })
        .catch(function(error) {
            next(error);
        });
});

router.get(/^\/detail\/(\d+)$/i, function(req, res, next) {
    var id = req.params[0];
    loanService.fetchList({ loanserialno: id })
        .then(function(result) {
            res.render('loan/list', {
                data: result,
                title: '小鱼儿贷款平台-贷款详情页',
                layout: 'layout/pages/layout',
                css: ['/loan/list.css'],
            });
        })
        .catch(function(error) {
            next(error);
        });
});


module.exports = router;