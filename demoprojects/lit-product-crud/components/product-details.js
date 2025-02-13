import { LitElement, html, css } from 'lit';

class ProductDetails extends LitElement {
    static styles = css`
        :host { display: block; padding: 20px; }
    `;

    static get properties() {
        return { productId: { type: String } };
    }

    constructor() {
        super();
        this.product = null;
    }

    connectedCallback() {
        super.connectedCallback();
        const products = JSON.parse(localStorage.getItem('products')) || [];
        this.product = products.find(p => p.id == this.productId);
    }

    render() {
        return this.product ? html`
            <h2>Product Details</h2>
            <p><strong>Name:</strong> ${this.product.name}</p>
            <p><strong>Price:</strong> $${this.product.price}</p>
            <a href="/">Back to List</a>
        ` : html`<p>Product not found!</p>`;
    }
}

customElements.define('product-details', ProductDetails);
