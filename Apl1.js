
document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.13";

var svg = document.getElementById("id_svg");

var BassD= document.getElementById("BASS");
var SnarD= document.getElementById("SNAR");
var ChitD= document.getElementById("CHIT");
var OhitD= document.getElementById("OHIT");


var bassd = document.getElementById("bassd");
var snared = document.getElementById("snared");
var ohitd = document.getElementById("ohihat");
var chitd = document.getElementById("chihat");


          
var svg_rect = svg.getBoundingClientRect();


BassD.addEventListener("touchstart", on_touch_BD);
SnarD.addEventListener("touchstart", on_touch_SD);
ChitD.addEventListener("touchstart", on_touch_OD);
OhitD.addEventListener("touchstart", on_touch_CD);

function on_touch_BD()
{
		bassd.play();
}

function on_touch_SD()
{
		snared.play();
}

function on_touch_OD()
{
		ohitd.play();
}

function on_touch_CD()
{
		chitd.play();
}
