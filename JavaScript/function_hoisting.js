myName();    //function is called before it is written and executed successfully

function myName(){
    console.log('I am Raju');
}

Age();      //var here acts as a variable and if it is called before it is initialized it will say that it is undefined.This function is anonymous

var x = function Age(){
    console.log('I am 10 years old');
}
console.log('Function is called after it is written')
console.log(Age());