/*! serena - v1.0.0 - 9/19/2020  https://blog.csdn.net/Serena_tz  By Serena */

(function (w) {
    w.serena = {};  
    /*
     * 求元素到页面的绝对距离：
     * 不需要传入参数,直接使用函数的返回值
     * 例如:serena.getPos("元素").left,得到元素距离左侧的绝对距离
     *      serena.getPos("元素").top,得到元素距离上侧的绝对距离
     */
    serena.getPos = function (ele) {
        // 初始左边距和上边距都为0
        var l = 0;
        var t = 0;
        // 当元素存在定位父级(即ele.offsetParent不为null)时，执行本循环内的代码块
        while (ele.offsetParent) {
            // 初始的边距累加元素的边距和边框宽度
            l += ele.offsetLeft + ele.offsetParent.clientLeft;
            t += ele.offsetTop + ele.offsetParent.clientTop;
            // 将元素替换为元素的定位父级（迭代）
            ele = ele.offsetParent;
        }
        // 等上面的循环体结束后才会输出{}
        return {
            'left': l,
            'top': t
        };
    }
    /*
     * tab切换页：
     * serena.tab("触发函数的事件名","面板标题的CSS选择器","面板的CSS选择器")
     * 例如:serena.tab("onmouseover","#tabTit li","#tabBody .tab-pal")
     */
    serena.tab = function (e, titleId, palId) {
        // 获取面板标题的父级
        var title = document.getElementById(titleId);
        // 获取所有面板标题
        // var li = document.querySelectorAll(li);
        var palTitles = title.children;
        // 获取面板父级
        var pal = document.getElementById(palId);
        // 获取所有面板
        var pals = pal.children;
        for (var i = 0; i < palTitles.length; i++) {
            // 给每个面板标题绑定编号
            palTitles[i].setAttribute("index", i);
            palTitles[i].index = i;
            // 给每个面板标题绑定响应函数
            palTitles[i][e] = function () {
                // 设置面板标题样式的切换
                for (var j = 0; j < palTitles.length; j++) {
                    // 先清除所有面板标题的样式
                    palTitles[j].className = "";
                }
                // 给当前点击触发事件的面板标题添加样式
                this.className = "on";
                // 设置面板的切换
                for (var x = 0; x < pals.length; x++) {
                    // 先将所有面板隐藏
                    pals[x].style.display = "none";
                }
                // 显示当前触发事件的面板标题对应的面板
                pals[this.index].style.display = "block";
            }
        }
    }
    // 搜索页的切换
    serena.search = function (id) {
        var ipt = document.getElementById(id);
        var ipt2 = document.getElementById("ipt2");
        var mask = document.getElementById("mask");
        var left = document.getElementById("left");
        var close = document.getElementById("close");
        var fal = document.getElementById("fal");
        var defaultText = ipt.value;
        ipt.onclick = function () {
            mask.style.display = "block";
            document.body.parentNode.style.overflow = "hidden";
        }
        left.onclick = back
        close.onclick = back

        function back() {
            mask.style.display = "none";
            document.body.parentNode.style.overflow = "auto";
        }
        fal.onclick = function () {
            console.log(defaultText)
            if (ipt2.value != defaultText) {
                ipt2.value = ""
            }
        }
    }
    // 查看更多
    serena.more = function () {
        var more = document.getElementById("more");
        var hidden = document.querySelectorAll(".hidden");
        more.onclick = function () {
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.display = "flex";
            }
            this.style.display = "none"
        }
    }
    // 底部查看更多
    serena.more2 = function () {
        var last = document.getElementById("last");
        var icon = document.getElementById("icon");
        var text = document.getElementById("text");
        var hide = document.querySelectorAll(".hide");
        last.onclick = function () {
            if (text.innerText == "更多") {
                icon.classList.add("fa-chevron-up")
                icon.classList.remove("fa-chevron-down")
                text.innerText = "收起"
                for (var i = 0; i < hide.length; i++) {
                    hide[i].style.display = "block";
                }
                this.style.marginLeft = "2.25rem"
            } else {
                icon.classList.add("fa-chevron-down")
                icon.classList.remove("fa-chevron-up")
                text.innerText = "更多"
                for (var i = 0; i < hide.length; i++) {
                    hide[i].style.display = "none";
                }
                this.style.marginLeft = ""
            }
        }
    }
    // 用户评论的文字查看更多
    serena.more3 = function () {
        var word = document.querySelectorAll(".content .word");
        var down = document.querySelectorAll(".comment .content .down");
        for (var i = 0; i < word.length; i++) {
            if (parseInt(window.getComputedStyle(word[i]).getPropertyValue("height")) <= 105) {
                word[i].nextElementSibling.style.display = "none"
            } else {
                word[i].nextElementSibling.style.display = "flex"
                word[i].style.height = "1rem"
                word[i].style.overflow = "hidden"
            }
        }
        for (var i = 0; i < down.length; i++) {
            down[i].index = i;
            down[i].onclick = function () {
                if (parseInt(window.getComputedStyle(word[this.index]).getPropertyValue("height")) > 105) {
                    this.previousElementSibling.style.height = "1rem"
                    this.previousElementSibling.style.overflow = "hidden"
                    this.firstElementChild.classList.add("fa-angle-down")
                    this.firstElementChild.classList.remove("fa-angle-up")
                } else {
                    this.previousElementSibling.style.height = "auto"
                    this.previousElementSibling.style.overflow = "auto"
                    this.firstElementChild.classList.remove("fa-angle-down")
                    this.firstElementChild.classList.add("fa-angle-up")
                }
            }
        }
    }
    // 买票查看更多
    serena.more4 = function () {
        var li = document.querySelectorAll(".all-box .list .click")
        var list = document.querySelectorAll(".all-box .list .list2")
        for (var i = 0; i < li.length; i++) {
            li[i].index = i;
            li[i].onclick = function () {
                if (window.getComputedStyle(list[this.index]).getPropertyValue("display") == "none") {
                    list[this.index].style.display = "block"
                } else {
                    list[this.index].style.display = "none"
                }
            }

        }
    }
    // 顶部导航条的出现
    serena.show = function () {
        var bd = document.getElementById("bd")
        var bd2 = document.getElementById("bd2")
        var nav_dh2 = document.getElementById("nav_dh2")
        var mask = document.getElementById("mask")
        bd.onclick = function () {
            nav_dh2.style.display = "block"
            mask.style.display = "block"
        }
        bd2.onclick = function () {
            console.log(898)
            nav_dh2.style.display = "none"
            mask.style.display = "none"
        }
        document.onscroll = function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var bluenav = document.getElementById("bluenav");
            var nav_dh = document.getElementById("nav_dh")
            var all = document.getElementById("all")
            var alls = document.querySelectorAll(".all")
            var lis = document.querySelectorAll("#nav_dh ul li")
            var lis2 = document.querySelectorAll("#nav_dh2 ul li")
            var ul = document.querySelector(".wmenu ul")
            var ult = serena.getPos(alls[2]).top
            var t = serena.getPos(all).top
            var lt = serena.getPos(alls[4]).top
            var ot = serena.getPos(one).top
            if (top <= 0) {
                bluenav.style.opacity = "0"
            } else {
                bluenav.style.opacity = "1"
            }
            if (top >= t) {
                nav_dh.style.display = "block";
            } else {
                nav_dh.style.display = "none";
                nav_dh2.style.display = "none"
                mask.style.display = "none"
            }
            if (top >= lt) {
                nav_dh.style.display = "block";
                nav_dh2.style.display = "none"
                mask.style.display = "none"
            }
            if (top >= ot) {
                nav_dh.style.display = "none";
            }
            for (var i = 0; i < alls.length; i++) {
                alls[i].index = i;
                var at = serena.getPos(alls[i]).top
                if (top >= at) {
                    $(lis[alls[i].index]).addClass("on").siblings().removeClass("on");
                    $(lis2[alls[i].index]).addClass("on").siblings().removeClass("on");
                }
            }
            if (top >= ult) {
                ul.style.left = "-1.4rem";
            } else {
                ul.style.left = "0";
            }
        }

    }
    /* 到底提示 */
    serena.toBom = function () {
        document.onscroll = function () {
            // top代表的是此时此刻网页被卷去的高度
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            // h表示网页的总高度（包括隐藏的不可见的部分）
            var h = document.documentElement.scrollHeight;
            // 如果到底了则提示用户
            // 如何知道拉到底了
            // 被卷去的高度+浏览器的可视高=内容的总高
            if (top + document.documentElement.clientHeight >= h - 1) {
                document.getElementById("top").classList.add("fa-rocket");
                document.getElementById("top").classList.remove("fa-snowman");
            }
            if (top <= 0) {
                document.getElementById("top").classList.remove("fa-rocket");
                document.getElementById("top").classList.add("fa-snowman");
            }
        };
    }
    // 下拉刷新
    serena.down = function () {
        var head = document.querySelector(".header")
        var foot = document.querySelector(".footer")
        var h
        document.addEventListener("touchstart", function (e) {
            h = e.touches[0].pageY;
        });
        document.addEventListener("touchmove", function (e) {
            var mh = e.touches[0].pageY;
            if (mh > h) {
                var num = (mh - h) / 100;
                if (num > 3) {
                    num = 0
                    head.style.transition = "height 0.5s"
                }
                head.style.height = num + 1.6 + "rem"
            } else {
                var num = (h - mh) / 100;
                if (num > 3) {
                    num = 0
                    foot.style.transition = "height 0.5s"
                }
                foot.style.height = num + 0.8 + "rem"
            }
        });
        document.addEventListener("touchend", function () {
            head.style.height = 1.6 + "rem"
            foot.style.height = 0.8 + "rem"
            if (parseInt(head.style.height) > 1.6) {
                head.style.height = 1.6 + "rem"
                setTimeout(reload, 1000);
            }
            if (parseInt(foot.style.height) > 08) {
                foot.style.height = 0.8 + "rem"
                setTimeout(reload, 1000);
            }
        })

        function reload() {
            location.reload();
        }
    }
    // 登录验证
    serena.login = function () {
        var tel = document.getElementById("tel");
        var get = document.getElementById("get");
        var num = document.getElementById("num");
        var submit = document.getElementById("submit");
        tel.oninput = function () {
            if (/^1[3-9]\d{9}$/.test(tel.value)) {
                get.style.color = "#00afc7"
                get.style.border = ".01rem solid #00afc7"
            }else{
                get.style.color = "#d7dce0"
                get.style.border = ".01rem solid #ddd"
            }
            if (/^1[3-9]\d{9}$/.test(tel.value) &&/^\d{6}$/.test(num.value)) {
                submit.style.background = "#25a4bb"
            }else{
                submit.style.background = "#85d1db"
            }
        }

        num.oninput = function () {
            if (/^1[3-9]\d{9}$/.test(tel.value) && /^\d{6}$/.test(num.value)) {
                submit.style.background = "#25a4bb"
            }else{
                submit.style.background = "#85d1db"
            }
        }
    }
    // 注册验证
    serena.reg = function () {
        var tel2 = document.getElementById("tel2");
        var get2 = document.getElementById("get2");
        var num2 = document.getElementById("num2");
        var submit2 = document.getElementById("submit2");
        var pic = document.getElementById("pic");
        tel2.oninput = function () {
            if (/^1[3-9]\d{9}$/.test(tel2.value)) {
                get2.style.color = "#00afc7"
                get2.style.border = ".01rem solid #00afc7"
            }
            else{
                get2.style.color = "#d7dce0"
                get2.style.border = ".01rem solid #ddd"
            }
            if (/^1[3-9]\d{9}$/.test(tel2.value) &&/^\d{6}$/.test(num2.value)&& /^\d{4}$/.test(pic.value)) {
                submit2.style.background = "#25a4bb"
            }else{
                submit2.style.background = "#85d1db"
            }
        }
        num2.oninput = function () {
            if (/^1[3-9]\d{9}$/.test(tel2.value) && /^\d{6}$/.test(num2.value)&& /^\d{4}$/.test(pic.value)) {
                submit2.style.background = "#25a4bb"
            }else{
                submit2.style.background = "#85d1db"
            }
        }
        pic.oninput = function () {
            if (/^1[3-9]\d{9}$/.test(tel2.value) && /^\d{6}$/.test(num2.value)&& /^\d{4}$/.test(pic.value)) {
                submit2.style.background = "#25a4bb"
            }else{
                submit2.style.background = "#85d1db"
            }
        }
    }
    // 加载中，请稍等、弹出层
    serena.load = function (){
        var $left=$(".rem-list .left")
        var $right=$(".rem-list .right")
        var $load=$("#load")
        var $openr=$("#openr")
        var $openl=$("#openl")
        var $close=$(".open-rig .close")
        var $close2=$(".open-left .close")
        $openr[0].style.bottom=-$openr.height()+"px"
        $openl[0].style.bottom=-$openl.height()+"px"
        $right.click(function(){
            $load.show()
            $(".mask").show()
            setTimeout(function(){
            $load.hide()
            $openr[0].style.bottom="0px"
            $openr[0].style.transition="bottom 0.8s"
            },800)
        })
        $("#ding").click(function(){
            $openl[0].style.bottom=-$openl.height()+"px"
            $("#foot")[0].style.display="none"
            $load.show()
            $(".mask").show()
            setTimeout(function(){
            $load.hide()
            $openr[0].style.bottom="0px"
            $openr[0].style.transition="bottom 0.8s"
            },800)
        })
        $left.click(function(){
            $(".mask").show()
            $("#foot")[0].style.display="flex"
            $openl[0].style.bottom="0px"
            $openl[0].style.transition="bottom 0.8s"
        })
        $close.click(fun)
        $(".mask").click(fun)
        function fun(){
            $openr[0].style.bottom=-$openr.height()+"px"
            $(".mask").hide()
        }
        $(".light").click(function(){
            $(this).addClass("on").siblings().removeClass("on")
        })
        $close2.click(fun2)
        $(".mask").click(fun2)
        function fun2(){
            $openl[0].style.bottom=-$openl.height()+"px"
            $(".mask").hide()
            $("#foot")[0].style.display="none"
        }
    } 
})(window);