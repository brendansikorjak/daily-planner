// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

var initilizeLocalStorage = function () {
  var dataFromLS = JSON.parse(localStorage.getItem("schedule"));

  if (!dataFromLS) {
    localStorage.setItem("schedule", JSON.stringify([]));
  }
};
initilizeLocalStorage();

var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));
var currentHour = today.format("H");
console.log(typeof currentHour, currentHour);

function changeColors() {
  var currentHourInt = parseInt(currentHour);
  for (let i = 9; i < 18; i++) {
    var istr = i.toString();
    if (i < currentHourInt) {
      var current = document.getElementById(`hour-${istr}`);
      current.style.backgroundColor = "#d3d3d3";
    } else if (i === currentHourInt) {
      var current = document.getElementById(`hour-${istr}`);
      current.style.backgroundColor = "#ff6961";
    }
  }
}
changeColors();

var toDo = "";
var saveButtons = $(".saveBtn");

$(".timeblocks-container").click(saveText);

function saveText(event) {
  var target = $(event.target);

  if (target.is("button")) {
    var scheduleData = JSON.parse(localStorage.getItem("schedule"));

    scheduleData.push({
      hour: target.attr("id"),
      todoData: target.parent().find("textarea").val(),
    });

    localStorage.setItem("schedule", JSON.stringify(scheduleData));
  }
}

for (let index = 0; index < saveButtons.length; index++) {
  const button = saveButtons[index];

  // this has to be called on a html element and not an array
  button.addEventListener("click", saveText);
}

function printText() {
  var scheduleLS = JSON.parse(localStorage.getItem("schedule"));

  for (let i = 0; i < scheduleLS.length; i++) {
    $("#hour-" + scheduleLS[i].hour)
      .find(".description")
      .text(scheduleLS[i].todoData);
  }
}
printText();

// var currentTime = dayjs();
// $('#currentTime').text(currentTime.format('h:mm:ss'));

// function keepText() {
//   var savedData = JSON.parse(localStorage.getItem("schedule"));
// }

// keepText();
