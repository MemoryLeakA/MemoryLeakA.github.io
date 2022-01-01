
/**
* html页面点击特效实现 
*/
jQuery(function () {
    $("html").click(function(e) {
        var a = new Array(
        	'❤Hello❤World❤', '❤C++❤', '❤C❤', '❤Python❤', '❤Java❤', '❤Html❤', '❤CSS❤', 
        	'❤JavaScript❤', '❤Win32❤', '❤Qt❤', '❤Linux❤', '❤程序猿❤', '❤❤❤'
         );
        var a_idx = Math.floor((Math.random() * a.length));
        var color1 = Math.floor((Math.random() * 255));
        var color2 = Math.floor((Math.random() * 255));
        var color3 = Math.floor((Math.random() * 255));

        var $i = $("<span />").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({　　　　　　
            "z-index": 9999999999999 ,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-family":"微软雅黑",
            "fontSize":Math.floor((Math.random() * 22) + 15),
            "font-weight": "bold",
            "color": "rgb(" + color1 + ", " + color2 + ", " + color3 + ")",
            "-webkit-user-select":"none",
            "-moz-user-select":"none",
            "-ms-user-select":"none",
            "user-select":"none",
        });
        $("body").append($i);
        $i.animate({
                "top": y - 200,
                "opacity": 0
            },
            1000,
            function() {
                $i.remove();
            });
    });
});
