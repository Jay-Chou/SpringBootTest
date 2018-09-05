$(function(){
    var clickButton = {
        a:function(){
        var mychar = echarts.init(document.getElementById('demo'));
        mychar.showLoading();
        mychar.setOption({
            title: {
                x: 'center',
                text:'柱状图'
            },
            tooltip: {},
            legend: {
                // data:['销量','进口']
                data:[]
            },
            xAxis: {
                // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                data: [],
                "axisLabel":{
                    interval: 0
                }
            },
            yAxis: {},
            series: [{
                name: '销量',
                itemStyle: {
                    normal: {
                        barBorderRadius:[50, 50, 0, 0],
                        color: function(params) {
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                        }
                    }
                     
                },
                calculable: true,
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
        }
    },
                type: 'bar',
                // data: [5, 20, 36, 10, 10, 20]
                data: []
            // },{
            //  // name: '进口',
            //     type: 'bar',
            //     data: [5, 30, 70, 29, 78, 88]
            }]
        });
        var url='/goods/query';
        var data=1;
        // swal("Good job!", "You clicked the button!", "success")
        $.getAjaxReturn(barData,fail_function,data,url,mychar);
            // option.xAxis[0].data = dataX;
            // option.series[0].data = dataY;
            // mychar.setOption(option);
       //  barData(function(data){
       //      for(var i=0;i<data.data.length;i++){
       //          dataX.push(data.data[i].pname)
       //          dataY.push(data.data[i].num)
       //      };
       //      // option.xAxis[0].data = dataX;
       //      // option.series[0].data = dataY;
       //      // mychar.setOption(option);
       //      mychar.setOption({
       //          xAxis:{
       //              data:dataX
       //          },
       //          series:[{
       //              data:dataY
       //          }]
       //      });
       // });
    },
    //饼图
    b:function(){
            var mychar = echarts.init($('#demo')[0]);
            mychar.showLoading();
            mychar.setOption({
                title:{
                    x: 'center',
                    text:'手机行情'
                },
    // backgroundColor: '#FFF0F5',
    // visualMap: {
    //     show: false,
    //     min: 80,
    //     max: 600,
    //     inRange: {
    //         colorLightness: [0, 1]
    //     }
    // },
            series : [
                    {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
            // roseType:'angle',
                    data:[],
                    itemStyle: {
                        normal: {
                            label:{ 
                                show: true,
                            }, 
                            labelLine :{show:true},
                            }
                        }
                    }
                ]
            });
            bingData(function(data){
                mychar.hideLoading();
                mychar.setOption({
                    series : [{
                            data:[
                            {name:'三星',value:data.data.aa},
                            {name:'苹果',value:data.data.bb},
                            {name:'华为',value:data.data.cc},
                            {name:'小米',value:data.data.dd},
                            {name:'魅族',value:data.data.ee},
                            {name:'其他',value:data.data.aa}
                        ]
                    }]
                });
            });
        },
    c:function(){
           var mychar = echarts.init(document.getElementById('demo'));
        var option={
                tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name:'广东',selected:true}
                ]
            }
        ]
        }
    mychar.setOption(option); 
    }
}
    clickButton.a();
    $('#1').click(function(){
        clickButton.a();
    })
    $('#2').click(function(){
        clickButton.b();
    })
    $('#3').click(function(){
        clickButton.c();
    })
})

function barData(data,mychar) {
    // 通过 setTimeout 模拟异步加载
    var dataX=[];
    var dataY=[];
    for(var i=0;i<data.length;i++){
        dataX.push(data[i].goodsName)
        dataY.push(data[i].goodsNum)
        mychar.hideLoading();
        mychar.setOption({
            xAxis:{
                data:dataX
            },
            series:[{
                data:dataY
            }]
        });
    }
    swal("数据加载成功!", "", "success")
}

function bingData(cb) {
    // 通过 setTimeout 模拟异步加载
    setTimeout(function () {
        cb({
            "data": {
            	"aa":"182",
            	"bb":"122",
            	"cc":"89",
            	"dd":"23",
            	"ee":"54",
            }
        });
    }, 1000);
}
