window.onload=function() {
	var w=document.documentElement.getBoundingClientRect().width;
	var bili=w/3.75;
	document.documentElement.style.fontSize=bili+"px";


	//点击底部定位导航变字体颜色
    var mynav=document.querySelector(".mynav");
	var a=mynav.children;
	for (var i = 0; i <a.length; i++) {
		a[i].index=i;
		a[i].addEventListener("touchstart",function() {
			for (var i = 0; i <a.length; i++){
				a[i].className=""
			}
			this.className="color";
			// this.fristElementchildren.src="images/icons/foot"+this.index+1+h+".png";
		})
	}

	// //询问框
	// var btn=document.getElementById("btn");
 //        // 弹出框元素
 //    var model=document.querySelector(".model");

 //    btn.onclick=function(){
	//   layer.open({
	//     content: '您确定要刷新一下本页面吗？'
	//     ,btn: ['同意', '不同意']
	//     ,yes: function(index){
	//       location.reload();
	//       layer.close(index);
	//     }
	//   });
	// }
}