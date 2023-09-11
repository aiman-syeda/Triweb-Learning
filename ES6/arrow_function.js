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
