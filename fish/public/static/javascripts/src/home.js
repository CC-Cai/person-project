define(['swiper', ], function(Swiper) {
    var Home = {
        init: function() {
            var swiper = new Swiper('.cchannel-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 2000,
            });
        }
    };
    return Home;
});