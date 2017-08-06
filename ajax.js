$(function(){
		$("#sofaChair").click(function(){
			
			$.ajax({
				url: "my1.xml",
        		datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<10;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#sofa").click(function(){
			$.ajax({
				url: "my.xml",
        		datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#dianshigui").click(function(){
			$.ajax({
				url: "my2.xml",
        		datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chaji").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#zhiwugui").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<11;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#yizi").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<14;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#dengzi").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chaju").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#baozheng").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#yimaojia").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<14;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuwu").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<7;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuang").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuangtougui").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#dougui").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<11;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#yigui").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#shuzhuangtai").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<7;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#shouna").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<14;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuangweideng").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#jujiariyong").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuangdian").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<13;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuangshangyongping").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<7;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#shuzhuo").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#shugui").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#cnzhuo").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#canyi").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<13;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#bazhuo").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#bayi").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<11;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#biangui").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#canju").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#beizi").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chuju").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chugui").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#chufangdianqi").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<11;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#wujinpeijian").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#weiyugui").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#xishuyongpin").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#longtou").click(function(){
			$.ajax({
				url: "my.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<10;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#huasa").click(function(){
			$.ajax({
				url: "my1.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<14;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#xiangkuang").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#huaqi").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#dengju").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#jingzi").click(function(){
			$.ajax({
				url: "my5.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<9;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#guahua").click(function(){
			$.ajax({
				url: "my4.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<12;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#zhutai").click(function(){
			$.ajax({
				url: "my3.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<6;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
		$("#baijian").click(function(){
			$.ajax({
				url: "my2.xml",
        datatype: "xml",
				success:function(data){
					$(data).find("product").each(function(){
						$("#inner ul").html('<li><a><img src=\"images/data/pro'+$(this).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).children('e_name').text()+'</span><span>'+$(this).children('name').text()+'</span><span>'+$(this).children('price').text()+'</span></p></div></a></li>')
						for(var i=1;i<8;i++){
							$("#inner ul").append('<li><a><img src=\"images/data/pro'+$(this).parent().children().eq(i).children('no').text()+'.jpg\">'+'<div class="subbox_ac"><p><span>'+$(this).parent().children().eq(i).children('e_name').text()+'</span><span>'+$(this).parent().children().eq(i).children('name').text()+'</span><span>'+$(this).parent().children().eq(i).children('price').text()+'</span></p></div></a></li>')
						}
					})
				},
				 error: function () { alert("错误"); }
			})
		});
	})