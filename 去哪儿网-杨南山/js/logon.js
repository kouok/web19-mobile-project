
window.onload=function(){
    var toggle = document.getElementById("toggle");
    var child = toggle.children;
    var form = document.getElementsByClassName("form");
    var finmi = document.querySelector(".findPwd");
   
    for(var i=0;i<child.length;i++){
        child[i].addEventListener("click",function(){
            var index = this.dataset.index;
            if(index==0){
                finmi.style.display='none'
            }else{
                finmi.style.display='block'
            }
            for(var j=0;j<child.length;j++){
                child[j].classList.remove("current");
                form[j].style.display='none'
            }
            this.classList.add("current");
            form[index].style.display='block';
            
        })
    }
}