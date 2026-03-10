//string comparison
//follows unicode comparison for each character
let a = "nilesh";
let b = "siddhaarth";

let result = a > b;
console.log(result); 

//unicode value of capital letters are larger than small letters


//implicit convertion from string to number while comparing 
let c = '2';
let d = 1 ;

let res = c > d ;
console.log(res);

//implicit convertion from boolean to number while comparing 
//true is considered as 1 and false is considered as 0
let e = true;
let f = 1 ;

let ans = e == f ;
console.log(ans);

//strict equality "===" ,it does not implicitly convert the datatype to number while comparing
console.log('0'===0);


//null and undefined 
console.log("null and undefined ");
console.log(null == undefined); // there is a rule that null and undefined should be equal without comparing types 
console.log(null === undefined); //with comparing it should not be equal bcoz both are different types 
console.log(null > 0); //null implicitly converts the value to 0 and compare it with 0
console.log(null <= 0); //null implicitly converts the value to 0 and compare it with 0 and returns true bcoz the after convertion the value of null is 0
console.log(null < 0); //null is equal to 0 so it return false 
console.log(null == 0); //here also null is equal to 0 but it returns false bcoz there is another rule that null should only equal to undefined 

//undefined is not equal to 0 when converting implicilty ,it is NaN when converting 
console.log(Number(undefined));