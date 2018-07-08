/* 
   Script designed and developped by Sivateja, Java4s.com
   Contact: sivateja@java4s.com
*/
$(document).ready(function(){
	//var java4sContentDiv = $('.preContent');
	var java4sContentDiv = $('pre[class*=lang]');
	
	if(java4sContentDiv.length > 0){
		var regex = /(import)/gi;
		var javarx = /(javax)/g;
		var classkey = /(class)/gi;
		var regexO = /(public|private|System|{|})/gi;
		var symbols = /(<|>|{|})/gi;  //<([^\W].*) Allows only chars after <
		var dataType1= /(String)/g;
		var newKey= /(new)/g;
		var voidKey= /(void|head)/g;
		var dataType2 = /(\bfor\b|:)/g;
		var quotes = /("(.*?)")/g; 
		var pink = /(static)/gi;
		var beforeeq = /(\w*\s?)(?= =)/g;
		var script = /(script)/gi;
		var scomments = /(\/\/ .*|\/\/.*)/gm;		
		var propsComments = /(\#.*)/gm;	 //	If starting with (^#.*)
		var escomments = /(<!--([\s\S](?!-->))+[\s\S]-->)/gm;
		var commentsthree = /(\/\*([\s\S](?!\*\/))+[\s\S]\*\/)/gm;
		var annotations = /(\@.*)/gm;
		var div = /(div)/gi;
		var bd = /(body)/gi;
		var title = /(title)/gi;
		var maven = /(groupId|artifactId|version|modelVersion|java.version)/gi;
		var returnStr = /(return)/gi;
		var pkage = /(package)/gi;
		
		
		//(?:\S+\s)?\S*=\S*(?:\s\S+)? before and after =

		java4sContentDiv.each(function() {

			var java4scontent = $(this).text();  
			var formatedText =  java4scontent.replace(symbols, "<span class='blue'>$1</span>")
									.replace(regex, "<span class='blue'>$1</span>")
									.replace(javarx, "<span class='javaexclr'>$1</span>")									
									.replace(regexO, "<span class='orange'>$1</span>")
									.replace(dataType2, "<span class='brg'>$1</span>")
									.replace(dataType1, "<span class='green'>$1</span>")
									.replace(newKey, "<span class='red'>$1</span>")
									.replace(voidKey, "<span class='void'>$1</span>")
									.replace(pink, "<span class='pink'>$1</span>")
									.replace(beforeeq, "<span class='eq'>$1</span>")
									.replace(script, "<span class='pred'>$1</span>") 
									.replace(scomments, "<span class='scomments'>$1</span>")
									.replace(propsComments, "<span class='propsComments'>$1</span>")
									.replace(escomments, "<span class='escomments'>$1</span>")
									.replace(commentsthree, "<span class='commentsthree'>$1</span>")
									.replace(div, "<span class='div'>$1</span>")
									.replace(bd, "<span class='bd'>$1</span>")
									.replace(title, "<span class='title'>$1</span>")
									.replace(annotations, "<span class='annotations'>$1</span>")
									.replace(quotes, '<span class=brg>$1</span>')
									.replace(maven, '<span class=maven>$1</span>')
									.replace(returnStr, '<span class=returnStr>$1</span>')
									.replace(pkage, '<span class=pkage>$1</span>');
		   
		   var lee = formatedText.split('\n');			
		
		   var l = null;
			
		   var className = $(this).attr('class').split(" ");			
		   for (var i = 0; i < className.length; i++) {            
				if (className[i].indexOf("mark:") > -1) {        
					//console.log(className[i].split(":")[1]);
					l = className[i].split(":")[1];
				}       
		   }	  
		   
           if(l !== null)
		   { 		   
				if(l.indexOf("-") > -1){		
					var starting = l.split("-")[0];		   
					var ending = l.split("-")[1];
					l = starting;
					var num = ending-starting;
					for(var asplit=1; asplit<=num; asplit++){				   
						var nextline = (+starting + +asplit); 					
						l = l.concat(","+nextline);					
					}			   
				}
		   
			   var lary = l.split(",");			   
			   for(var lo=0; lo<lary.length; lo++){			
					lee[lary[lo]-1] = '<div class="linelight">'+lee[lary[lo]-1]+'</div>';		
			   }
		   }
		    
			/*
			if($(this)[0].hasAttribute("data-lnos")){
			  var l = $(this)[0].getAttribute("data-lnos");
			  var lary = l.split(",");
			  for(var lo=0; lo<lary.length; lo++){			
					lee[lary[lo]-1] = '<div class="linelight">'+lee[lary[lo]-1]+'</div>';		
			  }
		    }*/					
									  
		   var lnospan = $('<span />');     
		   for (var i = 1; i <= lee.length; i++) {        
				$(lnospan).html($(lnospan).html() +"<span>"+ i + "</span>");          
		   }
		   $(this).html('<span class="line-numbers">'+lnospan.html()+'</span>'+lee.join('\n'));  
		   
		});
	}

});