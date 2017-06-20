function BoyWalk(){
	var content = $('#content');
	//获取容器的体积
    var width = content.width();
    var height = content.height();
    var boy = $('#boy');
    //计算小男孩的top高度
	var backgroudmiddle = $('.a_backgroud_middle');
	var boyTopValue = backgroudmiddle.position().top +  backgroudmiddle.height() / 2;	
	boy.css({top: boyTopValue - boy.height() +20});

	////////////////////////////////////////////////////////
//===================动画处理============================ //
////////////////////////////////////////////////////////

	    // 暂停走路
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }
		// 恢复走路
	function restoreWalk() {
    	boy.removeClass('pauseWalk');
	}

	// css3的动作变化
	function slowWalk() {
    	boy.addClass('slowWalk');
	}

	// 计算移动距离
	function calculateDist(direction, proportion) {
	    return (direction == "x" ?
	        width : height) * proportion;
	}


	// 用transition做运动
	function stratRun(options, runTime) {
	    var dfdPlay = $.Deferred();
	    // 恢复走路
	    restoreWalk();
	    // 运动的属性
	    boy.transition(
	        options,
	        runTime,
	        'linear',
	        function() {});
	    return dfdPlay;
	}


	// 开始走路
	function walkRun(time, disX, disY) {
	    time = time || 3000;
	    // 脚动作
	    slowWalk();
	    // 开始走路
	    var d1 = stratRun({
	        'left': disX + 'px',
	        'top': disY ? disY : undefined
	    }, time);
	    return d1;
	}

	return {
        walk: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX)
            var distY = calculateDist('y', proportionY)
            return walkRun(time, distX, distY);
		},
		walkpaused: function(){
			pauseWalk();
		}
	}
}