
document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.14";

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

svg.addEventListener("touchmove", on_touch_move_svg);
BassD.addEventListener("touchmove", on_touch_move_bass);

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

function on_touch_move_svg(e)
{
	e.preventDefault();
	svg.setAttribute("cx", e.changedTouches[0].pageX);
	svg.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
}

function on_touch_move_bass(e)
{
	e.preventDefault();
	BassD.setAttribute("x", e.changedTouches[0].pageX);
	BassD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
}

