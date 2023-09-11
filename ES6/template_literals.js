
// Before template literals came into picture
let str = 'My name is ';
let sname = 'Ajay';
let age = 34;
console.log(str,sname,"I am ", +age,"years old");
console.log('Using template literals')
//Template Literals
console.log(`${str} ${sname} and
I am ${age} years old `);

//custom interpolation
console.log('custom interpolation')
function xyz(str1,uname,age){
    console.log(str1);
    console.log(uname);
    console.log(age);
}
xyz`My name is ${sname} and I am ${age} years old `;