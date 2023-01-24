import CATALOG from '../catalog.js'
import { getListIdByUrl } from '../utils.js'
import sliderSwiper from '../slider-swipe.js'
import renderCart from '../render/render-cart.js'
import { createProduct } from '../templates/product-Page/index.js'
import renderCartFullPrice from '../render/render-cart-full-price.js'
import renderCartQuantity from '../render/render-cart-quantity.js'

export default function renderProductPage() {
    const productId = getListIdByUrl();

    const product = CATALOG.find((product) => product.id === productId);

    if (product) {
        createProduct(product);
    }
    renderCart();
    renderCartFullPrice();
    renderCartQuantity();
    sliderSwiper();
}
