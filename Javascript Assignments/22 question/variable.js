// 22. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//     - Sort the array and find the min and max age
ages.sort();
const max = ages[ages.length - 1];
const min = ages[0];

console.log(ages);
console.log('MAX VALUE: '+max);
console.log('MIN VALUE: '+min);

//     - Find the median age(one middle item or two middle items divided by two)
let median;

if(ages.length % 2 === 0){
    const middle1 = ages[(ages.length / 2) - 1];
    const middle2 = ages[(ages.length/2)];
    median = (middle1 + middle2) / 2;
} 
else {
    const middle = ages[Math.ceil(ages.length/2)];
    median = middle / 2;
}

console.log('MEDIAN: '+median);

//     - Find the average age(all items divided by number of items)
const sum = ages.reduce((acc, cur) => acc + cur, 0)
const avg = sum / ages.length;

console.log('AVG: '+avg)

//     - Find the range of the ages(max minus min)
const range = max - min;
console.log(`Range: ${range}`);

//     - Compare the value of (min - average) and (max - average), use abs() method
const diffMin = Math.abs(min - avg);
const diffMax = Math.abs(max - avg);
console.log(`Difference between min and average: ${diffMin}`);
console.log(`Difference between max and average: ${diffMax}`);