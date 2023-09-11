// Rest and default parameters

function Multiplication(multiplier,...arg){
    let result;
    arg.forEach(elem=> {
        result = multiplier*elem;
        console.log(result);
    });
}

Multiplication(2,1,2,3,4);
Multiplication(2,5);

function Addition(sum,...numbers){
    let result;
    numbers.forEach(ele=> {
        result1 = sum+ele;
        console.log(result1);
    });
}
Addition(1,2);