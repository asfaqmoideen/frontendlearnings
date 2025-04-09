interface BusinessPartner{
    name : string;
    credit : number;
}

interface Identity{
    id : number;
    email : string;
}

type Employee = BusinessPartner & Identity;

const employee1 = {
    name : "Asfaq",
    credit : 10,
    id : 1,
    email : "asfaq.com",
} as Employee;

const employee2 :Employee = {
    name : "Abdur",
    credit : 12,
    id : 2,
    email : "abdur.com",
}

console.log(employee1);
console.log(employee2);

console.log(typeof employee1 == typeof employee2);

type CompanyPortal = {
    id : number;
    details : Employee
}

const companyPortal : CompanyPortal= {
    id: 1,
    details : employee1,
}

console.log(companyPortal);

let uncertainValue : unknown = "Asfaq";

if(typeof uncertainValue == "string"){
    console.log(uncertainValue.toLowerCase());
}

uncertainValue = 200;
if(typeof uncertainValue == "number"){
    console.log(uncertainValue.toString());
}