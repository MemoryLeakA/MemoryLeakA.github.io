/**
* html页面点击特效实现 
*/
jQuery(function () {
    $("html").click(function(e) {
        var a = new Array(
        	'Hello World', 'C++', 'C', 'Python', 'Java', 'Html', 'CSS', 
        	'JavaScript', 'Win32', 'Qt', 'Linux', '程序猿', '❤❤❤'
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
            "fontSize": Math.floor((Math.random() * 10) + 15),
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

$(function(){
    $('#colour-variations ul').styleSwitcher({
        defaultThemeId: 'theme-switch',
        hasPreview: false,
        cookie: {
            expires: 30,
            isManagingLoad: true
        }
    }); 
    $('.option-toggle').click(function() {
        $('#colour-variations').toggleClass('sleep');
    });
});


document.getElementById('open-login').addEventListener('click', function() {
    var login = document.getElementById('login');
    login.style.display = 'unset';
});
document.getElementById('close-login').addEventListener('click', function() {
    var login = document.getElementById('login');
    login.style.display = 'none';
});
var currentIdx = 0;
var modelAddrs = [
            'https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json',          // 黑猫       0
            'https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json',          // 白猫       1
            'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',        // 萌娘       2
            'https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json',            // 狗狗       3
            'https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json',                // 萌妹1号     4
            'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',          // 萌妹2号 5
            'https://unpkg.com/live2d-widget-model-hibiki@1.0.5/assets/hibiki.model.json',          // 萌妹3号 6
            'https://unpkg.com/live2d-widget-model-izumi@1.0.5/assets/izumi.model.json',            // 萌妹4号 7
            'https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json',              // 萌妹5号 8
            'https://unpkg.com/live2d-widget-model-nico@1.0.5/assets/nico.model.json',              // 萌妹6号 9
            'https://unpkg.com/live2d-widget-model-ni-j@1.0.5/assets/ni-j.model.json',              // 萌妹7号 10
            'https://unpkg.com/live2d-widget-model-nipsilon@1.0.5/assets/nipsilon.model.json',      // 萌妹8号 11
            'https://unpkg.com/live2d-widget-model-nito@1.0.5/assets/nito.model.json',              // 萌妹9号 12
            'https://unpkg.com/live2d-widget-model-tsumiki@1.0.5/assets/tsumiki.model.json',        // 萌妹10号    13
            'https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json',    // 萌妹11号    14
            'https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json',        // 帅哥1号 15
            'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json'           // 帅哥2号 16
            ];
L2Dwidget.init({
    "model": {
        jsonPath: modelAddrs[currentIdx + 2],
        "scale": 1
    },
    "display": {
    "position": "right", //模型的表现位置
    "width": 200, //模型的宽度
    "height": 400, //模型的高度
    "hOffset": 0,
    "vOffset": -70
    },
    "mobile": {
        "show": false,
        "scale": 0.7,
        "hOffset": -100,
        "vOffset": -100
    },
    "react": {
        "opacityDefault": 0.2, //模型默认透明度
        "opacityOnHover": 0.2
    },
    "dialog": {
    	"enable": true,
    	"script": {
			//每20s，显示一言（调用一言Api返回的句子）
			'every idle 5s': '$hitokoto$',
			//触摸到class='star'对象
//			'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
			//触摸到身体
			'tap body': '哎呀呀,你在干嘛呀',
			//触摸到头部
			'tap face': '唔嗯~~'
      }
	}
});