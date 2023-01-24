import CATALOG from './catalog.js'
import { navigateToUrl } from './routing.js'
import cartProducts from './cart-products.js'

class Products {

    render() {

        const getProducts = cartProducts.getProducts();

        let htmlCatalog = '';
        const ROOT_PRODUCTS = document.querySelector('.product-grid')
        CATALOG.forEach(({ id, name, price, imgLeft, imgCenter, imgRight, oldPrice, available, term, filter }) => {
            htmlCatalog += `
                <li class="product-grid__item" data-filter="${filter}" data-price="${price}">
                        <article class="product" data-id="${id}">
                            <div class="product__image">
                                <div class="product__switch image-switch">
                                    <div class="image-switch__item">
                                        <div class="image-switch__img"><img src="${imgLeft}" /></div>
                                    </div>
                                    <div class="image-switch__item">
                                        <div class="image-switch__img"><img src="${imgCenter}" /></div>
                                    </div>
                                    <div class="image-switch__item">
                                        <div class="image-switch__img"><img src="${imgRight}" /></div>
                                    </div>
                                </div>
                                <ul class="product_image-pagination image-pagination" aria-hidden="true"></ul>
                            </div>
                            <h3 class="product__title">
                                <a href="" class="more-detailed" data-id="${id}">${name}</a>
                            </h3>
                            <div class="product__props">
                                <span class="product__rating">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                                    </svg>
                                    4,5
                                </span>
                                <span class="product__testimonials">83 отзыва</span>
                            </div>
                            <div class="product__info">
                                <span class="product__term">Артикул: ${term}</span>
                                <span class="product__available">В наличии: ${available} шт</span>
                            </div>
                            <div class="product__price product-price">
                                <span class="product-price__current">${price} BYN</span>
                                <span class="product-price__old">${oldPrice} BYN</span>
                            </div>
                            <button class="product__btn btn"  data-id="${id}" ${getProducts.some((item) => item.id == id) ? "disabled" : "null"}>Добавить в корзину</button>
                        </article>
                </li>
            `;
        });

        const html = `
        <ul class="product-grid elastic" id="products">
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

        const addToProduct = document.querySelectorAll(".more-detailed");
        addToProduct.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                const btn = event.target;
                const productId = btn.dataset.id;
                navigateToUrl(`/catalog/product/${productId}`)
            });
        })
    }
}


const productsPage = new Products();
export default productsPage;




