document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.2";

var svg = document.getElementById("id_svg");
var cerc= document.getElementById("id_cerc1");
var cul = "#0000FF";

var svg_rect = svg.getBoundingClientRect();

svg.addEventListener("touchstart", on_touch_svg);

function on_touch_svg()
{
	id_cerc1.setAttribute("fill",blue);
	console.log("atinge");
}
