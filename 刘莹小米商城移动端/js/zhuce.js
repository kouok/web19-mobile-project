window.onload = function() {
    // 将px转rem的公式代码
    function rem() {
        var w = document.documentElement.getBoundingClientRect().width;
        var bili = w / 3.75;
        document.documentElement.style.fontSize = bili + "px";
    }
    rem()
}