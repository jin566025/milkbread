/**
 * Created by Administrator on 2016/1/13.
 */
//�۸�json
var sys_item={
    "price":"150",
    "sys_attrprice":{"3_13":{"price":"150"},"3_14":{"price":"80"},
        "4_13":{"price":"130"},"4_14":{"price":"60"}}};


//��Ʒ���ѡ��
$(function(){
    $(".sys_item_spec .sys_item_specpara").each(function(){
        var i=$(this);
        var p=i.find("ul>li");
        p.click(function(){
            if(!!$(this).hasClass("selected")){
                $(this).removeClass("selected");
                i.removeAttr("data-attrval");
            }else{
                $(this).addClass("selected").siblings("li").removeClass("selected");
                i.attr("data-attrval",$(this).attr("data-aid"))
            }
            getattrprice() //����۸�
        })
    })

    //��ȡ��Ӧ���Եļ۸�
    function getattrprice(){
        var defaultstats=true;
        var _val='';
        var _resp={
            price:".sys_item_price"
        }  //�����Ӧ��class
        $(".sys_item_spec .sys_item_specpara").each(function(){
            var i=$(this);
            var v=i.attr("data-attrval");
            if(!v){
                defaultstats=false;
            }else{
                _val+=_val!=""?"_":"";
                _val+=v;
            }
        })
        if(!!defaultstats){
            _price=sys_item['sys_attrprice'][_val]['price'];
        }else{
            _price=sys_item['price'];
        }
        //����۸�
        $(_resp.price).text(_price);
    }
})