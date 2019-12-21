setInterval(function() {
  var dateOfNow = new Date();
  // console.log(dateOfNow);
  var date = dateOfNow.getDate();
  var hours = dateOfNow.getHours();
  var minutes = dateOfNow.getMinutes();
  var seconds = dateOfNow.getSeconds();
  var period = "AM";
  // console.log(hours, minutes, seconds);

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var currentDay = days[dateOfNow.getDay()];
  // console.log(currentDay);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var currentMonth = months[dateOfNow.getMonth()];
  // console.log(currentMonth);
  var currentYear = dateOfNow.getFullYear();
  // console.log(currentYear);

  //Displays the date, month and year in the div of the index.html
  var displayDate = document.getElementById("date-month-year");
  var dateValues = date + " " + currentMonth + " " + currentYear;
  displayDate.innerText = dateValues;
  // console.log(displayDate);

  //Displays the day in the div of the index.html
  var displayDay = document.getElementById("dayoftheweek");
  displayDay.innerText = currentDay;

  //Display the time in hours and min
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var displayTime = document.getElementById("currentTime");
  displayTime.innerText = hours + ":" + minutes + ":" + seconds + " " + period;
}, 1000);
