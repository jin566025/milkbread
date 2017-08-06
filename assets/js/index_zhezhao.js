/**
 * Created by Administrator on 2016/1/14.
 */
$(function () {
    $(".parent1").hover(function () {
        $(".normal_span1").hide();
        $(".absobj1").animate({ top:"0px" },8);
    }, function () {
        $(".absobj1").animate({ top:"880px" }, 8);
        $(".normal_span1").show();
    });
    $(".parent2").hover(function () {
        $(".absobj2").animate({ top:"0px" },8);
        $(".normal_span2").hide();
    }, function () {
        $(".absobj2").animate({ top:"880px" }, 8);
        $(".normal_span2").show();
    });
    $(".parent3").hover(function () {
        $(".absobj3").animate({ top:"0px" },8);
        $(".normal_span3").hide();
    }, function () {
        $(".absobj3").animate({ top:"880px" }, 8);
        $(".normal_span3").show();
    });
    $(".parent4").hover(function () {
        $(".absobj4").animate({ top:"0px" },8);
        $(".normal_span4").hide();
    }, function () {
        $(".absobj4").animate({ top:"880px" }, 8);
        $(".normal_span4").show();
    });
    $(".parent5").hover(function () {
        $(".absobj5").animate({ top:"0px" },8);
        $(".normal_span5").hide();
    }, function () {
        $(".absobj5").animate({ top:"880px" }, 8);
        $(".normal_span5").show();
    });


})
