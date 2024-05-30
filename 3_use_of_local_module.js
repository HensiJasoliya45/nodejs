const now = require("./mydatetime");
console.log(now.getDate());
console.log(now.getTime());
console.log(now.getDateTime());

let daysToAdd = 5;
console.log(`Date after adding ${daysToAdd} days:`, now.addDays(daysToAdd));

let date1 = "2024-05-30";
let date2 = "2024-06-10";
console.log(`Difference between ${date1} and ${date2}:`, now.getDifference(date1, date2), "days");