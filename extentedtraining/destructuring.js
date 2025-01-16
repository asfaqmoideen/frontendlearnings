const biriyaniTypes  = ['Hyderabad', "Ambur", "Thalapakkati", 'Bengal', 'Malabar'];
console.log(biriyaniTypes);


// swap 
[biriyaniTypes[0] , biriyaniTypes[4] ] = [biriyaniTypes[4], biriyaniTypes[0]]; 
console.log(biriyaniTypes)  

const [malabar, ambur] = biriyaniTypes;

console.log(ambur);
console.log(malabar);


const bike = {
    manufac : "Honda",
    capacity : 150,
    mileage : 50,
}

const {manufac, capacity, mileage,color} = bike;
console.log(manufac);
console.log(capacity);
console.log(mileage);
console.log(color);

function displayBikeDetails ({manufac, capacity, mileage,color = "blue"}){
    console.log(manufac);
    console.log(capacity);
    console.log(mileage);
    console.log(color);
}

displayBikeDetails(bike);