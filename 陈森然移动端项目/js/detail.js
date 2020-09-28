(function () {
    var w = window.innerWidth;
    var bili = w /3.75;
    document.documentElement.style.fontSize = bili + "px";
})();

$(document).scroll(function(){

    $(".suspension").css("transition",'all 0.5s')

    if(document.documentElement.scrollTop<=0){
        $(".suspension").removeClass("headbg")
        $(".fanhui").css("background-color","rgba(0, 0, 0, 0.5)");
    }
    if(document.documentElement.scrollTop>0){
        $(".suspension").addClass("headbg")
        $(".fanhui").css("background-color","transparent");
    }
    if(document.documentElement.scrollTop>1170){
        $(".m-tab").addClass("fixd")
    }
    if(document.documentElement.scrollTop<1170){
        $(".m-tab").removeClass("fixd")
    }


    if(document.documentElement.scrollTop<$(".jiaotong").offset().top){
        $(".m-tab li").eq(0).addClass("tab-on").siblings().removeClass("tab-on")
    }
    if(document.documentElement.scrollTop>$(".fuza").offset().top && document.documentElement.scrollTop<$(".tab_cost").offset().top){
        $(".m-tab li").eq(1).addClass("tab-on").siblings().removeClass("tab-on")
    }
    if(document.documentElement.scrollTop>$(".tab_cost").offset().top){
        $(".m-tab li").eq(2).addClass("tab-on").siblings().removeClass("tab-on")
    }
    if(document.documentElement.scrollTop>14540){
        $(".m-tab li").eq(3).addClass("tab-on").siblings().removeClass("tab-on")
    }
})

$(".m-tab li").eq(0).click(function(){
    $(this).addClass("tab-on").siblings().removeClass("tab-on")
    document.documentElement.scrollTop=$(".jiaotong").offset().top-90
})
$(".m-tab li").eq(1).click(function(){
    $(this).addClass("tab-on").siblings().removeClass("tab-on")
    document.documentElement.scrollTop=$(".fuza").offset().top-90
})
$(".m-tab li").eq(2).click(function(){
    $(this).addClass("tab-on").siblings().removeClass("tab-on")
    document.documentElement.scrollTop=$(".tab_cost").offset().top-90
})
$(".m-tab li").eq(3).click(function(){
    $(this).addClass("tab-on").siblings().removeClass("tab-on")
    document.documentElement.scrollTop=14540
})
//图片详细
function xiangxi(xuhao,ou,ol) {
    // 图片张数
    var xuhao = document.querySelectorAll(xuhao)[0]
    // 获取移动内容
    var ou = document.querySelector(ou);
    // 获取图片宽度
    var ol = document.querySelectorAll(ol)[0];
    var olWidth = ol.offsetWidth;
    var startX, moveX, distanceX;
    /*添加触摸事件*/
    var isEnd = false;
    var index = 0;
  
    ou.addEventListener("touchstart", function (e) {
        // 获取手指按下坐标
        startX = e.targetTouches[0].clientX;
       
    })
    // 创建手指抬起事件获取手指抬起坐标
    ou.addEventListener("touchmove", function (e) {
        isEnd = true
        if (isEnd == true) {
            // 获取手指抬起坐标点
            moveX = e.touches[0].clientX;
            /*计算坐标的差异*/
            distanceX = moveX - startX;
            //基于之前轮播图偏移的位置
            ou.style.left = (-index * olWidth + distanceX) + "px";
            
        }
    })
    // 添加触摸结束事件
    ou.addEventListener("touchend", function (e) {
        // console.log(startX);
        //获取滑动距离,判断是否超过50px
        if (Math.abs(distanceX) > 50) {
            //判断滑动方向
            if (distanceX > 0) {//上一张
                index--;
            } else {//下一张
                index++;
            }
            //过度效果
            ou.style.transition = "left 0.5s ease-in-out";
            //偏移位置
            ou.style.left = -index * olWidth + "px";
        } else if (Math.abs(distanceX) > 0) {//回弹效果
            //过度效果
            ou.style.transition = "left 0.5s ease-in-out";
            //偏移位置
            ou.style.left = -index * olWidth + "px";
        }
        // 重置坐标点
        startX = 0;
        moveX = 0;
        distanceX = 0
        // 添加动画结束事件监测
        ou.addEventListener("webkitTransitionEnd", function () {
            //  设定图片边界
            if (index >= 8 ){
                index=8
                ou.style.left = -index * olWidth + "px";
              
            } else if (index == -1) {
                index=0
                ou.style.left = -index * olWidth + "px";
            }
              isEnd = true;
            xuhao.innerText=Number(index)+1
        });
    }) 
}
// 使用说明：第一参数为控制图片张数的元素，二为需要移动的元素，三为装有img图片的元素！
xiangxi(".xuhao>span", ".header>ul", ".header>ul>li")


