import { getId } from '../utils.js';
import cartProducts from '../cart-products.js'
import renderCart from '../render/render-cart.js'
import storageService from '../storage-service.js';
import renderCartQuantity from '../render/render-cart-quantity.js'
import renderCartFullPrice from '../render/render-cart-full-price.js'
import productsPage from '../products-list.js'
import { currentUrl, CATALOG_URL } from '../routing.js'

function deleteProduct(event) {
    event.preventDefault();

    const { parentNode } = event.target.closest('.cart-product__delete');

    const productId = getId(parentNode);

    cartProducts.delete(productId);

    parentNode.remove();

    storageService.set('cartProducts', JSON.stringify(cartProducts.products));

    if (currentUrl === CATALOG_URL) {
        productsPage.render();
    }

    renderCart();

    renderCartFullPrice();

    renderCartQuantity();
}

export default deleteProduct;


