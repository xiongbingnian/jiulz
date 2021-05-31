$(function(){
	//轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000
  	});
  	//资讯切换效果
  	$(".information_list_content").html($(".information_content").children().eq(0).html());
  	$(".information_nav_list li").click(function(){
  		$(".information_nav_list li").removeClass("information_nav_active");
  		$(this).addClass("information_nav_active");
  		$(".information_list_content").html($(".information_content").children().eq($(this).index()).html());
  	})
})
