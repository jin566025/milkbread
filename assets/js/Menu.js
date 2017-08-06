// JavaScript Document

(function($){
	
	$.fn.LMenu = function()
	{
		//var e ='left';
		var w =parseInt($(this).css('left'),10);
		if(w<0)
		{
			$(this).animate({'left':'0px'},300);
			$('.Shell_box').eq(0).fadeIn(200);
		}
		else
		{
			var padding = parseInt($(this).css('padding-left'),10);
			var width = parseInt($(this).width(),10);
			width = width + padding*2;
			$(this).animate({'left':-width+'px'},300);
			$('.Shell_box').eq(0).fadeOut(200);
		}
	}
	
	$.fn.RMenu = function()
	{
		//var e ='left';
		var w =parseInt($(this).css('right'),10);
		if(w<0)
		{
			$(this).animate({'right':'0px'},300);
			$('.Shell_box').eq(0).fadeIn(200);
		}
		else
		{
			var padding = parseInt($(this).css('padding-right'),10);
			var width = parseInt($(this).width(),10);
			width = width + padding*2;
			$(this).animate({'right':-width+'px'},300);
			$('.Shell_box').eq(0).fadeOut(200);
		}
	}
	
	})(jQuery);