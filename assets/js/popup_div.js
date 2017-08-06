// JavaScript Document
(function ($){
	
	$.ShowDiv = function (seletor,speed){
		
		$(seletor).slideDown(speed);
		
		}
		
	 $.CloseDiv =  function (seletor,speed){
		
		$(seletor).slideUp(speed);
		
		}
		
	 $.EnableDiv = function(selector,enabled)
		{
			
			$(selector).css('display',enabled==true?'block':'none');
		}
	
	 $.AddData = function(selector,data)
	 {
		
		 $(selector).html('');
		 for(i=0;i<data.length;i++)
		 { 
		   var  str = $(selector).html() + '<a>'+data[i]+'</a>';
		   $(selector).html(str);
		 }
	 }
	 
	 $.fn.PopUpHideShell = function()
	 {
		 $(this).height($(document).height());
		 $(this).css('display','block');
	 }
	 
	 $.fn.PopUpCenter = function()
	 {
		 var width = $(this).width();
		 var height = $(this).height();
		 var totalWidth = $(this).parent('div').width();
		 var totalHeight = $(window).scrollTop();
		 var leftpx = (totalWidth - width)/2;
		 var toppx = (totalHeight + height/2);
		 $(this).css('top',toppx+'px');
		 $(this).css('left',leftpx+'px');
		 $(this).fadeIn(500);
	 }
	 
	 $.fn.ClosePop = function()
	 {
		 
		 $(this).fadeOut(500);
	 }
	 
	 $.fn.CloseHide = function()
	 {
		 $(this).css('display','none');
	 }
	 
	 $.fn.FixedPop = function()
	 {
		 var width = $(this).width();
		 var height = $(this).height();
		 var ww = $(window).width();
		 var wh = $(window).height();
		 var left = (ww - width)/2;
		 var top = (wh - height)/2;
		 $(this).css('top',top+'px');
		 $(this).css('left',left+'px');
		 $(this).fadeIn(500);
	 }
	 
	
	})(jQuery);
	
	
