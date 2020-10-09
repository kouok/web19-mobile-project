 // 返回顶部
 function huo(){
     var rocket=document.getElementsByClassName("fh")[0];
     console.log(rocket)
     rocket.onclick=function(){
       // var speed=5;
       // 读：读取当前滚动条的位置信息
       var top=document.documentElement.scrollTop;//100
       var timer=setInterval(function(){
         // speed+
         top-=100; 
         // scrollTop是可读写的！！
         // 写，改变滚动条的位置
         document.documentElement.scrollTop=top;
         if(top<=0){
           clearInterval(timer);
         }
       },10);
     }
 }huo()