$(function(){
	//判断是手机 还是pc 
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		//判断是手机
	    //window.location.href = "http://m.zsb99.cn/";//填写手机的域名
	} else {
	    //判断是电脑
	}
	//轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        autoplay:3000
    });
   

    /*创业好店、服务公告切换效果*/
   $(".news_box>div>span").mouseover(function(){
   		$(".news_box>div>span").removeClass("news_activt");
   		$(this).addClass("news_activt");
   		$(".news_list").hide();
   		$(this).next().show();
   });
    /*底部三张图片的切换*/
   $(".feast_part_3_s_img").mouseover(function(){
   		$(".img_hover").hide();
   		$(this).prev().show();
   });
   
   /*官方推荐切换*/
   $(".recommend_title li>span").mouseover(function(){
   		$(".recommend_title li>span").removeClass("recommend_active");
   		$(this).addClass("recommend_active");
   		$(".recommend_img").hide();
   		$(this).next().show();
   });
})
