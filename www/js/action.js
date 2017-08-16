
window.onload=function(){
var mouse_is_down = false;
var current_i = 0;    
var serverinduk="http://192.168.0.100"

var button1 = document.querySelector("#bt2");
var button2= document.querySelector("#bt2");
var button3 = document.querySelector("#bt3");
var button4 = document.querySelector("#bt4");

var pressTimer;
$("#bt1").mouseup(function(){
  clearTimeout(pressTimer);
  xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
  return false;
});
$("#bt1").mousedown(function(){
  pressTimer = window.setTimeout(function() { 
  xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
  console.log("bt1 mousedown");},500)
  return false; 
}); 

button1.onmousedown = function(){
    mouse_is_down = true;
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
    console.log("bt1 mousedown");
    
    setTimeout(
        (function(index){
            return function(){
                if(mouse_is_down && current_i === index){
                    //do thing when hold
					 xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=1");
                    console.log("bt1 hold");
                    
                }
            };
        })(++current_i), 500); // time you want to hold before fire action
};

button2.onmousedown = function(){
    mouse_is_down = true;
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
    console.log("bt2 mousedown");
    
    setTimeout(
        (function(index){
            return function(){
                if(mouse_is_down && current_i === index){
                    //do thing when hold
					xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=on&lampu=2");
                    console.log("bt2 hold");
                    
                }
            };
        })(++current_i), 500); // time you want to hold before fire action
};

button1.onmouseup = function(){
    mouse_is_down = false;
    current_i++;
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=1");
    console.log("bt1 onmouseup");
};
button2.onmouseup = function(){
    mouse_is_down = false;
    current_i++;
    xmlhttpPost("POST",serverinduk+"/cgi-bin/ajax","saklar=off&lampu=2");
    console.log("bt2 onmouseup");
};
}