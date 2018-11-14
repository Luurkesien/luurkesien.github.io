var CounterIMG = 0;

function ChangeImage() {
	if(CounterIMG == 0)
{
	document.getElementById("MyImage").src = "https://github.com/Luurkesien/luurkesien.github.io/blob/master/PICS/pic2.jpg";   
	CounterIMG = 1;
}
	else
{
	document.getElementById("MyImage").src = "https://github.com/Luurkesien/luurkesien.github.io/blob/master/PICS/pic1.jpg";
	CounterIMG = 0;
}
}
