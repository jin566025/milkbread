/**
 * Created by Administrator on 2016/1/12.
 */
$(function(){
    var n = 1;//����ͼƬ���±�Ϊ1
    var m = 0;//����СԲȦ���±�
    //�Զ��ֲ�
    function fn(){
        if(n<5){// ���ͼƬ���±�С��5
            n = n+1;
        }else{
            n = 2;
            $(".photoBox").css({left:-750});//��ͼƬ�ĺ��ӵ�λ�����¶�λ��ԭ����λ��left��-1000��
        }
        $(".box ul li").removeClass("current");//�Ƴ�����СȦȦ����ʽ
        if(n==5){//������������ƶ�������һ��ͼ���±���5��ͼƬ�ϣ�
            $(".box ul li").eq(0).addClass("current");
        }
        $(".photoBox").animate({left:-750*n},1500);//��ͼƬ�ĺ���λ�ö�λ��left:-1000*n
        $(".box ul li").eq(n-1).addClass("current");
    }
    var timer = setInterval(fn,5000);//��ʱ��

    //����ƶ���box���ӵ�ʱ�򣬶���ֹͣ
    $(".box").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(fn,5000);
    })
    //������Ҽ�
    $(".leftarrow").click(function(){
        if(n>0){
            n = n-1;
        }else{
            n = 3;	//��n=0��ʱ�򣬱��n=3��ͼƬ�����ţ�
            $(".photoBox").css({left:-4000});//����ͼƬ���ƶ��������ţ�
        }
        $(".photoBox").animate({left:-750*n},1500);
        $(".box ul li").removeClass("current");//�Ƴ�����СȦȦ����ʽ
        $(".box ul li").eq(n-1).addClass("current");
    })
    $(".rightarrow").click(function(){
        if(n<5){
            n = n+1;
        }else{
            n = 2;//n����6��ʱ�򣬼���ʾ���һ��ͼ���͵ڶ���ͼ��һ���ģ������������ʾ���ǵ�һ�ţ�
            $(".photoBox").css({left:-750});//photobox��λ����ʼλ��
        }
        $(".box ul li").removeClass("current");//�Ƴ�����СȦȦ����ʽ
        if(n==5){//������������ƶ�������һ��ͼ���±���5��ͼƬ�ϣ�
            $(".box ul li").eq(0).addClass("current");
        }
        $(".photoBox").animate({left:-750*n},1500);
        $(".box ul li").eq(n-1).addClass("current");
    })
    //��������С��ť
    $(".box ul li").click(function(){
        m = $(".box ul li").index(this);//��ǰ�����СȦȦ���±�
        $(".box ul li").removeClass("current");
        $(".box ul li").eq(m).addClass("current");
        n = m+1;//ͼƬ���±���СȦȦ���±��1
        $(".photoBox").animate({left:-750*n},1500);
    })
})