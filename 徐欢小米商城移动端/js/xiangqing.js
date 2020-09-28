window.onload = function() {

    var w = document.documentElement.getBoundingClientRect().width;
    //7.5是根据设计图的大小除以100，需要按照你的实际设计图换算
    var bili = w / 3.75;
    document.documentElement.style.fontSize = bili + "px";
    // 此时  100px=1rem

    // 轮播图
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true //自动播放
    });

    //库存加减
    var num_jia = document.querySelector(".num-jia");
    var num_jian = document.querySelector(".num-jian");
    var input_num = document.querySelector(".input-num");
    // 加
    num_jia.onclick = function() {
            input_num.value = parseInt(input_num.value) + 1;
        }
        //减
    num_jian.onclick = function() {

        if (input_num.value <= 0) {
            input_num.value = 0;
        } else {
            input_num.value = parseInt(input_num.value) - 1;
        }
    }

    // 遮罩层
    // 遮罩层型号选择
    var zhe = document.querySelector(".zhe");
    //关闭按钮
    var btn = document.querySelector(".btn");
    // 点击选项按钮
    var xinhao = document.querySelector(".xinhao");
    xinhao.onclick = function() {
        zhe.style.display = "block";
    }
    btn.onclick = function() {
        zhe.style.display = "none";
    }

    // 遮罩层地址选择

    var xuan = document.querySelector(".xuan");
    var dizhi = document.querySelector(".dizhi");
    //关闭按钮
    var btns = document.querySelector(".btns");
    xuan.onclick = function() {
        dizhi.style.display = "block";
    }
    btns.onclick = function() {
        dizhi.style.display = "none";
    }

    // 商品介绍切换
    var sptp = document.querySelectorAll(".chu");
    var sp = document.querySelectorAll(".shanpin a");

    for (i = 0; i < sp.length; i++) {
        sp[i].index = i
        sp[i].onclick = function() {
            for (j = 0; j < sp.length; j++) {
                sp[j].className = ""
            }
            for (h = 0; h < sptp.length; h++) {
                sptp[h].style.display = "none"
            }
            sptp[this.index].style.display = "block"
            this.className = "bian"
            return false
        }
    }

    // 小火箭
    var rocket = document.querySelector(".rocket");
    rocket.onclick = function() {
        var top = document.documentElement.scrollTop; //100
        var timer = setInterval(function() {
            top -= 5;
            console.log(1)
            document.documentElement.scrollTop = top;
            if (top <= 0) {
                clearInterval(timer);
            }
        }, 0.1);
    }







}