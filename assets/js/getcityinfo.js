// JavaScript Document
(function($){
	
	$.fn.BindProvince = function(data)
	{
		var obj = $(this);
		var str = "";
		var bz = 0;
		for(var i=0;i<data.length;i++)
		{
			str+="<span class='ms_list' onclick=\"javascript:$('#citydata').BindCity(obj_area,\'"+data[i].name+"\')\">"+data[i].name+"</span>";
		}
		if(data.length%2!=0)
		bz = 2 - data.length%2;
		for(;bz!=0;bz--)str+="<span class='ms_list'>&nbsp;</span>"
		obj.html(str);
		$('#addr_list').find('li').removeClass('opsel');
		$('#addr_list').find('li').eq(0).addClass('opsel');
	}
	
	$.fn.BindCity = function(data,e)
	{
		if(e=="北京"||e=="上海"||e=="天津"||e=="重庆")
		$('#rec').val(e+"市");
		else if(e=="宁夏")
		$('#rec').val(e+"回族自治区");
		else if(e=="广西")
		$('#rec').val(e+"壮族自治区");
		else if(e=="新疆")
		$('#rec').val(e+"维吾尔自治区");
		else if(e=="西藏"||e=="内蒙古")
		$('#rec').val(e+"自治区");
		else if(e=="香港"||e=="澳门")
		$('#rec').val(e+"特区");
		else
		$('#rec').val(e+"省");
		var objsub1=null;
		var obj = $(this);
		for(var i=0;i<data.length;i++)
		 {if(e==data[i].name){objsub1=data[i].city;break;}}
		 
		 var str = "";
		for(var i=0;i<objsub1.length;i++)str+="<span class='ms_list' onclick=\"$('#citydata').BindArea(obj_area,\'"+
		e+"\',\'"+objsub1[i].name+"\');\">"+objsub1[i].name+"</span>";
		
		if(objsub1.length%2!=0)
		str+="<span class='ms_list'></span>";
		obj.html(str);
		
		$('#addr_list').find('li').removeClass('opsel');
		$('#addr_list').find('li').eq(1).addClass('opsel');
		
	}
	
	$.fn.BindArea = function(data,e,c)
	{
		if(e=="北京"||e=="上海"||e=="天津"||e=="重庆")
		$('#rec').val(e+"市");
		else if(e=="宁夏")
		$('#rec').val(e+"回族自治区");
		else if(e=="广西")
		$('#rec').val(e+"壮族自治区");
		else if(e=="新疆")
		$('#rec').val(e+"维吾尔自治区");
		else if(e=="西藏"||e=="内蒙古")
		$('#rec').val(e+"自治区");
		else if(e=="香港"||e=="澳门")
		$('#rec').val(e+"特区");
		else
		$('#rec').val(e+"省");
		var str = $('#rec').val().toString()+c+"市";
		$('#rec').val(str);
		var obj1=null;
		for(var i=0;i<data.length;i++)
		{if(e==data[i].name){obj1 = data[i].city;break;}}
		if(obj1)
		{
			
			var str = "";
			for(var i=0;i<obj1.length;i++)
			{if(obj1[i].name==c){obj1=obj1[i].area;break;}}
			if(obj1)
			{
				//window.alert('1');
				for(var i=0;i<obj1.length;i++)
				str+="<span class='ms_list' onclick=\"$(this).finallyset(\'"+e+"\',\'"+c+"\',\'"+
				obj1[i]+"\');\">"+obj1[i]+"</span>";
				if(obj1.length%2!=0)
				str+="<span class='ms_list'></span>"
				$(this).html(str);
				$('#addr_list').find('li').removeClass('opsel');
		        $('#addr_list').find('li').eq(2).addClass('opsel');
			}
		}
	}
	
	$.fn.finallyset = function(e,c,a)
	{
		if(e=="北京"||e=="上海"||e=="天津"||e=="重庆")
		$('#rec').val(e+"市");
		else if(e=="宁夏")
		$('#rec').val(e+"回族自治区");
		else if(e=="广西")
		$('#rec').val(e+"壮族自治区");
		else if(e=="新疆")
		$('#rec').val(e+"维吾尔自治区");
		else if(e=="西藏"||e=="内蒙古")
		$('#rec').val(e+"自治区");
		else if(e=="香港"||e=="澳门")
		$('#rec').val(e+"特区");
		else
		$('#rec').val(e+"省");
		var str = $('#rec').val().toString()+c+"市"+a;
		$('#rec').val(str);
	}
	
	$.fn.BtnNumerClick = function (e)
	{
		switch($(this).get(0).id)
		{
			case "subcal":
			{
				var number = parseInt($(this).parent('#_box_outside').find('#textcal').val(),10);
				if(number<=0)number = 0;
				else number--;
				$(this).parent('#_box_outside').find('#textcal').val(number);
			}
			break;
			case "addcal":
			{
				var number = parseInt($(this).parent('#_box_outside').find('#textcal').val(),10);
				number++;
				$(this).parent('#_box_outside').find('#textcal').val(number);
			}
			break;
			default:break;
		}
	}
	
	$.fn.selectionDiv = function (index)
	{
		var obj = $(this).parent('li');
		obj.find('a').removeClass('selcolor2');
		obj.find('a').eq(index).addClass('selcolor2');
	}
	
	})(jQuery);