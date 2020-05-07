//Javascript library from CSS-TRICKS

// set up text to print, each item in array is new line

var str = "Additional Card Holder to " + '<b>' + "Zhi Li" + '</b>'
+ "'s Credit Card";

var aText = new Array(
// "Name: Leila Li",
// "Birthday: Juanary 24th, 1998",
// "Nationality: Chinese",
// "Ethnicity: Chinese",
// "Eye Color: Dark Brown",
// "Height: 5'5",
// "Weight: 115",
// "School: New York University, IDM BS",
// "Phone: (224)623-7208",
// "Email: lmwleila@gmail.com, ml7075@nyu.edu",
// "Home Address: 3624 Interlake Ave N, Unit A, Seattle, WA 98103",
// "Relationship: In relationship with xxxxxxxx, 373 days"

"No Criminal Record",
"No Speeding/Parking Ticket",
"No Credit History",
str,
"Dean's List student",
"No history of violence"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();



//timeline @ https://codepen.io/jm/pen/GlICH
$(window).scroll(function(){
	$('.container p').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");
			}
	});
});
