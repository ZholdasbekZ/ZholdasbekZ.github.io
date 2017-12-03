var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;
var move_i=0;



var fon= function(){ctx.strokeStyle = "silver";

  for (var i = 0; i < canvas.width; i += 134) {
    for (var j = 0; j < canvas.height; j += 134) {
      ctx.strokeRect(i, j, 134, 134);
    }
  }
}

drawSin();
fon();
rulhide();
function drawSin(){
	y = Math.sin(x);
	if (x>=47){
		x=0;
		canvas.width = canvas.width;
		fon();
	}
	else {
		x=x+0.01;
	}
	ctx.fillRect(20*x,183+100*y, 2,2);
	timer = setTimeout(drawSin, 520);  //Скорость синуса
	ctx.fillStyle = "Black";
}

function sqr5() {
	document.getElementById('dp_1_res').innerHTML="5";
	document.getElementById('dp_1_res').style.opacity="1";
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
	document.getElementById('moved').style.opacity='0';
   /* if (move_i==0){  

	    function getSupportedPropertyName(properties) {
		    for (var i = 0; i < properties.length; i++) {
		        if (typeof document.body.style[properties[i]] != "undefined") {
		            return properties[i];
		        }
		    }
		    return null;
		}  
		var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"]; 
		var item = document.querySelector('#moved');
		var transformProperty = getSupportedPropertyName(transform);
		 var xPosition = x*20 ;
		 var yPosition = 183+100*y; 
		if (transformProperty) {             
		    item.style[transformProperty] = 'translate3d('+ xPosition+'px, '+yPosition + 'px, 0px)'; 
		}
		
	}*/
}


