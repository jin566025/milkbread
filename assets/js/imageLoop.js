// JavaScript Document
//图片轮播

(function($){
	
	$.fn.AutoSize = function (sizeMax)
	{
		var obj_frame = parseInt($(window).width(),10);
		obj_frame *= 0.94;
		var padlf = parseInt($('#TextPart').css('padding-left'),10);
		//window.alert(obj_frame);
		if(obj_frame>=1100*0.94)
		{
		$('#ImagePart').css('width',sizeMax + 'px');
		$('#TextPart').css('width',obj_frame - padlf - sizeMax + 'px');
		}
		else if(obj_frame>=800*0.94)
		{
		$('#ImagePart').css('width',sizeMax + 'px');
		$('#TextPart').css('width',sizeMax - padlf + 'px');
		}
		else 
		{
		$('#ImgBox').css('width',obj_frame+'px');
		$('#ImgBox').css('height',obj_frame+'px');
		$('#ImagePart').css('width',obj_frame + 'px');
		$('#TextPart').css('width',obj_frame - padlf + 'px');
		$('#ImageLoop img').css('width',obj_frame + 'px');
		
		}
	}
	
	$.fn.initLoop = function ()
	{
		var obj = $(this).find('ul').eq(0).find('li');
		var dott = $(this).find('#dot');
		for(var i=0;i<obj.length;i++)
		{
			if(i!=0)
			dott.get(0).innerHTML+="<li><a></a></li>";
			else dott.get(0).innerHTML+="<li><a class='seled'></a></li>";
		}
		
	}
	
	$.fn.NextImage = function (speed)
	{
		var index = -1;
		var dott = $(this).find('#dot').find('a');
		var boxw = $(this).get(0).offsetWidth;
		var boxh = $(this).get(0).offsetHeight;
		var obj = $(this).find('ul').eq(0).find('li');
		for(var i=0;i<obj.length;i++)
		if(obj.eq(i).hasClass('active'))index = i;
		if(index==obj.length-1)index = 0;
		else index ++;
		obj.removeClass('active');
		dott.removeClass('seled');
		obj.eq(index).addClass('active');
		dott.eq(index).addClass('seled');
		$(this).find('ul').eq(0).animate({'left':-index*boxw+'px'},speed);
	}
	
	$.fn.PrevImage = function (speed)
	{
		var index = -1;
		var dott = $(this).find('#dot').find('a');
		var boxw = $(this).get(0).offsetWidth;
		var boxh = $(this).get(0).offsetHeight;
		var obj = $(this).find('ul').eq(0).find('li');
		for(var i=0;i<obj.length;i++)
		if(obj.eq(i).hasClass('active'))index = i;
		if(index==0)index = obj.length-1;
		else index --;
		obj.removeClass('active');
		dott.removeClass('seled');
		obj.eq(index).addClass('active');
		dott.eq(index).addClass('seled');
		$(this).find('ul').eq(0).animate({'left':-index*boxw+'px'},speed);
	}
	
	$.fn.startLoop = function (speed)
	{
		var obj = $(this).find('ul').eq(0);
		var objlist = obj.find('li');
		var dott = $(this).find('#dot').find('a');
		var sel = 0;
		for(var i=0;i<objlist.length;i++)
		{
			
			if(objlist.eq(i).hasClass('active')) sel = i;
		}
		objlist.removeClass('active');
		if(sel == objlist.length - 1)sel = 0;
		else sel++;
		var boxw = $(this).get(0).offsetWidth;
		var boxh = $(this).get(0).offsetHeight;
		dott.removeClass('seled');
		objlist.eq(sel).addClass('active');
		dott.eq(sel).addClass('seled');
		obj.animate({'left':-sel*boxw+'px'},speed);
	}
	
	$.fn.toIndexImg = function (index,speed)
	{
		var obj = $(this).find('ul').eq(0).find('li');
		var dott = $(this).find('#dot').find('a');
		var length = obj.length;
		obj.removeClass('active');
		obj.eq(index).addClass('active');
		var boxw = $(this).get(0).offsetWidth;
		var boxh = $(this).get(0).offsetHeight;
		$(this).find('ul').eq(0).animate({left:-boxw*index+'px'},speed);
		dott.removeClass('seled');
		dott.eq(index).addClass('seled');
		
		
	}
	
	})(jQuery);
