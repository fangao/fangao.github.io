var weiboLogin = $('#wb_connect_btn');
weiboLogin.click(function(){
	WB2.login(function(){
    // 验证是否登入成功
	    if(WB2.checkLogin()){
	        // api 入口
	        WB2.anyWhere(function(W){
	            // 调用 account/get_uid 接口，获取用户信息
	            W.parseCMD('/account/get_uid.json', function(oResult, bStatus){
	                if(bStatus){
	                    // 本地验证 uid 是否存在，如果存在则自动登入绑定账户，不存在则不做任何操作
	                    $.ajax({
	                        type: 'POST',
	                        url: 'index.ajax.php',
	                        data: 'ac=checkReg&uid='+oResult.uid+'&type=1',
	                        success: function(msg){
	                            if(msg == 1){
	                                // 已登入，刷新页面
	                                location.reload();
	                            }else{
	                                // 未绑定账号，进行绑定或者注册
	                                // do something
	                            }
	                        }
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
