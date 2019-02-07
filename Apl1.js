document.getElementById("id_logic_version").innerHTML="Logic Version = 2019.2.0";

var svg = document.getElementById("id_svg");

var svg_rect = svg.getBoundingClientRect();

avg.addEventListener("touchstart", on_touch_svg);

function on_touch_svg()
{
	console.log("atinge");
}
