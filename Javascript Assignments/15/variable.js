// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 65;

switch(true){
    case(score >=80): 
        console.log("Your Grade is A");
        break;
    case(score >=70 && score <80): 
        console.log("Your Grade is B");
        break;
    case(score >=60 && score<70): 
        console.log("Your Grade is C");
        break;
    case(score >=50 && score<60): 
        console.log("Your Grade is D");
        break;
    default: 
        console.log("Your Grade is F");
    break;
}
