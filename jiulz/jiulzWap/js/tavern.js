$(function(){
	//轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000
  	});
	//切换
	$(".switchover_content").html($(".hot_p_content").children().eq(0).html());
	$(".hot_p_c_list li").click(function(){
		$(".hot_p_c_list li").removeClass("hot_p_c_active");
		$(this).addClass("hot_p_c_active");
		$(".switchover_content").html($(".hot_p_content").children().eq($(this).index()).html());
	})
})
