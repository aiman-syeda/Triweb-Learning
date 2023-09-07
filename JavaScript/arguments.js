/* How to write a function that can process on multiple arguments */

//arguments are just like arrays but not arrays

function Addition(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++){
        numbers  = arguments[index];
        sum += numbers;     
    }
    return sum;
}
let result = Addition(2,1,3,4,5,7,8,9,10,6);
console.log(result);

//How to convert arguments to array?

function Multiplication(){
    let product = 1;
    arr = Array.from(arguments);    //to covert arguments into array 
    arr.forEach(element => {
        product = element * product;
    });
    return product;

}
let result1 = Multiplication(2,3);
console.log(result1);


