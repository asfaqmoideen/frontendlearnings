//========================================Declarations=====================================================
const productsArray = [
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

const Orders = [
    {
    id:1, 
    name:"Andrew",
    contact:"Coimbatore", 
    listOfProducts:[{id :1, name:"Phone",price:2000,},{id :2, name:"Charger", price:200},], 
    totalAmount: 2200, 
    dateOfOrder: new Date()
    }
];

let orderId = 1;
let addedProducts =[]; 

//=====================================LogicFunctions======================================================
function addOrder(order){

    if(order.name){
        Orders.push(order);
        return true;
    }
        return false;
}

function generateUniqueId(){
    return ++orderId;
}

function netOrdersTotal(){
    let sum = 0;
    for(let order of Orders){
        sum = sum + order.totalAmount;
    }

    return sum;
}


function findOrders(customer){

    let foundOrders = [];
    for(let order in Orders){
        if(order.name == customer){
            foundOrders.push(order);
        }
    }
    return foundOrders;
}


function addProduct(productToBeAdded){
    let listOfproducts =[];
    listOfproducts.push(productToBeAdded);
    return true;
}


function compileOrder(productslist){
    
    return {
        id: generateUniqueId(),
        name: getCustomerDetails().name,
        contact: getCustomerDetails().contact,
        listOfProducts : productslist,
        totalAmount: calculateTotalAmount(productslist),
        dateOfOrder: new Date()
    }
}

function calculateTotalAmount(){
    let sum = 0;
    for(let product of addedProducts){
        sum = sum + product.price;
    }
    return sum;
}

function orderSummary(name){
    return Orders.filter(o=> o.name == name);
}

//========================================== DOM ========================================================

document.addEventListener("DOMContentLoaded", ()=>{
    updateProductsDropdown();
    updateOrdersAddedList();
    upadteTotalAmount();
    
    const addProd = document.getElementById("addProduct");
    addProd.addEventListener('click', ()=>{
        tryAddingProducts();
    })
    
    const placeOrder = document.getElementById("placeOrder");
    placeOrder.addEventListener('click', ()=>{
        if(tryPlacingOrder()){
            displayMessage("Order Added !");
            return;
        }
        displayMessage("Invalid Inputs");
        resetInputs();
    })

    const cancelOrder = document.getElementById("cancelOrder");
    cancelOrder.addEventListener('click', ()=>{
        tryCancellingOrder();
    })
    
    
})

function tryCancellingOrder(){
    const selectedItems = document.querySelectorAll('#orderList .selected');
    selectedItems.forEach(item => {
        const index = Array.from(item.parentNode.children).indexOf(item);
        Orders.splice(index, 1); // Remove from array
        item.remove(); // Remove from displayed list
    });

    updateOrdersAddedList();
    upadteTotalAmount();
}

function tryAddingProducts(){
    addedProducts.push(getProductDetails());     // Adds products to gloabl variable
    updateProductsAddedList();                   // updates the products added list in UI
    upadteTotalAmount();                         //Updates the total amount
    document.getElementById('productDropDown').value=" "  // setting the product dropdown to unselected.
}

function tryPlacingOrder(){

    if(addOrder(compileOrder(addedProducts))){
        updateOrdersAddedList(addedProducts);
        addedProducts = [];
        updateProductsAddedList();
        upadteTotalAmount();
        resetInputs();
        return true;
    }
    return false;
}


function getCustomerDetails(){
    return {
    name: document.getElementById('cname').value.trim(),
    contact: document.getElementById('contact').value.trim()
    };
}

function getProductDetails(){
    const productV = document.getElementById('productDropDown').value
    return productsArray.find(p=>p.name==productV);
}


//==================================== Updating UI Functions ==================================================


function resetInputs(){
    document.getElementById('cname').value="";
    document.getElementById('contact').value="";
}

function displayMessage(message){
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.textContent = message;
}


function updateProductsDropdown(){
    const productDd = document.getElementById('productDropDown');
    productsArray.forEach(product =>{
        const listItem = document.createElement('option');
        listItem.textContent = product.name;
        listItem.value = product.name;
        productDd.appendChild(listItem);
    })
}

function upadteTotalAmount(){
    document.getElementById('tamt').textContent = calculateTotalAmount();
    document.getElementById('tamt2').textContent = netOrdersTotal();
}

function updateProductsAddedList(){
    const productslist = document.getElementById('productList');
    productslist.textContent = "";
    addedProducts.forEach(product =>{
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price}`;
        productslist.appendChild(listItem);
    })
}

function updateOrdersAddedList(){
    const orderslist = document.getElementById('orderList');
    orderslist.textContent = "";
    Orders.forEach(order =>{
        const listItem = document.createElement('li');
        const productlist = document.createElement('ul');
        order.listOfProducts.forEach(p =>{
            const productOpt = document.createElement('li');
            productOpt.textContent = `${p.name} - ${p.price}, `;
            productlist.appendChild(productOpt);
        });
        console.log(`${order.id} with ${productlist.textContent}`);
        listItem.onclick = function() {this.classList.toggle('selected');};

        listItem.textContent = `${order.id} - ${order.name}
       - ${order.contact} - [ ${productlist.textContent} ] - 
       ${order.totalAmount} - ${order.dateOfOrder.toLocaleDateString()}`;
       orderslist.appendChild(listItem);

    })
}


