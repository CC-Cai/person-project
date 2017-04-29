var Home = {
    init: function() {
        this.initAction({ name: '深圳' });
    },
    initAction: function(result) {
        var rNum = Math.round(Math.random() * 1000);
        $.ajax({
            type: "get",
            url: "/api/product/list?Random=" + rNum + "&CityName=" + result.name,
            dataType: "text",
            beforeSend: function(XMLHttpRequest) {},
            success: function(data, textStatus) {
                $("#zxdUl").html(data);
            },
            complete: function(XMLHttpRequest, textStatus) {},
            error: function() {}
        });
    },
};

Home.init();