
const productsArray = [
    {id :1, name:"Phone",price:2000 },
    {id :2, name:"Charger", price:200},
    {id: 3, name:"Headphones", price:100}
];


function addProduct(productToBeAdded){

    if(productsArray.find(p=> p.id==productToBeAdded.id)){
        return false;
    }
    productsArray.push(productToBeAdded);
    return true;
}


function updateProduct(product){
    const productToBeEdited = productsArray.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name.length === 0 ? productToBeEdited.name : product.name;
        console.log(productToBeEdited.name);
        productToBeEdited.price = product.price.length == 0 ? productToBeEdited.price: product.price;
        console.log( productToBeEdited.price);
        return true;
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
    updateProductsList();

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
        updateProductsList();
    })

})

function tryAddingproduct() {
    if(!addProduct(compileProductObjectAdd())){
        displayMessage("Id Already Exists");
        return;
    }
    displayMessage("Product Added!");
    updateProductsList();   
}

function compileProductObjectAdd(){
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
    updateProductsList();
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

function updateProductsList(){
    const list = document.getElementById("resultList");
    list.textContent = "";
    productsArray.forEach(element => {
        const listElement = document.createElement('li');
        listElement.textContent = `${element.id} - ${element.name} - ${element.price}`;
        list.appendChild(listElement);
    });
}

