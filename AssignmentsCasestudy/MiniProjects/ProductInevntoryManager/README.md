# Product Inventory Manager

A basic software tool that create, update and apply discounts to products. This is the solution for Problem Statement 1

```
Problem Statement 1: Product Management System
Objective: Create a system to manage products in a manufacturing company.Requirements:Implement functions to add new products, list existing products, and update product information (e.g., price).
Each product should have a unique identifier, name, and price.
Create a function to apply discounts to all products based on a percentage.
Ensure that you can handle edge cases, such as trying to update a product that doesn't exist.
```

### Business Logic Methods

* addProduct()
* updateProduct()
* applyDiscount()

#### addProduct()

* paramter -> product object
* return type boolean depending succesfull operation
* Funtionality Adds product object to the productsArray if the id is unique

#### updateProduct()

* paramter -> product object
* return type boolean depending succesfull operation
* Funtionality edits product object to the productsArray if the id exists

#### applyDiscount()

* parameter -> discount percentage as input
* applies discount to all products


### UI Logic Methods

* compileProductObjectAdd()
* compileProductObjectUpdate()
* updateProductList()

#### compileProductObjectAdd() & compileProductObjectUpdate()

* gets products object parameter values from textbox DOM and returns as object

#### updateProductList()

* Displays the product list as HTML List shows to the user.
* create list elements for every object present in the array.
