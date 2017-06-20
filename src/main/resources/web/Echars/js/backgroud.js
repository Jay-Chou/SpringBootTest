function Swipe(content){
    //滑动对象
    var swipe = {};
    var content = $('#content');
    var contentwrap = $('.content-wrap');
    var elemets = contentwrap.find('li');
    //获取容器的体积
    var width = content.width();
    var height = content.height();
    // alert(width);
    //计算ul的体积
    contentwrap.css({
        width:(elemets.length * width) + "px",
        height:height + "px"
    })
    $.each(elemets, function(index) {
            var elemet = elemets.eq(index); //获取到每一个li元素    
            // ？
            elemet.css({
                width: width + "px",
                height:height + "px"
            });
    });
    swipe.scrollTo = function(speed,proportionX) {
        // alert(proportionX * width)
        contentwrap.animate({
         "left":- proportionX * width
         },speed,'linear');
    }
    return swipe;
}
	// // function Swipe(content){
	// // //滑动对象
 // //    var swipe = {};
 // 	var content = $('#content');
	// var contentwrap = $('.content-wrap');
	// var elemets = contentwrap.find('li');
	// //获取容器的体积
	// var width = content.width();
 //    var height = content.height();
 //    // alert(width);
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
 //    });
  //   swipe.scrollTo = function(speed) {
		// contentwrap.animate({
  //   		"left":-(elemets.length-1) * width
  //   		},speed,'linear');
		// }
	// var boy = $('#boy');
	// boy.css('top': top - boy.height() +20);
	// return swipe;
	// }