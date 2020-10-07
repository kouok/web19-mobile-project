	$('.bottom_content')[0].style.left = "0%";
			var startX = '',disX ='';
			$('.top_menu').on('click','.common',function(){
				var index = $(this).index();
				$('.bottom_content').css('left','-' + index * 100 + '%');
				$('.top_menu .common').eq(index).addClass('liactive').siblings().removeClass('liactive')
			});
			$('.bottom_content').on('touchstart','.body_1',function(e){
				startX = e.originalEvent.changedTouches[0].clientX;
			});
			$('.bottom_content').on('touchmove','.body_1',function(e){
				e.stopPropagation()
			})
			$('.bottom_content').on('touchend','.body_1',function(e){
				disX = e.originalEvent.changedTouches[0].clientX - startX;
				var leftNum = parseInt($('.bottom_content')[0].style.left);
				if(disX > 0 && disX > 100) {
					if(leftNum <= -100) {
						$('.bottom_content')[0].style.left = leftNum + 100 + "%";
						var order = -parseInt($('.bottom_content')[0].style.left)/100;
						$('.top_menu .common').eq(order).addClass('liactive').siblings().removeClass('liactive')
					}
				} else if(disX < 0 && disX < -100) {
					if(leftNum >= -200) {
						$('.bottom_content')[0].style.left = leftNum - 100 + "%";
						var order = (-parseInt($('.bottom_content')[0].style.left))/100;
						$('.top_menu .common').eq(order).addClass('liactive').siblings().removeClass('liactive')
					}
				}
			})
		
			//第二个tab切换
			$('.bottom_content1')[0].style.left = "0%";
					var startX = '',disX ='';
					$('.top_menu1').on('click','.common1',function(){
						var index = $(this).index();
						$('.bottom_content1').css('left','-' + index * 100 + '%');
						$('.top_menu1 .common1').eq(index).addClass('liactive1').siblings().removeClass('liactive1')
					});
					$('.bottom_content1').on('touchstart','.body_2',function(e){
						startX = e.originalEvent.changedTouches[0].clientX;
					});
					$('.bottom_content1').on('touchmove','.body_2',function(e){
						e.stopPropagation()
					})
					$('.bottom_content1').on('touchend','.body_2',function(e){
						disX = e.originalEvent.changedTouches[0].clientX - startX;
						var leftNum = parseInt($('.bottom_content1')[0].style.left);
						if(disX > 0 && disX > 100) {
							if(leftNum <= -100) {
								$('.bottom_content1')[0].style.left = leftNum + 100 + "%";
								var order = -parseInt($('.bottom_content1')[0].style.left)/100;
								$('.top_menu1 .common1').eq(order).addClass('liactive1').siblings().removeClass('liactive1')
							}
						} else if(disX < 0 && disX < -100) {
							if(leftNum >= -200) {
								$('.bottom_content1')[0].style.left = leftNum - 100 + "%";
								var order = (-parseInt($('.bottom_content1')[0].style.left))/100;
								$('.top_menu1 .common1').eq(order).addClass('liactive1').siblings().removeClass('liactive1')
							}
						}
					})
		
			
			//第一个轮播图
			layui.use('carousel', function() {
				var carousel = layui.carousel;
				//建造实例化
				carousel.render({
					elem: '#test1',
					width: '3.55rem', //设置背景容器的宽度
					height:'1.17rem',
					arrow: 'hover', //始终显示箭头,不会消失
					// anim: 'updown' //切换动画方式:anim
					//indicator:'outside',
					// indicator: 'outside' //这个属性：小圆点在外面	
				});
			});
	
	//第三个切换
	
	$('.bottom_content2')[0].style.left = "0%";
			var startX = '',disX ='';
			$('.top_menu2').on('click','.common2',function(){
				var index = $(this).index();
				$('.bottom_content2').css('left','-' + index * 100 + '%');
				$('.top_menu2 .common2').eq(index).addClass('liactive2').siblings().removeClass('liactive2')
			});
			$('.bottom_content2').on('touchstart','.body_3',function(e){
				startX = e.originalEvent.changedTouches[0].clientX;
			});
			$('.bottom_content2').on('touchmove','.body_3',function(e){
				e.stopPropagation()
			})
			$('.bottom_content2').on('touchend','.body_3',function(e){
				disX = e.originalEvent.changedTouches[0].clientX - startX;
				var leftNum = parseInt($('.bottom_content2')[0].style.left);
				if(disX > 0 && disX > 100) {
					if(leftNum <= -100) {
						$('.bottom_content2')[0].style.left = leftNum + 100 + "%";
						var order = -parseInt($('.bottom_content2')[0].style.left)/100;
						$('.top_menu2 .common2').eq(order).addClass('liactive2').siblings().removeClass('liactive2')
					}
				} else if(disX < 0 && disX < -100) {
					if(leftNum >= -200) {
						$('.bottom_content2')[0].style.left = leftNum - 100 + "%";
						var order = (-parseInt($('.bottom_content2')[0].style.left))/100;
						$('.top_menu2 .common2').eq(order).addClass('liactive2').siblings().removeClass('liactive2')
					}
				}
			})
			
			// 遮罩层事件
			
			$(".search").click(function(){
				$(".cover").show();
			});
			
			$(".cancel").click(function(){
				$(".cover").hide();
			});
			
			$(".icon-guanbi-").click(function(){
				$(".bigsearch input").val("");
			});
			
			// 窗口滚动条事件
			
			$(window).scroll(function(){
				var top =$(document).scrollTop();
				
				if(top>340){
					$(".foot1").hide();
					$(".foot2").show();
				}else{
					$(".foot1").show();
					$(".foot2").hide();
				}
			});
			
			$(".foot2>a").click(function(e){
				e.preventDefault();
				$(window).scrollTop(0);
			});