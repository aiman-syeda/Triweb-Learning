//Strings to array

let str1 = 'Hi World';
let arr = Array.from(str1);
console.log(arr);

function xyz(){
    console.log(arguments);  //arguments are array like structure but all array methods are not supported by them.
    let arr1 = Array.from(arguments);
    console.log(arr1);  //arguments are array like structure but all array methods are not supported by them.

}
xyz(1,2,3,4);