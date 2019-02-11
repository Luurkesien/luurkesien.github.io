
document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.17";

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
OhitD.addEventListener("touchmove", on_touch_move_ohit);

var BassWidth = document.getElementById("BASS").getAttribute("width") / 2; 
var BassHeight = document.getElementById("BASS").getAttribute("height") / 2; 

var SnarWidth = document.getElementById("SNAR").getAttribute("width") / 2; 
var SnarHeight = document.getElementById("SNAR").getAttribute("height") / 2; 

var OhitWidth = document.getElementById("OHIT").getAttribute("width") / 2; 
var OhitHeight = document.getElementById("OHIT").getAttribute("height") / 2; 

var ChitWidth = document.getElementById("CHIT").getAttribute("width") / 2; 
var ChitHeight = document.getElementById("CHIT").getAttribute("height") / 2; 

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
	BassD.setAttribute("x", e.changedTouches[0].pageX - BassWidth);
	BassD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top - BassHeight);
	}
}

function on_touch_move_snar(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	SnarD.setAttribute("x", e.changedTouches[0].pageX - SnarWidth);
	SnarD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top - SnarHeight);
	}
}
function on_touch_move_chit(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	ChitD.setAttribute("x", e.changedTouches[0].pageX - ChitWidth);
	ChitD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top - ChitHeight);
	}
}
function on_touch_move_ohit(e)
{
	if (endis == 1)
	{
	e.preventDefault();
	OhitD.setAttribute("x", e.changedTouches[0].pageX - OhitWidth);
	OhitD.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top - OhitHeight);
	}
}
