//arrays is also objects 
let vegies = new Array();

console.log(typeof vegies);

let fruits =[] //we also declare an array like this 
fruits = ['orange',{name : 'nilesh',age : 20},'apple',function add(a,b){return a+b;},true,null,undefined,29]; //in JS arrays can store any type of data

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);
console.log(fruits[1]); //arrays also store objects in it
console.log(fruits[1].name); // prints the property of an object 
console.log(fruits[3](3,5));

//array funcitons
console.log("array funcitons...");
let names = [];
names = ['nilesh','sid','aadh'];

//insertions 
names[3] = 'nags';

//push is used for inserting the element at the end of the array 
//unshift is used for inserting the element at the beginning of the array 
names.push('varsith');
names.unshift('raji');
console.log(names);


//removals 
//pop() is used to remove the last element 
//shift() is used to remove the first element 

console.log(names.pop());
console.log(names.shift());
console.log(names); 

//traversing the array 
//if we use "of" then the name has the exact names inside the array one by one 
for(name of names)
{
    console.log(name);
}

//in object we used in for traversing right ? 
//here also in is allowed for traversal 
//but when we use "in",it gives us the index so use it accordingly
for(name in names)
{
    console.log(names[name]);
}

//length of array 
console.log(names.length);

//matrix

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(mat of matrix)
{
    for(val of mat)
    {
        console.log(val);
    }
}