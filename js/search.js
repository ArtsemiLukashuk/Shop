function searchLive() {
    let input = document.querySelector('.filter-input');

    input.oninput = function () {
        let value = this.value.trim();
        let productTitle = document.querySelectorAll('.product__title a');

        if (value) {
            productTitle.forEach(element => {
                if (element.textContent.toLocaleLowerCase().search(value) == -1 && element.textContent.toUpperCase().search(value) == -1) {
                    element.closest('.product-grid__item').classList.add('hide');
                }
            });
        } else {
            productTitle.forEach(element => {
                element.closest('.product-grid__item').classList.remove('hide');
            });
        }
    };
}

export default searchLive;
