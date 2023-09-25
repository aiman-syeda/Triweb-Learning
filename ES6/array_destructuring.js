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

//Object matching ,deep matching

function getinfo(){
    let emp ={
        ename:'Ajay',
        income:120000,
        place :{
            city:'Raichur',
            code: 584101
        }
    }
    return emp;
}
var {ename:employee,income:employeesalary,place:{city:cityname,code:pincode}} = getinfo();
console.log(employee,employeesalary,cityname,pincode);

//Fail soft destructuring
let arrn = [1,3,4,6,7];
let [p,q,d=3,s=2] = arr;  
console.log(p,q,d,s);