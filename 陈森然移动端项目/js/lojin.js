function name(params) {
    var width = window.innerWidth;
    //6.4是根据设计图的大小除以100
    var bili = width / 3.75;
    document.documentElement.style.fontSize = bili + "px";
}
name()


function tab(anniu, yuansu) {
    var index = 0;
    var tab = document.getElementsByClassName(anniu);
    var table = document.getElementsByClassName(yuansu)
    for (var i = 0; i < tab.length; i++) {
        tab[i].setAttribute("index", i)
        tab[i].onclick = function name(params) {
            index = Number(this.getAttribute("index"));
            for (var j = 0; j < tab.length; j++) {

                tab[j].style.background = " #25a4bb"
                tab[j].style.color = "#fff"
                table[j].style.display = "none"
            }
            tab[index].style.background = " #fff"
            tab[index].style.color = "#25a4bb"
            table[index].style.display = "block"
        }
    }
}
tab("tab", "table")

var huoqu = document.querySelector(".huoqu")

var flag = true;
huoqu.onclick = function () {
    if (flag) {
        this.disabled = true
        var a = 60;
        times = setInterval(function fun() {
            huoqu.innerText = a-- + "秒后获取";
            if (a <= -2) {
                huoqu.innerText = "点击再次获取";
                clearInterval(times);
                huoqu.disabled = false;
            }
        }, 1000);
        flag = false;
    } else {
        this.disabled = true
        var a = 60;
        times = setInterval(function fun() {
            huoqu.innerText = a-- + "秒后获取";
            if (a <= -2) {
                huoqu.innerText = "点击再次获取";
                clearInterval(times);
                huoqu.disabled = false;
            }
        }, 1000);
        flag = true
    }

    localStorage.setItem("name", huoqu.innerText);
}

window.onunload = function () {
    localStorage.setItem("name", huoqu.innerText);
    this.disabled = true
}

var fag=false;

huoqu.innerText = localStorage.getItem("name")

// function time(){
//     if(fag){
//     times = setInterval(function fun() {
//         huoqu.innerText = Number(localStorage.getItem("name").slice(0, 2)) -- + "秒后获取";
//         if (Number(localStorage.getItem("name").slice(0, 2)) <= -2) {
//             huoqu.innerText = "点击再次获取";
//             clearInterval(times);
//             huoqu.disabled = false;
//         }
//     }, 1000);
//     flag = false
//     }
// }

// time()