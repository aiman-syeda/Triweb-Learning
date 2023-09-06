/* Functions can be nested as many as we need but */

function add(num1,num2){
    function getsum(num1,num2){
        let sum = num1 + num2;
        console.log(sum);
    } 
    getsum(num1,num2);
}

add(1,2);