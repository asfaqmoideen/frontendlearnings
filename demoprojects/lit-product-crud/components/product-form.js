import { LitElement, html, css } from 'lit';

class ProductForm extends LitElement {
    static styles = css`
        :host { display: block; padding: 20px; }
        form { display: flex; flex-direction: column; max-width: 300px; }
        input, button { margin: 10px 0; padding: 10px; }
    `;

    constructor() {
        super();
        this.name = '';
        this.price = '';
    }

    updateName(e) {
        this.name = e.target.value;
    }

    updatePrice(e) {
        this.price = e.target.value;
    }

    saveProduct(e) {
        e.preventDefault();
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ id: Date.now(), name: this.name, price: this.price });
        localStorage.setItem('products', JSON.stringify(products));
        window.location.href = '/';
    }

    render() {
        return html`
            <h2>Add Product</h2>
            <form @submit="${this.saveProduct}">
                <input type="text" placeholder="Product Name" @input="${this.updateName}" required />
                <input type="number" placeholder="Price" @input="${this.updatePrice}" required />
                <button type="submit">Save</button>
            </form>
        `;
    }
}

customElements.define('product-form', ProductForm);
