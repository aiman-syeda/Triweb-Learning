//Functions can also be used as expression

const addition = function add(num1,num2){
    let sum = num1 + num2;
    console.log('sum is ',sum);
}

addition(12,3);  
//add(34,1);    //Throws reference error

//Condition based function

let result;
let ope = 1


if (ope == 1){
    result = function(n1,n2){
        console.log('Result for addition is ',+n1+n2);
    } 
    }else if (ope == 2){
        result = function(n1,n2){
        console.log('Result for addition is ',+n1-n2);
}
    }
result(3,4)