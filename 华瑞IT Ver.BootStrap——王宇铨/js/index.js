window.onload=function(){


    // 导航栏漂浮
    (function(){

        var nav=document.querySelector("#header");
        document.body.onscroll=function(){
            if(document.documentElement.scrollTop>0){
                nav.className="shadow-sm bg-white navFixed";
            }else{
                nav.className="shadow-sm bg-white";
            }
        }

    })();


    // 调用动画
    var wow=new WOW({
        offset: 100,   
    });
    wow.init();


    


}

// 修改轮播图设置
    $('.carousel').carousel({
      interval: 3000
    });


jQuery(function(){
    jQuery('.menu').singlePageNav({
        offset: 50,                  // 距离浏览器顶部的偏移量
        currentClass: 'current',    // 修改默认的导航的高亮样式
        currentThreshold: 0,        // Threshold for triggering current section action
        duration: 2000,              // 动画速度：默认是500毫秒 
        effect: 'swing',            // 动画效果。默认是swing，可以是linear
        started: function (){},     // Callback at start of animation
        finished: function (){}     // Callback after animation is finished
    });
});