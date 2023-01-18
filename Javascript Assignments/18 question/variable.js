// 18. Write a program which tells the number of days in a month, now consider leap year.

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(2022, 2));  // 28 or 29

