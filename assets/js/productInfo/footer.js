/**
 * Created by Administrator on 2016/1/15.
 */
$(function(){
    var divTop = $("#abs").css("top");
    var divHeight = $("#abs").outerHeight(true);
    $("#bo").ready(function(){
        $("#bo").css("top",divTop);
        $("#bo").css("margin-top",divHeight);
        $("#bo").css("display","block");
    })
});
