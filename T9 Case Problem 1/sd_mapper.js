/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kevin Hossein
   Date:   10/25/19

*/
/* time variable holding the specified date*/
var thisTime = new Date("February 3, 2018 03:15:28 AM");
var timeStr = thisTime.toLocaleString();
    
/* displays the specified date and time */
document.getElementById("timeStamp").innerHTML = timeStr;

/* determines skymap time*/
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();    
var mapNum = (2 * thisMonth + thisHour) % 24;

/* determines the sky image based on the time */
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* shows the determined sky image */
var temp = document.getElementById("planisphere");
temp.insertAdjacentHTML('afterbegin', imgStr);
