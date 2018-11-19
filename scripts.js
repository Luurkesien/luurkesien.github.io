var CounterIMG = 0;

function ChangeImage() {
	if(CounterIMG == 0)
{
	document.getElementById("MyImage").src = "/PICS/MySelf2.jpg";   
	CounterIMG = 1;
}
	else
{
	document.getElementById("MyImage").src = "/PICS/MySelf.jpg";
	CounterIMG = 0;
}
}
