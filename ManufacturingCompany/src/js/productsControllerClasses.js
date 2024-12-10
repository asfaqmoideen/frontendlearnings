import { productsArray } from "./constants";
class Product{
    constructor(productId, productName, productPrice, productQuantity){
        this.id = productId;
        this.name = productName;
        this.price = productPrice;
        this.quantity = productQuantity; 
    }
}


class ProductController
{   

    addProduct(productToBeAdded){
        if(productToBeAdded.name && productToBeAdded.id){
            const existingproduct = productsArray.find(p=> p.id==productToBeAdded.id);
            if(!existingproduct){
                productsArray.push(productToBeAdded);
                return true;
            }
            return false;
        }
    }



updateProduct(product){
    console.log(product);
    if(product.name || product.price){
    const productToBeEdited = productsArray.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name.length === 0 ? productToBeEdited.name : product.name;
        productToBeEdited.price = product.price.length == 0 ? productToBeEdited.price: product.price;
        productToBeEdited.quantity = product.quantity.length == 0 ? productToBeEdited.quantity: product.quantity;
        return true;
    }
    }
    return false;
}


removeProduct(product){
    const productToBeRemoved = productsArray.findIndex(p=> p.id==product.id);
    productsArray.splice(productToBeRemoved, 1);
}
applyDiscount(Percentage){
    const dicountedArray = productsArray.map(product => {
            product.discounprice = product.price - (product.price*Percentage)/100;
            return product;
        });
    console.log(dicountedArray);
    return dicountedArray;
}
}


// --------------------------UI Funtions-------------------------------------

document.addEventListener("DOMContentLoaded", ()=>{
    const uiLogic = new GridUI();
    uiLogic.renderProducts();

    const addp = document.getElementById('add-form');
    addp.addEventListener('submit',(event)=>{
        event.preventDefault();
        uiLogic.tryAddingProduct(addp);
    });

    const applyD = document.getElementById("applyDiscount");
    applyD.addEventListener("click", ()=>{
        uiLogic.tryApplyingDiscount();
    });
})



class GridUI{
    constructor(){
        this.productLogic=new ProductController();
    }
    
    tryAddingProduct(addform){

        if(this.productLogic.addProduct(new Product(addform.pid.value,
            addform.name.value,addform.price.value, addform.quantity.value))){
                this.renderProducts();
                addform.reset();
                this.displayMessage(`Product Added !`, "add");
                return;
            }
        this.displayMessage("Product not Added !, Id should be unique", "add");

    }

    displayProductsTable(products) {
        const table = document.querySelector('#disp-table tbody');
        table.textContent = ""; 
        products.forEach(product => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = product.id;
            row.appendChild(idCell);
            
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name; 
            row.appendChild(nameCell);
            
            const priceCell = document.createElement('td');
            priceCell.textContent = `₹${product.price}`;
            row.appendChild(priceCell);
    
            const discounted = document.createElement('td');
            discounted.textContent = `₹${product.discounprice}`;
            row.appendChild(discounted);
            
            table.appendChild(row); 
        });
    }

    displayMessage(message, fromDiv){
        const spanItem = document.getElementById(`message-${fromDiv}`);
        spanItem.textContent = message;
        setTimeout(function(){spanItem.textContent = ""}, 3000);
    }

    renderProducts() {
        const grid = document.getElementById("product-grid");
        grid.textContent = "";
        productsArray.forEach((product) => {
            const tile = document.createElement("div");
            tile.className = "tile";
            const title = document.createElement('h3');
            title.textContent = product.name;
            tile.appendChild(title);

            const pricep = document.createElement('p');
            pricep.textContent = `Price: ₹${product.price}`;
            tile.appendChild(pricep);

            const quanp = document.createElement('p');
            quanp.textContent = `Quantity: ${product.quantity}`;
            tile.appendChild(quanp);

            const actiondiv = document.createElement('div');
            actiondiv.className = "actions";
            const editbtn = document.createElement('button');
            editbtn.textContent = `📝`;
            editbtn.addEventListener('click', ()=> {
                this.editProduct(product);
                this.renderProducts();
            })
            actiondiv.appendChild(editbtn);

            const rembtn = document.createElement('button');
            rembtn.textContent = `🗑️`;
            rembtn.addEventListener('click', ()=> {
                this.getUserConfirmation(`to delete ${product.name}`)
                .then((result=>{
                    if(result){
                        this.productLogic.removeProduct(product);
                        this.renderProducts();
                        this.displayMessage("Product Removed!","edit");
                    }
                }));
            })
            actiondiv.appendChild(rembtn);

            tile.appendChild(actiondiv);

            grid.appendChild(tile);
        });
    }
      
    editProduct(product){
        const eform = document.getElementById("edit-form");
        const emodal = document.getElementById("edit-modal");
        const ecancelButton = document.getElementById("cancel-button");
        this.setEditFormDetails(eform, product);

        emodal.classList.remove("hidden");
        eform.addEventListener("submit", (event) => {
            event.preventDefault();
            this.productLogic.updateProduct(new Product(eform.eid.value,eform.ename.value,eform.eprice.value, eform.equantity.value))
            this.renderProducts();
              emodal.classList.add("hidden");
              this.displayMessage("Product Edited!","edit");
          });
          ecancelButton.addEventListener("click", () => {
            emodal.classList.add("hidden");
          });
    }

    setEditFormDetails(eform, product) {
        eform.eid.value = product.id;
        eform.eid.disabled = true;
        eform.ename.value = product.name;
        eform.eprice.value = product.price;
        eform.equantity.value = product.quantity;
    }

    tryApplyingDiscount(){
        const percent = document.getElementById("percent");
        if(percent.value < 100 && percent.value > 0){
        this.displayProductsTable(this.productLogic.applyDiscount(percent.value));
        this.displayMessage("Discount Applied","dis");
        }
        percent.value = "";
    }

    getUserConfirmation(context) {
        const confirm = document.getElementById('confirmation');
        const overlay = document.getElementById('overlay');
        confirm.style.display = 'block';
        overlay.style.display = 'block';
        document.getElementById('confirm-title').textContent = `Are you sure ${context}?`;
    
        return new Promise((resolve) => {
            document.getElementById('yesbtn').onclick = () => {
                confirm.style.display = 'none';
                overlay.style.display = 'none'
                resolve(true);
            };
            document.getElementById('nobtn').onclick = () => {
                confirm.style.display = 'none';
                overlay.style.display = 'none'
                resolve(false);
            };
        });
    }
}


