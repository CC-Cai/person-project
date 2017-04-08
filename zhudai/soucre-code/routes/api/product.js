var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
    // var url = "http://m.99dai.cn/Ajax/wxzaixiandai.aspx",
    //     cityName = "深圳市";
    // url = url + '?Random=' + Math.round(Math.random() * 1000) + '&CityName=' + cityName;
    // request.get(url, { headers: req.headers },
    //     function(error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             res.status(200)
    //                 .send(body);
    //         } else {
    //             res.status(400).send('');
    //         }
    //     });
    res.render('home/_productList');
});

module.exports = router;