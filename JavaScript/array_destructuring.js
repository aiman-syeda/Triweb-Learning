
let arr = [1,2,3,4,5];
//Method 1

a1 = arr[0];
a2 = arr[1];
a3 = arr[2];
a4 = arr[3];
a5 = arr[4];
console.log(a1,' ',a2, ' ', a3,' ',a4,' ',a5);

//Method 2

const [b1,b2,b3,b4,b5] = arr;
console.log(b1,b2,b3,b4,b5);

const [c1,c2] = arr;
console.log(c1,c2);



