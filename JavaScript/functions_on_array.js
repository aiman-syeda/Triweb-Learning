// Map function
let arr = [3,4,6,8,9,12];
//Get an array with the square of the elements in the above array
let sqrarr = arr.map((ele) => ele*ele);
console.log(arr,sqrarr);

// Filter

let even = arr.filter((elem) => elem%2==0);
console.log(even);

//reduce ,it reduces the arry to a single value

let total = arr.reduce((accumulator,currentvalue) => {
    return accumulator+currentvalue;
},0)
console.log(total);