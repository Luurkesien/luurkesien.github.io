var CounterIMG = 0;

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

function HomeScreen()
{
	document.getElementById("MainScreen").innerHTML = "<h2>A lil bitty witty</h2>
    <p> Heyo </p>
    <p> I am the one, dont weight a ton ,etc. etc. </p>";
	
	
}

function BusinessScreen()
{
	document.getElementById("MainScreen").innerHTML = "<h2>business screeeen</h2>
    <p>
    <b>Links of interest:</b>
  </p>
  <p>
    <a href="https://github.com/Luurkesien/luurkesien.github.io/tree/master/OpenScad">My OpenScad Projects</a>
  </p>
   <p>
    <a href="https://github.com/Luurkesien/luurkesien.github.io/tree/master/Hardware">My Hardware Projects</a>
  </p>
   <p>
    <a href="https://github.com/Luurkesien/luurkesien.github.io/tree/master/Software">My Software Projects</a>
  </p>
   <p>
    <a href="https://github.com/Luurkesien/luurkesien.github.io/tree/master/Documents/MyCV.pdf">My CV</a>
  </p>
";
	
}

function CasualScreen()
{
	document.getElementById("MainScreen").innerHTML = "<h2>casual screeen</h2>
    <p> Heyo </p>
    <p> I am the one, dont weight a ton ,etc. etc. </p>";
	
}
