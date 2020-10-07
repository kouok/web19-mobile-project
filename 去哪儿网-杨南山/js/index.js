
    
window.onload=function(){
    (function(){
        var blank = document.getElementById("blank");
        var wrap = document.getElementById("main");
        var footer = document.getElementById("ft");
        var topbar =document.getElementById("topbar");
        var spanObj = document.querySelectorAll("#topbar>span");
        var topObj = document.getElementById("top");
        var search = document.getElementById("search");
        var arr = ["湖南旅游景区通票","988密室禁地","橘子洲一日游","岳麓山一日游","一幕时光私人影院",'一日游','85团白沙湖边境景区','方特东方神画门票老人票','沙乐民水上乐园','沙生态动物园'];
        blank.addEventListener("click",function(){
        wrap.style.display='none';
        footer.style.display='none';
        this.parentNode.style.display='none';
        topbar.style.display='flex';
        for(var i=0;i<spanObj.length;i++){
            spanObj[i].addEventListener("click",function(){
                wrap.style.display='block';
                footer.style.display='block';
                topObj.style.display='block'
                topbar.style.display='none';
            });
        }
    });
    render();
   
    function render(){
        
        search.onkeyup=function(){
            // 临时数组放数据库中筛选出用户输入的关键词
            var temp=[];
            var tVallue = this.value;
            if(document.getElementById("boxshow")){
                document.getElementById("dvbox").removeChild(document.getElementById("boxshow"));
            }
            var box = document.createElement("div");
            box.style.cssText="height:calc(100% - 0.44rem);overflow-y:scroll;padding:0.1rem 0.15rem;text-align:left;";
            box.id="boxshow";
            //讲容器放到body中
            document.getElementById("dvbox").appendChild(box);
            
           


            
            
            for(var i=0;i<arr.length;i++){
                // 找到数据中的关键字
                if(arr[i].indexOf(tVallue)==0){
                    //把找到的关键字放到临时数组里面去;
                    temp.push(arr[i]);
                }
            }
           
            
            if (this.value.length==0||temp.length==0) {
                if (document.getElementById('boxshow')){
                    document.getElementById('dvbox').removeChild(document.getElementById('boxshow'));
                }
                return;	
            }	


            //遍历临时数组里面用户搜索的关键字
           
            for(var i=0;i<temp.length;i++){
                
                var dvobj= document.createElement("div");
                
                box.appendChild(dvobj);
                dvobj.innerHTML="<img style='vertical-align:bottom' width='20px' height='20px' src='images/ticket.png'> <span>"+temp[i]+"</span><span class='brown ml10'>长沙|门票一日游</span>";

            }
        }

    }
    })();

    (function(win){
        function Tab(){
        }
        Tab.prototype.init=function(toggole,content){

            var toggleChild = toggole.children;
            var contentChild = content.children;

            for(var i=0;i<toggleChild.length;i++){

                toggleChild[i].addEventListener("click",function(){
                   
                    var index = this.dataset.index;

                    for(var i=0;i<toggleChild.length;i++){

                        contentChild[i].style.display='none';
                        toggleChild[i].classList.remove("active")

                    }

                    this.classList.add("active");
                    contentChild[index].style.display='block'   
                })
            }
        }

        win.Tab=Tab;
    })(window);
    var tab = new Tab();
    tab.init(document.getElementById("swOne"),document.getElementById("vacator"));
    tab.init(document.getElementById("vacaTwo"),document.getElementById("vacatorTwo"));
    tab.init(document.getElementById("vacaTree"),document.getElementById("vacatorTree"));
}

   


  


