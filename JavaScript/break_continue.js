let i;
console.log('Even numbers using for loop:')
for (i = 0; i<=20; i+=2){
    if (i == 0){
        continue;  // control goes back to the start of the loop and hence skips execution of statements below continue
    }
    console.log(i);
}


console.log('Odd numbers using while loop:')
let num = 32;  //Assume it is taken from the user.
j = 1;
while(j<=num){
    if (j >= 20){
        break;  //control goes out of the loop
    }
    console.log(j);
    j+=2;
}

console.log('I am outside the while loop')