let arr = [1,3,4,6,7];
let [a,b] = arr;
console.log('a=',a,'b=',b);

//swap a and b

[a,b] = [b,a];
console.log('a=',a,'b=',b);
console.log(arr);