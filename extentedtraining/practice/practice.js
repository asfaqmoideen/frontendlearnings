
// Day 1: Destructuring
// Arrays and Objects
// 1. Basic Destructuring:
//    - Given an array `[1, 2, 3, 4]`, use destructuring to assign the first two elements to variables `a` and `b`.

const arr = [1,2,3,4];
const [a, b] = arr;
console.log(a);
console.log(b);

//  - Given an object `{name: 'Alice', age: 25, city: 'Wonderland'}`, use destructuring to assign the properties to variables `name`, `age`, and `city`.

const user = {name: 'Alice', age: 25, city: 'Wonderland'};

function displayUser({name, age, city}){
    console.log(`This is ${name}, ${age} years, from ${city}`);
}
displayUser(user);


// 2. Nested Destructuring and Default Values:
//    - Given an array `[1, [2, 3], 4]`, use nested destructuring to assign the second element (which is an array) to a variable `nestedArray`.
const nestedArray = [1, [2, 3], 4]
const [x,[y,z],j] = nestedArray;
console.log(y,z);

//    - Given an object `{name: 'Alice', address: {city: 'Wonderland', zip: '12345'}}`, use nested destructuring to assign the `city` property to a variable `city`.
const userDetails = {name: 'Alice', address: {city: 'Wonderland', zip: '12345'}};
const {name, address : {city, zip}} = userDetails;
console.log(`This is ${name} from ${city}, ${zip}`);

//    - Use destructuring with default values to assign properties from an object `{name: 'Alice'}` to variables `name` and `age` (default age to 30).
function displayNameAndAge({name, age=30}){
    console.log(`Hi,I'm ${name}, ${age} years old `);
}
displayNameAndAge({name : 'Alice'});

// Function Parameters
// 3. Destructuring Function Arguments:
//    - Write a function `displayPerson` that takes an object with properties `name`, `age`, and `city` as an argument and logs them using destructuring.
function displayPerson(person){
    const {name, age, city} = person;
    console.log(`He is ${name}, who is ${age} years old from ${city}`);
}
displayPerson({name : "Asfaq", age : 25, city : "Coimbatore"});

//    - Write a function `sum` that takes an array of numbers as an argument and returns the sum of the numbers using destructuring.


// Day 2: Spread and Rest Operators
// Spread Operator
// 1. Merging Arrays/Objects and Shallow Copying:
//    - Given two arrays `[1, 2, 3]` and `[4, 5, 6]`, use the spread operator to merge them into a single array.
const num1 = [1, 2, 3]; 
const num2 = [4, 5, 6];
const combi = [...num1, ...num2];
console.log(combi);

//    - Given two objects `{a: 1, b: 2}` and `{c: 3, d: 4}`, use the spread operator to merge them into a single object.

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const finalObj = {...obj1, ...obj2};
console.log(finalObj);
//    - Create a shallow copy of an array `[1, 2, 3]` using the spread operator.
const array = [1, 2, 3,];
const newArray = array;
console.log(newArray);

//    - Create a shallow copy of an object `{a: 1, b: 2}` using the spread operator.
const objx = {a: 1, b:2}
const objy = {...objx};
console.log(objy);

// Rest Operator
// 2. Handling Variable Arguments and Array Slicing:
//    - Write a function `sumAll` that takes any number of arguments and returns their sum using the rest operator.
function sumAll(...numbers){
    return numbers.reduce((s, c) => s + c, 0);
}
console.log(sumAll(1, 2, 3, 4,2983, 904, 28319, 92813));

//    - Write a function `firstAndRest` that takes an array as an argument and uses the rest operator to separate the first element from the rest of the elements.
function firstAndRest(numbers){
    const [first, ...rest] = numbers;
    console.log(first);
}
firstAndRest([1, 2, 3, 4,2983, 904]);

// Day 3: Template Literals
// Basics
// 1. String Interpolation:
//    - Given variables `name = 'Alice'` and `age = 25`, use template literals to create a string `Hello, my name is Alice and I am 25 years old.`.
const newname = `Alice`
const newAge = 25
const stringInterpoled = `Hello, my name is ${newname} and I am ${newAge} years old`;

// Advanced Usage
// 2. Multi-line Strings, Tagged Templates, and Custom Formatting:
//    - Use template literals to create a multi-line string representing an address:
//      ```
//      123 Main St
//      Wonderland, 12345
//      ```
const address = 
`
123 Main St
Wonderland, 12345
`
console.log(address);

