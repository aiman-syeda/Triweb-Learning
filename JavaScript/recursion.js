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