console.log("Numbers : ");
let pi = 3.14;
let prime = 29;

//console.log(pi,prime);


//typeof is a keyword used to check the datatype of the variable 
//here both pi and prime comes under the type number 
console.log("type of pi is : ",typeof pi);
console.log("type of prime is : ",typeof prime);

//special numberic values 
console.log("special numeric values : ");
let maxInf = Infinity;
let minInf = -Infinity;
console.log(maxInf , minInf);
console.log(typeof maxInf);



let nan = NaN;  //not a number
console.log(NaN);
console.log(typeof NaN);
nan = NaN+ 2; //if we add any value to the NaN it will also become NaN except power
console.log(typeof NaN);

//use power and check how the value of Nan changes 
nan = NaN ** 0; //in the power if it power then only the value becomes 1 otherwise it stays NaN itself
console.log(nan);


console.log(NaN ** 2); //in the power it has the value 2 so the value remains NaN itself


//divibe by zero error handling 
console.log(4/0);


//lets move to binint datatype 
//if we need to the value larger than 2^53-1  we go for BigInt
// 2 ^ 53 -1 = 9887199254748991

console.log("wrong values : ");
console.log(9887199254748991 + 1);
console.log(9887199254748991 + 2);
console.log(9887199254748991 + 3);
//the above causes an undefined behaviour so we go for BigInt



let limit = 9887199254748991n; // n denotes that it is a BigInt
//if we try the same addition again
//we are not able to add the normal integer to the bigint so the other number also be a bigint  
console.log("correct values : ");
console.log(limit + 1n);  
console.log(limit + 2n);
console.log(limit + 3n);


console.log(typeof limit); 


