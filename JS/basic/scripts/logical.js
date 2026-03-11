//logical operators in js
// OR , AND , NOT , NULL COALESCING


//OR - ||
//OR returns a number in the below eg it return the first number which is 2
// OR looks for first true and exits without checking the next ones 
console.log(2 || 12) //it doesnt check for second one if the first one is true 


//AND looks for first false and exits after that 
console.log(0 && 21);

//null coalescing 
// ?? -> it handles only null or undefined 
// || -> handles null ,undefined,NaN , 0 
let age = null;
let current = age ?? 19;

console.log(current);

//|| checks for truthy value 
// in the below eg everything is falsy so it prints the last value 
console.log(null || undefined || 0);

