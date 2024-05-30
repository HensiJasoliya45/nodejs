//create function
let getCurrentDate = () =>
{
    //create date class object
    let d1 = new Date();
    let today = d1.getDate() + "/" + (d1.getMonth()+1) + "/" + d1.getFullYear();
    return today;
}
function getCurrentTime()
{
    let d1 = new Date();
    let now = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();
    return now;
}
let getCurrentDateTime = function()
{
    let currentdatetime = getCurrentDate() + " " + getCurrentTime();
    return currentdatetime;
}

let addDays = (days) => {
    let d1 = new Date();
    d1.setDate(d1.getDate() + days);
    let newDate = d1.getDate() + "/" + (d1.getMonth() + 1) + "/" + d1.getFullYear();
    return newDate;
};

let getDifference = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let timeDifference = Math.abs(d2 - d1);
    let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return dayDifference;
};

//export all functions (compulsory)
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;
module.exports.getDateTime = getCurrentDateTime;
module.exports.addDays = addDays;
module.exports.getDifference = getDifference;