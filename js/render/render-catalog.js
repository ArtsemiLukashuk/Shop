import catalogTemplate from '../templates/catalog/index.js'
import productsPage from '../products-list.js'
import renderDotOnProductCart from '../render/render-dot-img-switch.js'
import renderCart from '../render/render-cart.js'
import renderCartFullPrice from '../render/render-cart-full-price.js'
import renderCartQuantity from '../render/render-cart-quantity.js'
import sortedCatalogApp from '../sorted-catalog.js'
import searchLive from '../search.js'

const rootDiv = document.querySelector('main');

export default function renderCatalog() {
    rootDiv.innerHTML = catalogTemplate;
    productsPage.render();
    renderDotOnProductCart();
    renderCart();
    renderCartFullPrice();
    renderCartQuantity();
    sortedCatalogApp();
    searchLive();
}





