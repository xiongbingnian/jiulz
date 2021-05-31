$(function(){
	//判断是手机 还是pc
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	    //判断是手机
	} else {
		//判断是电脑
	    //window.location.href = "http://9.zsb99.cn/";//填写pc的域名
	}
	
	//图片滑动
	$(".j_s_brand_list").each(function(){
		$(this).width($(this).children().length*8+"rem");
	})
	
	
	//轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000
    });
    
    //商机头条动画
    var marginTop=0;
    function step(){
		marginTop+=3;
		if(marginTop == $(".news_list li").length*3){
        	marginTop=0;
        }
        $(".news_list").animate({"margin-top":-marginTop+"rem"},100);
        
        setTimeout(step,3000);
    }
    step();
})
