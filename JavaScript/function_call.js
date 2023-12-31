//Pass by value
function Decreament(num){    
    num += 2; 
     console.log(`num is now ${num}`);
}

let a = 3;
Decreament(a);      // pass by value
console.log(`value of a is still ${a}`);  //if we send primitive value then the actual value of the variable is not changed

//Pass by reference

function obj_update(employee){
    employee.username = 'Hi ' + employee.username;
    employee.contact = 91 + employee.contact;
    console.log(employee);
}

obj = {username:'Alina',contact:'23452'};  
obj_update(obj);
console.log('Old object is ',obj);    //data in this object will be changed 


//Pass by reference array

function arr_increament(arr){
    for (const i in arr){
        arr[i] += 1;
        
    }
    console.log(arr);
}
arr1 = [1,2,3,4,5,6];
arr_increament(arr1);
console.log('Old array is '+ arr1);   // the elements of array are changed