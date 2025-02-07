// Closure example when a funtion is returned
// Working -> we are returning foo froom the funtion x, the returned funtion is assigned to the varaible z, 
// when the variable z is called, y remembers its bounded varaible a and prints a as 7, this is called closure. 
function x(){
    let a= 7;
    console.log("asfaq");
    const foo = function y(){
    console.log("hii");
    console.log(a);
    }
    return foo;
}
    const z = x();
    z();

// creating a closure for settimeout funtion, as var is not a block scope, it shadows with newly assigned values
// so everytime the console will be printed with last incremented value 6, when we enclose this with a funtion 
// assignSetTimeout(i) passing i to it, it will create new references everytime the funtion is called, so now we 
// can get console values as 1,2,3,4,5 
// 

    // setTimeout with closure
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
    function assignSetTimeout(i){
        setTimeout(function() {console.log(`index: ${i}, element: ${arr[i]}`)}, 3000);
    }
    assignSetTimeout(i);
    }
 

    