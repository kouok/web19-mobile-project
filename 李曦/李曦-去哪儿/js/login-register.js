window.onload = function() {
    // px转rem
    var w = document.documentElement.getBoundingClientRect().width;
    var bili = w / 3.75; //100
    document.documentElement.style.fontSize = bili + "px";

    // 登录面板切换
    $('.header_b div').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        $(".main_bd_lr>div").eq($(this).index()).show(400).siblings().hide(400);
        if ($(this).index() == 1) {
            $('.getPswd').show();
        } else {
            $('.getPswd').hide();
        }
    });

}