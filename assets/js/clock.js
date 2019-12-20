var dateOfNow = new Date();
// console.log(dateOfNow);
var hours = dateOfNow.getHours();
var minutes = dateOfNow.getMinutes();
var seconds = dateOfNow.getSeconds();
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
var displayDate = document.getElementById("date-month-year");
var displayValues = currentMonth + " " + currentYear;
displayDate.innerText = displayValues;
// console.log(displayDate);
