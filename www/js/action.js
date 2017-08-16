window.onload=function(){
var mouse_is_down = false;
var current_i = 0;    

var button1 = document.querySelector("#bt1");
var button2= document.querySelector("#bt2");
var button3 = document.querySelector("#bt3");
var button4 = document.querySelector("#bt4");

button1.onmousedown = function(){
    mouse_is_down = true;
    document.getElementById("sw1").checked = true;
    console.log("bt1 mousedown");
    
    setTimeout(
        (function(index){
            return function(){
                if(mouse_is_down && current_i === index){
                    //do thing when hold
					document.getElementById("sw1").checked = true;
                    console.log("bt1 hold");
                    
                }
            };
        })(++current_i), 500); // time you want to hold before fire action
};

button2.onmousedown = function(){
    mouse_is_down = true;
    document.getElementById("sw2").checked = true;
    console.log("bt2 mousedown");
    
    setTimeout(
        (function(index){
            return function(){
                if(mouse_is_down && current_i === index){
                    //do thing when hold
					document.getElementById("sw2").checked = true;
                    console.log("bt2 hold");
                    
                }
            };
        })(++current_i), 500); // time you want to hold before fire action
};

button1.onmouseup = function(){
    mouse_is_down = false;
    current_i++;
    document.getElementById("sw1").checked = false;
    console.log("bt1 onmouseup");
};
button2.onmouseup = function(){
    mouse_is_down = false;
    current_i++;
    document.getElementById("sw2").checked = false;
    console.log("bt2 onmouseup");
};
}