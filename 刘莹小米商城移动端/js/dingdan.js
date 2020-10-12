window.onload = function() {
    // 将px转rem的公式代码
    function rem() {
        var w = document.documentElement.getBoundingClientRect().width;
        var bili = w / 3.75;
        document.documentElement.style.fontSize = bili + "px";
    }
    rem()


}

// 登录与注册的遮罩层
$(function() {
    $("header .deng").click(function() {
        $(".gu").css("display", "block")
    })
    $(".gu .jiao span").click(function() {
        $(".gu").css("display", "none")
    })
    $(".gu .jiao a").click(function() {
        $(".gu").css("display", "block")
    })
})