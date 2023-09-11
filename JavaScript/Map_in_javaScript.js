//Create a map 
let map1 = new Map();
map1.set('name','Eliana');
console.log(map1);
map1.set('mother','Alia');
map1.set('father', 'john');
console.log('Length of the map is ',+map1.size,map1);

//Weak map

let obj = {name: 'Hi'};
let map2 = {[obj]: 'Khazi' };
console.log(map2[obj]);
obj = "My Name"    //Reference changed
let obj2 = {name: "Hi"};
console.log(map2[obj2]);
console.log(map2);
