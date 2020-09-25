// 返回顶部
function huo(){
    var rokk=document.getElementsByClassName("ding")[0];
    console.log(rokk)
    rokk.onclick=function(){
      // var speed=5;
      // 读：读取当前滚动条的位置信息
      var top=document.documentElement.scrollTop;//100
      var timer=setInterval(function(){
        // speed+
        top-=5; 
        // scrollTop是可读写的！！
        // 写，改变滚动条的位置
        document.documentElement.scrollTop=top;
        if(top<=0){
          clearInterval(timer);
        }
      },1);
    }
}huo()


window.onload=function(){
    // 获取导航
    var nav=document.querySelector(".nav");
    // 获取导航列表
    // var navLi=document.querySelectorAll("#nav li");
    // 获取导航对应的内容板块
    // var scrollBox=document.querySelectorAll(".wrapper .scroll");
    // 计算当前nav到浏览器顶部的距离
    var t1=getPos(nav).top;
    console.log("t1:"+t1)

    window.onscroll=function(){
        // 计算当前页面被卷去的高度
        var t0=document.documentElement.scrollTop;
    
        // 如果滚动的距离刚好到了nav所在位置，则让其悬浮
        if(t0>=t1){
            // nav.style.position = 'fixed';
            nav.className="fixed";
        }
        // 如果不满足条件则还原
        else{
            // console.log(1)
            nav.className=""
        }

    }
}
    // 获取绝对距离的函数
    function getPos(ele){
        // 先设置一个接受从当前元素到定位父级的距离的计数器
        // var pos={
        var left = 0;
        var top=0;
        // };
        // 先求出本身的边框粗细
        var l=ele.clientLeft;
        var t=ele.clientTop;
        // 循环的条件就是看有没有到顶
        // 再往HTML上面跳，则会返回null 
       while(ele){
           left += ele.offsetLeft;
           top += ele.offsetTop;
           // 要加上父级的边框粗细，不然有误差
           left+=ele.clientLeft;
           top+=ele.clientTop;
           // 最后将对象本身迭代
           ele=ele.offsetParent;

       }
       // 再将包含了绝对距离的对象返回出去，该对象包括了从起点出发到HTML的绝对距离（top,left）
       // 最后返回出去减去本身的边框粗细
       return { left: left-l,top:top-t};

    }  

// 弹出框
function fun(){
    var b=document.getElementsByClassName("xuangou")[0]
    var tk=document.getElementsByClassName("ca")[0]
    var a=document.getElementsByClassName("tk-box")[0]
    b.onclick=function(){
        a.style.display="block"
    }
    tk.onclick=function(){
        a.style.display="none"
    }
}
 fun()