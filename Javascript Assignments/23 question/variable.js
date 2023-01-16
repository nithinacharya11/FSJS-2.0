// 23. Write a program to check that the number given by the user is a prime number or not.

let num = prompt("Enter a number:");
let isPrime = true;

for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i == 0) {
        isPrime = false;
        break;
    }
}

if(isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}
