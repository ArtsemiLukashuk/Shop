import cartProducts from './cart-products.js'
import deleteProduct from './cart-operations/delete-Product.js'
import calculateSeparateProduct from './render/render-cart-ttl-price.js'
import renderCart from './render/render-cart.js'
import renderCartFullPrice, { renderCartTtlPrice } from './render/render-cart-full-price.js'

class CartModalPage {

    render() {
        let htmlCatalog = '';
        const ROOT_PRODUCTS = document.querySelector('.order-modal__list');

        cartProducts.products.forEach((product) => {
            htmlCatalog += `
            <li class="cart-product cart-product__modal" id="product-${product.id}">
            <div class="cart-product-img__wrapper">
            <img src="${product.imgLeft}" alt="macbook" class="cart-product__img cart-product__img-modal">
            </div>
                <h3 class="cart-product__title cart-title__modal">${product.name}</h3>
                <div class="cart-product__text">
                    <div class="cart-product__clarifying">
                        <div class="cart-product__quantity cart-product__quantity-modal">
                            <button id='product-${product.id}' type="button" class="cart-product__minus minus minus-modal">-</button>
                            <input class="cart-product__value input" data-price="${product.price}" type="text" value='${product.count}'>
                            <button id='product-${product.id}' type="button" class="cart-product__plus plus plus-modal">+</button>
                        </div>
                        <div class="cart-product__ttlprice cart-product__ttlprice-modal">${product.ttlprice} BYN</div>
                    </div>
                </div>
                <div class="cart-product__delete cart-product__delete-modal" aria-label="Удалить товар"></div>
            </li>
            `;
        });

        const html = `
        <ul class="order-modal__list">
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
        cartProducts.products.forEach((product) => {
            const cartProductDeleteBtn = document.querySelector(`#product-${product.id} .cart-product__delete-modal`);
            const cartProductPlusBtn = document.querySelector(`#product-${product.id} .plus-modal`);
            const cartProductMinusBtn = document.querySelector(`#product-${product.id} .minus-modal`);
            cartProductDeleteBtn.addEventListener('click', deleteProduct);
            cartProductPlusBtn.addEventListener('click', calculateSeparateProduct);
            cartProductMinusBtn.addEventListener('click', calculateSeparateProduct)
        });
    }
}

const modal = new GraphModal({
    isOpen: (modal) => {
        cartModalPage.render();
        renderCart();
        renderCartTtlPrice();
        renderCartFullPrice();
    },
    isClose: () => {
    }
});

const cartModalPage = new CartModalPage();
export default cartModalPage;





