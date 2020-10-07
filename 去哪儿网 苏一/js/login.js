$(".tab>div").click(function(){
	$(this).toggleClass("cur").siblings().removeClass("cur");
	$(".Form>div").eq($(this).index()).show().siblings().hide();
});

$(".getyzm").on('click',function(e){
	e.preventDefault();
	clearInterval(timer);
	time();
});
//随机数
   function changeColor1(){
	  
	    for(var i = 0; i<10; i++){
	      var r = Math.ceil(Math.random()*9);
	      var g = Math.ceil(Math.random()*9);
	      var b = Math.ceil(Math.random()*9);
	      var a = Math.ceil(Math.random()*9);
	    } 
			 return String(r)+String(g)+String(b)+String(a)
	 }
	 changeColor1();
var timer=null;
function time(){
	var s=5;
	
	timer=setInterval(function(){
		s--;
		$(".getyzm").text(s+'s后获取');
		if(s<1){
			var clear=clearInterval(timer);
			$(".getyzm").text('获取验证码');
			layer.open({
			  content: changeColor1(),
			  btn: '确定',
			  shadeClose: false,
			  yes: function(){
			    layer.open({
			      content: '好的'
			      ,time: 2
			      ,skin: 'msg'
			    });
			  }
			});
		}
		
	},1000);
};

var tel=document.getElementById("tel");
tel.onchange=function(){
	if(tel.value.length==11){
		$(".getyzm").addClass("dla1");
	}else{
		$(".getyzm").removeClass("dla1");
	}
};
var index=0;
$(".tu").click(function(){
	index++;
	if(index>3){
		index=1;
	}
	$(this).attr('src','images/reg/p'+index+'.jpg')
});

