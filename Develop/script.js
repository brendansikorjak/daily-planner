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

// var newSchedule = {
//   hour9: "",
//   hour10: "",
//   hour11: "",
//   hour12: "",
//   hour13: "",
//   hour14: "",
//   hour15: "",
//   hour16: "",
//   hour17: "",
// };

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

var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour1 = document.getElementById("hour-13");
var hour2 = document.getElementById("hour-14");
var hour3 = document.getElementById("hour-15");
var hour4 = document.getElementById("hour-16");
var hour5 = document.getElementById("hour-17");

function changeColors() {
  if (currentHour === "9") {
    hour9.style.backgroundColor = "#ff6961";
  } else if (currentHour === "10") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#ff6961";
  } else if (currentHour === "11") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#ff6961";
  } else if (currentHour === "12") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#ff6961";
  } else if (currentHour === "13") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#d3d3d3";
    hour1.style.backgroundColor = "#ff6961";
  } else if (currentHour === "14") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#d3d3d3";
    hour1.style.backgroundColor = "#d3d3d3";
    hour2.style.backgroundColor = "#ff6961";
  } else if (currentHour === "15") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#d3d3d3";
    hour1.style.backgroundColor = "#d3d3d3";
    hour2.style.backgroundColor = "#d3d3d3";
    hour3.style.backgroundColor = "#ff6961";
  } else if (currentHour === "16") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#d3d3d3";
    hour1.style.backgroundColor = "#d3d3d3";
    hour2.style.backgroundColor = "#d3d3d3";
    hour3.style.backgroundColor = "#d3d3d3";
    hour4.style.backgroundColor = "#ff6961";
  } else if (currentHour === "17") {
    hour9.style.backgroundColor = "#d3d3d3";
    hour10.style.backgroundColor = "#d3d3d3";
    hour11.style.backgroundColor = "#d3d3d3";
    hour12.style.backgroundColor = "#d3d3d3";
    hour1.style.backgroundColor = "#d3d3d3";
    hour2.style.backgroundColor = "#d3d3d3";
    hour3.style.backgroundColor = "#d3d3d3";
    hour4.style.backgroundColor = "#d3d3d3";
    hour5.style.backgroundColor = "#ff6961";
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
