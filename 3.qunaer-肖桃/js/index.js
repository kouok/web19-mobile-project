/* 首页JS */

window.onload = function () {
    // 顶部搜索框的切换
    serena.search("topipt")
    // 特惠度假的tab切换
    serena.tab("onclick","btn","pals")
    // 特惠门票的tab切换
    serena.tab("onclick","btn2","pals2")
    // 旅游攻略的tab切换
    serena.tab("onclick","btn3","pals3")
    // 到底和到顶的切换
    serena.toBom()
}