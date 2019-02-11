
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


var endis=0;
          
var svg_rect = svg.getBoundingClientRect();


BassD.addEventListener("touchstart", on_touch_BD);
SnarD.addEventListener("touchstart", on_touch_SD);
ChitD.addEventListener("touchstart", on_touch_OD);
OhitD.addEventListener("touchstart", on_touch_CD);

svg.addEventListener("touchmove", on_touch_move);

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

function EnDis_Edit()
{
	if (endis == 1)
		endis = 0;
	else
		endis = 1;
}

function on_touch_move(e)
{
	e.preventDefault();
	cerc.setAttribute("cx", e.changedTouches[0].pageX);
	cerc.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
}

