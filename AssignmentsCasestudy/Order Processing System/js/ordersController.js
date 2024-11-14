//========================================Declarations=====================================================
const productsArray = [
    {id :1, name:"Phone",price:200000 },
    {id :2, name:"Charger", price:2000},
    {id :3, name:"Headphones", price:1000},
    {id :4, name:"Airpods",price:2000 },
    {id :5, name:"Neckband", price:900},
    {id :6, name:"Coolers", price:100},
    {id :7, name:"Laptop",price:2000000 },
    {id :8, name:"Watch", price:2000},
    {id: 9, name:"Pen", price:10},
    {id: 10,name:"Notebook", price:100}
];

const Orders = [
    {id:0, name:"Andrew",contact:"Coimbatore", listOfProducts:[{id :1, name:"Phone",price:2000 },{id :2, name:"Charger", price:200},], totalAmount: 3000},  
];

let orderId = 1;
let addedProducts =[]; 

//=====================================LogicFunctions======================================================
function addOrder(order){

    if(Orders.includes(order)){
        return false;
    }
    Orders.push(order);
    return true;
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

function cancelOrder(order){
    orderToBeRemoved = Orders.find(o=>o.id==order.id);

    if(orderToBeRemoved){
        Orders.splice(order);
        return true;
    }

    return false;
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
    }

}

function calculateTotalAmount(){
    let sum = 0;
    for(let product of addedProducts){
        sum = sum + product.price;
    }
    return sum;
}
//==========================================DOM ========================================================

document.addEventListener("DOMContentLoaded", ()=>{
    updateProductsDropdown();
    
    const addProd = document.getElementById("addProduct");
    addProd.addEventListener('click', ()=>{
        tryAddingProducts();
    })
    
    const placeOrder = document.getElementById("placeOrder");
    placeOrder.addEventListener('click', ()=>{
        tryPlacingOrder();
    })
    
    
})


function tryAddingProducts(){
    addedProducts.push(getProductDetails());  
    updateProductsAddedList();
    upadteTotalAmount();
    document.getElementById('productDropDown').value=""
}

function tryPlacingOrder(){
    addOrder(compileOrder(addedProducts));
    updateOrdersAddedList();
    addedProducts = [];
    updateProductsAddedList();
    upadteTotalAmount();
    resetInputs();
}

function getCustomerDetails(){
    return {name: document.getElementById('cname').value, contact: document.getElementById('contact').value};
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
    const productslist = document.getElementById('orderList');
    productslist.textContent = "";
    Orders.forEach(order =>{
        const listItem = document.createElement('li');
        listItem.textContent = `${order.name} - ${order.totalAmount}`;
        productslist.appendChild(listItem);
    })
}

