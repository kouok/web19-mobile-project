
window.onload=function(){
	// 返回上一页
	function goback(btn){
		var btns=document.querySelector(btn);
		btns.addEventListener("click",function(){
			history.back();
		})
		
	};
	goback(".Back");


	// tab切换页
	// TouchSlide({ 
 //        slideCell:"#tabs",
 //        titCell:".tabBtns section", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
 //        mainCell:".tabList", 
 //        effect:"leftLoop", 
 //        titOnClassName:"tabsChecked"
        
 //    });

 	(function(){
 		var tabBtn=document.querySelectorAll(".tabBtns section");
 		var tabList=document.querySelectorAll(".tabList form");
 		for(var i=0;i<tabBtn.length;i++){
 			tabBtn[i].setAttribute("index",i);
 			tabBtn[i].addEventListener("click",function(){
 				for(var j=0;j<tabList.length;j++){
 					tabList[j].style.display="none";
 					tabList[j].id="";
 					tabBtn[j].className="";
 				}
 				tabList[this.getAttribute("index")].style.display="block";
 				tabList[this.getAttribute("index")].id="fadeIn";
 				this.className="tabsChecked";

 			});
 		};
 	})();


 	// 登录验证
 	(function(){
 		var tel=document.getElementById("tel");
 		var yzm=document.getElementById("yzm");
 		var yzmBtn=document.getElementById("yzmBtn");
 		var telFlag=false;
 		var yzmFlag=false;

 		var yzmtxt="";

 		var errorBox=document.querySelector(".errorBox");
 		var error=document.querySelector(".errorBox .error");

 		// 电话号码验证
 		tel.addEventListener("blur",function(){
 			if(/^1[345789]\d{9}$/.test(tel.value)){
 				telFlag=true;
 				yzmBtn.removeAttribute("disabled");
 				yzmBtn.className="undisabled";
 			}else{
 				telFlag=false;
 				yzmBtn.setAttribute("disabled","disabled");
 				yzmBtn.className="";
 			}
 			
 		})

 		// 获取验证码并验证
 		yzmBtn.addEventListener("click",function(){
 			change();
 			alert("验证码是："+yzmtxt);
 			return false;
 		})

 		yzm.addEventListener("blur",function(){
 			if(this.value==yzmtxt){
 				yzmFlag=true;
 			}else{
 				yzmFlag=false;
 			}
 		})

 		// 生成随机验证码
 		function change(){
			var bgc="";
			var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			for(var i=0;i<4;i++){
				bgc+=arr[Math.round(Math.random()*35)];
			}

			yzmtxt=bgc;
		}

		// 验证表单
		var txtLogin=document.txtLogin;
		txtLogin.onsubmit=function(){
			if(!(telFlag && yzmFlag)){
				error.firstElementChild.innerText="手机号或验证码错误";
				errorBox.style.display="block";
				return false;
			}

		};


		// 表单2的验证
		// 账号验证
		var userName=document.getElementById("userName");
		var possword=document.getElementById("possword");
		var userNameFlag=false;
		var posswordFlag=false;
		var userLogin=document.userLogin;

		userLogin.onsubmit=function(){
			if(userName.value=="abcd"){
				userNameFlag=true;
			}else{
				userNameFlag=false;
				
			}

			if(possword.value=="123abc"){
				posswordFlag=true;
			}else{
				posswordFlag=false;
				
			}

			if(!(userNameFlag && posswordFlag)){
				error.firstElementChild.innerText="登录名或密码错误";
				errorBox.style.display="block";
				return false;

			}

		};




 		// 报错遮罩层关闭
 		errorBox.firstElementChild.addEventListener("click",function(){

 			errorBox.style.display="none";

 		});
 		error.lastElementChild.addEventListener("click",function(){

 			errorBox.style.display="none";

 		});


 	})();


};