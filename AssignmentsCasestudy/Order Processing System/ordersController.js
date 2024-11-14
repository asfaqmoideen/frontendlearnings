const Orders = [
    {id:200, name:summer, listOfProducts:["Phone", "Charger", "Aipods"], totalAmount: 3000},
    
];
const orderId = 1;

function addOrders(order){
    if(Orders.includes(order)){
        return false;
    }
    Orders.push(order);
    return true;
}

function generateUniqueId(){
    return ++orderId;
}

function viewAllOrders(){
    return Orders;
}

function netOrdersTotal(){
    const sum = 0;
    for(let order in Orders){
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