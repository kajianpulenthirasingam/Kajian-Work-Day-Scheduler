// get the current day and display it in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// iterate through each time block and set its class based on its relation to the current time
$(".time-block").each(function() {
  var hour = parseInt($(this).attr("id").split("-")[1]);
  if (hour < today.hour()) {
    $(this).addClass("past");
  } else if (hour === today.hour()) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// save the user's input in local storage when the save button is clicked
$(".saveBtn").on("click", function() {
  var timeBlock = $(this).closest(".time-block");
  var hour = timeBlock.attr("id");
  var description = timeBlock.find(".description").val();
  localStorage.setItem(hour, description);
});

// retrieve the user's saved input from local storage and display it in the corresponding time block
$(".time-block").each(function() {
  var hour = $(this).attr("id");
  var description = localStorage.getItem(hour);
  if (description !== null) {
    $(this).find(".description").val(description);
  }
});
