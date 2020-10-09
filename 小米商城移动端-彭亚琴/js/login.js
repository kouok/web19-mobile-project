window.onload=function() {
	var w=document.documentElement.getBoundingClientRect().width;
	var bili=w/3.75;
	document.documentElement.style.fontSize=bili+"px";


	//点击按钮切换登录方式
	var login=document.querySelectorAll(".login");
	var a2=document.querySelectorAll(".a2");
	for (var i = 0; i <a2.length; i++) {
		a2[i].index=i;
		a2[i].addEventListener("touchstart",function() {
			for (var j = 0; j <login.length; j++) {
				login[j].setAttribute("id","");
			}
			login[this.index].setAttribute("id","hide");
		})
	}


	// 点击输入框清空文字，离开恢复文字
	// var arr=["手机号码","短信验证码","邮箱/手机号码/小米ID","密码"];
	var input=document.querySelectorAll("input");
	for (var i =0; i <input.length; i++) {
		input[i].index=i;
		input[i].addEventListener("focus",function() {
			this.value="";
			this.style.color="#000";
		});
		// input[i].addEventListener("blur",function() {
		// 	// this.value=arr[this.index];
		// 	this.style.color="";
		// });
	}


	
	// 点击小眼睛切换颜色
	var eye =document.querySelector(".eye");
	var flag=true;
	var mima=document.querySelector(".mima");
	eye.addEventListener("touchstart",function() {
		if (flag) {
			this.innerHTML="<img src='images/icons/eye2.png'>";
			mima.type="password";
			flag=false;
		}else{
			this.innerHTML="<img src='images/icons/eye.png'>";
			mima.type="text";
			flag=true;
		}
	})



	// 输入框验证
	var form1=document.querySelector(".myform1");
	var form2=document.querySelector(".myform2");
	var num=document.querySelector('.num');
	var yzm=document.querySelector('.yzm');
	var text=document.querySelector('.text');
	var tishi1=document.querySelector(".tishi1");
	var tishi2=document.querySelector(".tishi2");
	// 手机短信登录验证
	form1.addEventListener("submit",function() {
		var reg1=/^1[3-9][0-9]{9}$/
		if (!reg1.test(num.value)) {
			tishi1.innerText="请输入正确的手机号！";
			return false;
		}
		var reg2=/^[0-9]{4}$/;
		if(!reg1.test(yzm.value)){
			tishi1.innerText="验证码错误";
			return false;
		}
	});
	//用户名登录验证
	form2.addEventListener("submit",function() {
		var reg1=/^1[3-9][0-9]{9}$/
		var reg2=/^\w+@[a-zA-Z0-9]+\.[a-z0-9]{2-4}$/;
		if (!reg1.test(text.value)|!reg2.test(text.value)) {
			tishi2.innerText="请输入正确的用户名！";
			return false;
		}
		var reg3=/^\w{6}$/;
		if(!reg3.test(mima.value)){
			tishi2.innerText="密码错误";
			return false;
		}
	});
}