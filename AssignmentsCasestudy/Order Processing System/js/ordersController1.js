//========================================Declarations=====================================================
class Product{
    constructor(){
        this.productsArray = [
            {id :1, name:"Phone",price:2000,},
            {id :2, name:"Charger", price:2000},
            {id :3, name:"Headphones", price:1000},
            {id :4, name:"Airpods",price:2000 },
            {id :5, name:"Neckband", price:900},
            {id :6, name:"Coolers", price:100},
            {id :7, name:"Laptop",price:2000 },
            {id :8, name:"Watch", price:2000},
            {id: 9, name:"Pen", price:10},
            {id: 10,name:"Notebook", price:100}
        ];
    }
}

class Order {
    constructor(id, name,contact, listOfproducts, totalAmount, dateOfOrder){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.listOfproducts = listOfproducts;
        this.totalAmount = totalAmount;
        this.dateOfOrder = dateOfOrder;
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


}
//========================================== DOM ========================================================

document.addEventListener("DOMContentLoaded", ()=>{
    const orderscon = new OrdersController();
    const uicon = new UIController(orderscon);

    uicon.updateProductsDropdown();
    uicon.updateOrdersAddedList();
    uicon.upadteTotalAmount();
    
    const addProd = document.getElementById("addProduct");
    addProd.addEventListener('click', ()=>{
        uicon.tryAddingProducts();
    })
    
    const placeOrder = document.getElementById("placeOrder");
    placeOrder.addEventListener('click', ()=>{
        if(uicon.tryPlacingOrder()){
            uicon.displayMessage("Order Added !");
            return;
        }
        uicon.displayMessage("Invalid Inputs");
        uicon.resetInputs();
    })

    const cancelOrder = document.getElementById("cancelOrder");
    cancelOrder.addEventListener('click', ()=>{
        uicon.tryCancellingOrder();
    })
    
    const cnamebtn = document.getElementById('cname');
    cnamebtn.addEventListener('change', ()=>{
        uicon.tryGeneratingOrderSummary(cnamebtn.value);
    })
})


class UIController{
    constructor(orderscon){
        this.orderscon = orderscon;
        this.products = new Product();
    }


compileOrder(){
    
        return {
            id: this.orderscon.generateUniqueId(),
            name: this.getCustomerDetails().name,
            contact: this.getCustomerDetails().contact,
            listOfProducts : this.orderscon.addedProducts,
            totalAmount: this.orderscon.calculateTotalAmount(),
            dateOfOrder: new Date()
        }
    }


tryCancellingOrder(){
    const selectedItems = document.querySelectorAll('#orderList .selected');
    selectedItems.forEach(item => {
        const index = Array.from(item.parentNode.children).indexOf(item);
        this.orderscon.orders.splice(index, 1); // Remove from array
        item.remove(); // Remove from displayed list
    });

    this.updateOrdersAddedList();
    this.upadteTotalAmount();
}

tryAddingProducts(){
    this.orderscon.addedProducts.push(this.getProductDetails());     // Adds products to gloabl variable
    this.updateProductsAddedList();                   // updates the products added list in UI
    this.upadteTotalAmount();                         //Updates the total amount
    document.getElementById('productDropDown').value=" "  // setting the product dropdown to unselected.
}

tryPlacingOrder(){

    if(this.orderscon.addOrder(this.compileOrder())){
        this.updateOrdersAddedList();
        this.orderscon.addedProducts = [];
        this.updateProductsAddedList();
        this.upadteTotalAmount();
        this.resetInputs();
        return true;
    }
    return false;
}

tryGeneratingOrderSummary(cname){
    const orderOfCustom = this.orderscon.orderSummary(cname);
    if(orderOfCustom.length>0){
    const addOrderDiv = document.getElementById('ordsumbtn');
    const genSumBtn = document.createElement('button');
    genSumBtn.textContent = "Get Summary"; 
    addOrderDiv.appendChild(genSumBtn);
      genSumBtn.addEventListener('click',()=>{
        this.updateOrdersSummary(orderOfCustom);

      })  
      return;
    }
}


getCustomerDetails(){
    return {
    name: document.getElementById('cname').value.trim(),
    contact: document.getElementById('contact').value.trim()
    };
}

getProductDetails(){
    const productV = document.getElementById('productDropDown').value
    return this.products.productsArray.find(p=>p.name==productV);
}


//==================================== Updating UI Functions ==================================================


resetInputs(){
    document.getElementById('cname').value="";
    document.getElementById('contact').value="";
    document.getElementById('ordsumbtn').textContent = '';

}

displayMessage(message){
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.textContent = message;
}


updateProductsDropdown(){
    const productDd = document.getElementById('productDropDown');
    this.products.productsArray.forEach(product =>{
        const listItem = document.createElement('option');
        listItem.textContent = product.name;
        listItem.value = product.name;
        productDd.appendChild(listItem);
    })
}

upadteTotalAmount(){
    document.getElementById('tamt').textContent = this.orderscon.calculateTotalAmount();
}

updateProductsAddedList(){
    const productslist = document.getElementById('productList');
    productslist.textContent = "";
    this.orderscon.addedProducts.forEach(product =>{
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price}`;
        productslist.appendChild(listItem);
    })
}

updateOrdersAddedList(){
    const ordersDiv = document.getElementById('orderList');
    const heading = document.getElementById('ordHead') ;
    const tamt = document.getElementById('tamt2');
    heading.textContent = `List of all Orders `;
    tamt.textContent = this.orderscon.netOrdersTotal(this.orderscon.orders);
    ordersDiv.textContent = "";
    this.orderscon.orders.forEach(order =>{
        const listItem = document.createElement('li');
        const productlist = document.createElement('ul');
        order.listOfProducts.forEach(p =>{
            const productOpt = document.createElement('li');
            productOpt.textContent = `${p.name} - ${p.price}, `;
            productlist.appendChild(productOpt);
        });
    
        listItem.onclick = function() {this.classList.toggle('selected');};

        listItem.textContent = `${order.id} - ${order.name}
       - ${order.contact} - [ ${productlist.textContent} ] - 
       ${order.totalAmount} - ${order.dateOfOrder.toLocaleDateString()}`;
       ordersDiv.appendChild(listItem);
    })
}

updateOrdersSummary(ordSum){
    const ordersDiv = document.getElementById('orderList');
    const heading = document.getElementById('ordHead') ;
    const tamt = document.getElementById('tamt2');
    heading.textContent = `Order Summary of ${ordSum[0].name} `;
    tamt.textContent = this.orderscon.netOrdersTotal(ordSum);
    ordersDiv.textContent = " ";
    ordSum.forEach(order =>{
        const listItem = document.createElement('li');
        const productlist = document.createElement('ul');
        order.listOfProducts.forEach(p =>{
            const productOpt = document.createElement('li');
            productOpt.textContent = `${p.name} - ${p.price}, `;
            productlist.appendChild(productOpt);
        });
        listItem.onclick = function() {this.classList.toggle('selected');};

        listItem.textContent = `${order.id} - ${order.name}
       - ${order.contact} - [ ${productlist.textContent} ] - 
       ${order.totalAmount} - ${order.dateOfOrder.toLocaleDateString()}`;
       ordersDiv.appendChild(listItem);
    })
}

}
