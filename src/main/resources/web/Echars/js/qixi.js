$(function(){


	////////////////////////////////////////////////////////
//===================动画处理============================ //
////////////////////////////////////////////////////////
	var swipe = Swipe($('#content'));
	// var backgroudmiddle = $('.a_backgroud_middle');
	// var top = backgroudmiddle.position().top +  backgroudmiddle.height() / 2;
	// var boy = $('#boy');
	// boy.css({top: top - boy.height() +20});
	var boyWalk = BoyWalk();
	boyWalk.walk(3000,0.5).then(function(){
		swipe.scrollTo(10000,1);
	});
    // 第二次走路
    // boy.walkTo(5000, 0.5);
	// 	//计算小男该的路线
	// function getValue(){
	// 	//获取中间道路的top
	// 	var backgroudmiddle = $('.a_backgroud_middle');
	// 	var top = backgroudmiddle.position().top +  backgroudmiddle.height() / 2
	// 	return top;
	// };
	// //设置小男孩的top高度
	// var boy = $('#boy');
	// boy.css({
	// 	top: getValue() - boy.height() +20
	// });
	// boy.transition({
	// 	'left':$('#content').width() + "px"
	// },10000,'linear');

	// // swipe.scrollTo(30000);
	// $('.button').click(function(){
	// 	var left = boy.css('left');
	// 	boy.css('left',left);
	// 	//如果小男孩已经暂停,则将暂停类删除
	// 	// if(boy.is('.walkpaused')){
	// 	// 	boy.removeClass('walkpaused');
	// 	// 	boy.transition({
	// 	// 'left':$('#content').width() + "px"
	// 	// },10000,'linear');
	// 	// }else{
	// 		boy.addClass('walkpaused').stop();
	// 	// }
	// });
	
	// // $('.button').click(function(){
	// // 	swipe.scrollTo(6000);
	// // })
})
	// var comtent = $('#content')
	// var contentwrap = $('.content-wrap');
	// var elemets = contentwrap.find('li');
	// //获取容器的体积
	// var width = comtent.width();
 //    var height = comtent.height();
 //    //计算ul的体积
 //    contentwrap.css({
 //    	width:(elemets.length * width) + "px",
 //    	height:height + "px"
 //    })
 //    $.each(elemets, function(index) {
 //            var elemet = elemets.eq(index); //获取到每一个li元素    
 //            // ？
 //            elemet.css({
 //            	width: width + "px",
 //            	height:height + "px"
 //            });
 //      });
 //       	contentwrap.animate({
 //    		"left":-(elemets.length-1) * width},
 //    		5000,'linear');
    // $('.button').click(function(){
    // // 	contentwrap.css({
				// // 'transition-timing-function': 'linear',
    // // 			'transition-duration': '5000ms',
    // // 			'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)' //设置页面X轴移动
    // // 	});
    // 	contentwrap.animate({
    // 		"left":-(elemets.length-1) * width},
    // 		5000,'linear');
    // })
		// var container = $("#content");
  //       // 获取第一个子节点
  //       var element = container.find(":first");
  //       // li页面数量
  //       var slides = element.find("li");
  //       // 获取容器尺寸
  //       var width = container.width();
  //       var height = container.height();
        
  //       // 设置li页面总宽度
  //       element.css({
  //           width: (slides.length * width) + 'px',
  //           height: height + 'px'
  //       });
        
  //       // 设置每一个页面li的宽度
  //       $.each(slides, function(index) {
  //           var slide = slides.eq(index); // 获取到每一个li元素    
  //           slide.css({ // 设置每一个li的尺寸
  //               width: width + 'px',
  //               height: height + 'px'
  //           });
  //       });
// })