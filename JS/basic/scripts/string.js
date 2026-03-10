//both single and double quotes are used for a string 
//but both the open and closing quotes should be same 

let intro = "Hi this is nilesh";

console.log(intro);
console.log(typeof intro);

//when we use ' inside the string then the open and close should be "" otherwise it throws an error
let laptop = "this is nilesh's laptop";
console.log(laptop);


//when we use double quotes inside the string then open and close should be ' ' 
let quote = 'He said "I am a batman"';
console.log(quote);

//if we need to use both single quotes and double quotes inside the string then the opening and closing quote should be back tick ` `
let paragraph = `Batman said "it is his house" and yeah it's batman's house `;
console.log(paragraph);

//for embedding (use expressions inside the strings) use back tick ` `
let number = 12 + 14;
let embed = `12 + 14 = ${number}`;
console.log(embed);

//in embedding we also use string inside ${}
let name = "nilesh";
let sentence = `My name is ${name}`;
console.log(sentence);