//    - Write a tagged template function `highlight` that wraps each word in a template literal with `<strong>` tags.

function highlight(strings, ...values){
    let result = "";
    values.forEach((value, index)=>{
        result += `<strong>${value}</strong>` + strings[index+1]
    })
    return result
}

const newvalue = highlight`Hii, my name is ${newname} and I'm ${newAge} years old`;
document.getElementById('namespan').innerHTML = newvalue;
//    - Use template literals to format a number to two decimal places.

// Day 4: Advanced JavaScript Techniques
// 1. Debouncing and Throttling:
//    - Write a debounce function that delays the execution of a function until after a specified wait time has elapsed since the last time it was invoked.
//    - Write a throttle function that ensures a function is called at most once in a specified time period.


// 2. `bind`, `call`, and `apply` Methods:
//    - Write a function `greet` that takes a greeting and a name and logs them. Use `call` to invoke it with different contexts.
const nameobj = {
    name: "Asfaq",
}
function greet(){
    console.log(`Hello, everyone. I'm ${this.name} `);
}
greet.call(nameobj);
//    - Write a function `sum` that takes two numbers and returns their sum. Use `apply` to invoke it with an array of arguments.
function sumwithapply(x, y){
    return x*y;
}
const answer = sumwithapply.apply([305, 5217386]);
console.log(answer);

//    - Write a function `multiply` that takes two numbers and returns their product. Use `bind` to create a new function that multiplies any number by 2.
function multiply(x,y)
{
return x*y;
}
const multiplybyTwo = multiply.bind(this, 2);
console.log(multiplybyTwo(10));

// 3. Maps and Sets for Data Organisation:
//    - Create a `Map` with key-value pairs representing a person's name and age. Iterate over the map and log each key-value pair.
let nameAndAge = new Map()
nameAndAge.set("Asfaq", 22);
nameAndAge.set("Kamalesh", 23);
nameAndAge.set("Keerthana", 30);
nameAndAge.set("Asfaq",23); // same key so updated

nameAndAge.forEach((name, age) => {
    console.log(`he is ${name} and ${age} years old`);
})

//    - Create a `Set` with unique values from an array `[1, 2, 2, 3, 4, 4, 5]`. Log the set to verify that it contains only unique values.
const numbersSet = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(numbersSet); //Set(5) {1, 2, 3, 4, 5}

// Day 5: Iterators and Generators
// Iterators
// 1. Creating Custom Iterable Objects:
//    - Create a custom iterable object that generates the first `n` Fibonacci numbers.
function createIterable(n) {
    let count = 0;
    let a = 0;
    let b = 1;
    return {
        [Symbol.iterator]() {
        return {
          next() {
            if (count < n) {
              const fibNumber = a;
              [a, b] = [b, a + b]; 
              count++;
              return { value: fibNumber, done: false };
            } else {
              return { value: undefined, done: true };  
            }
          }
        };
    }
}
}
const fiboiter = createIterable(10);


// Generators
// 2. Handling Lazy Evaluation and Asynchronous Workflows:
//    - Write a generator function `fibonacci` that generates an infinite sequence of Fibonacci numbers.
function* fibonacci(){
    let a = 0;
    let b = 1;
    while(true){
        const c = a+b;
        yield c;
        a = b;
        b = c;
    }
}
const fibo = fibonacci();
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);


//    - Write a generator function `asyncGenerator` that yields promises and use `for await...of` to consume the generator.

async function* asyncGenerator() {
    const values = [1, 2, 3, 4, 5]; 
    for (let value of values) {
      yield new Promise(resolve => setTimeout(() => resolve(value * 2), 1000));
    }
  }

  (async () => {
    for await (let result of asyncGenerator()) {
      console.log(result);  
    }
  })();
// Async Generators
// 3. Streaming Data Processing:
//    - Write an async generator function `fetchData` that fetches data from an API in chunks and yields each chunk. Use `for await...of` to process the data chunks.

async function* fetchFromAPIinChunks(){
    let n = 10;
    let count = 1;
    while(count < n){
        yield fetch(`https://dummyjson.com/users/${count}`)
        count++;
    }
}

(async ()=>{
    for await(let user of fetchFromAPIinChunks()){
        let x = await user.json();
        console.log(x.username);
    }
})();