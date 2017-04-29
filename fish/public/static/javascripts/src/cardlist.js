var CardList = {
    init: function() {
        this.initAction();
    },
    initAction: function() {
        var _this = this,
            bankId = _this.getUrlVar('bankId'),
            param = {
                bankId: bankId,
                pageIndex: 1,
                pageSize: 20,
                cityCode: 4403
            };
        _this.getCardData(param, function(data) {
            var res = data.data,
                cardCon = _this.showCard(res);
            $('ul.bankcard').html(cardCon);
            if (res.banner.length) {
                var con = '<img src="' + res.banner[0].pictureUrl + '" link="' + res.banner[0].applyUrl + '" log="' + res.banner[0].id + '"/>';
                $('.banner').prepend(con);
            }

            $('.applybutton').on('click', function() {
                window.location.href = $(this).attr('link');
            });
        });
    },
    showCard: function(res) {
        var cardAll = res.card;
        var cardSpecial = res.special;
        if (cardSpecial && cardSpecial.length) cardAll = cardSpecial.concat(cardAll);
        var con = '';
        for (var i = 0; i < cardAll.length; i++) {
            var card = cardAll[i];
            var horn = '';
            var cardDir = '';
            var TagCon = '';
            if (card.recommend) horn = '<span class="horn">推</span>';
            if (card.hot) horn = '<span class="horn">热</span>';
            var carddec = card.cardDesc.split('|');
            var cardTag = card.bankCardTag;
            if (cardTag && cardTag != 'null') {
                cardTag = cardTag.split('|');
                for (var b = 0; b < cardTag.length; b++) {
                    if (!cardTag[b]) continue;
                    TagCon += '<a>' + cardTag[b] + '</a>';
                }
            }
            if (card.cardSpecil) cardDir = ' upright';
            if (!carddec[1]) carddec[1] = '&nbsp';
            var cardLink = card.cardLink;
            if (card.bankid == 11) {
                var orderid = 'orderid=' + Param.user_id;
                var time = '&time=' + Date.parse(new Date()) / 1000;
                var addId = '&adid=' + GetRequest(cardLink, 'pid');
                var add = /\?/.test(cardLink) ? '&' : '?';
                if (/\?$/.test(cardLink) || /\&$/.test(cardLink)) add = '';
                cardLink = cardLink + add + orderid + time + addId;
            }
            con += '<li log="' + card.id + '" bankid="' + card.bankId + '">' + horn + '<p class="cardtitle">' + card.cardName + '</p>' + '<div class="pro' + cardDir + '"><img src="' + card.cardPic + '"/><div class="cardmess">' +
                '<p>' + carddec[0] + '</p>' + '<p>' + carddec[1] + '</p>' + '<div class ="tips">' + TagCon + '</div></div>' + '<a class="applybutton" link=' +
                '"' + cardLink + '">立即申请</a></div></li>';
        }
        if (!con) con = '<li><p class="nocard">无此类卡，小主请放宽条件再试试哦</p></li>';
        return con;
    },
    getCardData: function(param, callback) {
        $.ajax({
            url: 'http://banka.u51.com/bdc-banka/api/v1/card/listBankCardNew',
            type: 'GET',
            data: param,
            dataType: 'jsonp',
            success: function(data) {
                callback(data);
            },
            error: function() {

            }
        });
    },
    getUrlVar: function(name) { //获取url参数
        var getUrlVars = function() {
            var vars = [],
                hash;
            var hashes = location.search.slice(1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        };
        return getUrlVars()[name] || '';
    }
};

CardList.init();