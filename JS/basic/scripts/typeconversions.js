//implicit conversion 
//console.log() function implicitly converts the number to string while printing 
let age = 20;
console.log(age);


//implicit covertions while performing mathematical operations 
console.log('12'/'2'); //12 and 2 are passed as string but implicitly js converts the string to number 
console.log('12'*'2'); 
console.log('12'-'2');
// all the other operations like /,*,- works fine after implicit conversion but '+' doesnt perform addition instead it acts as concatenation  
console.log('12'+'2'); 


//explicit type conversion 
let number = 20;
console.log(typeof number);
number = String(number);
console.log(typeof number);

let isAdult = true;
console.log(isAdult);
console.log(typeof isAdult);
isAdult = String(isAdult);
console.log(isAdult);
console.log(typeof isAdult);


//lets check it for null
let name = null;
console.log(name);
console.log(typeof name);
name = String(name);
console.log(name);
console.log(typeof name);

//explicit covertion from string to int 
console.log("explicit convertion !");

let str = '23';
console.log(str);
console.log(typeof str);

//before explicit convertion
console.log("before covertion : ",str + 3); //concatenation

//after convertion
str = Number(str);
console.log(typeof str);
console.log("after convertion : ",str +3);

//converting boolean to number 
console.log("converting boolean to number : ");
let isMale = true;
isMale = Number(isMale);
console.log(isMale);
console.log(typeof isMale);


//converting string to number (NaN)
console.log("converting string to number (NaN): ");
let str1 = "null";
str1 = Number(str1);
console.log(str1);
console.log(typeof str1);

let bool = "true";
str1 = Number(str1);
console.log(str1);
console.log(typeof str1);


//coverting integer to boolean explicitly
console.log("coverting integer to boolean explicitly..");
let x = 1; //any positive or negative number is converted to true ,if the value is "0" then the result is false
console.log(x);
console.log(typeof x);

x = Boolean(x);
console.log(x);
console.log(typeof x);

//converting the string to boolean 
//if the string is empty then only the result is false even if there is only a whitespace then also it is considered as true 
console.log("converting the string to boolean ...");
console.log("empty String ");
let s = ""; 
s = Boolean(s);
console.log(s);
console.log(typeof s);

console.log("single space ...");
let a = " "; // a single space also considered as character and results as true  
a = Boolean(a);
console.log(a);
console.log(typeof a);


console.log("true as string...");
let b = "true"; // a single space also considered as character and results as true  
b = Boolean(b);
console.log(b);
console.log(typeof b);


//false also considered as a valid stirng and results in true 
console.log("false as string...");
let c = "false"; // a single space also considered as character and results as true  
c = Boolean(c);
console.log(c);
console.log(typeof c);

//false also considered as a valid stirng and results in true 
console.log("zero as string...");
let d = "0"; // a single space also considered as character and results as true  
d = Boolean(d);
console.log(d);
console.log(typeof d);

