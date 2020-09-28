(function () {
    var w = window.innerWidth;
    var bili = w / 4.14;
    document.documentElement.style.fontSize = bili + "px";
})();

$(".search_guan .icon-guanbi-").click(function(){
    $(".search_guan input").val("")
})
var search_box = document.querySelector(".search_box")
var sreach_box = document.querySelector(".sreach_box");
var fanhui = document.querySelector(".icon-fanhui1");

fanhui.onclick = function () {
    this.parentNode.parentNode.style.display = "none";
    sreach_box.parentNode.parentNode.style.display = "block"
}

var fanhui2 = document.querySelector(".search_box_head a")
fanhui2.onclick = function () {
    this.parentNode.parentNode.style.display = "none";
    sreach_box.parentNode.parentNode.style.display = "block"
}

sreach_box.onclick = function () {
    search_box.style.display = "block";
    this.parentNode.parentNode.style.display = "none"
}

$(".search_guan input").focus(function () {
    $(".sorry_box2").hide();
    $(this).val("")
})

$(".tehui_choice span").eq(0).click(function () {
    $(".tehuidujia").show().next().hide();
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})

$(".tehui_choice span").eq(1).click(function () {
    $(".tehuidujia2").show().prev().hide()
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})

$(".menpiao_choice span").eq(0).click(function () {
    $(".menpiao").show().next().hide();
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})

$(".menpiao_choice span").eq(1).click(function () {
    $(".menpiao2").show().prev().hide()
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})


$(".gonglve_choice span").eq(0).click(function () {
    $(".tehuidujia").show().next().hide();
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})

$(".gonglve_choice span").eq(1).click(function () {
    $(".tehuidujia2").show().prev().hide()
    $(this).addClass("choice_on").siblings().removeClass("choice_on")
})

TouchSlide({
    slideCell: "#slideBox",
    titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPage: true, //自动分页
    autoPlay: true //自动播放
});

// 返回顶部
$(document).scroll(function () {
    if (document.documentElement.scrollTop > $(".discount").offset().top) {
        $(".xiong").removeClass("icon-xiaoxiong").addClass("icon-icon");
        $(".xiong").next().text("返回顶部");
        $(".xiong").parent().bind("click", function () {
            document.documentElement.scrollTop = 0
        })
    }
    if (document.documentElement.scrollTop < $(".discount").offset().top) {
        $(".xiong").removeClass("icon-icon").addClass("icon-xiaoxiong");
        $(".xiong").next().text("首页")
    }
})

// 页面切换
$(".footer a").eq(3).click(function () {
    $(".index").hide();
    $(".mySlef").show();
    $(".xiong").removeClass("icon-icon").addClass("icon-xiaoxiong");
    $(".xiong").next().text("首页")
    $(this).addClass("footer_on").siblings().removeClass("footer_on")
})

$(".footer a").eq(0).click(function () {
    $(".index").show();
    $(".mySlef").hide();
    $(this).addClass("footer_on").siblings().removeClass("footer_on")
})

$(".icon-fanhui2").click(function () {
    $(".index").show();
    $(".mySlef").hide();
    $(".footer a").eq(0).addClass("footer_on").siblings().removeClass("footer_on")
})


$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        $(".sorry_box2").show()
    }
})