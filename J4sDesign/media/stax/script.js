$(document).ready(function(){var s=$("pre[class*=lang]");if(s.length>0){var a=/(import)/gi,p=/(javax)/g,e=/(public|private|System|{|})/gi,n=/(<|>|{|})/gi,l=/(String)/g,c=/(new)/g,r=/(void|head)/g,i=/(\bfor\b|:)/g,t=/("(.*?)")/g,g=/(static)/gi,o=/(\w*\s?)(?= =)/g,m=/(script)/gi,v=/(\/\/ .*|\/\/.*)/gm,d=/(\#.*)/gm,h=/(<!--([\s\S](?!-->))+[\s\S]-->)/gm,f=/(\/\*([\s\S](?!\*\/))+[\s\S]\*\/)/gm,u=/(\@.*)/gm,b=/(div)/gi,S=/(body)/gi,x=/(title)/gi,j=/(groupId|artifactId|version|modelVersion|java.version)/g,k=/(return)/gi,y=/(package)/gi;s.each(function(){for(var s=$(this).text().replace(n,"<span class='blue'>$1</span>").replace(a,"<span class='blue'>$1</span>").replace(p,"<span class='javaexclr'>$1</span>").replace(e,"<span class='orange'>$1</span>").replace(i,"<span class='brg'>$1</span>").replace(l,"<span class='green'>$1</span>").replace(c,"<span class='red'>$1</span>").replace(r,"<span class='void'>$1</span>").replace(g,"<span class='pink'>$1</span>").replace(o,"<span class='eq'>$1</span>").replace(m,"<span class='pred'>$1</span>").replace(v,"<span class='scomments'>$1</span>").replace(d,"<span class='propsComments'>$1</span>").replace(h,"<span class='escomments'>$1</span>").replace(f,"<span class='commentsthree'>$1</span>").replace(b,"<span class='div'>$1</span>").replace(S,"<span class='bd'>$1</span>").replace(x,"<span class='title'>$1</span>").replace(u,"<span class='annotations'>$1</span>").replace(t,"<span class=brg>$1</span>").replace(j,"<span class=maven>$1</span>").replace(k,"<span class=returnStr>$1</span>").replace(y,"<span class=pkage>$1</span>").split("\n"),w=null,I=$(this).attr("class").split(" "),O=0;O<I.length;O++)I[O].indexOf("mark:")>-1&&(w=I[O].split(":")[1]);if(null!==w){if(w.indexOf("-")>-1){var q=w.split("-")[0],C=w.split("-")[1];w=q;for(var V=C-q,z=1;z<=V;z++){var A=+q+ +z;w=w.concat(","+A)}}for(var B=w.split(","),D=0;D<B.length;D++)s[B[D]-1]='<div class="linelight">'+s[B[D]-1]+"</div>"}var E=$("<span />");for(O=1;O<=s.length;O++)$(E).html($(E).html()+"<span>"+O+"</span>");$(this).html('<span class="line-numbers">'+E.html()+"</span>"+s.join("\n"))})}});