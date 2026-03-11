//when we declare x initially it is of type undefined 
//when we assign {} to x then the type becomes object 
let x ;
console.log(typeof x); //type undefined 
x = {} ;
console.log(typeof x); //type object 


let EngineOptions = "petrol,diesel";
let car = {
    name : "nexon",
    brand : "tata",
    "drive Train" : EngineOptions+ ",ev", //if the key requires space then we need to use the key as string " " 
    price : 15,
    onRoadPrice(price) {
        return this.price + 2; //this refer to the current object car
    }
};

console.log(car); //prints the entire object in key value pairs 
console.log(car.name) //only prints the name of the car 
console.log(car["drive Train"]); //here the key drive Train is a string bcoz it has a space in it .if try to call then use car["drive Train"]

//we are able to delete the property of the object 
delete car.price;
console.log(car);


//adding a property to the existing object 
car["model year"] = 2024;
console.log(car);
console.log(car["model year"]);
car["price"]=15;
console.log(car.onRoadPrice(50));

let user ={};
user={
    name : "nilesh"
}
console.log(user.name);
user.name = "nilesh.s";
console.log(user.name);
delete user.name;
console.log(user);
user.name = "nileeshhh";

//use the keyword "in" to check whether the property is present in the object or not 
console.log("name" in user);
console.log("age" in user);

user.age = 20;
user.height = 5.6;

console.log(user);

//use in keyword for iterating the object properties 
for(key in user)
{
    console.log(key + '=>' + user[key]);
}


//if there are two objects a and b ,and i assign a to b then if change the property of b it also affects the property of a bcoz it does copies the value instead it takes the reference 
//but if assign the new object to b instead of a then both the objects are two different objects 
let a = {
    name : "nilesh",
    age : 20
};

let b=a;

console.log(a,b); //both a and b are same

//changing the property in b
b.age = 50;
console.log(a,b);

//instead of changing the property ,assign the new entire object then it does not affect the object a 
b={};
console.log(a,b);


//const in object 
//an object stores the object reference so if the reference is completely changes then it causes an error but within the same object reference if we change any properties of that object then there is no issue 
const c={
    name : "nileshhh",
    age : 30
}

//changing the reference
//c = {}; // this will create an error

//instead of changing the refernce stored in a variable c ,just change the properties inside the object c 
c.age = 50;
console.log(c);


