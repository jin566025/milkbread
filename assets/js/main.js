window.onresize = function(e)
{
	var l = parseInt($('#LeftPop').css('left'),10);
	var r = parseInt($('#RightPop').css('right'),10);
	if(l!=0)
	$('#LeftPop').css('left',-parseInt($('#LeftPop').width(),10)+'px');
	if(r!=0)
	$('#RightPop').css('right',-parseInt($('#RightPop').width(),10)+'px');
	
	var h = parseInt($(window).height(),10);
	h-=70;
	$('#adjust').css('height',h+'px');
	
	
}

$(document).ready(function(e) {
	
	
	var h = parseInt($(window).height(),10);
	h-=70;
	$('#adjust').css('height',h+'px');
	
    $('.Login,#Login').click(function(e) {
        $('#LoginBox').fadeBoxIn(600);
		$('.Shell_box').eq(1).fadeIn(600);
    });
	
	$('.Bag').click(function(e) {
       $('#RightPop').RMenu();
    });
	
	$('#LoginClose').click(function(e) {
        $('#LoginBox').fadeBoxOut(600);
		$('.Shell_box').eq(1).fadeOut(600);;
    });
	
	$('.Search,#Search').click(function(e) {
        $('#SearchBox').fadeBoxIn(600);
		$('.Shell_box').eq(1).fadeIn(600);
    });
	
	$('#SearchClose').click(function(e) {
        $('#SearchBox').fadeBoxOut(600);
		$('.Shell_box').eq(1).fadeOut(600);
    });
	
	$('.sq').click(function(e) {
       var obj = $(this).parent('p').parent('div');
	   obj.animate({top:-parseInt(obj.height(),10)+'px'},1200); 
    });
	
	$('#fus').hover(function (ie){
		$('#us_pop').fadeIn(100);
		},function(oe){
		$('#us_pop').fadeOut(100);
			});
			

	$('#leftlist a.node').click(function(e) {
        $(this).MenuListClick(800);
    });
	

  $('#leftlist .leftchild a').click(function(e) {
        $(this).MenuSubListClick(0);
    });
	$('.hotsale a').mouseenter(function(e1){$(this).HoverEvent(true);});
	$('.hotsale a').mouseleave(function(e1){$(this).HoverEvent(false);});
	
	$('#DropDownList1').click(function(e){
		$(this).DropDown(700);
		});
		
	$('#DropDownList1 ul li').click(function(e) {
          var text = $(this).html();
		$('#DropDownList1 input').val(text);
      });
	$('.showMoreNChildren').on('mouseenter','a',function(){
		$('.showMoreNChildren li a').ListAndView($('.showMoreNChildren li a').index($(this)[0]));	
		});
	

});