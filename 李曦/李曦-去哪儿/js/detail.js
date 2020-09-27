window.onload = function() {
    // 折叠
    $('.mp-ticket-type-info').click(function() {
        $(this).toggleClass('mp-ticket-list-expand');
        $(this).next().toggle();
    });

    // 顶部吸附
    $(window).scroll(function() {
        var e = $(".mp-header").bannerHeight || 180;
        var t = $(window).scrollTop();
        if (t <= e) {
            $(".mp-header").backElement && $(".mp-header").backElement.hide();
            var n = t / e;
            $(".mp-header").css({
                display: "block",
                opacity: n
            });
            if (t == 0) {
                $(".mp-header").hide();
                $(".mp-header").backElement && $(".mp-header").backElement.show()
            }
        } else {
            $(".mp-header").css({
                position: "fixed",
                display: "block",
                opacity: 1
            })
        }
    });
    //导航吸附
    $(window).scroll(function() {
        var e = $(".mpw-calendar-tabout").bannerHeight || 520;
        var t = $(window).scrollTop();
        if (t == 0) {
            $(".mpw-calendar-tabout").hide();
            $(".mpw-calendar-tabout").backElement && $(".mpw-calendar-tabout").backElement.show()
        }
        if (t > e) {
            $(".mpw-calendar-tabout").show();
        }

        $('.IconXiaSlider ').click(function() {
            $(this).toggleClass("mp-ticket-list-expand");
            $('.mp-tab-extend-fixed').addClass("mp-tab-show");
            $('.mp-tab-extend-mask').show();
        });
        $('.mp-tab-unextend').click(function() {
            $('.mp-tab-extend-fixed').removeClass("mp-tab-show");
            $('.mp-tab-extend-mask').hide();
        })
    });
    // 导航栏到指定区域
    $(window).scroll(function() {
        var flag = true;
        $('.mpw-calendar-tabout div span').click(function() {
            flag = false;
            console.log($(this).index());
            // 每次点击一个span,需要计算出页面要去往的位置;
            // 选出对应索引号内容区的盒子, 计算他的offset().top;
            var current = $('.mp-ticket-shelf .mp-ticket-shelf-container').eq($(this).index()).offset().top;
            document.documentElement.scrollTop = current - 100;
            $(this).toggleClass('active').siblings().removeClass('active');
        });

    })

    //触发弹出框的按钮
    var btn = document.getElementById("btn");
    // 弹出框元素
    var model = document.querySelector(".model");
    btn.onclick = function() {
        layer.open({
            type: 1,
            content: model.innerHTML,
            anim: 'up',
            style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;',
            // 在这里添加success回调函数，在该回调参数返回一个参数为当前层元素对象
            // 通过elem对象就可以控制上面的model元素
            success: function(elem) {
                console.log(elem); //div.model
                var close = elem.getElementsByTagName("span")[0];
                console.log(close) //span#close
                close.onclick = function() {
                    // 调用关闭弹出框的方法
                    layer.closeAll()
                }
            }
        });
    }

}