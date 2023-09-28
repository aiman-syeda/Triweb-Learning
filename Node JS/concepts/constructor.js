//Constructor is a special method of assigning properties.And it is automatically called when the object is created.

class car{
    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

let car1 = new car('Mercedes','xxx',2020,'Black');
let car2 = new car('Ford','yyyy',2021,'Grey');

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car2.year);
console.log(car2);





