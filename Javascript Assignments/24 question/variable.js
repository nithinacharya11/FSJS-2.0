// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let evenNumbers = [];
let oddNumbers = [];

for(let i=0; i<=100; i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }
    else {
        oddNumbers.push(i);
    }
}

console.log(evenNumbers);
console.log(oddNumbers);