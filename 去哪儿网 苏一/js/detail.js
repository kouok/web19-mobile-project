//第一个轮播图
			layui.use('carousel', function() {
				var carousel = layui.carousel;
				//建造实例化
				carousel.render({
					elem: '#test1',
					width: '3.75rem', //设置背景容器的宽度
					height:'2.5rem',
					arrow: 'hover', //始终显示箭头,不会消失
					// anim: 'updown' //切换动画方式:anim
					//indicator:'outside',
					// indicator: 'outside' //这个属性：小圆点在外面	
				});
			});
			
			
//下拉框

$(".down1").click(function(){
	$(".xialabox1").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});

$(".down2").click(function(){
	$(".xialabox2").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});

$(".down3").click(function(){
	$(".xialabox3").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});

$(".down4").click(function(){
	$(".xialabox4").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});

$(".down5").click(function(){
	$(".xialabox5").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});

$(".down6").click(function(){
	$(".xialabox6").toggle();
	$(this).toggleClass("icon-xiala");
	$(this).toggleClass("icon-shangla");
});
// 顶部滚动条事件

$(window).scroll(function(){
	console.log($(this).scrollTop())
	if($(this).scrollTop()>1){
		$(".bg").addClass("bg1");
		$(".header>a").addClass("bg1");
	}else if($(this).scrollTop()==0){
		$(".bg").removeClass("bg1");
		$(".header>a").removeClass("bg1");
	}
});


// 左下角置顶

$(".back-top").click(function(){
	$(window).scrollTop(0);
});

// 收藏按钮

$(".love").click(function(e){
	e.preventDefault();
	$(this).toggleClass("bgred");
	
	 //提示
	  layer.open({
	    content: '收藏成功！'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	  });
});

$(".yuding").click(function(e){
	e.preventDefault();
	$(this).toggleClass("bgred");
	
	 //提示
	  layer.open({
	    content: '预订成功！'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	  });
});
var sy=0;
$(".join").click(function(){
	
	sy++;
	$(".shuliang").show();
	$(".shuliang").text(sy);
});


$(".kf").click(function(){
	 layer.open({
	    type: 2
	    ,content: '加载中请稍候'
	  });
});

$(".talkmore").click(function(){
	$(".talk-content").toggleClass("auto");
	$(this).find("i").toggleClass("icon-xiala");
	$(this).find("i").toggleClass("icon-shangla");
});


// 图片预览事件
$(".imgbtn").click(function(){
	$(".fixedimg").hide();
});

$(".talkpic>div").click(function(){
	$(".fixedimg").show();
	$(".fixedimg>img").attr("src",'images/detail/ad'+($(this).index()+1)+'.jpg');
});

$(".download").click(function(){
	//提示
	 layer.open({
	   content: '下载成功！'
	   ,skin: 'msg'
	   ,time: 2 //2秒后自动关闭
	 });
});

$(".talkpic1>div").click(function(){
	$(".fixedimg").show();
	$(".fixedimg>img").attr("src",'images/detail/ad'+($(this).index()+7)+'.jpg');
});


//顶部导航

$(window).scroll(function(){
	if($(this).scrollTop()>=320&&$(this).scrollTop()<=1960){
		$(".topnav").show();
	}else if($(this).scrollTop()>1960){
		$(".topnav").hide();
	}else if($(this).scrollTop()<320){
		$(".topnav").hide();
	};
	
	if($(this).scrollTop()>300&&$(this).scrollTop()<600){
		$(".nav1").addClass("topnav-cur").siblings().removeClass("topnav-cur");
	}else if($(this).scrollTop()>600&&$(this).scrollTop()<880){
		$(".nav2").addClass("topnav-cur").siblings().removeClass("topnav-cur");
	}else if($(this).scrollTop()>880&&$(this).scrollTop()<1180){
		$(".nav3").addClass("topnav-cur").siblings().removeClass("topnav-cur");
	}else if($(this).scrollTop()>1180){
		$(".nav4").addClass("topnav-cur").siblings().removeClass("topnav-cur");
	}
});

//顶部分栏点击到对应位置

$(".nav1").click(function(){
	$(this).toggleClass("topnav-cur").siblings().removeClass("topnav-cur");
	$(window).scrollTop(300);
});

$(".nav2").click(function(){
	$(this).toggleClass("topnav-cur").siblings().removeClass("topnav-cur");
	$(window).scrollTop(600);
});

$(".nav3").click(function(){
	$(this).toggleClass("topnav-cur").siblings().removeClass("topnav-cur");
	$(window).scrollTop(880);
});

$(".nav4").click(function(){
	$(this).toggleClass("topnav-cur").siblings().removeClass("topnav-cur");
	$(window).scrollTop(1180);
});