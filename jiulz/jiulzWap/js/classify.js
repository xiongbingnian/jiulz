$(function(){
	$(".pull_down_list li").click(function(){
		$(this).parent().find("li").removeClass("pull_down_active");
		$(this).parent().find("i").removeClass("i_pitch_on");
		$(this).addClass("pull_down_active");
		$(this).find("i").addClass("i_pitch_on");
		$(".pull_down_box").hide();
	});
	$(".select_list li").click(function(){
		$(".pull_down_box").show();
		$(".select_list li").removeClass("select_active");
		$(".pull_down_box .mask").show();
		$(".pull_down_box .pull_down_list").hide();
		$(".pull_down_box .pull_down_list").eq($(this).index()).show();
		$(this).addClass("select_active");
	})
})
