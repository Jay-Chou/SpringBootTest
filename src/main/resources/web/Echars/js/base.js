// $(document).ready(function(){
// 	var $a = $('#text');
// 	var b = $a[0];
// 	var $c = $(b);
// 	$a.html("这是一个关于JQeury的开始");
// 	// b.style.color= 'red' ;
// 	$c.css('color','yellow')	
// });
$(function(){
    //找到男装下第一类衣服中的第一个p元素，并改变颜色
    //可以通过子类选择器  p:first-child 筛选出第一个p元素
    // swal("Good job!", "You clicked the button!", "success")
    $('#menu_con div.tag dd > p:first-child').css('color','#9932CC');
    // 找到男装下第一类衣服把a元素从顺序1-4加上颜色
    // 可以通过基本筛选器lt,选择匹配集合中所有索引值小于给定index参数的元素
    // 注意了index是从0开始计算，所以选在1-4,为对应的index就是4
   $('#menu_con div.tag dd > a:lt(4)').css('color','red');
    //找到男装所有a元素中属性名name="setColor"的元素，并设置颜色
    //这里用的属性选择器[attribute='value']选择指定属性是给定值的元素
   $('#menu_con dd a[name=setColor]').css('color','blue');
    //不分男女，选中第一类衣服中第9个a元素，并改变颜色
    //这里用了nth-child 选择的他们所有父元素的第n个子元素
   $('#menu div.tag dd > a:nth-child(10)').css('color','#66CD00');
    //找到女装下第一类衣服，把a元素中包含文字"更多"的节点，改变颜色
   $('#menu_female div.tag dd > a:contains("更多")').css('color','#C71585');

   // $('a').click(function(event) {
   // 	$(this).attr('href',$.getDomain()+'www.baidu.com')
   // })
   // alert($.getDomain()+'d')
   // alert('dsad');

   // var Data = '{"authInfo":"RandomInfo=AAAAAQAFYWRtaW4AG2lzQWRtaW49dHJ1ZSZpc1dYQWRtaW49dHJ1ZQAAAC4wLAIURIi3foSCBUv2ozmGa9s2dOIQdScCFBpE7rCyMKXFACyFRoiqEoIBEquw","userName":"admin","wechatUrl":"http://222.178.215.122:8092/wechat/"}'
   // var JsonData = $.parseJSON(Data);
   // alert(JsonData['authInfo']);
   // alert(JsonData.authInfo);

   // },function(event){
   // 	$(this).css('color','black');
   // })
	var wxId = 'ashdg123123';
	var wxNewsId = '2467';
	$('#wxId').change(function(e){
		$('#left-result').html($(this).val())
	})
	// $('p').removeClass('class name')Class
	// $('#wxId').val(wxId);
	// $('#wxNewsId').val(wxNewsId);
	// var className = 'asdasd,asdasd,asdasd,333';
	// className.replace(/333/,'')
	// alert(className.replace(/333/,''))
	// alert(className.indexOf('imoocClass'))
	// $('div').css()
	$('.left .aaron1').on('click',function(){
		var ele = $(this);
		$.data(ele,'a','三年一班学生');
		$.data(ele,'b',{
			name:'尼玛',
			age:'12'
		});
		var str = $.data(ele,'a') + '</br>姓名：' +$.data(ele,'b').name + '</br>年龄：' + $.data(ele,'b').age;
		ele.next().find('#left-result').html(str);
		// ele.html().replaceWith('GG');
	})

	$('.right .aaron').hover(function(event){
		var ele = $(this);
		var next = ele.next();
		next.html(ele.html());
		ele.empty();
		// ele.data('a','三年二班学生');
		// ele.data('b',{
		// 	name:'小菊',
		// 	age:'13'
		// });
		// var str = ele.data('a') + '</br>姓名：' +ele.data('b').name + '</br>年龄：' + ele.data('b').age;
		// ele.next().find('span').html(str);
		ele.next().css({
			background: 'red'
		});
		ele.css({
			background: 'yellow'
		})
		console.log(111);
	},function(event) {
		var ele = $(this);
		var next = ele.next();
		ele.html(next.html())
		next.empty();
		ele.css({
			background: 'red'
		})
		ele.next().css({
			background: 'yellow'
		});
	});

		// var body = $('.aaron');
  //       body.click(function(event) {
  //       $('<p style="color:red">before,在匹配元素之前增加</p>', '<p style="color:red">多参数</p>').insertBefore($(this))
  //       })

  //       $('.aaron1').click(function(event) {
		//  Act on the event 
		// $('.left').append($(this).clone(true));
	// });
	// $('.last .arron').click(function(){
	// 	$('p').unwrap('<div></div>');
	// });
	// $('.last').mouseover(function() {
	// 	$(this).css('dispaly','none')
	// });
	// $('.last').mouseout(function() {
	// 	$(this).css('dispaly','block')
	// });
	// alert('a');
	// $('.last').mouseover('gg',function(e){
	// 	$(this).toggle({
	// 		duration:3000,
	// 		complete:function(){
	// 			alert(e.data);
	// 		}
	// 	});
	// })
// $('.last').click('a',function(event) {
// 	/* Act on the event */
// 	$(this).children('div').animate({
// 		width: 500
// 	},{
// 		easing:'easeInBack',
// 		duration:1000,
// 		complete:function(){
// 			alert('ashgdh');	
// 		}
// 	});
// })
// 	$('#yo').append($('#menu_female div.tag dd a').index($('#33')))
// $.ButtenClick();
            var student = [{"name":"小王","age":20},{"name":"小明","age":22},{"name":"小冉","age":21}];
            $.each(student,function(index,data){
                $('#student').append("<li>姓名:"+data["name"]+"   年龄:"+data["age"]+"</li>");
            })
            $('li').focus(function(){
            	$(this).css('color','#FFFFCC');
            })
});
	

// window.onload=function(){
// 	console.log(document.getElementById('text').innerHTML+"--1");
// };
// (function(){
// 	console.log($('#text').html()+"--2")
// }());
// $(function(){
// 	console.log($('#text').html()+"--3")
// })