/* Data Types*/

var num = 3453;
var bool = true;
var nulltype = null;
var undefined;
var fname = 'John';

console.log(typeof(num));
console.log(typeof(bool));
console.log(typeof(undefined));
console.log(typeof(fname));
console.log(typeof(nulltype));

/* Data Types conversion */

x = 89;
console.log(typeof(x));
x = 'Hello';
console.log(typeof(x));   // Dynamic conversion from number to string

//Note: This dynamic conversion sometimes creates bugs in our code to handle these bugs we use typescript.

p = 3;
q = '4';
console.log(typeof(p));
console.log(typeof(q));
console.log(p+q,typeof(p+q)); //Although a concatenated number will be displayed but it is sring type

let sum = p+parseInt(q);
console.log(sum,typeof(sum));  // Now resulting variable will be sum number type

/* Use + operator */

n = 3.4;
m = '2'; 
console.log(+m+n);  // use plus operator to convert data type.

/* using other mathematical operators will also convert data types accordingly*/

n1 = '3';
n2 = 4.6;
console.log(n1 - n2);
console.log(n1 / n2);
console.log(n1 * n2);
console.log(n1 % n2);



