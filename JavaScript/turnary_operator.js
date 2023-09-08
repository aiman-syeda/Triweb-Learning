// A code using if else 
let x = 9;
let y;
if (x%3==0){
    y = x;
}else{
    y = 0;
}
console.log(y,'Using if else');

//Same thing can be implemented using turnary operator

let z = x%3==0?x:0;
console.log(z,'Using turnary operator');
