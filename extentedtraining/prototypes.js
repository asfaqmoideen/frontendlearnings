const newObj = {
    name: "Asfaq",
    age: 20,
    city : "CBE",
};

const anotherObj = {
    name: "Praga",
    age: 23,
}

anotherObj.__proto__ = newObj;  // Bad practice


function displayDetails(){
    console.log(`Hii, ${this.name}, ${this.age} years old and from ${this.city} `);
}

displayDetails.call(anotherObj); // city propterty will be inherited from newObj
displayDetails.call(newObj);

const anotherNewObj = Object.create(anotherObj);

displayDetails.call(anotherNewObj);



let object1 = {
    name : "Asfaq",
    city: "Coimbatore",
    getIntro: function(){
        console.log(this.name + "from" + this.city)
    }
}

obj = Object.getPrototypeOf(object1);
console.log(obj);
const object2 = Object.create(object1);
protobj =Object.getPrototypeOf(object2);
console.log(protobj);
object2.__proto__.name = "Moideen";

console.log("object1 is ",object1);
console.log("object2 is", object2);
console.log(object2.name);

let fname = "Cynthia";
console.log(fname.__proto__);
console.log(fname.__proto__.__proto__);
console.log(fname.__proto__.__proto__.__proto__);
console.log(fname.charAt(2));


//prototype chain or prototypal inheritance
//eg1
const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

//eg2
const p1 = {
xp1: "I am inside P1"
};

const p2 = Object.create(p1);
p2.xp2 = "I am inside P2";

const p3 = Object.create(p2);
p3.xp3 = "I am inside P3";


console.log(p3.xp1);