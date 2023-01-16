// 11. Use the Date object to do the following activities

//     - What is the year today?
const today = new Date();
const year = today.getFullYear();
console.log(year); //2023


//     - What is the month today as a number?
const month = today.getMonth();
console.log(month); //0


//     - What is the date today
const date = today.getDate();
console.log(date); //13


//     - What is the day today as a number?
const day = today.getDay(); 
console.log(day); //5


//     - What is the hours now?
const hours = today.getHours();
console.log(hours); //18


//     - What is the minutes now?
const minutes = today.getMinutes();
console.log(minutes); //56


//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = today.getTime() / 1000;
console.log(seconds); //1673616401.914

