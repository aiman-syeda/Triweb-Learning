/* Closure allows the inner function to preserve the scope of outer function. It gives the inner function 
sort of memory and can be accessed by calling the closure every time */

function outer_function(x){
    function inner_function(y){
        return x + y ;
    }
    //Closure is created everytime this inner_function is called
    return inner_function;
}
const closure = outer_function(3);

const result = closure(5);

console.log(result);
//console.log(closure);