/**
 * Created by Administrator on 2016/1/4.
 */
jQuery(document).ready(function($) {
    $('.login').click(function(){
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover').slideDown(200);
        $("#bg").css({
            display: "block", height: $(document).height()
        });
        var $box = $('.theme-popover');
        $box.css({
            //设置弹出层距离左边的位置
            left: ($("body").width() - $box.width()) / 2 - 20 + "px",
            //设置弹出层距离上面的位置
            top: ($(window).height() - $box.height()) / 2 + $(window).scrollTop() + "px",
            display: "block"
        });
    })
    $('.theme-poptit .close').click(function(){
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover').slideUp(200);
        $("#bg,.box").css("display", "none");
    })
    $('.register').click(function(){
        $('.theme-popover').slideUp(200);
        $('.theme-popover-mask').fadeIn(100);
        $('.register-pop').slideDown(200);
    })
    $('.register-poptit .close').click(function(){
        $('.theme-popover-mask').fadeOut(100);
        $('.register-pop').slideUp(200);
    })
    $('.search').click(function(){
        $('.theme-popover-mask').fadeIn(100);
        $('.search-popover').slideDown(200);
        $("#bg").css({
            display: "block", height: $(document).height()
        });
        var $box = $('.search-popover');
        $box.css({
            //设置弹出层距离左边的位置
            left: ($("body").width() - $box.width()) / 2 - 20 + "px",
            //设置弹出层距离上面的位置
            top: ($(window).height() - $box.height()) / 2 + $(window).scrollTop() + "px",
            display: "block"
        });
    })
    $('.search-poptit .close').click(function(){
        $('.theme-popover-mask').fadeOut(100);
        $('.search-popover').slideUp(200);
        $("#bg,.box").css("display", "none");
    })

})
