// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const age = prompt("Enter your age:")
const remAge = 18 - age;
if(age >= 18){
    alert("You are old enough to drive")
} else if(remAge === 1){
    alert(`Sorry! Wait for ${remAge} year to drive`)
} else {
    alert(`Sorry! Wait for ${remAge} years to drive`)
}