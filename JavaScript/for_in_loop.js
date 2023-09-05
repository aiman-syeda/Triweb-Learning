console.log('Loop through an object')
obj = {fruitname:'Apple',color:'red',amount:500,quantity:'2kg'};
for (const key in obj){
    console.log(obj[key]);
}

console.log('Loop through an array');
arr = [2,5,7,3,9,4];
for (const i in arr){
    console.log(arr[i]);
}

console.log('"String inside backtick"');
obj = {fruitname:'Apple',color:'red',amount:500,quantity:'2kg'};
for (const key in obj){
    console.log(`${key} of the object is ${obj[key]}`);
}