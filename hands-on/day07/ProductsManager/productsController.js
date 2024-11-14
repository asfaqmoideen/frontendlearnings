
const products = [
    {id :1, name:"Phone",price:2000 },
    {id :2, name:"Charger", price:200},
    {id: 3, name:"Headphones", price:100}
];


function addProduct(productToBeAdded){

    if(!products.find(p=> p.id==productToBeAdded.id)){
        products.push(productToBeAdded);
        return true;
    }
    return false;
}


function updateProduct(product){
    const productToBeEdited = products.find(p=> p.id==product.id);
    if(productToBeEdited){
        productToBeEdited.name = product.name;
        productToBeEdited.price = product.price;
        return true;
    }
    return false;
}

function viewProducts(){
    return products;
}

function applyDiscount(Percentage){

        const productnew = products.map(product => {
            let updatedProduct = {...product}; 
            updatedProduct.price = updatedProduct.price -(product.price*Percentage)/100;
            return updatedProduct;
        });

        return productnew;
}

document.addEventListener("DOMContentLoaded()", ()=>{
    const addProduct = document.getElementById("addProduct");
    console.log("hii");
    addProduct.addEventListener("click", ()=>{
        console.log(addProduct(compileProductObject()));
        console.log("da");
    })
})


function compileProductObject(){
    const productName = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const id = document.getElementById("id").value;

    return{id: id, name: productName, price: price}
}
// console.log(addProduct({id:1, name:"Bottle", price:300}));
// console.log(addProduct({id:4, name:"Shoes", price:900}));
// console.log(updateProduct({id:3, name:"Neckband", price:700}));
// console.log(updateProduct({id:5, name:"BassBooster", price:700}));
// console.log(viewProducts());
// console.log(applyDiscount(30));

