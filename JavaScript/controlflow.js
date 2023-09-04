/* If we want to the control to directly move to else block we use 'false', '0' , 'null', 
'undefined', 'NaN', '0 === false','NaN === false', '' . */
let x;
if (false){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (0){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (null){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (NaN){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}
if (NaN === false){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (0 === false){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (''){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}

if (x){
    console.log('You will not see me');   //control never comes here
} else {
    console.log('I am in else block');
}