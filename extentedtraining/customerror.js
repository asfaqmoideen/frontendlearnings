// Week 2 Evaluation

class DivideByZeroError extends Error {
    constructor(message, errorcode){
        super(message);
        this.errorcode = errorcode;
    }
}


throw new DivideByZeroError("divident should not be zero");


try {
    function divide(){

    }
}catch(error)
{
    if (error instanceof DivideByZeroError){

    }
    if (error instanceof RangeError){
        
    }
}


const user = {
    name: "Asfaq",
    email : "asfaq@x.com",
    address : {
        street : "west street",
        pincode : 641091,
    }
}

function displayAddress(user){
    const {name,email, address : {street, pincode}} = user;

    console.log("Name & street" + {name, street});

}

displayAddress(user);

const newuser = user;

newuser.email = "moideen";

const newuser2 = {...user}

`Something ${user.name} 
this is `

const a = [1,2,3,3,5,];
