class Month {
  constructor(month, year) {
    var monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var fullMonthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthNumDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(year%4 === 0){
      monthNumDays[1] = 29;
    }
    var monthIdx = monthsNames.indexOf(month);
    this.monthName = fullMonthNames.find(m => {return m.indexOf(month) !== -1});;
    this.days = [];
    for(var i = 1; i <= monthNumDays[monthIdx]; i++){
      let day = generateDay(year, monthIdx, i, true);
      this.days.push(day);
    }
    var bm = 0;
    while (this.days[0].weekDay !== "Sun") {
      let day = generateDay(year, monthIdx, bm, false);
      this.days.unshift(day);
      bm--;
    }
    var am = this.days[this.days.length-1].monthDay+1;
    while (this.days[this.days.length-1].weekDay !== "Sat") {
      let day = generateDay(year, monthIdx, am, false);
      am++;
      this.days.push(day);
    }
  }
}
function generateDay(y, m, d, isInMonth) {
  var date = new Date(y, m, d).toDateString();
  day = {
    isInMonth: isInMonth,
    dateString: date,
    month: date.substring(7,4),
    weekDay: date.substring(0,3),
    monthDay: Number(date.substring(10,8))};
  return day;
}
