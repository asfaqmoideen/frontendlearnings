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

