
window.onload=function(){
    (function(){
    // 显示效果
    var tie = document.getElementsByClassName("tie");
    function down(ele){
        for(var i=0;i<tie.length;i++){
            tie[i].addEventListener("click",function(){
                console.log(123)
                this.nextElementSibling.classList.toggle("active")
            })
        }
    }
    down();

    //顶部渐变效果
    function scroll(){
        var topbar = document.getElementById("topbar");
        var bannerHeight = document.getElementById("banner").offsetHeight;
        var youjian = document.getElementById("youjian")
        window.onscroll=function(e){
            var srcollTop=document.documentElement.scrollTop;
            var opacity=0
            youjian.style.display='none';
            if(srcollTop<bannerHeight){
                opacity=srcollTop / bannerHeight*0.85;
            }else{
                opacity=1;
            }
            if(srcollTop==0){
                youjian.style.display='block';
            }
            topbar.style.opacity = opacity;
        }
    }
    scroll()

    // 底部显示
    function tag(){
        var tag =document.getElementById("tag");
        var nav =document.getElementById("nav");
        var flag = false;
        tag.addEventListener("click",function(){
            
            if(flag){
                nav.style.height=3.4+'rem';
                nav.style.width=260+'px';
                this.style.top=1.4+"rem";
                flag=false;
            }else{
                nav.style.height=8.4+'rem';
                nav.style.width=268+'px';
                this.style.top=102+'px';
                flag=true;
            }
        })
    }
    
    tag()




})()


}



