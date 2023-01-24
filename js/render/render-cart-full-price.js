import cartProducts from '../cart-products.js'

export function renderCartTtlPrice() {
    const ttlprice = document.querySelectorAll('.cart-product__ttlprice-modal');
    const tempTtlPrice = Array.from(ttlprice).reduce((result, curr) => {
        return result += (parseInt(curr.textContent))
    }, 0)
    printTtlPrice(tempTtlPrice);
}

export const printTtlPrice = (ttlprice) => {
    document.querySelectorAll('.ttlprice').forEach(element => {
        element.textContent = `${ttlprice} BYN`;
    });
};

export default function renderCartFullPrice() {
    const fullprice = document.querySelectorAll('.cart-product__price');
    cartProducts.products.forEach((product) => {
        let count = product.count;
        const tempFullPrice = Array.from(fullprice).reduce((result, curr) => {
            return result += (parseInt(curr.textContent)) * count
        }, 0)
        printFullPrice(tempFullPrice);
    })
}

export const printFullPrice = (fullprice) => {
    document.querySelector('.fullprice').textContent = `${fullprice} BYN`;
};






