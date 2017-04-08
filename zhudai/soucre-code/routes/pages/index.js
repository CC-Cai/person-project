var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', {
        title: 'Home Index',
        layout: 'layout/pages/layout'
    });
});

/* GET home page. */
router.get('/daikuan', function(req, res, next) {
    res.render('home/daikuan', {
        title: 'homePage',
        layout: 'layout/pages/layout'
    });
});

/* GET home page. */
router.get(/^\/wxshishidaiDetail_(\d+)\.shtml$/, function(req, res, next) {
    var id = parseInt(req.params[0]);
    var soucer = 'home/detail';
    switch (id) {
        case 53:
            {
                soucer = 'home/detail53';
                break;
            }
        case 87:
            {
                soucer = 'home/detail87';
                break;
            }

    }
    res.render(soucer, {
        title: 'homePage',
        layout: 'layout/pages/layout'
    });
});

module.exports = router;