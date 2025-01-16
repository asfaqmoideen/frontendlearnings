let fruits = ["Apple", "Orange", "Banana", "Mango"];
let vegetables = ["Carrot", "Beetroot", "Potato",];

console.log(...fruits, ...vegetables);
let combination =[...fruits, ...vegetables].join("*");
console.log(combination);

function printFruitsAsArray(...fruits){
    console.log(fruits + fruits.length);
}
printFruitsAsArray("Apple", "Orange", "Banana", "Mango" );
