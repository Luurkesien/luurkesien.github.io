var CounterIMG = 0;

function ChangeImage() {
	if(CounterIMG == 0)
{
	document.getElementById("MyImage").src = "/PICS/pic2.jpg";   
	CounterIMG = 1;
}
	else
{
	document.getElementById("MyImage").src = "/PICS/pic1.jpg";
	CounterIMG = 0;
}
}
