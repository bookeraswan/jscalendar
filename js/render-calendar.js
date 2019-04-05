const S = e => document.querySelector(e), SA = e => document.querySelectorAll(e);
var monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var now         = new Date().toDateString(),
    currentYear = Number(now.substring(11, 15)),
    cDates      = S(".calendar-dates"),
    calMonth    = S(".calendar-month");
renderMonth();
function renderMonth(direction) {
  var month = monthsNames.indexOf(calMonth.textContent.substring(0, 3));
  if(direction === "forwards"){
    if(month === 11) month = 0, ++currentYear;else ++month;
    while (cDates.lastChild) cDates.lastChild.remove();
    displayMonth(month);
  }else if (direction === "backwards") {
    if(month === 0) month = 11, --currentYear;else --month;
    console.log(month);
    while (cDates.lastChild) cDates.lastChild.remove();
    displayMonth(month);
  }else{
    month = monthsNames.indexOf(now.substring(4, 7));
    var today = Number(now.substring(8, 10));
    displayMonth(month);
  }
}
function displayMonth(thisMonth) {
  var month = new Month(monthsNames[thisMonth], currentYear);
  S(".year").textContent = currentYear;
  calMonth.textContent = month.monthName;
  month.days.forEach(day => renderDay(day));
}
SA(".arow-btn")[0].addEventListener("click", () => renderMonth("backwards"));
SA(".arow-btn")[1].addEventListener("click", () => renderMonth("forwards"));
function renderDay(day) {
  var isInMonth = day.isInMonth ? "in-month" : "outof-month";
  var date = document.createElement("div");
  date.classList.add("date", isInMonth);
  date.textContent = day.monthDay;
  if(day.dateString === now) date.classList.add("today");
  cDates.append(date);
}
