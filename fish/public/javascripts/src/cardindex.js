var Home = {
    init: function() {
        this.initAction();
    },
    initAction: function() {
        $('[rel]').on('click', function() {
            var type = $(this).attr('rel');
            window.location.href = "/card/list?bankId=" + type;
        });
    },
};

Home.init();