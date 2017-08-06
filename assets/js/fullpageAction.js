// JavaScript Document
$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#000', '#000', '#000', '#000','#000','#000','#000','#000'],
		'navigation': false,
		continuousVertical: true,
		scrollingSpeed: 400,
		afterLoad:function(alink,index){
			//window.alert(index);
			var obj = $('.sessions1');
			for(i=0;i<obj.length;i++)
					obj.eq(i).css('top','0px');
			switch(index)
			{
				
				case 1:{
					$('#Black').fadeOut(500);
					$('#LogoFiled').fadeOut(500);
					//window.alert('this is');
					}
				break;
				
				default:{
					$('#Black').fadeIn(500);
					$('#LogoFiled').fadeIn(500);
					}
				break;
			}
			
			},
		onLeave:function(index,nextIndex,direction){
			
			
			},
		
	});
});