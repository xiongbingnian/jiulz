var utils = (function(){
	return {
	 			//-win:编写一个有关于操作浏览器盒子模型的方法
			win: function (attr,value) {
					if(typeof value === "undefined"){
						// console.log( document.body[attr]);
						return document.documentElement[attr] || document.body[attr];
					}

				document.documentElement[attr] = value;
				document.body[attr] = value;
				},
//->getCss:获取当前元素所有经过浏览器计算过的样式中的atttr对应的值
	getCss: function (curEle,attr){
		var val =null,reg =null;
		if ("getComputedStyle" in window) {
			val =window.getComputedStyle(curEle,null)[attr];
		}else{
		if(attr === "opacity"){
			val = curEle.currentStyle["filter"];
			reg =/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
			ret.test(val)?reg.exec(val)[1]/100:1;
		}
		val =curEle.currentStyle[attr];
	}
	reg = /^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
	return reg.test(val) ? parseFloat(val) : val;
},
//->function:等同于jQuery中的offset方法，实现获取页面中任意一个元素，距离body的偏移（左偏移和上偏移），不管当前元素的父级参照物是谁
offset: function (curEle){
 	var totalLeft = null,totalTop = null,par=curEle.offsetParent;
 	totalLeft += curEle.offsetLeft;
 	totalTop += curEle.offsetTop;
 	while(par){
 		if(navigator.userAgent.indexOf("MAIE 8.0")===-1){
 			 totalLeft += par.clientLeft;
 			totalTop += par.clientTop;	
 		}
 		
 		totalLeft += par.offsetLeft;
 		totalTop += par.offsetTop;

 		par = par.offsetParent; 
 	}
 	return {left:totalLeft,top:totalTop};
 }
	};
})();

// 图片预加载
 (function(){
        var imgList = document.body.getElementsByTagName('img');
        function lazyImg(curImg){
            var oImg = new Image;
            oImg.src =curImg.getAttribute("trueImg");
            oImg.onload = function(){
                 //console.log(curImg)
                curImg.src = this.src;
//              curImg.style.display = "block";
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