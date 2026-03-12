//if we wanna create a single object then it is fine to create a single object but we want to create more objects we are moving to constructors 
let a ={
    name : "nilesh"
};

//why we are using "this" keyword ,internally when we get into a constructor js internally assign that "this = {}" and afterwards we assign this.name ="nilesh" and js return this ,so we are using this to mention the current object
function User(a)
{
    //this={};
    this.name = a;
    this.age = function() {
        return 23;
    }
    //return this;
}

//creating multiple objects 
let nilesh = new User('nilesh');
let sid = new User('sid');
 
console.log(sid.age());

console.log("Add");
function Add()
{
    //this={};
    this.val1 = 20;
    this.val2 = 30;
    this.val3 = function(a)
    {
        return this.val1 + this.val2 + a ;
    }
}

let calc = new Add();

console.log(calc.val1);
console.log(calc.val2);
console.log(calc.val3(40));