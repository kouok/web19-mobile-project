// 登录
// $(".sign").click(function () {
//     if ($(".u_name").val() == "") {
//         $(".u_name").val("您的账号不能为空")
//         $(".u_name").css("border", "1px solid red")
//         $(".u_name").css("color", "red")
//     }
//     // if ($(".password input").val() == "") {
//     //     $(".password input").val("您的密码不能为空")
//     //     $(".password input").css("border", "1px solid red")
//     //     $(".password input").css("color", "red")
//     // }
//     if ($(".code input").val() == "") {
//         $(".code input").val("验证码为空")
//         $(".code input").css("border", "1px solid red")
//         $(".code input").css("color", "red")
//     }
//     if ($(".code input").val() != $(".erweima").text()) {
//         $(".code input").val("验证码有误")
//         $(".code input").css("border", "1px solid red")
//         $(".code input").css("color", "red")
//     } else {
//         alert("您已成功登录！");
//         $(".user_b").eq(0).hide().next().show()
//     }
// })
// $(".u_name").focus(function () {
//     $(this).css("border", "1px solid #bdd7f2")
//     $(this).val("")
//     $(".u_name").css("color", "#000")
// })
// $(".password input").focus(function () {
//     $(this).css("border", "1px solid #bdd7f2")
//     $(this).val("")
//     $(".password input").css("color", "#000")
// })
// $(".code input").focus(function () {
//     $(this).css("border", "1px solid #bdd7f2")
//     $(this).val("")
//     $(".code input").css("color", "#000")
// })

var myform=document.getElementsByTagName("form")[0];
var ipt=document.getElementsByClassName("dl")[0];
	var username=myform.username;
	var password=myform.password;
	// var email=myform.email;
	// var phonenum=myform.phonenum;
	// var creditID=myform.creditID;
	myform.onsubmit=function(){
	   if(!/^[a-zA-Z]\w{5,14}$/ig.test(username.value)&&!/^\w+@\w+\.[a-zA-Z]{2,5}$/ig.test(username.value)&&!/^1[3-9]\d{9}$/.test(username.value)){
		   alert("不是合法的用户名")
		   return false
	   }
	   if(!/^[a-zA-Z]|\d{6,10}$/ig.test(password.value)){
		   alert("不是合法密码")
		   return false
	   }
	//    if(!/^\w+@\w+\.[a-zA-Z]{2,5}$/ig.test(email.value)){
	// 		 alert("不是合法邮箱")
	// 		 return false
	//    }
	//    if(!/^1[3-9]\d{9}$/.test(phonenum.value)){
	// 			alert("不是合法手机")
	// 			return false
	//    }
	//    if(!/^\d{17}(\d|x$)/i.test(creditID.value)){
	// 	  alert("不是合法身份证")
	// 	  return false
	//    }
	}