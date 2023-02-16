//获取元素
var oUl=document.getElementById("Tz_List");
var aLi=oUl.getElementsByTagName("li");
var liIndex=[0,1,3,4,6,7];
//创建时间
var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
var str=fullZero(hours,2)+""+fullZero(minutes,2)+""+fullZero(seconds,2);
//把时间与图片对应
init();
function init(){
    for(var i=0;i<liIndex.length;i++){
        var a=liIndex[i];
        aLi[a].getElementsByTagName("img")[0].src="images/"+str.charAt(i)+".png";
        aLi[a].getElementsByTagName("img")[0].index=str.charAt(i);
        play(aLi[a],i);
    }
}
//用for循环，因为代码太多，再加上执行顺序，会出现延迟
function play(obj,index){
    //让图片动起来 开定时器
    var num=0;
    setInterval(function(){
        //创建时间
        var date=new Date();
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var str2=fullZero(hours,2)+""+fullZero(minutes,2)+""+fullZero(seconds,2);
        var aImg=obj.getElementsByTagName("img");
        //把当前时间数字，做为自定义属性加到图片上，用来和现在的时间做比较
        if(str2.charAt(index)!=aImg[num].index){
            //获取里面的两张图片
            aImg=obj.getElementsByTagName("img");
            Move(aImg[num],"top",10,-61);
            if(num==1){
                aImg[num-1].src="images/"+str2.charAt(index)+".png";
                aImg[num-1].index=str2.charAt(index);
                Move(aImg[num-1],"top",10,0,function(){
                    aImg[num].style.top="61px";
                    num--;
                });
            }else{
                aImg[num+1].src="images/"+str2.charAt(index)+".png";
                aImg[num+1].index=str2.charAt(index);
                Move(aImg[num+1],"top",10,0,function(){
                    aImg[num].style.top="61px";
                    num++;
                });
            }
        }
    },1000);
}
//补0方法
function fullZero(time,n){
    var str=time+"";
    while(str.length<n){
        str="0"+str;
    }
    return str;
}