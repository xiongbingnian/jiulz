!function(){
	var oTab = $('.brand_tab .tab li');
	var oItem = $('.brand_tab .content>li .item');
	// =>创建一个函数实现页卡切换的功能
	function change(index){
		for (var i = 0; i < oTab.length; i++) {
			oTab[i].className = null;
			oItem[i].className = 'item';
		}
			oTab[index].className =  'select';
			oItem[index].className += ' select';
	}
	for (let i = 0; i < oTab.length; i++) {
		~function(){
			oTab[i].onmouseover = function(){
				change(i);
			}
		}(i);
	}
	var oBtn = $(".p_c .classify .btn");
	var iH = $(".p_c .classify .nav").height()+18;
	oBtn[0].flag = 1;
	oBtn.click(function(){
		if(oBtn[0].flag===1){
			this.innerHTML = '隐藏&and;';
			$(".p_c .classify ").animate({height:iH+"px"});
			oBtn[0].flag *= -1;
		}else{
			this.innerHTML = '展开&or;';
			$(".p_c .classify ").animate({height:"150px"});
			oBtn[0].flag *= -1;
		}
	});
	
	/*全部商品分类*/
	$(".nav_all_classify,.classify_box").mouseover(function(){
		$(".classify_box").show();
	});
	$(".nav_all_classify,.classify_box").mouseout(function(){
		$(".classify_box").hide();
	});


}();

	// 图片预加载
 (function(){
        var imgList = document.body.getElementsByTagName('img');
        function lazyImg(curImg){
            var oImg = new Image;
            oImg.src =curImg.getAttribute("trueImg");
            oImg.onload = function(){
                // console.log(curImg)
                curImg.src = this.src;
                curImg.style.display = "block";
                oImg = null;
            };
            curImg.isLoad = true;
        }
        function handleAllImg(){
            for(var i =0; i<imgList.length;i++){
                var curImg = imgList[i];
                // console.log(curImg);
                if(curImg.isLoad == true){
                    continue;
                }
                var curImgPar = curImg.parentNode;
                var A =utils.offset(curImgPar).top + curImgPar.offsetHeight, B = utils.win("clientHeight") + utils.win("scrollTop");
                // console.log(A,B);
                if(A<B){
                    lazyImg(curImg);
                }
            }
        }
        window.setTimeout(handleAllImg(),500);
        window.onscroll =handleAllImg;

})()