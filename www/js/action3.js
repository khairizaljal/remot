var can, ctx, bt1,bt2,bt3,bt4, bt1press,bt2press,bt3press,bt4press;
var serverinduk="http://192.168.1.1" 
 
function init() {
	bt1 = document.getElementById("bt1");
	bt2 = document.getElementById("bt2");
	bt2 = document.getElementById("bt3");
	bt2 = document.getElementById("bt4");
	//can = document.getElementById("can");
	//ctx = can.getContext("2d");
	bt1press = 0;
	bt2press = 0;
	bt2press = 0;
	bt4press = 0;
}

function press1() {
	bt1press = 1;
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
	console.log("Jalan");
}

function release1() {
	if (bt1press) {
		bt1press = 0;
		xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
		console.log("stop");
	}
}
function press2() {
	bt2press = 1;
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
	console.log("Mundur");
}

function release2() {
	if (bt2press) {
		bt2press = 0;
		xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
		console.log("stop");
	}
}
function press3() {
	bt3press = 1;
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=3");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=4");
	console.log("Kiri");
}

function release3() {
	if (bt3press) {
		bt3press = 0;
		xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=3");
		console.log("Tengah");
	}
}
function press4() {
	bt4press = 1;
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=4");
	xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=3");
	console.log("Kanan");
}

function release4() {
	if (bt4press) {
		bt4press = 0;
		xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=4");
		console.log("Tengah");
	}
}