window.onload=function(){
var serverinduk="http://192.168.1.1"    
$("#bt1").bind('tap', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
	console.log("bt1 off");
});
$("#bt1").bind('taphold', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
	console.log("bt1 on");
});

$("#bt2").bind('tap', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
	console.log("bt2 off");
});
$("#bt2").bind('taphold', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
	console.log("bt2 on");
});

$("#bt3").bind('tap', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=3");
	console.log("bt3 off");
});
$("#bt3").bind('taphold', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=3");
	console.log("bt3 on");
});

$("#bt4").bind('tap', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=4");
	console.log("bt4 off");
});
$("#bt4").bind('taphold', function(){
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=4");
	console.log("bt4 on");
});
}