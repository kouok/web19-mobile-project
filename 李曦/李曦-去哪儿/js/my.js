window.onload = function() {
    // px转rem
    var w = document.documentElement.getBoundingClientRect().width;
    var bili = w / 3.75; //100
    document.documentElement.style.fontSize = bili + "px";
}