// function EDG() {
// 	// var inlas = document.querySelectorAll(".four a")
// 	// var inlas = four.querySelectorAll("a");
// 	var four = document.getElementById("two")
// 	var inlas = four.getElementsByTagName("a")
// 	console.log(inlas)
// 	var clslds = document.getElementsByClassName("five");
// 	for (var i = 0; i < inlas.length; i++) {
// 		inlas[i].index = i
// 		for (var j = 0; j < clslds.length; j++) {
// 				console.log(clslds[j])
// 			inlas[i].onclick = function() {
// 				clslds[j].style.display = "block";
// 			}
// 			inlas[i].onclick = function() {
// 				clslds[this.index].style.display = "none";
// 			}
// 		}
// 	}
// }
// EDG()

var four = document.getElementsByClassName("four")
var inlas = four[0].getElementsByTagName("a")
var clslds = document.getElementsByClassName("five");
inlas[0].onclick = function() {
	clslds[0].style.display = "block";
	clslds[1].style.display = "none";
	inlas[0].className="on"
	inlas[1].className=""
}
inlas[1].onclick = function() {
	clslds[1].style.display = "block";
	clslds[0].style.display = "none";
	inlas[0].className=""
	inlas[1].className="on"
}
var inlas1 = four[1].getElementsByTagName("a")
inlas1[0].onclick = function() {
	clslds[2].style.display = "block";
	clslds[3].style.display = "none";
	inlas1[0].className="on"
	inlas1[1].className=""
}
inlas1[1].onclick = function() {
	clslds[3].style.display = "block";
	clslds[2].style.display = "none";
	inlas1[0].className=""
	inlas1[1].className="on"
}
var fo = document.getElementsByClassName("fo")
var inlas2 = fo[0].getElementsByTagName("a")
inlas2[0].onclick = function() {
	clslds[4].style.display = "block";
	clslds[5].style.display = "none";
	inlas2[0].className="on"
	inlas2[1].className=""
}
inlas2[1].onclick = function() {
	clslds[5].style.display = "block";
	clslds[5].style.display = "none";
	inlas2[0].className=""
	inlas2[1].className="on"
}

var rocket=document.getElementsByClassName("fixes")[0];

    rocket.onclick=function(){
      // var speed=5;
      // 读：读取当前滚动条的位置信息
      var top=document.documentElement.scrollTop;//100
      var timer=setInterval(function(){
        // speed+
        top-=20;
        console.log(1)
        // scrollTop是可读写的！！
        // 写，改变滚动条的位置
        document.documentElement.scrollTop=top;
        if(top<=0){
          clearInterval(timer);
        }
      },1);
    }