
const productsArray = [
    {id :1, name:"Phone",price:2000 },
    {id :2, name:"Charger", price:200},
    {id: 3, name:"Headphones", price:100}
];


function addProduct(productToBeAdded){
    if(productToBeAdded.name && productToBeAdded.id){
        const existingproduct = productsArray.find(p=> p.id==productToBeAdded.id);
        if(!existingproduct){
            productsArray.push(productToBeAdded);
            return true;
        }
        return false;
    }
}


function updateProduct(product){
    if(product.name || product.price){
    const productToBeEdited = productsArray.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name.length === 0 ? productToBeEdited.name : product.name;
        productToBeEdited.price = product.price.length == 0 ? productToBeEdited.price: product.price;
        return true;
    }
    }
    return false;
}

function viewProducts(){
    return productsArray;
}

function applyDiscount(Percentage){
    productsArray.map(product => {
            product.price = product.price - (product.price*Percentage)/100;
            return product;
        });
}

// --------------------------UI Funtions-------------------------------------

document.addEventListener("DOMContentLoaded", ()=>{
  displayProductsList();

    let add = document.getElementById("add");
    add.addEventListener("click", ()=>{
        tryAddingproduct();
    })

    let update = document.getElementById("update");
    update.addEventListener("click", ()=>{
        tryUpdatingProduct();

    })
    let applyD = document.getElementById("applyDiscount");
    applyD.addEventListener("click", ()=>{
        const percent = document.getElementById("percent");
        applyDiscount(percent.value);
        displayProductsList();
    })

})

function tryAddingproduct() {
    if(!addProduct(compileProductObject())){
        displayMessage("Invalid inputs, Id should be unique, name required");
        return;
    }
    displayMessage("Product Added!");
    displayProductsList();   
}

function compileProductObject(){
    const productName = document.getElementById("name").value;
    const Pprice = document.getElementById("price").value;
    const Id = document.getElementById("id").value;
    return{id: Id, name: productName, price: Pprice};
}


function tryUpdatingProduct() {
    if(!updateProduct(compileProductObjectUpdate())){
        displayMessage("Id Not Found!");
        return;
    };
    displayMessage("Product Updtaed");
    displayProductsList();
}


function compileProductObjectUpdate(){
    const productName = document.getElementById("uname").value;
    const Pprice = document.getElementById("uprice").value;
    const Id = document.getElementById("uid").value;
    return{id: Id, name: productName, price: Pprice};
}

function displayMessage(message){
    const div = document.getElementById("MessageSection");
    div.textContent = "";
    const spanItem = document.createElement('span');
    spanItem.textContent = message;
    div.appendChild(spanItem);
}

function displayProductsList(){
    const list = document.getElementById("resultList");
    list.textContent = "";
    productsArray.forEach(element => {
        const listElement = document.createElement('li');
        listElement.textContent = `${element.id} - ${element.name} - ${element.price}`;
        list.appendChild(listElement);
    });
}

