import page from 'page';
import './components/product-list.js';
import './components/product-form.js';
import './components/product-details.js';

const app = document.getElementById('app');

const render = (component) => {
    app.innerHTML = '';
    app.appendChild(new component());
};

page('/', () => render(customElements.get('product-list')));
page('/add', () => render(customElements.get('product-form')));
page('/details/:id', (ctx) => {
    const details = new (customElements.get('product-details'))();
    details.productId = ctx.params.id;
    render(details);
});

page.start();
