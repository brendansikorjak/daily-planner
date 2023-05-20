// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var currentHour = today.format('H');
console.log(typeof currentHour)

var hour9 = document.getElementById('hour-9')
var hour10 = document.getElementById('hour-10')
var hour11 = document.getElementById('hour-11')
var hour12 = document.getElementById('hour-12')
var hour1 = document.getElementById('hour-1')
var hour2 = document.getElementById('hour-2')
var hour3 = document.getElementById('hour-3')
var hour4 = document.getElementById('hour-4')
var hour5 = document.getElementById('hour-5')

function test() {
if (currentHour === '9') {
hour9.style.backgroundColor = '#ff6961'
} else if (currentHour === '10') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#ff6961'
} else if (currentHour === '11') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#ff6961'
} else if (currentHour === '12') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#ff6961'
} else if (currentHour === '13') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#d3d3d3'
  hour1.style.backgroundColor = '#ff6961'
} else if (currentHour === '14') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#d3d3d3'
  hour1.style.backgroundColor = '#d3d3d3'
  hour2.style.backgroundColor = '#ff6961'
} else if (currentHour === '15') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#d3d3d3'
  hour1.style.backgroundColor = '#d3d3d3'
  hour2.style.backgroundColor = '#d3d3d3'
  hour3.style.backgroundColor = '#ff6961'
} else if (currentHour === '16') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#d3d3d3'
  hour1.style.backgroundColor = '#d3d3d3'
  hour2.style.backgroundColor = '#d3d3d3'
  hour3.style.backgroundColor = '#d3d3d3'
  hour4.style.backgroundColor = '#ff6961'
} else if (currentHour === '17') {
  hour9.style.backgroundColor = '#d3d3d3'
  hour10.style.backgroundColor = '#d3d3d3'
  hour11.style.backgroundColor = '#d3d3d3'
  hour12.style.backgroundColor = '#d3d3d3'
  hour1.style.backgroundColor = '#d3d3d3'
  hour2.style.backgroundColor = '#d3d3d3'
  hour3.style.backgroundColor = '#d3d3d3'
  hour4.style.backgroundColor = '#d3d3d3'
  hour5.style.backgroundColor = '#ff6961'
} 
}

test()
// var currentTime = dayjs();
// $('#currentTime').text(currentTime.format('h:mm:ss'));