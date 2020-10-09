// 加载完毕事件 在该事件中 写的js代码 去获取dom元素 就一定不会出现找不到的问题
window.onload = function() {
    // 将px转rem的公式代码
    function rem() {
        var w = document.documentElement.getBoundingClientRect().width;
        var bili = w / 3.75;
        document.documentElement.style.fontSize = bili + "px";
    }
    rem()

    // 轮播图
    banner();

    // 滚动条事件
    ding()

    // 回到顶部
    hui()

    // 导航变色
    se()

    // 下箭头的变色
    xia()
}




// 轮播图方法
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current

	步骤3:然切换有动画效果
		使用css3中的transition
		.style.transition ='all .3s';
		在获取的时候 进行添加即可

	步骤4:当我切换到 最后一张时 瞬间 切到 第一张
		关闭过度
		瞬间切换到第一张

	步骤5:对代码 进行重构 添加进来了 过渡结束知识点
		由于 我们在修改 ul的位置时 会使用过度
		当注册了 过渡结束事件之后,每次 过渡完毕 都会 调用该事件
			将 判断 index  是否 越界 以及 修改 索引的 代码 全部 迁移到 过渡结束事件中

			定时器逻辑
				index++;

				修改 ul的 位置 ->开始过渡

			过渡结束事件逻辑
				判断 index是否有效
					进行修正
				修改索引li标签的 显示

	步骤6: 使用touch事件,实现 手指 拨动 ul滑动 效果
		touchstart
			记录开始值
			关闭定时器
			关闭过渡效果
		touchmove
			计算移动值
			修改ul的位置(在原始值的基础上进行修改,没有过渡效果的)
		touchend
			记录移动的距离(?)
			开启定时器(*)




*/
function banner() {

    //1 获取变量
    // 屏幕的宽度
    var width = document.body.offsetWidth;
    // console.log(width);\

    //  获取 轮播图的ul
    var moveUl = document.getElementsByClassName('banner_images')[0];

    // 添加过度效果 由于后面已经设置了 所以 这里 已经没有意义了
    // moveUl.style.transition = 'all .3s';

    // 索引的li标签
    // querySelectorAll返回文档中匹配指定 CSS 选择器的所有元素
    var indexLiArr = document.querySelectorAll('.banner_index li');

    // 定义 index 记录 当前的 索引值
    // 默认 我们的ul 已经 往左边 移动了 一倍的宽度
    // (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
    var index = 1;

    // 开启定时器
    var timeId = setInterval(function() {
        // 累加
        index++;

        // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
        moveUl.style.transition = 'all .3s';

        // 修改 ul的位置
        moveUl.style.transform = 'translateX(' + (index - 1) * width * -1 + 'px)';

    }, 1000);


    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd', function() {
        console.log('过渡结束');

        //  如果 index 太大了 
        if (index > 4) {
            index = 1;

            // 关闭过渡
            moveUl.style.transition = '';

            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX(' + (index - 1) * width * -1 + 'px)';
        } else if (index < 1) {
            // 跳到倒数第二张
            index = 4;

            // 关闭过渡
            moveUl.style.transition = '';

            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX(' + index * width * -1 + 'px)';
        }

        // 修改 索引li标签的 class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // 有一个 1的 差值
        indexLiArr[index - 1].className = 'current';

    })


    // 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;

    // 记录移动的值
    var moveX = 0;

    // 记录 distanceX：从移动到开始的距离
    var distanceX = 0;


    // 触摸开始
    moveUl.addEventListener('touchstart', function(event) {
        // 关闭定时器
        clearInterval(timeId);

        // 关闭过渡效果
        moveUl.style.transition = '';

        // 记录开始值
        startX = event.touches[0].clientX;
        console.log(event);
    })

    // 触摸中
    moveUl.addEventListener('touchmove', function(event) {
        // 计算移动的值
        moveX = event.touches[0].clientX - startX;

        // 移动ul
        // 默认的移动值是 index*-1*width 
        moveUl.style.transform = 'translateX(' + (moveX + index * -1 * width) + 'px)';
    })

    // 触摸结束
    /*
    	手指松开的时候 判断 移动的距离 进行 是否吸附
    		由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
    			吸附回的值是 index*-1*width
    		如果移动的距离较大
    			需要判断正负
    				index++;
    				index--;
    				 index*-1*width
    */
    moveUl.addEventListener('touchend', function(event) {

        // 定义 最大的 偏移值
        var maxDistance = width / 3;

        // 判断 是否超过
        if (Math.abs(moveX) > maxDistance) {
            // 判断 到底是 往左 还是往右移动
            if (moveX > 0) {
                index--;
            } else {
                index++;
            }
            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';

            // 吸附 一整页
            moveUl.style.transform = 'translateX(' + (index * -1 * width) + 'px)';

        } else {
            // 如果 进到这里了 说明 没有超过 我们定义的 最大偏移值 吸附回去即可

            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';

            // 吸附回去
            moveUl.style.transform = 'translateX(' + (index * -1 * width) + 'px)';
        }

        // 记录结束值

        // 开启定时器
        timeId = setInterval(function() {
            // 累加
            index++;

            // 将 过渡开启 只要进来 就开启过渡 保证 过渡效果一直存在
            moveUl.style.transition = 'all .3s';

            // 修改 ul的位置
            moveUl.style.transform = 'translateX(' + index * width * -1 + 'px)';
        }, 1000)
    })

}