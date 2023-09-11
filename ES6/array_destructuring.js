let arr = [1,3,4,6,7];
let [a,b] = arr;
console.log('a=',a,'b=',b);

//swap a and b

[a,b] = [b,a];
console.log('a=',a,'b=',b);
console.log(arr);

//Shorthand notation, Object matching

function getstd(){
    let std = {
        uname:'Akshay',
        age:35
    }
    return std;
}
var {uname,age} = getstd();
console.log(uname,age); 

