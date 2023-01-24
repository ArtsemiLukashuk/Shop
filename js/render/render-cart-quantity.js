import currentUser from '../current-user.js'
import cartProducts from '../cart-products.js'
import cartQuantity from '../templates/cart-quantity/index.js'



export default function renderCartQuantity() {

    if (currentUser.userData) {

        let arr = [];

        const currentUserId = currentUser.userData.id;

        cartProducts.products
            .filter((product) => product.userId === currentUserId)
            .forEach((product) => {
                arr.push(product)
            });

        cartQuantity.render(arr.length)

        const cart = document.querySelector('.cart');

        arr.length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
    }
}
