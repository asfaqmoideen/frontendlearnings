const products = [
    { id: 1, name: "Phone", price: 2000, quantity: 20 },
    { id: 2, name: "Laptop", price: 50000, quantity: 10 },
    { id: 3, name: "Headphones", price: 1500, quantity: 30 },
  ];
  
  const grid = document.getElementById("product-grid");
  const modal = document.getElementById("edit-modal");
  const form = document.getElementById("edit-form");
  const cancelButton = document.getElementById("cancel-button");
  
  let currentProductId = null;
  
  // Render products
  function renderProducts() {
    grid.innerHTML = "";
    products.forEach((product) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <div class="actions">
          <button class="edit" onclick="editProduct(${product.id})">✏️</button>
          <button class="delete" onclick="deleteProduct(${product.id})">❌</button>
        </div>
      `;
      grid.appendChild(tile);
    });
  }
  
  // Edit product
  function editProduct(id) {
    currentProductId = id;
    const product = products.find((p) => p.id === id);
    form.name.value = product.name;
    form.price.value = product.price;
    form.quantity.value = product.quantity;
    modal.classList.remove("hidden");
  }
  
  // Delete product
  function deleteProduct(id) {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      renderProducts();
    }
  }
  
  // Save edited product
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = products.find((p) => p.id === currentProductId);
    if (product) {
      product.name = form.name.value;
      product.price = parseInt(form.price.value, 10);
      product.quantity = parseInt(form.quantity.value, 10);
      renderProducts();
      modal.classList.add("hidden");
    }
  });
  
  // Cancel edit
  cancelButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  
  // Initial render
  renderProducts();
  