$(function(){
	/*查看详情、立即咨询切换*/
	$(".link_box a").hover(function(){
		$(".link_box a").removeClass("link_active");
		$(this).addClass("link_active");
	})
	/*底部三张图片的切换*/
   $(".s_img").mouseover(function(){
   		$(".img_hover").hide();
   		$(this).prev().show();
   });
	/*品牌简介切换*/
	$(".introduce_box").height($(".introduce_text").height()+100);
	$(".introduce_list li>span").mouseover(function(){
   		$(".introduce_list li>span").removeClass("introduce_active");
   		$(this).addClass("introduce_active");
   		$(".introduce_text").hide();
   		$(this).next().show();
   		$(".introduce_box").height($(this).next().height()+100);
	});
})
