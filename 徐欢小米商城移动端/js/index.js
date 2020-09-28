// 固定回到顶部的出现
function ding() {
    document.body.onscroll = function() {
        var xifu = document.querySelector(".hea")
        var dingwei = document.getElementsByClassName("ding")[0]
        var jingxuan = document.getElementsByClassName("meiri")[0]
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        xifu.style.display = "block"
        if (top <= 0) {
            xifu.style.display = "none"
        }
        var t = getPos(jingxuan).top
        if (top >= t) {
            dingwei.style.display = "block"
        } else {
            dingwei.style.display = "none"
        }
    }
}
// 需求，当用户拉到底时，提示用户，别往下拉了

function getPos(ele) {
    // body... 
    // 初始值
    var l = 0; //21,21,8
    var t = 0;
    // l+=ele.offsetLeft;
    // l+=ele.offsetParent.offsetLeft
    while (ele.offsetParent) {
        // statement
        l += ele.offsetLeft + ele.offsetParent.clientLeft;
        t += ele.offsetTop + ele.offsetParent.clientTop;
        // 将元素替换为元素的定位父级（迭代）
        ele = ele.offsetParent;
        // console.log(ele);//father,grand,body,null
    }
    // 等上面的循环体结束后才会输出{}
    return {
        'left': l,
        'top': t
    };

}

// 回到顶部
function hui() {
    var hui = document.querySelector(".huidao")
    hui.onclick = function() {
        var top = document.documentElement.scrollTop
        var timer = setInterval(function() {
            top -= 10
            document.documentElement.scrollTop = top
            if (top <= 0) {
                clearInterval(timer)
            }
        }, 10)
    }
}

// 导航部分变色
function se() {
    var oran = document.querySelectorAll(".navLis>div")
    var li = document.querySelectorAll(".nav .quan li")
    for (i = 0; i < 6; i++) {
        oran[i].index = i
        oran[i].onclick = function() {
            for (j = 0; j < 6; j++) {
                oran[j].children[0].className = ""
            }
            for (h = 0; h < li.length; h++) {
                li[h].className = "mr10 bgw"
            }
            li[this.index].className = "mr10 cur bgw"
            this.children[0].className = "orange"
        }
    }
}

// 下箭头的变色
function xia() {
    var li = document.querySelectorAll(".nav .quan li")
    var oran = document.querySelectorAll(".navLis>div")
    for (i = 0; i < li.length; i++) {
        li[i].index = i
        li[i].onclick = function() {
            for (j = 0; j < li.length; j++) {
                li[j].className = "mr10 bgw"
            }
            for (h = 0; h < 6; h++) {
                oran[h].children[0].className = ""
            }
            oran[this.index].children[0].className = "orange"
            this.className = "mr10 cur bgw"
        }
    }
}
// 箭头翻转
$(function() {
    $(".xiajian").click(function() {
        $(".xiajian").addClass('dongci');
        $(this).toggleClass('dongci')
        $('.shang').addClass('dong');
        $('.nav').show(1000);
    })
    $('.shang').click(function() {
        $(".xiajian").addClass('dongci');
        $('.nav').hide(1000);
    })
})