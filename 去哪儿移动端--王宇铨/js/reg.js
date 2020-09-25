window.onload=function(){

	// 返回上一页
	function goback(btn){
		var btns=document.querySelector(btn);
		btns.addEventListener("click",function(){
			history.back();
		})
		
	};
	goback(".Back");

	// 表单验证
	(function(){

		var errorBox=document.querySelector(".errorBox");
 		var error=document.querySelector(".errorBox .error");
 		var yzm=document.getElementById("yzm");
 		var yzmBtn=document.getElementById("yzmBtn");
 		var picBox=document.getElementById("picBox");
 		var pic=document.getElementById("pic");
 		var telFlag=false;
 		var picFlag=false;
 		var yzmFlag=false;

 		var yzmtxt="";

 		var tel=document.getElementById("tel");
 		// 电话号码验证
 		tel.addEventListener("blur",function(){
 			if(/^1[345789]\d{9}$/.test(tel.value)){
 				telFlag=true;
 				
 			}else{
 				telFlag=false;
 			}
 			undis();
 		})
 		// 图片验证码
 		pic.addEventListener("blur",function(){
 			if(pic.value==picBox.value){
 				picFlag=true;
 				
 			}else{
 				picFlag=false;
 			};
 			undis();
 		});



 		// 解除验证码禁用
 		function undis(){
 			console.log(telFlag);
 			console.log(picFlag);
 			if(telFlag && picFlag){
 				yzmBtn.removeAttribute("disabled");
 				yzmBtn.className="undisabled";
 			}else{
 				yzmBtn.setAttribute("disabled","disabled");
 				yzmBtn.className="";
 			}	
 		};

 		// 获取验证码并验证
 		yzmBtn.addEventListener("click",function(){
 			change2();
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

 		// 表单提交验证
 		var txtLogin=document.txtLogin;
 		txtLogin.onsubmit=function(){

 			if(telFlag==false){
 				error.firstElementChild.innerText="手机号不合法";
				errorBox.style.display="block";
				return false;
 			}

 			if(picFlag==false){
 				error.firstElementChild.innerText="图片码错误";
				errorBox.style.display="block";
				return false;
 			}

 			if(yzmFlag==false){
 				error.firstElementChild.innerText="验证码错误";
				errorBox.style.display="block";
				return false;
 			}


 		};



 		// 生成随机验证码
 		function change(){
			var bgc="";
			var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			for(var i=0;i<4;i++){
				bgc+=arr[Math.round(Math.random()*35)];
			}

			picBox.value=bgc;
		};
		change();
		function change2(){
			var bgc="";
			var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			for(var i=0;i<4;i++){
				bgc+=arr[Math.round(Math.random()*35)];
			}
			
			yzmtxt=bgc;
		};
		change2();

		// 报错遮罩层关闭
 		errorBox.firstElementChild.addEventListener("click",function(){

 			errorBox.style.display="none";

 		});
 		error.lastElementChild.addEventListener("click",function(){

 			errorBox.style.display="none";

 		});

	})();


}