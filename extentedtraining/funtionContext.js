// Function context .call(), .apply() and .bind()

// call(reference, parameters)

const name1 = {
    firstName : "Asfaq", 
    lastName : "Moideen",
}

const name2 = {
    firstName : "balaji",
    lastName: "bharath",
    disp : function(city){
        console.log(`${this.firstName} ${this.lastName} form ${city}`);
    }
}

const displayDetails =  function(city){
    console.log(`${this.firstName} ${this.lastName} form ${city}`);
}

name2.disp.call(name1,"CBE" );
name2.disp.call(name2,"MAS" );



// apply (reference, ["parameter1", "paramter2"])

const displayMoreDetails = function(company, address, city){
    console.log(`${this.firstName} ${this.lastName} working at ${company} form ${address}, ${city}`);
}

displayMoreDetails.apply(name1, ["Annalect", "Kuniamuthur", "Coimbatore"]);
displayMoreDetails.apply(name2, ["Annalect", "Saithapet", "Chennai"]);


//Funtion Currying with Bind()
// foo(paramter1, paramter2)
// newCopy = foo.bind(reference, paramter1);
// newCopy(paramter2);

const displayDetailsForAnnalectuals = displayMoreDetails.bind(name1, "Annelect");
const displayDetailsForAnnalectualsWithAddress = displayDetailsForAnnalectuals.bind(name1,"Kuniamuthur");
displayDetailsForAnnalectualsWithAddress("Coimbatore");
// displayDetailsForAnnalectuals("Kuniamuthur", "Coimbatore");

