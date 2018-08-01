alert("Hello World!")


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav-fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav-fixed-top";
    }
}



var $prehashval = "";
function loop()
{
    if (location.hash.slice(1)!=$prehashval)
        hashChanged();

    $prehashval = location.hash.slice(1);
    setTimeout("loop()", 100);
}
function hashChanged()
{
    var $output;
    switch (location.hash.slice(1))
    {
        case "page1":
            document.getElementById('page1').style.display = "";
            document.getElementById('page2').style.display = "none";
            break;
        case "page2":
            document.getElementById('page1').style.display = "none";
            document.getElementById('page2').style.display = "";
            break;
        default:
            $output = location.hash.slice(1);
    }
}
loop();


/*js for slideshow*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
