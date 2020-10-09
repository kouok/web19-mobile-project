window.onload=function() {
	var w=document.documentElement.getBoundingClientRect().width;
	var bili=w/3.75;
	document.documentElement.style.fontSize=bili+"px";

	// 轮播图
	TouchSlide({ 
        slideCell:"#slideBox",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"leftLoop", 
        autoPage:true,//自动分页
        autoPlay:true //自动播放
    });

    //滑动性能介绍
    // var new0=document.querySelector(".new");
    // new0.addEventListener("touchstart",function(e) {
    //     var l1=e.clientX;
    //     new0.addEventListener("touchmove",function(e) {
    //         new0.style.transition='all 1s linear';
    //         var l2=e.clientX;
    //         var cha=l1-l2;
    //         new0.style.transform="translateX("+cha+"rem)";
           
             
    //     })
    // });
    


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


	  //触发弹出框的按钮
        var btn=document.getElementById("btn");
        // 弹出框元素
        var model=document.querySelector(".model");

        btn.onclick=function(){
            layer.open({
                type: 1
                ,content: model.innerHTML
                ,anim: 'up'
                ,style: 'position:fixed; bottom:0; left:0;padding: 0 0.16rem; width: 100%; height: 5rem; background-color: #fff;border:none;z-index:99'
                ,
                // 在这里添加success回调函数，在该回调参数返回一个参数为当前层元素对象
                // 通过elem对象就可以控制上面的model元素
                success: function(elem){
                  console.log(elem);//div.model
                  var close=elem.getElementsByTagName("span")[0];
                  var a=elem.querySelectorAll("#bb1 span");
                  var b=elem.querySelectorAll("#bb2 span");
                  var span1=elem.querySelector("#bb3 .jian");
                  var span2=elem.querySelector("#bb3 .deng");
                  var span3=elem.querySelector("#bb3 .jia");
                  
                  console.log(a)//span#close
                  close.onclick=function(){
                    // 调用关闭弹出框的方法
                     layer.closeAll()
                  }
                  for (var i = 0; i <a.length; i++) {
                    console.log(a[i])
                    a[i].addEventListener("touchstart",function() {
                        console.log(1)
                        for (var i = 0; i <a.length; i++){
                            a[i].className="";
                        }
                        this.className="xuan";
                    })
                    }
                    for (var i = 0; i <b.length; i++) {
                    
                    b[i].addEventListener("touchstart",function() {
                        console.log(1)
                        for (var i = 0; i <b.length; i++){
                            b[i].className="";
                        }
                        this.className="xuan";
                    })
                    }

                    span1.addEventListener("touchstart",function() {
                        // console.log(deng.innerText)
                        span2.innerText=parseInt(span2.innerText)-1;
                        if (span2.innerText==0) {
                         span2.innerText=0;
                        }
                    });
                    span3.addEventListener("touchstart",function() {
                        // console.log(deng.innerText)
                        span2.innerText=parseInt(span2.innerText)+1;
                        if (span2.innerText==10) {
                         span2.innerText=10;
                        }
                    });
                },    
            });
        }



        //顶部悬浮
        var ontop=document.querySelector(".top");
        window.addEventListener("scroll",function() {
			var Top=document.documentElement.scrollTop;
			if (Top>=300) {
				ontop.style.display="block";
			}else{
				ontop.style.display="none";
			}
		});

        



        


         
}       