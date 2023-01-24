class CartQuantity {
    render(count) {
        const htmlCatalogQuantity =
            `
        <span class="cart__quantity">${count}</span>
            `;

        const ROOT__QUANTITY = document.querySelector('.cart__text');

        const html =
            `
            <div class="cart__text">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    ${htmlCatalogQuantity}
        </div>
    `;

        ROOT__QUANTITY.innerHTML = html;

    }
}

const cartQuantity = new CartQuantity();
export default cartQuantity;




