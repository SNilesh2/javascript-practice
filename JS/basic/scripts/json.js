let user = {
    name : "nilesh",
    age : 20,
    salary : 15000
}


//converting the object into the json format 
console.log(JSON.stringify(user));


//converting the json string format into object 
let str = '{"name" : "nilesh","age" : 20 }';

console.log(JSON.parse(str));