document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.6";

var svg = document.getElementById("id_svg");
var cerc1= document.getElementById("id_cerc1");
var cul = "blue";

var svg_rect = svg.getBoundingClientRect();

cerc1.addEventListener("touchstart", on_touch_color);


function on_touch_color()
{
	//cerc1.setAttribute("fill",cul);
		cerc1.fill="blue";
	
}

