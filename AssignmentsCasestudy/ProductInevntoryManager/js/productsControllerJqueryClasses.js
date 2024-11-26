
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

    
    $("#add").click(function(){
        uiLogic.tryAddingproduct();
    })
    $("#update").click(function(){
        uiLogic.tryUpdatingProduct();
    })
    $("#remove").click(function(){
        uiLogic.tryRemovingProduct();
    })
    $("#applyDiscount").click(function(){
        uiLogic.tryApplyingDsicount();
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
    if(!this.productLogic.addProduct(this.compileProductObject())){
        this.displayMessage("Invalid inputs, Id should be unique, name required");
        return;
    }
    this.displayMessage("Product Added!");
    this.displayProductsList();
    this.resetInputs();   
}

compileProductObject(){
    return new Product($("#id").val(),$("#name").val(),$("#price").val());
}


tryUpdatingProduct() {
    if(!this.productLogic.updateProduct(this.compileProductObject())){
        this.displayMessage("Id Not Found!");
        return;
    };
    this.displayMessage("Product Updated !");
    this.displayProductsList();
    this.resetInputs();
}

tryApplyingDsicount(){
    console.log
    this.productLogic.applyDiscount($("#percent").val());
    this.uiLogic.displayProductsList();
}

displayMessage(message){
    $("#Message").text(message);
    setTimeout(f=> { $("#Message").text("");}, 3000)
}

displayProductsList() {
    const list = $("#resultList");
    list.empty();
    this.productLogic.productsArray.forEach(element => {
        const listElement = $("<li></li>") 
            .text(`${element.id} - ${element.name} - ${element.price}`)
            .on("click", function() { 
                $(this).toggleClass('selected'); 
                $("#name").val(element.name);
                $("#price").val(element.price);
                $("#id").val(element.id).prop("disabled", true); 
            });
        list.append(listElement);
    });
}

resetInputs(){
    $("#name").val("");
    $("#price").val("");
    $("#id").val("");
    $("#percent").val("");
}

}