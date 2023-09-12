//Symbols are used for secure data storage

const obj1 = {name:'Akki',age:24};

obj1.name = 'Shazi';

console.log(obj1);

const pswd = Symbol('pswd');
obj1[pswd] = 'a1234';

//console.log(obj1);
console.log(Object.getOwnPropertySymbols(obj1));
const pswd_dup = Symbol('pswd');
console.log(obj1[pswd_dup]);    //undefined

