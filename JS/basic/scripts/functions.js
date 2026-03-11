//functions 
//here the operation function requires 2 parameters but js allows even if we pass one parameter then the second is undefined by default 
//here we are changing that default value for the second parameter as 90
//if we pass two paramters then it works asusal
function operation(var1 , var2=90)
{
    console.log(var1 + var2 * var2);
}

operation(20); //second paramter is 90 by default 
operation(20,30);


//when we pass one parameterinstead of two, the value always assigns to the first paramter 


 function check(a)
 {
    if(a % 2 ==0)
    {
        return "even";
    }
    else{
        return "odd";
    }
 }

 console.log(check(3));


 //storing the function in a variable
 let oddOrEven = check;

 console.log(oddOrEven);
 console.log(oddOrEven(4));

//this same is done as below 

let oddeven = function(a)
{
    if(a%2==0)
    {
        return "even";
    }
    return "odd";
}

console.log(oddeven);
console.log(oddeven(8));

//here the word function itself replaced by using => arrow operator 
//these are called as nameless functions or arrow functions
let odd = (a) => {
    if(a % 2 !=0)
    {
        return "yes";
    }
    return "no";
}

console.log(odd);
console.log(odd(9));


//arrow functions are mostly used for single line or small operations as shown below
let even = (a) => a%2==0 ? "even" : "odd";

console.log(even);
console.log(even(6));


//passing function as argument which is called as callback 

function addAndSub(op,a,b) //here are the op refers to the function variables add and sub
{
    return op(a,b);
}

let add = (a,b) => a+b;
let sub = (a,b) => a-b;

console.log(addAndSub(add,4,5));
console.log(addAndSub(sub,10,5));