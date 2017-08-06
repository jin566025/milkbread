/**
 * Created by Administrator on 2016/1/12.
 */
$(function(){
    var n = 1;//定义图片的下标为1
    var m = 0;//定义小圆圈的下标
    //自动轮播
    function fn(){
        if(n<5){// 如果图片的下标小于5
            n = n+1;
        }else{
            n = 2;
            $(".photoBox").css({left:-750});//把图片的盒子的位置重新定位到原来的位置left：-1000；
        }
        $(".box ul li").removeClass("current");//移除所有小圈圈的样式
        if(n==5){//特殊情况，当移动到最后的一张图（下标是5的图片上）
            $(".box ul li").eq(0).addClass("current");
        }
        $(".photoBox").animate({left:-750*n},1500);//把图片的盒子位置定位在left:-1000*n
        $(".box ul li").eq(n-1).addClass("current");
    }
    var timer = setInterval(fn,5000);//定时器

    //鼠标移动到box盒子的时候，动画停止
    $(".box").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(fn,5000);
    })
    //点击左右键
    $(".leftarrow").click(function(){
        if(n>0){
            n = n-1;
        }else{
            n = 3;	//当n=0的时候，变成n=3（图片第三张）
            $(".photoBox").css({left:-4000});//（把图片框移动到第三张）
        }
        $(".photoBox").animate({left:-750*n},1500);
        $(".box ul li").removeClass("current");//移除所有小圈圈的样式
        $(".box ul li").eq(n-1).addClass("current");
    })
    $(".rightarrow").click(function(){
        if(n<5){
            n = n+1;
        }else{
            n = 2;//n等于6的时候，即显示最后一张图（和第二张图是一样的，在浏览器中显示的是第一张）
            $(".photoBox").css({left:-750});//photobox定位到初始位置
        }
        $(".box ul li").removeClass("current");//移除所有小圈圈的样式
        if(n==5){//特殊情况，当移动到最后的一张图（下标是5的图片上）
            $(".box ul li").eq(0).addClass("current");
        }
        $(".photoBox").animate({left:-750*n},1500);
        $(".box ul li").eq(n-1).addClass("current");
    })
    //点击下面的小按钮
    $(".box ul li").click(function(){
        m = $(".box ul li").index(this);//当前点击的小圈圈的下标
        $(".box ul li").removeClass("current");
        $(".box ul li").eq(m).addClass("current");
        n = m+1;//图片的下标是小圈圈的下标加1
        $(".photoBox").animate({left:-750*n},1500);
    })
})