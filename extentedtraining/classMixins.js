const combineClasses = (...Classes) => {
    return Classes.reduce((Base, Current) => {
        return class extends Base {
            constructor(...args) {
                super(...args);
                if (typeof Current.prototype.constructor === "function") {
                    Current.prototype.constructor.apply(this, args);
                }
            }
        };
    }, class {});
};

class A {
    methodA() {
        console.log("Method A");
    }
}

class B {
    methodB() {
        console.log("Method B");
    }
}

class C {
    methodC() {
        console.log("Method C");
    }
}

// Combine classes
const MixedClass = combineClasses(A, B, C);

const instance = new MixedClass();
instance.methodA(); 
instance.methodB(); 
instance.methodC(); 
