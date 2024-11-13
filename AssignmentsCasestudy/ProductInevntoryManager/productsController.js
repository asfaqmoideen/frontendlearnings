
const productsArray = [
    {id :1, name:"Phone",price:2000 },
    {id :2, name:"Charger", price:200},
    {id: 3, name:"Headphones", price:100}
];


function addProduct(productToBeAdded){

    if(!productsArray.find(p=> p.id==productToBeAdded.id)){
        productsArray.push(productToBeAdded);
        return true;
    }
    return false;
}


function updateProduct(product){
    const productToBeEdited = productsArray.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name;
        productToBeEdited.price = product.price;
        return true;
    }
    return false;
}

function viewProducts(){
    return productsArray;
}

function applyDiscount(Percentage){

     const productnew = productsArray.map(product => {
            product.price = product.price - (product.price*Percentage)/100;
            return product;
        });

    return productnew;
}

// --------------------------UI Funtions-------------------------------------

document.addEventListener("DOMContentLoaded", ()=>{
    updateProductsList();

    let add = document.getElementById("add");
    add.addEventListener("click", ()=>{
        addProduct(compileProductObjectAdd());
        updateProductsList();
    })

    let update = document.getElementById("update");
    update.addEventListener("click", ()=>{
        console.log(updateProduct(compileProductObjectUpdate()));
        updateProductsList();
    })
    let applyD = document.getElementById("applyDiscount");
    applyD.addEventListener("click", ()=>{
        const percent = document.getElementById("percent");
        console.log(applyDiscount(percent.value));
        updateProductsList();
    })

})


function compileProductObjectAdd(){
    const productName = document.getElementById("name").value;
    const Pprice = document.getElementById("price").value;
    const Id = document.getElementById("id").value;
    return{id: Id, name: productName, price: Pprice};
}

function compileProductObjectUpdate(){
    const productName = document.getElementById("uname").value;
    const Pprice = document.getElementById("uprice").value;
    const Id = document.getElementById("uid").value;
    return{id: Id, name: productName, price: Pprice};
}


function updateProductsList(){
    const list = document.getElementById("resultList");
    list.innerHTML = "";
    productsArray.forEach(element => {
        const listElement = document.createElement('li');
        listElement.textContent = `${element.id} - ${element.name} - ${element.price}`;
        list.appendChild(listElement);
    });
}
// console.log(addProduct({id:1, name:"Bottle", price:300}));
// console.log(addProduct({id:4, name:"Shoes", price:900}));
// console.log(updateProduct({id:3, name:"Neckband", price:700}));
// console.log(updateProduct({id:5, name:"BassBooster", price:700}));
// console.log(viewProducts());
// console.log(applyDiscount(30));

