//========================================Declarations=====================================================
import { productsArray } from "./constants";

class OrdersController{

    constructor(){
        this.orders = [{
            id:1, name:"asfaq", contact:"9283",listOfProducts:[{id :1, name:"Phone",price:2000,},
                {id :2, name:"Charger", price:2000},], totalAmount:4000
        }];
        this.orderId = 1;
        this.addedProducts = [];
    }



//=====================================LogicFunctions======================================================
addOrder(order){

    if(order.name){
        this.orders.push(order);
        return true;
    }
        return false;
}

generateUniqueId(){
    return ++this.orderId;
}

netOrdersTotal(orders){
    let sum = 0;
    for(let order of orders){
        sum = sum + order.totalAmount;
    }

    return sum;
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


calculateTotalAmount(){
    let sum = 0;
    for(let product of this.addedProducts){
        sum = sum + product.price;
    }
    return sum;
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
        return {
            id: this.orderscon.generateUniqueId(),
            name: addform.cname.value,
            contact: addform.contact.value,
            listOfProducts : this.orderscon.addedProducts,
            totalAmount: this.orderscon.calculateTotalAmount(),
        }
    }



tryAddingProducts(){
    this.orderscon.addedProducts.push(this.getProductDetails());     
    this.updateProductsAddedList();                   
    this.upadteTotalAmount();               
    document.getElementById('productDropDown').value=" " ;
}

tryPlacingOrder(addform){

    if(this.orderscon.addOrder(this.compileOrder(addform))){
        this.updateOrdersAddedList(this.orderscon.orders, false);
        this.orderscon.addedProducts = [];
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
    const productV = document.getElementById('productDropDown').value
    return productsArray.find(p=>p.name==productV);
}


//==================================== Updating UI Functions ==================================================




displayMessage(message){
    const messageDiv = document.getElementById('messageDiv');
    setTimeout(function(){messageDiv.textContent = ""}, 3000);
    messageDiv.textContent = message;
}


updateProductsDropdown(){
    const productDd = document.getElementById('productDropDown');
    productsArray.forEach(product =>{
        const listItem = document.createElement('option');
        listItem.textContent = product.name;
        listItem.value = product.name;
        productDd.appendChild(listItem);
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
        
        const idCell = document.createElement('td');
        idCell.textContent = product.id;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name; 
        row.appendChild(nameCell);
        
        const priceCell = document.createElement('td');
        priceCell.textContent = `₹ ${product.price}`;
        row.appendChild(priceCell);

        const modifycell = document.createElement('td');
        const modify = document.createElement('button');
        modify.textContent = "Remove";
        modify.className = "createdbutton"
        modify.addEventListener('click', ()=>{

        this.orderscon.removeProduct(product);
        this.updateProductsAddedList();})
        modifycell.appendChild(modify);
        row.appendChild(modifycell);
        
        table.appendChild(row); 
    });
}

updateOrdersAddedList(orders, isSummary) {
    let table = isSummary ? document.querySelector('#disp-table2 tbody') : document.querySelector('#disp-table tbody');
    const tamt = document.getElementById('tamt2');
    tamt.textContent = `Total Amount : ₹${this.orderscon.netOrdersTotal(orders)}`;
    table.textContent = " "; 
    if(isSummary){
        const totalAmount = document.getElementById('tamt3');
        totalAmount.textContent = `Total Amount : ₹${this.orderscon.netOrdersTotal(orders)}`;
    }

    orders.forEach(order => {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = order.id;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = order.name; 
        row.appendChild(nameCell);

        const contactCell = document.createElement('td');
        contactCell.textContent = order.contact; 
        row.appendChild(contactCell);
        
        const productlist = document.createElement('ul');
        order.listOfProducts.forEach(p =>{
            const productOpt = document.createElement('li');
            productOpt.textContent = `${p.name}, `;
            productlist.appendChild(productOpt);
        });

        
        const productsCell = document.createElement('td');
        productsCell.textContent = `${productlist.textContent}`
        row.appendChild(productsCell);
        
        const amtCell = document.createElement('td');
        amtCell.textContent = `₹ ${order.totalAmount}`;
        row.appendChild(amtCell);

        const rembtn = document.createElement('button');
        rembtn.textContent = `Cancel Order`;
        rembtn.className = 'createdbutton'
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
