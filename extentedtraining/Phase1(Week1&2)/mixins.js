const engine = {
    capacity : 2.0,
    isEngineMoving(){
        return true;
    }
}

const suv = {
    wd : "4wd",
    isSuv(){
        return true;
    }
}

const hatchback = {
    wd : "2wd",
    isHatchback(){
        return true;
    },
    isBootSpaceAvailable(){
        return true;
    }
}

let Car = function(color, carType){
    let moving = false;

    return Object.assign({}, carType, engine, {
        color : color,
        drive(){
            moving = true;
        },
        isMoving(){
            return moving;
        }
    })
}

let redSuvCar = Car('red', suv);
console.dir(redSuvCar);
let blueHatchbackcar = Car("blue", hatchback);
console.dir(blueHatchbackcar);



class Enigine{
    constructor(){
        this.capacity = 2.0;
    }
    isEngineMoving(){
        return true;
    }
}

class Sedan{
    constructor(){
        this.wd = 2;
    }
    isBootSpaceAvailable(){
        return true;
    }
}

class Suv{
    constructor(){
        this.wd = 4;
    }
    isBootSpaceAvailable (){
        return true;
    }
}

function CreateCar(carType, color){
    return Object.assign({}, new Enigine(), carType, {color: color});
}

const redSedanCar = CreateCar(new Sedan(), "red");
console.dir(redSedanCar);

class CoffeeMaker{
    make(){
        return 'Coffee';
    }
}

const Tracer = (SuperClass) => class extends SuperClass {
    trace(msg){
        console.log(`Tracing ${msg}`);
    }
}

class Kitchen extends Tracer(CoffeeMaker){
    MakeGoodCoffee(){
        console.log(this.make());
        this.trace("Coffee");
        console.log("Coffee Made!");
    }
}

const kitchen = new Kitchen();
kitchen.MakeGoodCoffee();