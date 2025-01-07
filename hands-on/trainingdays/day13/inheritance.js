// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();

// JavatPoint
function Animal(name) {  
    const obj = {};  
    obj.name = name;  
  
    obj.sound = function() {  
        console.log("Some generic sound");  
    };  
  
    return obj;  
}  
  
function Cat(name, breed) {  
    const obj = Animal(name);  
    obj.breed = breed;  
  
    obj.sound = function() {  
        console.log("Meow Meow!");  
    };  
  
    return obj;  
}  
const myCat = Cat("Buddy", "Labrador");  
myCat.sound();   



// 

class Bike {
    constructor() {
       this.gear = 5;
    }

    getGears() {
       return this.gear;
    }
 }
 // Child class
 class suzuki extends Bike {
    constructor() {
       super();
       this.brand = "Yamaha"
    }

    getBrand() {
       return this.brand;
    }
 }

 const suzukiBike = new suzuki();
 document.getElementById("output1").innerHTML += suzukiBike.getBrand();
 document.getElementById("output2").innerHTML += suzukiBike.getGears();