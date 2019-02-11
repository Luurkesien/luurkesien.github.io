
document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.15";

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
SnarD.addEventListener("touchmove", on_touch_move_snar);
ChitD.addEventListener("touchmove", on_touch_move_chit);
OhitD.addEventListener("touchmove", on_touch_move_ohit;

function on_touch_BD()
{
	if (endis == 0)
		bassd.play();
}

function on_touch_SD()
{
	if (endis == 0)
		snared.play();
}

function on_touch_OD()
{
	if (endis == 0)
		ohitd.play();
}

function on_touch_CD()
{
	if (endis == 0)
		chitd.play();
}

function EnDis_Edit()
{
	if (endis == 1)
	{
		endis = 0;
	document.getElementById("EditButton").innerHTML="Edit on!";	
	}
	else
	{
		endis = 1;
	document.getElementById("EditButton").innerHTML="Click to edit!";	
	}
}

function on_touch_move_svg(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	svg.setAttribute("cx", e.changedTouches[0].pageX);
	svg.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
	}
}

function on_touch_move_bass(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	BassD.setAttribute("x", e.changedTouches[0].pageX);
	BassD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	}
}

function on_touch_move_snar(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	SnarD.setAttribute("x", e.changedTouches[0].pageX);
	SnarD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	}
}
function on_touch_move_chit(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	ChitD.setAttribute("x", e.changedTouches[0].pageX);
	ChitD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	}
}
function on_touch_move_ohit(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	OhitD.setAttribute("x", e.changedTouches[0].pageX);
	OhitD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	}
}
