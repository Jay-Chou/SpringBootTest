$.extend({
	getAjaxReturn: function(success_function,fail_function,data,url,mychar){ // 获取跟站点
		$.ajax({
	        method :'POST',//请求方式
	        dataType :'json',//设置返回数据的格式
	        data:data, 
	        url :url,//请求地址
	        headers: {
                'formdata': "1",
                'Content-Type': 'application/x-www-form-urlencoded',
                'distributionType':1
            },
        success:function(data, status, xhr) {
	        	// if(xhr.getResponseHeader("TRSNotLogin")){
          //           window.parent.location.href="/mediacube";
          //       }else{
                	success_function(data,mychar);
                // } 
	    },error:function(msg) {
	        	/* Act on the event */
	        	fail_function(msg); 
	        }
	    });
	},
	getAjaxDataReturn: function(success_function,fail_function,data,url,params){ // 获取跟站点
		$.ajax({
	        type :'post',//请求方式
	        dataType :'json',//设置返回数据的格式
	        data:data, 
	        url :url,//请求地址
	        headers: {
                'formdata': "1",
                'Content-Type': 'application/x-www-form-urlencoded',
                'distributionType':1
            },
	        success : function(data, status, xhr) {
	        	// if(xhr.getResponseHeader("TRSNotLogin")){
          //           window.parent.location.href="/mediacube";
          //       }else{
                	success_function(data,params); 
                // } 
	        },
	        error:function(msg){
	           fail_function(msg); 
	        }
	    });
	},
	getTextAjaxReturn: function(success_function,fail_function,data,url,object){ // 获取跟站点
		$.ajax({
	        type :'post',//请求方式
	        dataType :'text',//设置返回数据的格式
	        data:data, 
	        url :url,//请求地址
	        headers: {
                'formdata': "1",
                'Content-Type': 'application/x-www-form-urlencoded',
                'distributionType':1
            },
	        success : function(data, status, xhr) {
	        // 	if(xhr.getResponseHeader("TRSNotLogin")){
         //            window.parent.location.href="/mediacube";
         //        }else{
                	success_function(data,object); 
                // } 
	        },
	        error:function(msg){
	           fail_function(msg); 
	        }
	    });
	},
	getTrsHttpService: function(success_function,fail_function,data,url){ // 获取跟站点
		$.ajax({
	        type :'post',//请求方式
	        dataType :'json',//设置返回数据的格式
	        data:data, 
	        url :url,//请求地址
	        headers: {
                'formdata': "1",
                'Content-Type': 'application/x-www-form-urlencoded',
                'distributionType':1
            },
	        success : function(data, status, xhr) {
	        	// if(xhr.getResponseHeader("TRSNotLogin")){
          //           window.parent.location.href="/mediacube";
          //       }else{
                	// if(data.success){
                		success_function(data); 
                	// }else{
                	// 	alert(data.data);
                	// 	$('#loading-bg', window.parent.document).hide();
                	// }
                // } 
	        },
	        error:function(msg){
	           fail_function(msg); 
	        }
	    });
	},
});
function fail_function(msg){
	// $('#loading-bg', window.parent.document).hide();
	if(msg.message){
		swal("请求失败!", msg.message, "error"); 
	}else{
		swal("请求失败!", "程序出错！", "error");
	}
}
