console.log("Literals ");

console.log("decimal",187);
console.log("octal",0o44);
console.log("hexa decimal",0x00101);
console.log("binary",0b0001);
console.log("Binary",0B0011);


console.log("Object literal");

let obj = {fruit:"apple", color:"red"};
console.log(obj);
console.log(obj.fruit);

console.log("Object literal with square bracket");
let obj1 = {'':"India", '!':"+91"};  // if .obj does not allows to use some special keys then use square brackets.
console.log(obj1['']);
console.log(obj1['!']);


console.log("String literals");
let s1 = 'string in single quote';
let s2 = "string in double quote";

let name1 = 'Kinza';
let s4 = 'Hi '+name1+' \n How are you?'; // For next line
let s3 = `Hi ${name1}
How are you?`;// For next line

console.log("s1",s1);
console.log("s2",s2);
console.log("s3",s3);
console.log("s4",s4);