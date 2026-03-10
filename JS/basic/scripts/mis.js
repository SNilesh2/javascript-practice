//boolean datatype 
let isMale = true;

console.log(isMale);
console.log(typeof isMale);

let condition = 5<3;
console.log(condition);
console.log(typeof condition);

//null value
let age = null;
console.log(age);
console.log(typeof age);

//when we declare a value but if we didnt ininitalize that value then js by default set its value as undefined
//undefined value
let DOB ;
console.log(DOB);
console.log(typeof DOB);

//dynamic type 
//js moves the datatype from one to another dynamically while the program is running 
let myName = "nilesh";
console.log(myName);
console.log(typeof myName);
//dynamically changes from string to number
myName = 897;
console.log(myName);
console.log(typeof myName);



//All datatypes
// numbers -> Float,int,negative ;
// bigint -> 2 ^ 53 -1 ,if the value is greater than this then it is stored using bigint "use n at last to mark that it is bigint"
// string -> use '' and "" and also back tick `` for using both single and double quotes and also for embedding 
// null -> typeof this is object and it means nothing 
// undefined -> js makes the value undefined for the declared values intitially
// objects and symbols-> collection of data types 
// dynamically type -> changing from one datatype to another while the program is running 
