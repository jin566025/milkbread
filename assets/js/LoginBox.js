// JavaScript Document
(function($){
	
	$.fn.fadeBoxIn = function(e)
	{
		if($(this).css('position')!='fixed')
		{
			$(this).css('position','fixed');
		}
		var width = parseInt($(this).width(),10);
		var height = parseInt($(this).height(),10);
		var boxWidth = parseInt($(window).width(),10);
		var boxHeight = parseInt($(window).height(),10);
		$(this).css('left',(boxWidth-width)/2+'px');
		$(this).css('top',(boxHeight-height)/2+'px');
		$(this).fadeIn(e);
		
	}
	
	$.fn.fadeBoxOut = function(e)
	{
		$(this).fadeOut(e);
	}
	
	
	
	})(jQuery);