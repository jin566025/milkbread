/**
 * Created by Administrator on 2016/1/14.
 */
$(document).ready(function(){
    //�ӵ�Ч��
    $(".add").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
    });
    //����Ч��
    $(".jian").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $(this).next().val(num);
    });
})
