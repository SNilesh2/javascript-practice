//Object
let user ={
    name : 'nilesh',
    age : 20,
    display : function()
    {

    }
};

class User
{
    name = 'nilesh';
    age = 20;

    display()
    {
        console.log('Name :',this.name);
        console.log('Age : ',this.age);
    }
};

let nilesh = new User();
console.log(nilesh);
console.log(nilesh.age);
nilesh.display();

//costructor in class 
// #name means that it is a private property only the elements inside the class should access it ,others only access through getters and setters 
class Car{
    #name;
    constructor(name,price)
    {
        this.#name=name;
        this.price=price;
    }

    display()
    {
        console.log('Name : ',this.#name);
        console.log('Price : ',this.price);
    }

    //getters
    get name()
    {
        return 'name:'+this.#name;
    }

    //setters
    set name(name)
    {
        if(name == 'honda')
        {
            this.#name = 'honda car';
        }
        else{
            this.#name = name;
        }
    }
}

let thar = new Car('thar',20000);

console.log(thar);
console.log(thar.name); //prints undefined bcoz it is a private property
thar.display();

console.log(thar.name);

//setting the value using setters
thar.name = 'honda';
thar.display();


//inheritance
console.log("inhertiance ...");
class Animal
{
    legs;
    tail;

    constructor(legs,tail){
        this.legs = legs;
        this.tail = tail;
    }

    display()
    {
        console.log('Animal constructor');
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal
{
    nationality;
    constructor(legs,tail,nationality)
    {
        super(legs,tail);
        this.nationality=nationality;
    }

    //overriding 
    display()
    { 
        console.log('Human constructor');
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nationality);
    }
}

let dog = new Animal(4,false);
//dog.display();

let boy = new Human(4,true,'indian');
boy.display();
