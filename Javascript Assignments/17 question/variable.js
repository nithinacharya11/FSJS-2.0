// 17. Write a program which tells the number of days in a month.

function daysInMonth(monthName) {
    let days;
    switch (monthName.toLowerCase()) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            days = 31;
            break;
        case 'february':
            days = 28;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            days = 30;
            break;
        default:
            throw new Error('Invalid Month');
    }
    return days;
}


console.log(daysInMonth("March")) // 31
console.log(daysInMonth("February")) //28
