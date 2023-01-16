// 28. Write a program to print the given patterns using the loops-

// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
let input = 3;
for(let i = 1; i <= input; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

console.log("\n")

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***
for(let i = 1; i <= input; i++){
    let row = "";
    for(let j = 1; j <= input; j++){
        row += "*";
    }
    console.log(row);
}

console.log("\n")


// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****
for(let i = 1; i <= input; i++){
    let row = "";
    for(let j = 1; j <= input - i; j++){
        row += " ";
    }
    for(let k = 1; k <= 2 * i - 1; k++){
        row += "*";
    }
    console.log(row);
}
