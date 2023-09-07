/* Functions can be nested as many as we need but */


// inner function preserves the scope of the outer function 

function add(num1,num2){
    function getsum(){
        let sum = num1 + num2;
       // console.log(sum);
       return sum;

    } 
    let result = getsum();    //even if we do not pass arguments it can fetch the result
    return result;

}

let addition_result = add(13,2);
console.log(addition_result);