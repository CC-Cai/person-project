var express = require('express');
var router = express.Router();
var cardService = require('../../lib/service/card-service');


/* GET home page. */
router.get('/', function(req, res, next) {
    Promise.all([
            cardService.fetchProductCategory({ producttype: 2 }),
            cardService.fetchList({ hot: 1 }),
            cardService.fetchBanners({ producttype: 2 })
        ])
        .then(function(result) {
            res.render('card/home', {
                title: '小鱼儿贷款平台',
                layout: 'layout/pages/layout',
                css: ['/credit-card/home.css'],
                banksList: result[0] || [],
                hotProducts: result[1] || [],
                banners: result[2] || [],
                jsName: 'loan-home',
            });
        });

});


router.get('/list', function(req, res, next) {
    var loantype = req.query.loantype || '';
    cardService.fetchList({ loantype: loantype })
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


module.exports = router;