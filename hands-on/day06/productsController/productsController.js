// Sample Array of Product objects
const products = [
    { id: 1, name: 'Screwdriver', category: 'Tools', price: 10.5, quantity: 150, dateAdded: new Date('2023-01-01') },
    { id: 2, name: 'Hammer', category: 'Tools', price: 12.75, quantity: 120, dateAdded: new Date('2023-02-15') },
    { id: 3, name: 'Wrench', category: 'Tools', price: 15.0, quantity: 200, dateAdded: new Date('2023-03-10') },
    { id: 4, name: 'Drill', category: 'Power Tools', price: 55.0, quantity: 80, dateAdded: new Date('2023-05-25') },
    { id: 5, name: 'Nail Gun', category: 'Power Tools', price: 90.0, quantity: 50, dateAdded: new Date('2023-06-30') },
    { id: 6, name: 'Saw', category: 'Tools', price: 20.0, quantity: 100, dateAdded: new Date('2023-04-20') },
    { id: 7, name: 'Laser Cutter', category: 'Machines', price: 500.0, quantity: 15, dateAdded: new Date('2023-07-15') },
    { id: 8, name: 'Band Saw', category: 'Machines', price: 250.0, quantity: 25, dateAdded: new Date('2023-08-05') }
  ];
  
  // Sort Option
  function sortProductsByPrice(){
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  console.log('Sorted by Price (Ascending):', sortedByPrice);
  //DisplayProductsList(sortedByPrice);
  return sortedByPrice;
  }
  

  function sortProductsByQuantity(){
  const sortedByQuantity = [...products].sort((a, b) => b.quantity - a.quantity);
  console.log('Sorted by Quantity (Descending):', sortedByQuantity);
  // DisplayProductsList(sortedByQuantity);
  return sortedByQuantity;
  }
  

  function sortProductsByDateAdded(){
  const sortedByDateAdded = [...products].sort((a, b) => a.dateAdded - b.dateAdded);
  console.log('Sorted by Date Added (Ascending):', sortedByDateAdded);
  // DisplayProductsList(sortedByDateAdded);
  return sortedByDateAdded;
  }


  function sortSelect(critera){

    if(critera=="Price"){
      return sortProductsByPrice();
    } 
    else if(critera=="Quantity") {
      return sortProductsByPrice();
    }
    else if(critera=="DateAdded") 
    {
      return sortProductsByDateAdded();
    }
    else {
      return null;
    }
  }
  // ---------------------------------- Sort Function End ---------------------------------

  // ------------------------------------Search Options ---------------------------------

  function findProductsByCategory(category){
    console.log("Inside funtion  " + category);
  const toolsCategory = products.filter(product => product.category === category);
  console.log('Products in Tools Category:', toolsCategory);
  return toolsCategory;
  }
  

  function findProductsByPrice(price){
  const affordableProducts = products.filter(product => product.price <price);
  console.log('Affordable Products :', affordableProducts);
  return affordableProducts;
  }


  function findProductByName(name){
  const foundProduct = products.find(product => product.name === name);
  console.log('Product with name "Hammer":', foundProduct );
  return foundProduct;
  }
  

  function findProductsByQuantity(quantity){
  const filteredQuantityProducts = products.filter(product => product.quantity > quantity);
  console.log('Products with Quantity quantity greater than a given value ', filteredQuantityProducts);
  return filteredQuantityProducts;
  }

  function searchSelect(){

    const searchInput = document.getElementById("criteria");
    const category = document.getElementById("category");
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");

    if(category.checked == true){
      return findProductsByCategory(searchInput.value);
    }
    else if(name.checked == true){
      return findProductByName(searchInput.value);
    }
    else if(price.checked ==true){
      return findProductsByPrice(searchInput.value);
    }
    else if(quantity.checked ==true){
      return findProductsByQuantity(searchInput.value);
    }
    else{
      return null;
    }
  }

  // ------------------------Search Functions End----------------------------------------
  

  // ------------------------ Event listener -------------------------------------------
  document.addEventListener("DOMContentLoaded", ()=>{
      const sort = document.getElementById("sort");
      sort.addEventListener("click", ()=>{
        const type = document.getElementById("selecttag");
        DisplayProductsList(sortSelect(type.value));
      })

      const search = document.getElementById("search");
      search.addEventListener("click", ()=>{
        DisplayProductsList(searchSelect());
      })
  })
  // -----------------------Event Lister Ends -------------------------------------------------

  // -----------------------Showing Results -------------------------------------------------


  function DisplayProductsList(results){
    const list = document.getElementById("out");
    list.innerHTML=" ";
    results.forEach(product=>{
      const listItem = document.createElement('li');
      listItem.textContent = product.name;
      list.appendChild(listItem);
    })
  }
