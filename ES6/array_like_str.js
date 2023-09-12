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

//keys

let arr2 = ['a','r','h','a','m'];
let keys = arr2.keys();
console.log(keys);   //returns an object iterator

for (let ele of keys){
    console.log(ele);  //gives index of arr2
}

//Array .find()

let x = [1,6,8,9,4,5,3];

let firstnumodd = x.find(getOdd);

function getOdd(value,index,ar){
    return value % 2 != 0;
}
console.log(firstnumodd);

//Array .findindex()

console.log
let indexval= x.findIndex((value,index,arra)=>{
    return value % 2 != 0;
});
console.log(indexval);


