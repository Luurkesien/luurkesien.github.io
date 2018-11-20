var CounterIMG = 0;
var other=0;
function ChangeImage() {
	
	if(CounterIMG == 0)
{
	document.getElementById("MyImage").src = "/PICS/MySelf2.jpg";  
	document.getElementById("ChangeButton").innerHTML = "Change to my business self.";
	CounterIMG = 1;
}
	else
{
	document.getElementById("MyImage").src = "/PICS/MySelf.jpg";
	document.getElementById("ChangeButton").innerHTML = "Change to my casual self.";
	CounterIMG = 0;
}
}


function AddDomain()
{
	if(other==0)
	{
	 var x = document.createElement("INPUT");
	     x.setAttribute("type", "text");
		document.body.appendChild(x);
		other=1;
	}
	
}
