//========================================Declarations=====================================================
import { productsArray } from "./constants";

class Order{
    constructor(id, name,contact, list, totalAmount){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.listOfProducts = list;
        this.totalAmount = totalAmount;
    }
}

class OrdersController{

    constructor(){
        this.orders = [];
        this.orderId = 1;
        this.addedProducts = [];
    }



//=====================================LogicFunctions======================================================
addOrder(order){

    if(order.name && order.listOfProducts.length>0){
        this.orders.push(order);
        return true;
    }
        return false;
}

generateUniqueId(){
    return ++this.orderId;
}

netOrdersTotal(orders){
    return orders.reduce((sum, o)=> sum + o.totalAmount, 0)
}


findOrders(customer){

    let foundOrders = [];
    for(let order in this.orders){
        if(order.name == customer){
            foundOrders.push(order);
        }
    }
    return foundOrders;
}

updateNewQuantity(){
    productsArray.map(product =>{
        const productOrdered = this.addedProducts.find(p=>p.id == product.id);
        if(productOrdered){
        product.quantity = product.quantity - productOrdered.orderedQuantity;
        }
    })
}

calculateTotalAmount(){
    return this.addedProducts.reduce((sum, product)=>sum+product.subTotal, 0);
}

orderSummary(name){
    return this.orders.filter(o=> o.name == name);
}

removeProduct(product){
    const productInd = this.addedProducts.findIndex(p=>p.id == product.id);
    this.addedProducts.splice(productInd, 1);
}

cancelOrder(order){
    const ordInd = this.orders.findIndex(o=>o.id==order.id);
    this.orders.splice(ordInd, 1);
}
}
//========================================== DOM ========================================================

document.addEventListener("DOMContentLoaded", ()=>{
    const orderscon = new OrdersController();
    const uicon = new UIController(orderscon);

    uicon.updateProductsDropdown();
    uicon.updateOrdersAddedList(orderscon.orders, false);
    uicon.upadteTotalAmount();
    
    document.getElementById('productDropDown').addEventListener('change', ()=>{
        uicon.setMaxQuantity();
    })

    const addProd = document.getElementById("addProduct");
    addProd.addEventListener('click', ()=>{
        uicon.tryAddingProducts();
    })
    
    const addform = document.getElementById("add-form");
    addform.addEventListener('submit', (event)=>{
        event.preventDefault();
        uicon.tryPlacingOrder(addform);
    })


    const getsum = document.getElementById('cname-sum');
    getsum.addEventListener('change', ()=>{
        const summary = orderscon.orderSummary(getsum.value)
        uicon.updateOrdersAddedList(summary,true);
    })
})


