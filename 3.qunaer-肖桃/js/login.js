/* 登录页JS */

window.onload = function () {
    // 登录方式的切换
    serena.tab("onclick", "title", "pal")
    // 登录验证
    serena.login();
}