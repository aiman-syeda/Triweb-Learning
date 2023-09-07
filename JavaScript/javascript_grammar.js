/* JavaScript is case sensitive and follows UNICODE */

var number = 23;
var Number = 12;

prüfung = 'mathe';
prufung = 'englisch';

console.log('number is  ' +number ,'Number is ' +Number);
console.log('prüfung is  ' +prüfung ,'prufung is  ' +prufung);

/* Identifier in JavaScript must start with either a letter or '_' or '$'.*/

var x = 0;
var _name = 'alina';
var $currency = 'SAR';
/* var 2num = 34 ; It is invalid identifier */

console.log('x =  '+x,'_name =  '+_name,'$currency =  ' +$currency);

/* Var, let and const are different from each other*/

/* 1.The var statement declares function-scoped or globally-scoped variables, 
optionally initializing each to a value.*/
console.log('1.For "var" type')
console.log('I am called before i am initialized: ' +a);    // Says a is undefined but not error msg
var a = 10;
console.log('I am called before if block ' +a);
if (a === 10) {
    a = 20;
    console.log('I am called inside if block ' +a);  
} 
console.log('I am called after if block ' +a);    //value of 'a' after the if block is same as inside the if block.
 
/* 2.The let declaration declares re-assignable, block-scoped local variables, 
 optionally initializing each to a value.*/
console.log('2.For "let" type')
 let b = 1;
 console.log('I am called before if block ' +b);
 if (b === 1) {
    b = 12;
    console.log('I am called inside if block ' +b);
 }
 console.log('I am called after if block ' +b);

 /* 3. The const declaration declares block-scoped local variables.
  The value of a constant can't be changed through reassignment using the assignment operator, 
 but if a constant is an object, its properties can be added, updated, or removed.*/

 console.log('For "const" type')
 console.log(c); //Throws an error because it has no global scope
 const c = 34;
 try{
    c = 56;
 } catch (err) {
    console.log(c);
 }
console.log('The value of c is constant '+c)


