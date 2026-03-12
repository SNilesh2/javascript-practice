//error handling 
let a = undefined;


//here the try block throw an error ,catch block catches it and prints the given 
try{
    console.log(a.name);
}
catch(error)
{
    console.log('error has occured');
}


//when there is no error in try block there it does comes into catch block 
let arr = new Array();
try{
    console.log(arr[30]);
}
catch(error)
{
    console.log('error'); //catch block does nont execute in this case 
}