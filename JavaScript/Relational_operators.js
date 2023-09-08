//in 

let obj = {fruit:'apple',quantity:'10kg'};
if ('quantity' in obj){
    delete obj.quantity;  //delete operator
}

console.log(obj);

//instanceof
function xyz(){
    this.x = 43;
}
let x = new xyz();              //new is used to create an instance of an object that has a constructor function.
console.log(x)
console.log(x instanceof xyz);
console.log(obj instanceof xyz);



