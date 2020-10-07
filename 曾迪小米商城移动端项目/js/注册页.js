var myform=document.getElementsByTagName("form")[0];
var ipt=document.getElementsByClassName("ljzc")[0];
	// var username=myform.username;
	// var password=myform.password;
	// var email=myform.email;
	var phonenum=myform.phonenum;
	// var creditID=myform.creditID;
	myform.onsubmit=function(){
	//    if(!/^[a-zA-Z]\w{5,14}$/ig.test(username.value)&&!/^\w+@\w+\.[a-zA-Z]{2,5}$/ig.test(username.value)&&!/^1[3-9]\d{9}$/.test(username.value)){
	// 	   alert("不是合法的用户名")
	// 	   return false
	//    }
	//    if(!/^[a-zA-Z]|\d{6,10}$/ig.test(password.value)){
	// 	   alert("不是合法密码")
	// 	   return false
	//    }
	//    if(!/^\w+@\w+\.[a-zA-Z]{2,5}$/ig.test(email.value)){
	// 		 alert("不是合法邮箱")
	// 		 return false
	//    }
	   if(!/^1[3-9]\d{9}$/.test(phonenum.value)){
				alert("不是合法手机")
				return false
	   }
	//    if(!/^\d{17}(\d|x$)/i.test(creditID.value)){
	// 	  alert("不是合法身份证")
	// 	  return false
	//    }
	}