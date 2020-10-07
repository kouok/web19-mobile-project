window.onload = function() {
    // 将px转rem的公式代码
    function rem() {
        var w = document.documentElement.getBoundingClientRect().width;
        var bili = w / 3.75;
        document.documentElement.style.fontSize = bili + "px";
    }
    rem()
}

// 登录的方式切换
$(function() {
    $(".shouji input").click(function() {
        if ($(this).val() == "手机短信登录/注册") {
            $(this).val("用户名密码登录")
            $(".tijiao input").val("立即登录/注册")
            $(".sj").css("display", "none")
            $(".yh").css("display", "block")
            $(".shou").css("display", "block")
            $(".liji").css("display", "none")
        } else if ($(this).val() == "用户名密码登录") {
            $(this).val("手机短信登录/注册")
            $(".yh").css("display", "none")
            $(".sj").css("display", "block")
            $(".liji").css("display", "block")
            $(".shou").css("display", "none")
            $(".tijiao input").val("登录")

        }
    })
})