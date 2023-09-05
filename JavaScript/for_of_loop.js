/*The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, 
NodeList (and other DOM collections), as well as the arguments object, generators produced by 
generator functions, and user-defined iterables*/
console.log('Loop through an array')
arr = [1,2,3,4,5,6];
for (const i of arr){
    console.log(i);
}

console.log('Loop through a string')
str = 'My name';
for (const x of str){
    console.log(x);
}