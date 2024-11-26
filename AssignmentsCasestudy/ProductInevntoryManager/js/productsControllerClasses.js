
class Product{
    constructor(productId, productName, productPrice){
        this.id = productId;
        this.name = productName;
        this.price = productPrice; 
    }
}

class ProductController
{   
    constructor(){
        this.productsArray = [
            {id :1, name:"Phone",price:2000 },
            {id :2, name:"Charger", price:200},
            {id: 3, name:"Headphones", price:100}
        ];
    }
    
    
addProduct(productToBeAdded){
        if(productToBeAdded.name && productToBeAdded.id){
            const existingproduct = this.productsArray.find(p=> p.id==productToBeAdded.id);
            if(!existingproduct){
                this.productsArray.push(productToBeAdded);
                return true;
            }
            return false;
        }
    }



updateProduct(product){
    if(product.name || product.price){
    const productToBeEdited = this.productsArray.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name.length === 0 ? productToBeEdited.name : product.name;
        productToBeEdited.price = product.price.length == 0 ? productToBeEdited.price: product.price;
        return true;
    }
    }
    return false;
}

viewProducts(){
    return this.productsArray;
}

applyDiscount(Percentage){
    this.productsArray.map(product => {
            product.price = product.price - (product.price*Percentage)/100;
            return product;
        });
    console.log(this.productsArray);
}
}
// --------------------------UI Funtions-------------------------------------

document.addEventListener("DOMContentLoaded", ()=>{
    const productLogic = new ProductController();
    const uiLogic = new UIController(productLogic);

    uiLogic.displayProductsList();

    const add = document.getElementById("add");
    add.addEventListener("click", ()=>{
        uiLogic.tryAddingproduct();
    })

    const update = document.getElementById("update");
    update.addEventListener("click", ()=>{
        uiLogic.tryUpdatingProduct();

    })
    const remove = document.getElementById("remove");
    remove.addEventListener("click", ()=>{
        uiLogic.tryRemovingProduct();

    })
    const applyD = document.getElementById("applyDiscount");
    applyD.addEventListener("click", ()=>{
        const percent = document.getElementById("percent");
        productLogic.applyDiscount(percent.value);
        uiLogic.displayProductsList();
        percent.value = " ";
    })

})

class UIController{

    constructor(productlogic){
        this.productLogic = productlogic;
    }

tryRemovingProduct() {
    const selectedItems = document.querySelectorAll('#resultList .selected');
    selectedItems.forEach(item => {
        const index = Array.from(item.parentNode.children).indexOf(item);
        this.productLogic.productsArray.splice(index, 1); // Remove from array
        item.remove(); // Remove from displayed list
    });
    this.resetInputs();
}

tryAddingproduct() {
   // console.log(this.compileProductObject());
    if(!this.productLogic.addProduct(this.compileProductObject())){
        this.displayMessage("Invalid inputs, Id should be unique, name required");
        return;
    }
    this.displayMessage("Product Added!");
    this.displayProductsList();
    this.resetInputs();   
}

compileProductObject(){
    const Id = document.getElementById("id").value;
    const productName = document.getElementById("name").value;
    const Pprice = document.getElementById("price").value;
    return new Product(Id,productName,Pprice);
}


tryUpdatingProduct() {
    if(!this.productLogic.updateProduct(this.compileProductObject())){
        this.displayMessage("Id Not Found!");
        return;
    };
    this.displayMessage("Product Updtaed");
    this.displayProductsList();
    this.resetInputs();
}



displayMessage(message){
    const div = document.getElementById("MessageSection");
    div.textContent = "";
    const spanItem = document.createElement('span');
    spanItem.textContent = message;
    div.appendChild(spanItem);
}

displayProductsList(){
    const list = document.getElementById("resultList");
    list.textContent = "";
    this.productLogic.productsArray.forEach(element => {
        const listElement = document.createElement('li');
        listElement.textContent = `${element.id} - ${element.name} - ${element.price}`;
        listElement.onclick = function() {
            this.classList.toggle('selected');
            document.getElementById('name').value = element.name;
            document.getElementById('price').value = element.price;
            document.getElementById('id').value = element.id;
            document.getElementById('id').disabled = true;
        };
        list.appendChild(listElement);
    });
}

resetInputs(){
    document.getElementById('name').value ="";
    document.getElementById('price').value = "";
    document.getElementById('id').value = "";
}

}