$(function(){
	$(".three_dot").click(function(){
		$(".fold_p").show();
	});
	var windowTop=0;//初始话可视区域距离页面顶端的距离
	$(window).scroll(function() {
		var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
		if(scrolls>=windowTop){//当B>A时，表示页面在向下滑动
			//需要执行的操作
			$(".fold_p").hide();
		}
	});
})
