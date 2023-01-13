// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm using javascript

// YYYY-MM-DD HH:mm
var time_format_1 = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log(time_format_1);

// DD-MM-YYYY HH:mm
var time_format_2 = new Date().toLocaleString();
console.log(time_format_2);

// DD/MM/YYYY HH:mm
var time_format_3 = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
console.log(time_format_3);
