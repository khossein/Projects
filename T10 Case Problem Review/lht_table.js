"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Kevin Hossein
   Date:   10/29/19

	
/* Starting cutoff date for the event list */
var thisDay = new Date("August 30, 2018");

/* Event list table */
var tableHTML =
  '<table id="eventTable">' +
  '<caption>Upcoming Events</caption>' +
  '<tr><th>Date</th><th>Event</th><th>Price</th></tr>';

/* Set the ending cutoff date for the event list */
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000); 
// 2 weeks after thisDay

/* Adds each event occurring between the cutoff dates to the event list */
for (var i = 0; i < eventDates.length; i++)
{
  var eventDate = new Date (eventDates[i]);
  var eventDay = eventDate.toDateString();
  var eventTime = eventDate.toLocaleTimeString();
  if ((thisDay <= eventDate) && (eventDate <= endDate))
  {
    tableHTML +=
      '<tr><td>' + eventDay + ' @ ' + eventTime + '</td>' +
      '<td>' + eventDescriptions[i]+ '</td>' +
      '<td>' + eventPrices[i] + '</td></tr>';
  }
}

/* Ends the list table */
tableHTML += '</table>';

/* Write the event list to the element with the id "eventList" */
document.getElementById('eventList').innerHTML = tableHTML;
