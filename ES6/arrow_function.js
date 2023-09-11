/*Arrow function does not have it's own 'this' method,and hence constructor variable can't be created.
arguments can not be passed in arrow function and new.target is also not supported.*/
 
//This for a normal function
function XYZ(){
    console.log(this);
}
XYZ();
console.log('--------------------')
//this for an arrorw function
const xyz = () =>{
    console.log('xyz',this);
}
xyz();

//Arror functions can be used in assignment expressions

let arr = [2,4,6,5,7,8,12];
let sqare = arr.map(ele => ele*ele);
console.log(sqare);

//Return an object using arrow function

let obj = (student_name,age) => {
    return {name:student_name,Age:age};
}
console.log(obj('Akshay',23));