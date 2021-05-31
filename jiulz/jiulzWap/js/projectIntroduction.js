$(function(){
	//轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType: 'fraction',
        autoplay:3000
 	});
 	
 	//介绍切换
 	$(".introduce_list li").click(function(){
 		$(".introduce_list li").removeClass("introduce_active");
 		$(this).addClass("introduce_active");
 		$(".introduce_text").html($(".introduce_content").children().eq($(this).index()).html());
 	})
 	
 	//
// 	$(window).scroll(function () {
//		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
//			window.location.href = "details.html";
//		}
//	});
})
