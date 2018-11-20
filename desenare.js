document.getElementById("id_logic_version").innerHTML="Logic Version = 18.11.20.0";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);

function on_touch(e)
{
	for (var i=0;i<e.changedTouchs.length;i++)
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouchs.item(i).pageX,
					e.changedTouchs.item(i).pageY,
					20,
					0,2*Math.PI
					);
		
		context.stroke();
		
	}
	
	
}
