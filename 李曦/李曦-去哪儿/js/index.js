window.onload = function() {
    //  将px转rem的公式代码 
    var w = document.documentElement.getBoundingClientRect().width;
    var bili = w / 3.75; //100
    document.documentElement.style.fontSize = bili + "px";


    // 小火箭
    $(window).scroll(function() {
        $('.icon-maotouying').addClass('icon-huojian').removeClass('icon-maotouying');
        if (document.documentElement.scrollTop == 0) {
            $('#huojian').removeClass('icon-huojian').addClass('icon-maotouying');
        }
    });


    // 搜索区
    var search_span = document.querySelector(".search_span");
    var header = document.querySelector('.header');
    var search2 = document.querySelector('.search2');
    var main = document.querySelector('.main');
    var flag = true;
    search_span.onclick = function() {
        if (flag) {
            header.style.display = 'none';
            search2.style.display = 'block';
            main.style.display = 'none';
            flag = !flag;
        }
    };
    // 清空搜索
    $('.search_ipt .icon-quxiao').click(function() {
        $('#searchIpt').val('');
    });
    // 百度地图API功能
    function G(id) {
        return document.getElementById(id);
    }
    var map = new BMap.Map("l-map");
    map.centerAndZoom("张家界", 12); // 初始化地图,设置城市和地图级别。

    var ac = new BMap.Autocomplete( //建立一个自动完成的对象
        {
            "input": "searchIpt",
            "location": map
        });

    ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp)); //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    };


    // tab切换
    function tabs(a, b) {
        a.click(function() {
            console.log(222);
            $(this).addClass("vacationCurTab").siblings().removeClass("vacationCurTab");
            b.eq($(this).index()).show(400).siblings().hide(400);
        });
    };
    tabs($(".vacation_tab>a"), $(".vacation_bd>div"));
    tabs($(".vacation_tab2>a"), $(".vacation_bd2>div"));
    tabs($(".vacation_tab3>a"), $(".vacation_bd3>div"));

    // 轮播图js
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true //自动播放
    });

    // 底部
    $('.bottom_nav>a').click(function() {
        $(this).addClass('bottomNavCur').siblings().removeClass('bottomNavCur');
    })
}