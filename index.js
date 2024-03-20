var noon = 12;
var lunchtime = 12;
var evening = 18;

function Time() {
  // Creating object of the Date class
  var date = new Date();

  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
  var second = date.getSeconds();

  // Variable to store AM / PM
  var period = "";

  // Assigning AM / PM according to the current hour
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  // Converting the hour in 12-hour format
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);

  // Adding time elements to the div
  document.getElementById("digital-clock").innerText =
    hour + " : " + minute + " : " + second + " " + period;

  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);

  Message(hour, period);
}

function Message(hour, period) {
  var date = new Date();
  var hour = date.getHours();


  if (hour >= 18 && period === "PM") {
    // Checking if it's evening (6 PM or later)
    document.getElementById("message").innerText =
      "Yippee! Go count those stars!";
  } else {
    document.getElementById("message").innerText =
      "Wait till the sun goes down!"; // Clearing the message if it's not evening
  }
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();
