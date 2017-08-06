// JavaScript Document
(function($){
	
	$.fn.MenuListClick = function(e)
	{	
        var findstate = $(this).hasClass("Selcetion");
        if(findstate){
        	$(this).removeClass("Selcetion").next().hide("slow");
        }
        else{

			$(this).addClass("Selcetion")									//给当前元素添加"current"样式
			.next().show("slow")											//下一个元素显示
			.parent().siblings().children("a").removeClass("Selcetion")	//父元素的兄弟元素的子元素<a>移除"current"样式
			.next().hide("slow");												//它们的下一个元素隐藏
			return false;
		}	
	}	
	$.fn.MenuSubListClick = function(e)
	{
		$('#leftlist .leftchild a').removeClass('SubSelection');
		$(this).addClass('SubSelection');
	}
	$.fn.HoverEvent = function(e)
	{
		var obj = $(this).find('div');
		if(obj)
		{
			//obj.css("background","#f0f");
			var fx = parseInt(obj.css("top"),10);
			var h = parseInt(obj.css("height"),10);
			obj.css("top","0px");
			if(!e)
			//obj.animate({top:-h+'px'},200);
			obj.fadeOut(400);
			else 
			obj.fadeIn(400);
			
		}
	}
	
	$.fn.DropDown = function (speed)
	{
		var obj = $(this).find('#ImgArea');
		if(obj.hasClass('ShowList'))
		{
			obj.removeClass('ShowList');
			$(this).find('ul').slideUp(speed);
		}
		else 
		{
			obj.addClass('ShowList');
			$(this).find('ul').slideDown(speed);
		}
	}
	
	$.fn.AddrList = function(speed)
	{
		var obj = $(this);
		var objchild = obj.parent('#address_contianer').find('ul').eq(0);
		
		if(obj.hasClass('clk'))
		{
			//window.alert("no");
			objchild.slideUp(speed);
			obj.removeClass('clk');
			
		}
		else 
		{
			//window.alert("und");
			objchild.slideDown(speed);
			obj.addClass('clk');
		}
	}
	
	$.fn.CostList = function(speed)
	{
		var obj = $(this);
		var objchild = obj.find('ul');
		if(obj.hasClass('clk'))
		{
			objchild.slideUp(speed);
			obj.removeClass('clk');
		}
		else 
		{
			 objchild.slideDown(speed);
			 obj.addClass('clk');
		}
	}
	
	$.fn.ListAndView = function (e)
	{
		
		
		//var i = $(this).index();
		//window.alert(i);
		var width = parseInt($(window).width(),10);
		var wx = parseInt($(this).parent('li').width(),10);
		//window.alert(width);
		var obj = $(this).find('.subbox_ac').eq(e);
		var top = parseInt(obj.css('top'),10);
		if(width>1366&&width<=1640)
		$(this).find('.subbox_ac').animate({top:'87%'},400);
		else if(width>1260||width>1640)
		$(this).find('.subbox_ac').animate({top:'85%'},400);
		else if(width>1024)
		$(this).find('.subbox_ac').animate({top:'87%'},400);
		else if(width>800)
		$(this).find('.subbox_ac').animate({top:'85%'},400);
		else $(this).find('.subbox_ac').animate({top:'80%'},400);
		
		if(top/100.0*wx>140&&width>768)
		obj.animate({top:'140px'},400);
		else if(top/100.0*wx>80) obj.animate({top:'80px'},400);
		
	}
	
	})(jQuery);
	
	
	