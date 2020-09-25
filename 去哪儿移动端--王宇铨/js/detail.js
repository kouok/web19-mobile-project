window.onload=function(){

	// 返回上一页
	function goback(btn){
		var btns=document.querySelector(btn);
		btns.addEventListener("click",function(){
			history.back();
		})
		
	};
	goback("header .picBarBack");
	goback(".fiexNav span");

	// 顶部漂浮栏
	(function(){
		var fiexNav=document.querySelector(".fiexNav");
		document.body.onscroll=function(){
			if(document.documentElement.scrollTop>=100){
				fiexNav.style.display="block";
			}else{
				fiexNav.style.display="none";
			}
		}

	})();


	// 门票说明
	// 关闭页面函数
	function pageClose(list,id,bg,closeBtn,openBtn){
		// 添加id滑动显示说明页面
		var listBox=document.querySelector(list);
		// listBox.id=id;

		// 给黑色背景和取消按钮添加关闭说明页面事件
		var BGevent=document.querySelector(bg);
		var close=document.querySelector(closeBtn);
		// 黑色背景关闭
		BGevent.addEventListener("click",function(){
			listBox.id="";
			this.style.display="none";
			// 用延时器延时执行关闭页面以让动画完成
			setTimeout(function(){
				BGevent.parentNode.style.display="none";
			},700)
		})
		// 取消按钮关闭
		close.addEventListener("click",function(){
			listBox.id="";
			BGevent.style.display="none";
			setTimeout(function(){
				BGevent.parentNode.style.display="none";
			},700)
		})

		var open=document.querySelectorAll(openBtn);
		
		var nameBox=document.querySelector(list+" .proNameBox");
		var priceBox=document.querySelector(list+" .proPriceBox");

		for(var i=0;i<open.length;i++){
			open[i].addEventListener("click",function(){
				var name=this.parentNode.firstElementChild.firstElementChild;
				var price=this.parentNode.lastElementChild.firstElementChild.lastElementChild;
				nameBox.innerText=name.innerText;
				priceBox.innerText=price.innerText;

				BGevent.style.display="block";
				BGevent.parentNode.style.display="block";
				setTimeout(function(){
					listBox.id=id;
				},10)
			})
		}
		

	};
	pageClose(".shuoming .smDetail","smSlideUp",".shuoming .smBG",".shuoming .smclose",".pageBtns");
	
	// 页面打开
	// function pageOpen(list,id,bg,openBtn){
	// 	var listBox=document.querySelector(list);
	// }

	// 门票说明--温馨提示开关
	(function(){
		var tishi=document.querySelector(".shuoming .smDetail .tishi");
		var btns=tishi.firstElementChild;
		var arr=btns.lastElementChild;
		var flag=true;

		btns.addEventListener("click",function(){
			if(flag){
				tishi.style.height="auto";
				arr.style.transform="rotate(90deg)";
				flag=false;
			}else{
				tishi.style.height="0.5rem";
				arr.style.transform="rotate(0)";
				flag=true;
			}
		});

	})();
	


	

	// 快速预定
	// 页面开关
	pageClose(".buy .buyDetail","buySlideUp",".buy .buyBG",".buy .buyclose",".buyBtns");
	// 日期选择
	(function(){
		var daybtns=document.querySelectorAll(".daySelect button");
		for(var i=0;i<daybtns.length;i++){
			daybtns[i].onclick=function(){
				for(var j=0;j<daybtns.length;j++){
					daybtns[j].className="";
				}
				this.className="dayChecked";
			}
		}
		var othersDaysBtn=document.querySelector(".othersDaysBtn p");
		// 其他日期选择
		//非input元素
		laydate.render({
		  elem: '#otherDays'
		  ,format: 'yyyy年MM月dd日'
		  ,min: 0
  		  ,max: 7
  		  ,showBottom: false
  		  ,done: function(){
		    
		    othersDaysBtn.style.display="none";
		    
		  }
		  // ,value: '其他日期'
		}); 

		// 当前时间判断并禁用今日按钮
		var todayBtn=document.getElementById("today");
		var today=new Date();
		var hour=today.getHours();
		var month=today.getMonth()+1;
		var day=today.getDate();
		// function toZero(a){
		// 		return a>9?a:'0'+a;
		// };
		
		if(hour>=17){
			todayBtn.setAttribute("disabled","disabled");
		}else{
			todayBtn.removeAttribute("disabled");
		}

		// 更新按钮日期
		var dateBox=document.querySelectorAll(".buy .dayBox .date");
		for(var w=0;w<dateBox.length;w++){
			var dayText=day+w;
			console.log()
			if(dayText>31){
				month=month+1;
				day=1;
			}
			dateBox[w].innerText=month+"月"+dayText+"日";
		}


	})();

	// 景区内多景点套票 套票内容开关
	(function(){
		// 设置初始值
		var fatherEle=document.querySelectorAll(".tickBox .ticksListBox li");
		
		for(var j=0;j<fatherEle.length;j++){

			fatherEle[j].style.height=fatherEle[j].firstElementChild.offsetHeight*0.01+"rem";
		}
		var btns=document.querySelectorAll(".tickBox .ticksListBox li h6");
		
		for(var i=0;i<btns.length;i++){
			btns[i].addEventListener("click",function(){
				// if(this.nextElementSibling.style.display=="block"){
				// 	this.nextElementSibling.style.display="none";
				// 	this.lastElementChild.lastElementChild.style.transform="rotate(90deg)";
				// }else{
				// 	this.nextElementSibling.style.display="block";
				// 	this.lastElementChild.lastElementChild.style.transform="rotate(-90deg)";
				// }
				if(this.parentNode.style.height=="auto"){
					this.parentNode.style.height=this.offsetHeight*0.01+"rem";
					this.lastElementChild.lastElementChild.style.transform="rotate(90deg)";
				}else{
					this.parentNode.style.height="auto";
					this.lastElementChild.lastElementChild.style.transform="rotate(-90deg)";
				}
			})
		}

	})();

	// 一日游查看更多
	(function(){
		var ticksListBox=document.querySelector(".onedays .ticksListBox");
		var list=document.querySelectorAll(".onedays .ticksListBox li");
		var btns=document.querySelector(".onedays .tickBox .more");
		for(var i=3;i<list.length;i++){
			list[i].style.display="none";
		}
		btns.addEventListener("click",function(){
			for(var j=3;j<list.length;j++){
				list[j].style.display="block";

			}
			ticksListBox.style.paddingBottom="0";
			this.style.display="none";
		})

	})();


	// 评论显示更多
	(function(){
		var pinlun=document.querySelectorAll(".pinlun .pinglunList>p");
		var more=document.querySelectorAll(".pinlun .pinglunList>.pinlunMore");
		for(var i=0;i<pinlun.length;i++){
			if(pinlun[i].clientHeight>=100){
				pinlun[i].style.height="1rem";
				pinlun[i].nextElementSibling.style.display="block";
			}
		}
		for(var j=0;j<more.length;j++){
			more[j].addEventListener("click",function(){
				if(this.previousElementSibling.style.height=="1rem"){
					this.previousElementSibling.style.height="auto";
					this.firstElementChild.style.transform="rotate(-90deg)";
				}else{
					this.previousElementSibling.style.height="1rem";
					this.firstElementChild.style.transform="rotate(90deg)";
				}
				

			})
		}

		var pic=document.querySelectorAll(".pinlun .pinglunList .pinlunPic");
		for(var x=0;x<pic.length;x++){
			if (pic[x].children.length>6) {
				pic[x].nextElementSibling.style.display="block";
				pic[x].style.height="1.8rem";
			}
		}

	})();

	

};