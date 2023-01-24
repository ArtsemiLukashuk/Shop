import { filter } from '../sorted-catalog.js'
import { navigateToUrl, CATALOG_URL } from '../routing.js'

const productBtn = document.querySelectorAll('.product-btn')
export default function renderLinkFilter() {
    productBtn.forEach((button) => {
        button.onclick = (event) => {
            event.preventDefault();
            navigateToUrl(CATALOG_URL);
            const currentBtn = button.dataset.filter;
            const products = document.querySelectorAll('.product-grid__item');
            filter(currentBtn, products);
        }
    })


    const catalog = document.querySelector('.catalog');
    catalog.onclick = (event) => {
        event.preventDefault();
        navigateToUrl(CATALOG_URL);
    }
}
