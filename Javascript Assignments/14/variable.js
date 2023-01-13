// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

function isEven(num){
    if(num % 2 === 0){
        return true;
    } 
    else {
        return false;
    }
}

let num = 11;

if(isEven(num)){
    console.log(`${num} is an Even number`);
}
else {
    console.log(`${num} is an Odd number`);
}