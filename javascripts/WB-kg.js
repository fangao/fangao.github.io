var weiboLogin = $('#wb_connect_btn');
//构造函数，体重参数对象
function dot(time,v){
	this.time =time;
	this.v=v;
}
//参数数组;
var vdata=[];
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
	                			var kg_time = new Date(itme.created_at);
	                			var v_data = dot(kg_time.toLocaleDateString(),kg_data);
	                			vdata.push(v_data);	
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
