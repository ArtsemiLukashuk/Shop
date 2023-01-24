import logout from '../auth/logout.js';
import currentUser from '../current-user.js'
import cartProducts from '../cart-products.js'
import cartTemplate from '../templates/cart-modal/index.js'
import addProduct, { createProduct } from '../cart-operations/add-product.js'

const rootDiv = document.querySelector('.cart-content')
export default function renderCart() {

    const addToProductBtn = document.querySelectorAll(".product__btn");

    if (!currentUser.userData) {
        addToProductBtn.forEach((element) => {
            element.addEventListener("click", errorPleaseRegister);
        })
    } else {
        rootDiv.innerHTML = cartTemplate;

        addToProductBtn.forEach((element) => {
            element.addEventListener("click", addProduct);
        })

        cartProducts.products
            .filter((product) => product.userId === currentUser.userData.id)
            .forEach((product) => {
                createProduct(product)
            });

        const logoutBtn = document.querySelector(".logout");
        logoutBtn.addEventListener("click", (event) => logout(event))
    }
}

function errorPleaseRegister() {
    const pleaseRegister = document.querySelectorAll(".please-register");
    pleaseRegister.forEach((element) => {
        element.classList.add('active');
    })
}
