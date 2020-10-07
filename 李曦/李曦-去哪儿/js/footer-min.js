(function() {
    var f = {
        _COOKIEHASH: null,
        _cookie: function(v) {
            this._COOKIEHASH = {};
            var x = document.cookie.split(";");
            for (var u = 0; u < x.length; u++) {
                var y = x[u];
                var w = y.split("=");
                if (y.indexOf("=") != -1) {
                    this._COOKIEHASH[this._trim(w[0])] = this._trim(w[1])
                }
            }
            return this._COOKIEHASH[v]
        },
        _trim: function(c) {
            if (String.prototype.trim) {
                return c.trim()
            }
            return c.replace(/^\s+/, "").replace(/\s+$/, "")
        }
    };
    var k = (function() {
        if (f._cookie("_t") && f._cookie("_q") && f._cookie("_q").indexOf("G.") < 0) {
            return true
        } else {
            if (f._cookie("QN42")) {
                return true
            } else {
                return false
            }
        }
    })();
    var p = '.qn_footer { background:#f3f3f3;}.qn_footer ul, .qn_footer li{ list-style:none;}.qn_footer .main_nav{ position:relative; width:300px; height:25px; margin:0 auto;padding:10px 10px 0 10px; overflow:hidden;}.qn_footer .main_nav:after{ content: "."; display: block; height: 0; clear: both; visibility: hidden;}.qn_footer .main_nav li { margin:0px; padding-left:10px; height:31px; width:65px; float:left; position:relative; background:none;}.qn_footer .main_nav li .icon{ float:left; width:22px; height:22px; background: url(/Users/lixi/Desktop/test-detail/images/nav_7.png) 0 0 no-repeat; background-size: 175px 50px;}.qn_footer .main_nav li a{ display:block; height:22px; width:100%; font-size: 12px; }.qn_footer .main_nav li .title { float:left; display:inline-block; color:#9e9e9e; margin:3px 0 0 5px; border-bottom:1px solid #acacac; font-size: 12px; }.qn_footer .main_nav li.actived .title { border-bottom:none;}.qn_footer .main_nav li.tag { position:absolute; top: 8px; right:6px; background:#f3f3f3;font-size:14px;color: #9e9e9e; width:70px;}.qn_footer .main_nav li.tag span { display:inline-block; border-left:1px solid #acacac; padding-left:30px; margin-top:5px; }.qn_footer .main_nav li.tag:after { content : " "; position:absolute; top:7px; left:25px; width:12px;height:12px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIfSURBVEhLvVbnysJAEMz7P4u9otgbKIogKvaCvbcH2I8JXLi77BlR+H4oanI7szOzG63X60X/8bJkkPF4TN1u9yfgx+NBjUaDDoeDUscBGg6H5Pf7yefzUbPZ/ArscrlQNpu1a8TjcTqdTk4dG6jf79sX5Ve1WiWw+1TW/X5PiURCqZFMJgngqGHdbjcbXQfC91wuR7juBbZcLikcDrM10IQNhDegZjIZ9sZUKqVIoIMOBgMKBAKus/htNBqp0uEwZKrVaixYLBaj3W7n6qzdbrP3R6NRWq/XfBgE006n44RCljMUChEkEqTgISd3Op1mFVDiLcCm0ykFg0FWDmhukrlcLtP9fmc9ZYEAuN1ujSHhOoGM70JjBPIKiQBD5xh0r2QqQPP5XEmKV0hg+mazUUCezyehO3lYnXjjA3wRMUUgdIZ6SGD6+XxW7sPMFQoF21t5WB0g5F2sHyEJ9hXYyYCz2YyQvkql4jIdHWDmZP9ARgy8db1eCRJwBpdKJbag3i3kM9UQS9r26Hg8utgIYEQZZExmm0YBCvV6PfdmQIvFYpHtDHqDjA4GtrrkIIi9t1gszJsBnrRaLeNaEQnDffV63UgKm1wnxc4Rnk3cosTMTCYTJ1m6r/l83iizcWBXqxVFIhGWNRccLqVyV283w7uQCDB4JJ45X68gHMSSRMy5LjjTTWBvOxKHuJAgifofkJ86kg+LkMD0Tx7x8tk/qrabQu3SN6AAAAAASUVORK5CYII=) 0 0 no-repeat; background-size:12px 12px;}.qn_footer .main_nav li.toggle:after{ background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIfSURBVEhLlZZnCgJBDIW9/1nsFcXeQFEEUbEX7L0dIPIWZpmZzeyuPwSZHfMlLy9ZA9/vl/x+ns8nlUolCofDNJlMfP8O8QN+IefzmTKZDAWDQfvT7Xbp8/n4AvoCrddrisViCkQAq9UqvV4vT5gnaDQaUSgUYiECls1m6XK5uMKMIEjSbrddAbKM8XicttutEcaCHo+H1XQ5kPheLpdpPp9TJBJxPHcziQN0Op0cTReQVqtlN3+/31MikWCT4UyigExNR48Gg4FDFvRFd6JIqlKpEMZBuNoGDYdDtumQaLFYGLWHzPl8nq1MNokFQrZcPyANJNJn7Xq9KmewN2xuioFkLBBKzOVyykVkwwWs1+sUjUZpuVwqMM6lkHw6nVr3bOnu97utN5wl64uLt9tNSQZB+v2+o1qcoTI4UJZcMQMq6PV6jrXi5rBms0nv91sBoorVaqWceW6G2WzGzozcD5gBirjtTVcQquMazJ2lUik6HA7/bQa4qFarsRBkj/2HHuhAt1FwVIQ+6Q4UARuNht2PzWZjuU+HmUyigHa7nXGtQEa9B8fjkZLJJFu5bhIbBKdwcuBsPB4btYcCmDmub7JJLBA05y7iZQeJvN7CmLliscjGgEnw3ALJwyqA6XSasMm9IOI5Zgk91BNGEcpmgASg42KhUPCcC1MCnU7HigFTyH9gFDPgDwjeqvqk+61K3MOSxqDLv/PcDP9CTPd/7sWbQk+SlPgAAAAASUVORK5CYII=) 0 0 no-repeat; background-size:12px 12px;}.qn_footer .main_nav .flight .icon{background-position:0 0}.qn_footer .main_nav .hotel .icon{background-position:-25px 0}.qn_footer .main_nav .tuan .icon{background-position:-50px 0}.qn_footer .main_nav .gonglue .icon{background-position:-75px -25px}.qn_footer .main_nav .train .icon{background-position:-50px -25px}.qn_footer .main_nav .jingdian .icon{background-position:-75px 0}.qn_footer .main_nav .dujia .icon{background-position:0 -25px}.qn_footer .main_nav .lvtu .icon{background-position:-100px -25px}.qn_footer .main_nav .dangdii .icon{background-position:-25px -25px}.qn_footer .main_nav .zuche .icon{background-position:-100px 0}.qn_footer .main_nav .cheche .icon{background-position:-125px 0}.qn_footer .main_nav .dangdiren .icon{background-position:-125px -25px}.qn_footer .main_nav .gongyu .icon{background-position:-150px 0px}.qn_footer .main_nav li.hover:after{ content:" "; position:absolute; top:-2px; left:5px; width:70px; height:28px; background:black; opacity:0.25; border-radius:0;}.qn_footer .main_nav li.actived.hover:after{ background:transparent;}.qn_footer .footer_nav{ width:100%;height:39px;border-bottom:1px solid #cacaca;padding-left:45px}.qn_footer .footer_nav li {float:left;padding-left:20px}.qn_footer .footer_nav li a{ position:relative; color:#25a4bb;font-size:14px;line-height:39px;}.qn_footer .footer_nav li a.hover{color:#fff;}.qn_footer .footer_nav li a.hover:after{content:" "; position:absolute; top:-4px; left:-4px; width:100%; height:100%; padding:4px; background:black; opacity:0.25; border-radius:5px; z-index:-1;}.qn_footer .mobile_pc{padding:10px 0 0 0;text-align:center}.qn_footer .mobile_pc li{display:inline-block;margin:0 15px}.qn_footer .mobile_pc a{font-size:14px;color:#25a4bb}.qn_footer .mobile_pc .active a{color:black}.qn_footer .copyright{color:#9e9e9e;text-align:center;font-size:14px;padding:10px}.qn_footer .copyright a{color:#9e9e9e;height:33px}',
        h = '<div class="main_nav_wrapper"><ul class="main_nav" id="qunarFooterUL"><li class="flight"><a href="#"><div class="icon"></div><span class="title">机票</span></a></li><li class="hotel"><a href="#"><div class="icon"></div><span class="title">酒店</span></a></li><li class="gongyu"><a href="#"><div class="icon"></div><span class="title">公寓</span></a></li><li class="tuan"><a href="index.html"><div class="icon"></div><span class="title">团购</span></a></li><li class="train"><a href="index.html"><div class="icon"></div><span class="title">火车票</span></a></li><li class="jingdian"><a href="//touch.piao.qunar.com/touch/index.htm"><div class="icon"></div><span class="title">景点</span></a></li><li class="zuche"><a href="index.html"><div class="icon"></div><span class="title">接送机</span></a></li><li class="dujia"><a href="index.html"><div class="icon"></div><span class="title">度假</span></a></li><li class="gonglue"><a href="#"><div class="icon"></div><span class="title">攻略</span></a></li><li class="lvtu"><a href="#"><div class="icon"></div><span class="title">旅图</span></a></li><li class="cheche"><a href="#"><div class="icon"></div><span class="title">车车</span></a></li><li class="dangdiren"><a href="#"><div class="icon"></div><span class="title">当地人</span></a></li><li class="tag" id="qnFooterToggle"><span>更多</span></li></ul></div><ul class="footer_nav clearfix" id="qunarFooterBottom"><li><a href="/Users/lixi/Desktop/去哪儿/login.html">登录</a></li><li><a href="#">我的订单</a></li><li><a href="#">个人中心</a></li><li><a href="#">最近浏览</a></li><li><a href="index.html">关于我们</a></li></ul>';
    if (f._cookie("QN66") !== "samsungtizen") {
        h += '<ul class="mobile_pc clearfix"><li class="active"><a href="#">触屏版</a></li><li><a href="index.html" onclick="computer()">电脑版</a></li></ul>'
    }
    h += '<div class="copyright"><span>Qunar 京ICP备05021087</span><a class="qn_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a></div>';

    function q() {
        document.cookie = "QN163=1;domain=.qunar.com;path=/;expires=" + (function() {
            var c = new Date();
            c.setTime(c.getTime() + 6 * 3600 * 1000);
            return c.toGMTString()
        })()
    }
    var d = document.getElementsByTagName("head")[0],
        t = document.createElement("style"),
        j = document.getElementById("qunarFooter") || document.getElementsByTagName("body")[0];
    j.className = "qn_footer";
    j.innerHTML = h;
    t.innerHTML = p;
    d.appendChild(t);
    var b = document.getElementById("qunarFooterBottom"),
        m = b.getElementsByTagName("li");
    if (k) {
        m[0].style.display = "none";
        m[1].style.display = "none"
    } else {
        m[2].style.display = "none"
    }
    var l = document.getElementById("qnFooterToggle"),
        e = document.getElementById("qunarFooterUL"),
        g = l.getElementsByTagName("span")[0],
        a = e.getElementsByTagName("li");
    l.addEventListener("click", function() {
        if (this.className.indexOf("toggle") != -1) {
            e.style.height = "25px";
            g.innerHTML = "更多";
            l.className = "tag";
            l.style.top = "8px"
        } else {
            e.style.height = "110px";
            g.innerHTML = "收起";
            l.className = "tag toggle";
            l.style.top = "97px"
        }
    });
    var n = 0,
        o = a.length,
        r = "",
        s;
    window._qunar_footer = function(c) {
        for (n = 0; n < o; n++) {
            s = a[n];
            if (s.className.indexOf(c) != -1) {
                r = s.innerHTML;
                r = r.replace(/<a[^>]*>/, "").replace(/<\/a>/, "");
                s.innerHTML = r;
                s.className += " actived"
            }
        }
    }
})();