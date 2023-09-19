//Classes
//Class is blueprint to create an object

class Car {
    drive(){
        console.log('You may drive the car');
    }
    brake(){
        console.log('You may step on brake');
    }
    accelerate(){
        console.log('Accelerate now');
    }
}
let person1 = new Car();
let person2 = new Car();     //Three objects are created with attributes similar to that of the class
let person3 = new Car();

person1.drive();
person2.brake();
person3.accelerate();


