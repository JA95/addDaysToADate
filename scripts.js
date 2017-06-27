/** 
  * Based in a date add x days to the date
  * Set a date
  * Set x days to add
  * Return the new date
*/
// Selected day
var d = new Date();
var dd = d.setDate(6); 
var mm = d.setMonth(1); //0-11
var yy = d.setFullYear(2017);
var dateToMs = d.getTime();

// Days to add
var daysToAdd = 142;
var daysToMs = daysToAdd * 24 * 60 * 60 * 1000;

// Result day
var nD = new Date(dateToMs + daysToMs);

$(document).ready(function(){
	$('#selectedDate').append("<p>Selected day: " + d + " </p>");
	$('#selectedDate').append("<p>Day in miliseconds: " + dateToMs + " </p>");

	$('#newDate').append("<p>Days to add: " + daysToAdd + " </p>");
	$('#newDate').append("<p>Day in miliseconds: " + daysToMs + " </p>");
	$('#newDate').append("<p>New date: " + nD + " </p>");
	//var formattedDate = (dd + "/" + mm + "/" + yy);
});

