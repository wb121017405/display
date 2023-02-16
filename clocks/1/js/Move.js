function Move(obj,attr,speed,target,endFn){
		
		speed=parseInt(css(obj,attr))>target?-speed:speed;
	//运动
		clearInterval(obj.timer) //清除定时器
		obj.timer=setInterval(function(){
			var startDir=css(obj,attr); //获取初始位置
			var nowDir=parseInt(startDir)+speed; //计算下步到达的位置（和运行速度）

				if(nowDir>=target && speed>0){nowDir=target;} //判断运动到在于或等 600px的位置时，强制变成 600px
				if(nowDir<target && speed<0){nowDir=target;}

				obj.style[attr]=nowDir+"px"; //oBox到达的位置

				if(nowDir==target){ clearInterval(obj.timer);

									endFn && endFn();
				}  //到达目标点停止定时器

		},30);
}


function css(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}