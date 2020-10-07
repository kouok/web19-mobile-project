// 转化公式
// (function(){
//     var w=document.documentElement.getBoundingClientRect().width;
//         var bili=w/3.75;
//         document.documentElement.style.fontSize=bili+"px"
// })


//切换隐藏
function fun(){
    var arr=document.getElementsByClassName("nav-arr")[0];
    // var i=document.getElementsByClassName("iconfont")[0]
    var layer=document.getElementsByClassName("nav-layer")[0];
    var navlist=document.getElementsByClassName("navlist")[0];
    arr.onclick=function(){
        if(layer.style.display=="none"){
            layer.style.display="block"
            navlist.style.display="none"
        }else{
            layer.style.display="none"
            navlist.style.display="block"
        }   
        }
    } 
fun()
// 动态加样式
function nav(){
    var navnone=document.querySelectorAll(".nav-none span");
    for(var i=0;i<navnone.length;i++){
        navnone[i].onclick=function(){
        for(var j=0;j<navnone.length;j++){
            navnone[j].className=""
        }
        this.className="on"
    }
}

}
nav()
function list(){
    var lis=document.querySelectorAll(".navlist a");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className=""
                
            }
            this.className="on1"
        }
    }
}
list()
