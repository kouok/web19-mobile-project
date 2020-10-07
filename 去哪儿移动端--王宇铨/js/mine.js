window.onload=function(){

	// 返回上一页
	function goback(btn){
		var btns=document.querySelector(btn);
		btns.addEventListener("click",function(){
			history.back();
		})
		
	};
	goback(".Back");
	


}