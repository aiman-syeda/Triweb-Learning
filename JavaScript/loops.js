

console.log('Elements of array in reverse order using for loop:');
arr = [1,2,3,4,5,6,7];
for (let i=arr.length; i>=0; i--){
    console.log(arr[i]);
}

console.log('Natural numbers using while loop');
j = 1;
while (j<=10){
    console.log(j);   // condition is checked first and loop block is executed only if the condition satisfies.
    j++;
}

console.log('Sequence with a gap using while loop');
let k = 1;
do{
    console.log(k);   //even if the condition fails this block will be executed atleast once
    k += 2;
} while(k<=20);
