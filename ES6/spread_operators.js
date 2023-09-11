let arr1 = [1,2,3,4];
let arr2 = [5,6];

let arr12 = [...arr1,...arr2];   //Spreads the elements of the arrays outside the arrays
console.log(arr12);


// without spread operator for object 

obj1 = {name:'Akki',age:24};
obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.name = 'Aamir';
console.log('After update object');
console.log(obj1);       //changes made in obj1
console.log(obj2);       //influences also obj2

//with spread operator
console.log('With spread operator');
obj1 = {name:'Akki',age:24};
obj2 = {...obj1, place:'Raichur'};
console.log(obj1);
console.log(obj2);
obj2.name = 'Aamir';
console.log('After update object');
console.log(obj1);       //changes made in obj1
console.log(obj2);       //does not influences obj2 