class UIController{
    constructor(orderscon){
        this.orderscon = orderscon;
    }


compileOrder(addform){ 
        return new Order(
            this.orderscon.generateUniqueId(),
            addform.cname.value,
            addform.contact.value,
            this.orderscon.addedProducts,
            this.orderscon.calculateTotalAmount(),
        )
    }



tryAddingProducts(){
    this.orderscon.addedProducts.push(this.getProductDetails());     
    this.updateProductsAddedList();                   
    this.upadteTotalAmount();               
    document.getElementById('productDropDown').value=" " ;
    this.updateProductsDropdown();
}

tryPlacingOrder(addform){

    if(this.orderscon.addOrder(this.compileOrder(addform))){
        this.orderscon.updateNewQuantity();
        this.updateOrdersAddedList(this.orderscon.orders, false);
        this.orderscon.addedProducts = [];
        this.updateProductsDropdown();
        this.updateProductsAddedList();
        this.upadteTotalAmount();
        addform.reset();
        this.displayMessage("Order Added !");
        return;
    }
    this.displayMessage("Invalid Inputs");
    addform.reset();
}


getProductDetails(){
    const productV = document.getElementById('productDropDown').value;
    const product = productsArray.find(p=>p.name==productV);
    product.orderedQuantity = document.getElementById('quantity').value;
    product.subTotal = product.orderedQuantity*product.price;
    return product;
}

setMaxQuantity(){
    const productV = document.getElementById('productDropDown').value;
    const quantity = document.getElementById('quantity');
    const product = productsArray.find(p=>p.name==productV);
    const availableQuan = product.quantity;
    quantity.max = availableQuan;
}

//==================================== Updating UI Functions ==================================================




displayMessage(message){
    const messageDiv = document.getElementById('messageDiv');
    setTimeout(function(){messageDiv.textContent = ""}, 3000);
    messageDiv.textContent = message;
}


updateProductsDropdown(){
    const productDd = document.getElementById('productDropDown');
    productDd.textContent = ""; 
    productsArray.forEach(product =>{
        if(!this.orderscon.addedProducts.find(p=>p.id == product.id)){
            if(product.quantity>0){
                const listItem = document.createElement('option');
                listItem.textContent = product.name;
                listItem.value = product.name;
                productDd.appendChild(listItem);
            }
        }
    })
}

upadteTotalAmount(){
    document.getElementById('tamt').textContent = `Total Amout:${this.orderscon.calculateTotalAmount()}`;
}


updateProductsAddedList() {
    const table = document.querySelector('#disp-table-pro tbody');
    table.textContent = ""; 
    this.orderscon.addedProducts.forEach(product => {
        const row = document.createElement('tr');
        
        for(let key in product){
            const cell = document.createElement('td');
            if(key == 'quantity'){continue;}
            if(key == 'price' || key =='subTotal'){
                cell.textContent = `₹${product[key]}`
            }
            else{
                cell.textContent = product[key];
            }
            row.appendChild(cell);
        }

        const modifycell = document.createElement('td');
        const delBtn = this.createButton(`🗑️`)
        delBtn.addEventListener('click', ()=>{
            this.orderscon.removeProduct(product);
            this.updateProductsAddedList();
        })
        modifycell.appendChild(delBtn);
        row.appendChild(modifycell);
        
        table.appendChild(row); 
    });
}

updateOrdersAddedList(orders, isSummary) {
    let table = isSummary ? document.querySelector('#disp-table2 tbody') : document.querySelector('#disp-table tbody');
    const tamt = isSummary ? document.getElementById('tamt3') : document.getElementById('tamt2');
    tamt.textContent = `Total Amount : ₹${this.orderscon.netOrdersTotal(orders)}`;
    table.textContent = " "; 


    orders.forEach(order => {
        const row = document.createElement('tr');

            for(let key in order){
                if(order.hasOwnProperty(key)){
                    const cell = document.createElement('td');
                    if(Array.isArray(order[key])){
                       cell.textContent = order[key].map(p=>`${p.name}(${p.orderedQuantity})`).join(", ");
                    }
                    else{
                    cell.textContent = order[key];
                    }
                    row.appendChild(cell);
                }
            }

        const rembtn = this.createButton(`🗑️`);
        rembtn.addEventListener('click', ()=>{
            this.getUserConfirmation(`to cancel ${order.name}'s Order`)
                .then((result=>{
                    if(result){
                    this.orderscon.cancelOrder(order);
                    this.updateOrdersAddedList(this.orderscon.orders, true);
                    this.updateOrdersAddedList(this.orderscon.orders, false);
                    }
                }));
        });
        row.appendChild(rembtn);
        table.appendChild(row); 
    });
}

getUserConfirmation(context) {
    this.showConfirmationBlock(true);
    document.getElementById('confirm-title').textContent = `Are you sure ${context}?`;

    return new Promise((resolve) => {
        document.getElementById('yesbtn').onclick = () => {
            this.showConfirmationBlock(false);
            resolve(true);
        };
        document.getElementById('nobtn').onclick = () => {
            this.showConfirmationBlock(false);
            resolve(false);
        };
    });
}

showConfirmationBlock(state){
    const confirm = document.getElementById('confirmation');
    const overlay = document.getElementById('overlay');
    if(state){
    confirm.style.display = 'block';
    overlay.style.display = 'block';
    return
    }
    confirm.style.display = 'none';
    overlay.style.display = 'none';
}

createButton(textContent){
    const btn = document.createElement('button');
    btn.classList.add('createdbutton');
    btn.textContent = textContent;
    return btn;
}

}
