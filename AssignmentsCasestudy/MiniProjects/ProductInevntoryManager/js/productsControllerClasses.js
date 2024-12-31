
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
        uiLogic.tryApplyingDiscount();
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
        this.productLogic.productsArray.splice(index, 1);
        item.remove(); 
    });
    this.resetInputs();
    this.displayMessage("Product Removed", "add");
}

tryAddingproduct() {
    if(!this.productLogic.addProduct(this.compileProductObject())){
        this.displayMessage("Invalid inputs, Id should be unique, name required", "add");
        return; 
    }
    this.displayMessage("Product Added!", "add");
    this.displayProductsList();
    this.resetInputs();   
}

tryApplyingDiscount(){
    const percent = document.getElementById("percent");
    if(percent.value < 100 && percent.value > 0){
    this.productLogic.applyDiscount(percent.value);
    this.displayProductsList();

    }
    else {
        this.displayMessage("Give Value between 0-100", "dis");
        return;
    }
    percent.value = "";
}

compileProductObject(){
    return new Product( 
        document.getElementById("id").value,
        document.getElementById("name").value,
        document.getElementById("price").value
    );
}


tryUpdatingProduct() {
    if(!this.productLogic.updateProduct(this.compileProductObject())){
        this.displayMessage("Id Not Found!", "add");
        return;
    };
    this.displayMessage("Product Updtaed", "add");
    this.displayProductsList();
    this.resetInputs();
}



displayMessage(message, fromDiv){
    const spanItem = document.getElementById(`message-${fromDiv}`);
    spanItem.textContent = message;
    setTimeout(function(){spanItem.textContent = ""}, 3000);
}

displayProductsList1(){
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
    if(document.getElementById('id').disabled){
     document.getElementById('id').disabled = false ;
    }
        
}


displayProductsList() {
    const table = document.querySelector('#disp-table tbody');
    table.textContent = ""; 
    
    this.productLogic.productsArray.forEach(product => {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = product.id;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name; 
        row.appendChild(nameCell);
        
        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        const modify = document.createElement('button');
        modify.textContent = "Modify";
        modify.addEventListener('click', ()=>{
            if(modify.textContent == "Modify"){
            this.setValues(product)
            modify.textContent = "Revert";
            }
            else if(modify.textContent == "Revert"){
                this.resetInputs();
                modify.textContent = "Modify";
            }
        })
        row.appendChild(modify);
        
        table.appendChild(row); 
    });
}

setValues(element){
    document.getElementById('name').value = element.name;
    document.getElementById('price').value = element.price;
    document.getElementById('id').value = element.id;
    document.getElementById('id').disabled = true;
}
}


