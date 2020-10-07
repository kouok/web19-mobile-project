window.onload=function(){

	// 搜索显示
	(function(){
		var btn=document.querySelector(".searchBtn");
		var searchForm=document.querySelector(".searchForm");
		var searchBack=document.querySelector(".searchForm .searchBack");
		var cancel=document.querySelector(".searchForm .cancel");
		var searchText=document.querySelector("#searchText");
		var clear=document.querySelector(".searchForm form i");
		var searchList=document.querySelector(".searchForm ul");

		function clearList(){
			var len=searchList.children.length;
			console.log(len+1)
			for(var i=0;i<len;i++){
				searchList.removeChild(searchList.firstElementChild);
			}
		}

		btn.addEventListener("click",function(){

			searchForm.style.display="block";

		});

		searchBack.addEventListener("click",function(){
			searchForm.style.display="none";
			searchText.value="";
		})
		cancel.addEventListener("click",function(){
			searchForm.style.display="none";
			searchText.value="";
			
		})
		clear.addEventListener("click",function(){
			searchText.value="";
			clearList();
		})

		searchText.addEventListener("change",function(){
			// console.log(1)
			// var newli=document.createElement("li");
			searchList.innerHTML='<li><i class="icoBG"></i><a href="#"><h5><span>'+searchText.value+'</span><i>一日游</i></h5><p><span>¥97</span><i>起</i></p></a></li>';
			if(searchText.value==""){
				searchList.innerHTML='';
			}
		})

	})();

	// 轮播图
	TouchSlide({ 
        slideCell:"#banner",
        titCell:".navBtns", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bannerList", 
        effect:"leftLoop", 
        autoPage:true,//自动分页
        autoPlay:true //自动播放
    });


	// tab切换
	TouchSlide({ 
        slideCell:"#tabs1",
        titCell:".tabsBtns span", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".tabsList", 
        effect:"leftLoop", 
        titOnClassName:"btnsChecked"
        
    });

    TouchSlide({ 
        slideCell:"#tabs2",
        titCell:".tabsBtns span", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".tabsList", 
        effect:"leftLoop", 
        titOnClassName:"btnsChecked"
        
    });

    TouchSlide({ 
        slideCell:"#tabs3",
        titCell:".tabsBtns span", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".tabsList", 
        effect:"leftLoop", 
        titOnClassName:"btnsChecked"
        
    });


    // 小火箭
    (function(){
    	var rocket=document.getElementById("rocket");
    	
    	document.body.onscroll=function(){
    		if(document.documentElement.scrollTop>=100){
    			rocket.firstElementChild.className="iconfont icon-huojian-X";
    		}else{
    			rocket.firstElementChild.className="iconfont icon-luotuo";
    		}
    	}
    	rocket.addEventListener("click",function(e){
    		var top=document.documentElement;
    		var timer=setInterval(function(){
    			top.scrollTop-=10;
    			if(top.scrollTop<=0){
    				clearInterval(timer);
    			}
    		},1);
    		
    	});


    })();



};