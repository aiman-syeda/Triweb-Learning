
// Before template literals came into picture
let str = 'My name is ';
let sname = 'Ajay';
let age = 34;
console.log(str,sname,"I am ", +age,"years old");
console.log('Using template literals')
//Template Literals
console.log(`${str} ${sname} and
I am ${age} years old `);