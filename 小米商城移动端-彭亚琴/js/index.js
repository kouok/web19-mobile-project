window.onload=function() {
	var w=document.documentElement.getBoundingClientRect().width;
	var bili=w/3.75;
	document.documentElement.style.fontSize=bili+"px";

	
	//点击导航栏变字体颜色
	var oul=document.querySelector(".oul");
	var li=oul.children;
	for (var i = 0; i <li.length; i++) {
		li[i].addEventListener("touchstart",function() {
			for (var i = 0; i <li.length; i++){
				li[i].className=""
			}
			// this.setAttribute("class","orange");
			this.className="orange";
		})
	}


	// 点击向下按钮显示隐藏内容
	var down=document.querySelector(".down");
	var list=document.querySelector(".list");
	var hide=document.querySelector(".hide");
	var flag=true;
	down.addEventListener("touchstart", function(){
		if (flag) {
			this.style.transform='rotate(180deg)';
			hide.style.display="block";
			flag=false;
		}else{
			this.style.transform='rotate(0deg)';
			hide.style.display="none";
			flag=true;
		}
        
    });



	//点击下拉框里的span变字体颜色
	var span=list.children;
	for (var i = 0; i <span.length; i++) {
		span[i].addEventListener("touchstart",function() {
			for (var i = 0; i <span.length; i++){
				span[i].className=""
			}
			this.className="red";
		})
	}



	// 轮播图
	TouchSlide({ 
        slideCell:"#slideBox",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"leftLoop", 
        autoPage:true,//自动分页
        autoPlay:true //自动播放
    });



    //点击底部定位导航变字体颜色
    var mynav=document.querySelector(".mynav");
	var a=mynav.children;
	for (var i = 0; i <a.length; i++) {
		a[i].index=i;
		a[i].addEventListener("touchstart",function() {
			for (var i = 0; i <a.length; i++){
				a[i].className=""
			}
			this.className="color";
			// this.fristElementchildren.src="images/icons/foot"+this.index+1+h+".png";
		})
	}



	// 滑到一定位置出现回到顶部
	var go=document.querySelector('.go');
	var gotop=document.querySelector(".gotop");
	window.addEventListener("scroll",function() {
		var top=document.documentElement.scrollTop;
		if (top>=500) {
			go.style.display="block";
		}else{
			go.style.display="none";
		}
	});
	
	// 点击回到顶部
	gotop.addEventListener("touchstart",function() {
		document.documentElement.scrollTop=0;
		// var timer=setInterval(function(){
  //       t-=50;
  //       document.documentElement.scrollTop=t;
  //       if(t<=0){
  //         clearInterval(timer);
  //       }
  //     },1);
	});
}