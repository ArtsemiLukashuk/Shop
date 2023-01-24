import { getId } from '../utils.js';
import cartProducts from '../cart-products.js';
import renderCart from '../render/render-cart.js'
import storageService from '../storage-service.js';
import renderCartFullPrice, { renderCartTtlPrice } from '../render/render-cart-full-price.js'

const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
};

const calculateSeparateTtlPrice = (productItem, action) => {

    const input = productItem.querySelector('.cart-product__value');

    switch (action) {
        case ACTION.PLUS:
            input.value++
            break;
        case ACTION.MINUS:
            input.value--
            break;
    }

    const productId = getId(productItem);

    cartProducts.updateProduct(productId, { count: input.value });

    let cartProductPrice = input.dataset.price;
    const getItemSubTotalPrice = (input) => Number(input.value) * cartProductPrice;
    productItem.querySelector('.cart-product__ttlprice').textContent = `${getItemSubTotalPrice(input)} BYN`;
    cartProducts.updateProduct(productId, { ttlprice: getItemSubTotalPrice(input) });

    storageService.set('cartProducts', JSON.stringify(cartProducts.products));
    renderCart();
    renderCartFullPrice();
    renderCartTtlPrice();
};

function calculateSeparateProduct(event) {

    const li = event.target.closest('li');

    const input = li.querySelector('input[type="text"]');

    if (event.target.classList.contains('minus')) {
        if (Number(input.value) !== 1) {
            calculateSeparateTtlPrice(li, ACTION.MINUS);
        }
    }
    if (event.target.classList.contains('plus')) {
        if (Number(input.value) !== 99) {
            calculateSeparateTtlPrice(li, ACTION.PLUS);
        }
    }
}

export default calculateSeparateProduct;