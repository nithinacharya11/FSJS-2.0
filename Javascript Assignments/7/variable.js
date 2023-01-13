//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let values = ["PW Skills","ineuron","AI","ML","webdev","PW Skills", "react"];
let firstIndex = values.indexOf("PW Skills");
let lastIndex = values.lastIndexOf("PW Skills");
console.log(`The first occurrence of "PW Skills" is at index ${firstIndex} and the last occurrence is at index ${lastIndex}.`);