// 星期点击
var item = document.querySelectorAll(".container .item")
// var itemsp = document.querySelector(".item h5"
// var itempp = document.querySelector(".item p")

for (var i = 0; i < item.length-2; i++) {
    item[i].onclick = function (params) {
        for (var j = 0; j < item.length-2; j++) {
            var aa = item[j].children[0];
            var bb = item[j].children[1];
            aa.className=""
            bb.className=""
            aa.style.color = "#000"
            bb.style.color = "#ff8300"
            item[j].className = "item"
        }   
        for (var a = 0; a < this.children.length; a++) {
            this.children[a].style.color = "#fff";
        }
        this.className = "item-on item";
        
    }
}

$(".menu").click(function(){
    $(".xingchengxuan").show()
})
$(".xingchengxuan").click(function(){
    $(this).hide()
})
var flag=true;

$(".simpor").click(function(){
    if(flag){
        $(".fuza").hide();
        $(".jiadan").show();
        $(this).children().text("详细行程");
        flag=false
    }
    else if(flag==false){
        $(".fuza").show();
        $(".jiadan").hide();
        $(this).children().text("简单行程");
        flag=true
    }
})

var fag=true;

$(".icon-xinaixin-fuben").click(function(){
    if(fag){
        $(this).css("color","red");
        $(".aixin").text("收藏成功");
        $(".aixin").show();
        fag=false
        setInterval(function(){
            $(".aixin").hide();
        },3000)
    }
    else if(fag==false){
        $(this).css("color","#fff")
        $(".aixin").text("取消收藏成功");
        $(".aixin").show();
        fag=true
        setInterval(function(){
            $(".aixin").hide();
        },3000)
    }
    
})

// 活动返回
function fanhui(params) {
    var fanhui=document.getElementsByClassName("huiqu")
    var chuxian=document.getElementsByClassName("chuxian")
    var kongzhi=document.getElementsByClassName("kongzhi")
    var aiya=document.getElementsByClassName("aiya")
    aiya[0].onclick=function name(params) {
        kongzhi[0].style.display = "block"
        chuxian[0].style.display = "none"
    }
    aiya[1].onclick = function name(params) {
        kongzhi[0].style.display = "block"
        chuxian[0].style.display = "none"
    }
    fanhui[0].onclick=function name(params) {
        chuxian[0].style.display="block"
        kongzhi[0].style.display="none"
    }
}
fanhui()


// 大雪公园
function xuedi(xuedi,dianji,inner) {
    var yingcang=document.getElementsByClassName(xuedi);
    var dianji = document.getElementsByClassName(dianji);
    var inner = document.getElementsByClassName(inner)
    var guanbi = document.getElementsByClassName("icon-guanbi")
    for(var i=0;i<dianji.length;i++){
        dianji[i].setAttribute("indexd", i);
        dianji[i].onclick = function name(params) {
            indexd = Number(this.getAttribute("indexd"))
            for(var j=0;j<dianji.length;j++){
                yingcang[j].style.display = "none" 
            }
            yingcang[indexd].style.display="block"
    }
    guanbi[i].onclick=function name(params) {
        for (var j = 0; j < dianji.length; j++) {
            yingcang[j].style.display = "none"
        }
        
    }
   
    }
}
   
// xuedi("yincang", "dianji-a","inner")