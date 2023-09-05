/* Function calling itself to perform iterations is called recursion*/


let x = 7;
function sequence(num){
    if (num >= 0){
        console.log(num);
        num--;
        sequence(num);
    } 
}

sequence(x);

//Method 2 to call a function
console.log('Method 2 to call a function')
let MySeries = function Series(num){
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;
    MySeries(num);   //Using function name 'Series' within the function scope also works the same
}

MySeries(5);

// Method 3 to call a function

console.log('Method 3 to call a function')
let MySeries2 = function Series2(num){
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;
    Series2(num);   //Using variable name 'MySeries' within the function scope also works the same
}

MySeries2(5);

// Method 4 to call a function

console.log('Method 4 to call a function')
let MySeries3 = function Series3(num){
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;
    arguments.callee(num);
}

MySeries3(5);