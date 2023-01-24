import storageService from './storage-service.js';

class CartProducts {
    constructor(products) {
        this.products = products;
    }

    add(newProduct) {
        this.products = [...this.products, newProduct];
    }

    delete(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    getProducts() {
        return this.products;
    }

    updateProduct(id, params) {
        this.products = this.products.map((product) => {
            if (product.id === id) {
                return { ...product, ...params };
            }

            return product;
        });
    }
}

const products = JSON.parse(storageService.get('cartProducts'));

const cartProducts = new CartProducts(products || []);

export default cartProducts;


