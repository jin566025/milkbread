window.onload=function(){
    var width = document.body.clientWidth;
    if(width<1024){
      /*$("#LeftPop .ch").hide();*/
       
        $("#LeftPop ul li:nth-child(1) .en").html("主页  Home");
        $("#LeftPop ul li:nth-child(3) .en").html("美丽小居室 Beautifully Small House");
        $("#LeftPop ul li:nth-child(5) .en").html("所有商品  All Products");
        $("#LeftPop ul li:nth-child(6) .en").html("分类商品  Classified Goods");
        $("#LeftPop ul li:nth-child(7) .en").html("最新商品  Newest Products");
        $("#LeftPop ul li:nth-child(9) .en").html("艺心在延续  Art into Life");
        

        $("#LeftPop ul li:nth-child(1) .ch").html("主页  Home");
        $("#LeftPop ul li:nth-child(3) .ch").html("美丽小居室Beautifully Small House");
        $("#LeftPop ul li:nth-child(5) .ch").html("所有商品  All Products");
        $("#LeftPop ul li:nth-child(6) .ch").html("分类商品  Classified Goods");
        $("#LeftPop ul li:nth-child(7) .ch").html("最新商品  Newest Products");
        $("#LeftPop ul li:nth-child(9) .ch").html("艺心在延续  Art into Life");
    }
};