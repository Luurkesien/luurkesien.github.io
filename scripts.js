var imgcounter = 0;
function ChangeImage() {
  if (imgcounter == 0)
  {
   document.getElementById("Image").src = "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-0.3.5&s=3fda90f4984163cc30e13bdae325b382&auto=format&fit=crop&w=400&q=80";
   }
   else
   {
   document.getElementById("Image").src = "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
   imgcounter=0;
   }
   
}
