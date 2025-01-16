class Person{
    #password;
    static isLoggedIn = false; 
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    setPassWord(password){
        this.#password = password;
        return this.#password;
    }
    login(name, password){
        if(name === this.name && password === this.#password){
            Person.isLoggedIn = true;
            return Person.isLoggedIn;
        }
        else{
            return false;
        }
    }

    static displayDetails(){
        const status = this.isLoggedIn ? "online" : "offline";
        console.log(`Hi this is ${this.email}, I'm ${Person.isLoggedIn} today`);    
    }
}

const pers = new Person('asfaq', 'asfaq@x.com');
pers.setPassWord( "123asfaq");
console.log(pers.login("asfaq", "123asfaq"));
console.log(`${pers.name} is logged in ${Person.isLoggedIn}`);
const pers2 = new Person('Balaji', 'bala@x.com');
pers2.setPassWord( "123bala");
console.log(`${pers2.name} is loggen in ${Person.isLoggedIn}`);//shows true because it is a static property
//console.log(pers.#password); //Property '#password' is not accessible outside class 'person' because it has a private identifier.ts(18013)
Person.displayDetails(); // Hi this is Person,  this.name refere to class name. other properties will be undefined except static property


class Employee extends Person{
    constructor(name, email, comapany){
        super(name, email);
        this.comapany = comapany;
    }

    getEmployeeDetails(){
        super.setPassWord("123IO");
        return `Hi ${this.name} from ${this.comapany}, You can reach me at ${this.email}`
    }
}

const emp = new Employee("alex", "alex@amazon.com","amazon");
emp.setPassWord( "123alex");
console.log(emp.getEmployeeDetails());