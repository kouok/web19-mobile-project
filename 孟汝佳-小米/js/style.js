window.addEventListener('load',function (){
    $(".nav-item").bind('touchstart',function () {
        $(this).find('span').addClass('bgred');
        $(this).siblings().find('span').removeClass('bgred');
    });

    TouchSlide({
        slideCell:"#slideBox",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //自动播放
    });

    TouchSlide({
        slideCell:"#focus",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
    });

    TouchSlide({
        slideCell:"#focuss",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
    });

    $(".tab-header .flex").bind('touchstart',function (){
        $(this).addClass('ons').siblings().removeClass('ons');
        $(".tab-item").eq($(this).index()).removeClass('dn').siblings().addClass('dn');
    })

    function topNav(){
        var topScroll=Math.floor($(window.scrollTop()));
        var scrollDist=180;
        if(topScroll<=scrollDist){
            $(".hh").css('opacity',topScroll/scrollDist);
        }else{
            $(".hh").css('opacity',1);
        }
    }

    $(".placert span").bind('touchstart',function (){
        $(this).eq($(this).index()).addClass('current').siblings().removeClass('current');
    })
})