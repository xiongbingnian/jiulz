$(function(){
	/*轮播效果*/
	var _now=0;
    var oul = $(".slidetwo");
    var numl = $(".label li");
    var wid = $(".slide").eq(0).width();
    $(".slidetwo").width(820*numl.length);
    //数字图标实现
    numl.click(function () {
        var index = $(this).index();
        _now=index;
        $(this).addClass("current").siblings().removeClass();
        oul.animate({'left': -wid * index}, 0);
    })
    //动画函数
    function ani(){
        numl.eq(_now).addClass("current").siblings().removeClass();
        oul.animate({'left': -wid * _now}, 0);
    }
    //以下代码如果不需要自动轮播可删除
    //自动动画
    var _interval=setInterval(showTime,3000);
    function  showTime() {
        if (_now == numl.size() - 1) {
            _now = 0;
        }
        else _now++;
        ani();
    }
    //鼠标停留在画面时停止自动动画，离开恢复
    $(".slide").mouseover(function(){
        clearTimeout(_interval);
    });
    $(".slide").mouseout(function(){
        _interval=setInterval(showTime,2000);
    });
})
