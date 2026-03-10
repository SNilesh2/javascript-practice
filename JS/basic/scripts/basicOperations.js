//unary 

let x=10;
x=-x;
console.log(x);

//binary operators 
// + , - ,* , / , % . **
let a=10;
let b=20;

console.log(a+b);

//string concatenation
let str1 = "hello ";
let str2 = "guys";

console.log(str1 + str2);

//unary + behaves like typecasting to number 
let num1 = '12';
let num2 = '13';

let sum = +num1 + +num2; //whenever we give unary + before number string then it isconverted to number 
console.log(sum); //performs actual addition not string concatenation 