function sqr55() {
	document.getElementById('dp_1_res').innerHTML="5<sup>2</sup>";
	document.getElementById('dp_1_res').style.opacity="1";
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';


}
function rs4() {
	document.getElementById('dp_1_res').innerHTML="4";
	document.getElementById('dp_1_res').style.opacity="1";
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
}
function gal() {
	document.getElementById('gal').style.opacity='1';
	document.getElementById('iks').style.opacity='1';
	if (document.getElementById('dp_1_res').innerHTML=="5")
	{ctx.fillStyle = "#00FF00";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_1_res').innerHTML=="4")
	{ctx.fillStyle = "#FF77FF";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_1_res').innerHTML=="5<sup>2</sup>")
	{ctx.fillStyle = "#1500ff";
	ctx.fillRect(x*20,183+100*y,10,10);}
}
function sqr52() {
	document.getElementById('dp_2_res').innerHTML="5";
	document.getElementById('dp_2_res').style.opacity="1";
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks2').style.opacity='0';
	
}
function sqr552() {
	document.getElementById('dp_2_res').innerHTML="5<sup>2</sup>";
	document.getElementById('dp_2_res').style.opacity="1";
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks2').style.opacity='0';
}
function rs42() {
	document.getElementById('dp_2_res').innerHTML="4";
	document.getElementById('dp_2_res').style.opacity="1";
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks2').style.opacity='0';
}
function gal2() {
	document.getElementById('gal2').style.opacity='1';
	document.getElementById('iks2').style.opacity='1';
	if (document.getElementById('dp_2_res').innerHTML=="5")
	{ctx.fillStyle = "#00FF00";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_2_res').innerHTML=="4")
	{ctx.fillStyle = "#FF77FF";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_2_res').innerHTML=="5<sup>2</sup>")
	{ctx.fillStyle = "#1500ff";
	ctx.fillRect(x*20,183+100*y,10,10);}
}
function sqr53() {
	document.getElementById('dp_3_res').innerHTML="5";
	document.getElementById('dp_3_res').style.opacity="1";
	document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';;
	
}
function sqr553() {
	document.getElementById('dp_3_res').innerHTML="5<sup>2</sup>";
	document.getElementById('dp_3_res').style.opacity="1";
		document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';
}
function rs43() {
	document.getElementById('dp_3_res').innerHTML="4";
	document.getElementById('dp_3_res').style.opacity="1";
		document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';
}
function gal3() {
	document.getElementById('gal3').style.opacity='1';
	document.getElementById('iks3').style.opacity='1';
	if (document.getElementById('dp_3_res').innerHTML=="5")
	{ctx.fillStyle = "#00FF00";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_3_res').innerHTML=="4")
	{ctx.fillStyle = "#FF77FF";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_3_res').innerHTML=="5<sup>2</sup>")
	{ctx.fillStyle = "#1500ff";
	ctx.fillRect(x*20,183+100*y,10,10);}

}
function sqr54() {
	document.getElementById('dp_4_res').innerHTML="5";
	document.getElementById('dp_4_res').style.opacity="1";
	document.getElementById('gal4').style.opacity='0';
	document.getElementById('iks4').style.opacity='0';
	
}
function sqr554() {
	document.getElementById('dp_4_res').innerHTML="5<sup>2</sup>";
	document.getElementById('dp_4_res').style.opacity="1";
	document.getElementById('gal4').style.opacity='0';
	document.getElementById('iks4').style.opacity='0';
}
function rs44() {
	document.getElementById('dp_4_res').innerHTML="4";
	document.getElementById('dp_4_res').style.opacity="1";
	document.getElementById('gal4').style.opacity='0';
	document.getElementById('iks4').style.opacity='0';
}
function gal4() {
	document.getElementById('gal4').style.opacity='1';
	document.getElementById('iks4').style.opacity='1';
	if (document.getElementById('dp_4_res').innerHTML=="5")
	{ctx.fillStyle = "#00FF00";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_4_res').innerHTML=="4")
	{ctx.fillStyle = "#FF77FF";
	ctx.fillRect(x*20,183+100*y,10,10);}
	if (document.getElementById('dp_4_res').innerHTML=="5<sup>2</sup>")
	{ctx.fillStyle = "#1500ff";
	ctx.fillRect(x*20,183+100*y,10,10);}
}





function ren_5_3(){
	if (document.getElementById("dp_1_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_5").innerHTML = "3";} 
if (document.getElementById("dp_1_res").innerHTML=="5")
	{document.getElementById("dp_1_5").innerHTML = "4";}
}
function ren_3_5(){
		if (document.getElementById("dp_1_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_3").innerHTML = "5";} 
if (document.getElementById("dp_1_res").innerHTML=="5")
	{document.getElementById("dp_1_4").innerHTML = "5";}
}


function ren_5_3_2(){
		if (document.getElementById("dp_2_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_5_2").innerHTML = "3";} 
if (document.getElementById("dp_2_res").innerHTML=="5")
	{document.getElementById("dp_1_5_2").innerHTML = "4";}
}

function ren_3_5_2(){
	if (document.getElementById("dp_2_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_3_2").innerHTML = "5";} 
if (document.getElementById("dp_2_res").innerHTML=="5")
	{document.getElementById("dp_1_4_2").innerHTML = "5";}
}

function ren_5_3_3(){
		if (document.getElementById("dp_3_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_5_3").innerHTML = "3";} 
if (document.getElementById("dp_3_res").innerHTML=="5")
	{document.getElementById("dp_1_5_3").innerHTML = "4";}
}
function ren_3_5_3(){
	if (document.getElementById("dp_3_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_3_3").innerHTML = "5";} 
if (document.getElementById("dp_3_res").innerHTML=="5")
	{document.getElementById("dp_1_4_3").innerHTML = "5";}
}
function ren_5_3_4(){
		if (document.getElementById("dp_4_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_5_4").innerHTML = "3";} 
if (document.getElementById("dp_4_res").innerHTML=="5")
	{document.getElementById("dp_1_5_4").innerHTML = "4";}
}
function ren_3_5_4(){
	if (document.getElementById("dp_4_res").innerHTML=="5<sup>2</sup>")
	{document.getElementById("dp_1_3_4").innerHTML = "5";} 
if (document.getElementById("dp_4_res").innerHTML=="5")
	{document.getElementById("dp_1_4_4").innerHTML = "5";}
}

function rulShow(){
	 $("#rules").show();
}

function rulhide(){
	$("#rules").hide();

}
