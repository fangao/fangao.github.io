var weiboLogin = $('#wb_connect_btn');
var chartLoad = $('#paintChart');
//构造函数，体重参数对象
function dot(time,v){
	this.time =time;
	this.v=v;
}
//参数数组;
var vdata=[];
var vTime=[];
var vBodyMass =[];

weiboLogin.click(function(){
	WB2.login(function(){
    // 验证是否登入成功
	    if(WB2.checkLogin()){
	        // api 入口
	        WB2.anyWhere(function(W){
	            // 调用 user_timeline
	            W.parseCMD('/statuses/user_timeline.json', function(oResult, bStatus){
	                if(bStatus){
	                	var status = oResult.statuses;
	                	$.each(status,function(index,item){
	                		if (item.text.indexOf("Body Mass") !=-1) {
	                			var kg_data = item.text.split(" ")[2];
	                			var kg_time = new Date(item.created_at);
	                			var v_data = new dot(kg_time.toLocaleDateString(),kg_data);
	                			vTime.push(v_data.time);
	                			vBodyMass.push(v_data.v);	
	                		};
	                	});

	                }
	            }, {}, {
	                method : 'get',
	                cache_time : 30
	            });
	        });
	    }
	});
});
chartLoad.click(function(){
	$('#chartView').highcharts({
            title: {
                text: '我的体重跟踪表',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: BlackEnvelope.com',
                x: -20
            },
            xAxis: {
                categories: vTime
            },
            yAxis: {
                title: {
                    text: '体重 (Kg)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '庄重',
                data: vBodyMass
            }]
        });
});

