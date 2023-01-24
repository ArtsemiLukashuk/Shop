import CATALOG from '../catalog.js'
import { generateId } from '../utils.js';
import currentUser from '../current-user.js'
import cartProducts from '../cart-products.js'
import deleteProduct from './delete-Product.js'
import storageService from '../storage-service.js'
import renderCartQuantity from '../render/render-cart-quantity.js'
import renderCartFullPrice from '../render/render-cart-full-price.js'

export function createProduct({ id, name, price, imgLeft, count, }) {
    const ul = document.querySelector('.cart-content__list');
    const li = document.createElement('li');
    li.classList.add('cart-product');
    li.setAttribute('id', `product-${id}`);
    li.setAttribute('data-id', `${id}`);
    ul.appendChild(li);
    const getProducts = cartProducts.getProducts();
    li.innerHTML = `
            <div class="cart-product-img__wrapper">
            <img src="${imgLeft}" alt="macbook" class="cart-product__img">
            </div>
            <div class="cart-product__text">
                <h3 class="cart-product__title">${name}</h3>
                <div class="cart-product__count">Количество: <span>${count}</span> шт</div>
                <div class="cart-product__clarifying">
                    <span class="cart-product__price">${price} BYN</span>
                </div>
                </div>
            </div>
            <button ${getProducts.some((item) => item.id == id) ? "dasdasdsa" : " "} data-id="${id}" class="cart-product__delete" aria-label=">Удалить товар"></button>
        `;

    const cartProductDeleteBtn = document.querySelector(`#product-${id} .cart-product__delete`);
    cartProductDeleteBtn.addEventListener('click', deleteProduct);
}

export default function addProduct(event) {
    const btn = event.target;
    const productId = btn.dataset.id;
    const product = CATALOG.find(item => item.id == productId);
    let count = 1;
    btn.setAttribute('disabled', "");

    const newProduct = {
        ...product,
        id: generateId(cartProducts.products),
        userId: currentUser.userData.id,
        count,
    };

    cartProducts.add(newProduct);

    createProduct(newProduct);

    renderCartFullPrice();

    renderCartQuantity();

    storageService.set('cartProducts', JSON.stringify(cartProducts.products));
}
